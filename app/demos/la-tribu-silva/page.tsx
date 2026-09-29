import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2' }],
})
const monoBold = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2' }],
})

/**
 * Dirección de arte: «el letrero de la salida norte» — diner de ruta
 * de noche: fondo carbón, neón ámbar del propio cartel del local y
 * monoespaciada de ticket de cocina. Unbounded hace de tubo luminoso,
 * Space Mono de comanda. La estructura imita la marquesina: cartel,
 * tira de antojos, pizarra real, horarios y el desvío al llegar.
 */
const C = {
  night: '#17100A',
  card: '#221810',
  neon: '#FFB03A',
  neonSoft: '#FFC766',
  cream: '#F3E9D5',
  muted: '#B7A88F',
  line: 'rgba(255,176,58,0.28)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'la-tribu-silva',
  title: 'La Tribu Silva — Comida casera a la salida norte de Maule',
  description:
    'Restaurante familiar en la salida norte de Maule: almuerzos caseros, empanadas, completos, chorrillana y pizza. Reservas por WhatsApp.',
  image: '/demos/la-tribu-silva/hero.webp',
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'El menú', href: '#menu' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Los antojos del propio letrero de neón del local.
const LETRERO = ['Pizza', 'Empanadas', 'Completos', 'Papas fritas', 'Chorrillana', 'Mote con huesillo']

// La pizarra manuscrita de la entrada, tal como ellos la publican.
const PIZARRA = [
  'Desayuno y once',
  'Almuerzos caseros',
  'Almuerzos extra',
  'Sándwich',
  'Empanadas',
  'Carnes asadas',
  'Completos',
  'Papas fritas',
  'Chorrillanas',
  'Mote con huesillo',
  'Pizza',
]

const OPINIONES = [
  {
    nombre: 'Yessica Perez',
    estrellas: 5,
    texto: 'Es un buen lugar donde almorzar o pasar a tomar onces. Muy limpio y rápida la atención.',
  },
  {
    nombre: 'N. P.',
    estrellas: 5,
    texto: 'Pequeño restaurante de comida casera. Muy limpio, acogedor y la comida deliciosa. Está en la salida norte del Maule, justo al salir de la autopista. Lo recomiendo.',
  },
  {
    nombre: 'M. B.',
    estrellas: 5,
    texto: 'Negocio familiar, gentil trato.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${monoBold.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4`} style={{ color: C.neon }}>
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(8,6,4,0.96)', color: '#FAF7EF' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function LaTribuPage() {
  return (
    <div className={`${mono.className} lts min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.night, color: C.cream }}>
      <style>{`
        .lts a:focus-visible { outline: 2px solid ${C.neon}; outline-offset: 3px }
        @keyframes lts-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .lts-marquee-track { animation: lts-marquee 26s linear infinite }
        @media (prefers-reduced-motion: reduce) { .lts-marquee-track { animation: none } .lts * { transition: none !important } }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.06em] font-bold">La Tribu Silva</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(23,16,10,0.96)',
          ink: C.cream,
          line: C.line,
          btnBg: C.neon,
          btnInk: '#17100A',
        }}
      />

      {/* ── Hero: el letrero de noche ── */}
      <section id="inicio" className="relative pt-[60px] md:pt-[68px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-8">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 items-center">
            <div>
              <Reveal>
                <Eyebrow>Restaurante familiar · Maule</Eyebrow>
                <h1
                  className={`${display.className} font-extrabold uppercase leading-[1.02] text-[clamp(2rem,8vw,4.6rem)] mb-5`}
                  style={{ color: C.cream, textShadow: `0 0 26px rgba(255,176,58,0.35)` }}
                >
                  La Tribu
                  <span className="block" style={{ color: C.neon, textShadow: `0 0 30px rgba(255,176,58,0.5)` }}>
                    Silva
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={90}>
                <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                  El letrero encendido a la salida norte de Maule: almuerzo
                  casero, once, completos y la mesa familiar que repiten las
                  reseñas.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${monoBold.className} text-sm px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.neon, color: '#17100A' }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.neonSoft, textDecorationColor: C.line }}
                  >
                    {BIZ.rating}★ · {BIZ.reviews} reseñas
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="relative overflow-hidden rounded-2xl aspect-[9/14] max-h-[520px] mx-auto w-full max-w-[300px] md:max-w-none" style={{ boxShadow: `0 0 0 1px ${C.line}, 0 18px 50px rgba(0,0,0,0.55), 0 0 60px rgba(255,176,58,0.12)` }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Letrero de neón de La Tribu Silva anunciando pizza, empanadas, completos y papas fritas"
                  fill
                  priority
                  sizes="(min-width: 768px) 34vw, 300px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Marquesina de antojos ── */}
        <div className="border-y overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
          <div className="lts-marquee-track flex w-max py-3.5">
            {[0, 1].map((dup) => (
              <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {LETRERO.map((t) => (
                  <li
                    key={`${dup}-${t}`}
                    className={`${display.className} uppercase text-sm md:text-base tracking-[0.14em] px-6 flex items-center gap-6 whitespace-nowrap`}
                    style={{ color: C.neonSoft }}
                  >
                    {t}
                    <span aria-hidden="true" style={{ color: C.neon }}>·</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ── La pizarra de la entrada ── */}
      <section id="pizarra" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]" style={{ boxShadow: '0 18px 48px rgba(0,0,0,0.5)' }}>
              <Image
                src={`${IMG}/pizarra.webp`}
                alt="Muro de pallets con el menú manuscrito de La Tribu Silva: desayuno, once, almuerzos, empanadas y más"
                fill
                sizes="(min-width: 1024px) 48vw, calc(100vw - 2.5rem)"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[11px] mt-3 tracking-wide`} style={{ color: C.muted }}>
              La pizarra real de la entrada del local.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>La pizarra de la entrada</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[1.05] mb-5`} style={{ color: C.cream }}>
              Escrito a mano,
              <br />
              <span style={{ color: C.neon }}>servido casero</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: C.muted }}>
              El muro de la terraza dice lo que hay: cocina de todos los
              días, sin letra chica. Esto es lo que ellos mismos publican:
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 max-w-md">
              {PIZARRA.map((p) => (
                <li key={p} className={`${monoBold.className} text-[13px] md:text-sm flex items-center gap-2`} style={{ color: C.cream }}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.neon }} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Del almuerzo a la once ── */}
      <section id="menu" className="scroll-mt-20 border-y" style={{ backgroundColor: C.card, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Del almuerzo a la once</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
              <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[1.05]`} style={{ color: C.cream }}>
                Cocina prendida
                <br />
                <span style={{ color: C.neon }}>casi todo el día</span>
              </h2>
              <p className={`${monoBold.className} text-[11px] md:text-xs uppercase tracking-[0.2em] max-w-[280px]`} style={{ color: C.muted }}>
                {BIZ.horario}
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                src: `${IMG}/almuerzo.webp`,
                alt: 'Plato de almuerzo casero con carne, arroz y ensalada en La Tribu Silva',
                titulo: 'Almuerzo casero',
                nota: 'El menú del día, servido rápido según las reseñas.',
                pos: 'center',
              },
              {
                src: `${IMG}/pizza.webp`,
                alt: 'Pizza en tabla de madera en La Tribu Silva, Maule',
                titulo: 'Pizza',
                nota: 'La del letrero, para la tarde y la once.',
                pos: 'center',
              },
              {
                src: `${IMG}/atencion.webp`,
                alt: 'Atención en el mostrador de La Tribu Silva',
                titulo: 'Atendido por la familia',
                nota: 'Negocio familiar, gentil trato, dicen los clientes.',
                pos: 'center 15%',
              },
            ].map((f, i) => (
              <li key={f.titulo}>
                <Reveal delay={i * 100}>
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                      style={{ objectPosition: f.pos }}
                    />
                  </div>
                  <h3 className={`${display.className} uppercase text-base md:text-lg mb-1.5`} style={{ color: C.neonSoft }}>
                    {f.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                    {f.nota}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={200}>
            <div className="mt-9 grid md:grid-cols-[1fr_1.6fr] gap-5 items-center rounded-xl p-5" style={{ border: `1px dashed ${C.line}` }}>
              <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                <Image
                  src={`${IMG}/patio.webp`}
                  alt="Terraza con mesas junto al muro de pallets y el menú manuscrito de La Tribu Silva"
                  fill
                  sizes="(min-width: 768px) 36vw, calc(100vw - 4rem)"
                  className="object-cover"
                />
              </div>
              <div>
                <p className={`${monoBold.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.neon }}>
                  El patio de pallets
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                  Afuera hay terraza con mesas junto al muro del menú, para
                  comer al aire libre en los días buenos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>Las {BIZ.reviews} reseñas de Google</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[1.05]`} style={{ color: C.cream }}>
              «Gentil trato»,
              <br />
              <span style={{ color: C.neon }}>dice la ficha</span>
            </h2>
            <div className="flex items-center gap-3">
              <Stars value={4.5} color={C.neon} />
              <span className={`${monoBold.className} text-sm`} style={{ color: C.muted }}>
                {BIZ.rating} de 5
              </span>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {OPINIONES.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 100}>
              <figure className="h-full p-5 md:p-6 rounded-xl" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                <Stars value={r.estrellas} color={C.neon} className="w-3.5 h-3.5" />
                <blockquote className="text-[13px] md:text-sm leading-relaxed mt-3 mb-4" style={{ color: C.cream }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${monoBold.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.neon }}>
                  {r.nombre} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
            style={{ color: C.neonSoft, textDecorationColor: C.line }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20 border-t" style={{ backgroundColor: '#120C07', borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow>Al salir de la autopista</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[1.05] mb-6`} style={{ color: C.cream }}>
                El primer cartel
                <br />
                <span style={{ color: C.neon }}>de la salida norte</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <span className="text-xs">{BIZ.horario}</span>
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${monoBold.className} text-sm px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.neon, color: '#17100A' }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${monoBold.className} text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                  style={{ borderColor: 'rgba(255,176,58,0.45)', color: C.neonSoft }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-2xl min-h-[280px]" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#120C07', color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ borderColor: C.line }}>
          <div>
            <p className={`${display.className} font-extrabold uppercase text-lg mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              WhatsApp{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: C.muted }}>
            Fotos, reseñas, menú de la pizarra, horario, rating y teléfono
            son los reales de la ficha de Google del restaurant.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
