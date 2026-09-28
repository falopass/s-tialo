import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_RESERVA, MAPS_URL, MAPS_EMBED, IMG, HORARIOS, MESA, SELLOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Noche de puerto: petróleo, latón envejecido y arena.
const C = {
  sand: '#F0EAE0',
  card: '#FBF7EE',
  ink: '#1B2320',
  petrol: '#16302E',
  deep: '#0F2422',
  brass: '#C9A05C',
  brassText: '#7A5A20',
  muted: '#5B665F',
  line: 'rgba(27,35,32,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'puntanorte-puerto',
  title: 'PuntaNorte Puerto — Mariscos y noches de karaoke frente al puerto',
  description:
    'Restaurant de mariscos en Av. Cristóbal Colón 918, Talcahuano: pastel de jaiba, mariscal, ceviche y noches de karaoke viernes y sábado. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'Karaoke', href: '#karaoke' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Reservar', href: '#reservar' },
]

/** Rosa náutica: el motivo que marca el norte de la página. */
function Rosa({ color, className = 'w-5 h-5' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="3" stroke={color} strokeWidth="1.6" />
      {[0, 90, 180, 270].map((r) => (
        <path key={r} d="M16 16 L16 3" stroke={color} strokeWidth="2.4" strokeLinecap="round" transform={`rotate(${r} 16 16)`} />
      ))}
      {[45, 135, 225, 315].map((r) => (
        <path key={r} d="M16 16 L16 8.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" transform={`rotate(${r} 16 16)`} />
      ))}
      <path d="M16 3 L17.6 6.4 L16 5.6 L14.4 6.4 Z" fill={color} />
    </svg>
  )
}

