import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, C, HOURS, IMG, MAPS_EMBED, MAPS_URL, REVIEWS, WA_LINK, WA_LINK2 } from './content'
import { Catalogo } from './catalogo'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'que-barato-lf',
  title: 'QUE BARATO LF — El dato para ahorrar en Talca',
  description:
    'Insumos médicos, artículos de aseo y varios en 34 Ote. 3404, Talca. Ventas por mayor y detalle, abierto todos los días de 10:00 a 21:00. Cotiza por WhatsApp.',
  image: '/demos/que-barato-lf/fachada.webp',
})

const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo comprar', href: '#como-comprar' },
  { label: 'El local', href: '#local' },
  { label: 'Contacto', href: '#contacto' },
]

// Pasos tal como aparecen en el flyer «¿Cómo comprar con QUE BARATO LF?».
const PASOS = [
  {
    title: 'Escríbenos al WhatsApp',
    desc: 'Comunícate con nosotros directamente al WhatsApp, donde se encuentra el catálogo, y realiza tu carrito de compra.',
  },
  {
    title: 'Elige cómo lo recibes',
    desc: 'Indica si deseas comprar directamente en tienda, que llegue a tu domicilio o que sea envío a regiones.',
  },
  {
    title: 'Pedidos con envío',
    desc: 'Cuando tu pedido es con envío se debe realizar el pago del 100% de tu compra. Para tu confianza realizamos boleta o factura.',
  },
  {
    title: 'Entrega presencial',
    desc: 'Para entregas presenciales puedes pagar en efectivo o transferencia. Próximamente tendremos pago con tarjeta.',
  },
]

function Arrow({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

function WaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** Etiqueta de precio: el motivo gráfico del demo (del logo «el dato para ahorrar»). */
function Tag({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`${display.className} inline-flex items-center gap-2 uppercase tracking-wide ${className}`}
      style={{
        backgroundColor: C.rojo,
        color: C.blanco,
        padding: '8px 16px 8px 20px',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 8px 50%)',
      }}
    >
      {children}
    </span>
  )
}

const DATOS = [
  { k: 'Mayor', v: 'desde 3 un. del mismo producto' },
  { k: 'Horario', v: 'lun–dom 10:00–21:00 continuo' },
  { k: 'Entrega', v: 'en tienda, a domicilio o a regiones' },
  { k: 'Google', v: '4.9★ · 133 reseñas' },
]

