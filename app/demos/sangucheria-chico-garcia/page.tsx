import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_DELIVERY, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la muralla amarilla» — el frontis del local es la
 * marca: muro mostaza, menú pintado a mano y el medallón negro festoneado
 * con la cara de Chico Garci. Anton repite el letrero pintado; el borde
 * festoneado del medallón se reproduce como viñeta en toda la página.
 * Acento único: el rojo de «Sanguchería» en el logo.
 */
const C = {
  mostaza: '#E8A30C',
  mostazaSuave: '#F4C452',
  negro: '#171209',
  crema: '#FAF3DF',
  rojo: '#C2281B',
  muted: '#6B5C35',
  line: 'rgba(23,18,9,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'sangucheria-chico-garcia',
  title: 'Sanguchería Chico Garci | Completos y churrascos en Molina',
  description:
    'Sanguchería en Avenida Poniente 2074, Molina: completos, churrascos, lomitos y mechadas. Delivery por WhatsApp. 4,6 en Google con 224 reseñas.',
  image: `${IMG}/sandwich.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Fotos', href: '#fotos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Pedir', href: '#pedir' },
]

const PIZARRA = [
  'Churrascos',
  'Lomitos',
  'Mechadas',
  'Barros Luco',
  'Chacarero',
  'Ave Mayo',
  'Completos',
  'Papas Fritas',
]

const FOTOS = [
  { img: 'plancha.webp', fig: 'PLANCHA', cap: 'carne y panes directo al fierro', alt: 'Carne y panes de sándwich en la plancha de la Sanguchería Chico Garci' },
  { img: 'sandwich.webp', fig: 'CORTE', cap: 'la mechada vista por dentro', alt: 'Sándwich de mechada cortado al medio mostrando el relleno' },
  { img: 'completo.webp', fig: 'EL CLÁSICO', cap: 'completo con su palta y tomate', alt: 'Completo con palta y tomate servido en soporte amarillo' },
  { img: 'papas.webp', fig: 'LA TABLA', cap: 'papas con huevo y carne, como sale', alt: 'Plato de papas fritas con huevos fritos y carne' },
  { img: 'noche.webp', fig: 'DE NOCHE', cap: 'el local encendido en Av. Poniente', alt: 'Frontis amarillo de la sanguchería encendido de noche' },
]

const RESENAS = [
  { nombre: 'J. A. M. O.', texto: '“Los mejores churrascos y completos están en este local y lo mejor es atendidos x sus dueños”', nota: 5 },
  { nombre: 'Lucía Meléndez', texto: '“…buena calidad de sus sándwich y por tener un personal de primer nivel”', nota: 5 },
  { nombre: 'C. O.', texto: '“Muy deliciosos los completos, churrascos… unos de los mejores locales de comida de Molina”', nota: 5 },
  { nombre: 'C. P.', texto: '“prueben la mechada y quedarán fascinados”', nota: 5 },
]

/** Medallón festoneado, como el logo del local. */
function Escarola({ size = 20, color = C.negro }: { size?: number; color?: string }) {
  const r = size / 2
  const bumps = 20
  const dash = (2 * Math.PI * r) / bumps
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" className="shrink-0">
      <circle cx={r} cy={r} r={r - size * 0.1} fill={color} />
      <circle
        cx={r}
        cy={r}
        r={r - size * 0.075}
        fill="none"
        stroke={color}
        strokeWidth={size * 0.11}
        strokeLinecap="round"
        strokeDasharray={`0 ${dash}`}
      />
    </svg>
  )
}

function WhatsIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill={color} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.7 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .1 0 .6-.2 1.1Z" />
    </svg>
  )
}

export default function SangucheriaChicoGarciaPage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.crema, color: C.negro }}>
      <style>{`
        .cg-plato { transition: transform .35s ease; }
        .cg-plato:hover { transform: translateY(-4px); }
        .cg-item { transition: letter-spacing .3s ease, color .3s ease; }
        .cg-item:hover { letter-spacing: .04em; color: ${C.rojo}; }
        @keyframes cg-swing { 0%,100% { transform: rotate(-1.6deg) } 50% { transform: rotate(1.6deg) } }
        @media (prefers-reduced-motion: no-preference) {
          .cg-swing { animation: cg-swing 7s ease-in-out infinite; transform-origin: top center; }
        }
      `}</style>

      <BlitzNav
        name={<span className="uppercase">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(250,243,223,0.97)',
          ink: C.negro,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FAF3DF',
        }}
      />

      {/* ── Hero gráfico: la muralla mostaza + el medallón ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: C.mostaza }}
      >
        {/* medallones pintados en la muralla, como en el frontis */}
        <div className="absolute -left-16 top-24 opacity-[0.14]" aria-hidden="true">
          <Escarola size={220} color={C.negro} />
        </div>
        <div className="absolute -right-14 bottom-16 opacity-[0.14]" aria-hidden="true">
          <Escarola size={260} color={C.negro} />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-16 text-center w-full">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Medallón de la Sanguchería Chico Garci"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto shadow-[0_16px_40px_-14px_rgba(23,18,9,0.55)] cg-swing"
            />
            <p className={`${mono.className} text-[10px] md:text-[11px] font-medium tracking-[0.26em] uppercase mt-6`} style={{ color: C.negro }}>
              Molina · Avenida Poniente 2074
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.94] text-[46px] md:text-8xl mt-4 mx-auto max-w-4xl`}
              style={{ color: C.negro }}
            >
              Los completos que Molina defiende
            </h1>
            <p className="text-[15px] md:text-lg leading-snug mt-5 mx-auto max-w-md" style={{ color: 'rgba(23,18,9,0.78)' }}>
              Sanguchería de barrio: churrascos, mechadas y completos de
              mediodía hasta la noche, atendida por sus dueños.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm px-5 h-12 text-[15px] font-bold tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.rojo, color: C.crema }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#pizarra"
                className="inline-flex items-center rounded-sm px-4 h-12 text-[15px] font-bold tap-44"
                style={{ color: C.negro, border: `2px solid ${C.negro}` }}
              >
                Ver la pizarra
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Nota de Google ── */}
      <section style={{ backgroundColor: C.negro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Reveal className="flex items-center gap-4">
            <span className={`${display.className} text-4xl md:text-5xl leading-none`} style={{ color: C.mostaza }}>
              4,6
            </span>
            <span>
              <Stars value={4.6} color={C.mostaza} className="w-5 h-5" />
              <span className={`${mono.className} block text-[10px] tracking-[0.18em] uppercase mt-1`} style={{ color: 'rgba(250,243,223,0.8)' }}>
                224 reseñas en Google
              </span>
            </span>
          </Reveal>
          <Reveal delay={80} className="text-sm md:text-[15px] leading-snug max-w-md" >
            <span style={{ color: 'rgba(250,243,223,0.85)' }}>
              Molina ya votó: buena carne, completos generosos y atención de
              dueños.
            </span>
          </Reveal>
          <Reveal delay={140}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-flex items-center h-11 px-4 rounded-sm text-[11px] font-semibold tracking-[0.14em] uppercase tap-44`}
              style={{ color: C.negro, backgroundColor: C.mostaza }}
            >
              Ver reseñas en Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La pizarra de la muralla ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.mostazaSuave }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
            <div>
              <Reveal>
                <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.95] max-w-2xl`} style={{ color: C.negro }}>
                  la muralla ya dice todo,
                </h2>
                <p className="text-[15px] md:text-lg mt-4 max-w-md leading-snug" style={{ color: 'rgba(23,18,9,0.7)' }}>
                  el menú está pintado a mano sobre el muro amarillo de la casa,
                  en Avenida Poniente. Tal cual:
                </p>
              </Reveal>
            </div>
            <Reveal delay={120} className="hidden md:block">
              <div className="relative w-52 rounded-sm overflow-hidden shadow-[0_18px_40px_-18px_rgba(23,18,9,0.5)]" style={{ transform: 'rotate(2deg)', border: `1.5px solid ${C.negro}` }}>
                <Image
                  src={`${IMG}/frontis.webp`}
                  alt="Frontis amarillo de la Sanguchería Chico Garci con el menú pintado en la muralla"
                  width={208}
                  height={280}
                  className="w-full h-auto block"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-10 md:mt-14" style={{ borderTop: `2px solid ${C.negro}` }}>
            {PIZARRA.map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <div
                  className="flex items-center gap-4 md:gap-6 py-4 md:py-5"
                  style={{ borderBottom: `2px solid ${C.negro}` }}
                >
                  <Escarola size={18} />
                  <span className={`${display.className} cg-item text-3xl md:text-5xl uppercase leading-none`} style={{ color: C.negro }}>
                    {item}
                  </span>
                  <span className="flex-1 border-t-2 border-dotted mx-2" style={{ borderColor: 'rgba(23,18,9,0.35)' }} aria-hidden="true" />
                  <span className={`${mono.className} hidden md:inline text-[11px] tracking-[0.18em] uppercase shrink-0`} style={{ color: 'rgba(23,18,9,0.6)' }}>
                    muralla
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <div className="flex items-center gap-4 md:gap-6 py-4 md:py-5" style={{ borderBottom: `2px solid ${C.negro}` }}>
                <Escarola size={18} color={C.rojo} />
                <span className={`${display.className} text-3xl md:text-5xl uppercase leading-none`} style={{ color: C.rojo }}>
                  Delivery
                </span>
                <span className="flex-1 border-t-2 border-dotted mx-2" style={{ borderColor: 'rgba(194,40,27,0.4)' }} aria-hidden="true" />
                <a
                  href={WA_LINK_DELIVERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-[11px] md:text-sm font-semibold tracking-[0.1em] shrink-0 tap-44 underline underline-offset-4 decoration-2`}
                  style={{ color: C.rojo }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── De la plancha a la mesa ── */}
      <section id="fotos" className="scroll-mt-20" style={{ backgroundColor: C.negro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.95] max-w-3xl`} style={{ color: C.crema }}>
              de la plancha a la mesa,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-snug" style={{ color: 'rgba(250,243,223,0.7)' }}>
              las fotos son las que ellos mismos comparten en su ficha de Google.
            </p>
          </Reveal>

          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
            {FOTOS.map((f, i) => (
              <Reveal
                key={f.img}
                delay={i * 60}
                className={
                  i === 0
                    ? 'col-span-2 md:col-span-7'
                    : i === 1
                      ? 'col-span-1 md:col-span-5'
                      : i === 2
                        ? 'col-span-1 md:col-span-4'
                        : i === 3
                          ? 'col-span-1 md:col-span-4'
                          : 'col-span-2 md:col-span-4'
                }
              >
                <figure className="cg-plato m-0 h-full">
                  <div className={`relative overflow-hidden rounded-sm ${i === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <Image src={`${IMG}/${f.img}`} alt={f.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
                  </div>
                  <figcaption className="flex items-center gap-3 mt-2.5">
                    <span className={`${mono.className} text-[10px] font-semibold tracking-[0.18em] shrink-0`} style={{ color: C.mostaza }}>
                      {f.fig}
                    </span>
                    <span className="text-xs md:text-sm leading-snug" style={{ color: 'rgba(250,243,223,0.75)' }}>
                      {f.cap}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.95] max-w-3xl`} style={{ color: C.negro }}>
              lo que dice la mesa de al lado,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-snug" style={{ color: C.muted }}>
              reseñas publicadas en Google Maps, tal cual las escribieron.
            </p>
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 60}>
                <blockquote
                  className="h-full rounded-sm px-5 md:px-7 py-5 md:py-6 flex flex-col justify-between m-0"
                  style={{ backgroundColor: '#FFFDF6', border: `1.5px solid ${C.negro}`, transform: `rotate(${i % 2 === 0 ? -0.8 : 0.8}deg)` }}
                >
                  <div>
                    <Stars value={r.nota} color={C.mostaza} className="w-4 h-4" />
                    <p className="text-[15px] md:text-base leading-snug mt-3" style={{ color: C.negro }}>
                      {r.texto}
                    </p>
                  </div>
                  <footer className="flex items-center gap-2.5 mt-4">
                    <Escarola size={16} />
                    <span className={`${mono.className} text-[11px] font-semibold tracking-[0.12em] uppercase`} style={{ color: C.negro }}>
                      {r.nombre}
                    </span>
                    <span className={`${mono.className} text-[10px] tracking-[0.1em] uppercase`} style={{ color: C.muted }}>
                      reseña de Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde y cuándo ── */}
      <section id="pedir" className="scroll-mt-20" style={{ backgroundColor: C.mostazaSuave }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl uppercase leading-[0.95]`} style={{ color: C.negro }}>
              Avenida Poniente 2074, Molina,
            </h2>
            <p className="text-[15px] md:text-base mt-5 leading-snug max-w-md" style={{ color: 'rgba(23,18,9,0.72)' }}>
              la casa amarilla con el medallón negro. La muralla del menú se
              ve desde la vereda.
            </p>

            <div className="mt-7" style={{ borderTop: `2px solid ${C.negro}` }}>
              {BIZ.hours.map(([dia, hora]) => (
                <div key={dia} className="flex items-baseline justify-between py-2.5" style={{ borderBottom: `1px solid ${C.line}` }}>
                  <span className={`${mono.className} text-[12px] font-medium tracking-[0.12em] uppercase`} style={{ color: C.negro }}>
                    {dia}
                  </span>
                  <span className={`${mono.className} text-[12px] font-semibold tracking-[0.08em]`} style={{ color: C.negro }}>
                    {hora}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-5 rounded-sm text-[15px] font-bold tap-44"
                style={{ backgroundColor: C.rojo, color: C.crema }}
              >
                <WhatsIcon color={C.crema} /> Pedir ahora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-5 rounded-sm text-[15px] font-bold tap-44"
                style={{ color: C.negro, border: `2px solid ${C.negro}` }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="rounded-sm overflow-hidden shadow-[0_18px_44px_-20px_rgba(23,18,9,0.45)] md:sticky md:top-24"
              style={{ border: `1.5px solid ${C.negro}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                className="w-full h-[300px] md:h-[380px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.negro }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <Escarola size={26} color={C.mostaza} />
          </Reveal>
          <Reveal delay={60}>
            <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.95] mt-5 mx-auto max-w-2xl`} style={{ color: C.crema }}>
              pide el tuyo y sale por delivery,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 mx-auto max-w-md leading-snug" style={{ color: 'rgba(250,243,223,0.7)' }}>
              el mismo número de la muralla atiende WhatsApp: {BIZ.phoneDisplay}.
            </p>
            <a
              href={WA_LINK_DELIVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm px-7 h-[52px] text-base font-bold mt-7 tap-44 transition-transform active:scale-95"
              style={{ backgroundColor: C.mostaza, color: C.negro }}
            >
              <WhatsIcon color={C.negro} /> Pedir delivery
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.crema, borderTop: `2px solid ${C.negro}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className={`${display.className} text-xl uppercase`} style={{ color: C.negro }}>
                {BIZ.name}
              </p>
              <p className="text-sm mt-1 leading-snug" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.region}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pie de página">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 font-semibold" style={{ color: C.negro }}>
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="text-sm" style={{ color: C.muted }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block tap-44 font-semibold" style={{ color: C.negro }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] tracking-wide mt-7 leading-relaxed`} style={{ color: C.muted }}>
            Textos de muestra sobre datos reales: dirección, teléfono, horario,
            nota de Google, reseñas, menú de la muralla y fotos corresponden a la
            ficha pública de {BIZ.name}.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Pedir en ${BIZ.short}`} />
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
          style={{ backgroundColor: C.rojo }}
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
