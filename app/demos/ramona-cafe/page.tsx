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
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({ src: '../../fonts/jost/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el diario de la barra» — la hoja de papel manteca que
 * Ramona pone bajo cada taza. Texto de imprenta (serif de libro + monoespaciada
 * de ticket), reglas finas de carta de café y el sello circular de su letrero.
 * Color: crema de papel, espresso, el rojo de sus tazas.
 */
const C = {
  papel: '#F5EFE3',
  papelHi: '#FBF7EC',
  espresso: '#2B1B12',
  cafe: '#5C3A2E',
  taza: '#B0432F',
  muted: 'rgba(43,27,18,0.72)',
  line: 'rgba(43,27,18,0.16)',
  card: '#FFFBF2',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ramona-cafe',
  title: 'Ramona Café — Cafetería de especialidad en Alto Las Rastras, Talca',
  description:
    'La mujer del café en Camino a la Viña 4357, Alto Las Rastras: café de especialidad, pastelería artesanal y brunch todos los días. 4,8 en Google.',
  image: `${IMG}/latte.webp`,
})

const NAV_LINKS = [
  { label: 'La barra', href: '#barra' },
  { label: 'Las casas', href: '#casas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const BARRA = [
  { n: '01', t: 'Café de especialidad', d: 'Espressos y filtrados servidos en sus tazas rojas: el sello de la casa desde 2022.' },
  { n: '02', t: 'Pastelería artesanal', d: 'Tortas y dulces de la casa, de los que salen en las reseñas una y otra vez.' },
  { n: '03', t: 'Sándwichs', d: 'Croissants y ciabattas armados al momento: del brunch de la mañana a la once.' },
  { n: '04', t: 'Bollería', d: 'Croissants y masa de hojaldre para acompañar el primer café del día.' },
  { n: '05', t: 'Bebidas frías', d: 'Jugos, smoothies y frappados para la terraza cuando aprieta el sol del Maule.' },
  { n: '06', t: 'Productores locales', d: 'Del valle a la barra: trabajan con productos de la zona en lo que sirven.' },
]

const HORAS = [
  { d: 'Lunes a viernes', h: '8:30 – 21:00' },
  { d: 'Sábado y domingo', h: '10:00 – 21:00' },
]

const RESENAS = [
  {
    q: 'Excelente experiencia, lugar acogedor, la comida deliciosa y muy buena atención. Precio calidad excelente.',
    a: 'Camila José Rojas',
    m: 'reseña en Google',
  },
  {
    q: 'Lindo lugar, la comida me encanta y su café es exquisito y la atención 10/10, todos muy simpáticos y amables. Full recomendado.',
    a: 'Pablina Herrera',
    m: 'reseña en Google',
  },
  {
    q: 'Todo lo que probamos muy rico, la atención buena, el espacio muy acogedor.',
    a: 'Issa Pedrero',
    m: 'reseña en Google',
  },
]

const SELLO = [
  'café de especialidad',
  'pastelería artesanal',
  'brunch todos los días',
  'terraza al aire libre',
  'Alto Las Rastras',
  'desde 2022',
]

/** Sello circular del letrero de Ramona: aro fino con el logo real adentro. */
function Sello({ size = 120, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: dark ? C.papelHi : C.espresso,
        border: `1.5px solid ${dark ? C.line : 'rgba(245,239,227,0.4)'}`,
        boxShadow: '0 10px 28px rgba(43,27,18,0.20)',
      }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${IMG}/logo.webp`}
        alt=""
        width={Math.round(size * 0.66)}
        height={Math.round(size * 0.66)}
        style={{ filter: dark ? 'none' : 'invert(1) brightness(1.4)', objectFit: 'contain' }}
      />
    </div>
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] font-semibold tracking-[0.26em] uppercase`}
      style={{ color: light ? 'rgba(245,239,227,0.75)' : C.taza }}
    >
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.taza, color: C.papelHi }
      : tone === 'light'
        ? { backgroundColor: C.papelHi, color: C.espresso }
        : { border: `1.5px solid ${C.espresso}`, color: C.espresso }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-semibold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.espresso }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold`}
        theme={{ over: 'light', bar: 'rgba(245,239,227,0.92)', ink: C.espresso, line: C.line, btnBg: C.espresso, btnInk: C.papelHi }}
        ctaLabel="Escribir"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — portada del diario */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-16">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <Kicker>cafetería de especialidad · Alto Las Rastras, Talca</Kicker>
                <h1
                  className={`${display.className} font-medium leading-[1.0] text-[46px] sm:text-6xl lg:text-[72px] tracking-tight mt-5`}
                  style={{ color: C.espresso }}
                >
                  La mujer del café tiene su rincón en{' '}
                  <em style={{ color: C.taza, fontWeight: 600 }}>Las&nbsp;Rastras</em>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Ramona, la cafetería que partió en el centro de Talca, abrió su segunda casa
                  en Alto Las Rastras: café de especialidad, pastelería artesanal y brunch
                  todos los días de la semana.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="solid">Pedir por WhatsApp</Btn>
                  <Btn href="#barra" tone="line" external={false}>Ver la barra</Btn>
                </div>
                <div className="mt-7 flex items-center gap-3 justify-center md:justify-start">
                  <Stars value={4.8} color={C.taza} className="w-[18px] h-[18px]" />
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                    {BIZ.rating} en Google · {BIZ.reviews} reseñas
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative mx-auto max-w-md md:max-w-none">
                <div className="grid grid-cols-[1fr_0.62fr] gap-3 items-end">
                  <figure className="overflow-hidden rounded-2xl" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(43,27,18,0.16)' }}>
                    <Image
                      src={`${IMG}/latte.webp`}
                      alt="Café con latte art en la taza roja insignia de Ramona Café"
                      width={1200}
                      height={800}
                      className="w-full h-auto block"
                      priority
                    />
                  </figure>
                  <figure className="overflow-hidden rounded-2xl -mb-6" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(43,27,18,0.14)' }}>
                    <Image
                      src={`${IMG}/salon.webp`}
                      alt="Salón de Ramona Café con lámparas de mimbre y mesas de madera"
                      width={1200}
                      height={800}
                      className="w-full h-auto block"
                    />
                  </figure>
                </div>
                <div className="absolute -top-6 -right-2 md:-right-5 rotate-6">
                  <Sello size={104} dark />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* REGLÓN — horario como línea de ticket */}
        <div className="border-y" style={{ borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2">
            {HORAS.map((h) => (
              <p key={h.d} className={`${mono.className} text-[11px] md:text-xs tracking-[0.18em] uppercase`} style={{ color: C.cafe }}>
                <span style={{ color: C.taza }}>●</span>&nbsp;&nbsp;{h.d}&nbsp;&nbsp;{h.h}
              </p>
            ))}
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.18em] uppercase`} style={{ color: C.cafe }}>
              <span style={{ color: C.taza }}>●</span>&nbsp;&nbsp;Camino a la Viña 4357
            </p>
          </div>
        </div>

        {/* LA BARRA — carta numerada */}
        <section id="barra" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker>de la barra</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.02] tracking-tight mt-4`} style={{ color: C.espresso }}>
                Lo que sirve la barra de <em style={{ color: C.taza, fontWeight: 600 }}>Ramona</em>
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-px">
            {BARRA.map((b, i) => (
              <Reveal key={b.n} delay={i * 70}>
                <article className="py-6 border-t" style={{ borderColor: C.line }}>
                  <div className="flex items-baseline gap-4">
                    <span className={`${mono.className} text-xs font-semibold`} style={{ color: C.taza }}>{b.n}</span>
                    <div>
                      <h3 className={`${display.className} text-2xl font-semibold`} style={{ color: C.espresso }}>{b.t}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.muted }}>{b.d}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* MESA — cinta de fotos reales */}
        <section className="overflow-hidden py-4" style={{ backgroundColor: C.papelHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center">
              {[
                { src: 'brunch', alt: 'Tostada con salmón y huevo poché junto a un smoothie rojo, brunch de Ramona Café' },
                { src: 'terraza', alt: 'Terraza de Ramona Café en Alto Las Rastras con gente sentada entre plantas' },
                { src: 'croissant', alt: 'Croissant con café de especialidad sobre la mesa de Ramona Café' },
                { src: 'bebidas', alt: 'Matcha y bebidas frías junto a la carta de Ramona Café' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={i * 80}>
                  <figure className={`overflow-hidden rounded-xl ${i % 2 ? 'md:-translate-y-4' : 'md:translate-y-4'}`} style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 10px 26px rgba(43,27,18,0.12)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/${f.src}.webp`} alt={f.alt} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SELLOS — marquee fino */}
        <div className="overflow-hidden py-5 border-b" style={{ borderColor: C.line, backgroundColor: C.papelHi }} aria-hidden="true">
          <style>{`@keyframes rm-cinta{to{transform:translateX(-50%)}}`}</style>
          <div className={`${display.className} flex gap-10 whitespace-nowrap italic text-xl w-max`} style={{ color: C.cafe, animation: 'rm-cinta 30s linear infinite' }}>
            {[...SELLO, ...SELLO].map((s, i) => (
              <span key={i} className="flex items-center gap-10">
                {s}
                <span className={`${mono.className} not-italic text-xs tracking-[0.2em]`} style={{ color: C.taza }}>◦</span>
              </span>
            ))}
          </div>
        </div>

        {/* DOS CASAS — la sección propia de Ramona */}
        <section id="casas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Kicker>dos casas, una Ramona</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.02] tracking-tight mt-4`} style={{ color: C.espresso }}>
                La del centro y la de <em style={{ color: C.taza, fontWeight: 600 }}>Las Rastras</em>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                Ramona tiene dos casas en Talca. Esta es la del Alto, la que queda
                camino al sector nuevo de la ciudad.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <Reveal delay={80}>
              <article className="rounded-3xl p-7 h-full" style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}>
                <p className={`${mono.className} text-[10px] tracking-[0.24em] uppercase`} style={{ color: C.muted }}>casa matriz</p>
                <h3 className={`${display.className} text-3xl font-semibold mt-2`} style={{ color: C.espresso }}>1 Norte 963, centro</h3>
                <dl className="mt-5 space-y-2 text-[15px]" style={{ color: C.muted }}>
                  <div className="flex justify-between gap-4 border-b pb-2" style={{ borderColor: C.line }}>
                    <dt>Lun–Vie</dt><dd className={`${mono.className} text-sm`}>8:00 – 20:00</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b pb-2" style={{ borderColor: C.line }}>
                    <dt>Sábado</dt><dd className={`${mono.className} text-sm`}>10:00 – 14:00</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Domingo</dt><dd className={`${mono.className} text-sm`}>cerrado</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
            <Reveal delay={160}>
              <article className="rounded-3xl p-7 h-full relative overflow-hidden" style={{ backgroundColor: C.espresso, color: C.papel }}>
                <span className={`${mono.className} absolute top-5 right-5 text-[10px] tracking-[0.24em] uppercase px-3 py-1 rounded-full`} style={{ backgroundColor: C.taza, color: C.papelHi }}>
                  esta página
                </span>
                <p className={`${mono.className} text-[10px] tracking-[0.24em] uppercase`} style={{ color: 'rgba(245,239,227,0.7)' }}>alto las rastras</p>
                <h3 className={`${display.className} text-3xl font-semibold mt-2`} style={{ color: C.papelHi }}>Camino a la Viña 4357</h3>
                <dl className="mt-5 space-y-2 text-[15px]" style={{ color: 'rgba(245,239,227,0.85)' }}>
                  <div className="flex justify-between gap-4 border-b pb-2" style={{ borderColor: 'rgba(245,239,227,0.2)' }}>
                    <dt>Lun–Vie</dt><dd className={`${mono.className} text-sm`}>8:30 – 21:00</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b pb-2" style={{ borderColor: 'rgba(245,239,227,0.2)' }}>
                    <dt>Sábado</dt><dd className={`${mono.className} text-sm`}>10:00 – 21:00</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Domingo</dt><dd className={`${mono.className} text-sm`}>10:00 – 21:00</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          </div>
        </section>

        {/* RESEÑAS — página oscura */}
        <section id="resenas" className="scroll-mt-20 relative" style={{ backgroundColor: C.espresso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <Kicker light>lo que cuentan</Kicker>
                  <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.02] tracking-tight mt-4`} style={{ color: C.papelHi }}>
                    «El café es exquisito y la atención <em style={{ color: '#E8B4A4' }}>10/10</em>»
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <Stars value={4.8} color="#E8B4A4" className="w-[18px] h-[18px]" />
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: 'rgba(245,239,227,0.7)' }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </span>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 90}>
                  <figure className="rounded-2xl p-6 h-full flex flex-col" style={{ backgroundColor: 'rgba(245,239,227,0.06)', border: '1px solid rgba(245,239,227,0.14)' }}>
                    <Stars value={5} color="#E8B4A4" className="w-4 h-4" />
                    <blockquote className={`${display.className} mt-4 text-xl leading-snug italic flex-1`} style={{ color: C.papelHi }}>
                      “{r.q}”
                    </blockquote>
                    <figcaption className="mt-5">
                      <p className="text-sm font-semibold" style={{ color: C.papelHi }}>{r.a}</p>
                      <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: 'rgba(245,239,227,0.6)' }}>{r.m}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LLEGAR — mapa + tarjeta */}
        <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-12 items-center">
            <Reveal>
              <Kicker>cómo llegar</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.02] tracking-tight mt-4`} style={{ color: C.espresso }}>
                Al final del camino a la Viña, en el <em style={{ color: C.taza, fontWeight: 600 }}>Alto</em>
              </h2>
              <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                Camino a la Viña 4357, Alto Las Rastras
                <br />
                Talca, Región del Maule
              </address>
              <p className={`${mono.className} mt-4 text-[11px] tracking-[0.18em] uppercase`} style={{ color: C.cafe }}>
                abierto todos los días · L–V 8:30–21:00 · S–D 10:00–21:00
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="solid">Abrir en Google Maps</Btn>
                <Btn href={WA_LINK} tone="line">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/3]" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 16px 40px rgba(43,27,18,0.16)' }}>
                  <LazyMap src={MAPS_EMBED} title="Mapa de Ramona Café en Alto Las Rastras, Talca" />
                </div>
                <div className="absolute -bottom-7 -left-3 md:-left-6">
                  <Sello size={96} dark />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.taza }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center relative">
            <Reveal>
              <div className="flex justify-center mb-6"><Sello size={88} /></div>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.02] tracking-tight`} style={{ color: C.papelHi }}>
                El café de Las Rastras se pide por <em>Ramona</em>
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: C.papelHi }}>
                Consulta la carta del día, encarga torta o reserva mesa en la terraza: todo por el mismo WhatsApp.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="light">Escribir a Ramona Café</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg`} style={{ color: C.papelHi }}>{BIZ.name} · {BIZ.tagline}</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(245,239,227,0.55)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tap-44 inline-flex items-center" style={{ color: '#E8B4A4' }}>
            @ramonacafetalca
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
