import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '500', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '500', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «postales del río» — la página se lee como el
 * álbum que un huésped manda a la ciudad: fotos con borde de postal
 * selladas con la estampilla del lugar, el río Claro como línea que
 * atraviesa todo, verde del logo y naranjo de las cabañas de madera.
 * Fraunces hace de letra escrita a mano; Mulish es el papel.
 */
const C = {
  paper: '#F4EFE2',
  card: '#FBF7EC',
  pine: '#24503A',
  pineDeep: '#17351F',
  river: '#3E7C6B',
  orange: '#C0641F',
  ink: '#22301F',
  muted: '#51604F',
  line: 'rgba(36,80,58,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-y-camping-santa-camila',
  title: 'Cabañas y Camping Santa Camila — El Radal, Molina',
  description:
    'Cabañas equipadas y camping frente al río Claro, a minutos del Radal Siete Tazas, Molina. Reserva directa por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El lugar', href: '#el-lugar' },
  { label: 'Postales', href: '#postales' },
  { label: 'El anfitrión', href: '#anfitrion' },
  { label: 'Reservar', href: '#reservar' },
]

const POSTALES = [
  {
    src: `${IMG}/rio.webp`,
    sello: 'El río',
    texto: 'El río Claro, literalmente al frente: se escucha desde la cabaña.',
    alt: 'Río Claro en calma frente a Cabañas y Camping Santa Camila',
  },
  {
    src: `${IMG}/cabanas.webp`,
    sello: 'Las cabañas',
    texto: 'Cabañas de madera equipadas, sombra de árboles y aire de campo.',
    alt: 'Corredor de cabañas de madera en Santa Camila, El Radal',
  },
  {
    src: `${IMG}/quincho.webp`,
    sello: 'El quincho',
    texto: 'Mesas de picnic, quinchos y parrillas bajo los árboles.',
    alt: 'Mesa de picnic bajo los árboles junto al río en Santa Camila',
  },
  {
    src: `${IMG}/sendero.webp`,
    sello: 'El atardecer',
    texto: 'Cuando baja el sol, el camino entre las cabañas se pone dorado.',
    alt: 'Sendero al atardecer dentro de Cabañas y Camping Santa Camila',
  },
]

const RESENAS = [
  {
    texto:
      'Lindo lugar. Tranquilo para descansar, cerca y a mano del Radal. El anfitrión un 7.',
    autor: 'Reseña en Google',
  },
  {
    texto:
      'Un lugar muy campestre… don Crescencio es un señor muy amable y preocupado de todos los detalles, a un precio justo. Lo recomiendo.',
    autor: 'Reseña en Google',
  },
  {
    texto:
      'Muy buena atención y preocupación. Lugar ideal para desconectarse, además de acogedor y al lado del río.',
    autor: 'Reseña en Google',
  },
]

/** Línea de río ondulada, el motivo que atraviesa la página. */
function Rio({ color = C.river, className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 320 18" className={`w-full h-4 ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 9 C 20 2, 40 16, 60 9 S 100 2, 120 9 S 160 16, 180 9 S 220 2, 240 9 S 280 16, 320 9"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M0 13 C 20 8, 40 18, 60 13 S 100 8, 120 13 S 160 18, 180 13 S 220 8, 240 13 S 280 18, 320 13"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.45"
      />
    </svg>
  )
}

