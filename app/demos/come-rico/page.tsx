import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_DELIVERY, MAPS_EMBED, MAPS_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el letrero del local amarillo» — la fachada pintada de
 * amarillo y su rótulo negro con la carta en mayúsculas son la marca real del
 * negocio. La pieza central es una réplica de ese letrero: panel carbón, texto
 * papel y amarillo, la carta en dos columnas como en la foto de la tienda.
 */
const C = {
  papel: '#FBF6EA',
  ticket: '#FFFFFF',
  ink: '#231B0F',
  accent: '#C7351D',
  amarillo: '#F2C230',
  letrero: '#181209',
  muted: 'rgba(35,27,15,0.68)',
  line: 'rgba(35,27,15,0.16)',
  onLetrero: '#F7EED4',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'come-rico',
  title: 'Come Rico — Cocinería en 14 Oriente, Talca centro',
  description:
    'Desayunos, completos, churrascos y fajitas del local amarillo de 14 Oriente 1137, Talca. Delivery gratis al Hospital y alrededores. Pide por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Cómo pedir', href: '#pedir' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

// La carta tal como sale en su letrero real.
const CARTA_IZQ = ['Desayunos', 'Colaciones', 'Pechuga a la plancha', 'Papas fritas', 'Completos']
const CARTA_DER = ['Fajitas', 'Churrascas', 'Café y té', 'Paila de huevo', 'Churrascos']

const MESON = [
  { img: 'italiano', nombre: 'Churrasco italiano', detalle: 'con palta, tomate y mayo' },
  { img: 'pizza', nombre: 'Pizza familiar', detalle: 'para compartir en la mesa' },
  { img: 'fajita', nombre: 'Fajita mixta', detalle: 'enrolada, lista al paso' },
  { img: 'churrasco', nombre: 'Churrasco con huevo', detalle: 'con papas fritas' },
  { img: 'sandwich-huevo', nombre: 'Sandwich de la casa', detalle: 'huevo y carne a la plancha' },
  { img: 'mesa', nombre: 'Colación completa', detalle: 'plato, bebida y papas' },
]

const MODOS = [
  { n: '01', t: 'En el local', d: 'El local amarillo de 14 Oriente: mesas adentro y la cocina a la vista.' },
  { n: '02', t: 'Para llevar', d: 'Pides por WhatsApp y lo retiras al pasar, sin espera adentro.' },
  { n: '03', t: 'Delivery', d: 'Delivery gratis al Hospital y alrededores, como dice el letrero.' },
]

const RESENAS = [
  {
    text: 'El almuerzo estaba rico, buena porción y lo sirvieron súper rápido, además buena atención.',
    who: 'Matías Oyarce',
  },
  {
    text: 'Muy buena atención, puntualidad y calidad en sus productos. 100% recomendable.',
    who: 'Luis Álvaro Loyola',
  },
]

const MARQUEE = ['Completos', 'Churrascos', 'Fajitas', 'Papas fritas', 'Desayunos', 'Colaciones', 'Café y té', 'Paila de huevo']

export default function ComeRicoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        .cr-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .cr-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .cr-btn:active { transform: translateY(0) scale(0.97); }
        .cr-btn:focus-visible { outline: 3px solid ${C.accent}; outline-offset: 3px; }
        .cr-marquee { animation: cr-scroll 26s linear infinite; }
        @keyframes cr-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .cr-marquee { animation: none; } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        fontClass={`${display.className} font-bold uppercase tracking-wide`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(251,246,234,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.accent,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: headline + réplica del letrero real ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[96px] md:pt-[110px] pb-12 md:pb-16">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.muted }}>
                  Cocinería · Talca centro
                </p>
                <h1
                  className={`${display.className} font-extrabold uppercase leading-[0.92] tracking-tight text-[clamp(2.9rem,9vw,5.6rem)]`}
                  style={{ color: C.ink }}
                >
                  Una experiencia{' '}
                  <span style={{ color: C.accent }}>en sabor</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base md:text-lg leading-relaxed max-w-md mt-5 mb-7" style={{ color: C.muted }}>
                  Así dice el letrero del local amarillo de 14 Oriente:
                  desayunos, completos, churrascos y fajitas a pasos del
                  Hospital Regional.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} cr-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                    style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className={`${mono.className} cr-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver la carta
                  </a>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className={`${mono.className} text-xs md:text-sm mt-7`} style={{ color: C.muted }}>
                  {BIZ.address} · {BIZ.city}
                  <br />
                  {BIZ.hours}
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-6">
              <Reveal delay={150}>
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl border-4"
                  style={{ backgroundColor: C.letrero, borderColor: C.ink }}
                >
                  <div className="px-6 md:px-8 pt-7 pb-6 text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado de su letrero */}
                    <img
                      src={`${IMG}/logo.webp`}
                      alt="Mascota de Come Rico: sandwich con gorro de chef"
                      className="h-28 md:h-32 mx-auto rounded-xl object-cover"
                    />
                    <p
                      className={`${display.className} font-bold uppercase leading-none mt-4 text-[clamp(1.8rem,4.5vw,2.6rem)]`}
                      style={{ color: C.amarillo }}
                    >
                      La carta
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-5 text-left">
                      <ul className={`${display.className} font-semibold uppercase tracking-wide text-sm md:text-base leading-relaxed`} style={{ color: C.onLetrero }}>
                        {CARTA_IZQ.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                      <ul className={`${display.className} font-semibold uppercase tracking-wide text-sm md:text-base leading-relaxed`} style={{ color: C.onLetrero }}>
                        {CARTA_DER.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 py-3" style={{ backgroundColor: C.amarillo }}>
                    <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-center`} style={{ color: C.ink }}>
                      {BIZ.delivery} · {BIZ.phoneDisplay}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cinta de platos (marquee) ── */}
      <div className="overflow-hidden border-y-2 py-3" style={{ borderColor: C.ink, backgroundColor: C.amarillo }} aria-hidden="true">
        <div className="cr-marquee flex whitespace-nowrap w-max">
          {[0, 1].map((dup) => (
            <span key={dup} className={`${display.className} font-bold uppercase tracking-[0.12em] text-lg md:text-xl`} style={{ color: C.ink }}>
              {MARQUEE.map((w) => (
                <span key={w} className="mx-4">
                  {w} <span style={{ color: C.accent }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Lo que sale del mesón ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.accent }}>
            Directo del mostrador
          </p>
          <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2rem,5.5vw,3.6rem)] leading-none tracking-tight mb-3`} style={{ color: C.ink }}>
            Lo que sale del mesón
          </h2>
          <p className="text-sm md:text-base mb-10 max-w-lg" style={{ color: C.muted }}>
            Fotos reales de su ficha de Google: los platos que se ven pasar por
            la ventana del local amarillo.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {MESON.map((p, i) => (
            <Reveal key={p.img} delay={i * 60}>
              <figure>
                <div className="relative aspect-square overflow-hidden rounded-2xl border-2" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/${p.img}.webp`}
                    alt={`${p.nombre} servido en Come Rico`}
                    fill
                    sizes="(min-width: 768px) 31vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2.5">
                  <span className={`${display.className} block font-bold uppercase tracking-wide text-sm md:text-base`} style={{ color: C.ink }}>
                    {p.nombre}
                  </span>
                  <span className={`${mono.className} block text-[10px] md:text-[11px] uppercase tracking-[0.1em]`} style={{ color: C.muted }}>
                    {p.detalle}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-6`} style={{ color: C.muted }}>
            Precios y carta del día se confirman por WhatsApp
          </p>
        </Reveal>
      </section>

      {/* ── Cómo pedir: ventanilla del local ── */}
      <section id="pedir" className="scroll-mt-20" style={{ backgroundColor: C.letrero }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <Reveal className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4" style={{ borderColor: C.amarillo }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Mesón interior de Come Rico con refrigerador y mostrador"
                  fill
                  sizes="(min-width: 768px) 40vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amarillo }}>
                  Como en la ventanilla
                </p>
                <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2rem,5vw,3.4rem)] leading-none tracking-tight mb-8`} style={{ color: C.onLetrero }}>
                  Tres formas de pedir
                </h2>
              </Reveal>
              <ul>
                {MODOS.map((m, i) => (
                  <Reveal key={m.n} delay={i * 80}>
                    <li
                      className="flex items-baseline gap-4 md:gap-6 py-5 border-t"
                      style={{ borderColor: 'rgba(247,238,212,0.22)' }}
                    >
                      <span className={`${mono.className} text-sm font-bold`} style={{ color: C.amarillo }}>{m.n}</span>
                      <div>
                        <p className={`${display.className} font-bold uppercase tracking-wide text-xl md:text-2xl leading-none`} style={{ color: C.onLetrero }}>
                          {m.t}
                        </p>
                        <p className="text-sm mt-1.5" style={{ color: 'rgba(247,238,212,0.75)' }}>{m.d}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={200}>
                <a
                  href={WA_LINK_DELIVERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} cr-btn inline-block text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full mt-7 tap-44`}
                  style={{ backgroundColor: C.amarillo, color: C.ink }}
                >
                  Pedir con delivery gratis →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2rem,5vw,3.4rem)] leading-none tracking-tight mb-10`} style={{ color: C.ink }}>
            Lo que dicen en Google
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.who} delay={i * 100}>
              <figure
                className="h-full p-6 md:p-7 rounded-2xl border-2"
                style={{ borderColor: C.ink, backgroundColor: C.ticket }}
              >
                <Stars value={5} color={C.amarillo} className="w-4 h-4" />
                <blockquote className="text-base md:text-lg leading-relaxed font-medium mt-4" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-4`} style={{ color: C.muted }}>
                  {r.who} · reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-7 text-xs uppercase tracking-[0.16em] font-bold underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.ink, textDecorationColor: C.accent }}
          >
            Ver su ficha en Google Maps →
          </a>
        </Reveal>
      </section>

      {/* ── El local + mapa ── */}
      <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-5 flex flex-col">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.accent }}>
              Fíjate en la fachada amarilla
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.95] tracking-tight mb-5`} style={{ color: C.ink }}>
              Pasa al 1137
            </h2>
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border-2 mb-5" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada de Come Rico: local amarillo con letrero negro que lista la carta"
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
            <address className="not-italic text-sm md:text-base leading-relaxed font-semibold" style={{ color: C.ink }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:+${BIZ.phone}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: C.muted }}>
              {BIZ.hours} · {BIZ.delivery}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} cr-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
              >
                Pedir ahora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} cr-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={140}>
            <div className="relative w-full overflow-hidden rounded-2xl border-2 aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]" style={{ borderColor: C.ink }}>
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `2px solid ${C.ink}`, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado de su letrero */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-11 w-11 rounded-full object-cover border-2" style={{ borderColor: C.ink }} aria-hidden="true" />
            <div>
              <p className={`${display.className} font-bold uppercase tracking-wide text-xl leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={`tel:+${BIZ.phone}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.muted }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos, carta y reseñas reales de su ficha de
            Google; precios y horarios se confirman con el local.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.accent }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
