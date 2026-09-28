import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F4F8FA',
  white: '#FFFFFF',
  blue: '#1F5673',
  deep: '#0E2A39',
  cyan: '#3CD9EC',
  cyanSoft: '#DDF4F9',
  ink: '#152930',
  muted: '#56626F',
  line: 'rgba(21,41,48,0.12)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'agrocesped-del-maule',
  title: 'AgroCesped Del Maule — Pasto en rollo en San Clemente',
  description: 'Pasto en rollo producido en San Clemente, Región del Maule. Césped por m² para jardines, plazas y canchas, cortado el día que lo pides. Cotiza por WhatsApp.',
  image: '/demos/agrocesped-del-maule/hero.webp',
})

const NAV_LINKS = [
  { label: 'El pasto', href: '#surtido' },
  { label: 'El predio', href: '#vivero' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const LINEAS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Rollo de pasto recién cortado sobre el césped del predio de AgroCesped',
    name: 'El rollo, recién cortado',
    desc: 'Césped natural cosechado y enrollado el día que lo pides: llega fresco y listo para instalar, sin tierra suelta ni espera.',
    dato: 'Pasto en rollo por m²',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Tractor extendiendo una plancha de césped en la chacra de San Clemente',
    name: 'Producido en San Clemente',
    desc: 'El césped se cría y se trabaja en la misma chacra: riego, corte y cuidado en campo hasta el día de la cosecha.',
    dato: 'Producción propia',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Camión cargado con rollos de pasto recién cosechados en el predio',
    name: 'Se cosecha y se carga',
    desc: 'Del corte al camión sin escalas: los rollos salen apilados por pallet y listos para el viaje a tu terreno.',
    dato: 'Rollos por pallet',
  },
  {
    src: `${IMG}/detalle4.webp`,
    alt: 'Rollo de pasto instalándose sobre la tierra nivelada de un jardín',
    name: 'Instalación simple',
    desc: 'Sobre tierra nivelada el rollo pega enseguida: se desenrolla, se riega y en semanas ya tienes un césped parejo.',
    dato: 'De la tierra al jardín',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Camión de AgroCesped cargado de pasto con el letrero Venta de Pasto',
    name: 'Retiro o despacho',
    desc: 'Retiras en el predio sobre Av. Huamachuco o coordinamos despacho en la zona según el volumen del pedido.',
    dato: 'Despacho en la región',
  },
]

const PRECIOS = [
  { name: 'Pasto en rollo', unit: 'por m²', price: 'cotiza por m²' },
  { name: 'Pedido por pallet', unit: 'según volumen', price: 'cotiza por WhatsApp' },
  { name: 'Retiro en el predio', unit: 'Av. Huamachuco', price: 'sin costo' },
  { name: 'Despacho en la zona', unit: 'según destino', price: 'coordinar' },
]

