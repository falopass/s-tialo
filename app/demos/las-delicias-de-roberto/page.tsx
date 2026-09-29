import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, VALES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  papel: '#FBF6EC',
  papelAlt: '#F1E9D8',
  petroleo: '#0E4C5C',
  petroleoInk: '#0A3641',
  sello: '#C0392B',
  tinta: '#23201B',
  muted: '#5D5647',
  linea: 'rgba(35,32,27,0.2)',
  papelSoft: 'rgba(251,246,236,0.72)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'las-delicias-de-roberto',
  title: 'Las Delicias de Roberto — Restaurant en Cauquenes',
  description:
    'Restaurant de almuerzo en Victoria 453, frente a la Plaza de Cauquenes. Reciben Junaeb, Sodexo, Amipass y Ticket Restaurant. Pedidos por WhatsApp.',
  image: '/demos/las-delicias-de-roberto/fachada.webp',
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Vales', href: '#vales' },
  { label: 'El local', href: '#local' },
]

/** Pizarra de muestra — la carta real no está publicada. */
const PIZARRA = [
  { plato: 'Cazuela de ave o vacuno', nota: 'la que no falta' },
  { plato: 'Pastel de choclo', nota: 'clásico de la casa' },
  { plato: 'Pescado frito con ensalada', nota: 'de temporada' },
  { plato: 'Porotos con rienda', nota: 'plato de fondo' },
  { plato: 'Ensalada chilena', nota: 'fresca del día' },
  { plato: 'Postre y té o café', nota: 'para cerrar' },
]

function TicketRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-dashed last:border-b-0" style={{ borderColor: 'rgba(251,246,236,0.3)' }}>
      {children}
    </div>
  )
}

