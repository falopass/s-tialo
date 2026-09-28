import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK_EVENTO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const serif = localFont({
  src: [{ path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '400', style: 'normal' }],
})
/**
 * Dirección de arte: «el plan del día» — la página es la pauta de un
 * evento de verano al aire libre: horas en letra de afiche, línea de
 * tiempo, arena del fondo y agua de la piscina como único acento.
 * Anton hace de letra de pauta impresa; Instrument Serif marca las
 * notas a mano; Work Sans es el papel.
 */
const C = {
  paper: '#F5F0E3',
  card: '#FCFAF3',
  deep: '#0B3D38',
  water: '#0F7C72',
  pool: '#93D6CB',
  sun: '#D97A2B',
  ink: '#1E2E2A',
  muted: '#4E5F59',
  line: 'rgba(11,61,56,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'la-guatatrucha-molina',
  title: 'La Guatatrucha — Centro de eventos en Molina',
  description:
    'Salón, jardines, piscina y quincho para tu evento en Molina, Región del Maule. Cocina equipada y catering. Consulta tu fecha por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El plan', href: '#el-dia' },
  { label: 'El lugar', href: '#el-lugar' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#contacto' },
]

const PLAN = [
  {
    hora: '17:00',
    titulo: 'La llegada',
    texto:
      'Tus invitados entran por los jardines: pasto, sombra y el aire de un lugar que no parece Molina centro. Bienvenida al aire libre, con las mesas listas.',
    src: `${IMG}/jardin.webp`,
    alt: 'Camino de jardín con pasto y árboles en La Guatatrucha, Molina',
  },
  {
    hora: '18:30',
    titulo: 'El brindis',
    texto:
      'Cocktail en la terraza junto a la piscina. La luz de la tarde hace el resto: es el momento de las fotos con todos recién llegados.',
    src: `${IMG}/piscina.webp`,
    alt: 'Piscina con quincho de fondo en La Guatatrucha, Molina',
  },
  {
    hora: '20:30',
    titulo: 'El banquete',
    texto:
      'Todos al salón: mesas montadas, servicio de garzones y catering propio. Detrás, una cocina equipada con refrigerador que sostiene el servicio de la noche.',
    src: `${IMG}/banquete.webp`,
    alt: 'Banquete al aire libre con mesas largas y servicio en La Guatatrucha',
  },
  {
    hora: '23:30',
    titulo: 'La fiesta sigue',
    texto:
      'Quincho encendido, piscina iluminada y el grupo que no se quiere ir. La Guatatrucha está hecha para que la celebración termine cuando ustedes decidan.',
    src: `${IMG}/piscina-2.webp`,
    alt: 'Piscina de La Guatatrucha con terraza y toldo de sombra',
  },
]

const TIENE = [
  { icono: 'salon', titulo: 'Salón para eventos', texto: 'Montaje para banquete, brindis y fiesta bajo techo.' },
  { icono: 'piscina', titulo: 'Piscina', texto: 'La favorita en verano: terraza con toldo y quincho al lado.' },
  { icono: 'fuego', titulo: 'Quincho y parrilla', texto: 'Para el asado de la previa o la fiesta hasta tarde.' },
  { icono: 'cocina', titulo: 'Cocina equipada', texto: 'Cocina con refrigerador: la operación queda en casa.' },
  { icono: 'copa', titulo: 'Catering', texto: 'Servicio de catering para el banquete y el cocktail.' },
  { icono: 'reloj', titulo: 'Abierto todos los días', texto: 'De lunes a domingo, de 9:00 a 21:00 hrs.' },
]

const RESENAS = [
  {
    texto: 'Muy agradable lugar, ideal para celebrar en familia.',
    autor: 'Reseña en Google',
  },
  {
    texto: 'Tiene cocina, refrigerador, quincho, piscina… el lugar completo.',
    autor: 'Reseña en Google',
  },
  {
    texto: 'Muy buena atención.',
    autor: 'Reseña en Google',
  },
]

