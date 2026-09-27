import type { Metadata } from 'next'
import Image from 'next/image'
import { Bitter, Rubik } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_PRESUPUESTO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Bitter({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})
const body = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  paper: '#FBFBF8',
  card: '#FFFFFF',
  slate: '#2F4858',
  slateDeep: '#22353F',
  muted: '#5C6E7B',
  line: 'rgba(47,72,88,0.16)',
  yellow: '#F2B705',
  yellowSoft: '#FDF0C8',
  soft: '#EDF2F5',
}

export const metadata: Metadata = {
  title: 'Millycar — Servicio técnico automotriz en Curicó',
  description:
    'Taller mecánico en Av. Manso de Velasco 965, Curicó. Diagnóstico explicado en simple, presupuesto antes de abrir el capó y avance por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const CAPITULOS = [
  {
    num: '01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Piezas del motor sobre la mesa de trabajo del taller',
    name: 'Diagnóstico y escáner',
    desc: 'Primero se lee lo que el auto dice: escaneo computarizado, prueba en ruta y revisión visual. Recién ahí se presupuesta.',
    datum: 'Te contamos qué encontramos antes de abrir nada',
  },
  {
    num: '02',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mecánico trabajando en el motor de un auto dentro del taller',
    name: 'Mantención preventiva',
    desc: 'Aceite, filtros, correas, fluidos y puntos de seguridad. La visita que evita la panne en la carretera.',
    datum: 'La más pedida antes de un viaje',
  },
  {
    num: '03',
    src: `${IMG}/detalle3.webp`,
    alt: 'Detalle de trabajo en el tren delantero de un auto elevado',
    name: 'Frenos y suspensión',
    desc: 'Pastillas, discos, amortiguadores y términos. Si el auto suena, vibra o se va de lado, acá se revisa.',
    datum: 'Revisión del tren delantero al momento',
  },
]

const TAMBIEN = [
  'Mecánica general y motor',
  'Electricidad, baterías y luces',
  'Escape y sistema de enfriamiento',
  'Afinamiento y pre-revisión técnica',
]

const SENALES = [
  {
    num: 'A',
    title: 'Se enciende un testigo en el tablero',
    desc: 'Amarillo es “revísalo pronto”, rojo es “detente”. Una lectura de escáner sale más barata que adivinar.',
  },
  {
    num: 'B',
    title: 'Suena o vibra al frenar',
    desc: 'Un chillido agudo suele ser la alarma de las pastillas. Si tiembla el pedal, pueden ser los discos.',
  },
  {
    num: 'C',
    title: 'Se acerca el kilometraje de la correa',
    desc: 'La correa de distribución se cambia por kilometraje, no cuando se rompe. Si se rompe, el motor lo paga.',
  },
]

