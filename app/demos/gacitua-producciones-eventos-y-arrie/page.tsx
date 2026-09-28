import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, IG_LINK, MAPS_URL, MAPS_EMBED, IMG, PROGRAMA, SERVICIOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Identidad sacada de sus activos reales: el monograma serif en blanco y
 * negro del logo, las mesas de lino blanco y los runners dorados que se
 * repiten en sus fotos. La página funciona como una invitación impresa:
 * doble filete, versales espaciadas y un "programa" del evento.
 */
const C = {
  paper: '#f7f3ea',
  card: '#fdfcf8',
  ink: '#211e17',
  inkSoft: '#55503f',
  line: 'rgba(33,30,23,0.18)',
  gold: '#b08d3e',
  goldInk: '#7c5f1e',
  goldSoft: '#e9ddc0',
  night: '#191611',
  cream: '#f5efe0',
}

export const metadata: Metadata = demoMetadata({
  slug: 'gacitua-producciones-eventos-y-arrie',
  title: 'Gacitúa Producciones y Eventos — Banquetería y arriendo de vajilla en Talca',
  description:
    'Banquetería, producción de eventos y arriendo de vajilla en Pasaje 7 Poniente, sector 5 Norte de Talca. Matrimonios, cócteles y mesas dulces con nota 5,0 en Google. Cotiza por WhatsApp.',
  image: `${IMG}/mesa-patio.webp`,
})

const NAV_LINKS = [
  { label: 'El programa', href: '#programa' },
  { label: 'Arriendos', href: '#arriendos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

/** Filete fino + filete grueso: el marco de las invitaciones impresas. */
function Frame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border p-1.5 ${className}`} style={{ borderColor: C.gold, backgroundColor: C.card }}>
      <div className="border-[3px] h-full" style={{ borderColor: C.ink }}>
        {children}
      </div>
    </div>
  )
}

function Kicker({ n, children, light = false }: { n: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5 flex items-center gap-3`}
      style={{ color: light ? C.goldSoft : C.goldInk }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: light ? C.goldSoft : C.gold }} aria-hidden="true" />
      {n} · {children}
    </p>
  )
}

