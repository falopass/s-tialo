import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «letrero de neón sobre la plaza» — el local de noche:
 * tinta oscura, el turquesa de su logo encendido como tubo de neón y un
 * ámbar cálido de terraza. Archivo Black hace de letra de fachada; Space
 * Mono lleva la carta y los datos como en un menú impreso. Motivo propio:
 * el glow de neón (doble sombra de texto) y la carta con líneas punteadas.
 */
const C = {
  night: '#0A1210',
  panel: '#0F1C18',
  panelUp: '#142722',
  teal: '#22B8A7',
  tealSoft: '#7FE0D4',
  amber: '#F0B45A',
  cream: '#F2EEE3',
  muted: '#93A8A1',
  line: 'rgba(34,184,167,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'takes-cafe-molina',
  title: "Take's Sushi & Coffee — Restaurante en la plaza de Molina",
  description:
    "Sushi, cocina, cafetería y coctelería frente a la plaza de Molina. Take's Sushi & Coffee, Maipú 1818. Reserva por WhatsApp.",
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horarios', href: '#horarios' },
]

const CARTA = [
  {
    cat: 'Sushi y rolls',
    nota: 'La barra que le da el nombre',
    detalle:
      'Rolls, tablas de sushi y piezas de la casa. La mitad de la identidad del local vive aquí.',
    src: `${IMG}/sushi.webp`,
    alt: 'Tabla de sushi con rolls variados frente al muro verde de Take’s',
  },
  {
    cat: 'De la cocina',
    nota: 'Ceviches, pastas y tablas',
    detalle:
      'Carta amplia de restaurante: ceviche fresco, pastas, entradas y tablas para compartir.',
    src: `${IMG}/pasta.webp`,
    alt: 'Plato de pasta servido en Take’s',
  },
  {
    cat: 'Cafetería y dulces',
    nota: 'Desde las 10 de la mañana',
    detalle:
      'Café de especialidad, pastelería y dulces para la once o la sobremesa larga.',
    src: `${IMG}/interior.webp`,
    alt: 'Interior de Take’s con mesas y sillas turquesa',
  },
  {
    cat: 'Coctelería',
    nota: 'Con y sin alcohol',
    detalle:
      'Tragos y jugos de la barra, incluida la opción sin alcohol que agradecen las visitas.',
    src: `${IMG}/coctel.webp`,
    alt: 'Cóctel servido en la barra de Take’s',
  },
]

const HORARIOS = [
  { dia: 'Lunes a viernes', hora: '10:00 – 23:00' },
  { dia: 'Sábado', hora: '11:00 – 23:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
]

// Fragmentos reales de reseñas de Google (ficha del local, 115 reseñas).
const RESENAS = [
  {
    texto:
      'Parada obligada si uno va a las 7 Tazas. La comida estuvo muy buena y el espacio es lindo y amplio.',
    quien: 'Patricio Ubilla',
  },
  {
    texto:
      'Su ceviche me parece delicioso y fresco; los tragos, la atención, todo espectacular.',
    quien: 'Martin Rioseco',
  },
  {
    texto:
      'Pedimos sushi, tragos, jugos y pastas: todo, pero todo, demasiado bueno, fresco y sabroso.',
    quien: 'Daniela Segovia',
  },
]

/** Neón encendido: doble sombra de texto sobre tinta oscura. */
function Neon({ children, color = C.teal }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        color: '#EAF9F6',
        textShadow: `0 0 6px ${color}, 0 0 18px ${color}, 0 0 42px ${color}66`,
      }}
    >
      {children}
    </span>
  )
}

