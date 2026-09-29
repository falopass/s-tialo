import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_FACIAL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-300.woff2', weight: '300', style: 'normal' },
    { path: '../../fonts/lato/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/lato/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF5F0',
  soft: '#F6E8E2',
  rose: '#E39DB6',
  roseSoft: '#F5DFE6',
  wine: '#7C2D4E',
  wineDeep: '#3B1F2C',
  ink: '#33222B',
  muted: '#6E5A62',
  line: 'rgba(51,34,43,0.18)',
  lineLight: 'rgba(251,245,240,0.28)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4'
const BTN = `${FOCUS} inline-flex items-center justify-center min-h-11 px-5 py-2 text-sm font-bold tracking-wide transition-colors duration-300`
const BTN_ROSE = `${BTN} bg-[#E39DB6] text-[#3B1F2C] hover:bg-[#FBF5F0]`
const BTN_WINE = `${BTN} bg-[#7C2D4E] text-[#FBF5F0] hover:bg-[#3B1F2C]`
const LINK = `${FOCUS} underline underline-offset-4 decoration-2 decoration-[#E39DB6] hover:decoration-[#7C2D4E] transition-colors`
const KICKER = 'text-[11px] uppercase tracking-[0.24em] font-bold'
const H2 = `${display.className} font-medium leading-[1.06] tracking-[-0.02em] text-[clamp(2.6rem,7vw,6.5rem)]`
const WRAP = 'max-w-6xl mx-auto px-5 md:px-8'

export const metadata: Metadata = demoMetadata({
  slug: 'issa-bella-spa-centro-de-estetica',
  title: 'Issa-bella SpA, centro de estética facial en Curicó',
  description: 'Centro de estética integral en Sarajevo 1576, Curicó: Hydrafacial, masajes, presoterapia y depilación láser. Agenda por WhatsApp.',
  image: '/demos/issa-bella-spa-centro-de-estetica/hero.webp',
})

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'El centro', href: '#el-centro' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#agenda' },
]

const COVERLINES = [
  'Hydrafacial y limpieza facial',
  'Masajes y auriculoterapia',
  'Agenda directa por WhatsApp',
]

// Fotos y servicios reales: publicaciones del centro en Maps e Instagram.
const TRATAMIENTOS = [
  {
    n: 'Nº 1',
    src: `${IMG}/detalle1.webp`,
    alt: 'Sesión de auriculoterapia en Issa-bella Spa: cristales y semillas sobre el oído',
    name: 'Auriculoterapia',
    desc: 'Semillas y cristales sobre puntos del pabellón auricular, como apoyo para la relajación y el bienestar general.',
    box: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
    sizes: '(min-width: 1024px) 640px, 100vw',
  },
  {
    n: 'Nº 2',
    src: `${IMG}/detalle3.webp`,
    alt: 'Afiche de Hydrafacial publicado por Issa-bella Spa: microdermoabrasión y ultrasonido facial',
    name: 'Hydrafacial',
    desc: 'Microdermoabrasión y ultrasonido en una sesión: exfolia, aspira los puntos negros e introduce nutrientes a la piel.',
    box: 'lg:col-span-5 lg:col-start-3 lg:-mt-6',
    aspect: 'aspect-[3/4]',
    sizes: '(min-width: 1024px) 420px, 100vw',
  },
  {
    n: 'Nº 3',
    src: `${IMG}/detalle2.webp`,
    alt: 'Masaje de espalda aplicado en la cabina de Issa-bella Spa',
    name: 'Masajes terapéuticos',
    desc: 'Descontracturante, relajante, deportivo, champi y piedras calientes: masaje de espalda, cuello y hombros para soltar la tensión.',
    box: 'lg:col-span-4 lg:col-start-9 lg:-mt-24',
    aspect: 'aspect-[4/5]',
    sizes: '(min-width: 1024px) 360px, 100vw',
  },
]

// Reseñas reales citadas desde la ficha pública de Google Maps.
const QUOTES = [
  {
    text: 'Maravillosa atención, cien por ciento recomendable: los tratamientos son buenísimos y es atendido por su propia dueña.',
    author: 'Karina Muñoz',
  },
  {
    text: 'Excelente profesional, muy buena atención, carismática, empática. La más seca en todos los servicios que realiza.',
    author: 'Alejandra Poveda',
  },
  {
    text: 'Excelente profesional, atenta y con un trato muy cálido. Una experiencia muy grata, recomendada al cien por ciento.',
    author: 'Natalie',
  },
]

const QUOTE_BOX = [
  'md:col-span-5',
  'md:col-span-4 md:mt-12',
  'md:col-span-3 md:mt-24',
]

