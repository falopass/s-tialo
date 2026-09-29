import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({ src: '../../fonts/gloock/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })
const mono = localFont({ src: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' })

/**
 * Dirección de arte: «la terraza italiana». El local vive afuera y adentro:
 * un mural amarillo de sol, quitasoles tricolor en la vereda, el chef de
 * cerámica que saluda en la puerta y el rótulo «La Esquina Italiana».
 * La página respira como esa terraza — crema de mármol, verde oliva,
 * rojo salsa — y trata las fotos como postales con marbete.
 */
const C = {
  crema: '#F6EFE1',
  cremaHi: '#FBF6EA',
  ink: '#26190F',
  verde: '#3F5C36',
  rojo: '#A83F2B',
  sol: '#DEA02F',
  muted: 'rgba(38,25,15,0.70)',
  line: 'rgba(38,25,15,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'il-gourmet-italiano',
  title: 'Il Gourmet Italiano — Helados artesanales y cafetería en Cauquenes',
  description:
    'La esquina italiana de Cauquenes: helados artesanales, repostería, sándwiches y café en Antonio Varas 580. 4,6 en Google.',
  image: `${IMG}/terraza.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El día', href: '#eldia' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const VITRINA = [
  {
    img: 'sandwich',
    alt: 'Sándwich de Il Gourmet servido con capuchino sobre servilleta con el logo',
    t: 'Sándwiches y café de barra',
    d: 'Los sándwich que Gian recomienda «al 100%», con capuchino servido sobre la servilleta de la casa.',
    tag: 'salado',
  },
  {
    img: 'kuchen',
    alt: 'Porción de kuchen de frutos rojos junto a una bebida de la casa',
    t: 'Repostería del día',
    d: 'Kuchen, la famosa torta de naranja y la mil hojas que aparece en las reseñas.',
    tag: 'dulce',
  },
  {
    img: 'batido',
    alt: 'Copa de café helado con crema batida en Il Gourmet',
    t: 'Cafetería de copa',
    d: 'Cafés helados, batidos con crema y el chocolate caliente que recomienda Mario.',
    tag: 'de la barra',
  },
  {
    img: 'helado',
    alt: 'Cartel de vereda de Il Gourmet anunciando helados artesanales con un cono pintado',
    t: 'Helados artesanales',
    d: 'La carta italiana de la vereda: en cono o en copa, hasta las 20:00 todos los días.',
    tag: 'en cono o copa',
  },
]

const MOMENTOS = [
  { h: '08:00', t: 'Se abre la vitrina', d: 'Café de la mañana, jugos realmente naturales y la primera repostería del día.' },
  { h: 'mediodía', t: 'Sándwich de almuerzo', d: 'Pan del día, rellenos frescos y mesas adentro y en la terraza.' },
  { h: 'la once', t: 'Torta + chocolate', d: 'La combinación que la gente recomienda: torta de naranja con chocolate caliente.' },
  { h: 'hasta las 20:00', t: 'Helado de vereda', d: 'El cono artesanal de la tarde, con los quitasoles tricolor de la Antonio Varas.' },
]

const RESENAS = [
  {
    q: 'Buen lugar tranquilo, yo estuve con mi esposa. Buena atención, rico chocolate caliente, torta de naranja buenísima. 100 por 100 recomendable.',
    a: 'Mario Aguilera',
    m: 'reseña en Google',
  },
  {
    q: 'Excelente lugar, muy bonito y limpio. La atención muy buena y cordial. Los sándwich eran deliciosos y se empeñaron en atendernos muy bien.',
    a: 'Gian Marchi',
    m: 'reseña en Google',
  },
  {
    q: 'Súper buena la atención. Lo que pedí para comer estaba rico y fresco. Destaco el jugo, que era realmente natural.',
    a: 'Astrid Aquevedo',
    m: 'reseña en Google',
  },
]

const HORAS = [
  { d: 'Lunes a sábado', h: '08:00 – 20:00' },
  { d: 'Domingo', h: '12:00 – 20:00' },
]

function Kicker({ children, color = C.rojo }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] font-bold tracking-[0.3em] uppercase`} style={{ color }}>
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'paper'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.rojo, color: C.cremaHi }
      : tone === 'paper'
        ? { backgroundColor: C.cremaHi, color: C.ink }
        : { border: `1.5px solid ${C.ink}`, color: C.ink }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-bold tracking-wide rounded-full transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Franja tricolor de los quitasoles de la terraza. */
function Tricolor() {
  return (
    <div aria-hidden="true" className="flex h-2.5">
      <div className="flex-1" style={{ backgroundColor: C.verde }} />
      <div className="flex-1" style={{ backgroundColor: C.cremaHi }} />
      <div className="flex-1" style={{ backgroundColor: C.rojo }} />
    </div>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.crema, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className}`}
        theme={{ over: 'dark', bar: 'rgba(246,239,225,0.94)', ink: C.ink, line: C.line, btnBg: C.rojo, btnInk: C.cremaHi }}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — la terraza como portada */}
        <section id="inicio" className="relative">
          <div className="relative h-[86svh] min-h-[560px]">
            <Image
              src={`${IMG}/terraza.webp`}
              alt="Terraza de Il Gourmet Italiano con sombrillas y el mural amarillo pintado con su logo"
              fill
              className="object-cover"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(38,25,15,0.25) 0%, rgba(38,25,15,0.05) 40%, rgba(38,25,15,0.82) 100%)' }}
            />
            <div className="absolute inset-x-0 bottom-0">
              <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
                <Reveal>
                  <Kicker color="#F2C76A">cafetería · helados · Antonio Varas 580</Kicker>
                  <h1 className={`${display.className} mt-4 text-[46px] sm:text-7xl lg:text-[92px] leading-[0.95] text-white max-w-3xl`}>
                    La esquina italiana de Cauquenes
                  </h1>
                  <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-xl text-white/85">
                    Helados artesanales, torta de naranja, sándwiches y café servido
                    bajo los quitasoles tricolor — a pasos de la plaza.
                  </p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Btn href={WA_LINK} tone="solid">Pedir por WhatsApp</Btn>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-bold rounded-full border-[1.5px] border-white/70 text-white transition-transform active:scale-[0.97] tap-44"
                    >
                      Cómo llegar
                    </a>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <Stars value={4.6} color="#F2C76A" className="w-[18px] h-[18px]" />
                    <span className={`${mono.className} text-[11px] tracking-[0.16em] uppercase text-white/80`}>
                      {BIZ.rating} en Google · {BIZ.reviews} reseñas
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <Tricolor />
        </section>

        {/* SELLO + datos de la casa */}
        <section className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo circular de Il Gourmet Italiano"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                style={{ boxShadow: `0 0 0 3px ${C.crema}, 0 0 0 5px ${C.verde}` }}
              />
              <div>
                <p className={`${display.className} text-xl leading-tight`}>Il Gourmet Italiano</p>
                <p className={`${mono.className} text-[11px] tracking-[0.14em] uppercase mt-1`} style={{ color: C.muted }}>
                  {BIZ.category}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 md:ml-auto">
              {[
                ['dirección', 'Antonio Varas 580'],
                ['horario', 'L–S 08–20 · dom 12–20'],
                ['teléfono', BIZ.phoneDisplay],
              ].map(([k, v]) => (
                <p key={k} className={`${mono.className} text-[11px] leading-relaxed uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                  <span style={{ color: C.verde }}>{k}</span>
                  <br />
                  <span className="normal-case tracking-normal text-sm font-semibold" style={{ color: C.ink }}>{v}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* LA VITRINA — postales con marbete */}
        <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.verde }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <Kicker color="#F2C76A">de la vitrina</Kicker>
                  <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] mt-4`} style={{ color: C.cremaHi }}>
                    Lo que se ve desde la vereda
                  </h2>
                </div>
                <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase`} style={{ color: 'rgba(246,239,225,0.6)' }}>
                  fotos reales del local
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {VITRINA.map((v, i) => (
                <Reveal key={v.img} delay={i * 80}>
                  <figure className="h-full flex flex-col p-3 pb-5 rounded-[4px]" style={{ backgroundColor: C.cremaHi, boxShadow: '0 10px 24px rgba(0,0,0,0.28)' }}>
                    <div className="overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/${v.img}.webp`} alt={v.alt} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                    </div>
                    <figcaption className="pt-4 flex-1 flex flex-col">
                      <span className={`${mono.className} self-start text-[10px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-full`} style={{ backgroundColor: C.sol, color: C.ink }}>
                        {v.tag}
                      </span>
                      <h3 className={`${display.className} text-[22px] leading-snug mt-3`} style={{ color: C.ink }}>{v.t}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>{v.d}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EL DÍA — la jornada de la esquina */}
        <section id="eldia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker>de las 8 a las 20</Kicker>
            <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] mt-4 max-w-2xl`}>
              Un día en la esquina de la Antonio&nbsp;Varas
            </h2>
          </Reveal>
          <div className="mt-10">
            {MOMENTOS.map((m, i) => (
              <Reveal key={m.h} delay={i * 70}>
                <article className="grid sm:grid-cols-[150px_220px_1fr] gap-2 sm:gap-8 items-baseline py-6 border-b" style={{ borderColor: C.line }}>
                  <p className={`${mono.className} text-[13px] font-bold tracking-[0.14em] uppercase`} style={{ color: C.rojo }}>{m.h}</p>
                  <h3 className={`${display.className} text-2xl`}>{m.t}</h3>
                  <p className="text-[15px] leading-relaxed max-w-lg" style={{ color: C.muted }}>{m.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PERSONAJES — mural, chef y cartel de vereda */}
        <section style={{ backgroundColor: C.cremaHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <Kicker>personajes del local</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] mt-4`}>
                  El mural, el chef y la carta de la calle
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-start">
              <Reveal delay={0} className="col-span-2 md:col-span-1">
                <figure>
                  <div className="overflow-hidden rounded-[4px]" style={{ border: `1.5px solid ${C.line}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/esquina.webp`} alt="Mural interior de Il Gourmet con la frase La Esquina Italiana" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.muted }}>
                    el mural — «la esquina italiana»
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={90}>
                <figure>
                  <div className="overflow-hidden rounded-[4px]" style={{ border: `1.5px solid ${C.line}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/chef.webp`} alt="Estatua del chef de Il Gourmet saludando en la entrada del local" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.muted }}>
                    el chef que recibe en la puerta
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={180}>
                <figure>
                  <div className="overflow-hidden rounded-[4px]" style={{ border: `1.5px solid ${C.line}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/interior.webp`} alt="Interior de Il Gourmet con mesas de mármol y la pared con el logo circular" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.muted }}>
                    adentro, mesas de mármol
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RESEÑAS */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>lo que cuentan</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] mt-4`}>
                  «100 por 100 recomendable»
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={4.6} color={C.rojo} className="w-[18px] h-[18px]" />
                <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 90}>
                <figure className="h-full flex flex-col p-7 rounded-[4px]" style={{ backgroundColor: C.cremaHi, border: `1.5px solid ${C.line}`, borderTop: `4px solid ${i === 1 ? C.verde : i === 2 ? C.rojo : C.sol}` }}>
                  <Stars value={5} color={C.sol} className="w-4 h-4" />
                  <blockquote className="mt-5 text-[17px] leading-relaxed flex-1">
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
        </section>

        {/* LLEGAR */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.verde }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <div className="overflow-hidden rounded-[4px]" style={{ border: '3px solid rgba(246,239,225,0.9)', boxShadow: '0 14px 30px rgba(0,0,0,0.3)' }}>
                <div className="aspect-[4/3]">
                  <LazyMap src={MAPS_EMBED} title="Mapa de Il Gourmet Italiano en Antonio Varas 580, Cauquenes" />
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="paper">Abrir en Google Maps</Btn>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-bold rounded-full border-[1.5px] border-[#F6EFE1]/70 transition-transform active:scale-[0.97] tap-44"
                  style={{ color: C.cremaHi }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <Kicker color="#F2C76A">cómo llegar</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] mt-4`} style={{ color: C.cremaHi }}>
                  La terraza está en la Antonio&nbsp;Varas
                </h2>
                <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: 'rgba(246,239,225,0.8)' }}>
                  Antonio Varas 580
                  <br />
                  Cauquenes · Región del Maule
                </address>
                <dl className="mt-7 border-t" style={{ borderColor: 'rgba(246,239,225,0.25)' }}>
                  {HORAS.map((h) => (
                    <div key={h.d} className="flex justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(246,239,225,0.25)' }}>
                      <dt className="text-[15px]" style={{ color: 'rgba(246,239,225,0.75)' }}>{h.d}</dt>
                      <dd className={`${mono.className} text-sm text-right`} style={{ color: C.cremaHi }}>{h.h}</dd>
                    </div>
                  ))}
                </dl>
                <p className={`${mono.className} mt-6 text-[11px] tracking-[0.16em] uppercase`} style={{ color: 'rgba(246,239,225,0.6)' }}>
                  {BIZ.igHandle} · el día a día en Instagram
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: C.sol }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
            <Reveal>
              <Kicker>pedidos · reservas · tortas</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] mt-4`}>
                El cono de la tarde se pide caminando; la torta, por WhatsApp
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'rgba(38,25,15,0.78)' }}>
                Encarga la torta del fin de semana o pregunta qué salió hoy de la vitrina.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="solid">Escribir a Il Gourmet</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg`} style={{ color: C.cremaHi }}>{BIZ.name} · Cauquenes</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(246,239,225,0.55)' }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-bold tap-44 inline-flex items-center" style={{ color: '#F2C76A' }}>
            {BIZ.igHandle}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