/** Etiqueta de sección como timbre de carta en mono. */
function Timbre({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.34em] font-bold mb-5 flex items-center gap-3`}
      style={{ color: C.teal }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: C.teal, boxShadow: `0 0 10px ${C.teal}` }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/**
 * Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni
 * botones. Fondo en rgba() inline para que el chequeo de contraste lo lea.
 */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.94)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function TakesCafeMolinaPage() {
  return (
    <div
      className={`${body.className} tk min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.night, color: C.cream }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .tk a:focus-visible { outline: 2px solid ${C.teal}; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(10,18,16,0.92)',
          ink: C.cream,
          line: C.line,
          btnBg: C.teal,
          btnInk: C.night,
        }}
      />

      {/* ── Hero: el letrero encendido ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex items-end overflow-hidden"
        style={{ backgroundColor: C.night }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Letrero de neón de Take's Sushi & Coffee encendido en el interior del local"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,18,16,0.75) 0%, rgba(10,18,16,0.35) 45%, rgba(10,18,16,0.94) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-12 md:pb-16">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.34em] font-bold mb-5`}
              style={{ color: C.amber }}
            >
              Frente a la plaza · Molina
            </p>
            <h1
              className={`${display.className} leading-[0.92] text-[clamp(3.2rem,13vw,7.5rem)] mb-3`}
            >
              <Neon>Take’s</Neon>
            </h1>
            <p
              className={`${display.className} uppercase tracking-[0.12em] text-lg md:text-2xl mb-6`}
              style={{ color: C.tealSoft }}
            >
              Sushi · Coffee · Restaurante
            </p>
            <p
              className="text-base md:text-lg leading-relaxed max-w-md mb-8"
              style={{ color: 'rgba(242,238,227,0.85)' }}
            >
              Rolls, ceviche, pastas, café y barra en un solo local frente a
              la plaza de Molina. De día para la once; de noche, para quedarse.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.teal, color: C.night }}
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                className={`${display.className} uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 border transition-colors tap-44`}
                style={{ borderColor: 'rgba(242,238,227,0.55)', color: C.cream }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 border-t"
              style={{ borderColor: C.line }}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 tap-44"
              >
                <Stars value={BIZ.rating} color={C.amber} />
                <span
                  className={`${mono.className} text-xs md:text-sm font-bold`}
                  style={{ color: C.cream }}
                >
                  {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas en Google
                </span>
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm font-bold tap-44`}
                style={{ color: C.tealSoft }}
              >
                {BIZ.igHandle} · {BIZ.igFollowers} seguidores
              </a>
              <span
                className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.16em]`}
                style={{ color: C.muted }}
              >
                Maipú 1818
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta: menú en cuatro líneas ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Timbre>La carta</Timbre>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} leading-[0.95] text-4xl md:text-6xl`}
              style={{ color: C.cream }}
            >
              Sushi, cocina
              <br />
              <Neon>y café</Neon>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              La carta real es amplia y cambia por temporada; esta es la
              muestra de los cuatro mundos que conviven en el local.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {CARTA.map((c, i) => (
            <li
              key={c.cat}
              className="relative overflow-hidden border"
              style={{ backgroundColor: C.panel, borderColor: C.line }}
            >
              <Reveal delay={i * 90} className="h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p
                    className={`${mono.className} text-[10px] uppercase tracking-[0.24em] font-bold mb-1.5`}
                    style={{ color: C.amber }}
                  >
                    {c.nota}
                  </p>
                  <h3
                    className={`${display.className} uppercase tracking-[0.04em] text-2xl md:text-[28px] mb-2.5`}
                    style={{ color: C.cream }}
                  >
                    {c.cat}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {c.detalle}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={140}>
          <p className="text-sm mt-8 max-w-xl" style={{ color: C.muted }}>
            El local también tiene agenda de eventos y música en vivo: la
            cartelera y las preventas se publican en{' '}
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.tealSoft, textDecorationColor: C.teal }}
            >
              su Instagram
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* ── El local: terraza y muro verde ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden aspect-[3/4] col-span-2 sm:col-span-1 sm:row-span-2">
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza de madera de Take's con quitasoles y mesas"
                    fill
                    sizes="(min-width: 640px) 30vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={`${IMG}/interior.webp`}
                    alt="Salón interior de Take's con sillas turquesa"
                    fill
                    sizes="(min-width: 640px) 30vw, calc(50vw - 2rem)"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Take's en Maipú, Molina, con su letrero"
                    fill
                    sizes="(min-width: 640px) 30vw, calc(50vw - 2rem)"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <Timbre>El local</Timbre>
              <h2
                className={`${display.className} leading-[0.95] text-4xl md:text-5xl mb-6`}
                style={{ color: C.cream }}
              >
                En plena plaza,
                <br />
                <Neon>puertas adentro</Neon>
                <br />
                <span style={{ color: C.amber }}>y afuera</span>
              </h2>
              <p className="text-base leading-relaxed mb-5 max-w-lg" style={{ color: 'rgba(242,238,227,0.82)' }}>
                Salón amplio de sillas turquesa, terraza de madera para el
                verano y el muro verde que ya es marca registrada en las
                fotos de sus clientes. Estar en plena plaza facilita la
                llegada y el estacionamiento.
              </p>
              <ul className="space-y-3.5 mb-8">
                {[
                  'Terraza al aire libre para las tardes de sol',
                  'Reciben mascotas: varias reseñas llegaron con su perro',
                  'Espacio amplio para grupos y celebraciones',
                  'Camino directo a la precordillera y las 7 Tazas',
                ].map((t) => (
                  <li key={t} className="flex gap-3.5 items-start">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: C.teal, boxShadow: `0 0 8px ${C.teal}` }}
                    />
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(242,238,227,0.8)' }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
            <div>
              <Timbre>Reseñas</Timbre>
              <h2
                className={`${display.className} leading-[0.95] text-4xl md:text-6xl`}
                style={{ color: C.cream }}
              >
                Lo que dejó
                <br />
                <Neon>la sobremesa</Neon>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.amber} className="w-5 h-5" />
              <p className={`${mono.className} text-sm font-bold`} style={{ color: C.cream }}>
                {BIZ.rating.toFixed(1)} de 5 · {BIZ.reviews} reseñas
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.quien} delay={i * 110}>
              <figure
                className="h-full p-6 md:p-7 border"
                style={{ backgroundColor: C.panelUp, borderColor: C.line }}
              >
                <blockquote
                  className="text-[15px] md:text-base leading-relaxed mb-5"
                  style={{ color: C.cream }}
                >
                  “{r.texto}”
                </blockquote>
                <figcaption
                  className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold border-t pt-3.5`}
                  style={{ color: C.muted, borderColor: C.line }}
                >
                  {r.quien} · Reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-bold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44`}
            style={{ color: C.tealSoft, textDecorationColor: C.teal }}
          >
            Leer todas las reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Horarios + llegada ── */}
      <section id="horarios" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Timbre>Horarios y llegada</Timbre>
            <h2
              className={`${display.className} leading-[0.95] text-4xl md:text-5xl mb-7`}
              style={{ color: C.cream }}
            >
              La cocina abre
              <br />
              <Neon>hasta las 23</Neon>
            </h2>
            <ul className="mb-8 max-w-sm">
              {HORARIOS.map((h) => (
                <li
                  key={h.dia}
                  className="flex items-baseline gap-3 py-3 border-b border-dashed"
                  style={{ borderColor: C.line }}
                >
                  <span className="text-sm font-semibold" style={{ color: C.cream }}>
                    {h.dia}
                  </span>
                  <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                  <span className={`${mono.className} text-sm font-bold`} style={{ color: C.tealSoft }}>
                    {h.hora}
                  </span>
                </li>
              ))}
            </ul>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: 'rgba(242,238,227,0.8)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, Región del {BIZ.region} · {BIZ.phoneDisplay}
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.teal, color: C.night }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3 border transition-colors tap-44`}
                style={{ borderColor: 'rgba(242,238,227,0.55)', color: C.cream }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night, color: C.cream }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderColor: C.line }}
        >
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del perfil */}
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="w-9 h-9 object-cover" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-tight`}>{BIZ.name}</p>
              <p className="text-xs" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: C.muted }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igHandle}
            </a>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp ${BIZ.short}`} />
      <SitiazoStrip />
    </div>
  )
}
