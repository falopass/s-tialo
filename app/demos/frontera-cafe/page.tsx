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
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({ src: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el bistró de la galería» — Frontera vive dentro de la
 * Galería Meval y su logo es tipografía negra sobre blanco. La página se arma
 * como la carta de un bistró chico: papel crema, tinta casi negra, mostaza de
 * su muralla interior y el rojo de la salsa. Fraunces para los titulares de
 * cocina, Space Mono para los datos de pizarra.
 */
const C = {
  papel: '#F4EDE1',
  papelHi: '#FBF7ED',
  tinta: '#1D1710',
  salsa: '#A63D2F',
  mostaza: '#C98A2B',
  oliva: '#5A5B33',
  muted: 'rgba(29,23,16,0.70)',
  line: 'rgba(29,23,16,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'frontera-cafe',
  title: 'Frontera Café — Pastas, pizzas y café de especialidad en Parral',
  description:
    'El bistró de la Galería Meval: pastas artesanales, pizzas, repostería y helados en Av. Aníbal Pinto 328, Parral. 4,8 en Google.',
  image: `${IMG}/pizza-costa.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Los favoritos', href: '#favoritos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const CARTA = [
  {
    t: 'Pastas artesanales',
    d: 'Hechas a mano en la casa: los raviolones de jaiba y los panzotti di zucca que la gente nombra en las reseñas.',
    tag: 'hechas acá',
  },
  {
    t: 'Pizzas',
    d: 'De la clásica pepperoni a la De La Costa con camarones. Porciones grandes para compartir.',
    tag: 'para compartir',
  },
  {
    t: 'Café de especialidad',
    d: 'Espressos y métodos suaves para acompañar la once o cerrar el almuerzo como corresponde.',
    tag: 'de la barra',
  },
  {
    t: 'Repostería',
    d: 'La mil hojas que los acompaña desde el comienzo, tortas del día y las cookies del mostrador.',
    tag: 'del mostrador',
  },
  {
    t: 'Helados artesanales',
    d: 'En temporada: variedad de sabores y opciones hechas en casa, en cono o en copa.',
    tag: 'en temporada',
  },
  {
    t: 'Catering y regalos',
    d: 'Coffee break para instituciones, chocolates artesanales y regalos corporativos a pedido.',
    tag: 'a pedido',
  },
]

const FAVORITOS = [
  {
    img: 'pizza-costa',
    alt: 'Pizza De La Costa de Frontera con camarones y palta junto a un jugo natural',
    t: 'Pizza De La Costa',
    d: 'Con camarones. La que El Peis pide que prueben dos veces.',
  },
  {
    img: 'pizza',
    alt: 'Pizza artesanal de Frontera recién salida, con un pocillo de merkén al lado',
    t: 'Pizzas de la casa',
    d: 'Masa del día y merkén en la mesa, como manda el Maule.',
  },
  {
    img: 'torta',
    alt: 'Torta artesanal de Frontera con frutos rojos, crema y frutos secos',
    t: 'Repostería de temporada',
    d: 'La mil hojas y las tortas que salen en las fotos de siempre.',
  },
  {
    img: 'cookies',
    alt: 'Galletas caseras servidas sobre el plato con el sello de Frontera',
    t: 'Cookies y bollería',
    d: 'Para llevar o para acompañar el café de la tarde.',
  },
]

const RESENAS = [
  {
    q: 'De los mejores lugares que he comido en mi vida, la relación precio/calidad increíble. Comimos pasta, pizza y la pastelería, y nada defraudó.',
    a: 'Sofía Miranda',
    m: 'reseña en Google',
  },
  {
    q: 'Nos conquistó con su repostería, que nos hizo volver a probar sus platos: raviolones rellenos con jaiba y salsa de camarón, más la pizza De La Costa.',
    a: 'El Peis',
    m: 'reseña en Google',
  },
  {
    q: 'Muy ricas las preparaciones de pasta, todo fresco y los jugos naturales también. Son porciones grandes por el precio.',
    a: 'Kristine Rios',
    m: 'reseña en Google',
  },
]

const HORAS = [
  { d: 'Lun, jue y vie', h: '10:30 – 14:45 · 16:30 – 20:00' },
  { d: 'Martes', h: '10:30 – 14:25 · 16:30 – 20:00' },
  { d: 'Miércoles', h: '10:30 – 14:30 · 16:30 – 20:00' },
  { d: 'Sábado', h: '11:00 – 15:00' },
  { d: 'Domingo', h: 'cerrado' },
]

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] font-bold tracking-[0.28em] uppercase`}
      style={{ color: light ? C.mostaza : C.salsa }}
    >
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.salsa, color: C.papelHi }
      : tone === 'light'
        ? { backgroundColor: C.papelHi, color: C.tinta }
        : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-semibold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Bigote gráfico de la carta: regla gruesa + fina, como el lomo de un menú. */
function ReglaDoble({ color = C.tinta }: { color?: string }) {
  return (
    <div aria-hidden="true">
      <div style={{ height: 3, backgroundColor: color }} />
      <div className="mt-1" style={{ height: 1, backgroundColor: color }} />
    </div>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold italic`}
        theme={{ over: 'light', bar: 'rgba(244,237,225,0.94)', ink: C.tinta, line: C.line, btnBg: C.tinta, btnInk: C.papelHi }}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — portada de la carta */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <ReglaDoble />
              <div className="mt-8 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
                <div className="text-center md:text-left">
                  <Kicker>bistró de galería · Parral</Kicker>
                  <h1 className={`${display.className} font-medium leading-[0.98] text-[44px] sm:text-6xl lg:text-[74px] tracking-tight mt-5`}>
                    Pastas hechas a mano, a metros de la{' '}
                    <em style={{ color: C.salsa }}>Aníbal&nbsp;Pinto</em>
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                    Frontera es el bistró escondido en la Galería Meval: raviolones de
                    jaiba, pizzas para compartir, café de especialidad y la mil hojas
                    de siempre.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Btn href={WA_LINK} tone="solid">Reservar por WhatsApp</Btn>
                    <Btn href="#carta" tone="line" external={false}>Ver la carta</Btn>
                  </div>
                  <div className="mt-7 flex items-center gap-3 justify-center md:justify-start">
                    <Stars value={4.8} color={C.salsa} className="w-[18px] h-[18px]" />
                    <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                      {BIZ.rating} en Google · {BIZ.reviews} reseñas
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <figure className="overflow-hidden" style={{ border: `3px solid ${C.tinta}`, boxShadow: `12px 12px 0 ${C.mostaza}` }}>
                    <Image
                      src={`${IMG}/pizza-costa.webp`}
                      alt="Pizza De La Costa de Frontera con camarones y palta, servida junto a un jugo natural"
                      width={1200}
                      height={900}
                      className="w-full h-auto block"
                      priority
                    />
                  </figure>
                  <figcaption className={`${mono.className} mt-4 text-[11px] tracking-[0.18em] uppercase text-center md:text-left`} style={{ color: C.muted }}>
                    fig. 01 — pizza de la costa · con camarones
                  </figcaption>
                </div>
              </div>
              <div className="mt-10"><ReglaDoble /></div>
            </Reveal>
          </div>
        </section>

        {/* FICHA TÉCNICA — datos de pizarra */}
        <section className="border-b" style={{ borderColor: C.line, backgroundColor: C.papelHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
            {[
              ['dirección', 'Aníbal Pinto 328 · Galería Meval'],
              ['horario', 'L–S desde 10:30 · dom cerrado'],
              ['contacto', BIZ.phoneDisplay],
              ['instagram', BIZ.igHandle],
            ].map(([k, v]) => (
              <p key={k} className={`${mono.className} text-[11px] leading-relaxed uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                <span style={{ color: C.salsa }}>{k}</span>
                <br />
                <span style={{ color: C.tinta }}>{v}</span>
              </p>
            ))}
          </div>
        </section>

        {/* LA CARTA — listado de bistró */}
        <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>la carta</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.0] tracking-tight mt-4`}>
                  Lo que sale de la <em style={{ color: C.salsa }}>cocina</em>
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
                pastas · pizzas · café · repostería
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12">
            {CARTA.map((item, i) => (
              <Reveal key={item.t} delay={i * 60}>
                <article className="py-6 border-b" style={{ borderColor: C.line }}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className={`${display.className} text-2xl md:text-[28px] font-semibold`}>{item.t}</h3>
                    <span className={`${mono.className} shrink-0 text-[10px] tracking-[0.2em] uppercase px-3 py-1`} style={{ backgroundColor: C.tinta, color: C.papelHi }}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed max-w-lg" style={{ color: C.muted }}>{item.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LOS FAVORITOS — láminas numeradas */}
        <section id="favoritos" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <Kicker light>los que repite la gente</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.0] tracking-tight mt-4`} style={{ color: C.papelHi }}>
                  Los platos que salen en las <em style={{ color: C.mostaza }}>reseñas</em>
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(244,237,225,0.75)' }}>
                  No los elegimos nosotros: son los que la gente de Parral nombra
                  cuando recomienda la casa.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {FAVORITOS.map((f, i) => (
                <Reveal key={f.img} delay={i * 80}>
                  <figure className="group">
                    <div className="overflow-hidden" style={{ border: '1.5px solid rgba(244,237,225,0.28)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${IMG}/${f.img}.webp`}
                        alt={f.alt}
                        className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-3">
                      <p className={`${mono.className} text-[10px] tracking-[0.22em] uppercase`} style={{ color: C.mostaza }}>
                        lámina {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className={`${display.className} text-xl font-semibold mt-1`} style={{ color: C.papelHi }}>{f.t}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: 'rgba(244,237,225,0.68)' }}>{f.d}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            {/* detalle: helado + interior + sandwich en franja baja */}
            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-5">
              {[
                { img: 'helado', alt: 'Helado artesanal de Frontera siendo servido en un cono' },
                { img: 'interior', alt: 'Interior de Frontera Café en la Galería Meval, con su vitrina de tortas y pared amarilla' },
                { img: 'sandwich', alt: 'Sandwich de Frontera con papas fritas y smoothies frutales' },
              ].map((f, i) => (
                <Reveal key={f.img} delay={i * 70}>
                  <figure className="overflow-hidden" style={{ border: '1.5px solid rgba(244,237,225,0.28)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/${f.img}.webp`} alt={f.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESEÑAS — la hoja de comentarios */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>lo que cuentan</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.0] tracking-tight mt-4`}>
                  «Si tienen la posibilidad de pasar, <em style={{ color: C.salsa }}>no lo duden</em>»
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={4.8} color={C.salsa} className="w-[18px] h-[18px]" />
                <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 90}>
                <figure className="h-full flex flex-col p-7" style={{ backgroundColor: C.papelHi, border: `1.5px solid ${C.line}`, boxShadow: `8px 8px 0 ${C.mostaza}` }}>
                  <Stars value={5} color={C.salsa} className="w-4 h-4" />
                  <blockquote className={`${display.className} mt-5 text-xl leading-snug italic flex-1`}>
                    “{r.q}”
                  </blockquote>
                  <figcaption className="mt-6 pt-4 border-t" style={{ borderColor: C.line }}>
                    <p className="text-sm font-semibold">{r.a}</p>
                    <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase mt-1`} style={{ color: C.muted }}>{r.m}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LLEGAR — mapa + hoja de horarios */}
        <section id="llegar" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.papelHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div className="overflow-hidden" style={{ border: `3px solid ${C.tinta}`, boxShadow: `12px 12px 0 ${C.salsa}` }}>
                <div className="aspect-[4/3]">
                  <LazyMap src={MAPS_EMBED} title="Mapa de Frontera Café en Galería Meval, Parral" />
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="solid">Abrir en Google Maps</Btn>
                <Btn href={WA_LINK} tone="line">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <Kicker>cómo llegar</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.0] tracking-tight mt-4`}>
                  Adentro de la <em style={{ color: C.salsa }}>Galería Meval</em>
                </h2>
                <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                  Av. Aníbal Pinto 328, Local 102
                  <br />
                  Galería Meval, Parral · Región del Maule
                </address>
                <dl className="mt-7 border-t" style={{ borderColor: C.line }}>
                  {HORAS.map((h) => (
                    <div key={h.d} className="flex justify-between gap-4 py-3 border-b" style={{ borderColor: C.line }}>
                      <dt className="text-[15px]" style={{ color: C.muted }}>{h.d}</dt>
                      <dd className={`${mono.className} text-sm text-right`} style={{ color: h.h === 'cerrado' ? C.salsa : C.tinta }}>{h.h}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL — faja mostaza */}
        <section style={{ backgroundColor: C.mostaza }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
            <Reveal>
              <Kicker>reservas · encargos · catering</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-medium leading-[1.0] tracking-tight mt-4`} style={{ color: C.tinta }}>
                La mesa del bistró se aparta por <em>WhatsApp</em>
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'rgba(29,23,16,0.78)' }}>
                Reserva almuerzo, encarga torta o cotiza el coffee break de tu
                institución: todo por el mismo chat.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="solid">Escribir a Frontera</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg italic`} style={{ color: C.papelHi }}>{BIZ.name} · {BIZ.category}</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(244,237,225,0.55)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tap-44 inline-flex items-center" style={{ color: C.mostaza }}>
            {BIZ.igHandle}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
