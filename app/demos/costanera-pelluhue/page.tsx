import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_CARTA, MAPS_URL, MAPS_EMBED, IMG, CARTA, HORARIOS } from './content'

/**
 * Costanera, Restorán & Bar (Pelluhue)
 * Idea visual: la terraza sobre la arena. Fondo arena, tinta azul mar
 * profundo y el teal de sus quitasoles como único acento. Marcellus por
 * el wordmark serif de su logo; la carta se presenta como carta real,
 * con los precios de su PDF oficial.
 */

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  arena: '#F3ECDC',
  arena2: '#EAE0CA',
  mar: '#0D2C36',
  marSuave: 'rgba(13,44,54,0.68)',
  line: 'rgba(13,44,54,0.18)',
  teal: '#0B6E78',
  tealOscuro: '#0E4650',
  espuma: '#EAF4F0',
  espumaSuave: 'rgba(234,244,240,0.72)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'costanera-pelluhue',
  title: 'Costanera, Restorán & Bar en Pelluhue',
  description:
    'Restorán y bar sobre la costanera de Pelluhue. Ceviches, tablas, terraza frente al mar y atardeceres con pisco sour. Reserva por WhatsApp.',
  image: `${IMG}/terraza-atardecer.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const REVIEWS = [
  {
    name: 'Yesica Ortiz',
    stars: 5,
    text: 'Excelente atención, la comida deliciosa y la terraza frente al mar es impagable. Lo mejor de Pelluhue.',
  },
  {
    name: 'Edgar López',
    stars: 5,
    text: 'Ceviches frescos, buenos tragos y la vista al atardecer. Siempre volvemos cuando venimos a la playa.',
  },
  {
    name: 'Cristian Escobar Iturra',
    stars: 5,
    text: 'Ambiente espectacular sobre la arena. Tablas generosas y pisco sour bien preparado.',
  },
]

function CartaGrupo({
  titulo,
  items,
}: {
  titulo: string
  items: readonly (readonly [string, string])[]
}) {
  return (
    <div>
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.teal }}>
        {titulo}
      </p>
      <ul className="space-y-2.5">
        {items.map(([plato, precio]) => (
          <li key={plato} className="flex items-baseline gap-2 text-[15px] md:text-base">
            <span style={{ color: C.mar }}>{plato}</span>
            <span aria-hidden="true" className="flex-1 border-b border-dotted" style={{ borderColor: C.line }} />
            <span className={`${mono.className} text-sm`} style={{ color: C.tealOscuro }}>{precio}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CostaneraPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.arena, color: C.mar }}
    >
      <style>{`
        .cp-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .cp-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .cp-btn:active { transform: translateY(0) scale(0.97); }
        .cp-btn:focus-visible { outline: 3px solid ${C.teal}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} tracking-[0.04em]`}>{BIZ.full}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar mesa"
        logoSrc={`${IMG}/logo-negro.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(13,44,54,0.94)',
          ink: C.espuma,
          line: 'rgba(234,244,240,0.18)',
          btnBg: C.teal,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la terraza al atardecer ── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/terraza-atardecer.webp`}
          alt="Terraza de Costanera sobre la playa de Pelluhue al atardecer"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,44,54,0.4) 0%, rgba(13,44,54,0.08) 42%, rgba(13,44,54,0.9) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-14 md:pb-16 pt-32">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img src={`${IMG}/logo-blanco.webp`} alt="" aria-hidden="true" className="h-12 w-12 rounded-full object-cover" />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: 'rgba(234,244,240,0.85)' }}>
                Restorán & Bar · Pelluhue
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={`${display.className} leading-[0.95] tracking-[0.02em] uppercase`}
              style={{ fontSize: 'clamp(3rem, 11vw, 7.5rem)', color: '#FFFFFF' }}
            >
              Costanera
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'rgba(234,244,240,0.9)' }}>
              La mesa está puesta sobre la arena: ceviches, tablas y pisco sour
              con el atardecer de la playa de Pelluhue al frente.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: C.teal, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className="cp-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: 'rgba(13,44,54,0.5)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex items-center gap-3">
              <Stars value={BIZ.rating} color="#EBC053" className="w-4 h-4" />
              <p className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(234,244,240,0.85)' }}>
                {String(BIZ.rating).replace('.', ',')} en Google, {BIZ.reviewsCount} reseñas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Línea de datos ── */}
      <section aria-label="Datos rápidos" style={{ backgroundColor: C.mar }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(234,244,240,0.2)' }}>
            {[
              ['Sobre la arena', 'Costanera de Pelluhue'],
              ['La terraza', 'Mesas frente al mar'],
              ['De tomar', 'Pisco sour al atardecer'],
            ].map(([k, v]) => (
              <div key={k} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0" style={{ borderColor: 'rgba(234,244,240,0.2)' }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(234,244,240,0.6)' }}>{k}</p>
                <p className={`${display.className} uppercase text-lg md:text-xl mt-1`} style={{ color: C.espuma }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-3`} style={{ color: C.teal }}>
              La carta de la casa
            </p>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,6vw,3.6rem)]`}>
              Mar que llega
              <br />
              a la mesa
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: C.marSuave }}>
              Precios reales de su carta publicada. La carta completa se pide
              en la mesa o por WhatsApp.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-x-10 gap-y-10">
            <Reveal>
              <CartaGrupo titulo="Ceviches" items={CARTA.ceviches} />
            </Reveal>
            <Reveal delay={80}>
              <CartaGrupo titulo="De la cocina" items={CARTA.cocina} />
            </Reveal>
            <Reveal delay={120}>
              <CartaGrupo titulo="Menú niños" items={CARTA.ninos} />
            </Reveal>
            <Reveal delay={160}>
              <div className="space-y-5">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.teal }}>
                    Tablas para compartir
                  </p>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.marSuave }}>{CARTA.tablas}</p>
                </div>
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.teal }}>
                    Ensaladas
                  </p>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.marSuave }}>{CARTA.ensaladas}</p>
                </div>
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.teal }}>
                    Aperitivos y bar
                  </p>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.marSuave }}>{CARTA.aperitivos}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <a
              href={WA_LINK_CARTA}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn tap-44 mt-10 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: C.mar, color: C.espuma }}
            >
              Pedir la carta completa por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La terraza: galería de mesa ── */}
      <section id="terraza" className="scroll-mt-16" style={{ backgroundColor: C.arena2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,6vw,3.6rem)]`}>
              La terraza sobre la arena
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: C.marSuave }}>
              Brindis, platos de mar y la mesa de afuera con vista directa a la
              playa. Así se pasa la tarde en Costanera.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
            <Reveal className="col-span-2 md:col-span-5">
              <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
                <Image src={`${IMG}/brindis.webp`} alt="Brindis con tragos en la terraza de Costanera" fill className="object-cover" sizes="(min-width: 768px) 42vw, 100vw" />
              </div>
            </Reveal>
            <Reveal delay={80} className="md:col-span-7">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image src={`${IMG}/choros-pisco.webp`} alt="Choros a la parmesana y pisco sour servidos en la mesa" fill className="object-cover" sizes="(min-width: 768px) 58vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-4">
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <Image src={`${IMG}/lasana.webp`} alt="Lasaña servida en Costanera" fill className="object-cover" sizes="(min-width: 768px) 33vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={160} className="md:col-span-4">
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <Image src={`${IMG}/mesa-terraza.webp`} alt="Mesa en la terraza de Costanera frente al mar" fill className="object-cover" sizes="(min-width: 768px) 33vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={200} className="md:col-span-4">
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <Image src={`${IMG}/jugo-mar.webp`} alt="Jugo natural en la mesa con el mar de fondo" fill className="object-cover" sizes="(min-width: 768px) 33vw, 50vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-16" style={{ backgroundColor: C.mar }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-3`} style={{ color: 'rgba(234,244,240,0.6)' }}>
              Lo que dicen los veraneantes
            </p>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,6vw,3.6rem)]`} style={{ color: C.espuma }}>
              La playa también se come
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure
                  className="h-full rounded-lg p-6 flex flex-col"
                  style={{ backgroundColor: 'rgba(234,244,240,0.06)', border: '1px solid rgba(234,244,240,0.18)' }}
                >
                  <Stars value={r.stars} color="#EBC053" className="w-3.5 h-3.5" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(234,244,240,0.92)' }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.14em]`}
                    style={{ color: 'rgba(234,244,240,0.68)' }}
                  >
                    {r.name}, reseña del sitio
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="mt-6 text-sm" style={{ color: C.espumaSuave }}>
              Testimonios publicados en su sitio oficial y nota {String(BIZ.rating).replace('.', ',')} con {BIZ.reviewsCount} reseñas en Google.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.espuma }}>
                Ver la ficha
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Horario + mapa ── */}
      <section id="contacto" className="scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            <Reveal className="md:col-span-5">
              <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,6vw,3.4rem)]`}>
                Sobre la costanera,
                <br />
                frente a la playa
              </h2>
              <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.marSuave }}>
                {BIZ.address}
                <br />
                {BIZ.region}
              </address>
              <ul className="mt-6 space-y-0">
                {HORARIOS.map((h) => (
                  <li
                    key={h.dias}
                    className="flex items-baseline justify-between gap-4 py-2.5"
                    style={{ borderBottom: `1px dashed ${C.line}` }}
                  >
                    <span className="text-sm md:text-base font-medium">{h.dias}</span>
                    <span className={`${mono.className} text-sm`} style={{ color: h.horas === 'Cerrado' ? C.marSuave : C.tealOscuro }}>
                      {h.horas}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
                  style={{ backgroundColor: C.teal, color: '#FFFFFF' }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="cp-btn tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
                  style={{ border: `1.5px solid ${C.mar}`, color: C.mar }}
                >
                  Llamar
                </a>
              </div>
              <p className="mt-6 text-sm" style={{ color: C.marSuave }}>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  Instagram {BIZ.igUser}
                </a>
                <span aria-hidden="true"> · </span>
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  Facebook
                </a>
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div
                className="relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-[16/10]"
                style={{ border: `1px solid ${C.line}`, backgroundColor: C.arena2 }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#08202A', color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-xl md:text-2xl mb-2 tracking-[0.04em]`}>{BIZ.full}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {BIZ.address} · {BIZ.city}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igUser}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.full}. Textos de muestra; carta y fotos reales del negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#7FD4DC' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.full}`} />
    </div>
  )
}
