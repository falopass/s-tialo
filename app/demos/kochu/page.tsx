import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const serif = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

// Identidad sacada de su logo manuscrito y del lago Vichuquén:
// papel crema, tinta casi negra y un azul lago como único acento.
const C = {
  paper: '#FAF5EA',
  paper2: '#F1EADA',
  ink: '#191510',
  lake: '#0E5563',
  lakeDark: '#0A3E48',
  muted: '#6B6252',
  line: 'rgba(25,21,16,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'kochu',
  title: 'Kochü — Restaurante, cafetería y pastelería frente al lago Vichuquén',
  description:
    'Kochü, en Boulevard del Lago, Vichuquén: hamburguesas, shawarmas, chorrillana, café de grano y pastelería, viernes a domingo. Reserva por WhatsApp.',
  image: '/demos/kochu/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Dulce y café', href: '#dulce' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const PLATOS = [
  { src: 'burger', alt: 'Hamburguesa de Kochü sobre tabla oscura', name: 'Las burgers' },
  { src: 'shawarma', alt: 'Shawarma de Kochü enrollado y a la plancha', name: 'Shawarmas' },
  { src: 'chorrillana', alt: 'Chorrillana de Kochü para compartir', name: 'La chorrillana' },
  { src: 'pizza', alt: 'Pizza de Kochü recién salida del horno', name: 'Pizzas' },
  { src: 'salchipapas', alt: 'Salchi Papas de Kochü', name: 'Salchi Papas' },
]

const DULCE = [
  { name: 'Pie de limón', note: 'El favorito de las reseñas' },
  { name: 'Cheesecake', note: 'Nombrado por sus clientes' },
  { name: 'Streusel de manzana', note: 'De la vitrina de pastelería' },
  { name: 'Café de grano', note: 'Cappuccino de vainilla y más' },
]

const RESENAS = [
  {
    quote: 'Buenísimas hamburguesas, la Big K es una Big Mac en HD. Hay estufa para la terraza.',
    who: 'Elisabet Retamal · reseña de Google',
  },
  {
    quote: 'Las hamburguesas, la chorrillana, y ni hablar del pie de limón.',
    who: 'José Miro · reseña de Google',
  },
  {
    quote: 'Café de grano, cappuccino de vainilla, cheesecake y streusel de manzana muy buenos.',
    who: 'Dani Ellsworth · reseña de Google',
  },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-7 py-2.5 rounded-full font-semibold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44"
      style={{ backgroundColor: light ? C.paper : C.lake, color: light ? C.ink : '#fff' }}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

function Eyebrow({ children, color = C.lake }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-[12px] font-semibold uppercase tracking-[0.28em] mb-4 flex items-center gap-3" style={{ color }}>
      <span className="block w-6 h-px" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function KochuPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        fontClass={serif.className}
        theme={{ over: 'light', bar: 'rgba(250,245,234,0.96)', ink: C.ink, line: C.line, btnBg: C.lake, btnInk: '#fff' }}
      />

      {/* ── Hero editorial: el logo manuscrito y la terraza ── */}
      <section id="inicio" className="pt-28 md:pt-36 pb-0">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <figure className="w-44 md:w-56 mx-auto mb-6">
              <Image src={`${IMG}/logo.webp`} alt="Logo manuscrito de Kochü" width={560} height={300} className="w-full h-auto" priority />
            </figure>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] mb-5" style={{ color: C.lake }}>
              {BIZ.city} · Región del Maule
            </p>
            <h1 className={`${serif.className} leading-[1.02] text-[clamp(2.4rem,8vw,4.6rem)]`}>
              Comer a orillas<br />del lago
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
              Restaurante, restobar, cafetería y pastelería en el Boulevard del Lago. Hamburguesas, shawarmas y dulces de vitrina — solo de viernes a domingo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <WaButton>Reservar mesa</WaButton>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-center inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 rounded-full font-semibold text-[15px] border transition-colors hover:bg-[#191510] hover:text-[#FAF5EA] tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                @{BIZ.instagram}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <figure className="max-w-6xl mx-auto px-5 md:px-8 mt-12">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-t-2xl overflow-hidden">
              <Image
                src={`${IMG}/hero.webp`}
                alt="Terraza techada de Kochü frente al lago Vichuquén"
                fill
                priority
                sizes="(min-width:1200px) 1150px, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </Reveal>
      </section>

      {/* ── El horario del lago: tipográfico ──────────── */}
      <section aria-label="Horario" style={{ backgroundColor: C.lake, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'rgba(250,245,234,0.75)' }}>
            Solo fines de semana — el ritmo del lago
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {HORARIO.map((h) => (
              <li key={h.dia} className="text-center px-2">
                <p className={`${serif.className} text-2xl md:text-3xl`}>{h.dia}</p>
                <p className="mt-1 text-sm font-semibold tracking-wide" style={{ color: h.hora === 'Cerrado' ? 'rgba(250,245,234,0.55)' : C.paper }}>
                  {h.hora}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La carta: fila de fotos + carta real ──────── */}
      <section id="carta" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow>La carta</Eyebrow>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-10">
            <h2 className={`${serif.className} text-4xl md:text-6xl leading-[1.0]`}>
              Generoso de porción,<br />de pan a shawarma
            </h2>
            <p className="text-sm max-w-xs md:text-right leading-relaxed" style={{ color: C.muted }}>
              “Platos súper abundantes”, dicen sus clientes: precios desde las 6 hasta las 18 lucas según sus reseñas.
            </p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {PLATOS.map((p, i) => (
              <li key={p.src} className={i === 0 ? 'md:row-span-2' : ''}>
                <Reveal delay={i * 70} className="h-full">
                  <figure className="group h-full flex flex-col">
                    <div className={`relative overflow-hidden rounded-xl flex-1 ${i === 0 ? 'aspect-[3/4] md:aspect-auto' : 'aspect-[4/3]'}`} style={{ backgroundColor: C.paper2 }}>
                      <Image src={`${IMG}/${p.src}.webp`} alt={p.alt} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <figcaption className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                      {p.name}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal delay={5 * 70} className="h-full">
                <figure className="group h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-xl flex-1 aspect-[4/3]" style={{ backgroundColor: C.paper2 }}>
                    <Image src={`${IMG}/carta.webp`} alt="La carta de Kochü con su nombre en script" fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                    La carta completa
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Dulce y café ──────────────────────────────── */}
      <section id="dulce" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paper2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>La vitrina</Eyebrow>
            <h2 className={`${serif.className} text-4xl md:text-5xl leading-[1.05] mb-6`}>
              Café de grano y algo dulce
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              La otra cara de Kochü: cafetería y pastelería propia. Estos son los que sus clientes nombran en Google.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DULCE.map((d) => (
                <li key={d.name} className="rounded-xl border px-4 py-3" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                  <p className={`${serif.className} text-lg leading-snug`}>{d.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: C.muted }}>{d.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden -rotate-1 border-[10px] shadow-lg" style={{ borderColor: '#fff', backgroundColor: '#fff' }}>
                <Image src={`${IMG}/burger-huevo.webp`} alt="Hamburguesa de Kochü con huevo frito, servida en tabla" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="absolute -bottom-4 right-3 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] rotate-1" style={{ backgroundColor: C.ink, color: C.paper }}>
                “La Big K, en HD”
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ───────────────────────────────────── */}
      <section aria-label="Reseñas" style={{ backgroundColor: C.lakeDark, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            <Reveal className="shrink-0">
              <p className={`${serif.className} text-6xl md:text-7xl leading-none`}>{BIZ.googleRating}</p>
              <Stars value={BIZ.googleRating} color="#E8B33E" className="w-4 h-4 mt-2" />
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: 'rgba(250,245,234,0.65)' }}>
                {BIZ.googleReviews} reseñas en Google
              </p>
            </Reveal>
            <ul className="grid md:grid-cols-3 gap-5 flex-1">
              {RESENAS.map((r, i) => (
                <li key={r.who}>
                  <Reveal delay={i * 90}>
                    <blockquote className="border-l-2 pl-4 h-full" style={{ borderColor: '#E8B33E' }}>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(250,245,234,0.92)' }}>“{r.quote}”</p>
                      <cite className="not-italic block mt-3 text-[11px] uppercase tracking-[0.14em] font-semibold" style={{ color: 'rgba(250,245,234,0.6)' }}>
                        {r.who}
                      </cite>
                    </blockquote>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Dos casas + mapa ──────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${serif.className} text-4xl md:text-5xl leading-[1.05] mb-6`}>
              Frente al lago, y también al paso
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: C.muted }}>
              <strong className="text-[#191510]">{BIZ.address}</strong>, {BIZ.city}. La casa del lago, con terraza techada.
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              Según su sitio oficial, Kochü tiene una segunda casa en Curicó, “al paso”. Empresa liderada por mujeres.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WaButton>Consultar por WhatsApp</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 rounded-full font-semibold text-[15px] border transition-colors hover:bg-[#191510] hover:text-[#FAF5EA] tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir ruta en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border-2 min-h-[300px] h-full" style={{ borderColor: C.ink, backgroundColor: C.paper2 }}>
              <LazyMap
                title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${serif.className} text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,245,234,0.62)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(250,245,234,0.62)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
