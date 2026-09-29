import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

const C = {
  papel: '#F4EAD6',
  papelOsc: '#E9DABC',
  ink: '#221210',
  muted: '#6B4F43',
  rojo: '#B4231F',
  rojoOsc: '#8E1B18',
  verde: '#14603B',
  line: 'rgba(34,18,16,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-mexicano',
  title: 'El Mexicano — Tacos, micheladas y más en Villa Alegre',
  description:
    'Restaurante mexicano en 12 de Octubre 420, Villa Alegre, Maule. Tacos, quesadillas, tortas y micheladas. Reserva por WhatsApp.',
  image: '/demos/el-mexicano/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La cantina', href: '#cantina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const CARTA = [
  { name: 'Tacos', desc: 'La estrella de la casa, con salsas de la mesa' },
  { name: 'Quesadillas', desc: 'Tortilla dorada con queso fundido' },
  { name: 'Tortas', desc: 'El sándwich mexicano, contundente' },
  { name: 'Alambre de vacuno', desc: 'El más nombrado en las reseñas' },
  { name: 'Micheladas', desc: 'El trago insignia: se menciona en 7 opiniones' },
  { name: 'Cocina chilena', desc: 'También platos tradicionales de acá' },
]

const PAPEL = ['#B4231F', '#E3A81C', '#14603B', '#6C2E8A', '#C9547F', '#2E7FA8']

const RESENAS = [
  {
    texto:
      'Lugar divino y ambiente especial para comer rico y pasarla bien.',
    nombre: 'Madeleine Guerrero',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Me encanta que exista un pequeño lugar que te transporte a México, lugar precioso, las micheladas espectaculares y la comida mexicana; también tienen comida tradicional de Chile.',
    nombre: 'Karina Apablaza',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Really cool place that feels like one is back in Los Angeles. I would highly recommend the alambre de vacuno and michelada.',
    nombre: 'Seba Ortiz',
    detalle: 'Local Guide en Google',
  },
]

