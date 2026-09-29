import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_MENU, MAPS_URL, MAPS_EMBED, IMG } from './content'

/**
 * Restaurant El Yugo (Colbún)
 * Idea visual: la pizarra del almuerzo. Papel mantel, tinta y tiza sobre
 * pizarra oscura, con el rojo del marcador como único acento. El menú del
 * día se muestra tal cual: el listado real de su pizarra.
 */

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  papel: '#F2EBDC',
  papel2: '#E9DFC9',
  tinta: '#26241B',
  tintaSuave: 'rgba(38,36,27,0.68)',
  line: 'rgba(38,36,27,0.18)',
  pizarra: '#22271F',
  tiza: '#F0EBDB',
  tizaSuave: 'rgba(240,235,219,0.7)',
  rojo: '#B7392B',
  rojoClaro: '#E0694F',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-el-yugo',
  title: 'Restaurant El Yugo: almuerzo casero en Colbún',
  description:
    'Restaurant familiar en Dr. Bravo, comuna de Colbún. Menú del día casero: cazuela, lentejas, pescado frito y carne al yugo. Reserva por WhatsApp.',
  image: `${IMG}/letrero.webp`,
})

const NAV_LINKS = [
  { label: 'Menú del día', href: '#menu' },
  { label: 'El comedor', href: '#comedor' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const PLATOS_PIZARRA = [
  'Cazuela de vacuno',
  'Pechuga a la plancha',
  'Lentejas',
  'Pescado frito',
  'Chuletas',
  'Carne al yugo',
]

const AGREGADOS = ['Arroz', 'Papas mayo', 'Ensaladas', 'Papas fritas', 'Jugos naturales']

const REVIEWS = [
  {
    name: 'Ramón Codoceo',
    stars: 4,
    text: 'La cazuela es abundante y el menú del día tiene un valor de $7.000. Comida casera de verdad.',
  },
  {
    name: 'Nicolás Ebner',
    stars: 5,
    text: 'El menú del día incluye ensalada, pebre y pan, y después té, café o bajativo. Se come muy bien.',
  },
  {
    name: 'Rene Diaz Guzman',
    stars: 5,
    text: 'Muy buena atención y comida casera rica. Un paradero que vale la pena camino a las termas.',
  },
]

export default function ElYugoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        .ey-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .ey-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .ey-btn:active { transform: translateY(0) scale(0.97); }
        .ey-btn:focus-visible { outline: 3px solid ${C.rojo}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} font-semibold uppercase tracking-[0.06em]`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar almuerzo"
        logoSrc={`${IMG}/letrero.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(242,235,220,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: papel + letrero real ── */}
      <section id="inicio" className="pt-[76px] md:pt-[92px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-16 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em]`} style={{ color: C.rojo }}>
                Dr. Bravo, comuna de Colbún
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} font-semibold uppercase leading-[0.95] tracking-[0.01em] mt-4 text-[clamp(2.6rem,8vw,5.2rem)]`}
              >
                El almuerzo
                <br />
                de siempre<span style={{ color: C.rojo }}>,</span>
                <br />
                como en casa
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.tintaSuave }}>
                Comedor familiar del Maule profundo: cazuela de vacuno, lentejas
                y la carne al yugo que le da el nombre. Paradero clásico en el
                camino a las termas de Panimávida.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ey-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-bold"
                  style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                >
                  Reservar para almorzar
                </a>
                <a
                  href="#menu"
                  className="ey-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-bold"
                  style={{ border: `1.5px solid ${C.tinta}`, color: C.tinta }}
                >
                  Ver la pizarra
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.rojo} className="w-4 h-4" />
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.tintaSuave }}>
                  {String(BIZ.rating).replace('.', ',')} en Google, {BIZ.reviewsCount} reseñas
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="md:col-span-5">
            <figure
              className="rounded-lg overflow-hidden p-2.5"
              style={{ backgroundColor: '#FBF7EC', border: `1px solid ${C.line}`, boxShadow: '0 14px 34px rgba(38,36,27,0.14)' }}
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero pintado a mano de Restaurant El Yugo en Colbún"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <figcaption
                className={`${mono.className} px-1.5 pt-2.5 pb-1 text-[11px] uppercase tracking-[0.16em]`}
                style={{ color: C.tintaSuave }}
              >
                El letrero de la casa, pintado a mano
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Fila de datos ── */}
      <section aria-label="Datos rápidos" style={{ borderTop: `1.5px solid ${C.tinta}`, borderBottom: `1.5px solid ${C.tinta}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: C.tinta }}>
            {[
              ['Menú del día', '$7.000'],
              ['Estilo', 'Comida casera'],
              ['De tomar', 'Jugos naturales'],
            ].map(([k, v]) => (
              <div key={k} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0 flex items-baseline justify-between sm:block" style={{ borderColor: 'rgba(38,36,27,0.25)' }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.tintaSuave }}>{k}</p>
                <p className={`${display.className} font-semibold uppercase text-xl md:text-2xl mt-0 sm:mt-1`} style={{ color: k === 'Menú del día' ? C.rojo : C.tinta }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── La pizarra ── */}
      <section id="menu" className="scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-[clamp(2rem,6vw,3.6rem)]`}>
              La pizarra del almuerzo<span style={{ color: C.rojo }}>.</span>
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-12 grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <Reveal className="lg:col-span-7">
              <div
                className="rounded-lg p-6 md:p-9 relative overflow-hidden"
                style={{ backgroundColor: C.pizarra, boxShadow: 'inset 0 0 0 6px rgba(240,235,219,0.12), inset 0 0 0 7px rgba(0,0,0,0.35), 0 18px 40px rgba(38,36,27,0.28)' }}
              >
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.rojoClaro }}>
                  Menú del día
                </p>
                <p className={`${display.className} font-semibold uppercase text-4xl md:text-5xl mt-2`} style={{ color: C.tiza }}>
                  $7.000
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {PLATOS_PIZARRA.map((p) => (
                    <p key={p} className="flex items-baseline gap-2.5 text-base md:text-lg" style={{ color: C.tiza }}>
                      <span aria-hidden="true" className="w-1.5 h-1.5 rotate-45 shrink-0 translate-y-[-2px]" style={{ backgroundColor: C.rojoClaro }} />
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-5" style={{ borderTop: `1.5px dashed rgba(240,235,219,0.35)` }}>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.tizaSuave }}>
                    Con agregado de
                  </p>
                  <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.tiza }}>
                    {AGREGADOS.join(', ')}.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: C.tizaSuave }}>
                    Las reseñas cuentan que el menú viene con ensalada, pebre y pan,
                    y al final té, café o bajativo.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <figure className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/pizarra-menu.webp`}
                    alt="Pizarra real con el menú del día en El Yugo"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </figure>
              <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.tintaSuave }}>
                La pizarra real del local. El menú cambia según el día.
              </p>
              <a
                href={WA_LINK_MENU}
                target="_blank"
                rel="noopener noreferrer"
                className="ey-btn tap-44 mt-5 inline-flex items-center rounded-full px-6 py-3 text-sm font-bold"
                style={{ backgroundColor: C.tinta, color: C.papel }}
              >
                Preguntar el menú de hoy
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El comedor ── */}
      <section id="comedor" className="scroll-mt-16" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-[clamp(2rem,6vw,3.6rem)]`}>
              Un comedor de campo<span style={{ color: C.rojo }}>,</span>
              <br />
              sin apuro y sin lujos
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-5 md:gap-6">
            <Reveal className="md:col-span-7">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/cazuela.webp`}
                  alt="Cazuela de vacuno servida en El Yugo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={90} className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="Comedor de madera del restaurant El Yugo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={60} className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/mariscos.webp`}
                  alt="Plato de mariscos de la casa en El Yugo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={140} className="md:col-span-7">
              <div
                className="h-full rounded-lg p-6 md:p-8 flex flex-col justify-center"
                style={{ backgroundColor: C.rojo }}
              >
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: 'rgba(255,244,230,0.78)' }}>
                  Por qué paran acá
                </p>
                <p className={`${display.className} font-semibold uppercase text-2xl md:text-3xl leading-tight mt-3`} style={{ color: '#FFF4E6' }}>
                  Porciones de verdad, precio de pueblo y la pizarra que se
                  escribe cada día.
                </p>
                <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,244,230,0.88)' }}>
                  Es el clásico donde se almuerza de camino a las termas de
                  Panimávida: plato casero, agregado y la sobremesa con té o café.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-[clamp(2rem,6vw,3.6rem)]`}>
              Los que almorzaron lo cuentan
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure
                  className="h-full rounded-lg p-6 flex flex-col"
                  style={{ backgroundColor: '#FBF7EC', border: `1px solid ${C.line}` }}
                >
                  <Stars value={r.stars} color={C.rojo} className="w-3.5 h-3.5" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(38,36,27,0.9)' }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.14em]`}
                    style={{ color: C.tintaSuave }}
                  >
                    {r.name}, reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="mt-6 text-sm" style={{ color: C.tintaSuave }}>
              Extractos de reseñas públicas en Google Maps, nota {String(BIZ.rating).replace('.', ',')} con {BIZ.reviewsCount} reseñas.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.rojo }}>
                Leerlas todas
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-16" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            <Reveal className="md:col-span-5">
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-3`} style={{ color: C.rojoClaro }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-[clamp(2rem,6vw,3.4rem)]`} style={{ color: C.tiza }}>
                Camino a las termas de Panimávida
              </h2>
              <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.tizaSuave }}>
                {BIZ.address}
                <br />
                {BIZ.region}
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ey-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-bold"
                  style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="ey-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-bold"
                  style={{ border: '1.5px solid rgba(240,235,219,0.5)', color: C.tiza }}
                >
                  Llamar
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div
                className="relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-[16/10]"
                style={{ border: '1px solid rgba(240,235,219,0.2)', backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#191D15', color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-semibold uppercase text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {BIZ.address} · {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. La carta, los textos y las fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.rojoClaro }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