// Precios reales: promociones publicadas por el centro en Instagram.
const PRECIOS = [
  { name: 'Drenaje & Relax · presoterapia + LED (40 min)', price: '$20.000' },
  { name: 'Pack Girasol · masaje + drenaje + piernas cansadas', price: '$25.000' },
  { name: 'Depilación pack Rostro perfecto', price: '$15.000' },
  { name: 'Depilación pack Piernas suaves', price: '$17.000' },
  { name: 'Depilación pack Brazos & piernas', price: '$18.000' },
  { name: 'Depilación pack Espalda perfecta', price: '$12.000' },
  { name: 'Spa kids · mini tratamientos', price: '$25.000' },
]

// Horario real de la ficha de Google Maps.
const HORAS = [
  { days: 'Lunes a viernes', time: '9:00 a 21:30' },
  { days: 'Sábado', time: '10:00 a 19:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function Folio({
  n,
  kicker,
  light = false,
}: {
  n: string
  kicker: string
  light?: boolean
}) {
  return (
    <Reveal className="flex items-center gap-4 md:gap-6">
      <span
        className={`${display.className} italic shrink-0 leading-none text-5xl md:text-6xl`}
        style={{ color: light ? C.rose : C.wine }}
        aria-hidden="true"
      >
        {n}
      </span>
      <p
        className={KICKER}
        style={{ color: light ? 'rgba(251,245,240,0.75)' : C.muted }}
      >
        <span className="sr-only">Sección {n}: </span>
        {kicker}
      </p>
      <span
        className="flex-1 border-t"
        style={{ borderColor: light ? C.lineLight : C.line }}
        aria-hidden="true"
      />
    </Reveal>
  )
}

