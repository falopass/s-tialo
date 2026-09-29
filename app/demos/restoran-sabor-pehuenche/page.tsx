import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, IMG, ESTILOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2', weight: '400' }],
})
const bodyBold = localFont({
  src: [{ path: '../../fonts/barlow/normal-700.woff2', weight: '700' }],
})

const C = {
  night: '#101612',
  pine: '#18251D',
  card: '#1D2B22',
  copper: '#C8842E',
  copperHi: '#E5A94E',
  cream: '#EFE5CC',
  ink: '#F3EFE4',
  muted: 'rgba(243,239,228,0.72)',
  line: 'rgba(239,229,204,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por
// defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [0, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restoran-sabor-pehuenche',
  title: 'Cervecería Pwenche — Sabor Pehuenche, km 32 ruta a Argentina',
  description:
    'Cervecería Pwenche (Sabor Pehuenche SpA) en Ruta Pehuenche CH-115 km 32, San Clemente. Cerveza artesanal sin filtrar, taproom de madera y growlers para llevar. Pedidos por WhatsApp.',
  image: `${IMG}/copa-tanques.webp`,
})

const NAV_LINKS = [
  { label: 'Estilos', href: '#estilos' },
  { label: 'El taproom', href: '#taproom' },
  { label: 'Para llevar', href: '#llevar' },
  { label: 'Cómo llegar', href: '#contacto' },
]

function SectionHead({
  index,
  title,
}: {
  index: string
  title: React.ReactNode
}) {
  return (
    <div
      className="flex items-end justify-between gap-4 border-t-2 pt-4 mb-9 md:mb-12"
      style={{ borderColor: C.copper }}
    >
      <h2
        className={`${display.className} text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.02]`}
        style={{ color: C.ink }}
      >
        {title}
      </h2>
      <span
        className={`${display.className} shrink-0 text-lg md:text-2xl leading-none pb-1`}
        style={{ color: C.copperHi }}
        aria-hidden="true"
      >
        {index}
      </span>
    </div>
  )
}

