import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-body',
})

const C = {
  paper: '#FAF3E4',
  paperSoft: '#F3E9D3',
  ink: '#241B12',
  muted: '#6B5D4C',
  red: '#B3131A',
  redDeep: '#8C0E14',
  line: 'rgba(36,27,18,0.16)',
  board: '#1C150E',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
)

export const metadata: Metadata = demoMetadata({
  slug: 'plaza-recova-cafeteria-y-restaurant',
  title: 'Plaza Recova Cafetería y Restaurant — Yerbas Buenas',
  description:
    'Cafetería y restaurant en Max Jara 14, Yerbas Buenas. Sándwiches, completos, pizzas y tortas caseras junto a la recova. Pedidos por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El comedor', href: '#comedor' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const TICKER = ['Completos', 'Chacareros', 'Pizzas familiares', 'Tortas caseras', 'Colaciones', 'Té y café']

const CARTA = [
  {
    grupo: 'Sándwiches y completos',
    nota: 'en pan fresco, abundantes',
    items: ['Completo italiano', 'Chacarero con chilena', 'Barros luco', 'Ave palta', 'Lomo a lo pobre'],
  },
  {
    grupo: 'Para el almuerzo',
    nota: 'colaciones y promos del día',
    items: ['Colación del día', 'Pizza familiar', 'Pizza individual', 'Ensaladas'],
  },
  {
    grupo: 'Dulce y cafetería',
    nota: 'de la vitrina',
    items: ['Torta casera', 'Kuchen del día', 'Té y café', 'Jugos naturales'],
  },
]

const RESENAS = [
  {
    nombre: 'Marjorie Diaz Avila',
    texto:
      'Agradable lugar, deliciosa comida, precios al alcance del bolsillo y una cordial y cálida atención. Lo recomiendo al 100%.',
  },
  {
    nombre: 'Rodrigo Ernesto de la Fuente',
    texto:
      'Exquisitos sándwiches, abundante comida para el precio, buenas promociones. Y una atención personalizada muy buena, atendida por sus propios dueños.',
  },
]

function Papel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`border ${className}`}
      style={{ backgroundColor: C.paperSoft, borderColor: C.line, boxShadow: '4px 4px 0 rgba(36,27,18,0.12)' }}
    >
      {children}
    </div>
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

export default function PlazaRecovaPage() {
  return (
    <div
      className={`${body.className} pr min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .pr a:focus-visible { outline: 2px solid ${C.red}; outline-offset: 3px }
        .pr .btn { transition: transform 0.16s ease, filter 0.16s ease }
        .pr .btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .pr .btn:active { transform: translateY(0) scale(0.97) }
        @keyframes prTicker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .pr-ticker { animation: prTicker 26s linear infinite }
        @media (prefers-reduced-motion: reduce) { .pr-ticker { animation: none } }
        .pr-menu-item { border-bottom: 1px dashed ${C.line} }
        .pr-menu-item:last-child { border-bottom: 0 }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(250,243,228,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: mostrador de la cafetería ── */}
      <section id="inicio" className="relative pt-[92px] md:pt-[110px] pb-14 md:pb-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-extrabold mb-4" style={{ color: C.redDeep }}>
              Cafetería y restaurant · Yerbas Buenas
            </p>
            <h1 className={`${display.className} uppercase leading-[0.95] text-5xl md:text-7xl mb-5`} style={{ color: C.ink }}>
              De la cocina
              <br />
              de la recova
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Sándwiches abundantes, tortas de la vitrina y colación del día, a pasos de la plaza de Yerbas Buenas. Atendido por sus dueños.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-extrabold tap-44"
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-extrabold border-2 tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative" style={{ rotate: '1.2deg' }}>
              <div className="bg-white p-3 md:p-4 shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Sándwich de Plaza Recova servido en plato, con el logo de la cafetería en el mantel"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex items-center justify-between pt-3 px-1">
                  <p className={`${display.className} uppercase text-lg leading-none`} style={{ color: C.red }}>
                    El clásico de la casa
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.muted }}>
                    Max Jara 14
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-4" style={{ borderColor: C.paper }} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/logo.webp`} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta roja: lo que sale de la cocina ── */}
      <div className="overflow-hidden py-3" style={{ backgroundColor: C.red }} aria-hidden="true">
        <div className="pr-ticker flex whitespace-nowrap w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={`${dup}-${i}`} className={`${display.className} uppercase tracking-[0.08em] text-lg md:text-xl text-white px-6`}>
                  {t} <span className="ml-6" style={{ color: 'rgba(255,255,255,0.55)' }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La carta ── */}
      <section id="carta" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-10 md:mb-14">
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none mb-3`} style={{ color: C.ink }}>
              La carta
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto" style={{ color: C.muted }}>
              Lo de siempre y lo del día. Las promos se avisan en la pizarra del local.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {CARTA.map((g, gi) => (
              <Reveal key={g.grupo} delay={gi * 120}>
                <Papel className="h-full p-6 md:p-7">
                  <p className={`${display.className} uppercase text-2xl leading-tight mb-1`} style={{ color: C.red }}>
                    {g.grupo}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] font-bold mb-5" style={{ color: C.muted }}>
                    {g.nota}
                  </p>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it} className="pr-menu-item flex items-baseline gap-2 py-2.5 text-base font-semibold" style={{ color: C.ink }}>
                        <span aria-hidden="true" style={{ color: C.red }}>·</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </Papel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recién salidos ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="mb-8 md:mb-10">
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-none`} style={{ color: C.ink }}>
              Recién salidos
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { src: 'sandwich-chacarero', alt: 'Sándwich chacarero con chilena y choclo servido en plato', label: 'Chacarero' },
              { src: 'sandwich-palta', alt: 'Sándwich con palta, carne mechada y choclo', label: 'Ave palta' },
              { src: 'pizzas', alt: 'Dos pizzas familiares recién horneadas en sus cajas', label: 'Pizzas familiares' },
              { src: 'tortas', alt: 'Tortas y kuchenes caseros en la vitrina', label: 'Tortas caseras' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90} className={i % 2 ? 'md:translate-y-6' : ''}>
                <figure className="bg-white p-2 shadow-md">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <figcaption className={`${display.className} uppercase text-center text-sm md:text-base py-2`} style={{ color: C.ink }}>
                    {f.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El comedor ── */}
      <section id="comedor" className="py-16 md:py-24" style={{ backgroundColor: C.board }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={`${IMG}/comedor.webp`} alt="Comedor de Plaza Recova con mesas y el logo pintado en la muralla" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden mt-8">
                <Image src={`${IMG}/local.webp`} alt="Vista del local hacia el mesón de atención y la vitrina" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-none mb-5`} style={{ color: C.paper }}>
              El comedor de la recova
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(250,243,228,0.78)' }}>
              Mesas limpias, atención de los dueños y porciones generosas. Un clásico de barrio para almorzar sin apuro o para llevar.
            </p>
            <div className="space-y-4">
              {RESENAS.map((r) => (
                <blockquote key={r.nombre} className="border-l-4 pl-4 py-1" style={{ borderColor: C.red }}>
                  <p className="text-sm md:text-base leading-relaxed mb-1.5" style={{ color: 'rgba(250,243,228,0.9)' }}>
                    “{r.texto}”
                  </p>
                  <cite className="not-italic text-xs uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(250,243,228,0.55)' }}>
                    {r.nombre} · reseña en Google
                  </cite>
                </blockquote>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-none mb-5`} style={{ color: C.ink }}>
              A pasos de la plaza
            </h2>
            <address className="not-italic text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, región del {BIZ.region}
            </address>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-extrabold tap-44"
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-6 py-3 text-base font-extrabold border-2 tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir en Google Maps
              </a>
            </div>
            <p className="text-sm" style={{ color: C.muted }}>
              Escríbenos por WhatsApp para pedidos para llevar o para reservar mesa.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-4 min-h-[280px]" style={{ borderColor: C.ink }}>
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
      <footer style={{ backgroundColor: C.board, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} uppercase text-2xl mb-1.5`}>{BIZ.short}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,243,228,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(250,243,228,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,243,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(250,243,228,0.7)' }}>
            Textos y carta de muestra. Dirección, teléfono, reseñas y fotos son reales del negocio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
