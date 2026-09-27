import type { Metadata } from 'next'
import Image from 'next/image'
import { Sora, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, C, HOURS, IMG, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'
import { Catalogo } from './catalogo'

const display = Sora({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'QUE BARATO LF — Botiquín, escolar y hogar en Talca',
  description:
    'Curas y artículos de botiquín, útiles escolares y productos para el hogar en 34 Ote. 3404, Talca. Detalle y mayor desde 3 unidades. Cotiza por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Por mayor', href: '#por-mayor' },
  { label: 'El local', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const PASOS = [
  {
    title: 'Manda tu lista',
    desc: 'Escríbenos por WhatsApp con lo que necesitas: la lista de útiles, el botiquín de la casa o mercadería para revender. Una foto de la lista también sirve.',
  },
  {
    title: 'Precio mayor desde 3 unidades',
    desc: 'Llevando 3 o más del mismo producto pagas el precio «mayor» de la tabla. Te confirmamos stock y te separamos el pedido.',
  },
  {
    title: 'Retiras en el local',
    desc: 'Pasas a buscar tu pedido a 34 Ote. 3404, Talca. Si necesitas despacho dentro de la ciudad, lo conversamos por WhatsApp.',
  },
]

function Arrow({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

function WaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

export default function QueBaratoLf() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.paper, color: C.navy }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold tracking-tight`}
        theme={{ over: 'dark', bar: 'rgba(245,248,250,0.94)', ink: C.navy, line: C.line, btnBg: C.navy, btnInk: C.white }}
      />

      {/* ── Hero compacto ────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden text-white" style={{ backgroundColor: C.navy }}>
        <svg
          viewBox="0 0 24 24"
          className="absolute -right-8 -top-6 w-[220px] md:w-[340px] opacity-[0.07] pointer-events-none"
          fill="none"
          stroke={C.sky}
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />
        </svg>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-24 md:pb-28">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: C.sky }}>
            {BIZ.rubro} · {BIZ.city}, Maule
          </p>
          <h1 className={`${display.className} mt-4 font-bold leading-[1.02] tracking-[-0.02em] text-4xl md:text-6xl max-w-3xl`}>
            Botiquín, colegio y casa,{' '}
            <span style={{ color: C.sky }}>a precio de mayor.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
            Curas, útiles escolares y artículos de hogar en 34 Oriente, Talca.
            Cotiza tu lista por WhatsApp en un minuto.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-white/85">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.green }} aria-hidden="true" />
              {BIZ.reviews} reseñas en Google
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.green }} aria-hidden="true" />
              Precio mayor desde 3 unidades
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.green }} aria-hidden="true" />
              Retiro en {BIZ.address}
            </li>
          </ul>
        </div>
      </section>

      {/* ── Catálogo + cotizador ─────────────────────────── */}
      <section id="catalogo" className="scroll-mt-16 pb-20 md:pb-28" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Catalogo fontClass={display.className} />
        </div>
      </section>

      {/* ── Compra por mayor ─────────────────────────────── */}
      <section id="por-mayor" className="scroll-mt-16 py-16 md:py-24 text-white" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold tracking-tight leading-[1.05] text-3xl md:text-5xl max-w-xl`}>
                Con 3 unidades ya pagas precio mayor
              </h2>
              <p className="max-w-sm text-sm md:text-base leading-relaxed text-white/75">
                Ideal para colegios, oficinas, juntas de vecinos y revendedores — o para la familia que quiere el botiquín completo.
              </p>
            </div>
          </Reveal>
          <ol className="grid gap-4 md:gap-6 md:grid-cols-3">
            {PASOS.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 110}>
                  <div
                    className="h-full rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${C.lineOnDark}` }}
                  >
                    <span className={`${display.className} inline-flex items-center justify-center w-10 h-10 rounded-full text-base font-bold`} style={{ backgroundColor: C.sky, color: C.navyDeep }}>
                      {i + 1}
                    </span>
                    <h3 className={`${display.className} mt-4 font-bold text-xl`}>{p.title}</h3>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-white/80">{p.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Sobre el negocio ─────────────────────────────── */}
      <section id="nosotros" className="scroll-mt-16 py-16 md:py-24" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ backgroundColor: '#E3ECF2' }}>
              <Image
                src={`${IMG}/ambiente.webp`}
                alt="Pasillo del local con estanterías ordenadas de productos"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="eager"
                className="object-cover"
              />
              <span
                className={`${display.className} absolute left-4 bottom-4 px-3.5 py-1.5 rounded-full text-xs font-bold text-white`}
                style={{ backgroundColor: C.navy }}
              >
                El local en Talca
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: C.steel }}>
                {BIZ.address} · {BIZ.city}
              </p>
              <h2 className={`${display.className} mt-3 font-bold tracking-tight leading-[1.05] text-3xl md:text-5xl`}>
                La tienda del barrio donde alcanza para más
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.steel }}>
                {BIZ.name} es el típico local de barrio ordenado: atención directa, precios a la
                vista y precio de mayor desde 3 unidades. Entras por una venda y sales con la
                lista del colegio resuelta.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Reveal delay={80}>
                <div className="rounded-xl p-4 md:p-5" style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                  <p className={`${display.className} font-bold text-2xl md:text-3xl`} style={{ color: C.navy }}>
                    {BIZ.reviews}
                  </p>
                  <p className="mt-1 text-xs md:text-sm leading-snug" style={{ color: C.steel }}>
                    reseñas en Google Maps
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="rounded-xl p-4 md:p-5" style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                  <p className={`${display.className} font-bold text-2xl md:text-3xl`} style={{ color: C.navy }}>
                    Mayor desde 3 un.
                  </p>
                  <p className="mt-1 text-xs md:text-sm leading-snug" style={{ color: C.steel }}>
                    del mismo producto, sin mínimo de compra
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <div>
                  <dt className="font-semibold" style={{ color: C.navy }}>Horario de referencia</dt>
                  {HOURS.map((h) => (
                    <dd key={h.days} className="flex justify-between gap-4 mt-1" style={{ color: C.steel }}>
                      <span>{h.days}</span>
                      <span className="tabular-nums">{h.time}</span>
                    </dd>
                  ))}
                </div>
              </dl>
              <p className="mt-2 text-xs" style={{ color: C.steel }}>Horario referencial del mockup.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ─────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-16 py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className={`${display.className} font-bold tracking-tight leading-[1.05] text-3xl md:text-5xl`}>
              Cotiza tu pedido por WhatsApp
            </h2>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.steel }}>
              Manda tu lista —del botiquín, del colegio o de la casa— y te confirmamos
              stock al tiro. Es el canal más rápido.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 min-h-[52px] px-6 rounded-xl text-base font-bold transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ backgroundColor: C.green, color: C.greenInk, outlineColor: C.navy }}
            >
              <WaIcon className="w-5 h-5" />
              <span>
                Escribir al {BIZ.phoneDisplay}
              </span>
              <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <dl className="mt-8 space-y-2 text-sm" style={{ color: C.steel }}>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.navy }}>Dirección:</dt>
                <dd>{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.navy }}>Teléfono:</dt>
                <dd>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: C.white, border: `1px solid ${C.line}` }}>
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold" style={{ color: C.navy }}>
                  {BIZ.address}, {BIZ.city}
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[40px] text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ color: C.navy, outlineColor: C.navy }}
                >
                  Cómo llegar <Arrow className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo ────────────────────────────────── */}
      <footer className="text-white" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <div>
            <p className={`${display.className} text-lg font-bold`}>{BIZ.name}</p>
            <p className="text-xs text-white/70">
              Sitio de ejemplo de Sitiazo · Datos de contacto y precios del catálogo reales; textos y horarios de muestra; fotos referenciales.
            </p>
          </div>
          <div className="[&>div]:static! [&>div]:max-w-none! [&>div]:inline-flex!">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
