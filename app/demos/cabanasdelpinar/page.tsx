import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

/**
 * Dirección de arte: «cabañas sobre pilotes». Las casas de la ficha se
 * ven elevadas sobre postes de madera — blancas, livianas, sobre la
 * pradera. La página se organiza igual: paneles blancos suspendidos
 * sobre postes, con el verde pino del logo de tres árboles como acento
 * único. Barlow Condensed es el letrero rural; Karla, el papel;
 * Roboto Mono, los datos de ficha.
 */
const C = {
  paper: '#F5F3EA',
  panel: '#FDFDFA',
  pine: '#1E3B2A',
  pineMid: '#2E5941',
  pineSoft: '#DCE6DC',
  wood: '#A87E4F',
  ink: '#24312A',
  muted: '#586B5E',
  line: 'rgba(30,59,42,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanasdelpinar',
  title: 'Cabañas del Pinar — Cabañas en Curepto, Maule',
  description:
    'Cabañas equipadas en Abate Molina 16C, Curepto. Nota 4,8 en Google con 16 reseñas. Reserva directa por WhatsApp.',
  image: '/demos/cabanasdelpinar/hero.webp',
})

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
  { label: 'Reservar', href: '#reservar' },
]

const FOTOS = [
  {
    src: `${IMG}/exterior.webp`,
    name: 'La cabaña entre árboles',
    desc: 'Construcción de madera elevada sobre pilotes, rodeada de verde. Aire del campo a pasos del pueblo.',
    dato: 'Cabaña independiente',
  },
  {
    src: `${IMG}/terraza.webp`,
    name: 'Terraza con baranda',
    desc: 'Corredor techado para salir a tomar el fresco: sillas afuera y la pradera de frente.',
    dato: 'Salida propia al patio',
  },
  {
    src: `${IMG}/dormitorio-1.webp`,
    name: 'Dormitorio con dos camas',
    desc: 'Camas hechas con ropa de cama, cortinaje y espacio para la familia o el grupo de amigos.',
    dato: 'Ropa de cama incluida',
  },
  {
    src: `${IMG}/comedor.webp`,
    name: 'Cocina y comedor',
    desc: 'Cocina equipada con mesa de comedor junto a la ventana: el desayuno largo es parte del plan.',
    dato: 'Equipada completa',
  },
  {
    src: `${IMG}/cocina.webp`,
    name: 'Cocina de diario',
    desc: 'Encimera, hervidor y lo necesario para cocinar en la cabaña sin depender de horarios.',
    dato: 'Cocina funcional',
  },
  {
    src: `${IMG}/bano.webp`,
    name: 'Baño privado',
    desc: 'Baño completo con ducha dentro de cada cabaña, sin compartir con otras unidades.',
    dato: 'Baño en cada cabaña',
  },
]

const REVIEWS: { quote: string; author: string; meta: string; reply?: string }[] = [
  {
    quote: 'Lindas, muy limpias, equipadas completas y excelente atención!',
    author: 'Rocio Droguett',
    meta: 'Reseña de Google · hace 3 años',
  },
  {
    quote: 'Cabañas limpias, acogedoras, en Curepto buena opción para quedarse, recomendable',
    author: 'Gabriel Oyarzun',
    meta: 'Local Guide · 63 reseñas · hace 3 años',
    reply: 'Respuesta del dueño: «Le ponemos cariño a todos los detalles para que tengan una linda experiencia.»',
  },
]

const QUE_REPITEN = [
  'Cabañas limpias',
  'Tranquilo para descansar',
  'Equipamiento completo',
  'Acogedoras',
]

// ── Piezas del pinar ────────────────────────────────────────

/** Un pino del logo: triángulo escalonado con tronco. */
function Pino({ size = 20, color = C.pineMid }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 30" width={size} height={size * 1.25} aria-hidden="true">
      <path d="M12 1 L20 11 H16 L22 19 H15 V26 H9 V19 H2 L8 11 H4 Z" fill={color} />
      <rect x="10" y="26" width="4" height="4" fill={C.wood} />
    </svg>
  )
}

