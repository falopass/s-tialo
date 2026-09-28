import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// Café de puerto: crema de manteca, espresso, caramelo y un tinto de vino.
const C = {
  paper: '#FAF3E7',
  card: '#FFFDF6',
  soft: '#F0E4CF',
  ink: '#2A1B10',
  espresso: '#221610',
  caramel: '#B06A28',
  caramelText: '#8F5219',
  wine: '#7C2E3E',
  muted: '#6E5B49',
  line: 'rgba(42,27,16,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'marbella-talcahuano',
  title: 'Café Marbella — El café del puerto, en San Martín 158',
  description:
    'Cafetería y pastelería clásica de Talcahuano: completos, torta Amor, pie de maracuyá y helados de la casa. San Martín 158. Pedidos por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Los clásicos', href: '#clasicos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visítanos', href: '#visitanos' },
]

const CINTA = [
  'Completos',
  'Churrasco palta',
  'Torta Amor',
  'Pie de maracuyá',
  'Helados de la casa',
  'Copa Marbella',
  'Café cortado',
  'Tartaletas de fruta',
]

const CLASICOS = [
  {
    name: 'Completos y sándwiches',
    desc: 'Los completos son lo más pedido de la casa; el sándwich de churrasco palta en pan de molde tostado tiene fanaticada propia.',
    img: `${IMG}/completo.webp`,
    alt: 'Completo y cappuccino sobre la mesa de madera del café',
  },
  {
    name: 'La vitrina de tortas',
    desc: 'Torta Amor —la favorita en Google—, Bohemia, Tiramisú, pie de maracuyá y tartaletas de fruta, por trozo o entera por encargo.',
    img: `${IMG}/vitrina.webp`,
    alt: 'Vitrina del café con tortas y pasteles del día',
  },
  {
    name: 'Helados y copas',
    desc: 'Helados de elaboración propia, banana split, copa Marbella y milkshakes para cerrar la tarde.',
    img: `${IMG}/cafe.webp`,
    alt: 'Dos cafés irlandeses con crema sobre granos de café',
  },
]

const CARTA = [
  { name: 'Completo o hot dog', tag: 'el más pedido' },
  { name: 'Sándwich churrasco palta, en molde tostado', tag: '' },
  { name: 'Torta Amor (trozo)', tag: 'favorita en Google' },
  { name: 'Pie de maracuyá', tag: '' },
  { name: 'Tortas Bohemia y Tiramisú', tag: '' },
  { name: 'Tartaleta canasto de fruta', tag: '' },
  { name: 'Banana split', tag: '' },
  { name: 'Copa Marbella', tag: 'de la casa' },
  { name: 'Milkshake', tag: '' },
  { name: 'Café cortado o capuccino', tag: '' },
  { name: 'Helados de elaboración propia', tag: '' },
  { name: 'Café helado', tag: '' },
]

const RESENAS = [
  {
    text: 'Un clásico del puerto: deliciosa pastelería y sándwich.',
    who: 'Reseña de Google (A. T.)',
  },
  {
    text: 'Los sándwich churrasco palta en pan de molde tostado exquisitos; la torta Amor y el pie de maracuyá, de miedo. Rápida atención.',
    who: 'Reseña de Google',
  },
  {
    text: 'Buenos completos, helados de elaboración propia con variedad de sabores y pastelería variada. Atención rápida.',
    who: 'Reseña de Google (S. L.)',
  },
]

/** Grano de café: el motivo que se repite en toda la página. */
function Grano({ color, className = 'w-3 h-3' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" focusable="false">
      <ellipse cx="12" cy="12" rx="7.5" ry="10" fill={color} transform="rotate(35 12 12)" />
      <path
        d="M7.5 6.5c4 3 4 8 9 11"
        stroke={C.paper}
        strokeWidth="1.8"
        strokeLinecap="round"
        transform="rotate(35 12 12)"
      />
    </svg>
  )
}

/** Vapor de taza: tres rizos ascendentes. */
function Vapor({ color, className = 'w-16 h-8' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 32" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M14 30c-4-5 4-7 0-12s4-7 0-12" />
      <path d="M32 30c-4-5 4-7 0-12s4-7 0-12" />
      <path d="M50 30c-4-5 4-7 0-12s4-7 0-12" />
    </svg>
  )
}

