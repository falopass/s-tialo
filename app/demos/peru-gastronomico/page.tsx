import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA } from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «la carta del barrio». El logo de la casa — espiral
 * roja y cloche en hexágono — manda el rojo Perú sobre papel crema; el
 * verde limón del ceviche y la madera de la terraza completan la mesa.
 * La carta real se maqueta como impresa: títulos rojos, descripciones
 * con puntos suspensivos y precios en mono, junto a la foto de la carta.
 * Fraunces pone la editorial, Karla el cuerpo.
 */
const C = {
  papel: '#FBF6EC',
  card: '#FFFDF7',
  ink: '#2B2118',
  muted: '#7A6A58',
  rojo: '#BE1F2D',
  rojoInk: '#8E1722',
  lima: '#5E7B3A',
  oscuro: '#26150F',
  line: 'rgba(43,33,24,0.16)',
  lineSoft: 'rgba(43,33,24,0.09)',
}

export const metadata = demoMetadata({
  slug: 'peru-gastronomico',
  title: 'Perú Gastronómico — Cocina peruana en Yungay 660, Curicó',
  description:
    'Cocina peruana en Yungay 660, Curicó: caldillo de congrio, chupe de camarón, ceviche y porciones, todos los días de 8:30 a 19:00. Pedidos por WhatsApp. Demo de sitio web por Sitiazo.',
  image: IMG.ceviche,
})

