import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  mar: '#0D3548',
  mar2: '#0A2B3B',
  azul: '#1F5F7F',
  espuma: '#EEF3EF',
  laton: '#D9A03F',
  ink: '#14262E',
  line: 'rgba(20,38,46,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-miramar',
  title: 'Hostería Miramar — Restaurant de mar y cabañas en Llico, Vichuquén',
  description:
    'Hostería, cabañas y restaurant de mariscos frente a la costa de Llico. Caldillo de congrio, mariscal y empanadas de mariscos. Reserva por WhatsApp.',
  image: '/demos/restaurante-miramar/hero.webp',
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'La hostería', href: '#hosteria' },
  { label: 'Llico', href: '#llico' },
  { label: 'La bitácora', href: '#bitacora' },
]

const MILLA = ['01 · PROA', '02 · LA COCINA', '03 · LA HOSTERÍA', '04 · LA COSTA']

const PLATOS = [
  {
    src: `${IMG}/plato-frituras.webp`,
    alt: 'Frituras doradas recién hechas en el Restaurante Miramar',
    name: 'Del sartén, recién salidas',
    text: 'Empanadas de mariscos muy buenas — repiten las reseñas — y frituras doradas que llegan calientes a la mesa.',
  },
  {
    src: `${IMG}/plato-tortilla.webp`,
    alt: 'Tortilla y marraqueta servidas en el Restaurante Miramar',
    name: 'La cocina de borde costero',
    text: 'Caldillo de congrio y el mariscal especial: sabrosos, abundantes y a precio moderado, como piden los que vuelven.',
  },
]

const AMARRES = [
  {
    src: `${IMG}/habitacion.webp`,
    alt: 'Habitación de la Hostería Miramar con camas y ventana al mar',
    name: 'Habitaciones',
    detalle: 'Con vista y a metros del mar',
  },
  {
    src: `${IMG}/cabana.webp`,
    alt: 'Cabaña de madera de la Hostería Miramar entre árboles',
    name: 'Cabañas',
    detalle: 'De madera, rodeadas de jardín',
  },
  {
    src: `${IMG}/costanera.webp`,
    alt: 'Entrada de la Hostería Miramar en la costanera de Llico',
    name: 'La entrada',
    detalle: 'Sobre la costanera de Llico',
  },
  {
    src: `${IMG}/fachada.webp`,
    alt: 'Letrero de madera Miramar Restaurant y Hostería en la fachada',
    name: 'El letrero',
    detalle: 'El timón azul que se ve desde la calle',
  },
]

const BITACORA = [
  {
    name: 'Juan Ramón Videla',
    fecha: 'hace 7 meses',
    stars: 4,
    text: 'Una variedad de platos con precios moderados. Empanadas de mariscos muy buenas; el mariscal especial, muy sabroso y abundante. Muy bien atendidos.',
  },
  {
    name: 'Luzmar Quintero',
    fecha: 'hace 2 meses',
    stars: 5,
    text: 'Muy rico y a buen precio; cuando hay mucha gente la atención va más lenta, pero vale la pena la espera.',
  },
  {
    name: 'mikimbin',
    fecha: 'hace un año',
    stars: 5,
    text: 'Servicio increíble, comida excelente y un alojamiento precioso. Recomiendo encarecidamente este lugar.',
  },
  {
    name: 'Aye Cabello',
    fecha: 'hace 8 meses',
    stars: 5,
    text: 'Fue una experiencia súper buena con mi familia: la comida, riquísima. 10/10.',
  },
]

function MillaTag({ n, title, dark }: { n: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-10 md:mb-14 flex items-baseline gap-4">
      <span
        className={`${mono.className} text-[11px] md:text-xs tracking-[0.3em] uppercase shrink-0`}
        style={{ color: dark ? C.laton : C.azul }}
      >
        {n}
      </span>
      <h2
        className={`${display.className} uppercase leading-none text-[clamp(1.8rem,5.5vw,3.4rem)]`}
        style={{ color: dark ? C.espuma : C.ink }}
      >
        {title}
      </h2>
      <span
        className="hidden md:block flex-1 border-t border-dashed"
        style={{ borderColor: dark ? 'rgba(238,243,239,0.3)' : C.line }}
        aria-hidden="true"
      />
    </div>
  )
}

