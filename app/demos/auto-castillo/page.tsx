import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «boleta de mostrador». Auto Castillo es una casa de
 * repuestos de las antiguas: la página se compone como una boleta o ficha
 * de sucursal — bordes troquelados, rótulos en mono, números de ítem.
 * Amarillo #FBC440 del logo oficial sobre acero oscuro; las fotos son la
 * fachada y el showroom reales de 1 Norte 2265.
 */
const C = {
  paper: '#ECEAE4',
  card: '#F5F3EC',
  ink: '#191A1E',
  deep: '#101114',
  steel: '#2A2D33',
  yellow: '#FBC440',
  red: '#D84235',
  muted: '#5E625E',
  line: 'rgba(25,26,30,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'auto-castillo',
  title: 'Auto Castillo — Repuestos y servicio técnico en Talca',
  description:
    'Antonio Castillo S.A. en Calle 1 Norte 2265, Talca: repuestos, servicio técnico express y venta de autos. 70 años en Chile, 4,1★ en Google. Consulta por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El mostrador', href: '#mostrador' },
  { label: 'La sucursal', href: '#sucursal' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const MOSTRADOR = [
  {
    n: 'Ítem 01',
    name: 'Repuestos',
    src: `${IMG}/repuesto.webp`,
    alt: 'Repuesto sobre el mostrador de la tienda Auto Castillo en Talca',
    desc: 'La estantería de siempre: repuestos originales y alternativos para marcas que pocos atienden — las reseñas celebran encontrar hasta lo del Lifan 320.',
    tag: 'venta en local',
  },
  {
    n: 'Ítem 02',
    name: 'Servicio técnico express',
    src: `${IMG}/servicio.webp`,
    alt: 'Entrada del servicio técnico de Auto Castillo, Talca',
    desc: 'El taller detrás del mostrador: se entra con el auto por la entrada lateral y se atiende rápido — por eso le dicen «express».',
    tag: 'taller propio',
  },
  {
    n: 'Ítem 03',
    name: 'Venta de autos',
    src: `${IMG}/auto.webp`,
    alt: 'Auto nuevo en la puerta del showroom de Auto Castillo, Talca',
    desc: 'Además de repuestos venden autos: el showroom de 1 Norte muestra los modelos del momento con el precio a la vista.',
    tag: 'showroom',
  },
]

const TEMAS = ['variedad de repuestos', 'repuestos originales', 'vendedores amables', 'variedad de productos']

const HISTORIA = [
  { y: '1952', t: 'Antonio Castillo funda la casa de repuestos.' },
  { y: 'Hoy', t: `${BIZ.branches} puntos de venta en todo Chile — Talca es uno de ellos.` },
]

export default function AutoCastilloPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <img src={`${IMG}/logo-blanco.svg`} alt={BIZ.name} className="h-6 md:h-7 w-auto" />
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Consultar repuesto"
        theme={{
          over: 'dark',
          bar: 'rgba(16,17,20,0.95)',
          ink: '#ECEAE4',
          line: 'rgba(236,234,228,0.14)',
          btnBg: C.yellow,
          btnInk: '#191A1E',
        }}
      />

      {/* ── Hero: la casa de repuestos ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        {/* líneas de desgaste tipo estantería */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #ECEAE4 0 1px, transparent 1px 72px)' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-36 pb-12 md:pb-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`} style={{ color: C.yellow }}>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
                {BIZ.legal} · sucursal Talca · desde {BIZ.since}
              </p>
              <h1 className={`${display.className} font-extrabold uppercase leading-[0.94] text-[clamp(2.9rem,11vw,6.5rem)] mb-6`} style={{ color: '#ECEAE4' }}>
                El repuesto
                <br />
                que buscas,
                <br />
                <span style={{ color: C.yellow }}>hace 70 años.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(236,234,228,0.85)' }}>
                Repuestos, servicio técnico express y venta de autos en
                Calle 1 Norte 2265, Talca — la sucursal maulina de una casa
                con {BIZ.branches} puntos de venta en Chile.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base px-7 py-3 transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  Consultar repuesto →
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-semibold px-5 py-3 border tap-44"
                  style={{ borderColor: 'rgba(236,234,228,0.35)', color: '#ECEAE4' }}
                >
                  <Stars value={4} color={C.yellow} className="w-[12px] h-[12px]" />
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="relative max-w-sm lg:max-w-none mx-auto">
              <span
                className={`${mono.className} absolute -top-3 left-4 z-10 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5`}
                style={{ backgroundColor: C.red, color: '#FFF6F0' }}
              >
                foto real · sucursal Talca
              </span>
              <img
                src={`${IMG}/fachada.webp`}
                alt="Fachada de Antonio Castillo S.A. en Calle 1 Norte, Talca, con letreros de repuestos y servicio técnico"
                loading="eager"
                fetchPriority="high"
                className="w-full object-cover aspect-[3/4]"
                style={{ boxShadow: '12px 12px 0 0 ' + C.yellow }}
              />
              <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(236,234,228,0.6)' }}>
                1 Norte 2265 — repuestos · servicio técnico
              </figcaption>
            </figure>
          </Reveal>
        </div>
        {/* cinta de datos */}
        <div className="relative border-t" style={{ borderColor: 'rgba(236,234,228,0.18)', backgroundColor: 'rgba(42,45,51,0.6)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(236,234,228,0.88)' }}>
            <span>fundada {BIZ.since}</span>
            <span>{BIZ.branches} puntos de venta</span>
            <span>repuestos · taller · autos</span>
            <span className="hidden md:inline" style={{ color: C.yellow }}>{BIZ.site}</span>
          </div>
        </div>
      </section>

      {/* ── El mostrador ── */}
      <section id="mostrador" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.red }}>
            El mostrador — tres ventanas
          </p>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
              Repuestos, taller
              <br />
              <span style={{ color: C.red }}>y autos</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Lo que se hace en 1 Norte 2265: el mostrador de repuestos,
              el servicio técnico express y el showroom de autos.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {MOSTRADOR.map((m, i) => (
            <Reveal key={m.n} delay={i * 110}>
              <article className="h-full flex flex-col border-2" style={{ backgroundColor: C.card, borderColor: C.ink }}>
                <div className="relative overflow-hidden aspect-[4/3]" style={{ borderBottom: `2px solid ${C.ink}` }}>
                  <img src={m.src} alt={m.alt} loading="lazy" className="w-full h-full object-cover" />
                  <span
                    className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1`}
                    style={{ backgroundColor: C.yellow, color: C.ink }}
                  >
                    {m.tag}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex-1">
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.red }}>
                    {m.n}
                  </p>
                  <h3 className={`${display.className} font-bold uppercase text-2xl mb-2.5`} style={{ color: C.ink }}>
                    {m.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {m.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <figure className="mt-6 md:mt-8">
            <img
              src={`${IMG}/showroom.webp`}
              alt="Showroom interior de Auto Castillo Talca con vehículos comerciales"
              loading="lazy"
              className="w-full object-cover aspect-[16/7] border-2"
              style={{ borderColor: C.ink }}
            />
            <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
              showroom de la sucursal — foto real de la ficha de Google
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── La sucursal: ficha tipo boleta ── */}
      <section id="sucursal" className="scroll-mt-20" style={{ backgroundColor: C.steel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.yellow }}>
              Ficha de sucursal
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#ECEAE4' }}>
              70 años
              <br />
              <span style={{ color: C.yellow }}>vendiendo repuestos</span>
            </h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(236,234,228,0.85)' }}>
              <p>
                Antonio Castillo S.A. partió en {BIZ.since} y hoy tiene
                {' '}{BIZ.branches} puntos de venta en Chile. La sucursal de
                Talca junta repuestos, taller express y showroom en una
                misma dirección.
              </p>
              <ul className={`${mono.className} text-[12px] md:text-[13px] uppercase tracking-[0.08em] space-y-2 pt-2`} style={{ color: '#ECEAE4' }}>
                {HISTORIA.map((h) => (
                  <li key={h.y} className="flex gap-4 items-baseline">
                    <span className="font-bold shrink-0 w-14" style={{ color: C.yellow }}>{h.y}</span>
                    <span className="normal-case tracking-normal text-sm" style={{ color: 'rgba(236,234,228,0.85)' }}>{h.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            {/* la boleta */}
            <div className="relative p-6 md:p-8" style={{ backgroundColor: C.card, color: C.ink, boxShadow: '10px 10px 0 0 rgba(0,0,0,0.35)' }}>
              <div className={`${mono.className} flex items-center justify-between text-[11px] uppercase tracking-[0.2em] pb-4 mb-4 border-b-2 border-dashed`} style={{ borderColor: C.line }}>
                <span>Auto Castillo</span>
                <span>boleta N° {BIZ.since}</span>
              </div>
              <dl className="space-y-3 text-sm md:text-[15px]">
                {[
                  ['Sucursal', `${BIZ.address}, ${BIZ.city}`],
                  ['Horario', 'L–V 8:30–18:30 · Sáb 8:30–13:30'],
                  ['Domingo', 'cerrado'],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Correo', BIZ.email],
                  ['Web', BIZ.site],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4">
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] shrink-0`} style={{ color: C.red }}>{k}</dt>
                    <dd className="text-right font-medium" style={{ color: C.ink }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className={`${mono.className} text-center text-[10px] uppercase tracking-[0.2em] mt-6 pt-4 border-t-2 border-dashed`} style={{ borderColor: C.line, color: C.muted }}>
                *** gracias por su compra ***
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.red }}>
            Lo que dice la gente
          </p>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
              {BIZ.rating}★ · {BIZ.reviews}
              <br />
              <span style={{ color: C.red }}>reseñas en Google</span>
            </h2>
            <div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                Lo que más se repite en las reseñas de la sucursal, según la
                propia ficha de Google:
              </p>
              <ul className="flex flex-wrap gap-2">
                {TEMAS.map((t) => (
                  <li key={t} className={`${mono.className} text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 border`} style={{ borderColor: C.ink, color: C.ink }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-5 md:gap-6 items-stretch">
          <Reveal>
            <figure className="h-full p-6 md:p-8 border-2" style={{ backgroundColor: C.card, borderColor: C.ink }}>
              <Stars value={5} color={C.red} className="w-[15px] h-[15px] mb-4" />
              <blockquote className="text-lg md:text-xl leading-relaxed mb-5 font-medium" style={{ color: C.ink }}>
                “Excelente atención en este lugar. Siempre encuentro los
                repuestos que busco, sobre todo para mi Lifan 320.”
              </blockquote>
              <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Felipe Jiménez · Reseña de Google
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <figure className="h-full p-6 md:p-8 border-2 flex flex-col justify-between" style={{ backgroundColor: C.deep, borderColor: C.ink }}>
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-4`} style={{ color: C.yellow }}>
                  ¿Buscas algo raro?
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(236,234,228,0.9)' }}>
                  Mándales la patente o la pieza por WhatsApp y ellos mismos
                  te dicen si la tienen en Talca o la traen de otra sucursal.
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold inline-block text-sm px-6 py-3 text-center transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Preguntar por un repuesto →
              </a>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.yellow }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#ECEAE4' }}>
              1 Norte 2265,
              <br />
              <span style={{ color: C.yellow }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(236,234,228,0.8)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#ECEAE4', textDecorationColor: 'rgba(236,234,228,0.35)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(236,234,228,0.7)' }}>
              L–V de 8:30 a 18:30, sábado hasta las 13:30. El servicio
              técnico entra por la lateral — como se ve en la foto del
              mostrador.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-6 py-3 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 border tap-44"
                style={{ borderColor: 'rgba(236,234,228,0.35)', color: '#ECEAE4' }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full border-2" style={{ borderColor: C.yellow }}>
              <LazyMap
                title={`Mapa: ${BIZ.legal}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#ECEAE4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-5 border-t" style={{ borderColor: 'rgba(236,234,228,0.14)' }}>
          <div>
            <img src={`${IMG}/logo-blanco.svg`} alt={BIZ.name} className="h-7 w-auto mb-2" />
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(236,234,228,0.75)' }}>
              {BIZ.legal} · {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(236,234,228,0.75)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(236,234,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 text-xs leading-relaxed" style={{ color: 'rgba(236,234,228,0.65)' }}>
            Datos de la ficha pública de Google y autocastillo.cl (dirección, horario, historia); fotos de la sucursal: ficha de Google. Textos de muestra.
          </p>
        </div>
        <div className="px-5 pb-5 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
