import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

/**
 * Dirección de arte: «boutique de piel» — el fucsia real de la marca
 * sobre ciruela profundo y crema rosado, composición centrada y
 * láminas con el material gráfico real del estudio. Syne para el
 * titular, DM Sans para el texto, IBM Plex Mono para fichas.
 */
const C = {
  crema: '#FDF4F7',
  fucsia: '#B5145F',
  fucsiaSuave: '#F6DCE8',
  ciruela: '#31101F',
  ciruela2: '#4A2337',
  ink: '#31101F',
  muted: '#6E4760',
  line: 'rgba(181,20,95,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'mi-laser-talca',
  title: 'Mi Láser Talca — Depilación láser en el centro de Talca',
  description:
    'Depilación láser Alexandrita en Edificio Plaza Talca, piso 9. 5.0 estrellas en 40 reseñas de Google. Agenda tu evaluación por WhatsApp.',
  image: `${IMG}/logo.webp`,
})

const NAV_LINKS = [
  { label: 'El tratamiento', href: '#tratamiento' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Visítanos', href: '#visitanos' },
]

const LASER = [
  {
    n: '01',
    t: 'Mayor afinidad a la melanina',
    d: 'El láser Alexandrita apunta al pigmento del vello: más efectivo sesión a sesión, con menor impacto en la piel.',
  },
  {
    n: '02',
    t: 'Ideal para zonas grandes',
    d: 'Piernas, espalda y pecho se tratan rápido: el sistema reduce el tiempo de cada sesión.',
  },
  {
    n: '03',
    t: 'Tecnología respaldada',
    d: 'Equipo confiable y efectivo, respaldado por dermatólogos, con evaluación previa incluida.',
  },
]

const RESENAS = [
  {
    q: 'Excelentes profesionales y servicio. Llevo meses asistiendo y es lo mejor; muy buena atención, tanto profesional como estética.',
    who: 'Vanessa Villalobos Meza',
  },
  {
    q: 'Excelente atención. Las profesionales son muy claras con las instrucciones antes, durante y después de la sesión; amables y cercanas. 100% recomendado.',
    who: 'Beatriz Cuevas',
  },
  {
    q: 'Llevo 3 sesiones y desde la primera vi una gran diferencia en la zona. Muy feliz con los resultados.',
    who: 'Natalia Cortés',
  },
  {
    q: 'Un lugar muy cómodo, el personal súper profesional. Por lejos la mejor experiencia: los cambios en las zonas tratadas son maravillosos.',
    who: 'Nataly Martínez',
  },
]

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#F49BC1' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function MiLaserTalcaPage() {
  return (
    <div
      className={`${body.className} mlt min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .mlt a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(253,244,247,0.96)',
          ink: C.ciruela,
          line: C.line,
          btnBg: C.fucsia,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero centrado: logo real sobre ciruela ── */}
      <section id="inicio" className="relative overflow-hidden pt-[100px] md:pt-[130px] pb-12 md:pb-16" style={{ backgroundColor: C.ciruela }}>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-72"
          style={{ background: 'radial-gradient(closest-side at 50% 0%, rgba(181,20,95,0.5), transparent)' }}
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            {/* logo real del perfil */}
            <div className="mx-auto w-[210px] md:w-[260px] rounded-3xl overflow-hidden shadow-2xl mb-8" style={{ border: '1px solid rgba(253,244,247,0.25)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real del negocio */}
              <img src={`${IMG}/logo.webp`} alt={`Logo real de ${BIZ.name}`} className="w-full block" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} text-[34px] md:text-[56px] leading-[1.05] font-extrabold mb-5`} style={{ color: '#FDF4F7' }}>
              Piel suave, sin dramas,{' '}
              <span style={{ color: '#F49BC1' }}>en el piso 9</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-7" style={{ color: '#E9B9D2' }}>
              Depilación láser Alexandrita en el Edificio Plaza Talca,
              a cargo de la kinesióloga Jessica Cáceres. Agenda tu
              evaluación por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 mb-8" style={{ backgroundColor: 'rgba(253,244,247,0.1)', border: '1px solid rgba(253,244,247,0.28)' }}>
              <Stars value={5} color="#F49BC1" />
              <span className="text-sm font-bold" style={{ color: '#FDF4F7' }}>
                5.0 · {BIZ.googleReviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center h-[52px] px-9 rounded-full text-lg font-bold transition-transform active:scale-95 tap-44 w-full sm:w-auto`}
                style={{ backgroundColor: C.fucsia, color: '#FFFFFF' }}
              >
                Agenda tu evaluación
              </a>
              <a
                href={BIZ.igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-semibold border-2 transition-colors hover:bg-white/10 tap-44 w-full sm:w-auto"
                style={{ borderColor: 'rgba(253,244,247,0.4)', color: '#FDF4F7' }}
              >
                {BIZ.igHandle} en Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Banda récord perfecto ── */}
      <section style={{ backgroundColor: C.fucsia }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-center">
          <p className={`${display.className} text-2xl md:text-3xl font-extrabold`} style={{ color: '#FFFFFF' }}>
            {BIZ.googleReviews} reseñas
          </p>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: '#FCE0EC' }}>
            todas con 5 estrellas en Google
          </p>
        </div>
      </section>

      {/* ── El tratamiento: datos de su propio material ── */}
      <section id="tratamiento" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3 text-center`} style={{ color: C.fucsia }}>
              Láser Alexandrita
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-tight mb-12 text-center`} style={{ color: C.ciruela }}>
              Menos sesiones, más piel libre
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {LASER.map((f, i) => (
              <Reveal key={f.n} delay={i * 80}>
                <div
                  className="h-full rounded-3xl p-6 md:p-7"
                  style={{ backgroundColor: i === 1 ? C.ciruela : '#FFFFFF', border: `1px solid ${i === 1 ? 'transparent' : C.line}` }}
                >
                  <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-4`} style={{ color: i === 1 ? '#F49BC1' : C.fucsia }}>
                    {f.n}
                  </p>
                  <p className={`${display.className} text-lg md:text-xl font-bold mb-2`} style={{ color: i === 1 ? '#FDF4F7' : C.ciruela }}>
                    {f.t}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: i === 1 ? '#E9B9D2' : C.muted }}>
                    {f.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* láminas reales del estudio */}
          <div className="mt-12 grid md:grid-cols-[1fr_0.8fr] gap-5 items-stretch">
            <Reveal>
              <figure className="rounded-3xl overflow-hidden h-full relative" style={{ border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[340px]">
                  <Image
                    src={`${IMG}/promo.webp`}
                    alt={`Pieza gráfica real de ${BIZ.name}: "cuida tu piel y siéntete cómoda"`}
                    fill
                    sizes="(min-width: 768px) 55vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-full`} style={{ backgroundColor: 'rgba(49,16,31,0.85)', color: '#FDF4F7' }}>
                  Material real de su Instagram
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl p-6 md:p-8 flex flex-col justify-between" style={{ backgroundColor: C.fucsiaSuave, border: `1px solid ${C.line}` }}>
                <div>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.fucsia }}>
                    Quién atiende
                  </p>
                  <p className={`${display.className} text-2xl md:text-3xl font-extrabold leading-tight mb-3`} style={{ color: C.ciruela }}>
                    Jessica Cáceres, kinesióloga
                  </p>
                  <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                    Atención profesional y cercana: cada sesión parte con
                    la evaluación de tu piel y las indicaciones claras,
                    antes, durante y después.
                  </p>
                </div>
                <figure className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- tarjeta real del negocio */}
                  <img
                    src={`${IMG}/tarjeta.webp`}
                    alt={`Tarjeta de presentación real de ${BIZ.name} con los datos de contacto`}
                    className="w-full block"
                  />
                  <figcaption className={`${mono.className} text-[9px] uppercase tracking-[0.18em] px-3 py-2`} style={{ backgroundColor: '#FFFFFF', color: C.muted }}>
                    Su tarjeta, publicada en su ficha
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: muro de 5 estrellas ── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.ciruela }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-tight mb-2 text-center`} style={{ color: '#FDF4F7' }}>
              40 veces cinco estrellas
            </h2>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] text-center mb-10`} style={{ color: '#E9B9D2' }}>
              Reseñas reales de su ficha de Google
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.who} delay={(i % 2) * 80}>
                <figure
                  className="h-full rounded-3xl p-6 md:p-7 flex flex-col justify-between"
                  style={{ backgroundColor: 'rgba(253,244,247,0.07)', border: '1px solid rgba(253,244,247,0.18)' }}
                >
                  <div>
                    <Stars value={5} color="#F49BC1" className="w-3.5 h-3.5" />
                    <blockquote className="text-[15px] md:text-base leading-relaxed mt-4 mb-5" style={{ color: '#FDF4F7' }}>
                      «{r.q}»
                    </blockquote>
                  </div>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: '#E9B9D2' }}>
                    {r.who} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visítanos: el edificio en el centro ── */}
      <section id="visitanos" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="rounded-[28px] overflow-hidden grid md:grid-cols-2" style={{ border: `1px solid ${C.line}`, backgroundColor: '#FFFFFF' }}>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.fucsia }}>
                  Visítanos
                </p>
                <h2 className={`${display.className} text-3xl md:text-4xl font-extrabold leading-tight mb-5`} style={{ color: C.ciruela }}>
                  Piso 9 del Edificio Plaza Talca
                </h2>
                <address className="not-italic text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                </address>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center justify-center h-[52px] px-8 rounded-full text-lg font-bold transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.fucsia, color: '#FFFFFF' }}
                  >
                    Agenda por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-semibold border-2 transition-colors tap-44"
                    style={{ borderColor: C.fucsia, color: C.fucsia }}
                  >
                    Cómo llegar
                  </a>
                </div>
                <p className={`${mono.className} text-[11px] tracking-[0.08em] mt-6`} style={{ color: C.muted }}>
                  {BIZ.phoneDisplay} · {BIZ.email}
                </p>
              </Reveal>
            </div>
            <div className="min-h-[280px] md:min-h-[380px]">
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[280px] md:min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ciruela, color: '#FDF4F7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-end justify-between gap-5" style={{ borderColor: 'rgba(253,244,247,0.16)' }}>
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: '#E9B9D2' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={BIZ.igUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.igHandle}
              </a>
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: '#E9B9D2' }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(253,244,247,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: '#EBC7D8' }}>
            Los textos explicativos son de muestra; el logo, las láminas,
            la tarjeta, el WhatsApp, la dirección y las reseñas son reales
            de su ficha de Google y su Instagram.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