function Sello() {
  return (
    <div
      className="absolute top-[76px] md:top-[92px] right-5 md:right-8 w-[92px] h-[92px] md:w-[112px] md:h-[112px] rounded-full flex items-center justify-center text-center rotate-[8deg]"
      style={{
        border: `2px dashed rgba(250,243,231,0.75)`,
        backgroundColor: 'rgba(34,22,16,0.55)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <p className={`${display.className} italic text-[10px] md:text-[11px] leading-tight font-semibold px-3`} style={{ color: '#FAF3E7' }}>
        El clásico
        <br />
        de
        <br />
        San Martín
      </p>
    </div>
  )
}

function SectionLabel({ n, title, light = false }: { n: string; title: string; light?: boolean }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center gap-3 mb-3">
        <Grano color={light ? '#E8C893' : C.caramel} className="w-3.5 h-3.5" />
        <p
          className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em]"
          style={{ color: light ? 'rgba(250,243,231,0.75)' : C.caramelText }}
        >
          {n}
        </p>
      </div>
      <h2
        className={`${display.className} font-black leading-[1.02] tracking-tight text-[clamp(2rem,6vw,3.6rem)]`}
        style={{ color: light ? '#FAF3E7' : C.ink }}
      >
        {title}
      </h2>
    </div>
  )
}

