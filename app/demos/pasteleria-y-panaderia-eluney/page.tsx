import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_TORTA,
  FACEBOOK_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/**
 * Paleta sacada de las fotos reales: letrero de madera tallada,
 * banderines rojo/azul/blanco y tortas con crema. Base crema de papel,
 * tinta café del letrero y un solo acento guinda (las rosas de
 * merengue de sus tortas).
 */
const C = {
  papel: '#F7F0E2',
  papelCard: '#FDF9F0',
  tinta: '#2B2119',
  madera: '#5C4029',
  guinda: '#A8384C',
  guindaClaro: '#F0BEC5',
  muted: '#6D5C4A',
  line: 'rgba(43,33,25,0.16)',
  lineDark: 'rgba(247,240,226,0.18)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'pasteleria-y-panaderia-eluney',
  title: 'Eluney: pastelería y panadería en Pelarco',
  description: 'Pastelería y panadería en la K-45 de Pelarco. Pan amasado, kuchenes, mil hojas y tortas por encargo. Pide por WhatsApp y retira listo.',
  image: '/demos/pasteleria-y-panaderia-eluney/hero.webp',
})

const NAV_LINKS = [
  { label: 'La casa', href: '#negocio' },
  { label: 'La vitrina', href: '#vitrina' },
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
  'Berlines',
]

const PASOS = [
  {
    num: '01',
    src: `${IMG}/detalle2.webp`,
    alt: 'Caja de berlines y rollos de canela espolvoreados con azúcar flor, hechos en Eluney',
    tag: 'La madrugada',
    name: 'El obrador prende antes que el sol',
    desc: 'Mientras Pelarco duerme, en la K-45 ya se está amasando: el pan del día, las hallullas y los berlines que salen en la mañana.',
  },
  {
    num: '02',
    src: `${IMG}/vitrina.webp`,
    alt: 'Vitrina refrigerada de Eluney con copas de postre y tortas del día',
    tag: 'Del horno a la vitrina',
    name: 'Lo que ves es lo que hay: recién hecho',
    desc: 'Mil hojas con manjar, kuchenes y postres en copa salen del horno directo a la vitrina. Nada de stock de ayer disfrazado de fresco.',
  },
  {
    num: '03',
    src: `${IMG}/torta.webp`,
    alt: 'Torta de chocolate con borde goteado, de las que Eluney hace por encargo',
    tag: 'Tu pedido',
    name: 'Encargas por WhatsApp y retiras listo',
    desc: 'Torta de cumpleaños, dulces para la once o pan para tu local: escribes, confirmamos y tu pedido queda empaquetado con tu nombre.',
  },
]