export default function DeliciasDeRobertoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        .ro-btn { transition: transform 0.16s ease, box-shadow 0.16s ease; }
        .ro-btn:hover { transform: translateY(-2px); }
        .ro-btn:active { transform: scale(0.98); }
        .ro-btn:focus-visible { outline: 3px solid ${C.sello}; outline-offset: 3px; }
        .ro-vale { transition: transform 0.2s ease; }
        .ro-vale:hover { transform: rotate(0deg) scale(1.04) !important; }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(251,246,236,0.96)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.petroleo,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero: titular + ticket ── */}
      <section id="inicio" className="max-w-6xl mx-auto px-5 md:px-8 pt-[100px] md:pt-[124px] pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <p
                className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.3em] mb-5 flex items-center gap-3`}
                style={{ color: C.sello }}
              >
                <span className="inline-block w-8 h-px" style={{ backgroundColor: C.sello }} aria-hidden="true" />
                {BIZ.rubro} · {BIZ.city}, Maule
              </p>
              <h1
                className={`${display.className} uppercase leading-[0.98] text-[clamp(2.4rem,8vw,5.4rem)]`}
                style={{ color: C.petroleoInk }}
              >
                El almuerzo de siempre,
                <br />
                <span style={{ color: C.sello }}>frente a la plaza</span>
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
                {BIZ.name} atiende en {BIZ.address}, {BIZ.frente}. Comida
                casera de todos los días y la comodidad de pagar con tu
                vale de almuerzo.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ro-btn uppercase tracking-wide text-sm md:text-base px-7 py-3 border-2 tap-44`}
                  style={{ backgroundColor: C.sello, color: '#FFFFFF', borderColor: C.petroleoInk }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#pizarra"
                  className={`${display.className} ro-btn uppercase tracking-wide text-sm md:text-base px-7 py-3 border-2 tap-44`}
                  style={{ color: C.petroleoInk, borderColor: C.petroleoInk }}
                >
                  Ver la pizarra
                </a>
              </div>
            </Reveal>
          </div>
          {/* ticket del día */}
          <div className="col-span-12 md:col-span-5">
            <Reveal delay={140}>
              <div
                className="relative border-2 p-5 md:p-6"
                style={{
                  backgroundColor: C.papelAlt,
                  borderColor: C.tinta,
                  boxShadow: '7px 8px 0 rgba(14,76,92,0.9)',
                  transform: 'rotate(-1.2deg)',
                }}
              >
                <p className={`${mono.className} text-center text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
                  * * * ticket del día * * *
                </p>
                <div className="relative w-full aspect-[16/10] my-4 overflow-hidden border" style={{ borderColor: C.tinta }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Las Delicias de Roberto con su letrero en Victoria, Cauquenes"
                    fill
                    priority
                    sizes="(min-width: 768px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <dl className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.12em] space-y-2`} style={{ color: C.tinta }}>
                  <div className="flex justify-between gap-4 border-b border-dashed pb-2" style={{ borderColor: C.linea }}>
                    <dt style={{ color: C.muted }}>Local</dt>
                    <dd className="font-semibold text-right">{BIZ.address}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-dashed pb-2" style={{ borderColor: C.linea }}>
                    <dt style={{ color: C.muted }}>Ubicación</dt>
                    <dd className="font-semibold text-right">Frente a la plaza</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-dashed pb-2" style={{ borderColor: C.linea }}>
                    <dt style={{ color: C.muted }}>Vales</dt>
                    <dd className="font-semibold text-right">Sí, todos</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt style={{ color: C.muted }}>Pedidos</dt>
                    <dd className="font-semibold text-right">{BIZ.phoneDisplay}</dd>
                  </div>
                </dl>
                <p className={`${mono.className} text-center text-[10px] uppercase tracking-[0.3em] mt-4`} style={{ color: C.muted }}>
                  * * * gracias, vuelva * * *
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Vales: del letrero real ── */}
      <section id="vales" className="scroll-mt-20 border-y-2" style={{ backgroundColor: C.papelAlt, borderColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12">
          <Reveal>
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 md:col-span-5">
                <h2 className={`${display.className} uppercase leading-tight text-[clamp(1.5rem,4vw,2.4rem)]`} style={{ color: C.petroleoInk }}>
                  Aquí almuerzas
                  <br />
                  <span style={{ color: C.sello }}>con tu vale</span>
                </h2>
                <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Como dice su propio letrero de bienvenida, en el local
                  reciben los vales de almuerzo más usados.
                </p>
              </div>
              <div className="col-span-12 md:col-span-7 flex flex-wrap gap-2.5 md:gap-3 md:justify-end">
                {VALES.map((v, i) => (
                  <span
                    key={v}
                    className={`${display.className} ro-vale uppercase text-sm md:text-base px-4 py-2 border-2`}
                    style={{
                      color: C.petroleoInk,
                      borderColor: C.petroleo,
                      backgroundColor: C.papel,
                      transform: `rotate(${i % 2 === 0 ? -1.4 : 1.2}deg)`,
                      boxShadow: '3px 4px 0 rgba(14,76,92,0.5)',
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="mt-8 max-w-2xl mx-auto">
              <div className="relative w-full aspect-[16/9] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/bienvenida.webp`}
                  alt="Letrero de bienvenida de Las Delicias de Roberto con los logos de los vales que reciben"
                  fill
                  sizes="(min-width: 768px) 640px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em] text-center`} style={{ color: C.muted }}>
                el letrero de bienvenida del local — foto real
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La pizarra (de muestra) ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.petroleo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.3em] mb-4`} style={{ color: C.papelSoft }}>
                restaurante · menú del día
              </p>
              <h2 className={`${display.className} uppercase leading-[0.98] text-[clamp(2.2rem,6vw,4.4rem)]`} style={{ color: C.papel }}>
                La pizarra
              </h2>
              <span
                className={`${mono.className} inline-block mt-5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2 border-2`}
                style={{ color: '#FFD9A0', borderColor: '#FFD9A0', transform: 'rotate(-1deg)' }}
              >
                Carta de muestra — la del día se confirma por WhatsApp
              </span>
            </div>
          </Reveal>
          <div className="max-w-2xl mx-auto border-2 p-1.5" style={{ borderColor: 'rgba(251,246,236,0.5)' }}>
            <div className="border border-dashed p-6 md:p-8" style={{ borderColor: 'rgba(251,246,236,0.45)' }}>
              {PIZARRA.map((p, i) => (
                <Reveal key={p.plato} delay={i * 70}>
                  <TicketRow>
                    <div className="flex items-baseline justify-between gap-4 py-3.5">
                      <p className={`${display.className} uppercase text-base md:text-xl tracking-wide`} style={{ color: C.papel }}>
                        {p.plato}
                      </p>
                      <span className={`${mono.className} shrink-0 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.papelSoft }}>
                        {p.nota}
                      </span>
                    </div>
                  </TicketRow>
                </Reveal>
              ))}
              <Reveal delay={430}>
                <p className={`${mono.className} text-center text-xs md:text-sm uppercase tracking-[0.2em] pt-6`} style={{ color: C.papel }}>
                  El menú y el precio del día
                  <br className="md:hidden" /> se avisan por WhatsApp
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={200}>
            <p className="text-center mt-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ro-btn inline-block uppercase tracking-wide text-sm md:text-base px-7 py-3 border-2 tap-44`}
                style={{ backgroundColor: C.sello, color: '#FFFFFF', borderColor: C.papel }}
              >
                Preguntar qué hay hoy
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.3em] mb-4 flex items-center gap-3`} style={{ color: C.sello }}>
            <span className="inline-block w-8 h-px" style={{ backgroundColor: C.sello }} aria-hidden="true" />
            dónde queda
          </p>
          <h2 className={`${display.className} uppercase leading-[0.98] text-[clamp(2rem,6vw,4rem)] mb-10`} style={{ color: C.petroleoInk }}>
            Victoria 453, <span style={{ color: C.sello }}>Cauquenes</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="border-2 p-5" style={{ backgroundColor: C.papelAlt, borderColor: C.tinta, boxShadow: '6px 7px 0 rgba(14,76,92,0.9)' }}>
              <address className="not-italic">
                <p className={`${display.className} uppercase text-xl leading-tight`} style={{ color: C.petroleoInk }}>
                  {BIZ.address}
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-2`} style={{ color: C.muted }}>
                  {BIZ.city} · {BIZ.region}
                  <br />
                  {BIZ.frente}
                </p>
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-4 text-sm font-semibold underline underline-offset-4 tap-44`} style={{ color: C.sello }}>
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
            <figure className="mt-6">
              <div className="relative w-full aspect-[16/9] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/plaza.webp`}
                  alt="Plaza de Cauquenes frente al restaurante, con sus árboles y bandejas"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                la plaza, al cruzar la calle — foto real
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <div className="border-2 p-2.5" style={{ backgroundColor: C.papelAlt, borderColor: C.tinta, boxShadow: '6px 7px 0 rgba(14,76,92,0.9)' }}>
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden border" style={{ borderColor: C.tinta }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.petroleoInk, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-11 w-11 rounded-full object-cover border-2" style={{ borderColor: C.sello }} aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-base leading-tight`}>{BIZ.name}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.papelSoft }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-semibold underline underline-offset-4 tap-44`} style={{ color: '#FFD9A0' }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,246,236,0.16)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(251,246,236,0.62)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. La pizarra es de muestra: los platos del día se confirman por WhatsApp.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFD9A0' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
