import type { Metadata } from 'next'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_SERVICIO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
const body = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const C = {
  paper: '#F7F9F9',
  card: '#FFFFFF',
  mintSoft: '#E4F2EE',
  petrol: '#0E4C5C',
  deep: '#093540',
  mint: '#9FD8CB',
  graphite: '#232A2C',
  muted: '#5B6B70',
  line: 'rgba(14,76,92,0.14)',
}

export const metadata: Metadata = {
  title: 'Clínica T-Renova SPA · Belleza y salud en Linares, Maule',
  description:
    'Tienda de belleza y salud en Kurt Moller 23, Linares: tratamientos, productos y un plan de cuidado paso a paso. Agenda por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Tu visita', href: '#tu-visita' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'La tienda', href: '#la-tienda' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

// El proceso en línea de tiempo: hitos numerados, foto y tiempo por etapa.
const TIMELINE = [
  {
    fase: 'El primer contacto',
    tiempo: 'un mensaje',
    title: 'Agenda por WhatsApp',
    text: 'Escríbenos y coordinamos tu hora directo con quienes atienden. Sin formularios ni espera.',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesa de consulta con espejo, productos de skincare y flores frente al ventanal',
  },
  {
    fase: 'Al llegar',
    tiempo: 'unos 15 min',
    title: 'Evaluación tranquila',
    text: 'Miramos tu piel y tu objetivo, y te proponemos un plan honesto: lo que necesitas, ni más ni menos.',
    src: `${IMG}/detalle3.webp`,
    alt: 'Bandeja de trabajo con instrumental, toallas y frascos junto a la ventana',
  },
  {
    fase: 'En cabina',
    tiempo: '60 a 90 min',
    title: 'Tu sesión de tratamiento',
    text: 'El servicio agendado en un ambiente ordenado y luminoso, con la calma que pide el cuerpo.',
    src: `${IMG}/ambiente.webp`,
    alt: 'Cabina de tratamiento con lámpara de aumento, camilla y toallas blancas',
  },
  {
    fase: 'De vuelta en casa',
    tiempo: 'rutina diaria',
    title: 'Cuidado que continúa',
    text: 'Te llevas la rutina recomendada y los productos para mantener el resultado entre visitas.',
    src: `${IMG}/detalle1.webp`,
    alt: 'Repisas de madera con líneas de productos dermocosméticos ordenados',
  },
]

const SERVICIOS = [
  {
    name: 'Limpieza facial profunda',
    desc: 'Higiene, exfoliación y extracción suave, con mascarilla según tu tipo de piel.',
    price: 'desde $XX.XXX',
    src: `${IMG}/detalle3.webp`,
    alt: 'Instrumental de cabina preparado sobre bandeja de acero',
  },
  {
    name: 'Tratamientos corporales',
    desc: 'Sesiones reductivas y reafirmantes con evaluación previa y plan por etapas.',
    price: 'desde $XX.XXX',
    src: `${IMG}/ambiente.webp`,
    alt: 'Cabina con camilla, lámpara clínica y productos listos para la sesión',
  },
  {
    name: 'Masajes de relajación',
    desc: 'Descontracturante y relajante, en cabina privada con música y luz cálida.',
    price: 'desde $XX.XXX',
    src: `${IMG}/hero.webp`,
    alt: 'Interior luminoso de la clínica con camilla y detalles en verde agua',
  },
  {
    name: 'Dermocosmética y productos',
    desc: 'Líneas de cuidado para la casa, elegidas según tu evaluación, no por empuje.',
    price: 'según producto',
    src: `${IMG}/detalle1.webp`,
    alt: 'Repisas con frascos y cremas de la tienda ordenados por línea',
  },
]

const TESTIMONIALS = [
  'Atención impecable y muy profesional. Te explican cada paso del tratamiento con calma.',
  'El local es precioso y súper ordenado. Se nota el cuidado en cada detalle.',
  'Me recomendaron solo lo que necesitaba. Cero presión de venta, eso se agradece.',
]

const PRICES = [
  { item: 'Limpieza facial profunda', price: '$XX.XXX' },
  { item: 'Tratamiento corporal (sesión)', price: '$XX.XXX' },
  { item: 'Masaje de relajación', price: '$XX.XXX' },
  { item: 'Evaluación y plan de cuidado', price: 'sin costo con tu primera hora' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.mint : C.petrol }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function StepCard({ s }: { s: (typeof TIMELINE)[number] }) {
  return (
    <article
      className="w-full rounded-xl border p-3.5"
      style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 1px 3px rgba(9,53,64,0.07)' }}
    >
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3">
        <Image
          src={s.src}
          alt={s.alt}
          fill
          sizes="(min-width: 768px) 300px, 90vw"
          loading="eager"
          className="object-cover"
        />
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1" style={{ color: C.petrol }}>
        {s.fase}
      </p>
      <h3 className={`${display.className} font-semibold text-lg leading-tight mb-1`} style={{ color: C.graphite }}>
        {s.title}
      </h3>
      <p className="text-xs leading-snug" style={{ color: C.muted }}>
        {s.text}
      </p>
    </article>
  )
}

export default function ClinicaTRenovaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.graphite }}
    >
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
          btnInk: '#F7F9F9',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior luminoso de Clínica T-Renova: camilla, productos y luz natural en tonos verde agua"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,53,64,0.55) 0%, rgba(9,53,64,0.35) 35%, rgba(9,53,64,0.9) 75%, rgba(9,53,64,0.95) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9FD8CB]"
              style={{ backgroundColor: 'rgba(247,249,249,0.95)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.mint} stroke={C.petrol} strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.7 8.6 L21.2 9.2 L16.3 13.5 L17.8 19.9 L12 16.6 L6.2 19.9 L7.7 13.5 L2.8 9.2 L9.3 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-24">
          <Reveal>
            <Eyebrow light>Tienda de belleza y salud · Linares · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-medium leading-[1.08] tracking-[-0.01em] text-[clamp(2.7rem,9.5vw,5.8rem)] mb-6`}
              style={{ color: '#F7F9F9' }}
            >
              Renovarse
              <br />
              <em className="font-normal inline-block pb-1" style={{ color: C.mint }}>es un proceso</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(247,249,249,0.88)' }}>
              Tratamientos, productos y un plan de cuidado paso a paso,
              en pleno centro de Linares.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F9F9]`}
                style={{ backgroundColor: C.mint, color: C.deep }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#tu-visita"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F9F9]`}
                style={{ borderColor: 'rgba(247,249,249,0.55)', color: '#F7F9F9' }}
              >
                Ver cómo es la visita
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(247,249,249,0.22)', backgroundColor: 'rgba(9,53,64,0.92)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(247,249,249,0.9)' }}>
            <span>Kurt Moller 23, Linares</span>
            <span>Belleza · Salud · Cuidado</span>
            <span>{BIZ.reviews} reseñas en Google</span>
            <span className="hidden md:inline" style={{ color: C.mint }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Línea de tiempo horizontal: tu visita ── */}
      <section id="tu-visita" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-10 md:mb-14">
          <Reveal>
            <Eyebrow>Tu visita</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: C.petrol }}>
              De la agenda
              <br />
              al <em className="font-normal" style={{ color: C.petrol }}>resultado</em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
              Una visita a T-Renova tiene su recorrido: así se ve, paso a
              paso. Las etapas son de muestra; el proceso real lo
              conversan contigo al agendar.
            </p>
          </Reveal>
        </div>

        {/* móvil: recorrido vertical, sin scroll horizontal */}
        <ol className="md:hidden max-w-6xl mx-auto px-5 space-y-6">
          {TIMELINE.map((s, i) => (
            <li key={s.fase} className="flex gap-4">
              <span
                className={`${display.className} shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold`}
                style={{ backgroundColor: i % 2 === 0 ? C.petrol : C.mint, color: i % 2 === 0 ? '#F7F9F9' : C.deep }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] uppercase tracking-[0.18em] font-bold mb-2 mt-3" style={{ color: C.petrol }}>
                  {s.tiempo}
                </p>
                <StepCard s={s} />
              </div>
            </li>
          ))}
        </ol>

        {/* la línea cruza la pantalla; los hitos se alternan arriba/abajo */}
        <Reveal delay={140}>
          <div className="relative hidden md:block">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, transparent 0%, rgba(14,76,92,0.35) 6%, rgba(14,76,92,0.35) 94%, transparent 100%)',
              }}
            />
            <div
              className="relative overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              tabIndex={0}
              role="region"
              aria-label="Recorrido de tu visita en cuatro etapas"
            >
              <ol className="flex w-max min-w-full [justify-content:safe_center]">
                {TIMELINE.map((s, i) => (
                <li key={s.fase} className="w-[270px] md:w-[300px] shrink-0 snap-start px-4">
                  <div className="h-[300px] flex flex-col justify-end pb-6">
                    {i % 2 === 0 ? (
                      <>
                        <StepCard s={s} />
                        <span className="w-px h-5 mx-auto mt-3" style={{ backgroundColor: 'rgba(14,76,92,0.35)' }} aria-hidden="true" />
                      </>
                    ) : (
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-center mb-3" style={{ color: C.petrol }}>
                        {s.tiempo}
                      </p>
                    )}
                  </div>
                  <div className="h-12 flex items-center justify-center">
                    <span
                      className={`${display.className} relative z-10 w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold border-4`}
                      style={{
                        backgroundColor: i % 2 === 0 ? C.petrol : C.mint,
                        color: i % 2 === 0 ? '#F7F9F9' : C.deep,
                        borderColor: C.mintSoft,
                        boxShadow: '0 2px 8px rgba(9,53,64,0.18)',
                      }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="h-[300px] flex flex-col justify-start pt-6">
                    {i % 2 === 1 ? (
                      <>
                        <span className="w-px h-5 mx-auto mb-3" style={{ backgroundColor: 'rgba(14,76,92,0.35)' }} aria-hidden="true" />
                        <StepCard s={s} />
                      </>
                    ) : (
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-center mt-3" style={{ color: C.petrol }}>
                        {s.tiempo}
                      </p>
                    )}
                  </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.08] mb-4`} style={{ color: C.petrol }}>
              Lo que encuentras aquí
            </h2>
            <p className="text-sm md:text-base max-w-xl leading-relaxed mb-8 md:mb-10" style={{ color: C.muted }}>
              Servicios de muestra: al publicar van los tratamientos,
              líneas de productos y valores reales de la tienda.
            </p>
          </Reveal>
          <ul>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <li
                  className="grid grid-cols-[88px_1fr] md:grid-cols-[150px_1fr_auto] gap-4 md:gap-8 items-center border-t py-5 md:py-6"
                  style={{ borderColor: C.line }}
                >
                  <div
                    className="relative w-[88px] h-[88px] md:w-[150px] md:h-[100px] rounded-lg border overflow-hidden"
                    style={{ borderColor: C.line }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 768px) 150px, 88px"
                      loading="eager"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl leading-tight mb-1.5`} style={{ color: C.petrol }}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-1 flex md:flex-col items-center md:items-end gap-3 md:gap-1.5">
                    <span className={`${display.className} font-semibold text-base md:text-lg`} style={{ color: C.graphite }}>
                      {s.price}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em] font-bold" style={{ color: C.muted }}>
                      valor de muestra
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <a
              href={WA_LINK_SERVICIO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-8 font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C]`}
              style={{ backgroundColor: C.petrol, color: '#F7F9F9' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La tienda: Linares, atención directa, reseñas reales ── */}
      <section id="la-tienda" className="scroll-mt-20" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line, boxShadow: '0 18px 50px rgba(9,53,64,0.14)' }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/detalle2.webp`}
                    alt="Mesa de consulta de T-Renova con espejo, productos y vista a la calle de Linares"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: C.petrol }}>
                En el centro de Linares,
                <br />
                <em className="font-normal inline-block pb-1" style={{ color: C.petrol }}>atendida por su gente</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
                Clínica T-Renova funciona en Kurt Moller 23, a pasos del
                centro de Linares. Acá hablas directo con quienes
                atienden: la misma gente que evalúa, aplica y recomienda.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                Su ficha de Google ya acumula{' '}
                <strong className="font-bold" style={{ color: C.petrol }}>
                  {BIZ.reviews} reseñas
                </strong>{' '}
                de clientes de la comuna. Una vitrina que existe hoy y que
                un sitio propio puede aprovechar.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C]`}
                  style={{ backgroundColor: C.petrol, color: '#F7F9F9' }}
                >
                  Ver reseñas en Google →
                </a>
                <a
                  href={BIZ.waChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C]`}
                  style={{ borderColor: 'rgba(14,76,92,0.35)', color: C.petrol }}
                >
                  wa.me/{BIZ.waChannelUser}
                </a>
              </div>
            </Reveal>
          </div>

          {/* reseñas de muestra */}
          <div className="mt-16 md:mt-20 border-t pt-12" style={{ borderColor: 'rgba(14,76,92,0.2)' }}>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-8" style={{ color: C.muted }}>
                Lo que valoran los clientes · textos de muestra basados en el tipo de comentarios que recibe la tienda
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <figure
                    className="rounded-xl p-6 border h-full"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mb-4" fill={C.mint} aria-hidden="true">
                      <path d="M4 5h7v7c0 3.5-2 5.5-4.5 6.5l-.8-1.5c1.7-.8 2.8-2 3-3.5H4V5zm10 0h7v7c0 3.5-2 5.5-4.5 6.5l-.8-1.5c1.7-.8 2.8-2 3-3.5h-4.7V5z" />
                    </svg>
                    <blockquote className={`${display.className} text-base leading-relaxed mb-4`} style={{ color: C.graphite }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.petrol }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia (muestra) ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow light>Precios de referencia</Eyebrow>
              <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: '#F7F9F9' }}>
                Valores claros,
                <br />
                <em className="font-normal" style={{ color: C.mint }}>sin letra chica</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(247,249,249,0.72)' }}>
                Tabla de muestra para mostrar el formato. Los valores
                reales, por sesión, tratamiento o producto, se confirman
                por WhatsApp al publicar el sitio.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9FD8CB]`}
                style={{ backgroundColor: C.mint, color: C.deep }}
              >
                Agendar por WhatsApp
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'rgba(247,249,249,0.18)', backgroundColor: 'rgba(247,249,249,0.05)' }}>
                <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: 'rgba(247,249,249,0.18)' }}>
                  <span className={`${display.className} font-semibold text-lg`} style={{ color: '#F7F9F9' }}>
                    Lista de precios
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded" style={{ backgroundColor: C.mint, color: C.deep }}>
                    Muestra
                  </span>
                </div>
                <ul>
                  {PRICES.map((p) => (
                    <li
                      key={p.item}
                      className="px-6 py-4 flex items-baseline justify-between gap-6 border-b border-dashed last:border-b-0"
                      style={{ borderColor: 'rgba(247,249,249,0.22)' }}
                    >
                      <span className="text-sm md:text-base" style={{ color: 'rgba(247,249,249,0.85)' }}>
                        {p.item}
                      </span>
                      <span className={`${display.className} font-semibold text-base md:text-lg shrink-0 text-right`} style={{ color: C.mint }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: C.petrol }}>
              Agenda tu hora
              <br />
              en <em className="font-normal" style={{ color: C.petrol }}>Linares</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.addressFull}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C]" style={{ color: C.petrol }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              El local queda en pleno centro de Linares, a pasos de la
              calle principal. Escríbenos por WhatsApp y te confirmamos
              la hora el mismo día.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C]`}
                style={{ backgroundColor: C.petrol, color: '#F7F9F9' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3.5 rounded-full border transition-colors hover:bg-[#E4F2EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C]`}
                style={{ borderColor: 'rgba(14,76,92,0.35)', color: C.petrol }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.petrol }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-medium text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.1] mb-6`} style={{ color: '#F7F9F9' }}>
              Tu proceso de cuidado
              <br />
              <em className="font-normal inline-block pb-1" style={{ color: C.mint }}>empieza con un mensaje</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(247,249,249,0.78)' }}>
              Escríbenos por WhatsApp, cuéntanos qué buscas y te
              confirmamos hora el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9FD8CB]`}
              style={{ backgroundColor: C.mint, color: C.deep }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F7F9F9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-20 flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className={`${display.className} font-semibold text-xl`}>{BIZ.name}</p>
            <p className="text-sm" style={{ color: 'rgba(247,249,249,0.85)' }}>
              {BIZ.addressFull} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9FD8CB]">{BIZ.phoneDisplay}</a>
            </p>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,249,249,0.8)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: '#F7F9F9' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: servicios, precios, reseñas textuales y fotos de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.mint }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
