import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, INCLUYE } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
  ],
  variable: '--f-mono',
})

/**
 * Dirección de arte: «el final del camino». Pellines es un balneario chico
 * al término de la M-50 camino a Chanco — la página es una bitácora nocturna
 * de costa: fondo mar profundo de borde a borde, tipografía de señalética
 * (Anton), fotos verticales de sus cabañas, y el cierre en el atardecer que
 * revienta sobre las rocas que le dan el nombre. Acento único: el ámbar de
 * ese sol poniente. Fotos reales de su ficha de Google.
 */
const C = {
  mar: '#0E2230',
  marDeep: '#091722',
  roca: '#16303F',
  espuma: '#F0E9D8',
  ambar: '#E2903B',
  ambarSoft: '#F0B567',
  muted: 'rgba(240,233,216,0.72)',
  line: 'rgba(240,233,216,0.16)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'cabanasrocasdepellines',
  title: 'Cabañas Rocas de Pellines — cabañas a pasos del mar en Constitución',
  description:
    'Cabañas equipadas con piscina en Pellines, km 20 de la Ruta M-50 camino a Chanco, Constitución. 4,2 en Google. Reserva directa por WhatsApp.',
  image: `${IMG}/atardecer.webp`,
})

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'La costa', href: '#costa' },
  { label: 'Cómo llegar', href: '#llegar' },
]

