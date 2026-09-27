import type { Metadata } from 'next'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_FACIAL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
const body = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

const C = {
  paper: '#F7F9F9',
  soft: '#E9F1F0',
  mint: '#9FD8CB',
  mintSoft: '#DCEDE8',
  petrol: '#0E4C5C',
  petrolDeep: '#09333D',
  ink: '#232A2E',
  muted: '#55666D',
  line: 'rgba(35,42,46,0.18)',
  lineLight: 'rgba(247,249,249,0.28)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4'
const BTN = `${FOCUS} inline-flex items-center justify-center min-h-11 px-5 py-2 text-sm font-bold tracking-wide transition-colors duration-300`
const BTN_MINT = `${BTN} bg-[#9FD8CB] text-[#09333D] hover:bg-[#F7F9F9]`
const BTN_PETROL = `${BTN} bg-[#0E4C5C] text-[#F7F9F9] hover:bg-[#09333D]`
const LINK = `${FOCUS} underline underline-offset-4 decoration-2 decoration-[#9FD8CB] hover:decoration-[#0E4C5C] transition-colors`
const KICKER = 'text-[11px] uppercase tracking-[0.24em] font-bold'
const H2 = `${display.className} font-medium leading-[1.06] tracking-[-0.02em] text-[clamp(2.6rem,7vw,6.5rem)]`
const WRAP = 'max-w-6xl mx-auto px-5 md:px-8'

export const metadata: Metadata = {
  title: 'Issa-bella SpA, centro de estética facial en Curicó',
  description:
    'Centro de estética facial en Sarajevo 1576, Curicó. Limpieza facial, fototerapia LED y más, con atención directa por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'El centro', href: '#el-centro' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#agenda' },
]

const COVERLINES = [
  'Limpieza facial profunda',
  'Fototerapia con máscara LED',
  'Agenda directa por WhatsApp',
]

const TRATAMIENTOS = [
  {
    n: 'Nº 1',
    src: `${IMG}/detalle1.webp`,
    alt: 'Carro de trabajo con lámpara de lupa, bowl de mascarilla y brochas junto a la ventana',
    name: 'Limpieza facial profunda',
    desc: 'Higiene, exfoliación e hidratación según tu tipo de piel. Antes de partir se evalúa qué necesita tu cutis: nada se hace por inercia.',
    box: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
    sizes: '(min-width: 1024px) 640px, 100vw',
  },
  {
    n: 'Nº 2',
    src: `${IMG}/detalle3.webp`,
    alt: 'Máscara de fototerapia LED blanca sobre la camilla, con toallas y bowl de espátulas',
    name: 'Fototerapia con máscara LED',
    desc: 'Sesiones de luz LED orientadas a luminosidad y regeneración de la piel. Texto de muestra: al publicar va la descripción real del tratamiento.',
    box: 'lg:col-span-5 lg:col-start-3 lg:-mt-6',
    aspect: 'aspect-[3/4]',
    sizes: '(min-width: 1024px) 420px, 100vw',
  },
  {
    n: 'Nº 3',
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción del centro con mostrador de madera, toallas, eucalipto y repisas con plantas',
    name: 'Tu primera hora',
    desc: 'Llegas, conversamos y miramos tu piel con calma. De ahí sale un plan a tu medida y el valor claro antes de empezar.',
    box: 'lg:col-span-4 lg:col-start-9 lg:-mt-24',
    aspect: 'aspect-[4/5]',
    sizes: '(min-width: 1024px) 360px, 100vw',
  },
]

const TAMBIEN = [
  'Exfoliación y renovación',
  'Máscaras hidratantes',
  'Perfilado de cejas',
  'Depilación facial',
  'Masaje de relajación',
]

const QUOTES = [
  'Me atendieron con calma y me explicaron cada paso. Salí con la piel distinta.',
  'El lugar es luminoso e impecable. Se nota el orden en cada detalle.',
  'Agendé por WhatsApp y me respondieron al tiro. Atención de verdad personalizada.',
]

const QUOTE_BOX = [
  'md:col-span-5',
  'md:col-span-4 md:mt-12',
  'md:col-span-3 md:mt-24',
]

const PRECIOS = [
  { name: 'Limpieza facial profunda', price: 'desde $25.000' },
  { name: 'Sesión de fototerapia LED', price: 'desde $18.000' },
  { name: 'Máscara hidratante + masaje facial', price: 'desde $15.000' },
  { name: 'Perfilado de cejas', price: 'desde $8.000' },
  { name: 'Depilación facial', price: 'desde $6.000' },
  { name: 'Pack de 4 sesiones', price: 'a convenir' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 a 19:00' },
  { days: 'Sábado', time: '10:00 a 14:00' },
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
        style={{ color: light ? C.mint : C.petrol }}
        aria-hidden="true"
      >
        {n}
      </span>
      <p
        className={KICKER}
        style={{ color: light ? 'rgba(247,249,249,0.75)' : C.muted }}
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
      <div style={{ backgroundColor: C.petrolDeep }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(247,249,249,0.95)',
          ink: C.petrol,
          line: C.line,
          btnBg: C.petrol,
          btnInk: C.paper,
        }}
      />
      </div>

      {/* ── Portada: foto a sangre con nameplate de revista ── */}
      <header
        id="inicio"
        className="relative min-h-svh flex flex-col"
        style={{ backgroundColor: C.petrolDeep }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Sala de tratamiento del centro con camilla, vaporizador facial y ventanal con vista a los cerros"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,51,61,0.72) 0%, rgba(9,51,61,0.18) 34%, rgba(9,51,61,0.22) 58%, rgba(9,51,61,0.88) 100%)',
          }}
          aria-hidden="true"
        />

        {/* masthead */}
        <div className={`relative ${WRAP} pt-20 md:pt-24`}>
          <Reveal>
            <div
              className={`${KICKER} flex flex-wrap justify-between gap-x-6 gap-y-1 border-y py-2.5`}
              style={{ color: 'rgba(247,249,249,0.78)', borderColor: 'rgba(247,249,249,0.35)' }}
            >
              <span>Edición especial · {BIZ.city}</span>
              <span>{BIZ.rubro} · Nº 01</span>
            </div>
            <p
              className={`${display.className} italic text-center leading-[0.95] mt-6 md:mt-8 text-[clamp(3.4rem,12vw,10.5rem)]`}
              style={{ color: C.paper, textShadow: '0 4px 40px rgba(9,51,61,0.45)' }}
            >
              Issa·bella
            </p>
            <p
              className={`${KICKER} text-center mt-2 md:mt-3`}
              style={{ color: C.mint }}
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
              <em className="font-normal" style={{ color: C.mint }}>
                como se debe.
              </em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(247,249,249,0.85)' }}>
              Centro de estética facial en Sarajevo, {BIZ.city}. Atención
              con hora, en una sala luminosa y sin apuro.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_MINT}>
                Agendar por WhatsApp
              </a>
              <a
                href="#tratamientos"
                className={`${BTN} border hover:bg-white/10`}
                style={{ borderColor: 'rgba(247,249,249,0.55)', color: C.paper }}
              >
                Ver tratamientos
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
            <ul
              className="border-l pl-5 space-y-2.5"
              style={{ borderColor: C.mint }}
            >
              {COVERLINES.map((c) => (
                <li
                  key={c}
                  className="text-sm md:text-base font-bold tracking-wide"
                  style={{ color: C.paper }}
                >
                  <span style={{ color: C.mint }} aria-hidden="true">
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
                className={`${FOCUS} text-xs font-bold px-3.5 py-2 border hover:bg-white/10 transition-colors`}
                style={{ borderColor: 'rgba(247,249,249,0.4)', color: C.paper }}
              >
                {BIZ.reviews} reseñas en Google
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} text-xs font-bold px-3.5 py-2 border hover:bg-white/10 transition-colors`}
                style={{ borderColor: 'rgba(247,249,249,0.4)', color: C.paper }}
              >
                {BIZ.instagramHandle} · {BIZ.followers} seguidores
              </a>
            </div>
          </Reveal>
        </div>

        {/* franja de datos al pie de portada */}
        <div
          className="relative border-t"
          style={{ borderColor: C.lineLight, backgroundColor: 'rgba(9,51,61,0.55)', backdropFilter: 'blur(6px)' }}
        >
          <div
            className={`${WRAP} pr-20 md:pr-24 py-3.5 flex flex-wrap gap-x-8 gap-y-1 text-[11px] uppercase tracking-[0.18em]`}
            style={{ color: 'rgba(247,249,249,0.75)' }}
          >
            <span>{BIZ.address}, {BIZ.city}</span>
            <span className="hidden md:inline">Atención con hora</span>
            <span className="hidden sm:inline">{BIZ.phoneDisplay}</span>
            <span className="ml-auto" style={{ color: C.mint }}>
              sitio de ejemplo
            </span>
          </div>
        </div>
      </header>

      {/* ── 01 · Tratamientos ── */}
      <section id="tratamientos" className={`scroll-mt-20 ${WRAP} pt-20 md:pt-28`}>
        <Folio n="01" kicker="Tratamientos de cabina" />
        <div className="mt-8 md:mt-12 grid gap-6 lg:grid-cols-12 lg:gap-x-10 items-end">
          <h2 className={`${H2} lg:col-span-8`} style={{ color: C.petrol }}>
            Lo que tu piel
            <br />
            <em className="font-normal">estaba pidiendo</em>
          </h2>
          <p className="lg:col-span-4 text-base leading-relaxed max-w-[36ch]" style={{ color: C.muted }}>
            Carta de muestra de los tratamientos. Al publicar van los
            servicios, las descripciones y los valores reales del centro.
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
                    loading="eager"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className={`${KICKER} mt-5`} style={{ color: C.muted }}>
                  {t.n}
                </p>
                <h3 className={`${display.className} text-3xl md:text-4xl leading-tight mt-2 mb-3`} style={{ color: C.petrol }}>
                  {t.name}
                </h3>
                <p className="text-base leading-relaxed max-w-[52ch]" style={{ color: C.muted }}>
                  {t.desc}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:mt-16" delay={120}>
            <aside className="p-7 md:p-8 border" style={{ backgroundColor: C.mintSoft, borderColor: C.petrol }}>
              <p className={`${KICKER} mb-5`} style={{ color: C.petrol }}>
                También en cabina
              </p>
              <ul className="space-y-3 mb-7">
                {TAMBIEN.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between gap-4 pb-3 border-b border-dotted text-base"
                    style={{ borderColor: 'rgba(14,76,92,0.35)' }}
                  >
                    {item}
                    <span className={`${display.className} italic text-sm`} style={{ color: C.petrol }}>
                      consulta
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK_FACIAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} font-bold text-base`}
                style={{ color: C.petrol }}
              >
                Consulta por WhatsApp →
              </a>
              <p className="mt-5 text-xs leading-relaxed" style={{ color: C.muted }}>
                Lista de muestra: al publicar va la carta real.
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
                    loading="eager"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className={`${KICKER} mt-5`} style={{ color: C.muted }}>
                  {t.n}
                </p>
                <h3 className={`${display.className} text-2xl md:text-3xl leading-tight mt-2 mb-3`} style={{ color: C.petrol }}>
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
        <div className="relative w-full h-[68vw] max-h-[560px] min-h-[320px]" style={{ backgroundColor: C.petrolDeep }}>
          <Image
            src={`${IMG}/ambiente.webp`}
            alt="Fachada del centro a nivel de calle, con vitrina, puerta de madera y los cerros de Curicó al fondo"
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(9,51,61,0.78) 0%, rgba(9,51,61,0.45) 55%, rgba(9,51,61,0.35) 100%)',
            }}
            aria-hidden="true"
          />
          <div className={`absolute inset-0 ${WRAP} flex items-center`}>
            <Reveal>
              <blockquote
                className={`${display.className} italic leading-[1.15] text-[clamp(1.7rem,4.2vw,3.4rem)] max-w-[16ch]`}
                style={{ color: C.paper, textShadow: '0 2px 30px rgba(9,51,61,0.6)' }}
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
          <span>La entrada, por calle Sarajevo · foto de muestra</span>
          <span aria-hidden="true">↳ pág. doble</span>
        </figcaption>
      </figure>

      {/* ── 02 · El centro ── */}
      <section id="el-centro" className={`scroll-mt-20 ${WRAP} pt-20 md:pt-28`}>
        <Folio n="02" kicker="El centro" />
        <h2 className={`${H2} mt-8 md:mt-12 lg:w-[90%]`} style={{ color: C.petrol }}>
          En Sarajevo, con hora
          <br />
          <em className="font-normal">y sin apuro</em>
        </h2>

        <div className="mt-10 md:mt-14 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-3 lg:order-2">
            <dl className="border-t-2 pt-5 space-y-5" style={{ borderColor: C.petrol }}>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.petrol }}>Dirección</dt>
                <dd className="text-base">{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.petrol }}>Google</dt>
                <dd className="text-base">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={LINK}>
                    {BIZ.reviews} reseñas
                  </a>
                </dd>
              </div>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.petrol }}>Instagram</dt>
                <dd className="text-base">
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={LINK}>
                    {BIZ.instagramHandle} · {BIZ.followers}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.petrol }}>WhatsApp</dt>
                <dd className="text-base">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={LINK}>
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
                style={{ color: C.petrol }}
                aria-hidden="true"
              >
                E
              </span>
              <span className="sr-only">E</span>n Sarajevo 1576, en pleno
              Curicó, {BIZ.name} atiende con hora: llegas, te escuchan y
              sales sin apuro. La sala es luminosa, ordenada, y se nota
              el cuidado en cada detalle.
            </p>
            <div className="mt-8 md:columns-2 md:gap-10 text-base leading-relaxed" style={{ color: C.muted }}>
              <p>
                La atención es directa: la misma persona que te recibe es
                quien trabaja tu piel y hace el seguimiento después por
                WhatsApp. No hay recepcionistas ni esperas de más.
              </p>
              <p className="mt-4 md:mt-0">
                Las clientas lo valoran: el centro acumula {BIZ.reviews}{' '}
                reseñas en su ficha de Google y una comunidad activa en
                Instagram. Estos párrafos son de muestra; los datos de
                contacto y reseñas son reales.
              </p>
            </div>
          </Reveal>
        </div>

        {/* marginalia: reseñas */}
        <div className="mt-14 md:mt-20 grid gap-8 md:grid-cols-12 md:gap-x-10 md:gap-y-0 items-start">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 110} className={QUOTE_BOX[i]}>
              <figure className="border-t pt-6" style={{ borderColor: C.ink }}>
                <span
                  className={`${display.className} block text-5xl leading-[0.6] mb-4`}
                  style={{ color: C.mint }}
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote
                  className={`${display.className} italic leading-snug mb-4 ${i === 0 ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}
                  style={{ color: C.ink }}
                >
                  {q}
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.petrol }}>
                  Reseña de ejemplo
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm" style={{ color: C.muted }}>
          Las reseñas citadas son de muestra. Al publicar van los textos
          reales de{' '}
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={LINK} style={{ color: C.petrol }}>
            la ficha de Google
          </a>
          .
        </p>
      </section>

      {/* ── 03 · Precios ── */}
      <section id="precios" className="scroll-mt-20 mt-20 md:mt-28" style={{ backgroundColor: C.soft }}>
        <div className={`${WRAP} py-16 md:py-24`}>
          <Folio n="03" kicker="Precios de referencia" />
          <div className="mt-8 md:mt-12 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-4">
              <h2 className={`${display.className} font-medium leading-[1.06] tracking-[-0.02em] text-[clamp(2.3rem,5vw,4.5rem)] mb-5`} style={{ color: C.petrol }}>
                El tarifario,
                <br />
                <em className="font-normal">al punto</em>
              </h2>
              <p className="text-base leading-relaxed max-w-[40ch] mb-8" style={{ color: C.muted }}>
                Valores de muestra para esta demostración. Al publicar van
                los precios reales: confirma el tuyo por WhatsApp antes de
                venir.
              </p>
              <a href={WA_LINK_FACIAL} target="_blank" rel="noopener noreferrer" className={BTN_PETROL}>
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
                      style={{ borderColor: 'rgba(14,76,92,0.45)' }}
                      aria-hidden="true"
                    />
                    <span className={`${display.className} text-lg md:text-xl whitespace-nowrap`} style={{ color: C.petrol }}>
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
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.petrol, color: C.paper }}>
        <div className={`${WRAP} py-16 md:py-24`}>
          <Folio n="04" kicker="Agenda tu hora" light />
          <div className="mt-10 md:mt-14 grid gap-12 lg:grid-cols-12 lg:gap-x-10 items-start">
            <Reveal className="lg:col-span-5">
              <figure className="h-full">
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[320px] lg:h-full lg:min-h-[480px] block border"
                  style={{ borderColor: C.lineLight }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <figcaption className="pt-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(247,249,249,0.8)' }}>
                  {BIZ.address}, {BIZ.city}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <h2 className={`${display.className} font-medium leading-[1.06] tracking-[-0.02em] text-[clamp(2.3rem,5vw,4.5rem)] mb-6`} style={{ color: C.paper }}>
                {BIZ.address},
                <br />
                <em className="font-normal" style={{ color: C.mint }}>{BIZ.city}</em>
              </h2>
              <address className="not-italic text-base md:text-lg leading-relaxed mb-7" style={{ color: 'rgba(247,249,249,0.85)' }}>
                {BIZ.name}
                <br />
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
              <ul className="border-t mb-2" style={{ borderColor: C.lineLight }}>
                {HORAS.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-baseline justify-between gap-6 py-3 border-b text-base"
                    style={{ borderColor: C.lineLight, color: 'rgba(247,249,249,0.85)' }}
                  >
                    <span>{h.days}</span>
                    <span style={{ color: C.paper }}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm mb-8" style={{ color: 'rgba(247,249,249,0.82)' }}>
                Horario de muestra: al publicar va el horario real.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-9">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_MINT}>
                  Agendar por WhatsApp
                </a>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${FOCUS} text-base underline underline-offset-4 decoration-2 decoration-[#9FD8CB]/60 hover:decoration-[#9FD8CB]`}>
                  {BIZ.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section style={{ backgroundColor: C.mint }}>
        <div className={`${WRAP} py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5`}>
          <div>
            <p className={`${display.className} italic text-2xl md:text-3xl`} style={{ color: C.petrolDeep }}>
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
            className={`${BTN_PETROL} shrink-0 self-start md:self-auto`}
          >
            Hablar con {SITE.name} →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.petrolDeep, color: C.paper }}>
        <div className={`${WRAP} pt-8 pb-20`}>
          <p className={`${display.className} italic text-2xl md:text-3xl mb-2`}>
            Issa·bella
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,249,249,0.8)' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-2`}>
              {BIZ.phoneDisplay}
            </a>
          </address>
          <p className="mt-3 text-xs" style={{ color: 'rgba(247,249,249,0.8)' }}>
            Sitio de ejemplo de Sitiazo: servicios, precios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
