import type { Metadata } from 'next'
import Image from 'next/image'
import { Instrument_Serif, Inter } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

/**
 * Paleta del demo: verde campo, tierra, crema de papel y hoja clara.
 * Layout de carta tipográfica: la página se lee como el menú impreso
 * de la peluquería — una hoja crema con filetes finos, servicios
 * numerados, precios alineados con puntos guía y una sola foto a
 * sangre en la portada.
 */
const C = {
  crema: '#FBF7EF',
  cremaCard: '#FFFDF8',
  verde: '#4C6B3C',
  verdeDeep: '#2F4226',
  hoja: '#DDE4C8',
  tierra: '#8C6239',
  tierraSoft: '#C9AE8C',
  ink: '#2B2A1F',
  muted: '#5E5A47',
  line: 'rgba(43,42,31,0.18)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6239]'

export const metadata: Metadata = {
  title: 'Peluquería Gloria — Peluquería en Cumpeo, Río Claro',
  description:
    'Peluquería en Cumpeo, Río Claro: corte, color, mechas, brushing y peinados con atención directa. Agenda tu hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La peluquería', href: '#peluqueria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Peluquera trabajando un corte a tijera en el salón de Peluquería Gloria',
    num: '01',
    name: 'Corte y estilo',
    desc: 'Corte a tijera y máquina para dama, varón y niños, terminado con brushing si lo quieres. Sales lista para la semana, sin apuro.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Aplicación de color y mechas con peine y papel en la peluquería',
    num: '02',
    name: 'Color y mechas',
    desc: 'Tinte completo, retoque de raíz, mechas y balayage, elegidos conversando frente al espejo según tu pelo y tu tono de piel.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Brushing con secador y cepillo redondo, terminando el peinado',
    num: '03',
    name: 'Brushing y tratamientos',
    desc: 'Brushing con forma, tratamientos de hidratación y alisados, con productos acordes a lo que tu pelo realmente necesita.',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Interior de la peluquería con su sillón de trabajo, espejo y luz de campo',
    num: '04',
    name: 'Peinados para ocasiones',
    desc: 'Recogidos y peinados para matrimonios, bautizos y fiestas. Con hora agendada y prueba previa si la ocasión lo pide.',
  },
]

