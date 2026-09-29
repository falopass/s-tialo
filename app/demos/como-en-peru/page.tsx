import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { BIZ, IMG, MAPS_EMBED, MAPS_URL, PLATOS, RESENAS, WA_LINK } from './content'

// El globals.css del sitio redefinió --spacing-5..12; se restauran a los
// valores estándar de Tailwind solo dentro de este demo.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
)

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--f-disp',
})
const body = localFont({
  src: [{ path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-mono',
})

export const metadata: Metadata = demoMetadata({
  slug: 'como-en-peru',
  title: 'Como en Perú — Restaurant peruano en San Javier',
  description:
    'Ceviche, lomo saltado y pisco sour en Miraflores 1315, San Javier. 4,4 estrellas en Google. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

// Paleta desde los activos reales: marco amarillo de la entrada, magenta de las
// lámparas corazón, mantel burdeos, madera oscura y papel crema.
const C = {
  papel: '#FAF1DE',
  papelOsc: '#F2E3C4',
  ink: '#241210',
  muted: '#6E4A3E',
  magenta: '#A8194B',
  ambar: '#DF8F1F',
  ocru: '#7A4416',
  line: 'rgba(36,18,16,0.16)',
}

// Cenefa de aguayo: la manta a rayas que lleva la alpaca de la entrada.
const AGUAYO =
  'repeating-linear-gradient(90deg,' +
  '#A8194B 0px,#A8194B 10px,' +
  '#DF8F1F 10px,#DF8F1F 18px,' +
  '#1F7A6E 18px,#1F7A6E 26px,' +
  '#C94F7C 26px,#C94F7C 36px,' +
  '#7A4416 36px,#7A4416 42px,' +
  '#DF8F1F 42px,#DF8F1F 50px)'

function Cenefa({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className="h-2.5 w-full"
      style={{ background: AGUAYO, transform: flip ? 'scaleX(-1)' : undefined }}
    />
  )
}

export default function Page() {
  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink, fontFamily: 'var(--f-body)' }}
    >
      <style>{`
        .per-btn{transition:transform .16s ease,box-shadow .16s ease,background-color .16s ease}
        .per-btn:hover{transform:translateY(-2px)}
        .per-btn:active{transform:translateY(0)}
        .per-btn:focus-visible{outline:3px solid ${C.ambar};outline-offset:2px}
        .per-plato{scroll-snap-align:start}
        .per-scroller{scrollbar-width:none}
        .per-scroller::-webkit-scrollbar{display:none}
      `}</style>

      <BlitzNav
        name={
          <span className="uppercase tracking-wide text-xl md:text-2xl" style={{ fontFamily: 'var(--f-disp)', fontWeight: 800 }}>
            {BIZ.name}
          </span>
        }
        links={[
          { href: '#platos', label: 'Platos' },
          { href: '#la-casa', label: 'La casa' },
          { href: '#resenas', label: 'Reseñas' },
          { href: '#ubicacion', label: 'Ubicación' },
        ]}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(250,241,222,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.magenta,
          btnInk: '#FFF6E6',
        }}
      />

      {/* ── Hero: papel crema, cenefa de aguayo y foto en arco ── */}
      <header className="relative overflow-hidden">
        <Cenefa />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-8 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.variable} inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] px-3 py-2 rounded-full border tap-44`}
                style={{ fontFamily: 'var(--f-mono)', borderColor: C.line, color: C.magenta }}
              >
                {BIZ.rating} ★ · {BIZ.reviews} reseñas en Google
              </a>
            </Reveal>
            <Reveal delay={90}>
              <h1
                className="uppercase leading-[0.92] mt-6"
                style={{
                  fontFamily: 'var(--f-disp)',
                  fontWeight: 800,
                  fontSize: 'clamp(3rem, 9.4vw, 6.8rem)',
                }}
              >
                como en Perú,
                <br />
                <span style={{ color: C.magenta }}>pero en</span>
                <br />
                <span style={{ color: C.ocru }}>San Javier</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Ceviche, lomo saltado y ají de gallina en {BIZ.address}, a pasos
                del centro. La cocina peruana con más reseñas de la comuna.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="per-btn inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-bold uppercase tracking-wide tap-44"
                  style={{ backgroundColor: C.magenta, color: C.papel }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#platos"
                  className="per-btn inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-bold uppercase tracking-wide border-2 tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver los platos
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-5" delay={120}>
            <div
              className="relative mx-auto max-w-[340px] md:max-w-none aspect-[4/5] overflow-hidden"
              style={{ borderRadius: '200px 200px 12px 12px', boxShadow: '0 18px 44px rgba(36,18,16,0.28)' }}
            >
              <Image
                src={`${IMG}/hero.webp`}
                alt="Salón de Como en Perú con lámparas colgantes, plantas y mesas de madera"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div
          className={`${mono.variable} border-t px-5 py-3 flex flex-wrap gap-x-6 gap-y-1 text-[11px] md:text-xs uppercase tracking-[0.16em]`}
          style={{ fontFamily: 'var(--f-mono)', borderColor: C.line, color: C.muted }}
        >
          <span>{BIZ.address} · {BIZ.city}</span>
          <span>abre a las 13:00</span>
          <span>cocina peruana</span>
        </div>
      </header>

      {/* ── Platos: riel horizontal que se arrastra ── */}
      <section id="platos" className="scroll-mt-20 pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8 md:mb-10 flex items-end justify-between gap-6">
          <Reveal>
            <h2
              className="uppercase leading-[0.9]"
              style={{ fontFamily: 'var(--f-disp)', fontWeight: 800, fontSize: 'clamp(2.4rem, 6.5vw, 4.6rem)' }}
            >
              lo que cruza
              <br />
              <span style={{ color: C.magenta }}>la cordillera</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p
              className={`${mono.variable} hidden md:block text-xs uppercase tracking-[0.16em] pb-2`}
              style={{ fontFamily: 'var(--f-mono)', color: C.muted }}
            >
              desliza para ver la carta →
            </p>
          </Reveal>
        </div>
        <div className="per-scroller flex gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-4">
          {PLATOS.map((p, i) => (
            <article
              key={p.nombre}
              className="per-plato shrink-0 w-[270px] md:w-[330px] rounded-xl overflow-hidden border"
              style={{ borderColor: C.line, backgroundColor: '#FFF9EC' }}
            >
              <div className="relative aspect-[4/5]">
                <Image src={p.src} alt={p.alt} fill sizes="330px" className="object-cover" />
                <span
                  className={`${mono.variable} absolute top-3 left-3 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em]`}
                  style={{ fontFamily: 'var(--f-mono)', backgroundColor: 'rgba(36,18,16,0.78)', color: '#FFF6E6' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-5">
                <h3 className="uppercase" style={{ fontFamily: 'var(--f-disp)', fontWeight: 800, fontSize: '1.7rem' }}>
                  {p.nombre}
                </h3>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: C.muted }}>
                  {p.nota}
                </p>
                <p
                  className={`${mono.variable} text-[11px] uppercase tracking-[0.14em] mt-3`}
                  style={{ fontFamily: 'var(--f-mono)', color: C.magenta }}
                >
                  {p.menciones}
                </p>
              </div>
            </article>
          ))}
          <div className="per-plato shrink-0 w-[270px] md:w-[300px] rounded-xl border-2 border-dashed flex items-center justify-center p-8 text-center" style={{ borderColor: C.line }}>
            <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
              La carta completa con precios se arma junto al local al publicar.
              Mientras tanto, la mesa ya está servida.
            </p>
          </div>
        </div>
      </section>

      {/* ── La casa: alpaca de la entrada + terraza, bloque partido ── */}
      <section id="la-casa" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <Cenefa flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg" style={{ boxShadow: '0 18px 44px rgba(0,0,0,0.4)' }}>
              <Image
                src={`${IMG}/entrada.webp`}
                alt="Alpaca blanca con mantas de colores en la entrada de Como en Perú"
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
            <p
              className={`${mono.variable} text-[11px] uppercase tracking-[0.16em] mt-3`}
              style={{ fontFamily: 'var(--f-mono)', color: 'rgba(250,241,222,0.75)' }}
            >
              la alpaca de la entrada · sello de la casa
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-7" style={{ color: C.papel }}>
            <Reveal>
              <h2
                className="uppercase leading-[0.92]"
                style={{ fontFamily: 'var(--f-disp)', fontWeight: 800, fontSize: 'clamp(2.4rem, 6.5vw, 4.6rem)' }}
              >
                te recibe
                <br />
                <span style={{ color: C.ambar }}>una alpaca</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(250,241,222,0.82)' }}>
                En la puerta de Miraflores, una alpaca con manta a rayas anuncia
                lo que hay adentro: mesa de madera, servilletas burdeo, lámparas
                corazón y una cocina que cocina al momento.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="border-l-2 pl-4" style={{ borderColor: C.ambar }}>
                  <p className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--f-disp)', fontWeight: 800 }}>149+</p>
                  <p className={`${mono.variable} text-[11px] uppercase tracking-[0.14em] mt-1`} style={{ fontFamily: 'var(--f-mono)', color: 'rgba(250,241,222,0.7)' }}>
                    fotos en su ficha de Google
                  </p>
                </div>
                <div className="border-l-2 pl-4" style={{ borderColor: C.ambar }}>
                  <p className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--f-disp)', fontWeight: 800 }}>14</p>
                  <p className={`${mono.variable} text-[11px] uppercase tracking-[0.14em] mt-1`} style={{ fontFamily: 'var(--f-mono)', color: 'rgba(250,241,222,0.7)' }}>
                    opiniones hablan de la carta
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image src={`${IMG}/salon.webp`} alt="Mesas con servilletas burdeo y lámparas dentro del restaurante" fill sizes="(min-width: 768px) 22vw, 45vw" className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-md mt-6">
                  <Image src={`${IMG}/terraza.webp`} alt="Terraza con árbol y mesas al aire libre de Como en Perú" fill sizes="(min-width: 768px) 22vw, 45vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: una frase protagonista + muro de citas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papelOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mb-10 md:mb-14">
              <p
                className="leading-none"
                style={{ fontFamily: 'var(--f-disp)', fontWeight: 800, fontSize: 'clamp(4rem, 10vw, 7.5rem)', color: C.magenta }}
              >
                {BIZ.rating}
              </p>
              <div className="pb-3">
                <Stars value={4.4} color={C.magenta} className="w-5 h-5" />
                <p className={`${mono.variable} text-xs uppercase tracking-[0.16em] mt-2`} style={{ fontFamily: 'var(--f-mono)', color: C.muted }}>
                  {BIZ.reviews} reseñas en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.variable} inline-block text-xs uppercase tracking-[0.16em] font-bold underline underline-offset-4 mt-2 tap-44`}
                  style={{ fontFamily: 'var(--f-mono)', color: C.magenta }}
                >
                  ver la ficha completa
                </a>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <Reveal className="col-span-12 md:col-span-6">
              <blockquote
                className="h-full rounded-xl p-7 md:p-9 flex flex-col justify-between"
                style={{ backgroundColor: C.magenta, color: '#FFF6E6' }}
              >
                <p className="text-xl md:text-2xl leading-snug" style={{ fontFamily: 'var(--f-disp)', fontWeight: 600 }}>
                  “{RESENAS[2].texto}”
                </p>
                <footer className={`${mono.variable} text-xs uppercase tracking-[0.16em] mt-6`} style={{ fontFamily: 'var(--f-mono)', color: 'rgba(255,246,230,0.85)' }}>
                  {RESENAS[2].nombre} · {RESENAS[2].detalle}
                </footer>
              </blockquote>
            </Reveal>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
              {RESENAS.slice(0, 2).map((r, i) => (
                <Reveal key={r.nombre} delay={i * 100}>
                  <blockquote className="border-l-4 pl-6 py-1" style={{ borderColor: C.ambar }}>
                    <p className="text-base md:text-lg leading-relaxed">“{r.texto}”</p>
                    <footer className={`${mono.variable} text-xs uppercase tracking-[0.16em] mt-3`} style={{ fontFamily: 'var(--f-mono)', color: C.muted }}>
                      {r.nombre} · {r.detalle}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación: dirección enorme + ficha técnica + mapa ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className="uppercase leading-[0.92] mb-10 md:mb-14"
            style={{ fontFamily: 'var(--f-disp)', fontWeight: 800, fontSize: 'clamp(2.4rem, 6.5vw, 4.6rem)' }}
          >
            miraflores 1315,
            <br />
            <span style={{ color: C.magenta }}>san javier</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <Reveal className="col-span-12 md:col-span-5">
            <dl className="space-y-6">
              <div>
                <dt className={`${mono.variable} text-[11px] uppercase tracking-[0.16em] mb-2`} style={{ fontFamily: 'var(--f-mono)', color: C.muted }}>
                  Dirección
                </dt>
                <dd className="text-base leading-relaxed">
                  {BIZ.address}, {BIZ.city}, {BIZ.region}
                </dd>
              </div>
              <div>
                <dt className={`${mono.variable} text-[11px] uppercase tracking-[0.16em] mb-2`} style={{ fontFamily: 'var(--f-mono)', color: C.muted }}>
                  Horario
                </dt>
                <dd>
                  <ul className="text-base">
                    {BIZ.hours.map((h) => (
                      <li key={h.d} className="flex justify-between border-b py-1.5" style={{ borderColor: C.line }}>
                        <span style={{ color: C.muted }}>{h.d}</span>
                        <span style={{ fontFamily: 'var(--f-mono)' }}>{h.h}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className={`${mono.variable} text-[11px] uppercase tracking-[0.16em] mb-2`} style={{ fontFamily: 'var(--f-mono)', color: C.muted }}>
                  Contacto
                </dt>
                <dd className="text-base">
                  <a href={`tel:${BIZ.phoneDisplay.replace(/\s/g, '')}`} className="underline underline-offset-4 font-bold tap-44 inline-block">
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <div className="border-4 overflow-hidden rounded-md" style={{ borderColor: C.ink }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de Como en Perú, Miraflores 1315, San Javier"
                className="w-full h-[320px] md:h-[460px] block"
                loading="lazy"
              />
            </div>
            <p className={`${mono.variable} text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ fontFamily: 'var(--f-mono)', color: C.muted }}>
              a pasos del centro de san javier · estacionamiento cerca
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final: banda magenta con cenefa ── */}
      <section style={{ backgroundColor: C.magenta }}>
        <Cenefa />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center" style={{ color: '#FFF6E6' }}>
          <Reveal>
            <h2
              className="uppercase leading-[0.92]"
              style={{ fontFamily: 'var(--f-disp)', fontWeight: 800, fontSize: 'clamp(2.6rem, 7.5vw, 5.4rem)' }}
            >
              hoy almuerza
              <br />
              como en perú
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-base md:text-lg max-w-md mx-auto" style={{ color: 'rgba(255,246,230,0.85)' }}>
              Reserva tu mesa o pide para llevar. Se responde rápido por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="per-btn inline-flex items-center justify-center px-7 py-3 rounded-md text-base font-bold uppercase tracking-wide tap-44"
                style={{ backgroundColor: C.papel, color: C.magenta }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneDisplay.replace(/\s/g, '')}`}
                className="per-btn inline-flex items-center justify-center px-7 py-3 rounded-md text-base font-bold uppercase tracking-wide border-2 tap-44"
                style={{ borderColor: 'rgba(255,246,230,0.85)', color: '#FFF6E6' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: '#1A0D0B' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4" style={{ color: 'rgba(250,241,222,0.85)' }}>
          <p className="uppercase tracking-wide text-sm" style={{ fontFamily: 'var(--f-disp)', fontWeight: 700 }}>
            {BIZ.name} · {BIZ.city}
          </p>
          <nav className={`${mono.variable} flex gap-5 text-xs uppercase tracking-[0.14em]`} style={{ fontFamily: 'var(--f-mono)' }}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44">Google Maps</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44">WhatsApp</a>
          </nav>
        </div>
        <div
          className={`${mono.variable} border-t px-5 py-3 text-[11px] uppercase tracking-[0.14em] flex flex-wrap gap-x-4 gap-y-1 justify-center text-center`}
          style={{ fontFamily: 'var(--f-mono)', borderColor: 'rgba(250,241,222,0.12)', color: 'rgba(250,241,222,0.6)' }}
        >
          <span>{BIZ.address} · {BIZ.rating}★ ({BIZ.reviews} reseñas)</span>
          <span>sitio de muestra · sitiazo.cl</span>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Reservar por WhatsApp" />
    </div>
  )
}
