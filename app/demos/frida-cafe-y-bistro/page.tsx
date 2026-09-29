import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
    { path: '../../fonts/mulish/italic-200-1000.woff2', weight: '200 1000', style: 'italic' },
  ],
})
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

/**
 * Dirección de arte: «la carta escrita a mano» — el papel del menú que
 * Frida anota cada día. Marfil de libreta, amarillo de la fachada de
 * Claudina Urrutia, el magenta del aro del logo y el verde de sus flores.
 * DM Serif Display hace la letra del vitrín; Mulish es la nota al pie;
 * IBM Plex Mono timbra horarios y datos. La foto de su carta manuscrita
 * real es la pieza central: nada de este menú es inventado.
 */
const C = {
  papel: '#FFF8EC',
  papelOsc: '#F7EEDC',
  amarillo: '#E8A614',
  amarilloSuave: '#F6D77A',
  magenta: '#B32C6F',
  verde: '#3F6B45',
  tinta: '#31281C',
  muted: 'rgba(49,40,28,0.7)',
  line: 'rgba(49,40,28,0.16)',
  card: '#FFFDF7',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'frida-cafe-y-bistro',
  title: 'Frida Café y Bistro — Cafetería y repostería artesanal en Cauquenes',
  description:
    'Café, repostería artesanal, waffles dulces y salados, fajitas y brunch en Claudina Urrutia 301, Cauquenes. Con zona de niños.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const CARTA = [
  {
    plato: 'Repostería artesanal',
    detalle: 'cheesecake de pistacho, quequitos sin harina, kuchen y tartas — lo que más nombran las reseñas',
    color: C.magenta,
  },
  {
    plato: 'Waffles dulces y salados',
    detalle: 'con fruta de estación o en versión salada para el brunch',
    color: C.amarillo,
  },
  {
    plato: 'Fajitas y sandwiches',
    detalle: 'la parte salada del bistró, también en versión dulce según su Instagram',
    color: C.verde,
  },
  {
    plato: 'Ensaladas y opciones sanas',
    detalle: 'verduras y alternativas saludables, destacadas por quienes almuerzan ahí',
    color: C.verde,
  },
  {
    plato: 'Jugos y limonadas',
    detalle: 'naturales, para acompañar la tarde',
    color: C.amarillo,
  },
  {
    plato: 'Brunch de fin de semana',
    detalle: 'la mesa larga del sábado, según su sitio oficial',
    color: C.magenta,
  },
]

const HORAS = [
  { d: 'Lunes, martes y jueves', h: '11:00 – 20:00' },
  { d: 'Miércoles y viernes', h: '11:30 – 20:00' },
  { d: 'Sábado', h: '14:00 – 20:00' },
  { d: 'Domingo', h: 'cerrado' },
]

const RESENAS = [
  {
    q: 'Comida exquisita y un lugar muy acogedor. La dueña que atiende es muy simpática.',
    a: 'Mathilde Sandrock',
    m: 'reseña en Google',
  },
  {
    q: 'Ensaladas, waffles dulces y salados, sandwiches, tartas y kuchen, jugos y limonadas. Excelente atención y precios accesibles.',
    a: 'Jacqueline Pascal',
    m: 'reseña en Google',
  },
  {
    q: 'Excelente experiencia: verduras y opciones saludables, atención muy atenta. Los postres quedaron para la próxima.',
    a: 'Profe Mónica',
    m: 'reseña en Google',
  },
]

const FOTOS = [
  { src: 'waffle-frutal', alt: 'Waffle dulce con frutas frescas de Frida Café y Bistro', r: '-2deg' },
  { src: 'reposteria', alt: 'Vitrina de repostería artesanal de Frida en Cauquenes', r: '1.5deg' },
  { src: 'fajita', alt: 'Fajita servida en Frida Café y Bistro', r: '-1.5deg' },
  { src: 'jugo', alt: 'Jugo natural de fruta servido en Frida', r: '2deg' },
] as const

