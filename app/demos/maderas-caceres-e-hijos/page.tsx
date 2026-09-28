import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_COTIZA, MAPS_URL, MAPS_EMBED, IMG, HORAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  cream: '#F4EFE3',
  sawdust: '#EDE6DA',
  ink: '#2B1A10',
  muted: '#6B5B4C',
  bosque: '#1E3D2F',
  bosqueDeep: '#152B21',
  line: 'rgba(43,26,16,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'maderas-caceres-e-hijos',
  title: 'Maderas Cáceres — Ferretería y maderas en San Clemente',
  description: 'Ferretería, maderas y materiales de construcción en Carlos Silva Renard, San Clemente. Corta de madera y transporte. Cotiza por WhatsApp.',
  image: `${IMG}/entrada.webp`,
})

const NAV_LINKS = [
  { label: 'El surtido', href: '#surtido' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'La casa', href: '#casa' },
  { label: 'Horario', href: '#contacto' },
]

const SURTIDO = [
  {
    title: 'Maderas',
    desc: 'El giro de la casa: servicios de corta de madera y venta para la obra y el huerto. Se cotiza por medida y por proyecto.',
    icon: 'plank' as const,
  },
  {
    title: 'Ferretería',
    desc: 'El surtido de ferretería de la tienda: lo que se necesita para reparar, amarrar, cortar y armar en el campo y la casa.',
    icon: 'hammer' as const,
  },
  {
    title: 'Materiales de construcción',
    desc: 'Venta de materiales para la construcción, en mostrador y por pedido. La lista de disponible se confirma por WhatsApp.',
    icon: 'brick' as const,
  },
  {
    title: 'Transporte de carga',
    desc: 'También mueven: giro de transporte de carga por carretera, para llevar los materiales y la madera a donde se necesita.',
    icon: 'truck' as const,
  },
]

const FOTOS = [
  { src: `${IMG}/entrada.webp`, alt: 'Entrada de la ferretería Maderas Cáceres con portón negro y pórtico de madera', cap: 'La entrada, en Carlos Silva Renard' },
  { src: `${IMG}/calle.webp`, alt: 'Fachada de ladrillo con letrero metálico de la ferretería, vista desde la calle', cap: 'La fachada desde la calle' },
  { src: `${IMG}/interior.webp`, alt: 'Interior del pórtico de la tienda con paredes de madera y atención al público', cap: 'El pórtico de la tienda' },
  { src: `${IMG}/letrero.webp`, alt: 'Detalle del letrero con letras metálicas sobre la fachada de ladrillo', cap: 'El letrero, de cerca' },
]

function Icon({ kind, className = 'w-7 h-7' }: { kind: (typeof SURTIDO)[number]['icon']; className?: string }) {
  const stroke = { strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (kind) {
    case 'plank':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true" {...stroke}>
          <path d="M3 17.5 18.5 6.5l2.5 1.5-15.5 11L3 17.5Z" />
          <path d="M7.5 15.5 9.5 17M11 13l2 1.5M14.5 10.5l2 1.5" />
        </svg>
      )
    case 'hammer':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true" {...stroke}>
          <path d="M11 8.5 8 11.5l2 2 7.5-7.5L14.5 3l-2 2" />
          <path d="M11 8.5 18 13.5l2-2-3.5-3.5" />
          <path d="m8 14-5.5 5.5 2.5 2.5L10.5 16.5" />
        </svg>
      )
    case 'brick':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true" {...stroke}>
          <rect x="3" y="9" width="18" height="10" />
          <path d="M3 14h18M9 9v5M15 9v5M6 14v5M12 14v5M18 14v5" />
        </svg>
      )
    case 'truck':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true" {...stroke}>
          <path d="M2 6h12v9H2zM14 9h4l4 4v2h-4" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 18h8" />
        </svg>
      )
  }
}

