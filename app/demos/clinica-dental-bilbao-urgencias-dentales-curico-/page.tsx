import type { Metadata } from 'next'
import Image from 'next/image'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_URGENCIA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'] })
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  paper: '#F6F1E7',
  soft: '#EDE5D3',
  card: '#FCFAF3',
  forest: '#1E3D2F',
  deep: '#132A1F',
  brass: '#C8A24B',
  brassDark: '#A8863A',
  brassSoft: '#E4D3A8',
  ink: '#22241F',
  muted: '#6B6F62',
  line: 'rgba(34,36,31,0.16)',
}

export const metadata: Metadata = {
  title: 'Clínica Dental Bilbao — Dentista y urgencias 24/7 en Curicó',
  description:
    'Dentista en el centro de Curicó, Manuel Montt 357 oficina 718. Urgencias dentales las 24 horas, todos los días. Agenda por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Urgencias', href: '#urgencias' },
  { label: 'Ubicación', href: '#contacto' },
]

const METRICS = [
  { value: '24/7', label: 'Urgencias dentales, todos los días', href: null as string | null },
  { value: `${BIZ.reviews}`, label: 'Reseñas en Google Maps', href: MAPS_URL },
  { value: 'Of. 718', label: 'Manuel Montt 357, centro de Curicó', href: null },
  { value: `${BIZ.instagramFollowers}`, label: `Seguidores en @${BIZ.instagram}`, href: IG_URL },
]

const SERVICES = [
  {
    tag: 'Urgencias',
    name: 'Urgencia dental 24 horas',
    desc: 'Dolor agudo, golpes, dientes quebrados o inflamación: atención a cualquier hora, todos los días del año.',
    hours: '24/7',
  },
  {
    tag: 'Odontología general',
    name: 'Consulta y tratamiento',
    desc: 'Diagnóstico, limpieza, restauraciones y un plan de tratamiento explicado con calma y por escrito antes de empezar.',
    hours: 'Agenda',
  },
  {
    tag: 'Estética',
    name: 'Estética y rehabilitación',
    desc: 'Restauraciones del color del diente, coronas y prótesis pensadas para que el trabajo no se note.',
    hours: 'Agenda',
  },
  {
    tag: 'Prevención',
    name: 'Control y limpieza',
    desc: 'Profilaxis periódica y control de caries y encías para no terminar llegando de urgencia.',
    hours: 'Agenda',
  },
]

const PRICES = [
  { name: 'Consulta y diagnóstico', desc: 'Evaluación completa y plan de tratamiento', price: 'desde $XX.XXX' },
  { name: 'Limpieza dental', desc: 'Profilaxis con ultrasonido y pulido', price: 'desde $XX.XXX' },
  { name: 'Restauración (tapadura)', desc: 'Resina del color del diente', price: 'desde $XX.XXX' },
  { name: 'Extracción simple', desc: 'Pieza con movilidad o daño irreversible', price: 'desde $XX.XXX' },
  { name: 'Endodoncia', desc: 'Tratamiento de conducto por pieza', price: 'a evaluar' },
  { name: 'Urgencia fuera de horario', desc: 'Atención inmediata 24/7', price: 'se informa al agendar' },
]

const GALLERY = [
  { src: `${IMG}/detalle3.webp`, alt: 'Bandeja de instrumental dental esterilizado en el box, con lámpara clínica', cap: 'Instrumental esterilizado por paciente' },
  { src: `${IMG}/detalle1.webp`, alt: 'Instrumental y muestrario de tonos para restauraciones', cap: 'Muestrario de tonos para restauraciones' },
  { src: `${IMG}/detalle2.webp`, alt: 'Recepción de la clínica con mesón y box de atención al fondo', cap: 'Recepción y box de atención' },
]

const TESTIMONIALS = [
  'Me dolía mucho una muela un domingo en la noche y me atendieron igual. Se agradece que contesten a cualquier hora.',
  'Muy ordenados y claros con los valores. Te explican el tratamiento antes de partir, eso da confianza.',
  'Queda en el centro, subo en ascensor a la oficina y me atienden puntual. La atención es muy buena.',
]

