import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { TagNav } from './chrome'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  MARCAS,
  SECCIONES,
  HORARIO,
  SERVICIOS_EXTRA,
  RESENAS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  crema: '#FBF5E8',
  kraft: '#F1E7CF',
  card: '#FFFFFF',
  ink: '#2B2313',
  muted: '#6F6250',
  verde: '#4C8C1E',
  verdeInk: '#3A7210',
  verdeDeep: '#1D3B0E',
  verdeSoft: '#E4F0D2',
  line: 'rgba(43,35,19,0.13)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'patitas-pets-iquique',
  title: 'Patitas Pets · Tienda y peluquería de mascotas en Iquique',
  description:
    'Tienda de mascotas en La Concordia 2147, Iquique: alimento para perros y gatos, accesorios, antiparasitarios y peluquería. Con delivery. Escríbeles por WhatsApp.',
  image: '/demos/patitas-pets-iquique/hero.webp',
})

const NAV_LINKS = [
  { label: 'El mural', href: '#mural' },
  { label: 'Secciones', href: '#secciones' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Visita', href: '#visita' },
]

// ── Motivo: huella ───────────────────────────────────────────

function Paw({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="6.3" cy="8.6" rx="1.6" ry="2.2" transform="rotate(-16 6.3 8.6)" />
      <ellipse cx="10.2" cy="6" rx="1.7" ry="2.4" transform="rotate(-5 10.2 6)" />
      <ellipse cx="14.4" cy="6" rx="1.7" ry="2.4" transform="rotate(5 14.4 6)" />
      <ellipse cx="18.2" cy="8.6" rx="1.6" ry="2.2" transform="rotate(16 18.2 8.6)" />
      <path d="M12.3 11.4c-3.2 0-5.6 2.3-5.6 4.9 0 1.7 1.2 2.8 2.8 2.8 1.1 0 1.8-.5 2.8-.5s1.7.5 2.8.5c1.6 0 2.8-1.1 2.8-2.8 0-2.6-2.4-4.9-5.6-4.9z" />
    </svg>
  )
}

/** Foto estilo polaroid, pegada con cinta, como en el mural del local. */
function Polaroid({
  src,
  alt,
  caption,
  rotate,
  delay = 0,
}: {
  src: string
  alt: string
  caption: string
  rotate: number
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <figure
        className="bg-white p-2.5 pb-9 rounded-[6px] shadow-lg relative transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]"
        style={{ transform: `rotate(${rotate}deg)`, boxShadow: '0 10px 28px rgba(43,35,19,0.18)' }}
      >
        <span
          aria-hidden="true"
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-[74px] h-[22px] rounded-[2px]"
          style={{ backgroundColor: 'rgba(76,140,30,0.28)', transform: `translateX(-50%) rotate(${-rotate * 1.6}deg)` }}
        />
        <div className="relative overflow-hidden rounded-[3px] aspect-square">
          <Image src={src} alt={alt} fill sizes="(min-width: 768px) 22vw, 45vw" className="object-cover" />
        </div>
        <figcaption
          className={`${display.className} absolute bottom-1.5 inset-x-0 text-center text-sm tracking-wide uppercase`}
          style={{ color: C.muted }}
        >
          {caption}
        </figcaption>
      </figure>
    </Reveal>
  )
}

/** Etiqueta de precio colgando del cordel. */
function Tag({ tag, desc, tilt, delay }: { tag: string; desc: string; tilt: number; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col items-center">
        {/* cordel */}
        <span aria-hidden="true" className="block w-px h-7" style={{ backgroundColor: 'rgba(43,35,19,0.4)' }} />
        <div
          className="w-full rounded-[14px] border-2 bg-white p-5 pt-7 relative transition-transform duration-300 hover:-translate-y-1"
          style={{ borderColor: C.verdeInk, transform: `rotate(${tilt}deg)`, boxShadow: '0 8px 20px rgba(43,35,19,0.10)' }}
        >
          <span
            aria-hidden="true"
            className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full border-2"
            style={{ borderColor: C.verdeInk, backgroundColor: C.kraft }}
          />
          <h3 className={`${display.className} text-2xl uppercase leading-none mb-2`} style={{ color: C.verdeDeep }}>
            {tag}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            {desc}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`} style={{ color }}>
      <Paw className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

export default function PatitasPetsPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.crema, color: C.ink }}>
      <style>{`
        @keyframes pt-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .pt-marquee { animation: pt-marquee 32s linear infinite }
        @media (prefers-reduced-motion: reduce) { .pt-marquee { animation: none } }
      `}</style>

      <TagNav
        logo={`${IMG}/logo.webp`}
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir por WhatsApp"
      />

      {/* ── Hero dividido: la tienda y su gato ── */}
      <section id="inicio" className="relative pt-[92px] md:pt-[110px] pb-12 md:pb-16" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <Eyebrow color={C.verdeInk}>Tienda y peluquería de mascotas · Iquique</Eyebrow>
              <h1
                className={`${display.className} uppercase leading-[0.98] text-[clamp(2.6rem,9vw,5rem)] mb-5`}
                style={{ color: C.ink }}
              >
                Todo para el
                <br />
                <span style={{ color: C.verdeInk }}>peludo</span> de la casa
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                Alimento, juguetes, antiparasitarios y peluquería: la tienda
                de barrio en La Concordia donde te atienden (y el gato
                vigila la mesa).
              </p>
              <div className="flex items-center gap-2 mb-8">
                <Stars value={4.5} color={C.verde} />
                <span className={`${mono.className} text-xs md:text-sm font-bold`} style={{ color: C.ink }}>
                  {BIZ.rating} · {BIZ.reviewsCount} reseñas en Google
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-wide text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 text-white ${focusRing} tap-44`}
                  style={{ backgroundColor: C.verdeInk }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="#secciones"
                  className={`${display.className} uppercase tracking-wide text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(43,35,19,0.3)', color: C.ink }}
                >
                  Qué venden
                </a>
              </div>
              <p className={`${mono.className} text-[11px] mt-4`} style={{ color: C.muted }}>
                retiro en tienda · también tienen delivery
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative max-w-[380px] mx-auto md:mx-0 md:ml-auto">
              <div
                className="relative overflow-hidden rounded-[26px] border-4 border-white aspect-[3/4] rotate-2"
                style={{ boxShadow: '0 20px 44px rgba(43,35,19,0.2)' }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="El gato atigrado de Patitas Pets sentado sobre el mesón de la tienda, junto a la calculadora"
                  fill
                  priority
                  loading="eager"
                  sizes="(min-width: 768px) 38vw, 86vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-[92px] h-[26px] rounded-[2px] -rotate-2"
                style={{ backgroundColor: 'rgba(76,140,30,0.3)' }}
              />
              <div
                className={`${display.className} absolute -bottom-5 -right-2 md:-right-5 uppercase text-lg md:text-xl px-4 py-2.5 rounded-[10px] -rotate-3 text-white`}
                style={{ backgroundColor: C.verdeDeep, boxShadow: '0 8px 20px rgba(29,59,14,0.35)' }}
              >
                el que atiende
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de marcas ── */}
      <div className="overflow-hidden py-3" style={{ backgroundColor: C.verdeDeep }} aria-hidden="true">
        <div className="pt-marquee flex w-max items-center gap-10">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10">
              {MARCAS.map((m) => (
                <span key={`${dup}-${m}`} className={`${mono.className} text-sm font-bold uppercase tracking-[0.18em] whitespace-nowrap flex items-center gap-10`} style={{ color: 'rgba(251,245,232,0.9)' }}>
                  {m}
                  <Paw className="w-[13px] h-[13px]" color="rgba(251,245,232,0.55)" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── El mural: fotos pegadas con cinta ── */}
      <section id="mural" className="scroll-mt-20" style={{ backgroundColor: C.kraft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color={C.verdeInk}>Clientes peludos</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.98] mb-3`} style={{ color: C.ink }}>
              Los que pasan
              <br />
              por <span style={{ color: C.verdeInk }}>la tienda</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: C.muted }}>
              Fotos reales del local y de sus visitas: la vitrina de La
              Concordia, el mesón y las mascotas que llegan a saludar.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
            <Polaroid src={`${IMG}/fachada.webp`} alt="Fachada de Patitas Pets en La Concordia, con un perrito en la entrada" caption="la esquina" rotate={-2.5} />
            <Polaroid src={`${IMG}/chiko.webp`} alt="Chiko, un perrito blanco cliente de la tienda" caption="chiko" rotate={2} delay={90} />
            <Polaroid src={`${IMG}/peluqueria.webp`} alt="Caniche blanco sobre la mesa de peluquería de Patitas" caption="en la pelu" rotate={-1.5} delay={180} />
            <Polaroid src={`${IMG}/gato.webp`} alt="Gato negro junto a las bolsas de alimento natural de la tienda" caption="el gato" rotate={2.5} delay={270} />
          </div>
        </div>
      </section>

      {/* ── Secciones: etiquetas colgando ── */}
      <section id="secciones" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
          <Reveal>
            <Eyebrow color={C.verdeInk}>Los pasillos</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.98] mb-3`} style={{ color: C.ink }}>
              Qué encuentras
              <br />
              en <span style={{ color: C.verdeInk }}>Patitas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Según sus fotos y lo que cuentan las reseñas: alimento,
              accesorios, antiparasitarios y la peluquería del local.
            </p>
          </Reveal>
          {/* cordel del que cuelgan las etiquetas */}
          <svg viewBox="0 0 1200 26" className="w-full h-[26px] mb-0" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 8 Q 300 26 600 12 T 1200 10" fill="none" stroke="rgba(43,35,19,0.4)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 -mt-2">
            {SECCIONES.map((s, i) => (
              <Tag key={s.tag} tag={s.tag} desc={s.desc} tilt={i % 2 ? 1.5 : -1.5} delay={i * 110} />
            ))}
          </div>
          <Reveal delay={80}>
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-2.5">
              <span className={`${mono.className} text-[11px] uppercase tracking-wider mr-1`} style={{ color: C.muted }}>
                marcas que se ven en el local:
              </span>
              {MARCAS.map((m) => (
                <span key={m} className={`${mono.className} text-[11px] md:text-xs uppercase tracking-wider px-3.5 py-2 rounded-full border`} style={{ borderColor: 'rgba(58,114,16,0.4)', color: C.verdeInk }}>
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color="#B7DC8E">Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mb-10 md:mb-12">
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.98]`} style={{ color: C.crema }}>
                El barrio
                <br />
                <span style={{ color: '#B7DC8E' }}>recomienda</span>
              </h2>
              <div className="pb-1.5 md:pb-2">
                <Stars value={4.5} color="#B7DC8E" className="w-5 h-5" />
                <p className={`${mono.className} text-xs md:text-sm font-bold mt-1.5`} style={{ color: 'rgba(251,245,232,0.8)' }}>
                  {BIZ.rating} · {BIZ.reviewsCount} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure className="h-full rounded-[18px] p-5 flex flex-col" style={{ backgroundColor: 'rgba(251,245,232,0.07)', border: `1px solid rgba(251,245,232,0.15)` }}>
                  <Stars value={5} color="#B7DC8E" className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(251,245,232,0.9)' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-wider mt-4`} style={{ color: 'rgba(251,245,232,0.6)' }}>
                    {r.nombre} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visita ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-18 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end pt-6">
            <Reveal>
              <Eyebrow color={C.verdeInk}>La tienda</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.98] mb-4`} style={{ color: C.ink }}>
                Ven con tu
                <br />
                <span style={{ color: C.verdeInk }}>mascota</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                En La Concordia 2147, a pasos de Av. Salvador Allende.
                Si no puedes ir, escríbeles: tienen delivery.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {SERVICIOS_EXTRA.map((s) => (
                  <span key={s} className={`${mono.className} text-[11px] md:text-xs uppercase tracking-wider px-3.5 py-2 rounded-full text-white`} style={{ backgroundColor: C.verdeInk }}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[24px] border aspect-[4/3]" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/pasillo.webp`}
                  alt="Pasillo interior de Patitas Pets con estantes llenos de alimento y accesorios"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[11px] mt-2.5`} style={{ color: C.muted }}>
                un pasillo de la tienda, foto real
              </p>
            </Reveal>
          </div>
        </div>
        <div className="relative">
          <div className="h-[300px] md:h-[460px]">
            <LazyMap
              title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="px-5 md:px-8">
            <div className="relative mt-6 md:mt-0 md:absolute md:top-1/2 md:left-8 md:-translate-y-1/2 md:w-[400px] z-10">
              <Reveal>
                <div className="rounded-[24px] border p-6 md:p-7 max-w-[400px] mx-auto md:mx-0 md:max-w-none shadow-xl" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <p className={`${display.className} uppercase text-xl mb-1`} style={{ color: C.ink }}>
                    {BIZ.name}
                  </p>
                  <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                    {BIZ.address}, {BIZ.city}
                  </address>
                  <ul className="space-y-2 mb-5">
                    {HORARIO.map((h) => (
                      <li key={h.dia} className="flex items-baseline justify-between gap-3 text-sm" style={{ color: C.muted }}>
                        <span className="font-bold" style={{ color: C.ink }}>{h.dia}</span>
                        <span className={`${mono.className} text-xs md:text-[13px]`}>{h.horas}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`${mono.className} text-[11px] leading-relaxed mb-5`} style={{ color: C.muted }}>
                    horario publicado en su ficha de Google
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} uppercase text-sm px-5 py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                      style={{ backgroundColor: C.verdeInk }}
                    >
                      Escribir por WhatsApp
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} uppercase text-sm px-5 py-2.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                      style={{ borderColor: 'rgba(43,35,19,0.3)', color: C.ink }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="h-10 md:h-0" />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.kraft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] border-4 border-white rotate-[-1.5deg]" style={{ boxShadow: '0 16px 36px rgba(43,35,19,0.16)' }}>
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero de Patitas Pet's: tienda y peluquería para mascotas, sobre el local naranjo de La Concordia"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className={`${display.className} uppercase text-[clamp(2rem,6.5vw,3.6rem)] leading-[0.98] mb-5`} style={{ color: C.ink }}>
                ¿Le falta comida
                <br />
                <span style={{ color: C.verdeInk }}>al peludo?</span>
              </h2>
              <p className="text-sm md:text-base max-w-md mb-8 leading-relaxed" style={{ color: C.muted }}>
                Escríbeles por WhatsApp: consultas por marca, stock o la
                hora de peluquería.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block uppercase tracking-wide text-base px-8 py-4 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.verdeInk }}
              >
                Escribir por WhatsApp
              </a>
              <p className={`${mono.className} text-xs mt-4`} style={{ color: C.muted }}>
                {BIZ.phoneDisplay} · @{BIZ.instagram}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.verdeDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24">
          <p className={`${display.className} uppercase text-xl mb-1 flex items-center gap-3`}>
            <Paw className="w-5 h-5" color="#B7DC8E" />
            {BIZ.name}
          </p>
          <p className="text-sm mb-2" style={{ color: 'rgba(251,245,232,0.8)' }}>
            {BIZ.address}, {BIZ.city}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(251,245,232,0.7)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono, horario,
            rating, reseñas y oferta (tienda + peluquería) son los datos reales
            del negocio, tomados de Google Maps y sus fotos.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
