import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, GONDOLA, RESENAS } from './content'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-body',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

/**
 * Dirección de arte: «el toldo del almacén». El letrero celeste PF de la
 * fachada se convierte en franjas de toldo que coronan cada sección; el
 * naranja del precio de góndola es el único acento. Las fotos se asientan
 * sobre una línea de repisa, como mercadería. Barlow Condensed grita como
 * rótulo de corredor; Karla lee como la letra chica del ticket.
 */
const C = {
  papel: '#FBF7EC',
  papelDeep: '#F1E8D4',
  ink: '#17303C',
  muted: '#4A5A62',
  celeste: '#2D8BC0',
  celesteDeep: '#1A5E85',
  naranja: '#E8721A',
  naranjaTxt: '#B4530B',
  arenaCl: '#FAD7B8',
  line: 'rgba(23,48,60,0.16)',
  cremaInk: '#FBF7EC',
}

const NAV_LINKS = [
  { label: 'La góndola', href: '#gondola' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

function Toldo({ color = C.celeste }: { color?: string }) {
  return (
    <div
      aria-hidden="true"
      className="h-3 md:h-4 w-full"
      style={{
        background: `repeating-linear-gradient(90deg, ${color} 0 26px, #FBF7EC 26px 52px)`,
      }}
    />
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-[4px] rotate-[-1.5deg] shadow-sm"
      style={{ background: C.naranjaTxt, color: '#FFF7ED' }}
    >
      {children}
    </span>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'unicasa',
  title: `${BIZ.name} · Minimarket y librería en San Clemente`,
  description:
    'Minimarket Librería Unicasa en San Clemente: abarrotes, carnes y verduras frescas, librería y fotocopias, con delivery. 4.7 estrellas en Google. Llama al 71 243 5240.',
  image: `${IMG}/fachada.webp`,
})

export default function Page() {
  return (
    <main
      className={`${body.variable} ${display.variable} min-h-screen`}
      style={{ background: C.papel, color: C.ink, fontFamily: 'var(--font-body), sans-serif', ...SPACING }}
    >
      <BlitzNav
        name={
          <span style={{ fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.02em' }}>
            UNICASA
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: 'rgba(251,247,236,0.94)', ink: C.ink, line: C.line, btnBg: C.celesteDeep, btnInk: '#fff' }}
      />

      {/* ── Hero: el almacén bajo el toldo ────────────────────── */}
      <header id="inicio" className="pt-[60px] md:pt-[68px]">
        <Toldo />
        <div className="px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-center">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                <Tag>Minimarket</Tag>
                <Tag>Librería</Tag>
                <Tag>Delivery</Tag>
              </div>
              <h1
                className="mt-4 text-[42px] md:text-[68px] leading-[0.98] font-bold uppercase tracking-[0.01em]"
                style={{ fontFamily: 'var(--font-display), sans-serif' }}
              >
                El almacén de barrio que tiene de todo
              </h1>
              <p className="mt-4 text-[15px] md:text-lg leading-relaxed max-w-[44ch]" style={{ color: C.muted }}>
                {BIZ.long} abastece a {BIZ.city}: abarrotes, frescos, librería y fotocopias,
                y si no puedes ir, te lo llevan a la casa.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2 h-[48px] px-6 rounded-[6px] text-[15px] font-bold"
                  style={{ background: C.celesteDeep, color: '#fff' }}
                >
                  Pedir al {BIZ.phoneDisplay}
                </a>
                <span className="inline-flex items-center gap-2 text-[13px]" style={{ color: C.muted }}>
                  <Stars value={BIZ.rating} color={C.naranja} className="w-4 h-4" />
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <figure className="rounded-[8px] overflow-hidden border-4 shadow-[0_20px_44px_-18px_rgba(23,48,60,0.5)]" style={{ borderColor: C.celeste }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt={`Fachada de ${BIZ.long} con letrero celeste en ${BIZ.city}`}
                  width={1200}
                  height={897}
                  className="w-full h-auto"
                  priority
                />
              </figure>
              <p className="mt-2 text-[11px] md:text-xs text-right" style={{ color: C.muted }}>
                El local con su letrero celeste. Foto real de su ficha en Google.
              </p>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ── La góndola: repisas alternadas ────────────────────── */}
      <section id="gondola" className="pt-10 md:pt-14">
        <div className="px-5 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2
                className="text-[32px] md:text-[52px] leading-[1] font-bold uppercase"
                style={{ fontFamily: 'var(--font-display), sans-serif' }}
              >
                De todo un poco, como debe ser
              </h2>
            </Reveal>
            <div className="mt-8 space-y-8 md:space-y-10">
              {GONDOLA.map((g, i) => (
                <Reveal key={g.t} delay={i * 60}>
                  <div
                    className={`grid md:grid-cols-12 gap-4 md:gap-8 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                  >
                    <figure className="md:col-span-7 rounded-[6px] overflow-hidden border" style={{ borderColor: C.line, direction: 'ltr' }}>
                      <Image src={g.foto} alt={g.alt} width={800} height={900} className="w-full max-h-[300px] md:max-h-[340px] object-cover" />
                    </figure>
                    <div className="md:col-span-5 border-b-2 pb-4" style={{ borderColor: C.celeste, direction: 'ltr' }}>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: C.naranjaTxt }}>
                        Repisa {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 text-[24px] md:text-[30px] font-bold uppercase leading-[1.02]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        {g.t}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                        {g.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery ──────────────────────────────────────────── */}
      <section id="delivery" className="mt-12 md:mt-16" style={{ background: C.celesteDeep }}>
        <Toldo color={C.naranja} />
        <div className="px-5 md:px-8 py-10 md:py-14">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <Reveal className="flex-1">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: C.arenaCl }}>
                Llega a tu casa
              </p>
              <h2
                className="mt-2 text-[30px] md:text-[46px] leading-[1] font-bold uppercase"
                style={{ fontFamily: 'var(--font-display), sans-serif', color: C.cremaInk }}
              >
                Delivery en San Clemente
              </h2>
              <p className="mt-3 text-[14px] md:text-base max-w-[48ch]" style={{ color: 'rgba(251,247,236,0.9)' }}>
                La ficha de Google confirma que ofrecen delivery. Llama, pide lo que necesitas
                y te lo acercan.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={CALL_LINK}
                className="inline-flex items-center gap-2 h-[48px] px-7 rounded-[6px] text-[15px] font-bold"
                style={{ background: C.naranjaTxt, color: '#FFF7ED' }}
              >
                Pedir por teléfono
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Por dentro: repisa de fotos ───────────────────────── */}
      <section className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-[28px] md:text-[40px] font-bold uppercase leading-[1]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
              Así se ve por dentro
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-7 grid grid-cols-3 gap-3 md:gap-5 border-b-4 pb-5 md:pb-6" style={{ borderColor: C.celeste }}>
              <figure className="rounded-[5px] overflow-hidden">
                <Image src={`${IMG}/pasillo.webp`} alt="Pasillo del Minimarket Unicasa con canasta de compras" width={506} height={900} className="w-full h-[160px] md:h-[280px] object-cover" />
              </figure>
              <figure className="rounded-[5px] overflow-hidden">
                <Image src={`${IMG}/gondolas.webp`} alt="Repisa de productos en Minimarket Unicasa" width={506} height={900} className="w-full h-[160px] md:h-[280px] object-cover" />
              </figure>
              <figure className="rounded-[5px] overflow-hidden">
                <Image src={`${IMG}/meson.webp`} alt="Mesón y refrigeradores de Minimarket Unicasa" width={506} height={900} className="w-full h-[160px] md:h-[280px] object-cover" />
              </figure>
            </div>
            <p className="mt-2 text-[11px] md:text-xs" style={{ color: C.muted }}>
              Fotos reales de su ficha en Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: comentarios de la casa ───────────────────── */}
      <section id="resenas" className="px-5 md:px-8 py-10 md:py-14" style={{ background: C.papelDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[28px] md:text-[40px] font-bold uppercase leading-[1]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                Lo que dice la gente
              </h2>
              <span className="inline-flex items-center gap-2 text-[13px]" style={{ color: C.muted }}>
                <Stars value={BIZ.rating} color={C.naranja} className="w-4 h-4" />
                {String(BIZ.rating).replace('.', ',')} de 5 · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <div className="mt-7 grid md:grid-cols-3 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <figure
                  className="h-full rounded-[6px] border px-5 py-5 flex flex-col"
                  style={{ background: '#FFFDF6', borderColor: C.line }}
                >
                  <Stars value={r.estrellas} color={C.naranja} className="w-3.5 h-3.5" />
                  <blockquote className="mt-3 text-[14px] leading-relaxed flex-1">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="mt-3 text-[12px] font-bold uppercase tracking-[0.1em]" style={{ color: C.celesteDeep }}>
                    {r.nombre} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ─────────────────────────────────────────── */}
      <section id="ubicacion" className="px-5 md:px-8 py-12 md:py-16" style={{ background: C.celesteDeep }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: C.arenaCl }}>
              Ubicación
            </p>
            <h2 className="mt-2 text-[30px] md:text-[44px] leading-[1] font-bold uppercase" style={{ fontFamily: 'var(--font-display), sans-serif', color: C.cremaInk }}>
              {BIZ.city}, Maule
            </h2>
            <dl className="mt-6 space-y-3 text-[14px] md:text-base" style={{ color: 'rgba(251,247,236,0.9)' }}>
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: 'rgba(251,247,236,0.2)' }}>
                <dt>Comuna</dt>
                <dd className="text-right font-bold" style={{ color: C.cremaInk }}>{BIZ.city}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: 'rgba(251,247,236,0.2)' }}>
                <dt>Horario</dt>
                <dd className="text-right font-bold" style={{ color: C.cremaInk }}>{BIZ.hours}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: 'rgba(251,247,236,0.2)' }}>
                <dt>Teléfono</dt>
                <dd className="text-right font-bold" style={{ color: C.cremaInk }}>{BIZ.phoneDisplay}</dd>
              </div>
            </dl>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 h-[44px] px-5 rounded-[6px] text-[14px] font-bold border-2"
              style={{ borderColor: 'rgba(251,247,236,0.45)', color: C.cremaInk }}
            >
              Cómo llegar en Google Maps
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[8px] overflow-hidden border-4" style={{ borderColor: 'rgba(251,247,236,0.3)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                className="w-full h-[280px] md:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ────────────────────────────────────────────── */}
      <section className="px-5 md:px-8 py-12 md:py-16 text-center">
        <Reveal>
          <h2 className="text-[30px] md:text-[48px] leading-[1] font-bold uppercase" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
            ¿Te falta algo? Ellos lo tienen
          </h2>
          <a
            href={CALL_LINK}
            className="mt-6 inline-flex items-center gap-2 h-[48px] px-7 rounded-[6px] text-[15px] font-bold"
            style={{ background: C.celesteDeep, color: '#fff' }}
          >
            Llamar al {BIZ.phoneDisplay}
          </a>
        </Reveal>
      </section>

      <Toldo />
      <footer className="px-5 md:px-8 py-5 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] md:text-xs" style={{ color: C.muted }}>
          <span>{BIZ.long}</span>
          <span>{BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}</span>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.celeste} />
    </main>
  )
}
