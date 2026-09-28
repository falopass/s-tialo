import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «la vitrina de la esquina». Panadería, pastelería y
 * minimarket en un mismo local de 13 Norte: la página se arma como la
 * vitrina — tortas en repisa, etiquetas de precio en mono, y el goteo de
 * manjar que baja por los bordes como en sus tortas drip. Playfair pone
 * el letrero del local; DM Sans el texto; la orquídea dorada del logo
 * marca el acento.
 */
const C = {
  paper: '#F8F1E4',
  card: '#FFF9EE',
  ink: '#2A1F14',
  oro: '#C99A2E',
  oroSuave: '#E8C56B',
  oroTinta: '#6E510F',
  malva: '#5E2B44',
  deep: '#241521',
  muted: '#6E5F50',
  line: 'rgba(42,31,20,0.15)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'la-orquidea-talca',
  title: 'La Orquídea — Panadería, pastelería y minimarket en Talca',
  description:
    'La Orquídea en 13 Norte, Talca: pan fresco, tortas frescas y por encargo, cachitos, tequeños y minimarket con productos importados. 4,6★ en Google. Abierto todos los días 8:00–21:00.',
  image: `${IMG}/torta-chocolate.webp`,
})

const NAV_LINKS = [
  { label: 'La esquina', href: '#esquina' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const ESQUINA = [
  {
    icon: (
      <path d="M4 14c0-4 3.5-7 8-7s8 3 8 7c0 1.5-1 3-2.5 3h-11C5 17 4 15.5 4 14Zm8-7v-2M8.5 9c.5 1.5 2.5 1.5 3 0M13 9c.5 1.5 2.5 1.5 3 0" />
    ),
    name: 'Panadería',
    desc: 'Pan fresco todos los días: «excelente pan» es la frase que más se repite en las reseñas.',
  },
  {
    icon: (
      <path d="M12 3v3M6 21h12M7 21v-4a5 5 0 0 1 10 0v4M5 13h14M9 10c1-1.5 2-1.5 3 0s2 1.5 3 0" />
    ),
    name: 'Pastelería',
    desc: 'Tortas de la vitrina y tortas por encargo para cumpleaños y celebraciones.',
  },
  {
    icon: (
      <path d="M5 8h14l-1.5 12h-11L5 8Zm3-4h8M9 12v5M12 12v5M15 12v5" />
    ),
    name: 'Minimarket',
    desc: 'Productos venezolanos e importados: cachitos, tequeños, dulces y mercadería que no se ve en otro lado.',
  },
]

const VITRINA = [
  { src: `${IMG}/torta-chocolate.webp`, name: 'Drip de chocolate', tag: 'de la vitrina' },
  { src: `${IMG}/red-velvet.webp`, name: 'Red velvet al corte', tag: 'de la vitrina' },
  { src: `${IMG}/torta-cerezas.webp`, name: 'Chocolate y cerezas', tag: 'de la vitrina' },
  { src: `${IMG}/torta-valentina.webp`, name: 'Torta de cumpleaños', tag: 'por encargo' },
  { src: `${IMG}/dulces.webp`, name: 'Bollitos y dulces', tag: 'para llevar' },
]

const TESTIMONIALS = [
  {
    text: 'El pan, tortas, dulces muy buenos y frescos, excelente atención, productos venezolanos, plátanos.',
    author: 'Humberto Añez Valdez',
  },
  {
    text: 'Excelente todo: cachitos, empanadas, tequeños, café de grano Nescafé, dulces de coco, samba, pan dulce. Excelente.',
    author: 'mayfreson salcedo',
  },
  {
    text: 'Excelente experiencia. El pan muy rico, variedad de tortas frescas y deliciosas, productos de todo tipo.',
    author: 'Andrea Briñez',
  },
  {
    text: 'Negocio bien surtido… Panadería y hartos productos venezolanos… Buena atención y variedad de cosas… Recomendado.',
    author: 'Cristian Barrientos',
  },
]

/** Goteo de manjar — el drip de sus tortas, como borde de sección. */
function Drip({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 1200 46" className={className} fill={color} preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block', width: '100%', height: '46px' }}>
      <path d="M0 0h1200v10c-14 0-16 14-30 14s-14-8-30-8-18 22-36 22-16-20-34-20-14 12-30 12-16-18-32-18-20 26-40 26-16-16-34-16-16 8-32 8-18-24-34-24-16 18-34 18-16-10-34-10-14 16-32 16-14-12-30-12-16 20-34 20-14-14-32-14-14 8-30 8-16-18-32-18-16 24-34 24-16-12-32-12-16 10-32 10-18-14-32-14V0Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.oroSuave : C.oroTinta }}
    >
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="currentColor" aria-hidden="true">
        <path d="M12 2c1.8 2.6 2.4 4.6 1.8 6.4 2-.8 4-.6 5.7.5-2 1.6-3.4 3-3.9 4.9 1.9.4 3.4 1.5 4.4 3.4-2.4.2-4.3 0-5.8-.9.4 2-.3 3.9-2.2 5.7-1.9-1.8-2.6-3.7-2.2-5.7-1.5.9-3.4 1.1-5.8.9 1-1.9 2.5-3 4.4-3.4-.5-1.9-1.9-3.3-3.9-4.9 1.7-1.1 3.7-1.3 5.7-.5C9.6 6.6 10.2 4.6 12 2Z" />
      </svg>
      {children}
    </p>
  )
}

export default function LaOrquideaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={<span>La Orquídea</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(248,241,228,0.95)',
          ink: C.ink,
          line: 'rgba(42,31,20,0.14)',
          btnBg: C.malva,
          btnInk: '#FBF2E8',
        }}
      />

      {/* ── Hero: la vitrina ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo de La Orquídea: orquídea dorada dentro de un círculo con espiga"
                  className="w-[64px] h-[64px] md:w-[76px] md:h-[76px] rounded-full object-cover border-2"
                  style={{ borderColor: 'rgba(232,197,107,0.6)', backgroundColor: '#fff' }}
                />
                <div>
                  <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.oroSuave }}>
                    Panadería · Pastelería · Minimarket
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-1.5 text-xs font-semibold tap-44"
                    style={{ color: 'rgba(248,241,228,0.92)' }}
                  >
                    <Stars value={4.6} color={C.oroSuave} className="w-[13px] h-[13px]" />
                    {BIZ.rating} · {BIZ.reviews} reseñas
                  </a>
                </div>
              </div>
              <h1
                className={`${display.className} leading-[1.04] text-[clamp(2.4rem,8.5vw,4.8rem)] mb-6`}
                style={{ color: '#F8F1E4' }}
              >
                La vitrina de 13 Norte
                <br />
                <span className={displayItalic.className} style={{ color: C.oroSuave }}>que hornea todos los días.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(248,241,228,0.88)' }}>
                Pan recién salido, tortas de la vitrina y por encargo, y un
                minimarket con los productos venezolanos que no aparecen en
                otro lado de Talca. Abierto todos los días, 8:00 a 21:00.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.oro, color: C.ink }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href="#vitrina"
                  className="font-semibold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: 'rgba(248,241,228,0.5)', color: '#F8F1E4' }}
                >
                  Ver la vitrina
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <img
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de La Orquídea en 13 Norte, Talca: letrero blanco con orquídea dorada"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full object-cover aspect-[4/3] border-2"
                  style={{ borderColor: 'rgba(232,197,107,0.4)', boxShadow: '0 20px 44px -18px rgba(0,0,0,0.55)' }}
                />
                <span
                  className={`${mono.className} absolute -bottom-3 left-4 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5`}
                  style={{ backgroundColor: C.oro, color: C.ink }}
                >
                  13 norte #3882 · talca
                </span>
              </div>
            </Reveal>
          </div>
        </div>
        <Drip color={C.deep} className="absolute bottom-0 left-0 rotate-180" />
      </section>

      {/* ── Tres cosas en una esquina ── */}
      <section id="esquina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
        <Reveal>
          <Eyebrow>La esquina completa</Eyebrow>
          <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-10 md:mb-12`} style={{ color: C.ink }}>
            Tres tiendas
            <br />
            <span className={displayItalic.className} style={{ color: C.malva }}>bajo un mismo letrero</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {ESQUINA.map((e, i) => (
            <Reveal key={e.name} delay={i * 110}>
              <article className="h-full p-6 md:p-7 border-2 rounded-2xl" style={{ borderColor: C.line, backgroundColor: C.card }}>
                <div
                  className="w-[44px] h-[44px] rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(201,154,46,0.18)', color: C.malva }}
                >
                  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {e.icon}
                  </svg>
                </div>
                <h3 className={`${display.className} text-2xl mb-2.5`} style={{ color: C.ink }}>
                  {e.name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {e.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La vitrina: repisa de tortas ── */}
      <section id="vitrina" className="scroll-mt-20 relative" style={{ backgroundColor: C.malva }}>
        <Drip color={C.malva} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow light>De la vitrina</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#FBF2E8' }}>
                Tortas que salen
                <br />
                <span className={displayItalic.className} style={{ color: C.oroSuave }}>por la puerta en caja</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(251,242,232,0.85)' }}>
                Fotos de su propia vitrina y de las tortas de encargo: drip
                de chocolate, red velvet, cerezas y la torta del cumpleaños
                que toca esta semana.
              </p>
            </div>
          </Reveal>
          <div className="columns-2 md:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
            {VITRINA.map((v, i) => (
              <Reveal key={v.name} delay={i * 90} className="mb-4 md:mb-5 break-inside-avoid">
                <figure>
                  <div className="relative overflow-hidden">
                    <img
                      src={v.src}
                      alt={`${v.name} — pastelería La Orquídea, Talca`}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                    <span
                      className={`${mono.className} absolute top-3 right-3 text-[9px] md:text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full`}
                      style={{ backgroundColor: 'rgba(36,21,33,0.9)', color: C.oroSuave }}
                    >
                      {v.tag}
                    </span>
                  </div>
                  <figcaption className={`${mono.className} pt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(251,242,232,0.85)' }}>
                    {v.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <img
                src={`${IMG}/interior.webp`}
                alt="Interior de La Orquídea: vitrinas refrigeradas y el logo en la muralla"
                loading="lazy"
                className="w-full md:w-[46%] object-cover aspect-[16/10]"
              />
              <div>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(251,242,232,0.9)' }}>
                  ¿Torta de encargo? Se conversan por WhatsApp: motivo,
                  tamaño y fecha. Las fotos de la vitrina muestran el nivel —
                  drip, flores de crema y toppers personalizados.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold inline-block text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.oro, color: C.ink }}
                >
                  Encargar una torta →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Drip color={C.malva} className="rotate-180" />
      </section>

      {/* ── Minimarket: la repisa importada ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-center">
          <Reveal>
            <Eyebrow>La repisa importada</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              Los productos que
              <br />
              <span className={displayItalic.className} style={{ color: C.malva }}>no llegan a otro lado</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              La clientela venezolana de Talca lo confirma en las reseñas:
              cachitos, tequeños, dulces y productos de la casa que cruzan el
              continente hasta esta repisa de 13 Norte.
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.oroTinta }}>
              panadería + pastelería + minimarket · un solo local
            </p>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={`${IMG}/minimarket.webp`}
              alt="Repisas del minimarket de La Orquídea con productos importados"
              loading="lazy"
              className="w-full object-cover aspect-[4/3] border-2"
              style={{ borderColor: C.line }}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Lo que dice la esquina</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              {BIZ.rating}★ en Google
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en la ficha: «excelente pan», «tortas
              frescas» y «productos venezolanos» son lo que más se repite.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.malva, textDecorationColor: 'rgba(94,43,68,0.35)' }}
              >
                Leer la ficha en Google →
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.malva, textDecorationColor: 'rgba(94,43,68,0.35)' }}
              >
                {BIZ.igHandle} en Instagram →
              </a>
            </div>
          </Reveal>
          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={100 + i * 90}>
                <figure
                  className="p-6 rounded-xl border-l-4"
                  style={{ backgroundColor: C.paper, borderColor: i % 2 === 0 ? C.oro : C.malva }}
                >
                  <Stars value={5} color={C.oro} className="w-[14px] h-[14px] mb-3" />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {t.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>La esquina de siempre</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F8F1E4' }}>
              13 norte, entre
              <br />
              <span className={displayItalic.className} style={{ color: C.oroSuave }}>33 y 34 oriente</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(248,241,228,0.85)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#F8F1E4', textDecorationColor: 'rgba(248,241,228,0.4)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div
              className={`${mono.className} inline-block text-[12px] md:text-[13px] uppercase tracking-[0.16em] px-5 py-4 border-2 rounded-xl mb-8`}
              style={{ borderColor: 'rgba(232,197,107,0.5)', color: C.oroSuave }}
            >
              abierto {BIZ.horario}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.oro, color: C.ink }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border-2 tap-44"
                style={{ borderColor: 'rgba(248,241,228,0.5)', color: '#F8F1E4' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-2xl border-2 min-h-[320px] h-full" style={{ borderColor: 'rgba(232,197,107,0.35)', backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F8F1E4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5 border-t" style={{ borderColor: 'rgba(248,241,228,0.14)' }}>
          <div>
            <p className={`${display.className} text-2xl mb-2 flex items-center gap-3`}>
              <img src={`${IMG}/logo.webp`} alt="" className="w-8 h-8 rounded-full object-cover" aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(248,241,228,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(248,241,228,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(248,241,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(248,241,228,0.68)' }}>
            Datos de la ficha pública de Google y su Instagram {BIZ.igHandle}; descripciones de muestra.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
