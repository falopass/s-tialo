import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «confetti de pelotas» — la fachada de HEMA es un
 * muro rayado de arcoíris y adentro todo es piscina de pelotas: puntos
 * de colores dispersos sobre crema, etiquetas de entrada y Baloo como
 * letra de letrero infantil. Un solo acento manda: el naranja del arco.
 */
const C = {
  paper: '#FFF4E4',
  card: '#FFFDF8',
  ink: '#2B1140',
  deep: '#20093A',
  naranja: '#F2641E',
  morado: '#7C4BC4',
  celeste: '#21A3D8',
  lima: '#8CBF2E',
  amarillo: '#FFC61A',
  rosa: '#EE5B8D',
  muted: '#6D5F7E',
  line: 'rgba(43,17,64,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hema-parque-infantil',
  title: 'HEMA Parque Infantil — Piscinas de pelotas y juegos en Talca',
  description:
    'Parque infantil en Av. San Miguel 4993, Talca: piscina de pelotas, resbalines, trampolines, bloques gigantes y zona para los más chicos.',
  image: '/demos/hema-parque-infantil/hero.webp',
})

const NAV_LINKS = [
  { label: 'Los juegos', href: '#juegos' },
  { label: 'Para los papás', href: '#papas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const CONFETTI = [C.naranja, C.morado, C.celeste, C.lima, C.amarillo, C.rosa]

/** Lluvia de pelotas: puntos de colores en posiciones fijas. */
function Confetti({
  spots,
  className = '',
}: {
  spots: [number, number, number, number][] // [left%, top%, size, colorIdx]
  className?: string
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {spots.map(([x, y, s, c], i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: s,
            height: s,
            backgroundColor: CONFETTI[c % CONFETTI.length],
          }}
        />
      ))}
    </div>
  )
}

/** Borde de ticket: semicírculos recortados a los lados. */
function Ticket({
  children,
  bg = C.card,
  className = '',
}: {
  children: React.ReactNode
  bg?: string
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="relative rounded-2xl border h-full"
        style={{ backgroundColor: bg, borderColor: C.line, boxShadow: '0 10px 28px rgba(43,17,64,0.08)' }}
      >
        {children}
      </div>
      <span
        className="absolute top-1/2 -translate-y-1/2 -left-[11px] w-[20px] h-[20px] rounded-full"
        style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
        aria-hidden="true"
      />
      <span
        className="absolute top-1/2 -translate-y-1/2 -right-[11px] w-[20px] h-[20px] rounded-full"
        style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
        aria-hidden="true"
      />
    </div>
  )
}

function Etiqueta({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-2.5 font-extrabold"
      style={{ color: color ?? (light ? C.amarillo : C.morado) }}
    >
      <span className="flex gap-1" aria-hidden="true">
        {[C.naranja, C.celeste, C.lima].map((c) => (
          <span key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
        ))}
      </span>
      {children}
    </p>
  )
}

const ZONAS = [
  {
    src: 'piscina',
    num: 'SECTOR 01',
    name: 'Piscina de pelotas',
    desc: 'Un mar de pelotas de colores para tirarse de cabeza: la foto más pedida del parque.',
    chip: 'Todas las edades',
    color: C.celeste,
  },
  {
    src: 'juegos',
    num: 'SECTOR 02',
    name: 'Puerto espacial',
    desc: 'Estructura de varios pisos con resbalín gigante, puentes y miradores para explorar.',
    chip: 'La más grande',
    color: C.morado,
  },
  {
    src: 'bloques',
    num: 'SECTOR 03',
    name: 'Foso de bloques',
    desc: 'Bloques de espuma gigantes, puente colgante y escalada suave para armar y derribar.',
    chip: 'A construir',
    color: C.naranja,
  },
  {
    src: 'resbalin',
    num: 'SECTOR 04',
    name: 'Resbalines y cornetas',
    desc: 'Resbalines de colores que bajan directo a las pelotas: subir y bajar sin parar.',
    chip: 'Los favoritos',
    color: C.rosa,
  },
  {
    src: 'peques',
    num: 'SECTOR 05',
    name: 'Zona de los chicos',
    desc: 'Sector amarillo acolchado para los más pequeños: casitas, resbalines bajos y suelo blando.',
    chip: 'Menores de 5',
    color: C.lima,
  },
] as const

