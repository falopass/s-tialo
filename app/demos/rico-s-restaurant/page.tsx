import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EVENTO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  carbon: '#141210',
  humo: '#1E1A16',
  rojo: '#E14B3A',
  rojoOsc: '#B93527',
  rojoClaro: '#F0685A',
  crema: '#F2EAD9',
  piedra: '#B9AE9C',
  muted: 'rgba(242,234,217,0.62)',
  line: 'rgba(242,234,217,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'rico-s-restaurant',
  title: "Rico's Restaurant — parrilla, schop y banquetería en San Javier",
  description:
    "El restaurant del letrero rojo sobre Balmaceda: parrilladas, menú ejecutivo, cócteles de mariscos, postres de vitrina y banquetería para eventos en San Javier.",
  image: '/demos/rico-s-restaurant/hero.webp',
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  'Menú ejecutivo',
  'A la carta',
  'Parrilladas',
  'Cócteles de mariscos',
  'Postres de vitrina',
  'Banquetería',
  'Cerveza artesanal',
]

const PLATOS = [
  {
    src: `${IMG}/entrada.webp`,
    alt: 'Tabla de parrillada con camarones y carne alrededor de una salsa fresca',
    tag: 'La tabla',
    name: 'Parrillada para compartir',
    desc: 'Carnes y camarones a la tabla, con su pebre al centro. El plato que se pide para el medio de la mesa.',
  },
  {
    src: `${IMG}/coctel.webp`,
    alt: 'Copas de cóctel de camarones y pescado con verduras frescas picadas',
    tag: 'Para empezar',
    name: 'Cóctel de mariscos',
    desc: 'Copa fría con camarones y pescado, cilantro y ají. De las entradas que se repiten en la carta.',
  },
  {
    src: `${IMG}/mesa.webp`,
    alt: 'Mesa con trozo de torta, lámina de leche y jugo de frambuesa junto a la vitrina de postres',
    tag: 'De la vitrina',
    name: 'Postres y algo dulce',
    desc: 'Tortas de la vitrina, lámina con crema y jugo de frambuesa. También para llevar.',
  },
]

const RESENAS = [
  {
    txt: 'Excelente restaurante donde puedes encontrar colaciones, menú ejecutivo y a la carta, jugos naturales, bebidas, cervezas, vinos además de una gama de exquisitos postres que puedes adquirir para llevar. Un espacio tranquilo y relajado. Otra alternativa es el servicio de banquetería para eventos especiales.',
    autor: 'Iván Chacón',
    nota: 5,
    cuando: 'Local Guide · Google',
  },
  {
    txt: 'El espacio interior es súper amplio. De la comida nada que decir, muy buena y abundante (lomo a lo pobre). Recomiendo también probar la cerveza artesanal tropera.',
    autor: 'Cristofer',
    nota: 5,
    cuando: 'Local Guide · Google',
  },
]

