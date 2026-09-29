import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({ src: '../../fonts/gloock/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la casa de adobe» — Casa Café es una casona de adobe
 * cubierta de hiedra al borde de la Comalle, con prado, perro y terraza donde
 * cae la banda los fines de semana. La página se lee como la pintada de un
 * galpón de campo: verde hiedra profundo, teja, crema de papel mural y la
 * agenda de noches en vivo como afiches pegados.
 */
const C = {
  papel: '#F2ECDD',
  papelHi: '#FAF6EA',
  hiedra: '#22341F',
  hiedraOsc: '#17240F',
  teja: '#B4552D',
  arcilla: '#C89B6A',
  muted: 'rgba(34,52,31,0.72)',
  line: 'rgba(34,52,31,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'casa-cafe-teno',
  title: 'Casa Café Teno — Café restaurante con terraza y música en vivo',
  description:
    'La casa de adobe cubierta de hiedra en Av. Comalle 102, Teno: chorrillanas, sándwichs, terraza y noches de música en vivo.',
  image: `${IMG}/casa.webp`,
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'Las noches', href: '#noches' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const MESA = [
  { t: 'Chorrillanas', d: 'El plato que abre las reseñas: papas, carne, cebolla y huevo frito para el centro de la mesa.' },
  { t: 'Sándwichs', d: 'Los que piden al paso en la Comalle, para el almuerzo o la once.' },
  { t: 'Tablas y pebre', d: 'Pan amasado, pebre y salsas para acompañar el shop de la tarde.' },
  { t: 'Cafetería y dulces', d: 'Café, dulces y repostería para bajar la comida en la terraza.' },
]

const NOCHES = [
  { img: 'afiche', alt: 'Afiche real de Casa Café Teno: Los Queltehues en vivo, Fiestas Patrias', t: 'Fiestas Patrias con Los Queltehues', d: 'El 18 en la casa: comida, terraza y cueca en vivo.' },
  { img: 'noche', alt: 'Banda tocando en el escenario techado de la terraza de Casa Café Teno', t: 'Noches temáticas', d: 'De la noche árabe a los clásicos en español: la agenda cambia por temporada.' },
  { img: 'escenario', alt: 'Escenario de la terraza de Casa Café Teno iluminado antes del show', t: 'Escenario en la terraza', d: 'Shows los fines de semana; la cartelera sale por Instagram.' },
]

const RESENAS = [
  {
    q: 'Muy buenas las chorrillanas y sándwich. La atención es buenísima y la terraza es muy bonita.',
    a: 'Ninfa',
    m: 'reseña en Google',
  },
  {
    q: 'Muy buena la comida y la atención.',
    a: 'José Luis Barrera',
    m: 'reseña en Google',
  },
]

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] font-semibold tracking-[0.28em] uppercase`}
      style={{ color: light ? C.arcilla : C.teja }}
    >
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.teja, color: C.papelHi }
      : tone === 'light'
        ? { backgroundColor: C.papelHi, color: C.hiedra }
        : { border: `1.5px solid ${C.hiedra}`, color: C.hiedra }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] text-[15px] font-semibold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.hiedra }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className}`}
        theme={{ over: 'dark', bar: 'rgba(34,52,31,0.92)', ink: C.papel, line: 'rgba(242,236,221,0.2)', btnBg: C.teja, btnInk: C.papelHi }}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — la casa con hiedra a la derecha, pintada a la izquierda */}
        <section className="relative" style={{ backgroundColor: C.hiedra }}>
          <div className="grid md:grid-cols-[1.05fr_0.95fr] min-h-[88dvh]">
            <div className="flex items-center order-2 md:order-1">
              <div className="w-full max-w-xl mx-auto md:mx-0 md:ml-auto px-5 md:px-10 py-14 md:py-20">
                <Reveal>
                  <Kicker light>café restaurante · Teno</Kicker>
                  <h1 className={`${display.className} leading-[1.0] text-[42px] sm:text-6xl lg:text-[72px] tracking-tight mt-4`} style={{ color: C.papelHi }}>
                    La casa de adobe donde Teno se junta a comer
                  </h1>
                  <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgba(250,246,234,0.88)' }}>
                    En Av. Comalle 102: chorrillanas para el centro de la mesa,
                    terraza con prado y noches de música en vivo.
                  </p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Btn href={WA_LINK} tone="solid">Reservar por WhatsApp</Btn>
                    <Btn href={BIZ.instagram} tone="light">Ver la agenda en Instagram</Btn>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <Stars value={4.2} color={C.arcilla} className="w-[18px] h-[18px]" />
                    <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: 'rgba(250,246,234,0.75)' }}>
                      {BIZ.rating} en Google
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="relative order-1 md:order-2 min-h-[52dvh] md:min-h-0">
              <Image
                src={`${IMG}/casa.webp`}
                alt="Casa Café Teno: casona de adobe cubierta de hiedra con prado y terraza"
                fill
                sizes="(min-width: 768px) 46vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(180deg, rgba(23,36,15,0.05) 60%, rgba(34,52,31,0.55) 100%)' }} aria-hidden="true" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-[4px] px-3 py-2" style={{ backgroundColor: 'rgba(23,36,15,0.82)', border: `1px solid rgba(242,236,221,0.35)` }}>
                <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.papel }}>
                  la casa · av. comalle 102
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PINTADA — datos de la casa */}
        <div className="border-y-2" style={{ borderColor: C.hiedra, backgroundColor: C.hiedra }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2">
            {['Av. Comalle 102, Teno', 'terraza con prado', 'música en vivo', 'reservas por WhatsApp'].map((t) => (
              <p key={t} className={`${mono.className} text-[11px] md:text-xs tracking-[0.18em] uppercase`} style={{ color: C.papel }}>
                <span style={{ color: C.arcilla }}>◆</span>&nbsp;&nbsp;{t}
              </p>
            ))}
          </div>
        </div>

        {/* LA MESA — platos de casa de campo */}
        <section id="mesa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <div>
                <Kicker>la mesa</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] tracking-tight mt-4`}>
                  Comida de porción <span style={{ color: C.teja }}>generosa</span>
                </h2>
                <div className="mt-8 space-y-0">
                  {MESA.map((m, i) => (
                    <div key={m.t} className="py-5 border-t last:border-b flex gap-5 items-baseline" style={{ borderColor: C.line }}>
                      <span className={`${mono.className} text-xs font-semibold shrink-0 w-7`} style={{ color: C.teja }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className={`${display.className} text-2xl`}>{m.t}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed" style={{ color: C.muted }}>{m.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <figure className="overflow-hidden rounded-[4px]" style={{ border: `2px solid ${C.hiedra}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/chorrillana.webp`}
                    alt="Chorrillana de Casa Café Teno con huevo frito, carne y papas fritas en la terraza"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                </figure>
                <figure className="absolute -bottom-8 -left-3 md:-left-8 w-[42%] overflow-hidden rounded-[4px] rotate-[-3deg]" style={{ border: `2px solid ${C.hiedra}`, boxShadow: '0 14px 34px rgba(23,36,15,0.3)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/terraza.webp`}
                    alt="Mesa de terraza en Casa Café Teno con shop, papas rústicas y pebre"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </figure>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LAS NOCHES — cartelera de la terraza */}
        <section id="noches" className="scroll-mt-20" style={{ backgroundColor: C.hiedraOsc }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <Kicker light>la cartelera</Kicker>
                  <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] tracking-tight mt-4`} style={{ color: C.papelHi }}>
                    Cuando cae el sol, toca la <span style={{ color: C.arcilla }}>banda</span>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(242,236,221,0.72)' }}>
                    Los fines de semana la terraza se convierte en escenario:
                    Fiestas Patrias con Los Queltehues, noches árabes y shows
                    que la casa anuncia en Instagram.
                  </p>
                </div>
                <Btn href={BIZ.instagram} tone="light">Cartelera en Instagram</Btn>
              </div>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-3 gap-5">
              {NOCHES.map((n, i) => (
                <Reveal key={n.img} delay={i * 90}>
                  <figure className="h-full flex flex-col" style={{ backgroundColor: 'rgba(242,236,221,0.05)', border: '1.5px solid rgba(242,236,221,0.18)' }}>
                    <div className="overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/${n.img}.webp`} alt={n.alt} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                    </div>
                    <figcaption className="p-5">
                      <h3 className={`${display.className} text-xl`} style={{ color: C.papelHi }}>{n.t}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'rgba(242,236,221,0.68)' }}>{n.d}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className={`${mono.className} mt-8 text-[10px] tracking-[0.2em] uppercase text-center`} style={{ color: 'rgba(242,236,221,0.5)' }}>
              afiches y videos reales de las noches publicadas por la casa
            </p>
          </div>
        </section>

        {/* RESEÑAS — el cuaderno del prado */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>lo que cuentan</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] tracking-tight mt-4`}>
                  «La atención es buenísima y la <span style={{ color: C.teja }}>terraza es muy bonita</span>»
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={4.2} color={C.teja} className="w-[18px] h-[18px]" />
                <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.rating} · reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 90}>
                <figure className="h-full flex flex-col p-7 rounded-[4px]" style={{ backgroundColor: C.papelHi, border: `1.5px solid ${C.line}` }}>
                  <Stars value={5} color={C.teja} className="w-4 h-4" />
                  <blockquote className={`${display.className} mt-5 text-xl leading-snug flex-1`}>
                    “{r.q}”
                  </blockquote>
                  <figcaption className="mt-6 pt-4 border-t" style={{ borderColor: C.line }}>
                    <p className="text-sm font-semibold">{r.a}</p>
                    <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: C.muted }}>{r.m}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <div className="h-full p-7 rounded-[4px] flex flex-col justify-between" style={{ backgroundColor: C.hiedra, color: C.papel }}>
                <div>
                  <p className={`${mono.className} text-[10px] tracking-[0.24em] uppercase`} style={{ color: C.arcilla }}>la casa en números</p>
                  <p className={`${display.className} text-6xl mt-4`}>{BIZ.rating}</p>
                  <Stars value={4.2} color={C.arcilla} className="w-4 h-4 mt-2" />
                </div>
                <p className="mt-6 text-[15px] leading-relaxed" style={{ color: 'rgba(242,236,221,0.8)' }}>
                  En las reseñas de Google, la terraza y las chorrillanas son lo que más se repite.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LLEGAR — mapa + datos */}
        <section id="llegar" className="scroll-mt-20 border-t-2" style={{ borderColor: C.hiedra, backgroundColor: C.papelHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <div>
                <Kicker>cómo llegar</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.02] tracking-tight mt-4`}>
                  Por la Comalle, casa <span style={{ color: C.teja }}>n°102</span>
                </h2>
                <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                  Av. Comalle 102
                  <br />
                  Teno · Provincia de Curicó, Maule
                </address>
                <p className="mt-4 text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                  El horario de la semana y la cartelera de shows se confirman
                  por WhatsApp o en el Instagram de la casa.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Btn href={MAPS_URL} tone="solid">Abrir en Google Maps</Btn>
                  <Btn href={WA_LINK} tone="line">WhatsApp {BIZ.phoneDisplay}</Btn>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative">
                <div className="overflow-hidden rounded-[4px]" style={{ border: `2px solid ${C.hiedra}`, boxShadow: '0 16px 40px rgba(23,36,15,0.18)' }}>
                  <div className="aspect-[4/3]">
                    <LazyMap src={MAPS_EMBED} title="Mapa de Casa Café Teno en Av. Comalle, Teno" />
                  </div>
                </div>
                <div className="absolute -top-6 -right-2 md:-right-5 rotate-3 rounded-full overflow-hidden" style={{ border: `2px solid ${C.hiedra}`, width: 96, height: 96, boxShadow: '0 10px 26px rgba(23,36,15,0.25)' }} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/logo.webp`} alt="" width={96} height={96} style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: C.teja }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
            <Reveal>
              <Kicker light>reservas · terraza · shows</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.0] tracking-tight mt-4`} style={{ color: C.papelHi }}>
                La mesa en el prado se reserva por <span style={{ color: C.papelHi, textDecoration: "underline", textDecorationColor: C.arcilla, textUnderlineOffset: "4px" }}>WhatsApp</span>
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'rgba(250,246,234,0.9)' }}>
                Consulta el horario de la semana, reserva para la función del
                sábado o encarga la chorrillana para el grupo.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="light">Escribir a Casa Café</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.hiedraOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg`} style={{ color: C.papelHi }}>{BIZ.name} · {BIZ.category}</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(242,236,221,0.55)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tap-44 inline-flex items-center" style={{ color: C.arcilla }}>
            {BIZ.igHandle}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
