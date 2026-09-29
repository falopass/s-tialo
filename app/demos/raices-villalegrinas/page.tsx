import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  papel: '#F4EFE3',
  papelAlt: '#EDE6D4',
  bosque: '#1E3D2F',
  bosqueInk: '#16291F',
  laton: '#C8A24B',
  cobre: '#8A6A2F',
  tinta: '#262017',
  muted: '#5E5646',
  linea: 'rgba(38,32,23,0.22)',
  papelSoft: 'rgba(244,239,227,0.75)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'raices-villalegrinas',
  title: 'Raíces Villalegrinas — Licores artesanales de Villa Alegre',
  description:
    'Licores artesanales con receta propia, elaborados por la familia Villena en la casa antigua de Avda. Abate Molina N° 98, Villa Alegre. Pedidos por WhatsApp.',
  image: '/demos/raices-villalegrinas/linea.webp',
})

const NAV_LINKS = [
  { label: 'Los licores', href: '#licores' },
  { label: 'La casa', href: '#casa' },
  { label: 'Visítanos', href: '#visita' },
]

function Eyebrow({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  const col = tone === 'dark' ? C.papel : C.cobre
  return (
    <p
      className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.34em] mb-5 flex items-center justify-center gap-4`}
      style={{ color: col }}
    >
      <span className="inline-block w-10 h-px" style={{ backgroundColor: col }} aria-hidden="true" />
      {children}
      <span className="inline-block w-10 h-px" style={{ backgroundColor: col }} aria-hidden="true" />
    </p>
  )
}

/** Marco de etiqueta: doble línea + monograma */
function LabelFrame({
  children,
  className = '',
  tone = 'paper',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'paper' | 'forest'
}) {
  const ink = tone === 'paper' ? C.bosque : C.laton
  const bg = tone === 'paper' ? C.papel : C.bosqueInk
  return (
    <div className={`p-1.5 border ${className}`} style={{ borderColor: ink, backgroundColor: bg }}>
      <div className="border-[3px] h-full" style={{ borderColor: ink, borderStyle: 'double' }}>
        {children}
      </div>
    </div>
  )
}

function Seal({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] px-3.5 py-2 rounded-full border`}
      style={{ borderColor: C.bosque, color: C.bosque }}
    >
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill={C.laton} aria-hidden="true">
        <circle cx="6" cy="6" r="5" />
      </svg>
      {children}
    </span>
  )
}