/**
 * Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni
 * botones. Fondo en rgba() inline — con bg-ink/90 Chrome serializa
 * color-mix como oklab() y los chequeos de contraste no lo leen.
 */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-yellow tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-yellow tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.cyan : C.blue }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function AgroCespedPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      {/* fondo oscuro del hero bajo el nav transparente (el wrapper no ocupa alto) */}
      <div style={{ backgroundColor: C.deep }}>
        <BlitzNav
          name={BIZ.short}
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(244,248,250,0.94)',
            ink: C.deep,
            line: C.line,
            btnBg: C.blue,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Campo de césped del predio AgroCesped en San Clemente, con árboles y cielo despejado"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,42,57,0.6) 0%, rgba(14,42,57,0.35) 35%, rgba(14,42,57,0.92) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(244,248,250,0.94)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              ★ 5,0 · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Pasto en rollo · San Clemente · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-medium uppercase leading-[1.02] tracking-[-0.01em] text-[clamp(2rem,7vw,4.6rem)] mb-6`}
              style={{ color: '#F4F8FA' }}
            >
              Pasto en rollo,
              <br />
              <span style={{ color: C.cyan }}>cortado en San Clemente</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(244,248,250,0.88)' }}>
              Césped natural por m² para jardines, plazas y canchas,
              producido en la chacra de Av. Huamachuco. Cotiza por
              WhatsApp y retira en el predio o coordina despacho.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.cyan, color: C.deep }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#surtido"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(244,248,250,0.55)', color: '#F4F8FA' }}
              >
                Ver el surtido
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(244,248,250,0.22)', backgroundColor: 'rgba(14,42,57,0.85)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 md:pb-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(244,248,250,0.9)' }}>
            <span>Av. Huamachuco, San Clemente</span>
            <span>Venta por m² y por pallet</span>
            <span>Retiro en predio · despacho en la región</span>
            <span className="hidden md:inline" style={{ color: C.cyan }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Surtido: tarjetas apiladas ── */}
      <section id="surtido" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-18 md:pt-24 pb-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-start mb-10 md:mb-14">
          <Reveal>
            <Eyebrow>Del predio a tu terreno</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase text-3xl md:text-4xl leading-[1.08]`} style={{ color: C.blue }}>
              Así llega
              <br />
              tu pasto
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl lg:pt-12" style={{ color: C.muted }}>
              Fotos reales de la chacra y del producto: el rollo, la
              cosecha, la instalación y el despacho. Los textos son de
              muestra para mostrar el formato del sitio.
            </p>
          </Reveal>
        </div>

        {/* sticky stack: cada tarjeta se apila sobre la anterior */}
        <div className="relative">
          {LINEAS.map((l, i) => (
            <div
              key={l.name}
              className="sticky pb-6 md:pb-8"
              style={{ top: `${76 + i * 16}px`, zIndex: i + 1 }}
            >
              <article
                className="rounded-3xl border overflow-hidden"
                style={{
                  backgroundColor: C.white,
                  borderColor: C.line,
                  boxShadow: '0 -14px 44px rgba(14,42,57,0.14)',
                }}
              >
                <div className="grid md:grid-cols-[1.1fr_1fr] min-h-[380px] md:min-h-[430px]">
                  <div className="p-7 md:p-11 flex flex-col justify-center order-2 md:order-1">
                    <span
                      className={`${display.className} font-medium text-[13px] tracking-[0.2em] mb-5 inline-flex items-center gap-3`}
                      style={{ color: C.blue }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                      <span className="inline-block w-10 h-px" style={{ backgroundColor: C.line }} />
                      <span className="uppercase" style={{ color: C.muted }}>línea de muestra</span>
                    </span>
                    <h3 className={`${display.className} font-medium uppercase text-2xl md:text-3xl leading-[1.1] mb-4`} style={{ color: C.blue }}>
                      {l.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: C.muted }}>
                      {l.desc}
                    </p>
                    <span
                      className="self-start text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] px-3.5 py-2 rounded-full"
                      style={{ backgroundColor: C.cyanSoft, color: C.blue }}
                    >
                      {l.dato}
                    </span>
                  </div>
                  <div className="relative order-1 md:order-2 min-h-[220px] md:min-h-0">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover md:rounded-l-[2rem]"
                    />
                    <span
                      className="absolute inset-0 md:rounded-l-[2rem] pointer-events-none"
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(21,41,48,0.08)' }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="vivero" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El predio</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase text-3xl md:text-4xl leading-[1.08] mb-6`} style={{ color: C.blue }}>
              De la chacra
              <br />
              a tu jardín
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-lg" style={{ color: C.muted }}>
              AgroCesped Del Maule produce pasto en rollo sobre Av.
              Huamachuco, en San Clemente. Acá hablas directo con quien
              trabaja la chacra: el mismo que cosecha el césped es el
              que te contesta el WhatsApp.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg" style={{ color: C.muted }}>
              El foco es el volumen: pedidos por m² y por pallet para
              jardines, plazas, canchas y proyectos. Pasto sano cortado
              el día, precio de productor y despacho coordinado en la
              región.
            </p>
            <ul className="space-y-3 mb-2">
              {[
                'Precio de productor, sin intermediarios',
                'Césped cosechado el día, no guardado de semanas',
                'Respuesta rápida por WhatsApp, con foto del corte del día',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.cyan }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl border p-7 md:p-9" style={{ backgroundColor: C.paper, borderColor: C.line }}>
              <p className={`${display.className} font-medium uppercase text-sm tracking-[0.14em] mb-7`} style={{ color: C.blue }}>
                La ficha en números
              </p>
              <dl className="space-y-6">
                <div className="flex items-baseline justify-between gap-4 border-b pb-5" style={{ borderColor: C.line }}>
                  <dt className="text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: C.muted }}>
                    Reseñas en Google
                  </dt>
                  <dd>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} text-2xl font-semibold underline underline-offset-4 decoration-2 tap-44`}
                      style={{ color: C.blue, textDecorationColor: 'rgba(31,86,115,0.3)' }}
                    >
                      {BIZ.reviews}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b pb-5" style={{ borderColor: C.line }}>
                  <dt className="text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: C.muted }}>
                    En sus redes
                  </dt>
                  <dd className="flex items-baseline gap-4">
                    <a
                      href={BIZ.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} text-2xl font-semibold underline underline-offset-4 decoration-2 tap-44`}
                      style={{ color: C.blue, textDecorationColor: 'rgba(31,86,115,0.3)' }}
                    >
                      {BIZ.fbFollowers} FB
                    </a>
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} text-2xl font-semibold underline underline-offset-4 decoration-2 tap-44`}
                      style={{ color: C.blue, textDecorationColor: 'rgba(31,86,115,0.3)' }}
                    >
                      {BIZ.igFollowers} IG
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: C.muted }}>
                    Pedidos
                  </dt>
                  <dd className={`${display.className} text-2xl font-semibold`} style={{ color: C.blue }}>
                    por WhatsApp
                  </dd>
                </div>
              </dl>
              <p className="text-xs leading-relaxed mt-7" style={{ color: C.muted }}>
                Cifras reales de la ficha pública y las redes del
                productor. Los textos de esta página son de muestra.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Precios por volumen</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
            <h2 className={`${display.className} font-medium uppercase text-3xl md:text-4xl leading-[1.08]`} style={{ color: C.blue }}>
              Referencia de precios
            </h2>
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.14em] px-3.5 py-2 rounded-full border"
              style={{ borderColor: C.line, color: C.muted, backgroundColor: C.white }}
            >
              Valores de muestra
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-3xl border overflow-hidden" style={{ backgroundColor: C.white, borderColor: C.line }}>
            {PRECIOS.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1fr_auto] items-center gap-x-6 gap-y-1 px-6 md:px-8 py-5 ${i > 0 ? 'border-t' : ''}`}
                style={{ borderColor: C.line }}
              >
                <div>
                  <p className={`${display.className} font-medium text-sm md:text-base`} style={{ color: C.ink }}>
                    {p.name}
                  </p>
                  <p className="text-xs md:hidden" style={{ color: C.muted }}>
                    {p.unit}
                  </p>
                </div>
                <p className="hidden md:block text-sm" style={{ color: C.muted }}>
                  {p.unit}
                </p>
                <p className={`${display.className} text-base md:text-lg font-semibold text-right`} style={{ color: C.blue }}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-xs md:text-sm leading-relaxed mt-5 max-w-2xl" style={{ color: C.muted }}>
            Estos valores son de muestra para mostrar el formato del
            sitio, no son los precios del vivero. Los valores reales se
            cotizan por WhatsApp según volumen y temporada.
          </p>
        </Reveal>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase text-3xl md:text-4xl leading-[1.08] mb-6`} style={{ color: C.blue }}>
              Cotiza tu
              <br />
              pedido
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Escríbenos qué necesitas y en qué cantidad: respondemos
              con precio, stock y fecha de retiro o despacho.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border transition-colors tap-44`}
                style={{ borderColor: 'rgba(31,86,115,0.4)', color: C.blue }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.blue }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-medium uppercase text-[clamp(1.8rem,5.5vw,3.4rem)] leading-[1.08] mb-6`} style={{ color: '#F4F8FA' }}>
              ¿Jardín, plaza
              <br />
              o cancha?
              <span style={{ color: C.cyan }} className="block">Pide tu pasto</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,248,250,0.9)' }}>
              Dinos cuántos m² necesitas y para cuándo: te armamos la
              cotización con fecha de corte y retiro o despacho.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.cyan, color: C.deep }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F4F8FA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-semibold text-lg mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,248,250,0.8)' }}>
              {BIZ.address} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(244,248,250,0.75)' }}>
            Sitio de ejemplo por Sitiazo · fotos reales del predio ·{' '}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white tap-44">
              Facebook
            </a>{' '}
            ·{' '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white tap-44">
              Instagram
            </a>
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
