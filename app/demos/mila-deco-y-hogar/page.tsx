import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_STOCK, MAPS_URL, MAPS_EMBED, REVIEW, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  paper: '#FAF5EF',
  paperSoft: '#F3EAE2',
  ink: '#1B1613',
  rosa: '#8E3B4B',
  rosaDeep: '#6E2B38',
  blush: '#EED9D3',
  muted: '#6E6158',
  line: 'rgba(27,22,19,0.16)',
  lineLight: 'rgba(250,245,239,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'mila-deco-y-hogar',
  title: 'Mila Deco & Hogar — Decoración para tu casa en Talca',
  description: 'Tienda de decoración en Mall Go Florida, Talca. Cuadros, cojines, maceteros, velas y objetos con encanto. Consulta por WhatsApp.',
  image: '/demos/mila-deco-y-hogar/hero.webp',
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Qué encuentras', href: '#indice' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const CATEGORIAS = [
  'Cuadros',
  'Fundas de cojín',
  'Maceteros',
  'Velas',
  'Ambientadores',
  'Objetos deco',
]

const INDICE = [
  {
    num: 'I',
    name: 'Cuadros y láminas',
    desc: 'Láminas enmarcadas, cuadros de autor y piezas para vestir la pared: florales, mariposas y motivos tranquilos.',
  },
  {
    num: 'II',
    name: 'Fundas de cojín',
    desc: 'Estampados botánicos y tonos suaves para renovar el sofá o la cama sin cambiar los muebles.',
  },
  {
    num: 'III',
    name: 'Maceteros y jarrones',
    desc: 'Cerámica, vidrio y materiales naturales para plantas, flores secas o solos, como objeto.',
  },
  {
    num: 'IV',
    name: 'Velas y aromáticos',
    desc: 'Velas decorativas, ambientadores y difusores: aroma y calidez para cada rincón.',
  },
  {
    num: 'V',
    name: 'Objetos y detalles',
    desc: 'Figuritas, bandejas, cajitas y esas cosas chicas que terminan de armar un espacio.',
  },
  {
    num: 'VI',
    name: 'Novedades de temporada',
    desc: 'La vitrina cambia todo el año: preguntar por lo nuevo siempre vale la pena.',
  },
]

const MODOS = [
  {
    title: 'Consulta por WhatsApp',
    desc: 'Fotos, precios y stock al día, directo con la tienda.',
  },
  {
    title: 'Retira en el local',
    desc: 'Mall Go Florida, local L1014 — junto al patio de comidas.',
  },
  {
    title: 'Despacho a domicilio',
    desc: 'La tienda ofrece despacho; coordina cobertura y costo por WhatsApp.',
  },
]

