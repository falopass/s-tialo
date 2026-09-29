import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG, CARTA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// Identidad sacada de su carta y su logo: negro de pub, el fucsia de
// "LA TERRAZA RESTOBAR RAUCO" y el verde de su "MENU".
const C = {
  night: '#0D0A0E',
  night2: '#171017',
  magenta: '#E1256B',
  // Fucsia más oscuro para superficies con texto blanco encima (4.49:1 el puro);
  // y un fucsia más claro para texto pequeño sobre fondo oscuro.
  magentaDeep: '#C1165A',
  magentaSoft: '#F0428B',
  green: '#1DB584',
  white: '#F5EFF2',
  muted: 'rgba(245,239,242,0.68)',
  line: 'rgba(245,239,242,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'la-terraza-resto-bar-rauco',
  title: 'La Terraza — Pub, karaoke y restobar en Rauco',
  description:
    'Pub karaoke y restobar en Av. Diego Portales, km 9,3 antes de Rauco. Tres ambientes, música en vivo los fines de semana, tablas y ceviches. Reserva por WhatsApp.',
  image: '/demos/la-terraza-resto-bar-rauco/fiesta.webp',
})

const NAV_LINKS = [
  { label: 'Ambientes', href: '#ambientes' },
  { label: 'La carta', href: '#carta' },
  { label: 'Promos', href: '#promos' },
]

const AMBIENTES = [
  {
    src: 'salon',
    alt: 'Salón principal de La Terraza con luces de neón',
    title: 'El salón',
    desc: 'Mesas para comer tranquilo, con la carta completa al centro.',
  },
  {
    src: 'fiesta',
    alt: 'Pista de La Terraza durante una noche de música en vivo',
    title: 'La pista',
    desc: 'Viernes y sábados con música en vivo y karaoke, según sus propios clientes.',
  },
  {
    src: 'entrada',
    alt: 'Entrada de La Terraza Restobar en Av. Diego Portales',
    title: 'La entrada',
    desc: 'Sobre la carretera a Rauco, con amplio estacionamiento.',
  },
]

const RESENAS = [
  {
    quote:
      'Tres ambientes. Viernes y sábados con música en vivo. Amplio estacionamiento.',
    who: 'Karen Zúñiga · reseña de Google',
  },
  {
    quote:
      'Ambiente para toda la familia. Carta muy diversa. Estacionamiento disponible, terraza y zona de fumadores.',
    who: 'Carlos Loyola · reseña de Google',
  },
  {
    quote: 'Música en vivo, bailoteo, tragos ricos, buen precio y tablitas.',
    who: 'María Bravo · reseña de Google',
  },
]

const MARQUEE = ['Karaoke', 'Música en vivo', 'Tablas', 'Ceviches', 'Terraza', 'Eventos']

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-7 py-2.5 rounded-full font-bold text-[15px] tracking-wide transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44"
      style={{ backgroundColor: C.magentaDeep, color: '#fff' }}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

