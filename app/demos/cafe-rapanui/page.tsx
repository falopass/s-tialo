import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({ src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }] })
const body = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({ src: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' })

/**
 * Dirección de arte: «la marquesina de la terraza» — la noche de Cruz 402.
 * Negro de toldo y carbón del letrero, la cinta roja del logo cruzando la
 * página como marquesina y el dorado de las letras de la fachada. Anton en
 * versalitas hace de rótulo luminoso; Barlow Condensed es la carta; Geist
 * Mono timbra horarios y precios. El recorrido es el de una noche real:
 * terraza al sol → happy hour → barra y tablas hasta el cierre.
 */
const C = {
  noche: '#14100F',
  carbon: '#1D1715',
  panel: '#251C18',
  rojo: '#D2232E',
  rojoClaro: '#F0655C',
  rojoOsc: '#8E141C',
  oro: '#E4B33C',
  crema: '#F4E9D4',
  muted: 'rgba(244,233,212,0.68)',
  line: 'rgba(228,179,60,0.22)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cafe-rapanui',
  title: 'Rapanuí Terraza Bar — Café, terraza y bar en Constitución',
  description:
    'Café, terraza y bar en Cruz 402, Constitución: burgers, pizzas, tablas, ceviches y happy hour, abierto todos los días.',
  image: `${IMG}/terraza.webp`,
})

const NAV_LINKS = [
  { label: 'La noche', href: '#noche' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const NOCHE = [
  {
    hora: '10:00',
    titulo: 'La terraza abre',
    detalle: 'Café de grano, waffles y batidos saludables en la pérgola de calle Cruz.',
  },
  {
    hora: '17:00',
    titulo: 'Happy hour',
    detalle: 'Mojitos, spritz y la barra completa mientras baja el sol del Maule costero.',
  },
  {
    hora: '20:00',
    titulo: 'Barra y cocina',
    detalle: 'Burgers premium, pizzas, tablas para compartir y ceviches.',
  },
  {
    hora: '00:00',
    titulo: 'El cierre',
    detalle: 'Lunes a sábado hasta medianoche; domingo hasta las 21:00.',
  },
]

const CARTA = [
  { plato: 'Burgers premium', detalle: 'la línea fuerte de la casa, según su propia carta' },
  { plato: 'Pizzas', detalle: 'para compartir en la terraza o el salón' },
  { plato: 'Burritos', detalle: 'desde $9.990 en la carta fu.do' },
  { plato: 'Tablas y ceviches', detalle: 'la oferta de barra para picar' },
  { plato: 'Waffles y batidos', detalle: 'opciones vegetarianas y sin gluten, según reseñas' },
  { plato: 'Tabaquería', detalle: 'venta de artículos de tabaco, como anuncia su perfil' },
]

const HORAS = [
  { d: 'Lunes a sábado', h: '10:00 – 00:00', nota: 'miércoles hasta 23:00' },
  { d: 'Domingo', h: '10:30 – 21:00', nota: '' },
]

const RESENAS = [
  {
    q: 'Vinimos en familia: muy buen ambiente y música. Carta amplia, con opciones vegetarianas y sin gluten; los waffles y los batidos saludables, un plus.',
    a: 'Daniel Alberto Flores',
    m: 'reseña en Google',
  },
  {
    q: 'Excelente atención de Julieta.',
    a: 'Agustina Rain',
    m: 'reseña en Google',
  },
  {
    q: 'Buen panorama de fin de semana: carta amplia, tragos, happy hour y atención muy cordial.',
    a: 'Camila Alejandra',
    m: 'reseña en Google',
  },
]

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${mono.className} text-[11px] font-semibold tracking-[0.3em] uppercase`} style={{ color: C.oro }}>
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.rojo, color: C.crema }
      : tone === 'light'
        ? { backgroundColor: C.crema, color: C.noche }
        : { border: `1.5px solid ${C.oro}`, color: C.oro }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-bold uppercase tracking-[0.08em] transition-transform active:scale-[0.97] tap-44"
      style={{ borderRadius: 4, ...st }}
    >
      {children}
    </a>
  )
}

/** La cinta roja del letrero, repetida como marquesina. */
function Cinta({ items, rotate = true }: { items: string[]; rotate?: boolean }) {
  return (
    <div
      className={`overflow-hidden ${rotate ? '-rotate-[1.2deg]' : ''} py-3`}
      style={{ backgroundColor: C.rojo, boxShadow: '0 10px 30px rgba(210,35,46,0.35)' }}
      aria-hidden="true"
    >
      <style>{`@keyframes rp-cinta{to{transform:translateX(-50%)}}`}</style>
      <div
        className={`${display.className} flex gap-8 whitespace-nowrap uppercase text-lg tracking-[0.06em] w-max`}
        style={{ color: C.crema, animation: 'rp-cinta 30s linear infinite' }}
      >
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-8">
            {s}
            <span style={{ color: C.oro }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

const CINTA_ITEMS = ['café', 'terraza', 'bar', 'burgers', 'pizzas', 'happy hour', 'ceviches', 'Constitución']

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh] overflow-x-hidden`} style={{ backgroundColor: C.noche, color: C.crema }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'dark', bar: 'rgba(20,16,15,0.92)', ink: C.crema, line: C.line, btnBg: C.rojo, btnInk: C.crema }}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — el letrero de calle Cruz */}
        <section id="inicio" className="relative overflow-hidden pt-24 pb-14 md:pb-20">
          <div
            className="absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #E4B33C 0%, transparent 55%)' }}
          />
          <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-7 text-center md:text-left">
                <Reveal>
                  <div className="inline-block px-4 py-2 mb-6" style={{ backgroundColor: C.rojo, boxShadow: '0 8px 24px rgba(210,35,46,0.4)' }}>
                    <span className={`${display.className} uppercase tracking-[0.12em] text-base md:text-lg`} style={{ color: C.crema }}>
                      café · terraza · bar
                    </span>
                  </div>
                  <h1
                    className={`${display.className} uppercase leading-[0.98] text-[44px] sm:text-6xl lg:text-[84px] tracking-[0.01em]`}
                    style={{ color: C.crema }}
                  >
                    La terraza que no cierra de <span style={{ color: C.oro }}>Constitución</span>
                  </h1>
                  <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: C.muted }}>
                    Café de día, happy hour al atardecer y barra hasta medianoche:
                    el clásico renovado de calle Cruz, abierto los siete días.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Btn href={WA_LINK} tone="solid">Pedir por WhatsApp</Btn>
                    <Btn href={BIZ.menu} tone="line">Ver la carta</Btn>
                  </div>
                  <p className={`${mono.className} mt-6 text-[11px] tracking-[0.22em] uppercase`} style={{ color: C.oro }}>
                    «52 años de experiencia», dicen en su Instagram
                  </p>
                </Reveal>
              </div>
              <div className="md:col-span-5">
                <Reveal delay={120}>
                  <div className="relative">
                    <figure
                      className="overflow-hidden"
                      style={{ borderRadius: 6, border: `1.5px solid ${C.line}`, boxShadow: '0 24px 60px rgba(0,0,0,0.55)' }}
                    >
                      <Image
                        src={`${IMG}/terraza.webp`}
                        alt="Terraza con pérgola y luces de Rapanuí Terraza Bar en Constitución"
                        width={1200}
                        height={675}
                        className="w-full h-auto block"
                        priority
                      />
                    </figure>
                    <figure
                      className="absolute -bottom-8 -left-4 md:-left-8 w-36 md:w-44 overflow-hidden"
                      style={{ borderRadius: 6, border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(0,0,0,0.5)', transform: 'rotate(-4deg)' }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/mojito.webp`} alt="Mojito servido en la barra de Rapanuí" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                    </figure>
                    <div
                      className="absolute -top-4 -right-2 md:-right-4 px-3 py-2"
                      style={{ backgroundColor: C.oro, transform: 'rotate(3deg)', boxShadow: '0 10px 26px rgba(0,0,0,0.4)' }}
                    >
                      <p className={`${mono.className} text-[10px] font-bold tracking-[0.18em] uppercase`} style={{ color: C.noche }}>
                        Cruz 402 · centro
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Cinta items={CINTA_ITEMS} />

        {/* LA NOCHE — timeline vertical de tarde a cierre */}
        <section id="noche" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16">
            <Reveal>
              <div className="md:sticky md:top-28">
                <Kicker>de la mañana al cierre</Kicker>
                <h2 className={`${display.className} uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-[0.01em] mt-4`} style={{ color: C.crema }}>
                  Una noche en <span style={{ color: C.rojo }}>Rapanuí</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                  El local histórico de Constitución renació como terraza-bar:
                  mismo rincón de siempre, nueva vida hasta la medianoche.
                </p>
                <figure className="mt-8 overflow-hidden hidden md:block" style={{ borderRadius: 6, border: `1.5px solid ${C.line}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/barra.webp`} alt="Barra iluminada de Rapanuí Terraza Bar de noche" className="w-full aspect-[4/5] object-cover" loading="lazy" />
                </figure>
              </div>
            </Reveal>
            <div>
              {NOCHE.map((n, i) => (
                <Reveal key={n.hora} delay={i * 80}>
                  <article
                    className="relative pl-8 md:pl-10 pb-10 last:pb-0"
                    style={{ borderLeft: i === NOCHE.length - 1 ? `2px solid ${C.rojo}` : `2px solid ${C.line}` }}
                  >
                    <span
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
                      style={{ backgroundColor: i === NOCHE.length - 1 ? C.rojo : C.oro, boxShadow: `0 0 14px ${i === NOCHE.length - 1 ? C.rojo : C.oro}` }}
                      aria-hidden="true"
                    />
                    <p className={`${mono.className} text-[11px] font-bold tracking-[0.26em]`} style={{ color: i === NOCHE.length - 1 ? C.rojoClaro : C.oro }}>
                      {n.hora}
                    </p>
                    <h3 className={`${display.className} uppercase text-2xl md:text-3xl tracking-[0.01em] mt-2`} style={{ color: C.crema }}>
                      {n.titulo}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {n.detalle}
                    </p>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={200}>
                <figure className="mt-8 overflow-hidden md:hidden" style={{ borderRadius: 6, border: `1.5px solid ${C.line}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/barra.webp`} alt="Barra iluminada de Rapanuí Terraza Bar de noche" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LA CARTA — listado de menú con puntos guía */}
        <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <Reveal>
                <div>
                  <Kicker>según su carta y su perfil</Kicker>
                  <h2 className={`${display.className} uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-[0.01em] mt-4`} style={{ color: C.crema }}>
                    De la <span style={{ color: C.oro }}>carta</span> de la casa
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                    La carta completa la sirven en línea; acá los platos por los
                    que se quedan quienes llegan.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Btn href={BIZ.menu} tone="solid">Carta completa en línea</Btn>
                    <Btn href={WA_LINK} tone="line">Consultar al local</Btn>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ul className="divide-y" style={{ borderColor: C.line }}>
                  {CARTA.map((c) => (
                    <li key={c.plato} className="py-4 flex items-baseline gap-3" style={{ borderColor: C.line }}>
                      <span className={`${display.className} uppercase text-xl md:text-2xl tracking-[0.01em] shrink-0`} style={{ color: C.crema }}>
                        {c.plato}
                      </span>
                      <span className="flex-1 border-b border-dotted translate-y-[-6px]" style={{ borderColor: 'rgba(244,233,212,0.28)' }} aria-hidden="true" />
                      <span className="text-sm font-medium text-right max-w-[45%]" style={{ color: C.muted }}>
                        {c.detalle}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: 'burguer', alt: 'Burger premium con papas de Rapanuí Terraza Bar' },
                { src: 'pizza', alt: 'Pizza recién salida del horno en Rapanuí' },
                { src: 'spritz', alt: 'Spritz servido en copa en la terraza de Rapanuí' },
                { src: 'salon', alt: 'Salón interior con iluminación de Rapanuí Terraza Bar' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={i * 70}>
                  <figure className={`overflow-hidden ${i % 2 ? 'md:translate-y-5' : ''}`} style={{ borderRadius: 6, border: `1.5px solid ${C.line}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/${f.src}.webp`} alt={f.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FACHADA — el letrero real como separador */}
        <section className="relative">
          <figure className="overflow-hidden">
            <Image
              src={`${IMG}/fachada.webp`}
              alt="Fachada de Rapanuí Terraza Bar con toldo negro y letras doradas en calle Cruz, Constitución"
              width={1200}
              height={900}
              className="w-full h-[300px] md:h-[420px] object-cover block"
              loading="lazy"
            />
          </figure>
          <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
            <Cinta items={CINTA_ITEMS} rotate={false} />
          </div>
        </section>

        {/* RESEÑAS — riel lateral con cita grande */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-16 md:pb-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>lo que dicen los parroquianos</Kicker>
                <h2 className={`${display.className} uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-[0.01em] mt-4`} style={{ color: C.crema }}>
                  «Muy buen <span style={{ color: C.rojo }}>ambiente</span>»
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={3.9} color={C.oro} className="w-[18px] h-[18px]" />
                <span className={`${mono.className} text-[11px] tracking-[0.16em] uppercase`} style={{ color: C.muted }}>
                  3,9 en Google · 408 opiniones
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 space-y-0">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 90}>
                <figure
                  className="grid md:grid-cols-[96px_1fr_220px] gap-4 md:gap-8 items-center py-7"
                  style={{ borderTop: `1.5px solid ${C.line}` }}
                >
                  <p className={`${display.className} text-4xl md:text-5xl leading-none`} style={{ color: 'rgba(228,179,60,0.35)' }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <blockquote className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: C.crema }}>
                    “{r.q}”
                  </blockquote>
                  <figcaption className="md:text-right">
                    <p className="text-sm font-bold uppercase tracking-[0.06em]" style={{ color: C.oro }}>{r.a}</p>
                    <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: C.muted }}>{r.m}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LLEGAR — mapa + horario de la carta */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Kicker>calle cruz, a pasos de la plaza</Kicker>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.98] tracking-[0.01em] mt-4`} style={{ color: C.crema }}>
                <span style={{ color: C.oro }}>Cruz 402,</span> Constitución
              </h2>
              <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                Cruz 402
                <br />
                Constitución, Región del Maule
              </address>
              <ul className="mt-6 space-y-2">
                {HORAS.map((h) => (
                  <li key={h.d} className="flex items-baseline gap-3">
                    <span className={`${mono.className} text-[11px] font-bold tracking-[0.2em] uppercase w-36 shrink-0`} style={{ color: C.oro }}>
                      {h.d}
                    </span>
                    <span className="text-base font-semibold" style={{ color: C.crema }}>{h.h}</span>
                    {h.nota && (
                      <span className={`${mono.className} text-[10px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                        {h.nota}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="solid">Abrir en Google Maps</Btn>
                <Btn href={WA_LINK} tone="line">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-md overflow-hidden aspect-[4/3]" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 20px 50px rgba(0,0,0,0.45)' }}>
                <LazyMap src={MAPS_EMBED} title="Mapa de Rapanuí Terraza Bar en Constitución" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL — la barra encendida */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.rojoOsc }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <div className="inline-block px-5 py-2 mb-6" style={{ backgroundColor: C.rojo }}>
                <span className={`${display.className} uppercase tracking-[0.14em] text-lg`} style={{ color: C.crema }}>
                  Rapanuí
                </span>
              </div>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-[0.01em]`} style={{ color: C.crema }}>
                Hoy es buen día para la terraza
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto font-medium" style={{ color: 'rgba(244,233,212,0.85)' }}>
                Mesa en la pérgola, happy hour o la barra completa: se reserva por el mismo WhatsApp.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="light">Escribir a Rapanuí</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: '#0E0B0A', borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} uppercase text-lg tracking-[0.04em]`} style={{ color: C.crema }}>
            {BIZ.name} · {BIZ.tagline}
          </p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a
            href={BIZ.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-[0.06em] tap-44 inline-flex items-center"
            style={{ color: C.oro }}
          >
            {BIZ.instagramUser}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
