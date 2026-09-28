/**
 * app/demos/barraca-de-madera-maderex/page.tsx
 *
 * Mockup para Maderex, la barraca de madera de Bajo Perquín (San
 * Clemente). La idea visual toma el rótulo real del galpón: tableros
 * verdes con letras blancas en mayúsculas, la fascia del local como
 * franja corrida y el listado de productos presentado como el
 * pizarrón del patio. Tipografía de letrero (Anton) + Barlow +
 * IBM Plex Mono para los datos.
 *
 * Sección a sección: hero foto real / fascia marquee / tablón de
 * productos con fotos de punta / la barraca (split) / banda foto del
 * patio / reseñas sobre verde oscuro / cómo llegar / cierre.
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  HORARIO,
  PRODUCTOS,
  FASCIA,
  RESENAS,
  IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})

const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

export const metadata: Metadata = demoMetadata({
  slug: 'barraca-de-madera-maderex',
  title: `${BIZ.name} | Barraca de madera en Bajo Perquín, San Clemente`,
  description: `${BIZ.slogan}. Tablas, vigas, tableros OSB y revestimientos en la Ruta 115, Bajo Perquín. ${BIZ.rating} estrellas en ${BIZ.reviews} reseñas. Cotiza por WhatsApp.`,
  image: `${IMG}/hero.webp`,
})

/** Verde del rótulo y del portón del local, subido/bajado según fondo */
const C = {
  papel: '#F6F4EC',
  papelDim: '#ECE9DC',
  tinta: '#15251A',
  tintaSoft: '#43564A',
  tabla: '#1B5A2A',
  tablaOscura: '#123E1E',
  bosque: '#0F2E17',
  verde: '#1E7A33',
  verdeVivo: '#48B34B',
  lineaClara: '#DDD9C9',
} as const

const NAV_LINKS = [
  { label: 'Materiales', href: '#materiales' },
  { label: 'La barraca', href: '#barraca' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

function Eyebrow({ children, color = C.verde }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em]`}
      style={{ color }}
    >
      {children}
    </p>
  )
}

function CtaWhatsApp({ className = '' }: { className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold px-6 py-3 transition-transform active:scale-95 tap-44 ${className}`}
      style={{ backgroundColor: C.tabla, color: '#fff' }}
    >
      Cotizar por WhatsApp
    </a>
  )
}