export default function SaborPehuenchePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.night, color: C.ink }}
    >
      <style>{`
        .pw-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .pw-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
        .pw-btn:active { transform: translateY(0) scale(0.97); }
        .pw-btn:focus-visible { outline: 3px solid ${C.copperHi}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_PEDIDO}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(16,22,18,0.95)',
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.16)',
          btnBg: C.copper,
          btnInk: '#101612',
        }}
      />

      {/* ── Hero: la casa cervecera ── */}
      <section id="inicio" className="relative flex flex-col lg:flex-row lg:min-h-svh" style={{ backgroundColor: C.night }}>
        <div className="lg:w-[46%] flex flex-col justify-center px-5 md:px-8 xl:px-14 pt-28 pb-10 lg:pt-32 lg:pb-16">
          <Reveal>
            <p
              className={`${bodyBold.className} text-xs md:text-sm uppercase tracking-[0.22em] mb-4`}
              style={{ color: C.copperHi }}
            >
              Cervecería · Ruta Pehuenche km 32
            </p>
            <h1
              className={`${display.className} text-[clamp(2.8rem,7vw,5.6rem)] leading-[1.0] mb-5`}
              style={{ color: C.cream }}
            >
              Pwenche
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              Cerveza especial sin filtrar, elaborada y embotellada por
              Sabor Pehuenche SpA en el kilómetro 32 de la ruta a
              Argentina. Taproom de madera, schopería y growlers.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bodyBold.className} pw-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.copper, color: C.night }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#estilos"
                className={`${bodyBold.className} pw-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(239,229,204,0.45)', color: C.cream }}
              >
                Ver estilos
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative lg:w-[54%] min-h-[46vh] lg:min-h-0">
          <Image
            src={`${IMG}/copa-tanques.webp`}
            alt="Vaso Pwenche servido frente a los estanques de acero de la fábrica"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(16,22,18,0.4) 0%, transparent 30%)' }}
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pw-btn inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap tap-44"
              style={{ backgroundColor: C.cream, color: C.night }}
            >
              <Stars value={BIZ.rating} color={C.copper} className="w-4 h-4" />
              {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
            </a>
          </div>
        </div>
      </section>

      {/* cinta de datos */}
      <div className="border-t" style={{ borderColor: C.line, backgroundColor: C.night }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] md:text-xs uppercase tracking-[0.16em] font-semibold"
          style={{ color: C.muted }}
        >
          <span>Fábrica de cerveza</span>
          <span>Sabor Pehuenche SpA</span>
          <span>{BIZ.site}</span>
          <span style={{ color: C.copperHi }}>sitio de ejemplo</span>
        </div>
      </div>

      {/* ── Estilos ── */}
      <section id="estilos" className="scroll-mt-20" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="de la línea" title={<>Los estilos de la casa</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {ESTILOS.map((e, i) => (
              <Reveal key={e.name} delay={i * 70} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div
                  className="h-full rounded-2xl border p-6 md:p-7 flex flex-col"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <p className={`${display.className} text-sm mb-4`} style={{ color: C.copperHi }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`${display.className} text-2xl md:text-3xl mb-2`} style={{ color: C.cream }}>
                    {e.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <p className="text-xs md:text-sm mt-6 leading-relaxed" style={{ color: C.muted }}>
              Estilos publicados en su tienda online ({BIZ.site}) y en la
              pizarra del taproom. Formatos en botella de 330 cc,
              sin filtrar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La etiqueta: sin filtrar ── */}
      <section aria-label="Cómo se hace" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="en la botella" title={<>Cerveza especial, sin filtrar</>} />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="lg:col-span-5">
              <Reveal>
                <p className={`${display.className} text-2xl md:text-3xl leading-snug mb-6`} style={{ color: C.copperHi }}>
                  Malta pilsen, munich y melano; avena; lúpulos Chinook, Cascade y Mosaic.
                </p>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                  La contracara de la botella lo dice completo:
                  ingredientes declarados, 5,0° de alcohol, IBU 45 y la
                  dirección de la fábrica en El Olivar. Artesanal de
                  verdad, con etiqueta que se puede leer.
                </p>
                <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  Mantener refrigerado · producto para mayores de 18 años
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 md:gap-5">
              <Reveal delay={80} className="col-span-6">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <Image
                    src={`${IMG}/etiqueta-detalle.webp`}
                    alt="Etiqueta trasera de cerveza Pwenche con ingredientes y dirección de la fábrica"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={150} className="col-span-6">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <Image
                    src={`${IMG}/etiqueta-summer.webp`}
                    alt="Etiqueta amarilla de la Summer Lager Pwenche"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El taproom ── */}
      <section id="taproom" className="scroll-mt-20" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="en el km 32" title={<>El taproom de la ruta</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.ink }}>
                  Barra de madera, torre de grifos de cobre y los estanques
                  de la fábrica a la vista. Se para camino al paso
                  Pehuenche y se sale con growler lleno.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  También hay degustaciones en grupo y una terraza con
                  parrilla para los días buenos.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 md:gap-5">
              <Reveal delay={80} className="col-span-7">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={`${IMG}/barra-grifos.webp`}
                    alt="Barra de madera con torre de grifos de cobre y botellas Pwenche"
                    fill
                    sizes="(min-width: 1024px) 42vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140} className="col-span-5">
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[150px]">
                  <Image
                    src={`${IMG}/schop-barra.webp`}
                    alt="Schop servido frente a la pizarra de estilos y grifos del taproom"
                    fill
                    sizes="(min-width: 1024px) 26vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200} className="col-span-5">
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[150px]">
                  <Image
                    src={`${IMG}/degustacion.webp`}
                    alt="Degustación de cervezas Pwenche con packs de botellas en el taproom"
                    fill
                    sizes="(min-width: 1024px) 26vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={260} className="col-span-7">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza del taproom con mesas, parrilla y luces de feria"
                    fill
                    sizes="(min-width: 1024px) 42vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Para llevar: growlers ── */}
      <section id="llevar" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHead index="growlers y packs" title={<>De la espita a tu casa</>} />
              </Reveal>
              <Reveal delay={80}>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.ink }}>
                  Botellas de 330 cc en pack, growlers retornables y la
                  línea completa disponible en el taproom y por encargo en
                  su tienda online.
                </p>
                <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
                  Para pedidos y retiro se coordina directo por WhatsApp.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <a
                  href={WA_LINK_PEDIDO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${bodyBold.className} pw-btn inline-flex font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                  style={{ backgroundColor: C.copper, color: C.night }}
                >
                  Coordinar pedido
                </a>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={120} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-2xl border aspect-[3/4] min-h-[300px]"
                  style={{ borderColor: C.line }}
                >
                  <Image
                    src={`${IMG}/growlers.webp`}
                    alt="Growlers ámbar de Pwenche con la marca Craft Beer y San Clemente"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="ruta ch-115" title={<>Kilómetro 32, camino al paso</>} />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className={`${display.className} text-2xl md:text-3xl leading-snug mb-7`} style={{ color: C.copperHi }}>
                  La casa cervecera está en El Olivar, camino a la frontera.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8 font-medium space-y-1" style={{ color: 'rgba(243,239,228,0.92)' }}>
                  <p>{BIZ.address}</p>
                  <p>{BIZ.city}, {BIZ.region}</p>
                  <p>WhatsApp {BIZ.phoneDisplay} · {BIZ.site}</p>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bodyBold.className} pw-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                    style={{ backgroundColor: C.copper, color: C.night }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bodyBold.className} pw-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                    style={{ borderColor: 'rgba(239,229,204,0.45)', color: C.cream }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-2xl border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: 'rgba(239,229,204,0.3)' }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.cream }}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
            {BIZ.legal} · {BIZ.address}
            <br />
            {BIZ.city}, {BIZ.region} · WhatsApp {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-10 text-xs leading-relaxed" style={{ color: 'rgba(243,239,228,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos y fotos de su ficha de Google y su tienda online.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.copperHi }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
