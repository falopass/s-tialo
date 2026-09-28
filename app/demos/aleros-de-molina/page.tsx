import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG, CARTA, AMENIDADES, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la carta de la casa» — papel crema, tinta verde
 * pino y manteles teja. El menú real va con puntos suspensivos y precio
 * en mono, como la carta impresa de un restaurant de pueblo; el motivo
 * es el filete doble de la carta y el letrero colgante de la entrada.
 */
const C = {
  papel: '#F7F1E3',
  carta: '#FDFAF2',
  pino: '#17382C',
  hoja: '#2E7D5F',
  teja: '#B8491F',
  tejaBajo: '#8F3512',
  tinta: '#26221B',
  suave: '#5F584A',
  linea: 'rgba(23,56,44,0.22)',
  lineaClara: 'rgba(247,241,227,0.35)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'aleros-de-molina',
  title: 'Aleros de Molina — Hostal y restaurant en Molina, Maule',
  description:
    'Hostal y restaurant en Luis Cruz Martínez 1947, Molina. Cocina chilena, habitaciones y reservas directas por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El hostal', href: '#hostal' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const FOTOS_CASA = [
  { src: `${IMG}/ostiones.webp`, alt: 'Ostiones a la parmesana servidos en el restaurant Aleros de Molina', nombre: 'Para partir' },
  { src: `${IMG}/cazuela.webp`, alt: 'Cazuela de vacuno humeante del restaurant Aleros de Molina', nombre: 'De la cocina' },
  { src: `${IMG}/parrillada.webp`, alt: 'Parrillada para compartir del restaurant Aleros de Molina', nombre: 'Parrillada' },
]

/** Filete doble de carta impresa. */
function Filete({ light = false }: { light?: boolean }) {
  const col = light ? C.lineaClara : C.linea
  return (
    <div aria-hidden="true" className="w-full">
      <div className="border-t-2" style={{ borderColor: col }} />
      <div className="border-t mt-[3px]" style={{ borderColor: col }} />
    </div>
  )
}

/** Eyebrow: etiqueta de carta. */
function Renglón({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#8FC7AE' : C.tejaBajo }}
    >
      <span className="inline-block w-8 border-t-2 border-dotted" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Línea de carta: plato + puntos + precio. */
function ItemCarta({ plato, precio }: { plato: string; precio: string }) {
  return (
    <li className="flex items-baseline gap-2 text-[15px] md:text-base">
      <span className="leading-snug" style={{ color: C.tinta }}>{plato}</span>
      <span className="flex-1 border-b-2 border-dotted -translate-y-1" style={{ borderColor: C.linea }} aria-hidden="true" />
      <span className={`${mono.className} font-medium shrink-0`} style={{ color: C.pino }}>{precio}</span>
    </li>
  )
}

/** Aviso de Sitiazo en el flujo (nunca fijo). */
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

export default function AlerosDeMolinaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`
        html { scroll-behavior: auto }
        .adm a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <div className="adm">
        <BlitzNav
          name={
            <span className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center rounded-full w-8 h-8 overflow-hidden" style={{ backgroundColor: '#0D241C' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/logo-icono.webp`} alt="" className="h-8 w-8 object-cover" aria-hidden="true" />
              </span>
              {BIZ.short}
            </span>
          }
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={`${display.className} uppercase`}
          theme={{
            over: 'dark',
            bar: 'rgba(247,241,227,0.95)',
            ink: C.pino,
            line: C.linea,
            btnBg: C.teja,
            btnInk: '#FDFAF2',
          }}
        />

        {/* ── Hero: la fachada y el letrero ── */}
        <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.pino }}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="Fachada del Hostal y Restaurant Aleros de Molina, en Luis Cruz Martínez 1947"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(23,56,44,0.55) 0%, rgba(23,56,44,0.15) 40%, rgba(23,56,44,0.88) 100%)',
            }}
          />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] px-4 py-2 rotate-[-1.5deg]`}
                  style={{ backgroundColor: C.teja, color: '#FDFAF2' }}
                >
                  Hostal · Restaurant · Molina
                </span>
                <span className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em]`} style={{ color: '#F7F1E3' }}>
                  desde {BIZ.founded}
                </span>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h1
                className={`${display.className} font-black leading-[0.95] text-[clamp(2.9rem,10.5vw,6.4rem)] mb-5`}
                style={{ color: '#F7F1E3' }}
              >
                Los Aleros
                <br />
                <span style={{ color: '#8FC7AE' }}>de Molina</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: 'rgba(247,241,227,0.9)' }}>
                Comida chilena de la casa y habitaciones para descansar,
                a la entrada del pueblo y a pasos de la plaza. Reserva
                directa, sin intermediarios.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold tracking-[0.06em] text-sm px-7 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.teja, color: '#FDFAF2' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#carta"
                  className={`${display.className} uppercase font-semibold tracking-[0.06em] text-sm px-7 py-3 border-2 tap-44`}
                  style={{ borderColor: 'rgba(247,241,227,0.6)', color: '#F7F1E3' }}
                >
                  Ver la carta
                </a>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 tap-44"
              >
                <span className={`${display.className} font-black text-3xl leading-none`} style={{ color: '#F7F1E3' }}>
                  {BIZ.ratingLabel}
                </span>
                <Stars value={BIZ.rating} color="#E9B44C" className="w-4 h-4" />
                <span className="text-xs font-semibold underline underline-offset-4" style={{ color: '#F7F1E3' }}>
                  {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </Reveal>
          </div>
          {/* cinta de la casa */}
          <div className="relative" style={{ backgroundColor: C.pino }}>
            <ul
              className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] text-center`}
              style={{ color: '#8FC7AE' }}
            >
              {['Desayuno incluido', 'Estacionamiento gratis', 'Salón para 80 personas', 'A pasos de la plaza'].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── La carta: menú real con puntos y precios ── */}
        <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Renglón>Menú del día y la parrilla</Renglón>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-black text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.pino }}>
                La carta
                <br />
                <span style={{ color: C.teja }}>de la casa</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.suave }}>
                Precios reales de la carta publicada por la casa. La
                colación cambia todos los días: pregunta el plato del día
                por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-start">
            <Reveal>
              <div className="px-5 md:px-9 py-7 md:py-9" style={{ backgroundColor: C.carta, boxShadow: '0 24px 50px -24px rgba(23,56,44,0.4)' }}>
                <Filete />
                {CARTA.map((g) => (
                  <div key={g.grupo} className="py-6">
                    <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.tejaBajo }}>
                      {g.grupo}
                    </p>
                    <ul className="space-y-3.5">
                      {g.items.map((it) => (
                        <ItemCarta key={it.plato} plato={it.plato} precio={it.precio} />
                      ))}
                    </ul>
                  </div>
                ))}
                <Filete />
                <p className={`${mono.className} text-[11px] mt-5`} style={{ color: C.suave }}>
                  Carta completa en el local · consulte la clave del wifi a su garzón
                </p>
              </div>
            </Reveal>
            <div className="grid gap-5">
              {FOTOS_CASA.map((f, i) => (
                <Reveal key={f.src} delay={i * 110}>
                  <figure className="relative">
                    <div className="relative overflow-hidden aspect-[16/10]" style={{ boxShadow: '0 18px 40px -20px rgba(23,56,44,0.45)' }}>
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 1024px) 40vw, calc(100vw - 2.5rem)"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className={`${mono.className} absolute -bottom-3 left-4 text-[10px] md:text-[11px] uppercase tracking-[0.22em] px-3 py-1.5`}
                      style={{ backgroundColor: C.pino, color: '#F7F1E3' }}
                    >
                      {f.nombre}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── El hostal ── */}
        <section id="hostal" className="scroll-mt-20" style={{ backgroundColor: C.pino }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <Reveal>
                <div className="relative">
                  <div className="relative overflow-hidden aspect-[4/3]" style={{ boxShadow: '0 28px 60px -28px rgba(0,0,0,0.55)' }}>
                    <Image
                      src={`${IMG}/hostal.webp`}
                      alt="Interior del hostal Aleros de Molina: comedor con mesas y ventiladores"
                      fill
                      sizes="(min-width: 1024px) 45vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <span
                    className={`${mono.className} absolute -bottom-3 right-4 text-[10px] md:text-[11px] uppercase tracking-[0.22em] px-3 py-1.5`}
                    style={{ backgroundColor: C.teja, color: '#FDFAF2' }}
                  >
                    El hostal
                  </span>
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <Renglón light>Para quedarse a dormir</Renglón>
                  <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F7F1E3' }}>
                    Donde los equipos
                    <br />
                    <span style={{ color: '#8FC7AE' }}>de trabajo descansan</span>
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg" style={{ color: 'rgba(247,241,227,0.85)' }}>
                    Habitaciones amplias para empresas que trabajan en la
                    zona y para quienes pasan por Molina: abajo queda el
                    restaurant, así que la cena y el desayuno están en casa.
                  </p>
                </Reveal>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md mb-9">
                  {AMENIDADES.map((a, i) => (
                    <Reveal key={a} delay={i * 70}>
                      <li className={`${mono.className} text-xs md:text-[13px] tracking-wide flex items-start gap-2.5`} style={{ color: 'rgba(247,241,227,0.9)' }}>
                        <span className="mt-[5px] inline-block w-2 h-2 rotate-45 shrink-0" style={{ backgroundColor: C.teja }} aria-hidden="true" />
                        {a}
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={200}>
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-block uppercase font-semibold tracking-[0.06em] text-sm px-7 py-3 tap-44 transition-transform active:scale-95`}
                    style={{ backgroundColor: '#F7F1E3', color: C.pino }}
                  >
                    Consultar habitaciones
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── El salón / eventos ── */}
        <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
            <Reveal>
              <Renglón>Para celebrar</Renglón>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.pino }}>
                Un salón
                <br />
                <span style={{ color: C.teja }}>para 80 personas</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 max-w-md" style={{ color: C.suave }}>
                Cumpleaños, bautizos y almuerzos de empresa se celebran en
                el mismo salón del restaurant, con la cocina de la casa.
                Coordina fecha y menú directo por WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block uppercase font-semibold tracking-[0.06em] text-sm px-7 py-3 border-2 tap-44 transition-transform active:scale-95`}
                style={{ borderColor: C.pino, color: C.pino }}
              >
                Cotizar un evento
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative overflow-hidden aspect-[16/9]" style={{ boxShadow: '0 24px 50px -24px rgba(23,56,44,0.45)' }}>
                <Image
                  src={`${IMG}/evento.webp`}
                  alt="Mesa de banquete preparada en el salón del restaurant Aleros de Molina"
                  fill
                  sizes="(min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Reseñas reales ── */}
        <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: '#EFE6D2' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 md:gap-16 items-start">
              <Reveal>
                <div className="px-7 md:px-9 py-8 md:py-10" style={{ backgroundColor: C.carta, boxShadow: '0 20px 44px -22px rgba(23,56,44,0.35)' }}>
                  <Filete />
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mt-6 mb-4`} style={{ color: C.suave }}>
                    En Google Maps
                  </p>
                  <p className={`${display.className} font-black text-6xl md:text-7xl leading-none mb-3`} style={{ color: C.pino }}>
                    {BIZ.ratingLabel}
                  </p>
                  <Stars value={BIZ.rating} color={C.teja} className="w-5 h-5" />
                  <p className="text-sm mt-3 mb-6" style={{ color: C.suave }}>
                    {BIZ.reviews} reseñas de clientes
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.pino, textDecorationColor: C.teja }}
                  >
                    Ver la ficha en Google →
                  </a>
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <Renglón>Lo que repiten los comensales</Renglón>
                  <h2 className={`${display.className} font-black text-3xl md:text-4xl leading-[1.08] mb-8`} style={{ color: C.pino }}>
                    “Ambiente familiar y
                    <br />
                    todo muy limpio”
                  </h2>
                </Reveal>
                <div className="space-y-5">
                  {RESENAS.map((r, i) => (
                    <Reveal key={r.autor} delay={i * 110}>
                      <figure className="px-6 md:px-7 py-5 md:py-6 border-l-4" style={{ backgroundColor: C.carta, borderLeftColor: C.teja }}>
                        <blockquote className="text-[15px] md:text-base leading-relaxed mb-3" style={{ color: C.tinta }}>
                          “{r.texto}”
                        </blockquote>
                        <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.suave }}>
                          {r.autor} · reseña de Google
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ubicación ── */}
        <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Renglón>A la entrada del pueblo</Renglón>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.pino }}>
                Luis Cruz Martínez 1947,
                <br />
                <span style={{ color: C.teja }}>a pasos de la plaza</span>
              </h2>
              <p className="text-base leading-relaxed mb-2 max-w-md" style={{ color: C.suave }}>
                {BIZ.address}, {BIZ.city} — {BIZ.region}, Chile.
              </p>
              <p className="text-base leading-relaxed mb-2 max-w-md" style={{ color: C.suave }}>
                A 11 minutos a pie de la Plaza de Armas de Molina.
              </p>
              <p className="text-base mb-8" style={{ color: C.suave }}>
                Teléfono:{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.pino }}>
                  {BIZ.phoneDisplay}
                </a>
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold tracking-[0.06em] text-sm px-6 py-3 tap-44 transition-transform active:scale-95`}
                  style={{ backgroundColor: C.pino, color: '#F7F1E3' }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold tracking-[0.06em] text-sm px-6 py-3 border-2 tap-44`}
                  style={{ borderColor: C.pino, color: C.pino }}
                >
                  Escribir por WhatsApp
                </a>
              </div>
              <div className="relative overflow-hidden aspect-[4/3] max-w-sm" style={{ boxShadow: '0 18px 40px -20px rgba(23,56,44,0.4)' }}>
                <Image
                  src={`${IMG}/plaza.webp`}
                  alt="Plaza de Armas de Molina y su quiosco central, a pasos del hostal"
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="overflow-hidden min-h-[320px] h-full" style={{ boxShadow: '0 24px 50px -24px rgba(23,56,44,0.45)', backgroundColor: '#EFE6D2' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
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
        <section style={{ backgroundColor: C.teja }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-5`} style={{ color: '#F7F1E3' }}>
                Reserva directa · sin intermediarios
              </p>
              <h2 className={`${display.className} font-black text-[clamp(2.4rem,7.5vw,4.8rem)] leading-[1] mb-7`} style={{ color: '#FDFAF2' }}>
                La mesa está puesta
                <br />
                en Molina
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold tracking-[0.06em] text-sm px-8 py-3.5 tap-44 transition-transform active:scale-95`}
                  style={{ backgroundColor: C.pino, color: '#F7F1E3' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${display.className} uppercase font-semibold tracking-[0.06em] text-sm px-8 py-3.5 border-2 tap-44`}
                  style={{ borderColor: '#FDFAF2', color: '#FDFAF2' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: '#0D241C', color: '#F7F1E3' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/logo.webp`} alt="Logo de Hostal Aleros" className="h-9 w-auto rounded" />
                <p className={`${display.className} font-black text-xl leading-tight`}>{BIZ.name}</p>
              </div>
              <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(247,241,227,0.75)' }}>
                {BIZ.address}, {BIZ.city} · {BIZ.region}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
                {' · '}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
                {' · '}
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Google Maps</a>
              </address>
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,241,227,0.55)' }}>
              {BIZ.ratingLabel} ★ · {BIZ.reviews} reseñas · {BIZ.city}, Chile
            </p>
          </div>
        </footer>

        <SitiazoStrip />
        <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
      </div>
    </div>
  )
}