function PapelPicado({ flip = false }: { flip?: boolean }) {
  // Motivo decorativo: guirnalda de papel picado (solo CSS, colores de fiesta).
  return (
    <div
      aria-hidden="true"
      className="relative h-[54px] overflow-hidden"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <div className="absolute top-0 inset-x-0 h-[3px]" style={{ backgroundColor: C.ink }} />
      <div className="absolute top-[3px] inset-x-0 flex justify-between px-2">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="w-[18px] md:w-[26px] h-[26px] md:h-[36px] shrink-0"
            style={{
              backgroundColor: PAPEL[i % PAPEL.length],
              borderRadius: '0 0 8px 8px',
              backgroundImage:
                'radial-gradient(circle 3px at 30% 62%, transparent 3px, rgba(0,0,0,0) 3.5px), radial-gradient(circle 3px at 70% 62%, transparent 3px, rgba(0,0,0,0) 3.5px)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function CintaHero() {
  return (
    <div
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.14em] flex flex-wrap gap-x-6 gap-y-1 font-medium`}
      style={{ color: 'rgba(255,255,255,0.85)' }}
    >
      <span>{BIZ.address}, {BIZ.city}</span>
      <span>abre hoy al mediodía</span>
      <span>{BIZ.rating} en Google ({BIZ.reviews} reseñas)</span>
    </div>
  )
}

export default function ElMexicanoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        .mx-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .mx-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .mx-btn:active { transform: translateY(0) scale(0.97); }
        .mx-btn:focus-visible { outline: 3px solid ${C.rojo}; outline-offset: 3px; }
        .mx-card { transition: transform 0.3s ease; }
        .mx-card:hover { transform: rotate(0deg) translateY(-4px) !important; }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} uppercase tracking-wide text-xl md:text-2xl`}>
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(244,234,214,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la terraza con el logo en el ventanal ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: '#170D0C' }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Terraza techada de El Mexicano: muro rojo, piso de mosaico y el logo en el ventanal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,13,12,0.55) 0%, rgba(23,13,12,0.15) 40%, rgba(23,13,12,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 pt-40">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mx-btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] px-4 py-2 mb-6 tap-44`}
              style={{ backgroundColor: C.papel, color: C.rojo }}
            >
              {BIZ.rating} ★ · {BIZ.reviews} reseñas en Google
            </a>
            <h1
              className={`${display.className} font-black uppercase leading-[0.92] tracking-[0.01em] text-[clamp(3.2rem,10vw,7.5rem)] mb-5`}
              style={{ color: '#FFF6E6' }}
            >
              un rincón de
              <br />
              <span style={{ color: '#F0B429' }}>México</span> en el{' '}
              <span style={{ color: '#F0B429' }}>Maule</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8 font-medium" style={{ color: 'rgba(255,246,230,0.9)' }}>
              Tacos, quesadillas, tortas y las micheladas que todos nombran.
              Cocina mexicana y chilena en {BIZ.address}, {BIZ.city}.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} mx-btn font-bold text-sm uppercase tracking-[0.12em] px-7 py-3 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFF6E6', borderRadius: '4px' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${body.className} mx-btn font-bold text-sm uppercase tracking-[0.12em] px-7 py-3 border-2 tap-44`}
                style={{ borderColor: 'rgba(255,246,230,0.55)', color: '#FFF6E6', borderRadius: '4px' }}
              >
                Ver la carta
              </a>
            </div>
            <CintaHero />
          </Reveal>
        </div>
        {/* guirnalda de papel picado cortando el hero */}
        <div className="relative">
          <PapelPicado />
        </div>
      </section>

      {/* ── La carta: pizarra + plato del día ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-14 border-b-4 pb-4" style={{ borderColor: C.ink }}>
            <h2 className={`${display.className} uppercase leading-[0.9] text-[clamp(2.6rem,7vw,5rem)]`}>
              lo que sale
              <br />
              de la cocina
            </h2>
            <p className={`${mono.className} hidden md:block text-xs uppercase tracking-[0.18em] text-right pb-2`} style={{ color: C.muted }}>
              cocina mexicana
              <br />+ chilena
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* pizarra */}
          <div className="col-span-12 md:col-span-7">
            <ul>
              {CARTA.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}>
                  <li
                    className="flex items-baseline gap-4 py-4 border-b border-dashed"
                    style={{ borderColor: C.line }}
                  >
                    <span
                      className={`${mono.className} text-xs font-bold w-7 shrink-0`}
                      style={{ color: C.rojo }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-none`}>
                        {p.name}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={120}>
              <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-6`} style={{ color: C.muted }}>
                la carta completa se arma con el local al publicar
              </p>
            </Reveal>
          </div>
          {/* plato de la pizarra */}
          <Reveal className="col-span-12 md:col-span-5" delay={100}>
            <figure
              className="border-4 p-2 pb-4 mx-card"
              style={{ borderColor: C.ink, backgroundColor: '#FFF9EC', transform: 'rotate(1.2deg)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta de El Mexicano: pechuga a la plancha con arroz y ensalada, $7.990"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} flex items-baseline justify-between text-xs md:text-sm font-bold uppercase tracking-[0.1em] pt-3 px-1`}>
                <span style={{ color: C.ink }}>pechuga a la plancha</span>
                <span style={{ color: C.rojo }}>$7.990</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── El pasillo de los murales: foto a sangre ── */}
      <section aria-label="Pasillo interior cubierto de murales">
        <Reveal>
          <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
            <Image
              src={`${IMG}/mural.webp`}
              alt="Pasillo de El Mexicano cubierto de murales coloridos con figuras mexicanas"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(23,13,12,0.35) 0%, rgba(23,13,12,0) 35%, rgba(23,13,12,0.65) 100%)',
              }}
            />
            <p
              className={`${mono.className} absolute bottom-4 right-5 md:right-8 text-[11px] md:text-xs uppercase tracking-[0.2em] px-2.5 py-1.5`}
              style={{ color: '#FFF6E6', backgroundColor: 'rgba(23,13,12,0.72)' }}
            >
              el pasillo de los murales
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Postales: las mesas y la terraza ── */}
      <section id="cantina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} uppercase leading-[0.9] text-[clamp(2.6rem,7vw,5rem)] mb-3`}>
            adentro y afuera,
            <br />
            <span style={{ color: C.rojo }}>puro mural</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-xl mb-12" style={{ color: C.muted }}>
            Madera, mosaico y paredes pintadas a mano. La terraza techada se
            llena al mediodía; adentro, cada pasillo es una postal distinta.
          </p>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          {[
            { src: `${IMG}/terraza.webp`, alt: 'Terraza de madera con mesa bajo los árboles y mural prehispánico', cap: 'la terraza techada', rot: '-1.6deg', span: 'md:col-span-5', ar: 'aspect-[4/5]' },
            { src: `${IMG}/mesa.webp`, alt: 'Alambre servido en la mesa con tortillas y tres salsas', cap: 'alambre a la mesa', rot: '1.4deg', span: 'md:col-span-4 md:mt-14', ar: 'aspect-[4/5]' },
            { src: `${IMG}/salon.webp`, alt: 'Corredor interior con techo de madera, piso de mosaico azul y murales', cap: 'el corredor azul', rot: '-0.8deg', span: 'md:col-span-3 md:mt-7', ar: 'aspect-[4/5]' },
          ].map((f, i) => (
            <Reveal key={f.src} className={`col-span-12 ${f.span}`} delay={i * 110}>
              <figure
                className="mx-card p-2.5 pb-4 shadow-lg"
                style={{ backgroundColor: '#FFF9EC', transform: `rotate(${f.rot})`, boxShadow: '0 10px 30px rgba(34,18,16,0.18)' }}
              >
                <div className={`relative ${f.ar} overflow-hidden`}>
                  <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className={`${mono.className} text-xs uppercase tracking-[0.14em] pt-3 text-center`} style={{ color: C.muted }}>
                  {f.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 border-y-4" style={{ borderColor: C.ink, backgroundColor: C.papelOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="col-span-12 md:col-span-4">
              <Reveal>
                <p className={`${display.className} leading-none text-[clamp(4rem,9vw,7rem)]`} style={{ color: C.rojo }}>
                  {BIZ.rating}
                </p>
                <div className="my-3">
                  <Stars value={4.3} color={C.rojo} className="w-5 h-5" />
                </div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-block text-xs uppercase tracking-[0.16em] font-bold underline underline-offset-4 mt-4 tap-44`}
                  style={{ color: C.rojo }}
                >
                  ver la ficha de Google
                </a>
              </Reveal>
            </div>
            <ul className="col-span-12 md:col-span-8 space-y-0">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 90}>
                  <li className={`py-6 ${i > 0 ? 'border-t' : ''}`} style={{ borderColor: C.line }}>
                    <blockquote className="text-base md:text-lg leading-relaxed font-medium mb-3">
                      “{r.texto}”
                    </blockquote>
                    <p className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      {r.nombre} · {r.detalle}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Ubicación: ficha + mapa ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} uppercase leading-[0.9] text-[clamp(2.6rem,7vw,5rem)] mb-12`}>
            12 de octubre 420,
            <br />
            <span style={{ color: C.rojo }}>villa alegre</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <dl className="space-y-5">
                <div className="border-b pb-5" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-1`} style={{ color: C.muted }}>dirección</dt>
                  <dd className="text-lg font-semibold">{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div className="border-b pb-5" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-1`} style={{ color: C.muted }}>horario</dt>
                  <dd>
                    <ul className={`${mono.className} text-sm leading-7`}>
                      {BIZ.hours.map(([d, h]) => (
                        <li key={d} className="flex justify-between gap-4">
                          <span className="capitalize">{d}</span>
                          <span style={{ color: C.muted }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="border-b pb-5" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-1`} style={{ color: C.muted }}>contacto</dt>
                  <dd className="space-y-1.5">
                    <p>
                      <a href={`tel:${BIZ.phoneTel}`} className="text-lg font-semibold underline underline-offset-4 tap-44">{BIZ.phoneDisplay}</a>
                    </p>
                    <p className={`${mono.className} text-xs`} style={{ color: C.muted }}>{BIZ.email}</p>
                    <p className={`${mono.className} text-xs`} style={{ color: C.muted }}>{BIZ.igUser}</p>
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-1`} style={{ color: C.muted }}>en el local</dt>
                  <dd className={`${mono.className} text-sm flex flex-wrap gap-x-5 gap-y-1`}>
                    <span>estacionamiento</span>
                    <span>pago con tarjeta</span>
                    <span>terraza techada</span>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <div className="border-4 overflow-hidden" style={{ borderColor: C.ink }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[320px] md:h-[460px] block"
                loading="lazy"
              />
            </div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: C.muted }}>
              a pasos del centro de {BIZ.city}, junto a la alameda
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final: bloque rojo ── */}
      <section aria-label="Reserva una mesa" className="relative" style={{ backgroundColor: C.rojoOsc }}>
        <PapelPicado />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase leading-[0.9] text-[clamp(3rem,9vw,6.5rem)] mb-6`} style={{ color: '#FFF6E6' }}>
              ven a comer
              <br />
              <span style={{ color: '#F0B429' }}>como en méxico</span>
            </h2>
            <p className="text-base md:text-lg max-w-md mx-auto mb-8 font-medium" style={{ color: 'rgba(255,246,230,0.85)' }}>
              Reserva tu mesa o pide para llevar. Se responde rápido por WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} mx-btn font-bold text-sm uppercase tracking-[0.12em] px-8 py-3 tap-44`}
                style={{ backgroundColor: '#FFF6E6', color: C.rojoOsc, borderRadius: '4px' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${body.className} mx-btn font-bold text-sm uppercase tracking-[0.12em] px-8 py-3 border-2 tap-44`}
                style={{ borderColor: 'rgba(255,246,230,0.5)', color: '#FFF6E6', borderRadius: '4px' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer className="border-t" style={{ borderColor: 'rgba(255,246,230,0.15)', backgroundColor: '#170D0C', color: 'rgba(255,246,230,0.75)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
            <p className={`${display.className} uppercase text-xl tracking-wide`} style={{ color: '#FFF6E6' }}>
              {BIZ.name} · {BIZ.city}
            </p>
            <nav aria-label="Redes" className={`${mono.className} flex flex-wrap gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.14em]`}>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44">instagram</a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44">facebook</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44">google maps</a>
            </nav>
          </div>
          <div className={`${mono.className} flex flex-wrap justify-between gap-x-8 gap-y-1 mt-5 pt-4 text-[10px] uppercase tracking-[0.14em] border-t`} style={{ borderColor: 'rgba(255,246,230,0.12)', color: 'rgba(255,246,230,0.6)' }}>
            <span>{BIZ.address} · {BIZ.rating}★ ({BIZ.reviews} reseñas)</span>
            <span>sitio de muestra · sitiazo.cl</span>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </div>
  )
}
