import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA, AFICHES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  night: '#161210',
  ink: '#241E19',
  paper: '#F4EDE0',
  card: '#FBF6EA',
  muted: '#6F6356',
  red: '#BB2323',
  wasabi: '#4E6B40',
  chalk: '#EDE6D6',
  line: 'rgba(36,30,25,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'ando',
  title: 'Andö — Nikkei + Chifa en Curicó',
  description:
    'Restaurante nikkei en Av. España 109, Curicó. Tiradito, ceviches, sushi y buffet de comida peruana. 4,5 en Google.',
  image: `${IMG}/salon-pizarra.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El salón', href: '#salon' },
  { label: 'Afiches', href: '#afiches' },
  { label: 'Llegar', href: '#contacto' },
]

/* Filete de pincel — divisor entre secciones, como el trazo del wordmark. */
function Brush({ color }: { color: string }) {
  return (
    <div aria-hidden="true" className="w-full flex justify-center py-1">
      <svg width="220" height="10" viewBox="0 0 220 10" fill="none">
        <path d="M2 6 C 40 1, 80 9, 118 4 S 190 2, 218 5" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default function Ando() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-xl tracking-wide`}>
            andö <span className={`${mono.className} text-xs uppercase`} style={{ color: C.red }}>nikkei + chifa</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.red, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: el salón con la pizarra nikkei ── */}
      <section className="relative">
        <div className="relative h-[56vh] min-h-[380px] overflow-hidden">
          <Image
            src={`${IMG}/salon-pizarra.webp`}
            alt="Salón de Andö en Curicó: mesas de madera y la pizarra mural «nikkei, o el arte de hacer más con menos»"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(22,18,16,0.45) 0%, rgba(22,18,16,0.1) 40%, rgba(244,237,224,0.97) 97%)' }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 -mt-28 relative">
          <Reveal>
            <div
              className="inline-block rounded-2xl p-4 mb-4"
              style={{ backgroundColor: C.night, boxShadow: '0 6px 20px rgba(22,18,16,0.3)' }}
            >
              <Image
                src={`${IMG}/logo.webp`}
                alt="Wordmark real de Andö: andö nikkei + chifa"
                width={220}
                height={110}
                className="h-[72px] w-auto"
              />
            </div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.red }}>
              Curicó · Av. España 109
            </p>
            <h1 className={`${display.className} leading-[1.02] text-[42px] md:text-[80px]`}>
              Nikkei, o el arte
              <br />
              de hacer <em style={{ color: C.red, fontStyle: 'italic' }}>más con menos</em>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
              Cocina peruano-japonesa en plena Av. España: tiraditos,
              ceviches y sushi de barra, con buffet de platos peruanos.
              La frase de arriba está pintada a tiza en su propio salón.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 pr-14">
              <a
                href={BIZ.cartaQr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Ver la carta QR
              </a>
              <a
                href={CALL_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de datos sobre noche ── */}
      <section className="mt-10" style={{ backgroundColor: C.night }}>
        <Brush color={C.night} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['4,5★', 'en su ficha de Google'],
            ['6.574', 'seguidores en Facebook'],
            ['Nikkei + chifa', 'peruano-japonés'],
            ['Pedir en línea', 'carta QR de la casa'],
          ].map(([big, small]) => (
            <div key={big}>
              <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.chalk }}>{big}</p>
              <p className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: 'rgba(237,230,214,0.66)' }}>{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── De la carta ── */}
      <section id="carta" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.wasabi }}>
            De la carta QR que ellos publican
          </p>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0]`}>
            Peruano en la base,
            <br />
            <em className="italic" style={{ color: C.red }}>japonés en la mano</em>
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
                    style={{ backgroundColor: i % 2 === 0 ? 'rgba(198,40,40,0.10)' : 'rgba(94,122,78,0.14)', color: i % 2 === 0 ? C.red : C.wasabi }}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className={`${display.className} text-2xl mt-2`}>{item.name}</h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className={`${mono.className} mt-6 text-xs`} style={{ color: C.muted }}>
          Nombres y precios salen de su carta QR y de sus afiches — el resto de la carta vive en su QR.
        </p>
      </section>

      {/* ── Los platos ── */}
      <section style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: '#E8B9A8' }}>
              Fotos de su Facebook
            </p>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.chalk }}>
              La barra y la mesa
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: `${IMG}/sushi-maracuya.webp`, alt: 'Rollos de sushi de Andö bañados en salsa de maracuyá', big: true },
              { src: `${IMG}/sushi-macro.webp`, alt: 'Roll de sushi de Andö mojado en soya, en primer plano' },
              { src: `${IMG}/salon-mesas.webp`, alt: 'Mesas y sillas del salón de Andö en Av. España, Curicó' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 80}>
                <figure className={`relative rounded-2xl overflow-hidden ${p.big ? 'col-span-2 md:col-span-1' : ''}`}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={700}
                    height={700}
                    className="w-full h-full object-cover aspect-square"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Afiches reales ── */}
      <section id="afiches" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.red }}>
            Tal como los publican
          </p>
          <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.0]`}>
            Los afiches de la casa
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {AFICHES.map((a, i) => (
            <Reveal key={a.src} delay={i * 80}>
              <figure className="relative rounded-2xl overflow-hidden border-2" style={{ borderColor: C.night }}>
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={520}
                  height={520}
                  className="w-full h-auto object-cover"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-wider px-3 py-2`}
                  style={{ backgroundColor: 'rgba(22,18,16,0.85)', color: C.chalk }}
                >
                  {a.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className={`${mono.className} mt-4 text-xs`} style={{ color: C.muted }}>
          Promociones tal como aparecen en su Facebook — la vigencia la confirma la casa.
        </p>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" style={{ backgroundColor: C.night }}>
        <Brush color={C.night} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: '#E8B9A8' }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.chalk }}>
              Av. España 109,
              <br />
              Curicó
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: 'rgba(237,230,214,0.8)' }}>
              {BIZ.name} · nikkei + chifa
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              Fijo: <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              <br />
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">facebook.com/ando.nikkeichifa</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3 pr-14">
              <a
                href={CALL_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Reservar llamando
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.chalk, color: C.chalk }}
              >
                Cómo llegar
              </a>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: 'rgba(237,230,214,0.25)' }}>
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
      <footer style={{ backgroundColor: '#0E0B0A' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src={`${IMG}/logo-redondo.webp`} alt="" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <p className={`${display.className} text-xl md:text-2xl`} style={{ color: C.chalk }}>andö · nikkei + chifa</p>
          </div>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(237,230,214,0.6)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
      </footer>

      <div style={{ backgroundColor: '#0E0B0A', borderTop: '1px solid rgba(237,230,214,0.14)' }}>
        <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(237,230,214,0.68)' }}>
          Sitio de ejemplo preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.chalk }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name} ({BIZ.city}). Los datos y las fotos son reales:
          ficha de Google, su Facebook y su carta QR; el local figura en
          Av. España 109 — direcciones antiguas en directorios son la
          misma casa. No se generó ninguna imagen.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E8B9A8' }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </div>

      <WaFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} />
    </div>
  )
}
