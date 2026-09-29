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
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({ src: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' })

/**
 * Dirección de arte: «la pizarra de la esquina». La carta real de Baires es
 * un cuaderno de pizarra azul-noche con títulos ámbar y precios en pastillas;
 * el local suma toldo verde, muro de follaje y mármol blanco. La página es
 * esa pizarra: fondo tinta, condensada pesada, ámbar para los cortes y el
 * burdeo del sello circular como acento.
 */
const C = {
  pizarra: '#16181D',
  pizarraHi: '#1E2128',
  tiza: '#F3EEE2',
  ambar: '#F0A32B',
  burdeo: '#8E2F4B',
  verde: '#3E6B4F',
  muted: 'rgba(243,238,226,0.66)',
  line: 'rgba(243,238,226,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'baires-cafe',
  title: 'Café Baires — Café restaurante en la Arturo Prat, Parral',
  description:
    'Lo bueno y lo nuevo en Parral: sandwiches de la casa, sellados, jugos naturales y helados en Av. Arturo Prat 341 A. 5,0 en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'El salón', href: '#salon' },
  { label: 'Llegar', href: '#llegar' },
]

const SANDWICHES = [
  { t: 'La Grandiosa', d: 'Champiñón salteado, queso cheddar, tocino, cebolla caramelizada y salsa de ajo.', p: '8.990' },
  { t: 'La Pituca', d: 'Lechuga, palta, tomates asados, queso fundido y tocino ahumado.', p: '8.990' },
  { t: 'La Gringa', d: 'Tocino, queso cheddar, aros de cebolla y salsa BBQ.', p: '8.500' },
  { t: 'La Granjera', d: 'Choclo, champiñón salteado, lechuga, cebolla morada y salsa verde de ajo.', p: '8.500' },
  { t: 'Baires', d: 'Queso cheddar, pepinillo, tocino y BBQ.', p: '8.290' },
  { t: 'La Vaquera Vijaa', d: 'Queso cheddar, cebolla frita, pepinillos, tocino y salsa especial picante.', p: '8.500' },
  { t: 'El Clásico', d: 'Lechuga, tomate, queso cheddar y salsa thousand island.', p: '7.200' },
  { t: 'La Texana', d: 'Cebolla frita, queso, tocino y salsa de merkén.', p: '8.200' },
]

const SELLADOS = [
  { t: 'Aliado', d: 'jamón y queso', p: '3.200' },
  { t: 'Sellado 3 quesos', d: 'gouda, cheddar y mozzarella', p: '3.690' },
  { t: 'Vegetariano', d: 'quesillo, tomate, lechuga, palta y ciboulette', p: '4.390' },
  { t: 'Quesillo palta', d: '', p: '4.200' },
  { t: 'Queso caliente', d: '', p: '2.990' },
  { t: 'Avemayo', d: '', p: '4.690' },
  { t: 'Avepalta', d: '', p: '4.890' },
  { t: 'Palta pochado ciboulette', d: '', p: '5.290' },
]

const BEBIDAS = [
  { t: 'Jugos naturales', d: 'frambuesa, frutilla, chirimoya, piña, mango y maracuyá', p: '3.690' },
  { t: 'Vitamina de naranja', d: '', p: '3.990' },
  { t: 'Limonadas', d: '', p: '3.990' },
  { t: 'Agua mineral', d: '', p: '1.990' },
  { t: 'Bebidas', d: 'Coca-Cola · CCU', p: '2.300' },
]

const HELADOS = [
  { t: 'Banana split', d: 'tres copas, manjar, salsa de chocolate y chantilly', p: '5.690' },
  { t: 'Merengatta', d: 'helado doble frambuesa a la crema, merengue y chantilly', p: '4.590' },
  { t: 'Alicanta', d: 'doble vainilla con manjar, amaretto, chantilly y almendras', p: '4.590' },
  { t: 'Lúcuma merengue', d: 'helado doble de lúcuma, merengue y chantilly', p: '4.590' },
  { t: 'Café helado', d: '', p: '4.290' },
  { t: 'Bambini', d: 'helado simple sobre salsa, con crema, chubis y sombrero', p: '3.990' },
]

const HORAS = [
  { d: 'Lunes a viernes', h: '10:00–15:30 · 18:00–22:00' },
  { d: 'Sábado', h: '18:00 – 23:00' },
  { d: 'Domingo', h: 'cerrado' },
]

function Kicker({ children, color = C.ambar }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] font-bold tracking-[0.32em] uppercase`} style={{ color }}>
      {children}
    </p>
  )
}

function Precio({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} shrink-0 text-[12px] font-bold px-2.5 py-1 rounded-full`}
      style={{ border: `1.5px solid ${C.ambar}`, color: C.ambar }}
    >
      ${children}
    </span>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.ambar, color: C.pizarra }
      : { border: `1.5px solid ${C.tiza}`, color: C.tiza }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 text-lg font-semibold uppercase tracking-[0.08em] rounded-sm transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.pizarra, color: C.tiza }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold uppercase tracking-wide`}
        theme={{ over: 'dark', bar: 'rgba(22,24,29,0.95)', ink: C.tiza, line: C.line, btnBg: C.ambar, btnInk: C.pizarra }}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — la esquina de noche */}
        <section id="inicio" className="pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
              <Reveal>
                <div>
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${IMG}/logo.webp`}
                      alt="Sello circular burdeo de Café Baires con granos de café"
                      className="w-14 h-14 rounded-full"
                      style={{ boxShadow: `0 0 0 2px ${C.burdeo}, 0 0 0 4px ${C.pizarra}` }}
                    />
                    <Kicker>café restaurante · Parral</Kicker>
                  </div>
                  <h1 className={`${display.className} mt-5 text-[52px] sm:text-7xl lg:text-[88px] font-extrabold uppercase leading-[0.92] tracking-tight`}>
                    «Lo bueno <span style={{ color: C.ambar }}>y lo nuevo»</span>
                  </h1>
                  <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: C.muted }}>
                    Así abre la carta del café de la esquina de la Arturo Prat:
                    sandwiches con nombre propio, sellados de once, jugos
                    naturales y helados de copa.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Btn href="#pizarra" tone="solid" external={false}>Ver la pizarra</Btn>
                    <Btn href={WA_LINK} tone="line">Pedir por WhatsApp</Btn>
                  </div>
                  <div className="mt-7 flex items-center gap-3">
                    <Stars value={5} color={C.ambar} className="w-[18px] h-[18px]" />
                    <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                      {BIZ.rating} en Google · {BIZ.reviews} reseñas
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <figure className="relative">
                  <div className="overflow-hidden rounded-sm" style={{ border: `4px solid ${C.tiza}`, boxShadow: '0 24px 50px rgba(0,0,0,0.5)' }}>
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Fachada de Café Baires al atardecer con el toldo a rayas verdes y el letrero redondo encendido"
                      width={900}
                      height={1200}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] tracking-[0.2em] uppercase text-center`} style={{ color: C.muted }}>
                    la esquina de la Arturo Prat, al caer la tarde
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
          {/* cinta de nombres de la casa */}
          <div className="mt-12 border-y py-3 overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.pizarraHi }}>
            <p className={`${display.className} whitespace-nowrap text-center text-xl md:text-2xl font-semibold uppercase tracking-[0.14em]`} style={{ color: C.ambar }}>
              La Grandiosa&nbsp;·&nbsp;La Pituca&nbsp;·&nbsp;La Gringa&nbsp;·&nbsp;La Granjera&nbsp;·&nbsp;Baires&nbsp;·&nbsp;La Vaquera Vijaa&nbsp;·&nbsp;El Clásico&nbsp;·&nbsp;La Texana
            </p>
          </div>
        </section>

        {/* LA PIZARRA — carta real recreada */}
        <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.pizarraHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <Kicker>menú · baires restaurante</Kicker>
                  <h2 className={`${display.className} text-5xl sm:text-6xl font-extrabold uppercase leading-[0.95] mt-3`}>
                    La pizarra
                  </h2>
                </div>
                <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
                  precios del cuaderno de la casa
                </p>
              </div>
            </Reveal>

            {/* sandwiches — la tabla de las 8 */}
            <Reveal>
              <div className="mt-10 rounded-lg p-6 md:p-8" style={{ backgroundColor: C.pizarra, border: `1.5px solid ${C.line}` }}>
                <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 border-b" style={{ borderColor: C.line }}>
                  <h3 className={`${display.className} text-3xl md:text-4xl font-bold uppercase`} style={{ color: C.ambar }}>Sandwiches</h3>
                  <p className={`${mono.className} text-[11px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                    en lomito de cerdo o pollo · churrasco · mechada · lomo de vacuno
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-10">
                  {SANDWICHES.map((s) => (
                    <div key={s.t} className="flex items-start justify-between gap-4 py-4 border-b" style={{ borderColor: C.line }}>
                      <div>
                        <p className={`${display.className} text-xl font-semibold uppercase tracking-wide`}>{s.t}</p>
                        <p className="mt-0.5 text-[14px] leading-snug" style={{ color: C.muted }}>{s.d}</p>
                      </div>
                      <div className="text-right">
                        <Precio>{s.p}</Precio>
                        <p className={`${mono.className} mt-1 text-[9px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>desde</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* tres columnas: sellados · bebidas · helados */}
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                { t: 'Sellados', items: SELLADOS },
                { t: 'Bebidas y jugos', items: BEBIDAS },
                { t: 'Helados', items: HELADOS },
              ].map((col, i) => (
                <Reveal key={col.t} delay={i * 90}>
                  <div className="h-full rounded-lg p-6" style={{ backgroundColor: C.pizarra, border: `1.5px solid ${C.line}` }}>
                    <h3 className={`${display.className} text-2xl md:text-[28px] font-bold uppercase pb-4 border-b`} style={{ color: C.ambar, borderColor: C.line }}>
                      {col.t}
                    </h3>
                    {col.items.map((it) => (
                      <div key={it.t} className="flex items-start justify-between gap-3 py-3 border-b last:border-b-0" style={{ borderColor: C.line }}>
                        <div>
                          <p className={`${display.className} text-lg font-semibold uppercase tracking-wide`}>{it.t}</p>
                          {it.d && <p className="text-[13px] leading-snug" style={{ color: C.muted }}>{it.d}</p>}
                        </div>
                        <Precio>{it.p}</Precio>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* el cuaderno real, como referencia */}
            <Reveal>
              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {[
                  { img: 'menu', alt: 'Página Sandwiches de la carta real de Café Baires, con nombres y precios por proteína' },
                  { img: 'menu-helados', alt: 'Página Helados de la carta real de Café Baires con las copas y sus precios' },
                ].map((m) => (
                  <figure key={m.img}>
                    <div className="overflow-hidden rounded-sm" style={{ border: `2px solid ${C.tiza}` }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/${m.img}.webp`} alt={m.alt} className="w-full aspect-[3/4] object-cover object-top" loading="lazy" />
                    </div>
                    <figcaption className={`${mono.className} mt-3 text-[10px] tracking-[0.2em] uppercase text-center`} style={{ color: C.muted }}>
                      la carta impresa, como se ve en la mesa
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* EL SALÓN — fotos del día a día */}
        <section id="salon" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Kicker>de la cocina y del salón</Kicker>
                <h2 className={`${display.className} text-5xl sm:text-6xl font-extrabold uppercase leading-[0.95] mt-3`}>
                  Lo que llega a la mesa
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
                fotos del local · @bairescafeparral
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { img: 'torta-hoja', alt: 'Torta de hoja de Café Baires servida frente al muro verde del salón', cap: 'la torta de hoja de la casa' },
              { img: 'churrasco', alt: 'Churrasco abierto de Café Baires con tomate, lechuga y papas fritas', cap: 'el abierto con papas' },
              { img: 'desayuno', alt: 'Desayuno de Café Baires con fruta fresca, tostado y café', cap: 'el desayuno de la mañana' },
              { img: 'cafe', alt: 'Cafés de Café Baires servidos en mesa de mármol frente a la columna verde', cap: 'café servido en la mesa' },
            ].map((f, i) => (
              <Reveal key={f.img} delay={i * 80}>
                <figure>
                  <div className="overflow-hidden rounded-sm" style={{ border: `1.5px solid ${C.line}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/${f.img}.webp`} alt={f.alt} className="w-full aspect-square object-cover" loading="lazy" />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[10px] tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* salón + horario partido */}
          <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <figure>
                <div className="overflow-hidden rounded-sm" style={{ border: `2px solid ${C.tiza}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/salon.webp`} alt="Salón de Café Baires con mesas blancas, muro de follaje verde y lámparas colgantes" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.muted }}>
                  el salón: mármol blanco y muro verde
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <Kicker>horario de la esquina</Kicker>
                <h3 className={`${display.className} text-4xl font-extrabold uppercase leading-[0.95] mt-3`}>
                  Dos turnos, un cierre
                </h3>
                <dl className="mt-6 border-t" style={{ borderColor: C.line }}>
                  {HORAS.map((h) => (
                    <div key={h.d} className="flex justify-between gap-4 py-3.5 border-b" style={{ borderColor: C.line }}>
                      <dt className="text-[15px]" style={{ color: C.muted }}>{h.d}</dt>
                      <dd className={`${mono.className} text-sm text-right`} style={{ color: h.h === 'cerrado' ? C.burdeo : C.tiza }}>{h.h}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  La cocina cierra a media tarde y vuelve para la once y la
                  cena. El sábado es solo de noche.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LA RESEÑA */}
        <section style={{ backgroundColor: C.burdeo }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <div className="flex justify-center">
                <Stars value={5} color={C.ambar} className="w-5 h-5" />
              </div>
              <blockquote className={`${display.className} mt-6 text-[40px] sm:text-6xl font-extrabold uppercase leading-[0.95]`}>
                «Lo mejor de Parral»
              </blockquote>
              <p className={`${mono.className} mt-5 text-[11px] tracking-[0.22em] uppercase`} style={{ color: 'rgba(243,238,226,0.75)' }}>
                Sandra Benavente · reseña en Google
              </p>
              <p className="mt-6 text-[15px] max-w-md mx-auto" style={{ color: 'rgba(243,238,226,0.8)' }}>
                Y una comunidad de más de 3.900 personas sigue sus novedades en {BIZ.igHandle}.
              </p>
            </Reveal>
          </div>
        </section>

        {/* LLEGAR */}
        <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <div>
                <Kicker>cómo llegar</Kicker>
                <h2 className={`${display.className} text-5xl sm:text-6xl font-extrabold uppercase leading-[0.95] mt-3`}>
                  Arturo Prat 341&nbsp;A
                </h2>
                <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                  Av. Arturo Prat 341 A
                  <br />
                  Parral · Región del Maule
                </address>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  El del toldo a rayas verdes y el letrero redondo encendido —
                  se reconoce de noche.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="solid">WhatsApp {BIZ.phoneDisplay}</Btn>
                  <Btn href={BIZ.instagram} tone="line">{BIZ.igHandle}</Btn>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-sm" style={{ border: `2px solid ${C.tiza}`, boxShadow: '10px 10px 0 rgba(142,47,75,0.55)' }}>
                <div className="aspect-[4/3]">
                  <LazyMap src={MAPS_EMBED} title="Mapa de Café Baires en Av. Arturo Prat 341 A, Parral" />
                </div>
              </div>
              <div className="mt-5">
                <Btn href={MAPS_URL} tone="line">Abrir en Google Maps</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t" style={{ borderColor: C.line, backgroundColor: '#101216' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg font-bold uppercase tracking-wide`} style={{ color: C.tiza }}>{BIZ.name} · Parral</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(243,238,226,0.5)' }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${display.className} text-base font-semibold uppercase tracking-wide tap-44 inline-flex items-center`} style={{ color: C.ambar }}>
            {BIZ.igHandle}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