const PRECIOS = [
  { name: 'Escaneo computarizado y diagnóstico', price: 'desde $15.000' },
  { name: 'Cambio de aceite + filtro', price: 'desde $30.000' },
  { name: 'Pastillas de freno delanteras (mano de obra)', price: 'desde $18.000' },
  { name: 'Mantención completa 10.000 km', price: 'desde $75.000' },
  { name: 'Alineación y balanceo', price: 'desde $28.000' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00–18:30' },
  { days: 'Sábado', time: '9:00–14:00' },
]

const OPINIONES = [
  {
    text: 'Me explicaron con la pieza en la mano qué se había gastado y por qué. Primera vez que salgo de un taller entendiendo la cuenta.',
    author: 'Cliente de Curicó',
  },
  {
    text: 'Dejé el auto en la mañana por un ruido al frenar, me mandaron foto del diagnóstico y presupuesto al almuerzo.',
    author: 'Cliente de Curicó',
  },
]

function Check({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5 L9.5 18 L20 6.5" />
    </svg>
  )
}

function Pin({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21.5s-7-5.8-7-11a7 7 0 0 1 14 0c0 5.2-7 11-7 11Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </svg>
  )
}

function Clock({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 v5 l3.5 2" />
    </svg>
  )
}

function Star({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} stroke={color} strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4 flex items-center gap-3"
      style={{ color: light ? C.yellow : C.slate }}
    >
      <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      style={{ backgroundColor: C.yellow, color: C.slateDeep, boxShadow: '0 10px 24px rgba(242,183,5,0.35)' }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

export default function MillycarPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.slate }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        theme={{
          over: 'dark',
          bar: 'rgba(251,251,248,0.94)',
          ink: C.slate,
          line: C.line,
          btnBg: C.yellow,
          btnInk: C.slateDeep,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.slateDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada y box de trabajo del servicio técnico automotriz Millycar en Curicó"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,53,63,0.66) 0%, rgba(34,53,63,0.18) 42%, rgba(34,53,63,0.9) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: 'rgba(251,251,248,0.95)', color: C.slate }}
            >
              <Star className="w-[15px] h-[15px]" color={C.yellow} />
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Taller mecánico · Curicó</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[1.02] tracking-tight text-[clamp(2.6rem,8.5vw,5.4rem)] mb-6`}
              style={{ color: '#FBFBF8' }}
            >
              Mecánica honesta,
              <br />
              <span
                className="inline-block px-3 mt-1 rounded-sm"
                style={{ backgroundColor: C.yellow, color: C.slateDeep }}
              >
                explicada en simple.
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,251,248,0.88)' }}>
              {BIZ.name} atiende en {BIZ.address}, {BIZ.city}: diagnóstico
              claro, presupuesto antes de abrir el capó y fotos del avance
              por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <WaButton>Agendar por WhatsApp</WaButton>
              <a
                href="#servicios"
                className="inline-flex items-center font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ borderColor: 'rgba(251,251,248,0.55)', color: '#FBFBF8' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(251,251,248,0.2)', backgroundColor: 'rgba(34,53,63,0.55)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'rgba(251,251,248,0.8)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
              atención directa con el mecánico
            </span>
            <span>Presupuesto antes de abrir</span>
            <span className="hidden md:inline" style={{ color: C.yellow }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cuerpo: columna principal + sidebar pegajoso ── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_330px]">

          {/* Sidebar (primero en móvil: agenda siempre a mano) */}
          <aside className="lg:order-2">
            <div className="lg:sticky lg:top-[92px] space-y-5">
              {/* tarjeta de agenda */}
              <div
                className="rounded-2xl border p-6 md:p-7"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 18px 44px rgba(34,53,63,0.10)' }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: C.muted }}>
                  Agenda tu visita
                </p>
                <h2 className={`${display.className} font-bold text-2xl leading-tight mb-3`} style={{ color: C.slateDeep }}>
                  Cuéntanos qué le pasa a tu auto
                </h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                  Describe el ruido, el testigo o la falla. Te respondemos
                  con hora tentativa y qué traer.
                </p>
                <WaButton className="w-full">Escribir por WhatsApp</WaButton>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="block text-center text-sm font-medium mt-4 underline underline-offset-4 decoration-2 hover:decoration-[3px]"
                  style={{ color: C.slate, textDecorationColor: 'rgba(47,72,88,0.3)' }}
                >
                  o llama al {BIZ.phoneDisplay}
                </a>
              </div>

              {/* ficha del taller */}
              <div className="rounded-2xl border p-6 md:p-7" style={{ backgroundColor: C.soft, borderColor: C.line }}>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: C.muted }}>
                  Ficha del taller
                </p>
                <ul className="space-y-4 text-sm">
                  {HORAS.map((h) => (
                    <li key={h.days} className="flex items-start gap-3">
                      <Clock className="w-4 h-4 mt-0.5 shrink-0" color={C.slate} />
                      <span style={{ color: C.muted }}>
                        <strong className="font-semibold" style={{ color: C.slate }}>{h.days}:</strong> {h.time}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Pin className="w-4 h-4 mt-0.5 shrink-0" color={C.slate} />
                    <span style={{ color: C.muted }}>
                      <strong className="font-semibold" style={{ color: C.slate }}>{BIZ.address}</strong>
                      <br />
                      {BIZ.city}, {BIZ.region}{' '}
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4 decoration-2 hover:decoration-[3px]"
                        style={{ color: C.slate, textDecorationColor: 'rgba(47,72,88,0.3)' }}
                      >
                        Cómo llegar →
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 mt-0.5 shrink-0" color={C.yellow} />
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-4 decoration-2 hover:decoration-[3px]"
                      style={{ color: C.slate, textDecorationColor: 'rgba(47,72,88,0.3)' }}
                    >
                      {BIZ.reviews} reseñas en Google
                    </a>
                  </li>
                </ul>
                <p className="text-[11px] leading-relaxed mt-5 pt-4 border-t" style={{ color: C.muted, borderColor: C.line }}>
                  Horarios referenciales: al publicar van los reales del
                  taller. También estamos en{' '}
                  <a
                    href={BIZ.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 decoration-2"
                    style={{ color: C.slate, textDecorationColor: 'rgba(47,72,88,0.3)' }}
                  >
                    Facebook
                  </a>
                  .
                </p>
              </div>
            </div>
          </aside>

          {/* Columna principal */}
          <main className="lg:order-1 min-w-0">

            {/* ── El taller ── */}
            <section id="taller" className="scroll-mt-24 mb-16 md:mb-20">
              <Reveal>
                <Eyebrow>El taller</Eyebrow>
                <h2 className={`${display.className} font-bold text-3xl md:text-[2.6rem] leading-[1.08] mb-6`} style={{ color: C.slateDeep }}>
                  Un taller de barrio en Av. Manso de Velasco,{' '}
                  <span style={{ boxShadow: `inset 0 -0.42em 0 ${C.yellowSoft}`, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>
                    donde te explican
                  </span>{' '}
                  lo que le hacen a tu auto
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-xl" style={{ color: C.muted }}>
                  Millycar es un servicio técnico automotriz de Curicó donde
                  te atiende el mismo mecánico que va a ver tu auto. Nada de
                  recepcionistas que traducen a medias: llegas, se revisa y
                  te contamos qué encontramos con la pieza en la mano.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Atención directa con el mecánico, sin intermediarios',
                    'Presupuesto cerrado antes de empezar el trabajo',
                    'Fotos del avance y de las piezas por WhatsApp',
                    `${BIZ.reviews} reseñas reales en la ficha de Google`,
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.slate }}>
                      <Check className="w-4 h-4 shrink-0" color={C.yellow} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={100}>
                <figure className="relative overflow-hidden rounded-2xl aspect-[16/10] border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Interior del taller Millycar: autos en los boxes de trabajo"
                    fill
                    sizes="(min-width: 1024px) 60vw, calc(100vw - 40px)"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              {/* lo que valoran */}
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {OPINIONES.map((t, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <figure className="rounded-2xl border p-5 h-full" style={{ backgroundColor: C.card, borderColor: C.line }}>
                      <Star className="w-4 h-4 mb-3" color={C.yellow} />
                      <blockquote className="text-sm leading-relaxed mb-4" style={{ color: C.slate }}>
                        “{t.text}”
                      </blockquote>
                      <figcaption className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                        {t.author} · Reseña de ejemplo
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
              <p className="text-xs leading-relaxed mt-4" style={{ color: C.muted }}>
                Textos de muestra basados en lo que suelen valorar los
                clientes: al publicar van las reseñas reales de Google.
              </p>
            </section>

            {/* ── Servicios ── */}
            <section id="servicios" className="scroll-mt-24 mb-16 md:mb-20">
              <Reveal>
                <Eyebrow>Servicios del taller</Eyebrow>
                <h2 className={`${display.className} font-bold text-3xl md:text-[2.6rem] leading-[1.08] mb-4`} style={{ color: C.slateDeep }}>
                  Lo que hacemos,{' '}
                  <span style={{ boxShadow: `inset 0 -0.42em 0 ${C.yellowSoft}`, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>
                    capítulo por capítulo
                  </span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-10 max-w-xl" style={{ color: C.muted }}>
                  La oferta de servicios es de muestra: al publicar va la
                  carta real de Millycar.
                </p>
              </Reveal>
              <div className="space-y-10 md:space-y-14">
                {CAPITULOS.map((cap, i) => (
                  <Reveal key={cap.num} delay={i * 60}>
                    <article className="grid md:grid-cols-[64px_minmax(0,1fr)] gap-4 md:gap-7">
                      <p
                        className={`${display.className} font-bold text-4xl md:text-5xl leading-none`}
                        style={{ color: 'rgba(47,72,88,0.22)' }}
                        aria-hidden="true"
                      >
                        {cap.num}
                      </p>
                      <div>
                        <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border mb-5" style={{ borderColor: C.line }}>
                          <Image
                            src={cap.src}
                            alt={cap.alt}
                            fill
                            sizes="(min-width: 1024px) 55vw, calc(100vw - 40px)"
                            className="object-cover"
                          />
                        </div>
                        <h3 className={`${display.className} font-bold text-2xl md:text-[1.7rem] leading-tight mb-2`} style={{ color: C.slateDeep }}>
                          {cap.name}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed max-w-lg mb-3" style={{ color: C.muted }}>
                          {cap.desc}
                        </p>
                        <p className="flex items-center gap-2.5 text-xs md:text-sm font-semibold" style={{ color: C.slate }}>
                          <Check className="w-3.5 h-3.5 shrink-0" color={C.yellow} />
                          {cap.datum}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={80}>
                <div className="rounded-2xl border p-6 md:p-8 mt-12" style={{ backgroundColor: C.yellowSoft, borderColor: 'rgba(242,183,5,0.4)' }}>
                  <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-4`} style={{ color: C.slateDeep }}>
                    Y también revisamos
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {TAMBIEN.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.slate }}>
                        <Check className="w-4 h-4 shrink-0" color={C.slate} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* ── Aprende a leer tu auto ── */}
            <section className="rounded-3xl p-7 md:p-10 mb-16 md:mb-20" style={{ backgroundColor: C.slate }}>
              <Reveal>
                <Eyebrow light>Formación exprés</Eyebrow>
                <h2 className={`${display.className} font-bold text-3xl md:text-[2.4rem] leading-[1.1] mb-4`} style={{ color: '#FBFBF8' }}>
                  Aprende a leer tu auto
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-9 max-w-lg" style={{ color: 'rgba(251,251,248,0.75)' }}>
                  Tres señales que conviene no ignorar. Si tu auto muestra
                  alguna, escríbenos y te decimos si puede esperar o no.
                </p>
              </Reveal>
              <div className="space-y-0">
                {SENALES.map((s, i) => (
                  <Reveal key={s.num} delay={i * 80}>
                    <div
                      className={`flex gap-5 py-5 ${i > 0 ? 'border-t' : ''}`}
                      style={{ borderColor: 'rgba(251,251,248,0.16)' }}
                    >
                      <span
                        className={`${display.className} shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-base`}
                        style={{ backgroundColor: C.yellow, color: C.slateDeep }}
                        aria-hidden="true"
                      >
                        {s.num}
                      </span>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-1" style={{ color: '#FBFBF8' }}>
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(251,251,248,0.72)' }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Precios de referencia ── */}
            <section id="precios" className="scroll-mt-24 mb-16 md:mb-20">
              <Reveal>
                <Eyebrow>Precios de referencia</Eyebrow>
                <h2 className={`${display.className} font-bold text-3xl md:text-[2.6rem] leading-[1.08] mb-4`} style={{ color: C.slateDeep }}>
                  Valores claros,{' '}
                  <span style={{ boxShadow: `inset 0 -0.42em 0 ${C.yellowSoft}`, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>
                    antes de abrir el capó
                  </span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl" style={{ color: C.muted }}>
                  Todos los precios son de muestra para mostrar el formato.
                  Las tarifas reales las confirma el taller por WhatsApp.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <ul className="border-t" style={{ borderColor: C.line }}>
                  {PRECIOS.map((p) => (
                    <li
                      key={p.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-4 md:py-5"
                      style={{ borderColor: C.line }}
                    >
                      <span className="text-sm md:text-base font-medium" style={{ color: C.slate }}>
                        {p.name}
                      </span>
                      <span className={`${display.className} font-bold text-base md:text-lg shrink-0`} style={{ color: C.slateDeep }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                    Valores de muestra · sin compromiso
                  </p>
                  <a
                    href={WA_LINK_PRESUPUESTO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ backgroundColor: C.slate, color: '#FBFBF8' }}
                  >
                    Pedir presupuesto real
                  </a>
                </div>
              </Reveal>
            </section>

            {/* ── Contacto y mapa ── */}
            <section id="contacto" className="scroll-mt-24">
              <Reveal>
                <Eyebrow>Contacto y ubicación</Eyebrow>
                <h2 className={`${display.className} font-bold text-3xl md:text-[2.6rem] leading-[1.08] mb-6`} style={{ color: C.slateDeep }}>
                  {BIZ.address},
                  <br />
                  <span style={{ boxShadow: `inset 0 -0.42em 0 ${C.yellowSoft}`, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>{BIZ.city}</span>
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                </address>
                <div className="flex flex-wrap gap-3 mb-8">
                  <WaButton>Escribir por WhatsApp</WaButton>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl border-2 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ borderColor: C.slate, color: C.slate }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-2xl overflow-hidden border min-h-[320px]" style={{ borderColor: C.line, backgroundColor: C.soft }}>
                  <iframe
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </section>
          </main>
        </div>
      </div>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.slateDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(2.1rem,6vw,4rem)] leading-[1.02] mb-6`} style={{ color: '#FBFBF8' }}>
              Trae el auto con la duda,
              <br />
              <span style={{ color: C.yellow }}>llévalo con la respuesta</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(251,251,248,0.78)' }}>
              Escríbenos por WhatsApp, cuéntanos qué le pasa a tu auto y te
              confirmamos hora y presupuesto.
            </p>
            <WaButton>Agendar por WhatsApp</WaButton>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.slate, color: '#FBFBF8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2 flex items-center gap-3`}>
              <span className="inline-block w-5 h-5 rounded-sm" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,251,248,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(251,251,248,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,251,248,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(251,251,248,0.5)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}.
            Servicios, precios, horarios y reseñas son de muestra; el
            nombre, la dirección, el teléfono y las redes corresponden a
            datos públicos del taller.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
