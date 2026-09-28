import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2' }],
})

/**
 * Dirección de arte: «vitrina de wafflería» — papel crema, chocolate
 * oscuro y el naranjo de la marca, con la rejilla del waffle como
 * textura repetida. Baloo 2 hace de letra redonda de letrero de
 * cafetería; Nunito Sans es el papel manteca.
 */
const C = {
  paper: '#FBF2E4',
  crema: '#F5E7CF',
  waffle: '#E8A93E',
  naranjo: '#B03C0A',
  choco: '#3A2415',
  deep: '#211208',
  ink: '#33210F',
  muted: '#7A5E46',
  line: 'rgba(58,36,21,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cafeteria-walffies',
  title: 'Cafetería Walffies — Waffles y café en San Clemente, Maule',
  description:
    'Cafetería y wafflería en Clodomiro Silva 66, San Clemente. Waffles, fondue, hot chocolate y cafés. Pedidos y reservas por WhatsApp.',
  image: '/demos/cafeteria-walffies/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Pedir', href: '#pedir' },
]

const HORARIO = [
  { dia: 'Lunes a viernes', hora: '11:00 – 20:00' },
  { dia: 'Sábado', hora: '12:45 – 19:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
]

const CARTA = [
  {
    src: `${IMG}/waffle-frutas.webp`,
    name: 'Waffles y crepes',
    desc: 'El que da nombre a la casa: waffle con Nutella, frutillas, manjar o crema. Dulce, recién hecho y para llevar si quieres.',
    tag: 'La especialidad',
  },
  {
    src: `${IMG}/espresso.webp`,
    name: 'Cafés y mocaccinos',
    desc: 'Espresso, capuchino y mocaccino con arte latte: el café de acompañamiento para el waffle o para el break de la tarde.',
    tag: 'Cafetería',
  },
  {
    src: `${IMG}/detalle3.webp`,
    name: 'Fondue para compartir',
    desc: 'Chocolate derretido con fruta y bocados para ir pinchando: el plato de a dos o tres que más sale en las fotos.',
    tag: 'Para compartir',
  },
  {
    src: `${IMG}/taza.webp`,
    name: 'Café de grano',
    desc: '«El mejor café de grano de Sancle», dicen en sus reseñas: la taza verde de la casa, para quedarse o para llevar.',
    tag: 'El que más repiten',
  },
  {
    src: `${IMG}/detalle1.webp`,
    name: 'Waffles y detalles',
    desc: 'El waffle de siempre con sus toppings: fruta, salsa y helado según la temporada y lo que anuncian en historias.',
    tag: 'Clásicos',
  },
  {
    src: `${IMG}/hero.webp`,
    name: 'Hot chocolate y más',
    desc: 'Chocolate caliente, pasteles, tortas y bebidas frías: la carta crece por temporada y se anuncia en sus historias.',
    tag: 'Novedades en @walffies',
  },
]

const VALORAN = [
  'El café de grano',
  'Los waffles',
  'La atención amable',
  'Los precios justos',
]

/** Reseñas reales de su ficha de Google (5,0 · 58 reseñas). */
const TESTIMONIALS = [
  {
    nombre: 'Lucia Quiteros',
    texto:
      'Todo delicioso, variedad de productos, café de grano, ideal para disfrutar con amigos o una cita.',
  },
  {
    nombre: 'Francisca',
    texto:
      'En simples palabras INCREÍBLE, desde la atención hasta su comida: volvería nuevamente sin pensarlo.',
  },
  {
    nombre: 'Peter Abarzua',
    texto: 'El mejor café de grano de Sancle.',
  },
]

// ── Piezas de la vitrina ─────────────────────────────────────

/** Rejilla de waffle: cuadrícula de cubiletes como textura. */
function WaffleGrid({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 24" preserveAspectRatio="none">
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={i * 12 + 1.5} y={3} width={9} height={18} rx={2.5} fill="none" stroke={color} strokeWidth={1.4} />
      ))}
    </svg>
  )
}

/** Sello redondo de vitrina con el rating real. */
function Sello({ size = 148, top, center, sub }: { size?: number; top: string; center: string; sub: string }) {
  const pid = `wsello-${top.replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <div
      className="rounded-full flex items-center justify-center rotate-6"
      style={{ width: size, height: size, backgroundColor: C.naranjo, color: C.paper, boxShadow: '0 8px 22px rgba(33,18,8,0.3)' }}
    >
      <svg viewBox="0 0 100 100" width={size - 10} height={size - 10} aria-hidden="true">
        <defs>
          <path id={pid} d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" fill="none" />
        </defs>
        <circle cx="50" cy="50" r="47" fill="none" stroke={C.paper} strokeWidth="1.4" />
        <circle cx="50" cy="50" r="43" fill="none" stroke={C.paper} strokeWidth="0.7" strokeDasharray="2 3" />
        <text fill={C.paper} fontSize="7.2" fontWeight="800" letterSpacing="1.5" style={{ fontFamily: 'inherit' }}>
          <textPath href={`#${pid}`} startOffset="0">{top}</textPath>
        </text>
        <text className={display.className} x="50" y="58" textAnchor="middle" fill={C.paper} fontSize="22" fontWeight="800">
          {center}
        </text>
        <text x="50" y="70" textAnchor="middle" fill={C.paper} fontSize="6.2" fontWeight="700" letterSpacing="1.1">
          {sub}
        </text>
      </svg>
    </div>
  )
}

