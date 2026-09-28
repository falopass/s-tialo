import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PRODUCTO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900' }],
})

/**
 * Identidad: papel + tinta + taller de estampado.
 * La "mesa de trabajo" manda: hoja crema, tipografía de afiche,
 * etiquetas de precio y el amarillo del logo ISC sobre negro.
 * Nada de gradientes suaves: el motivo es la tinta sólida y
 * el borde de hoja troquelada.
 */
const C = {
  ink: '#191207',
  ink2: '#241B0C',
  paper: '#F7F1E3',
  paperDeep: '#EFE5CC',
  amber: '#F2A91E',
  amberDeep: '#B87A0B',
  amberSmall: '#8A5B06',
  red: '#A63F1E',
  muted: '#6E6046',
  line: 'rgba(25,18,7,0.16)',
  lineLight: 'rgba(247,241,227,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'gaspar-impresiones',
  title: 'Impresos San Clemente — Estampados y regalos personalizados',
  description:
    'Estampados, sublimación y regalos personalizados en Paula Montal 360, San Clemente. Tazones, poleras, manteles y letreros. Cotiza por WhatsApp.',
  image: `${IMG}/mesa.webp`,
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'Qué imprimimos', href: '#trabajos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const PIEZAS = [
  { src: `${IMG}/tazones.webp`, name: 'Tazones sublimados', tag: 'parejas, logos, frases', big: true },
  { src: `${IMG}/tazas.webp`, name: 'Tazas y vasos', tag: 'taza café · vaso vidrio' },
  { src: `${IMG}/letreros.webp`, name: 'Letreros y carteles', tag: 'a pedido por medida' },
  { src: `${IMG}/cojin.webp`, name: 'Cojines', tag: 'con tu diseño o foto' },
  { src: `${IMG}/roca-foto.webp`, name: 'Roca fotográfica', tag: 'cerámica con tu imagen' },
  { src: `${IMG}/manteles.webp`, name: 'Manteles', tag: 'estampado continuo' },
]

const TRABAJOS = [
  { n: 'Tazas y tazones', d: 'Sublimados con foto, logo o frase. El clásico de regalo que nunca falla.' },
  { n: 'Poleras y vestuario', d: 'Estampado de diseños completos, chilenos y ocasiones especiales.' },
  { n: 'Manteles y textiles', d: 'Estampado sobre tela para cocina, mesa y hogar.' },
  { n: 'Cojines y deco', d: 'Almohadones personalizados con la imagen que traigas.' },
  { n: 'Letreros y avisos', d: 'Carteles y letreros para negocio, barbería, local o feria.' },
  { n: 'Tarjetas e imanes', d: 'Tarjetas, imanes y piezas chicas para regalar o vender.' },
  { n: 'Roca fotográfica', d: 'Tu foto impresa sobre placa de cerámica con acabado de piedra.' },
]

const RESENAS = [
  {
    texto: 'Buen negocio para pedir tazas con imágenes y carteles personalizados.',
    autor: 'Andrés Becerra',
    nota: 'hace 7 meses',
  },
  {
    texto: 'Lindos vasos y tazones.',
    autor: 'Carlos Muñoz',
    nota: 'Google Maps',
  },
  {
    texto: 'Buen trabajo, buena calidad.',
    autor: 'Moises Martínez',
    nota: 'Google Maps',
  },
]

function Chip({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em]"
      style={{
        backgroundColor: light ? 'rgba(25,18,7,0.55)' : C.paperDeep,
        color: light ? C.paper : C.ink2,
        border: `1px solid ${light ? C.lineLight : 'rgba(25,18,7,0.22)'}`,
      }}
    >
      {children}
    </span>
  )
}