export default function DemoMaderex() {
  return (
    <main className={`${body.className} antialiased`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`
        @keyframes fascia-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .fascia-track { animation: fascia-scroll 38s linear infinite; }
          .fascia-track:hover { animation-play-state: paused; }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} tracking-[0.06em]`}>
            MADEREX<span className="hidden sm:inline"> · BARRACA DE MADERA</span>
          </span>
        }
        logoSrc={`${IMG}/logo-icon.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar por WhatsApp"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,244,236,0.94)',
          ink: C.tinta,
          line: C.lineaClara,
          btnBg: C.tabla,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero: la fachada real con su rótulo ─────────────────── */}
      <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.bosque }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt={`Fachada de ${BIZ.name} en la Ruta 115, Bajo Perquín`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,25,14,0.55) 0%, rgba(10,25,14,0.15) 40%, rgba(10,25,14,0.82) 78%, rgba(10,25,14,0.92) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <Eyebrow color="rgba(255,255,255,0.85)">Barraca de madera · Bajo Perquín</Eyebrow>
          <h1
            className={`${display.className} uppercase text-white leading-[1.02] mt-4 max-w-3xl text-[2.6rem] sm:text-6xl md:text-7xl`}
          >
            Madera de calidad al mejor precio
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.88)' }}>
            Tablas, vigas, tableros y revestimientos para tu obra, en la Ruta 115
            a la salida oriente de San Clemente.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <CtaWhatsApp />
            <a
              href="#barraca"
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold px-6 py-3 transition-transform active:scale-95 tap-44"
              style={{ color: '#fff', border: '1.5px solid rgba(255,255,255,0.6)', backgroundColor: 'rgba(0,0,0,0.25)' }}
            >
              Ver la barraca
            </a>
          </div>
          <div
            className={`${mono.className} mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.14em]`}
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            <span className="inline-flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.verdeVivo} className="w-3.5 h-3.5" />
              {BIZ.rating} en {BIZ.reviews} reseñas
            </span>
            <span>Ruta 115 SN, Bajo Perquín</span>
            <span>Lun a Sáb · Dom cerrado</span>
          </div>
        </div>
      </section>

      {/* ── La fascia del galpón, como franja corrida ───────────── */}
      <div className="overflow-hidden py-4 md:py-5" style={{ backgroundColor: C.tablaOscura }} aria-hidden="true">
        <div className="fascia-track flex w-max items-center">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {FASCIA.map((p) => (
                <span
                  key={`${dup}-${p}`}
                  className={`${display.className} uppercase text-white text-lg md:text-2xl tracking-[0.08em] whitespace-nowrap`}
                >
                  {p}
                  <span className="mx-5 md:mx-7 font-normal" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    /
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── El tablón: el listado del galpón con fotos de punta ─── */}
      <section id="materiales" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>El listado del galpón</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[1.02] mt-4 max-w-3xl`}>
              Lo que hay en la barraca
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: C.tintaSoft }}>
              El mismo listado que va en el rótulo del local. El precio y las
              medidas disponibles se confirman al día, por WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="mt-10 grid overflow-hidden rounded-2xl lg:grid-cols-12"
              style={{ backgroundColor: C.tablaOscura }}
            >
              <figure className="relative h-52 lg:h-auto lg:col-span-3">
                <Image
                  src={`${IMG}/osb.webp`}
                  alt="Tableros OSB y fardos de madera apilados dentro del galpón"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-3 left-4 right-4 inline-block w-fit rounded-md px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em]`}
                  style={{ color: 'rgba(255,255,255,0.95)', backgroundColor: 'rgba(15,46,23,0.85)' }}
                >
                  Tableros y fardos en el galpón techado
                </figcaption>
              </figure>

              <div className="lg:col-span-6 px-6 py-8 md:px-10 md:py-10">
                <p
                  className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`}
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  Productos · Ruta 115
                </p>
                <div className="mt-6 grid sm:grid-cols-3 gap-8 sm:gap-6">
                  {PRODUCTOS.map((g) => (
                    <div key={g.grupo}>
                      <h3
                        className={`${display.className} uppercase text-base md:text-lg tracking-[0.06em]`}
                        style={{ color: C.verdeVivo }}
                      >
                        {g.grupo}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {g.items.map((item) => (
                          <li
                            key={item}
                            className={`${display.className} uppercase text-white text-xl md:text-2xl leading-tight tracking-[0.03em]`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <figure className="relative h-52 lg:h-auto lg:col-span-3">
                <Image
                  src={`${IMG}/revestimiento.webp`}
                  alt="Fardos verdes de revestimiento apilados dentro del galpón"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-3 left-4 right-4 inline-block w-fit rounded-md px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em]`}
                  style={{ color: 'rgba(255,255,255,0.95)', backgroundColor: 'rgba(15,46,23,0.85)' }}
                >
                  Revestimientos ordenados por medida
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La barraca, en la ruta ──────────────────────────────── */}
      <section id="barraca" className="py-16 md:py-24" style={{ backgroundColor: C.papelDim }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02]`}>
              Un galpón techado a la salida de San Clemente
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.tintaSoft }}>
              La barraca está a un costado de la Ruta 115, con la madera
              ordenada por tipo y medida bajo techo. Te atienden directo, te
              ayudan a elegir lo que necesitas y arman el despacho.
            </p>
            <blockquote
              className="mt-7 rounded-xl px-5 py-4 border-l-4"
              style={{ backgroundColor: C.papel, borderColor: C.verde }}
            >
              <p className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: C.tabla }}>
                «Lo que no tienen, lo traen»
              </p>
              <cite
                className={`${mono.className} not-italic block mt-2 text-[11px] uppercase tracking-[0.16em]`}
                style={{ color: C.tintaSoft }}
              >
                Miguel Palavecinos · reseña en Google
              </cite>
            </blockquote>
            <div className="mt-7">
              <CtaWhatsApp />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src={`${IMG}/galpon.webp`}
                alt="Interior del galpón de Maderex con madera apilada por medidas"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption
                className={`${mono.className} absolute bottom-3 left-4 right-4 inline-block w-fit rounded-md px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em]`}
                style={{ color: 'rgba(255,255,255,0.95)', backgroundColor: 'rgba(15,46,23,0.85)' }}
              >
                El galpón techado de Bajo Perquín
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Banda foto: el patio ────────────────────────────────── */}
      <section className="relative h-[320px] md:h-[430px] overflow-hidden" aria-label="El patio de la barraca">
        <Image
          src={`${IMG}/patio.webp`}
          alt="Vista del patio de la barraca con pilas de madera y el portón verde"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 flex items-end"
          style={{ background: 'linear-gradient(180deg, rgba(10,25,14,0.1) 30%, rgba(10,25,14,0.78) 100%)' }}
        >
          <div className="max-w-6xl mx-auto w-full px-5 md:px-8 pb-8">
            <p className={`${display.className} uppercase text-white text-3xl md:text-5xl leading-tight`}>
              En la Ruta 115, camino a Vilches
            </p>
            <p
              className={`${mono.className} mt-2 text-[11px] md:text-xs uppercase tracking-[0.18em]`}
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              El patio de Maderex, en Bajo Perquín
            </p>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales, sobre verde oscuro ──────────────────── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow color={C.verdeVivo}>Reseñas de Google</Eyebrow>
            <div className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-3">
              <h2 className={`${display.className} uppercase text-5xl md:text-7xl leading-none text-white`}>
                {BIZ.rating}
              </h2>
              <div className="pb-1">
                <Stars value={BIZ.rating} color={C.verdeVivo} className="w-5 h-5" />
                <p className={`${mono.className} mt-2 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {BIZ.reviews} reseñas de clientes
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {RESENAS.map((r, i) => (
              <Reveal
                key={r.autor}
                delay={i * 90}
                className={i === 0 ? 'md:col-span-2' : ''}
              >
                <figure
                  className="h-full rounded-xl px-6 py-6"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <Stars value={5} color={C.verdeVivo} className="w-4 h-4" />
                  <blockquote className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    «{r.texto}»
                  </blockquote>
                  <figcaption
                    className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.16em]`}
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {r.autor} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ─────────────────────────────────────────── */}
      <section id="llegar" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[1.02] max-w-3xl`}>
              Cómo llegar a la barraca
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="h-full rounded-2xl p-7 md:p-8" style={{ backgroundColor: C.papelDim }}>
                <dl className="space-y-6">
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.tintaSoft }}>
                      Dirección
                    </dt>
                    <dd className="mt-1 text-lg font-semibold">{BIZ.address}</dd>
                    <dd className="text-base" style={{ color: C.tintaSoft }}>
                      {BIZ.city}, {BIZ.region}
                    </dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.tintaSoft }}>
                      Teléfono y WhatsApp
                    </dt>
                    <dd className="mt-1">
                      <a href={`tel:${BIZ.phoneTel}`} className="text-lg font-semibold underline-offset-4 hover:underline tap-44 inline-flex items-center">
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.tintaSoft }}>
                      Horario
                    </dt>
                    <dd className="mt-1">
                      <ul className="space-y-1">
                        {HORARIO.map((h) => (
                          <li key={h.dia} className="flex justify-between gap-4 text-base">
                            <span className="font-semibold">{h.dia}</span>
                            <span style={{ color: C.tintaSoft }}>{h.hora}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center rounded-full text-sm font-semibold px-6 py-3 transition-transform active:scale-95 tap-44"
                  style={{ color: C.tabla, border: `1.5px solid ${C.tabla}` }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-3">
              <div className="h-full min-h-[320px] overflow-hidden rounded-2xl" style={{ backgroundColor: C.papelDim }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name} en Bajo Perquín, San Clemente`}
                  className="h-full w-full min-h-[320px] border-0"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre: cotiza la lista ─────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.bosque }}>
        <Image
          src={`${IMG}/letrero.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-white text-4xl md:text-6xl leading-[1.02] max-w-3xl mx-auto`}>
              Cotiza tu lista de materiales
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Manda la lista por WhatsApp y te responden con precio y medidas
              disponibles.
            </p>
            <div className="mt-8">
              <CtaWhatsApp />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.tablaOscura }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo-icon.webp`} alt={`Logo de ${BIZ.name}`} className="h-9 w-9 rounded-full object-cover" />
            <div>
              <p className={`${display.className} uppercase text-white tracking-[0.06em] leading-none`}>
                Maderex · Barraca de Madera
              </p>
              <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
          </div>
          <div
            className="mt-6 pt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <a href={`tel:${BIZ.phoneTel}`} className="text-sm font-semibold tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {BIZ.phoneDisplay}
            </a>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Sitio de muestra preparado por Sitiazo. Fotos y reseñas reales de su ficha de Google.
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Cotizar por WhatsApp con ${BIZ.name}`} />
    </main>
  )
}