export default function GacituaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span className="uppercase tracking-[0.18em] font-medium">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(247,243,234,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: C.cream,
        }}
      />

      {/* ── La invitación: masthead de versales + trío de fotos ── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28 pb-10 md:pb-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.34em] mb-6`} style={{ color: C.inkSoft }}>
              banquetería · producción · arriendo de vajilla
            </p>
            <div className="flex items-center gap-4 md:gap-6 mb-6" aria-hidden="true">
              <span className="flex-1 h-px" style={{ backgroundColor: C.line }} />
              <img src={`${IMG}/logo.webp`} alt={`Monograma de ${BIZ.name}`} className="h-16 md:h-20 w-auto object-contain" />
              <span className="flex-1 h-px" style={{ backgroundColor: C.line }} />
            </div>
            <h1
              className={`${display.className} uppercase leading-[1.02] tracking-[0.02em] text-[clamp(2.1rem,7.5vw,4.2rem)] mb-5`}
              style={{ color: C.ink }}
            >
              La mesa de tu evento,
              <br />
              <span style={{ color: C.goldInk }}>servida en Talca</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-7" style={{ color: C.inkSoft }}>
              Banquetería con legado familiar: producen el evento completo — montaje,
              cocina, vajilla y barra — en {BIZ.city} y la región del Maule.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} font-medium text-sm md:text-base px-8 py-3 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.ink, color: C.cream }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm px-4 py-2.5 border tap-44"
                style={{ borderColor: C.line, backgroundColor: C.card, color: C.ink }}
              >
                <Stars value={5} color={C.gold} className="w-4 h-4" />
                <span className="font-medium">{BIZ.rating} · {BIZ.reviews} opiniones</span>
              </a>
            </div>
          </Reveal>
        </div>
        {/* El trío de fotos como tarjetas de invitación desplegadas */}
        <div className="max-w-5xl mx-auto px-5 md:px-8 mt-4 md:mt-8">
          <div className="grid grid-cols-[1fr_1.35fr_1fr] gap-3 md:gap-5 items-center">
            <Reveal delay={140} className="rotate-[-2.5deg]">
              <Frame>
                <img
                  src={`${IMG}/pergola.webp`}
                  alt="Pérgola decorada con telas blancas para una ceremonia al aire libre"
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                />
              </Frame>
            </Reveal>
            <Reveal delay={0}>
              <Frame>
                <img
                  src={`${IMG}/mesa-patio.webp`}
                  alt={`Mesa de evento montada por ${BIZ.name} en un patio, con loza blanca y copas`}
                  fetchPriority="high"
                  className="w-full aspect-[4/3] object-cover"
                />
              </Frame>
            </Reveal>
            <Reveal delay={240} className="rotate-[2.5deg]">
              <Frame>
                <img
                  src={`${IMG}/mesa-larga.webp`}
                  alt="Mesa de buffet decorada con plumas de pampa y bandejas de postres"
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                />
              </Frame>
            </Reveal>
          </div>
          <p className={`${mono.className} text-center text-[10px] uppercase tracking-[0.28em] mt-6`} style={{ color: C.inkSoft }}>
            montajes reales · {BIZ.city}, Maule
          </p>
        </div>
      </section>

      {/* ── El programa del evento: línea de tiempo numerada ── */}
      <section id="programa" className="scroll-mt-20 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker n="i">el programa</Kicker>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.ink }}>
              Así corre la mesa
              <br />
              en un evento Gacitúa
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12 md:mb-16" style={{ color: C.inkSoft }}>
              Del montaje a la barra: los cinco momentos que producen en cada
              celebración, con fotos de sus propios eventos.
            </p>
          </Reveal>
          <ol className="relative">
            <span className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px" style={{ backgroundColor: C.line }} aria-hidden="true" />
            {PROGRAMA.map((p, i) => (
              <li key={p.paso} className="relative pl-12 md:pl-16 pb-12 md:pb-16 last:pb-0">
                <span
                  className={`${mono.className} absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center text-[11px] md:text-xs`}
                  style={{ borderColor: C.gold, backgroundColor: C.paper, color: C.goldInk }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Reveal delay={60}>
                  <div className={`grid ${i % 2 === 0 ? 'md:grid-cols-[1fr_0.8fr]' : 'md:grid-cols-[0.8fr_1fr]'} gap-5 md:gap-10 items-center`}>
                    <div className={i % 2 === 0 ? '' : 'md:order-2'}>
                      <h3 className={`${display.className} uppercase text-xl md:text-2xl tracking-[0.04em] mb-2`} style={{ color: C.ink }}>
                        {p.paso}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.inkSoft }}>
                        {p.texto}
                      </p>
                    </div>
                    <figure className={i % 2 === 0 ? '' : 'md:order-1'}>
                      <Frame>
                        <img
                          src={`${IMG}/${p.foto}.webp`}
                          alt={p.alt}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover"
                        />
                      </Frame>
                    </figure>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Arriendos: la bodega del evento ── */}
      <section id="arriendos" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Kicker n="ii" light>arriendo de vajilla</Kicker>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.cream }}>
                Todo lo que la mesa
                <br />
                necesita, <span style={{ color: C.gold }}>en una carreta</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(245,239,224,0.75)' }}>
                Además de la banquetería, arriendan el equipo del evento: si solo
                necesitas loza y cristalería, también puedes encargarlas por WhatsApp.
              </p>
              <ul className="border-t" style={{ borderColor: 'rgba(245,239,224,0.2)' }}>
                {SERVICIOS.map((s) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-3 py-3.5 border-b text-sm md:text-base"
                    style={{ borderColor: 'rgba(245,239,224,0.2)', color: C.cream }}
                  >
                    <span className="inline-block w-2 h-2 rotate-45 shrink-0 translate-y-[-1px]" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-medium text-sm md:text-base px-8 py-3 mt-8 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.gold, color: C.night }}
              >
                Cotizar por WhatsApp
              </a>
            </Reveal>
            <Reveal delay={80}>
              <Frame className="!bg-transparent">
                <img
                  src={`${IMG}/buffet-empanadas.webp`}
                  alt="Buffet de empanadas y bandejas saladas servidas en un evento de Gacitúa"
                  loading="lazy"
                  className="w-full aspect-[16/11] object-cover"
                />
              </Frame>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones: nota perfecta ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16 border-b pb-8" style={{ borderColor: C.line }}>
            <div>
              <Kicker n="iii">opiniones</Kicker>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
                Nota perfecta
                <br />
                en Google
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <p className={`${display.className} text-6xl md:text-7xl leading-none`} style={{ color: C.ink }}>{BIZ.rating}</p>
              <div>
                <Stars value={5} color={C.gold} className="w-5 h-5 mb-2" />
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.inkSoft }}>
                  {BIZ.reviews} opiniones reales
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {RESENAS.map((r, i) => (
            <Reveal key={r.autor} delay={i * 80}>
              <figure className="relative pl-8">
                <span
                  className={`${display.className} absolute left-0 top-0 text-6xl leading-[0.7]`}
                  style={{ color: C.goldInk }}
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                  {r.texto}
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-medium" style={{ color: C.goldInk }}>
                    {r.autor}
                  </span>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.inkSoft }}>
                    Google · {r.detalle}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto: dirección + mapa ── */}
      <section id="contacto" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Kicker n="iv">cómo llegar</Kicker>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Sector 5 Norte,
              <br />
              <span style={{ color: C.goldInk }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.inkSoft }}>
              {BIZ.address}, {BIZ.addressExtra}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-baseline gap-3 text-sm md:text-base" style={{ color: C.inkSoft }}>
                <span className="inline-block w-2 h-2 rotate-45 shrink-0 translate-y-[-1px]" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                <span><strong className="font-medium" style={{ color: C.ink }}>WhatsApp:</strong> {BIZ.phoneDisplay}</span>
              </li>
              <li className="flex items-baseline gap-3 text-sm md:text-base" style={{ color: C.inkSoft }}>
                <span className="inline-block w-2 h-2 rotate-45 shrink-0 translate-y-[-1px]" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                <span><strong className="font-medium" style={{ color: C.ink }}>Instagram:</strong> @{BIZ.instagram}</span>
              </li>
              <li className="flex items-baseline gap-3 text-sm md:text-base" style={{ color: C.inkSoft }}>
                <span className="inline-block w-2 h-2 rotate-45 shrink-0 translate-y-[-1px]" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                <span><strong className="font-medium" style={{ color: C.ink }}>Agenda:</strong> se coordina por WhatsApp según la fecha de tu evento</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} font-medium text-sm md:text-base px-8 py-3 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.ink, color: C.cream }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium px-6 py-3 border transition-colors tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Ver su Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Frame className="h-full min-h-[320px]">
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Frame>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 object-contain invert" aria-hidden="true" />
            <p className={`${display.className} uppercase tracking-[0.16em] text-sm`} style={{ color: C.cream }}>
              {BIZ.name}
            </p>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(245,239,224,0.55)' }}>
            {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Cotizar con ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