function Icono({ tipo }: { tipo: string }) {
  const props = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }
  const paths: Record<string, React.ReactNode> = {
    salon: <path d="M5 20V8l7-4 7 4v12M3 20h18M9 20v-6h6v6" />,
    piscina: <path d="M3 15c2 0 3 1.5 5 1.5S11 15 13 15s3 1.5 5 1.5 3-1.5 3-1.5M3 19c2 0 3 1.5 5 1.5S11 19 13 19s3 1.5 5 1.5 3-1.5 3-1.5M9 11V7a2 2 0 0 1 4 0M15 11V7a2 2 0 0 0-4 0" />,
    fuego: <path d="M12 21c4 0 6-2.7 6-6 0-4-4-6-6-11-2 5-6 7-6 11 0 3.3 2 6 6 6Zm0 0c-1.5 0-2.5-1.2-2.5-2.7 0-1.6 1.2-2.4 2.5-4.3 1.3 1.9 2.5 2.7 2.5 4.3C14.5 19.8 13.5 21 12 21Z" />,
    cocina: <path d="M4 3h16v18H4V3Zm0 7h16M8 6.5h.01M11 6.5h.01M8 14h8" />,
    copa: <path d="M8 3h8l-1 7a3.5 3.5 0 0 1-7 0L8 3ZM12 13v5m-3 3h6" />,
    reloj: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3.5 2" />,
  }
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" {...props}>
      {paths[tipo]}
    </svg>
  )
}