const PRECIOS = [
  {
    title: 'Corte y estilo',
    items: [
      { name: 'Corte dama', price: 'desde $8.000' },
      { name: 'Corte varón', price: 'desde $6.000' },
      { name: 'Corte niños (hasta 12 años)', price: 'desde $5.000' },
      { name: 'Brushing', price: 'desde $7.000' },
      { name: 'Peinado de fiesta', price: 'desde $15.000' },
    ],
  },
  {
    title: 'Color y tratamientos',
    items: [
      { name: 'Tinte completo', price: 'desde $25.000' },
      { name: 'Retoque de raíz', price: 'desde $18.000' },
      { name: 'Mechas / balayage', price: 'desde $35.000' },
      { name: 'Alisado', price: 'desde $30.000' },
      { name: 'Tratamiento de hidratación', price: 'desde $15.000' },
    ],
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 – 19:30' },
  { days: 'Sábado', time: '9:30 – 18:00' },
  { days: 'Domingo', time: 'Con hora agendada' },
]

const RESENAS = [
  {
    text: 'Me hice mechas y quedaron justo como las pedí. Gloria te explica todo con calma antes de empezar.',
    author: 'Vecina de Cumpeo',
  },
  {
    text: 'Atención de confianza, como ir donde una amiga. Le corto el pelo a mis hijos acá hace años.',
    author: 'Clienta de Río Claro',
  },
  {
    text: 'Agendé por WhatsApp un sábado y me tomó al tiro. Corte prolijo y buena conversación.',
    author: 'Cliente del sector',
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
      <span className="h-px flex-1" style={{ backgroundColor: light ? 'rgba(251,247,239,0.4)' : C.line }} />
      <Scissors className="w-[18px] h-[18px] -rotate-90" color={light ? C.tierraSoft : C.tierra} />
      <span className="h-px flex-1" style={{ backgroundColor: light ? 'rgba(251,247,239,0.4)' : C.line }} />
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.tierraSoft : C.verde }}
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
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* el nav fijo es transparente arriba: este wrapper declara el fondo oscuro real detrás (hero) */}
      <div style={{ backgroundColor: C.verdeDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(251,247,239,0.94)',
            ink: C.ink,
            line: C.line,
            btnBg: C.verde,
            btnInk: C.crema,
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.verdeDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Peluquería Gloria en Cumpeo: sillón de trabajo, espejo y luz cálida de campo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(47,66,38,0.62) 0%, rgba(47,66,38,0.5) 42%, rgba(47,66,38,0.88) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-20 md:pb-16 pt-40">
          <Reveal>
            <Eyebrow light>Peluquería · Cumpeo · Río Claro</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9.5vw,5.6rem)] mb-6`}
              style={{ color: C.crema }}
            >
              Lo que se cuida,
              <br />
              <em className="italic" style={{ color: C.tierraSoft }}>crece</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,247,239,0.88)' }}>
              Peluquería de barrio en {BIZ.address}, comuna de {BIZ.city}:
              corte, color y peinados con atención directa de Gloria, sin
              esperas eternas ni protocolo de salón grande. Agenda tu hora
              por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 transition-transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95`}
                style={{ backgroundColor: C.hoja, color: C.verdeDeep }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(251,247,239,0.55)', color: C.crema }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="mt-10 border-t pt-5 flex flex-wrap items-center gap-x-7 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold"
              style={{ borderColor: 'rgba(251,247,239,0.25)', color: 'rgba(251,247,239,0.7)' }}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} hover:underline underline-offset-4`}
              >
                {BIZ.reviews} reseñas en Google
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} hover:underline underline-offset-4`}
              >
                Facebook /peluqueriagloria
              </a>
              <span style={{ color: C.tierraSoft }}>sitio de ejemplo</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta de servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <header className="text-center max-w-2xl mx-auto">
            <Eyebrow>
              <span className="mx-auto">Servicios</span>
            </Eyebrow>
            <h2 className={`${display.className} text-[clamp(2.3rem,6.5vw,4rem)] leading-[1.03]`} style={{ color: C.ink }}>
              La carta
              <br />
              <em className="italic" style={{ color: C.verde }}>de Gloria</em>
            </h2>
            <Rule className="mt-7" />
            <p className="mt-6 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              Esto es una muestra de los servicios: al publicar van los
              servicios y precios reales de la peluquería.
            </p>
          </header>
        </Reveal>
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <article className="flex gap-5 md:gap-6 items-start">
                <div className="shrink-0 border p-1" style={{ borderColor: C.verde, backgroundColor: C.cremaCard }}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={168}
                    height={168}
                    loading="eager"
                    className="w-[84px] h-[84px] md:w-[104px] md:h-[104px] object-cover"
                  />
                </div>
                <div>
                  <p className="flex items-baseline gap-3">
                    <span className={`${display.className} italic text-lg`} style={{ color: C.tierra }}>
                      {s.num}
                    </span>
                    <span className={`${display.className} text-2xl md:text-[1.65rem] leading-tight`} style={{ color: C.ink }}>
                      {s.name}
                    </span>
                  </p>
                  <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La peluquería ── */}
      <section id="peluqueria" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.hoja }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <figure>
              <div className="border p-1.5" style={{ borderColor: C.verde, backgroundColor: C.cremaCard }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="El salón de Peluquería Gloria en Cumpeo, con su sillón y mesa de trabajo"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] font-bold" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>La peluquería</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              En Cumpeo,
              <br />
              <em className="italic" style={{ color: C.verde }}>cara a cara</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: C.muted }}>
              En el campo la reputación corre por el boca a boca: acá
              atiende siempre la misma persona, te conoce por tu nombre y
              sabe cómo te gusta el corte. Llegas, te sientas y conversas
              con quien te peina.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Lo avalan los vecinos: {BIZ.name} acumula{' '}
              <strong className="font-bold" style={{ color: C.ink }}>{BIZ.reviews} reseñas</strong>{' '}
              en su ficha de Google y tiene su página de Facebook donde se
              coordinan las horas.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                'Atención directa, siempre con la misma persona',
                'Agenda simple por WhatsApp, sin formularios',
                'Precios claros antes de empezar',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                  <Scissors className="w-3.5 h-3.5 shrink-0" color={C.tierra} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold">
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} underline underline-offset-4 decoration-2`}
                style={{ color: C.verde, textDecorationColor: 'rgba(76,107,60,0.35)' }}
              >
                Facebook →
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} underline underline-offset-4 decoration-2`}
                style={{ color: C.verde, textDecorationColor: 'rgba(76,107,60,0.35)' }}
              >
                Ficha en Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Carta de precios ── */}
      <section id="precios" className="scroll-mt-20 max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div
            className="relative px-5 py-10 md:px-14 md:py-14 border"
            style={{ borderColor: C.line, backgroundColor: C.cremaCard }}
          >
            <span
              className="absolute top-4 right-4 md:top-6 md:right-6 -rotate-6 text-[10px] uppercase tracking-[0.16em] font-bold px-3 py-1.5 border-2"
              style={{ borderColor: C.tierra, color: C.tierra }}
            >
              Valores de muestra
            </span>
            <header className="text-center max-w-xl mx-auto">
              <Eyebrow>
                <span className="mx-auto">Precios de referencia</span>
              </Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
                La lista
                <br />
                <em className="italic" style={{ color: C.verde }}>de la casa</em>
              </h2>
              <Rule className="mt-7" />
            </header>
            <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-x-14 gap-y-10">
              {PRECIOS.map((g, i) => (
                <Reveal key={g.title} delay={i * 90}>
                  <div>
                    <h3 className={`${display.className} italic text-2xl md:text-[1.7rem] leading-none mb-4`} style={{ color: C.verde }}>
                      {g.title}
                    </h3>
                    <ul>
                      {g.items.map((item) => (
                        <li key={item.name} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3 py-[7px]">
                          <span className="text-[15px] md:text-base font-medium">{item.name}</span>
                          <span
                            aria-hidden="true"
                            className="h-[0.6em] border-b-2 border-dotted"
                            style={{ borderColor: 'rgba(43,42,31,0.3)' }}
                          />
                          <span className={`${display.className} text-base md:text-lg whitespace-nowrap`} style={{ color: C.tierra }}>
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Rule className="mt-12" />
            <div className="mt-8 text-center">
              <p className={`${display.className} italic text-xl md:text-2xl mb-5`} style={{ color: C.ink }}>
                ¿Te tinca algo de la lista?
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} inline-block text-sm md:text-base px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95`}
                style={{ backgroundColor: C.verde, color: C.crema }}
              >
                Consultar valor exacto por WhatsApp
              </a>
              <p className="mt-6 text-xs md:text-sm leading-relaxed max-w-md mx-auto" style={{ color: C.muted }}>
                Los valores son de muestra, para mostrar cómo se vería la
                carta. Al publicar van los precios reales de {BIZ.name}.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-4 md:py-8 pb-16 md:pb-24">
        <Reveal>
          <header className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>
              <span className="mx-auto">Reseñas</span>
            </Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Lo que dicen
              <br />
              <em className="italic" style={{ color: C.verde }}>las que vuelven</em>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name} acumula {BIZ.reviews} reseñas en su ficha de
              Google. Estos textos son de muestra: al publicar van las
              reseñas reales.
            </p>
          </header>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} delay={120 + i * 110}>
              <figure className="h-full border-t pt-6" style={{ borderColor: C.verde }}>
                <blockquote className={`${display.className} text-lg md:text-xl leading-relaxed mb-4`} style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  {r.author} · Reseña de ejemplo
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Agenda y cómo llegar ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow light>Agenda</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.crema }}>
              Te esperamos
              <br />
              <em className="italic" style={{ color: C.tierraSoft }}>en Cumpeo</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(251,247,239,0.75)' }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-4`}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-6">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(251,247,239,0.75)' }}>
                  <Scissors className="w-3.5 h-3.5 shrink-0" color={C.tierraSoft} />
                  <span>
                    <strong className="font-bold" style={{ color: C.crema }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(251,247,239,0.78)' }}>
              Horario referencial: al publicar van los horarios reales de
              la peluquería.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95`}
                style={{ backgroundColor: C.tierraSoft, color: C.verdeDeep }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(251,247,239,0.5)', color: C.crema }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border p-1.5" style={{ borderColor: C.tierraSoft }}>
              <iframe
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

      {/* ── Franja Sitiazo ── */}
      <section style={{ backgroundColor: C.hoja }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm md:text-[15px] leading-relaxed font-semibold" style={{ color: C.ink }}>
            Sitio de ejemplo de{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-extrabold underline underline-offset-4`}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} shrink-0 text-sm font-bold underline underline-offset-4`}
            style={{ color: C.verde }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.verdeDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className={`${display.className} italic text-2xl mb-1 flex items-center gap-3`}>
              <Scissors className="w-5 h-5" color={C.tierraSoft} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,247,239,0.8)' }}>
              {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
            </address>
          </div>
          <p className="text-xs leading-relaxed max-w-sm" style={{ color: 'rgba(251,247,239,0.78)' }}>
            Sitio de ejemplo: servicios, precios, horarios y reseñas citadas son de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
