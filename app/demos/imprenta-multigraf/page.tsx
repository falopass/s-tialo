/**
 * app/demos/imprenta-multigraf/page.tsx
 *
 * Mockup de muestra para Imprenta MULTIGRAF (Molina).
 * Idea: "la orden de trabajo" — la retícula de su mesa de corte, los
 * timbres estampados de sus servicios y la boleta con líneas punteadas;
 * amarillo de su bolsa, rojo sello y azul imprenta de su logo.
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
  MAPS_EMBED,
  IMG,
  HORARIO,
  SELLOS,
  TRABAJOS,
  RESENAS,
  NAV_LINKS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' }],
})

export const metadata = demoMetadata({
  slug: 'imprenta-multigraf',
  title: 'Imprenta MULTIGRAF | Demo de sitio web',
  description:
    'Así se vería el sitio de Imprenta MULTIGRAF: la imprenta y librería de Maipú 2082 en Molina — con sus fotos y reseñas reales.',
  image: `${IMG}/fachada-puerta.webp`,
})

const C = {
  tinta: '#201C16',
  tintaSoft: '#2A251E',
  papel: '#F6F0E2',
  papelBajo: '#EDE4CE',
  borde: '#D8CBAC',
  amarillo: '#F2B90B',
  rojo: '#BF2E1F',
  azul: '#23448F',
  muted: '#6B6151',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

// Retícula de mesa de corte (como la de la foto de la bolsa)
function Reticula({ color = 'rgba(32,28,22,0.07)' }: { color?: string }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }}
    />
  )
}

// Marco de timbre: borde punteado rectangular estilo sello
function Sello({
  children,
  rotate = 0,
  ink = C.tinta,
  className = '',
}: {
  children: React.ReactNode
  rotate?: number
  ink?: string
  className?: string
}) {
  return (
    <div
      className={`border-2 border-dashed px-4 py-3 ${className}`}
      style={{ borderColor: ink, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  )
}

export default function ImprentaMultigraf() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} tracking-[0.03em] uppercase`}>
            Multigraf<span style={{ color: C.rojo }}>.</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: C.papel,
          ink: C.tinta,
          line: 'rgba(32,28,22,0.2)',
          btnBg: C.amarillo,
          btnInk: C.tinta,
        }}
      />

      {/* ── Hero: orden de trabajo N° 2082 ── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28" style={{ backgroundColor: C.papel }}>
        <Reticula />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-16 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5`} style={{ color: C.rojo }}>
                Orden de trabajo N° 2082 · {BIZ.rubro}
              </p>
              <h1 className={`${display.className} uppercase text-[clamp(2.7rem,11vw,6.4rem)] leading-[0.92] tracking-[0.01em] mb-6`}>
                La imprenta
                <br />
                de <span style={{ color: C.azul }}>Maipú</span>
                <br />
                <span style={{ color: C.rojo }}>2082.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                Fotocopias, timbres, estampados y grabado láser en el local de
                la puerta roja — {BIZ.city}, {BIZ.region}.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-[0.06em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.rojo, color: '#FFF6E5' }}
                >
                  Encargar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-[0.06em] text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Cómo llegar →
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <figure className="relative border-2 border-dashed p-2 md:rotate-2" style={{ borderColor: C.tinta, backgroundColor: '#FFFDF6' }}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`${IMG}/fachada-puerta.webp`}
                    alt="Puerta de Imprenta MULTIGRAF en Maipú 2082, Molina, con la lista de servicios pintada en los vidrios"
                    fill
                    priority
                    sizes="(min-width: 768px) 38vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} flex items-baseline justify-between gap-3 px-1 pt-2 pb-1 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  <span>Adj. 1 — el local</span>
                  <span>Maipú 2082</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* cinta de sello repetido */}
        <div className="relative border-y-2" style={{ backgroundColor: C.amarillo, borderColor: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 overflow-hidden">
            <p className={`${mono.className} whitespace-nowrap text-xs md:text-sm uppercase tracking-[0.2em]`} style={{ color: C.tinta }}>
              Imprenta · Librería · Fotocopias · Estampados · Timbres · Plotter · Grabado láser · Imprenta · Librería · Fotocopias
            </p>
          </div>
        </div>
      </section>

      {/* ── Servicios: timbres estampados ── */}
      <section id="servicios" className="scroll-mt-20 relative" style={{ backgroundColor: C.papelBajo }}>
        <Reticula color="rgba(32,28,22,0.05)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.azul }}>
              Lo que dice la puerta
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-3`}>
              Timbre por <span style={{ color: C.rojo }}>timbre</span>
            </h2>
            <p className="text-sm md:text-base max-w-lg mb-10 md:mb-14" style={{ color: C.muted }}>
              La lista que va pintada en los vidrios del local — tal cual
              está en la puerta de Maipú.
            </p>
          </Reveal>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {SELLOS.map((g, gi) => (
              <Reveal key={g.grupo} delay={gi * 90}>
                <Sello rotate={gi === 1 ? 0.6 : -0.6} ink={gi === 0 ? C.azul : gi === 1 ? C.rojo : C.tinta} className="h-full" >
                  <p className={`${display.className} uppercase text-lg md:text-xl tracking-[0.04em] mb-4`} style={{ color: gi === 0 ? C.azul : gi === 1 ? C.rojo : C.tinta }}>
                    {g.grupo}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.1em] border px-2.5 py-1.5`}
                        style={{ borderColor: 'rgba(32,28,22,0.4)', backgroundColor: '#FFFDF6', color: C.tinta }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </Sello>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trabajos: etiquetas de pedido ── */}
      <section id="trabajos" className="scroll-mt-20" style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.amarillo }}>
              Fotos publicadas por la imprenta
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`}>
              De la mesa <span style={{ color: C.amarillo }}>a la mano</span>
            </h2>
          </Reveal>

          <div className="space-y-5">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.num} delay={i * 70}>
                <article
                  className={`grid md:grid-cols-12 gap-0 border border-dashed overflow-hidden ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                  style={{ borderColor: 'rgba(246,240,226,0.4)', backgroundColor: C.tintaSoft }}
                >
                  <div className="md:col-span-4 relative min-h-[220px] [direction:ltr]">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-8 px-6 md:px-9 py-7 md:py-8 flex flex-col justify-center [direction:ltr]">
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.amarillo }}>
                      {t.num}
                    </span>
                    <h3 className={`${display.className} uppercase text-2xl md:text-3xl tracking-[0.02em] mb-3`}>
                      {t.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(246,240,226,0.72)' }}>
                      {t.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas: la firma del cliente ── */}
      <section className="relative" style={{ backgroundColor: C.papel }}>
        <Reticula color="rgba(32,28,22,0.05)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <Reveal className="md:col-span-5">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.rojo }}>
              Lo que firman los clientes
            </p>
            <p className={`${display.className} leading-none text-[clamp(4rem,13vw,7rem)]`}>
              {BIZ.rating.toLocaleString('es-CL')}
              <span className="text-[0.38em]" style={{ color: C.muted }}>/5</span>
            </p>
            <div className="mt-3">
              <Stars value={BIZ.rating} color={C.azul} className="w-5 h-5" />
            </div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en Google Maps
            </p>
          </Reveal>
          <div className="md:col-span-7 space-y-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure className="border-2 border-dashed px-6 py-6" style={{ borderColor: C.tinta, backgroundColor: '#FFFDF6' }}>
                  <blockquote className="text-base md:text-lg leading-relaxed" style={{ color: C.tinta }}>
                    «{r.quote}»
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-4 pt-3 border-t border-dashed`} style={{ color: C.muted, borderColor: C.borde }}>
                    {r.author} · Reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                Rapidez y calidad es lo que repite quien encarga — el local
                lleva años imprimiendo en la misma esquina de Maipú.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El local: la boleta ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.papelBajo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.azul }}>
              Datos de la boleta
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.98] mb-6`}>
              La puerta roja<br />
              <span style={{ color: C.rojo }}>de Maipú</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <ul className="mb-8">
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-baseline justify-between gap-3 py-3 border-b border-dashed" style={{ borderColor: C.borde }}>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {h.dia}
                  </span>
                  <span className="flex-1 border-b border-dotted mx-2 -translate-y-1" style={{ borderColor: C.borde }} aria-hidden="true" />
                  <span className={`${display.className} uppercase text-base tracking-[0.03em]`}>
                    {h.hora}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.azul, color: '#FFF6E5' }}
              >
                Escribir a la imprenta
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(32,28,22,0.5)', color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-2 border-dashed p-2" style={{ borderColor: C.tinta, backgroundColor: '#FFFDF6' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full min-h-[320px] md:min-h-[380px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA: el sello de entregas rápidas ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.amarillo }}>
        <Reticula color="rgba(32,28,22,0.08)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            {/* el logo real: recorte de su propia bolsa de marca */}
            {/* eslint-disable-next-line @next/next/no-img-element -- recorte del logo real de su bolsa */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Logo circular de MULTIGRAF impreso en su bolsa amarilla: imprenta, librería, fotocopias y entregas rápidas"
              className="mx-auto mb-7 w-[220px] md:w-[280px] h-auto rounded-full shadow-md"
            />
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,8vw,4.6rem)] leading-[0.95] mb-5`} style={{ color: C.tinta }}>
              Entregas
              <br />
              <span style={{ color: C.rojo }}>rápidas.</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(32,28,22,0.75)' }}>
              Escríbeles por WhatsApp o llega directo a Maipú 2082 — atienden
              de lunes a sábado en el local de la puerta roja.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase tracking-[0.06em] text-sm md:text-base px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.tinta, color: C.amarillo }}
            >
              Escribir a MULTIGRAF
            </a>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-5`} style={{ color: 'rgba(32,28,22,0.7)' }}>
              {BIZ.phoneDisplay} · {BIZ.fijo} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase tracking-[0.05em] text-xl mb-1.5`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,240,226,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,240,226,0.6)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t mt-5" style={{ borderColor: 'rgba(246,240,226,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(246,240,226,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.papel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Fotos, logo y reseñas
            reales de su ficha de Google Maps; los textos de venta son de
            muestra.{' '}
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
