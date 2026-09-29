import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Identidad desde sus activos reales: logo B/N "Food & Music" y la
// terraza con luces → escenario nocturno + un solo acento ámbar.
const C = {
  bg: '#0E0C0A',
  bgAlt: '#171310',
  ink: '#F3EDE0',
  muted: '#A79C89',
  line: 'rgba(243,237,224,0.14)',
  amber: '#E8A13B',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'casa-alameda',
  title: 'Casa Alameda — Food & Music sobre la Alameda de Talca',
  description:
    'Bar restaurante en 4 Norte 1065, Talca. Sushi, pizzas, cócteles y terraza con música. 4.3 estrellas en 1.300+ reseñas. Reserva por WhatsApp.',
  image: '/demos/casa-alameda/hero.webp',
})

const NAV_LINKS = [
  { label: 'El setlist', href: '#setlist' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#contacto' },
]

// Lo que la gente menciona en sus 1.336 reseñas, ordenado como setlist.
const SETLIST = [
  {
    track: 'A1',
    name: 'Sushi rolls',
    note: 'Lo más nombrado del local: 22 reseñas lo ponen sobre los sushi de la ciudad',
    img: 'sushi',
  },
  {
    track: 'A2',
    name: 'Barra de cócteles',
    note: 'Mojitos, daiquiris y piscos; también buena línea sin alcohol',
    img: 'cocteles',
  },
  {
    track: 'A3',
    name: 'Ceviche y cocina',
    note: 'Ceviche, atún con papas de camote y platos para el centro',
    img: 'ceviche',
  },
  {
    track: 'B1',
    name: 'Pizzas y tablas',
    note: 'Para compartir mientras sigue la noche',
    img: 'tabla',
  },
  {
    track: 'B2',
    name: 'Happy hour y terraza',
    note: 'Micheladas, jugos naturales y la terraza de la Alameda',
    img: 'terraza',
  },
]

const TESTIMONIALS = [
  {
    text: 'Sushi and drinks are spectacular.',
    who: 'Ignacia Turismo Calypso',
    meta: 'reseña de Google',
  },
  {
    text: 'One of the best pubs in Talca for a weekend night out. The sushi is delicious, better than any other specialty restaurant in the city.',
    who: 'Juan E. Pérez',
    meta: 'reseña de Google',
  },
  {
    text: 'Nice place to hang out. Better outside when weather is good.',
    who: 'Heetae Kim',
    meta: 'reseña de Google',
  },
  {
    text: 'El lugar es precioso y la comida muy buena. Los tragos sin alcohol son un acierto.',
    who: 'Paz Durán',
    meta: 'reseña de Google',
  },
]

const EQ = [0.35, 0.8, 0.55, 1, 0.45, 0.9, 0.6, 0.3, 0.75, 0.5, 0.95, 0.4]

function EqBars({ n = 12, className = '' }: { n?: number; className?: string }) {
  return (
    <div className={`flex items-end gap-1 ${className}`} aria-hidden="true">
      {EQ.slice(0, n).map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full"
          style={{ height: `${Math.round(h * 22)}px`, backgroundColor: C.amber }}
        />
      ))}
    </div>
  )
}

function TrackRow({ t, i }: { t: (typeof SETLIST)[number]; i: number }) {
  return (
    <Reveal delay={i * 80}>
      <div
        className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[64px_1fr_auto_120px] items-center gap-4 md:gap-6 py-4 md:py-5 border-b"
        style={{ borderColor: C.line }}
      >
        <span className={`${mono.className} text-sm md:text-base font-bold`} style={{ color: C.amber }}>
          {t.track}
        </span>
        <div>
          <h3 className={`${display.className} text-lg md:text-2xl leading-tight`} style={{ color: C.ink }}>
            {t.name}
          </h3>
          <p className="text-xs md:text-sm mt-1" style={{ color: C.muted }}>
            {t.note}
          </p>
        </div>
        <EqBars n={6} className="hidden sm:flex" />
        <div className="relative hidden md:block w-[120px] aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={`${IMG}/${t.img}.webp`}
            alt=""
            fill
            sizes="120px"
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      </div>
    </Reveal>
  )
}

