import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_EMBED, IMG, COCINA, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta tomada de su letrero real: rojo señal "DAY'S", asfalto, crema de loza
// y el verde de las señales de ruta chilenas.
const C = {
  asfalto: '#191714',
  asfalto2: '#211E1A',
  crema: '#F4EDDC',
  papel: '#FBF7EC',
  tinta: '#241F18',
  rojo: '#A61E1E',
  rojoClaro: '#D9493B',
  verdeRuta: '#14532D',
  muda: 'rgba(244,237,220,0.78)',
  linea: 'rgba(244,237,220,0.14)',
  lineaPapel: 'rgba(36,31,24,0.14)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'cazuelas-day-s',
  title: "Cazuelas Day's — La parada del km 328 | Sitiazo.cl",
  description:
    'Restaurante de carretera en Ruta 5 km 328, Retiro. Cazuelas, almuerzos contundentes y atención de su dueño. Consultas por WhatsApp.',
  image: `${IMG}/letrero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Línea demarcada de carretera: la división entre secciones de esta parada.
function LineaRuta({ invertida = false }: { invertida?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[10px] w-full"
      style={{
        backgroundColor: invertida ? C.papel : C.asfalto,
        backgroundImage: `repeating-linear-gradient(90deg, ${C.crema} 0 34px, transparent 34px 68px)`,
        backgroundSize: '68px 3px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
      }}
    />
  )
}

// Chip tipo señal de carretera chilena (verde con borde blanco).
function SenalRuta({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 ${className}`}
      style={{ backgroundColor: C.verdeRuta, color: '#fff', border: '2px solid rgba(255,255,255,0.85)', borderRadius: 4 }}
    >
      {children}
    </span>
  )
}

