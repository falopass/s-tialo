import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({ src: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' })
const monoBold = localFont({ src: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' })

/**
 * Dirección de arte: «patio de materiales» — el azul marino y el
 * amarillo de seguridad del letrero real de Arimaq, con el chevrón de
 * su logo convertido en cenefa de precinto. La mercadería se ficha como
 * inventario de góndola: tarjetas claras, etiqueta mono, foto real.
 * Barlow Condensed hace de letra estampada de galpón; Work Sans lee
 * las fichas; IBM Plex Mono numera el stock.
 */
const C = {
  concrete: '#EAE8E2',
  paper: '#F4F2EC',
  navy: '#122B5C',
  navyDeep: '#0C1E42',
  yellow: '#FFC40E',
  yellowDeep: '#C99A00',
  ink: '#171A20',
  steel: '#5B6472',
  line: 'rgba(18,43,92,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-arimaq',
  title: 'Arimaq Ferretería — Materiales y herramientas en San Clemente',
  description:
    'Ferretería, materiales de construcción y maquinarias en Sector La Estrella, San Clemente. Empresa familiar: cotizaciones y despacho por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Mercadería', href: '#mercaderia' },
  { label: 'La empresa', href: '#empresa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#local' },
]

const HORARIO = [
  { dia: 'Lunes a viernes', hora: '8:00 – 19:00' },
  { dia: 'Sábado', hora: '8:00 – 17:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
]

/** Góndola: la mercadería real de sus fotos e Instagram. */
const GONDOLA = [
  { src: 'tejas', alt: 'Tejas y láminas de zinc apiladas en el patio de Arimaq', item: 'Tejas y láminas', zona: 'Materiales' },
  { src: 'malla', alt: 'Malla electrosoldada y ladrillos en el patio de materiales', item: 'Mallas y ladrillos', zona: 'Construcción' },
  { src: 'tornillos', alt: 'Pernos y tornillería a granel en sacos', item: 'Tornillería y fijaciones', zona: 'Ferretería' },
  { src: 'interior', alt: 'Interior de la tienda: repisas con pinturas y herramientas', item: 'Pinturas y herramientas', zona: 'Ferretería' },
  { src: 'racks', alt: 'Racks del galpón con perfiles y materiales ordenados', item: 'Perfiles y planchas', zona: 'Construcción' },
  { src: 'aridos', alt: 'Patio de áridos con sacos y contenedores', item: 'Áridos del patio', zona: 'Áridos' },
  { src: 'grua', alt: 'Grúa horquilla amarilla cargando pallets de paneles', item: 'Arriendo de maquinaria', zona: 'Maquinarias' },
  { src: 'patio', alt: 'Zona de arriendo y patio de materiales de Arimaq', item: 'Zona de arriendo', zona: 'Maquinarias' },
]

const SERVICIOS = [
  'Ferretería completa: herramientas, tornillería, pinturas y gasfitería',
  'Materiales de construcción: tejas, mallas, ladrillos y alambre',
  'Áridos y maquinarias para la obra',
  'Arriendo de equipos — zona de arriendo propia',
  'Despacho a domicilio en la comuna',
]

const REVIEWS = [
  {
    nombre: 'Fernando Monsalve',
    texto:
      'Excelente ferretería, la mejor de la comuna de San Clemente ya que se encuentra de todo en el mismo lugar. Además, la atención es personalizada y de primera.',
    cuando: 'Reseña de Google',
  },
  {
    nombre: 'Natalia Acevedo',
    texto:
      'Me queda más lejos, pero me gusta venir por la gran cantidad de productos que tienen a muy buen precio, dentro del rango de construcción y herramientas para trabajos domésticos. Además cuentan con muy buen horario de atención.',
    cuando: 'Reseña de Google',
  },
]

// ── Piezas del patio ─────────────────────────────────────────

/** Chevrones de precinto: la flecha repetida del letrero de Arimaq. */
function Precinto({ className = '', height = 14 }: { className?: string; height?: number }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height,
        background: `repeating-linear-gradient(135deg, ${C.yellow} 0 14px, ${C.navyDeep} 14px 28px)`,
      }}
    />
  )
}

/** Etiqueta estampada: dato mono con borde de galpón. */
function Etiqueta({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${monoBold.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: dark ? C.yellow : C.navy }}
    >
      <span
        className="inline-block w-8"
        aria-hidden="true"
        style={{ borderTop: `3px solid ${C.yellow}`, borderBottom: `3px solid ${dark ? C.yellow : C.navy}`, height: 8 }}
      />
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo). */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function FerreteriaArimaqPage() {
  return (
    <div className={`${body.className} arq min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.concrete, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .arq a:focus-visible { outline: 2px solid ${C.navy}; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(244,242,236,0.96)',
          ink: C.navyDeep,
          line: C.line,
          btnBg: C.navy,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la fachada del galpón ── */}
      <section id="inicio" className="relative flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.navyDeep, minHeight: '92svh' }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de Arimaq Ferretería con el letrero grande en Sector La Estrella, San Clemente"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(12,30,66,0.5) 0%, rgba(12,30,66,0.15) 40%, rgba(12,30,66,0.9) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-10">
          <Reveal>
            <Etiqueta dark>Ferretería &amp; materiales · San Clemente</Etiqueta>
            <h1 className={`${display.className} font-extrabold uppercase leading-[0.88] tracking-tight text-[clamp(4rem,17vw,9.5rem)]`} style={{ color: '#FFFFFF', textShadow: '0 4px 30px rgba(12,30,66,0.6)' }}>
              Arimaq
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mt-5" style={{ color: 'rgba(255,255,255,0.92)' }}>
              La ferretería del sector La Estrella: herramientas, materiales
              de construcción, áridos y maquinarias — todo en el mismo patio.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.12em] px-7 py-3.5 rounded-sm transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#mercaderia"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.12em] px-7 py-3.5 rounded-sm border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#FFFFFF' }}
              >
                Ver la mercadería
              </a>
              <span className={`${mono.className} inline-flex items-center gap-2 text-xs px-4 py-3 rounded-sm`} style={{ backgroundColor: 'rgba(12,30,66,0.72)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)' }}>
                <Stars value={4.4} color={C.yellow} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
        </div>
        <Precinto height={16} />
      </section>

      {/* ── La góndola: inventario real ── */}
      <section id="mercaderia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Etiqueta>La mercadería</Etiqueta>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight`} style={{ color: C.navyDeep }}>
              De la góndola
              <br />
              <span style={{ color: C.yellowDeep }}>al patio</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.steel }}>
              Lo que tienen en stock según sus propias fotos: herramientas
              chicas hasta láminas y áridos a granel.
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {GONDOLA.map((g, i) => (
            <li key={g.src}>
              <Reveal delay={i * 70} className="h-full">
                <figure className="group h-full flex flex-col rounded-sm overflow-hidden" style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, boxShadow: '0 2px 10px rgba(18,43,92,0.08)' }}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image src={`${IMG}/${g.src}.webp`} alt={g.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                  </div>
                  <div className="p-3.5 flex flex-col gap-1.5 flex-1">
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.steel }}>
                      {g.zona}
                    </span>
                    <h3 className={`${display.className} font-bold uppercase text-base md:text-lg leading-tight tracking-wide`} style={{ color: C.navyDeep }}>
                      {g.item}
                    </h3>
                  </div>
                  <Precinto height={4} className="opacity-80" />
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── La empresa: de los cimientos al término ── */}
      <section id="empresa" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <Etiqueta dark>La empresa</Etiqueta>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight mb-6`} style={{ color: '#FFFFFF' }}>
                De los cimientos
                <br />
                <span style={{ color: C.yellow }}>al término de la obra</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Empresa familiar de maquinarias y ferretería: atienden el
                proyecto completo, desde el primer saco de cemento hasta la
                última teja. Más de una década sirviendo a la comuna.
              </p>
              <div className="relative overflow-hidden rounded-sm aspect-[16/9]" style={{ boxShadow: '0 18px 46px rgba(0,0,0,0.4)' }}>
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero ARIMAQ Áridos y Maquinarias: azul marino con flechas amarillas"
                  fill
                  sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-sm p-6 md:p-8" style={{ backgroundColor: C.navyDeep, border: '1px solid rgba(255,255,255,0.14)' }}>
                <p className={`${monoBold.className} text-[10px] uppercase tracking-[0.24em] mb-5`} style={{ color: C.yellow }}>
                  Partida de servicios
                </p>
                <ul>
                  {SERVICIOS.map((s, i) => (
                    <li key={s} className="flex items-start gap-4 py-3.5" style={{ borderTop: i ? '1px dashed rgba(255,255,255,0.18)' : undefined }}>
                      <span className={`${monoBold.className} text-[11px] pt-0.5 shrink-0`} style={{ color: C.yellow }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15px] leading-snug" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK_PEDIDO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${monoBold.className} inline-block mt-6 text-xs uppercase tracking-[0.12em] px-7 py-3.5 rounded-sm transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  Pedir cotización
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: el 4,4 del patio ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Etiqueta>Lo que dicen</Etiqueta>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6`} style={{ color: C.navyDeep }}>
              La ferretería
              <br />
              <span style={{ color: C.yellowDeep }}>mejor evaluada</span>
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <Stars value={4.4} color={C.yellowDeep} className="w-5 h-5" />
              <span className={`${monoBold.className} text-sm`} style={{ color: C.ink }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.navyDeep, textDecorationColor: C.yellow }}
            >
              Ver la ficha en Google Maps →
            </a>
          </Reveal>
          <div className="grid gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 110}>
                <figure
                  className="rounded-sm p-5 md:p-6"
                  style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, borderLeft: `5px solid ${C.yellow}` }}
                >
                  <Stars value={5} color={C.yellowDeep} className="w-3.5 h-3.5 mb-3" />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${monoBold.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.navy }}>
                    {r.nombre} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El patio: La Estrella ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <Precinto height={10} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal delay={140} className="order-2 lg:order-1">
            <Etiqueta>Cómo llegar</Etiqueta>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6`} style={{ color: C.navyDeep }}>
              El patio
              <br />
              <span style={{ color: C.yellowDeep }}>de La Estrella</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: C.ink }}>
              {BIZ.address}, {BIZ.city}. El galpón con el letrero grande se
              ve de lejos: galpones, patio de materiales y la tienda al
              frente.
            </p>
            <div className="rounded-sm p-5 max-w-md mb-6" style={{ backgroundColor: C.concrete, border: `1px solid ${C.line}` }}>
              <p className={`${monoBold.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.navy }}>
                Horario de atención
              </p>
              <ul>
                {HORARIO.map((h) => (
                  <li key={h.dia} className="flex items-baseline gap-2 py-1.5">
                    <span className="text-[13px] font-bold" style={{ color: C.ink }}>{h.dia}</span>
                    <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                    <span className={`${mono.className} text-[13px] whitespace-nowrap`} style={{ color: C.navyDeep }}>{h.hora}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className={`${mono.className} text-xs mb-8`} style={{ color: C.steel }}>
              {BIZ.phoneDisplay} · {BIZ.igHandle}
            </p>
            <div className="rounded-sm overflow-hidden aspect-[16/10]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]" style={{ boxShadow: '0 18px 46px rgba(18,43,92,0.2)' }}>
              <Image
                src={`${IMG}/patio.webp`}
                alt="Zona de arriendo y patio de materiales de Arimaq en San Clemente"
                fill
                sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.yellow }}>
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className={`${monoBold.className} text-[11px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.navyDeep }}>
              Cotizaciones y despacho
            </p>
            <h2 className={`${display.className} text-4xl sm:text-6xl font-extrabold uppercase leading-[0.95] tracking-tight`} style={{ color: C.navyDeep }}>
              La obra no espera:
              <br />
              cotiza hoy
            </h2>
            <p className="mt-4 text-base md:text-lg max-w-lg mx-auto" style={{ color: 'rgba(23,26,32,0.85)' }}>
              Materiales, herramientas o arriendo de maquinaria: escribe y
              te responden con precio y stock.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.12em] px-8 py-3.5 rounded-sm transition-all hover:brightness-105 active:scale-95 tap-44`}
                style={{ backgroundColor: C.navyDeep, color: '#FFFFFF' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.12em] px-8 py-3.5 rounded-sm border-2 tap-44`}
                style={{ borderColor: C.navyDeep, color: C.navyDeep }}
              >
                {BIZ.igHandle}
              </a>
            </div>
          </Reveal>
        </div>
        <Precinto height={14} />
      </section>

      <footer style={{ backgroundColor: C.navyDeep, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl font-extrabold uppercase tracking-wide`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
