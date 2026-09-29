import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({ src: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800' })
const body = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el invernadero» — la fachada de Cactú es verde menta con
 * un mural de cactus pintado y el logo es un cactus en una taza. La página se
 * compone como las ventanas arqueadas de un invernadero: fotos en arco, la
 * carta real con precios como pizarra de huerto y sello «vegana · pet friendly»
 * que su clientela repite en las reseñas.
 */
const C = {
  papel: '#F2F0E4',
  papelHi: '#FAF8EF',
  cactus: '#2E5A43',
  cactusOsc: '#1E3B2C',
  menta: '#8FBFA9',
  mentaClara: '#BFE0D0',
  mentaSuave: '#D9E8DC',
  arcilla: '#C16F4A',
  arcillaOsc: '#8F4E2B',
  cactusProf: '#122019',
  muted: 'rgba(30,59,44,0.72)',
  line: 'rgba(30,59,44,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cactu-cafe',
  title: 'Cactú Café — Cafetería de especialidad en Parral con opción vegana',
  description:
    'Café de especialidad, pastelería con línea vegana y mesa pet friendly en Av. Aníbal Pinto 715, Parral. Con sucursales Express Alameda y Retiro. 4,3 en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Las casas', href: '#casas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

/** Precios reales de su carta pública (queresto.com/cactucafe). */
const CARTA = [
  {
    g: 'Cafetería fuerte',
    nota: 'a base de café recién molido y agua',
    items: [
      { n: 'Espresso 30 ml', p: '$1.800' },
      { n: 'Doppio 60 ml', p: '$2.100' },
      { n: 'Lungo 60 ml', p: '$1.950' },
      { n: 'Americano / long black', p: '$2.300' },
      { n: 'Americano corto 120 ml', p: '$2.000' },
    ],
  },
  {
    g: 'Cafetería suave',
    nota: 'con leche texturizada o crema — hay alternativas vegetales',
    items: [
      { n: 'Capuccino 230 ml', p: 'desde $2.350' },
      { n: 'Flat white 200 ml', p: 'desde $2.500' },
      { n: 'Latte 350 ml', p: 'desde $2.600' },
      { n: 'Café vienés', p: '$2.400' },
      { n: 'Mockaccino 350 ml', p: '$2.700' },
      { n: 'Cortado 125 ml', p: '$2.200' },
    ],
  },
  {
    g: 'Dulce y pastelería',
    nota: 'incluye pastelería vegana, sin productos de origen animal',
    items: [
      { n: 'Mil hojas', p: '$3.300' },
      { n: 'Panqueques (naranja / chocolate)', p: '$3.200' },
      { n: 'Pie de limón', p: '$2.000' },
      { n: 'Marquisse brownie', p: '$2.200' },
      { n: 'Tarta vegana maracuyá', p: 'desde $2.500' },
      { n: 'Tarta vegana chocolate almendra', p: 'desde $2.000' },
      { n: 'Media luna', p: '$700' },
    ],
  },
  {
    g: 'Sándwichs y frío',
    nota: 'más té e infusiones, matcha, kombucha artesanal y bebidas frías',
    items: [
      { n: 'Bagel salmón', p: '$4.900' },
      { n: 'Bagel serrano', p: '$4.500' },
      { n: 'Crocata vegetariana', p: '$3.000' },
      { n: 'Sándwich vegano masa madre', p: '$2.700' },
      { n: 'Ave palta', p: '$2.300' },
      { n: 'Kombucha artesanal', p: '$2.000' },
    ],
  },
]

const SELLOS = [
  'café de especialidad',
  'pastelería vegana',
  'pet friendly',
  'wifi para trabajar',
  'terraza al aire libre',
  'helados y waffles',
]

const CASAS = [
  {
    t: 'Cactú Café Plaza',
    d: 'Av. Aníbal Pinto 715, Local 104, Edificio Gatica — la casa matriz en el centro de Parral.',
    tag: 'esta página',
    hi: true,
  },
  {
    t: 'Cactú Express Alameda',
    d: 'La sucursal express para el café al paso, abierta por la casa en Alameda.',
    tag: 'al paso',
    hi: false,
  },
  {
    t: 'Cactú Retiro',
    d: 'Av. Errázuriz 51, Retiro — la casa que cruzó la comuna vecina.',
    tag: 'comuna vecina',
    hi: false,
  },
]

const RESENAS = [
  {
    q: 'Mi lugar favorito desde el primer día. Cositas ricas para comer con opciones veganas y vegetarianas y el café maravilloso. Además son pets friendly y alimentan a los perritos de la calle.',
    a: 'Nicole Freire Bahamondes',
    m: 'reseña en Google',
  },
  {
    q: 'Los trabajadores son muy amorosos, la comida es exquisita, el ambiente del lugar es súper relajante. Tienen mucha variedad de cafés; por ejemplo el moca. Sin dudas lo recomiendo.',
    a: 'Cristobal Ignacio Vegas Soto',
    m: 'reseña en Google',
  },
]

const HORAS = [
  { d: 'Lunes a viernes', h: '8:30 – 20:30' },
  { d: 'Sábado', h: '10:00 – 14:00 · 16:00 – 20:30' },
  { d: 'Domingo', h: '16:00 – 20:30' },
]

/** Ventana de invernadero: foto en arco. */
function Arco({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <figure
      className={`overflow-hidden ${className}`}
      style={{ borderRadius: '999px 999px 18px 18px', border: `2px solid ${C.cactus}` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </figure>
  )
}

function Kicker({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] font-bold tracking-[0.26em] uppercase`}
      style={{ color: color ?? (light ? C.mentaClara : C.arcillaOsc) }}
    >
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light' | 'lineLight'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.cactus, color: C.papelHi }
      : tone === 'light'
        ? { backgroundColor: C.papelHi, color: C.cactusOsc }
        : tone === 'lineLight'
          ? { border: `1.5px solid ${C.papelHi}`, color: C.papelHi }
          : { border: `1.5px solid ${C.cactus}`, color: C.cactus }
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

/** Sello cactus del logo: aro verde con el cactus-taza real. */
function Sello({ size = 104 }: { size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0 overflow-hidden"
      style={{ width: size, height: size, backgroundColor: C.papelHi, border: `2px solid ${C.cactus}`, boxShadow: '0 10px 26px rgba(30,59,44,0.18)' }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${IMG}/logo.webp`} alt="" width={size} height={size} style={{ objectFit: 'cover' }} />
    </div>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.cactusOsc }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        theme={{ over: 'light', bar: 'rgba(242,240,228,0.94)', ink: C.cactusOsc, line: C.line, btnBg: C.cactus, btnInk: C.papelHi }}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — vitral de invernadero */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <Kicker>cafetería de especialidad · Parral</Kicker>
                <h1 className={`${display.className} font-bold leading-[0.98] text-[46px] sm:text-6xl lg:text-[74px] tracking-tight mt-5`} style={{ color: C.cactusOsc }}>
                  El café que floreció en{' '}
                  <span style={{ color: C.cactus }}>Aníbal&nbsp;Pinto</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Cactú es la cafetería del Edificio Gatica: café recién molido,
                  pastelería con línea vegana, mesa pet friendly y terraza para
                  quedarse un rato.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="solid">Pedir por WhatsApp</Btn>
                  <Btn href="#carta" tone="line" external={false}>Ver la carta</Btn>
                </div>
                <div className="mt-7 flex items-center gap-3 justify-center md:justify-start">
                  <Stars value={4.3} color={C.arcilla} className="w-[18px] h-[18px]" />
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                    {BIZ.rating} en Google
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative mx-auto max-w-md md:max-w-none">
                <div className="overflow-hidden" style={{ borderRadius: '999px 999px 22px 22px', border: `2.5px solid ${C.cactus}`, boxShadow: '0 18px 44px rgba(30,59,44,0.20)' }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Cactú Café en Av. Aníbal Pinto: marcos menta, mural de cactus y mesas de terraza"
                    width={1200}
                    height={800}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-2 md:-right-5">
                  <Sello size={96} />
                </div>
              </div>
            </Reveal>
          </div>
          {/* sellos */}
          <div className="max-w-6xl mx-auto px-5 md:px-8 mt-12">
            <Reveal>
              <div className="flex flex-wrap justify-center gap-2.5">
                {SELLOS.map((s) => (
                  <span key={s} className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full`} style={{ backgroundColor: C.mentaSuave, color: C.cactusOsc, border: `1px solid ${C.line}` }}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* LA CARTA — pizarra del invernadero con precios reales */}
        <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.cactusOsc }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <Kicker light>la carta de verdad</Kicker>
                  <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1.0] tracking-tight mt-4`} style={{ color: C.papelHi }}>
                    Precios de la casa, <span style={{ color: C.menta }}>sin letra chica</span>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(242,240,228,0.75)' }}>
                    Los precios de su carta pública en QueResto. La línea vegana
                    está marcada en verde menta.
                  </p>
                </div>
                <Btn href={BIZ.web} tone="light">Carta completa online</Btn>
              </div>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {CARTA.map((g, gi) => (
                <Reveal key={g.g} delay={gi * 70}>
                  <article className="h-full p-6 md:p-7" style={{ backgroundColor: 'rgba(242,240,228,0.06)', border: '1.5px solid rgba(242,240,228,0.2)', borderRadius: '28px 28px 16px 16px' }}>
                    <h3 className={`${display.className} text-2xl font-bold`} style={{ color: C.papelHi }}>{g.g}</h3>
                    <p className={`${mono.className} mt-1 text-[10px] tracking-[0.16em] uppercase`} style={{ color: C.menta }}>{g.nota}</p>
                    <ul className="mt-5 space-y-2.5">
                      {g.items.map((it) => {
                        const vegana = /vegana|vegano/i.test(it.n)
                        return (
                          <li key={it.n} className="flex items-baseline gap-3 text-[15px]">
                            <span style={{ color: vegana ? C.menta : C.papelHi }}>{it.n}</span>
                            <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: 'rgba(242,240,228,0.3)' }} aria-hidden="true" />
                            <span className={`${mono.className} text-sm whitespace-nowrap`} style={{ color: vegana ? C.menta : '#E8E4D4' }}>{it.p}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className={`${mono.className} mt-6 text-[10px] tracking-[0.16em] uppercase text-center`} style={{ color: 'rgba(242,240,228,0.55)' }}>
              precios referenciales de la carta pública · pueden variar según temporada
            </p>
          </div>
        </section>

        {/* MESA — ventanas arqueadas */}
        <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Kicker>dentro del invernadero</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1.0] tracking-tight mt-4`} style={{ color: C.cactusOsc }}>
                Café helado a la ventana, waffle con <span style={{ color: C.arcilla }}>frutillas</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-start">
            <Arco src={`${IMG}/mesa.webp`} alt="Mesa de Cactú con cafés, donut de chocolate, croissant y suculenta de centro" className="aspect-[3/4]" />
            <Arco src={`${IMG}/latte.webp`} alt="Latte art servido en la taza verde de Cactú" className="aspect-[3/4] lg:mt-10" />
            <Arco src={`${IMG}/ventana.webp`} alt="Café helado de Cactú a la ventana con plantas de fondo" className="aspect-[3/4]" />
            <Arco src={`${IMG}/choco.webp`} alt="Chococactu con malvaviscos y crema en taza azul" className="aspect-[3/4] lg:mt-10" />
          </div>
          <div className="mt-4 md:mt-5 grid grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto">
            <Arco src={`${IMG}/waffle.webp`} alt="Waffle Cactú con helado, frutillas, blueberries y salsa de chocolate" className="aspect-[3/4]" />
            <Arco src={`${IMG}/helado-soft.webp`} alt="Helado soft sirviéndose en el pocillo con logo de Cactú" className="aspect-[3/4] mt-6" />
            <Arco src={`${IMG}/donut.webp`} alt="Donut de chocolate de la vitrina de Cactú" className="aspect-[3/4]" />
          </div>
        </section>

        {/* LAS CASAS — tres cactus */}
        <section id="casas" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.mentaSuave }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <Kicker>una raíz, tres cactus</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1.0] tracking-tight mt-4`} style={{ color: C.cactusOsc }}>
                  Las casas de <span style={{ color: C.cactus }}>Cactú</span>
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {CASAS.map((c, i) => (
                <Reveal key={c.t} delay={i * 90}>
                  <article className="h-full p-6 md:p-7 rounded-[28px_28px_16px_16px]" style={{ backgroundColor: c.hi ? C.cactus : C.papelHi, border: `1.5px solid ${c.hi ? C.cactus : C.line}` }}>
                    <p className={`${mono.className} text-[10px] tracking-[0.22em] uppercase`} style={{ color: c.hi ? C.mentaClara : C.arcillaOsc }}>{c.tag}</p>
                    <h3 className={`${display.className} text-2xl font-bold mt-2`} style={{ color: c.hi ? C.papelHi : C.cactusOsc }}>{c.t}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed" style={{ color: c.hi ? 'rgba(242,240,228,0.82)' : C.muted }}>{c.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESEÑAS */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>lo que cuentan</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1.0] tracking-tight mt-4`} style={{ color: C.cactusOsc }}>
                  «Mi lugar favorito <span style={{ color: C.arcilla }}>desde el primer día</span>»
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={4.3} color={C.arcilla} className="w-[18px] h-[18px]" />
                <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.rating} · reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 90}>
                <figure className="h-full flex flex-col p-6 md:p-7 rounded-[24px_24px_14px_14px]" style={{ backgroundColor: C.papelHi, border: `1.5px solid ${C.line}` }}>
                  <Stars value={5} color={C.arcilla} className="w-4 h-4" />
                  <blockquote className="mt-4 text-[17px] leading-relaxed flex-1" style={{ color: C.cactusOsc }}>
                    “{r.q}”
                  </blockquote>
                  <figcaption className="mt-5 pt-4 border-t" style={{ borderColor: C.line }}>
                    <p className="text-sm font-bold">{r.a}</p>
                    <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: C.muted }}>{r.m}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <div className="h-full flex flex-col items-center justify-center text-center p-6 md:p-7 rounded-full" style={{ backgroundColor: C.menta, color: C.cactusOsc }}>
                <p className={`${display.className} text-5xl font-bold leading-none`}>{BIZ.rating}</p>
                <Stars value={4.3} color={C.cactusOsc} className="w-4 h-4 mt-2" />
                <p className={`${mono.className} mt-3 text-[10px] tracking-[0.18em] uppercase leading-relaxed`}>
                  reseñas en Google
                  <br />
                  vegana · pet friendly · terraza
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LLEGAR */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.cactusOsc }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div>
                <Kicker light>cómo llegar</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1.0] tracking-tight mt-4`} style={{ color: C.papelHi }}>
                  El local menta del <span style={{ color: C.menta }}>Edificio Gatica</span>
                </h2>
                <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: 'rgba(242,240,228,0.82)' }}>
                  Av. Aníbal Pinto 715, Local 104
                  <br />
                  Parral · Región del Maule
                </address>
                <dl className="mt-7">
                  {HORAS.map((h) => (
                    <div key={h.d} className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 py-3 border-b" style={{ borderColor: 'rgba(242,240,228,0.18)' }}>
                      <dt className="text-[15px]" style={{ color: 'rgba(242,240,228,0.75)' }}>{h.d}</dt>
                      <dd className={`${mono.className} text-sm text-right`} style={{ color: C.papelHi }}>{h.h}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Btn href={MAPS_URL} tone="light">Abrir en Google Maps</Btn>
                  <Btn href={WA_LINK} tone="lineLight">WhatsApp {BIZ.phoneDisplay}</Btn>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative">
                <div className="overflow-hidden" style={{ borderRadius: '999px 999px 22px 22px', border: `2.5px solid ${C.menta}` }}>
                  <div className="aspect-[4/3]">
                    <LazyMap src={MAPS_EMBED} title="Mapa de Cactú Café en Av. Aníbal Pinto, Parral" className="w-full h-full border-0" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-2 md:-left-5">
                  <Sello size={92} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: C.menta }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
            <Reveal>
              <Kicker color={C.cactusProf}>café ·{'\u00A0'}waffles{'\u00A0'}·{'\u00A0'}helados{'\u00A0'}·{'\u00A0'}vegano</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-bold leading-[1.0] tracking-tight mt-4`} style={{ color: C.cactusProf }}>
                El primer Cactú del día se pide por&nbsp;<span style={{ color: C.cactus }}>WhatsApp</span>
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'rgba(18,32,25,0.9)' }}>
                Consulta la carta del día, reserva la terraza o encarga la tarta
                vegana para el fin de semana.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="solid">Escribir a Cactú</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.cactusOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg font-bold`} style={{ color: C.papelHi }}>{BIZ.name} · {BIZ.category}</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(242,240,228,0.55)' }}>
            {BIZ.address}{'\u00A0'}·{'\u00A0'}{BIZ.city}
          </p>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-bold tap-44 inline-flex items-center" style={{ color: C.menta }}>
            {BIZ.igHandle}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