export default function QueBaratoLf() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={
          <span className="uppercase tracking-tight">
            Que Barato <span style={{ color: 'inherit' }}>LF</span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className}`}
        theme={{ over: 'light', bar: 'rgba(247,243,234,0.94)', ink: C.azulDeep, line: C.line, btnBg: C.rojo, btnInk: C.blanco }}
      />

      {/* ── Hero: el dato ────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.papel }}>
        {/* trama de etiquetas */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${C.azul} 0 1px, transparent 1px 14px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-14 md:pb-20 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] font-medium`} style={{ color: C.rojo }}>
              Comercializadora · 34 Oriente · Talca
            </p>
            <h1 className={`${display.className} mt-4 uppercase leading-[0.95] tracking-tight text-[clamp(2.9rem,11vw,6.5rem)]`} style={{ color: C.azulDeep }}>
              Aquí está<br />
              <span style={{ color: C.rojo }}>el dato</span> para<br />
              ahorrar
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.gris }}>
              Insumos médicos, artículos de aseo y varios — al detalle y por mayor.
              El local de Talca donde la plata rinde más.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-6 text-sm font-bold uppercase tracking-wide transition-transform active:scale-[0.98] tap-44"
                style={{ backgroundColor: C.rojo, color: C.blanco, clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
              >
                <WaIcon className="w-4 h-4" />
                Cotizar por WhatsApp
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-6 text-sm font-bold uppercase tracking-wide transition-transform active:scale-[0.98] tap-44"
                style={{ border: `2px solid ${C.azul}`, color: C.azulDeep, backgroundColor: 'transparent' }}
              >
                Ver precios reales
                <Arrow className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Collage de fotos reales del local */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg rotate-[-2deg]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Que Barato LF: letrero azul «ventas por mayor y detalle»"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg rotate-[2deg] translate-y-6">
                <Image
                  src={`${IMG}/meson.webp`}
                  alt="Mesón de madera del local con el sello Que Barato"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Logo de Que Barato LF: ventas mayoristas y minoristas"
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full ring-4 shadow-xl"
              style={{ ['--tw-ring-color' as string]: C.papel }}
            />
          </div>
        </div>
      </section>

      {/* ── Franja de datos ──────────────────────────────── */}
      <section className="text-white" style={{ backgroundColor: C.azulDeep }}>
        <dl className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-7 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
          {DATOS.map((d) => (
            <div key={d.k}>
              <dt className={`${display.className} uppercase tracking-wide text-base md:text-lg`} style={{ color: '#F2C14E' }}>
                {d.k}
              </dt>
              <dd className="mt-1 text-xs md:text-sm leading-snug text-white/85">{d.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Catálogo + cotizador ─────────────────────────── */}
      <section id="catalogo" className="scroll-mt-16 py-16 md:py-24" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="mb-8 md:mb-12">
              <Tag className="text-xs md:text-sm">Precios del local</Tag>
              <h2 className={`${display.className} mt-4 uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl`} style={{ color: C.azulDeep }}>
                Lo que venden<br />y a cuánto
              </h2>
              <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.gris }}>
                Precios reales del catálogo de la tienda. Marca lo que necesitas y
                enviamos tu lista por WhatsApp al tiro.
              </p>
            </div>
          </Reveal>
          <Catalogo fontClass={display.className} monoClass={mono.className} />
        </div>
      </section>

      {/* ── Reseñas reales ───────────────────────────────── */}
      <section id="resenas" className="scroll-mt-16 py-16 md:py-24" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl`} style={{ color: C.azulDeep }}>
                Lo que dice<br />la gente
              </h2>
              <div className="flex items-center gap-3">
                <Stars value={4.9} color={C.rojo} className="w-5 h-5" />
                <p className={`${mono.className} text-sm font-semibold`} style={{ color: C.tinta }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure
                  className="h-full p-6 md:p-7 rounded-lg"
                  style={{ backgroundColor: C.papel, border: `1px dashed ${C.azul}` }}
                >
                  <Stars value={5} color={C.rojo} className="w-4 h-4" />
                  <blockquote className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: C.tinta }}>
                    «{r.text}»
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className={`${display.className} uppercase tracking-wide text-sm`} style={{ color: C.azulDeep }}>
                      {r.name}
                    </p>
                    <p className={`${mono.className} mt-0.5 text-[11px] uppercase tracking-wider`} style={{ color: C.gris }}>
                      Google Maps · {r.when}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo comprar (flyer real del local) ──────────── */}
      <section id="como-comprar" className="scroll-mt-16 py-16 md:py-24 text-white" style={{ backgroundColor: C.azul }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase tracking-tight leading-[0.95] text-4xl md:text-6xl max-w-xl`}>
                Cómo comprar
              </h2>
              <p className="max-w-sm text-sm md:text-base leading-relaxed text-white/85">
                Tal como lo explica el local: todo parte por WhatsApp y tú eliges si compras en tienda, a domicilio o con envío a regiones.
              </p>
            </div>
          </Reveal>
          <ol className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 110}>
                  <div
                    className="h-full rounded-lg p-6 md:p-7"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: `1px solid ${C.lineOnDark}` }}
                  >
                    <span className={`${display.className} inline-flex items-center justify-center w-10 h-10 text-xl`} style={{ backgroundColor: C.rojo, color: C.blanco, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 9px 50%)', paddingLeft: '9px' }}>
                      {i + 1}
                    </span>
                    <h3 className={`${display.className} mt-4 uppercase tracking-wide text-lg md:text-xl leading-tight`}>{p.title}</h3>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-white/85">{p.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={120}>
            <div
              className="mt-10 md:mt-14 rounded-lg p-6 md:p-8 grid gap-8 md:grid-cols-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: `1px solid ${C.lineOnDark}` }}
            >
              <div>
                <h3 className={`${display.className} uppercase tracking-wide text-lg md:text-xl`}>Formas de entrega</h3>
                <ul className="mt-3 space-y-2.5 text-sm md:text-[15px] leading-relaxed text-white/85">
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#F2C14E' }} aria-hidden="true" />
                    Compra directamente en tienda: {BIZ.address}, {BIZ.city}.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#F2C14E' }} aria-hidden="true" />
                    Despacho a domicilio, coordinado por WhatsApp.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#F2C14E' }} aria-hidden="true" />
                    Envíos a regiones.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={`${display.className} uppercase tracking-wide text-lg md:text-xl`}>Medios de pago</h3>
                <ul className="mt-3 space-y-2.5 text-sm md:text-[15px] leading-relaxed text-white/85">
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#F2C14E' }} aria-hidden="true" />
                    En entregas presenciales: efectivo o transferencia.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#F2C14E' }} aria-hidden="true" />
                    Pedidos con envío: se paga el 100% de la compra, con boleta o factura.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El local ─────────────────────────────────────── */}
      <section id="local" className="scroll-mt-16 py-16 md:py-24" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
              <h2 className={`${display.className} uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl`} style={{ color: C.azulDeep }}>
                El local,<br />tal cual es
              </h2>
              <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.16em]`} style={{ color: C.rojo }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            <Reveal className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={`${IMG}/pasillo.webp`}
                alt="Pasillo de la tienda con estanterías repletas de papel y productos"
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={90} className="relative aspect-[3/4] rounded-lg overflow-hidden lg:translate-y-6">
              <Image
                src={`${IMG}/canasto.webp`}
                alt="Interior del local: canasto rojo de compras y repisas ordenadas"
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={180} className="relative aspect-[3/4] rounded-lg overflow-hidden col-span-2 lg:col-span-1 aspect-[16/10] lg:aspect-[3/4]">
              <Image
                src={`${IMG}/compra.webp`}
                alt="Compra lista en el mesón: bolsas con productos de la tienda"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <Reveal delay={200}>
            <dl className="mt-8 md:mt-10 flex flex-wrap gap-x-12 gap-y-4 text-sm">
              <div>
                <dt className={`${display.className} uppercase tracking-wide text-base`} style={{ color: C.azulDeep }}>Horario</dt>
                {HOURS.map((h) => (
                  <dd key={h.days} className="mt-1 flex gap-3" style={{ color: C.gris }}>
                    <span>{h.days}</span>
                    <span className={`${mono.className} font-semibold`} style={{ color: C.tinta }}>{h.time}</span>
                  </dd>
                ))}
              </div>
              <div>
                <dt className={`${display.className} uppercase tracking-wide text-base`} style={{ color: C.azulDeep }}>Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={BIZ.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 tap-44"
                    style={{ color: C.rojo }}
                  >
                    {BIZ.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ─────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-16 py-16 md:py-24" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Tag className="text-xs md:text-sm">El dato final</Tag>
            <h2 className={`${display.className} mt-4 uppercase tracking-tight leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.azulDeep }}>
              Cotiza tu lista por WhatsApp
            </h2>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.gris }}>
              Manda tu lista —del botiquín, del colegio o de la casa— y te confirmamos
              stock al tiro. Es el canal más rápido.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 min-h-[52px] px-7 text-base font-bold uppercase tracking-wide transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 tap-44"
              style={{ backgroundColor: C.rojo, color: C.blanco, outlineColor: C.azulDeep, clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
            >
              <WaIcon className="w-5 h-5" />
              <span>Escribir al {BIZ.phoneDisplay}</span>
              <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-3 text-sm" style={{ color: C.gris }}>
              También puedes escribirnos al{' '}
              <a
                href={WA_LINK2}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.azulDeep }}
              >
                {BIZ.phone2Display}
              </a>
            </p>
            <dl className="mt-8 space-y-2 text-sm" style={{ color: C.gris }}>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.azulDeep }}>Dirección:</dt>
                <dd>{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.azulDeep }}>Teléfonos:</dt>
                <dd>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                  {' · '}
                  <a href={`tel:${BIZ.phone2Tel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phone2Display}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg overflow-hidden" style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}>
              <div className="aspect-[4/3] w-full">
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold" style={{ color: C.azulDeep }}>
                  {BIZ.address}, {BIZ.city}
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[40px] text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 tap-44"
                  style={{ color: C.rojo, outlineColor: C.azulDeep }}
                >
                  Cómo llegar <Arrow className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo ────────────────────────────────── */}
      <footer className="text-white" style={{ backgroundColor: C.azulDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <div>
            <p className={`${display.className} text-lg uppercase tracking-wide`}>{BIZ.name}</p>
            <p className="mt-1 text-sm font-medium text-white/85">
              {BIZ.phoneDisplay} · {BIZ.phone2Display}
            </p>
            <p className="mt-1 text-xs text-white/70">
              Sitio de ejemplo de Sitiazo · Datos, precios, horario y fotos reales del local; textos de muestra.
            </p>
          </div>
          <div className="[&>div]:static! [&>div]:max-w-none! [&>div]:inline-flex!">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
