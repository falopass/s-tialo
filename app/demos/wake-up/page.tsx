import type { Metadata } from 'next'
import Image from 'next/image'
import { Unbounded, Onest } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_OFICINA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Unbounded({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})
const body = Onest({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  paper: '#FFFFFF',
  soft: '#EDF3F7',
  card: '#FFFFFF',
  blue: '#1F5673',
  blueDeep: '#123347',
  cyan: '#2FB8D6',
  cyanSoft: '#D8F0F6',
  gray: '#5A6676',
  cyanInk: '#0E6F86',
  ink: '#16303F',
  line: 'rgba(31,86,115,0.16)',
}

export const metadata: Metadata = {
  title: 'Wake Up — Cafetería en Merced 490, Curicó',
  description:
    'Cafetería en Merced 490, Curicó. Espresso recién hecho, vitrina de dulces, desayuno y once para llevar. Pedidos por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'El mosaico', href: '#mosaico' },
  { label: 'El local', href: '#local' },
  { label: 'La carta', href: '#carta' },
  { label: 'Dónde estamos', href: '#contacto' },
]

type Tile =
  | { kind: 'service'; num: string; tag: string; name: string; desc: string; src: string; alt: string; aspect: string }
  | { kind: 'photo'; src: string; alt: string; caption: string; aspect: string }
  | { kind: 'note'; title: string; desc: string; cta: string }

const MOSAIC: Tile[] = [
  {
    kind: 'service',
    num: 'Nº 01',
    tag: 'La barra',
    name: 'Espresso y café de grano',
    desc: 'Molido al momento en la barra: espresso, cortado, capuchino y café para llevar.',
    src: `${IMG}/detalle1.webp`,
    alt: 'Portafiltro con café recién molido y molino en la barra de Wake Up',
    aspect: 'aspect-[4/5]',
  },
  {
    kind: 'photo',
    src: `${IMG}/ambiente.webp`,
    alt: 'Fachada de Wake Up sobre la vereda de calle Merced, con vitrina de madera',
    caption: 'La vitrina sobre Merced, a pasos del centro',
    aspect: 'aspect-[3/4]',
  },
  {
    kind: 'service',
    num: 'Nº 02',
    tag: 'La vitrina',
    name: 'Dulces y kuchen del día',
    desc: 'Croissants, queques y el kuchen que alcanzó a salir de la cocina. Cambia todos los días.',
    src: `${IMG}/detalle3.webp`,
    alt: 'Trozo de kuchen de manzana con un capuchino en la mesa de la cafetería',
    aspect: 'aspect-[4/3]',
  },
  {
    kind: 'note',
    title: 'Once para la oficina',
    desc: 'Pedidos por volumen para empresas y equipos: cajas de dulces, sandwiches y cafeteras completas, coordinados por WhatsApp.',
    cta: 'Cotizar un pedido',
  },
  {
    kind: 'service',
    num: 'Nº 03',
    tag: 'De la mesada',
    name: 'Sandwiches y tostados',
    desc: 'Lo que se ve en la mesada: sandwiches armados al día y tostados que salen calientes.',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesada del local con vitrina de croissants, queques y la máquina de espresso',
    aspect: 'aspect-[16/11]',
  },
  {
    kind: 'service',
    num: 'Nº 04',
    tag: 'Las mesas',
    name: 'Para quedarse un rato',
    desc: 'Mesas al sol junto al ventanal: desayuno de mañana, once a media tarde o un café sin apuro.',
    src: `${IMG}/hero.webp`,
    alt: 'Interior de Wake Up con mesas de madera, plantas y la barra del café',
    aspect: 'aspect-square',
  },
]

const QUOTES = [
  {
    text: 'El mejor café del centro de Curicó. Lugar cómodo, atención rápida y los dulces siempre recién hechos.',
    author: 'Cliente del centro',
  },
  {
    text: 'Paso seguido por un café antes de trabajar. Atención directa y buena onda, de los locales que uno recomienda.',
    author: 'Vecina de Merced',
  },
]

const CARTA = [
  { name: 'Espresso / cortado', note: 'doble, en la barra', side: 'precio del día' },
  { name: 'Capuchino / latte', note: 'con o sin sabor', side: 'precio del día' },
  { name: 'Kuchen y queque del día', note: 'por trozo', side: 'precio del día' },
  { name: 'Sandwich tostado', note: 'de la mesada', side: 'precio del día' },
  { name: 'Promo desayuno', note: 'café + algo dulce', side: 'precio del día' },
  { name: 'Box once para oficina', note: 'para equipos y empresas', side: 'según volumen' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: 'Horario de día, de la mañana a la tarde' },
  { days: 'Sábado', time: 'Horario de mañana' },
]

function Bean({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.6 4.2c2.9 2.9 2.9 8.2 0 11.6-1.4 1.7-3.2 2.9-5.1 3.6-2.1.8-4.3.8-6.1-.4-2.9-2.9-2.9-8.2 0-11.6 1.4-1.7 3.2-2.9 5.1-3.6 2.1-.8 4.3-.8 6.1.4Z" />
      <path d="M6.4 5.9c1.6 2 2.4 4.4 2.6 6.9.2 2.4 1.1 4.1 3.4 5.4" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.cyan : C.blue }}
    >
      <Bean className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

function MosaicTile({ tile, index }: { tile: Tile; index: number }) {
  if (tile.kind === 'note') {
    return (
      <Reveal delay={index * 80} className="break-inside-avoid mb-4 md:mb-5">
        <div
          className="p-6 md:p-7 border"
          style={{ backgroundColor: C.blue, borderColor: C.blue }}
        >
          <p className="text-[10px] uppercase tracking-[0.24em] font-bold mb-3 flex items-center gap-2" style={{ color: C.cyanSoft }}>
            <Bean className="w-[14px] h-[14px]" />
            Pedidos por volumen
          </p>
          <h3 className={`${display.className} font-bold text-lg md:text-xl leading-snug mb-3`} style={{ color: '#fff' }}>
            {tile.title}
          </h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {tile.desc}
          </p>
          <a
            href={WA_LINK_OFICINA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-[transform,filter] hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ backgroundColor: C.cyan, color: C.blueDeep }}
          >
            {tile.cta} →
          </a>
          <p className="text-[10px] mt-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Servicio de muestra: se confirma oferta y formato al publicar.
          </p>
        </div>
      </Reveal>
    )
  }

  if (tile.kind === 'photo') {
    return (
      <Reveal delay={index * 80} className="break-inside-avoid mb-4 md:mb-5">
        <figure className={`relative overflow-hidden group ${tile.aspect}`} style={{ backgroundColor: C.blueDeep }}>
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="eager"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <figcaption
            className="absolute bottom-3 left-3 right-3 text-[11px] font-semibold leading-snug px-3.5 py-2.5 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(18,51,71,0.82)', color: '#fff' }}
          >
            {tile.caption}
          </figcaption>
        </figure>
      </Reveal>
    )
  }

  return (
    <Reveal delay={index * 80} className="break-inside-avoid mb-4 md:mb-5">
      <div className="border overflow-hidden group h-full" style={{ backgroundColor: C.card, borderColor: C.line }}>
        <div className={`relative overflow-hidden ${tile.aspect}`}>
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="eager"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span
            className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5"
            style={{ backgroundColor: C.cyan, color: C.blueDeep }}
          >
            {tile.num} · {tile.tag}
          </span>
        </div>
        <div className="p-5 md:p-6">
          <h3 className={`${display.className} font-bold text-base md:text-lg leading-snug mb-2`} style={{ color: C.ink }}>
            {tile.name}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: C.gray }}>
            {tile.desc}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function WakeUpPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.blueDeep,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.blueDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Wake Up: mesas de madera, plantas y barra de espresso junto al ventanal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,51,71,0.55) 0%, rgba(18,51,71,0.1) 40%, rgba(18,51,71,0.86) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 shadow-lg transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: C.blueDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.cyan} stroke={C.cyan} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Cafetería · Merced 490 · Curicó</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.04] text-[clamp(2.3rem,8.5vw,5rem)] mb-6`}
              style={{ color: '#fff' }}
            >
              Wake up,
              <br />
              <span style={{ color: C.cyan }}>Curicó.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Cafetería en pleno centro: espresso recién hecho, vitrina de
              dulces del día y mesas al sol para quedarse un rato.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-[transform,filter] hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ backgroundColor: C.cyan, color: C.blueDeep }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#mosaico"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
              >
                Ver el mosaico
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(18,51,71,0.55)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 pr-20 md:pr-24 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 animate-pulse" style={{ backgroundColor: C.cyan }} aria-hidden="true" />
              desayuno · once · para llevar
            </span>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {BIZ.fbFollowers} seguidores en Facebook
            </a>
            <span className="hidden md:inline" style={{ color: C.cyan }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El mosaico: la página como galería ── */}
      <section id="mosaico" className="scroll-mt-20 max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>El mosaico</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.06]`} style={{ color: C.blue }}>
              Todo el surtido,
              <br />
              <span style={{ color: C.cyanInk }}>en una pared</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.gray }}>
              La pared Wake Up: lo que se sirve todos los días, con su
              número y su foto. Los textos son de muestra — al publicar
              van los productos reales.
            </p>
          </div>
        </Reveal>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
          {MOSAIC.map((tile, i) => (
            <MosaicTile key={i} tile={tile} index={i} />
          ))}
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El local</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-[1.08] mb-6`} style={{ color: C.blue }}>
              En Merced 490,
              <br />
              <span style={{ color: C.cyanInk }}>en pleno centro</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.gray }}>
              Wake Up es la cafetería de la cuadra: atención directa,
              café de grano y una vitrina que se renueva todos los días.
              El local queda a pasos del centro de Curicó, así que es
              parada fija para el desayuno, la once y el café de media
              tarde.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.gray }}>
              Lo que más repiten sus clientes en Google: la rapidez, la
              onda y que el café sale bien siempre. Estas reseñas son de
              muestra — al publicar van las reales.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-[transform,filter] hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5673]"
                style={{ backgroundColor: C.blue, color: '#fff' }}
              >
                <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill={C.cyan} stroke={C.cyan} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                </svg>
                {BIZ.reviews} reseñas en Google
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 border transition-[transform,background-color] hover:bg-[rgba(31,86,115,0.08)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5673]"
                style={{ borderColor: C.line, color: C.blue }}
              >
                Facebook · {BIZ.fbFollowers} seguidores
              </a>
            </div>
          </Reveal>
          <div className="space-y-4">
            {QUOTES.map((q, i) => (
              <Reveal key={i} delay={140 + i * 110}>
                <figure className="p-6 md:p-7 border" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{q.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.blue }}>
                      {q.author} · Reseña de muestra
                    </span>
                    <Bean className="w-4 h-4 shrink-0" color={C.cyan} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={360}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 border text-center" style={{ backgroundColor: C.blue, borderColor: C.blue }}>
                  <p className={`${display.className} font-extrabold text-2xl md:text-3xl mb-1`} style={{ color: '#fff' }}>
                    {BIZ.reviews}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.cyanSoft }}>
                    reseñas en Google
                  </p>
                </div>
                <div className="p-5 border text-center" style={{ backgroundColor: C.cyanSoft, borderColor: C.line }}>
                  <p className={`${display.className} font-extrabold text-2xl md:text-3xl mb-1`} style={{ color: C.blueDeep }}>
                    {BIZ.fbFollowers}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.blue }}>
                    seguidores en Facebook
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta (muestra) ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La carta</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.06]`} style={{ color: C.blue }}>
              Precios de
              <br />
              <span style={{ color: C.cyanInk }}>referencia</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.gray }}>
              Carta de muestra para mostrar el formato: al publicar van
              los productos y precios reales de la casa.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border-t" style={{ borderColor: C.line }}>
            {CARTA.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 py-4 md:py-5 border-b"
                style={{ borderColor: C.line }}
              >
                <div>
                  <p className={`${display.className} font-bold text-sm md:text-base`} style={{ color: C.ink }}>
                    {item.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: C.gray }}>
                    {item.note}
                  </p>
                </div>
                <span
                  className="shrink-0 text-[10px] md:text-xs font-bold uppercase tracking-[0.16em] px-3 py-1.5"
                  style={{ backgroundColor: C.soft, color: C.blue }}
                >
                  precio del día
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed mt-5 max-w-md" style={{ color: C.gray }}>
            Los valores se confirman en el local o por WhatsApp. Texto
            de muestra: al publicar van los precios reales.
          </p>
        </Reveal>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.blueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-[1.08] mb-6`} style={{ color: '#fff' }}>
              Merced 490,
              <br />
              <span style={{ color: C.cyan }}>Curicó</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
              {BIZ.address}, {BIZ.postal}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: '#fff' }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Horario referencial: al publicar van los horarios reales
              de la cafetería.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 transition-transform active:scale-95`}
                style={{ backgroundColor: C.cyan, color: C.blueDeep }}
              >
                WhatsApp {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: C.blue }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.blue }}>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url(${IMG}/detalle2.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold text-[clamp(1.9rem,6vw,3.6rem)] leading-[1.06] mb-6`} style={{ color: '#fff' }}>
              El café ya está listo.
              <br />
              <span style={{ color: C.cyanSoft }}>Solo falta llegar.</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Escríbenos por WhatsApp para pedir para llevar o cotizar
              la once de la oficina. Estamos en Merced 490, Curicó.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 transition-transform active:scale-95`}
              style={{ backgroundColor: C.cyan, color: C.blueDeep }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.blueDeep, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-2 flex items-center gap-3`}>
              <Bean className="w-5 h-5" color={C.cyan} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-5 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.cyan }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, carta, horarios y fotos son de muestra;
            los datos de contacto son los publicados por el negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.cyan }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
