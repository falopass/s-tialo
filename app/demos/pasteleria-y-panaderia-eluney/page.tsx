import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_TORTA,
  FACEBOOK_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  blue: '#2251FF',
  blueDeep: '#0A1A5C',
  ink: '#0B1030',
  lime: '#C6F24E',
  paper: '#FFFFFF',
  gray: '#F1F4F9',
  grayLine: '#E2E7F0',
  muted: '#57607A',
  line: 'rgba(11,16,48,0.12)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = {
  title: 'Eluney — Pastelería y panadería en Pelarco',
  description:
    'Pastelería y panadería en la K-45 de Pelarco. Pan amasado, kuchenes, mil hojas y tortas por encargo. Pide por WhatsApp y retira listo.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La historia', href: '#historia' },
  { label: 'La casa', href: '#negocio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Pedidos', href: '#contacto' },
]

const MARQUEE = [
  'Pan amasado',
  'Hallullas',
  'Mil hojas',
  'Kuchen del día',
  'Tortas por encargo',
  'Tartaletas',
  'Alfajores',
]

const PASOS = [
  {
    num: '01',
    src: `${IMG}/detalle2.webp`,
    alt: 'Tartaletas de fruta en preparación sobre el mesón de acero del obrador de Eluney',
    tag: 'la madrugada',
    name: 'El obrador prende antes que el sol',
    desc: 'Mientras Pelarco duerme, en la K-45 ya se está amasando: el pan del día, las hallullas y las tartaletas que salen en la mañana.',
  },
  {
    num: '02',
    src: `${IMG}/ambiente.webp`,
    alt: 'Torta de mil hojas con manjar recién salida, frente a las rejillas del horno',
    tag: 'del horno a la vitrina',
    name: 'Lo que ves es lo que hay: recién hecho',
    desc: 'Mil hojas con manjar, kuchenes y pasteles salen del horno directo a la vitrina. Nada de stock de ayer disfrazado de fresco.',
  },
  {
    num: '03',
    src: `${IMG}/detalle3.webp`,
    alt: 'Vitrina de Eluney con tortas, alfajores y cajas de pedidos listas para retiro',
    tag: 'tu pedido',
    name: 'Encargas por WhatsApp y retiras listo',
    desc: 'Torta de cumpleaños, dulces para la once o pan para tu local: escribes, confirmamos y tu pedido queda empaquetado con tu nombre.',
  },
]

const PRECIOS = [
  { name: 'Pan amasado (kilo)', price: 'desde $2.500' },
  { name: 'Hallullas (docena)', price: 'desde $2.000' },
  { name: 'Empanada de horno', price: '$1.800' },
  { name: 'Kuchen o pastel (porción)', price: 'desde $2.500' },
  { name: 'Torta de cumpleaños (15–20 pers.)', price: 'desde $18.000' },
  { name: 'Encargos para eventos y locales', price: 'a convenir' },
]

const HORAS = [
  { days: 'Lunes a sábado', time: '8:30 – 20:00' },
  { days: 'Domingo', time: '9:00 – 14:00' },
]

function Star({ className = 'w-3.5 h-3.5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill={color} aria-hidden="true">
      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
    </svg>
  )
}

function Bolt({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M13 2 L4.5 13.5 H10.5 L9 22 L19.5 9.5 H13.5 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.lime : C.blue }}
    >
      <Bolt className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

