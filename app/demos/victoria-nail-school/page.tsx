import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  red: '#C1272D',
  redDeep: '#9E1F24',
  gray: '#4A4E52',
  grayDeep: '#2E3134',
  orange: '#E8631A',
  orangeHi: '#F58634',
  paper: '#FFFFFF',
  soft: '#F3F4F5',
  ink: '#1C1E20',
  muted: '#5C6165',
  line: 'rgba(28,30,32,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'victoria-nail-school',
  title: 'Victoria Nail School — Manicura y pedicura en Pencahue',
  description: 'Salón de manicura y pedicura en Pencahue, Región del Maule. Agenda tu hora por WhatsApp: atención directa, puntual y con precios claros.',
  image: '/demos/victoria-nail-school/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El salón', href: '#salon' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICES = [
  {
    num: '01',
    src: `${IMG}/detalle2.webp`,
    alt: 'Estación de manicura con lámpara, carta de colores y lámpara UV',
    name: 'Manicura y esmaltado semipermanente',
    desc: 'Limado, cuidado de cutícula y esmaltado que dura semanas. Cada clienta tiene su estación, su lámpara y su hora: sin turnos traslapados ni esperas de más.',
    price: 'desde $10.000',
  },
  {
    num: '02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Sillón de pedicura con tina, toallas y repisas del salón',
    name: 'Pedicura spa',
    desc: 'Sillón de pedicura con tina: remojo, exfoliación, masaje y esmaltado. El servicio más pedido para cerrar la semana con los pies como nuevos.',
    price: 'desde $20.000',
  },
  {
    num: '03',
    src: `${IMG}/detalle1.webp`,
    alt: 'Bandeja con instrumental de manicura esterilizado, limas y esmaltes',
    name: 'Uñas esculpidas y nail art',
    desc: 'Acrílicas, polygel y diseños a mano alzada, con instrumental esterilizado por clienta. Trae tu referencia o elige el diseño del catálogo del salón.',
    price: 'desde $25.000',
  },
]

const ROUTE = [
  {
    num: '01',
    title: 'Agenda',
    desc: 'Escríbenos por WhatsApp y tomas hora el día y momento que te acomode.',
  },
  {
    num: '02',
    title: 'Confirmación',
    desc: 'Te confirmamos la hora exacta por mensaje. Sin vueltas ni silencios.',
  },
  {
    num: '03',
    title: 'Atención puntual',
    desc: 'Llegas, te atienden a tu hora y sales a tiempo. Así de simple.',
  },
]

const PRICES = [
  { name: 'Manicura tradicional', price: '$10.000' },
  { name: 'Esmaltado semipermanente', price: '$18.000' },
  { name: 'Pedicura completa spa', price: '$20.000' },
  { name: 'Retoque de semipermanente', price: '$12.000' },
  { name: 'Uñas acrílicas o polygel', price: 'desde $25.000' },
  { name: 'Nail art por uña', price: 'desde $3.000' },
]

const REVIEWS = [
  'Atención impecable y muy puntual. Agendé por WhatsApp y me atendieron a la hora exacta.',
  'Quedé feliz con mis uñas, el lugar es bonito y se nota el cuidado en cada detalle.',
  'La pedicura spa vale cada peso. Ambiente tranquilo y la dueña atiende directamente.',
]

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? '#FFFFFF' : C.red }}
    >
      <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
      {children}
    </p>
  )
}

