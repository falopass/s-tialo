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
const body = localFont({ src: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

/**
 * Dirección de arte: «el recetario de la casa». Sabores es un negocio
 * familiar de tortas por encargo y cafetería de barrio: su cartel de madera,
 * la pizarra de la vereda y las rodajas grabadas con el logo mandan la idea.
 * Papel crema, chocolate de la masa y miel de la espiga del logo; cada bloque
 * es una tarjeta de receta con borde punteado.
 */
const C = {
  papel: '#F6EFE2',
  papelHi: '#FCF8EF',
  masa: '#3B2416',
  chocolate: '#5A3A22',
  miel: '#B98A3B',
  rosa: '#C97E6D',
  muted: 'rgba(59,36,22,0.68)',
  line: 'rgba(59,36,22,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'sabores-tradicional-casero',
  title: 'Sabores Tradicional y Casero — Pastelería y cafetería en Cauquenes',
  description:
    'Tortas por encargo, kuchen, pan amasado y café en Balmaceda 325, Cauquenes. Pastelería familiar con despacho a domicilio. 4,8 en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Tortas por encargo', href: '#encargo' },
  { label: 'Llegar', href: '#llegar' },
]

const LETRERO = [
  'Variedad de tortas',
  'Coctelería dulce y salada',
  'Roscas y dulces chilenos',
  'Pan amasado',
  'Empanadas',
  'Pasteles · Jugos · Café',
]

const VITRINA = [
  {
    img: 'kuchen',
    alt: 'Kuchen de nuez de Sabores servido junto a una espiga de trigo',
    t: 'Kuchen de la casa',
    d: 'El de nuez sale en la vitrina junto a la espiga de trigo del logo.',
  },
  {
    img: 'torta',
    alt: 'Torta de frambuesas de Sabores vista desde arriba, con crema y fruta fresca',
    t: 'Tortas con fruta de verdad',
    d: 'Bizcocho, crema y frambuesas frescas — la que se lleva entera para la casa.',
  },
  {
    img: 'mesa',
    alt: 'Quequitos artesanales de Sabores junto a una regadera decorativa',
    t: 'Quequitos y bollería',
    d: 'Los mini quequitos de la vitrina para la once o para llevar.',
  },
  {
    img: 'tabla',
    alt: 'Trozo de torta servido sobre la rodaja de madera grabada de Sabores Tradicional y Casero',
    t: 'Servido en la rodaja',
    d: 'El trozo llega a la mesa en la rodaja de madera grabada con el nombre de la casa.',
  },
]

const PIZARRA = [
  { t: 'Espresso', p: '$1.000' },
  { t: 'Italiano', p: '$1.200' },
  { t: 'Cappuccino', p: '$1.800' },
  { t: 'Café helado', p: '$2.000' },
]

const RESENAS = [
  {
    q: 'Excelente atención, exquisitas las tortas, cheesecake, pasteles y para qué decir del café, muy bueno. Súper responsables en la entrega de los pedidos. Además tienen de todos los insumos para pastelería.',
    a: 'Marco Chavez',
    m: 'reseña en Google',
  },
  {
    q: 'Productos de calidad, muy exquisitos y la atención es muy buena. El lugar es muy acogedor.',
    a: 'Alicia Lopez',
    m: 'reseña en Google',
  },
  {
    q: 'Agradable lugar, cositas dulces y café muy buenos.',
    a: 'Guillermina Mora',
    m: 'reseña en Google',
  },
]

const HORAS = [
  { d: 'Lunes a viernes', h: '08:00 – 20:00' },
  { d: 'Sábado', h: '10:00 – 16:00' },
  { d: 'Domingo', h: 'cerrado' },
]

function Kicker({ children, color = C.miel }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] tracking-[0.3em] uppercase`} style={{ color }}>
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'paper'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.masa, color: C.papelHi }
      : tone === 'paper'
        ? { backgroundColor: C.papelHi, color: C.masa }
        : { border: `1.5px dashed ${C.chocolate}`, color: C.chocolate }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-bold rounded-xl transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.masa }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} italic font-semibold`}
        theme={{ over: 'light', bar: 'rgba(246,239,226,0.94)', ink: C.masa, line: C.line, btnBg: C.masa, btnInk: C.papelHi }}
        ctaLabel="Encargar torta"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — postal de la fachada sobre papel */}
        <section id="inicio" className="pt-24 md:pt-32 pb-14 md:pb-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="text-center md:text-left">
                <Kicker>pastelería · cafetería · Cauquenes</Kicker>
                <h1 className={`${display.className} mt-4 text-[42px] sm:text-6xl lg:text-[68px] font-semibold leading-[1.0]`}>
                  La pastelería de la familia, en{' '}
                  <em style={{ color: C.miel }}>Balmaceda</em>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Tortas por encargo, kuchen, pan amasado y café servido en rodaja
                  de madera — el local de Balmaceda 325 que nació de los bizcochos
                  caseros de Marisel.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="solid">Encargar una torta</Btn>
                  <Btn href="#vitrina" tone="line" external={false}>Ver la vitrina</Btn>
                </div>
                <div className="mt-7 flex items-center gap-3 justify-center md:justify-start">
                  <Stars value={4.8} color={C.miel} className="w-[18px] h-[18px]" />
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                    {BIZ.rating} en Google · {BIZ.reviews} reseñas
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <figure className="relative rotate-[1.5deg]">
                <div className="p-3 pb-12 rounded-lg" style={{ backgroundColor: C.papelHi, boxShadow: '0 18px 40px rgba(59,36,22,0.18)', border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Sabores Tradicional y Casero con su letrero de madera y la pizarra del café en la vereda"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded"
                    priority
                  />
                  <figcaption className={`${display.className} italic absolute bottom-3 left-0 right-0 text-center text-[17px]`} style={{ color: C.chocolate }}>
                    Balmaceda 325, local 5 — el de la pizarra en la vereda
                  </figcaption>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo de Sabores Tradicional y Casero: corona de espigas con el nombre de la casa"
                  className="absolute -top-7 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-full -rotate-6"
                  style={{ boxShadow: '0 8px 20px rgba(59,36,22,0.25)', border: `3px solid ${C.papelHi}` }}
                />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* EL LETRERO — servicios del cartel de madera */}
        <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.papelHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
            <Reveal>
              <p className={`${mono.className} text-[10px] tracking-[0.24em] uppercase text-center mb-5`} style={{ color: C.muted }}>
                lo que dice el letrero de madera de la entrada
              </p>
              <ul className="flex flex-wrap justify-center gap-x-3 gap-y-3">
                {LETRERO.map((s) => (
                  <li
                    key={s}
                    className={`${display.className} text-[15px] md:text-base italic px-4 py-1.5 rounded-full`}
                    style={{ border: `1.5px dashed ${C.miel}`, color: C.chocolate }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* DE LA VITRINA — tarjetas de receta */}
        <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>recién salidas</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-[1.02] mt-4`}>
                  Lo que hay hoy en la vitrina
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
                fotos reales del local
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {VITRINA.map((v, i) => (
              <Reveal key={v.img} delay={i * 80}>
                <figure className="h-full flex flex-col rounded-xl overflow-hidden" style={{ backgroundColor: C.papelHi, border: `1.5px dashed ${C.miel}`, boxShadow: '0 10px 24px rgba(59,36,22,0.10)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/${v.img}.webp`} alt={v.alt} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                  <figcaption className="p-5 flex-1 flex flex-col">
                    <span className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.miel }}>
                      receta n.º {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`${display.className} text-xl font-semibold mt-2`}>{v.t}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>{v.d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LA PIZARRA — precios reales del cartel */}
        <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.masa }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <figure>
                <div className="overflow-hidden rounded-xl" style={{ border: '3px solid rgba(246,239,226,0.85)', boxShadow: '0 14px 30px rgba(0,0,0,0.35)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/vitrina.webp`}
                    alt="Vitrina de Sabores atendida por su dueña, con tortas y pasteles del día"
                    className="w-full aspect-[16/9] object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(246,239,226,0.6)' }}>
                  la vitrina, atendida por la casa
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={110}>
              <div>
                <Kicker>la hora del café</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-[1.02] mt-4`} style={{ color: C.papelHi }}>
                  La pizarra de la vereda
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(246,239,226,0.75)' }}>
                  Los precios que se leen en el cartel de la puerta — café de
                  barrio, como debe ser.
                </p>
                <dl className="mt-6 rounded-xl overflow-hidden" style={{ border: '1.5px dashed rgba(246,239,226,0.4)' }}>
                  {PIZARRA.map((p, i) => (
                    <div
                      key={p.t}
                      className="flex items-baseline justify-between gap-4 px-5 py-3.5"
                      style={{ backgroundColor: i % 2 ? 'rgba(246,239,226,0.05)' : 'transparent' }}
                    >
                      <dt className={`${display.className} text-lg italic`} style={{ color: C.papelHi }}>{p.t}</dt>
                      <dd className={`${mono.className} text-base font-semibold`} style={{ color: C.miel }}>{p.p}</dd>
                    </div>
                  ))}
                </dl>
                <p className={`${mono.className} mt-4 text-[10px] tracking-[0.18em] uppercase`} style={{ color: 'rgba(246,239,226,0.55)' }}>
                  precios del cartel de la vereda · pueden variar
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TORTAS POR ENCARGO */}
        <section id="encargo" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
                <figure className="overflow-hidden rounded-xl" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 14px 30px rgba(59,36,22,0.15)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/pedidos.webp`}
                    alt="Torta temática de Sonic encargada a Sabores para un cumpleaños"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className="flex flex-col gap-4 w-24 md:w-28">
                  <figure className="overflow-hidden rounded-lg" style={{ border: `1.5px solid ${C.line}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/mesa.webp`} alt="Quequitos de Sabores decorados para la vitrina" className="w-full aspect-square object-cover" loading="lazy" />
                  </figure>
                  <figure className="overflow-hidden rounded-lg" style={{ border: `1.5px solid ${C.line}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/interior.webp`} alt="Interior de la cafetería Sabores con la barra con el logo" className="w-full aspect-square object-cover" loading="lazy" />
                  </figure>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <Kicker>cumpleaños · bautizos · aniversarios</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-[1.02] mt-4`}>
                  La torta de la foto se encarga por WhatsApp
                </h2>
                <p className="mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                  Sonic, el Colo-Colo, princesas o la temática que pida la casa:
                  en Facebook se ve el trabajo por encargo de cada semana, con
                  despacho dentro de Cauquenes.
                </p>
                <ol className="mt-7 space-y-4">
                  {[
                    ['1', 'Mandas la idea', 'una foto o el tema del cumpleaños alcanza'],
                    ['2', 'Se agenda el día', 'la casa confirma y anota tu pedido'],
                    ['3', 'Retiras o llega a tu puerta', 'pastelería a domicilio en Cauquenes'],
                  ].map(([n, t, d]) => (
                    <li key={n} className="flex gap-4 items-start">
                      <span className={`${display.className} shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base font-bold`} style={{ backgroundColor: C.masa, color: C.papelHi }}>
                        {n}
                      </span>
                      <div>
                        <p className="font-bold text-[16px]">{t}</p>
                        <p className="text-[14px]" style={{ color: C.muted }}>{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8">
                  <Btn href={WA_LINK} tone="solid">Encargar mi torta</Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RESEÑAS */}
        <section className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.papelHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <Kicker>lo que cuentan</Kicker>
                  <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-[1.02] mt-4`}>
                    «Súper responsables en la entrega de los pedidos»
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <Stars value={4.8} color={C.miel} className="w-[18px] h-[18px]" />
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </span>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 90}>
                  <figure className="h-full flex flex-col p-7 rounded-xl" style={{ backgroundColor: C.papel, border: `1.5px dashed ${C.miel}` }}>
                    <Stars value={5} color={C.miel} className="w-4 h-4" />
                    <blockquote className={`${display.className} mt-5 text-lg leading-snug italic flex-1`}>
                      “{r.q}”
                    </blockquote>
                    <figcaption className="mt-6 pt-4 border-t" style={{ borderColor: C.line }}>
                      <p className="text-sm font-bold">{r.a}</p>
                      <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: C.muted }}>{r.m}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LLEGAR */}
        <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <div>
                <Kicker>cómo llegar</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-[1.02] mt-4`}>
                  El local 5 de Balmaceda&nbsp;325
                </h2>
                <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                  Balmaceda 325, local 5
                  <br />
                  Cauquenes · Región del Maule
                </address>
                <dl className="mt-7 border-t" style={{ borderColor: C.line }}>
                  {HORAS.map((h) => (
                    <div key={h.d} className="flex justify-between gap-4 py-3 border-b" style={{ borderColor: C.line }}>
                      <dt className="text-[15px]" style={{ color: C.muted }}>{h.d}</dt>
                      <dd className={`${mono.className} text-sm text-right`} style={{ color: h.h === 'cerrado' ? C.rosa : C.masa }}>{h.h}</dd>
                    </div>
                  ))}
                </dl>
                <p className={`${mono.className} mt-6 text-[11px] tracking-[0.16em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.fbHandle} · los encargos de la semana en Facebook
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-xl" style={{ border: `2px solid ${C.masa}`, boxShadow: '8px 8px 0 rgba(185,138,59,0.5)' }}>
                <div className="aspect-[4/3]">
                  <LazyMap src={MAPS_EMBED} title="Mapa de Sabores Tradicional y Casero en Balmaceda 325, Cauquenes" />
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="solid">Abrir en Google Maps</Btn>
                <Btn href={WA_LINK} tone="line">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: C.miel }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
            <Reveal>
              <Kicker color={C.masa}>encargos · coctelería · once</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-[1.02] mt-4`} style={{ color: C.masa }}>
                El próximo cumpleaños se celebra con torta de Sabores
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'rgba(59,36,22,0.8)' }}>
                Escríbeles con la fecha y la idea — del resto se encarga la cocina.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="solid">Escribir a Sabores</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.masa }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg italic`} style={{ color: C.papelHi }}>{BIZ.name} · Cauquenes</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(246,239,226,0.55)' }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
          <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-bold tap-44 inline-flex items-center" style={{ color: C.miel }}>
            {BIZ.fbHandle}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
