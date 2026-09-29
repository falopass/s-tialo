/**
 * app/demos/restaurant-30-y-tantos/page.tsx
 *
 * Demo para 30ytantos Restobar (Constitución). Concepto visual:
 * la noche hecha página — fondo tinta, neón rojo y cian del letrero,
 * titulares Unbounded y una cinta de fotos como la barra iluminada.
 * Fotos reales de la ficha de Google Maps del local.
 */
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})

export const metadata = demoMetadata({
  slug: 'restaurant-30-y-tantos',
  title: `${BIZ.full} — bar con música en directo, Constitución`,
  description:
    'Restobar nocturno en el centro de Constitución: coctelería de autor, pescado frito, tres ambientes y shows en vivo jueves a sábado. 4,3 estrellas en Google.',
  image: `${IMG}/noche.webp`,
})

const C = {
  bg: '#0B0A10',
  panel: '#14121C',
  panelUp: '#1B1826',
  ink: '#F4F1FA',
  dim: '#9A93A8',
  red: '#FF3B5C',
  cyan: '#35E0FF',
  amber: '#FFB84D',
  line: '#262133',
} as const

const SPACING = {
  '--spacing-5': '1.25rem',
  '--spacing-6': '1.5rem',
  '--spacing-7': '1.75rem',
  '--spacing-8': '2rem',
  '--spacing-9': '2.25rem',
  '--spacing-10': '2.5rem',
  '--spacing-11': '2.75rem',
  '--spacing-12': '3rem',
} as React.CSSProperties