export default function RicosRestaurantPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.carbon, color: C.crema }}
    >
      <style>{`
        .ricos-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .ricos-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
        .ricos-btn:active { transform: scale(0.97); }
        .ricos-btn:focus-visible { outline: 3px solid ${C.crema}; outline-offset: 3px; }
        .ricos-card { transition: transform 0.3s ease, border-color 0.3s ease; }
        .ricos-card:hover { transform: translateY(-4px); border-color: rgba(225,75,58,0.55); }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(20,18,16,0.94)',
          ink: C.crema,
          line: C.line,
          btnBg: C.rojoOsc,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la parrilla y el schop ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Lomo a lo pobre con huevo frito y papas, junto a un schop de cerveza y una botella artesanal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,18,16,0.7) 0%, rgba(20,18,16,0.28) 40%, rgba(20,18,16,0.94) 100%)',
          }}
        />
        <div className="absolute top-[72px] md:top-[88px] right-5 md:right-8">
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ricos-btn flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: C.crema, color: C.carbon }}
            >
              <Stars value={BIZ.rating} color={C.rojo} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-48">
          <Reveal delay={80}>
            <p
              className={`${mono.className} text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4`}
              style={{ color: 'rgba(242,234,217,0.8)' }}
            >
              {BIZ.address} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.7rem,10vw,7rem)] mb-5`}
              style={{ color: C.crema }}
            >
              La mesa roja
              <br />
              <span style={{ color: C.rojo }}>de Balmaceda</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(242,234,217,0.88)' }}>
              Parrilladas a la tabla, menú ejecutivo, cócteles de mariscos
              y postres de vitrina. El restaurant del letrero rojo, en el
              centro de San Javier.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ricos-btn uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 rounded-sm tap-44`}
                style={{ backgroundColor: C.rojoOsc, color: '#FFFFFF' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#mesa"
                className={`${display.className} ricos-btn uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 rounded-sm border-2 tap-44`}
                style={{ borderColor: 'rgba(242,234,217,0.5)', color: C.crema }}
              >
                Ver la mesa
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: C.line, backgroundColor: 'rgba(20,18,16,0.6)', backdropFilter: 'blur(6px)' }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ color: 'rgba(242,234,217,0.75)' }}
          >
            <span>{BIZ.precio}</span>
            <span>Desayuno y almuerzo</span>
            <span>Se aceptan perros</span>
            <span className="hidden md:inline" style={{ color: 'rgba(242,234,217,0.55)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El mural: la pared que dice Rico's ── */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/10] md:aspect-[21/9]">
          <Image
            src={`${IMG}/pizarron.webp`}
            alt="Mural interior de Rico's: el nombre en rojo gigante, el rótulo de parrilladas y afiches sobre ladrillo"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(20,18,16,0.85) 0%, rgba(20,18,16,0.15) 55%, rgba(20,18,16,0.6) 100%)' }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-5 md:px-8 w-full">
              <Reveal>
                <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,7vw,5rem)]`} style={{ color: C.crema }}>
                  La pared
                  <br />
                  <span style={{ color: C.rojo }}>lo dice todo</span>
                </h2>
                <p className="mt-4 max-w-sm text-sm md:text-base leading-relaxed" style={{ color: 'rgba(242,234,217,0.9)' }}>
                  Ladrillo, madera y el nombre pintado a mano. Adentro se
                  almuerza en mesa de madera, con piedra y viga a la vista.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La mesa ── */}
      <section id="mesa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-9 md:mb-12 border-b pb-5" style={{ borderColor: C.line }}>
            <h2 className={`${display.className} uppercase tracking-[0.01em] leading-none text-[clamp(2rem,6vw,4.2rem)]`}>
              Lo que llega
              <br />
              <span style={{ color: C.rojo }}>a la mesa</span>
            </h2>
            <p className={`${mono.className} hidden md:block text-[11px] uppercase tracking-[0.24em] text-right pb-1`} style={{ color: C.muted }}>
              Rico's Restaurant
              <br />
              San Javier · Maule
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-7">
          {PLATOS.map((p, i) => (
            <Reveal key={p.name} className="col-span-12 md:col-span-4" delay={i * 90}>
              <article className="ricos-card h-full rounded-lg overflow-hidden" style={{ backgroundColor: C.humo, border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className={`${mono.className} absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase px-2 py-1`}
                    style={{ backgroundColor: 'rgba(20,18,16,0.82)', color: C.crema }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} uppercase text-xl md:text-2xl tracking-[0.02em] mb-1.5`} style={{ color: C.crema }}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-6`} style={{ color: 'rgba(242,234,217,0.5)' }}>
            Fotos reales del local · la carta completa se confirma por WhatsApp
          </p>
        </Reveal>
      </section>

      {/* ── Servicios ── */}
      <div className="border-y overflow-hidden py-3 md:py-4" style={{ borderColor: C.line, backgroundColor: C.rojoOsc }} aria-hidden="true">
        <div className={`${display.className} flex flex-wrap justify-center gap-y-1.5 text-sm md:text-base uppercase tracking-[0.12em]`} style={{ color: '#FFF3E6' }}>
          {SERVICIOS.map((s) => (
            <span key={s} className="inline-flex items-center">
              <span className="px-3">{s}</span>
              <svg viewBox="0 0 24 24" className="w-2 h-2" fill="rgba(20,18,16,0.7)" aria-hidden="true">
                <rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── Banquetería y eventos ── */}
      <section id="eventos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative overflow-hidden rounded-lg aspect-[16/9]" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/eventos.webp`}
                alt="Salón de eventos de Rico's preparado para un matrimonio: mesas con mantel burdeo y torta de varios pisos"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: 'rgba(242,234,217,0.55)' }}>
              El salón armado para un matrimonio
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5" delay={120}>
            <p className={`${mono.className} text-[11px] tracking-[0.3em] uppercase mb-3`} style={{ color: C.rojoClaro }}>
              Banquetería y eventos
            </p>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4rem)] mb-5`}>
              La fiesta se hace
              <br />
              aquí o allá
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(242,234,217,0.85)' }}>
              El salón se transforma para matrimonios, bautizos y
              celebraciones de empresa. Y cuando el evento es en otro
              lugar, la banquetería sale del local y llega hasta donde se
              necesite.
            </p>
            <p className="text-sm leading-relaxed mb-7" style={{ color: C.muted }}>
              Mesas vestidas, torta incluida y el equipo de la casa
              sirviendo. La cotización se conversa directo por WhatsApp.
            </p>
            <a
              href={WA_LINK_EVENTO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} ricos-btn inline-block uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 rounded-sm tap-44`}
              style={{ backgroundColor: C.rojoOsc, color: '#FFFFFF' }}
            >
              Cotizar un evento
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.humo, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4rem)] mb-5`}>
                  Piedra, viga
                  <br />
                  <span style={{ color: C.rojo }}>y pizarra</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(242,234,217,0.8)' }}>
                  <p>
                    Sobre Balmaceda, a cuadras del centro de San Javier,
                    el local mezcla piedra a la vista, madera y la pizarra
                    con la carta del día.
                  </p>
                  <p>
                    Cafetería y buffet al paso, comedor amplio para el
                    almuerzo y mesas donde también entran los perros.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
                  <div className="border-l-4 pl-4" style={{ borderColor: C.rojo }}>
                    <p className={`${display.className} text-3xl leading-none`}>{BIZ.rating}★</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                      en Google
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: C.piedra }}>
                    <p className={`${display.className} text-3xl leading-none`}>{BIZ.reviews}</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                      reseñas
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: C.rojo }}>
                    <p className={`${display.className} text-3xl leading-none`}>2 ambientes</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                      comedor + salón de eventos
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
              <Reveal className="col-span-2 md:col-span-1" delay={80}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/5]" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Interior de Rico's: muro de piedra, vigas de madera, lámparas y la pizarra con la carta de cafetería"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: 'rgba(242,234,217,0.55)' }}>
                  El comedor, piedra y viga
                </p>
              </Reveal>
              <Reveal className="col-span-2 md:col-span-1" delay={140}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/5]" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Rico's Restaurant: muro oscuro, letrero rojo con el nombre y puertas de madera"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: 'rgba(242,234,217,0.55)' }}>
                  El letrero rojo sobre Balmaceda
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4 mb-9 md:mb-12">
            <h2 className={`${display.className} uppercase tracking-[0.01em] leading-none text-[clamp(2rem,6vw,4rem)]`}>
              Lo que dejan
              <br />
              escrito
            </h2>
            <div className="md:ml-auto flex items-center gap-3 rounded-full px-5 py-3" style={{ backgroundColor: C.rojoOsc }}>
              <Stars value={BIZ.rating} color="#FFD9A0" className="w-4 h-4" />
              <span className={`${display.className} text-lg tracking-[0.02em]`} style={{ color: '#FFF3E6' }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.autor} className="col-span-12 md:col-span-6" delay={i * 80}>
              <figure className="h-full rounded-lg p-6 flex flex-col" style={{ backgroundColor: C.humo, border: `1px solid ${C.line}` }}>
                <Stars value={r.nota} color={C.rojo} className="w-4 h-4 mb-3" />
                <blockquote className="text-sm md:text-base leading-relaxed flex-1" style={{ color: 'rgba(242,234,217,0.9)' }}>
                  “{r.txt}”
                </blockquote>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-4`} style={{ color: C.muted }}>
                  {r.autor} · {r.cuando}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180}>
          <div className="mt-6 rounded-lg p-5 md:p-6 border-l-4" style={{ backgroundColor: 'rgba(225,75,58,0.08)', borderColor: C.rojo }}>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.rojoClaro }}>
              La casa también responde
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,234,217,0.85)' }}>
              “Gracias por visitarnos y agradecemos tu comentario… puede
              también pedir los productos de nuestra carta que sin duda
              pueden estar más acorde a sus requerimientos.” — Respuesta
              del propietario en Google
            </p>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} inline-block mt-7 text-sm uppercase tracking-[0.1em] underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.rojoClaro, textDecorationColor: 'rgba(240,104,90,0.4)' }}
          >
            Ver la ficha en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#0E0C0A', borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <h2
                  className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6vw,4.4rem)] mb-6`}
                  style={{ color: C.crema }}
                >
                  En plena
                  <br />
                  <span style={{ color: C.rojo }}>Balmaceda</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(242,234,217,0.8)' }}>
                  Calle Balmaceda 1891, a pasos del cruce principal de San
                  Javier. Sitio web: {BIZ.web}.
                </p>
                <div className="rounded-lg p-4 mb-7 text-xs md:text-sm leading-relaxed" style={{ backgroundColor: 'rgba(242,234,217,0.06)', color: 'rgba(242,234,217,0.85)', border: `1px dashed ${C.line}` }}>
                  En su ficha de Google el local aparece como “cerrado
                  temporalmente”. Antes de ir, confirma el horario por
                  WhatsApp.
                </div>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(242,234,217,0.9)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ricos-btn uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 rounded-sm tap-44`}
                    style={{ backgroundColor: C.rojoOsc, color: '#FFFFFF' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ricos-btn uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 rounded-sm border-2 tap-44`}
                    style={{ borderColor: 'rgba(242,234,217,0.45)', color: C.crema }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden rounded-lg aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]" style={{ border: `1px solid ${C.line}` }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0A0908', color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg md:text-xl tracking-[0.03em] leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(242,234,217,0.6)' }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,234,217,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(242,234,217,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Las fotos, las reseñas y los datos salen de
            su ficha real de Google; la carta completa se confirma con el
            local.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.rojoClaro }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