function Ticket({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border`}
      style={{
        borderColor: dark ? C.lineLight : C.line,
        color: dark ? C.paper : C.rosa,
        borderStyle: 'dashed',
      }}
    >
      {children}
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.blush : C.rosa }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function MilaDecoYHogarPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <>
            Mila
            <span className="hidden sm:inline font-normal opacity-80">Deco &amp; Hogar</span>
          </>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass={`${display.className}`}
        theme={{
          over: 'light',
          bar: 'rgba(250,245,239,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.rosaDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero editorial: wordmark + vitrina ── */}
      <section id="inicio" className="relative pt-[60px] md:pt-[68px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5 mb-7">
                <Ticket>Local L1014</Ticket>
                <Ticket>Mall Go Florida · Talca</Ticket>
              </div>
              <h1
                className={`${display.className} leading-[0.92] text-[clamp(4rem,15vw,8.5rem)] tracking-[-0.01em]`}
                style={{ color: C.ink }}
              >
                Mila
              </h1>
              <div className="flex items-center gap-4 mt-3 mb-7">
                <span className="h-px flex-1 max-w-[90px]" style={{ backgroundColor: C.rosa }} aria-hidden="true" />
                <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.rosa }}>
                  Deco &amp; Hogar
                </p>
                <span className="h-px flex-1" style={{ backgroundColor: C.line }} aria-hidden="true" />
              </div>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-4 font-medium" style={{ color: C.muted }}>
                Tienda de decoración en Talca: cuadros, cojines, velas,
                maceteros y esos detalles que le dan calidez a tu casa.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-8 text-sm font-semibold tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B]"
                style={{ color: C.rosaDeep }}
              >
                <Stars value={5} color={C.rosa} className="w-4 h-4" />
                <span className="underline underline-offset-4 decoration-1" style={{ textDecorationColor: 'rgba(142,59,75,0.4)' }}>
                  {BIZ.rating} en Google
                </span>
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-7 py-3.5 rounded-full transition-transform active:scale-95 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B] tap-44"
                  style={{ backgroundColor: C.rosaDeep, color: '#FFF' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="#vitrina"
                  className="text-sm font-semibold px-7 py-3 rounded-full border transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B] tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver la vitrina
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* marco offset detrás */}
              <div
                className="absolute -inset-3 translate-x-3 translate-y-3"
                style={{ backgroundColor: C.blush }}
                aria-hidden="true"
              />
              <figure
                className="relative border-[3px] overflow-hidden"
                style={{ borderColor: C.ink, boxShadow: '0 24px 60px rgba(27,22,19,0.18)' }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Vitrina de la tienda: repisas de madera con cuadros, jarrones, velas y objetos decorativos"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} flex items-center justify-between gap-3 px-4 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] border-t-[3px]`}
                  style={{ borderColor: C.ink, backgroundColor: C.paper, color: C.muted }}
                >
                  <span>La vitrina de la tienda</span>
                  <span style={{ color: C.rosa }}>foto real</span>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>

        {/* cinta de categorías */}
        <div
          className="border-y overflow-hidden py-3"
          style={{ borderColor: C.line, backgroundColor: C.paperSoft }}
          aria-hidden="true"
        >
          <style>{`
            @keyframes mila-cinta { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .mila-cinta { animation: mila-cinta 26s linear infinite; }
            @media (prefers-reduced-motion: reduce) { .mila-cinta { animation: none; } }
          `}</style>
          <div className="mila-cinta flex w-max gap-8">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-8">
                {CATEGORIAS.map((cat) => (
                  <span
                    key={cat}
                    className={`${mono.className} flex items-center gap-8 text-[12px] uppercase tracking-[0.24em] whitespace-nowrap`}
                    style={{ color: C.muted }}
                  >
                    {cat}
                    <span style={{ color: C.rosa }} aria-hidden="true">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── La vitrina: collage de fotos reales ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Fotos reales del local</Eyebrow>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-12 items-end mb-12 md:mb-16">
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0]`} style={{ color: C.ink }}>
              Una vitrina que
              <br />
              <em className="not-italic" style={{ color: C.rosa }}>cambia siempre</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Repisas llenas de cosas lindas para el hogar. El stock se
              renueva por temporada: lo que ves en la foto puede variar,
              pero el encanto queda.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="md:col-span-7">
            <figure
              className="relative border-[3px] overflow-hidden"
              style={{ borderColor: C.ink, boxShadow: '14px 14px 0 rgba(142,59,75,0.14)' }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/vitrina.webp`}
                  alt="Repisas de la tienda con cojines bordados, figuras de porcelana, velas y jarrones"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} flex items-center justify-between gap-3 px-4 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] border-t-[3px]`}
                style={{ borderColor: C.ink, color: C.muted }}
              >
                <span>Cojines · figuras · velas</span>
                <span style={{ color: C.rosa }}>foto real</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="md:col-span-5 space-y-6 md:space-y-8 md:pt-10">
            <Reveal delay={120}>
              <figure className="relative overflow-hidden rotate-[1.5deg] bg-white p-3 pb-4 shadow-xl">
                <div className="relative aspect-[4/3.4] overflow-hidden">
                  <Image
                    src={`${IMG}/aroma.webp`}
                    alt="Ambientadores de varillas Frutos Rojos sobre bandeja dorada en la tienda"
                    fill
                    sizes="(min-width: 768px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${display.className} pt-3 pb-1 text-center text-lg md:text-xl`}
                  style={{ color: C.ink }}
                >
                  Aromas que quedan en casa
                </figcaption>
                <p
                  className={`${mono.className} text-center text-[10px] uppercase tracking-[0.2em]`}
                  style={{ color: C.muted }}
                >
                  foto real · ambientadores
                </p>
                {/* cinta adhesiva */}
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-6 rotate-[-3deg] opacity-80"
                  style={{ backgroundColor: 'rgba(238,217,211,0.85)' }}
                  aria-hidden="true"
                />
              </figure>
            </Reveal>
            <Reveal delay={200}>
              <div className="border-l-2 pl-5" style={{ borderColor: C.rosa }}>
                <p className="text-sm md:text-[15px] leading-relaxed mb-4" style={{ color: C.muted }}>
                  ¿Viste algo en las fotos que te gustó? Escríbenos y te
                  contamos si sigue disponible o qué llegó parecido.
                </p>
                <a
                  href={WA_LINK_STOCK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold underline underline-offset-4 decoration-1 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B]`}
                  style={{ color: C.rosaDeep, textDecorationColor: 'rgba(142,59,75,0.45)' }}
                >
                  Consultar stock →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
          <Reveal delay={80}>
            <figure
              className="relative border-[3px] overflow-hidden"
              style={{ borderColor: C.ink, boxShadow: '10px 10px 0 rgba(238,217,211,1)' }}
            >
              <div className="relative aspect-square">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada del local en el mall: letrero Encantos de Mila Deco y Hogar sobre la vitrina de vidrio"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} flex items-center justify-between gap-3 px-4 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] border-t-[3px]`}
                style={{ borderColor: C.ink, color: C.muted }}
              >
                <span>El local, desde el pasillo del mall</span>
                <span style={{ color: C.rosa }}>foto real</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={160}>
            <figure
              className="relative border-[3px] overflow-hidden"
              style={{ borderColor: C.ink, boxShadow: '10px 10px 0 rgba(142,59,75,0.14)' }}
            >
              <div className="relative aspect-square">
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior de la tienda: flores y plantas en primer plano con repisas de cojines y jarrones detrás"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} flex items-center justify-between gap-3 px-4 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] border-t-[3px]`}
                style={{ borderColor: C.ink, color: C.muted }}
              >
                <span>Flores y verde por dentro</span>
                <span style={{ color: C.rosa }}>foto real</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── El índice: directorio de la tienda ── */}
      <section id="indice" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>El índice de la tienda</Eyebrow>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0]`}>
                Qué encuentras
                <br />
                <span style={{ color: C.blush }}>en Mila</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(250,245,239,0.72)' }}>
                Las líneas que ves en la vitrina. Para precios y
                disponibilidad real, consulta por WhatsApp.
              </p>
            </div>
          </Reveal>
          <ul>
            {INDICE.map((item, i) => (
              <Reveal key={item.num} delay={i * 70}>
                <li
                  className="group grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_1fr] gap-x-4 md:gap-x-8 gap-y-1 items-baseline py-5 md:py-6 border-t last:border-b"
                  style={{ borderColor: C.lineLight }}
                >
                  <span
                    className={`${display.className} text-2xl md:text-3xl transition-colors group-hover:text-[#EED9D3]`}
                    style={{ color: C.rosa }}
                  >
                    {item.num}
                  </span>
                  <h3 className={`${display.className} text-xl md:text-2xl leading-snug`}>
                    {item.name}
                  </h3>
                  <p className="col-start-2 md:col-start-3 text-sm leading-relaxed" style={{ color: 'rgba(250,245,239,0.68)' }}>
                    {item.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={140}>
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK_STOCK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-7 py-3.5 rounded-full transition-transform active:scale-95 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EED9D3] tap-44"
                style={{ backgroundColor: C.blush, color: C.ink }}
              >
                Preguntar por WhatsApp
              </a>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(250,245,239,0.6)' }}>
                Sin catálogo en línea — todo por la tienda
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── En tu casa (bosquejo) ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div
                className="absolute -inset-3 -translate-x-3 translate-y-3"
                style={{ backgroundColor: C.blush }}
                aria-hidden="true"
              />
              <figure
                className="relative border-[3px] overflow-hidden"
                style={{ borderColor: C.ink }}
              >
                <div className="relative aspect-[4/4.6]">
                  <Image
                    src={`${IMG}/rincon-bosquejo.webp`}
                    alt="Bosquejo de muestra: rincón de living con cojines bordados, vela encendida y lámina enmarcada"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} flex items-center justify-between gap-3 px-4 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] border-t-[3px]`}
                  style={{ borderColor: C.ink, backgroundColor: C.paperSoft, color: C.muted }}
                >
                  <span>Así podría verse en tu casa</span>
                  <span
                    className="px-2 py-0.5 text-[9px] font-bold tracking-[0.16em] border"
                    style={{ color: C.rosa, borderColor: C.rosa, borderStyle: 'dashed' }}
                  >
                    bosquejo
                  </span>
                </figcaption>
              </figure>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>La idea detrás</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Piezas con encanto,
              <br />
              <span style={{ color: C.rosa }}>hogar con calidez</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
              Mila junta objetos de diseño delicado y contemporáneo
              para transformar cualquier espacio: un sofá con cojines
              nuevos, una repisa con velas, una entrada con un cuadro.
            </p>
            <p className="text-xs leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              La imagen de esta sección es un bosquejo de muestra: al
              publicar se reemplaza por fotos reales de la tienda y
              sus clientes.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3 rounded-full border-2 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B] tap-44"
              style={{ borderColor: C.rosaDeep, color: C.rosaDeep }}
            >
              Pídenos fotos por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones: la reseña real ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.ink }}>
                Lo que dicen
                <br />
                <span style={{ color: C.rosa }}>en Google</span>
              </h2>
              <div className="flex items-center gap-3 mb-5">
                <Stars value={5} color={C.rosa} className="w-5 h-5" />
                <span className={`${display.className} text-3xl leading-none`} style={{ color: C.ink }}>
                  {BIZ.rating}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: C.muted }}>
                La tienda tiene una nota perfecta de 5 estrellas en su
                ficha de Google. Esta es la reseña real publicada ahí.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold underline underline-offset-4 decoration-1 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B]`}
                style={{ color: C.rosaDeep, textDecorationColor: 'rgba(142,59,75,0.45)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <Reveal delay={140}>
              <figure
                className="relative p-6 md:p-10 bg-white"
                style={{ boxShadow: '16px 16px 0 rgba(142,59,75,0.12)' }}
              >
                <span
                  className={`${display.className} absolute -top-7 left-6 text-[90px] leading-none select-none`}
                  style={{ color: C.rosa }}
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className={`${display.className} text-lg md:text-2xl leading-[1.4] mb-6`} style={{ color: C.ink }}>
                  “{REVIEW.text}”
                </blockquote>
                <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t pt-5" style={{ borderColor: C.line }}>
                  <div>
                    <p className="font-semibold text-sm md:text-base" style={{ color: C.ink }}>
                      {REVIEW.author}
                    </p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-1`} style={{ color: C.muted }}>
                      {REVIEW.detail}
                    </p>
                  </div>
                  <Stars value={5} color={C.rosa} className="w-4 h-4" />
                </figcaption>
              </figure>
              <p className="text-xs leading-relaxed mt-5 max-w-md" style={{ color: C.muted }}>
                ¿Ya pasaste por la tienda? Una reseña en su ficha de
                Google le ayuda a más vecinos a encontrarla.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar / comprar ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] mb-10 md:mb-14`} style={{ color: C.ink }}>
              Mall Go Florida,
              <br />
              <span style={{ color: C.rosa }}>local L1014</span>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <div className="h-full flex flex-col">
                <address className="not-italic text-sm md:text-base leading-relaxed font-medium mb-6" style={{ color: C.muted }}>
                  {BIZ.address}
                  <br />
                  {BIZ.addressRaw}, {BIZ.city}, {BIZ.region}
                </address>
                <ul className="space-y-5 mb-8">
                  {MODOS.map((m, i) => (
                    <li key={m.title} className="flex gap-4">
                      <span
                        className={`${display.className} text-2xl leading-none mt-0.5`}
                        style={{ color: C.rosa }}
                      >
                        {['I', 'II', 'III'][i]}
                      </span>
                      <div>
                        <p className="font-semibold text-sm md:text-base" style={{ color: C.ink }}>{m.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{m.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-5 mb-8" style={{ borderColor: C.line }}>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.muted }}>
                    Horario de la tienda
                  </p>
                  <p className="text-sm font-medium" style={{ color: C.ink }}>
                    Lunes a sábado · 10:00–20:00
                  </p>
                  <p className="text-sm font-medium" style={{ color: C.ink }}>
                    Domingo · desde las 11:00
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-7 py-3.5 rounded-full transition-transform active:scale-95 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B] tap-44"
                    style={{ backgroundColor: C.rosaDeep, color: '#FFF' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-7 py-3 rounded-full border transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B4B] tap-44"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative min-h-[320px] h-full border-[3px] overflow-hidden"
                style={{ borderColor: C.ink, boxShadow: '14px 14px 0 rgba(238,217,211,1)' }}
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
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0 79px, rgba(250,245,239,0.05) 79px 80px)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Ticket dark>Deco &amp; Hogar · Talca</Ticket>
            <h2
              className={`${display.className} text-[clamp(2.4rem,7vw,4.6rem)] leading-[1.02] mt-6 mb-6`}
              style={{ color: C.paper }}
            >
              Tu casa, con
              <br />
              <em className="not-italic" style={{ color: C.blush }}>más encanto</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(250,245,239,0.7)' }}>
              Escríbenos por WhatsApp: te mandamos fotos de lo que hay
              en vitrina, precios y opciones de despacho.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm md:text-base font-semibold px-9 py-3.5 rounded-full transition-transform active:scale-95 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EED9D3] tap-44"
              style={{ backgroundColor: C.blush, color: C.ink }}
            >
              Hablar con la tienda →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5 border-t"
          style={{ borderColor: C.lineLight }}
        >
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className={`${display.className} text-xl leading-none`}>{BIZ.name}</p>
              <address className="not-italic text-xs mt-1" style={{ color: 'rgba(250,245,239,0.62)' }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(250,245,239,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors focus-visible:text-white focus-visible:underline tap-44"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineLight }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(250,245,239,0.7)' }}>
            Nombre, dirección, teléfono, nota de Google y la reseña
            citada son reales; la escena marcada como bosquejo es de
            muestra y los precios se consultan por WhatsApp.
          </p>
        </div>
        <div className="px-5 pt-0 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
