import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «los listones tricolor» — el techo del salón de Alma
 * es una cortina de listones de madera con las puntas pintadas en verde y
 * rojo (la bandera italiana). La página repite ese detalle como divisor y
 * como marco: crema de mantel, espresso de la madera, tomate y albahaca.
 * Estructura propia: el día completo de la casa — almuerzo, terraza, barra.
 */
const C = {
  crema: '#F7F0E3',
  cremaHi: '#FFFBF2',
  espresso: '#251B12',
  tomate: '#BE3A24',
  albahaca: '#33633C',
  ambar: '#D9A441',
  muted: '#6E5D48',
  line: 'rgba(37,27,18,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'alma-restaurant',
  title: 'Alma restaurant | Trattoria en el camino a San Miguel, Talca',
  description:
    'Restaurant en Camino a San Miguel 4943, Talca: pizzas, pastas, burrata y barra, con terraza y vista a la cordillera. 4,5 en Google. Reservas por WhatsApp.',
  image: `${IMG}/terraza.webp`,
})

const NAV_LINKS = [
  { label: 'El día', href: '#dia' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
]

const CARTA = [
  { img: 'pizza.webp', plato: 'Pizza margherita', nota: 'al horno, albahaca fresca', alt: 'Pizza margherita con albahaca fresca de Alma restaurant' },
  { img: 'pasta.webp', plato: 'Tagliatelle a la bolognesa', nota: 'pasta larga, salsa lenta', alt: 'Plato de tagliatelle a la bolognesa con albahaca y parmesano' },
  { img: 'pesto.webp', plato: 'Ñoquis al pesto', nota: 'verde de albahaca y parmesano', alt: 'Ñoquis en salsa pesto verde servidos en plato blanco' },
  { img: 'burrata.webp', plato: 'Burrata e pomodorini', nota: 'el plato que nombran las reseñas', alt: 'Burrata con tomates cherry y albahaca' },
  { img: 'calzone.webp', plato: 'Calzone de la casa', nota: 'doblado y dorado', alt: 'Calzone dorado servido sobre plato blanco' },
]

const MOMENTOS = [
  { hora: '13:00', titulo: 'el almuerzo sin apuro', desc: 'La carta sale de la cocina a la mesa: pastas, pizzas y platos de fondo para quedarse conversando.', img: 'pasta.webp', alt: 'Plato de pasta recién servido en Alma restaurant' },
  { hora: '18:00', titulo: 'la terraza entre árboles', desc: 'Mesas al aire libre en el jardín, con la luz de la tarde entrando por el follaje.', img: 'terraza.webp', alt: 'Mesa puesta en la terraza de Alma restaurant entre árboles, con ramitas de lavanda' },
  { hora: '22:00', titulo: 'la barra encendida', desc: 'Vinos, tragos y jugos de la casa para cerrar el día; viernes y sábado hasta las 23:30.', img: 'tragos.webp', alt: 'Dos tragos de colores sobre mesa de madera en la barra de Alma restaurant' },
]

const RESENAS = [
  { nombre: 'Fabiola Castillo', texto: '“Excelente atención, flexibilidad ante necesidades del cliente (me hicieron salsa Alfredo vegetariana), rapidez en el servicio, muy cordiales. Es un lugar excelente para ir a almorzar tranquilo y más prendido de noche, con amigos. Carta muy amplia, variedad de tragos. Es pet friendly, y si te sientas a la ventana tienes una vista parcial a la cordillera que hoy estuvo hermosa.”', nota: 5 },
  { nombre: 'Rafael Valenzuela', texto: '“Excelentes pizzas y una carta muy atractiva. Probamos la Burratta e Pomodorini… deliciosa!!”', nota: 5 },
  { nombre: 'Juan Francisco Aguilera', texto: '“Lugar acogedor, muy bien atendidos y exquisita comida. Recomendadísimo.”', nota: 5 },
]

/** Hilera de listones pintados, como el techo del salón. */
function Listones({ n = 26, h = 34, base = C.espresso }: { n?: number; h?: number; base?: string }) {
  return (
    <div className="flex items-end justify-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: n }).map((_, i) => {
        const tip = i % 5 < 2 ? C.albahaca : i % 5 === 2 ? C.tomate : undefined
        const hh = h * (0.55 + ((i * 7) % 5) * 0.11)
        return (
          <span
            key={i}
            className="inline-block w-[5px] rounded-t-[3px] shrink-0"
            style={{
              height: hh,
              backgroundColor: base,
              backgroundImage: tip ? `linear-gradient(${tip}, ${tip})` : undefined,
              backgroundSize: '100% 32%',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />
        )
      })}
    </div>
  )
}

function WhatsIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill={color} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.7 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .1 0 .6-.2 1.1Z" />
    </svg>
  )
}

