import type { Metadata } from 'next'
import { Unbounded, Onest } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const body = Onest({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const C = {
  paper: '#F4F8FA',
  white: '#FFFFFF',
  blue: '#1F5673',
  deep: '#0E2A39',
  cyan: '#3CD9EC',
  cyanSoft: '#DDF4F9',
  ink: '#152930',
  muted: '#6E7B8B',
  line: 'rgba(21,41,48,0.12)',
}

export const metadata: Metadata = {
  title: 'AgroCesped Del Maule — Vivero mayorista en San Clemente',
  description:
    'Vivero mayorista en San Clemente, Región del Maule. Plantas por volumen para tiendas, jardinerías y proyectos: flor de temporada, interior, frutales e insumos. Cotiza por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Surtido', href: '#surtido' },
  { label: 'El vivero', href: '#vivero' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const LINEAS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Maceteros con flor de temporada — lavanda, margaritas, geranios y dimorfotecas — listos para despacho',
    name: 'Flor y ornamental de temporada',
    desc: 'Lavanda, margaritas, geranios y lo que marque la semana. El surtido rota todo el año, así que tu vitrina siempre tiene novedad.',
    dato: 'Se vende por bandeja',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Interior de invernadero con potos colgantes, begonias, helechos y plantas de interior en mesones',
    name: 'Interior y colgantes',
    desc: 'Potos, begonias, helechos y cestas colgantes criadas en invernadero. Salen listas para exhibir y vender el mismo día que llegan.',
    dato: 'Verde garantizado todo el año',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Cítrico joven plantado en huerto con lavanda y aromáticas alrededor',
    name: 'Frutales y plantas de huerto',
    desc: 'Cítricos, frutales de la zona y aromáticas enraizadas en macetero. Planta sana que prende, no recién transplantada.',
    dato: 'Enraizados en macetero',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Pilas de maceteros de terracota con lavanda, menta y tomillo en el vivero',
    name: 'Maceteros e insumos',
    desc: 'Terracota, plástico y sustratos para completar el pedido. Un solo proveedor, un solo flete, una sola conversación.',
    dato: 'Complemento del pedido',
  },
]

const PRECIOS = [
  { name: 'Flor de temporada', unit: 'bandeja × 20 un', price: 'desde $1.800 c/u' },
  { name: 'Aromáticas', unit: 'bandeja × 24 un', price: 'desde $1.500 c/u' },
  { name: 'Interior y colgantes', unit: 'caja × 12 un', price: 'desde $3.500 c/u' },
  { name: 'Frutales enraizados', unit: 'por 10 unidades', price: 'desde $6.900 c/u' },
  { name: 'Macetero terracota nº 8', unit: 'por 24 un', price: 'desde $2.200 c/u' },
]

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
      <BlitzNav
        name={BIZ.short}
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

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Hileras de maceteros con arbustos y árboles jóvenes en un vivero mayorista de San Clemente, con cerros del Maule al fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,42,57,0.5) 0%, rgba(14,42,57,0.12) 38%, rgba(14,42,57,0.85) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(244,248,250,0.94)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Vivero mayorista · San Clemente · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-medium uppercase leading-[1.02] tracking-[-0.01em] text-[clamp(2rem,7vw,4.6rem)] mb-6`}
              style={{ color: '#F4F8FA' }}
            >
              Plantas por volumen,
              <br />
              <span style={{ color: C.cyan }}>directo del vivero</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(244,248,250,0.88)' }}>
              Abastecemos tiendas, jardinerías y proyectos con plantas
              sanas producidas en San Clemente. Cotiza tu pedido por
              WhatsApp y retira en el vivero o coordina despacho.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.cyan, color: C.deep }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#surtido"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(244,248,250,0.55)', color: '#F4F8FA' }}
              >
                Ver el surtido
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(244,248,250,0.22)', backgroundColor: 'rgba(14,42,57,0.5)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(244,248,250,0.78)' }}>
            <span>Av. Huamachuco, San Clemente</span>
            <span>Venta por volumen</span>
            <span>Retiro en vivero · despacho en la región</span>
            <span className="hidden md:inline" style={{ color: C.cyan }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Surtido: tarjetas apiladas ── */}
      <section id="surtido" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-18 md:pt-24 pb-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-start mb-10 md:mb-14">
          <Reveal>
            <Eyebrow>Surtido mayorista</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase text-3xl md:text-4xl leading-[1.08]`} style={{ color: C.blue }}>
              Lo que llega
              <br />
              a tu local
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl lg:pt-12" style={{ color: C.muted }}>
              Cuatro líneas para completar el surtido sin buscar otro
              proveedor. Las líneas son de ejemplo: al publicar van los
              productos y formatos reales del vivero.
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
                      style={{ color: C.cyan }}
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
                    <img
                      src={l.src}
                      alt={l.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover md:rounded-l-[2rem]"
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
            <Eyebrow>El vivero</Eyebrow>
            <h2 className={`${display.className} font-medium uppercase text-3xl md:text-4xl leading-[1.08] mb-6`} style={{ color: C.blue }}>
              Producción propia
              <br />
              en San Clemente
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-lg" style={{ color: C.muted }}>
              AgroCesped Del Maule es un vivero mayorista sobre Av.
              Huamachuco, en San Clemente. Acá hablas directo con quien
              produce: el mismo que revisa la planta es el que te
              contesta el WhatsApp.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg" style={{ color: C.muted }}>
              El foco es el volumen: bandejas, cajas y pedidos
              completos para tiendas, jardinerías, municipios y
              proyectos. Planta sana, precio mayorista y despacho
              coordinado en la región.
            </p>
            <ul className="space-y-3 mb-2">
              {[
                'Precio por volumen real, sin intermediarios',
                'Planta sana criada en el vivero, no recién transplantada',
                'Respuesta rápida por WhatsApp, con foto del stock del día',
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
                      className={`${display.className} text-2xl font-semibold underline underline-offset-4 decoration-2`}
                      style={{ color: C.blue, textDecorationColor: 'rgba(31,86,115,0.3)' }}
                    >
                      {BIZ.reviews}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b pb-5" style={{ borderColor: C.line }}>
                  <dt className="text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: C.muted }}>
                    Seguidores en Facebook
                  </dt>
                  <dd>
                    <a
                      href={BIZ.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} text-2xl font-semibold underline underline-offset-4 decoration-2`}
                      style={{ color: C.blue, textDecorationColor: 'rgba(31,86,115,0.3)' }}
                    >
                      {BIZ.fbFollowers}
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
                Cifras reales de la ficha pública del vivero. Los textos
                de esta página son de muestra.
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
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
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
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(31,86,115,0.4)', color: C.blue }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
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
              ¿Vendes plantas?
              <br />
              <span style={{ color: C.cyan }}>Abastece tu local</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,248,250,0.78)' }}>
              Cuéntanos qué líneas mueves y te armamos una cotización
              por volumen. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.cyan, color: C.deep }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F4F8FA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,248,250,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,248,250,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,248,250,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(244,248,250,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            productos, precios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
