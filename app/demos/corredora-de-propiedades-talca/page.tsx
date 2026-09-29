import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--f-mono',
})

// Identidad: la pyme no tiene nombre comercial — su ficha de Google se llama
// literalmente "corredora de propiedades". La identidad del demo es entonces
// la dirección: la oficina 3-C de 1 Sur 770, con el motivo del tablero de
// bronce de una galería céntrica (placas atornilladas, latón sobre verde).

const C = {
  verde: '#0E1A13',
  verde2: '#14261E',
  lata: '#C9A45C',
  lataCl: '#E3C886',
  lataOsc: '#6B5226',
  crema: '#F2ECDC',
  crema2: '#E7DCC2',
  tinta: '#1B2A21',
  suave: '#4E5746',
  suaveCl: '#B9C3AC',
  lineaCl: 'rgba(201,164,92,0.28)',
  lineaOsc: 'rgba(27,42,33,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'corredora-de-propiedades-talca',
  title: 'Corredora de Propiedades y Seguros — Oficina 3-C, 1 Sur 770, Talca',
  description:
    'Corredora de propiedades y de seguros en 1 Sur 770, depto. 3-C, centro de Talca. Venta, arriendo y gestión inmobiliaria + corretaje de seguros. WhatsApp +56 9 6100 1220.',
  image: `${IMG}/bosquejo-galeria.webp`,
})

const NAV_LINKS = [
  { label: 'La ficha', href: '#ficha-hoy' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'La cuadra', href: '#cuadra' },
  { label: 'Ubicación', href: '#ubicacion' },
]

// Distribución real de las 6 reseñas de la ficha de Google (sep 2026).
const BARRAS = [
  { n: 5, c: 3 },
  { n: 4, c: 1 },
  { n: 3, c: 0 },
  { n: 2, c: 1 },
  { n: 1, c: 1 },
]

const GIROS = [
  {
    piso: 'Giro A',
    t: 'Propiedades',
    items: [
      'Venta y compra de casas, departamentos y sitios',
      'Gestión de arriendos en Talca y alrededores',
      'Coordinación de visitas y del proceso hasta la escritura',
    ],
  },
  {
    piso: 'Giro B',
    t: 'Seguros',
    items: [
      'Corretaje de seguros: cotiza y compara entre compañías',
      'Acompañamiento desde la cotización hasta la póliza',
      'Atención directa por WhatsApp',
    ],
  },
]

const BOSQUEJOS = [
  {
    img: `${IMG}/bosquejo-galeria.webp`,
    alt: 'Bosquejo referencial: corredor de una galería comercial céntrica con tablero de bronce de oficinas',
    cap: 'La galería del centro',
  },
  {
    img: `${IMG}/bosquejo-escritorio.webp`,
    alt: 'Bosquejo referencial: escritorio de corredora con escritura, llaves y estilográfica',
    cap: 'El escritorio',
  },
  {
    img: `${IMG}/bosquejo-casa.webp`,
    alt: 'Bosquejo referencial: fachada de casa chilena con placa de bronce en la reja',
    cap: 'La cartera',
  },
]

function Tornillo() {
  return (
    <span
      aria-hidden="true"
      className="absolute w-[7px] h-[7px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 35% 30%, #EED9A0, #8A6B33 70%, #5E471F)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.45)',
      }}
    />
  )
}

// Placa de bronce atornillada — el motivo gráfico del demo.
function Placa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[3px] ${className}`}
      style={{
        background: `linear-gradient(160deg, ${C.lataCl} 0%, ${C.lata} 55%, #A9853F 100%)`,
        boxShadow: '0 2px 10px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,244,214,0.7)',
      }}
    >
      <span className="absolute top-1.5 left-1.5"><Tornillo /></span>
      <span className="absolute top-1.5 right-1.5"><Tornillo /></span>
      <span className="absolute bottom-1.5 left-1.5"><Tornillo /></span>
      <span className="absolute bottom-1.5 right-1.5"><Tornillo /></span>
      <div
        className="absolute inset-[5px] rounded-[2px] pointer-events-none"
        style={{ border: '1px solid rgba(94,71,31,0.55)' }}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="font-[var(--f-mono)] text-[11px] uppercase tracking-[0.28em]"
      style={{ color: light ? C.lataCl : C.lataOsc }}
    >
      {children}
    </p>
  )
}

