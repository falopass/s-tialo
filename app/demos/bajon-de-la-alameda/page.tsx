import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RICO, MAPS_URL, MAPS_EMBED, IMG, CARTA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

const C = {
  paper: '#FFF4DE',
  card: '#FFFBF0',
  ink: '#2A1408',
  muted: '#6B5340',
  ketchup: '#C1272D',
  ketchupDeep: '#8F1A1F',
  mostaza: '#E8A00D',
  palta: '#4F6B2A',
  line: 'rgba(42,20,8,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'bajon-de-la-alameda',
  title: 'Bajón De La Alameda — Completos en Linares',
  description: 'El puesto de perros calientes de Valentín Letelier 518, Linares. Completos con vienesa Llanquihue, churrascos y mayo casera. 4,4 con casi 600 reseñas.',
  image: `${IMG}/completo.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La casa', href: '#casa' },
  { label: 'Clientes', href: '#resenas' },
  { label: 'Llegar', href: '#contacto' },
]

/* Borde dentado de ticket — se usa como divisor entre secciones. */
function Zigzag({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[14px] w-full"
      style={{
        backgroundColor: color,
        clipPath: flip
          ? 'polygon(0 0, 100% 0, 100% 100%, 97% 0, 94% 100%, 91% 0, 88% 100%, 85% 0, 82% 100%, 79% 0, 76% 100%, 73% 0, 70% 100%, 67% 0, 64% 100%, 61% 0, 58% 100%, 55% 0, 52% 100%, 49% 0, 46% 100%, 43% 0, 40% 100%, 37% 0, 34% 100%, 31% 0, 28% 100%, 25% 0, 22% 100%, 19% 0, 16% 100%, 13% 0, 10% 100%, 7% 0, 4% 100%, 0 0)'
          : 'polygon(0 0, 3% 100%, 6% 0, 9% 100%, 12% 0, 15% 100%, 18% 0, 21% 100%, 24% 0, 27% 100%, 30% 0, 33% 100%, 36% 0, 39% 100%, 42% 0, 45% 100%, 48% 0, 51% 100%, 54% 0, 57% 100%, 60% 0, 63% 100%, 66% 0, 69% 100%, 72% 0, 75% 100%, 78% 0, 81% 100%, 84% 0, 87% 100%, 90% 0, 93% 100%, 96% 0, 100% 100%, 100% 0, 0 0)',
      }}
    />
  )
}

export default function BajonDeLaAlameda() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-lg tracking-wide uppercase`}>
            El Bajón <span style={{ color: C.ketchupDeep }}>·</span> Alameda
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        theme={{ over: 'dark', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ketchup, btnInk: '#FFF4DE' }}
      />

      {/* ── Hero: el completo como afiche de kiosco ── */}
      <section className="relative">
        <div className="relative h-[58vh] min-h-[380px] overflow-hidden">
          <Image
            src={`${IMG}/completo.webp`}
            alt="Completo italiano del Bajón de la Alameda: vienesa con palta, mayonesa y ketchup sobre pan"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(42,20,8,0.35) 0%, rgba(42,20,8,0) 40%, rgba(255,244,222,0.95) 96%)' }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 -mt-24 relative">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.ketchupDeep }}>
              Linares · Valentín Letelier 518
            </p>
            <h1 className={`${display.className} uppercase leading-[0.95] text-[52px] md:text-[92px]`}>
              El completo
              <br />
              que salva
              <br />
              <span style={{ color: C.ketchup }}>el bajón</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
              Puesto de perros calientes frente a la Alameda de Linares.
              Completos con vienesa Llanquihue, churrascos y la mayo
              casera que se repite en cada reseña.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.ketchup, color: '#FFF4DE' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de datos como ticket ── */}
      <section className="mt-10">
        <Zigzag color={C.ink} />
        <div style={{ backgroundColor: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['4,4★', 'en Google'],
              ['~600', 'opiniones'],
              ['V. Letelier 518', 'frente a la Alameda'],
              ['9:00–24:00', 'horario de su ficha'],
            ].map(([big, small]) => (
              <div key={big}>
                <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.mostaza }}>{big}</p>
                <p className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: 'rgba(255,244,222,0.75)' }}>{small}</p>
              </div>
            ))}
          </div>
        </div>
        <Zigzag color={C.ink} flip />
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.palta }}>
            La carta
          </p>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95]`}>
            Lo que se pide
            <br />
            <span style={{ color: C.palta }}>ventana por medio</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {CARTA.map((item, i) => (
            <Reveal key={item.n} delay={i * 60}>
              <article
                className="relative h-full p-5 rounded-2xl border"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className={`${mono.className} text-xs`} style={{ color: C.muted }}>{item.n}</p>
                  <span
                    className={`${mono.className} text-[10px] uppercase tracking-wider px-2 py-1 rounded-full`}
                    style={{ backgroundColor: i % 2 === 0 ? 'rgba(193,39,45,0.12)' : 'rgba(79,107,42,0.14)', color: i % 2 === 0 ? C.ketchupDeep : C.palta }}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className={`${display.className} uppercase text-2xl mt-2`}>{item.name}</h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>{item.desc}</p>
                <div aria-hidden="true" className="mt-4 border-t border-dashed" style={{ borderColor: C.line }} />
                <a href={WA_LINK_RICO} className={`${mono.className} inline-block mt-3 text-xs uppercase tracking-wider font-bold tap-44`} style={{ color: C.ketchup }}>
                  Pedir este →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className={`${mono.className} mt-6 text-xs`} style={{ color: C.muted }}>
          La casa no publica precios en su ficha — se piden directo en la ventana o por WhatsApp.
        </p>
      </section>

      {/* ── La casa / los dueños ── */}
      <section id="casa" style={{ backgroundColor: '#F7E8C8' }}>
        <Zigzag color="#F7E8C8" flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border-4" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/duenos-expo.webp`}
                alt="Los dueños del Bajón de la Alameda en su stand de la Expo del Buen Mote con Huesillo, en la Plaza de Armas de Linares"
                width={720}
                height={960}
                className="w-full h-auto"
              />
              <span
                className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded`}
                style={{ backgroundColor: 'rgba(42,20,8,0.85)', color: '#FFF4DE' }}
              >
                Stand en la Expo del Mote con Huesillo
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.ketchupDeep }}>
              La casa
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95]`}>
              Negocio de feria,
              <br />
              clientela de siempre
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
              El Bajón se hace fuerte donde se prueba: en las expos
              gremiales de Linares — como la del Buen Mote con Huesillo en
              la Plaza de Armas — sus dueños sacan el stand con el mismo
              completo que sirven en Valentín Letelier.
            </p>
            <p className="mt-3 text-base leading-relaxed" style={{ color: C.muted }}>
              El resto del año el ritual es el mismo de siempre: la
              ventana abierta frente a la Alameda, el pan tostado y la
              mayo hecha en casa.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-5 text-xs uppercase tracking-wider font-bold underline underline-offset-4 tap-44`}
              style={{ color: C.ketchupDeep }}
            >
              Ver la ficha en Google Maps →
            </a>
          </Reveal>
        </div>
        <Zigzag color="#F7E8C8" />
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.ketchupDeep }}>
                Lo que dicen
              </p>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl`}>
                {BIZ.rating} de {BIZ.reviews} opiniones
              </h2>
            </div>
            <Stars value={4.4} size={22} />
          </div>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure
                className="h-full p-5 rounded-2xl border-t-4"
                style={{ backgroundColor: C.card, borderColor: C.ketchup, boxShadow: '0 2px 0 rgba(42,20,8,0.08)' }}
              >
                <Stars value={r.stars} size={14} />
                <blockquote className="mt-3 text-sm leading-relaxed" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} mt-4 text-xs uppercase tracking-wider`} style={{ color: C.muted }}>
                  — {r.name} · reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" style={{ backgroundColor: C.ink }}>
        <Zigzag color={C.ink} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.mostaza }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.paper }}>
              Valentín Letelier 518,
              <br />
              frente a la Alameda
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: 'rgba(255,244,222,0.8)' }}>
              {BIZ.name}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              Fijo: <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              <br />
              WhatsApp: <a href={WA_LINK} className="underline underline-offset-2 tap-44">+56 9 4981 3206</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.mostaza, color: C.ink }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.paper, color: C.paper }}
              >
                Cómo llegar
              </a>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: 'rgba(255,244,222,0.25)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[280px] md:h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#1B0D05' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-xl md:text-2xl mb-2`} style={{ color: C.paper }}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,244,222,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,244,222,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(255,244,222,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son reales
            y salen de su ficha de Google y del registro de SERNATUR; su
            ficha solo publica 2 fotos, así que el sitio se apoya en
            tipografía y no en imágenes inventadas.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.mostaza }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
