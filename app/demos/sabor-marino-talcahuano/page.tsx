import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_RESERVA, MAPS_URL, MAPS_EMBED, IMG, CARTA, PORQUE, RESENAS, HORARIOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

// Marisquería de puerto: azul profundo de mar, espuma, coral de boya.
const C = {
  foam: '#F7F3E8',
  card: '#FFFDF4',
  mist: '#E7EFEA',
  ink: '#0B2433',
  navy: '#0E2F42',
  deep: '#08202E',
  coral: '#E4572E',
  coralDeep: '#B23A18',
  coralInk: '#A93A18',
  aqua: '#5FA8A0',
  muted: '#47616D',
  line: 'rgba(11,36,51,0.13)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'sabor-marino-talcahuano',
  title: 'Sabor Marino — Marisquería del puerto, Manuel Rodríguez 479',
  description:
    'Marisquería y restaurante en Talcahuano: paila marina, pescado frito a lo pobre, ceviche de reineta y congrio frito. Salón, retiro y delivery. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'La carta', href: '#carta' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Llegar', href: '#llegar' },
]

/** Ola: el motivo gráfico que recorre la página. */
function Ola({ color, flip = false, className = 'w-full h-6' }: { color: string; flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      className={`${className} ${flip ? 'rotate-180' : ''}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 6 Q7.5 0 15 6 T30 6 T45 6 T60 6 T75 6 T90 6 T105 6 T120 6"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Pez: bullet de la carta y sello de la casa. */
function Pez({ color, className = 'w-4 h-4' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" focusable="false">
      <path d="M2.5 12c3.2-4.4 7-6.4 10.6-6.4 4.7 0 8.4 3.4 8.4 6.4s-3.7 6.4-8.4 6.4c-3.6 0-7.4-2-10.6-6.4Z" fill={color} />
      <path d="M21.5 12l3-3.2v6.4l-3-3.2Z" fill={color} transform="translate(-3 0)" />
      <circle cx="16.6" cy="10.8" r="1.1" fill={C.foam} />
    </svg>
  )
}

/** Boya redonda con dato de la casa. */
function Boya({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center rounded-full w-[104px] h-[104px] md:w-[120px] md:h-[120px] shrink-0"
      style={{ backgroundColor: C.card, border: `2px dashed ${C.coral}`, boxShadow: '0 8px 22px rgba(8,32,46,0.12)' }}
    >
      <span className={`${display.className} font-extrabold text-xl md:text-2xl leading-none`} style={{ color: C.navy }}>
        {top}
      </span>
      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.08em] mt-1 px-2" style={{ color: C.muted }}>
        {bottom}
      </span>
    </div>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Pez color={light ? '#F2B49B' : C.coral} className="w-4 h-4 shrink-0" />
      <p
        className="text-[11px] md:text-xs font-bold uppercase tracking-[0.22em]"
        style={{ color: light ? '#9CC5BB' : C.coralInk }}
      >
        {children}
      </p>
      <Ola color={light ? 'rgba(156,197,187,0.5)' : 'rgba(228,87,46,0.4)'} className="h-3 w-16 md:w-24 shrink-0" />
    </div>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.foam, color: C.ink }}>
      <style>{`
        .sm-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .sm-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .sm-btn:active { transform: translateY(0) scale(0.97); }
        .sm-btn:focus-visible { outline: 3px solid ${C.coral}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.listing}
        links={NAV_LINKS}
        waLink={WA_RESERVA}
        fontClass={`${display.className} font-extrabold`}
        theme={{
          over: 'dark',
          bar: 'rgba(247,243,232,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.coralDeep,
          btnInk: '#FFFDF4',
        }}
        ctaLabel="Reservar"
      />

      {/* ── Hero: mariscal fresco ── */}
      <section className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Plato de mariscal frío con mariscos, limón y cilantro en Sabor Marino"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,32,46,0.30) 0%, rgba(8,32,46,0.05) 40%, rgba(8,32,46,0.88) 100%)' }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-40 w-full">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ backgroundColor: 'rgba(247,243,232,0.14)', border: '1px solid rgba(247,243,232,0.35)', backdropFilter: 'blur(4px)' }}
            >
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="#F2B49B" aria-hidden="true">
                <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
              </svg>
              <span className="text-xs md:text-sm font-bold" style={{ color: C.foam }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] text-[2.5rem] md:text-7xl max-w-3xl`}
              style={{ color: C.foam, textShadow: '0 2px 24px rgba(8,32,46,0.5)' }}
            >
              Del puerto a tu mesa, como en la caleta
            </h1>
            <p className="mt-4 text-base md:text-lg font-medium max-w-xl" style={{ color: 'rgba(247,243,232,0.92)' }}>
              Paila marina en greda, pescado frito a lo pobre y ceviche de reineta en la marisquería de barrio de {BIZ.city}.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href={WA_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} sm-btn font-extrabold text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.coralDeep, color: '#FFFDF4' }}
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                className={`${display.className} sm-btn font-extrabold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(247,243,232,0.6)', color: C.foam }}
              >
                Ver la carta
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
              {['Salón', 'Para llevar', 'Delivery'].map((s) => (
                <span key={s} className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold" style={{ color: 'rgba(247,243,232,0.85)' }}>
                  <Pez color="#9CC5BB" className="w-3.5 h-3.5" />
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Ola color={C.foam} flip className="relative w-full h-7 md:h-9 shrink-0" />
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative" style={{ boxShadow: '0 18px 44px rgba(8,32,46,0.18)' }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada azul de Restaurante Sabor Marino en Manuel Rodríguez 479"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 md:-right-6">
                <Boya top="4,4" bottom="en Google" />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>La casa</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight`}>
                La picada de mariscos de Manuel Rodríguez
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 text-base md:text-lg leading-relaxed font-medium" style={{ color: C.muted }}>
                {BIZ.listing} es restaurante de barrio en el corazón pesquero de {BIZ.city}: carta de pescados y
                mariscos, porciones generosas y precios que se entienden. La ficha de Google junta{' '}
                <strong style={{ color: C.ink }}>{BIZ.reviews} reseñas</strong> y un{' '}
                <strong style={{ color: C.ink }}>{BIZ.rating} de promedio</strong>.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-5 mt-8">
                <Boya top={BIZ.reviews} bottom="reseñas en Google" />
                <Boya top="6" bottom="días por semana" />
                <Boya top="$10–30K" bottom="por persona" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.mist }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>La carta</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight max-w-2xl`}>
              Pescados, mariscos y el ponche de picoroco
            </h2>
            <p className="mt-4 text-sm md:text-base font-medium" style={{ color: C.muted }}>
              Carta real de la ficha del restaurante. Los precios se confirman al reservar por WhatsApp.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {CARTA.map((g, gi) => (
              <Reveal key={g.cat} delay={gi * 90}>
                <div
                  className="h-full rounded-3xl overflow-hidden"
                  style={{ backgroundColor: C.card, boxShadow: '0 10px 28px rgba(8,32,46,0.10)' }}
                >
                  <div className="px-5 md:px-6 pt-5 pb-4" style={{ backgroundColor: gi === 0 ? C.coralDeep : C.navy }}>
                    <p className={`${display.className} font-extrabold text-lg`} style={{ color: '#FFFDF4' }}>
                      {g.cat}
                    </p>
                  </div>
                  <ul>
                    {g.items.map((it, i) => (
                      <li
                        key={it.name}
                        className="px-5 md:px-6 py-3.5"
                        style={{ borderTop: i === 0 ? 'none' : `1px dashed ${C.line}` }}
                      >
                        <div className="flex items-start gap-3">
                          <Pez color={C.aqua} className="w-3.5 h-3.5 shrink-0 mt-1" />
                          <div>
                            <p className="text-sm md:text-[15px] font-bold leading-snug">{it.name}</p>
                            <p className="text-xs md:text-sm mt-0.5 font-medium" style={{ color: C.muted }}>
                              {it.desc}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10">
            <Reveal>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] relative" style={{ boxShadow: '0 12px 30px rgba(8,32,46,0.14)' }}>
                <Image src={`${IMG}/paila.webp`} alt="Paila marina humeante servida en plato de greda" fill sizes="(min-width: 768px) 50vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] relative" style={{ boxShadow: '0 12px 30px rgba(8,32,46,0.14)' }}>
                <Image src={`${IMG}/alopobre.webp`} alt="Pescado frito a lo pobre con huevos fritos y papas" fill sizes="(min-width: 768px) 50vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} sm-btn inline-block font-extrabold text-sm md:text-base px-7 py-3 rounded-full mt-8 tap-44`}
              style={{ backgroundColor: C.navy, color: '#FFFDF4' }}
            >
              Consultar la carta de hoy
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>Por qué elegirnos</Eyebrow>
          <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight max-w-2xl`}>
            Cocina de mar sin vueltas
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {PORQUE.map((p, i) => (
            <Reveal key={p.t} delay={i * 90}>
              <div
                className="h-full rounded-3xl p-6 md:p-7"
                style={{ backgroundColor: C.card, boxShadow: '0 10px 28px rgba(8,32,46,0.09)', borderTop: `4px solid ${i === 1 ? C.aqua : C.coral}` }}
              >
                <Pez color={i === 1 ? C.aqua : C.coral} className="w-7 h-7 mb-4" />
                <h3 className={`${display.className} font-extrabold text-xl mb-2`}>{p.t}</h3>
                <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: C.muted }}>
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Foto horizontal: el salón ── */}
      <section aria-label="El salón del restaurante">
        <Reveal>
          <div className="relative h-[44vh] md:h-[60vh] overflow-hidden">
            <Image src={`${IMG}/interior.webp`} alt="Salón interior de Sabor Marino con mesas listas para el almuerzo" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 flex items-end" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(8,32,46,0.72) 100%)' }}>
              <p className={`${display.className} font-extrabold text-2xl md:text-4xl px-5 md:px-10 pb-7 max-w-3xl`} style={{ color: C.foam }}>
                “Buen restaurante de barrio.” — reseña en Google
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>Opiniones</Eyebrow>
          <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight`}>
            Lo que dice la mesa de al lado
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {RESENAS.map((r, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure
                className="h-full rounded-3xl p-6 md:p-7 flex flex-col"
                style={{ backgroundColor: C.card, boxShadow: '0 10px 28px rgba(8,32,46,0.09)' }}
              >
                <div className="flex gap-1 mb-4" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} viewBox="0 0 20 20" className="w-4 h-4" fill={C.coral}>
                      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm md:text-base leading-relaxed font-medium flex-1">“{r.q}”</blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.08em]" style={{ color: C.coralInk }}>
                  {r.a}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} inline-block mt-7 text-sm font-extrabold underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.coralInk, textDecorationColor: 'rgba(169,58,24,0.35)' }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Llegar: horario + mapa ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow light>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-tight`} style={{ color: C.foam }}>
              {BIZ.address}, {BIZ.city}
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-9 items-stretch">
            <Reveal>
              <ul
                className="rounded-3xl overflow-hidden mb-6"
                style={{ backgroundColor: 'rgba(247,243,232,0.06)', border: '1px solid rgba(247,243,232,0.16)' }}
              >
                {HORARIOS.map(([d, h], i) => (
                  <li
                    key={d}
                    className="flex items-baseline justify-between gap-4 px-5 md:px-6 py-4"
                    style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(247,243,232,0.12)' }}
                  >
                    <span className="text-sm md:text-base font-bold" style={{ color: 'rgba(247,243,232,0.92)' }}>{d}</span>
                    <span className={`${display.className} font-extrabold`} style={{ color: h === 'Cerrado' ? '#F2B49B' : '#9CC5BB' }}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs md:text-sm font-medium mb-2" style={{ color: 'rgba(247,243,232,0.7)' }}>
                {BIZ.priceRange} · Salón, retiro en local y delivery.
              </p>
              <address className="not-italic text-sm md:text-base font-medium mb-7" style={{ color: 'rgba(247,243,232,0.85)' }}>
                {BIZ.addressFull} ·{' '}
                <a href={`tel:${BIZ.whatsapp}`} className="underline underline-offset-2 tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a
                  href={WA_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} sm-btn font-extrabold text-sm md:text-base px-7 py-3 rounded-full text-center tap-44`}
                  style={{ backgroundColor: C.coralDeep, color: '#FFFDF4' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} sm-btn font-extrabold text-sm md:text-base px-7 py-3 rounded-full border-2 text-center tap-44`}
                  style={{ borderColor: 'rgba(247,243,232,0.5)', color: C.foam }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <div
                className="relative w-full overflow-hidden rounded-3xl h-[280px] md:h-[340px] lg:h-full lg:min-h-[320px]"
                style={{ border: '1px solid rgba(247,243,232,0.2)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.listing}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <Ola color="rgba(156,197,187,0.5)" className="w-full h-6 md:h-8" />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.foam }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Pez color={C.coral} className="w-5 h-5" />
            <p className={`${display.className} font-extrabold text-xl md:text-2xl`}>{BIZ.listing}</p>
          </div>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,243,232,0.65)' }}>
            {BIZ.address} · {BIZ.city}, Región del Biobío
            <br />
            <a href={`tel:${BIZ.whatsapp}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Ficha en Google Maps
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,243,232,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(247,243,232,0.72)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.foam }}>
              Sitiazo
            </a>{' '}
            para {BIZ.listing}. Fotos, carta y reseñas de la ficha pública del restaurante en Google Maps.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F2B49B' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.listing}`} />
    </div>
  )
}