/** Diente de sierra: borde triangular entre secciones, el motivo del demo. */
function SawEdge({ flip = false, color }: { flip?: boolean; color: string }) {
  const teeth = 30
  const w = 100 / teeth
  const pts: string[] = ['0,0']
  for (let i = 0; i < teeth; i++) {
    pts.push(`${(i + 0.5) * w},16`)
    pts.push(`${(i + 1) * w},0`)
  }
  pts.push('100,0')
  return (
    <div className={`w-full h-4 overflow-hidden ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-full block">
        <polygon points={pts.join(' ')} fill={color} />
      </svg>
    </div>
  )
}

export default function MaderasCaceresPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        .cx-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .cx-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .cx-btn:active { transform: translateY(0) scale(0.97); }
        .cx-btn:focus-visible { outline: 3px solid ${C.ink}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,239,227,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.bosque,
          btnInk: '#F4EFE3',
        }}
      />

      {/* ── Hero: titular bloque + foto de la entrada ── */}
      <section id="inicio" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-[104px] pb-12 md:pb-16">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <p
                  className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-6 flex items-center gap-3`}
                  style={{ color: C.bosque }}
                >
                  <span className="inline-block w-8 border-t" style={{ borderColor: C.bosque }} aria-hidden="true" />
                  Ferretería y maderas · desde {BIZ.since}
                </p>
                <h1
                  className={`${display.className} uppercase leading-[0.95] tracking-[0.005em] text-[clamp(3rem,9.5vw,6.8rem)] mb-6`}
                >
                  La madera
                  <br />
                  del{' '}
                  <span style={{ color: C.bosque }}>barrio</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-9 font-medium" style={{ color: C.muted }}>
                  Ferretería, madera cortada y materiales de construcción
                  en San Clemente. La casa de la familia Cáceres, con
                  sucursal en Mariposas y transporte propio.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_COTIZA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} cx-btn uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 tap-44`}
                    style={{ backgroundColor: C.bosque, color: '#F4EFE3' }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href="#surtido"
                    className={`${display.className} cx-btn uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 border-2 hover:bg-black/5 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver el surtido
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="col-span-12 lg:col-span-6" delay={140}>
              <div className="relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Entrada de la ferretería Maderas Cáceres: pórtico con pilares de madera, portón negro y camioneta estacionada"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                {BIZ.address} · foto de Google Street View, may 2024
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <SawEdge color={C.bosqueDeep} />

      {/* ── El surtido ── */}
      <section id="surtido" className="scroll-mt-0" style={{ backgroundColor: C.bosqueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5`} style={{ color: '#C8A24B' }}>
              El surtido
            </p>
            <h2
              className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,6vw,4.8rem)] mb-6`}
              style={{ color: C.cream }}
            >
              Cuatro frentes,
              <br />
              un mostrador
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-medium" style={{ color: 'rgba(244,239,227,0.75)' }}>
              Estos son los giros reales inscritos de la sociedad. La
              lista exacta de stock y medidas se confirma directo por
              WhatsApp, como siempre se ha hecho.
            </p>
          </Reveal>
          <ul className="grid grid-cols-12 gap-5 md:gap-7">
            {SURTIDO.map((s, i) => (
              <Reveal key={s.title} className="col-span-12 md:col-span-6" delay={i * 90}>
                <li className="h-full border p-6 md:p-7" style={{ borderColor: 'rgba(244,239,227,0.25)', backgroundColor: 'rgba(244,239,227,0.05)' }}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: C.cream }}>
                      {s.title}
                    </h3>
                    <span style={{ color: '#C8A24B' }}>
                      <Icon kind={s.icon} />
                    </span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(244,239,227,0.72)' }}>
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SawEdge flip color={C.bosqueDeep} />

      {/* ── La tienda en fotos (Street View, etiquetado) ── */}
      <section id="tienda" className="scroll-mt-20" style={{ backgroundColor: C.sawdust }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,6vw,4.8rem)] mb-6`}>
              Así se ve
              <br />
              <span style={{ color: C.bosque }}>la tienda</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-3 font-medium" style={{ color: C.muted }}>
              La ficha de Google no tiene fotos de clientes, así que estas
              son las tomas reales de Google Street View de mayo 2024:
              el pórtico de madera, el portón y el letrero en la fachada
              de ladrillo.
            </p>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-7 mt-10">
            {FOTOS.map((f, i) => (
              <Reveal
                key={f.src}
                className={`col-span-6 ${i === 0 || i === 3 ? 'md:col-span-7' : 'md:col-span-5'} ${i === 1 ? 'md:mt-10' : ''} ${i === 2 ? 'md:mt-10' : ''}`}
                delay={i * 80}
              >
                <figure>
                  <div className="relative overflow-hidden border aspect-[4/3]" style={{ borderColor: C.ink }}>
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 55vw, 50vw" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {f.cap} · Street View 05/2024
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SawEdge color={C.sawdust} />

      {/* ── La casa: datos duros, sin reseñas ── */}
      <section id="casa" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 md:gap-14">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,6vw,4.8rem)] mb-6`}>
                  La casa de
                  <br />
                  <span style={{ color: C.bosque }}>los Cáceres</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed max-w-md font-medium" style={{ color: C.muted }}>
                  Sociedad familiar inscrita en 2015, con la casa matriz
                  en Carlos Silva Renard y una sucursal en el sector de
                  Mariposas. Quien atiende el WhatsApp es la misma gente
                  del mostrador.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={120}>
                <dl className={`${mono.className} border-t-2`} style={{ borderColor: C.ink }}>
                  {[
                    { k: 'En funcionamiento', v: `desde ${BIZ.since}` },
                    { k: 'Casa central', v: 'Carlos Silva Renard, San Clemente' },
                    { k: 'Sucursal', v: 'Mariposas, San Clemente' },
                    { k: 'Giros', v: 'Ferretería · maderas · construcción · carga' },
                  ].map((row) => (
                    <div key={row.k} className="grid grid-cols-12 gap-3 py-4 border-b border-dashed" style={{ borderColor: C.line }}>
                      <dt className="col-span-5 text-[11px] uppercase tracking-[0.16em] pt-1" style={{ color: C.muted }}>
                        {row.k}
                      </dt>
                      <dd className="col-span-7 text-sm md:text-base font-bold" style={{ color: C.ink }}>
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-xs leading-relaxed mt-5" style={{ color: C.muted }}>
                  La ficha de Google no tiene reseñas todavía: el negocio
                  se mueve por el boca a boca de siempre. Por eso esta
                  página se construye sobre los datos confirmados del
                  registro y del mostrador, no sobre estrellas.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Horario y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <SawEdge color={C.bosque} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-14 items-stretch">
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <Reveal>
                <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,6vw,4.8rem)] mb-8`} style={{ color: C.cream }}>
                  ¿Cuándo
                  <br />
                  pasar?
                </h2>
                <ul className="divide-y mb-8" style={{ borderColor: 'rgba(244,239,227,0.22)' }}>
                  {HORAS.map((h) => (
                    <li key={h.d} className="py-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1" style={{ borderColor: 'rgba(244,239,227,0.22)' }}>
                      <span className="text-sm md:text-base font-semibold" style={{ color: C.cream }}>{h.d}</span>
                      <span className={`${mono.className} text-xs md:text-sm`} style={{ color: h.h === 'Cerrado' ? '#C8A24B' : 'rgba(244,239,227,0.72)' }}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8 font-medium" style={{ color: 'rgba(244,239,227,0.88)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
                </address>
                <a
                  href={WA_LINK_COTIZA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} cx-btn inline-block uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.cream, color: C.bosqueDeep }}
                >
                  Cotizar por WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 min-w-0">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]" style={{ borderColor: 'rgba(244,239,227,0.35)' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.short}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.bosqueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-lg md:text-xl mb-2`} style={{ color: C.cream }}>{BIZ.short}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,227,0.6)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            Sucursal en Mariposas
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(244,239,227,0.68)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos son reales y salen de su ficha de
            Google y del registro mercantil; las fotos son de Google
            Street View, mayo 2024.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#C8A24B' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
