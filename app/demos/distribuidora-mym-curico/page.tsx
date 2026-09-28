import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PRECIO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  orange: '#D84F26',
  orangeDeep: '#B03C1A',
  orangeLight: '#FF8A5C',
  onOrange: '#16181A',
  concrete: '#3A3F44',
  deep: '#2B2F33',
  arena: '#EDE6DA',
  card: '#F7F3EB',
  ink: '#3A3F44',
  muted: '#645E53',
  line: 'rgba(58,63,68,0.16)',
  lineLight: 'rgba(237,230,218,0.22)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4572E]'
const FOCUS_LIGHT = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EDE6DA]'

export const metadata: Metadata = demoMetadata({
  slug: 'distribuidora-mym-curico',
  title: 'Distribuidora MyM Curicó — Artículos para el hogar en Av. O’Higgins',
  description: 'Tienda de artículos para el hogar en Av. O’Higgins 1005, Curicó: detergentes, limpieza, menaje, plásticos y bazar. Consulta por WhatsApp.',
  image: '/demos/distribuidora-mym-curico/hero.webp',
})

const NAV_LINKS = [
  { label: 'Productos', href: '#productos' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const CATEGORIAS = [
  'Detergentes',
  'Escobas y mopas',
  'Baldes',
  'Menaje',
  'Plásticos',
  'Ollas esmaltadas',
  'Paños y toallas',
  'Artículos de cocina',
]

const PRODUCTOS = [
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Pared de escobas, trapeadores, baldes y cepillos de la tienda',
    name: 'Limpieza y aseo',
    desc: 'Escobas, trapeadores, baldes, cepillos y paños: lo básico para mantener la casa impeque, de marcas que duran.',
    chips: ['Escobas', 'Trapeadores', 'Baldes'],
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Detergentes, mopas y accesorios de aseo junto a la entrada del local',
    name: 'Detergentes y limpieza',
    desc: 'Detergentes, lavaloza, cloro y limpiadores para el día a día, al detalle y por mayor para almacenes y negocios.',
    chips: ['Detergentes', 'Lavaloza', 'Por mayor'],
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Repisa de madera con ollas esmaltadas, cucharones de acero y paños de cocina',
    name: 'Cocina y menaje',
    desc: 'Ollas esmaltadas, cucharones, contenedores y paños: el menaje que se usa todos los días, en varios tamaños.',
    chips: ['Ollas', 'Utensilios', 'Contenedores'],
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Mostrador de madera y estantes con loza, canastos y artículos de bazar',
    name: 'Bazar y hogar',
    desc: 'Loza, vasos, canastos, organización y esos cachureos útiles que siempre hacen falta en la casa.',
    chips: ['Loza', 'Organización', 'Regalos útiles'],
  },
]

const PRECIOS = [
  { name: 'Detergente líquido bidón 5 L', price: 'desde $6.990' },
  { name: 'Escoba de salón', price: 'desde $2.990' },
  { name: 'Set contenedores herméticos (3 piezas)', price: '$9.990' },
  { name: 'Olla esmaltada 24 cm', price: '$12.990' },
  { name: 'Pack paños multiuso (10 un.)', price: '$3.500' },
  { name: 'Trapeador + balde exprimidor', price: '$15.990' },
]

const TESTIMONIOS = [
  {
    text: 'Siempre encuentro lo que necesito para la casa y me atienden altiro, sin vueltas.',
    author: 'Clienta del centro',
  },
  {
    text: 'Compré detergentes por mayor para el negocio y me salió conveniente.',
    author: 'Dueña de almacén',
  },
  {
    text: 'El local tiene de todo: desde la escoba hasta los frascos para guardar.',
    author: 'Cliente de Curicó',
  },
]

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? 'rgba(237,230,218,0.8)' : C.muted }}
    >
      <span className="inline-block w-2.5 h-2.5" style={{ backgroundColor: C.orange }} aria-hidden="true" />
      {children}
    </p>
  )
}

function Star({ color, className = 'w-[15px] h-[15px]' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
    </svg>
  )
}

export default function DistribuidoraMymCuricoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.arena, color: C.ink }}
    >
      <style>{`
        .mym-band > div { position: static; max-width: none; border-radius: 0; box-shadow: none; background: transparent; justify-content: center; padding: 14px 20px; }
      `}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(237,230,218,0.94)',
          ink: C.concrete,
          line: C.line,
          btnBg: C.orangeDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero tipográfico, sin foto ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col overflow-hidden"
        style={{ backgroundColor: C.concrete }}
      >
        {/* Regla de obra al borde izquierdo */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[26px] hidden md:block"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, rgba(237,230,218,0.55) 0, rgba(237,230,218,0.55) 1px, transparent 1px, transparent 22px)',
            backgroundSize: '9px 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
          }}
        />
        {/* MYM gigante en contorno */}
        <div
          aria-hidden="true"
          className={`${display.className} absolute right-0 -bottom-10 select-none pointer-events-none font-bold leading-none`}
          style={{
            fontSize: 'clamp(11rem, 30vw, 26rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(237,230,218,0.13)',
          }}
        >
          MYM
        </div>

        {/* Fila de datos superior */}
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-24 md:pt-28">
          <div
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-y py-2.5 text-[10px] md:text-xs uppercase tracking-[0.18em] font-semibold"
            style={{ borderColor: C.lineLight, color: 'rgba(237,230,218,0.7)' }}
          >
            <span>{BIZ.rubro}</span>
            <span className="hidden md:inline">{BIZ.address}</span>
            <span>{BIZ.city} · Chile</span>
          </div>
        </div>

        {/* Titular gigante */}
        <div className="relative flex-1 flex items-center">
          <div className="max-w-6xl mx-auto w-full px-5 md:px-8 py-12">
            <Reveal>
              <p
                className={`${display.className} font-bold uppercase tracking-[0.32em] text-xs md:text-sm mb-5 md:mb-7`}
                style={{ color: C.orangeLight }}
              >
                {BIZ.name}
              </p>
              <h1
                className={`${display.className} font-bold uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.5rem,10.5vw,8.5rem)]`}
              >
                <span style={{ color: C.arena }}>De la escoba</span>
                <br />
                <span style={{ color: C.orangeLight }}>a la olla.</span>
              </h1>
              <p
                className="mt-6 md:mt-8 max-w-xl text-base md:text-lg leading-relaxed"
                style={{ color: 'rgba(237,230,218,0.78)' }}
              >
                {BIZ.rubro} en {BIZ.address}, {BIZ.city}: detergentes,
                menaje, plásticos y todo lo que la casa necesita,
                atendido por su propia gente.
              </p>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95`}
                  style={{ backgroundColor: C.orangeDeep, color: '#FFFFFF' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="#productos"
                  className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10`}
                  style={{ borderColor: 'rgba(237,230,218,0.5)', color: C.arena }}
                >
                  Ver productos
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(43,47,51,0.5)' }}>
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]"
            style={{ color: 'rgba(237,230,218,0.78)' }}
          >
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} flex items-center gap-2 font-semibold transition-colors hover:text-white`}
            >
              <Star color={C.orange} className="w-[13px] h-[13px]" />
              {BIZ.reviews} reseñas en Google
            </a>
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} font-semibold transition-colors hover:text-white`}
            >
              +{BIZ.followers} seguidores en Facebook
            </a>
            <a
              href={`tel:${BIZ.phoneTel}`}
              className={`${FOCUS} font-semibold transition-colors hover:text-white`}
            >
              {BIZ.phoneDisplay}
            </a>
            <span className="hidden sm:inline">Atención directa, sin intermediarios</span>
            <span className="hidden md:inline" style={{ color: 'rgba(237,230,218,0.7)' }}>
              sitio de ejemplo
            </span>
          </div>
        </div>
      </section>

      {/* ── Cinta marquee de categorías ── */}
      <section aria-label="Categorías" style={{ backgroundColor: C.orange }}>
        <ul
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 md:py-4 flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-[12px] md:text-sm font-bold uppercase tracking-[0.14em]`}
          style={{ color: '#0B0C0D' }}
        >
          {CATEGORIAS.map((cat, i) => (
            <li key={cat} className="flex items-center gap-5">
              {i > 0 && <span aria-hidden="true">▸</span>}
              {cat}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Productos: índice numerado ── */}
      <section id="productos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Qué vendemos</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2
              className={`${display.className} font-bold uppercase leading-[0.95] tracking-[-0.01em] text-4xl md:text-6xl`}
              style={{ color: C.concrete }}
            >
              Todo para
              <br />
              <span style={{ color: C.orangeDeep }}>la casa</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Una muestra de las líneas principales: al publicar van los
              productos y stock reales de la tienda.
            </p>
          </div>
        </Reveal>
        <ul>
          {PRODUCTOS.map((p, i) => (
            <li key={p.name} className="group border-t last:border-b" style={{ borderColor: C.line }}>
              <Reveal delay={i * 60}>
                <div className="grid md:grid-cols-[72px_1fr_300px] lg:grid-cols-[90px_1fr_360px] gap-5 md:gap-8 items-center py-6 md:py-8">
                  <span
                    className={`${display.className} font-bold text-3xl md:text-4xl leading-none transition-transform duration-300 group-hover:translate-x-1`}
                    style={{ color: C.orange }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className={`${display.className} font-bold uppercase tracking-[-0.01em] text-xl md:text-3xl mb-2`}
                      style={{ color: C.concrete }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-lg mb-3" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.chips.map((chip) => (
                        <span
                          key={chip}
                          className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-bold border px-2.5 py-1"
                          style={{ borderColor: C.line, color: C.muted }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── La tienda ── */}
      <section id="tienda" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <div className="relative h-full min-h-[320px]">
              <Image
                src={`${IMG}/hero.webp`}
                alt="Pasillo interior de Distribuidora MyM Curicó: estantes metálicos llenos de artículos para el hogar"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute bottom-0 left-0 px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold"
                style={{ backgroundColor: C.orangeDeep, color: '#FFFFFF' }}
              >
                {BIZ.address} · {BIZ.city}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>La tienda</Eyebrow>
            <h2
              className={`${display.className} font-bold uppercase leading-[0.98] tracking-[-0.01em] text-3xl md:text-5xl mb-6`}
              style={{ color: C.concrete }}
            >
              De Curicó,
              <br />
              <span style={{ color: C.orangeDeep }}>para Curicó</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: C.muted }}>
              Distribuidora MyM es una tienda de artículos para el hogar
              en plena avenida O’Higgins, a pasos del centro. Acá no hay
              góndolas infinitas ni letra chica: entras, preguntas y te
              llevas lo que necesitas.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Atiende su propia gente, y se nota: los clientes valoran el
              trato directo y encontrar de todo en un solo local.
            </p>
            <dl className="grid grid-cols-3 gap-4 max-w-md mb-9">
              {[
                { value: `${BIZ.reviews}`, label: 'reseñas en Google' },
                { value: `+${BIZ.followers}`, label: 'seguidores en Facebook' },
                { value: 'Directa', label: 'atención de su gente' },
              ].map((s) => (
                <div key={s.label} className="border-t-2 pt-3" style={{ borderColor: C.orange }}>
                  <dt className={`${display.className} font-bold text-lg md:text-2xl`} style={{ color: C.concrete }}>
                    {s.value}
                  </dt>
                  <dd className="text-xs md:text-sm leading-snug mt-1" style={{ color: C.muted }}>
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="space-y-3">
              {TESTIMONIOS.map((t) => (
                <figure key={t.author} className="border-l-2 pl-4 py-1" style={{ borderColor: C.line }}>
                  <blockquote className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption
                    className="text-[10px] uppercase tracking-[0.16em] font-bold mt-1.5"
                    style={{ color: C.orangeDeep }}
                  >
                    {t.author} · Reseña de ejemplo
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-xs leading-relaxed mt-5" style={{ color: C.muted }}>
              Textos de muestra: al publicar van las reseñas reales de su
              ficha de Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <div>
                <Eyebrow light>Lista de precios</Eyebrow>
                <h2
                  className={`${display.className} font-bold uppercase leading-[0.95] tracking-[-0.01em] text-4xl md:text-6xl`}
                  style={{ color: C.arena }}
                >
                  Precios de
                  <br />
                  <span style={{ color: C.orangeLight }}>referencia</span>
                </h2>
              </div>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'rgba(237,230,218,0.8)' }}>
                Valores de muestra para que veas cómo se lee la lista.
                Los precios reales se confirman en tienda o por WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="relative border-2 p-6 md:p-10"
              style={{ borderColor: 'rgba(237,230,218,0.35)', backgroundColor: 'rgba(237,230,218,0.04)' }}
            >
              <span
                className={`${display.className} absolute -top-3 left-6 md:left-10 px-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em]`}
                style={{ backgroundColor: C.deep, color: C.orangeLight }}
              >
                Lista de muestra
              </span>
              <ul>
                {PRECIOS.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed py-4 last:border-b-0"
                    style={{ borderColor: 'rgba(237,230,218,0.22)' }}
                  >
                    <span className="text-sm md:text-base font-medium" style={{ color: 'rgba(237,230,218,0.9)' }}>
                      {p.name}
                    </span>
                    <span
                      className={`${display.className} font-bold text-base md:text-xl shrink-0`}
                      style={{ color: C.orangeLight }}
                    >
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK_PRECIO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS_LIGHT} ${display.className} font-bold text-sm px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95`}
                style={{ backgroundColor: C.orangeDeep, color: '#FFFFFF' }}
              >
                Consultar precio real por WhatsApp
              </a>
              <p className="text-xs" style={{ color: 'rgba(237,230,218,0.78)' }}>
                También vendemos por mayor: consulta por volumen.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2
              className={`${display.className} font-bold uppercase leading-[0.95] tracking-[-0.01em] text-4xl md:text-6xl mb-6`}
              style={{ color: C.concrete }}
            >
              Pasa por el local
              <br />
              <span style={{ color: C.orangeDeep }}>o escribe al tiro</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {[
                { days: 'Lunes a sábado', time: 'Horario de tienda' },
                { days: 'Domingo', time: 'Consultar por WhatsApp' },
              ].map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horarios referenciales: al publicar van los horarios reales
              de la tienda.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95`}
                style={{ backgroundColor: C.orangeDeep, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/5`}
                style={{ borderColor: 'rgba(58,63,68,0.35)', color: C.concrete }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className="text-xs mt-6" style={{ color: C.muted }}>
              {BIZ.phoneDisplay} ·{' '}
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} font-semibold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70`}
                style={{ color: C.concrete, textDecorationColor: 'rgba(228,87,46,0.4)' }}
              >
                Facebook
              </a>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="border min-h-[320px] h-full"
              style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}
            >
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

      {/* ── CTA final a sangre naranja ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.orange }}>
        <div
          aria-hidden="true"
          className={`${display.className} absolute inset-x-0 -top-6 md:-top-10 text-center select-none pointer-events-none font-bold uppercase leading-none`}
          style={{
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(43,47,51,0.25)',
          }}
        >
          Hogar
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-bold uppercase text-[clamp(2.2rem,7vw,4.5rem)] leading-[0.95] tracking-[-0.01em] mb-6`}
              style={{ color: '#0B0C0D' }}
            >
              ¿Algo pa’ la casa?
              <br />
              <span className="inline-block mt-2 px-3 py-1" style={{ backgroundColor: C.onOrange, color: C.arena }}>Acá está.</span>
            </h2>
            <p
              className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed font-medium"
              style={{ color: '#0B0C0D' }}
            >
              Escríbenos por WhatsApp y te confirmamos stock y precio al
              momento. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS_LIGHT} ${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-125 active:scale-95`}
              style={{ backgroundColor: C.deep, color: C.arena }}
            >
              Hablar con MyM por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold uppercase text-xl md:text-2xl mb-2 flex items-center gap-3`}>
              <span className="inline-block w-3 h-3" style={{ backgroundColor: C.orange }} aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(237,230,218,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(237,230,218,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(237,230,218,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(237,230,218,0.7)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}.
            Textos, productos, precios, horarios y fotos son de muestra;
            el nombre, la dirección, las reseñas y el contacto son datos
            públicos reales.
          </p>
        </div>
      </footer>

      <div className="mym-band pb-20" style={{ backgroundColor: C.onOrange }}>
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
