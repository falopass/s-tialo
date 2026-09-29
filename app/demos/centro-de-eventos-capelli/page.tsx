import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la invitación» — el sobre formal de una boda:
 * noche profunda, oro del logo de Capelli y serif romana, con la
 * colección de autos antiguos como el sello propio de la casa.
 * Marcellus hace de tipografía de invitación; Jost lleva el papel.
 */
const C = {
  night: '#0D1119',
  night2: '#131926',
  gold: '#C8A04F',
  goldSoft: '#E3C98D',
  ivory: '#F2EDDF',
  muted: '#8E94A3',
  line: 'rgba(242,237,223,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-de-eventos-capelli',
  title: 'Centro de Eventos Capelli — matrimonios y galas en la K-610, Talca',
  description:
    'Centro de Eventos Capelli en Ruta K-610 km 3, Talca: salón, piscina, jardines y su colección de autos antiguos. Cotiza tu evento por WhatsApp.',
  image: '/demos/centro-de-eventos-capelli/noche.webp',
})

const NAV_LINKS = [
  { label: 'El lugar', href: '#lugar' },
  { label: 'Los autos', href: '#autos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cotizar', href: '#cotizar' },
]

const LUGAR = [
  { src: 'salon', alt: 'Pareja de novios celebrando en el salón iluminado de Capelli', pie: 'El salón' },
  { src: 'piscina', alt: 'Casa de eventos con piscina y jardines de día', pie: 'Piscina y jardines' },
  { src: 'torta', alt: 'Torta de matrimonio con chispas mientras la fiesta sigue atrás', pie: 'La fiesta' },
]

