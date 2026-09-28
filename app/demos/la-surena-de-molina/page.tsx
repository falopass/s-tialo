import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el letrero de la ruta». La Sureña vive en un galpón
 * de madera tallada a mano con un letrero rojo que anuncia colaciones en la
 * Entrada Sur de Molina, a la salida de la Ruta 5. La página se lee como la
 * carta de un restaurant de carretera: tipografía de rótulo pesada, rojo del
 * letrero sobre papel crema y fotos reales con borde de postal. Archivo
 * Black para el rótulo, Mulish para el cuerpo, Plex Mono para los datos.
 */
const C = {
  paper: '#F6EEDF',
  card: '#FFFBF3',
  ink: '#2C1E14',
  deep: '#241710',
  red: '#B23A2A',
  redSoft: '#F3DAD2',
  mustard: '#D9A441',
  wood: '#7A5233',
  muted: '#6E5B4C',
  line: 'rgba(44,30,20,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'la-surena-de-molina',
  title: 'La Sureña de Molina — Comida casera en la Entrada Sur',
  description:
    'Restaurante de comida casera en la Entrada Sur de Molina, junto a la Ruta 5. Cazuelas, almuerzos y colaciones. 4,4★ con 352 reseñas en Google.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'El local', href: '#local' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#como-llegar' },
]

const CARTA = [
  { name: 'Colaciones', detalle: 'del día, listas para llevar', precio: '$3.000' },
  { name: 'Almuerzos', detalle: 'carta casera del día' },
  { name: 'Cazuelas', detalle: 'de vacuno o ave, con su huevo' },
  { name: 'Completos y churrascos', detalle: 'para el antojo de paso' },
  { name: 'Café, bebidas y confites', detalle: 'para seguir el viaje' },
]

const PLATOS = [
  { src: `${IMG}/cazuela.webp`, alt: 'Cazuela con carne, papa y huevo servida en plato de greda', label: 'Cazuela' },
  { src: `${IMG}/porotos.webp`, alt: 'Porotos con rienda servidos en plato de greda', label: 'Porotos' },
  { src: `${IMG}/plato.webp`, alt: 'Plato casero del día con ensalada', label: 'Plato del día' },
]

const RESENAS = [
  {
    nombre: 'Mauricio Núñez G.',
    texto:
      'Una joya en la región del Maule. La comida es sencillamente exquisita, con sabores que reflejan calidad en cada plato. Lo que la hace única es la atención de la señora Nancy y su equipo: cálida y acogedora, te hace sentir en casa desde que llegas.',
  },
  {
    nombre: 'Ignacio Gutiérrez',
    texto:
      'Volvíamos del sur y encontramos este restaurant, muy recomendado. Comida casera deliciosa, bien sazonada, porciones generosas y precios convenientes. La atención del mesero fue excelente. Si pasas por aquí, no dejes de parar.',
  },
  {
    nombre: 'Lesly Gaete',
    texto:
      'La comida estaba rica, todo limpio y bien cocido, la atención excelente, el ambiente agradable y buenos precios.',
  },
]

