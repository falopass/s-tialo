import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})

// Paleta sacada de sus fotos: crema de papel, el rojo del letrero y los
// manteles a cuadros, y el ámbar del mote con huesillo.
const C = {
  cream: '#FAF3E3',
  paper: '#FFFDF6',
  red: '#B4231E',
  redDark: '#7E1713',
  amber: '#C07A2A',
  amberDark: '#8A4E0E',
  ink: '#38200F',
  muted: '#7A5B43',
  line: 'rgba(56,32,15,0.16)',
  dark: '#2A160B',
}

export const metadata: Metadata = demoMetadata({
  slug: 'el-sauce-mote-con-huesillo',
  title: 'El Sauce - Mote Con Huesillo — comida típica en la Ruta 5, Longaví',
  description:
    'Mote con huesillo y comida casera bajo los sauces, en la Ruta 5 a la salida de Panimávida, Longaví. Consulta y reserva por WhatsApp.',
  image: '/demos/el-sauce-mote-con-huesillo/hero.webp',
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'La pará', href: '#para' },
]

const COCINA = [
  {
    title: 'Mote con huesillo',
    lead: 'El clásico de la casa',
    desc: 'El vaso frío de mote con huesillo que da nombre al local — el que la gente para a buscar a la orilla de la ruta.',
    src: '/demos/el-sauce-mote-con-huesillo/mote.webp',
    alt: 'Vaso de mote con huesillo sobre una mesa con mantel a cuadros rojos de El Sauce',
  },
  {
    title: 'Comida casera',
    lead: 'Platos de siempre',
    desc: 'Cocina de loza y de casa: platos chilenos servidos en mesas con mantel, como comer en la casa de alguien.',
    src: '/demos/el-sauce-mote-con-huesillo/comida.webp',
    alt: 'Plato casero con pan, huevo y acompañamientos en El Sauce de Longaví',
  },
  {
    title: 'El patio bajo los sauces',
    lead: 'Sombra de verdad',
    desc: 'Las mesas de afuera quedan a la sombra de los árboles — los veranos de Panimávida se aguantan mejor ahí.',
    src: '/demos/el-sauce-mote-con-huesillo/patio.webp',
    alt: 'Patio con gallinas y comensales bajo los árboles de El Sauce',
  },
]

const RESENAS = [
  {
    texto:
      'El mote con huesillo súper tradicional y súper rico. Si anda por Panimávida pare aquí: le encantará la sombra de los árboles y enredaderas del local.',
    nombre: 'Marco Antonio Figueroa P.',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Delicioso mote con huesillo para capear la calor en un hermoso lugar de la región del Maule.',
    nombre: 'Joaco Vega',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Excelente lugar para comer, bien atendido y bien comido. Su gente muy amable y buenos precios.',
    nombre: 'Marco Antonio Parraguez B.',
    detalle: '5 estrellas en Google',
  },
]

const GALERIA = [
  { src: '/demos/el-sauce-mote-con-huesillo/toldo.webp', alt: 'Fachada de El Sauce con el toldo rojo visto desde la ruta', tilt: '-2deg' },
  { src: '/demos/el-sauce-mote-con-huesillo/letrero.webp', alt: 'Letrero rojo de El Sauce - Mote Con Huesillo a la orilla de la Ruta 5', tilt: '1.5deg' },
  { src: '/demos/el-sauce-mote-con-huesillo/duena.webp', alt: 'Mesa del local bajo el sauce llorón que da sombra al patio', tilt: '-1deg' },
  { src: '/demos/el-sauce-mote-con-huesillo/mote.webp', alt: 'Vaso de mote con huesillo con su hueso de durazno', tilt: '2deg' },
]

const HORARIO = [
  { d: 'Martes a viernes', h: '7:30 – 21:00' },
  { d: 'Sábado', h: '7:30 – 21:00' },
  { d: 'Domingo y lunes', h: 'Cerrado' },
]

