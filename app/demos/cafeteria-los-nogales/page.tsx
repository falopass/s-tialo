import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })
const mono = localFont({ src: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' })

/**
 * Dirección de arte: «el sello de la heladería» — el círculo estampado de su
 * logo (crema de cucurucho, aro de granos de café, la tacita verde) repetido
 * como timbre sobre la página. Bitter hace de letra de rótulo, como el slab
 * de «Los Nogales»; la carta se lee como pizarra de precios y los puntos de
 * su carta fidelidad («junta los puntos») marcan cada rubro.
 */
const C = {
  crema: '#F7EDD4',
  cremaHi: '#FCF6E3',
  nogal: '#38220F',
  naranjo: '#D9480F',
  naranjoInk: '#A33808',
  verde: '#3F7A33',
  muted: 'rgba(56,34,15,0.72)',
  line: 'rgba(56,34,15,0.18)',
  card: '#FFFDF4',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cafeteria-los-nogales',
  title: 'Cafetería Los Nogales — Café, helado y cocina peruana en San Rafael',
  description:
    'Cafetería y heladería en la Galería Gian Fu de San Rafael: desayunos, almuerzos peruanos, sushi y helados de la casa. Abierto todos los días.',
  image: `${IMG}/cono.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Almuerzos', href: '#peruano' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const CARTA = [
  {
    rubro: 'Desayunos',
    items: ['Cafés de la casa', 'Sandwiches y paninis', 'Tortas', 'Jugos naturales'],
  },
  {
    rubro: 'Almuerzos peruanos',
    items: ['Ceviche', 'Lomo saltado', 'Ají de gallina', 'Tallarín saltado', 'Papa a la huancaína', 'Ensaladas'],
  },
  {
    rubro: 'Heladería',
    items: ['Conos', 'Vasos', 'Copas', 'Frappuccino', 'Café helado'],
  },
  {
    rubro: 'Sushi',
    items: ['Maki', 'Uramaki', 'Hand rolls', 'Tempura', 'Acevichados'],
  },
]

const HORAS = [
  { d: 'Lunes a viernes', h: '8:00 – 20:00' },
  { d: 'Sábado', h: '9:30 – 20:00' },
  { d: 'Domingo', h: '9:30 – 18:00' },
]

const RESENAS = [
  {
    q: 'Muy buena comida, 100% recomendado: el mejor local de San Rafael sin duda.',
    a: 'Camila Celis',
    m: 'reseña en Google',
  },
  {
    q: 'Buena experiencia y excelente atención, la comida espectacular y buen área de juegos para los niños.',
    a: 'Catalina Villarroel',
    m: 'reseña en Google',
  },
  {
    q: 'Local pequeño pero tiene de todo. Silencioso, agradable para conversar y con estacionamiento.',
    a: 'jgrandoni',
    m: 'reseña en Google',
  },
]

const SELLO_ITEMS = ['café', 'helado', 'desayunos', 'sushi', 'almuerzo peruano', 'juegos para niños', 'San Rafael']

/** El sello real de Los Nogales: su logo circular recortado en aro. */
function Sello({ size = 120, ring = true }: { size?: number; ring?: boolean }) {
  return (
    <div
      className="rounded-full overflow-hidden shrink-0"
      style={{
        width: size,
        height: size,
        border: ring ? `2px solid ${C.nogal}` : 'none',
        boxShadow: '0 12px 30px rgba(56,34,15,0.22)',
      }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${IMG}/logo.webp`} alt="" className="w-full h-full object-cover scale-110" />
    </div>
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] font-semibold tracking-[0.26em] uppercase`}
      style={{ color: light ? 'rgba(252,246,227,0.78)' : C.naranjoInk }}
    >
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.nogal, color: C.cremaHi }
      : tone === 'light'
        ? { backgroundColor: C.cremaHi, color: C.nogal }
        : { border: `1.5px solid ${C.nogal}`, color: C.nogal }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh] overflow-x-hidden`} style={{ backgroundColor: C.crema, color: C.nogal }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        theme={{ over: 'light', bar: 'rgba(247,237,212,0.94)', ink: C.nogal, line: C.line, btnBg: C.nogal, btnInk: C.cremaHi }}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — el sello timbra el rincón */}
        <section id="inicio" className="relative overflow-hidden pt-24 pb-10 md:pb-16">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <Kicker>cafetería &amp; heladería · San Rafael, Maule</Kicker>
                <h1
                  className={`${display.className} font-black leading-[1.02] text-[42px] sm:text-6xl lg:text-[68px] tracking-tight mt-5`}
                  style={{ color: C.nogal }}
                >
                  El rincón de sabores de <em style={{ color: C.naranjo }}>San&nbsp;Rafael</em>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Café, helado y cocina peruana en un solo local: la cafetería nueva de la
                  Galería Gian Fu, abierta todos los días y con juegos para los niños.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="solid">Pedir por WhatsApp</Btn>
                  <Btn href="#carta" tone="line" external={false}>Ver la carta</Btn>
                </div>
                <div className="mt-7 flex items-center gap-3 justify-center md:justify-start">
                  <Stars value={4.4} color={C.naranjo} className="w-[18px] h-[18px]" />
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                    {BIZ.rating} en Google
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative mx-auto max-w-md md:max-w-none">
                <div className="grid grid-cols-[1fr_0.62fr] gap-3 items-end">
                  <figure className="overflow-hidden rounded-2xl" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(56,34,15,0.16)' }}>
                    <Image
                      src={`${IMG}/cuaderno.webp`}
                      alt="Latte art junto a un cuaderno en la mesa de Cafetería Los Nogales"
                      width={1200}
                      height={676}
                      className="w-full h-auto block"
                      priority
                    />
                  </figure>
                  <figure className="overflow-hidden rounded-2xl -mb-6" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(56,34,15,0.14)' }}>
                    <Image
                      src={`${IMG}/cono.webp`}
                      alt="Cono de helado rosado de la heladería Los Nogales"
                      width={850}
                      height={850}
                      className="w-full h-auto block"
                    />
                  </figure>
                </div>
                <div className="absolute -top-7 -right-2 md:-right-5 rotate-6">
                  <Sello size={108} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TICKET — horarios como líneas de boleta */}
        <div className="border-y" style={{ borderColor: C.line, backgroundColor: C.cremaHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2">
            {HORAS.map((h) => (
              <p key={h.d} className={`${mono.className} text-[11px] md:text-xs tracking-[0.14em] uppercase`} style={{ color: C.nogal }}>
                <span style={{ color: C.naranjo }}>●</span>&nbsp;&nbsp;{h.d}&nbsp;&nbsp;{h.h}
              </p>
            ))}
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.14em] uppercase`} style={{ color: C.nogal }}>
              <span style={{ color: C.naranjo }}>●</span>&nbsp;&nbsp;Galería Gian Fu · local 3
            </p>
          </div>
        </div>

        {/* LA CARTA — pizarra de rubros */}
        <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker>la pizarra</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight mt-4`} style={{ color: C.nogal }}>
                Cuatro rubros bajo el mismo <em style={{ color: C.naranjo }}>sello</em>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                Cafetería, heladería, cocina peruana y sushi: la carta completa del local,
                como la anuncian ellos mismos.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARTA.map((c, i) => (
              <Reveal key={c.rubro} delay={i * 80}>
                <article
                  className="h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: i === 1 ? C.nogal : C.card,
                    border: `1.5px solid ${i === 1 ? C.nogal : C.line}`,
                    boxShadow: '0 10px 26px rgba(56,34,15,0.10)',
                  }}
                >
                  <p className={`${mono.className} text-[10px] font-semibold tracking-[0.22em] uppercase`} style={{ color: i === 1 ? '#F2B48F' : C.naranjoInk }}>
                    {String(i + 1).padStart(2, '0')} · {c.rubro}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-baseline gap-2 text-[15px] font-semibold"
                        style={{ color: i === 1 ? C.cremaHi : C.nogal }}
                      >
                        <span aria-hidden="true" style={{ color: i === 1 ? '#F2B48F' : C.verde }}>●</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PERUANO — el rubro que nadie más tiene */}
        <section id="peruano" className="scroll-mt-20 relative" style={{ backgroundColor: C.nogal }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="relative">
                <figure className="overflow-hidden rounded-3xl" style={{ border: '1.5px solid rgba(252,246,227,0.25)', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}>
                  <Image
                    src={`${IMG}/almuerzo.webp`}
                    alt="Lomo saltado con arroz y papas fritas, almuerzo peruano de Los Nogales"
                    width={1080}
                    height={1080}
                    className="w-full h-auto block"
                  />
                </figure>
                <div className="absolute -bottom-8 -right-3 md:-right-6 -rotate-6">
                  <Sello size={96} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="text-center md:text-left">
                <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.04] tracking-tight`} style={{ color: C.cremaHi }}>
                  Y a la hora de almuerzo, <em style={{ color: '#F2B48F' }}>Perú</em> se sienta a la mesa
                </h2>
                <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgba(252,246,227,0.85)' }}>
                  Ceviche, lomo saltado, ají de gallina, tallarín saltado y papa a la
                  huancaína: la cocina peruana de la casa, plato a plato, en plena
                  avenida Oriente.
                </p>
                <ul className={`${mono.className} mt-6 flex flex-wrap justify-center md:justify-start gap-2`}>
                  {['ceviche', 'lomo saltado', 'ají de gallina', 'papa huancaína', 'tallarín saltado'].map((p) => (
                    <li key={p} className="text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(252,246,227,0.35)', color: C.cremaHi }}>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="light">Consultar el menú del día</Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HELADOS — cinta de fotos reales */}
        <section className="overflow-hidden py-16 md:py-24" style={{ backgroundColor: C.cremaHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="text-center max-w-xl mx-auto">
                <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.nogal }}>
                  La heladería de la casa
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                  Conos, vasos y copas, más frappuccino y café helado para la tarde.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center">
              {[
                { src: 'cono', alt: 'Cono de helado rosado en la mano, heladería Los Nogales' },
                { src: 'copas', alt: 'Copas de helado de varios sabores de Los Nogales' },
                { src: 'espresso', alt: 'Taza de espresso sobre fondo naranjo, Cafetería Los Nogales' },
                { src: 'vaso', alt: 'Vaso de café latte servido en Los Nogales' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={i * 80}>
                  <figure className={`overflow-hidden rounded-xl ${i % 2 ? 'md:-translate-y-4' : 'md:translate-y-4'}`} style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 10px 26px rgba(56,34,15,0.12)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/${f.src}.webp`} alt={f.alt} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CINTA — sello repetido */}
        <div className="overflow-hidden py-5 border-y" style={{ borderColor: C.line, backgroundColor: C.crema }} aria-hidden="true">
          <style>{`@keyframes ng-cinta{to{transform:translateX(-50%)}}`}</style>
          <div className={`${display.className} flex gap-10 whitespace-nowrap italic font-bold text-xl w-max`} style={{ color: C.nogal, animation: 'ng-cinta 28s linear infinite' }}>
            {[...SELLO_ITEMS, ...SELLO_ITEMS].map((s, i) => (
              <span key={i} className="flex items-center gap-10">
                {s}
                <span className={`${mono.className} not-italic text-xs`} style={{ color: C.naranjo }}>●</span>
              </span>
            ))}
          </div>
        </div>

        {/* RESEÑAS — cartas sobre la mesa */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>lo que dicen en la mesa</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight mt-4`} style={{ color: C.nogal }}>
                  «El mejor local de <em style={{ color: C.naranjo }}>San Rafael</em>»
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={4.4} color={C.naranjo} className="w-[18px] h-[18px]" />
                <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.rating} en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 90}>
                <figure className="rounded-2xl p-6 h-full flex flex-col" style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, boxShadow: '0 10px 26px rgba(56,34,15,0.08)' }}>
                  <Stars value={5} color={C.naranjo} className="w-4 h-4" />
                  <blockquote className={`${display.className} mt-4 text-lg leading-snug font-semibold flex-1`} style={{ color: C.nogal }}>
                    “{r.q}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="text-sm font-bold" style={{ color: C.nogal }}>{r.a}</p>
                    <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: C.muted }}>{r.m}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} mt-8 text-center text-[11px] tracking-[0.16em] uppercase`} style={{ color: C.muted }}>
              con zona de juegos para niños · estacionamiento gratis · buen ambiente para conversar
            </p>
          </Reveal>
        </section>

        {/* LLEGAR — mapa + dato real */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.cremaHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-12 items-center">
              <Reveal>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.nogal }}>
                  Dentro de la <em style={{ color: C.naranjo }}>Galería Gian Fu</em>
                </h2>
                <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                  Av. Oriente 2445, local 3
                  <br />
                  San Rafael, Región del Maule
                </address>
                <p className="mt-4 text-[15px] leading-relaxed max-w-sm" style={{ color: C.muted }}>
                  Dato de los clientes: el pin del mapa queda ~100 m al poniente — el
                  local está dentro de la galería comercial Gian Fu, sobre la avenida.
                </p>
                <p className={`${mono.className} mt-4 text-[11px] tracking-[0.16em] uppercase`} style={{ color: C.nogal }}>
                  L–V 8:00–20:00 · Sáb 9:30–20:00 · Dom 9:30–18:00
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Btn href={MAPS_URL} tone="solid">Abrir en Google Maps</Btn>
                  <Btn href={WA_LINK} tone="line">WhatsApp {BIZ.phoneDisplay}</Btn>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3]" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(56,34,15,0.16)' }}>
                    <LazyMap src={MAPS_EMBED} title="Mapa de Cafetería Los Nogales en San Rafael" />
                  </div>
                  <div className="absolute -bottom-7 -left-3 md:-left-6">
                    <Sello size={92} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA FINAL — la vitrina naranja */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#B33B0E' }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center relative">
            <Reveal>
              <div className="flex justify-center mb-6"><Sello size={88} ring={false} /></div>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-black leading-[1.02] tracking-tight`} style={{ color: C.cremaHi }}>
                El primer café o el último helado del día: por acá se pide
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: C.cremaHi }}>
                Carta del día, tortas por encargo y mesa con juegos para los niños: todo por el mismo WhatsApp.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="light">Escribir a Los Nogales</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.nogal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg font-bold`} style={{ color: C.cremaHi }}>{BIZ.name} · {BIZ.tagline}</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(252,246,227,0.6)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tap-44 inline-flex items-center" style={{ color: '#F2B48F' }}>
            @cafeterialosnogales
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
