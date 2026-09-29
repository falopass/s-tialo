import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  night: '#211308',
  wood: '#3A2412',
  woodMid: '#5A3A20',
  cream: '#F2E7CF',
  creamHi: '#FAF3E2',
  red: '#B53A2A',
  green: '#14502E',
  board: '#1C2B20',
  gold: '#E0A93E',
  muted: '#6E5B41',
  line: 'rgba(58,36,18,0.18)',
}

// globals.css redefine --spacing-5…12; se restaura la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'las-puertas-del-paraiso',
  title: 'Las Puertas del Paraíso — el parador de la Ruta 5 en Río Claro',
  description:
    'Restaurante y hostería en la Panamericana Sur km 218, Río Claro: desayunos abundantes, pan amasado, cazuela y botillería con vinos de la zona. 4,1 en Google con 1.008 reseñas.',
  image: `${IMG}/puertas.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'El pizarrón', href: '#pizarron' },
  { label: 'La botillería', href: '#botilleria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const PIZARRON = [
  { plato: 'Plateada', nota: 'la del letrero de la entrada' },
  { plato: 'Asado de cerdo', nota: 'con papas y ensalada' },
  { plato: 'Pollo asado', nota: 'el clásico del mediodía' },
  { plato: 'Cazuela', nota: 'la de siempre, con su pan amasado' },
  { plato: 'Sandwiches y completos', nota: 'para seguir viaje' },
  { plato: 'Desayunos', nota: 'abundantes, desde las 8:00' },
]

const VINOS = [
  { item: 'Vinos de la zona', precio: '4 × $10.000' },
  { item: 'Oferta del estante', precio: '5 × $10.000' },
  { item: 'Botellas del Maule', precio: '$7.000 – $12.000' },
]

const RESENAS = [
  {
    nombre: 'Braulio Maldonado',
    fecha: 'Hace un año',
    estrellas: 5,
    texto:
      'Pasamos de casualidad y nos llevamos una muy buena impresión (mejor que pasar a una Copec). Abundantes desayunos y a buen precio. Atención rápida a pesar de lo lleno que estaba.',
  },
  {
    nombre: 'Oriana Gutiérrez',
    fecha: 'Hace un año',
    estrellas: 4,
    texto:
      'Cada tanto paso a desayunar y me gusta el pan amasado que hacen. Además tienen la venta de vinos y licores con precios muy convenientes. La atención es buena y los baños muy limpios.',
  },
  {
    nombre: 'Barbara Nilo',
    fecha: 'Hace 3 años',
    estrellas: 3,
    texto:
      'Esta puntuación es compleja. Si bien el lugar en sí es hermoso, pasamos a comprar unos sandwich para almorzar, los cuales estaban muy ricos y calentitos.',
  },
]

/* Marco de madera con dintel: la puerta que da nombre al local */
function MarcoPuerta({ children, rotulo }: { children: React.ReactNode; rotulo?: string }) {
  return (
    <div className="relative">
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-5 py-1 border-2"
        style={{ backgroundColor: C.red, borderColor: C.night, color: C.cream }}
      >
        <span className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.28em] whitespace-nowrap`}>
          {rotulo ?? 'Bienvenidos'}
        </span>
      </div>
      <div className="border-[10px] p-1.5" style={{ borderColor: C.woodMid, backgroundColor: C.night }}>
        <div className="border-2" style={{ borderColor: 'rgba(242,231,207,0.25)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

/* Letrero colgante de dos cadenas */
function Letrero({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      <span aria-hidden="true" className="absolute -top-6 left-[18%] w-px h-6" style={{ backgroundColor: 'rgba(242,231,207,0.5)' }} />
      <span aria-hidden="true" className="absolute -top-6 right-[18%] w-px h-6" style={{ backgroundColor: 'rgba(242,231,207,0.5)' }} />
      <span aria-hidden="true" className="absolute -top-6 left-[18%] -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: C.gold }} />
      <span aria-hidden="true" className="absolute -top-6 right-[18%] translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: C.gold }} />
      <div className="border-2 px-5 py-3" style={{ borderColor: 'rgba(242,231,207,0.45)', backgroundColor: C.board }}>
        {children}
      </div>
    </div>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4`}
      style={{ color: dark ? C.gold : C.red }}
    >
      {children}
    </p>
  )
}

export default function LasPuertasDelParaisoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.night }}
    >
      <style>{`
        .lpp-btn { transition: transform .18s ease, filter .18s ease; }
        .lpp-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .lpp-btn:active { transform: scale(.97); }
        .lpp-btn:focus-visible { outline: 3px solid ${C.gold}; outline-offset: 3px; }
        @keyframes lpp-mecer { 0%,100% { transform: rotate(-1.4deg) } 50% { transform: rotate(1.4deg) } }
        .lpp-mecer { transform-origin: 50% -24px; animation: lpp-mecer 5.5s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) { .lpp-mecer { animation: none } }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} uppercase tracking-wide`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(33,19,8,0.94)',
          ink: C.cream,
          line: 'rgba(242,231,207,0.16)',
          btnBg: C.red,
          btnInk: C.cream,
        }}
      />

      {/* ── Hero: las puertas literales ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(242,231,207,0.35) 0 2px, transparent 2px 56px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-14 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 border-2 mb-6"
                style={{ backgroundColor: C.green, borderColor: 'rgba(242,231,207,0.85)', color: C.cream }}
              >
                <span className={`${display.className} text-sm md:text-base tracking-[0.12em] uppercase`}>
                  Ruta 5 Sur · Km 218
                </span>
              </div>
              <h1
                className={`${display.className} uppercase leading-[0.94] text-[clamp(3rem,11.5vw,7.5rem)]`}
                style={{ color: C.cream }}
              >
                Las puertas
                <br />
                <span style={{ color: C.gold }}>del paraíso</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mt-6 mb-7 font-medium" style={{ color: 'rgba(242,231,207,0.85)' }}>
                El parador de la Panamericana en Río Claro: desayunos
                abundantes desde las 8:00, pan amasado, cazuela y una
                botillería de vinos del Maule al lado del comedor.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} lpp-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                  style={{ backgroundColor: C.red, color: C.cream }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} lpp-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                  style={{ borderColor: 'rgba(242,231,207,0.5)', color: C.cream }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <MarcoPuerta>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`${IMG}/puertas.webp`}
                    alt="Los portones de madera de la entrada de Las Puertas del Paraíso, con la pizarra de platos del día y la oferta de vinos"
                    fill
                    priority
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </MarcoPuerta>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] mt-3 text-center`} style={{ color: 'rgba(242,231,207,0.6)' }}>
                Los portones que le dan el nombre — foto real
              </p>
            </Reveal>
          </div>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(242,231,207,0.18)', backgroundColor: 'rgba(58,36,18,0.9)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs`} style={{ color: 'rgba(242,231,207,0.82)' }}>
            <span className="inline-flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.gold} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews.toLocaleString('es-CL')} reseñas
            </span>
            <span>Abre a las 8:00</span>
            <span className="hidden sm:inline">Restaurante · hostería · botillería</span>
            <span className="hidden md:inline" style={{ color: C.gold }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Letrero colgante: el HOY de la entrada ── */}
      <div className="py-9 md:py-12 text-center overflow-hidden" style={{ backgroundColor: C.wood }} aria-label="Platos del día escritos en la pizarra de la entrada">
        <Reveal>
          <div className="lpp-mecer inline-block">
            <Letrero>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-1.5`} style={{ color: C.gold }}>
                La pizarra de la entrada dice
              </p>
              <p className={`${display.className} uppercase tracking-wide text-xl md:text-3xl leading-tight`} style={{ color: C.cream }}>
                Hoy · Plateada · Asado de cerdo · Pollo asado
              </p>
            </Letrero>
          </div>
        </Reveal>
      </div>

      {/* ── La casa junto a la ruta ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>La casa · Panamericana Sur · Río Claro</Eyebrow>
          <h2 className={`${display.className} uppercase leading-[0.96] text-[clamp(2.2rem,7vw,4.6rem)] mb-10 md:mb-12`}>
            La parada de madera
            <br />
            <span style={{ color: C.red }}>con banderas chilenas</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="md:col-span-7">
            <figure className="relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: C.night }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada de madera de Las Puertas del Paraíso con banderas chilenas, toldo y letrero de hostería junto a la Panamericana"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
              La casa vista desde la ruta — foto real
            </p>
          </Reveal>
          <div className="md:col-span-5">
            <Reveal delay={90}>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <p>
                  Camión que pasa por el km 218, familia que viene de
                  Santiago o vecino de Río Claro: todos terminan en la
                  misma casa de madera con banderas chilenas y toldo.
                </p>
                <p>
                  Adentro el comedor es de madera de pies a cabeza, con la
                  pizarra de platos del día al fondo. En Google suma{' '}
                  {BIZ.reviews.toLocaleString('es-CL')} reseñas: los
                  que pasan por la ruta lo repiten por el pan amasado y
                  los desayunos.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <figure className="relative overflow-hidden border-2 mt-6 aspect-[4/3]" style={{ borderColor: C.night }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Comedor interior de madera con la pizarra del menú escrita a mano"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El pizarrón: platos del día sobre fondo de pizarra ── */}
      <section id="pizarron" className="scroll-mt-20" style={{ backgroundColor: C.board }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow dark>El pizarrón · escrito a tiza</Eyebrow>
            <h2 className={`${display.className} uppercase leading-[0.96] text-[clamp(2.2rem,7vw,4.6rem)] mb-10`} style={{ color: C.cream }}>
              Lo que se cuece
              <br />
              <span style={{ color: C.gold }}>al lado de la ruta</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            <Reveal className="md:col-span-5">
              <ul className="border-2 border-dashed" style={{ borderColor: 'rgba(242,231,207,0.45)' }}>
                {PIZARRON.map((p) => (
                  <li
                    key={p.plato}
                    className="flex items-baseline justify-between gap-4 px-4 py-3.5 border-b border-dashed last:border-b-0"
                    style={{ borderColor: 'rgba(242,231,207,0.3)' }}
                  >
                    <span className={`${display.className} uppercase tracking-wide text-lg md:text-xl`} style={{ color: C.cream }}>
                      {p.plato}
                    </span>
                    <span className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-right`} style={{ color: 'rgba(242,231,207,0.62)' }}>
                      {p.nota}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em] mt-4`} style={{ color: 'rgba(242,231,207,0.6)' }}>
                Según la pizarra y la ficha de Google · el menú cambia por día
              </p>
            </Reveal>
            <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
              {[
                { src: 'costillar.webp', alt: 'Costillar con papas fritas servido en el comedor' },
                { src: 'churrasco.webp', alt: 'Sándwich de churrasco con el cuchillo clavado, estilo de la casa' },
                { src: 'plateada.webp', alt: 'Plateada con papas cocidas y ensalada' },
                { src: 'desayuno.webp', alt: 'Desayuno con sándwich y café servido en la mesa' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={i * 80}>
                  <figure className="relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: 'rgba(242,231,207,0.35)' }}>
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── La botillería: el estante de vinos junto a la puerta ── */}
      <section id="botilleria" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <Reveal>
              <Eyebrow>La botillería · junto a la entrada</Eyebrow>
              <h2 className={`${display.className} uppercase leading-[0.96] text-[clamp(2rem,6vw,4rem)] mb-6`}>
                Vinos del Maule
                <br />
                <span style={{ color: C.red }}>para llevar</span>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                Entre la puerta y el comedor hay botillería: etiquetas del
                valle del Maule con los precios escritos a mano en el
                estante, licores y hasta escobas de campo junto a la
                entrada.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="border-t" style={{ borderColor: C.line }}>
                {VINOS.map((v) => (
                  <li key={v.item} className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: C.line }}>
                    <span className={`${display.className} uppercase tracking-wide text-base md:text-lg`}>{v.item}</span>
                    <span className={`${mono.className} text-sm md:text-base font-semibold`} style={{ color: C.red }}>
                      {v.precio}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: C.muted }}>
                Precios leídos del estante y la pizarra — pueden variar
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7 order-1 md:order-2" delay={60}>
            <figure className="relative overflow-hidden border-2 aspect-[16/10]" style={{ borderColor: C.night }}>
              <Image
                src={`${IMG}/vinos.webp`}
                alt="Estante de la botillería con botellas de vino del valle del Maule y carteles de oferta escritos a mano"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
              El estante de la casa — foto real
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.creamHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Reseñas · Google Maps</Eyebrow>
            <h2 className={`${display.className} uppercase leading-[0.96] text-[clamp(2.2rem,7vw,4.6rem)] mb-10`}>
              Lo que dice
              <br />
              <span style={{ color: C.red }}>el que para</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <figure className="h-full border-2 p-5 md:p-6 flex flex-col" style={{ borderColor: C.night, backgroundColor: '#FFFFFF' }}>
                  <Stars value={r.estrellas} color={C.woodMid} className="w-3.5 h-3.5" />
                  <blockquote className="text-sm md:text-base leading-relaxed mt-4 mb-5 font-medium" style={{ color: C.night }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                    <span style={{ color: C.night }}>{r.nombre}</span>
                    <span className="shrink-0">{r.fecha} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-7 text-sm md:text-base uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.red, textDecorationColor: 'rgba(181,58,42,0.35)' }}
            >
              Ver las {BIZ.reviews.toLocaleString('es-CL')} reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="min-w-0">
              <Reveal>
                <Eyebrow dark>Cómo llegar · km 218</Eyebrow>
                <address className="not-italic mb-6">
                  <p className={`${display.className} uppercase leading-tight text-2xl md:text-4xl mb-2`} style={{ color: C.cream }}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm md:text-base" style={{ color: 'rgba(242,231,207,0.75)' }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${mono.className} inline-block text-sm md:text-base mt-3 underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.gold, textDecorationColor: 'rgba(224,169,62,0.4)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
              </Reveal>
              <Reveal delay={90}>
                <div className="border-t" style={{ borderColor: 'rgba(242,231,207,0.18)' }}>
                  <div className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(242,231,207,0.18)' }}>
                    <span className={`${display.className} uppercase tracking-wide text-base md:text-lg`} style={{ color: C.cream }}>
                      Abre
                    </span>
                    <span className={`${mono.className} text-sm text-right`} style={{ color: C.gold }}>
                      a las 8:00 · Google Maps
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(242,231,207,0.18)' }}>
                    <span className={`${display.className} uppercase tracking-wide text-base md:text-lg`} style={{ color: C.cream }}>
                      El fuerte
                    </span>
                    <span className={`${mono.className} text-sm text-right`} style={{ color: 'rgba(242,231,207,0.8)' }}>
                      desayuno · almuerzo · once
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} lpp-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ backgroundColor: C.red, color: C.cream }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} lpp-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                    style={{ borderColor: 'rgba(242,231,207,0.4)', color: C.cream }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative overflow-hidden border-2 min-h-[300px] md:aspect-[4/3]" style={{ borderColor: 'rgba(242,231,207,0.3)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2`} style={{ color: 'rgba(242,231,207,0.6)' }}>
                Busca la casa de madera con banderas, mano izquierda yendo al sur
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#150C05', color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} uppercase tracking-wide text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,231,207,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,231,207,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(242,231,207,0.68)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son los
            reales de la ficha de Google del negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