function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(8,14,18,0.94)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: C.laton }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function RestauranteMiramarPage() {
  return (
    <div
      className={`${body.className} rmm min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.espuma, color: C.ink }}
    >
      <style>{`
        .rmm a:focus-visible { outline: 2px solid ${C.laton}; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(238,243,239,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.mar,
          btnInk: C.espuma,
        }}
      />

      {/* HERO — la terraza de noche */}
      <header className="relative min-h-[92svh] flex items-end">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Terraza iluminada de la Hostería Miramar al caer la tarde"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,20,28,0.6) 0%, rgba(8,20,28,0.2) 45%, rgba(8,20,28,0.85) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 pt-28">
          <div className="flex items-center gap-3 mb-5">
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              aria-hidden="true"
              className="h-11 w-11 rounded-full object-cover ring-2"
              style={{ '--tw-ring-color': 'rgba(238,243,239,0.5)' } as CSSProperties}
            />
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`}
              style={{ color: 'rgba(238,243,239,0.85)' }}
            >
              {BIZ.coords} — Llico, {BIZ.city}
            </p>
          </div>
          <h1
            className={`${display.className} uppercase leading-[0.95] text-[clamp(3rem,12vw,7.5rem)]`}
            style={{ color: C.espuma }}
          >
            Miramar
          </h1>
          <p
            className={`${display.className} mt-1 text-[clamp(1rem,3.5vw,1.7rem)] tracking-[0.18em] uppercase`}
            style={{ color: C.laton }}
          >
            Restaurant · Hostería · Cabañas
          </p>
          <p className="mt-5 max-w-md text-base md:text-lg leading-snug" style={{ color: 'rgba(238,243,239,0.9)' }}>
            El restaurant de mar de Llico y la hostería de siempre: pescados,
            mariscos y habitaciones a metros del Pacífico.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK_MESA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 font-bold text-base tap-44"
              style={{ backgroundColor: C.laton, color: C.mar2, height: 48 }}
            >
              Reservar mesa
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-5 font-semibold text-sm tap-44"
              style={{ border: '1px solid rgba(238,243,239,0.5)', color: C.espuma, height: 44 }}
            >
              Consultar hospedaje
            </a>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 text-sm"
              style={{
                border: '1px solid rgba(238,243,239,0.45)',
                color: C.espuma,
                height: 40,
                backgroundColor: 'rgba(8,20,28,0.6)',
              }}
            >
              <Stars value={4.3} color={C.laton} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviewsCount} reseñas
            </span>
          </div>
        </div>
      </header>

      {/* LA COCINA — del mar a la mesa */}
      <section id="cocina" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <MillaTag n={MILLA[1]} title="Del mar a la mesa" />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {PLATOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 90}>
              <figure
                className="rounded-xl overflow-hidden h-full flex flex-col"
                style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
              >
                <div className="relative aspect-[4/3]">
                  <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(min-width:768px) 45vw, 90vw" />
                </div>
                <figcaption className="p-6 flex-1">
                  <p className={`${display.className} text-2xl leading-tight`} style={{ color: C.mar }}>
                    {p.name}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: 'rgba(20,38,46,0.82)' }}>
                    {p.text}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div
            className="mt-8 rounded-xl px-6 py-5 flex flex-wrap items-center justify-between gap-4"
            style={{ backgroundColor: C.mar }}
          >
            <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em]`} style={{ color: 'rgba(238,243,239,0.85)' }}>
              Mariscos · pescados · caldillos — la carta de la costa
            </p>
            <a
              href={WA_LINK_MESA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-5 font-bold text-sm tap-44"
              style={{ backgroundColor: C.laton, color: C.mar2, height: 44 }}
            >
              Reservar mesa →
            </a>
          </div>
        </Reveal>
      </section>

      {/* LA HOSTERÍA — amarres */}
      <section id="hosteria" className="scroll-mt-16" style={{ backgroundColor: C.mar }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <MillaTag n={MILLA[2]} title="La hostería" dark />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {AMARRES.map((a, i) => (
              <Reveal key={a.src} delay={i * 70}>
                <figure className="group">
                  <div
                    className="relative aspect-[3/4] rounded-lg overflow-hidden"
                    style={{ border: '1px solid rgba(238,243,239,0.2)' }}
                  >
                    <Image
                      src={a.src}
                      alt={a.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(min-width:768px) 22vw, 45vw"
                    />
                  </div>
                  <figcaption className="mt-3" style={{ color: C.espuma }}>
                    <p
                      className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`}
                      style={{ color: C.laton }}
                    >
                      Amarre {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className={`${display.className} text-lg leading-tight mt-1`} style={{ color: C.espuma }}>
                      {a.name}
                    </p>
                    <p className="text-[13px] mt-0.5" style={{ color: 'rgba(238,243,239,0.7)' }}>
                      {a.detalle}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-6 font-bold text-base tap-44"
                style={{ backgroundColor: C.laton, color: C.mar2, height: 48 }}
              >
                Consultar hospedaje
              </a>
              <p className="text-sm" style={{ color: 'rgba(238,243,239,0.75)' }}>
                Habitaciones, cabañas y restaurant en el mismo lugar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LLICO — la costa y el mapa */}
      <section id="llico" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <MillaTag n={MILLA[3]} title="Llico y la costa" />
        </Reveal>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <Reveal className="md:col-span-3">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={`${IMG}/muelle.webp`}
                alt="Restos de muelle y mar de Llico frente a la Hostería Miramar"
                fill
                className="object-cover"
                sizes="(min-width:768px) 55vw, 90vw"
              />
            </div>
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(20,38,46,0.55)' }}>
              El borde costero de Llico, frente al restaurant
            </p>
          </Reveal>
          <div className="md:col-span-2">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(20,38,46,0.88)' }}>
              Llico es el balneario de Vichuquén: un pueblo de pescadores entre
              la Laguna de Torca y el Pacífico. El Miramar queda sobre la
              costanera, en la Av. Ignacio Carrera Pinto.
            </p>
            <address className="not-italic mt-6 space-y-1 text-base" style={{ color: 'rgba(20,38,46,0.85)' }}>
              <p className="font-bold" style={{ color: C.ink }}>{BIZ.name}</p>
              <p>{BIZ.address}</p>
              <p>{BIZ.city}, {BIZ.region}</p>
              <p className="pt-1">
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </p>
            </address>
            <div className="mt-6 rounded-lg overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full aspect-[4/3] border-0" />
            </div>
          </div>
        </div>
      </section>

      {/* LA BITÁCORA — reseñas */}
      <section id="bitacora" className="scroll-mt-16" style={{ backgroundColor: C.espuma }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <MillaTag n={`${BIZ.rating} en Google · ${BIZ.reviewsCount} reseñas`} title="La bitácora" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {BITACORA.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <figure
                  className="rounded-xl p-6 h-full flex flex-col md:flex-row md:gap-5"
                  style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
                >
                  <div
                    className={`${mono.className} shrink-0 text-[10px] uppercase tracking-[0.2em] md:w-24`}
                    style={{ color: C.azul }}
                  >
                    N°{String(i + 1).padStart(3, '0')}
                  </div>
                  <div className="flex-1 mt-2 md:mt-0">
                    <Stars value={r.stars} color={C.laton} className="w-3.5 h-3.5" />
                    <blockquote className="mt-2 text-[15px] leading-relaxed" style={{ color: 'rgba(20,38,46,0.88)' }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption
                      className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.15em]`}
                      style={{ color: 'rgba(20,38,46,0.55)' }}
                    >
                      {r.name} · {r.fecha}
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="mt-6 text-sm" style={{ color: 'rgba(20,38,46,0.65)' }}>
              Extractos de reseñas públicas en Google Maps.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                Leerlas todas →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.mar2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6 flex flex-col gap-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className={`${display.className} uppercase text-2xl leading-none`} style={{ color: C.espuma }}>
                  {BIZ.name}
                </p>
                <address className="not-italic text-sm mt-1" style={{ color: 'rgba(238,243,239,0.75)' }}>
                  {BIZ.address} · {BIZ.city} ·{' '}
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </address>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: 'rgba(238,243,239,0.7)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t" style={{ borderColor: 'rgba(238,243,239,0.15)' }}>
            <p className="pt-4 text-xs leading-relaxed" style={{ color: 'rgba(238,243,239,0.7)' }}>
              Fotos, dirección, teléfono, WhatsApp y número de reseñas son los
              reales de la ficha del negocio; los textos son de muestra.
            </p>
          </div>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
