import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  paper: '#F8EFD9',
  card: '#FDF8EB',
  navy: '#14255E',
  navyDeep: '#0D1A45',
  red: '#C1272D',
  ink: '#1C1710',
  muted: '#6E5F4A',
  line: 'rgba(28,23,16,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'fuente-de-soda-el-valdiviano',
  title: 'Fuente de Soda El Valdiviano — Cauquenes',
  description: 'Fuente de soda de barrio en Av. Dr. Meza, Cauquenes. Completos, pizzas, chorrillanas, empanadas, jugos naturales y la vitrina de helados y pasteles. 4,5 en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La fuente', href: '#fuente' },
  { label: 'Llegar', href: '#contacto' },
]

export default function FuenteDeSodaElValdiviano() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-lg tracking-wide`}>
            El Valdiviano
          </span>
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.paper, ink: C.navy, line: C.line, btnBg: C.red, btnInk: '#FDF8EB' }}
      />

      {/* ── Hero: el letrero tal cual ── */}
      <section className="pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div
              className="rounded-2xl px-6 md:px-10 py-10 md:py-14 text-center border-b-8"
              style={{ backgroundColor: C.navy, borderColor: C.red }}
            >
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.35em] mb-4`} style={{ color: 'rgba(253,248,235,0.75)' }}>
                Fuente de soda · Cauquenes
              </p>
              <h1 className={`${display.className} uppercase text-[44px] md:text-[84px] leading-[1.02]`} style={{ color: '#FDF8EB' }}>
                El Valdiviano
              </h1>
              <p className={`${mono.className} mt-4 text-xs md:text-sm uppercase tracking-[0.2em]`} style={{ color: '#F5C842' }}>
                Helados · Pasteles · Café · Sandwich
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Fachada real ── */}
      <section id="fuente" className="max-w-6xl mx-auto px-5 md:px-8 mt-10">
        <Reveal>
          <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
            <Image
              src={`${IMG}/fachada.webp`}
              alt="Fachada de la Fuente de Soda El Valdiviano en Av. Dr. Meza, Cauquenes: letrero azul con el nombre en rojo y vinilos de la carta en el ventanal"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority={false}
            />
            <figcaption className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-wider`} style={{ backgroundColor: C.card, color: C.muted }}>
              El local en Av. Dr. Meza — foto de su ficha de Google
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Stars value={4.5} size={18} />
              <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>4,5 en Google</span>
            </div>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>Local climatizado</span>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>Hoy 11:00–22:00</span>
          </div>
        </Reveal>
      </section>

      {/* ── La carta del ventanal ── */}
      <section id="carta" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.red }}>
            La carta del ventanal
          </p>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.05]`} style={{ color: C.navy }}>
            Lo que anuncia la ventana
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed" style={{ color: C.muted }}>
            La misma carta que va pintada en los vinilos del local —
            sin vueltas, como en toda fuente de soda que se respeta.
          </p>
        </Reveal>
        <div className="mt-8 rounded-2xl border overflow-hidden" style={{ backgroundColor: C.card, borderColor: C.line }}>
          {CARTA.map((item, i) => (
            <Reveal key={item.n} delay={i * 50}>
              <div
                className="flex items-baseline gap-4 px-5 md:px-8 py-5"
                style={{ borderTop: i === 0 ? 'none' : `1px dashed ${C.line}` }}
              >
                <span className={`${mono.className} text-xs w-6 shrink-0`} style={{ color: C.red }}>{item.n}.</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.navy }}>{item.name}</h3>
                    {item.price && (
                      <span className={`${mono.className} text-sm font-bold whitespace-nowrap`} style={{ color: C.red }}>{item.price}</span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: C.muted }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="px-5 md:px-8 py-4" style={{ backgroundColor: 'rgba(20,37,94,0.05)', borderTop: `1px dashed ${C.line}` }}>
            <p className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: C.muted }}>
              El resto de la carta y los precios del día se confirman en el local o por teléfono.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: '#F5C842' }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.paper }}>
              Av. Dr. Meza 1476,
              <br />
              Cauquenes
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: 'rgba(248,239,217,0.8)' }}>
              {BIZ.name}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={TEL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.red, color: '#FDF8EB' }}
              >
                Llamar al local
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
            <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-wider`} style={{ color: 'rgba(248,239,217,0.6)' }}>
              La casa no publica WhatsApp — se atiende por teléfono y en el local.
            </p>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: 'rgba(248,239,217,0.25)' }}>
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
      <footer style={{ backgroundColor: '#0A1330' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <p className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.paper }}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(248,239,217,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={TEL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(248,239,217,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-12 text-xs leading-relaxed" style={{ color: 'rgba(248,239,217,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos reales de su ficha de Google y SERNATUR;
            su única foto es la fachada, así que el diseño se apoya en la
            carta del ventanal, no en imágenes inventadas.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F5C842' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} />
    </div>
  )
}
