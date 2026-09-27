import type { Metadata } from 'next'
import Image from 'next/image'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { Vitrina } from './vitrina'
import { BIZ, WA_LINK, waLinkServicio, IG_URL, MAPS_URL, MAPS_EMBED, IMG, C, HAZARD } from './content'

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Girls House Estética — Centro de estética en Molina',
  description:
    'Centro de estética en Quechereguas 2120, Molina. Maquillaje, cejas, pestañas y faciales con precios claros y hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El local', href: '#el-local' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SPECS = [
  { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
  { k: 'Atención', v: 'Con hora, por WhatsApp' },
  { k: 'Quién atiende', v: 'Vale, la dueña — la misma del Instagram' },
  { k: 'Instagram', v: `@${BIZ.instagram} · ${BIZ.instagramFollowers} seguidores` },
  { k: 'Reseñas en Google', v: 'Aún sin reseñas — la ficha recién se está armando' },
]

const PRICES = [
  { name: 'Limpieza facial profunda', price: '$25.000' },
  { name: 'Depilación facial con hilo', price: '$6.000' },
  { name: 'Lifting de pestañas + tinte', price: '$18.000' },
  { name: 'Retoque de lifting (4 semanas)', price: '$10.000' },
  { name: 'Perfilado y diseño de cejas', price: '$8.000', before: '$10.000' },
  { name: 'Maquillaje social', price: '$30.000' },
  { name: 'Pack novia (prueba + día)', price: '$79.000', before: '$95.000' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.signal : C.ink }}
    >
      <span className="inline-block w-8 h-[3px]" style={{ background: HAZARD }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function GirlsHousePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      {/* ── Escaparate (el nav fijo va dentro: flota sobre este fondo oscuro) ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(23,24,26,0.95)',
            ink: '#FFFFFF',
            line: 'rgba(255,255,255,0.14)',
            btnBg: C.signal,
            btnInk: C.ink,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #8A9199 0 1px, transparent 1px 96px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-20 md:pb-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 md:gap-16 items-center">
          <Reveal>
            <Eyebrow light>Centro de estética · Molina · Maule</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.02em] text-[clamp(2.9rem,9vw,5.8rem)] mb-6 uppercase`}
              style={{ color: '#FFFFFF' }}
            >
              Trabajo fino,
              <br />
              <span style={{ color: C.signal }}>precio claro.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Maquillaje, cejas, pestañas y faciales en {BIZ.address},{' '}
              {BIZ.city}. Cada servicio con su ficha: qué incluye, cuánto
              dura y qué vale. Sin letra chica.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-transform active:scale-95 uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC300]`}
                style={{ backgroundColor: C.signal, color: C.ink }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC300]`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver la vitrina
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <li>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @{BIZ.instagram} · {BIZ.instagramFollowers} seguidores
                </a>
              </li>
              <li>{BIZ.address}, {BIZ.city}</li>
              <li style={{ color: C.signal }}>Sitio de ejemplo · precios de muestra</li>
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              {/* marco de la vitrina */}
              <div
                className="border-2 p-2 md:p-2.5"
                style={{
                  borderColor: 'rgba(255,255,255,0.28)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}
              >
                <div className="flex items-baseline justify-between gap-3 px-1.5 pb-2.5">
                  <p
                    className={`${display.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.24em]`}
                    style={{ color: C.signal }}
                  >
                    Girls House
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {BIZ.address} · {BIZ.city}
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Sala de atención de Girls House Estética: camilla, lámpara de trabajo y vista a la calle de Molina"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  {/* reflejo del vidrio */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.10) 48%, rgba(255,255,255,0.04) 54%, transparent 60%)',
                    }}
                  />
                  <span
                    className="absolute top-0 right-5 text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5"
                    style={{ background: HAZARD, color: C.signal, textShadow: '0 1px 0 #17181A' }}
                  >
                    Oferta
                  </span>
                </div>
                <div style={{ background: HAZARD, height: '6px' }} aria-hidden="true" />
              </div>
              {/* etiqueta de precio */}
              <div
                className="absolute -bottom-5 left-3 md:left-5 -rotate-2 shadow-xl"
                style={{ backgroundColor: C.signal, color: C.ink }}
              >
                <div className="flex items-stretch">
                  <span
                    className="flex items-center px-2.5 border-r border-dashed"
                    style={{ borderColor: 'rgba(23,24,26,0.35)' }}
                    aria-hidden="true"
                  >
                    <span className="block w-2 h-2 rounded-full border-2" style={{ borderColor: C.ink }} />
                  </span>
                  <span className="block px-3.5 py-2.5">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.2em] mb-1">
                      Lifting de pestañas
                    </span>
                    <span className={`${display.className} block text-xl md:text-2xl font-extrabold leading-none`}>
                      $18.000
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de precios ── */}
      <section aria-label="Servicios y precios de muestra" style={{ backgroundColor: C.signal }}>
        <ul
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-3.5 flex flex-wrap justify-center gap-x-6 gap-y-2`}
        >
          {PRICES.map((p) => (
            <li
              key={p.name}
              className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.12em]"
              style={{ color: C.ink }}
            >
              <span>{p.name}</span>
              <span className="px-2 py-0.5" style={{ backgroundColor: C.ink, color: C.signal }}>
                {p.price}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La vitrina</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.ink }}>
              Servicios, como
              <br />
              en la vitrina
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.steel }}>
              Cada servicio con su código, su duración y su precio. Los
              valores son de muestra: al publicar van los precios reales
              del centro.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Vitrina fontClass={display.className} />
        </Reveal>
      </section>

      {/* ── Ficha del local ── */}
      <section id="el-local" className="scroll-mt-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de Girls House Estética en Quechereguas, Molina: vitrina encendida al atardecer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-3 left-4 md:left-6 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-2"
                style={{ background: HAZARD, color: C.signal, textShadow: '0 1px 0 #17181A' }}
              >
                Quechereguas 2120
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El local</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              Atención directa,
              <br />
              <span style={{ color: C.steel }}>sin intermediarios</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.steel }}>
              Girls House Estética es el centro de Vale en pleno Molina:
              la misma persona que responde el WhatsApp es la que te
              atiende. El trabajo se muestra tal cual en
              @{BIZ.instagram}, donde ya la siguen {BIZ.instagramFollowers}
              personas.
            </p>
            <dl className="border-t" style={{ borderColor: C.line }}>
              {SPECS.map((s) => (
                <div
                  key={s.k}
                  className="flex items-baseline justify-between gap-4 py-3 border-b border-dashed"
                  style={{ borderColor: C.line }}
                >
                  <dt className="text-[11px] uppercase tracking-[0.18em] font-semibold shrink-0" style={{ color: C.steel }}>
                    {s.k}
                  </dt>
                  <dd className="text-sm md:text-base font-medium text-right" style={{ color: C.ink }}>
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Lista de precios ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow light>Lista de precios</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: '#FFFFFF' }}>
                Todo con
                <br />
                <span style={{ color: C.signal }}>su valor</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm mb-7" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Valores de referencia para este ejemplo. Los precios
                reales, los horarios y las promociones vigentes se
                confirman por WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-sm px-7 py-3.5 uppercase tracking-wide transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC300]`}
                style={{ backgroundColor: C.signal, color: C.ink }}
              >
                Consultar valor real
              </a>
            </Reveal>
            <Reveal delay={120}>
              <ul className="border-t" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                {PRICES.map((p) => (
                  <li key={p.name}>
                    <a
                      href={waLinkServicio(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-3 py-2.5 md:py-4 px-2 -mx-2 border-b border-dashed transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC300]"
                      style={{ borderColor: 'rgba(255,255,255,0.18)' }}
                    >
                      <span className="text-sm md:text-base font-medium transition-transform group-hover:translate-x-1" style={{ color: '#FFFFFF' }}>
                        {p.name}
                      </span>
                      <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: 'rgba(138,145,153,0.5)' }} aria-hidden="true" />
                      {p.before && (
                        <span className="text-xs line-through" style={{ color: C.steelDark }}>
                          {p.before}
                        </span>
                      )}
                      <span className={`${display.className} text-xl md:text-2xl font-extrabold`} style={{ color: C.signal }}>
                        {p.price}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em]" style={{ color: C.steelDark }}>
                Lista de muestra · toca un servicio para reservarlo por WhatsApp
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.signal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Pedidos y horas</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] mb-6`} style={{ color: C.ink }}>
              Se agenda
              <br />
              por WhatsApp
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(23,24,26,0.75)' }}>
              Escríbenos con el servicio que te interesa y te confirmamos
              hora el mismo día. Si prefieres, ven a conocer el local:
              estamos en {BIZ.address}, {BIZ.city}.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 uppercase tracking-wide transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17181A]`}
                style={{ backgroundColor: C.ink, color: C.signal }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 uppercase tracking-wide border-2 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17181A]`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                @{BIZ.instagram}
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(23,24,26,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="h-full min-h-[320px] border-4" style={{ borderColor: C.ink }}>
              <iframe
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px] grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0E0F11', color: '#FFFFFF' }}>
        <div style={{ background: HAZARD, height: '4px' }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-16 flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className={`${display.className} font-extrabold uppercase text-lg`}>
              {BIZ.name}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs" style={{ color: C.steelDark }}>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @{BIZ.instagram}
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Cómo llegar
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: servicios y precios de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.signal }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
