import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waServicio, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/**
 * Identidad tomada de los activos reales del salón: el letrero y el
 * perfil de Facebook son negro + dorado ("GS · Gabriela Saavedra ·
 * Concepto Estilo"). Base carbón cálido, crema hueso y un solo acento
 * dorado; todo lo interactivo es píldora y los marcos van sin radio.
 */
const C = {
  night: '#15120E',
  coal: '#211C15',
  cream: '#F4EEE1',
  creamSoft: '#EAE1CE',
  gold: '#C9A24B',
  goldSoft: '#E7CD8F',
  goldDeep: '#7A5C1A',
  ink: '#241F18',
  muted: '#6B6252',
  line: 'rgba(36,31,24,0.16)',
  lineLight: 'rgba(244,238,225,0.22)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24B]'
const BTN = `inline-flex items-center gap-2.5 font-bold rounded-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${FOCUS}`
const LINK = `font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${FOCUS}`
const HALF = '(min-width: 768px) 50vw, 100vw'

export const metadata: Metadata = demoMetadata({
  slug: 'salon-de-belleza-gabriela-saavedra-talca',
  title: 'Salón de Belleza Gabriela Saavedra — Centro de estética en Talca',
  description: 'Centro de estética en 32 Oriente 1327, Talca: cabello y color, manicure, pedicure y depilación con cera. Hora agendada por WhatsApp, todos los días.',
  image: '/demos/salon-de-belleza-gabriela-saavedra-talca/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El salón', href: '#salon' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    tag: 'Cabello',
    src: `${IMG}/cabello-rubio.webp`,
    alt: 'Trabajo de color del salón: cabello rubio con ondas y degradado balayage',
    name: 'Cabello y color',
    desc: 'Color, balayage, corte y peinado con productos profesionales Wella y Sebastian, las marcas que el salón exhibe en su letrero.',
    items: ['Color y balayage', 'Corte y peinado', 'Tratamientos capilares'],
  },
  {
    n: '02',
    tag: 'Manos y pies',
    src: `${IMG}/unas.webp`,
    alt: 'Publicación del salón con trabajos de uñas: esmaltado azul, rojo y tonos nude',
    name: 'Manicure y pedicure',
    desc: 'De lo tradicional a las extensiones: el salón publica esmaltado permanente, kapping y extensiones en acrílico, polygel y softgel.',
    items: ['Esmaltado permanente', 'Extensiones y kapping', 'Pedicura'],
  },
  {
    n: '03',
    tag: 'Piel',
    src: `${IMG}/depilacion.webp`,
    alt: 'Publicación del salón sobre depilación con cera, con los tipos de cera que ofrece',
    name: 'Depilación con cera',
    desc: 'Depilación con cera para piernas, axilas, bozo y otras zonas, agendada por WhatsApp como el resto de los servicios.',
    items: ['Piernas y axilas', 'Bozo y rostro', 'Cera tibia'],
  },
]

const TESTIMONIOS = [
  {
    text: 'Una experiencia muy grata, con grandes profesionales. Feliz con el resultado de mi pelito.',
    author: 'Solange Leiva Lagos',
    stars: '5',
  },
  {
    text: 'Buen lugar y agradable, buen rato y amabilidad.',
    author: 'Cristóbal Ibarra',
    stars: '4',
  },
]

const PRECIOS = [
  { name: 'Corte y peinado', desc: 'Lavado incluido', price: '$15.000' },
  { name: 'Color y balayage', desc: 'Según largo y técnica', price: 'desde $35.000' },
  { name: 'Manicure tradicional', desc: 'Con esmaltado a elección', price: '$12.000' },
  { name: 'Esmaltado permanente', desc: 'Incluye retiro', price: '$18.000' },
  { name: 'Pedicura', desc: 'Con spa de pies', price: '$20.000' },
  { name: 'Depilación con cera', desc: 'Piernas completas', price: '$16.000' },
]

const PASOS = [
  { n: '1', name: 'Escribe por WhatsApp', desc: 'Cuéntanos qué servicio buscas y qué día te acomoda.' },
  { n: '2', name: 'Acordamos día y hora', desc: 'Te confirmamos la hora y cuánto dura tu atención.' },
  { n: '3', name: 'Te esperamos', desc: 'Llega unos minutos antes y te atendemos sin esperas.' },
]

function GoldStar({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={C.gold} stroke={C.gold} strokeWidth="1" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
    </svg>
  )
}

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.gold : C.goldDeep }}
    >
      <span aria-hidden="true" className="h-px w-6" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

function WaArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[17px] h-[17px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12 h14" />
      <path d="M12.5 6 L19 12 L12.5 18" />
    </svg>
  )
}

export default function SalonGabrielaSaavedraPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(21,18,14,0.92)',
          ink: C.cream,
          line: C.lineLight,
          btnBg: C.gold,
          btnInk: C.night,
        }}
      />

      {/* ── Hero partido: foto | texto ── */}
      <section
        id="inicio"
        className="relative grid md:grid-cols-2"
        style={{ backgroundColor: C.night }}
      >
        <div className="relative min-h-[58svh] md:min-h-svh">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Resultado de color del salón: cabello rubio con ondas y balayage luminoso"
            fill
            priority
            sizes={HALF}
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(21,18,14,0.4) 0%, rgba(21,18,14,0.05) 42%, rgba(21,18,14,0.28) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
            <Reveal>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-xs md:text-sm px-4 py-2.5 shadow-lg tap-44`}
                style={{ backgroundColor: 'rgba(244,238,225,0.96)', color: C.night }}
              >
                <GoldStar className="w-[15px] h-[15px]" />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-16 md:pt-32 md:pb-24">
          <Reveal>
            <Eyebrow light>
              {BIZ.rubro} · {BIZ.city}
            </Eyebrow>
            <h1
              className={`${display.className} font-normal leading-[1.04] tracking-[-0.01em] text-[clamp(2.6rem,7.5vw,4.6rem)] mb-6`}
              style={{ color: C.cream }}
            >
              {BIZ.name},
              <br />
              <em style={{ color: C.goldSoft }}>{BIZ.tagline}</em>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-md mb-9"
              style={{ color: 'rgba(244,238,225,0.82)' }}
            >
              Cabello y color, manicure y depilación en {BIZ.address},{' '}
              {BIZ.sector}, {BIZ.city}. Pides tu hora por WhatsApp y te
              atienden a ti, sin salas de espera llenas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.gold, color: C.night }}
              >
                <WaArrow />
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${BTN} text-sm md:text-base px-7 py-3.5 border hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(244,238,225,0.5)', color: C.cream }}
              >
                Ver servicios
              </a>
            </div>
            <dl
              className="mt-12 pt-6 border-t grid grid-cols-2 gap-x-6 gap-y-4 text-[11px] uppercase tracking-[0.18em]"
              style={{ borderColor: C.lineLight, color: 'rgba(244,238,225,0.7)' }}
            >
              <div>
                <dt className="mb-1" style={{ color: C.gold }}>Dirección</dt>
                <dd>{BIZ.address} · {BIZ.city}</dd>
              </div>
              <div>
                <dt className="mb-1" style={{ color: C.gold }}>Teléfono</dt>
                <dd>
                  <a href={`tel:${BIZ.phoneTel}`} className={`hover:text-white transition-colors ${FOCUS} tap-44`}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="mb-1" style={{ color: C.gold }}>Horario</dt>
                <dd>{BIZ.horario}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios: bloques altos que alternan lado ── */}
      <section id="servicios" className="scroll-mt-20">
        <header className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10 md:pb-14">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end">
              <h2
                className={`${display.className} font-normal text-4xl md:text-6xl leading-[1.04]`}
                style={{ color: C.night }}
              >
                Lo que se hace
                <br />
                <em style={{ color: C.goldDeep }}>en el salón</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Los servicios y los productos de esta lista salen de las
                publicaciones del propio salón en Facebook.
              </p>
            </div>
          </Reveal>
        </header>

        {SERVICIOS.map((s, i) => {
          const flip = i % 2 === 1
          const dark = flip
          return (
            <article
              key={s.name}
              className="grid md:grid-cols-2"
              style={{ backgroundColor: dark ? C.coal : C.cream }}
            >
              <div
                className={`relative min-h-[300px] sm:min-h-[380px] md:min-h-[560px] ${
                  flip ? 'md:order-2' : ''
                }`}
              >
                <Image src={s.src} alt={s.alt} fill sizes={HALF} className="object-cover" />
              </div>
              <div
                className={`flex flex-col justify-center px-5 md:px-12 lg:px-20 py-14 md:py-24 ${
                  flip ? 'md:order-1' : ''
                }`}
              >
                <Reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className={`${display.className} text-5xl md:text-6xl leading-none`}
                      style={{ color: dark ? C.gold : C.goldDeep }}
                    >
                      {s.n}
                    </span>
                    <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineLight : C.line }} />
                    <span
                      className="text-[11px] uppercase tracking-[0.24em] font-bold"
                      style={{ color: dark ? C.gold : C.goldDeep }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className={`${display.className} font-normal text-3xl md:text-5xl leading-[1.08] mb-5`}
                    style={{ color: dark ? C.cream : C.night }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-7 max-w-md"
                    style={{ color: dark ? 'rgba(244,238,225,0.78)' : C.muted }}
                  >
                    {s.desc}
                  </p>
                  <ul className="space-y-3 mb-9">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm md:text-[15px]"
                        style={{ color: dark ? 'rgba(244,238,225,0.9)' : C.ink }}
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-5 shrink-0"
                          style={{ backgroundColor: C.gold }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waServicio(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BTN} self-start text-sm px-6 py-3 border ${dark ? 'hover:bg-white/10' : 'hover:bg-[#15120E]/5'} tap-44`}
                    style={{
                      borderColor: dark ? 'rgba(244,238,225,0.45)' : 'rgba(21,18,14,0.4)',
                      color: dark ? C.cream : C.night,
                    }}
                  >
                    Consultar por WhatsApp
                    <WaArrow />
                  </a>
                </Reveal>
              </div>
            </article>
          )
        })}

        {/* ── Marcas que usa el salón ── */}
        <div style={{ backgroundColor: C.night }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-8" style={{ color: C.gold }}>
                En su mesa de trabajo
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-3 gap-8 md:gap-12">
              {[
                { n: 'Wella', d: 'Color y cuidado profesional del cabello, la marca del letrero del salón.' },
                { n: 'Sebastian', d: 'Styling y tratamientos Sebastian Professional, también en el letrero.' },
                { n: 'AgendaPro', d: 'El salón agenda sus horas online: escribes y quedas confirmada.' },
              ].map((t, i) => (
                <Reveal key={t.n} delay={i * 90}>
                  <li className="border-t pt-5" style={{ borderColor: C.lineLight }}>
                    <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.cream }}>
                      {t.n}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,238,225,0.66)' }}>
                      {t.d}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── El salón: fachada real, datos y opiniones ── */}
      <section id="salon" className="scroll-mt-20" style={{ backgroundColor: C.coal }}>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-14 md:py-24">
            <Reveal>
              <Eyebrow light>El salón</Eyebrow>
              <h2
                className={`${display.className} font-normal text-4xl md:text-5xl leading-[1.06] mb-6`}
                style={{ color: C.cream }}
              >
                Con nombre y apellido,
                <br />
                <em style={{ color: C.goldSoft }}>en Las Rastras</em>
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-6 max-w-md"
                style={{ color: 'rgba(244,238,225,0.8)' }}
              >
                El salón atiende en {BIZ.address}, en el Loteo El Solar del
                Parque del sector {BIZ.sector}, al oriente de {BIZ.city}.
                Atención directa y con hora agendada: llegas, te atienden y
                el tiempo se respeta.
              </p>
              <p className="text-sm leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(244,238,225,0.62)' }}>
                Abierto {BIZ.horario.toLowerCase()}, según la ficha pública
                del salón en Google.
              </p>
              <dl className="grid grid-cols-3 gap-x-4 gap-y-6">
                <div className="border-t pt-4" style={{ borderColor: C.lineLight }}>
                  <dt className={`${display.className} text-3xl md:text-4xl mb-1`} style={{ color: C.gold }}>
                    {BIZ.rating}
                  </dt>
                  <dd className="text-[10px] md:text-xs uppercase tracking-[0.16em]" style={{ color: 'rgba(244,238,225,0.7)' }}>
                    estrellas en Google
                  </dd>
                </div>
                <div className="border-t pt-4" style={{ borderColor: C.lineLight }}>
                  <dt className={`${display.className} text-3xl md:text-4xl mb-1`} style={{ color: C.gold }}>
                    {BIZ.reviews}
                  </dt>
                  <dd className="text-[10px] md:text-xs uppercase tracking-[0.16em]" style={{ color: 'rgba(244,238,225,0.7)' }}>
                    reseñas
                  </dd>
                </div>
                <div className="border-t pt-4" style={{ borderColor: C.lineLight }}>
                  <dt className={`${display.className} text-3xl md:text-4xl mb-1`} style={{ color: C.gold }}>
                    {BIZ.facebookFollowers}
                  </dt>
                  <dd className="text-[10px] md:text-xs uppercase tracking-[0.16em]" style={{ color: 'rgba(244,238,225,0.7)' }}>
                    seguidores
                  </dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} text-sm tap-44`}
                  style={{ color: C.goldSoft, textDecorationColor: 'rgba(201,162,75,0.5)' }}
                >
                  Ver la ficha en Google →
                </a>
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} text-sm tap-44`}
                  style={{ color: C.goldSoft, textDecorationColor: 'rgba(201,162,75,0.5)' }}
                >
                  Facebook del salón →
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-svh">
            <Image
              src={`${IMG}/fachada.webp`}
              alt="Letrero del salón en su fachada: GS, Gabriela Saavedra, Concepto Estilo, con las marcas Wella y Sebastian"
              fill
              sizes={HALF}
              className="object-cover"
            />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: C.lineLight }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-14 items-end mb-10">
                <h3 className={`${display.className} text-3xl md:text-4xl leading-tight`} style={{ color: C.cream }}>
                  Lo que dicen en Google
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,238,225,0.66)' }}>
                  Reseñas reales de la ficha del salón en Google Maps, con
                  su nombre y su nota.
                </p>
              </div>
            </Reveal>
            <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
              {TESTIMONIOS.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <li className="border-t pt-6" style={{ borderColor: C.lineLight }}>
                    <div className="flex gap-1 mb-4" aria-label={`${t.stars} estrellas`}>
                      {Array.from({ length: Number(t.stars) }).map((_, s) => (
                        <GoldStar key={s} className="w-4 h-4" />
                      ))}
                    </div>
                    <blockquote
                      className={`${display.className} text-lg md:text-xl leading-relaxed mb-5`}
                      style={{ color: 'rgba(244,238,225,0.94)' }}
                    >
                      “{t.text}”
                    </blockquote>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.gold }}>
                      {t.author} · Reseña de Google
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>Precios</Eyebrow>
              <h2
                className={`${display.className} font-normal text-4xl md:text-5xl leading-[1.06] mb-5`}
                style={{ color: C.night }}
              >
                Valores
                <br />
                <em style={{ color: C.goldDeep }}>de referencia</em>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Cifras de muestra para mostrar el formato de la lista: al
                publicar van los precios reales de cada servicio.
              </p>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: C.line }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: C.muted }}>
                  Los valores pueden variar según el largo del cabello, el
                  estado de las uñas o los productos que elijas.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} text-sm px-6 py-3 tap-44`}
                  style={{ backgroundColor: C.night, color: C.cream }}
                >
                  <WaArrow />
                  Consultar valores por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <ul className="border-t" style={{ borderColor: C.line }}>
                {PRECIOS.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline justify-between gap-4 py-4 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <div>
                      <p className={`${display.className} text-xl md:text-2xl`} style={{ color: C.night }}>
                        {p.name}
                      </p>
                      <p className="text-xs md:text-sm" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm md:text-base font-bold" style={{ color: C.ink }}>
                        {p.price}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.goldDeep }}>
                        muestra
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo agendar ── */}
      <section style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-8" style={{ color: C.goldDeep }}>
              Cómo agendar
            </p>
          </Reveal>
          <ol className="grid sm:grid-cols-3 gap-8 md:gap-12">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <li className="border-t pt-5" style={{ borderColor: C.line }}>
                  <p className={`${display.className} text-2xl mb-1`} style={{ color: C.goldDeep }}>
                    {p.n}
                  </p>
                  <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.night }}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Contacto: datos + mapa ── */}
      <section
        id="contacto"
        className="scroll-mt-20 grid md:grid-cols-2 border-t"
        style={{ backgroundColor: C.cream, borderColor: C.line }}
      >
        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-16 md:pt-32 md:pb-24">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2
              className={`${display.className} font-normal text-4xl md:text-5xl leading-[1.06] mb-6`}
              style={{ color: C.night }}
            >
              {BIZ.address},
              <br />
              <em style={{ color: C.goldDeep }}>{BIZ.sector}</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}, Loteo El Solar del Parque
              <br />
              {BIZ.sector}, {BIZ.city}, {BIZ.region}
            </address>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN} text-sm md:text-base px-7 py-4 mb-8 self-start tap-44`}
              style={{ backgroundColor: C.gold, color: C.night }}
            >
              <WaArrow />
              Escribir por WhatsApp
            </a>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke={C.goldDeep}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.ink }}>Horario:</strong> {BIZ.horario}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke={C.goldDeep}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.ink }}>WhatsApp:</strong>{' '}
                  <a href={`tel:${BIZ.phoneTel}`} className={`underline underline-offset-4 ${FOCUS} tap-44`}>
                    {BIZ.phoneDisplay}
                  </a>
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK + ' tap-44'}
                style={{ color: C.night, textDecorationColor: 'rgba(21,18,14,0.35)' }}
              >
                Facebook del salón
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK + ' tap-44'}
                style={{ color: C.night, textDecorationColor: 'rgba(21,18,14,0.35)' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[320px] md:min-h-[560px]">
          <LazyMap
            title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
            src={MAPS_EMBED}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <Image src={`${IMG}/cabello-dorado.webp`} alt="" fill sizes="100vw" className="object-cover opacity-[0.18]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto border-y py-12 md:py-14 px-4" style={{ borderColor: C.lineLight }}>
              <h2
                className={`${display.className} font-normal text-[clamp(2rem,6vw,3.6rem)] leading-[1.06] mb-6`}
                style={{ color: C.cream }}
              >
                Agenda tu hora
                <br />
                <em style={{ color: C.goldSoft }}>en el salón</em>
              </h2>
              <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,238,225,0.78)' }}>
                Escríbenos por WhatsApp con el servicio que buscas y el día
                que te acomoda, y te respondemos para dejar la hora
                confirmada.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-sm md:text-base px-8 py-4 tap-44`}
                style={{ backgroundColor: C.gold, color: C.night }}
              >
                <WaArrow />
                Agendar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: sitio de ejemplo de Sitiazo ── */}
      <section className="border-y" style={{ backgroundColor: C.gold, borderColor: 'rgba(21,18,14,0.25)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold" style={{ color: C.night }}>
            Sitio de ejemplo de Sitiazo · así se vería tu negocio con página propia
          </p>
          <a
            href="https://sitiazo.cl"
            target="_blank"
            rel="noopener noreferrer"
            className={`${LINK} text-[11px] md:text-xs tap-44`}
            style={{ color: C.night, textDecorationColor: 'rgba(21,18,14,0.4)' }}
          >
            sitiazo.cl →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1 flex items-center gap-3`}>
              <Image src={`${IMG}/logo.webp`} alt="" width={28} height={28} className="rounded-full" aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(244,238,225,0.62)' }}>
              {BIZ.address} · {BIZ.sector}, {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,238,225,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${FOCUS} tap-44`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,238,225,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(244,238,225,0.7)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Las
            fotos, los datos de contacto, las reseñas y los horarios son
            reales y públicos del negocio; los precios son de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
