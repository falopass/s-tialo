import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, waServicio, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' },
  ],
})

const C = {
  forest: '#1E3D2F',
  forestDeep: '#152C22',
  cream: '#F6F1E7',
  creamSoft: '#EDE5D5',
  brass: '#C8A24B',
  brassDeep: '#7E5F1B',
  brassSoft: '#E0CD9B',
  coal: '#23211C',
  ink: '#2B2A24',
  muted: '#5E594C',
  line: 'rgba(43,42,36,0.16)',
  lineLight: 'rgba(246,241,231,0.22)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24B]'
const BTN = `inline-flex items-center gap-2.5 font-bold rounded-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${FOCUS}`
const LINK = `font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${FOCUS}`
const HALF = '(min-width: 768px) 50vw, 100vw'

export const metadata: Metadata = {
  title: 'Salón de Belleza Gabriela Saavedra — Centro de estética en Talca',
  description:
    'Centro de estética en Calle 32 Ote. 1327, Talca: faciales, manicure y pedicure, cabello y depilación, con hora agendada por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El salón', href: '#salon' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    tag: 'Rostro',
    src: `${IMG}/detalle-1.webp`,
    alt: 'Carro auxiliar de la sala de tratamientos con cosméticos, brochas, toallas y espejo de mano',
    name: 'Faciales y cuidado de la piel',
    desc: 'Limpieza, hidratación y masaje facial con cosmética profesional. Una hora de trabajo tranquilo, sin apuro, para que la piel salga descansada.',
    items: ['Limpieza facial profunda', 'Hidratación y nutrición', 'Masaje facial y relajación'],
  },
  {
    n: '02',
    tag: 'Manos y pies',
    src: `${IMG}/detalle-3.webp`,
    alt: 'Mesa de manicure con herramientas, esmaltes, lámpara UV y toalla enrollada',
    name: 'Manicure y pedicure',
    desc: 'Esmaltado tradicional y permanente, con preparación de cutícula y terminación prolija. Mesas individuales y una atención que se toma su tiempo.',
    items: ['Manicure tradicional y permanente', 'Pedicure con spa de pies', 'Retiro y reparación de esmaltado'],
  },
  {
    n: '03',
    tag: 'Cabello',
    src: `${IMG}/detalle-2.webp`,
    alt: 'Recepción de madera del salón con ramas de eucalipto, pinches, toallas y la camilla al fondo',
    name: 'Cabello y peinados',
    desc: 'Corte, lavado y peinado para el día a día o para una ocasión especial. Revisamos juntas tu tipo de cabello y lo que quieres lograr.',
    items: ['Corte y peinado', 'Tratamientos de hidratación', 'Peinados para ocasiones'],
  },
]

const TAMBIEN = [
  { n: '04', name: 'Depilación con cera', desc: 'Piernas, axilas, bozo y otras zonas, con cera tibia.' },
  { n: '05', name: 'Cejas y pestañas', desc: 'Perfilado de cejas y extensiones o lifting de pestañas.' },
  { n: '06', name: 'Maquillaje', desc: 'Maquillaje social para matrimonios, grados y eventos.' },
]

const PRECIOS = [
  { name: 'Limpieza facial', desc: 'Rostro, cuello y masaje final', price: '$25.000' },
  { name: 'Manicure tradicional', desc: 'Con esmaltado a elección', price: '$12.000' },
  { name: 'Manicure permanente', desc: 'Esmaltado en gel, incluye retiro', price: '$18.000' },
  { name: 'Pedicure', desc: 'Con spa de pies', price: '$20.000' },
  { name: 'Corte y peinado', desc: 'Lavado incluido', price: '$15.000' },
  { name: 'Depilación con cera', desc: 'Piernas completas', price: '$16.000' },
]

const TESTIMONIOS = [
  {
    text: 'Llegué con la hora agendada y me atendieron al tiro. Salí con la piel limpia y muy relajada.',
    author: 'Clienta de Talca',
  },
  {
    text: 'El esmaltado me duró impecable varias semanas. Se nota el cuidado en cada detalle.',
    author: 'Clienta del centro',
  },
  {
    text: 'Un lugar tranquilo y bien atendido. Se agradece la paciencia y la conversación.',
    author: 'Clienta de siempre',
  },
]

