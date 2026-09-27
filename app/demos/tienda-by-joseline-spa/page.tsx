import type { Metadata } from 'next'
import Image from 'next/image'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { BIZ, WA_LINK, waLinkProducto, WA_CATALOG, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})
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
  muted: '#6B6F74',
  orange: '#E8631A',
  gold: '#B99A5F',
  goldInk: '#8A6D35',
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
    alt: 'Conjunto básico de lencería en tonos neutros sobre fondo claro — foto de muestra',
  },
  {
    n: '02',
    name: 'Encaje y ocasiones',
    desc: 'Piezas de encaje, transparencias y detalles finos para una fecha especial o para sentirse bien.',
    price: 'desde $12.990',
    img: 'detalle2.webp',
    alt: 'Detalle de prenda de encaje con terminaciones finas — foto de muestra',
  },
  {
    n: '03',
    name: 'Pijamas y descanso',
    desc: 'Pijamas, camisones y ropa de estar en casa: suaves, frescas y pensadas para el descanso.',
    price: 'desde $9.990',
    img: 'detalle3.webp',
    alt: 'Pijama de tela suave doblado sobre una repisa — foto de muestra',
  },
  {
    n: '04',
    name: 'Packs y regalos',
    desc: 'Packs armados para regalar: se elige diseño y talla por WhatsApp y queda listo para retirar.',
    price: 'desde $14.990',
    img: 'ambiente.webp',
    alt: 'Pack de regalo envuelto en papel de la tienda — foto de muestra',
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
      className="text-[10px] md:text-[11px] uppercase tracking-[0.38em] font-medium flex items-center justify-center gap-4"
      style={{ color: light ? 'rgba(255,255,255,0.75)' : C.fleet }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: light ? 'rgba(255,255,255,0.4)' : 'rgba(185,154,95,0.8)' }}
        aria-hidden="true"
      />
      {children}
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: light ? 'rgba(255,255,255,0.4)' : 'rgba(185,154,95,0.8)' }}
        aria-hidden="true"
      />
    </p>
  )
}

function Btn({
  href,
  children,
  variant = 'solid',
  external = true,
}: {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'ghost-light' | 'ghost-dark'
  external?: boolean
}) {
  const cls = `${display.className} inline-block text-xs md:text-sm uppercase tracking-[0.22em] px-8 md:px-10 py-4 transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A5F]`
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  if (variant === 'solid')
    return (
      <a href={href} {...ext} className={`${cls} bg-[#C1272D] text-white hover:bg-[#9E2025]`}>
        {children}
      </a>
    )
  if (variant === 'ghost-dark')
    return (
      <a
        href={href}
        {...ext}
        className={`${cls} border text-white hover:bg-white/10`}
        style={{ borderColor: 'rgba(255,255,255,0.45)' }}
      >
        {children}
      </a>
    )
  return (
    <a href={href} {...ext} className={`${cls} border hover:bg-black/[0.04]`} style={{ borderColor: 'rgba(35,38,40,0.4)', color: C.ink }}>
      {children}
    </a>
  )
}

