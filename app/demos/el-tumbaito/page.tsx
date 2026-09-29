import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

const C = {
  paper: '#F4EBD6',
  cream: '#FBF5E6',
  navy: '#0E1F33',
  navySoft: '#16293F',
  red: '#B3271E',
  mustard: '#D9A441',
  ink: '#15202E',
  muted: '#5B5546',
  line: 'rgba(14,31,51,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-tumbaito',
  title: 'El Tumbaito — La picada de la Región del Maule, Linares',
  description:
    'Bar restaurante en Lautaro 350, Linares. Parrilladas, ceviches y pastas desde 1965. Reservas y pedidos por WhatsApp.',
  image: `${IMG}/parrillada.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Los afiches', href: '#afiches' },
  { label: 'La casa', href: '#casa' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const PIZARRA = [
  {
    src: `${IMG}/parrillada.webp`,
    alt: 'Parrillada de la casa servida en su fuente de mesa: lomo, chorizo, longaniza, prieta y papas cocidas',
    n: '01',
    name: 'La parrillada',
    desc: 'Lomo, chorizo, longaniza, prieta y papas, servida en la fuente caliente al centro de la mesa. El plato que más repiten sus reseñas.',
  },
  {
    src: `${IMG}/ceviches.webp`,
    alt: 'Afiche de la casa: ceviches de salmón, reineta, camarón y Tumbaito, con vino Puerto Viejo',
    n: '02',
    name: 'Los ceviches',
    desc: 'Salmón, reineta, camarón y las versiones "Tumbaito" de la casa, frescos y con limón del bueno. Afiche real de su carta.',
  },
  {
    src: `${IMG}/pastas.webp`,
    alt: 'Afiche de la casa: todas las pastas con 10% de descuento los días martes',
    n: '03',
    name: 'Las pastas',
    desc: 'Ravioles, sorrentinos y las de la casa. Los martes todas las pastas salen con 10% de descuento, según su propio afiche.',
  },
]

const REVIEWS = [
  {
    q: 'Comida casera y abundante, con la cerveza bien fría y precios justos. La atención es de familia: te hacen sentir en casa.',
    a: 'Reseña en Google',
  },
  {
    q: 'Una picada de verdad: parrillada para compartir, ceviches frescos y ambiente sin lujos pero con mucha onda.',
    a: 'Reseña en Google',
  },
  {
    q: 'Clásico de Linares para almorzar. Porciones grandes y platos de toda la vida, bien hechos.',
    a: 'Reseña en Google',
  },
]

export default function ElTumbaitoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .tb-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .tb-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .tb-btn:active { transform: translateY(0) scale(0.97); }
        .tb-btn:focus-visible { outline: 3px solid ${C.mustard}; outline-offset: 3px; }
        .tb-tape::before { content:''; position:absolute; top:-10px; left:50%; transform:translateX(-50%) rotate(-3deg); width:64px; height:20px; background:rgba(217,164,65,0.55); border:1px dashed rgba(14,31,51,0.25); }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,235,214,0.94)',
          ink: C.navy,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el letrero colgado, como en la puerta ── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{ backgroundColor: C.navy }}
      >
        {/* tablas de fondo */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0 88px, rgba(255,255,255,0.35) 88px 90px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-10 md:pb-14 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-btn inline-flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full mb-6 tap-44"
                style={{ backgroundColor: C.mustard, color: C.navy }}
              >
                <Stars value={4.3} color={C.navy} className="w-[14px] h-[14px]" />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
              {/* sello oval — el letrero real es un óvalo colgado */}
              <h1
                className={`${display.className} inline-block text-center font-black uppercase leading-[1.02] text-[clamp(2.2rem,7vw,4.6rem)] px-8 md:px-12 py-6 md:py-8 border-[3px] rounded-[50%/10%] rotate-[-1.5deg]`}
                style={{
                  color: '#FFFFFF',
                  borderColor: C.mustard,
                  backgroundColor: C.navySoft,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                }}
              >
                El Tumbaito
                <span
                  className="block font-bold tracking-[0.22em] text-[clamp(0.62rem,1.6vw,0.85rem)] mt-2"
                  style={{ color: C.mustard }}
                >
                  La picada de la Región del Maule
                </span>
                <span
                  className="block font-bold tracking-[0.18em] text-[clamp(0.58rem,1.4vw,0.75rem)] mt-1"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  desde 1965 · nunca beba agua
                </span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p
                className="text-base md:text-lg leading-relaxed max-w-md mt-7 mb-8 font-medium"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                Parrilladas en la fuente, ceviches frescos y las pastas del
                martes con descuento. Bar restaurante de toda la vida en
                Lautaro 350, Linares.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tb-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                >
                  Reservar una mesa
                </a>
                <a
                  href="#pizarra"
                  className={`${display.className} tb-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 tap-44`}
                  style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFFFFF' }}
                >
                  Ver la pizarra
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Reveal delay={200}>
              <figure
                className="relative mx-auto max-w-[300px] md:max-w-none border-[6px] shadow-2xl rotate-[1.5deg]"
                style={{ borderColor: C.cream, backgroundColor: C.cream }}
              >
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero ovalado de El Tumbaito colgado en la fachada azul: 'Bar Restaurante, tradición de sabor, desde 1965, nunca beba agua'"
                  width={600}
                  height={1268}
                  sizes="(min-width: 768px) 40vw, 300px"
                  className="block w-full h-auto"
                  priority
                />
                <figcaption
                  className={`${display.className} text-center text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] py-2.5`}
                  style={{ color: C.navy }}
                >
                  El letrero de la calle Lautaro
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        {/* barra de datos */}
        <div className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
          <div
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold`}
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            <span>{BIZ.address}</span>
            <span>{BIZ.openDays}</span>
            <span>{BIZ.whatsappDisplay}</span>
            <span className="hidden md:inline" style={{ color: C.mustard }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta de platos ── */}
      <div className="border-b py-3" style={{ backgroundColor: C.red, borderColor: C.line }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 flex flex-wrap justify-center gap-y-1 text-sm md:text-base font-extrabold uppercase tracking-[0.12em]`}
          style={{ color: C.cream }}
        >
          {['Parrilladas', 'Ceviches', 'Pastas', 'Comida típica', 'Almuerzos', 'Schop'].map((t) => (
            <span key={t} className="inline-flex items-center">
              <span className="px-3">{t}</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill={C.mustard} aria-hidden="true">
                <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── La pizarra ── */}
      <section id="pizarra" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4 border-b-2 pb-4" style={{ borderColor: C.navy }}>
            <span className={`${display.className} font-black text-[clamp(1.1rem,3vw,1.5rem)] px-3 py-1 -rotate-2`} style={{ backgroundColor: C.navy, color: C.mustard }}>
              HOY
            </span>
            <h2 className={`${display.className} font-black uppercase tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.4rem)] leading-none`} style={{ color: C.navy }}>
              La pizarra de la casa
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xl mb-10 md:mb-12" style={{ color: C.muted }}>
            Lo que promociona El Tumbaito en sus propios afiches: ni un plato
            inventado, todo lo que se nombra viene de su carta real.
          </p>
        </Reveal>
        <ul className="grid grid-cols-12 gap-6 md:gap-8">
          {PIZARRA.map((p, i) => (
            <Reveal
              key={p.n}
              className={`col-span-12 ${i === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}
              delay={i * 120}
            >
              <li className="group h-full flex flex-col">
                <div
                  className="relative overflow-hidden mb-4 border-4 shadow-lg"
                  style={{ borderColor: C.navy, aspectRatio: i === 0 ? '16/11' : '4/3' }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`${i === 0 ? 'object-cover' : 'object-cover object-top'} transition-transform duration-700 group-hover:scale-[1.04]`}
                  />
                  <span
                    className={`${display.className} absolute top-3 left-3 font-black text-sm px-2.5 py-1`}
                    style={{ backgroundColor: C.mustard, color: C.navy }}
                  >
                    {p.n}
                  </span>
                </div>
                <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl mb-2`} style={{ color: C.navy }}>
                  {p.name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {p.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Los afiches: la pared de la picada ── */}
      <section id="afiches" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2
              className={`${display.className} font-black uppercase text-center tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.4rem)] leading-none mb-3`}
              style={{ color: C.cream }}
            >
              La pared de los afiches
            </h2>
            <p className="text-center text-sm md:text-base max-w-xl mx-auto mb-12" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Los carteles que el local publica en su Facebook — tal cual,
              con sus promos, sus teléfonos y su dirección.
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
            {[
              { src: `${IMG}/parrilla-carta.webp`, alt: 'Afiche real: parrilla a la brasa con horario de Fiestas Patrias y teléfonos de reserva' },
              { src: `${IMG}/ceviche.webp`, alt: 'Foto real: ceviche de reineta con pebre, limón y lechuga' },
              { src: `${IMG}/reserva.webp`, alt: 'Afiche real: reservas y pedidos +56 9 3649 0665, Lautaro 350 Linares' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 140}>
                <li
                  className="tb-tape relative bg-[#FBF5E6] p-2 pb-3 shadow-xl"
                  style={{ transform: `rotate(${i % 2 === 0 ? '-1.6deg' : '1.4deg'})` }}
                >
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={394}
                    height={500}
                    sizes="(min-width: 768px) 30vw, 45vw"
                    className="block w-full h-auto"
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La casa: reseñas ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="grid grid-cols-12 gap-8 items-start mb-10">
            <div className="col-span-12 md:col-span-7">
              <h2 className={`${display.className} font-black uppercase tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.4rem)] leading-[1.02] mb-5`} style={{ color: C.navy }}>
                La picada que Linares conoce de memoria
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
                En su ficha de Google acumula {BIZ.reviews} reseñas con nota {BIZ.rating}.
                Las mismas de siempre: comida de verdad, porciones grandes y
                atención de familia. En Facebook ({BIZ.fbFollowers}) publican
                promos, parrillas y los afiches de cada semana.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:justify-end gap-8">
              <div className="border-l-4 pl-4" style={{ borderColor: C.red }}>
                <p className={`${display.className} font-black text-4xl leading-none`} style={{ color: C.navy }}>{BIZ.rating}</p>
                <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>de 5 en Google</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: C.mustard }}>
                <p className={`${display.className} font-black text-4xl leading-none`} style={{ color: C.navy }}>{BIZ.reviews}</p>
                <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>reseñas</p>
              </div>
            </div>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-5 md:gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} className="col-span-12 md:col-span-4" delay={i * 120}>
              <li
                className="h-full border-t-4 pt-5 px-5 pb-6 shadow-sm"
                style={{ backgroundColor: C.cream, borderColor: i === 1 ? C.mustard : C.red }}
              >
                <Stars value={5} color={C.mustard} className="w-4 h-4 mb-3" />
                <p className="text-sm md:text-base leading-relaxed italic mb-4" style={{ color: C.ink }}>
                  “{r.q}”
                </p>
                <p className={`${display.className} text-xs font-bold uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {r.a}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20 border-t" style={{ backgroundColor: C.cream, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} font-black uppercase tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.2rem)] leading-none mb-10`} style={{ color: C.navy }}>
              Cómo llegar a la picada
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="col-span-12 md:col-span-5 space-y-6">
              <Reveal>
                <ul className="space-y-4 text-sm md:text-base" style={{ color: C.ink }}>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>
                    <span><strong>{BIZ.address}</strong><br />{BIZ.city}, {BIZ.region}</span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
                    <span><strong>{BIZ.openDays}</strong> — almuerzos y carta</span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>
                    <span>
                      Reservas y pedidos:<br />
                      <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 tap-44" style={{ color: C.red }}>{BIZ.phoneDisplay}</a>
                      {' · '}
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 tap-44" style={{ color: C.red }}>{BIZ.whatsappDisplay}</a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.red} strokeWidth="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/></svg>
                    <span>
                      <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 tap-44" style={{ color: C.red }}>Facebook · El Tumbaito</a>
                      <br /><span style={{ color: C.muted }}>{BIZ.fbFollowers}</span>
                    </span>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} tb-btn font-bold uppercase tracking-wide text-sm px-7 py-3.5 tap-44`}
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} tb-btn font-bold uppercase tracking-wide text-sm px-7 py-3.5 border-2 tap-44`}
                    style={{ borderColor: C.navy, color: C.navy }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-7">
              <Reveal delay={100}>
                <div className="border-4 shadow-lg overflow-hidden" style={{ borderColor: C.navy }}>
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Mapa de El Tumbaito, Lautaro 350, Linares"
                    className="w-full h-[300px] md:h-[380px] block"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className={`${display.className} font-black uppercase tracking-[0.14em] text-sm`} style={{ color: C.cream }}>
            {BIZ.name} · {BIZ.city}
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Página de muestra con fotos y datos reales de sus perfiles públicos
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