function BosquejoTag() {
  return (
    <span
      className="absolute top-3 left-3 z-10 font-[var(--f-mono)] text-[9px] uppercase tracking-[0.16em] px-2.5 py-1.5 rounded-sm"
      style={{ backgroundColor: 'rgba(14,26,19,0.88)', color: C.lataCl, border: `1px dashed ${C.lata}` }}
    >
      Bosquejo — se reemplaza por tu foto real
    </span>
  )
}

export default function CorredoraDePropiedadesTalca() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.tinta, fontFamily: 'var(--f-body)' }}
    >
      <BlitzNav
        name={
          <span className="font-[var(--f-mono)] text-sm md:text-base font-semibold tracking-[0.08em]">
            1 SUR 770 <span style={{ color: C.lata }}>·</span> OF. 3-C
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(14,26,19,0.95)',
          ink: C.crema,
          line: C.lineaCl,
          btnBg: C.lata,
          btnInk: C.verde,
        }}
      />

      {/* HERO — el tablero de la galería */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: C.verde }}
      >
        {/* ranuras del tablero */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0 46px, rgba(201,164,92,0.9) 46px 47px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[128px] pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <Kicker light>Corredora de propiedades · Corredora de seguros</Kicker>
                <h1
                  className="font-[var(--f-display)] mt-4 text-[11.5vw] md:text-[52px] leading-[1.06]"
                  style={{ color: C.crema }}
                >
                  Tu escritura y tu póliza, en la oficina 3-C
                </h1>
                <p className="mt-5 text-[15px] md:text-lg leading-relaxed max-w-[52ch]" style={{ color: C.suaveCl }}>
                  Corretaje de propiedades y de seguros atendiendo en pleno centro
                  de Talca: {BIZ.address}. Una sola mesa para vender, arrendar
                  o asegurar lo que te importa.
                </p>
              </Reveal>
              <Reveal delay={110}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-transform active:scale-95"
                    style={{ backgroundColor: C.lata, color: C.verde }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold border transition-transform active:scale-95"
                    style={{ borderColor: C.lineaCl, color: C.lataCl }}
                  >
                    Cómo llegar
                  </a>
                </div>
                <p className="mt-5 inline-flex items-center gap-2 font-[var(--f-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: C.suaveCl }}>
                  <Stars value={3.7} color={C.lata} className="w-3.5 h-3.5" />
                  {BIZ.rating} en Google · {BIZ.reviews}
                </p>
              </Reveal>
            </div>

            {/* El tablero: placas del piso 3 */}
            <Reveal delay={140}>
              <div
                className="relative rounded-md p-5 md:p-7"
                style={{
                  background: `linear-gradient(180deg, ${C.verde2}, ${C.verde})`,
                  border: `1px solid ${C.lineaCl}`,
                  boxShadow: 'inset 0 0 0 6px rgba(14,26,19,0.6), inset 0 0 0 7px rgba(201,164,92,0.35), 0 24px 48px rgba(0,0,0,0.4)',
                }}
              >
                <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.34em] text-center mb-5" style={{ color: C.suaveCl }}>
                  Directorio · Piso 3
                </p>
                <div className="space-y-4">
                  <Placa>
                    <p className="py-3.5 px-4 text-center font-[var(--f-display)] text-lg md:text-xl tracking-[0.06em]" style={{ color: '#3D2E10' }}>
                      CORREDORA DE PROPIEDADES
                    </p>
                  </Placa>
                  <Placa>
                    <p className="py-3.5 px-4 text-center font-[var(--f-display)] text-lg md:text-xl tracking-[0.06em]" style={{ color: '#3D2E10' }}>
                      CORREDORA DE SEGUROS
                    </p>
                  </Placa>
                  <Placa>
                    <p className="py-3 px-4 text-center font-[var(--f-mono)] text-[12px] md:text-[13px] font-semibold tracking-[0.18em]" style={{ color: '#3D2E10' }}>
                      OFICINA 3-C — 1 SUR 770
                    </p>
                  </Placa>
                </div>
                <p className="mt-5 text-center font-[var(--f-mono)] text-[10px] uppercase tracking-[0.2em]" style={{ color: C.suaveCl }}>
                  {BIZ.city} · {BIZ.region}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LA FICHA HOY — su ficha de Google, con los datos reales */}
      <section id="ficha-hoy" className="scroll-mt-[72px] max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal>
            <div>
              <Kicker>Así está tu ficha de Google</Kicker>
              <h2 className="font-[var(--f-display)] mt-3 text-3xl md:text-[42px] leading-[1.08]" style={{ color: C.tinta }}>
                La ficha existe, pero nadie la administra
              </h2>
              <p className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: C.suave }}>
                En Google Maps la oficina aparece sin nombre comercial, sin fotos,
                sin horario y sin reclamar — con {BIZ.reviews} acumuladas desde
                2019. Un sitio propio muestra lo que tú quieres mostrar: tus
                datos, tus servicios y tus formas de contacto.
              </p>
              <ul className="mt-5 space-y-2 font-[var(--f-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: C.suave }}>
                <li className="flex gap-3"><span style={{ color: C.lataOsc }}>—</span> Sin nombre comercial publicado</li>
                <li className="flex gap-3"><span style={{ color: C.lataOsc }}>—</span> Sin fotos ni sitio web</li>
                <li className="flex gap-3"><span style={{ color: C.lataOsc }}>—</span> Ficha sin reclamar por el dueño</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-md p-6 md:p-8"
              style={{ backgroundColor: C.verde2, border: `1px solid ${C.lineaCl}` }}
            >
              <div className="flex items-end gap-4">
                <p className="font-[var(--f-display)] text-6xl leading-none" style={{ color: C.lataCl }}>
                  {BIZ.rating}
                </p>
                <div className="pb-1">
                  <Stars value={3.7} color={C.lata} />
                  <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.16em] mt-1.5" style={{ color: C.suaveCl }}>
                    {BIZ.reviews} en Google
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                {BARRAS.map((b) => (
                  <div key={b.n} className="flex items-center gap-3 font-[var(--f-mono)] text-[11px]" style={{ color: C.suaveCl }}>
                    <span className="w-8 shrink-0 text-right">{b.n}★</span>
                    <span className="relative h-[9px] flex-1 rounded-sm overflow-hidden" style={{ backgroundColor: 'rgba(242,236,220,0.1)' }}>
                      <span
                        className="absolute inset-y-0 left-0 rounded-sm"
                        style={{ width: `${(b.c / 6) * 100}%`, backgroundColor: C.lata }}
                      />
                    </span>
                    <span className="w-5 shrink-0">{b.c}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-[var(--f-mono)] text-[9.5px] uppercase tracking-[0.14em]" style={{ color: C.suaveCl }}>
                Distribución real · Google Maps, sep 2026
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOS GIROS — dos placas, un mismo escritorio */}
      <section id="servicios" className="scroll-mt-[72px] border-y" style={{ borderColor: C.lineaOsc, backgroundColor: C.crema2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="text-center">
              <Kicker>Lo que hace la oficina</Kicker>
              <h2 className="font-[var(--f-display)] mt-3 text-3xl md:text-[44px] leading-[1.06]" style={{ color: C.tinta }}>
                Dos giros, un mismo escritorio
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
            {GIROS.map((g, i) => (
              <Reveal key={g.t} delay={i * 90}>
                <article
                  className="h-full rounded-md p-6 md:p-8"
                  style={{
                    backgroundColor: C.crema,
                    border: `1px solid ${C.lineaOsc}`,
                    boxShadow: '0 14px 30px rgba(27,42,33,0.08)',
                  }}
                >
                  <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.26em]" style={{ color: C.lataOsc }}>
                    {g.piso}
                  </p>
                  <h3 className="font-[var(--f-display)] mt-2 text-2xl md:text-[30px]" style={{ color: C.tinta }}>
                    {g.t}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[14.5px] leading-relaxed" style={{ color: C.suave }}>
                        <span
                          aria-hidden="true"
                          className="mt-[7px] w-[9px] h-[9px] shrink-0 rounded-full"
                          style={{ background: 'radial-gradient(circle at 35% 30%, #EED9A0, #8A6B33 70%, #5E471F)' }}
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESCENAS — bosquejos marcados */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <Kicker>El barrio y la oficina</Kicker>
            <h2 className="font-[var(--f-display)] mt-3 text-3xl md:text-[42px] leading-[1.06]" style={{ color: C.tinta }}>
              El centro de Talca, en tres marcos
            </h2>
            <p className="mt-3 text-sm md:text-base italic" style={{ color: C.suave }}>
              Estas escenas son bosquejos referenciales: al activar el sitio se
              reemplazan por fotos reales de la oficina y la cartera.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {BOSQUEJOS.map((b, i) => (
            <Reveal key={b.img} delay={i * 80}>
              <figure>
                <div className="relative rounded-sm overflow-hidden" style={{ border: `1px solid ${C.lineaOsc}` }}>
                  <BosquejoTag />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.img}
                    alt={b.alt}
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-center font-[var(--f-mono)] text-[10px] uppercase tracking-[0.18em]" style={{ color: C.suave }}>
                  {b.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LA CUADRA — Street View real + ficha */}
      <section id="cuadra" className="scroll-mt-[72px] border-y" style={{ borderColor: C.lineaCl, backgroundColor: C.verde2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <Reveal>
              <figure>
                <div className="relative rounded-sm overflow-hidden" style={{ border: `1px solid ${C.lineaCl}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/streetview-1-sur-770.webp`}
                    alt="Vista real de la cuadra de 1 Sur 770, Talca, donde está la oficina 3-C — imagen de Street View de Google"
                    className="w-full aspect-[3/2] object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2 font-[var(--f-mono)] text-[9px] uppercase tracking-[0.16em]" style={{ color: C.suaveCl }}>
                  Imagen real · Street View de Google · la cuadra de 1 Sur 770
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={110}>
              <div>
                <Kicker light>La cuadra</Kicker>
                <h2 className="font-[var(--f-display)] mt-3 text-3xl md:text-[40px] leading-[1.08]" style={{ color: C.crema }}>
                  {BIZ.address}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.suaveCl }}>
                  La oficina trabaja en las galerías de 1 Sur 770, en el corazón del
                  centro de Talca — a pasos de la plaza, los bancos y la notaría.
                </p>
                <dl className="mt-6 space-y-2.5 font-[var(--f-mono)] text-[11px] uppercase tracking-[0.14em]">
                  {[
                    ['Dirección', `${BIZ.address}`],
                    ['Ciudad', `${BIZ.city}, ${BIZ.region}`],
                    ['Plus code', BIZ.plusCode],
                    ['WhatsApp', BIZ.phoneDisplay],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-4">
                      <dt className="w-24 shrink-0" style={{ color: C.lata }}>{k}</dt>
                      <dd style={{ color: C.crema }}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UBICACIÓN — mapa */}
      <section id="ubicacion" className="scroll-mt-[72px] max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <div>
              <Kicker>Cómo llegar</Kicker>
              <h2 className="font-[var(--f-display)] mt-3 text-3xl md:text-[40px] leading-[1.08]" style={{ color: C.tinta }}>
                Entre la plaza y la notaría, oficina 3-C
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.suave }}>
                La galería de 1 Sur 770 queda en pleno centro de Talca, a pocos
                minutos a pie de la Plaza de Armas. Para coordinar una visita,
                escribe directo por WhatsApp.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-transform active:scale-95"
                style={{ backgroundColor: C.verde2, color: C.lataCl, border: `1px solid ${C.lineaCl}` }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div
              className="rounded-sm overflow-hidden h-[300px] md:h-[420px]"
              style={{ border: `2px solid ${C.lata}` }}
            >
              <LazyMap src={MAPS_EMBED} title="Mapa de la oficina de la corredora en 1 Sur 770, Talca" className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: C.verde }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <Kicker light>{BIZ.address} ·{'\u00A0'}{BIZ.city}</Kicker>
            <h2 className="font-[var(--f-display)] mt-4 text-4xl md:text-6xl leading-[1.04]" style={{ color: C.crema }}>
              ¿Vendes, arriendas<br />o aseguras?
            </h2>
            <p className="mt-4 text-[15px] md:text-base max-w-[46ch] mx-auto" style={{ color: C.suaveCl }}>
              La oficina 3-C atiende por WhatsApp: cuéntale qué necesitas y
              te responde directo.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-transform active:scale-95"
              style={{ backgroundColor: C.lata, color: C.verde }}
            >
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 py-6 text-center border-t" style={{ borderColor: C.lineaOsc }}>
        <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.16em] leading-relaxed" style={{ color: C.suave }}>
          {BIZ.rubro} · {BIZ.address},{'\u00A0'}{BIZ.city}{'\u00A0'}·{'\u00A0'}<span className="whitespace-nowrap">{BIZ.phoneDisplay}</span>
        </p>
      </footer>

      <DemoBand name="la corredora de la oficina 3-C" />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