const RESENAS = [
  {
    quote: 'Nos casamos ahí y salió todo de maravilla. La comida muy abundante y rica, linda decoración, el DJ impecable y el personal un 7.',
    who: 'Rodrigo Núñez Cortés · reseña de Google',
  },
  {
    quote: 'Un lugar maravilloso, una coordinación perfecta y amabilidad de todos sus trabajadores. Mil gracias, en especial a Don Freddy.',
    who: 'Claudia Tatiana Valdés Morales · reseña de Google',
  },
  {
    quote: 'Preparado para este tipo de eventos: amplios estacionamientos, decoraciones, buena atención del personal y comida excelente.',
    who: 'Francisco Padilla · reseña de Google',
  },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-8 py-2.5 rounded-full font-semibold text-[15px] tracking-wide transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44"
      style={{ backgroundColor: C.gold, color: C.night }}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

// Filete de invitación: línea, rombo, línea.
function Filete({ className = 'my-6' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="block h-px w-14" style={{ backgroundColor: C.gold }} />
      <span className="block w-2 h-2 rotate-45" style={{ backgroundColor: C.gold }} />
      <span className="block h-px w-14" style={{ backgroundColor: C.gold }} />
    </div>
  )
}

export default function CentroDeEventosCapelliPage() {
  return (
    <div className={`${body.className} min-h-[100dvh] antialiased`} style={{ backgroundColor: C.night, color: C.ivory }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(13,17,25,0.95)', ink: C.ivory, line: C.line, btnBg: C.gold, btnInk: C.night }}
      />

      {/* ── La invitación ──────────────────────────────────── */}
      <section id="inicio" className="pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <figure className="w-20 md:w-24 mx-auto mb-6">
              <Image src={`${IMG}/logo.webp`} alt="Logo dorado de Eventos Capelli" width={220} height={280} className="w-full h-auto" priority />
            </figure>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.gold }}>
              {BIZ.city} · {BIZ.address}
            </p>
            <Filete />
            <h1 className={`${display.className} leading-[1.04] text-[clamp(2.4rem,8vw,4.8rem)]`}>
              Una noche que
              <br />
              se recuerda
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
              Salón, jardines, piscina y una colección de autos antiguos que nadie más tiene. Matrimonios, galas y celebraciones coordinadas de punta a punta.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <WaButton>Cotizar tu fecha</WaButton>
              <p className={`${mono.className} self-center text-sm`} style={{ color: C.goldSoft }}>
                ★ {BIZ.googleRating.toLocaleString('es-CL')} · {BIZ.googleReviews} reseñas
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="mt-12">
              <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border" style={{ borderColor: C.gold }}>
                <Image
                  src={`${IMG}/noche.webp`}
                  alt="La casa de Capelli iluminada de fucsia y morado en la noche"
                  fill
                  priority
                  sizes="(min-width:1200px) 900px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                La casa de noche, con su marca dorada
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── El lugar ───────────────────────────────────────── */}
      <section id="lugar" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center pb-10">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`}>
              Salón, jardines y piscina
            </h2>
            <Filete className="mt-6 mb-0" />
            <p className="mt-4 text-sm md:text-base max-w-lg mx-auto" style={{ color: C.muted }}>
              Espacios preparados para eventos completos: de la ceremonia a la última canción.
            </p>
          </div>
          <ul className="grid md:grid-cols-3 gap-5">
            {LUGAR.map((l, i) => (
              <li key={l.src} className={i === 1 ? 'md:-mt-6' : ''}>
                <Reveal delay={i * 80}>
                  <figure>
                    <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.night2 }}>
                      <Image
                        src={`${IMG}/${l.src}.webp`}
                        alt={l.alt}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <figcaption className={`${display.className} mt-3 text-center text-xl`} style={{ color: C.goldSoft }}>
                      {l.pie}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={100}>
            <figure className="mt-10">
              <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden" style={{ backgroundColor: C.night2 }}>
                <Image
                  src={`${IMG}/atardecer.webp`}
                  alt="Atardecer rosado sobre la piscina de Capelli"
                  fill
                  sizes="(min-width:1200px) 1150px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.2em] text-center`} style={{ color: C.muted }}>
                El atardecer sobre la piscina
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La colección: los autos antiguos ───────────────── */}
      <section id="autos" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.night2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-4`} style={{ color: C.gold }}>
                El sello de la casa
              </p>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`}>
                Los autos antiguos
                <br />
                de la colección
              </h2>
              <p className="text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                En el mismo predio vive una colección de clásicos que los propios invitados nombran en las reseñas: la Ford amarilla que ya sale en todas las fotos de los matrimonios.
              </p>
              <figure className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${IMG}/boda-auto.webp`}
                  alt="Cortejo de matrimonio posando junto a un auto antiguo amarillo"
                  fill
                  sizes="(min-width:768px) 45vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                El clásico que sale en las fotos de las bodas
              </figcaption>
            </Reveal>
            <div className="flex flex-col gap-5">
              <Reveal delay={120}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/ford.webp`}
                      alt="Camioneta Ford antigua amarilla sobre el pasto del predio"
                      fill
                      sizes="(min-width:768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    La Ford amarilla del jardín
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={200}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/autos.webp`}
                      alt="Fila de autos antiguos estacionados bajo techo en el predio"
                      fill
                      sizes="(min-width:768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    Parte de la colección bajo techo
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ─────────────────────────────────────────── */}
      <section id="resenas" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center pb-10">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`}>
              «Salió todo de maravilla»
            </h2>
            <Filete className="mt-6 mb-0" />
          </div>
          <ul className="grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <li key={r.who}>
                <Reveal delay={i * 80} className="h-full">
                  <blockquote className="h-full border p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.night2 }}>
                    <p className="text-base leading-relaxed flex-1">{r.quote}</p>
                    <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.gold }}>
                      ★★★★★ {r.who}
                    </footer>
                  </blockquote>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Cotizar y llegar ───────────────────────────────── */}
      <section id="cotizar" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.night2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`}>
              Reserva tu fecha
            </h2>
            <p className="text-base leading-relaxed mb-3 max-w-md" style={{ color: C.muted }}>
              <strong className="text-[#F2EDDF]">{BIZ.address}</strong>, {BIZ.city}. Visitas coordinadas por WhatsApp.
            </p>
            <ul className={`${mono.className} text-sm space-y-1.5 mt-5 mb-7`}>
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex justify-between max-w-xs gap-6" style={{ color: C.muted }}>
                  <span>{h.dia}</span>
                  <span className="font-bold" style={{ color: C.ivory }}>{h.hora}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <WaButton>Cotizar por WhatsApp</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 rounded-full font-semibold text-[15px] border transition-colors hover:bg-[#F2EDDF] hover:text-[#0D1119] tap-44"
                style={{ borderColor: C.ivory, color: C.ivory }}
              >
                Abrir ruta en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden border-2 min-h-[300px] h-full" style={{ borderColor: C.gold, backgroundColor: C.night }}>
              <LazyMap
                title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer style={{ backgroundColor: '#080B11', color: C.ivory }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,237,223,0.55)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(242,237,223,0.55)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ivory }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ivory }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