const PAPAS = [
  { t: 'Cafetería y chiches', d: 'Café, snacks y la tienda de juguetes del parque para salir con premio.' },
  { t: 'Estacionamiento', d: 'Buen estacionamiento al lado, para llegar con el auto lleno de niños.' },
  { t: 'Orden y limpieza', d: 'Lo repiten las reseñas: instalaciones limpias, ordenadas y bien cuidadas.' },
] as const

const RESENAS = [
  {
    text: 'Un lugar muy hermoso y entretenido para niños y adultos. Recomendable 1.000%.',
    author: 'José Luis O.',
  },
  {
    text: 'Excelente la instalación, muy limpio y ordenado. Vale la pena lo que se paga por la experiencia.',
    author: 'Dámariss E.',
  },
  {
    text: 'Por un valor accesible tienen acceso a un tremendo espacio y geniales juegos: bloques, resbalines, muro de escalada, túneles y trampolines.',
    author: 'A. Suazo',
  },
] as const

const HORAS = [
  { days: 'Lunes a viernes', time: '12:00 – 20:30' },
  { days: 'Sábado y domingo', time: '10:00 – 21:30' },
] as const

export default function HemaParqueInfantilPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(32,9,58,0.94)',
          ink: '#FFF4E4',
          line: 'rgba(255,255,255,0.16)',
          btnBg: C.naranja,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero: el arco de los payasos ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Entrada de HEMA Parque Infantil en Talca, con los payasos inflables y la fachada de arcoíris"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(32,9,58,0.58) 0%, rgba(32,9,58,0.3) 44%, rgba(32,9,58,0.94) 100%)',
          }}
        />
        <Confetti
          spots={[
            [6, 14, 14, 0],
            [88, 10, 18, 4],
            [78, 26, 10, 1],
            [12, 34, 10, 2],
            [93, 42, 12, 5],
            [4, 52, 8, 3],
          ]}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-extrabold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(255,244,228,0.96)', color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.naranja} className="w-[14px] h-[14px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Etiqueta light>Parque infantil · Av. San Miguel, Talca</Etiqueta>
            <h1
              className={`${display.className} scroll-mt-28 font-extrabold leading-[0.95] tracking-[0.01em] text-[clamp(2.9rem,11vw,6.5rem)] mb-6`}
              style={{ color: '#FFF4E4' }}
            >
              Un mar de pelotas
              <br />
              <span style={{ color: C.amarillo }}>en San Miguel</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-semibold" style={{ color: 'rgba(255,244,228,0.92)' }}>
              Resbalines, trampolines, bloques gigantes y la piscina de
              pelotas más grande del barrio: el plan que deja a los niños
              dormidos a las ocho.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.03em] text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.naranja, color: C.ink }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#juegos"
                className={`${display.className} font-bold tracking-[0.03em] text-sm md:text-base px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(255,244,228,0.55)', color: '#FFF4E4' }}
              >
                Ver los juegos
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(255,244,228,0.22)', backgroundColor: 'rgba(32,9,58,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(255,244,228,0.92)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.lima }} aria-hidden="true" />
              Hoy abre a las 12:00
            </span>
            <span>Sáb–Dom desde las 10:00</span>
            <span className="hidden md:inline" style={{ color: C.amarillo }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Sectores de juego: boletos con foto ── */}
      <section id="juegos" className="scroll-mt-20 relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Confetti
          spots={[
            [2, 4, 10, 2],
            [96, 8, 12, 0],
            [4, 46, 8, 4],
            [97, 55, 9, 1],
            [3, 88, 11, 5],
          ]}
        />
        <Reveal>
          <Etiqueta>Los juegos</Etiqueta>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[0.98]`} style={{ color: C.ink }}>
              Cinco sectores,
              <br />
              <span style={{ color: C.morado }}>cero minutos de aburrimiento</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end font-semibold" style={{ color: C.muted }}>
              Del foso de bloques al resbalín gigante: cada sector es una
              entrada distinta a la misma tarde de juego.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {ZONAS.map((z, i) => (
            <Reveal key={z.num} delay={i * 70} className={i === 0 ? 'sm:col-span-2' : ''}>
              <Ticket className="h-full">
                <li className="h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={`${IMG}/${z.src}.webp`}
                      alt={z.desc}
                      loading="lazy"
                      className={`w-full object-cover ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                    />
                    <span
                      className={`${display.className} absolute top-3 left-3 font-bold uppercase tracking-[0.1em] text-[11px] px-3 py-1.5 rounded-full`}
                      style={{ backgroundColor: 'rgba(32,9,58,0.88)', color: '#FFF4E4' }}
                    >
                      {z.num}
                    </span>
                  </div>
                  <div className="p-5 md:p-6 flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className={`${display.className} font-bold text-2xl`} style={{ color: C.ink }}>
                        {z.name}
                      </h3>
                      <span
                        className="text-[10px] uppercase tracking-[0.16em] font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap"
                        style={{ backgroundColor: `${z.color}22`, color: C.ink, border: `1px solid ${z.color}55` }}
                      >
                        {z.chip}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: C.muted }}>
                      {z.desc}
                    </p>
                  </div>
                </li>
              </Ticket>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Para los papás ── */}
      <section id="papas" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Confetti
          spots={[
            [8, 12, 12, 4],
            [90, 18, 10, 0],
            [4, 78, 14, 2],
            [94, 84, 8, 3],
            [50, 6, 7, 5],
          ]}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <Etiqueta light>Para los papás</Etiqueta>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#FFF4E4' }}>
              Ellos saltan,
              <br />
              <span style={{ color: C.amarillo }}>tú descansas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-8 font-semibold" style={{ color: 'rgba(255,244,228,0.86)' }}>
              El parque está pensado para soltarlos sin soltarlos de
              vista: cafetería con mesas mirando los juegos, dulces y
              juguetes para la salida.
            </p>
            <ul className="space-y-4">
              {PAPAS.map((p) => (
                <li key={p.t} className="flex gap-4 items-start">
                  <span
                    className="mt-1 w-3.5 h-3.5 rounded-full shrink-0"
                    style={{ backgroundColor: C.naranja }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className={`${display.className} font-bold text-lg`} style={{ color: '#FFF4E4' }}>{p.t}</p>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'rgba(255,244,228,0.72)' }}>{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden rotate-[1.5deg]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                <img
                  src={`${IMG}/cafe.webp`}
                  alt="Cafetería y tienda de chiches de HEMA Parque Infantil"
                  loading="lazy"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div
                className={`${display.className} absolute -bottom-5 -left-4 md:-left-8 rotate-[-4deg] font-bold px-5 py-3 rounded-2xl text-sm md:text-base`}
                style={{ backgroundColor: C.amarillo, color: C.ink, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
              >
                café + chiches adentro
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Etiqueta>Reseñas</Etiqueta>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              Lo que dicen
              <br />
              los papás
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <Stars value={BIZ.rating} color={C.naranja} className="w-5 h-5" />
              <span className={`${display.className} font-extrabold text-2xl`} style={{ color: C.ink }}>
                {BIZ.rating}
              </span>
              <span className="text-sm font-bold" style={{ color: C.muted }}>
                · {BIZ.reviews} reseñas en Google
              </span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-semibold" style={{ color: C.muted }}>
              Textos reales de la ficha de Google Maps del parque.
            </p>
          </Reveal>
          <ul className="grid gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <Ticket>
                  <li className="p-5 md:p-6">
                    <p className="text-sm md:text-base leading-relaxed font-semibold mb-3" style={{ color: C.ink }}>
                      “{r.text}”
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] font-extrabold" style={{ color: C.morado }}>
                      {r.author} · Google Maps
                    </p>
                  </li>
                </Ticket>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#F6E7CF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Etiqueta>Cómo llegar</Etiqueta>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: C.ink }}>
              La casa de arcoíris
              <br />
              <span className="inline-block rounded-xl px-3 -rotate-1" style={{ backgroundColor: C.naranja, color: C.ink }}>
                de San Miguel
              </span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-semibold" style={{ color: C.ink }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-baseline gap-2 text-sm md:text-base">
                  <span className="font-extrabold" style={{ color: C.ink }}>{h.days}</span>
                  <span className="flex-1 border-b-2 border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                  <span className={`${display.className} font-bold`} style={{ color: C.morado }}>{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.03em] text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.naranja, color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.03em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border-4 min-h-[300px]" style={{ borderColor: C.ink, boxShadow: '8px 8px 0 rgba(43,17,64,0.9)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#FFF4E4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ borderColor: 'rgba(255,244,228,0.16)' }}>
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed font-semibold" style={{ color: 'rgba(255,244,228,0.66)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" style={{ color: 'rgba(255,244,228,0.66)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,244,228,0.16)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
            <DemoBand name={BIZ.name} />
            <p className="text-xs leading-relaxed font-semibold mt-3" style={{ color: 'rgba(255,244,228,0.7)' }}>
              Los textos de venta son de muestra; el teléfono, la dirección,
              el horario, las reseñas y las fotos son los reales de la ficha
              de Google Maps.
            </p>
          </div>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
