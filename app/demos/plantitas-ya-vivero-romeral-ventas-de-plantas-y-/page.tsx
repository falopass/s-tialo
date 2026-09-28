import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, FaqList } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/lato/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})

const C = {
  petrol: '#0E4C5C',
  deep: '#093341',
  paper: '#F7F9F9',
  mint: '#9FD8CB',
  mintSoft: '#E4F3EE',
  ink: '#26333B',
  muted: '#5B6E76',
  line: 'rgba(14,76,92,0.16)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

export const metadata: Metadata = demoMetadata({
  slug: 'plantitas-ya-vivero-romeral-ventas-de-plantas-y-',
  title: 'Plantitas Yá! & Vivero Romeral — Plantas y árboles en Romeral',
  description: 'Vivero en Romeral, Región del Maule: plantas de temporada, aromáticas, frutales y árboles a un costado de la J-55. Pide por WhatsApp y retira en el vivero.',
  image: '/demos/plantitas-ya-vivero-romeral-ventas-de-plantas-y-/hero.webp',
})

const NAV_LINKS = [
  { label: 'Listado y precios', href: '#listado' },
  { label: 'Fotos', href: '#productos' },
  { label: 'El vivero', href: '#vivero' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

const ICON_PATHS: Record<string, React.ReactNode> = {
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4.5 3.5-7.5 8-7.5 0 5-3.5 7.5-8 7.5Z" />
      <path d="M12 12c0-3.5-2.8-6-7-6 .5 4.5 3 6 7 6Z" />
    </>
  ),
  fruit: (
    <>
      <circle cx="12" cy="9" r="5.2" />
      <path d="M12 14.2V21" />
      <path d="M7 21h10" />
    </>
  ),
  pine: (
    <>
      <path d="M12 3 6.8 10.5h3L5.5 17h13l-4.3-6.5h3L12 3Z" />
      <path d="M12 17v4" />
    </>
  ),
  potplant: (
    <>
      <path d="M9 4c0 3 1 5 3 6 2-1 3-3 3-6" />
      <path d="M12 10v3" />
      <path d="M7 13h10l-1.2 7a2 2 0 0 1-2 1.6h-3.6a2 2 0 0 1-2-1.6L7 13Z" />
    </>
  ),
  cactus: (
    <>
      <path d="M10 8a2.5 2.5 0 0 1 5 0v6h-5V8Z" />
      <path d="M15 10.5h1.3a1.7 1.7 0 0 0 0-3.4H15" />
      <path d="M10 11.5H8.7a1.7 1.7 0 0 1 0-3.4H10" />
      <path d="M6.5 15.5h11l-1 6h-9l-1-6Z" />
    </>
  ),
  pot: (
    <>
      <path d="M6 9h12l-1.4 11.5a2 2 0 0 1-2 1.5H9.4a2 2 0 0 1-2-1.5L6 9Z" />
      <path d="M4.5 9h15" />
    </>
  ),
  bag: (
    <>
      <path d="M7 7h10l1.2 14H5.8L7 7Z" />
      <path d="M9.5 7c0-2.2 1.1-3.5 2.5-3.5s2.5 1.3 2.5 3.5" />
    </>
  ),
  tag: (
    <>
      <path d="M4 5h8l8 8-7 7-8-8V5Z" />
      <circle cx="8.5" cy="9.5" r="1.3" />
    </>
  ),
}

function Icon({ name }: { name: keyof typeof ICON_PATHS }) {
  return (
    <span
      className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: C.mintSoft, color: C.petrol }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[21px] h-[21px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICON_PATHS[name]}
      </svg>
    </span>
  )
}

// Catálogo de muestra: las líneas y valores son referenciales para
// mostrar el formato; al publicar va el stock y los precios reales.
const CATALOGO: { icon: keyof typeof ICON_PATHS; name: string; desc: string; price: string }[] = [
  {
    icon: 'sprout',
    name: 'Aromáticas y de temporada',
    desc: 'Albahaca, romero, menta, orégano y lo que esté saliendo del semillero.',
    price: 'desde $2.500',
  },
  {
    icon: 'fruit',
    name: 'Frutales enraizados',
    desc: 'Limonero, naranjo, durazno e higuera, según la época del año.',
    price: 'desde $8.500',
  },
  {
    icon: 'pine',
    name: 'Árboles ornamentales y de sombra',
    desc: 'Ejemplares jóvenes en bolsa, listos para trasplantar al jardín o al sitio.',
    price: 'desde $12.000',
  },
  {
    icon: 'potplant',
    name: 'Plantas de interior',
    desc: 'Potos, sansevieria y otras de buena tolerancia para casa y oficina.',
    price: 'desde $5.000',
  },
  {
    icon: 'cactus',
    name: 'Suculentas y cactus',
    desc: 'Variedades pequeñas, ideales para regalo o para ir armando colección.',
    price: 'desde $1.500',
  },
  {
    icon: 'pot',
    name: 'Maceteros',
    desc: 'Terracota y plástico en varios tamaños, para el trasplante inmediato.',
    price: 'desde $3.000',
  },
  {
    icon: 'bag',
    name: 'Sustrato y tierra de hoja',
    desc: 'Sacos listos para macetero, huerto y trasplante.',
    price: '$4.500 el saco',
  },
  {
    icon: 'tag',
    name: 'Pedido por encargo',
    desc: '¿Buscas una variedad que no ves? La conseguimos para tu proyecto.',
    price: 'a convenir',
  },
]

const PRODUCTOS = [
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Hileras de ejemplares jóvenes en bolsa bajo la malla del vivero',
    name: 'Árboles y frutales',
    desc: 'Ejemplares en bolsa: frutales, ornamentales y de sombra, crecidos al aire libre con la cordillera de fondo.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Mesa de trabajo del vivero con albahaca, romero y semilleros',
    name: 'Plantas de temporada y aromáticas',
    desc: 'La mesa de trabajo del vivero: aromáticas y semilleros que cambian con cada temporada del año.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Pedido armado a mano: plantas escogidas, macetero y sustrato',
    name: 'Pedidos preparados con calma',
    desc: 'Tu pedido se arma a mano: plantas escogidas, macetero y sustrato, listos para retirar camino a Romeral.',
  },
]