export default function RaicesVillalegrinasPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        .rv-btn { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .rv-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 0 -4px ${C.laton}; }
        .rv-btn:active { transform: translateY(0) scale(0.98); }
        .rv-btn:focus-visible { outline: 3px solid ${C.laton}; outline-offset: 3px; }
        .rv-photo { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
        .rv-photo:hover { transform: scale(1.02); }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(244,239,227,0.96)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.bosque,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero editorial tipo etiqueta ── */}
      <section id="inicio" className="max-w-4xl mx-auto px-5 pt-[104px] md:pt-[128px] pb-12 md:pb-16 text-center">
        <Reveal>
          <Eyebrow>Licorería artesanal · Villa Alegre, Maule</Eyebrow>
          <h1
            className={`${display.className} leading-[1.02] text-[clamp(2.8rem,8.5vw,6rem)] font-medium`}
            style={{ color: C.bosqueInk }}
          >
            Licores de <em style={{ color: C.cobre }}>receta propia</em>,
            <br className="hidden md:block" /> hechos en la casa antigua
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
            {BIZ.familia} elabora licores artesanales en Avda. Abate Molina N° 98,
            Villa Alegre — una bodega familiar dentro de una casa patrimonial.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rv-btn text-sm md:text-base font-medium px-7 py-3 border-2 tap-44"
              style={{ backgroundColor: C.bosque, color: C.papel, borderColor: C.bosque }}
            >
              Pedir por WhatsApp
            </a>
            <a
              href="#licores"
              className="rv-btn text-sm md:text-base font-medium px-7 py-3 border-2 tap-44"
              style={{ color: C.bosque, borderColor: C.bosque }}
            >
              Conocer los licores
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44">
              <Seal>
                {BIZ.rating} ★ · {BIZ.reviews} reseñas en Google
              </Seal>
            </a>
            <Seal>Recetas propias</Seal>
            <Seal>Elaboración familiar</Seal>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <LabelFrame className="mt-12 max-w-3xl mx-auto">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={`${IMG}/linea.webp`}
                alt="Línea de botellas de licores artesanales Raíces Villalegrinas vistas desde arriba"
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover rv-photo"
              />
            </div>
          </LabelFrame>
          <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            la línea de la casa — fotografía real de su ficha
          </p>
        </Reveal>
      </section>

      {/* ── La botella de la casa ── */}
      <section id="licores" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow tone="dark">la botella de la casa</Eyebrow>
            <h2
              className={`${display.className} text-center leading-[1.02] text-[clamp(2.2rem,6vw,4.4rem)] font-medium mb-12`}
              style={{ color: C.papel }}
            >
              <em style={{ color: C.laton }}>Canelita</em> y las variedades
              <br className="hidden md:block" /> que van saliendo de la bodega
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <Reveal className="col-span-12 md:col-span-6">
              <LabelFrame tone="forest">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={`${IMG}/canelita.webp`}
                    alt="Botella de licor artesanal Canelita de Raíces Villalegrinas junto a copas servidas"
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover rv-photo"
                  />
                </div>
              </LabelFrame>
            </Reveal>
            <div className="col-span-12 md:col-span-6">
              <Reveal delay={100}>
                {/* ficha de etiqueta */}
                <div className="border p-6 md:p-8" style={{ borderColor: 'rgba(200,162,75,0.55)' }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.laton }}>
                    Ficha de etiqueta
                  </p>
                  <dl className="space-y-4">
                    {[
                      ['Nombre', 'Canelita'],
                      ['Estilo', 'Licor artesanal de canela'],
                      ['Grado', '16°'],
                      ['Elaboración', 'Receta propia, producción familiar'],
                      ['Origen', 'Villa Alegre, Maule'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-baseline gap-3 border-b border-dashed pb-3" style={{ borderColor: 'rgba(244,239,227,0.25)' }}>
                        <dt className={`${mono.className} w-28 shrink-0 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.papelSoft }}>
                          {k}
                        </dt>
                        <dd className={`${display.className} text-lg md:text-xl`} style={{ color: C.papel }}>
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 text-sm leading-relaxed" style={{ color: C.papelSoft }}>
                    La selección cambia con cada producción: canela y otras
                    variedades de la casa se confirman directo por WhatsApp.
                    Como dicen ellos mismos en su ficha: «sólo tenemos licores
                    artesanales».
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          {/* tira de proceso */}
          <div className="grid grid-cols-3 gap-3 md:gap-5 mt-10 md:mt-14">
            {[
              { src: `${IMG}/barricas.webp`, alt: 'Barricas de madera de la bodega Raíces Villalegrinas', cap: 'la bodega' },
              { src: `${IMG}/pipa.webp`, alt: 'Pipa de guarda de licores de la casa', cap: 'la guarda' },
              { src: `${IMG}/mesa.webp`, alt: 'Mesa de degustación con botellas de la casa', cap: 'la mesa' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 110}>
                <figure>
                  <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden border" style={{ borderColor: 'rgba(200,162,75,0.5)' }}>
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 30vw, 33vw" className="object-cover rv-photo" />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em] text-center`} style={{ color: C.papelSoft }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <Eyebrow>donde se hace</Eyebrow>
              <h2 className={`${display.className} leading-[1.03] text-[clamp(2rem,5.5vw,3.8rem)] font-medium`} style={{ color: C.bosqueInk }}>
                Una casa antigua,
                <br />
                <em style={{ color: C.cobre }}>una bodega familiar</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed" style={{ color: C.muted }}>
                La bodega funciona dentro de la casa patrimonial de la familia
                Villena en Villa Alegre — abuelos, hijos y nietos detrás de
                cada botella. Quienes la visitan quedan encantados con la
                historia del lugar y la atención de la señora Tita.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <Seal>Familia Villena</Seal>
                <Seal>Casa patrimonial</Seal>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={120}>
              <LabelFrame>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/casa.webp`}
                    alt="Casa antigua de madera donde funciona la bodega Raíces Villalegrinas"
                    fill
                    sizes="(min-width: 768px) 56vw, 100vw"
                    className="object-cover rv-photo"
                  />
                </div>
              </LabelFrame>
              <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em] text-right`} style={{ color: C.muted }}>
                la casa de la familia Villena — foto real
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="border-y" style={{ backgroundColor: C.papelAlt, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <Reveal>
            <Eyebrow>palabra de quienes pasaron</Eyebrow>
            <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-2 mb-10 md:mb-12 text-center">
              <p className={`${display.className} text-[clamp(3.4rem,8vw,5.5rem)] leading-none font-medium`} style={{ color: C.bosqueInk }}>
                {BIZ.rating}
              </p>
              <div className="pb-2 text-left">
                <Stars value={4.6} color={C.cobre} className="w-4 h-4" />
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-1.5`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <Reveal key={r.author} className="col-span-12 md:col-span-4" delay={i * 110}>
                <figure className="h-full flex flex-col border-t-2 pt-5 px-1" style={{ borderColor: C.bosque }}>
                  <blockquote className={`${display.className} text-lg md:text-xl italic leading-snug flex-1`} style={{ color: C.tinta }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between gap-3">
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      {r.author} · reseña de Google
                    </span>
                    <Stars value={r.stars} color={C.cobre} className="w-3 h-3" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-center mt-9">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block text-xs font-semibold uppercase tracking-[0.16em] underline underline-offset-4 tap-44`}
                style={{ color: C.bosque }}
              >
                Leer todas las reseñas en Google →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Visita / contacto ── */}
      <section id="visita" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>visita la bodega</Eyebrow>
          <h2 className={`${display.className} text-center leading-[1.03] text-[clamp(2rem,5.5vw,3.8rem)] font-medium mb-10`} style={{ color: C.bosqueInk }}>
            En la <em style={{ color: C.cobre }}>Abate Molina</em>, Villa Alegre
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-5 space-y-5">
            <Reveal>
              <div className="border p-6" style={{ borderColor: C.bosque }}>
                <address className="not-italic space-y-4">
                  <div>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.cobre }}>Dirección</p>
                    <p className={`${display.className} text-2xl`} style={{ color: C.tinta }}>{BIZ.address}</p>
                    <p className="text-sm" style={{ color: C.muted }}>{BIZ.city}, {BIZ.region}</p>
                  </div>
                  <div>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.cobre }}>Pedidos</p>
                    <a href={`tel:${BIZ.phoneTel}`} className={`${display.className} text-2xl underline underline-offset-4 tap-44`} style={{ color: C.bosque }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.cobre }}>Redes</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                      <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4 tap-44`} style={{ color: C.tinta }}>
                        Instagram
                      </a>
                      <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4 tap-44`} style={{ color: C.tinta }}>
                        Facebook
                      </a>
                      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4 tap-44`} style={{ color: C.tinta }}>
                        Horario en Google
                      </a>
                    </div>
                  </div>
                </address>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <figure>
                <div className="relative w-full aspect-[4/3] overflow-hidden border" style={{ borderColor: C.bosque }}>
                  <Image
                    src={`${IMG}/jardin.webp`}
                    alt="Jardín con barricas y plantas en la entrada de Raíces Villalegrinas"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover rv-photo"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  el jardín de la casa — foto real
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <LabelFrame>
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </LabelFrame>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.bosqueInk, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- etiqueta real ya optimizada */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-11 w-11 rounded-full object-cover border" style={{ borderColor: C.laton }} aria-hidden="true" />
            <div>
              <p className={`${display.className} text-xl leading-tight`}>{BIZ.name}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.papelSoft }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-semibold underline underline-offset-4 tap-44`} style={{ color: C.laton }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,227,0.16)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(244,239,227,0.62)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. La selección de licores y el horario se confirman por WhatsApp.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.laton }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