// ── Motivo propio: el mantel a cuadros rojos de sus mesas ────
function Mantel({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 96 12"
      preserveAspectRatio="none"
      className={`block w-full h-[14px] ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
      focusable="false"
    >
      <pattern id="es-gingham" width="12" height="12" patternUnits="userSpaceOnUse">
        <rect width="12" height="12" fill={C.paper} />
        <rect width="6" height="6" fill={C.red} opacity="0.85" />
        <rect x="6" y="6" width="6" height="6" fill={C.red} opacity="0.85" />
        <rect x="0" y="6" width="6" height="6" fill={C.red} opacity="0.32" />
        <rect x="6" y="0" width="6" height="6" fill={C.red} opacity="0.32" />
      </pattern>
      <rect width="96" height="12" fill="url(#es-gingham)" />
    </svg>
  )
}

/** El letrero rojo de la orilla de la ruta, reencarnado como marco de titulares. */
function Cartel({ children, small = false }: { children: React.ReactNode; small?: boolean }) {
  return (
    <div
      className={`${display.className} inline-block bg-[${C.red}] text-[${C.cream}] uppercase tracking-wide ${small ? 'text-lg px-4 py-1.5' : 'text-xl px-5 py-2'} rounded-md shadow-[4px_4px_0_0_${C.redDark}]`}
      style={{ backgroundColor: C.red, color: C.cream, boxShadow: `4px 4px 0 0 ${C.redDark}` }}
    >
      {children}
    </div>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'red' | 'cream' | 'outline'; external?: boolean }) {
  const st =
    tone === 'red' ? { backgroundColor: C.red, color: C.cream }
    : tone === 'cream' ? { backgroundColor: C.cream, color: C.redDark }
    : { border: `1.5px solid ${C.ink}`, color: C.ink }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-md text-[15px] font-extrabold uppercase tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide text-xl`}
        theme={{ over: 'light', bar: 'rgba(250,243,227,0.94)', ink: C.redDark, line: C.line, btnBg: C.red, btnInk: C.cream }}
        ctaLabel="WhatsApp"
      />

      <main id="inicio">
        {/* HERO: la pará de la ruta 5 */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-0">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_1fr] gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left pb-10 md:pb-14">
              <Reveal>
                <p className="flex justify-center md:justify-start mb-5">
                  <Cartel>Ruta 5 · Longaví · desde temprano</Cartel>
                </p>
                <h1 className={`${display.className} font-black uppercase leading-[0.95] text-[52px] sm:text-7xl lg:text-[86px] tracking-tight`} style={{ color: C.redDark }}>
                  El mote con huesillo<br />
                  <span style={{ color: C.amber }}>de la ruta 5</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Comida casera y el vaso más pedido de la zona, bajo los sauces a la salida de Panimávida. La pará que los que pasan ya conocen.
                </p>
                <p className="mt-5 flex items-center justify-center md:justify-start gap-2 text-[15px] font-bold" style={{ color: C.ink }}>
                  <Stars value={4.3} color={C.amber} />
                  {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="red">Reservar por WhatsApp</Btn>
                  <Btn href={MAPS_URL} tone="outline">Cómo llegar</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <figure className="relative mb-8 md:mb-14">
                <div className="overflow-hidden rounded-lg border-[6px] rotate-1" style={{ borderColor: C.paper, boxShadow: '0 20px 44px rgba(42,22,11,0.22)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/demos/el-sauce-mote-con-huesillo/hero.webp"
                    alt="El Sauce - Mote Con Huesillo: casita de madera con mesas de mantel a cuadros y letrero ABIERTO"
                    className="w-full h-auto aspect-[16/11] object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-8 w-[42%] rounded-lg border-[5px] -rotate-2 overflow-hidden" style={{ borderColor: C.paper, boxShadow: '0 14px 30px rgba(42,22,11,0.25)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/demos/el-sauce-mote-con-huesillo/mote.webp"
                    alt="Vaso de mote con huesillo servido en El Sauce"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <figcaption
                  className={`${display.className} absolute -bottom-4 right-4 md:right-6 rounded-md px-4 py-1.5 text-lg uppercase tracking-wide`}
                  style={{ backgroundColor: C.red, color: C.cream, boxShadow: `3px 3px 0 0 ${C.redDark}` }}
                >
                  el mote de la casa
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Mantel />
        </section>

        {/* LA COCINA: lo que se sirve bajo los sauces */}
        <section id="cocina" className="scroll-mt-16" style={{ backgroundColor: C.dark }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <div className="text-center">
                <Cartel small>La cocina</Cartel>
                <h2 className={`${display.className} mt-5 text-4xl sm:text-6xl font-black uppercase leading-[1.0] tracking-tight`} style={{ color: C.cream }}>
                  Lo que se sirve<br />
                  <span style={{ color: C.amber }}>bajo los sauces</span>
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-3 gap-5 md:gap-6">
              {COCINA.map((m, i) => (
                <Reveal key={m.title} delay={i * 110}>
                  <article className="rounded-lg overflow-hidden h-full flex flex-col" style={{ backgroundColor: C.paper, boxShadow: '0 14px 34px rgba(0,0,0,0.28)' }}>
                    <div className="overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.src} alt={m.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <p className={`${display.className} uppercase text-lg`} style={{ color: C.amberDark }}>{m.lead}</p>
                      <h3 className={`${display.className} text-3xl font-bold uppercase mt-0.5`} style={{ color: C.redDark }}>{m.title}</h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed" style={{ color: C.muted }}>{m.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Mantel flip />
        </section>

        {/* RESEÑAS: lo que dicen los que paran */}
        <section id="resenas" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="text-center">
              <Cartel small>Reseñas</Cartel>
              <h2 className={`${display.className} mt-5 text-4xl sm:text-6xl font-black uppercase leading-[1.0] tracking-tight`} style={{ color: C.redDark }}>
                Los que paran<br />
                <span style={{ color: C.amber }}>vuelven a parar</span>
              </h2>
              <p className="mt-4 flex items-center justify-center gap-2 text-base font-bold" style={{ color: C.ink }}>
                <Stars value={4.3} color={C.amber} />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure className="relative rounded-lg p-7 pt-9 h-full" style={{ backgroundColor: C.paper, boxShadow: '0 10px 28px rgba(42,22,11,0.10)', transform: `rotate(${i === 1 ? '1deg' : '-1deg'})` }}>
                  <span
                    className={`${display.className} absolute -top-4 left-5 text-6xl leading-none`}
                    style={{ color: C.red }}
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <blockquote className="text-[15px] leading-relaxed" style={{ color: C.ink }}>
                    {r.texto}
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="text-sm font-extrabold" style={{ color: C.redDark }}>{r.nombre}</p>
                    <p className="text-xs mt-0.5 font-semibold uppercase tracking-wide" style={{ color: C.amberDark }}>{r.detalle}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-center text-sm font-semibold" style={{ color: C.muted }}>
              Reseñas reales de la ficha de Google de El Sauce - Mote Con Huesillo.
            </p>
          </Reveal>
        </section>

        {/* GALERÍA: polaroids de la ruta */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.dark }}>
          <Mantel />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-6xl font-black uppercase leading-[1.0] tracking-tight text-center`} style={{ color: C.cream }}>
                Así se ve <span style={{ color: C.amber }}>la pará</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
              {GALERIA.map((f, i) => (
                <Reveal key={f.src} delay={i * 90}>
                  <figure
                    className="p-2.5 pb-8 rounded-sm h-full"
                    style={{ backgroundColor: C.paper, transform: `rotate(${f.tilt})`, boxShadow: '0 14px 30px rgba(0,0,0,0.30)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.src} alt={f.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
          <Mantel flip />
        </section>

        {/* LA PARÁ: horario y cómo llegar */}
        <section id="para" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Cartel small>La pará</Cartel>
              <h2 className={`${display.className} mt-5 text-4xl sm:text-6xl font-black uppercase leading-[1.0] tracking-tight`} style={{ color: C.redDark }}>
                Bajas de la ruta<br />
                <span style={{ color: C.amber }}>y estás</span>
              </h2>
              <address className="not-italic mt-6 text-lg leading-relaxed" style={{ color: C.ink }}>
                <strong>Ruta 5</strong>, a la salida de Panimávida
                <br />
                Longaví, Región del Maule
              </address>
              <div className="mt-6 rounded-lg overflow-hidden border-2" style={{ borderColor: C.red }}>
                <div className="px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide" style={{ backgroundColor: C.red, color: C.cream }}>
                  Horario
                </div>
                <table className="w-full text-[15px]">
                  <tbody>
                    {HORARIO.map((h, i) => (
                      <tr key={h.d} style={{ backgroundColor: i % 2 ? C.cream : C.paper }}>
                        <td className="px-5 py-2.5 font-semibold" style={{ color: C.ink }}>{h.d}</td>
                        <td className="px-5 py-2.5 text-right font-bold" style={{ color: h.h === 'Cerrado' ? C.muted : C.redDark }}>{h.h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="red">WhatsApp {BIZ.phoneDisplay}</Btn>
                <Btn href={MAPS_URL} tone="outline">Abrir en Google Maps</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-lg overflow-hidden border-[6px]" style={{ borderColor: C.paper, boxShadow: '0 16px 38px rgba(42,22,11,0.18)' }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa de El Sauce - Mote Con Huesillo en Ruta 5, Longaví"
                  className="w-full aspect-[4/3] block"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-center" style={{ color: C.muted }}>
                El letrero rojo se ve desde la ruta — si pasas de largo, la próxima pará es la tuya.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CIERRE */}
        <section style={{ backgroundColor: C.red }}>
          <Mantel flip />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <h2 className={`${display.className} text-5xl sm:text-7xl font-black uppercase leading-[0.95] tracking-tight`} style={{ color: C.cream }}>
                Un mote con huesillo<br />te está esperando
              </h2>
              <p className="mt-5 text-lg" style={{ color: 'rgba(250,243,227,0.9)' }}>
                Consulta el menú del día o avisa que vas de paso — todo por WhatsApp.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="cream">Escribir a El Sauce</Btn>
              </div>
            </Reveal>
          </div>
          <Mantel />
        </section>
      </main>

      <footer style={{ backgroundColor: C.dark, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl uppercase`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(250,243,227,0.75)' }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(250,243,227,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