/** Eyebrow: etiqueta de postal. */
function Etiqueta({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.32em] font-bold mb-4 flex items-center gap-3"
      style={{ color: light ? '#BFD8C8' : C.river }}
    >
      <span className="inline-block w-9 border-t-2 border-dotted" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Estampilla de esquina para las postales. */
function Estampilla({ texto }: { texto: string }) {
  return (
    <span
      className="absolute top-3 right-3 rotate-6 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] border-2 border-dashed"
      style={{
        borderColor: C.pine,
        color: C.pine,
        backgroundColor: 'rgba(251,247,236,0.94)',
      }}
      aria-hidden="true"
    >
      {texto}
    </span>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
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

export default function SantaCamilaPage() {
  return (
    <div
      className={`${body.className} sca min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .sca a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK_RESERVA}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,239,226,0.95)',
          ink: C.pineDeep,
          line: C.line,
          btnBg: C.pine,
          btnInk: '#F4EFE2',
        }}
      />

      {/* ── Hero: postal partida ── */}
      <section id="inicio" className="grid lg:grid-cols-2 min-h-svh" style={{ backgroundColor: C.pineDeep }}>
        <div className="relative min-h-[54svh] lg:min-h-svh">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Cabaña de madera de Santa Camila rodeada de árboles en El Radal, Molina"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(23,53,31,0.28) 0%, rgba(23,53,31,0) 45%, rgba(23,53,31,0.42) 100%)',
            }}
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-2" style={{ backgroundColor: 'rgba(251,247,236,0.95)' }}>
            <Stars value={4.3} color={C.orange} className="w-3.5 h-3.5" />
            <span className="text-xs font-bold" style={{ color: C.pineDeep }}>
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center px-5 md:px-10 lg:px-14 py-14 md:py-20" style={{ backgroundColor: C.paper }}>
          <Reveal>
            <div className="mb-7">
              <Image
                src={`${IMG}/logo.webp`}
                alt="Logo de Cabañas y Camping Santa Camila"
                width={108}
                height={108}
                className="rounded-full border-4"
                style={{ borderColor: C.pine }}
              />
            </div>
          </Reveal>
          <Reveal delay={70}>
            <Etiqueta>Cabañas y camping · El Radal · Molina</Etiqueta>
            <h1 className={`${display.className} leading-[0.98] tracking-[-0.01em] text-[clamp(2.6rem,8.5vw,4.6rem)] mb-5`} style={{ color: C.pineDeep }}>
              A la orilla
              <br />
              del <span className={displayItalic.className} style={{ color: C.river }}>río Claro</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              Cabañas equipadas y camping frente al río, a minutos del
              Radal Siete Tazas. Descanso, naturaleza y la atención de
              don Crescencio, el anfitrión que las reseñas premian.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.pine, color: '#F4EFE2' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#postales"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-[#EAE2CD] tap-44`}
                style={{ borderColor: C.pine, color: C.pine }}
              >
                Ver el lugar
              </a>
            </div>
            <Rio className="max-w-md" />
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.river }}>
              {['Cabañas equipadas', 'Quinchos y parrillas', 'Frente al río Claro', 'Nueva administración'].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Banda Radal 7 Tazas ── */}
      <section className="py-12 md:py-16" style={{ backgroundColor: C.river }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
          <Reveal>
            <p className={`${display.className} text-6xl md:text-8xl leading-none`} style={{ color: '#F4EFE2' }}>
              7<span className="text-3xl md:text-5xl align-top"> min</span>
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-xl max-w-sm leading-snug" style={{ color: '#F4EFE2' }}>
              es lo que te separa del <strong>Radal Siete Tazas</strong>: se
              duerme al lado del río y se desayuna de camino al parque.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El lugar ── */}
      <section id="el-lugar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Etiqueta>El lugar</Etiqueta>
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-end mb-12">
            <h2 className={`${display.className} tracking-[-0.01em] text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.pineDeep }}>
              Campo de verdad,
              <br />
              <span style={{ color: C.river }}>a un precio justo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              Cabañas equipadas, sitios de camping, quinchos con parrilla
              y mesas de picnic bajo los árboles — todo en el mismo
              terreno, con el río al frente.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {[
            {
              src: `${IMG}/interior.webp`,
              t: 'Cabañas equipadas',
              d: 'Camas, living y cocina básica para llegar a descansar, no a improvisar.',
              alt: 'Interior de dormitorio de cabaña en Santa Camila',
            },
            {
              src: `${IMG}/rio-rocas.webp`,
              t: 'El río al frente',
              d: 'El río Claro cruza justo al lado: agua fría de precordillera para el verano.',
              alt: 'Río Claro corriendo entre rocas en El Radal',
            },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 110}>
              <div className="grid grid-cols-[1fr_1.2fr] gap-4 p-4 border-2 items-center" style={{ backgroundColor: C.card, borderColor: C.line, rotate: i === 0 ? '-0.6deg' : '0.5deg' }}>
                <div className="relative overflow-hidden aspect-square">
                  <Image src={x.src} alt={x.alt} fill sizes="(min-width: 768px) 20vw, 45vw" className="object-cover" />
                </div>
                <div>
                  <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.pineDeep }}>
                    {x.t}
                  </h3>
                  <p className="text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                    {x.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Postales ── */}
      <section id="postales" className="scroll-mt-20" style={{ backgroundColor: C.pineDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Etiqueta light>Postales de Santa Camila</Etiqueta>
            <h2 className={`${display.className} tracking-[-0.01em] text-4xl md:text-5xl leading-[1.02] mb-12 md:mb-16`} style={{ color: '#F4EFE2' }}>
              Lo que te vas a querer
              <br />
              <span style={{ color: '#BFD8C8' }}>mandar por foto</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {POSTALES.map((p, i) => (
              <Reveal key={p.sello} delay={i * 90}>
                <figure
                  className="p-3 pb-4"
                  style={{
                    backgroundColor: C.card,
                    rotate: i % 2 === 0 ? '-1.1deg' : '0.9deg',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.28)',
                  }}
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-3">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, calc(100vw - 4rem)"
                      className="object-cover"
                    />
                    <Estampilla texto={p.sello} />
                  </div>
                  <figcaption className={`${displayItalic.className} text-[15px] leading-snug px-1`} style={{ color: C.pine }}>
                    {p.texto}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El anfitrión + reseñas ── */}
      <section id="anfitrion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start mb-14">
          <Reveal>
            <Etiqueta>El anfitrión</Etiqueta>
            <h2 className={`${display.className} tracking-[-0.01em] text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.pineDeep }}>
              Don Crescencio
              <br />
              <span className={displayItalic.className} style={{ color: C.river }}>te recibe</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              En las reseñas el nombre se repite: un anfitrión pendiente
              de cada detalle, del asado al dato para recorrer el Radal.
              Escribes por WhatsApp y te responde él, no un bot.
            </p>
            <Rio className="max-w-xs mb-6" />
            <a
              href={WA_LINK_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.pine, textDecorationColor: C.river }}
            >
              Escribirle directo → {BIZ.phoneDisplay}
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
              <p className={`${display.className} text-5xl md:text-6xl leading-none`} style={{ color: C.pineDeep }}>
                {BIZ.rating}
              </p>
              <div>
                <Stars value={4.3} color={C.orange} className="w-4 h-4" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-bold underline underline-offset-4 decoration-2 mt-1 tap-44"
                  style={{ color: C.river, textDecorationColor: 'rgba(62,124,107,0.4)' }}
                >
                  {BIZ.reviews} reseñas en Google →
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {RESENAS.map((r, i) => (
                <figure
                  key={i}
                  className="p-5 md:p-6 border-l-4"
                  style={{ backgroundColor: C.card, borderColor: i === 1 ? C.orange : C.river }}
                >
                  <blockquote className="text-[15px] leading-relaxed mb-3" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.muted }}>
                    {r.autor}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reservar + mapa ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Etiqueta light>Reservar</Etiqueta>
            <h2 className={`${display.className} tracking-[-0.01em] text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#F4EFE2' }}>
              El río ya está;
              <br />
              <span style={{ color: '#BFD8C8' }}>falta tu fecha</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(244,239,226,0.82)' }}>
              Dinos cuántos son, si prefieren cabaña o camping y en qué
              fechas: confirmamos disponibilidad y tarifa por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-105 active:scale-95 tap-44`}
                style={{ backgroundColor: C.orange, color: '#F4EFE2' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(244,239,226,0.6)', color: '#F4EFE2' }}
              >
                Cómo llegar
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,226,0.85)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-4 min-h-[280px]" style={{ borderColor: C.pineDeep }}>
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
      <footer style={{ backgroundColor: C.pineDeep, color: '#F4EFE2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,226,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,239,226,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,226,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,239,226,0.72)' }}>
            Fotos, logo, reseñas, rating, dirección y teléfono son reales
            de su ficha de Google; los textos son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK_RESERVA} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