function Eyebrow({ children, color = C.magentaSoft }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${display.className} text-[12px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3`} style={{ color }}>
      <span className="block w-6 h-px" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function LaTerrazaRaucoPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.night, color: C.white }}>
      <style>{`
        @keyframes rauco-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .rauco-marquee { animation: rauco-marquee 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .rauco-marquee { animation: none; } }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(13,10,14,0.88)', ink: C.white, line: C.line, btnBg: C.magentaDeep, btnInk: '#fff' }}
      />

      {/* ── Hero: la noche, a toda pantalla ───────────── */}
      <section id="inicio" className="relative min-h-[94svh] flex items-center overflow-hidden">
        <Image
          src={`${IMG}/fiesta.webp`}
          alt="Noche de música en vivo en La Terraza Restobar de Rauco"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,10,14,0.55) 0%, rgba(13,10,14,0.72) 55%, #0D0A0E 100%)' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-20 w-full">
          <Reveal>
            <figure className="max-w-xs mb-8">
              <Image
                src={`${IMG}/logo.webp`}
                alt="Logo de La Terraza Restobar Rauco: pub, karaoke y restaurante"
                width={1200}
                height={532}
                className="w-full h-auto rounded-lg"
              />
            </figure>
            <h1 className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.6rem,9vw,5.2rem)]`}>
              La noche de Rauco<br />
              <span style={{ color: C.magenta }}>tiene terraza</span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(245,239,242,0.85)' }}>
              Pub, karaoke y restobar en el km 9,3 antes de Rauco: tres ambientes, tablas para compartir, ceviches y música en vivo los fines de semana.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <WaButton>Reservar mesa</WaButton>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 rounded-full font-bold text-[15px] tracking-wide border transition-colors tap-44"
                style={{ borderColor: 'rgba(245,239,242,0.5)', color: C.white }}
              >
                @{BIZ.instagram}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee de neón ───────────────────────────── */}
      <section aria-hidden="true" className="overflow-hidden border-y py-3" style={{ borderColor: C.line, backgroundColor: C.night2 }}>
        <div className="rauco-marquee flex w-max gap-8 whitespace-nowrap">
          {[0, 1].map((half) => (
            <div key={half} className="flex gap-8 items-center">
              {MARQUEE.map((w) => (
                <span key={w} className={`${display.className} font-bold uppercase text-sm tracking-[0.28em] flex items-center gap-8`} style={{ color: C.green }}>
                  {w}
                  <span style={{ color: C.magenta }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Tres ambientes ────────────────────────────── */}
      <section id="ambientes" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow>El local</Eyebrow>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-10">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98]`}>
              Tres ambientes,<br />un solo panorama
            </h2>
            <p className="text-sm max-w-xs md:text-right leading-relaxed" style={{ color: C.muted }}>
              Sus clientes lo resumen así en Google: {BIZ.googleRating}★ sobre {BIZ.googleReviews} reseñas.
            </p>
          </div>
          <ul className="grid md:grid-cols-3 gap-4 md:gap-6">
            {AMBIENTES.map((a, i) => (
              <li key={a.src}>
                <Reveal delay={i * 90}>
                  <figure className="group border rounded-xl overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.night2 }}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={`${IMG}/${a.src}.webp`} alt={a.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <figcaption className="p-4">
                      <p className={`${display.className} font-bold uppercase text-base`} style={{ color: C.magentaSoft }}>{a.title}</p>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{a.desc}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La carta: precios reales + foto de la carta ─ */}
      <section id="carta" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.night2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <figure className="md:sticky md:top-24">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/carta.webp`} alt="Carta completa de La Terraza Restobar Rauco con sus precios" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-xs" style={{ color: C.muted }}>
                Su carta publicada, tal cual.
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Eyebrow color={C.green}>La carta</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-8`}>
              ¿Comencemos?
            </h2>
            <ul>
              {CARTA.map((item, i) => (
                <li key={item.name}>
                  <Reveal delay={i * 40}>
                    <div className="flex items-baseline gap-3 py-3 border-b border-dashed" style={{ borderColor: C.line }}>
                      <div className="min-w-0">
                        <p className="font-semibold text-[15px] leading-snug">{item.name}</p>
                        {item.note && <p className="text-xs mt-0.5" style={{ color: C.muted }}>{item.note}</p>}
                      </div>
                      <span className="flex-1 border-b border-dotted mx-1 translate-y-[-4px]" style={{ borderColor: 'rgba(245,239,242,0.3)' }} aria-hidden="true" />
                      <span className={`${display.className} font-bold text-[15px] shrink-0`} style={{ color: C.green }}>{item.price}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed" style={{ color: C.muted }}>
              Precios de su carta publicada; el local puede actualizarlos sin aviso. La carta completa y las promos del día se confirman por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* ── Promos ────────────────────────────────────── */}
      <section id="promos" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow>Promos de la casa</Eyebrow>
          <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] mb-10`}>
            Lo que anda dando vueltas
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl">
            <Reveal>
              <figure>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <Image src={`${IMG}/promo-handrolls.webp`} alt="Flyer de la promo de handrolls de La Terraza" fill sizes="(min-width:768px) 30vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs" style={{ color: C.muted }}>Promo publicada por el local.</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <figure>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <Image src={`${IMG}/promo-cerveza.webp`} alt="Flyer de la promo de cervezas de La Terraza" fill sizes="(min-width:768px) 30vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs" style={{ color: C.muted }}>Promo publicada por el local.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ───────────────────────────────────── */}
      <section aria-label="Reseñas" className="border-y" style={{ borderColor: C.line, backgroundColor: C.magentaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            <Reveal className="shrink-0" >
              <p className={`${display.className} font-extrabold text-6xl md:text-7xl leading-none text-white`}>{BIZ.googleRating}</p>
              <Stars value={BIZ.googleRating} color="#fff" className="w-4 h-4 mt-2" />
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {BIZ.googleReviews} reseñas en Google
              </p>
            </Reveal>
            <ul className="grid md:grid-cols-3 gap-5 flex-1">
              {RESENAS.map((r, i) => (
                <li key={r.who}>
                  <Reveal delay={i * 90}>
                    <blockquote className="border-l-2 pl-4 h-full" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
                      <p className="text-sm leading-relaxed text-white">“{r.quote}”</p>
                      <cite className="not-italic block mt-3 text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: 'rgba(255,255,255,0.75)' }}>
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

      {/* ── Cómo llegar ───────────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`}>
              Antes de entrar a Rauco
            </h2>
            <address className="not-italic text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              <strong className="text-white">{BIZ.address}</strong>
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              Sobre la carretera, en el km 9,3, con amplio estacionamiento. En el mismo lugar funcionan las canchas de pádel de GetPadel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WaButton>Consultar por WhatsApp</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 rounded-full font-bold text-[15px] tracking-wide border transition-colors tap-44"
                style={{ borderColor: 'rgba(245,239,242,0.4)', color: C.white }}
              >
                Abrir ruta en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-xl border min-h-[300px] h-full" style={{ borderColor: C.line, backgroundColor: C.night2 }}>
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
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.night2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} font-extrabold uppercase text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: C.muted }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44 text-white">
              Sitiazo
            </a>{' '}
            para {BIZ.nameFull}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44 text-white">
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