export default function AlmaRestaurantPage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.crema, color: C.espresso }}>
      <BlitzNav
        name={<span>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: 'rgba(247,240,227,0.96)',
          ink: C.espresso,
          line: C.line,
          btnBg: C.tomate,
          btnInk: '#FFF6EA',
        }}
      />

      {/* ── Hero editorial: titular + terraza en arco ── */}
      <section id="inicio" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal>
              <Listones n={22} h={30} />
              <p className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.26em] uppercase mt-6`} style={{ color: C.tomate }}>
                Camino a San Miguel 4943 · Talca
              </p>
              <h1 className={`${display.className} leading-[1.02] text-[40px] md:text-[64px] mt-4`} style={{ color: C.espresso }}>
                La trattoria al final del camino a San Miguel
              </h1>
              <p className="text-[15px] md:text-lg leading-relaxed mt-5 max-w-md" style={{ color: C.muted }}>
                Pizzas, pastas y burrata en una casa de campo con terraza,
                barra y mesa puesta de martes a domingo. Pet friendly, dicen
                quienes van.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-7">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-12 text-[15px] font-semibold tap-44 transition-transform active:scale-95"
                  style={{ backgroundColor: C.tomate, color: '#FFF6EA', borderRadius: '999px' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#carta"
                  className="inline-flex items-center px-4 h-12 text-[15px] font-semibold tap-44"
                  style={{ color: C.espresso, border: `1.5px solid ${C.espresso}`, borderRadius: '999px' }}
                >
                  Ver la carta
                </a>
              </div>
              <div className="flex items-center gap-3 mt-7">
                <Stars value={BIZ.rating} color={C.ambar} className="w-[18px] h-[18px]" />
                <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="relative overflow-hidden" style={{ borderRadius: '999px 999px 18px 18px', border: `1.5px solid ${C.espresso}` }}>
                <Image
                  src={`${IMG}/terraza.webp`}
                  alt="Mesa puesta en la terraza de Alma restaurant, rodeada de árboles y con ramitas de lavanda"
                  width={1200}
                  height={800}
                  className="w-full h-auto block"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-lg" style={{ backgroundColor: C.espresso }}>
                <span className={`${mono.className} text-[10px] tracking-[0.18em] uppercase whitespace-nowrap`} style={{ color: C.crema }}>
                  abierto hoy desde las 13:00
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El día de la casa: almuerzo, terraza, barra ── */}
      <section id="dia" className="scroll-mt-20" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Listones n={26} h={26} base={C.crema} />
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mt-6 max-w-2xl`} style={{ color: C.crema }}>
              de la una de la tarde a la última copa,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-relaxed" style={{ color: 'rgba(247,240,227,0.72)' }}>
              la casa cambia de ritmo con el día. Tres momentos, un mismo lugar.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
            {MOMENTOS.map((m, i) => (
              <Reveal key={m.hora} delay={i * 80}>
                <article className="h-full rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: '#34261A', border: '1px solid rgba(247,240,227,0.12)' }}>
                  <div className="relative aspect-[16/10]">
                    <Image src={`${IMG}/${m.img}`} alt={m.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-5 md:p-6 flex-1">
                    <p className={`${mono.className} text-[11px] tracking-[0.2em]`} style={{ color: C.ambar }}>
                      {m.hora}
                    </p>
                    <h3 className={`${display.className} text-xl md:text-2xl mt-2`} style={{ color: C.crema }}>
                      {m.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed mt-2" style={{ color: 'rgba(247,240,227,0.7)' }}>
                      {m.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La carta: platos fotografiados en la ficha ── */}
      <section id="carta" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`} style={{ color: C.espresso }}>
              lo que llega a la mesa,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-relaxed" style={{ color: C.muted }}>
              fotos de la ficha de Google del restaurante — los platos tal
              cual salen de la cocina.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-5">
            {CARTA.map((p, i) => (
              <Reveal
                key={p.img}
                delay={i * 60}
                className={
                  i === 0 ? 'col-span-2 md:col-span-3' : i === 1 ? 'col-span-2 md:col-span-3' : 'col-span-1 md:col-span-2'
                }
              >
                <figure className="m-0 h-full">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-3">
                    <span className={`${display.className} block text-base md:text-lg leading-tight`} style={{ color: C.espresso }}>
                      {p.plato}
                    </span>
                    <span className={`${mono.className} block text-[10px] tracking-[0.14em] uppercase mt-1`} style={{ color: C.tomate }}>
                      {p.nota}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El salón y la barra ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.cremaHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl col-span-2 aspect-[16/10]">
                <Image src={`${IMG}/salon.webp`} alt="Salón de Alma restaurant con el techo de listones pintados en verde y rojo, lámparas y rack de vinos" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <Image src={`${IMG}/barra.webp`} alt="Barra de Alma restaurant con el letrero en la pared, botellas y troncos" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <Image src={`${IMG}/jardin.webp`} alt="Terraza de Alma restaurant con mesas y jardineras" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.espresso }}>
              el techo de listones ya es postal,
            </h2>
            <p className="text-[15px] md:text-lg mt-5 leading-relaxed" style={{ color: C.muted }}>
              adentro, una cortina de madera pintada en verde y rojo cubre el
              salón; afuera, la terraza se pierde entre los árboles del camino.
              De día se almuerza tranquilo; de noche, la barra agarra vuelo.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Pet friendly, según sus propias reseñas',
                'Terraza entre árboles y vista a la cordillera',
                'Barra con vinos y tragos hasta el cierre',
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 text-[15px] leading-snug" style={{ color: C.espresso }}>
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.albahaca }} aria-hidden="true" />
                  {li}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 px-5 h-12 text-[15px] font-semibold tap-44 transition-transform active:scale-95"
              style={{ backgroundColor: C.albahaca, color: '#FFF6EA', borderRadius: '999px' }}
            >
              <WhatsIcon color="#FFF6EA" /> Consultar disponibilidad
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`} style={{ color: C.espresso }}>
              la mesa de al lado ya lo dijo,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-relaxed" style={{ color: C.muted }}>
              reseñas publicadas en Google Maps, con el nombre de quien las escribió.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <blockquote
                  className="h-full m-0 rounded-xl p-6 flex flex-col justify-between"
                  style={{ backgroundColor: C.cremaHi, border: `1.5px solid ${C.espresso}` }}
                >
                  <div>
                    <Stars value={r.nota} color={C.ambar} className="w-4 h-4" />
                    <p className="text-[14px] md:text-[15px] leading-relaxed mt-4" style={{ color: C.espresso }}>
                      {r.texto}
                    </p>
                  </div>
                  <footer className="flex items-center gap-2.5 mt-5">
                    <span className={`${mono.className} text-[11px] font-bold tracking-[0.1em] uppercase`} style={{ color: C.tomate }}>
                      {r.nombre}
                    </span>
                    <span className={`${mono.className} text-[10px] tracking-[0.1em] uppercase`} style={{ color: C.muted }}>
                      · Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar y llegar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Listones n={20} h={24} base={C.crema} />
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mt-6`} style={{ color: C.crema }}>
              Camino a San Miguel 4943, Talca,
            </h2>
            <p className="text-[15px] md:text-base mt-4 leading-relaxed max-w-md" style={{ color: 'rgba(247,240,227,0.75)' }}>
              saliendo de la ciudad hacia el sector rural; la casa se anuncia
              con la terraza y los árboles. Reserva por WhatsApp y confirma
              mesa el mismo día.
            </p>
            <div className="mt-7" style={{ borderTop: `1.5px solid rgba(247,240,227,0.25)` }}>
              {BIZ.hours.map(([dia, hora]) => (
                <div key={dia} className="flex items-baseline justify-between py-2.5" style={{ borderBottom: '1px solid rgba(247,240,227,0.15)' }}>
                  <span className={`${mono.className} text-[12px] tracking-[0.12em] uppercase`} style={{ color: C.crema }}>{dia}</span>
                  <span className={`${mono.className} text-[12px] font-bold tracking-[0.08em]`} style={{ color: C.ambar }}>{hora}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 h-12 text-[15px] font-semibold tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.tomate, color: '#FFF6EA', borderRadius: '999px' }}
              >
                <WhatsIcon color="#FFF6EA" /> Reservar mesa
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 h-12 text-[15px] font-semibold tap-44"
                style={{ color: C.crema, border: `1.5px solid rgba(247,240,227,0.6)`, borderRadius: '999px' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl overflow-hidden shadow-2xl md:sticky md:top-24" style={{ border: `1.5px solid rgba(247,240,227,0.35)` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                className="w-full h-[300px] md:h-[380px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.crema, borderTop: `1.5px solid ${C.espresso}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <p className={`${display.className} text-xl`} style={{ color: C.espresso }}>{BIZ.name}</p>
              <p className="text-sm mt-1 leading-snug" style={{ color: C.muted }}>{BIZ.address} · {BIZ.region}</p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pie de página">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 font-semibold" style={{ color: C.espresso }}>{l.label}</a>
              ))}
            </nav>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 font-semibold text-sm" style={{ color: C.espresso }}>
              {BIZ.phoneDisplay}
            </a>
          </div>
          <p className={`${mono.className} text-[10px] tracking-wide mt-6 leading-relaxed`} style={{ color: C.muted }}>
            Textos de muestra sobre datos reales: dirección, teléfono, horario,
            nota de Google, reseñas y fotos corresponden a la ficha pública de {BIZ.name}.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Reservar en ${BIZ.short}`} />
    </main>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.tomate }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">Sitiazo</a>{' '}
          para {BIZ.name}: así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}