const HORARIO = [
  ['Lunes a viernes', '10:30 – 23:00'],
  ['Sábado', '10:30 – 17:00'],
  ['Domingo', 'Cerrado'],
]

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(246,238,223,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
        ctaLabel="Consultar"
      />

      {/* ── Hero: rótulo de carretera ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 90% 8%, rgba(217,164,65,0.22) 0%, rgba(217,164,65,0) 70%), radial-gradient(50% 40% at 0% 100%, rgba(178,58,42,0.10) 0%, rgba(178,58,42,0) 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[100px] md:pt-[124px] pb-12 md:pb-16">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.red }}>
              Ruta 5 · Entrada Sur de Molina
            </p>
            <h1
              className={`${display.className} mt-4 text-[2.5rem] leading-[0.98] md:text-7xl uppercase`}
              style={{ color: C.ink }}
            >
              Comida casera<br />
              <span style={{ color: C.red }}>al bajar de la ruta</span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              Cazuelas humeantes, almuerzos del día y colaciones para llevar. Una cocina de casa en un
              galpón de madera, atendida por su dueña.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tap-44 inline-flex items-center rounded-full px-6 py-3 text-base uppercase text-white shadow-lg`}
                style={{ backgroundColor: C.red }}
              >
                Escríbenos
              </a>
              <a
                href="#como-llegar"
                className={`${display.className} tap-44 inline-flex items-center rounded-full px-6 py-3 text-base uppercase`}
                style={{ color: C.ink, border: `2px solid ${C.ink}` }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
              style={{ backgroundColor: C.redSoft, color: C.ink }}
            >
              <Stars value={4.4} color={C.red} />
              <span>
                <strong>{BIZ.rating}</strong> · {BIZ.reviews} reseñas en Google
              </span>
            </a>
          </Reveal>
        </div>

        {/* foto de la fachada enmarcada + letrero */}
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12">
          <Reveal>
            <div className="grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: `6px solid ${C.card}` }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Fachada de La Sureña: letrero rojo y terraza con sombrillas en la Entrada Sur de Molina"
                  width={1200}
                  height={658}
                  priority
                  className="w-full object-cover aspect-[16/9]"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: `6px solid ${C.card}` }}>
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero tallado en madera de La Sureña: comida casera"
                  width={1200}
                  height={554}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Banda de carta ── */}
      <div aria-hidden="true" style={{ backgroundColor: C.red }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-center gap-x-6 gap-y-1">
          {['Cazuelas', 'Almuerzos', 'Colaciones $3.000', 'Completos', 'Té y café'].map((t) => (
            <span
              key={t}
              className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-white`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── De la cocina ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.red }}>
            La carta del día
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl uppercase leading-[1]`}>
            Lo que sale de la cocina
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
            Cocina de la casa, bien servida y a precio justo — como lo anuncia el letrero de afuera.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 grid-cols-2 md:grid-cols-4">
          <Reveal className="col-span-2 md:row-span-2">
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[220px]" style={{ border: `5px solid ${C.card}` }}>
              <Image
                src={`${IMG}/mesa.webp`}
                alt="Mesa servida con varios platos caseros y jugos naturales"
                width={900}
                height={1200}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span
                className={`${display.className} absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-xs uppercase text-white`}
                style={{ backgroundColor: 'rgba(36,23,16,0.85)' }}
              >
                Mesa servida
              </span>
            </div>
          </Reveal>
          {PLATOS.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <div className="relative rounded-3xl overflow-hidden" style={{ border: `5px solid ${C.card}` }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={900}
                  height={700}
                  className="w-full object-cover aspect-[4/3]"
                />
                <span
                  className={`${display.className} absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-xs uppercase text-white`}
                  style={{ backgroundColor: 'rgba(36,23,16,0.85)' }}
                >
                  {p.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-0 md:grid-cols-2">
          {CARTA.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div
                className="flex items-baseline justify-between gap-4 py-4"
                style={{ borderBottom: `1.5px dashed ${C.line}` }}
              >
                <div>
                  <h3 className={`${display.className} text-lg md:text-xl uppercase`}>{item.name}</h3>
                  <p className="text-sm" style={{ color: C.muted }}>{item.detalle}</p>
                </div>
                {item.precio && (
                  <span className={`${display.className} shrink-0 text-xl`} style={{ color: C.red }}>
                    {item.precio}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.mustard }}>
                El local
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl uppercase leading-[1] text-white`}>
                Un galpón de madera con alma de sur
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
                Vigas de madera, muros entallados y mesas amplias: el estilo recuerda a Pucón o Villarrica,
                dicen quienes pasan. Amplio, fresco en verano y con estacionamiento para parar tranquilo.
              </p>
              <p className={`${mono.className} mt-6 text-xs uppercase tracking-[0.2em]`} style={{ color: C.mustard }}>
                Mujer empresaria · atendida por su dueña
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Reveal className="col-span-2">
              <Image
                src={`${IMG}/interior.webp`}
                alt="Interior de La Sureña: muros y vigas de madera estilo cabaña sureña"
                width={1200}
                height={554}
                className="rounded-3xl object-cover aspect-[16/8] w-full"
              />
            </Reveal>
            <Reveal delay={100}>
              <Image
                src={`${IMG}/salon.webp`}
                alt="Salón interior con mesas de madera y ventanales"
                width={769}
                height={1200}
                className="rounded-3xl object-cover aspect-[3/4] w-full"
              />
            </Reveal>
            <Reveal delay={160}>
              <Image
                src={`${IMG}/gente.webp`}
                alt="Clientes almorzando en La Sureña"
                width={1078}
                height={811}
                className="rounded-3xl object-cover aspect-[3/4] w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.red }}>
              Opiniones
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl uppercase leading-[1]`}>
              La recomiendan los que pasan
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
              style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, color: C.ink }}
            >
              <Stars value={4.4} color={C.red} />
              {BIZ.rating} · {BIZ.reviews} reseñas · Google
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 110}>
              <figure
                className="rounded-3xl p-6 h-full flex flex-col"
                style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}
              >
                <Stars value={5} color={C.red} />
                <blockquote className="mt-4 text-sm leading-relaxed flex-1" style={{ color: C.muted }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-4 text-xs uppercase tracking-[0.14em]`} style={{ color: C.ink }}>
                  {r.nombre} <span style={{ color: C.muted }}>· Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="como-llegar" className="scroll-mt-20" style={{ backgroundColor: C.redSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.red }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl uppercase leading-[1]`}>
              Bajas en la Entrada Sur y ya estás
            </h2>
            <dl className="mt-7 space-y-4 text-sm md:text-base">
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                  Dirección
                </dt>
                <dd className="font-bold">Entrada Sur Molina, sitio 1 — {BIZ.city}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                  Teléfono
                </dt>
                <dd>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-6 space-y-1.5">
              {HORARIO.map(([d, h]) => (
                <div key={d} className="flex items-baseline gap-4 text-sm md:text-base">
                  <span className={`${mono.className} w-36 shrink-0 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {d}
                  </span>
                  <span className="font-bold">{h}</span>
                </div>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} tap-44 mt-8 inline-flex items-center rounded-full px-7 py-3 text-base uppercase text-white shadow-lg`}
              style={{ backgroundColor: C.red }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: `6px solid ${C.card}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name} en la Entrada Sur de Molina`}
                className="w-full aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18 text-center">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase leading-[1] text-white`}>
              Hambre de carretera?<br />Acá se come <span style={{ color: C.mustard }}>como en casa</span>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} tap-44 mt-8 inline-flex items-center rounded-full px-8 py-3 text-base uppercase`}
              style={{ backgroundColor: C.mustard, color: C.ink }}
            >
              Escríbenos por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-8 pb-6" style={{ backgroundColor: C.deep, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col items-center gap-3 text-center">
          <p className={`${display.className} text-sm uppercase text-white`}>{BIZ.name}</p>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
            {BIZ.address} · {BIZ.city} · {BIZ.region}
          </p>
          <div className="[&>div]:static [&>div]:mx-auto [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp" />
    </main>
  )
}
