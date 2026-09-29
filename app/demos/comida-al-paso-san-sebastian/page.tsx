import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/source-serif-4/normal-200-900.woff2', weight: '200 900', style: 'normal' },
    { path: '../../fonts/source-serif-4/italic-200-900.woff2', weight: '200 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la casa del camino» — un local de madera y plantas al
 * borde del camino de Vilches, atendido por sus dueños. Página editorial de
 * almanaque: serif de libro, filas que alternan foto y relato, y el bosque
 * de la cordillera como banda profunda.
 */
const C = {
  hueso: '#F6F1E4',
  papel: '#FCF9F0',
  ink: '#21301F',
  bosque: '#1F3A2C',
  accent: '#8F5A1A',
  muted: 'rgba(33,48,31,0.68)',
  line: 'rgba(33,48,31,0.16)',
  onBosque: '#F2EEDF',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'comida-al-paso-san-sebastian',
  title: 'San Sebastián — Comida al paso y cabañas en Vilches, San Clemente',
  description:
    'Comida al paso en Vilches, San Clemente: empanadas de pino, humitas y mote con huesillo en un local atendido por sus dueños. También arriendan cabañas.',
  image: `${IMG}/terraza.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'De la cocina', href: '#cocina' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const RESENAS = [
  {
    text: 'Las mejores empanadas de pino. Pasamos después de un trekking a comprar con poca fe, pero terminamos comiendo más de lo que pensábamos. Local atendido por dos abuelitos que nos ayudaron con algunos tips.',
    who: 'Ámbar Figueroa',
  },
  {
    text: 'Excelente atención, comida muy rica, ambiente muy bonito y acogedor. Todo limpio.',
    who: 'Jotadey RPE',
  },
  {
    text: 'Excelente lugar, exquisita la comida y entorno hermoso, sus dueños excelentes personas. Mil de mil recomendado.',
    who: 'Carlita Orellana',
  },
  {
    text: 'Una de las empanadas más ricas que he probado. Súper rico y buena atención.',
    who: 'Sofía Parra',
  },
]

const COCINA = [
  {
    img: 'empanada',
    t: 'Empanadas de pino',
    d: 'El pan de la casa: los que vuelven de Vilches Alto las nombran en las reseñas, una y otra vez.',
  },
  {
    img: 'plato',
    t: 'Colaciones del día',
    d: 'Plato servido con papas y ensalada, como en casa de campo.',
  },
  {
    img: 'sandwich',
    t: 'Sandwiches y completos',
    d: 'Para llevar al camino o comerse en la terraza entre las plantas.',
  },
]

export default function SanSebastianPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.hueso, color: C.ink }}
    >
      <style>{`
        .ss-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .ss-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .ss-btn:active { transform: translateY(0) scale(0.97); }
        .ss-btn:focus-visible { outline: 3px solid ${C.accent}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={`${display.className} font-semibold`}
        theme={{
          over: 'light',
          bar: 'rgba(246,241,228,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.bosque,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero editorial: relato + collage corrido ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[120px] pb-14 md:pb-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.accent }}>
                  Vilches · San Clemente
                </p>
                <h1
                  className={`${display.className} font-semibold leading-[1.02] tracking-tight text-[clamp(2.6rem,7.5vw,4.8rem)]`}
                  style={{ color: C.ink }}
                >
                  La casa donde los que suben a Vilches
                  <em className="font-normal" style={{ color: C.accent }}> se paran a comer</em>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base md:text-lg leading-relaxed max-w-md mt-5 mb-4" style={{ color: C.muted }}>
                  Comida al paso y cabañas en el camino de la cordillera:
                  empanadas de pino, humitas y mote con huesillo, atendidos
                  por sus dueños.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 mb-7 tap-44"
                >
                  <Stars value={4.8} color={C.accent} />
                  <span className={`${mono.className} text-xs md:text-sm font-medium`} style={{ color: C.ink }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </span>
                </a>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} ss-btn text-sm font-semibold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                    style={{ backgroundColor: C.bosque, color: '#FFFFFF' }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href="#cabanas"
                    className={`${mono.className} ss-btn text-sm font-semibold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver las cabañas
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Reveal delay={150}>
                <div className="relative max-w-[480px] mx-auto">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2" style={{ borderColor: C.ink }}>
                    <Image
                      src={`${IMG}/terraza.webp`}
                      alt="Terraza de madera de San Sebastián con plantas colgantes y carteles escritos a mano"
                      fill
                      priority
                      sizes="(min-width: 768px) 44vw, 88vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-4 md:-left-10 w-36 md:w-44 aspect-square overflow-hidden rounded-2xl border-2 shadow-xl rotate-[-4deg]" style={{ borderColor: C.ink, backgroundColor: C.papel }}>
                    <Image
                      src={`${IMG}/empanada.webp`}
                      alt="Empanada de pino recién abierta, con su relleno de carne y cebolla"
                      fill
                      sizes="(min-width: 768px) 14vw, 34vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La casa: relato con foto a todo ancho ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-5">
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.04] tracking-tight`} style={{ color: C.ink }}>
              Un quincho con carteles escritos a mano
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={100}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              La ficha de Google la describe como «comida al paso y cabañas»,
              y las reseñas cuentan el resto: atendida por una pareja de
              abuelitos que recomiendan qué visitar en el sector, con la
              terraza llena de plantas y un letrero de kuchen que se lee
              desde la mesa. {BIZ.priceRange} y {BIZ.hours.toLowerCase()}.
            </p>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden rounded-2xl border-2 mt-10" style={{ borderColor: C.ink }}>
            <Image
              src={`${IMG}/quincho.webp`}
              alt="Quincho techado de San Sebastián: barra de madera, enredaderas y carteles artesanales"
              fill
              sizes="(min-width: 768px) 88vw, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* ── De la cocina: filas editoriales ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.accent }}>
            Fotos reales de su ficha de Google
          </p>
          <h2 className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.4rem)] leading-[1] tracking-tight mb-10`} style={{ color: C.ink }}>
            Lo que sale de la cocina
          </h2>
        </Reveal>
        <div className="space-y-10 md:space-y-14">
          {COCINA.map((p, i) => (
            <Reveal key={p.img} delay={i * 60}>
              <div className="grid grid-cols-12 gap-5 md:gap-8 items-center border-t pt-8 md:pt-10" style={{ borderColor: C.line }}>
                <div className={`col-span-12 md:col-span-5 ${i % 2 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2" style={{ borderColor: C.ink }}>
                    <Image
                      src={`${IMG}/${p.img}.webp`}
                      alt={`${p.t} en San Sebastián, Vilches`}
                      fill
                      sizes="(min-width: 768px) 40vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`col-span-12 md:col-span-7 ${i % 2 ? 'md:order-1' : ''}`}>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`${display.className} font-semibold text-[clamp(1.7rem,3.5vw,2.6rem)] leading-tight tracking-tight`} style={{ color: C.ink }}>
                    {p.t}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mt-3" style={{ color: C.muted }}>
                    {p.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-10`} style={{ color: C.muted }}>
            También humitas y mote con huesillo, según las reseñas · lo del día se pregunta por WhatsApp
          </p>
        </Reveal>
      </section>

      {/* ── Cabañas: banda bosque ── */}
      <section id="cabanas" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: '#D9B36A' }}>
                  Arriendo de cabañas
                </p>
                <h2 className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.4rem)] leading-[1] tracking-tight mb-5`} style={{ color: C.onBosque }}>
                  Y si el camino gana,
                  <em> te quedas a dormir</em>
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(242,238,223,0.8)' }}>
                  Además de la comida al paso, la casa figura en el directorio
                  de Vilches como arriendo de cabañas: interior de madera y
                  cocina equipada, a pasos del sendero.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} ss-btn inline-block text-sm font-semibold uppercase tracking-[0.12em] px-7 py-3 rounded-full mt-7 tap-44`}
                  style={{ backgroundColor: '#D9B36A', color: C.ink }}
                >
                  Consultar cabañas
                </a>
              </Reveal>
            </div>
            <Reveal className="col-span-12 md:col-span-7" delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2" style={{ borderColor: 'rgba(242,238,223,0.35)' }}>
                <Image
                  src={`${IMG}/cabana.webp`}
                  alt="Interior de cabaña de madera en San Sebastián: comedor, sillón y cocina equipada"
                  fill
                  sizes="(min-width: 768px) 56vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: el cuaderno de visitas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-4 md:sticky md:top-24">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.accent }}>
              El cuaderno de visitas
            </p>
            <p className={`${display.className} font-semibold text-[clamp(4rem,8vw,5.5rem)] leading-none`} style={{ color: C.ink }}>
              {BIZ.rating}
            </p>
            <Stars value={4.8} color={C.accent} className="w-5 h-5" />
            <p className={`${mono.className} text-xs mt-3`} style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en Google
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-8">
            <ul>
              {RESENAS.map((r, i) => (
                <Reveal key={r.who} delay={i * 60}>
                  <li className="py-6 border-t first:border-t-0 first:pt-0" style={{ borderColor: C.line }}>
                    <figure>
                      <blockquote className={`${display.className} text-lg md:text-xl leading-snug`} style={{ color: C.ink }}>
                        “{r.text}”
                      </blockquote>
                      <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-3`} style={{ color: C.muted }}>
                        {r.who} · reseña de Google
                      </figcaption>
                    </figure>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={160}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block mt-5 text-xs uppercase tracking-[0.16em] font-semibold underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.ink, textDecorationColor: C.accent }}
              >
                Leerlas todas en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Llegar: sobre el camino ── */}
      <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-5 flex flex-col">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.accent }}>
              Sobre el camino a Vilches
            </p>
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.2rem)] leading-[1.02] tracking-tight mb-5`} style={{ color: C.ink }}>
              A la vuelta de la ruta, antes de subir
            </h2>
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
              {BIZ.hours} · {BIZ.priceRange}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ss-btn text-sm font-semibold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.bosque, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ss-btn text-sm font-semibold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir en Maps
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
      <footer style={{ borderTop: `1px solid ${C.line}`, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-semibold text-xl leading-tight`}>{BIZ.name}</p>
          <address className="not-italic text-xs leading-relaxed mt-1" style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:+${BIZ.phone}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.muted }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos, reseñas y precios referenciales de su
            ficha de Google; la disponibilidad se confirma por WhatsApp.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.accent }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
