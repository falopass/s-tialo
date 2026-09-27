import type { Metadata } from 'next'
import { Libre_Franklin, Source_Serif_4 } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})
const body = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

const C = {
  paper: '#F5EFE6',
  soft: '#EAE0D0',
  card: '#FBF7EF',
  vino: '#6B2737',
  vinoDeep: '#3A1520',
  oro: '#B98B4E',
  oroSoft: '#E4D2B2',
  ink: '#2B1B20',
  muted: '#7B6A62',
  line: 'rgba(43,27,32,0.16)',
}

export const metadata: Metadata = {
  title: 'Ferreteria Williams Pencahue — Ferretería y maderas en Pencahue',
  description:
    'Ferretería en Santa Sara, Pencahue, Región del Maule. Herramientas, tornillería al detalle, gasfitería, electricidad e insumos para el campo. Pedidos por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La ferretería', href: '#mosaico' },
  { label: 'El negocio', href: '#nosotros' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

type MosaicTile =
  | {
      kind: 'photo'
      src: string
      alt: string
      tag: string
      caption: string
      span: string
    }
  | {
      kind: 'text'
      dark?: boolean
      tag: string
      title: string
      desc: string
      list?: string[]
      span: string
    }

const MOSAIC: MosaicTile[] = [
  {
    kind: 'photo',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de madera de la ferretería con tornillos en cajones, balanza y estantes de fittings al fondo',
    tag: 'Tornillería al detalle',
    caption: 'El mesón de siempre: el tornillo se pesa y se cobra justo.',
    span: 'md:col-span-4 md:row-span-2',
  },
  {
    kind: 'text',
    dark: true,
    tag: 'La casa',
    title: 'Ferretería y maderas',
    desc: 'Herramientas, materiales e insumos para la casa, la obra y el campo, en Santa Sara.',
    span: 'md:col-span-2',
  },
  {
    kind: 'photo',
    src: `${IMG}/detalle1.webp`,
    alt: 'Banco de trabajo con martillo, alicates, huincha de medir, clavos y bisagras',
    tag: 'Herramientas',
    caption: 'Martillos, alicates, huinchas y todo lo que se gasta y hay que reponer.',
    span: 'md:col-span-2',
  },
  {
    kind: 'photo',
    src: `${IMG}/detalle3.webp`,
    alt: 'Estantes del local con codos y tees de PVC, fittings de bronce, mangueras y carretilla',
    tag: 'Gasfitería y PVC',
    caption: 'Codos, tees, pegamento y mangueras: la gotera se corta hoy.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    kind: 'photo',
    src: `${IMG}/ambiente.webp`,
    alt: 'Fachada de la ferretería con la cortina abierta y los cerros de Pencahue al fondo',
    tag: 'El local',
    caption: 'Santa Sara - Lote 16, con los cerros de Pencahue al fondo.',
    span: 'md:col-span-4',
  },
  {
    kind: 'text',
    tag: 'Y lo que falte',
    title: 'Se encarga y llega',
    desc: 'Si no está en el estante, se pide y se avisa por WhatsApp cuando llega.',
    list: ['Material eléctrico', 'Pinturas y accesorios', 'Insumos para el campo y el huerto'],
    span: 'md:col-span-2',
  },
]

const TESTIMONIALS = [
  'Siempre tienen lo que ando buscando, y si no, lo encargan y avisan. Así da gusto comprar en el pueblo.',
  'Atención directa y buena disposición. Me ayudaron a encontrar el fitting exacto que necesitaba para la cañería.',
  'Compré madera y tornillos para un radier chico y me pesaron todo en el mesón, como antes.',
]

const PRICES = [
  { name: 'Clavos de acero (kg)', desc: 'Se venden al peso en el mesón', price: '$2.990' },
  { name: 'Disco de corte 4½"', desc: 'Para esmeril angular', price: '$990' },
  { name: 'Candado de acero 50 mm', desc: 'Con tres llaves', price: '$7.990' },
  { name: 'Esmalte sintético (galón)', desc: 'Colores según stock', price: '$21.990' },
  { name: 'Manguera cristal (metro)', desc: 'Distintos diámetros', price: '$890' },
  { name: 'Cemento (saco 25 kg)', desc: 'Uso general', price: '$6.500' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: light ? C.oroSoft : C.vino }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function FerreteriaWilliamsPage() {
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
          bar: 'rgba(245,239,230,0.94)',
          ink: C.vinoDeep,
          line: C.line,
          btnBg: C.vino,
          btnInk: '#F5EFE6',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.vinoDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Pasillo interior de la ferretería con fittings de PVC, herramientas y la puerta abierta hacia la calle de Pencahue"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(58,21,32,0.45) 0%, rgba(58,21,32,0.10) 38%, rgba(58,21,32,0.80) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg`}
              style={{ backgroundColor: 'rgba(245,239,230,0.94)', color: C.vinoDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.oro} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Ferretería y maderas · Pencahue · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[1.0] tracking-[-0.02em] text-[clamp(2.7rem,9.5vw,5.8rem)] mb-6`}
              style={{ color: '#F5EFE6' }}
            >
              Todo para la casa,
              <br />
              <em className="font-semibold" style={{ color: C.oroSoft }}>el campo y la obra</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(245,239,230,0.88)' }}>
              Ferreteria Williams Pencahue: herramientas, tornillería al
              detalle, gasfitería, electricidad e insumos en Santa Sara.
              Atendido por su gente, como siempre.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.oro, color: C.vinoDeep }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#mosaico"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(245,239,230,0.55)', color: '#F5EFE6' }}
              >
                Ver la ferretería
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(245,239,230,0.22)', backgroundColor: 'rgba(58,21,32,0.45)', backdropFilter: 'blur(6px)' }}>
          <div className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(245,239,230,0.78)' }}>
            <span>{BIZ.address}</span>
            <span>{BIZ.city} · {BIZ.region}</span>
            <span>Pedidos por WhatsApp</span>
            <span className="hidden md:inline" style={{ color: C.oroSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Mosaico fotográfico: la página como galería ── */}
      <section id="mosaico" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-end mb-10 md:mb-14">
          <Reveal>
            <Eyebrow>La ferretería en fotos</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em]`} style={{ color: C.vino }}>
              El local, tal cual es
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
              Un recorrido por los estantes: cada rincón del local tiene
              su oficio. Los rubros son de muestra — al publicar va el
              stock real de la ferretería.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[195px] gap-4 md:gap-5">
          {MOSAIC.map((t, i) => (
            <Reveal key={i} delay={i * 80} className={t.span}>
              {t.kind === 'photo' ? (
                <figure className="group relative rounded-2xl overflow-hidden h-full min-h-[240px] md:min-h-0 aspect-[4/3] md:aspect-auto" style={{ boxShadow: '0 1px 2px rgba(58,21,32,0.08)' }}>
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(58,21,32,0.82) 100%)' }}>
                    <p className={`${display.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-1`} style={{ color: C.oroSoft }}>
                      {t.tag}
                    </p>
                    <p className="text-sm leading-snug" style={{ color: '#F5EFE6' }}>
                      {t.caption}
                    </p>
                  </figcaption>
                </figure>
              ) : (
                <div
                  className={`rounded-2xl h-full p-5 md:p-6 flex flex-col justify-center border ${t.dark ? '' : ''}`}
                  style={
                    t.dark
                      ? { backgroundColor: C.vino, borderColor: 'rgba(245,239,230,0.12)' }
                      : { backgroundColor: C.card, borderColor: C.line }
                  }
                >
                  <p
                    className={`${display.className} text-[10px] uppercase tracking-[0.2em] font-bold mb-2`}
                    style={{ color: t.dark ? C.oroSoft : C.oro }}
                  >
                    {t.tag}
                  </p>
                  <h3
                    className={`${display.className} font-bold text-xl md:text-2xl leading-tight mb-2`}
                    style={{ color: t.dark ? '#F5EFE6' : C.vino }}
                  >
                    {t.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: t.dark ? 'rgba(245,239,230,0.8)' : C.muted }}>
                    {t.desc}
                  </p>
                  {t.list && (
                    <ul className="mt-3 space-y-1.5">
                      {t.list.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: t.dark ? 'rgba(245,239,230,0.85)' : C.ink }}>
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="nosotros" className="scroll-mt-20" style={{ backgroundColor: C.vinoDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>El negocio</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] mb-6`} style={{ color: '#F5EFE6' }}>
                La ferretería que
                <br />
                <em className="font-semibold" style={{ color: C.oroSoft }}>conoce a su gente</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(245,239,230,0.78)' }}>
                En Pencahue las cosas funcionan de otra manera: se llega,
                se pregunta y se conversa. {BIZ.name} atiende directo,
                pesa la tornillería en el mesón y encarga lo que no está
                en el estante. Su ficha de Google ya acumula{' '}
                <strong style={{ color: C.oroSoft }}>{BIZ.reviews} reseñas</strong>{' '}
                de vecinos de la comuna.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Atención directa: hablas con quien atiende el local',
                  'Venta al detalle: un tornillo, un codo, un metro',
                  'Encargos que llegan y se avisan por WhatsApp',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(245,239,230,0.88)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm font-semibold underline underline-offset-4 decoration-2`}
                style={{ color: C.oroSoft, textDecorationColor: 'rgba(185,139,78,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="rounded-2xl p-6 md:p-7 border"
                    style={{ backgroundColor: 'rgba(245,239,230,0.06)', borderColor: 'rgba(245,239,230,0.14)' }}
                  >
                    <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'rgba(245,239,230,0.92)' }}>
                      “{t}”
                    </blockquote>
                    <figcaption className={`${display.className} text-[11px] uppercase tracking-[0.18em] font-semibold`} style={{ color: C.oroSoft }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Precios de referencia</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] mb-5`} style={{ color: C.vino }}>
                La carta del mesón
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: C.muted }}>
                Valores de muestra para mostrar el formato: al publicar
                van los precios reales del local. El precio cierto y el
                stock se confirman por WhatsApp.
              </p>
              <span
                className={`${display.className} inline-block text-[11px] uppercase tracking-[0.18em] font-bold px-3.5 py-2 rounded-full border`}
                style={{ color: C.vino, borderColor: 'rgba(107,39,55,0.35)' }}
              >
                precios de muestra
              </span>
            </Reveal>
            <Reveal delay={140}>
              <ul className="rounded-2xl border overflow-hidden" style={{ backgroundColor: C.card, borderColor: C.line }}>
                {PRICES.map((p, i) => (
                  <li
                    key={p.name}
                    className="flex items-baseline gap-4 px-5 md:px-7 py-4 md:py-5"
                    style={{ borderTop: i === 0 ? 'none' : `1px dashed ${C.line}` }}
                  >
                    <div className="min-w-0">
                      <p className={`${display.className} font-semibold text-base md:text-lg leading-snug`} style={{ color: C.ink }}>
                        {p.name}
                      </p>
                      <p className="text-sm leading-snug" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                    <span
                      className={`${display.className} ml-auto shrink-0 font-bold text-base md:text-lg`}
                      style={{ color: C.vino }}
                    >
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] mb-6`} style={{ color: C.vino }}>
              Pregunta primero,
              <br />
              ven después
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-sm" style={{ color: C.muted }}>
              Escribe por WhatsApp con lo que necesitas — una foto ayuda
              — y te confirmamos stock y precio antes de que salgas de la
              casa.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.vino, color: '#F5EFE6' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(107,39,55,0.4)', color: C.vino }}
              >
                Cómo llegar →
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: C.muted }}>
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-2" style={{ color: C.ink }}>
                {BIZ.phoneDisplay}
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: C.ink }}
              >
                Facebook
              </a>
              <span>Horario de muestra: Lun–Sáb 9:00–19:00</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.vino }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] tracking-[-0.01em] mb-6`} style={{ color: '#F5EFE6' }}>
              Lo que falte,
              <br />
              <em className="font-semibold" style={{ color: C.oroSoft }}>lo encargamos</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,239,230,0.78)' }}>
              Escríbenos por WhatsApp, cuéntanos qué necesitas y te
              avisamos cuando esté listo para retirar en Santa Sara.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.oro, color: C.vinoDeep }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.vinoDeep, color: '#F5EFE6' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,239,230,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <div className={`${display.className} flex flex-wrap gap-x-6 gap-y-2 text-sm`} style={{ color: 'rgba(245,239,230,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,230,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            precios, horarios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
