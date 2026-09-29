import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-300.woff2', weight: '300', style: 'normal' },
    { path: '../../fonts/lato/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/lato/normal-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-body',
})

const C = {
  mesa: '#F8F1E3',
  mesaSoft: '#F1E6D0',
  tinta: '#2E1E10',
  madera: '#4A2E17',
  maderaDeep: '#331E0D',
  mantel: '#B93524',
  muted: '#7A6852',
  line: 'rgba(46,30,16,0.15)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
)

export const metadata: Metadata = demoMetadata({
  slug: 'cocineria-los-troncos',
  title: 'Cocinería Los Troncos — Comida casera en Pencahue',
  description:
    'Cocinería familiar en Pencahue, Maule. Cazuelas, pescado frito y platos de olla al almuerzo. Consultas por WhatsApp.',
  image: `${IMG}/cazuela.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const PLATOS = [
  { src: 'cazuela', alt: 'Cazuela de vacuno con choclo, papas y cilantro fresco', nombre: 'Cazuela', detalle: 'De vacuno, con choclo y papas' },
  { src: 'paila', alt: 'Paila de mariscos con caldo caliente y ensalada', nombre: 'Paila de mariscos', detalle: 'Caliente, con su ensalada' },
  { src: 'pescado', alt: 'Pescado frito con papas fritas y limón', nombre: 'Pescado frito', detalle: 'Con papas caseras' },
  { src: 'palta', alt: 'Paltas rellenas con choclo y pebre', nombre: 'Palta rellena', detalle: 'Fresca, de temporada' },
  { src: 'torta', alt: 'Torta casera de manjar con nueces y merengue', nombre: 'Torta casera', detalle: 'Para el té' },
] as const

const RESENAS = [
  {
    nombre: 'Catalina Letelier',
    texto: 'Excelente lugar para ir a almorzar en familia y disfrutar de ricas comidas caseras a buen precio.',
  },
  {
    nombre: 'Marcia Yañez',
    texto: 'Lugar tradicional, ambiente grato y familiar. La atención es amable y eficiente; los platos, abundantes y sabrosos.',
  },
  {
    nombre: 'Cecilia Isabel Alarcón',
    texto: 'Restaurante familiar, buena comida, excelente dueña.',
  },
]

/** Mantel a cuadros: franja CSS que reproduce el mantel del comedor real. */
function Mantel() {
  return (
    <div
      aria-hidden="true"
      className="h-5 w-full"
      style={{
        backgroundColor: '#FDF8EC',
        backgroundImage: `
          repeating-linear-gradient(0deg, ${C.mantel} 0px, ${C.mantel} 10px, transparent 10px, transparent 20px),
          repeating-linear-gradient(90deg, ${C.mantel} 0px, ${C.mantel} 10px, transparent 10px, transparent 20px)`,
        backgroundBlendMode: 'multiply',
        opacity: 0.92,
      }}
    />
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
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

export default function CocineriaLosTroncosPage() {
  return (
    <div
      className={`${body.className} lt min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.mesa, color: C.tinta }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .lt a:focus-visible { outline: 2px solid ${C.mantel}; outline-offset: 3px }
        .lt .btn { transition: transform 0.16s ease, filter 0.16s ease }
        .lt .btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .lt .btn:active { transform: translateY(0) scale(0.97) }
        .lt .arco { border-radius: 999px 999px 14px 14px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(248,241,227,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.mantel,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la mesa puesta ── */}
      <section id="inicio" className="relative pt-[96px] md:pt-[120px] pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4" style={{ color: C.mantel }}>
                Cocinería · Pencahue, Maule
              </p>
              <h1 className={`${display.className} leading-[1.02] text-5xl md:text-7xl mb-6`} style={{ color: C.maderaDeep }}>
                Comida de olla,
                <br />
                <em className="not-italic" style={{ color: C.mantel }}>como en casa</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                Cazuelas, pescado frito y platos abundantes en una cocinería familiar de Pencahue. Almuerzos de lunes a viernes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-bold rounded-full tap-44"
                  style={{ backgroundColor: C.mantel, color: '#FFFFFF' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-bold rounded-full border-2 tap-44"
                  style={{ borderColor: C.madera, color: C.madera }}
                >
                  Cómo llegar
                </a>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <Stars value={4} color={C.mantel} className="w-[18px] h-[18px]" />
                <p className="text-sm font-bold" style={{ color: C.madera }}>
                  {BIZ.rating} en Google · {BIZ.reviewsCount} reseñas
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative mx-auto max-w-[340px] md:max-w-[400px]">
                <div className="arco overflow-hidden border-[10px] relative aspect-[3/4] shadow-2xl" style={{ borderColor: '#FFFDF6' }}>
                  <Image
                    src={`${IMG}/cazuela.webp`}
                    alt="Cazuela humeante con choclo y carne servida sobre mantel a cuadros"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <p
                  className={`${display.className} absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-lg px-5 py-2 shadow-lg`}
                  style={{ backgroundColor: C.maderaDeep, color: C.mesa, rotate: '-1.5deg' }}
                >
                  La cazuela de todos los días
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Mantel />

      {/* ── La cocina ── */}
      <section id="cocina" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-6xl leading-none`} style={{ color: C.maderaDeep }}>
              Lo que sale
              <br />
              de la olla
            </h2>
            <p className="text-sm md:text-base max-w-xs" style={{ color: C.muted }}>
              Platos caseros del día, servidos en porciones de cocinería de verdad.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {PLATOS.map((p, i) => (
              <Reveal key={p.src} delay={i * 80} className={i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}>
                <figure className="h-full">
                  <div className={`relative overflow-hidden rounded-xl ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={`${IMG}/${p.src}.webp`}
                      alt={p.alt}
                      fill
                      sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="pt-3">
                    <p className={`${display.className} text-xl md:text-2xl leading-tight`} style={{ color: C.maderaDeep }}>
                      {p.nombre}
                    </p>
                    <p className="text-sm" style={{ color: C.muted }}>{p.detalle}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.maderaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="mb-10 md:mb-12">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-tight mb-3`} style={{ color: C.mesa }}>
              Lo dicen los que almuerzan aquí
            </h2>
            <div className="flex items-center gap-3">
              <Stars value={4} color={C.mantel} className="w-[18px] h-[18px]" />
              <p className="text-sm font-bold" style={{ color: 'rgba(248,241,227,0.75)' }}>
                {BIZ.rating} en Google · {BIZ.reviewsCount} reseñas reales
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 110}>
                <blockquote className="h-full rounded-xl p-6 border" style={{ backgroundColor: 'rgba(248,241,227,0.06)', borderColor: 'rgba(248,241,227,0.18)' }}>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(248,241,227,0.92)' }}>
                    “{r.texto}”
                  </p>
                  <cite className="not-italic text-xs uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(248,241,227,0.55)' }}>
                    {r.nombre} · Google
                  </cite>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center mb-12">
            <Reveal>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-tight mb-5`} style={{ color: C.maderaDeep }}>
                Casa de madera,
                <br />
                puertas abiertas
              </h2>
              <p className="text-base leading-relaxed mb-4 max-w-md" style={{ color: C.muted }}>
                Un local sencillo y familiar al costado del camino, con mesas de mantel a cuadros y estacionamiento afuera. A orillas de la laguna de Pencahue.
              </p>
              <p className="text-base font-bold" style={{ color: C.madera }}>
                {BIZ.horario} · almuerzos
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image src={`${IMG}/exterior.webp`} alt="Fachada rústica de madera de la Cocinería Los Troncos con el letrero abierto" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mt-8">
                  <Image src={`${IMG}/comedor.webp`} alt="Comedor interior con mesas de mantel a cuadros rojo" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative aspect-[16/7] overflow-hidden rounded-xl">
              <Image src={`${IMG}/laguna.webp`} alt="Laguna de Pencahue con cisnes y peces junto a la cocinería" fill sizes="100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="py-16 md:pb-20" style={{ backgroundColor: C.mesaSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-tight mb-5`} style={{ color: C.maderaDeep }}>
              Almuerzo en Pencahue
            </h2>
            <address className="not-italic text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.city}, región del {BIZ.region}
              <br />
              {BIZ.horario}
            </address>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-bold rounded-full tap-44"
                style={{ backgroundColor: C.mantel, color: '#FFFFFF' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-bold rounded-full border-2 tap-44"
                style={{ borderColor: C.madera, color: C.madera }}
              >
                Abrir en Google Maps
              </a>
            </div>
            <p className="text-sm" style={{ color: C.muted }}>
              Escríbenos por WhatsApp para confirmar el plato del día o consultar por fines de semana.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border-4 min-h-[280px]" style={{ borderColor: C.madera }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.maderaDeep, color: C.mesa }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} text-2xl mb-1.5`}>{BIZ.short}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(248,241,227,0.62)' }}>
              {BIZ.city}, {BIZ.region} · {BIZ.horario}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(248,241,227,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(248,241,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(248,241,227,0.7)' }}>
            Textos y platos de muestra según fotos reales del local. Teléfono, comuna, reseñas y horario publicado en Google son reales.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