export default function VictoriaNailSchoolPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .vns-nav header, .vns-nav header * { transition: none !important }
        .vns-band > div { position: static; max-width: none; width: fit-content; box-shadow: none; background-color: rgba(28,30,32,0.94) }
      `}</style>
      {/* fondo rojo del hero bajo el nav transparente (el wrapper no ocupa alto) */}
      <div className="vns-nav" style={{ backgroundColor: C.red }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(255,255,255,0.95)',
            ink: C.ink,
            line: C.line,
            btnBg: C.red,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero split: texto | foto ── */}
      <section
        id="inicio"
        className="grid lg:grid-cols-2 lg:min-h-svh"
        style={{ backgroundColor: C.red }}
      >
        <div className="min-w-0 flex flex-col justify-between px-5 md:px-10 lg:px-12 pt-28 md:pt-36 pb-8 lg:pb-10">
          <Reveal>
            <Eyebrow light>Manicura y pedicura · Pencahue, Maule</Eyebrow>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(1.75rem,7vw,5.6rem)] lg:text-[3.3vw] mb-7`}
              style={{ color: '#FFFFFF' }}
            >
              Agendada.
              <br />
              Confirmada.
              <br />
              <span style={{ color: '#FFFFFF' }}>
                <span style={{ color: C.orangeHi }} aria-hidden="true">→&#160;</span>
                Lista a tiempo.
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-9" style={{ color: '#FFFFFF' }}>
              Salón de manicura y pedicura en Pencahue. Agenda por
              WhatsApp, atención directa de su dueña y una hora que
              se respeta.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ backgroundColor: C.orange, color: '#1C1E20' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
          <div
            className="flex flex-wrap gap-x-6 gap-y-1.5 pt-10 mt-10 border-t text-[11px] md:text-xs uppercase tracking-[0.18em]"
            style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF' }}
          >
            <span>{BIZ.reviews} reseñas en Google</span>
            <a
              href={BIZ.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-1 hover:text-white transition-colors"
            >
              {BIZ.instagram} · {BIZ.followers}
            </a>
            <span className="hidden md:inline" style={{ color: '#FFFFFF' }}>
              sitio de ejemplo
            </span>
          </div>
        </div>
        <div className="relative min-h-[52vh] lg:min-h-svh overflow-hidden lg:border-l-[6px]" style={{ borderColor: C.orange }}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="Interior de Victoria Nail School: estaciones de manicura, repisas de esmaltes y sillón de pedicura con vista a la calle de Pencahue"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-x-0 top-0 h-28"
            style={{
              background:
                'linear-gradient(180deg, rgba(28,30,32,0.45) 0%, rgba(28,30,32,0) 100%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-5 left-5 md:bottom-8 md:left-8 px-4 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold leading-relaxed"
            style={{ backgroundColor: '#FFFFFF', color: C.ink }}
          >
            <span style={{ color: C.red }}>Pencahue</span>
            <span className="mx-2" style={{ color: C.muted }}>→</span>
            Región del Maule
          </div>
        </div>
      </section>

      {/* ── Servicios: filas partidas alternadas ── */}
      <section id="servicios" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10 md:pb-14">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98]`}
                style={{ color: C.ink }}
              >
                Manos y pies,
                <br />
                <span style={{ color: C.red }}>en ruta</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Servicios de muestra para mostrar el diseño: al publicar
                van la carta y los valores reales del salón.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              className="group grid lg:grid-cols-2 border-b"
              style={{
                borderColor: C.line,
                backgroundColor: i % 2 === 0 ? C.paper : C.soft,
              }}
            >
              <div className={`relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="eager"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-5 md:px-10 lg:px-16 py-12 md:py-20 lg:py-24 flex flex-col justify-center">
                <Reveal>
                  <p
                    className={`${display.className} font-extrabold text-6xl md:text-7xl leading-none mb-5`}
                    style={{ color: i % 2 === 0 ? C.red : C.orange }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </p>
                  <h3
                    className={`${display.className} font-bold uppercase text-2xl md:text-4xl leading-[1.02] mb-5`}
                    style={{ color: C.ink }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                  <p
                    className={`${display.className} inline-flex items-center gap-2 self-start font-bold text-sm px-4 py-2 border-2`}
                    style={{ borderColor: C.gray, color: C.gray }}
                  >
                    {s.price}
                    <span className="font-normal text-xs" style={{ color: C.muted }}>
                      · referencial
                    </span>
                  </p>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Cómo funciona: franja logística ── */}
      <section style={{ backgroundColor: C.gray, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow light>Agenda sin vueltas</Eyebrow>
            <h2
              className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-[0.98] mb-12 md:mb-16`}
            >
              Tu hora, <span style={{ color: C.orangeHi }}>confirmada</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {ROUTE.map((r, i) => (
              <Reveal key={r.num} delay={i * 110}>
                <div className="border-t-2 pt-6" style={{ borderColor: i === 2 ? C.orange : 'rgba(255,255,255,0.35)' }}>
                  <p
                    className={`${display.className} font-extrabold text-5xl md:text-6xl leading-none mb-3`}
                    style={{ color: C.orangeHi }}
                  >
                    {r.num}
                  </p>
                  <h3 className={`${display.className} font-bold uppercase text-xl md:text-2xl mb-3`}>
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <div
              className="mt-12 md:mt-16 pt-8 border-t flex flex-wrap items-center gap-x-6 gap-y-4"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ backgroundColor: C.orange, color: '#1C1E20' }}
              >
                Agendar mi hora
              </a>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Te confirmamos la hora exacta por mensaje.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El salón: split con fachada ── */}
      <section id="salon" className="scroll-mt-20 grid lg:grid-cols-2 border-b" style={{ borderColor: C.line }}>
        <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src={`${IMG}/ambiente.webp`}
            alt="Fachada de Victoria Nail School: local a pie de calle con toldo y vitrina, en un barrio de Pencahue"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="px-5 md:px-10 lg:px-16 py-14 md:py-24 flex flex-col justify-center">
          <Reveal>
            <Eyebrow>El salón</Eyebrow>
            <h2
              className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-[0.98] mb-6`}
              style={{ color: C.ink }}
            >
              Un salón de barrio
              <br />
              <span style={{ color: C.red }}>en Pencahue</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-5" style={{ color: C.muted }}>
              Victoria Nail School® atiende en Brisas de Pencahue, a pasos
              de las casas del sector. Te atiende su dueña directamente:
              la misma persona que lleva la agenda, recibe tu mensaje y
              hace tus uñas.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              En Instagram suma {BIZ.followers} seguidores que siguen sus
              diseños, y en Google su ficha acumula {BIZ.reviews} reseñas.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                'Atención directa de su dueña, sin intermediarios',
                'Agenda y confirmación por WhatsApp',
                `Comunidad de ${BIZ.followers} seguidores en Instagram`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                  <span className="w-2.5 h-2.5 shrink-0" style={{ backgroundColor: C.orange }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BIZ.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block self-start font-bold text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2`}
              style={{ borderColor: C.red, color: C.red, outlineColor: C.red }}
            >
              Ver Instagram →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones</Eyebrow>
            <h2
              className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[0.98] mb-4`}
              style={{ color: C.ink }}
            >
              Lo que dicen en Google
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} tiene {BIZ.reviews} reseñas en su ficha de
              Google. Estos textos son de muestra: al publicar van las
              reseñas reales.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 transition-colors hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: C.red, textDecorationColor: 'rgba(193,39,45,0.35)', outlineColor: C.red }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {REVIEWS.map((t, i) => (
              <Reveal key={i} delay={120 + i * 110}>
                <figure
                  className="p-6 md:p-7 border-l-4"
                  style={{ backgroundColor: C.soft, borderColor: i === 1 ? C.orange : C.red }}
                >
                  <blockquote className={`${display.className} font-medium text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.red }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precios referenciales ── */}
      <section id="precios" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Precios</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2
                className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-[0.98]`}
                style={{ color: C.ink }}
              >
                Precios de referencia
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Valores de muestra para mostrar el diseño: al publicar
                van los precios reales del salón.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="border" style={{ backgroundColor: C.paper, borderColor: C.line }}>
              {PRICES.map((p, i) => (
                <li
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 px-5 md:px-8 py-4 md:py-5"
                  style={{
                    borderTop: i === 0 ? 'none' : `1px dashed ${C.line}`,
                  }}
                >
                  <span className={`${display.className} font-bold text-base md:text-xl`} style={{ color: C.ink }}>
                    {p.name}
                  </span>
                  <span className={`${display.className} font-extrabold text-base md:text-xl shrink-0`} style={{ color: C.red }}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xs md:text-sm mt-6" style={{ color: C.muted }}>
              * Precios de muestra. El valor final se confirma al agendar
              por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto: split texto | mapa ── */}
      <section id="contacto" className="scroll-mt-20 grid lg:grid-cols-2">
        <div
          className="px-5 md:px-10 lg:px-16 py-14 md:py-24 flex flex-col justify-center"
          style={{ backgroundColor: C.grayDeep, color: '#FFFFFF' }}
        >
          <Reveal>
            <Eyebrow light>Contacto</Eyebrow>
            <h2
              className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-[0.98] mb-6`}
            >
              Agenda tu hora
              <br />
              <span style={{ color: C.orange }}>por WhatsApp</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Escríbenos y te confirmamos la hora exacta. Atención con
              hora agendada, de lunes a sábado.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ backgroundColor: C.orange, color: '#1C1E20' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#FFFFFF' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
            <address className="not-italic text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm mt-4">
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-1 hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {BIZ.instagram}
              </a>
            </p>
          </Reveal>
        </div>
        <div className="min-h-[320px] lg:min-h-0">
          <iframe
            title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
            src={MAPS_EMBED}
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-extrabold uppercase text-2xl mb-2`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            servicios, precios y fotos son de muestra.
          </p>
        </div>
        <div className="vns-band max-w-6xl mx-auto px-5 md:px-8 pb-20">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