const FAQS = [
  {
    q: '¿Dónde están ubicados?',
    a: `En ${BIZ.address}, ${BIZ.city}, ${BIZ.region}. Es el cruce de la J-55 camino a Romeral: se ve el vivero al costado de la carretera.`,
  },
  {
    q: '¿Cómo compro una planta?',
    a: 'Texto de muestra: la idea es pedir por WhatsApp — planta, cantidad y día de retiro — y pasar a buscarla al vivero, o visitar directamente y elegir caminando entre las hileras.',
  },
  {
    q: '¿Hacen despachos a domicilio?',
    a: 'Texto de muestra: en el sitio final va la política real de reparto a Romeral, Curicó y comunas cercanas.',
  },
  {
    q: '¿Las plantas tienen garantía?',
    a: 'Texto de muestra: la versión publicada puede incluir una garantía de planta sana con las condiciones reales del vivero.',
  },
  {
    q: '¿Qué hay disponible esta semana?',
    a: 'El stock cambia con la temporada. La foto y el listado de la semana se comparten por WhatsApp y en la página de Facebook del vivero.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.mint : C.petrol }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function PlantitasYaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,249,249,0.95)',
          ink: C.petrol,
          line: C.line,
          btnBg: C.petrol,
          btnInk: '#F7F9F9',
        }}
      />

      {/* ── Ficha del vivero (directorio) ── */}
      <section id="inicio" className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-[104px] pb-14 md:pb-20">
          <Reveal>
            <div
              className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 py-2.5 mb-10 md:mb-14 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold"
              style={{
                borderTop: `2px solid ${C.petrol}`,
                borderBottom: `1px solid ${C.line}`,
                color: C.muted,
              }}
            >
              <span>
                {BIZ.rubro} · {BIZ.city} · {BIZ.region}
              </span>
              <span className="hidden sm:inline">Cruce J-55 · km 1</span>
              <span style={{ color: C.petrol }}>Sitio de ejemplo</span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <h1
                className={`${display.className} font-medium leading-[1.04] tracking-[-0.01em] text-[clamp(2.3rem,6vw,4.2rem)] mb-5`}
                style={{ color: C.petrol }}
              >
                {BIZ.name}
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: C.muted }}>
                Plantas, aromáticas, frutales y árboles al costado de la
                J-55, camino a Romeral. Pides por WhatsApp y retiras en el
                vivero, con el consejo de quien las produce.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-[transform,filter] hover:brightness-110 active:scale-95 ${FOCUS}`}
                  style={{ backgroundColor: C.petrol, color: C.paper, outlineColor: C.petrol }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href="#listado"
                  className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-[rgba(14,76,92,0.07)] ${FOCUS}`}
                  style={{ borderColor: 'rgba(14,76,92,0.35)', color: C.petrol, outlineColor: C.petrol }}
                >
                  Ver listado y precios
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold underline underline-offset-4 decoration-2 transition-colors ${FOCUS}`}
                  style={{ color: C.petrol, textDecorationColor: 'rgba(14,76,92,0.3)', outlineColor: C.petrol }}
                >
                  {BIZ.reviews} reseñas en Google →
                </a>
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold underline underline-offset-4 decoration-2 transition-colors ${FOCUS}`}
                  style={{ color: C.petrol, textDecorationColor: 'rgba(14,76,92,0.3)', outlineColor: C.petrol }}
                >
                  {BIZ.followers} seguidores en Facebook →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <figure className="rounded-2xl overflow-hidden border bg-white" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Pasillo del vivero con hileras de plantas en bolsas, bajo malla de sombreo y cerros de fondo"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="px-4 py-3 text-xs md:text-sm leading-snug border-t"
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  El vivero al costado de la carretera, camino a Romeral.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* fila de datos de la ficha */}
          <Reveal delay={200}>
            <dl
              className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mt-12 md:mt-16 border-t pt-8"
              style={{ borderColor: C.line }}
            >
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1.5" style={{ color: C.muted }}>
                  Dirección
                </dt>
                <dd className="text-sm md:text-base leading-snug" style={{ color: C.ink }}>
                  {BIZ.address}, {BIZ.city}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1.5" style={{ color: C.muted }}>
                  Teléfono
                </dt>
                <dd className="text-sm md:text-base leading-snug">
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`underline underline-offset-2 ${FOCUS}`}
                    style={{ color: C.ink, outlineColor: C.petrol }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1.5" style={{ color: C.muted }}>
                  Reseñas
                </dt>
                <dd className="text-sm md:text-base leading-snug" style={{ color: C.ink }}>
                  {BIZ.reviews} en Google Maps
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1.5" style={{ color: C.muted }}>
                  Retiro
                </dt>
                <dd className="text-sm md:text-base leading-snug" style={{ color: C.ink }}>
                  En el vivero, junto a la J-55
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Listado con precios (directorio funcional) ── */}
      <section id="listado" className="scroll-mt-20" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Listado del vivero</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
              <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.petrol }}>
                Catálogo y precios
                <br />
                de referencia
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                <span className="font-bold" style={{ color: C.petrol }}>Valores de muestra.</span>{' '}
                En el sitio publicado van los precios y el stock real de
                la semana, siempre confirmados por WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ol className="border-t" style={{ borderColor: C.line }}>
              {CATALOGO.map((item, i) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 md:gap-6 py-4 md:py-5 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl border-b transition-colors hover:bg-white/70"
                  style={{ borderColor: C.line }}
                >
                  <span className="hidden sm:block font-mono text-[11px] w-7 shrink-0" style={{ color: C.muted }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon name={item.icon} />
                  <div className="min-w-0">
                    <h3 className={`${display.className} font-semibold text-lg md:text-xl leading-snug`} style={{ color: C.petrol }}>
                      {item.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {item.desc}
                    </p>
                  </div>
                  <p className="ml-auto shrink-0 text-right font-bold text-sm md:text-base tabular-nums" style={{ color: C.petrol }}>
                    {item.price}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs leading-relaxed max-w-md" style={{ color: C.muted }}>
                La disponibilidad cambia cada semana según temporada. El
                encargo de variedades se coordina por WhatsApp.
              </p>
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-[transform,filter] hover:brightness-110 active:scale-95 ${FOCUS}`}
                style={{ backgroundColor: C.petrol, color: C.paper, outlineColor: C.petrol }}
              >
                Consultar stock por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Fotos del vivero ── */}
      <section id="productos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Qué vendemos</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.petrol }}>
              Del semillero
              <br />
              <em className="font-normal" style={{ color: C.muted }}>a tu jardín</em>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Categorías de ejemplo: al publicar va la oferta real del
              vivero, con fotos de las hileras y la temporada en curso.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {PRODUCTOS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <li
                className="group rounded-2xl overflow-hidden border h-full bg-white"
                style={{ borderColor: C.line, boxShadow: '0 1px 2px rgba(9,51,65,0.05)' }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center`}
                    style={{ backgroundColor: 'rgba(247,249,249,0.92)', color: C.petrol }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className={`${display.className} font-semibold text-xl md:text-[1.35rem] mb-2`} style={{ color: C.petrol }}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Sobre el vivero ── */}
      <section id="vivero" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 border-t" style={{ borderColor: C.line }}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden relative aspect-[4/3]" style={{ boxShadow: '0 20px 50px rgba(9,51,65,0.18)' }}>
              <Image
                src={`${IMG}/ambiente.webp`}
                alt="Entrada del vivero al costado de la carretera, junto al canal, con malla de sombreo y cerros de fondo"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El vivero</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.petrol }}>
              Atención directa,
              <br />
              <em className="font-normal" style={{ color: C.muted }}>al borde del camino</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              Plantitas Yá! &amp; Vivero Romeral es el vivero del cruce de
              la J-55, camino a Romeral. Acá conversas directamente con
              quien produce las plantas: qué necesita cada una, cuándo
              trasplantar y qué variedad le conviene a tu patio.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                `${BIZ.reviews} reseñas publicadas en Google Maps`,
                `${BIZ.followers} seguidores en su página de Facebook`,
                'Retiro en el vivero, a pasos de la carretera',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.petrol }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold underline underline-offset-4 decoration-2 ${FOCUS}`}
              style={{ color: C.petrol, textDecorationColor: 'rgba(14,76,92,0.3)', outlineColor: C.petrol }}
            >
              Ver la página en Facebook →
            </a>
          </Reveal>
        </div>

        {/* reseñas de muestra */}
        <div className="mt-16 md:mt-20 border-t pt-12 md:pt-16" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <h3 className={`${display.className} font-medium text-2xl md:text-3xl leading-tight mb-4`} style={{ color: C.petrol }}>
                Lo que valoran los clientes
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                El vivero acumula {BIZ.reviews} reseñas en su ficha de
                Google. Estos textos son de muestra: al publicar van las
                reseñas reales.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold underline underline-offset-4 decoration-2 ${FOCUS}`}
                style={{ color: C.petrol, textDecorationColor: 'rgba(14,76,92,0.3)', outlineColor: C.petrol }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {[
                'Buena variedad de plantas y te explican cómo cuidarlas. Paré a mirar de pasada y salí con el auto lleno.',
                'Precios justos y plantas sanas. El limonero que compré el año pasado ya está dando fruta.',
                'Atención de verdad: te dicen qué planta te va a resultar según el lugar, no te venden por vender.',
              ].map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure className="rounded-2xl p-6 md:p-7 border bg-white" style={{ borderColor: C.line }}>
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.petrol }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA intermedio ── */}
      <section style={{ backgroundColor: C.petrol }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Reveal>
            <h2 className={`${display.className} font-medium text-3xl md:text-4xl leading-tight`} style={{ color: C.paper }}>
              ¿Buscas algo en particular?
            </h2>
            <p className="text-sm md:text-base mt-2 max-w-md leading-relaxed" style={{ color: 'rgba(247,249,249,0.75)' }}>
              Manda una foto del lugar o el nombre de la variedad y te
              decimos si la hay o te la conseguimos.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block shrink-0 font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-[transform,filter] hover:brightness-110 active:scale-95 ${FOCUS} focus-visible:outline-white`}
              style={{ backgroundColor: C.mint, color: C.deep }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.petrol }}>
            Antes de escribir
          </h2>
          <p className="text-sm max-w-lg leading-relaxed mb-10" style={{ color: C.muted }}>
            Respuestas de muestra: en la versión publicada van las
            condiciones reales del vivero.
          </p>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.petrol, a: C.muted, line: C.line, plusBg: C.mintSoft, plusInk: C.petrol }}
        />
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.petrol }}>
              En el km 1
              <br />
              de la J-55
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`underline underline-offset-2 ${FOCUS}`}
                style={{ outlineColor: C.petrol }}
              >
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              El vivero está a un costado de la carretera camino a
              Romeral: se ven las hileras bajo la malla desde el camino.
              Coordina tu visita o tu pedido por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-[transform,filter] hover:brightness-110 active:scale-95 ${FOCUS}`}
                style={{ backgroundColor: C.petrol, color: C.paper, outlineColor: C.petrol }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-[rgba(14,76,92,0.07)] ${FOCUS}`}
                style={{ borderColor: 'rgba(14,76,92,0.35)', color: C.petrol, outlineColor: C.petrol }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full bg-white" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 md:pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,249,249,0.85)' }}>
              {BIZ.address}, {BIZ.city} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className={`underline underline-offset-2 ${FOCUS} focus-visible:outline-white`}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem] md:pr-16" style={{ color: 'rgba(247,249,249,0.78)' }}>
            Mockup de Sitiazo: datos del vivero reales; catálogo, precios, reseñas y textos de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