export default function TiendaByJoselineSpaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(255,255,255,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero editorial: aire, tipografía, una sola imagen enmarcada ── */}
      <section id="inicio" className="scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 pt-32 md:pt-44 text-center">
          <Reveal>
            <Eyebrow>Lencería · Pencahue · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} uppercase tracking-[0.09em] leading-[1.08] text-[clamp(2.2rem,7.5vw,4.6rem)] mt-8 mb-7`}
            >
              Lencería que se
              <br />
              <span className="italic normal-case tracking-normal">elige con calma</span>
            </h1>
            <p className="text-[15px] md:text-base leading-[1.8] max-w-md mx-auto mb-10" style={{ color: C.muted }}>
              Conjuntos, encaje y pijamas escogidos pieza a pieza en Brisas de
              Pencahue. Consulta tu talla por WhatsApp y retira o recibe tu
              encargo coordinado con Joseline.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK}>Consultar por WhatsApp</Btn>
              <Btn href="#coleccion" variant="ghost-light" external={false}>
                Ver la colección
              </Btn>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 text-[11px] md:text-xs font-semibold tracking-[0.12em] uppercase transition-colors hover:text-[#C1272D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A5F]"
              style={{ color: C.fleet }}
            >
              <Stars value={5} color={C.gold} className="w-[11px] h-[11px]" />
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="max-w-5xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-20 md:pb-28">
          <Reveal delay={140}>
            <figure>
              <div className="border p-2 md:p-2.5" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] overflow-hidden" style={{ backgroundColor: C.soft }}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Interior de Tienda By Joseline Spa: perchas con conjuntos de lencería ordenados por color, luz suave de vitrina"
                    fill
                    priority
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption
                className="mt-4 text-center text-[10px] uppercase tracking-[0.26em]"
                style={{ color: C.muted }}
              >
                La tienda por dentro · Brisas de Pencahue 2
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La colección ── */}
      <section id="coleccion" className="scroll-mt-24 max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <Eyebrow>La colección</Eyebrow>
          <h2 className={`${display.className} uppercase tracking-[0.08em] text-4xl md:text-[3.4rem] leading-[1.06] text-center mt-7 mb-6`}>
            Cuatro líneas,
            <br />
            <span className="italic normal-case tracking-normal">escogidas a mano</span>
          </h2>
          <p className="text-[15px] md:text-base leading-[1.8] text-center max-w-md mx-auto" style={{ color: C.muted }}>
            Una muestra del surtido de la tienda. Al publicar van las fotos y
            categorías reales del negocio.
          </p>
        </Reveal>
        <div className="mt-16 md:mt-24 grid sm:grid-cols-2 gap-x-8 gap-y-20 md:gap-x-12">
          {COLLECTION.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <figure className="group text-center">
                <div className="relative">
                  <div className="border p-2 md:p-2.5" style={{ borderColor: C.line }}>
                    <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.soft }}>
                      <Image
                        src={`${IMG}/${p.img}`}
                        alt={p.alt}
                        fill
                        loading="eager"
                        sizes="(min-width: 1024px) 460px, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                      />
                    </div>
                  </div>
                  <span
                    className={`${display.className} italic absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.32em] px-4 py-1 border`}
                    style={{ backgroundColor: C.paper, borderColor: 'rgba(185,154,95,0.5)', color: C.goldInk }}
                    aria-hidden="true"
                  >
                    {p.n}
                  </span>
                </div>
                <figcaption className="pt-8">
                  <h3 className={`${display.className} uppercase tracking-[0.12em] text-xl md:text-2xl mb-3`}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-[1.75] max-w-xs mx-auto mb-5" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                  <p className="flex items-baseline justify-center gap-5 text-sm">
                    <span className={`${display.className} text-lg`} style={{ color: C.ink }}>
                      {p.price}
                    </span>
                    <a
                      href={waLinkProducto(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-1 transition-colors hover:text-[#C1272D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A5F]"
                      style={{ color: C.fleet, textDecorationColor: 'rgba(185,154,95,0.7)' }}
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
      <section id="la-tienda" className="scroll-mt-24 border-y" style={{ borderColor: C.line, backgroundColor: C.soft }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Eyebrow>La tienda</Eyebrow>
            <h2 className={`${display.className} uppercase tracking-[0.08em] text-4xl md:text-[3.4rem] leading-[1.06] mt-7 mb-7`}>
              Atendida por su dueña,
              <br />
              <span className="italic normal-case tracking-normal">en Pencahue</span>
            </h2>
            <p className="text-[15px] md:text-base leading-[1.8] max-w-lg mx-auto mb-14" style={{ color: C.muted }}>
              Tienda By Joseline Spa funciona en Brisas de Pencahue 2 y atiende
              directo: Joseline ayuda a elegir talla, confirma cada encargo por
              WhatsApp y coordina la entrega para que llegue a tiempo, sin
              vueltas.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-3 gap-4 md:gap-8 border-y py-9 md:py-11" style={{ borderColor: C.line }}>
              {[
                { v: String(BIZ.reviews), l: 'reseñas en Google' },
                { v: 'Directa', l: 'atención de la dueña' },
                { v: 'A tiempo', l: 'encargos coordinados' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className={`${display.className} italic text-2xl md:text-4xl mb-2`}>{s.v}</dt>
                  <dd className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] leading-snug" style={{ color: C.muted }}>
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="mt-16 md:mt-20 space-y-12">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <blockquote className="max-w-xl mx-auto">
                  <p className={`${display.className} italic text-xl md:text-2xl leading-[1.5] mb-4`} style={{ color: C.fleet }}>
                    “{t}”
                  </p>
                  <cite className="not-italic text-[10px] uppercase tracking-[0.3em] font-semibold" style={{ color: C.goldInk }}>
                    Reseña de ejemplo
                  </cite>
                </blockquote>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <p className="text-xs leading-[1.75] max-w-sm mx-auto" style={{ color: C.muted }}>
                La ficha de Google registra {BIZ.reviews} reseñas. Estos textos
                son de muestra: al publicar van las reseñas reales.{' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-1 font-medium transition-colors hover:text-[#9E2025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A5F]"
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
      <section id="precios" className="scroll-mt-24 max-w-2xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Lista de referencia</Eyebrow>
          <h2 className={`${display.className} uppercase tracking-[0.08em] text-4xl md:text-[3rem] leading-[1.08] text-center mt-7 mb-6`}>
            Precios <span className="italic normal-case tracking-normal">de muestra</span>
          </h2>
          <p className="text-[15px] leading-[1.8] text-center max-w-sm mx-auto mb-14" style={{ color: C.muted }}>
            Valores de referencia para ilustrar el sitio. Precio y talla
            disponible se confirman por WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border-t" style={{ borderColor: C.line }}>
            {PRICE_LIST.map((p, i) => (
              <li
                key={p.name}
                className="flex items-baseline justify-between gap-6 py-6 border-b"
                style={{ borderColor: C.line }}
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span className={`${display.className} italic text-xs tracking-[0.2em] shrink-0`} style={{ color: C.goldInk }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-[15px] md:text-base">{p.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.18em] mt-1" style={{ color: C.muted }}>
                      {p.unit}
                    </p>
                  </div>
                </div>
                <p className={`${display.className} text-lg md:text-xl shrink-0`} style={{ color: C.red }}>
                  {p.price}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-center text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>
            Lista de muestra · el sitio real lleva los precios del negocio
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-16 text-center">
            <p className={`${display.className} italic text-2xl md:text-[1.7rem] leading-snug mb-8`} style={{ color: C.fleet }}>
              ¿Algo te gustó? Te confirmamos
              <br />
              talla y precio hoy mismo.
            </p>
            <Btn href={WA_LINK}>Consultar por WhatsApp</Btn>
          </div>
        </Reveal>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-24 border-t" style={{ borderColor: C.line, backgroundColor: C.fleet }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Eyebrow light>Contacto</Eyebrow>
            <h2
              className={`${display.className} uppercase tracking-[0.08em] text-4xl md:text-[3.4rem] leading-[1.06] mt-7 mb-7`}
              style={{ color: '#fff' }}
            >
              Encarga tu talla
              <br />
              <span className="italic normal-case tracking-normal">por WhatsApp</span>
            </h2>
            <p className="text-[15px] md:text-base leading-[1.8] max-w-md mx-auto mb-11" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Escríbenos con lo que buscas — prenda, color y talla — y te
              confirmamos precio, stock y entrega el mismo día.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <Btn href={WA_LINK}>Escribir por WhatsApp</Btn>
              <Btn href={WA_CATALOG} variant="ghost-dark">
                Catálogo de WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border p-2 md:p-2.5 max-w-2xl mx-auto" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px] md:h-[340px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <address className="not-italic text-sm leading-[1.9] mt-9" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="underline underline-offset-4 decoration-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A5F]"
              >
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A5F]"
              >
                Cómo llegar
              </a>
            </address>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-4xl mx-auto pl-5 pr-20 md:px-8 pt-8 pb-24 md:pb-8 text-center">
          <p className={`${display.className} uppercase tracking-[0.14em] text-xl mb-1`}>{BIZ.name}</p>
          <p className="text-xs leading-[1.75] mb-4" style={{ color: C.muted }}>
            {BIZ.rubro} · {BIZ.city} ·{' '}
            <a
              href={`tel:${BIZ.phoneTel}`}
              className="underline underline-offset-2 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A5F]"
            >
              {BIZ.phoneDisplay}
            </a>
          </p>
          <p className="text-[11px] leading-[1.75] border-t pt-4" style={{ color: C.muted, borderColor: C.line }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.red }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, productos, precios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.red }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