/** Eyebrow de vitrina: letra pequeña con filete naranjo. */
function Vitrina({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-extrabold mb-4 flex items-center gap-3"
      style={{ color: light ? C.waffle : C.naranjo }}
    >
      <span className="inline-block w-9 border-t-2 border-dashed" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CafeteriaWalffiesPage() {
  return (
    <div className={`${body.className} wfy min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .wfy a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(251,242,228,0.95)',
          ink: C.choco,
          line: C.line,
          btnBg: C.naranjo,
          btnInk: '#FBF2E4',
        }}
      />

      {/* ── Hero: el waffle que da nombre a la casa ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Crepe waffle con frutillas, helado y salsa de chocolate en Cafetería Walffies, San Clemente"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(33,18,8,0.45) 0%, rgba(33,18,8,0.12) 40%, rgba(33,18,8,0.7) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24">
          <div className="flex flex-col items-end gap-2 mb-6">
            <Reveal>
              <Sello size={128} top="SAN CLEMENTE · MAULE ·" center={`${BIZ.rating}★`} sub={`${BIZ.reviews} RESEÑAS GOOGLE`} />
            </Reveal>
            <Reveal delay={80}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: '#FBF2E4', textDecorationColor: C.waffle }}
              >
                Ver las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
          </div>
          <Reveal>
            <div className="max-w-2xl mb-10">
              <Vitrina light>Cafetería &amp; wafflería · San Clemente</Vitrina>
              <h1
                className={`${display.className} font-extrabold leading-[0.95] text-[clamp(3.2rem,12vw,7rem)] mb-5`}
                style={{ color: C.paper, textShadow: '0 4px 28px rgba(33,18,8,0.55)' }}
              >
                Walffies<span style={{ color: C.waffle }}>.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(251,242,228,0.92)' }}>
                Waffles recién hechos, fondue para compartir, hot chocolate y
                café con arte latte — en pleno centro de San Clemente.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_PEDIDO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold tracking-[0.02em] text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.naranjo, color: '#FBF2E4' }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href="#carta"
                  className={`${display.className} font-bold tracking-[0.02em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(251,242,228,0.6)', color: C.paper }}
                >
                  Ver la carta
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        {/* barra de mostrador */}
        <div className="relative" style={{ backgroundColor: C.choco }}>
          <ul
            className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.2em] text-center"
            style={{ color: C.waffle }}
          >
            {['Waffles', 'Fondue', 'Hot chocolate', 'Pasteles', 'Café de grano'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La carta: platos de la vitrina ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Vitrina>Del mostrador</Vitrina>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.choco }}>
              La carta
              <br />
              <span style={{ color: C.naranjo }}>dulce de la casa</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Lo que sale de su cocina según sus propias fotos e historias.
              Los detalles y precios reales se confirman por WhatsApp.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5">
          {CARTA.map((p, i) => (
            <li
              key={p.name}
              className="group h-full rounded-[26px] p-3 pb-5"
              style={{ backgroundColor: '#FDF8EE', rotate: i % 2 === 0 ? '-0.8deg' : '0.7deg', boxShadow: '0 3px 14px rgba(33,18,8,0.1)' }}
            >
              <Reveal delay={i * 100} className="h-full flex flex-col">
                <div className="relative overflow-hidden rounded-[18px] aspect-[4/3] mb-4">
                  <Image
                    src={p.src}
                    alt={`${p.name} — Cafetería Walffies, San Clemente`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] mb-1.5 px-1" style={{ color: C.naranjo }}>
                  {p.tag}
                </p>
                <h3 className={`${display.className} font-bold text-xl md:text-[22px] mb-2 leading-tight px-1`} style={{ color: C.choco }}>
                  {p.name}
                </h3>
                <p className="text-[13px] leading-relaxed px-1" style={{ color: C.muted }}>
                  {p.desc}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── El local: la vitrina de Clodomiro Silva ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[28px] aspect-[4/3]" style={{ boxShadow: '0 18px 50px rgba(33,18,8,0.18)' }}>
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Fachada nocturna de Cafetería Walffies en Clodomiro Silva, San Clemente"
                    fill
                    sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-3 md:-left-5 w-32 md:w-40 overflow-hidden rounded-2xl aspect-square"
                  style={{ rotate: '-4deg', boxShadow: '0 12px 30px rgba(33,18,8,0.25)', border: '4px solid #FDF8EE' }}
                >
                  <Image
                    src={`${IMG}/vitrina.webp`}
                    alt="La vitrina con pasteles y dulces dentro de Walffies"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-2 md:-right-4">
                  <Sello size={120} top="WALFFIES · LOCAL ·" center="Abierto" sub="LUN A SÁB" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <Vitrina>El local</Vitrina>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.choco }}>
                Una parada dulce
                <br />
                <span style={{ color: C.naranjo }}>en San Clemente</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 max-w-xl" style={{ color: C.ink }}>
                En Clodomiro Silva 66, a pasos del centro: la vitrina naranja
                se reconoce de lejos y adentro huele a waffle recién hecho.
                Para once, para llevar o para una pausa con café.
              </p>
              <div className="rounded-2xl p-5 max-w-md mb-6" style={{ backgroundColor: '#FDF8EE', border: `1px solid ${C.line}` }}>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] mb-3" style={{ color: C.naranjo }}>
                  Horario
                </p>
                <ul>
                  {HORARIO.map((h) => (
                    <li key={h.dia} className="flex items-baseline gap-2 py-1.5">
                      <span className="text-[13px] font-bold" style={{ color: C.ink }}>{h.dia}</span>
                      <span className="flex-1 border-b-2 border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                      <span className="text-[13px] font-bold whitespace-nowrap" style={{ color: C.choco }}>{h.hora}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <WaffleGrid color={C.naranjo} className="w-40 h-7 opacity-60" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: el 5,0 de Google ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Vitrina>Lo que dicen</Vitrina>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.choco }}>
              Un cinco
              <br />
              <span style={{ color: C.naranjo }}>redondo en Google</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas con promedio {BIZ.rating}: lo que más se
              repite cuando la gente cuenta su visita.
            </p>
            <ul className="flex flex-wrap gap-3 max-w-md">
              {VALORAN.map((v) => (
                <li
                  key={v}
                  className="text-xs md:text-[13px] font-bold px-4 py-2 rounded-full"
                  style={{ backgroundColor: C.crema, color: C.choco, border: `1px solid ${C.line}` }}
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.nombre} delay={i * 110}>
                <figure
                  className="rounded-[22px] p-5 md:p-6"
                  style={{ backgroundColor: '#FDF8EE', rotate: i === 1 ? '0.5deg' : '-0.5deg', boxShadow: '0 3px 14px rgba(33,18,8,0.08)' }}
                >
                  <Stars value={5} color={C.waffle} className="w-3.5 h-3.5 mb-3" />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.texto}”
                  </blockquote>
                  <figcaption className="text-[10px] uppercase tracking-[0.2em] font-extrabold" style={{ color: C.naranjo }}>
                    {t.nombre} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={340}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.choco, textDecorationColor: C.naranjo }}
              >
                Leer las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pedir: WhatsApp y cómo llegar ── */}
      <section id="pedir" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Vitrina light>Pedidos</Vitrina>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.paper }}>
              Pide tu waffle
              <br />
              <span style={{ color: C.waffle }}>por WhatsApp</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(251,242,228,0.75)' }}>
              Para llevar, para reservar mesa o para consultar la carta del
              día: un mensaje y listo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.02em] text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:brightness-105 active:scale-95 tap-44`}
                style={{ backgroundColor: C.waffle, color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold tracking-[0.02em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(251,242,228,0.5)', color: C.paper }}
              >
                {BIZ.igHandle}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative mb-5" style={{ rotate: '-0.6deg' }}>
              <div
                className="rounded-[22px] px-6 md:px-8 py-6"
                style={{ backgroundColor: 'rgba(251,242,228,0.06)', border: `1px dashed ${C.waffle}` }}
              >
                <p className="text-[10px] uppercase tracking-[0.26em] font-extrabold mb-3" style={{ color: C.waffle }}>
                  Aquí estamos
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(251,242,228,0.9)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                </address>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                    style={{ color: C.waffle, textDecorationColor: 'rgba(232,169,62,0.4)' }}
                  >
                    Cómo llegar →
                  </a>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                    style={{ color: C.waffle, textDecorationColor: 'rgba(232,169,62,0.4)' }}
                  >
                    Llamar
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[22px] min-h-[260px]" style={{ border: '1px solid rgba(232,169,62,0.3)' }}>
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderColor: 'rgba(251,242,228,0.14)' }}
        >
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,242,228,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.igHandle}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(251,242,228,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,242,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(251,242,228,0.7)' }}>
            Fotos y reseñas reales de la ficha de Google y su Instagram;
            los textos son de muestra. WhatsApp, dirección, horario e
            Instagram son los reales.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
