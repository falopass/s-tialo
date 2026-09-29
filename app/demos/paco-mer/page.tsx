import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({ src: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/space-mono/normal-700.woff2', weight: '700' })

// Paleta del propio cartel del food truck: asfalto nocturno, amarillo
// de ampolleta de marquesina y rojo camión.
const C = {
  asfalto: '#16181E',
  asfalto2: '#1E2129',
  panel: '#22262F',
  amarillo: '#F2B704',
  rojo: '#D4312C',
  crema: '#F4EFE6',
  muted: '#A6ACB8',
  line: 'rgba(244,239,230,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'paco-mer',
  title: "Paco'mer — Food truck en Villa Belén, Pencahue",
  description:
    "Completos, churrascos, lomitos y papas fritas en el food truck de Villa Belen 09, Pencahue. Abierto todos los días de 18:00 a 22:30. Pide por WhatsApp o delivery.",
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El carro', href: '#carro' },
  { label: 'Dónde para', href: '#donde' },
]

const CARTA = [
  { item: 'Completos', nota: 'italianos y completos clásicos' },
  { item: 'Churrascos', nota: 'en pan recién tostado' },
  { item: 'Lomitos', nota: 'el sándwich de la casa' },
  { item: 'Papas fritas', nota: 'para la mesa o para llevar' },
  { item: 'Salchipapas', nota: 'las de siempre, abundantes' },
  { item: 'Mote con huesillo', nota: 'para bajar la comida' },
]

const RESENAS = [
  {
    nombre: 'Roberto Orellana',
    texto:
      'Comida realmente deliciosa, como hecha en casa. Lugar limpio, atención rápida, tienen estacionamiento y los precios son bien razonables. 100% recomendado.',
  },
  {
    nombre: 'Andres Gonzalez',
    texto: 'Excelente comida a un muy buen precio.',
  },
  {
    nombre: 'theonemanshow',
    texto:
      'El personal fue muy atento. Es comida contundente, de la que piden los camioneros que paran acá — y lo que sirven está muy bueno.',
  },
  {
    nombre: 'Paulino Gonzalez',
    texto: 'Un lugar espectacular.',
  },
]

const FOTOS = [
  { src: 'lomito-italiano', alt: 'Lomito italiano con palta, tomate y mayonesa del food truck Paco’mer', ratio: 'aspect-[16/9]' },
  { src: 'mote-huesillo', alt: 'Vasos de mote con huesillo recién servidos', ratio: 'aspect-[4/3]' },
  { src: 'cartel-2', alt: 'Cartel luminoso de Paco’mer con su camión rojo y el fono de delivery', ratio: 'aspect-[4/5]' },
]

// Motivo propio del demo: la línea discontinua de la ruta + la marquesina
// de ampolletas del letrero.
function LineaRuta({ className = '' }: { className?: string }) {
  return (
    <div className={`h-[3px] w-full ${className}`} aria-hidden="true" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.amarillo} 0 34px, transparent 34px 58px)` }} />
  )
}

function Marquesina({ children }: { children: React.ReactNode }) {
  // Marco con puntos de ampolleta, como el letrero del cartel real.
  return (
    <div className="relative p-[6px] rounded-2xl" style={{ background: `repeating-linear-gradient(90deg, ${C.amarillo} 0 10px, ${C.rojo} 10px 20px)`, boxShadow: '0 0 0 3px #0E1013, 0 22px 55px rgba(0,0,0,0.55)' }}>
      <div className="rounded-xl overflow-hidden" style={{ boxShadow: 'inset 0 0 0 2px rgba(14,16,19,0.6)' }}>
        {children}
      </div>
    </div>
  )
}

function Skyline({ color, className = '' }: { color: string; className?: string }) {
  // Silueta de edificios como en el afiche original del carro.
  const b = [14, 22, 10, 26, 16, 30, 12, 20, 24, 9, 18, 27, 13, 21, 15]
  return (
    <svg viewBox="0 0 600 40" preserveAspectRatio="none" className={`block w-full h-[30px] md:h-[40px] ${className}`} aria-hidden="true" focusable="false">
      <path d="M0 40 H600" stroke={color} strokeWidth="2" />
      {b.map((h, i) => {
        const x = 8 + i * 40
        return <rect key={i} x={x} y={40 - h} width={26} height={h} fill={color} />
      })}
    </svg>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className={`${mono.className} inline-flex items-center gap-1.5 text-[11px] md:text-[12px] uppercase tracking-wide px-3 py-1.5 rounded-full`} style={{ color: C.amarillo, border: `1px dashed ${C.amarillo}` }}>
      {children}
    </span>
  )
}

function Btn({ href, tone, children, external = true }: { href: string; tone: 'amarillo' | 'rojo' | 'outline' | 'asfalto'; children: React.ReactNode; external?: boolean }) {
  const st =
    tone === 'amarillo' ? { backgroundColor: C.amarillo, color: '#16181E' }
    : tone === 'rojo' ? { backgroundColor: C.rojo, color: C.crema }
    : tone === 'outline' ? { border: `1.5px solid ${C.crema}`, color: C.crema }
    : { backgroundColor: C.crema, color: '#16181E' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-extrabold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.asfalto, color: C.crema }}>
      <BlitzNav
        name="PACO’MER"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-extrabold uppercase tracking-wider`}
        theme={{ over: 'dark', bar: 'rgba(22,24,30,0.94)', ink: C.crema, line: C.line, btnBg: C.amarillo, btnInk: '#16181E' }}
        ctaLabel="Pedir"
        logoSrc="/demos/paco-mer/camion.webp"
      />

      <main id="inicio">
        {/* HERO nocturno: marquesina + ruta */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-0">
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center pb-12 md:pb-16">
            <div className="text-center md:text-left">
              <Reveal>
                <p className={`${mono.className} text-[12px] md:text-sm uppercase tracking-[0.22em]`} style={{ color: C.amarillo }}>
                  Food truck · Pencahue, Maule
                </p>
                <h1 className={`${display.className} font-extrabold uppercase leading-[0.9] text-[52px] sm:text-7xl lg:text-[92px] mt-4`}>
                  La parada de <span style={{ color: C.amarillo }}>la ruta</span>
                </h1>
                <p className="mt-5 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.muted }}>
                  Completos, churrascos y lomitos desde el carro de Villa Belén. Todos los días de 18:00 a 22:30, con delivery por teléfono.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                  <Chip>★ {BIZ.rating} · {BIZ.reviews} reseñas</Chip>
                  <Chip>18:00–22:30 todos los días</Chip>
                  <Chip>Con estacionamiento</Chip>
                </div>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="amarillo">Pedir por WhatsApp</Btn>
                  <Btn href="#carta" tone="outline" external={false}>Ver la carta</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="max-w-sm mx-auto md:max-w-none">
                <Marquesina>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/demos/paco-mer/cartel.webp" alt="Cartel de Paco’mer: camión rojo, letrero luminoso y lista de completos, churrascos, lomitos, papas fritas y salchipapas" className="w-full aspect-[4/5] object-cover" loading="eager" />
                </Marquesina>
                <p className={`${mono.className} mt-4 text-center text-[11px] uppercase tracking-wide`} style={{ color: C.muted }}>
                  El letrero real del carro · Villa Belén
                </p>
              </div>
            </Reveal>
          </div>
          <div className="relative">
            <Skyline color="#0B0C0F" className="absolute bottom-[2px] opacity-90" />
            <LineaRuta />
          </div>
        </section>

        {/* LA CARTA: tablero de ruta */}
        <section id="carta" className="scroll-mt-16" style={{ backgroundColor: C.asfalto2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <p className={`${mono.className} text-[12px] uppercase tracking-[0.22em] text-center`} style={{ color: C.amarillo }}>
                Directo del letrero
              </p>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl sm:text-6xl leading-[0.94] text-center mt-3`}>
                La carta <span style={{ color: C.rojo }}>del carro</span>
              </h2>
              <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
                Lo que promete el cartel de Villa Belén — y lo que confirman quienes paran a comer.
              </p>
            </Reveal>
            <div className="mt-10 max-w-3xl mx-auto rounded-3xl border-2 overflow-hidden" style={{ borderColor: C.amarillo, backgroundColor: C.asfalto }}>
              <ul>
                {CARTA.map((c, i) => (
                  <li key={c.item}>
                    <Reveal delay={i * 70}>
                      <div className="flex items-center gap-4 px-5 md:px-8 py-4">
                        <span className={`${mono.className} text-sm w-8 shrink-0`} style={{ color: C.amarillo }}>{String(i + 1).padStart(2, '0')}</span>
                        <div className="flex-1">
                          <h3 className={`${display.className} font-extrabold uppercase text-2xl md:text-3xl leading-none`}>{c.item}</h3>
                          <p className="text-sm mt-1" style={{ color: C.muted }}>{c.nota}</p>
                        </div>
                        <span className="w-10 h-[3px] shrink-0 hidden sm:block" aria-hidden="true" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.amarillo} 0 8px, transparent 8px 14px)` }} />
                      </div>
                    </Reveal>
                    {i < CARTA.length - 1 && <div className="mx-5 md:mx-8 h-px" style={{ backgroundColor: C.line }} aria-hidden="true" />}
                  </li>
                ))}
              </ul>
              <div className="border-t-2 border-dashed px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: C.amarillo }}>
                <p className={`${mono.className} text-[12px] uppercase tracking-wide`} style={{ color: C.muted }}>
                  Precios de comida casera · confirma el del día al pedir
                </p>
                <Btn href={WA_LINK} tone="rojo">Pedir ahora</Btn>
              </div>
            </div>
          </div>
          <LineaRuta />
        </section>

        {/* EL CARRO: registro en fotos */}
        <section id="carro" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl sm:text-6xl leading-[0.94] text-center`}>
              Lo que sale <span style={{ color: C.amarillo }}>de la ventana</span>
            </h2>
            <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
              Fotos reales subidas a su ficha de Google por el carro y sus clientes.
            </p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 90} className={i === 0 ? 'sm:col-span-2 md:col-span-1' : ''}>
                <figure className="overflow-hidden rounded-2xl border-2" style={{ borderColor: 'rgba(242,183,4,0.35)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/demos/paco-mer/${f.src}.webp`} alt={f.alt} className={`w-full object-cover ${i === 0 ? 'aspect-[4/3] md:aspect-[4/5]' : f.ratio}`} loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* RESEÑAS */}
        <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.asfalto2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <div className="text-center">
                <Stars value={4.3} color={C.amarillo} className="w-5 h-5" />
                <h2 className={`${display.className} font-extrabold uppercase text-4xl sm:text-5xl leading-[0.94] mt-3`}>
                  Los que paran <span style={{ color: C.amarillo }}>a comer</span>
                </h2>
                <p className={`${mono.className} mt-3 text-[12px] uppercase tracking-wide`} style={{ color: C.muted }}>
                  {BIZ.rating} de 5 · {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 90}>
                  <figure className="rounded-2xl p-6 h-full border" style={{ backgroundColor: C.panel, borderColor: C.line }}>
                    <blockquote className="text-[15px] leading-relaxed" style={{ color: C.crema }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className={`${mono.className} mt-4 text-[12px] uppercase tracking-wide`} style={{ color: C.amarillo }}>
                      — {r.nombre} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DÓNDE PARA */}
        <section id="donde" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <p className={`${mono.className} text-[12px] uppercase tracking-[0.22em]`} style={{ color: C.amarillo }}>
                Dónde para el carro
              </p>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl sm:text-5xl leading-[0.94] mt-3`}>
                Villa Belén, <span style={{ color: C.rojo }}>Pencahue</span>
              </h2>
              <address className="not-italic mt-4 text-lg leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}, Región del Maule
              </address>
              <p className="mt-3 text-[15px]" style={{ color: C.muted }}>
                Atiende todos los días de 18:00 a 22:30. Puedes comer ahí, retirar en la ventanilla o pedir con delivery al fono.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip>Todos los días · 18:00–22:30</Chip>
                <Chip>Retiro en ventanilla</Chip>
                <Chip>Delivery {BIZ.phoneDisplay}</Chip>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="amarillo">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="outline">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border-2" style={{ borderColor: 'rgba(242,183,4,0.35)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative" style={{ backgroundColor: C.rojo }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 text-center">
            <Reveal>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl sm:text-6xl leading-[0.94]`} style={{ color: C.crema }}>
                Se hizo de noche, <span style={{ color: C.amarillo }}>abre el carro</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(244,239,230,0.88)' }}>
                Pide por WhatsApp y pasa a buscar, o pídelo con delivery.
              </p>
              <div className="mt-7">
                <Btn href={WA_LINK} tone="asfalto">Pedir al {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
          </div>
          <LineaRuta />
        </section>
      </main>

      <footer style={{ backgroundColor: '#0B0C0F', color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} font-extrabold uppercase text-2xl tracking-wide`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(244,239,230,0.65)' }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,239,230,0.75)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
