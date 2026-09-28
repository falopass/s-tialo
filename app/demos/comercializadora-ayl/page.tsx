/**
 * app/demos/comercializadora-ayl/page.tsx
 *
 * Mockup de muestra para Comercializadora A y L (Talca).
 * Idea: "la boleta del pasillo" — la tienda de aseo de la 1 Poniente
 * contada como una compra: pasillos numerados por letra, datos en
 * formato de recibo y dos locales reales en Talca.
 */

import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_URL_2,
  MAPS_EMBED,
  IMG,
  PASILLOS,
  RESENAS,
  HORARIO_1,
  HORARIO_2,
  NAV_LINKS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900' }],
})
const body = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

export const metadata = demoMetadata({
  slug: 'comercializadora-ayl',
  title: 'Comercializadora A y L — Talca | Demo de sitio web',
  description:
    'Así se vería el sitio de Comercializadora A y L en Talca: artículos de aseo para la casa, el auto y la oficina, con dos locales y reseñas reales.',
  image: `${IMG}/pasillo-central.webp`,
})

const C = {
  papel: '#FAF6EA',
  tinta: '#1C1F26',
  muted: '#565B66',
  navy: '#16233F',
  navyDeep: '#0E1830',
  amarillo: '#FFC61A',
  line: 'rgba(28,31,38,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

// Borde perforado de boleta (dientes hacia abajo)
function BordeBoleta({ color }: { color: string }) {
  return (
    <div
      className="h-3 w-full"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(-45deg, ${color} 6px, transparent 6px), linear-gradient(45deg, ${color} 6px, transparent 6px)`,
        backgroundSize: '12px 12px',
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}

export default function ComercializadoraAYL() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-extrabold tracking-tight`}>
            Comercializadora <span style={{ color: C.amarillo }}>A&nbsp;y&nbsp;L</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.navy,
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.amarillo,
          btnInk: C.navyDeep,
        }}
      />

      {/* ── Hero: el pasillo central a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.navyDeep }}>
        <Image
          src={`${IMG}/pasillo-central.webp`}
          alt="Pasillo central de Comercializadora A y L en Talca: estantes llenos de productos de aseo hasta el techo de madera"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(14,24,48,0.55) 0%, rgba(14,24,48,0.25) 40%, rgba(14,24,48,0.92) 88%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-10 w-full">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4`} style={{ color: C.amarillo }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} font-black text-[clamp(2.4rem,8.5vw,5rem)] leading-[0.98] tracking-[-0.02em] mb-6 max-w-3xl`} style={{ color: '#FFFFFF' }}>
              Aseo para la casa,
              <br />
              el auto y la oficina.
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              La tienda de útiles de aseo de la 1 Poniente: góndolas llenas
              hasta el techo, marcas de siempre y «las tres B», dicen sus
              clientes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.amarillo, color: C.navyDeep }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#pasillos"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-lg border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Recorrer los pasillos
              </a>
            </div>
          </Reveal>

          {/* boleta de datos al pie del hero */}
          <Reveal delay={180}>
            <div
              className={`${mono.className} mt-10 rounded-t-md px-5 py-4 flex flex-wrap items-center gap-x-8 gap-y-2`}
              style={{ backgroundColor: C.papel, color: C.tinta }}
            >
              <span className="flex items-center gap-2 text-sm font-bold">
                <Stars value={BIZ.rating} color={C.navy} className="w-3.5 h-3.5" />
                {BIZ.rating.toLocaleString('es-CL')} · {BIZ.reviewCount} reseñas
              </span>
              <span className="text-xs uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}
              </span>
              <span className="text-xs uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                2 locales en Talca
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Los pasillos: índice por letra ── */}
      <section id="pasillos" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.navy }}>
              Cuatro pasillos, una tienda
            </p>
            <h2 className={`${display.className} font-black text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] mb-4 max-w-3xl`} style={{ color: C.tinta }}>
              La góndola completa,<br className="hidden md:block" /> pasillo por pasillo
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12 md:mb-16" style={{ color: C.muted }}>
              Fotos reales del local de 1 Poniente: así de llenos están los
              estantes todos los días.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {PASILLOS.map((p, i) => (
              <Reveal key={p.letra} delay={i * 60}>
                <article className="group">
                  <div className="relative overflow-hidden rounded-xl" style={{ boxShadow: '0 16px 36px -18px rgba(14,24,48,0.5)' }}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={1200}
                      height={900}
                      sizes="(min-width: 768px) 45vw, 92vw"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span
                      className={`${display.className} absolute top-0 left-0 font-black text-5xl md:text-6xl leading-none px-5 pt-4 pb-5 rounded-br-2xl`}
                      style={{ backgroundColor: C.amarillo, color: C.navyDeep }}
                      aria-hidden="true"
                    >
                      {p.letra}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 mt-4 mb-2">
                    <h3 className={`${display.className} font-extrabold text-2xl md:text-3xl tracking-[-0.01em]`} style={{ color: C.tinta }}>
                      {p.title}
                    </h3>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em] shrink-0`} style={{ color: C.muted }}>
                      Pasillo {p.letra}
                    </span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.muted }}>
                    {p.body}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {p.marcas.map((m) => (
                      <li
                        key={m}
                        className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm`}
                        style={{ backgroundColor: C.navy, color: '#FFFFFF' }}
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La boleta ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.amarillo }}>
                El dato de la casa
              </p>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[0.98] tracking-[-0.02em] mb-5`} style={{ color: '#FFFFFF' }}>
                Uno de los más baratos
                <br />
                <span style={{ color: C.amarillo }}>y de calidad de Talca</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.78)' }}>
                Lo escribió una clienta en su reseña de Google, no nosotros.
                Marcas de siempre y alternativas buenas — todo con el
                precio a la vista en la repisa.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="max-w-sm mx-auto w-full">
                <div
                  className={`${mono.className} px-7 pt-7 pb-6 text-sm`}
                  style={{ backgroundColor: C.papel, color: C.tinta }}
                >
                  <p className="text-center font-bold uppercase tracking-[0.2em] text-xs mb-1">
                    {BIZ.name}
                  </p>
                  <p className="text-center text-[10px] uppercase tracking-[0.14em] mb-5" style={{ color: C.muted }}>
                    {BIZ.address} · {BIZ.city}
                  </p>
                  <ul className="space-y-2.5 border-t border-dashed pt-5" style={{ borderColor: C.line }}>
                    <li className="flex justify-between gap-4">
                      <span>Valoración Google</span>
                      <span className="font-bold">{BIZ.rating.toLocaleString('es-CL')} / 5</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Reseñas</span>
                      <span className="font-bold">{BIZ.reviewCount}</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Locales en Talca</span>
                      <span className="font-bold">2</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Lunes a viernes</span>
                      <span className="font-bold">10:30 – 19:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Sábado</span>
                      <span className="font-bold">10:30 – 15:00</span>
                    </li>
                  </ul>
                  <p className="border-t border-dashed mt-5 pt-4 text-center text-[10px] uppercase tracking-[0.18em]" style={{ borderColor: C.line, color: C.muted }}>
                    Gracias por su compra
                  </p>
                </div>
                <BordeBoleta color={C.papel} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: boletas sueltas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.navy }}>
              {BIZ.rating.toLocaleString('es-CL')} de 5 · {BIZ.reviewCount} reseñas en Google Maps
            </p>
            <h2 className={`${display.className} font-black text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] mb-12 md:mb-16 max-w-3xl`} style={{ color: C.tinta }}>
              Lo que escriben <span style={{ color: C.navy }}>los que compran</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 70}>
                <figure
                  className={`${mono.className} h-full px-6 pt-6 pb-6 flex flex-col border-t-4`}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderTopColor: C.amarillo,
                    boxShadow: '0 12px 26px -16px rgba(14,24,48,0.35)',
                  }}
                >
                  <blockquote className="text-[13px] md:text-sm leading-relaxed flex-1" style={{ color: C.tinta }}>
                    «{r.quote}»
                  </blockquote>
                  <figcaption
                    className="text-[10px] uppercase tracking-[0.14em] mt-5 pt-3 border-t border-dashed"
                    style={{ color: C.muted, borderColor: C.line }}
                  >
                    {r.author} · Reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dos locales ── */}
      <section id="locales" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.amarillo }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-black text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] mb-12 md:mb-16`} style={{ color: '#FFFFFF' }}>
              Dos locales en Talca
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-stretch">
            <Reveal>
              <div className="grid sm:grid-cols-2 gap-5 h-full content-start">
                {[
                  {
                    nombre: 'Local 1 Poniente',
                    dir: BIZ.address,
                    horario: HORARIO_1,
                    rating: BIZ.rating,
                    resenas: BIZ.reviewCount,
                    mapa: MAPS_URL,
                  },
                  {
                    nombre: 'Local 4 Poniente',
                    dir: BIZ.address2,
                    horario: HORARIO_2,
                    rating: BIZ.rating2,
                    resenas: BIZ.reviewCount2,
                    mapa: MAPS_URL_2,
                  },
                ].map((l) => (
                  <div
                    key={l.nombre}
                    className="rounded-xl border px-6 py-6 flex flex-col"
                    style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mb-2`} style={{ color: C.amarillo }}>
                      {l.nombre}
                    </p>
                    <address className={`${display.className} not-italic font-extrabold text-xl md:text-2xl mb-3`} style={{ color: '#FFFFFF' }}>
                      {l.dir}
                    </address>
                    <p className="flex items-center gap-2 text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      <Stars value={l.rating} color={C.amarillo} className="w-3.5 h-3.5" />
                      {l.rating.toLocaleString('es-CL')} · {l.resenas} reseñas
                    </p>
                    <ul className="space-y-1.5 text-[13px] mb-5 flex-1" style={{ color: 'rgba(255,255,255,0.72)' }}>
                      {l.horario.map((h) => (
                        <li key={h.dia} className="flex justify-between gap-3">
                          <span>{h.dia}</span>
                          <span className="font-semibold" style={{ color: '#FFFFFF' }}>{h.hora}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={l.mapa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} font-bold text-sm text-center px-5 py-2.5 rounded-lg border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                      style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#FFFFFF' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-xl min-h-[320px] h-full" style={{ boxShadow: '0 16px 36px -18px rgba(0,0,0,0.5)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.amarillo }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-black text-[clamp(2.2rem,7vw,4.2rem)] leading-[0.98] tracking-[-0.02em] mb-6`} style={{ color: C.navyDeep }}>
              La lista de aseo,
              <br />
              resuelta en un pasillo.
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed font-medium" style={{ color: 'rgba(14,24,48,0.75)' }}>
              Consulta stock y precio de lo que buscas por WhatsApp, o pasa
              directo por cualquiera de los dos locales.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.navyDeep, color: '#FFFFFF' }}
            >
              Escribir a A y L
            </a>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-5`} style={{ color: 'rgba(14,24,48,0.78)' }}>
              {BIZ.phoneDisplay} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: '#FFFFFF' }}>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-extrabold text-xl md:text-2xl mb-2 tracking-tight`}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                {BIZ.address} y {BIZ.address2} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Fotos, direcciones,
            horarios y reseñas reales de sus fichas de Google Maps; los
            textos de venta son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.amarillo }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