function Espiral({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 6c9.9 0 18 8.1 18 18s-8.1 18-18 18-14-6.3-14-14 5-10 10-10 7 3.1 7 7-2.4 5.5-5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={<span>{BIZ.short}</span>}
        logoSrc={IMG.logo}
        links={[
          { label: 'La carta', href: '#carta' },
          { label: 'El local', href: '#local' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Pedir al WhatsApp"
        fontClass={display.className}
        theme={{ over: 'light', bar: C.papel, ink: C.ink, line: C.line, btnBg: C.rojo, btnInk: '#FFF6F0' }}
      />

      {/* ── Hero: la mesa servida ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-12 grid md:grid-cols-2 gap-9 md:gap-14 items-center">
          <div className="order-2 md:order-1">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <Espiral className="w-7 h-7" />
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>
                  Cocina peruana · Yungay 660 · Curicó
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} mt-4 leading-[1.03] tracking-tight text-[42px] md:text-[60px]`} style={{ color: C.ink, fontWeight: 560 }}>
                El auténtico sabor del Perú, a una cuadra de la plaza
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Ceviche, caldillos y sudados con aliños de allá, servidos todos los
                días hasta las 7 de la tarde. La carta abajo es la misma de la casa.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-12 px-6 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.rojo, color: '#FFF6F0' }}
                >
                  Pedir al {BIZ.whatsappDisplay}
                </a>
                <span
                  className="inline-flex items-center gap-2 h-12 px-4 rounded-full border text-sm"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  <Stars value={BIZ.rating} color={C.rojo} className="w-3.5 h-3.5" />
                  4,2 en Google
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative order-1 md:order-2">
              <figure className="overflow-hidden rounded-[2rem] rotate-1 shadow-lg border-4" style={{ borderColor: C.card }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                <img
                  src={IMG.ceviche}
                  alt="Ceviche peruano con cebolla morada, cancha y camote, servido en Perú Gastronómico"
                  className="w-full aspect-[4/5] object-cover"
                  loading="eager"
                />
              </figure>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real de su afiche */}
              <img
                src={IMG.logo}
                alt="Logo de Perú Gastronómico: espiral roja con el lema el auténtico sabor del Perú"
                className="absolute -bottom-5 -left-3 w-28 md:w-36 rounded-xl shadow-md -rotate-3 bg-white"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta real ── */}
      <section id="carta" className="py-14 md:py-20" style={{ backgroundColor: C.oscuro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(251,246,236,0.78)' }}>
                  Los precios, tal como están impresos
                </p>
                <h2 className={`${display.className} mt-3 text-3xl md:text-5xl tracking-tight`} style={{ color: C.papel, fontWeight: 560 }}>
                  La carta de la casa
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(251,246,236,0.78)' }}>
                Leída de su propia foto
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid lg:grid-cols-[1.5fr_1fr] gap-7 items-start">
            <Reveal>
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: C.card }}>
                <div className="px-6 md:px-9 pt-7 pb-5 border-b-2 border-dashed" style={{ borderColor: C.line }}>
                  <h3 className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.rojo, fontWeight: 600 }}>
                    Calientes
                  </h3>
                </div>
                <ul className="px-6 md:px-9 py-6 space-y-5">
                  {CARTA.calientes.map((p) => (
                    <li key={p.nombre}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-base md:text-lg font-bold" style={{ color: C.rojoInk }}>
                          {p.nombre}
                        </span>
                        <span className={`${mono.className} shrink-0 text-base font-semibold`} style={{ color: C.ink }}>
                          {p.precio}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-snug" style={{ color: C.muted }}>
                        {p.detalle}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="px-6 md:px-9 py-5 border-t-2 border-dashed" style={{ borderColor: C.line, backgroundColor: '#FBF3E2' }}>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    Agregados al plato
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1.5">
                    {CARTA.agregados.map(([n, p]) => (
                      <li key={n} className="flex items-baseline justify-between gap-3 text-sm">
                        <span style={{ color: C.ink }}>{n}</span>
                        <span className={mono.className} style={{ color: C.rojoInk }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <div className="space-y-7">
              <Reveal delay={120}>
                <div className="rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: C.card }}>
                  <div className="px-6 pt-6 pb-4 border-b-2 border-dashed" style={{ borderColor: C.line }}>
                    <h3 className={`${display.className} text-2xl`} style={{ color: C.rojo, fontWeight: 600 }}>
                      Porciones
                    </h3>
                  </div>
                  <ul className="px-6 py-5 grid gap-y-2">
                    {CARTA.porciones.map(([n, p]) => (
                      <li key={n} className="flex items-baseline justify-between gap-3 text-sm">
                        <span style={{ color: C.ink }}>{n}</span>
                        <span className={`${mono.className} shrink-0`} style={{ color: C.rojoInk }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <figure className="rounded-2xl overflow-hidden border-4 shadow-lg -rotate-1" style={{ borderColor: C.card }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                  <img
                    src={IMG.carta}
                    alt="La carta impresa de Perú Gastronómico con sus calientes, porciones y precios"
                    className="w-full aspect-[4/5] object-cover object-top"
                    loading="lazy"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>
            La casa en Yungay
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl tracking-tight`} style={{ color: C.ink, fontWeight: 560 }}>
            Aguayos en el techo, terraza en la vereda
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
            Manteles de tela andina colgados del techo, mesas de madera afuera
            y el letrero negro que se ve pasando por Yungay.
          </p>
        </Reveal>
        <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            { img: IMG.fachada, alt: 'Fachada de Perú Gastronómico con su letrero negro en Yungay 660', cap: 'El letrero', rot: '-rotate-1' },
            { img: IMG.interior, alt: 'Comedor interior con textiles peruanos colgados del techo', cap: 'El comedor', rot: 'rotate-1' },
            { img: IMG.terraza, alt: 'Terraza exterior con mesas de madera y toneles decorados', cap: 'La terraza', rot: '-rotate-1' },
            { img: IMG.platoPeru, alt: 'Plato de la casa con la palabra Perú escrita en salsa', cap: 'El plato firma', rot: 'rotate-1' },
          ].map((f, i) => (
            <Reveal key={f.cap} delay={i * 80}>
              <figure>
                <div className={`overflow-hidden rounded-2xl border-4 shadow-md ${f.rot}`} style={{ borderColor: C.card }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizada en public/ */}
                  <img src={f.img} alt={f.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                </div>
                <figcaption className={`${mono.className} mt-2.5 text-center text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {f.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="py-14 md:py-20" style={{ backgroundColor: '#F4EBD8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <figure className="rounded-3xl overflow-hidden shadow-md">
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}, ${BIZ.city}`} className="w-full aspect-[4/3]" />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>
                En pleno centro
              </p>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl tracking-tight`} style={{ color: C.ink, fontWeight: 560 }}>
                Yungay 660, a pasos de la plaza
              </h2>
              <dl className="mt-6 space-y-3 text-base">
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: '#6B5A44' }}>
                    Dirección
                  </dt>
                  <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: '#6B5A44' }}>
                    Horario
                  </dt>
                  <dd>{BIZ.hours}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className={`${mono.className} w-24 shrink-0 text-[11px] uppercase tracking-[0.14em] pt-1`} style={{ color: '#6B5A44' }}>
                    Pedidos
                  </dt>
                  <dd className={mono.className}>
                    {BIZ.whatsappDisplay} · {BIZ.phoneDisplay}
                  </dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 tap-44`}
                style={{ color: C.rojoInk }}
              >
                Ver ficha en Google Maps
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 md:px-8 py-14">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-[2rem] px-6 py-10 md:px-12 md:py-14 text-center" style={{ backgroundColor: C.rojo }}>
            <Espiral className="mx-auto w-9 h-9" />
            <h2 className={`${display.className} mt-4 text-3xl md:text-5xl tracking-tight`} style={{ color: '#FFF6F0', fontWeight: 560 }}>
              ¿Un ceviche o un chupe hoy?
            </h2>
            <p className="mt-3 text-base md:text-lg max-w-lg mx-auto" style={{ color: '#FFF6F0' }}>
              Pedidos por WhatsApp o directo en Yungay 660 — abierto todos los días.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center h-12 px-7 rounded-full text-sm font-bold active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.oscuro, color: C.papel }}
            >
              Escribir al {BIZ.whatsappDisplay}
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 pb-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${display.className} text-xl tracking-tight`} style={{ color: C.ink, fontWeight: 600 }}>
                {BIZ.name}
              </p>
              <p className="mt-1 text-sm" style={{ color: C.muted }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.hours}
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 rounded-full text-sm font-bold self-start md:self-auto active:scale-95 transition-transform tap-44"
              style={{ backgroundColor: C.rojo, color: '#FFF6F0' }}
            >
              Pedir por WhatsApp
            </a>
          </div>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