function CtaWa({ texto = 'Avisar que voy', link = WA_LINK_MESA }: { texto?: string; link?: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${mono.className} inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-transform active:scale-95`}
      style={{ backgroundColor: C.rojo, color: '#fff', borderRadius: 4, boxShadow: `0 0 0 2px rgba(255,255,255,0.2) inset` }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.3 1.5Z" />
      </svg>
      {texto}
    </a>
  )
}

export default function CazuelasDays() {
  return (
    <main className={body.className} style={{ backgroundColor: C.asfalto, color: C.crema, ...SPACING }}>
      <BlitzNav
        name={
          <span className={display.className}>
            DAY’S <span style={{ color: C.rojoClaro }}>·</span> KM 328
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{ over: 'dark', bar: C.asfalto, ink: C.crema, line: C.linea, btnBg: C.rojo, btnInk: '#fff' }}
        fontClass={display.className}
      />

      {/* ── HERO: la señal en la ruta ─────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 grid md:grid-cols-[1.15fr_0.85fr] gap-8 items-end">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <SenalRuta>Ruta 5 · Km 328</SenalRuta>
                <SenalRuta>Sentido Sur → Norte</SenalRuta>
              </div>
              <h1 className={`${display.className} uppercase leading-[0.9] text-[17vw] md:text-8xl`}>
                Cazuelas
                <br />
                <span style={{ color: C.rojoClaro }}>Day’s</span>
              </h1>
              <p className="mt-5 max-w-md text-base md:text-lg" style={{ color: C.muda }}>
                El restaurante del letrero rojo al borde de la Ruta 5, en Retiro. Cazuela humeante,
                almuerzos contundentes y la mesa de quienes recorren el Maule en camión o en auto.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <CtaWa />
                <a
                  href="#llegar"
                  className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide transition-colors`}
                  style={{ color: C.crema, border: `1px solid ${C.linea}`, borderRadius: 4 }}
                >
                  Ver el km exacto
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/letrero.webp`}
                alt="Letrero rojo de Cazuelas Day's al borde de la Ruta 5, km 328, Retiro"
                className="w-full object-cover aspect-[3/4] max-h-[420px] md:max-h-[520px]"
                style={{ border: `4px solid ${C.crema}`, borderRadius: 6, transform: 'rotate(1.5deg)' }}
              />
              <figcaption
                className={`${mono.className} absolute -bottom-3 left-4 text-[11px] uppercase tracking-[0.14em] px-2.5 py-1`}
                style={{ backgroundColor: C.rojo, color: '#fff', borderRadius: 3 }}
              >
                El letrero real, a la orilla de la ruta
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <LineaRuta />
      </section>

      {/* ── LAS SEÑALES: datos de la parada ────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojo }}>
              Para quien viene manejando
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
              Las señales del km 328
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Reveal delay={0}>
              {/* Señal circular tipo "límite": la nota de Google */}
              <div
                className="h-full rounded-2xl p-6 flex flex-col items-center text-center"
                style={{ backgroundColor: C.papel, border: `2px solid ${C.lineaPapel}` }}
              >
                <div
                  className="w-24 h-24 rounded-full flex flex-col items-center justify-center"
                  style={{ border: `6px solid ${C.rojo}`, backgroundColor: C.papel }}
                  aria-hidden="true"
                >
                  <span className={`${display.className} text-3xl leading-none`}>{BIZ.rating}</span>
                </div>
                <div className="mt-3">
                  <Stars value={4.6} color={C.rojo} />
                </div>
                <p className="mt-2 text-sm font-semibold">{BIZ.reviews} reseñas en Google</p>
                <p className="mt-1 text-xs" style={{ color: 'rgba(36,31,24,0.65)' }}>
                  La nota que le ponen los que paran a comer.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              {/* Señal verde de distancia */}
              <div
                className="h-full rounded-2xl p-6 flex flex-col justify-between"
                style={{ backgroundColor: C.verdeRuta, color: '#fff' }}
              >
                <div className={`${mono.className} text-xs uppercase tracking-[0.2em] opacity-80`}>
                  Hitos de ruta
                </div>
                <div>
                  <p className={`${display.className} text-4xl uppercase leading-none`}>Km 328</p>
                  <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    Ruta 5 Panamericana, orilla en dirección sur → norte, comuna de Retiro.
                  </p>
                </div>
                <div className={`${mono.className} mt-4 text-xs uppercase tracking-[0.14em]`}>
                  Talca ↓ 40 km · Chillán ↑ 55 km
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              {/* Señal blanca de horario */}
              <div
                className="h-full rounded-2xl p-6"
                style={{ backgroundColor: C.papel, border: `2px solid ${C.lineaPapel}` }}
              >
                <div className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.rojo }}>
                  Cuándo abre la olla
                </div>
                <ul className="mt-3 space-y-2">
                  {HORARIO.map((h) => (
                    <li key={h.d} className="flex justify-between gap-3 text-sm">
                      <span className="font-semibold">{h.d}</span>
                      <span className={`${mono.className} text-xs self-center`} style={{ color: 'rgba(36,31,24,0.7)' }}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs" style={{ color: 'rgba(36,31,24,0.65)' }}>
                  El horario puede variar — confirma el del día por WhatsApp antes de bajar de la ruta.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DE LA COCINA ─────────────────────────────────────── */}
      <section id="carta" className="py-14 md:py-20" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojoClaro }}>
                  La olla de la casa
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
                  Lo que sale de la cocina
                </h2>
              </div>
              <p className="max-w-xs text-sm" style={{ color: C.muda }}>
                Fotos reales de la ficha de Google: platos de día, lloza de campo y porciones de carretera.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {COCINA.map((p, i) => (
              <Reveal key={p.img} delay={i * 70}>
                <figure
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: C.asfalto2, border: `1px solid ${C.linea}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/${p.img}.webp`}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <figcaption className="p-3.5">
                    <p className="text-sm font-bold">{p.plato}</p>
                    <p className="mt-1 text-xs leading-snug" style={{ color: C.muda }}>
                      {p.detalle}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <figure className="mt-4 rounded-xl overflow-hidden relative" style={{ border: `1px solid ${C.linea}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/hero.webp`}
                alt="Cuchara sirviendo caldo sobre una cazuela con zapallo, papa y arvejas"
                loading="lazy"
                className="w-full aspect-[21/9] object-cover object-center"
              />
              <figcaption
                className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.14em] px-2.5 py-1`}
                style={{ backgroundColor: 'rgba(25,23,20,0.85)', color: C.crema, borderRadius: 3 }}
              >
                El caldo se sirve a la mesa
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <LineaRuta />

      {/* ── RESEÑAS: boleta de la ruta ────────────────────────── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojoClaro }}>
              Boleta de la ruta
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
              Lo que dicen los que paran
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 80}>
                <blockquote
                  className="h-full p-6 flex flex-col"
                  style={{
                    backgroundColor: C.papel,
                    color: C.tinta,
                    borderRadius: 4,
                    borderTop: `5px solid ${C.rojo}`,
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <Stars value={r.estrellas} color={C.rojo} />
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(36,31,24,0.55)' }}>
                      Reseña de Google
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed flex-1">“{r.texto}”</p>
                  <footer className={`${mono.className} mt-4 text-xs uppercase tracking-[0.14em]`} style={{ color: C.rojo }}>
                    — {r.autor}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL DUEÑO ─────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="grid grid-cols-[1fr_0.62fr] gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/dueno.webp`}
                alt="El dueño de Cazuelas Day's con delantal, recibiendo en el interior de madera del local"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover rounded-xl"
                style={{ border: `4px solid ${C.papel}`, boxShadow: '0 14px 30px rgba(25,23,20,0.25)' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/interior.webp`}
                alt="Mesón y mostrador de madera del interior de Cazuelas Day's"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover rounded-xl self-end"
                style={{ border: `4px solid ${C.papel}`, boxShadow: '0 14px 30px rgba(25,23,20,0.2)' }}
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojo }}>
              Casa con dueño a la vista
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
              “Atendido por su dueño”
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgba(36,31,24,0.8)' }}>
              Así lo repiten las reseñas: acá el que te recibe es el mismo que lleva la cocina.
              Interior de madera, cocina a la vista y la mesa puesta para quien baja de la ruta
              con hambre de verdad.
            </p>
            <p className="mt-4 text-sm" style={{ color: 'rgba(36,31,24,0.65)' }}>
              Precios pensados para camioneros y público en general, según sus propios clientes.
            </p>
            <div className="mt-7">
              <CtaWa texto="Consultar por WhatsApp" link={WA_LINK} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────────── */}
      <section id="llegar" className="py-14 md:py-20" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojoClaro }}>
                  Baja en el kilómetro exacto
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
                  Orilla de la Ruta 5
                </h2>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <SenalRuta className="shrink-0 mt-0.5">Km</SenalRuta>
                    <p className="text-sm" style={{ color: C.muda }}>
                      {BIZ.address}, {BIZ.city}, {BIZ.region}. En la orilla en dirección sur → norte,
                      junto al letrero rojo.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <SenalRuta className="shrink-0 mt-0.5">Tel</SenalRuta>
                    <p className="text-sm" style={{ color: C.muda }}>
                      {BIZ.phoneDisplay} — avisa por WhatsApp y la mesa te espera.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <SenalRuta className="shrink-0 mt-0.5">★</SenalRuta>
                    <p className="text-sm" style={{ color: C.muda }}>
                      {BIZ.rating} en Google con {BIZ.reviews} reseñas de viajeros.
                    </p>
                  </li>
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <CtaWa />
                  <a
                    href={BIZ.mapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                    style={{ color: C.crema, border: `1px solid ${C.linea}`, borderRadius: 4 }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
              <Reveal delay={100}>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Cazuelas Day's vista desde la Ruta 5 en Retiro"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover rounded-xl"
                    style={{ border: `4px solid ${C.crema}` }}
                  />
                </figure>
              </Reveal>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 rounded-xl overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[300px] block"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.asfalto2, borderTop: `1px solid ${C.linea}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-lg`}>
              Cazuelas <span style={{ color: C.rojoClaro }}>Day’s</span>
            </p>
            <p className="text-xs mt-1" style={{ color: C.muda }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </p>
          </div>
          <div className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.muda }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {BIZ.phoneDisplay}
            </a>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <a href={BIZ.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Ficha en Maps
            </a>
          </div>
          <p className="text-[11px] w-full md:w-auto" style={{ color: 'rgba(244,237,220,0.45)' }}>
            Demo de vitrina para la pyme — hecho por Sitiazo.cl
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