export default function EluneyPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.blueDeep, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.blueDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Vitrina de la pastelería Eluney llena de tartaletas de fruta, tortas y panes recién horneados"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,26,92,0.62) 0%, rgba(10,26,92,0.15) 45%, rgba(10,26,92,0.92) 100%)',
          }}
        />
        {/* sello Google */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${focusRing}`}
              style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: C.blueDeep }}
            >
              <Star className="w-[14px] h-[14px]" color={C.blue} />
              {BIZ.googleReviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pb-10 md:pb-14 pt-40">
          <Reveal>
            <Eyebrow light>Pastelería · Panadería · Pelarco</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2.4rem,9vw,5.4rem)] mb-6`}
              style={{ color: C.paper }}
            >
              Pan de todos los días,
              <br />
              tortas para <em className="not-italic" style={{ color: C.lime }}>los días que importan</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.88)' }}>
              En la K-45 de Pelarco amasamos de madrugada: pan, kuchenes,
              mil hojas y tortas por encargo. Escribes por WhatsApp y
              retiras listo, sin vueltas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.lime, color: C.blueDeep }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#historia"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: C.paper }}
              >
                Un día en Eluney ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta en movimiento ── */}
      <div className="py-3.5 px-5 border-b" style={{ backgroundColor: C.lime, borderColor: 'rgba(11,16,48,0.15)' }}>
        <ul className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-5 gap-y-2">
          {MARQUEE.map((item) => (
            <li
              key={item}
              className={`${display.className} flex items-center gap-2 text-sm md:text-base font-bold uppercase tracking-[0.14em]`}
              style={{ color: C.blueDeep }}
            >
              <Bolt className="w-3.5 h-3.5 shrink-0" color={C.blue} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Historia por pasos ── */}
      <section id="historia" className="relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
          <Reveal>
            <Eyebrow>Un día en Eluney</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-12 md:mb-16">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.04]`} style={{ color: C.ink }}>
                De la madrugada
                <br />
                <span style={{ color: C.blue }}>a tu mesa</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Así funciona la casa, paso a paso. Los productos y textos
                son de muestra: al publicar va el detalle real de Eluney.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* línea de tiempo */}
            <div
              className="absolute left-[27px] md:left-[43px] top-4 bottom-4 w-[2px]"
              style={{ background: `linear-gradient(180deg, ${C.blue} 0%, ${C.blue} 55%, ${C.lime} 100%)` }}
              aria-hidden="true"
            />
            {PASOS.map((p, i) => (
              <div key={p.num} className="relative pl-[76px] md:pl-[120px] pb-14 md:pb-20 last:pb-0">
                {/* nodo numerado */}
                <Reveal className="absolute left-0 top-0">
                  <div
                    className={`${display.className} w-[56px] h-[56px] md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center font-extrabold text-lg md:text-3xl border-4 shadow-lg`}
                    style={{
                      backgroundColor: C.lime,
                      color: C.blueDeep,
                      borderColor: C.paper,
                    }}
                  >
                    {p.num}
                  </div>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                  <Reveal className={i % 2 ? 'md:order-2' : ''}>
                    <figure
                      className="relative overflow-hidden aspect-[3/2] border"
                      style={{
                        borderColor: C.line,
                        borderRadius: '1.5rem',
                        boxShadow: '0 16px 40px rgba(11,16,48,0.12)',
                      }}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        loading="eager"
                        className="object-cover"
                      />
                      <span
                        className={`${display.className} absolute top-4 left-4 text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap`}
                        style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: C.blue }}
                      >
                        {p.tag}
                      </span>
                    </figure>
                  </Reveal>
                  <Reveal delay={120} className={i % 2 ? 'md:order-1' : ''}>
                    <span
                      className={`${display.className} block font-extrabold leading-none mb-3 select-none text-6xl md:text-7xl`}
                      style={{ color: 'rgba(34,81,255,0.14)' }}
                      aria-hidden="true"
                    >
                      {p.num}
                    </span>
                    <h3 className={`${display.className} font-bold text-2xl md:text-3xl leading-tight mb-3`} style={{ color: C.ink }}>
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="negocio" className="scroll-mt-20" style={{ backgroundColor: C.gray }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div
                  className="relative overflow-hidden border aspect-[3/2]"
                  style={{
                    borderRadius: '1.5rem',
                    borderColor: C.grayLine,
                    boxShadow: '0 18px 40px rgba(11,16,48,0.12)',
                  }}
                >
                  <Image
                    src={`${IMG}/detalle1.webp`}
                    alt="Fachada de la pastelería Eluney en una calle de Pelarco, con la vitrina a la vista"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`${display.className} absolute -bottom-5 left-5 px-5 py-3 rounded-full font-bold text-sm shadow-lg`}
                  style={{ backgroundColor: C.blue, color: '#fff' }}
                >
                  K-45 · Pelarco
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>La casa</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.04] mb-6`} style={{ color: C.ink }}>
                De Pelarco,
                <br />
                <span style={{ color: C.blue }}>para Pelarco</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
                Eluney atiende en la K-45, a la entrada de la comuna:
                llegas, miras la vitrina y hablas directo con quien
                amasa. Sin intermediarios ni pantallas de turno.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                La clientela crece por el boca a boca: ya suman{' '}
                <strong className="font-bold" style={{ color: C.ink }}>{BIZ.googleReviews} reseñas en Google</strong>,
                donde los vecinos destacan el trato directo y lo fresco
                de la vitrina.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                  style={{ backgroundColor: C.blue, color: '#fff' }}
                >
                  Facebook de Eluney →
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing}`}
                  style={{ borderColor: 'rgba(11,16,48,0.28)', color: C.ink }}
                >
                  Ver reseñas en Google
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.blueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Precios</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.04] mb-5`} style={{ color: C.paper }}>
                La lista
                <br />
                <span style={{ color: C.lime }}>de referencia</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Los valores de esta lista son <strong className="font-bold" style={{ color: C.paper }}>de muestra</strong>,
                para mostrar cómo se vería la carta. Al publicar van los
                precios reales de la pastelería.
              </p>
              <a
                href={WA_LINK_TORTA}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing}`}
                style={{ color: C.lime, textDecorationColor: 'rgba(198,242,78,0.4)' }}
              >
                Consultar precio exacto por WhatsApp →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="relative overflow-hidden border"
                style={{
                  borderColor: 'rgba(198,242,78,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '1.5rem',
                }}
              >
                <div
                  className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span className={`${display.className} text-xs uppercase tracking-[0.18em] font-bold`} style={{ color: C.paper }}>
                    Vitrina de Eluney
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(198,242,78,0.22)', color: C.lime }}
                  >
                    valores de muestra
                  </span>
                </div>
                <ul>
                  {PRECIOS.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-4 px-6 md:px-8 py-4 border-b last:border-b-0"
                      style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                    >
                      <span className="text-sm md:text-base font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        {p.name}
                      </span>
                      <span className="flex-1 border-b border-dotted mx-1 translate-y-[-4px]" style={{ borderColor: 'rgba(198,242,78,0.35)' }} aria-hidden="true" />
                      <span className={`${display.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.lime }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pedidos y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Pedidos</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.04] mb-6`} style={{ color: C.ink }}>
              Haz tu pedido
              <br />
              <span style={{ color: C.blue }}>y retira en la K-45</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-6">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <Bolt className="w-4 h-4 shrink-0" color={C.blue} />
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horarios de muestra: al publicar van los horarios reales
              de la pastelería.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.blue, color: '#fff' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing}`}
                style={{ borderColor: 'rgba(11,16,48,0.28)', color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden border min-h-[320px] h-full"
              style={{
                borderColor: C.grayLine,
                backgroundColor: C.gray,
                borderRadius: '1.5rem',
              }}
            >
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#1A3EC6' }}>
        <Image
          src={`${IMG}/detalle3.webp`}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover opacity-[0.16]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Bolt className="w-[34px] h-[34px] mx-auto mb-5" color={C.lime} />
            <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.04] mb-6`} style={{ color: '#fff' }}>
              La vitrina está llena.
              <br />
              <span style={{ color: C.lime }}>Tu pedido, listo hoy.</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Escríbenos por WhatsApp con lo que necesitas — una torta,
              pan para la semana o dulces para la once — y te confirmamos
              al tiro.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing}`}
              style={{ backgroundColor: C.lime, color: C.blueDeep }}
            >
              Escribir a Eluney
            </a>
            <p className="text-xs mt-5" style={{ color: 'rgba(255,255,255,0.92)' }}>
              {BIZ.phoneDisplay} · {BIZ.address}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.blueDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-20 md:pb-8">
          <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-3`}>
            <Bolt className="w-5 h-5 shrink-0" color={C.lime} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing}`} style={{ color: C.paper }}>
              Sitiazo
            </a>
            : textos, precios, horarios y fotos de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing}`} style={{ color: C.lime }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
