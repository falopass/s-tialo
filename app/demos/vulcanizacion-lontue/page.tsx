/**
 * app/demos/vulcanizacion-lontue/page.tsx
 *
 * Mockup de muestra para Vulcanización Lontué (Lontué, Molina).
 * Idea: "pintado a mano en la lata" — el taller de la 7 de Abril con su
 * letrero rojo escrito a brocha, cinta de seguridad, bloques estampados
 * y la pared galvanizada del galpón.
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
  PEGAS,
  RESENAS,
  HORARIO,
  NAV_LINKS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})

export const metadata = demoMetadata({
  slug: 'vulcanizacion-lontue',
  title: 'Vulcanización Lontué | Demo de sitio web',
  description:
    'Así se vería el sitio de Vulcanización Lontué: el taller de neumáticos de la avenida 7 de Abril, en Lontué, Molina — con fotos y reseñas reales.',
  image: `${IMG}/fachada-letrero.webp`,
})

const C = {
  goma: '#16130F',
  gomaSoft: '#221E19',
  lata: '#E8E3D8',
  lataSoft: '#D9D3C6',
  rojo: '#9E2318',
  rojoBajo: '#7C1B12',
  ambar: '#E9B416',
  tinta: '#201C17',
  muted: '#5E5850',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

// Cinta de seguridad diagonal (amarillo/negro) — borde de la zona de trabajo
function CintaSeguridad({ invertida = false }: { invertida?: boolean }) {
  return (
    <div
      className="h-3 md:h-4 w-full"
      aria-hidden="true"
      role="presentation"
      style={{
        backgroundImage: invertida
          ? `repeating-linear-gradient(-45deg, ${C.ambar} 0 14px, ${C.goma} 14px 28px)`
          : `repeating-linear-gradient(45deg, ${C.ambar} 0 14px, ${C.goma} 14px 28px)`,
      }}
    />
  )
}

export default function VulcanizacionLontue() {
  return (
    <div className={body.className} style={{ backgroundColor: C.lata, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} tracking-[0.04em] uppercase`}>
            Vulcanización <span style={{ color: C.ambar }}>Lontué</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.goma,
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.ambar,
          btnInk: C.goma,
        }}
      />

      {/* ── Hero: la fachada pintada a mano ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.goma }}>
        <Image
          src={`${IMG}/fachada-letrero.webp`}
          alt="Fachada de Vulcanización Lontué: letrero rojo pintado a mano sobre la lata del galpón y neumáticos apilados en la entrada"
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
              'linear-gradient(180deg, rgba(22,19,15,0.5) 0%, rgba(22,19,15,0.2) 42%, rgba(22,19,15,0.9) 92%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pt-32 pb-8">
          <Reveal>
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4" style={{ color: C.ambar }}>
              {BIZ.rubro} · {BIZ.city}, {BIZ.comuna}
            </p>
            <h1 className={`${display.className} uppercase text-[clamp(2.6rem,10vw,6rem)] leading-[0.94] tracking-[0.01em] mb-6`} style={{ color: '#FFFFFF' }}>
              La rueda pinchada
              <br />
              <span style={{ color: C.ambar }}>se arregla aquí.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              El taller de neumáticos de la avenida 7 de Abril, en Lontué:
              parches, montaje e inflado, atendido por su propio dueño.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.ambar, color: C.goma }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] text-sm px-6 py-3 border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
        </div>
        <CintaSeguridad />
      </section>

      {/* ── Datos de taller ── */}
      <section aria-label="Datos del taller" style={{ backgroundColor: C.goma }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ul className="grid grid-cols-3 divide-x py-6 md:py-8" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
            {[
              { k: `${BIZ.rating.toLocaleString('es-CL')} ★`, v: `${BIZ.reviewCount} reseñas` },
              { k: '9:00–19:30', v: 'lunes a viernes' },
              { k: '7 de Abril 2816', v: 'Lontué' },
            ].map((s) => (
              <li key={s.k} className="px-4 md:px-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
                <p className={`${display.className} uppercase text-lg md:text-3xl tracking-[0.03em]`} style={{ color: C.lata }}>
                  {s.k}
                </p>
                <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-1" style={{ color: 'rgba(232,227,216,0.55)' }}>
                  {s.v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La pega del taller: bloques estampados ── */}
      <section id="pega" className="scroll-mt-20" style={{ backgroundColor: C.lata }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] mb-4" style={{ color: C.rojo }}>
              Lo que se hace en el galpón
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-12 md:mb-16 max-w-3xl`} style={{ color: C.tinta }}>
              La pega de todos <span style={{ color: C.rojo }}>los días</span>
            </h2>
          </Reveal>

          <div className="space-y-5 md:space-y-6">
            {PEGAS.map((p, i) => (
              <Reveal key={p.num} delay={i * 60}>
                <article
                  className={`grid md:grid-cols-12 gap-0 items-stretch border-2 overflow-hidden ${
                    i % 2 === 1 ? 'md:[direction:rtl]' : ''
                  }`}
                  style={{ borderColor: C.goma, backgroundColor: '#F2EEE4' }}
                >
                  <div className="md:col-span-5 relative min-h-[220px] [direction:ltr]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-7 px-6 md:px-10 py-8 md:py-10 flex flex-col justify-center [direction:ltr]">
                    <span
                      className={`${display.className} text-5xl md:text-7xl leading-none mb-3 select-none`}
                      style={{ color: C.rojo }}
                      aria-hidden="true"
                    >
                      {p.num}
                    </span>
                    <h3 className={`${display.className} uppercase text-2xl md:text-4xl tracking-[0.02em] mb-3`} style={{ color: C.tinta }}>
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas: la pared del taller ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.goma }}>
        <CintaSeguridad invertida />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-end mb-12 md:mb-16">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] mb-3" style={{ color: C.ambar }}>
                  Pintado por los clientes
                </p>
                <p className={`${display.className} leading-none text-[clamp(4rem,14vw,8rem)]`} style={{ color: C.lata }}>
                  {BIZ.rating.toLocaleString('es-CL')}
                  <span className="text-[0.4em]" style={{ color: 'rgba(232,227,216,0.7)' }}>/5</span>
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.rating} color={C.ambar} className="w-5 h-5" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] mt-3" style={{ color: 'rgba(232,227,216,0.6)' }}>
                  {BIZ.reviewCount} reseñas en Google Maps
                </p>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-md md:pb-4" style={{ color: 'rgba(232,227,216,0.78)' }}>
                «Ágil, rápido y eficiente», «se portó un 7 el dueño». La
                gente que para aquí en la 7 de Abril vuelve a contarlo.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 60}>
                <figure
                  className="h-full border-l-4 px-6 py-6 flex flex-col"
                  style={{ borderLeftColor: C.ambar, backgroundColor: C.gomaSoft }}
                >
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: C.lata }}>
                    «{r.quote}»
                  </blockquote>
                  <figcaption className="font-mono text-[10px] uppercase tracking-[0.16em] mt-5 pt-3 border-t" style={{ color: 'rgba(232,227,216,0.55)', borderColor: 'rgba(255,255,255,0.12)' }}>
                    {r.author} · Reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
        <CintaSeguridad />
      </section>

      {/* ── El taller está en Lontué ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.lata }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <div className="relative rounded-sm overflow-hidden h-full min-h-[300px] border-2" style={{ borderColor: C.goma }}>
              <Image
                src={`${IMG}/lontue-atardecer.webp`}
                alt="Atardecer en Lontué: la calle principal con el letrero vertical del pueblo y autos al volver del trabajo"
                fill
                sizes="(min-width: 768px) 45vw, 92vw"
                className="object-cover"
              />
              <span
                className={`${display.className} absolute bottom-3 left-3 uppercase tracking-[0.1em] text-xs px-3 py-1.5`}
                style={{ backgroundColor: 'rgba(22,19,15,0.9)', color: C.lata }}
              >
                Lontué, al caer la tarde
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] mb-4" style={{ color: C.rojo }}>
              Dónde queda
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: C.tinta }}>
              En Lontué,<br />
              <span style={{ color: C.rojo }}>comuna de Molina</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.comuna}, {BIZ.region}
            </address>
            <ul className="mb-8 divide-y" style={{ borderColor: 'rgba(32,28,23,0.14)' }}>
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: 'rgba(32,28,23,0.14)' }}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                    {h.dia}
                  </span>
                  <span className={`${display.className} uppercase text-base md:text-lg tracking-[0.03em] text-right`} style={{ color: C.tinta }}>
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
                className={`${display.className} uppercase tracking-[0.08em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Escribir al taller
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(32,28,23,0.4)', color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="px-5 md:px-8 max-w-6xl mx-auto pb-16 md:pb-24">
            <div className="overflow-hidden border-2 min-h-[300px]" style={{ borderColor: C.goma }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full min-h-[300px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CTA final rojo letrero ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.rojoBajo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            {/* el letrero real del taller, recortado de su propia foto */}
            {/* eslint-disable-next-line @next/next/no-img-element -- recorte del letrero real de la fachada */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Letrero pintado a mano «Vulcanización» en la lata del taller"
              className="mx-auto mb-8 w-[240px] md:w-[320px] h-auto rounded-sm shadow-lg"
            />
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,7.5vw,4.6rem)] leading-[0.95] mb-6`} style={{ color: C.lata }}>
              ¿Pinchaste
              <br />
              <span style={{ color: C.ambar }}>en Lontué?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(232,227,216,0.82)' }}>
              Escríbele al taller por WhatsApp o para directo en la 7 de
              Abril — la atiende su propio dueño.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase tracking-[0.08em] text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.ambar, color: C.goma }}
            >
              Escribir a Vulcanización Lontué
            </a>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] mt-5" style={{ color: 'rgba(232,227,216,0.85)' }}>
              {BIZ.phoneDisplay} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.goma, color: C.lata }}>
        <div className="border-t" style={{ borderColor: 'rgba(232,227,216,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} uppercase tracking-[0.05em] text-xl md:text-2xl mb-2`}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(232,227,216,0.62)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.comuna}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(232,227,216,0.62)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(232,227,216,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(232,227,216,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.lata }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Fotos, letrero y
            reseñas reales de su ficha de Google Maps; los textos de venta
            son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.ambar }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
