/**
 * app/demos/ferreteria-facon/page.tsx
 *
 * Mockup de muestra para Ferretería Facón (Molina).
 * Idea: "el letrero de la esquina" — papel crema, azul del rótulo de la
 * fachada, cinta de marcas reales del letrero y la pizarra de precios
 * que el local tiene escrita a tiza junto al portón.
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
  MARCAS,
  PIZARRA,
  ESTANTES,
  RESENAS,
  HORARIO,
  NAV_LINKS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
  ],
})

export const metadata = demoMetadata({
  slug: 'ferreteria-facon',
  title: 'Ferretería Facón — Molina | Demo de sitio web',
  description:
    'Así se vería el sitio de Ferretería Facón en Molina: materiales de construcción, herramientas y la atención de su dueño, con fotos y reseñas reales.',
  image: `${IMG}/fachada-dia.webp`,
})

const C = {
  papel: '#F5F0E2',
  papelSoft: '#EDE7D4',
  tinta: '#20242B',
  muted: '#5A5F66',
  azul: '#1C5D8F',
  azulDeep: '#123047',
  celeste: '#7FBCE6',
  line: 'rgba(32,36,43,0.16)',
  pizarra: '#1E2523',
  tiza: '#F0EBD8',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

function SelloResenas({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 border-2 rounded-lg px-4 py-3 ${className}`}
      style={{ borderColor: C.azul, backgroundColor: C.papel }}
    >
      <Stars value={BIZ.rating} color={C.azul} />
      <div>
        <p className={`${display.className} text-xl leading-none font-extrabold`} style={{ color: C.tinta }}>
          {BIZ.rating.toLocaleString('es-CL')}
        </p>
        <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
          {BIZ.reviewCount} reseñas en Google
        </p>
      </div>
    </div>
  )
}

// Tornillos en las esquinas de un marco de estante
function Tornillos({ color = 'rgba(32,36,43,0.4)' }: { color?: string }) {
  const p = 'absolute w-[7px] h-[7px] rounded-full'
  return (
    <>
      <span className={`${p} top-2 left-2`} style={{ backgroundColor: color }} aria-hidden="true" />
      <span className={`${p} top-2 right-2`} style={{ backgroundColor: color }} aria-hidden="true" />
      <span className={`${p} bottom-2 left-2`} style={{ backgroundColor: color }} aria-hidden="true" />
      <span className={`${p} bottom-2 right-2`} style={{ backgroundColor: color }} aria-hidden="true" />
    </>
  )
}

export default function FerreteriaFacon() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-extrabold tracking-wide`}>
            Ferretería <span style={{ color: C.azul }}>Facón</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: C.papel,
          ink: C.tinta,
          line: C.line,
          btnBg: C.azul,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el letrero de la esquina ── */}
      <section id="inicio" className="pt-[76px] md:pt-[92px]" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5`} style={{ color: C.azul }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase text-[clamp(2.6rem,8vw,4.6rem)] leading-[0.95] tracking-[0.01em] mb-6`}
              style={{ color: C.tinta }}
            >
              De todo para
              <br />
              la casa{' '}
              <span style={{ color: C.azul }}>y la obra.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              La ferretería de la esquina de Luis Cruz Martínez, en Molina:
              cemento, herramientas, pintura y ese repuesto chico que
              pensabas que no existía — atendida por su propio dueño.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.06em] text-sm px-6 py-3 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#estantes"
                className={`${display.className} font-bold uppercase tracking-[0.06em] text-sm px-6 py-3 rounded-md border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(32,36,43,0.4)', color: C.tinta }}
              >
                Ver los estantes
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-lg border-4"
                style={{ borderColor: C.azulDeep, boxShadow: '0 18px 40px -18px rgba(18,48,71,0.45)' }}
              >
                <Tornillos color="rgba(245,240,226,0.7)" />
                <Image
                  src={`${IMG}/fachada-dia.webp`}
                  alt="Fachada de Ferretería Facón en Luis Cruz Martínez, Molina, con su letrero de marcas y la pizarra de precios junto al portón"
                  width={1200}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="w-full h-auto object-cover"
                />
                <span
                  className={`${mono.className} absolute bottom-3 left-3 text-[10px] md:text-[11px] uppercase tracking-[0.16em] px-3 py-1.5 rounded`}
                  style={{ backgroundColor: 'rgba(18,48,71,0.92)', color: C.papel }}
                >
                  {BIZ.address} · {BIZ.city}
                </span>
              </div>
              <SelloResenas className="absolute -bottom-6 left-5 shadow-lg" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de marcas del letrero ── */}
      <section aria-label="Marcas del local" style={{ backgroundColor: C.azulDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <ul className="flex gap-3 overflow-x-auto snap-x pb-1 md:flex-wrap md:justify-center md:overflow-visible [scrollbar-width:none]">
            {MARCAS.map((marca) => (
              <li
                key={marca}
                className={`${display.className} shrink-0 snap-start uppercase tracking-[0.1em] text-sm md:text-base font-bold px-4 py-1.5 border rounded-sm`}
                style={{ borderColor: 'rgba(245,240,226,0.35)', color: C.papel }}
              >
                {marca}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La pizarra del local ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.celeste }}>
                Escrito a tiza
              </p>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-5`} style={{ color: C.tiza }}>
                La pizarra
                <br />
                <span style={{ color: '#8FBFD9' }}>del local</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm mb-6" style={{ color: 'rgba(240,235,216,0.75)' }}>
                Junto al portón, Facón anota a mano los precios del día —
                como en esta pizarra de su propia fachada. El valor final
                se confirma en el mostrador.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: C.celeste, textDecorationColor: 'rgba(62,143,194,0.4)' }}
              >
                Preguntar el precio de hoy →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid sm:grid-cols-2 gap-4">
                {PIZARRA.map((p) => (
                  <figure
                    key={p.item}
                    className="relative rounded-md border-2 px-6 py-8 text-center"
                    style={{ borderColor: 'rgba(240,235,216,0.3)', backgroundColor: '#161C1A' }}
                  >
                    <Tornillos color="rgba(240,235,216,0.35)" />
                    <figcaption
                      className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`}
                      style={{ color: 'rgba(240,235,216,0.65)' }}
                    >
                      {p.item}
                    </figcaption>
                    <p
                      className={`${display.className} font-extrabold text-4xl md:text-5xl leading-none`}
                      style={{ color: C.tiza, textShadow: '0 0 1px rgba(240,235,216,0.4)' }}
                    >
                      {p.price}
                    </p>
                  </figure>
                ))}
                <p
                  className={`${mono.className} sm:col-span-2 text-[10px] uppercase tracking-[0.14em] text-center pt-2`}
                  style={{ color: 'rgba(240,235,216,0.62)' }}
                >
                  Precios de la pizarra real del local · pueden variar
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Los estantes ── */}
      <section id="estantes" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.azul }}>
              Dos pisos de estantería
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] mb-4 max-w-3xl`} style={{ color: C.tinta }}>
              Como las ferreterías <span style={{ color: C.azul }}>de antes</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12 md:mb-16" style={{ color: C.muted }}>
              «Tiene de todo lo que busca», escriben sus clientes. Estos son
              los pasillos reales del local, fotografiados tal como están.
            </p>
          </Reveal>

          <div className="space-y-10 md:space-y-16">
            {ESTANTES.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <article
                  className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                    i % 2 === 1 ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  <div className="md:col-span-7 [direction:ltr]">
                    <div className="relative rounded-lg overflow-hidden border-4" style={{ borderColor: C.azulDeep }}>
                      <Tornillos color="rgba(245,240,226,0.7)" />
                      <Image
                        src={e.src}
                        alt={e.alt}
                        width={1200}
                        height={900}
                        sizes="(min-width: 768px) 58vw, 92vw"
                        className="w-full h-auto object-cover"
                      />
                      <span
                        className={`${display.className} absolute top-3 left-3 uppercase tracking-[0.14em] text-xs font-bold px-3 py-1.5 rounded-sm`}
                        style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
                      >
                        {e.tag}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-5 [direction:ltr]">
                    <span
                      className={`${mono.className} block text-[11px] uppercase tracking-[0.2em] mb-3`}
                      style={{ color: C.azul }}
                    >
                      Estante {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[0.98] mb-4`} style={{ color: C.tinta }}>
                      {e.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                      {e.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papelSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.azul }}>
              {BIZ.rating.toLocaleString('es-CL')} de 5 · {BIZ.reviewCount} reseñas en Google Maps
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] mb-12 md:mb-16 max-w-3xl`} style={{ color: C.tinta }}>
              Lo que dicen <span style={{ color: C.azul }}>en Molina</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 70}>
                <figure
                  className="relative h-full rounded-sm px-6 pt-8 pb-6 flex flex-col"
                  style={{
                    backgroundColor: '#FBF8EE',
                    boxShadow: '0 10px 24px -14px rgba(32,36,43,0.35)',
                    transform: `rotate(${i % 2 === 0 ? '-0.7' : '0.8'}deg)`,
                  }}
                >
                  <span
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 opacity-70"
                    style={{ backgroundColor: 'rgba(62,143,194,0.35)' }}
                    aria-hidden="true"
                  />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: C.tinta }}>
                    «{r.quote}»
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-5 pt-3 border-t`} style={{ color: C.muted, borderColor: C.line }}>
                    {r.author} · Reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={RESENAS.length * 70}>
              <div
                className="h-full min-h-[160px] rounded-sm border-2 border-dashed flex flex-col items-center justify-center gap-3 px-6 text-center"
                style={{ borderColor: 'rgba(28,93,143,0.45)' }}
              >
                <Stars value={BIZ.rating} color={C.azul} />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold uppercase tracking-[0.08em] text-sm px-5 py-2 rounded-md transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ color: C.azul }}
                >
                  Leer todas en Google Maps →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.azul }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.tinta }}>
              El local
              <br />
              <span style={{ color: C.azul }}>de la esquina</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>

            <ul className="mb-8 divide-y" style={{ borderColor: C.line }}>
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {h.dia}
                  </span>
                  <span className={`${display.className} text-base md:text-lg font-bold text-right`} style={{ color: C.tinta }}>
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
                className={`${display.className} font-bold uppercase tracking-[0.06em] text-sm px-6 py-3 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.06em] text-sm px-6 py-3 rounded-md border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(32,36,43,0.4)', color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-5`} style={{ color: C.muted }}>
              Despacho a domicilio · retiro en el local · empresa de mujeres
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden rounded-lg border-4 min-h-[320px] h-full relative"
              style={{ borderColor: C.azulDeep }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px] absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.azulDeep }}>
        <Image
          src={`${IMG}/fachada-atardecer.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2.2rem,7vw,4.2rem)] leading-[0.98] mb-6`} style={{ color: C.papel }}>
              ¿Te falta algo
              <br />
              <span style={{ color: '#8FBFD9' }}>en la casa?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,240,226,0.8)' }}>
              Escríbele a Facón por WhatsApp y consulta stock y precio
              directo al mostrador — te responde su propia gente.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-[0.06em] text-sm md:text-base px-8 py-4 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.papel, color: C.azulDeep }}
            >
              Escribir a Ferretería Facón
            </a>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-5`} style={{ color: 'rgba(245,240,226,0.6)' }}>
              {BIZ.phoneDisplay} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.azulDeep, color: C.papel }}>
        <div className="border-t" style={{ borderColor: 'rgba(245,240,226,0.16)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-extrabold uppercase tracking-[0.04em] text-xl md:text-2xl mb-2`}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,240,226,0.65)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,240,226,0.65)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,240,226,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(245,240,226,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.papel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Fotos, letrero,
            precios de la pizarra y reseñas reales de su ficha de Google
            Maps; los textos de venta son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: '#8FBFD9' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
