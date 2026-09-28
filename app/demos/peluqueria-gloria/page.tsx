import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' },
  ],
})

/**
 * Paleta sacada del logo real pintado en el muro del salón: silueta
 * negra, tijeras con mariposa roja, muro blanco. Base papel, tinta
 * casi negra y un solo acento rojo de la mariposa.
 */
const C = {
  papel: '#FBF7F1',
  card: '#FFFFFF',
  tinta: '#1B1917',
  rojo: '#C4302B',
  rojoSuave: '#E8A49C',
  muted: '#6A625B',
  line: 'rgba(27,25,23,0.18)',
  lineDark: 'rgba(251,247,241,0.2)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4302B]'

export const metadata: Metadata = demoMetadata({
  slug: 'peluqueria-gloria',
  title: 'Peluquería Gloria: salón en Cumpeo, Río Claro',
  description: 'Peluquería en Cumpeo, Río Claro: corte, color, mechas, brushing, barbería y peinados con atención directa de Gloria. Agenda tu hora por WhatsApp.',
  image: '/demos/peluqueria-gloria/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El salón', href: '#salon' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#contacto' },
]

// Servicios publicados por el negocio en su perfil de AgendaPro.
const CARTA = [
  {
    title: 'Corte y barba',
    items: [
      { name: 'Corte de cabello', price: '$12.000' },
      { name: 'Corte + barba', price: '$15.000' },
      { name: 'Servicio full: corte, barba y limpieza facial', price: '$25.000' },
      { name: 'Corte niño', price: 'consultar' },
      { name: 'Peinados para eventos', price: 'consultar' },
    ],
  },
  {
    title: 'Color y tratamiento',
    items: [
      { name: 'Tinte y mechas', price: 'consultar' },
      { name: 'Alisado de cabello', price: 'consultar' },
      { name: 'Tratamiento de keratina', price: 'consultar' },
      { name: 'Hidratación profunda', price: 'consultar' },
      { name: 'Permanentes', price: 'consultar' },
      { name: 'Extensiones de cabello', price: 'consultar' },
    ],
  },
  {
    title: 'Manos y rostro',
    items: [
      { name: 'Manicure y pedicure', price: 'consultar' },
      { name: 'Depilación facial', price: 'consultar' },
      { name: 'Maquillaje profesional', price: 'consultar' },
      { name: 'Masaje capilar', price: 'consultar' },
      { name: 'Tratamiento anti-frizz', price: 'consultar' },
    ],
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: '11:00 - 13:00 y 14:00 - 21:30' },
  { days: 'Domingo', time: 'Cerrado' },
]

// Reseñas reales de su ficha de Google, con autor.
const RESENAS = [
  {
    text: 'Excelente estilista. Muy recomendada.',
    author: 'Luis Arrau',
  },
  {
    text: 'La peluquera tiene muy buena mano.',
    author: 'Jth Rourke',
  },
  {
    text: 'Excelente servicio.',
    author: 'Beatriz Alvarado',
  },
]

function Scissors({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

function Rule({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: light ? C.lineDark : C.line }} />
      <Scissors className="w-[18px] h-[18px] -rotate-90" color={light ? C.rojoSuave : C.rojo} />
      <span className="h-px flex-1" style={{ backgroundColor: light ? C.lineDark : C.line }} />
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.rojoSuave : C.rojo }}
    >
      <Scissors className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

export default function PeluqueriaGloriaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <div style={{ backgroundColor: C.tinta }}>
        <BlitzNav
          name={BIZ.name}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          logoSrc={`${IMG}/logo.webp`}
          theme={{
            over: 'dark',
            bar: 'rgba(251,247,241,0.96)',
            ink: C.tinta,
            line: C.line,
            btnBg: C.rojo,
            btnInk: '#FFF7F4',
          }}
        />
      </div>

      {/* Hero a sangre: el interior real del salón */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Peluquería Gloria en Cumpeo: dos sillones frente a espejos de marco negro y repisa de productos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,17,15,0.6) 0%, rgba(20,17,15,0.45) 42%, rgba(20,17,15,0.9) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-20 md:pb-16 pt-40">
          <Reveal>
            <Eyebrow light>Peluquería en Cumpeo, Río Claro</Eyebrow>
            <h1
              className={`${display.className} leading-[1.05] tracking-[-0.005em] text-[clamp(2.6rem,9.5vw,5.4rem)] mb-6`}
              style={{ color: C.papel }}
            >
              El salón de Gloria,
              <br />
              <em className="leading-[1.1]" style={{ color: C.rojoSuave }}>en Cumpeo</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,247,241,0.88)' }}>
              Corte, color, barbería y peinados con atención directa,
              siempre de la misma persona. Agenda tu hora por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFF7F4' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(251,247,241,0.55)', color: C.papel }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="mt-10 border-t pt-5 flex flex-wrap items-center gap-x-7 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold"
              style={{ borderColor: 'rgba(251,247,241,0.25)', color: 'rgba(251,247,241,0.75)' }}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex items-center gap-2 hover:underline underline-offset-4 tap-44`}
              >
                <Stars value={4.5} color={C.rojoSuave} className="w-3 h-3" />
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} hover:underline underline-offset-4 tap-44`}
              >
                Facebook /peluqueriagloria
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* La carta: servicios reales publicados por el negocio */}
      <section id="servicios" className="scroll-mt-20 max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <header className="text-center max-w-2xl mx-auto">
            <Eyebrow>
              <span className="mx-auto">Servicios</span>
            </Eyebrow>
            <h2 className={`${display.className} text-[clamp(2.3rem,6.5vw,4rem)] leading-[1.05]`} style={{ color: C.tinta }}>
              La carta
              <br />
              <em className="leading-[1.1]" style={{ color: C.rojo }}>de Gloria</em>
            </h2>
            <Rule className="mt-7" />
            <p className="mt-6 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              Servicios que el negocio publica en AgendaPro. Los valores
              con precio son los publicados; el resto se confirma por
              WhatsApp.
            </p>
          </header>
        </Reveal>
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-x-10 gap-y-12">
          {CARTA.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div>
                <h3 className={`${display.className} italic text-2xl md:text-[1.7rem] leading-none mb-5`} style={{ color: C.rojo }}>
                  {g.title}
                </h3>
                <ul>
                  {g.items.map((item) => (
                    <li key={item.name} className="py-[9px] border-b" style={{ borderColor: C.line }}>
                      <p className="text-[15px] md:text-base font-medium leading-snug">{item.name}</p>
                      <p className={`${display.className} text-sm mt-0.5`} style={{ color: item.price === 'consultar' ? C.muted : C.tinta }}>
                        {item.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* El salón: fotos reales del local */}
      <section id="salon" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '1rem' }}>
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Estación de trabajo de Peluquería Gloria: espejo de marco negro, repisa de productos y sillón"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold" style={{ color: C.muted }}>
                  {BIZ.address} · {BIZ.city}, {BIZ.region}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.tinta }}>
                En Cumpeo,
                <br />
                <em className="leading-[1.1]" style={{ color: C.rojo }}>cara a cara</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: C.muted }}>
                Acá atiende siempre la misma persona: te conoce por tu
                nombre y sabe cómo te gusta el corte.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                {BIZ.name} acumula{' '}
                <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.reviews} reseñas</strong>{' '}
                en Google con <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.rating} de promedio</strong>,
                y coordina horas por su página de Facebook.
              </p>
              <ul className="space-y-3 mb-9">
                {[
                  'Atención directa, siempre con la misma persona',
                  'Agenda simple por WhatsApp, sin formularios',
                  'Precios publicados y claros antes de empezar',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.tinta }}>
                    <Scissors className="w-3.5 h-3.5 shrink-0" color={C.rojo} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold">
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.rojo, textDecorationColor: 'rgba(196,48,43,0.35)' }}
                >
                  Facebook →
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.rojo, textDecorationColor: 'rgba(196,48,43,0.35)' }}
                >
                  Ficha en Google Maps →
                </a>
              </div>
            </Reveal>
          </div>
          {/* El logo real pintado en el muro del salón */}
          <Reveal>
            <figure className="mt-12 md:mt-16 grid md:grid-cols-[1fr_auto] items-center gap-6 border-t pt-10" style={{ borderColor: C.line }}>
              <div className="max-w-md">
                <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-3" style={{ color: C.rojo }}>
                  El muro del salón
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  El logo de Gloria está pintado a mano en el muro:
                  la silueta, las tijeras y la mariposa roja que le da
                  nombre a la casa.
                </p>
              </div>
              <div className="w-48 md:w-64 overflow-hidden shadow-lg" style={{ borderRadius: '1rem' }}>
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Logo pintado en el muro de Peluquería Gloria: silueta de mujer, tijeras con mariposa roja y el nombre Gloria"
                  width={706}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Precios reales publicados */}
      <section id="precios" className="scroll-mt-20 max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div
            className="relative px-5 pt-[4.5rem] pb-10 md:px-14 md:py-14 border"
            style={{ borderColor: C.line, backgroundColor: C.card, borderRadius: '1.25rem' }}
          >
            <span
              className="absolute top-4 right-4 md:top-6 md:right-6 -rotate-6 text-[10px] uppercase tracking-[0.16em] font-bold px-3 py-1.5 border-2"
              style={{ borderColor: C.rojo, color: C.rojo, borderRadius: '0.4rem' }}
            >
              Precios publicados
            </span>
            <header className="text-center max-w-xl mx-auto">
              <Eyebrow>
                <span className="mx-auto">Precios</span>
              </Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.tinta }}>
                Lo que sí
                <br />
                <em className="leading-[1.1]" style={{ color: C.rojo }}>tiene precio</em>
              </h2>
              <Rule className="mt-7" />
            </header>
            <div className="mt-10 md:mt-12 max-w-lg mx-auto">
              <ul>
                {CARTA[0].items.slice(0, 3).map((item) => (
                  <li key={item.name} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3 py-4">
                    <span className="text-[15px] md:text-base font-medium">{item.name}</span>
                    <span
                      aria-hidden="true"
                      className="h-[0.6em] border-b-2 border-dotted"
                      style={{ borderColor: 'rgba(27,25,23,0.3)' }}
                    />
                    <span className={`${display.className} text-lg md:text-xl whitespace-nowrap`} style={{ color: C.rojo }}>
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Rule className="mt-10" />
            <div className="mt-8 text-center">
              <p className={`${display.className} italic text-xl md:text-2xl mb-5`} style={{ color: C.tinta }}>
                ¿Otro servicio de la carta?
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} inline-block text-sm md:text-base px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFF7F4' }}
              >
                Consultar valor por WhatsApp
              </a>
              <p className="mt-6 text-xs md:text-sm leading-relaxed max-w-md mx-auto" style={{ color: C.muted }}>
                Los tres valores son los que el negocio publica en
                AgendaPro. El resto de la carta se cotiza directo.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Reseñas reales */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-4 md:py-8 pb-16 md:pb-24">
        <Reveal>
          <header className="text-center max-w-2xl mx-auto mb-12">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.tinta }}>
              Lo que dicen
              <br />
              <em className="leading-[1.1]" style={{ color: C.rojo }}>en Google</em>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              Reseñas reales de la ficha de {BIZ.name} en Google Maps.
            </p>
          </header>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} delay={120 + i * 110}>
              <figure className="h-full border-t-2 pt-6" style={{ borderColor: C.rojo }}>
                <blockquote className={`${display.className} text-lg md:text-xl leading-relaxed mb-4`} style={{ color: C.tinta }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  {r.author} · Reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Agenda y cómo llegar */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow light>Agenda</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.papel }}>
              Te esperamos
              <br />
              <em className="leading-[1.1]" style={{ color: C.rojoSuave }}>en Cumpeo</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(251,247,241,0.78)' }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-4 tap-44`}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(251,247,241,0.78)' }}>
                  <Scissors className="w-3.5 h-3.5 shrink-0 mt-1" color={C.rojoSuave} />
                  <span>
                    <strong className="font-bold" style={{ color: C.papel }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFF7F4' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(251,247,241,0.5)', color: C.papel }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border p-1.5" style={{ borderColor: 'rgba(251,247,241,0.3)', borderRadius: '1rem' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px] md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Franja Sitiazo */}
      <section style={{ backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm md:text-[15px] leading-relaxed font-semibold" style={{ color: '#FFF7F4' }}>
            Sitio de ejemplo de{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-extrabold underline underline-offset-4 tap-44`}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} shrink-0 text-sm font-bold underline underline-offset-4 tap-44`}
            style={{ color: '#FFF7F4' }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#141110', color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className={`${display.className} italic text-2xl mb-1 flex items-center gap-3`}>
              <Scissors className="w-5 h-5" color={C.rojoSuave} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,247,241,0.8)' }}>
              {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
            </address>
          </div>
          <p className="text-xs leading-relaxed max-w-sm" style={{ color: 'rgba(251,247,241,0.78)' }}>
            Sitio de ejemplo de Sitiazo: fotos, datos, precios y reseñas
            citadas son los reales de sus fichas públicas.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