const PASOS = [
  { n: '1', name: 'Escribe por WhatsApp', desc: 'Cuéntanos qué servicio buscas y qué días te acomodan.' },
  { n: '2', name: 'Acordamos día y hora', desc: 'Te confirmamos la hora y cuánto dura tu atención.' },
  { n: '3', name: 'Te esperamos', desc: 'Llega unos minutos antes y te atendemos sin esperas.' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 a 19:30' },
  { days: 'Sábado', time: '10:00 a 15:00' },
  { days: 'Domingo y festivos', time: 'Cerrado' },
]

function HandMirror({
  className = 'w-4 h-4',
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8.6" r="5.9" />
      <circle cx="12" cy="8.6" r="3.2" />
      <path d="M12 14.5 V20.4" />
      <path d="M10.5 20.8 h3" />
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
      style={{ color: light ? C.brass : C.brassDeep }}
    >
      <HandMirror className="w-[18px] h-[18px]" />
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
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,231,0.95)',
          ink: C.coal,
          line: C.line,
          btnBg: C.forest,
          btnInk: C.cream,
        }}
      />

      {/* ── Hero partido: foto | texto ── */}
      <section
        id="inicio"
        className="relative grid md:grid-cols-2"
        style={{ backgroundColor: C.forest }}
      >
        <div className="relative min-h-[58svh] md:min-h-svh">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Sala de tratamientos del salón: camilla con toallas, luz de tarde y vista a la ciudad de Talca"
            fill
            priority
            sizes={HALF}
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(21,44,34,0.42) 0%, rgba(21,44,34,0.06) 42%, rgba(21,44,34,0.3) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
            <Reveal>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-xs md:text-sm px-4 py-2.5 shadow-lg`}
                style={{ backgroundColor: 'rgba(246,241,231,0.95)', color: C.forestDeep }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[15px] h-[15px]"
                  fill={C.brass}
                  stroke={C.brass}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                </svg>
                {BIZ.reviews} reseñas en Google
              </a>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 py-16 md:pt-32 md:pb-24">
          <Reveal>
            <Eyebrow light>
              {BIZ.rubro} · {BIZ.city} · {BIZ.region}
            </Eyebrow>
            <h1
              className={`${display.className} font-normal leading-[1.04] tracking-[-0.01em] text-[clamp(2.6rem,7.5vw,4.6rem)] mb-6`}
              style={{ color: C.cream }}
            >
              Estética de salón,
              <br />
              <em style={{ color: C.brassSoft }}>con la calma de antes</em>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-md mb-9"
              style={{ color: 'rgba(246,241,231,0.82)' }}
            >
              Faciales, uñas, cabello y depilación en {BIZ.address}, {BIZ.city}.
              Pides tu hora por WhatsApp, llegas y te atienden a ti, sin
              salas de espera llenas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.brass, color: C.forestDeep }}
              >
                <WaArrow />
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${BTN} text-sm md:text-base px-7 py-3.5 border hover:bg-white/10`}
                style={{ borderColor: 'rgba(246,241,231,0.5)', color: C.cream }}
              >
                Ver servicios
              </a>
            </div>
            <dl
              className="mt-12 pt-6 border-t grid grid-cols-2 gap-x-6 gap-y-4 text-[11px] uppercase tracking-[0.18em]"
              style={{ borderColor: C.lineLight, color: 'rgba(246,241,231,0.68)' }}
            >
              <div>
                <dt className="mb-1" style={{ color: C.brass }}>Dirección</dt>
                <dd>{BIZ.address} · {BIZ.city}</dd>
              </div>
              <div>
                <dt className="mb-1" style={{ color: C.brass }}>Teléfono</dt>
                <dd>
                  <a href={`tel:${BIZ.phoneTel}`} className={`hover:text-white transition-colors ${FOCUS}`}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="mb-1" style={{ color: C.brass }}>Agenda</dt>
                <dd>Con hora previa, de lunes a sábado</dd>
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
                style={{ color: C.forest }}
              >
                Lo que hacemos
                <br />
                <em style={{ color: C.brassDeep }}>en el salón</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Esta es una muestra de la carta: al publicar van los
                servicios, duraciones y valores reales del salón.
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
              style={{ backgroundColor: dark ? C.forest : C.cream }}
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
                      style={{ color: dark ? C.brass : C.brassDeep }}
                    >
                      {s.n}
                    </span>
                    <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineLight : C.line }} />
                    <span
                      className="text-[11px] uppercase tracking-[0.24em] font-bold"
                      style={{ color: dark ? C.brass : C.brassDeep }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className={`${display.className} font-normal text-3xl md:text-5xl leading-[1.08] mb-5`}
                    style={{ color: dark ? C.cream : C.forest }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-7 max-w-md"
                    style={{ color: dark ? 'rgba(246,241,231,0.78)' : C.muted }}
                  >
                    {s.desc}
                  </p>
                  <ul className="space-y-3 mb-9">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm md:text-[15px]"
                        style={{ color: dark ? 'rgba(246,241,231,0.9)' : C.ink }}
                      >
                        <HandMirror className="w-4 h-4 shrink-0" color={C.brass} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waServicio(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BTN} self-start text-sm px-6 py-3 border ${dark ? 'hover:bg-white/10' : 'hover:bg-[#1E3D2F]/5'}`}
                    style={{
                      borderColor: dark ? 'rgba(246,241,231,0.45)' : 'rgba(30,61,47,0.4)',
                      color: dark ? C.cream : C.forest,
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

        {/* ── También en el salón ── */}
        <div style={{ backgroundColor: C.coal }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-8" style={{ color: C.brass }}>
                También en el salón
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-3 gap-8 md:gap-12">
              {TAMBIEN.map((t, i) => (
                <Reveal key={t.name} delay={i * 90}>
                  <li className="border-t pt-5" style={{ borderColor: C.lineLight }}>
                    <p className={`${display.className} text-2xl mb-1`} style={{ color: C.brass }}>
                      {t.n}
                    </p>
                    <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.cream }}>
                      {t.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.66)' }}>
                      {t.desc}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── El salón: historia, datos y opiniones ── */}
      <section id="salon" className="scroll-mt-20" style={{ backgroundColor: C.forest }}>
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
                <em style={{ color: C.brassSoft }}>en el centro de Talca</em>
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-6 max-w-md"
                style={{ color: 'rgba(246,241,231,0.8)' }}
              >
                El Salón de Belleza Gabriela Saavedra atiende en {BIZ.address},
                a pocas cuadras del centro de Talca. Atención directa, con
                hora agendada: llegas, te atienden y el tiempo se respeta.
              </p>
              <p className="text-sm leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(246,241,231,0.62)' }}>
                Texto de muestra: al publicar va la historia real del salón,
                sus servicios y sus fotos.
              </p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
                <div className="border-t pt-4" style={{ borderColor: C.lineLight }}>
                  <dt className={`${display.className} text-4xl md:text-5xl mb-1`} style={{ color: C.brass }}>
                    {BIZ.reviews}
                  </dt>
                  <dd className="text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,231,0.7)' }}>
                    reseñas en Google
                  </dd>
                </div>
                <div className="border-t pt-4" style={{ borderColor: C.lineLight }}>
                  <dt className={`${display.className} text-4xl md:text-5xl mb-1`} style={{ color: C.brass }}>
                    {BIZ.facebookFollowers}
                  </dt>
                  <dd className="text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,231,0.7)' }}>
                    seguidores en Facebook
                  </dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} text-sm`}
                  style={{ color: C.brassSoft, textDecorationColor: 'rgba(200,162,75,0.5)' }}
                >
                  Ver la ficha en Google →
                </a>
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} text-sm`}
                  style={{ color: C.brassSoft, textDecorationColor: 'rgba(200,162,75,0.5)' }}
                >
                  Facebook del salón →
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-svh">
            <Image
              src={`${IMG}/ambiente.webp`}
              alt="Fachada del salón en Calle 32 Ote., con vitrina, plantas y un árbol en la vereda"
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
                  Lo que valoran las clientas
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.66)' }}>
                  El salón suma {BIZ.reviews} reseñas en Google. Las frases
                  de abajo son de ejemplo: al publicar van las reseñas
                  reales.
                </p>
              </div>
            </Reveal>
            <ul className="grid md:grid-cols-3 gap-8 md:gap-10">
              {TESTIMONIOS.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <li className="border-t pt-6" style={{ borderColor: C.lineLight }}>
                    <blockquote
                      className={`${display.className} text-lg md:text-xl leading-relaxed mb-5`}
                      style={{ color: 'rgba(246,241,231,0.94)' }}
                    >
                      “{t.text}”
                    </blockquote>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.brass }}>
                      {t.author} · Reseña de ejemplo
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
                style={{ color: C.forest }}
              >
                Valores
                <br />
                <em style={{ color: C.brassDeep }}>de referencia</em>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Cifras de muestra para mostrar el formato de la lista: al
                publicar van los precios reales de cada servicio.
              </p>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: C.line }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: C.muted }}>
                  Los valores pueden variar según el largo del cabello, el
                  estado de las uñas o los productos que uses.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} text-sm px-6 py-3`}
                  style={{ backgroundColor: C.forest, color: C.cream }}
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
                      <p className={`${display.className} text-xl md:text-2xl`} style={{ color: C.forest }}>
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
                      <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.brassDeep }}>
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
            <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-8" style={{ color: C.brassDeep }}>
              Cómo agendar
            </p>
          </Reveal>
          <ol className="grid sm:grid-cols-3 gap-8 md:gap-12">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <li className="border-t pt-5" style={{ borderColor: C.line }}>
                  <p className={`${display.className} text-2xl mb-1`} style={{ color: C.brassDeep }}>
                    {p.n}
                  </p>
                  <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.forest }}>
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
              style={{ color: C.forest }}
            >
              {BIZ.address},
              <br />
              <em style={{ color: C.brassDeep }}>{BIZ.city}</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN} text-sm md:text-base px-7 py-4 mb-8 self-start`}
              style={{ backgroundColor: C.brass, color: C.forestDeep }}
            >
              <WaArrow />
              Escribir por WhatsApp
            </a>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke={C.brassDeep}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horario referencial: al publicar van los horarios reales del
              salón.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={LINK}
                style={{ color: C.forest, textDecorationColor: 'rgba(30,61,47,0.35)' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
                style={{ color: C.forest, textDecorationColor: 'rgba(30,61,47,0.35)' }}
              >
                Facebook del salón
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
                style={{ color: C.forest, textDecorationColor: 'rgba(30,61,47,0.35)' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[320px] md:min-h-[560px]">
          <iframe
            title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
            src={MAPS_EMBED}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.forestDeep }}>
        <Image src={`${IMG}/hero.webp`} alt="" fill sizes="100vw" className="object-cover opacity-[0.16]" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto border-y py-12 md:py-14 px-4" style={{ borderColor: C.lineLight }}>
              <h2
                className={`${display.className} font-normal text-[clamp(2rem,6vw,3.6rem)] leading-[1.06] mb-6`}
                style={{ color: C.cream }}
              >
                Agenda tu hora
                <br />
                <em style={{ color: C.brassSoft }}>en el salón</em>
              </h2>
              <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,241,231,0.78)' }}>
                Escríbenos por WhatsApp con el servicio que buscas y el día
                que te acomoda, y te respondemos para dejar la hora
                confirmada.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN} text-sm md:text-base px-8 py-4`}
                style={{ backgroundColor: C.brass, color: C.forestDeep }}
              >
                <WaArrow />
                Agendar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: sitio de ejemplo de Sitiazo ── */}
      <section className="border-y" style={{ backgroundColor: C.brass, borderColor: 'rgba(35,33,28,0.25)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold" style={{ color: C.forestDeep }}>
            Sitio de ejemplo de Sitiazo · así se vería tu negocio con página propia
          </p>
          <a
            href="https://sitiazo.cl"
            target="_blank"
            rel="noopener noreferrer"
            className={`${LINK} text-[11px] md:text-xs`}
            style={{ color: C.forestDeep, textDecorationColor: 'rgba(21,44,34,0.4)' }}
          >
            sitiazo.cl →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.forestDeep, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1 flex items-center gap-3`}>
              <HandMirror className="w-5 h-5" color={C.brass} />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(246,241,231,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,241,231,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${FOCUS}`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,231,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(246,241,231,0.7)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            servicios, precios, horarios y fotos son de muestra; el número
            de contacto y la dirección son datos públicos del negocio.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