/** Postes que sostienen un panel: la marca del lugar. */
function Postes({ n = 5, color = C.pine, className = '' }: { n?: number; color?: string; className?: string }) {
  return (
    <div className={`flex justify-between px-6 ${className}`} aria-hidden="true">
      {Array.from({ length: n }).map((_, i) => (
        <span
          key={i}
          className="block w-[3px] h-7"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  )
}

/** Panel blanco suspendido sobre postes. */
function Casa({ children, className = '', posts = 5 }: { children: React.ReactNode; className?: string; posts?: number }) {
  return (
    <div className={className}>
      <div
        className="relative"
        style={{ backgroundColor: C.panel, boxShadow: '0 18px 44px rgba(30,59,42,0.16)' }}
      >
        {children}
      </div>
      <Postes n={posts} />
    </div>
  )
}

function Letrero({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.pineSoft : C.pineMid }}
    >
      <span className="inline-flex items-end gap-1" aria-hidden="true">
        <Pino size={11} color="currentColor" />
        <Pino size={15} color="currentColor" />
        <Pino size={11} color="currentColor" />
      </span>
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
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

export default function CabanasDelPinarPage() {
  return (
    <div
      className={`${body.className} cdp min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cdp a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(245,243,234,0.95)',
          ink: C.pine,
          line: C.line,
          btnBg: C.pine,
          btnInk: '#F5F3EA',
        }}
      />

      {/* ── Hero: la fila de cabañas bajo el cielo de Curepto ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.pine }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="La fila de cabañas blancas de Cabañas del Pinar sobre la pradera, en Curepto"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,40,29,0.5) 0%, rgba(20,40,29,0.12) 45%, rgba(20,40,29,0.78) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-10 md:pb-16">
          <Reveal>
            <div className="max-w-2xl">
              <div style={{ backgroundColor: C.panel, boxShadow: '0 22px 60px rgba(12,26,18,0.45)' }}>
                <div className="px-6 md:px-9 py-7 md:py-9">
                  <Letrero>Cabañas · Curepto · Maule</Letrero>
                  <h1
                    className={`${display.className} uppercase font-bold leading-[0.95] tracking-[0.02em] text-[clamp(3.2rem,12vw,6.8rem)] mb-4`}
                    style={{ color: C.pine }}
                  >
                    Cabañas
                    <br />
                    del Pinar
                  </h1>
                  <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
                    Casas de madera sobre pilotes, entre pinos y a pasos del
                    pueblo. Reserva directa con sus dueños, sin intermediarios.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={WA_LINK_RESERVA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} uppercase font-semibold tracking-[0.06em] text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                      style={{ backgroundColor: C.pine, color: '#F5F3EA' }}
                    >
                      Reservar por WhatsApp
                    </a>
                    <a
                      href="#cabanas"
                      className={`${display.className} uppercase font-semibold tracking-[0.06em] text-base px-7 py-3 border-2 transition-colors tap-44`}
                      style={{ borderColor: C.pine, color: C.pine }}
                    >
                      Ver las cabañas
                    </a>
                  </div>
                </div>
              </div>
              <Postes n={6} className="max-w-[85%] mx-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de ficha: lo verificable ── */}
      <section className="relative" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {([
              { dato: '4,8', nota: `${BIZ.reviews} reseñas en Google`, stars: true },
              { dato: 'Abate Molina 16C', nota: 'Curepto, Región del Maule' },
              { dato: '5 cabañas', nota: 'Publicadas por el municipio' },
              { dato: 'Reserva directa', nota: 'WhatsApp con sus dueños' },
            ] as { dato: string; nota: string; stars?: boolean }[]).map((f, i) => (
              <Reveal key={f.nota} delay={i * 90}>
                <div className="text-center md:text-left">
                  <p className={`${display.className} font-semibold uppercase tracking-[0.04em] text-xl md:text-2xl leading-tight mb-1`} style={{ color: '#F5F3EA' }}>
                    {f.dato}
                  </p>
                  {f.stars && (
                    <span className="block mb-1" aria-hidden="true">
                      <Stars value={BIZ.rating} color="#E8C766" className="w-3.5 h-3.5" />
                    </span>
                  )}
                  <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(245,243,234,0.72)' }}>
                    {f.nota}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Las cabañas: casas sobre postes ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Letrero>En el predio</Letrero>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
            <h2 className={`${display.className} uppercase font-bold tracking-[0.03em] text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.pine }}>
              Cinco cabañas,
              <br />
              un solo patio
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Fotos reales de la ficha de Google del negocio: el predio,
              los dormitorios, la cocina y el baño de cada cabaña.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-14">
          {FOTOS.map((f, i) => (
            <li key={f.name}>
              <Reveal delay={(i % 3) * 110}>
                <Casa>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={f.src}
                      alt={`${f.name} — Cabañas del Pinar, Curepto`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className={`${display.className} uppercase font-semibold tracking-[0.04em] text-xl mb-1.5`} style={{ color: C.pine }}>
                      {f.name}
                    </h3>
                    <p className="text-[13px] leading-relaxed mb-3" style={{ color: C.muted }}>
                      {f.desc}
                    </p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold`} style={{ color: C.pineMid }}>
                      {f.dato}
                    </p>
                  </div>
                </Casa>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Reseñas: avisos clavados al cerco ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.pineSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Letrero>La ficha de Google</Letrero>
              <h2 className={`${display.className} uppercase font-bold tracking-[0.03em] text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.pine }}>
                Lo que escriben
                <br />
                los que ya vinieron
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <span className={`${display.className} font-bold text-5xl`} style={{ color: C.pine }}>
                  {String(BIZ.rating).replace('.', ',')}
                </span>
                <div>
                  <Stars value={BIZ.rating} color={C.pineMid} />
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas reales
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 mb-7">
                {QUE_REPITEN.map((q) => (
                  <li
                    key={q}
                    className="text-xs font-bold px-3.5 py-1.5 border"
                    style={{ borderColor: C.line, color: C.pine, backgroundColor: 'rgba(253,253,250,0.7)' }}
                  >
                    {q}
                  </li>
                ))}
              </ul>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.pine }}
              >
                Leer las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
            <div className="space-y-8">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={i * 130}>
                  <Casa posts={4}>
                    <figure className="px-6 md:px-7 py-6 relative">
                      {/* clavo del aviso */}
                      <span
                        className="absolute top-3 right-4 w-3 h-3 rounded-full"
                        style={{ backgroundColor: C.pineMid, boxShadow: '0 1px 3px rgba(0,0,0,0.35)' }}
                        aria-hidden="true"
                      />
                      <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                        “{r.quote}”
                      </blockquote>
                      <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.pineMid }}>
                        {r.author} · {r.meta}
                      </figcaption>
                      {r.reply && (
                        <p className="text-xs leading-relaxed mt-3 pt-3 border-t" style={{ color: C.muted, borderColor: C.line }}>
                          {r.reply}
                        </p>
                      )}
                    </figure>
                  </Casa>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar: la ruta a Abate Molina ── */}
      <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Letrero>Cómo llegar</Letrero>
            <h2 className={`${display.className} uppercase font-bold tracking-[0.03em] text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.pine }}>
              En el corazón
              <br />
              de Curepto
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Las cabañas están en Abate Molina 16C, dentro del pueblo:
              se llega caminando a los almacenes y a la plaza, y la
              cordillera de la costa empieza a unos minutos en auto.
            </p>
            <Casa posts={4} className="max-w-md">
              <div className="px-6 py-5">
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] font-bold mb-3`} style={{ color: C.pineMid }}>
                  La dirección exacta
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <span className={`${mono.className} text-xs`} style={{ color: C.muted }}>
                    Código plus: {BIZ.plusCode}
                  </span>
                </address>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                    style={{ color: C.pine }}
                  >
                    Abrir en Google Maps →
                  </a>
                  <a
                    href={BIZ.fbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                    style={{ color: C.pine }}
                  >
                    Facebook del negocio →
                  </a>
                </div>
              </div>
            </Casa>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[300px]" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reservar: el panel del portón ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="inline-flex items-end gap-1.5 mb-6" aria-hidden="true">
              <Pino size={16} color="#DCE6DC" />
              <Pino size={22} color="#DCE6DC" />
              <Pino size={16} color="#DCE6DC" />
            </div>
            <h2 className={`${display.className} uppercase font-bold tracking-[0.03em] text-4xl md:text-6xl leading-[1.02] mb-5`} style={{ color: '#F5F3EA' }}>
              Una noche
              <br />
              entre pinos
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-9 max-w-md mx-auto" style={{ color: 'rgba(245,243,234,0.78)' }}>
              Escribe por WhatsApp con las fechas y cuántos son: la
              disponibilidad y la tarifa del día las confirman sus
              dueños directamente.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-semibold tracking-[0.06em] text-base px-8 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: '#F5F3EA', color: C.pine }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase font-semibold tracking-[0.06em] text-base px-8 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(245,243,234,0.5)', color: '#F5F3EA' }}
              >
                Llamar ahora
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.pine, color: '#F5F3EA' }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderColor: 'rgba(245,243,234,0.16)' }}
        >
          <div className="flex items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del negocio, ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-10 h-10 rounded-full object-cover bg-white" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-semibold uppercase tracking-[0.04em] text-xl mb-1`}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,243,234,0.66)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                <a href={BIZ.fbUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                  @{BIZ.fbHandle}
                </a>
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,243,234,0.66)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,243,234,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(245,243,234,0.72)' }}>
            Fotos, reseñas, nota, dirección, teléfono y Facebook son reales
            de la ficha de Google y del directorio municipal; las
            descripciones de ambiente son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