export default function MarbellaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .mb-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .mb-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .mb-btn:active { transform: translateY(0) scale(0.97); }
        .mb-btn:focus-visible { outline: 3px solid ${C.caramel}; outline-offset: 3px; }
        @keyframes mb-cinta { to { transform: translateX(-50%); } }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold italic`}
        theme={{
          over: 'dark',
          bar: 'rgba(250,243,231,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.espresso,
          btnInk: '#FAF3E7',
        }}
        ctaLabel="Pedir"
      />

      {/* ── Hero: el salón del café ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.espresso }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Salón de Café Marbella con clientes en las mesas, paredes color café y luz cálida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,22,16,0.6) 0%, rgba(34,22,16,0.12) 42%, rgba(34,22,16,0.9) 100%)',
          }}
        />
        <div className="absolute top-[72px] md:top-[84px] inset-x-0">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div
                className="flex items-center justify-between gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.26em] pb-3 border-b"
                style={{ color: 'rgba(250,243,231,0.85)', borderColor: 'rgba(250,243,231,0.35)' }}
              >
                <span>Café · Pastelería</span>
                <span className="hidden sm:inline">San Martín 158</span>
                <span>Talcahuano</span>
              </div>
            </Reveal>
          </div>
        </div>
        <Sello />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-44">
          <Reveal delay={100}>
            <Vapor color="rgba(250,243,231,0.8)" className="w-14 h-7 mb-4" />
            <h1
              className={`${display.className} font-black leading-[0.98] tracking-tight text-[clamp(2.8rem,9vw,6.6rem)] mb-5`}
              style={{ color: '#FAF3E7' }}
            >
              Donde Talcahuano
              <br />
              toma{' '}
              <em className="font-semibold" style={{ color: '#E8C893' }}>
                once
              </em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-6 font-medium" style={{ color: 'rgba(250,243,231,0.88)' }}>
              Completos, vitrina de tortas y helados de la casa en el café
              clásico de San Martín. De lunes a sábado, desde las 8:00.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-btn inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full tap-44"
                style={{ backgroundColor: '#FAF3E7', color: C.ink }}
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill={C.caramel} aria-hidden="true">
                  <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                </svg>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full text-center tap-44`}
                style={{ backgroundColor: C.wine, color: '#FAF3E7' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} mb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 text-center tap-44 hover:bg-white/10`}
                style={{ borderColor: 'rgba(250,243,231,0.6)', color: '#FAF3E7' }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>
        </div>
        <div
          className="relative border-t"
          style={{ borderColor: 'rgba(250,243,231,0.22)', backgroundColor: 'rgba(34,22,16,0.5)', backdropFilter: 'blur(6px)' }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em] font-semibold"
            style={{ color: 'rgba(250,243,231,0.82)' }}
          >
            <span>Cafetería</span>
            <span>Pastelería</span>
            <span>Gelatería</span>
            <span>San Martín 158, Talcahuano</span>
            <span className="hidden md:inline" style={{ color: '#E8C893' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta de clásicos ── */}
      <div className="overflow-hidden py-3.5 border-b" style={{ backgroundColor: C.soft, borderColor: C.line }} aria-hidden="true">
        <div
          className={`${display.className} flex gap-7 whitespace-nowrap italic font-semibold text-base md:text-lg w-max`}
          style={{ color: C.wine, animation: 'mb-cinta 30s linear infinite' }}
        >
          {[...CINTA, ...CINTA].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-7">
              {item}
              <Grano color={C.caramel} className="w-2.5 h-2.5" />
            </span>
          ))}
        </div>
      </div>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionLabel n="01 · La vitrina" title="De la máquina de espresso al mostrador" />
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="space-y-4 lg:pt-2">
              <p className="text-base md:text-lg leading-relaxed font-medium">
                {BIZ.name} es el punto de encuentro de siempre en el centro
                de Talcahuano: completos al paso, once con torta y café, y
                una vitrina de pastelería que se renueva todos los días.
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                También con local en {BIZ.branch}. Todo se puede pedir por
                WhatsApp para retirar en el local.
              </p>
              <div className="flex flex-wrap gap-6 pt-3">
                <div className="border-l-4 pl-4" style={{ borderColor: C.wine }}>
                  <p className={`${display.className} font-black text-3xl leading-none`}>{BIZ.rating}</p>
                  <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>
                    estrellas en Google
                  </p>
                </div>
                <div className="border-l-4 pl-4" style={{ borderColor: C.caramel }}>
                  <p className={`${display.className} font-black text-3xl leading-none`}>{BIZ.reviews}</p>
                  <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>
                    reseñas
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <ul className="col-span-12 lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {CLASICOS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className={i === 0 ? 'sm:col-span-2' : ''}>
                <li className="group h-full rounded-3xl overflow-hidden" style={{ backgroundColor: C.card, boxShadow: '0 10px 30px rgba(42,27,16,0.10)' }}>
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes={i === 0 ? '(min-width: 1024px) 58vw, 100vw' : '(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw'}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`${display.className} font-extrabold text-xl md:text-2xl mb-1.5`}>{p.name}</h3>
                    <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <ul className="grid grid-cols-3 gap-3 md:gap-5 mt-6 md:mt-8">
          {[
            { src: `${IMG}/interior.webp`, alt: 'Mesas del salón del café con luz cálida y madera' },
            { src: `${IMG}/pie.webp`, alt: 'Trozo de pie de maracuyá sobre plato' },
            { src: `${IMG}/sandwich.webp`, alt: 'Sándwich de churrasco palta servido en pan de molde' },
          ].map((p, i) => (
            <Reveal key={p.src} delay={i * 90}>
              <li className="rounded-2xl overflow-hidden aspect-[4/3] relative" style={{ boxShadow: '0 8px 22px rgba(42,27,16,0.10)' }}>
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 33vw" className="object-cover" />
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Foto horizontal: la torta ── */}
      <section aria-label="Tortas del café">
        <Reveal>
          <div className="relative h-[46vh] md:h-[64vh] overflow-hidden">
            <Image
              src={`${IMG}/torta.webp`}
              alt="Trozo de torta de capas con cobertura de chocolate sobre plato"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <p
              className={`${display.className} py-3 text-[10px] md:text-xs italic font-semibold tracking-[0.1em] border-b`}
              style={{ color: C.muted, borderColor: C.line }}
            >
              La torta Amor, capa a capa — la favorita de la casa.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Los clásicos (carta) ── */}
      <section id="clasicos" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionLabel n="02 · Los clásicos" title="Lo que se pide siempre" />
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
                Una selección de la carta real del café: lo que más piden
                los habituales. Precios y disponibilidad se confirman en
                el local o por WhatsApp.
              </p>
              <span
                className={`${display.className} inline-block italic text-xs font-bold px-3.5 py-1.5 rounded-full`}
                style={{ backgroundColor: C.wine, color: '#FAF3E7' }}
              >
                Carta del día
              </span>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-8" delay={120}>
              <ul className="rounded-3xl overflow-hidden" style={{ backgroundColor: C.card, boxShadow: '0 10px 30px rgba(42,27,16,0.08)' }}>
                {CARTA.map((m, i) => (
                  <li
                    key={m.name}
                    className="flex items-center gap-4 px-5 md:px-7 py-4"
                    style={{ borderTop: i === 0 ? 'none' : `1px solid ${C.line}` }}
                  >
                    <Grano color={i % 3 === 0 ? C.wine : C.caramel} className="w-3 h-3 shrink-0" />
                    <span className="text-sm md:text-base font-semibold flex-1">{m.name}</span>
                    {m.tag && (
                      <span
                        className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full shrink-0"
                        style={{ backgroundColor: C.soft, color: C.wine }}
                      >
                        {m.tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mb-btn inline-block font-bold text-sm md:text-base px-7 py-3 rounded-full mt-7 tap-44`}
                style={{ backgroundColor: C.espresso, color: '#FAF3E7' }}
              >
                Pedir para retirar
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionLabel n="03 · Opiniones" title={`${BIZ.reviews} reseñas y contando`} />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure
                className="h-full rounded-3xl p-6 md:p-7"
                style={{ backgroundColor: C.card, boxShadow: '0 8px 26px rgba(42,27,16,0.09)' }}
              >
                <div className="flex gap-1 mb-4" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} viewBox="0 0 20 20" className="w-4 h-4" fill={C.caramel}>
                      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed font-medium mb-4">“{r.text}”</blockquote>
                <figcaption
                  className={`${display.className} italic text-xs font-semibold tracking-[0.08em]`}
                  style={{ color: C.caramelText }}
                >
                  {r.who}
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
            className={`${display.className} inline-block mt-7 text-sm font-bold italic underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.wine, textDecorationColor: 'rgba(124,46,62,0.35)' }}
          >
            Leer todas en la ficha de Google →
          </a>
        </Reveal>
      </section>

      {/* ── Visítanos: horario + mapa ── */}
      <section id="visitanos" className="scroll-mt-20" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionLabel n="04 · Visítanos" title="San Martín 158, pleno centro" light />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <ul className="mb-7 rounded-3xl overflow-hidden" style={{ backgroundColor: 'rgba(250,243,231,0.06)', border: '1px solid rgba(250,243,231,0.16)' }}>
                  {BIZ.hours.map((h, i) => (
                    <li
                      key={h.d}
                      className="flex items-baseline justify-between gap-4 px-5 py-3.5"
                      style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(250,243,231,0.12)' }}
                    >
                      <span className="text-sm font-semibold" style={{ color: 'rgba(250,243,231,0.9)' }}>{h.d}</span>
                      <span className={`${display.className} font-bold`} style={{ color: '#E8C893' }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-3 font-medium" style={{ color: 'rgba(250,243,231,0.9)' }}>
                  {BIZ.address}, {BIZ.city}
                  <br />
                  {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <p className="text-xs md:text-sm mb-8" style={{ color: 'rgba(250,243,231,0.65)' }}>
                  También en {BIZ.branch}.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full text-center tap-44`}
                    style={{ backgroundColor: '#E8C893', color: C.espresso }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 text-center tap-44 hover:bg-white/10`}
                    style={{ borderColor: 'rgba(250,243,231,0.5)', color: '#FAF3E7' }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]"
                  style={{ border: '1px solid rgba(250,243,231,0.2)' }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#1A110A', color: '#FAF3E7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Grano color={C.caramel} className="w-4 h-4" />
            <p className={`${display.className} font-black italic text-xl md:text-2xl`}>{BIZ.name}</p>
          </div>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,243,231,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Ficha en Google Maps
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,243,231,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(250,243,231,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FAF3E7' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos y reseñas de la ficha pública del café en Google Maps.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E8C893' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