export default function CasaAlamedaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.bg, color: C.ink }}
    >
      <style>{`
        .ca-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .ca-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .ca-btn:active { transform: translateY(0) scale(0.97); }
        .ca-btn:focus-visible { outline: 3px solid ${C.amber}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        ctaLabel="Reservar"
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(14,12,10,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.amber,
          btnInk: '#0E0C0A',
        }}
      />

      {/* ── Hero: escenario a todo el ancho ── */}
      <section id="inicio" className="relative min-h-[96vh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Casa Alameda de noche: luces cálidas, neón morado y la barra llena de gente"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(14,12,10,0.35) 0%, rgba(14,12,10,0.72) 55%, #0E0C0A 100%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
          <Reveal>
            <div className="flex items-center gap-4 mb-5">
              <img
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name}, ${BIZ.claim}`}
                className="h-16 md:h-24 w-auto object-contain"
              />
              <EqBars className="hidden sm:flex" />
            </div>
            <h1
              className={`${display.className} font-extrabold leading-[0.95] tracking-tight text-[clamp(2.8rem,10vw,7.5rem)]`}
              style={{ color: C.ink }}
            >
              Casa
              <br />
              Alameda
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.3em] mt-4 mb-7`} style={{ color: C.amber }}>
              {BIZ.claim} · {BIZ.address}, {BIZ.city}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ca-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.amber, color: '#0E0C0A' }}
              >
                Reservar mesa
              </a>
              <a
                href="#setlist"
                className={`${mono.className} ca-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Ver el setlist
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha de puerta: rating + horario + dirección ── */}
      <section aria-label="Datos del local" style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.muted }}>Google</p>
            <p className="flex items-center gap-2 text-sm font-semibold" style={{ color: C.ink }}>
              <Stars value={BIZ.rating} color={C.amber} /> {BIZ.rating} · {BIZ.reviews.toLocaleString('es-CL')}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.muted }}>Abre</p>
            <p className="text-sm font-semibold" style={{ color: C.ink }}>{BIZ.hours}</p>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.muted }}>Dirección</p>
            <p className="text-sm font-semibold" style={{ color: C.ink }}>{BIZ.address}, {BIZ.city}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.muted }}>Contacto</p>
            <a href={`tel:${BIZ.phoneTel}`} className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: C.amber }}>
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El setlist ── */}
      <section id="setlist" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amber }}>
                Lado A / Lado B
              </p>
              <h2 className={`${display.className} text-[clamp(2rem,5.5vw,4rem)] leading-none tracking-tight`} style={{ color: C.ink }}>
                El setlist
              </h2>
            </div>
            <EqBars className="mb-2" />
          </div>
        </Reveal>
        <div className="border-t" style={{ borderColor: C.line }}>
          {SETLIST.map((t, i) => (
            <TrackRow key={t.track} t={t} i={i} />
          ))}
        </div>
        <Reveal delay={200}>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-8`} style={{ color: C.muted }}>
            Carta completa en el local · esto es lo que la gente ya viene a buscar
          </p>
        </Reveal>
      </section>

      {/* ── Terraza + fachada ── */}
      <section id="terraza" className="scroll-mt-20" style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-5">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amber }}>
              Sobre la Alameda
            </p>
            <h2 className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[0.98] tracking-tight mb-5`} style={{ color: C.ink }}>
              La noche es
              <br />
              mejor afuera
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              La terraza mira la Alameda: mesas afuera para conversar tranquilo,
              adentro la barra y la música. Los fines de semana se llena — mejor
              reservar antes de salir.
            </p>
            <a
              href={WA_LINK_MESA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} ca-btn inline-block text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
              style={{ backgroundColor: C.amber, color: '#0E0C0A' }}
            >
              Pedir mesa en la terraza
            </a>
          </Reveal>
          <Reveal className="col-span-7 md:col-span-4" delay={120}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={`${IMG}/terraza.webp`}
                alt="Terraza de Casa Alameda: mesas al aire libre rodeadas de verde"
                fill
                sizes="(min-width: 768px) 34vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-5 md:col-span-3" delay={200}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:mt-16">
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada de Casa Alameda de noche con su logo circular iluminado"
                fill
                sizes="(min-width: 768px) 26vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-3`} style={{ color: C.muted }}>
              4 Nte. 1065
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Barra y platos: par fotográfico ── */}
      <section aria-label="De la barra y la cocina" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-5 md:gap-8 items-center">
          <Reveal className="col-span-6 md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={`${IMG}/barra.webp`}
                alt="Copas y jugos en la mesa de Casa Alameda de noche"
                fill
                sizes="(min-width: 768px) 56vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-6 md:col-span-5" delay={120}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={`${IMG}/tabla.webp`}
                alt="Mesa servida con pescado, papas, ensaladas y salsas para compartir"
                fill
                sizes="(min-width: 768px) 40vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-none tracking-tight`} style={{ color: C.ink }}>
                Lo que suena
                <br />
                en las reseñas
              </h2>
              <div className="flex items-center gap-3">
                <p className={`${display.className} text-5xl md:text-6xl leading-none`} style={{ color: C.amber }}>
                  {BIZ.rating}
                </p>
                <div>
                  <Stars value={BIZ.rating} color={C.amber} />
                  <p className={`${mono.className} text-[11px] mt-1`} style={{ color: C.muted }}>
                    {BIZ.reviews.toLocaleString('es-CL')} reseñas
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.who} delay={i * 90}>
                <figure className="h-full p-6 md:p-7 rounded-2xl border flex flex-col" style={{ borderColor: C.line, backgroundColor: C.bg }}>
                  <blockquote className="text-sm md:text-[15px] leading-relaxed font-medium flex-1" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-4 flex items-center gap-3`} style={{ color: C.muted }}>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.amber }} aria-hidden="true" />
                    {t.who} · {t.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs uppercase tracking-[0.16em] font-bold underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.amber, textDecorationColor: 'rgba(232,161,59,0.4)' }}
            >
              Leerlas todas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto y mapa ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-5 flex flex-col justify-between">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amber }}>
                {BIZ.hours}
              </p>
              <h2 className={`${display.className} text-[clamp(2.2rem,6vw,4rem)] leading-[0.95] tracking-tight mb-6`} style={{ color: C.ink }}>
                Esta noche,
                <br />
                en la Alameda
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed font-medium" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.ink }}>
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                <a href={BIZ.site} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.ink }}>
                  {BIZ.siteHost}
                </a>
              </address>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ca-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.amber, color: '#0E0C0A' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ca-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.line, color: C.ink }}
              >
                {BIZ.igUser}
              </a>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={140}>
            <div className="relative w-full overflow-hidden rounded-2xl border aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]" style={{ borderColor: C.line }}>
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${C.line}`, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/logo.webp`} alt="" className="w-12 h-12 object-contain rounded-full" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-xl leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-7 text-xs leading-relaxed" style={{ color: C.muted }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, reseñas y fotos reales de su ficha de
            Google y de casaalameda.cl; la carta detallada se confirma con el
            local.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amber }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
