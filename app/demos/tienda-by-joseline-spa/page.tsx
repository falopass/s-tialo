import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { BIZ, WA_LINK, waLinkProducto, WA_CATALOG, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Syne({ subsets: ['latin'], weight: ['500', '700'] })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Tienda By Joseline Spa — Lencería en Pencahue',
  description:
    'Tienda de lencería en Brisas de Pencahue 2, Pencahue. Conjuntos, encaje, pijamas y packs de regalo. Consulta tallas y encarga por WhatsApp.',
  robots: { index: false, follow: false },
}

const C = {
  red: '#C1272D',
  fleet: '#4A4E52',
  ink: '#232628',
  muted: '#8A8E93',
  orange: '#E8631A',
  gold: '#B99A5F',
  paper: '#FFFFFF',
  soft: '#FAF8F5',
  line: 'rgba(35,38,40,0.14)',
} as const

const NAV_LINKS = [
  { label: 'Colección', href: '#coleccion' },
  { label: 'La tienda', href: '#la-tienda' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const COLLECTION = [
  {
    n: '01',
    name: 'Lencería de todos los días',
    desc: 'Conjuntos cómodos y básicos bien hechos: algodón, microfibra y sin costuras, en tallas variadas.',
    price: 'desde $8.990',
    img: 'detalle1.webp',
  },
  {
    n: '02',
    name: 'Encaje y ocasiones',
    desc: 'Piezas de encaje, transparencias y detalles finos para una fecha especial o para sentirse bien.',
    price: 'desde $12.990',
    img: 'detalle2.webp',
  },
  {
    n: '03',
    name: 'Pijamas y descanso',
    desc: 'Pijamas, camisones y ropa de estar en casa: suaves, frescas y pensadas para el descanso.',
    price: 'desde $9.990',
    img: 'detalle3.webp',
  },
  {
    n: '04',
    name: 'Packs y regalos',
    desc: 'Packs armados para regalar: se elige diseño y talla por WhatsApp y queda listo para retirar.',
    price: 'desde $14.990',
    img: 'ambiente.webp',
  },
]

const PRICE_LIST = [
  { name: 'Conjunto básico de algodón', unit: 'por conjunto', price: 'desde $8.990' },
  { name: 'Conjunto de encaje', unit: 'por conjunto', price: 'desde $12.990' },
  { name: 'Pijama de dos piezas', unit: 'por pijama', price: 'desde $9.990' },
  { name: 'Camisón de satén', unit: 'por pieza', price: 'desde $13.990' },
  { name: 'Pack de regalo armado', unit: 'según contenido', price: 'desde $14.990' },
]

const TESTIMONIALS = [
  'Joseline atiende ella misma y te ayuda a encontrar tu talla sin apuro. Se nota que conoce lo que vende.',
  'Encargué un pack para regalo por WhatsApp y quedó precioso. Llegó a tiempo, tal como me dijo.',
  'Buenos precios y cosas que no se encuentran en cualquier tienda de la zona.',
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[10px] uppercase tracking-[0.34em] font-semibold flex items-center justify-center gap-3"
      style={{ color: light ? C.gold : C.red }}
    >
      <span className="inline-block w-6 h-px" style={{ backgroundColor: light ? 'rgba(255,255,255,0.5)' : C.line }} aria-hidden="true" />
      {children}
      <span className="inline-block w-6 h-px" style={{ backgroundColor: light ? 'rgba(255,255,255,0.5)' : C.line }} aria-hidden="true" />
    </p>
  )
}

export default function TiendaByJoselineSpaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex items-center justify-center overflow-hidden" style={{ backgroundColor: C.ink }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Interior de Tienda By Joseline Spa: perchas con conjuntos de lencería ordenados por color, luz suave de vitrina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,25,27,0.55) 0%, rgba(23,25,27,0.25) 45%, rgba(23,25,27,0.72) 100%)',
          }}
        />
        {/* marco fino de 1px al interior */}
        <div className="absolute inset-4 md:inset-6 border pointer-events-none" style={{ borderColor: 'rgba(255,255,255,0.30)' }} aria-hidden="true" />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-6 md:right-10 z-10">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-wide px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.94)', color: C.ink }}
            >
              <Stars value={5} color={C.gold} className="w-[11px] h-[11px]" />
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative text-center px-6 py-36 max-w-3xl mx-auto">
          <Reveal>
            <Eyebrow light>Lencería · Pencahue · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} uppercase leading-[1.04] tracking-[0.06em] text-[clamp(2.4rem,8.5vw,5rem)] mt-6 mb-6`}
              style={{ color: '#fff' }}
            >
              Lencería que se
              <br />
              elige con calma
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Conjuntos, encaje y pijamas escogidos pieza a pieza en
              Brisas de Pencahue. Consulta tu talla y encarga por
              WhatsApp: se confirma y se entrega a tiempo.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-xs md:text-sm uppercase tracking-[0.18em] px-8 py-4 transition-transform active:scale-95`}
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#coleccion"
                className={`${display.className} text-xs md:text-sm uppercase tracking-[0.18em] px-8 py-4 border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
              >
                Ver la colección
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La colección ── */}
      <section id="coleccion" className="scroll-mt-20 max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <Eyebrow>La colección</Eyebrow>
          <h2 className={`${display.className} uppercase tracking-[0.05em] text-3xl md:text-5xl leading-[1.08] text-center mt-6 mb-5`}>
            Cuatro líneas,
            <br />
            escogidas a mano
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-center max-w-md mx-auto" style={{ color: C.muted }}>
            Una muestra del surtido de la tienda. Al publicar van las
            fotos y categorías reales del negocio.
          </p>
        </Reveal>
        <div className="mt-14 md:mt-20 grid sm:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12">
          {COLLECTION.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <figure className="text-center">
                <div className="relative inline-block w-full">
                  <div className="border p-2.5" style={{ borderColor: C.line }}>
                    <img
                      src={`${IMG}/${p.img}`}
                      alt={p.name}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <span
                    className={`${display.className} absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] px-3 py-1`}
                    style={{ backgroundColor: C.paper, color: C.gold }}
                    aria-hidden="true"
                  >
                    {p.n}
                  </span>
                </div>
                <figcaption className="pt-7">
                  <h3 className={`${display.className} uppercase tracking-[0.08em] text-lg md:text-xl mb-2.5`}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-xs mx-auto mb-4" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                  <p className="flex items-baseline justify-center gap-4 text-sm">
                    <span className={`${display.className}`} style={{ color: C.red }}>{p.price}</span>
                    <a
                      href={waLinkProducto(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold uppercase tracking-[0.18em] underline underline-offset-4 decoration-1"
                      style={{ color: C.fleet, textDecorationColor: 'rgba(185,154,95,0.6)' }}
                    >
                      Consultar →
                    </a>
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La tienda ── */}
      <section id="la-tienda" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.soft }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Eyebrow>La tienda</Eyebrow>
            <h2 className={`${display.className} uppercase tracking-[0.05em] text-3xl md:text-5xl leading-[1.08] mt-6 mb-7`}>
              Atendida por su dueña,
              <br />
              en Pencahue
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-12" style={{ color: C.muted }}>
              Tienda By Joseline Spa funciona en Brisas de Pencahue 2 y
              atiende directo: Joseline ayuda a elegir talla, confirma
              cada encargo por WhatsApp y coordina la entrega para que
              llegue a tiempo, sin vueltas.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-3 gap-6 border-y py-8 md:py-10" style={{ borderColor: C.line }}>
              {[
                { v: String(BIZ.reviews), l: 'reseñas en Google', c: C.red },
                { v: 'Directa', l: 'atención de la dueña', c: C.red },
                { v: 'A tiempo', l: 'encargos coordinados', c: C.orange },
              ].map((s) => (
                <div key={s.l}>
                  <dt className={`${display.className} uppercase tracking-[0.06em] text-xl md:text-3xl mb-1.5`} style={{ color: s.c }}>
                    {s.v}
                  </dt>
                  <dd className="text-[11px] md:text-xs uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="mt-14 md:mt-16 space-y-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <blockquote className="max-w-xl mx-auto">
                  <p className={`${display.className} text-base md:text-lg leading-relaxed mb-3`} style={{ color: C.fleet }}>
                    “{t}”
                  </p>
                  <cite className="not-italic text-[10px] uppercase tracking-[0.28em] font-semibold" style={{ color: C.gold }}>
                    Reseña de ejemplo
                  </cite>
                </blockquote>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <p className="text-xs leading-relaxed max-w-sm mx-auto" style={{ color: C.muted }}>
                La ficha de Google registra {BIZ.reviews} reseñas. Estos
                textos son de muestra: al publicar van las reseñas reales.
                {' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-1 font-medium"
                  style={{ color: C.red, textDecorationColor: 'rgba(193,39,45,0.4)' }}
                >
                  Ver la ficha →
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-2xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Lista de referencia</Eyebrow>
          <h2 className={`${display.className} uppercase tracking-[0.05em] text-3xl md:text-4xl leading-[1.1] text-center mt-6 mb-5`}>
            Precios de muestra
          </h2>
          <p className="text-sm leading-relaxed text-center max-w-sm mx-auto mb-12" style={{ color: C.muted }}>
            Valores de referencia para ilustrar el sitio. Precio y talla
            disponible se confirman por WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border-t" style={{ borderColor: C.line }}>
            {PRICE_LIST.map((p, i) => (
              <li
                key={p.name}
                className="flex items-baseline justify-between gap-6 py-5 border-b"
                style={{ borderColor: C.line }}
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span className={`${display.className} text-[11px] tracking-[0.2em] shrink-0`} style={{ color: C.gold }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-sm md:text-base">{p.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.16em] mt-0.5" style={{ color: C.muted }}>{p.unit}</p>
                  </div>
                </div>
                <p className={`${display.className} text-base md:text-lg shrink-0`} style={{ color: C.red }}>
                  {p.price}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.2em]" style={{ color: C.muted }}>
            Lista de muestra · el sitio real lleva los precios del negocio
          </p>
        </Reveal>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.fleet }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Eyebrow light>Contacto</Eyebrow>
            <h2 className={`${display.className} uppercase tracking-[0.05em] text-3xl md:text-5xl leading-[1.08] mt-6 mb-6`} style={{ color: '#fff' }}>
              Encarga tu talla
              <br />
              por WhatsApp
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Escríbenos con lo que buscas — prenda, color y talla — y te
              confirmamos precio, stock y entrega el mismo día.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-xs md:text-sm uppercase tracking-[0.18em] px-9 py-4 transition-transform active:scale-95`}
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={WA_CATALOG}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-xs md:text-sm uppercase tracking-[0.18em] px-9 py-4 border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#fff' }}
              >
                Catálogo de WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border p-2.5 max-w-2xl mx-auto" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px] md:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <address className="not-italic text-sm leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-1">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">
                Cómo llegar
              </a>
            </address>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-12 text-center">
          <p className={`${display.className} uppercase tracking-[0.1em] text-lg mb-2`}>{BIZ.name}</p>
          <p className="text-xs leading-relaxed mb-6" style={{ color: C.muted }}>
            {BIZ.rubro} · {BIZ.city}, {BIZ.region} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
          </p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-xs mb-8" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink transition-colors uppercase tracking-[0.14em]">
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-[11px] leading-relaxed border-t pt-6" style={{ color: C.muted, borderColor: C.line }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            productos, precios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