export default function CabanasRocasDePellines() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} ${body.className}`}
      style={{ ...SPACING, backgroundColor: C.mar, color: C.espuma, fontFamily: 'var(--f-body), system-ui, sans-serif' }}
    >
      <BlitzNav
        name="Rocas de Pellines"
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{ over: 'dark', bar: C.marDeep, ink: C.espuma, line: C.line, btnBg: C.ambar, btnInk: '#091722' }}
        fontClass={display.className}
        ctaLabel="Reservar"
      />

      {/* ── Hero: el portón de entrada ── */}
      <section id="inicio" className="relative min-h-[96svh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/entrada.webp`}
          alt="Portón y letrero de madera en la entrada de Cabañas Rocas de Pellines"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(9,23,34,0.40) 0%, rgba(9,23,34,0.18) 45%, rgba(9,23,34,0.88) 100%)' }} />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-12 md:pb-16">
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.ambarSoft }}>
            Ruta M-50 · km 20 · camino a Chanco
          </p>
          <h1
            className="mt-3 uppercase leading-[0.95] text-[44px] md:text-[84px] tracking-tight"
            style={{ fontFamily: 'var(--f-display), sans-serif', color: C.espuma }}
          >
            Rocas de Pellines
          </h1>
          <p className="mt-4 max-w-[46ch] text-[15px] md:text-lg leading-relaxed font-medium" style={{ color: 'rgba(240,233,216,0.9)' }}>
            Cabañas de madera equipadas con piscina propia, en el balneario donde la costa se vuelve roca y el atardecer se cae al mar.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 text-[15px] font-extrabold tap-44"
              style={{ backgroundColor: C.ambar, color: '#091722' }}
            >
              Consultar disponibilidad
            </a>
            <span
              className="inline-flex items-center gap-2 h-12 px-4 text-sm font-bold"
              style={{ backgroundColor: 'rgba(9,23,34,0.6)', color: C.espuma }}
            >
              <Stars value={BIZ.rating} color={C.ambar} className="w-3.5 h-3.5" />
              {String(BIZ.rating).replace('.', ',')} en Google
            </span>
          </div>
        </div>
      </section>

      {/* ── Señal de ruta: km 20 ── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.marDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <Reveal>
            <div
              className="inline-flex flex-col items-center justify-center px-8 py-6 border-4"
              style={{ borderColor: C.ambar, fontFamily: 'var(--f-display), sans-serif' }}
            >
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.ambarSoft }}>
                Ruta M-50
              </span>
              <span className="text-[56px] md:text-[72px] leading-none" style={{ color: C.espuma }}>
                km 20
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="uppercase leading-[1.02] text-[26px] md:text-[38px]"
              style={{ fontFamily: 'var(--f-display), sans-serif' }}
            >
              Al final del camino, el mar
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {INCLUYE.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] md:text-[15px] leading-snug" style={{ color: C.muted }}>
                  <span className="mt-1.5 inline-block w-2 h-2 shrink-0" style={{ backgroundColor: C.ambar }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Las cabañas ── */}
      <section id="cabanas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className="uppercase leading-[1.0] text-[30px] md:text-[46px] tracking-tight max-w-[18ch]"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Madera, silencio y techo propio
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
            Cabañas de madera equipadas dentro de un predio cerrado: cocina completa, dormitorios con
            ropa de cama, terraza y estacionamiento a la puerta.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <Reveal className="col-span-2">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/complejo.webp`}
                  alt="Cabañas de Cabañas Rocas de Pellines vistas desde el predio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                El complejo desde dentro del predio
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={60}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/cabana-deck.webp`}
                  alt="Cabaña de madera con terraza en Rocas de Pellines"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Terraza con vista
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/cabana.webp`}
                  alt="Cabaña de madera de dos pisos entre árboles en Rocas de Pellines"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                La cabaña grande
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={60} className="col-span-2">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/dormitorio.webp`}
                  alt="Dormitorio de la cabaña con cama y revestimiento de madera"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Dormitorios con ropa de cama
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="col-span-2">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/cocina.webp`}
                  alt="Cocina equipada de la cabaña con refrigerador y cocina a gas"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Cocina completa para la estadía
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Piscina: franja completa ── */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={`${IMG}/piscina.webp`}
          alt="Piscina del complejo con juegos infantiles y cerros verdes al fondo"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end" style={{ background: 'linear-gradient(180deg, rgba(9,23,34,0.05) 30%, rgba(9,23,34,0.75) 100%)' }}>
          <p
            className={`${mono.className} max-w-6xl mx-auto w-full px-5 md:px-8 pb-5 text-[11px] md:text-xs uppercase tracking-[0.22em]`}
            style={{ color: 'rgba(240,233,216,0.95)' }}
          >
            La piscina del complejo, abierta en temporada
          </p>
        </div>
      </section>

      {/* ── La costa: rocas, playa, atardecer ── */}
      <section id="costa" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.ambarSoft }}>
            A pasos del complejo
          </p>
          <h2
            className="mt-3 uppercase leading-[1.0] text-[30px] md:text-[46px] tracking-tight max-w-[18ch]"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Las rocas que le dan nombre a la playa
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
            Pellines es un balneario tranquilo de arena negra y formaciones rocosas en la costa de
            Constitución. Al atardecer, el sol se mete justo detrás de las rocas — el espectáculo
            diario del sector.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <Reveal>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/atardecer.webp`}
                  alt="Atardecer sobre las rocas en la costa de Pellines"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                El sol cayendo sobre las rocas
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={60}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/rocas.webp`}
                  alt="Rocas en la orilla del mar de Pellines al atardecer"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Las rocas de la orilla
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="col-span-2 md:col-span-1">
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/playa.webp`}
                  alt="Playa de arena negra en Los Pellines, Constitución"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                La playa de Los Pellines
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" style={{ backgroundColor: C.marDeep }} className="border-t" >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center" style={{ borderColor: C.line }}>
          <Reveal>
            <h2
              className="uppercase leading-[1.0] text-[30px] md:text-[46px] tracking-tight"
              style={{ fontFamily: 'var(--f-display), sans-serif' }}
            >
              Reserva directa, sin vueltas
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region}. Desde Constitución son unos 20 km por la M-50
              hacia Chanco: el portón está a mano, con estacionamiento adentro.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 text-[15px] font-extrabold tap-44"
                style={{ backgroundColor: C.ambar, color: '#091722' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 text-[15px] font-bold border-2 tap-44"
                style={{ borderColor: 'rgba(240,233,216,0.45)', color: C.espuma }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de ubicación de Cabañas Rocas de Pellines en la Ruta M-50, Constitución"
                className="w-full aspect-[4/3]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#060F18', color: C.espuma }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-4">
          <p className="uppercase text-xl md:text-2xl" style={{ fontFamily: 'var(--f-display), sans-serif' }}>{BIZ.name}</p>
          <address className="not-italic mt-2 text-sm leading-relaxed" style={{ color: 'rgba(240,233,216,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(240,233,216,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-8 text-xs leading-relaxed" style={{ color: 'rgba(240,233,216,0.72)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.espuma }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con fotos de su ficha de Google Maps.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.ambarSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}, Constitución`} />
    </main>
  )
}