function Kicker({ children, color = C.magenta }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] font-semibold tracking-[0.26em] uppercase`} style={{ color }}>
      {children}
    </p>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'light'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.magenta, color: '#FFF8EC' }
      : tone === 'light'
        ? { backgroundColor: C.card, color: C.tinta }
        : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-extrabold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={{ borderRadius: 999, ...st }}
    >
      {children}
    </a>
  )
}

/** Subrayado de marcador amarillo, como en la carta manuscrita. */
function Marca({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1">
      <span
        className="absolute inset-x-0 bottom-[0.08em] h-[0.42em] -skew-x-6 rounded-sm"
        style={{ backgroundColor: C.amarilloSuave }}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh] overflow-x-hidden`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className}`}
        theme={{ over: 'light', bar: 'rgba(255,248,236,0.94)', ink: C.tinta, line: C.line, btnBg: C.magenta, btnInk: '#FFF8EC' }}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — el vitrín de Claudina Urrutia */}
        <section id="inicio" className="relative overflow-hidden pt-24 pb-14 md:pb-20">
          <div
            className="absolute inset-0 opacity-50"
            aria-hidden="true"
            style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, ${C.line} 32px)` }}
          />
          <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-6 text-center md:text-left">
                <Reveal>
                  <Kicker>cafetería &amp; bistró · Cauquenes, Maule</Kicker>
                  <h1
                    className={`${display.className} leading-[1.04] text-[42px] sm:text-6xl lg:text-[64px] mt-5`}
                    style={{ color: C.tinta }}
                  >
                    El café de <Marca>colores</Marca> que endulza Cauquenes
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-medium" style={{ color: C.muted }}>
                    Repostería artesanal, waffles dulces y salados y un bistró
                    lleno de flores en plena Claudina Urrutia — con rinconito
                    para los niños.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Btn href={WA_LINK} tone="solid">Pedir por WhatsApp</Btn>
                    <Btn href="#carta" tone="line" external={false}>Ver la carta</Btn>
                  </div>
                  <div className="mt-7 flex items-center gap-3 justify-center md:justify-start">
                    <Stars value={4.6} color={C.magenta} className="w-[18px] h-[18px]" />
                    <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                      4,6 en Google · 59 opiniones
                    </span>
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-6">
                <Reveal delay={120}>
                  <div className="relative mx-auto max-w-md md:max-w-none">
                    <figure
                      className="overflow-hidden rounded-2xl rotate-[1.5deg]"
                      style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 18px 44px rgba(49,40,28,0.16)' }}
                    >
                      <Image
                        src={`${IMG}/fachada.webp`}
                        alt="Fachada amarilla de Frida Café y Bistro en Claudina Urrutia, Cauquenes"
                        width={1200}
                        height={800}
                        className="w-full h-auto block"
                        priority
                      />
                    </figure>
                    <div
                      className="absolute -bottom-6 -left-3 md:-left-6 w-28 md:w-36 rounded-full overflow-hidden -rotate-6"
                      style={{ border: `3px solid ${C.papel}`, boxShadow: '0 14px 34px rgba(49,40,28,0.22)' }}
                      aria-hidden="true"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/face.webp`} alt="" className="w-full aspect-square object-cover" />
                    </div>
                    <div
                      className="absolute -top-5 -right-2 md:-right-4 px-4 py-2 rotate-3"
                      style={{ backgroundColor: C.amarillo, boxShadow: '0 10px 26px rgba(49,40,28,0.18)' }}
                    >
                      <p className={`${mono.className} text-[10px] font-bold tracking-[0.16em] uppercase`} style={{ color: C.tinta }}>
                        zona de niños ✿
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* LA CARTA — la pauta manuscrita real, anclada */}
        <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.papelOsc }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-center">
              <Reveal>
                <div className="relative mx-auto max-w-sm">
                  <figure
                    className="rounded-xl overflow-hidden -rotate-2"
                    style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 18px 44px rgba(49,40,28,0.2)', backgroundColor: C.card }}
                  >
                    <Image
                      src={`${IMG}/carta.webp`}
                      alt="Carta manuscrita real de Frida Café y Bistro con sus platos y precios"
                      width={900}
                      height={1200}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </figure>
                  <p className={`${mono.className} mt-4 text-center text-[10px] tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
                    la carta real, escrita a mano
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div>
                  <Kicker>anotada cada día</Kicker>
                  <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] mt-4`} style={{ color: C.tinta }}>
                    La carta que se <Marca>escribe a mano</Marca>
                  </h2>
                  <ul className="mt-8 space-y-5">
                    {CARTA.map((c) => (
                      <li key={c.plato} className="flex gap-4 items-start">
                        <span
                          className="mt-1 shrink-0 text-lg leading-none"
                          style={{ color: c.color }}
                          aria-hidden="true"
                        >
                          ✿
                        </span>
                        <div>
                          <p className="text-lg font-extrabold leading-snug" style={{ color: C.tinta }}>
                            {c.plato}
                          </p>
                          <p className="mt-0.5 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                            {c.detalle}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Btn href={WA_LINK} tone="solid">Consultar qué hay hoy</Btn>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LA VITRINA — álbum de fotos reales con cinta adhesiva */}
        <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <Kicker color={C.verde}>de la vitrina a la mesa</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] mt-4`} style={{ color: C.tinta }}>
                Todo lo dulce sale de <em style={{ color: C.magenta }}>su cocina</em>
              </h2>
              <p className="mt-4 text-base leading-relaxed font-medium" style={{ color: C.muted }}>
                Waffles, repostería del día, fajitas y jugos naturales:
                fotografiado en el local, no en un banco de imágenes.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <figure
                  className="bg-white p-3 pb-4 rounded-md"
                  style={{
                    transform: `rotate(${f.r}) ${i % 2 ? 'translateY(10px)' : 'translateY(0)'}`,
                    boxShadow: '0 14px 34px rgba(49,40,28,0.15)',
                    border: `1px solid ${C.line}`,
                  }}
                >
                  <div
                    className="mx-auto -mt-5 mb-2 h-5 w-20 rotate-[-4deg] rounded-sm opacity-80"
                    style={{ backgroundColor: C.amarilloSuave }}
                    aria-hidden="true"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/${f.src}.webp`} alt={f.alt} className="w-full aspect-[3/4] object-cover rounded-sm" loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <figure
              className="mt-12 mx-auto max-w-3xl overflow-hidden rounded-2xl"
              style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 18px 44px rgba(49,40,28,0.14)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/interior.webp`}
                alt="Interior colorido y acogedor de Frida Café y Bistro"
                className="w-full aspect-[21/9] object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </section>

        {/* RESEÑAS — notas de quienes pasan */}
        <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papelOsc }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="text-center">
                <Kicker>notas de quienes pasan</Kicker>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] mt-4`} style={{ color: C.tinta }}>
                  «Un lugar muy <Marca>acogedor</Marca>»
                </h2>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <Stars value={4.6} color={C.magenta} className="w-4 h-4" />
                  <span className={`${mono.className} text-[11px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                    4,6 en Google · 59 opiniones
                  </span>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 space-y-6">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 90}>
                  <figure
                    className={`rounded-2xl p-6 md:p-7 ${i % 2 ? 'md:ml-14' : 'md:mr-14'}`}
                    style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, boxShadow: '0 10px 26px rgba(49,40,28,0.08)' }}
                  >
                    <p className={`${display.className} text-4xl leading-none`} style={{ color: C.magenta }} aria-hidden="true">
                      “
                    </p>
                    <blockquote className="text-lg leading-relaxed font-semibold -mt-2" style={{ color: C.tinta }}>
                      {r.q}
                    </blockquote>
                    <figcaption className="mt-4 flex items-baseline justify-between gap-3 flex-wrap">
                      <p className="text-sm font-extrabold" style={{ color: C.tinta }}>{r.a}</p>
                      <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.muted }}>{r.m}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LLEGAR — mapa + horarios Maps */}
        <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Kicker color={C.verde}>a dos cuadras de la plaza</Kicker>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] mt-4`} style={{ color: C.tinta }}>
                <Marca>Claudina Urrutia 301</Marca>, Cauquenes
              </h2>
              <address className="not-italic mt-5 text-lg leading-relaxed font-medium" style={{ color: C.muted }}>
                Claudina Urrutia 301
                <br />
                Cauquenes, Región del Maule
              </address>
              <ul className="mt-6 space-y-2">
                {HORAS.map((h) => (
                  <li key={h.d} className="flex items-baseline justify-between gap-4 max-w-sm" style={{ borderBottom: `1px dashed ${C.line}` }}>
                    <span className="text-base font-bold pb-1.5" style={{ color: C.tinta }}>{h.d}</span>
                    <span className={`${mono.className} text-xs tracking-[0.08em] uppercase pb-1.5 ${h.h === 'cerrado' ? 'font-bold' : ''}`} style={{ color: h.h === 'cerrado' ? C.magenta : C.muted }}>
                      {h.h}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} mt-3 text-[10px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                horarios según Google Maps — conviene confirmar por WhatsApp
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="solid">Abrir en Google Maps</Btn>
                <Btn href={WA_LINK} tone="line">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: `1.5px solid ${C.line}`, boxShadow: '0 18px 44px rgba(49,40,28,0.16)' }}>
                <LazyMap src={MAPS_EMBED} title="Mapa de Frida Café y Bistro en Cauquenes" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL — el mantel amarillo */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.amarillo }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <div className="mx-auto mb-6 w-24 h-24 rounded-full overflow-hidden" style={{ border: `3px solid ${C.card}`, boxShadow: '0 14px 34px rgba(49,40,28,0.25)' }} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/face.webp`} alt="" className="w-full h-full object-cover" />
              </div>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04]`} style={{ color: C.tinta }}>
                La mesa está puesta y el kuchen recién salió
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto font-semibold" style={{ color: C.tinta }}>
                Encargos de repostería, brunch del sábado o una visita con los niños: todo por el mismo WhatsApp.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="solid">Escribir a Frida</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg`} style={{ color: C.papel }}>{BIZ.name} · {BIZ.tagline}</p>
          <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: 'rgba(255,248,236,0.6)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a
            href={BIZ.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-extrabold tap-44 inline-flex items-center"
            style={{ color: C.amarilloSuave }}
          >
            {BIZ.instagramUser}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