const waBtn =
  'inline-block font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24B]'

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.brassSoft : C.brassDark }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ClinicaDentalBilbaoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(246,241,231,0.94)',
          ink: C.forest,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F6F1E7',
        }}
      />

      {/* ── Panel de datos arriba ── */}
      <section id="inicio" className="scroll-mt-20 border-b pt-[60px] md:pt-[68px]" style={{ borderColor: C.line }}>
        <dl
          className="grid grid-cols-2 lg:grid-cols-4 gap-px border-b"
          style={{ backgroundColor: C.line, borderColor: C.line }}
          aria-label="Datos destacados de la clínica"
        >
          {METRICS.map((m) => {
            const cell = (
              <>
                <dt
                  className={`${display.className} text-3xl md:text-4xl leading-none mb-2 tabular-nums transition-colors`}
                  style={{ color: C.forest }}
                >
                  {m.value}
                </dt>
                <dd className="text-[11px] md:text-xs leading-snug" style={{ color: C.muted }}>
                  {m.label}
                </dd>
              </>
            )
            return (
              <div key={m.label} style={{ backgroundColor: C.paper }}>
                {m.href ? (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 md:px-7 py-5 md:py-6 transition-colors hover:bg-[#FCFAF3] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C8A24B]"
                  >
                    {cell}
                  </a>
                ) : (
                  <div className="px-5 md:px-7 py-5 md:py-6">{cell}</div>
                )}
              </div>
            )
          })}
        </dl>

        {/* Hero en panel: texto + ficha con foto */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Dentista · Curicó · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-semibold leading-[1.05] tracking-[-0.02em] text-[clamp(2.4rem,6.5vw,4.4rem)] mb-6`}
              style={{ color: C.forest }}
            >
              El dolor de muelas{' '}
              <span style={{ color: C.brassDark }}>no espera hasta mañana</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: C.muted }}>
              Clínica dental en el centro de Curicó con urgencias las 24
              horas del día, todos los días. Atención directa, valores
              claros y trato de consulta de barrio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_URGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} bg-[#C8A24B] text-[#1E130A] hover:bg-[#B08C3E]`}
              >
                Urgencia: escribir ahora
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} border border-[#1E3D2F]/40 text-[#1E3D2F] hover:bg-[#1E3D2F] hover:text-[#F6F1E7]`}
              >
                Agendar una hora
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <figure className="border" style={{ borderColor: C.line, backgroundColor: C.card }}>
              <div className="relative aspect-[4/3] overflow-hidden border-b" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Box dental de Clínica Dental Bilbao con vista a Curicó"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="px-5 md:px-6 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <span className="text-sm font-semibold" style={{ color: C.forest }}>
                  {BIZ.address}
                </span>
                <span className="flex items-center gap-2 text-xs" style={{ color: C.muted }}>
                  <Stars value={5} color={C.brass} className="w-3 h-3" />
                  {BIZ.reviews} reseñas · Abierto 24/7
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios en tabla ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
                Qué atendemos
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Servicios de ejemplo: al publicar va la lista real de
                prestaciones y valores de la clínica.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border" style={{ borderColor: C.line, backgroundColor: C.card }}>
              <div
                className="hidden md:grid grid-cols-[3.5rem_1.1fr_1.6fr_7rem] gap-x-6 px-6 md:px-8 py-3.5 border-b text-[10px] uppercase tracking-[0.18em] font-semibold"
                style={{ borderColor: C.line, color: C.muted }}
              >
                <span>N°</span>
                <span>Servicio</span>
                <span>Qué cubre</span>
                <span className="text-right">Atención</span>
              </div>
              <ul>
                {SERVICES.map((s, i) => (
                  <li
                    key={s.name}
                    className="grid md:grid-cols-[3.5rem_1.1fr_1.6fr_7rem] gap-x-6 gap-y-1 px-6 md:px-8 py-5 md:py-6 border-t first:border-t-0 transition-colors hover:bg-[#F6F1E7]"
                    style={{ borderColor: C.line }}
                  >
                    <span className={`${display.className} text-2xl tabular-nums leading-none self-start`} style={{ color: C.brass }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.18em] font-semibold mb-1 md:hidden" style={{ color: C.muted }}>
                        {s.tag}
                      </span>
                      <h3 className={`${display.className} font-semibold text-lg md:text-xl leading-snug`} style={{ color: C.forest }}>
                        {s.name}
                      </h3>
                      <span className="hidden md:inline-block mt-1.5 text-[10px] uppercase tracking-[0.16em] font-semibold px-2 py-1 border" style={{ borderColor: C.line, color: C.muted }}>
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                    <span className={`text-xs font-semibold md:text-right uppercase tracking-[0.14em] ${s.hours === '24/7' ? 'text-[#A8863A]' : ''}`} style={s.hours === '24/7' ? undefined : { color: C.muted }}>
                      {s.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Fotos de la clínica */}
          <div className="grid sm:grid-cols-3 gap-px mt-10 md:mt-14 border" style={{ backgroundColor: C.line, borderColor: C.line }}>
            {GALLERY.map((g, i) => (
              <figure key={g.src} style={{ backgroundColor: C.card }}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs leading-snug border-t" style={{ borderColor: C.line, color: C.muted }}>
                    {g.cap}
                  </figcaption>
                </Reveal>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tabla de precios de muestra ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Precios de referencia</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
              Valores orientativos
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Tabla de muestra: los valores reales se confirman por
              WhatsApp o en la primera consulta.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="border overflow-x-auto" style={{ borderColor: C.line, backgroundColor: C.card }}>
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                  <th className="font-semibold px-5 md:px-7 py-4 border-b" style={{ borderColor: C.line }}>Prestación</th>
                  <th className="font-semibold px-5 md:px-7 py-4 border-b hidden md:table-cell" style={{ borderColor: C.line }}>Detalle</th>
                  <th className="font-semibold px-5 md:px-7 py-4 border-b text-right" style={{ borderColor: C.line }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((p) => (
                  <tr key={p.name} className="border-b last:border-b-0 transition-colors hover:bg-[#F6F1E7]" style={{ borderColor: C.line }}>
                    <td className="px-5 md:px-7 py-4 text-sm md:text-base font-semibold" style={{ color: C.forest }}>
                      {p.name}
                    </td>
                    <td className="px-5 md:px-7 py-4 text-sm hidden md:table-cell" style={{ color: C.muted }}>
                      {p.desc}
                    </td>
                    <td className={`${display.className} px-5 md:px-7 py-4 text-base md:text-lg text-right whitespace-nowrap tabular-nums`} style={{ color: C.brassDark }}>
                      {p.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-4" style={{ color: C.muted }}>
            Precios referenciales de muestra. Al publicar van los valores
            reales, convenios y formas de pago de la clínica.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${waBtn} mt-6 bg-[#1E3D2F] text-[#F6F1E7] hover:bg-[#132A1F]`}
          >
            Consultar un valor por WhatsApp
          </a>
        </Reveal>
      </section>

      {/* ── Urgencias 24/7 ── */}
      <section id="urgencias" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Urgencias dentales</Eyebrow>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F6F1E7' }}>
                Atendemos las 24 horas
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(246,241,231,0.75)' }}>
                Dolor agudo, trauma, inflamación o una pieza quebrada no
                pueden esperar al lunes. Escribe por WhatsApp y te
                indicamos cómo llegar, sea la hora que sea.
              </p>
              <a
                href={WA_LINK_URGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} bg-[#C8A24B] text-[#1E130A] hover:bg-[#D8B868]`}
              >
                Escribir por urgencia
              </a>
            </Reveal>
            <div>
              {[
                { n: '01', t: 'Escribe por WhatsApp', d: 'Cuéntanos qué pasó y desde cuándo duele. Una foto ayuda a orientar.' },
                { n: '02', t: 'Te damos indicaciones', d: 'Qué hacer mientras tanto y cómo llegar a la oficina en Manuel Montt 357.' },
                { n: '03', t: 'Atención en el box', d: 'Vemos primero el dolor y después el tratamiento definitivo, con presupuesto claro.' },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 110}>
                  <div className="flex gap-5 md:gap-6 border-t py-6 first:border-t-0" style={{ borderColor: 'rgba(246,241,231,0.18)' }}>
                    <span className={`${display.className} font-semibold text-3xl md:text-4xl leading-none shrink-0 w-12 tabular-nums`} style={{ color: C.brass }}>
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1.5" style={{ color: '#F6F1E7' }}>
                        {s.t}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.68)' }}>
                        {s.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sobre el negocio + opiniones ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Sobre la clínica</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.forest }}>
              En el centro de Curicó, como los consultorios de antes
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-xl" style={{ color: C.muted }}>
              Clínica Dental Bilbao atiende en una oficina del centro,
              en Manuel Montt 357, con la calma de una consulta bien
              cuidada: el mismo equipo de siempre, trato directo y
              presupuesto claro antes de empezar.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl" style={{ color: C.muted }}>
              La clínica acumula {BIZ.reviews} reseñas en su ficha de
              Google y una comunidad de {BIZ.instagramFollowers} seguidores
              en Instagram. Lo que más se repite: la puntualidad, los
              valores claros y que responden a cualquier hora.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 text-[#A8863A] decoration-[#C8A24B]/40 hover:text-[#1E3D2F] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8A24B]"
              >
                Ver la ficha en Google →
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 text-[#A8863A] decoration-[#C8A24B]/40 hover:text-[#1E3D2F] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8A24B]"
              >
                @{BIZ.instagram} en Instagram →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={120}>
              <figure className="overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de Clínica Dental Bilbao en Curicó"
                  width={900}
                  height={560}
                  className="w-full object-cover aspect-[16/10]"
                />
              </figure>
            </Reveal>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={160 + i * 100}>
                <figure className="p-5 md:p-6 border" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.brassDark }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto / ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.forest }}>
              Manuel Montt 357, oficina 718
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <dl className="border text-sm mb-8" style={{ borderColor: C.line, backgroundColor: C.card }}>
              {[
                { k: 'Dirección', v: BIZ.address },
                { k: 'Comuna', v: `${BIZ.city}, ${BIZ.region}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay },
                { k: 'Urgencias', v: '24 horas, todos los días' },
                { k: 'Instagram', v: `@${BIZ.instagram}` },
              ].map((r) => (
                <div key={r.k} className="flex items-baseline justify-between gap-4 px-5 py-3 border-b last:border-b-0" style={{ borderColor: C.line }}>
                  <dt className="text-[10px] uppercase tracking-[0.18em] font-semibold shrink-0" style={{ color: C.muted }}>
                    {r.k}
                  </dt>
                  <dd className="text-right font-medium" style={{ color: C.forest }}>
                    {r.v}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} bg-[#1E3D2F] text-[#F6F1E7] hover:bg-[#132A1F]`}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} border border-[#1E3D2F]/40 text-[#1E3D2F] hover:bg-[#1E3D2F] hover:text-[#F6F1E7]`}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.card }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.forest }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/detalle2.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#F6F1E7' }}>
              Agenda tu hora{' '}
              <span style={{ color: C.brassSoft }}>o escribe por urgencia</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,241,231,0.78)' }}>
              Respondemos por WhatsApp, a cualquier hora. En urgencias
              priorizamos el dolor primero.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${waBtn} bg-[#C8A24B] text-[#1E130A] hover:bg-[#D8B868] px-8 py-4`}
            >
              Escribir a {BIZ.short}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F6F1E7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,241,231,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,231,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(246,241,231,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            servicios, precios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