const PRECIOS = [
  { name: 'Pan amasado (kilo)', price: 'desde $2.500' },
  { name: 'Hallullas (docena)', price: 'desde $2.000' },
  { name: 'Empanada de horno', price: '$1.800' },
  { name: 'Kuchen o pastel (porción)', price: 'desde $2.500' },
  { name: 'Torta de cumpleaños (15-20 pers.)', price: 'desde $18.000' },
  { name: 'Encargos para eventos y locales', price: 'a convenir' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '8:30 - 19:00' },
  { days: 'Sábado', time: '8:30 - 14:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function Star({ className = 'w-3.5 h-3.5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill={color} aria-hidden="true">
      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${body.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: light ? C.guindaClaro : C.guinda }}
    >
      <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function EluneyPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.tinta, color: C.tinta }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/cartel.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(247,240,226,0.96)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.guinda,
          btnInk: '#FFFFFF',
        }}
      />

      {/* Hero a sangre: la tartaleta de frutas de su vitrina real */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Tartaletas de frutilla, frambuesa y mango recién hechas en la vitrina de Eluney"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(30,20,14,0.55) 0%, rgba(30,20,14,0.12) 45%, rgba(30,20,14,0.9) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${focusRing} tap-44`}
              style={{ backgroundColor: 'rgba(253,249,240,0.96)', color: C.tinta }}
            >
              <Star className="w-[14px] h-[14px]" color={C.guinda} />
              {BIZ.googleRating} en Google · {BIZ.googleReviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pb-10 md:pb-14 pt-40">
          <Reveal>
            <Eyebrow light>Pastelería y panadería en Pelarco</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[1.05] tracking-[-0.01em] text-[clamp(2.4rem,9vw,5rem)] mb-6`}
              style={{ color: C.papel }}
            >
              Pan de todos los días,
              <br />
              tortas para <em className="leading-[1.1]" style={{ color: C.guindaClaro }}>los días que importan</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(253,249,240,0.9)' }}>
              En la K-45 de Pelarco amasamos de madrugada: pan, kuchenes,
              mil hojas y tortas por encargo. Escribes por WhatsApp y
              retiras listo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.guinda, color: '#FFF8F0' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(253,249,240,0.55)', color: C.papel }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cinta de productos */}
      <div className="py-3.5 px-5" style={{ backgroundColor: C.guinda }}>
        <ul className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-5 gap-y-2">
          {MARQUEE.map((item) => (
            <li
              key={item}
              className={`${display.className} text-sm md:text-base font-bold uppercase tracking-[0.14em]`}
              style={{ color: '#FFF3EE' }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Un día en Eluney: línea de tiempo con fotos reales */}
      <section id="vitrina" className="relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
          <Reveal>
            <Eyebrow>Un día en Eluney</Eyebrow>
            <div className="mb-12 md:mb-16 max-w-2xl">
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06] mb-4`} style={{ color: C.tinta }}>
                De la madrugada
                <br />
                <em className="leading-[1.1]" style={{ color: C.guinda }}>a tu mesa</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Así funciona la casa, paso a paso. Las fotos son las
                reales de su ficha de Google.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div
              className="absolute left-[27px] md:left-[43px] top-4 bottom-4 w-[2px]"
              style={{ background: `linear-gradient(180deg, ${C.guinda} 0%, ${C.madera} 100%)` }}
              aria-hidden="true"
            />
            {PASOS.map((p, i) => (
              <div key={p.num} className="relative pl-[76px] md:pl-[120px] pb-14 md:pb-20 last:pb-0">
                <Reveal className="absolute left-0 top-0">
                  <div
                    className={`${display.className} w-[56px] h-[56px] md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center font-bold text-lg md:text-3xl border-4 shadow-lg`}
                    style={{
                      backgroundColor: C.tinta,
                      color: C.papel,
                      borderColor: C.papel,
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
                        borderRadius: '1.25rem',
                        boxShadow: '0 16px 40px rgba(43,33,25,0.16)',
                      }}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.guinda }}>
                      {p.tag}
                    </p>
                  </Reveal>
                  <Reveal delay={120} className={i % 2 ? 'md:order-1' : ''}>
                    <h3 className={`${display.className} font-bold text-2xl md:text-3xl leading-tight mb-3`} style={{ color: C.tinta }}>
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

      {/* La casa: fachada real + letrero tallado */}
      <section id="negocio" className="scroll-mt-20" style={{ backgroundColor: C.papelCard }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div
                  className="relative overflow-hidden border aspect-[3/4] max-w-md"
                  style={{
                    borderRadius: '1.25rem',
                    borderColor: C.line,
                    boxShadow: '0 18px 40px rgba(43,33,25,0.16)',
                  }}
                >
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Frontis de Eluney en la K-45 de Pelarco, con banderines rojos y azules en la entrada"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -right-2 md:right-8 w-40 md:w-52 overflow-hidden border-4 shadow-xl rotate-2"
                  style={{ borderColor: C.papelCard, borderRadius: '0.9rem' }}
                >
                  <Image
                    src={`${IMG}/cartel.webp`}
                    alt="Letrero de madera tallada con el nombre Pastelería y Panadería Eluney"
                    width={1160}
                    height={580}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.tinta }}>
                De Pelarco,
                <br />
                <em className="leading-[1.1]" style={{ color: C.guinda }}>para Pelarco</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
                Eluney atiende en la K-45, a la entrada de la comuna:
                llegas, miras la vitrina y hablas directo con quien
                amasa. Sin intermediarios ni pantallas de turno.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                La clientela crece por el boca a boca: ya suman{' '}
                <strong className="font-bold" style={{ color: C.tinta }}>
                  {BIZ.googleReviews} reseñas en Google
                </strong>{' '}
                con <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.googleRating} de promedio</strong>,
                donde los vecinos destacan el trato directo y lo fresco
                de la vitrina.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.guinda, color: '#FFF8F0' }}
                >
                  Facebook de Eluney →
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(43,33,25,0.3)', color: C.tinta }}
                >
                  Ver reseñas en Google
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Carta de referencia sobre café oscuro */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Precios</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06] mb-5`} style={{ color: C.papel }}>
                La lista
                <br />
                <em className="leading-[1.1]" style={{ color: C.guindaClaro }}>de referencia</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(247,240,226,0.78)' }}>
                Los valores de esta lista son{' '}
                <strong className="font-bold" style={{ color: C.papel }}>de muestra</strong>,
                para mostrar cómo se vería la carta. Al publicar van los
                precios reales de la pastelería.
              </p>
              <a
                href={WA_LINK_TORTA}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: C.guindaClaro, textDecorationColor: 'rgba(240,190,197,0.4)' }}
              >
                Consultar precio exacto por WhatsApp →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="relative overflow-hidden border"
                style={{
                  borderColor: 'rgba(240,190,197,0.3)',
                  backgroundColor: 'rgba(247,240,226,0.05)',
                  borderRadius: '1.25rem',
                }}
              >
                <div
                  className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
                  style={{ backgroundColor: 'rgba(247,240,226,0.07)' }}
                >
                  <span className={`${display.className} text-xs uppercase tracking-[0.18em] font-bold`} style={{ color: C.papel }}>
                    Vitrina de Eluney
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(168,56,76,0.35)', color: C.guindaClaro }}
                  >
                    valores de muestra
                  </span>
                </div>
                <ul>
                  {PRECIOS.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-4 px-6 md:px-8 py-4 border-b last:border-b-0"
                      style={{ borderColor: C.lineDark }}
                    >
                      <span className="text-sm md:text-base font-medium" style={{ color: 'rgba(253,249,240,0.92)' }}>
                        {p.name}
                      </span>
                      <span className="flex-1 border-b border-dotted mx-1 translate-y-[-4px]" style={{ borderColor: 'rgba(240,190,197,0.35)' }} aria-hidden="true" />
                      <span className={`${display.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.guindaClaro }}>
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

      {/* Pedidos y ubicación */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.tinta }}>
              Haz tu pedido
              <br />
              <em className="leading-[1.1]" style={{ color: C.guinda }}>y retira en la K-45</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-baseline gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <span className="inline-block w-4 h-[2px] translate-y-[-3px] shrink-0" style={{ backgroundColor: C.guinda }} aria-hidden="true" />
                  <span>
                    <strong className="font-bold" style={{ color: C.tinta }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.guinda, color: '#FFF8F0' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(43,33,25,0.3)', color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden border min-h-[320px] h-full"
              style={{
                borderColor: C.line,
                backgroundColor: C.papelCard,
                borderRadius: '1.25rem',
              }}
            >
              <LazyMap
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

      {/* CTA final con torta real de fondo */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.madera }}>
        <Image
          src={`${IMG}/detalle3.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Stars value={4.8} color={C.guindaClaro} className="w-4 h-4" />
            <h2 className={`${display.className} font-bold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.06] mt-5 mb-6`} style={{ color: '#FDF9F0' }}>
              La vitrina está llena.
              <br />
              <em className="leading-[1.1]" style={{ color: C.guindaClaro }}>Tu pedido, listo hoy.</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(253,249,240,0.92)' }}>
              Escríbenos por WhatsApp con lo que necesitas: una torta,
              pan para la semana o dulces para la once. Te confirmamos
              al tiro.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.guinda, color: '#FFF8F0' }}
            >
              Escribir a Eluney
            </a>
            <p className="text-xs mt-5" style={{ color: 'rgba(253,249,240,0.92)' }}>
              {BIZ.phoneDisplay} · {BIZ.address}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1E1610', color: C.papel }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-20 md:pb-8">
          <p className={`${display.className} font-bold text-xl mb-1`}>
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: 'rgba(247,240,226,0.78)' }}>
            {BIZ.address} · {BIZ.region}
          </address>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,240,226,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.papel }}>
              Sitiazo
            </a>
            : fotos y datos reales de su ficha de Google; textos y precios de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.guindaClaro }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