export default function IssaBellaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <div style={{ backgroundColor: C.wineDeep }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(251,245,240,0.95)',
          ink: C.wine,
          line: C.line,
          btnBg: C.wine,
          btnInk: C.paper,
        }}
      />
      </div>

      {/* ── Portada: foto a sangre con nameplate de revista ── */}
      <header
        id="inicio"
        className="relative min-h-svh flex flex-col"
        style={{ backgroundColor: C.wineDeep }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Masaje con piedras calientes en la cabina de Issa-bella Spa, Curicó"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(59,31,44,0.8) 0%, rgba(59,31,44,0.64) 34%, rgba(59,31,44,0.72) 58%, rgba(59,31,44,0.92) 100%)',
          }}
          aria-hidden="true"
        />

        {/* masthead */}
        <div className={`relative ${WRAP} pt-20 md:pt-24`}>
          <Reveal>
            <div
              className={`${KICKER} flex flex-wrap justify-between gap-x-6 gap-y-1 border-y py-2.5`}
              style={{ color: 'rgba(251,245,240,0.92)', borderColor: 'rgba(251,245,240,0.35)' }}
            >
              <span>Edición especial · {BIZ.city}</span>
              <span>{BIZ.rubro} · Nº 01</span>
            </div>
            <p
              className={`${display.className} italic text-center leading-[0.95] mt-6 md:mt-8 text-[clamp(3.4rem,12vw,10.5rem)]`}
              style={{ color: C.paper, textShadow: '0 4px 40px rgba(59,31,44,0.45)' }}
            >
              Issa·bella
            </p>
            <p
              className={`${KICKER} text-center mt-2 md:mt-3`}
              style={{ color: C.rose }}
            >
              SpA · centro de estética
            </p>
          </Reveal>
        </div>

        <div className="flex-1 min-h-10" />

        {/* titular + coverlines */}
        <div className={`relative ${WRAP} pb-9 md:pb-12 grid gap-8 lg:grid-cols-12 lg:gap-x-10 items-end`}>
          <Reveal className="lg:col-span-7">
            <h1
              className={`${display.className} font-medium leading-[1.0] tracking-[-0.02em] text-[clamp(2.5rem,6vw,5.25rem)] mb-5`}
              style={{ color: C.paper }}
            >
              Tu piel, tratada
              <br />
              <em className="font-normal" style={{ color: C.rose }}>
                como se debe.
              </em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(251,245,240,0.94)' }}>
              Centro de estética facial en Sarajevo, {BIZ.city}. Atención
              con hora, en una sala luminosa y sin apuro.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_ROSE + ' tap-44'}>
                Agendar por WhatsApp
              </a>
              <a
                href="#tratamientos"
                className={`${BTN} border hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(251,245,240,0.55)', color: C.paper }}
              >
                Ver tratamientos
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
            <ul
              className="border-l pl-5 space-y-2.5"
              style={{ borderColor: C.rose }}
            >
              {COVERLINES.map((c) => (
                <li
                  key={c}
                  className="text-sm md:text-base font-bold tracking-wide"
                  style={{ color: C.paper }}
                >
                  <span style={{ color: C.rose }} aria-hidden="true">
                    +{' '}
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} text-xs font-bold px-3.5 py-2 border hover:bg-white/10 transition-colors tap-44`}
                style={{ borderColor: 'rgba(251,245,240,0.4)', color: C.paper }}
              >
                {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} text-xs font-bold px-3.5 py-2 border hover:bg-white/10 transition-colors tap-44`}
                style={{ borderColor: 'rgba(251,245,240,0.4)', color: C.paper }}
              >
                {BIZ.instagramHandle} · {BIZ.followers} seguidores
              </a>
            </div>
          </Reveal>
        </div>

        {/* franja de datos al pie de portada */}
        <div
          className="relative border-t"
          style={{ borderColor: C.lineLight, backgroundColor: 'rgba(59,31,44,0.85)', backdropFilter: 'blur(6px)' }}
        >
          <div
            className={`${WRAP} pr-20 md:pr-24 py-3.5 flex flex-wrap gap-x-8 gap-y-1 text-[11px] uppercase tracking-[0.18em]`}
            style={{ color: 'rgba(251,245,240,0.9)' }}
          >
            <span>{BIZ.address}, {BIZ.city}</span>
            <span className="hidden md:inline">Atención con hora</span>
            <span className="hidden sm:inline">{BIZ.phoneDisplay}</span>
            <span className="ml-auto" style={{ color: C.rose }}>
              sitio de ejemplo
            </span>
          </div>
        </div>
      </header>

      {/* ── 01 · Tratamientos ── */}
      <section id="tratamientos" className={`scroll-mt-20 ${WRAP} pt-20 md:pt-28`}>
        <Folio n="01" kicker="Tratamientos de cabina" />
        <div className="mt-8 md:mt-12 grid gap-6 lg:grid-cols-12 lg:gap-x-10 items-end">
          <h2 className={`${H2} lg:col-span-8`} style={{ color: C.wine }}>
            Lo que tu piel
            <br />
            <em className="font-normal">estaba pidiendo</em>
          </h2>
          <p className="lg:col-span-4 text-base leading-relaxed max-w-[36ch]" style={{ color: C.muted }}>
            Tratamientos, fotos y afiches reales del centro, tomados de
            su ficha de Maps y de lo que publica en Instagram.
          </p>
        </div>

        <div className="mt-14 md:mt-20 grid gap-y-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 items-start">
          {TRATAMIENTOS.slice(0, 1).map((t) => (
            <Reveal key={t.n} className={t.box}>
              <article className="group">
                <div className={`relative ${t.aspect} overflow-hidden`}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes={t.sizes}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className={`${KICKER} mt-5`} style={{ color: C.muted }}>
                  {t.n}
                </p>
                <h3 className={`${display.className} text-3xl md:text-4xl leading-tight mt-2 mb-3`} style={{ color: C.wine }}>
                  {t.name}
                </h3>
                <p className="text-base leading-relaxed max-w-[52ch]" style={{ color: C.muted }}>
                  {t.desc}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:mt-16" delay={120}>
            <aside className="p-7 md:p-8 border" style={{ backgroundColor: C.roseSoft, borderColor: C.wine }}>
              <p className={`${KICKER} mb-5`} style={{ color: C.wine }}>
                También en cabina
              </p>
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={`${IMG}/servicios.webp`}
                  alt="Afiche publicado por Issa-bella Spa con su carta de servicios: masajes, limpiezas faciales, presoterapia, depilación láser y más"
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
              <a
                href={WA_LINK_FACIAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} font-bold text-base tap-44`}
                style={{ color: C.wine }}
              >
                Consulta por WhatsApp →
              </a>
              <p className="mt-5 text-xs leading-relaxed" style={{ color: C.muted }}>
                Afiche real que el centro publica en sus redes.
              </p>
            </aside>
          </Reveal>

          {TRATAMIENTOS.slice(1).map((t, i) => (
            <Reveal key={t.n} className={t.box} delay={100 + i * 80}>
              <article className="group">
                <div className={`relative ${t.aspect} overflow-hidden`}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes={t.sizes}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className={`${KICKER} mt-5`} style={{ color: C.muted }}>
                  {t.n}
                </p>
                <h3 className={`${display.className} text-2xl md:text-3xl leading-tight mt-2 mb-3`} style={{ color: C.wine }}>
                  {t.name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {t.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Doble página: foto que rompe la grilla ── */}
      <figure className="relative mt-20 md:mt-28">
        <div className="relative w-full h-[68vw] max-h-[560px] min-h-[320px]" style={{ backgroundColor: C.wineDeep }}>
          <Image
            src={`${IMG}/fachada.webp`}
            alt="Casa de Sarajevo 1576, Curicó, donde atiende Issa-bella Spa"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(59,31,44,0.82) 0%, rgba(59,31,44,0.66) 55%, rgba(59,31,44,0.55) 100%)',
            }}
            aria-hidden="true"
          />
          <div className={`absolute inset-0 ${WRAP} flex items-center`}>
            <Reveal>
              <blockquote
                className={`${display.className} italic leading-[1.15] text-[clamp(1.7rem,4.2vw,3.4rem)] max-w-[16ch]`}
                style={{ color: C.paper, textShadow: '0 2px 30px rgba(59,31,44,0.6)' }}
              >
                “Una casa de barrio,
                <br />
                una sala impecable.”
              </blockquote>
            </Reveal>
          </div>
        </div>
        <figcaption
          className={`${WRAP} py-3 text-[11px] uppercase tracking-[0.18em] flex justify-between gap-4`}
          style={{ color: C.muted }}
        >
          <span>La casa del centro en Sarajevo 1576 · foto de Google Maps</span>
          <span aria-hidden="true">↳ pág. doble</span>
        </figcaption>
      </figure>

      {/* ── 02 · El centro ── */}
      <section id="el-centro" className={`scroll-mt-20 ${WRAP} pt-20 md:pt-28`}>
        <Folio n="02" kicker="El centro" />
        <h2 className={`${H2} mt-8 md:mt-12 lg:w-[90%]`} style={{ color: C.wine }}>
          En Sarajevo, con hora
          <br />
          <em className="font-normal">y sin apuro</em>
        </h2>

        <div className="mt-10 md:mt-14 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-3 lg:order-2">
            <dl className="border-t-2 pt-5 space-y-5" style={{ borderColor: C.wine }}>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.wine }}>Dirección</dt>
                <dd className="text-base">{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.wine }}>Google</dt>
                <dd className="text-base">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={LINK + ' tap-44'}>
                    {BIZ.ratingLabel} · {BIZ.reviews} reseñas
                  </a>
                </dd>
              </div>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.wine }}>Instagram</dt>
                <dd className="text-base">
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={LINK + ' tap-44'}>
                    {BIZ.instagramHandle} · {BIZ.followers}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.wine }}>WhatsApp</dt>
                <dd className="text-base">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={LINK + ' tap-44'}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-5 lg:order-1">
            <p className="text-lg md:text-xl leading-relaxed">
              <span
                className={`${display.className} float-left text-[4.2rem] md:text-[5rem] leading-[0.8] mr-3 mt-1`}
                style={{ color: C.wine }}
                aria-hidden="true"
              >
                E
              </span>
              <span className="sr-only">E</span>n Sarajevo 1576, en pleno
              Curicó, {BIZ.name} atiende con hora: llegas, te escuchan y
              sales sin apuro. La sala es luminosa, ordenada, y se nota
              el cuidado en cada detalle.
            </p>
            <p className="mt-8 max-w-[52ch] text-base leading-relaxed" style={{ color: C.muted }}>
              La atención es directa: la misma persona que te recibe es
              quien trabaja tu piel y hace el seguimiento por WhatsApp.
              Las clientas lo dicen en Google: {BIZ.reviews} reseñas y
              una comunidad activa en Instagram.
            </p>
          </Reveal>
        </div>

        {/* marginalia: reseñas */}
        <div className="mt-14 md:mt-20 grid gap-8 md:grid-cols-12 md:gap-x-10 md:gap-y-0 items-start">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 110} className={QUOTE_BOX[i]}>
              <figure className="border-t pt-6" style={{ borderColor: C.ink }}>
                <Stars value={5} color={C.wine} className="w-3.5 h-3.5 mb-4" />
                <blockquote
                  className={`${display.className} italic leading-snug mb-4 ${i === 0 ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}
                  style={{ color: C.ink }}
                >
                  {q.text}
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.wine }}>
                  {q.author} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm" style={{ color: C.muted }}>
          Citas reales de{' '}
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={LINK + ' tap-44'} style={{ color: C.wine }}>
            la ficha de Google
          </a>
          : {BIZ.ratingLabel} de 5 en {BIZ.reviews} reseñas.
        </p>
      </section>

      {/* ── 03 · Precios ── */}
      <section id="precios" className="scroll-mt-20 mt-20 md:mt-28" style={{ backgroundColor: C.soft }}>
        <div className={`${WRAP} py-16 md:py-24`}>
          <Folio n="03" kicker="Precios publicados" />
          <div className="mt-8 md:mt-12 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-4">
              <h2 className={`${display.className} font-medium leading-[1.06] tracking-[-0.02em] text-[clamp(2.3rem,5vw,4.5rem)] mb-5`} style={{ color: C.wine }}>
                El tarifario,
                <br />
                <em className="font-normal">al punto</em>
              </h2>
              <p className="text-base leading-relaxed max-w-[40ch] mb-8" style={{ color: C.muted }}>
                Valores de las promociones que el centro publica en
                Instagram. Confirma precio vigente y disponibilidad por
                WhatsApp antes de venir.
              </p>
              <a href={WA_LINK_FACIAL} target="_blank" rel="noopener noreferrer" className={BTN_WINE + ' tap-44'}>
                Consultar por WhatsApp
              </a>
            </div>
            <Reveal className="lg:col-span-8" delay={100}>
              <ul className="md:grid md:grid-cols-2 md:gap-x-12">
                {PRECIOS.map((p) => (
                  <li key={p.name} className="flex items-baseline gap-4 py-4">
                    <span className="text-base">{p.name}</span>
                    <span
                      className="flex-1 border-b border-dotted -translate-y-1"
                      style={{ borderColor: 'rgba(124,45,78,0.45)' }}
                      aria-hidden="true"
                    />
                    <span className={`${display.className} text-lg md:text-xl whitespace-nowrap`} style={{ color: C.wine }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 04 · Agenda y ubicación ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.wine, color: C.paper }}>
        <div className={`${WRAP} py-16 md:py-24`}>
          <Folio n="04" kicker="Agenda tu hora" light />
          <div className="mt-10 md:mt-14 grid gap-12 lg:grid-cols-12 lg:gap-x-10 items-start">
            <Reveal className="lg:col-span-5">
              <figure className="h-full">
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[320px] lg:h-full lg:min-h-[480px] block border"
                  style={{ borderColor: C.lineLight }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <figcaption className="pt-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(251,245,240,0.8)' }}>
                  {BIZ.address}, {BIZ.city}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <h2 className={`${display.className} font-medium leading-[1.06] tracking-[-0.02em] text-[clamp(2.3rem,5vw,4.5rem)] mb-6`} style={{ color: C.paper }}>
                {BIZ.address},
                <br />
                <em className="font-normal" style={{ color: C.rose }}>{BIZ.city}</em>
              </h2>
              <address className="not-italic text-base md:text-lg leading-relaxed mb-7" style={{ color: 'rgba(251,245,240,0.85)' }}>
                {BIZ.name}
                <br />
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
              <ul className="border-t mb-2" style={{ borderColor: C.lineLight }}>
                {HORAS.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-baseline justify-between gap-6 py-3 border-b text-base"
                    style={{ borderColor: C.lineLight, color: 'rgba(251,245,240,0.85)' }}
                  >
                    <span>{h.days}</span>
                    <span style={{ color: C.paper }}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm mb-8" style={{ color: 'rgba(251,245,240,0.82)' }}>
                Horario según la ficha del centro en Google Maps.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-9">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_ROSE + ' tap-44'}>
                  Agendar por WhatsApp
                </a>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${FOCUS} text-base underline underline-offset-4 decoration-2 decoration-[#E39DB6]/60 hover:decoration-[#E39DB6] tap-44`}>
                  {BIZ.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section style={{ backgroundColor: C.rose }}>
        <div className={`${WRAP} py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5`}>
          <div>
            <p className={`${display.className} italic text-2xl md:text-3xl`} style={{ color: C.wineDeep }}>
              Sitio de ejemplo de Sitiazo
            </p>
            <p className="mt-1 text-base" style={{ color: C.ink }}>
              Así se vería {BIZ.name} en internet. ¿Lo dejamos listo?
            </p>
          </div>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN_WINE} shrink-0 self-start md:self-auto tap-44`}
          >
            Hablar con {SITE.name} →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.wineDeep, color: C.paper }}>
        <div className={`${WRAP} pt-8 pb-20`}>
          <p className={`${display.className} italic text-2xl md:text-3xl mb-2`}>
            Issa·bella
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,245,240,0.8)' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-2 tap-44`}>
              {BIZ.phoneDisplay}
            </a>
          </address>
          <p className="mt-3 text-xs" style={{ color: 'rgba(251,245,240,0.8)' }}>
            Sitio de ejemplo de Sitiazo: datos, fotos, logo, servicios, reseñas y precios reales (Google Maps e Instagram).
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