export default function GasparImpresionesPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: 'rgba(247,241,227,0.94)', ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.amber }}
      />

      {/* ── Hero: la hoja de trabajo ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        {/* regla de medida superior */}
        <div
          className="h-2.5 w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${C.amber} 0 14px, transparent 14px 28px)`,
            opacity: 0.9,
          }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-0 grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-end">
          <div className="pb-10 md:pb-16">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo Impresos San Clemente"
                  className="h-12 w-12 rounded-xl object-cover border-2"
                  style={{ borderColor: C.amber }}
                />
                <p className="text-[11px] md:text-xs uppercase tracking-[0.26em] font-bold" style={{ color: C.amber }}>
                  Estampados · Sublimación · San Clemente
                </p>
              </div>
              <h1
                className={`${display.className} uppercase leading-[0.94] text-[clamp(3rem,11vw,6.8rem)] mb-6`}
                style={{ color: C.paper }}
              >
                Tu idea
                <br />
                <span style={{ color: C.amber }}>en tinta</span>
                <br />
                y en mano
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(247,241,227,0.85)' }}>
                Tazones, poleras, manteles, letreros y regalos
                personalizados — impresos en el taller de Pasaje 5,
                Paula Montal 360, San Clemente.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase text-sm md:text-base px-7 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                  style={{ backgroundColor: C.amber, color: C.ink }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#mesa"
                  className={`${display.className} uppercase text-sm md:text-base px-7 py-3 rounded-lg border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(247,241,227,0.5)', color: C.paper }}
                >
                  Ver la mesa
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="relative">
            {/* hoja impresa inclinada sobre el negro */}
            <div
              className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none rotate-[-2deg] rounded-xl overflow-hidden border-[6px] shadow-2xl"
              style={{ borderColor: C.paper, boxShadow: '0 24px 60px rgba(0,0,0,0.55)' }}
            >
              <Image
                src={`${IMG}/mesa.webp`}
                alt="Mesa de trabajo de Impresos San Clemente con productos personalizados"
                width={1100}
                height={825}
                className="w-full h-auto object-cover"
                priority
              />
              <div
                className="absolute bottom-0 inset-x-0 px-4 py-2.5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] font-bold"
                style={{ backgroundColor: 'rgba(25,18,7,0.92)', color: C.amber }}
              >
                <span>La mesa del taller</span>
                <span>San Clemente, Maule</span>
              </div>
            </div>
          </Reveal>
        </div>
        {/* tira de datos */}
        <div className="border-t" style={{ borderColor: C.lineLight, backgroundColor: C.ink2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(247,241,227,0.9)' }}>
            <span>{BIZ.address}</span>
            <span className="flex items-center gap-2" style={{ color: C.amber }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.amber }} aria-hidden="true" />
              {BIZ.rating}★ · {BIZ.reviews} reseñas
            </span>
            <span>{BIZ.igUser}</span>
            <span className="hidden md:inline" style={{ color: C.amber }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La mesa: bento de productos ── */}
      <section id="mesa" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-end mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: C.red }}>
                  Fotos reales del taller
                </p>
                <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
                  Lo que sale
                  <br />
                  <em className="not-italic" style={{ color: C.amberDeep }}>de esta mesa</em>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Todo lo que se ve es trabajo real del taller de San
                Clemente: cada pieza parte de tu foto, tu logo o tu
                frase.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PIEZAS.map((p, i) => (
              <Reveal key={p.name} delay={i * 70} className={p.big ? 'col-span-2 row-span-2' : ''}>
                <figure
                  className="group relative rounded-xl overflow-hidden border bg-black h-full"
                  style={{ borderColor: 'rgba(25,18,7,0.3)', minHeight: p.big ? 'auto' : '180px' }}
                >
                  <div className={`relative w-full ${p.big ? 'aspect-square' : 'aspect-[4/3]'} h-full`}>
                    <Image
                      src={p.src}
                      alt={`${p.name} — ${BIZ.name}`}
                      fill
                      sizes={p.big ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  {/* etiqueta de precio */}
                  <figcaption
                    className="absolute left-3 bottom-3 right-3 md:right-auto md:max-w-[85%] rounded-md px-3 py-2 shadow-md"
                    style={{ backgroundColor: 'rgba(247,241,227,0.96)' }}
                  >
                    <span className={`${display.className} block uppercase text-sm md:text-base leading-tight`} style={{ color: C.ink }}>
                      {p.name}
                    </span>
                    <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: C.amberSmall }}>
                      {p.tag}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué imprimimos: menú impreso ── */}
      <section id="trabajos" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: C.amber }}>
                El menú del taller
              </p>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95] mb-6`} style={{ color: C.paper }}>
                Qué imprimimos
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(247,241,227,0.78)' }}>
                Llegas con la idea — una foto, un logo, un chiste de
                familia — y te vas con el producto listo. Lista de
                muestra según lo que se ve en sus publicaciones.
              </p>
              <div className="relative rounded-xl overflow-hidden border-4" style={{ borderColor: C.amber }}>
                <Image
                  src={`${IMG}/polera-estampamos.webp`}
                  alt={`Polera estampada por ${BIZ.name} con la frase "Estampamos lo que quieras"`}
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
              <a
                href={WA_LINK_PRODUCTO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase inline-block mt-6 text-sm md:text-base px-7 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: C.amber, color: C.ink }}
              >
                Pedir el mío
              </a>
            </Reveal>
            <div>
              {TRABAJOS.map((t, i) => (
                <Reveal key={t.n} delay={i * 60}>
                  <div
                    className="flex items-baseline gap-4 py-4 border-b"
                    style={{ borderColor: C.lineLight }}
                  >
                    <span className={`${display.className} text-lg md:text-xl w-9 shrink-0`} style={{ color: C.amber }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className={`${display.className} uppercase text-xl md:text-2xl leading-tight`} style={{ color: C.paper }}>
                        {t.n}
                      </h3>
                      <p className="text-sm leading-relaxed mt-1" style={{ color: 'rgba(247,241,227,0.72)' }}>
                        {t.d}
                      </p>
                    </div>
                    <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] font-bold shrink-0" style={{ color: C.amberDeep }}>
                      a pedido
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: C.red }}>
                  Lo que dicen en Google
                </p>
                <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
                  {BIZ.rating} estrellas,
                  <br />
                  <em className="not-italic" style={{ color: C.amberDeep }}>palabra de vecino</em>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.amberDeep} className="w-5 h-5" />
                <span className="text-sm font-bold" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google Maps
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <figure
                  className="rounded-xl p-6 border h-full flex flex-col"
                  style={{ backgroundColor: '#FFFDF4', borderColor: C.line, transform: `rotate(${i === 1 ? 0 : i === 0 ? -0.8 : 0.8}deg)` }}
                >
                  <Stars value={5} color={C.amberDeep} className="w-4 h-4 mb-4" />
                  <blockquote className="text-base leading-relaxed mb-5 flex-1" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold" style={{ color: C.red }}>
                      {r.autor}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                      {r.nota}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-bold underline underline-offset-4 decoration-2 transition-colors hover:opacity-70 tap-44"
              style={{ color: C.ink2, textDecorationColor: C.amber }}
            >
              Ver todas las reseñas en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: C.red }}>
              El taller
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95] mb-6`} style={{ color: C.ink }}>
              Pasaje 5,
              <br />
              <em className="not-italic" style={{ color: C.amberSmall }}>San Clemente</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <div className="flex flex-wrap gap-2.5 mb-8">
              <Chip>Pedidos por WhatsApp</Chip>
              <Chip>Retiro en el taller</Chip>
              <Chip>Regalos a pedido</Chip>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-sm md:text-base px-7 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.ink, color: C.amber }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-sm md:text-base px-7 py-3 rounded-lg border-2 transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                {BIZ.igUser}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-xl overflow-hidden border-4 shadow-lg h-full min-h-[320px]" style={{ borderColor: C.ink }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-lg object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-none`} style={{ color: C.paper }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-xs mt-1" style={{ color: 'rgba(247,241,227,0.75)' }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(247,241,227,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,241,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(247,241,227,0.75)' }}>
            Catálogo de muestra con fotos reales del taller; contacto y
            reseñas son públicos.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