const NAV_LINKS = [
  { label: 'Ambientes', href: '#ambientes' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde', href: '#donde' },
]

const CINTA = [
  { img: 'cocteles-barra.webp', alt: 'Cócteles en la barra de 30ytantos' },
  { img: 'barra.webp', alt: 'Barra del local con iluminación roja' },
  { img: 'cocteles-rosa.webp', alt: 'Cócteles rosados servidos en mesa' },
  { img: 'pescado-frito.webp', alt: 'Pescado frito con papas' },
  { img: 'mesa-clientes.webp', alt: 'Mesa compartida en el salón' },
]

const AMBIENTES = [
  {
    num: 'I',
    name: 'Salón de eventos',
    note: 'Artistas en vivo, tributos y shows — el corazón de la noche.',
    color: C.red,
  },
  {
    num: 'II',
    name: 'Terraza',
    note: 'Aire libre para conversar sin pelear con la música.',
    color: C.cyan,
  },
  {
    num: 'III',
    name: 'Salón de juegos',
    note: 'El tercer ambiente, para los que siguen hasta el cierre.',
    color: C.amber,
  },
]

const CARTA = [
  { img: 'cocteles-rosa.webp', name: 'Cóctel de autor', tag: 'Destacado en la ficha' },
  { img: 'cocteles-barra.webp', name: 'Sangría de la casa', tag: 'Destacado en la ficha' },
  { img: 'pescado-frito.webp', name: 'Pescado frito', tag: '«10/10» en reseñas' },
  { img: 'mesa-clientes.webp', name: 'Noche en el salón', tag: 'La casa' },
]

const REVIEWS = [
  {
    name: 'Lorne Cáceres Solar',
    when: 'Hace un año',
    stars: 5,
    text: 'Único lugar en Constitución donde puedes disfrutar de un ambiente tan diverso: salón de eventos con artistas en vivo, terraza y salón de juegos. Tres ambientes, dos DJ y una carta de primer nivel a precios increíbles.',
  },
  {
    name: 'Nicole Lillo L.',
    when: 'Hace 2 años',
    stars: 5,
    text: 'Muy bien lugar para almorzar. Mi guatita quedó llena y mi corazón contento. Pescado frito 10/10. Lo recomiendo.',
  },
  {
    name: 'Alejandra Barrueto',
    when: 'Hace un año',
    stars: 5,
    text: 'Ambiente agradable, buena música, precios razonables. Cuando fui me encontré con un tributo a Chayanne. Lo ideal es reservar mesa.',
  },
  {
    name: 'leandro chacana',
    when: 'Hace 2 años',
    stars: 5,
    text: 'Nos dejaron entrar con mascota. Las empanadas y el ceviche muy ricos, y los precios muy buenos.',
  },
]

export default function TreintaYTantosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.bg, color: C.ink }}
    >
      <style>{`
        .tt-btn { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .tt-btn:hover { transform: translateY(-2px); }
        .tt-btn:active { transform: translateY(0) scale(0.97); }
        .tt-btn:focus-visible { outline: 3px solid ${C.cyan}; outline-offset: 3px; }
        .tt-neon { text-shadow: 0 0 18px rgba(255,59,92,0.55), 0 0 42px rgba(255,59,92,0.28); }
        .tt-neon-cyan { text-shadow: 0 0 16px rgba(53,224,255,0.5), 0 0 36px rgba(53,224,255,0.24); }
        .tt-cinta { scrollbar-width: none; }
        .tt-cinta::-webkit-scrollbar { display: none; }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- letrero neón real del local */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="h-9 w-9 rounded-full object-cover shadow-md"
              aria-hidden="true"
            />
            <span className={`${display.className} text-base md:text-lg leading-none tracking-wide`}>
              {BIZ.name}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(11,10,16,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFF5F7',
        }}
      />

      {/* ── Hero: el letrero ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background: `radial-gradient(120% 90% at 50% -10%, #2A0E1A 0%, ${C.bg} 55%), ${C.bg}`,
        }}
      >
        <div className="relative w-full max-w-5xl mx-auto px-5 md:px-8 pt-32 pb-16">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- letrero neón real */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Letrero de neón de 30ytantos Restobar"
              className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full object-cover mb-8"
              style={{ boxShadow: `0 0 60px rgba(255,59,92,0.5), 0 0 24px rgba(53,224,255,0.35)` }}
            />
            <p
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] mb-5 tt-neon-cyan"
              style={{ color: C.cyan }}
            >
              Bar con música en directo · Constitución
            </p>
            <h1
              className={`${display.className} font-extrabold text-[clamp(2.6rem,10vw,6.8rem)] leading-[0.98] mb-6 tt-neon`}
              style={{ color: '#FFF' }}
            >
              La noche
              <br />
              de Constitución
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: C.dim }}>
              Restobar en el centro: coctelería de autor, cocina de mar y shows
              en vivo. Tres ambientes, dos DJ y abierto hasta que cierre la semana.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} tt-btn text-sm md:text-base px-8 py-3.5 tap-44 rounded-full`}
                style={{ backgroundColor: C.red, color: '#FFF5F7', boxShadow: '0 0 28px rgba(255,59,92,0.45)' }}
              >
                Reservar mesa
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tt-btn inline-flex items-center gap-2.5 text-sm font-semibold px-5 py-3 tap-44 rounded-full border"
                style={{ borderColor: C.line, backgroundColor: 'rgba(255,255,255,0.05)', color: C.ink }}
              >
                <Stars value={BIZ.rating} color={C.amber} />
                <span>
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
                </span>
              </a>
            </div>
            {/* Horario neón */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {BIZ.hours.map(([d, h]) => (
                <p key={d} className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                  <span style={{ color: C.cyan }}>{d}</span>
                  <span className="mx-2" style={{ color: C.dim }}>·</span>
                  <span style={{ color: h === 'Cerrado' ? C.dim : C.ink }}>{h}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de fotos ── */}
      <section className="py-12 md:py-16" style={{ backgroundColor: C.bg }}>
        <Reveal>
          <div className="tt-cinta flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 snap-x">
            {CINTA.map((f, i) => (
              <div
                key={f.img}
                className="relative shrink-0 w-64 md:w-80 aspect-[4/5] overflow-hidden rounded-2xl snap-center"
                style={{
                  border: `1px solid ${i % 2 === 0 ? 'rgba(255,59,92,0.45)' : 'rgba(53,224,255,0.4)'}`,
                  boxShadow: i % 2 === 0 ? '0 0 30px rgba(255,59,92,0.18)' : '0 0 30px rgba(53,224,255,0.15)',
                }}
              >
                <Image
                  src={`${IMG}/${f.img}`}
                  alt={f.alt}
                  fill
                  sizes="(min-width: 768px) 320px, 256px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Tres ambientes ── */}
      <section id="ambientes" className="py-16 md:py-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.34em] mb-4 text-center tt-neon-cyan"
              style={{ color: C.cyan }}
            >
              Tres ambientes, una noche
            </p>
            <h2
              className={`${display.className} font-bold text-[clamp(1.9rem,5.4vw,3.4rem)] leading-[1.05] text-center mb-12 md:mb-16`}
              style={{ color: C.ink }}
            >
              Del show a la terraza
              <br />
              sin salir del local
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {AMBIENTES.map((a, i) => (
              <Reveal key={a.num} delay={i * 110}>
                <div
                  className="h-full rounded-2xl p-7 md:p-8 border"
                  style={{
                    backgroundColor: C.panelUp,
                    borderColor: `${a.color}55`,
                    boxShadow: `inset 0 0 40px ${a.color}0f, 0 0 24px ${a.color}14`,
                  }}
                >
                  <p
                    className={`${display.className} font-extrabold text-4xl md:text-5xl mb-4`}
                    style={{ color: a.color, textShadow: `0 0 22px ${a.color}88` }}
                  >
                    {a.num}
                  </p>
                  <h3 className={`${display.className} text-lg md:text-xl mb-3`} style={{ color: C.ink }}>
                    {a.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.dim }}>
                    {a.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <p className="text-center text-sm md:text-base mt-8" style={{ color: C.dim }}>
              «Tres ambientes, dos DJ» — reseña de Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La carta nocturna ── */}
      <section id="carta" className="py-16 md:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.34em] mb-4 tt-neon"
              style={{ color: C.red }}
            >
              De la carta
            </p>
            <h2
              className={`${display.className} font-bold text-[clamp(1.9rem,5.4vw,3.4rem)] leading-[1.05] mb-3`}
              style={{ color: C.ink }}
            >
              Cocina de mar y barra seria
            </h2>
            <p className="text-base md:text-lg max-w-xl mb-12" style={{ color: C.dim }}>
              La ficha destaca crepé primavera, sangría de la casa y cóctel de
              autor; las reseñas suman ceviche, mariscal y un pescado frito «10/10».
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {CARTA.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/${p.img}`}
                    alt={`${p.name} — ${BIZ.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 md:p-5"
                    style={{ background: 'linear-gradient(180deg, rgba(11,10,16,0) 40%, rgba(11,10,16,0.92) 100%)' }}
                  >
                    <p className={`${display.className} text-sm md:text-base mb-1`} style={{ color: '#FFF' }}>
                      {p.name}
                    </p>
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wider" style={{ color: C.cyan }}>
                      {p.tag}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <p className="text-sm md:text-base mt-6" style={{ color: C.dim }}>
              Precio por persona {BIZ.price} (según Google).
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-14">
            <div>
              <p
                className="text-xs md:text-sm font-semibold uppercase tracking-[0.34em] mb-4 tt-neon-cyan"
                style={{ color: C.cyan }}
              >
                Reseñas de Google
              </p>
              <h2 className={`${display.className} font-bold text-[clamp(1.9rem,5vw,3.2rem)] leading-[1.05]`} style={{ color: C.ink }}>
                Lo que dicen los que salen
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <p className={`${display.className} font-extrabold text-5xl md:text-6xl tt-neon`} style={{ color: '#FFF' }}>
                {String(BIZ.rating).replace('.', ',')}
              </p>
              <div>
                <Stars value={BIZ.rating} color={C.amber} />
                <p className="text-xs mt-1" style={{ color: C.dim }}>
                  {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <blockquote
                  className="h-full rounded-2xl p-6 md:p-7 border-l-4"
                  style={{
                    backgroundColor: C.panelUp,
                    borderColor: i % 2 === 0 ? C.red : C.cyan,
                  }}
                >
                  <Stars value={r.stars} color={C.amber} className="w-4 h-4 mb-4" />
                  <p className="text-[15px] md:text-base leading-relaxed mb-5" style={{ color: C.ink }}>
                    «{r.text}»
                  </p>
                  <footer className="text-xs md:text-sm font-semibold uppercase tracking-wider" style={{ color: C.dim }}>
                    {r.name} · {r.when}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde + mapa ── */}
      <section id="donde" className="py-16 md:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div>
                <p
                  className="text-xs md:text-sm font-semibold uppercase tracking-[0.34em] mb-4 tt-neon"
                  style={{ color: C.red }}
                >
                  En el centro
                </p>
                <h2 className={`${display.className} font-bold text-[clamp(1.9rem,5vw,3rem)] leading-[1.05] mb-6`} style={{ color: C.ink }}>
                  Enrique Maciver 78
                </h2>
                <ul className="space-y-4 text-[15px] md:text-base" style={{ color: C.dim }}>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.4" />
                    </svg>
                    <span>
                      {BIZ.address} — a pasos de la plaza de Constitución
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-2" style={{ color: C.ink }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    <span>
                      Abre jueves a sábado desde las 20:00. «Lo ideal es reservar mesa» — reseña de Google.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative h-72 md:h-full min-h-[300px] overflow-hidden rounded-2xl"
                style={{ border: `1px solid ${C.line}`, boxShadow: '0 0 40px rgba(53,224,255,0.1)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.full}, Constitución`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 text-center relative overflow-hidden" style={{ backgroundColor: '#16060C' }}>
        <Reveal>
          <p className={`${display.className} text-xs md:text-sm uppercase tracking-[0.4em] mb-4 tt-neon-cyan`} style={{ color: C.cyan }}>
            Jue · Vie · Sáb
          </p>
          <h2
            className={`${display.className} font-extrabold text-[clamp(2rem,7vw,4.6rem)] leading-[1.0] mb-8 tt-neon`}
            style={{ color: '#FFF' }}
          >
            Reserva tu mesa
          </h2>
          <a
            href={WA_LINK_MESA}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} tt-btn inline-block text-base px-10 py-4 tap-44 rounded-full`}
            style={{ backgroundColor: C.cyan, color: '#07242B', boxShadow: '0 0 36px rgba(53,224,255,0.5)' }}
          >
            Escribir por WhatsApp
          </a>
        </Reveal>
      </section>

      <footer className="py-8" style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium" style={{ color: C.dim }}>
            {BIZ.full} · {BIZ.address}
          </p>
          <div className="flex items-center gap-5 text-sm font-medium" style={{ color: C.dim }}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44 inline-flex items-center">
              Maps
            </a>
            <a href={`mailto:${BIZ.email}`} className="hover:underline tap-44 inline-flex items-center">
              {BIZ.email}
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </div>
  )
}