function Estrellas({ color }: { color: string }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((s) => (
        <svg key={s} viewBox="0 0 20 20" className="w-4 h-4" fill={color}>
          <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
        </svg>
      ))}
    </div>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Rosa color={light ? C.brass : C.brassText} className="w-4 h-4 shrink-0" />
      <p
        className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em]"
        style={{ color: light ? '#C9A05C' : C.brassText }}
      >
        {children}
      </p>
      <span className="h-px w-14 md:w-20 shrink-0" style={{ backgroundColor: light ? 'rgba(201,160,92,0.45)' : 'rgba(122,90,32,0.4)' }} />
    </div>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.sand, color: C.ink }}>
      <style>{`
        .pn-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .pn-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .pn-btn:active { transform: translateY(0) scale(0.97); }
        .pn-btn:focus-visible { outline: 3px solid ${C.brass}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_RESERVA}
        fontClass={`${display.className} tracking-[0.04em]`}
        theme={{
          over: 'dark',
          bar: 'rgba(240,234,224,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.petrol,
          btnInk: '#F0EAE0',
        }}
        ctaLabel="Reservar"
      />

      {/* ── Hero dividido: panel petróleo + ventanal al puerto ── */}
      <section id="inicio" className="lg:grid lg:grid-cols-2 lg:min-h-svh" style={{ backgroundColor: C.petrol }}>
        <div className="relative order-1 lg:order-2 h-[46vh] lg:h-auto lg:min-h-svh">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Ventanal de PuntaNorte Puerto con vista a los botes del puerto de Talcahuano"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 lg:hidden" style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(15,36,34,0.55) 100%)' }} />
        </div>
        <div className="relative order-2 lg:order-1 flex items-center">
          <Rosa color="rgba(201,160,92,0.16)" className="absolute -top-2 right-4 w-40 h-40 md:w-56 md:h-56 pointer-events-none" />
          <div className="relative px-5 md:px-12 py-12 md:py-20 max-w-xl">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-6">
                <Estrellas color={C.brass} />
                <span className="text-xs md:text-sm font-semibold" style={{ color: 'rgba(240,234,224,0.85)' }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
              <h1 className={`${display.className} text-[2.6rem] md:text-6xl leading-[1.05] tracking-[0.01em]`} style={{ color: '#F0EAE0' }}>
                Mariscos con vista al puerto
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(240,234,224,0.82)' }}>
                Sobre Av. Cristóbal Colón, el restaurante de mariscos de {BIZ.city} donde el pastel de jaiba
                comparte mesa con las noches de karaoke.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8">
                <a
                  href={WA_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} pn-btn text-sm md:text-base px-7 py-3 rounded-full text-center tracking-[0.05em] tap-44`}
                  style={{ backgroundColor: C.brass, color: C.deep }}
                >
                  Reservar mesa
                </a>
                <a
                  href="#mesa"
                  className={`${display.className} pn-btn text-sm md:text-base px-7 py-3 rounded-full border text-center tracking-[0.05em] tap-44`}
                  style={{ borderColor: 'rgba(240,234,224,0.45)', color: '#F0EAE0' }}
                >
                  Ver la mesa
                </a>
              </div>
              <p className="mt-6 text-xs md:text-sm font-medium" style={{ color: 'rgba(240,234,224,0.62)' }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Sellos de la casa ── */}
      <section aria-label="Lo que recomiendan las reseñas" className="border-b" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <ul className="max-w-6xl mx-auto px-5 md:px-8 py-5 md:py-6 flex flex-wrap items-center gap-x-3 gap-y-2.5">
          <li className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mr-2" style={{ color: C.brassText }}>
            Lo destacan en Google:
          </li>
          {SELLOS.map((s) => (
            <li
              key={s}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-3.5 py-1.5 rounded-full"
              style={{ backgroundColor: C.sand, border: `1px solid ${C.line}`, color: C.ink }}
            >
              <Rosa color={C.brassText} className="w-3.5 h-3.5" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* ── La mesa del puerto ── */}
      <section id="mesa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <Eyebrow>La mesa del puerto</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-tight max-w-2xl`}>
            Platos contundentes, mariscos del día
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-xl font-medium" style={{ color: C.muted }}>
            Lo que sale de la cocina, confirmado por las fotos y las reseñas del local.
          </p>
        </Reveal>
        <div className="mt-10 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
          {MESA.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article
                className="h-full rounded-3xl overflow-hidden"
                style={{ backgroundColor: C.card, boxShadow: '0 12px 32px rgba(15,36,34,0.12)' }}
              >
                <div className="relative aspect-[4/3]">
                  <Image src={m.img} alt={m.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-sm px-3 py-1 rounded-full`}
                    style={{ backgroundColor: 'rgba(15,36,34,0.82)', color: '#F0EAE0' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className={`${display.className} text-xl md:text-2xl mb-1.5`}>{m.name}</h3>
                  <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: C.muted }}>
                    {m.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Noches de karaoke ── */}
      <section id="karaoke" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]" style={{ boxShadow: '0 18px 48px rgba(0,0,0,0.35)' }}>
              <Image
                src={`${IMG}/interior.webp`}
                alt="Salón de PuntaNorte Puerto con nichos iluminados y mesas listas"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow light>De noche</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-tight`} style={{ color: '#F0EAE0' }}>
                Karaoke y copas hasta las 3 AM
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(240,234,224,0.8)' }}>
                Viernes y sábado el local estira la sobremesa: noches de karaoke —una de las cosas que más
                nombran las reseñas—, tragos, limonada y la barra encendida hasta las tres de la mañana.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Karaoke en vivo, mencionado una y otra vez en Google',
                  'Viernes y sábado abierto hasta las 3 AM',
                  'Barra con tragos, limonada y jugos naturales',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base font-medium" style={{ color: 'rgba(240,234,224,0.88)' }}>
                    <Rosa color={C.brass} className="w-4 h-4 shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={WA_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} pn-btn inline-block text-sm md:text-base px-7 py-3 rounded-full mt-8 tracking-[0.05em] tap-44`}
                style={{ backgroundColor: C.brass, color: C.deep }}
              >
                Reservar para el fin de semana
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <Eyebrow>Opiniones</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-tight`}>
            “La salvación de Talcahuano”
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {RESENAS.map((r, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure
                className="h-full rounded-3xl p-6 md:p-7 flex flex-col"
                style={{ backgroundColor: C.card, boxShadow: '0 10px 28px rgba(15,36,34,0.10)', borderTop: `3px solid ${C.brass}` }}
              >
                <Estrellas color={C.brassText} />
                <blockquote className="mt-4 text-sm md:text-base leading-relaxed font-medium flex-1">“{r.q}”</blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: C.brassText }}>
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
            className={`${display.className} inline-block mt-7 text-sm tracking-[0.04em] underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.brassText, textDecorationColor: 'rgba(122,90,32,0.35)' }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Reservar: horario + mapa ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.card, borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Reservar</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight`}>
              {BIZ.address}, frente al puerto
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-9 items-stretch">
            <Reveal>
              <ul
                className="rounded-3xl overflow-hidden mb-6"
                style={{ backgroundColor: C.sand, border: `1px solid ${C.line}` }}
              >
                {HORARIOS.map(([d, h], i) => (
                  <li
                    key={d}
                    className="flex items-baseline justify-between gap-4 px-5 md:px-6 py-3.5"
                    style={{ borderTop: i === 0 ? 'none' : `1px solid ${C.line}` }}
                  >
                    <span className="text-sm md:text-base font-semibold">{d}</span>
                    <span className={`${display.className} text-sm md:text-base`} style={{ color: C.brassText }}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
              <address className="not-italic text-sm md:text-base font-medium mb-7" style={{ color: C.muted }}>
                {BIZ.addressFull} ·{' '}
                <a href={`tel:${BIZ.whatsapp}`} className="underline underline-offset-2 tap-44" style={{ color: C.ink }}>
                  {BIZ.phoneDisplay}
                </a>
                <br />
                Confirma horario y mesa por WhatsApp.
              </address>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a
                  href={WA_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} pn-btn text-sm md:text-base px-7 py-3 rounded-full text-center tracking-[0.05em] tap-44`}
                  style={{ backgroundColor: C.petrol, color: '#F0EAE0' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} pn-btn text-sm md:text-base px-7 py-3 rounded-full border-2 text-center tracking-[0.05em] tap-44`}
                  style={{ borderColor: 'rgba(22,48,46,0.4)', color: C.petrol }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <div
                className="relative w-full overflow-hidden rounded-3xl h-[280px] md:h-[340px] lg:h-full lg:min-h-[320px]"
                style={{ border: `1px solid ${C.line}`, boxShadow: '0 12px 30px rgba(15,36,34,0.10)' }}
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F0EAE0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Rosa color={C.brass} className="w-5 h-5" />
            <p className={`${display.className} text-xl md:text-2xl tracking-[0.04em]`}>{BIZ.name}</p>
          </div>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(240,234,224,0.62)' }}>
            {BIZ.address} · {BIZ.city}, Región del Biobío
            <br />
            <a href={`tel:${BIZ.whatsapp}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Ficha en Google Maps
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(240,234,224,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(240,234,224,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F0EAE0' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos y reseñas de la ficha pública del restaurante en Google Maps.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.brass }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
