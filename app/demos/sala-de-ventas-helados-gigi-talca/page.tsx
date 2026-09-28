import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CAJA, MAPS_URL, MAPS_EMBED, IMG, C } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC62B]'

export const metadata: Metadata = demoMetadata({
  slug: 'sala-de-ventas-helados-gigi-talca',
  title: 'Sala de Ventas Helados Gigi — Precio de fábrica en Peor Es Nada, Talca',
  description:
    'La sala de ventas de Helados Gigi y confites IOB en Longitudinal Sur, Sector Peor Es Nada: helados por unidad, por 10 y por caja a precio de fábrica. Consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El trato', href: '#trato' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Productos', href: '#productos' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const TRATOS = [
  {
    tag: 'x1',
    title: 'Por unidad',
    desc: 'El antojo del día: entras, eliges en el refrigerador y listo. Precio de sala, no de almacén.',
  },
  {
    tag: 'x10',
    title: 'Por 10 unidades',
    desc: 'Para llenar el frío de la casa o surtir el kiosco: el precio baja cuando compras por 10.',
  },
  {
    tag: 'caja',
    title: 'Por caja',
    desc: 'Cajas de 32, 36, 40 o 50 unidades según el producto. Lo mejor para negocios, eventos y familias grandes.',
  },
]

/* Precios reales de la pizarra fotografiada en el local */
const PIZARRA = [
  { name: 'Paleteadas surtidas', price: '$6.150', unit: 'x 50 u.' },
  { name: 'Choc Choc y barquillas', price: '$8.750', unit: 'x 40 u.' },
  { name: 'Gran Gigi', price: '$11.200', unit: 'x 32 u.' },
  { name: 'Tropicentro', price: '$12.100', unit: 'x 36 u.' },
  { name: 'Encuentro', price: '$1.100', unit: 'unidad' },
  { name: 'Charquito', price: '$4.800', unit: 'x 10 u.' },
]

const PRODUCTOS = [
  {
    src: `${IMG}/caja-paletas.webp`,
    alt: 'Caja de paletas Helados Gigi con bolsas de frambuesa y piña colada',
    name: 'Paletas por caja',
    desc: 'Frambuesa, piña colada, chirimoya alegre y más: la caja sale lista para el congelador.',
    tag: 'Por caja',
  },
  {
    src: `${IMG}/catalogo-iob.webp`,
    alt: 'Catálogo de confites IOB: turrón relleno, cuchuflí bañado, manjar casero y manjarito',
    name: 'Confites IOB',
    desc: 'Turrón relleno, cuchuflí bañado, manjar casero, manjarito: el lado dulce de la sala.',
    tag: 'IOB',
  },
  {
    src: `${IMG}/confites.webp`,
    alt: 'Afiche con alfajores, trentinas y Choc Choc en la sala de ventas',
    name: 'Chocolates y alfajores',
    desc: 'Alfajores, trentinas y Choc Choc para el colado de la tarde o la once del domingo.',
    tag: 'Dulces',
  },
  {
    src: `${IMG}/charlotte.webp`,
    alt: 'Afiche del helado Charlotte: vaho de chocolate con galleta y crema',
    name: 'Clásicos de vitrina',
    desc: 'Charlotte, cassata y los formatos familiares para compartir después de almuerzo.',
    tag: 'Familiar',
  },
  {
    src: `${IMG}/chocolates.webp`,
    alt: 'Afiche de bombones y chocolates artesanales de la marca',
    name: 'Bombones',
    desc: 'Cajitas y unidades de bombones artesanales: regalo barato que siempre funciona.',
    tag: 'Regalo',
  },
]

const RESENAS = [
  {
    text: 'Tienen 3 tipos de precios: por 1 unidad, por 10 unidades y por caja. Nos gustó mucho, fueron muy amables y respondieron todas nuestras preguntas. Recomiendo, muy ricos los helados.',
    name: 'Camila Guerrero',
    meta: 'Reseña de Google',
  },
  {
    text: 'Siempre me ayudan a elegir el helado, orientándome según la cantidad y el precio. Llevamos un año comprando aquí y siempre lo hemos encontrado limpio y con muy buena disposición para ayudar.',
    name: 'Cami Figueroa',
    meta: 'Reseña de Google',
  },
]

const MARCAS = ['por unidad', 'por 10', 'por caja', 'precio de fábrica', 'helados gigi', 'confites iob']

function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border`}
      style={
        dark
          ? { color: C.ice, borderColor: C.lineOnDark, backgroundColor: 'rgba(255,255,255,0.08)' }
          : { color: C.deep, borderColor: C.line, backgroundColor: 'rgba(255,255,255,0.7)' }
      }
    >
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} tracking-wide`}>Helados Gigi</span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        fontClass="text-lg md:text-xl"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(8,45,89,0.94)',
          ink: '#FFFFFF',
          line: C.lineOnDark,
          btnBg: C.yellow,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero: pizarra de fábrica ─────────────────────────── */}
      <section
        id="inicio"
        className="relative"
        style={{
          background: `radial-gradient(1100px 520px at 85% -10%, #1463B8 0%, transparent 55%), linear-gradient(160deg, ${C.deep} 0%, ${C.deep2} 78%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Tag dark>Sala de ventas</Tag>
                <Tag dark>Perquilauquén · Talca</Tag>
              </div>
              <h1
                className={`${display.className} text-[42px] leading-[0.98] md:text-7xl md:leading-[0.94] text-white uppercase`}
              >
                Precio de fábrica,
                <br />
                <span style={{ color: C.yellow }}>helado de verdad</span>
              </h1>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.ice }}>
                La sala de ventas de Helados Gigi y confites IOB: entras al local, eliges en el
                refrigerador y pagas por unidad, por 10 o por caja. Como en la fábrica, porque es la fábrica.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#pizarra"
                  className={`${FOCUS} inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold text-white active:scale-95 transition-transform`}
                  style={{ backgroundColor: C.red }}
                >
                  Ver la pizarra
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold active:scale-95 transition-transform`}
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.3-.1-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.8.8-1 1.9-.4 3 .8 1.6 2.3 3.2 4.3 4.2 1.5.8 2.6 1 3.6.9.8-.1 1.5-.7 1.7-1.3.2-.6.2-1.2.1-1.3l-.8-.3Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.yellow} />
                <p className="text-sm" style={{ color: C.ice }}>
                  <strong className="text-white">{BIZ.rating}</strong> · {BIZ.reviews} opiniones en Google
                </p>
              </div>
            </div>

            <Reveal className="relative">
              <div
                className="relative rounded-[28px] p-2.5 shadow-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] md:aspect-[5/6]">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Interior de la sala de ventas Helados Gigi: refrigerador, afiches de productos y clientes comprando"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div
                  className="absolute -top-4 -left-3 md:-top-5 md:-left-5 w-32 md:w-40 rounded-2xl p-2 shadow-xl rotate-[-5deg]"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <Image
                    src={`${IMG}/logo.webp`}
                    alt="Logo Helados Gigi"
                    width={560}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div
                  className={`${mono.className} absolute -bottom-4 right-4 md:right-8 rounded-xl px-4 py-2.5 text-sm font-bold shadow-xl rotate-[3deg]`}
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  x1 · x10 · caja
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Marquee rojo ─────────────────────────────────────── */}
      <div className="overflow-hidden py-3.5" style={{ backgroundColor: C.red }} aria-hidden="true">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {[0, 1].map((n) => (
            <div key={n} className={`${mono.className} flex gap-8 text-sm font-bold uppercase tracking-[0.18em] text-white`}>
              {MARCAS.map((m, i) => (
                <span key={`${n}-${i}`} className="flex items-center gap-8">
                  {m}
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.yellow }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── El trato: 3 precios ──────────────────────────────── */}
      <section id="trato" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.red }}>
              Cómo se compra aquí
            </p>
            <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.deep }}>
              Un sistema, tres precios
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              En la sala no hay cartelitos: el mismo helado sale por unidad, por 10 unidades o por
              caja cerrada, y cada formato baja el precio. Así surten casas, kioscos y negocios del Maule.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-3 gap-4 md:gap-6">
          {TRATOS.map((t, i) => (
            <Reveal key={t.tag} delay={i * 90}>
              <article
                className="relative h-full rounded-2xl p-6 pt-8 shadow-sm border"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <span
                  className={`${mono.className} absolute -top-3.5 left-5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow`}
                  style={{ backgroundColor: i === 2 ? C.yellow : C.red, color: i === 2 ? C.ink : '#fff' }}
                >
                  {t.tag}
                </span>
                <h3 className={`${display.className} text-2xl md:text-3xl uppercase`} style={{ color: C.deep }}>
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  {t.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La pizarra ───────────────────────────────────────── */}
      <section id="pizarra" style={{ background: `linear-gradient(180deg, ${C.paperDeep} 0%, ${C.paper} 100%)` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="order-2 md:order-1">
              <div
                className="relative rounded-3xl overflow-hidden shadow-xl border-4"
                style={{ borderColor: C.card }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`${IMG}/pizarra.webp`}
                    alt="Pizarra de precios de la sala de ventas: productos Helados Gigi con precios por caja"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`${mono.className} absolute top-4 left-4 rounded-lg px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest`}
                  style={{ backgroundColor: 'rgba(14,43,62,0.85)', color: '#fff' }}
                >
                  Foto real del local
                </span>
              </div>
            </Reveal>
            <div className="order-1 md:order-2">
              <Reveal>
                <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.red }}>
                  La pizarra de la sala
                </p>
                <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.deep }}>
                  Precios que se leen desde la calle
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                  Tal cual la pizarra del local: estos son algunos de los formatos por caja que se
                  ven en la sala. La lista completa cambia con la temporada; confirma el stock por WhatsApp.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mt-7 space-y-0 rounded-2xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
                  {PIZARRA.map((p, i) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-4 px-5 py-3.5"
                      style={i > 0 ? { borderTop: `1px dashed ${C.line}` } : undefined}
                    >
                      <span className="text-[15px] font-semibold" style={{ color: C.ink }}>
                        {p.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted mx-1 translate-y-[-4px]"
                        style={{ borderColor: C.line }}
                      />
                      <span className={`${mono.className} text-sm whitespace-nowrap`} style={{ color: C.muted }}>
                        <strong className="text-base font-bold" style={{ color: C.red }}>
                          {p.price}
                        </strong>{' '}
                        {p.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href={WA_LINK_CAJA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} mt-7 inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold text-white active:scale-95 transition-transform`}
                  style={{ backgroundColor: C.green }}
                >
                  Consultar precio por caja
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Productos ────────────────────────────────────────── */}
      <section id="productos" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.red }}>
                Del refrigerador
              </p>
              <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.deep }}>
                Helados y confites, directo de la fábrica
              </h2>
            </div>
            <Tag>Fotos reales del local</Tag>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTOS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90} className={i >= 3 ? 'sm:col-span-1' : ''}>
              <article
                className="group h-full rounded-2xl overflow-hidden border shadow-sm flex flex-col"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.paperDeep }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    className={`${mono.className} absolute top-3 left-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest`}
                    style={{ backgroundColor: C.yellow, color: C.ink }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} text-xl uppercase`} style={{ color: C.deep }}>
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <article
              className="h-full rounded-2xl overflow-hidden border flex flex-col justify-between p-6"
              style={{ backgroundColor: C.deep, borderColor: C.deep }}
            >
              <div>
                <h3 className={`${display.className} text-2xl uppercase text-white`}>¿Y el resto?</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.ice }}>
                  Gran Gigi, Tropicentro, Encuentro, Charquito, Maxi crema, Galáctico, Malva bañada
                  y más: el mueble completo se ve en la sala — y la lista actualizada te la pasan por WhatsApp.
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} mt-6 inline-flex items-center justify-center px-5 py-3 rounded-full text-base font-bold active:scale-95 transition-transform self-start`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Pedir la lista
              </a>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: notas pegadas ───────────────────────────── */}
      <section className="relative" style={{ backgroundColor: C.deep2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.yellow }}>
                Lo que dicen los que compran
              </p>
              <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-[0.95] text-white`}>
                «Muy ricos y económicos»
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.yellow} className="w-5 h-5" />
                <p className="text-sm" style={{ color: C.ice }}>
                  <strong className="text-white">{BIZ.rating} de 5</strong> · {BIZ.reviews} opiniones en Google
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: C.ice }}>
                En las reseñas se repite lo mismo: rico, barato, buen estacionamiento y gente que
                se da el tiempo de orientarte según lo que quieres gastar.
              </p>
            </Reveal>
            <div className="space-y-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={i * 110}>
                  <figure
                    className="rounded-2xl p-6 shadow-lg"
                    style={{
                      backgroundColor: '#FFFDF2',
                      transform: `rotate(${i % 2 === 0 ? '-1.1deg' : '0.9deg'})`,
                    }}
                  >
                    <div
                      className="absolute -top-3 left-8 h-6 w-20 rotate-[-2deg] opacity-70"
                      style={{ backgroundColor: 'rgba(255,198,43,0.75)' }}
                      aria-hidden="true"
                    />
                    <Stars value={5} color={C.red} className="w-3.5 h-3.5" />
                    <blockquote className="mt-3 text-[15px] leading-relaxed" style={{ color: C.ink }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-2">
                      <span className={`${mono.className} text-xs font-bold`} style={{ color: C.deep }}>
                        {r.name}
                      </span>
                      <span className="text-xs" style={{ color: C.muted }}>
                        · {r.meta}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ──────────────────────────────────────── */}
      <section id="llegar" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <div className="h-full flex flex-col">
              <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.red }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} mt-3 text-4xl md:text-5xl uppercase leading-[0.95]`} style={{ color: C.deep }}>
                En la Longitudinal Sur, sector Peor Es Nada
              </h2>
              <ul className="mt-7 space-y-4">
                <li className="flex gap-3 items-start">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.ink }}>
                    <strong>{BIZ.address}</strong>
                    <br />
                    <span style={{ color: C.muted }}>{BIZ.comuna} · {BIZ.city}, {BIZ.region}</span>
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.2 2" strokeLinecap="round" />
                  </svg>
                  <div className="text-[15px] leading-relaxed" style={{ color: C.ink }}>
                    {BIZ.hours.map((h) => (
                      <p key={h.d}>
                        <strong>{h.d}:</strong> <span style={{ color: C.muted }}>{h.h}</span>
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                  </svg>
                  <p className="text-[15px]" style={{ color: C.ink }}>
                    <strong>{BIZ.phoneDisplay}</strong>
                    <br />
                    <span style={{ color: C.muted }}>Consultas y pedidos por WhatsApp</span>
                  </p>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold text-white active:scale-95 transition-transform`}
                  style={{ backgroundColor: C.green }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold active:scale-95 transition-transform border`}
                  style={{ borderColor: C.line, color: C.deep, backgroundColor: C.card }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="h-full min-h-[320px] rounded-3xl overflow-hidden border shadow-lg" style={{ borderColor: C.line }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa: ${BIZ.name}, ${BIZ.city}`} className="w-full h-full min-h-[320px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.deep2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={64} height={34} className="rounded-md" />
            <div>
              <p className={`${display.className} text-white text-lg leading-none uppercase`}>{BIZ.short}</p>
              <p className="text-xs mt-1" style={{ color: C.ice }}>
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} text-sm font-semibold underline underline-offset-4 tap-44`}
            style={{ color: C.yellow }}
          >
            {BIZ.phoneDisplay}
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp" />
      <DemoBand name={BIZ.name} />

      <style>{`
        @keyframes marquee-gigi {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee-gigi 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  )
}
