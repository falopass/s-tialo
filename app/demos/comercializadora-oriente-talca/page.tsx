import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  LOCAL_CENTRO,
  CALL_LINK,
  CALL_LINK_CENTRO,
  MAPS_URL,
  MAPS_EMBED,
  HOURS,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  paper: '#f6f1e6',
  paperDeep: '#ede5d3',
  ink: '#1c1c20',
  navy: '#1f3aae',
  navyDeep: '#121f5e',
  tag: '#ffd43b',
  tagDeep: '#8a6a00',
  red: '#d2342c',
  muted: '#5c5647',
  line: 'rgba(28,28,32,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'comercializadora-oriente-talca',
  title: 'Comercializadora Oriente Talca — mayorista de ofertas en 8 Sur',
  description: 'El galpón mayorista de 8 Sur 2068 en Talca: juguetes, electrónica, artículos del hogar y deporte a precio de importador. Abierto todos los días 10–19. 4,6★ en Google.',
  image: '/demos/comercializadora-oriente-talca/hero.webp',
})

const NAV_LINKS = [
  { label: 'Los pasillos', href: '#pasillos' },
  { label: 'Los locales', href: '#locales' },
  { label: 'Opiniones', href: '#opiniones' },
]

/** Categorías del letrero de la fachada (foto real). */
const PASILLOS = [
  {
    num: '01',
    name: 'Juguetes',
    src: `${IMG}/estantes.webp`,
    alt: 'Pasillo de juguetes y peluches en Comercializadora Oriente Talca',
    desc: 'Peluches, mochilas, útiles y el pasillo que los niños recorren primero.',
    bg: '#d2342c',
  },
  {
    num: '02',
    name: 'Electrónica',
    src: `${IMG}/gente.webp`,
    alt: 'Clientes comprando productos electrónicos en Comercializadora Oriente Talca',
    desc: 'Lo que entra al galpón cada semana: siempre hay algo nuevo que ver.',
    bg: '#1f3aae',
  },
  {
    num: '03',
    name: 'Artículos del hogar',
    src: `${IMG}/pasillo.webp`,
    alt: 'Pasillo de artículos del hogar en Comercializadora Oriente Talca',
    desc: 'Del galpón a la casa: el pasillo más largo y el más surtido.',
    bg: '#0f7a4d',
  },
  {
    num: '04',
    name: 'Deporte',
    src: `${IMG}/galpon.webp`,
    alt: 'Trampolines e inflables en el galpón de Comercializadora Oriente Talca',
    desc: 'Trampolines, inflables y todo lo que se arma en el patio.',
    bg: '#8a6a00',
  },
] as const

const TESTIMONIALS = [
  {
    text: 'Excelente comercializadora, muy buenas ofertas... están constantemente renovando sus productos.',
    author: 'Cristian Aravena',
    detail: 'hace un año',
  },
  {
    text: 'Buenas ofertas. Precios accesibles y gran variedad de productos.',
    author: 'Mauro Garrido',
    detail: 'hace un mes',
  },
  {
    text: 'Cada vez que vamos siempre tienen muy buenos precios y la atención excelente, lo recomiendo cien por ciento.',
    author: 'Luis Alberto Rojas',
    detail: 'hace 8 meses',
  },
  {
    text: 'Es muy buen local, todos atienden súper bien, cambian siempre sus productos. Es súper barato.',
    author: 'Victor Eduardo',
    detail: 'hace 9 meses',
  },
]

function TicketIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a3 3 0 0 0 0 6v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a3 3 0 0 0 0-6z" />
      <path d="M13 6v2m0 3v2m0 3v2" strokeDasharray="1.5 3.5" />
    </svg>
  )
}

function PhoneIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Eyebrow({ children, color = C.tagDeep }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color }}
    >
      <span className="inline-block w-[12px] h-[3px]" style={{ backgroundColor: C.red }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ComercializadoraOrientePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(246,241,230,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#ffffff',
        }}
      />

      {/* ── Cartel de oferta: tipografía gigante sobre crema ── */}
      <section id="inicio" className="pt-[72px] md:pt-[80px]" style={{ backgroundColor: C.paper }}>
        {/* tira de datos tipo cinta adhesiva de bodega */}
        <div className={`${mono.className} border-y-2 py-2.5 text-center text-[11px] md:text-xs uppercase tracking-[0.22em] font-semibold`} style={{ borderColor: C.ink, backgroundColor: C.tag, color: C.ink }}>
          Mayorista ★ {BIZ.address} ★ {HOURS} ★ importadores directos
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-8 md:pb-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-end">
          <Reveal>
            <Eyebrow>Comercializadora · {BIZ.city}</Eyebrow>
            <h1
              className={`${display.className} uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(3rem,11vw,6.2rem)] mb-6`}
              style={{ color: C.ink }}
            >
              El galpón de
              <br />
              las ofertas
              <br />
              <span style={{ color: C.navy }}>de Talca</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Mayorista en {BIZ.address}: juguetes, electrónica, artículos
              del hogar y deporte, directo del importador al pasillo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} uppercase tracking-[0.03em] text-sm md:text-base px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.red, color: '#ffffff' }}
              >
                Llamar al local
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.03em] text-sm md:text-base px-7 py-3.5 border-2 transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            {/* tarjeta de precio gigante: logo + rating */}
            <div className="border-2 p-6 md:p-7 rotate-1 shadow-[6px_6px_0_0_rgba(28,28,32,1)]" style={{ backgroundColor: '#ffffff', borderColor: C.ink }}>
              <div className="flex items-center justify-center py-4 border-b-2 border-dashed mb-5" style={{ borderColor: C.line }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} className="w-40 md:w-48 h-auto" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className={`${display.className} uppercase text-2xl leading-none`} style={{ color: C.navy }}>
                    {BIZ.rating}
                  </p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas en Google
                  </p>
                </div>
                <Stars value={4.6} color={C.tagDeep} className="w-[15px] h-[15px]" />
              </div>
            </div>
          </Reveal>
        </div>
        {/* góndola de fotos: tira horizontal del local real */}
        <div className="border-t-2" style={{ borderColor: C.ink }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { src: `${IMG}/hero.webp`, alt: `Fachada de ${BIZ.name} en Ocho Sur 2068, Talca` },
              { src: `${IMG}/gente.webp`, alt: 'Clientes recorriendo el galpón de Comercializadora Oriente' },
              { src: `${IMG}/mochilas.webp`, alt: 'Muro de mochilas y útiles en Comercializadora Oriente Talca' },
              { src: `${IMG}/entrada.webp`, alt: 'Entrada y letrero de categorías de Comercializadora Oriente Talca' },
            ].map((p, i) => (
              <div key={p.src} className={`relative aspect-[4/3] border-ink ${i > 0 ? 'border-l-2' : ''} ${i > 1 ? 'border-t-2 md:border-t-0' : ''}`} style={{ borderColor: C.ink }}>
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Los pasillos: letreros colgantes como los de la fachada ── */}
      <section id="pasillos" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow color={C.navy}>Los pasillos</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-16">
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
                Cuatro letreros,
                <br />
                <span style={{ color: C.navy }}>un solo galpón</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Las categorías son las del letrero de su fachada en 8 Sur.
                Lo que cambia es el surtido: las reseñas dicen que se
                renueva constantemente.
              </p>
            </div>
          </Reveal>
          {/* viga de la que cuelgan los letreros */}
          <div className="h-3 md:h-4 -mx-5 md:-mx-8 border-y-2" style={{ backgroundColor: C.navyDeep, borderColor: C.ink }} aria-hidden="true" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PASILLOS.map((p, i) => (
              <li key={p.num} className="relative pt-8 md:pt-10">
                {/* tirantes del letrero */}
                <div className="absolute top-0 inset-x-8 flex justify-between" aria-hidden="true">
                  <span className="w-[3px] h-8 md:h-10" style={{ backgroundColor: C.ink }} />
                  <span className="w-[3px] h-8 md:h-10" style={{ backgroundColor: C.ink }} />
                </div>
                <Reveal delay={i * 60} className="h-full">
                  <article className="border-2 h-full flex flex-col shadow-[5px_5px_0_0_rgba(28,28,32,1)]" style={{ borderColor: C.ink, backgroundColor: '#ffffff' }}>
                    <div className={`${mono.className} flex items-center justify-between px-4 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-semibold border-b-2`} style={{ backgroundColor: p.bg, borderColor: C.ink, color: '#ffffff' }}>
                      <span>Pasillo {p.num}</span>
                      <TicketIcon className="w-3.5 h-3.5" color="#ffffff" />
                    </div>
                    <div className="relative aspect-[4/3] border-b-2" style={{ borderColor: C.ink }}>
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-4 md:p-5 flex-1">
                      <h3 className={`${display.className} uppercase text-xl md:text-2xl leading-none mb-2`} style={{ color: C.ink }}>
                        {p.name}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Los locales: dos puntos de venta en Talca ── */}
      <section id="locales" className="scroll-mt-20" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow color={C.tag}>Dos locales en Talca</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.98] mb-10 md:mb-14`} style={{ color: C.paper }}>
              8 Sur y el Centro,
              <br />
              <span style={{ color: C.tag }}>todos los días</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-14">
            {[
              { name: 'Galpón 8 Sur', addr: BIZ.address, tel: BIZ.phoneDisplay, href: CALL_LINK, tag: 'el de las fotos' },
              { name: 'Local Centro', addr: LOCAL_CENTRO.address, tel: LOCAL_CENTRO.phoneDisplay, href: CALL_LINK_CENTRO, tag: 'en plena 2 Sur' },
            ].map((l, i) => (
              <Reveal key={l.name} delay={i * 80}>
                <article className="border-2 p-6 md:p-7 h-full" style={{ backgroundColor: 'rgba(246,241,230,0.06)', borderColor: 'rgba(246,241,230,0.35)' }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-3`} style={{ color: C.tag }}>
                    {l.tag}
                  </p>
                  <h3 className={`${display.className} uppercase text-2xl md:text-3xl mb-2`} style={{ color: C.paper }}>
                    {l.name}
                  </h3>
                  <address className="not-italic text-sm leading-relaxed mb-1.5" style={{ color: 'rgba(246,241,230,0.9)' }}>
                    {l.addr}, {BIZ.city}
                  </address>
                  <p className={`${mono.className} text-xs mb-6`} style={{ color: 'rgba(246,241,230,0.75)' }}>
                    {HOURS}
                  </p>
                  <a
                    href={l.href}
                    className={`${display.className} uppercase tracking-[0.03em] inline-flex items-center gap-2 text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                    style={{ backgroundColor: C.tag, color: C.ink }}
                  >
                    <PhoneIcon className="w-4 h-4" color={C.ink} />
                    {l.tel}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <div className="border-2 overflow-hidden min-h-[320px]" style={{ borderColor: 'rgba(246,241,230,0.35)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px] md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones: etiquetas de precio ── */}
      <section id="opiniones" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} uppercase text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
                Lo que dice
                <br />
                <span style={{ color: C.navy }}>la fila de la caja</span>
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Stars value={4.6} color={C.tagDeep} className="w-4 h-4" />
                <p className={`${mono.className} text-sm font-semibold`} style={{ color: C.ink }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </p>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                Citas textuales de la ficha pública de Google de {BIZ.name}.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ color: C.navy, textDecorationColor: 'rgba(31,58,174,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.author} delay={i * 70}>
                  {/* etiqueta colgante: perforación + cuerpo */}
                  <figure className="relative border-2 p-5 pt-7 h-full" style={{ backgroundColor: i % 2 ? '#ffffff' : C.tag, borderColor: C.ink }}>
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2" style={{ backgroundColor: C.paper, borderColor: C.ink }} aria-hidden="true" />
                    <blockquote className="text-sm md:text-[15px] leading-relaxed mb-4 font-semibold" style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: i % 2 ? C.muted : 'rgba(28,28,32,0.75)' }}>
                      {t.author} · {t.detail}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden border-t-2" style={{ backgroundColor: C.red, borderColor: C.ink }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-5 font-semibold`} style={{ color: '#ffffff' }}>
              {BIZ.instagram ? `@${BIZ.instagram}` : ''}
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,7vw,4.4rem)] leading-[0.95] mb-6`} style={{ color: '#ffffff' }}>
              El que llega primero
              <br />
              <span style={{ color: C.tag }}>se lleva la oferta</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: '#ffffff' }}>
              El surtido cambia semana a semana: pasa por el galpón de 8 Sur
              o llama para preguntar qué llegó.
            </p>
            <a
              href={CALL_LINK}
              className={`${display.className} uppercase tracking-[0.03em] inline-flex items-center gap-2 text-sm md:text-base px-8 py-4 border-2 transition-all hover:-translate-y-0.5 hover:bg-white/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ borderColor: '#ffffff', color: '#ffffff' }}
            >
              <PhoneIcon className="w-4 h-4" color="#ffffff" />
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs" style={{ color: 'rgba(246,241,230,0.85)' }}>
                {BIZ.address} · {LOCAL_CENTRO.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(246,241,230,0.85)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,230,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: 'rgba(246,241,230,0.85)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.tag }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, direcciones, teléfonos, horarios,
            fotos, logo y reseñas son datos públicos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.tag }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.red} />
    </div>
  )
}