/** Eyebrow de pauta: hora + línea, como el margen de una agenda. */
function Pauta({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.34em] font-bold mb-4 flex items-center gap-3"
      style={{ color: light ? C.pool : C.water }}
    >
      <span className="inline-block w-10 border-t" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
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

export default function LaGuatatruchaPage() {
  return (
    <div
      className={`${body.className} lgt min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .lgt a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_EVENTO}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(245,240,227,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.water,
          btnInk: '#F5F0E3',
        }}
      />

      {/* ── Hero: la pauta del verano ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Piscina con toldo de sombra y terraza en La Guatatrucha, centro de eventos en Molina"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,61,56,0.5) 0%, rgba(11,61,56,0.18) 45%, rgba(11,61,56,0.78) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <Stars value={4.4} color={C.pool} className="w-4 h-4" />
              <span className="text-xs md:text-sm font-bold tracking-wide" style={{ color: '#F5F0E3' }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Pauta light>Centro de eventos · Molina · Región del Maule</Pauta>
            <h1
              className={`${display.className} uppercase leading-[0.9] tracking-[0.01em] text-[clamp(3.2rem,12vw,7rem)] mb-4`}
              style={{ color: '#F5F0E3' }}
            >
              La Guata
              <br />
              trucha
            </h1>
            <p className={`${serif.className} text-2xl md:text-[32px] leading-tight mb-6 max-w-xl`} style={{ color: C.pool }}>
              tu evento, de la bienvenida a la última canción
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(245,240,227,0.85)' }}>
              Salón, jardines, piscina y quincho para celebrar en un solo
              lugar — con cocina equipada y catering propio en Molina.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_EVENTO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.pool, color: C.deep }}
              >
                Consultar fecha
              </a>
              <a
                href="#el-dia"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(245,240,227,0.6)', color: '#F5F0E3' }}
              >
                Ver el plan del día
              </a>
            </div>
          </Reveal>
        </div>
        {/* tira de pauta */}
        <div className="relative" style={{ backgroundColor: C.water }}>
          <ul className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-center" style={{ color: '#F5F0E3' }}>
            {['Salón para eventos', 'Piscina', 'Quincho', 'Cocina equipada', 'Catering'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El plan del día: línea de tiempo ── */}
      <section id="el-dia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Pauta>El plan del día</Pauta>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
            <h2 className={`${display.className} uppercase tracking-[0.02em] text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.deep }}>
              Así corre
              <br />
              <span style={{ color: C.water }}>la celebración</span>
            </h2>
            <p className={`${serif.className} text-lg md:text-xl max-w-xs leading-snug`} style={{ color: C.muted }}>
              un ejemplo de cómo fluye un evento aquí — los horarios son de muestra, el lugar es real
            </p>
          </div>
        </Reveal>
        <ol className="relative">
          <span
            className="absolute left-[112px] md:left-[200px] top-2 bottom-2 border-l-2 border-dashed"
            style={{ borderColor: C.line }}
            aria-hidden="true"
          />
          {PLAN.map((p, i) => (
            <li key={p.hora} className="relative grid grid-cols-[104px_1fr] md:grid-cols-[184px_1fr] gap-4 md:gap-8 pb-12 md:pb-16 last:pb-0">
              <span
                className="absolute top-4 md:top-5 left-[105px] md:left-[193px] w-3.5 h-3.5 rounded-full border-4"
                style={{ backgroundColor: C.sun, borderColor: C.paper }}
                aria-hidden="true"
              />
              <div className="relative pt-1">
                <p
                  className={`${display.className} text-3xl md:text-5xl tracking-[0.02em]`}
                  style={{ color: i % 2 === 0 ? C.water : C.deep }}
                >
                  {p.hora}
                </p>
              </div>
              <Reveal delay={i * 90} className="min-w-0">
                <div className="grid md:grid-cols-[1.15fr_1fr] gap-5 md:gap-8 items-center border-b-2 border-dashed pb-10 md:pb-12" style={{ borderColor: C.line }}>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-2" style={{ color: C.sun }}>
                      Momento {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className={`${display.className} uppercase text-2xl md:text-3xl mb-3`} style={{ color: C.deep }}>
                      {p.titulo}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {p.texto}
                    </p>
                  </div>
                  <div className="relative overflow-hidden aspect-[4/3]" style={{ backgroundColor: C.card }}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 34vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── El lugar: lo que tiene ── */}
      <section id="el-lugar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Pauta light>El lugar</Pauta>
              <h2 className={`${display.className} uppercase tracking-[0.02em] text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#F5F0E3' }}>
                Un solo predio
                <br />
                <span style={{ color: C.pool }}>para todo el evento</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(245,240,227,0.78)' }}>
                En Manuel Baquedano, Molina: el salón, la piscina y el
                quincho están en el mismo predio, así que nadie tiene que
                mover el auto en medio de la celebración.
              </p>
              <div className="relative overflow-hidden aspect-[4/3] mb-6" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón de eventos montado con mesas de banquete en La Guatatrucha"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${serif.className} text-lg leading-snug`} style={{ color: C.pool }}>
                “{BIZ.rating} estrellas en Google — {BIZ.reviews} opiniones”
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
                {TIENE.map((t) => (
                  <li
                    key={t.titulo}
                    className="p-5 md:p-6 border"
                    style={{ borderColor: 'rgba(147,214,203,0.28)', backgroundColor: 'rgba(245,240,227,0.05)' }}
                  >
                    <span className="block mb-3" style={{ color: C.pool }}>
                      <Icono tipo={t.icono} />
                    </span>
                    <h3 className={`${display.className} uppercase text-lg mb-2 tracking-[0.03em]`} style={{ color: '#F5F0E3' }}>
                      {t.titulo}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(245,240,227,0.68)' }}>
                      {t.texto}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Pauta>Lo que dicen</Pauta>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12 md:mb-14">
            <h2 className={`${display.className} uppercase tracking-[0.02em] text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.deep }}>
              {BIZ.rating} <span style={{ color: C.water }}>sobre 5</span>
            </h2>
            <div className="flex items-center gap-3">
              <Stars value={4.4} color={C.sun} className="w-5 h-5" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.water, textDecorationColor: C.pool }}
              >
                {BIZ.reviews} reseñas en Google →
              </a>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={i} delay={i * 110}>
              <figure
                className="h-full p-6 border-2 relative"
                style={{ backgroundColor: C.card, borderColor: C.line, rotate: i === 1 ? '0.7deg' : '-0.6deg' }}
              >
                <Stars value={5} color={C.sun} className="w-3.5 h-3.5" />
                <blockquote className="text-[15px] md:text-base leading-relaxed mt-3 mb-5" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className="text-[10px] uppercase tracking-[0.2em] font-bold border-t border-dashed pt-3" style={{ color: C.muted, borderColor: C.line }}>
                  {r.autor}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Reservar: fecha y mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.water }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Pauta light>Reservas</Pauta>
            <h2 className={`${display.className} uppercase tracking-[0.02em] text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#F5F0E3' }}>
              ¿Ya tienes
              <br />
              <span style={{ color: C.deep }}>la fecha?</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(245,240,227,0.85)' }}>
              Cuéntanos qué celebras, para cuántos y cuándo: te
              respondemos por WhatsApp con disponibilidad y valor.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_EVENTO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-105 active:scale-95 tap-44`}
                style={{ backgroundColor: C.deep, color: '#F5F0E3' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(245,240,227,0.6)', color: '#F5F0E3' }}
              >
                Cómo llegar
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,240,227,0.85)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              {BIZ.hours}
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-4 min-h-[280px]" style={{ borderColor: C.deep }}>
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
      <footer style={{ backgroundColor: C.deep, color: '#F5F0E3' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} uppercase tracking-[0.04em] text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,240,227,0.65)' }}>
              Centro de eventos · {BIZ.address}, {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,240,227,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,240,227,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(245,240,227,0.72)' }}>
            Fotos, reseñas, rating, dirección, teléfono y horario son reales
            de su ficha de Google; los textos y la pauta del día son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK_EVENTO} label="Consultar fecha" />
    </div>
  )
}
