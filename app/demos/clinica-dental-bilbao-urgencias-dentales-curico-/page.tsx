import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_URGENCIA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] })
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  paper: '#F6F1E7',
  soft: '#EDE5D3',
  forest: '#1E3D2F',
  deep: '#132A1F',
  brass: '#C8A24B',
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
  { value: '24/7', label: 'Urgencias dentales, todos los días' },
  { value: `${BIZ.reviews}`, label: 'Reseñas en Google Maps' },
  { value: 'Of. 718', label: 'Manuel Montt 357, centro de Curicó' },
  { value: `${BIZ.instagramFollowers}`, label: `Seguidores en @${BIZ.instagram}` },
]

const SERVICES = [
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Bandeja de instrumental dental esterilizado en el box, con lámpara clínica',
    tag: 'Urgencias',
    name: 'Urgencia dental 24 horas',
    desc: 'Dolor agudo, golpes, dientes quebrados o inflamación: atención las 24 horas del día, todos los días del año, sin esperar a la mañana siguiente.',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Box dental con sillón y vista a Curicó',
    tag: 'Odontología general',
    name: 'Consulta y tratamiento',
    desc: 'Diagnóstico, limpieza, restauraciones y plan de tratamiento explicado con calma y por escrito antes de empezar.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Instrumental y muestrario de tonos para restauraciones',
    tag: 'Estética',
    name: 'Estética y rehabilitación',
    desc: 'Restauraciones del color de tu diente, coronas y prótesis pensadas para que el trabajo no se note.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción de la clínica con mesón y box de atención al fondo',
    tag: 'La clínica',
    name: 'Atención directa y cercana',
    desc: 'Oficina en pleno centro de Curicó: llegas, te atiende el mismo equipo de siempre y sales con el siguiente paso claro.',
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

const TESTIMONIALS = [
  'Me dolía mucho una muela un domingo en la noche y me atendieron igual. Se agradece que contesten a cualquier hora.',
  'Muy ordenados y claros con los valores. Te explican el tratamiento antes de partir, eso da confianza.',
  'Queda en el centro, subo en ascensor a la oficina y me atienden puntual. La atención es muy buena.',
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.brassSoft : C.brass }}
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
          over: 'dark',
          bar: 'rgba(246,241,231,0.94)',
          ink: C.forest,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F6F1E7',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Box dental de Clínica Dental Bilbao con vista a Curicó"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(19,42,31,0.45) 0%, rgba(19,42,31,0.10) 40%, rgba(19,42,31,0.82) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(246,241,231,0.94)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.brass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Dentista · Curicó · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.7rem,9.5vw,5.6rem)] mb-6`}
              style={{ color: '#F6F1E7' }}
            >
              El dolor de muelas
              <br />
              <em className="not-italic" style={{ color: C.brassSoft }}>no espera hasta mañana</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(246,241,231,0.88)' }}>
              Clínica dental en el centro de Curicó con urgencias las 24
              horas del día, todos los días. Atención directa, valores
              claros y trato de consulta de barrio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_URGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.brass, color: '#1E130A' }}
              >
                Urgencia: escribir ahora
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(246,241,231,0.55)', color: '#F6F1E7' }}
              >
                Agendar una hora
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(246,241,231,0.22)', backgroundColor: 'rgba(19,42,31,0.45)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,231,0.78)' }}>
            <span>Manuel Montt 357 · Of. 718</span>
            <span>Abierto 24/7</span>
            <span>Curicó centro</span>
            <span className="hidden md:inline" style={{ color: C.brassSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Panel de métricas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>La clínica en números</Eyebrow>
        </Reveal>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px border" style={{ backgroundColor: C.line, borderColor: C.line }}>
          {METRICS.map((m, i) => (
            <div key={m.label} className="p-6 md:p-8" style={{ backgroundColor: C.paper }}>
              <Reveal delay={i * 90}>
                <dt className={`${display.className} text-4xl md:text-5xl leading-none mb-3`} style={{ color: C.forest }}>
                  {m.value}
                </dt>
                <dd className="text-xs md:text-sm leading-snug" style={{ color: C.muted }}>
                  {m.label}
                </dd>
              </Reveal>
            </div>
          ))}
        </dl>
        <Reveal delay={200}>
          <p className="text-xs mt-4" style={{ color: C.muted }}>
            Datos reales de la ficha pública de la clínica. El horario de
            urgencias se confirma al agendar.
          </p>
        </Reveal>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
                Qué atendemos
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Servicios de ejemplo: al publicar va la lista real de
                prestaciones y valores de la clínica.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-px border" style={{ backgroundColor: C.line, borderColor: C.line }}>
            {SERVICES.map((s, i) => (
              <li key={s.name} style={{ backgroundColor: '#FCFAF3' }}>
                <Reveal delay={i * 90} className="h-full">
                  <article className="group h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <span
                        className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5"
                        style={{ backgroundColor: 'rgba(246,241,231,0.94)', color: C.forest }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <div className="p-5 md:p-7 flex-1">
                      <h3 className={`${display.className} text-2xl md:text-[1.7rem] mb-2`} style={{ color: C.forest }}>
                        {s.name}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Tabla de precios de muestra ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Precios de referencia</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
              Valores orientativos
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Tabla de muestra: los valores reales se confirman por
              WhatsApp o en la primera consulta.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="border overflow-x-auto" style={{ borderColor: C.line, backgroundColor: '#FCFAF3' }}>
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
                  <tr key={p.name} className="border-b last:border-b-0" style={{ borderColor: C.line }}>
                    <td className="px-5 md:px-7 py-4 text-sm md:text-base font-semibold" style={{ color: C.forest }}>
                      {p.name}
                    </td>
                    <td className="px-5 md:px-7 py-4 text-sm hidden md:table-cell" style={{ color: C.muted }}>
                      {p.desc}
                    </td>
                    <td className={`${display.className} px-5 md:px-7 py-4 text-base md:text-lg text-right whitespace-nowrap`} style={{ color: C.brass }}>
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
        </Reveal>
      </section>

      {/* ── Urgencias 24/7 ── */}
      <section id="urgencias" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Urgencias dentales</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F6F1E7' }}>
                Atendemos
                <br />
                <em className="not-italic" style={{ color: C.brassSoft }}>las 24 horas</em>
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
                className="inline-block font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.brass, color: '#1E130A' }}
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
                    <span className={`${display.className} text-3xl md:text-4xl leading-none shrink-0 w-12`} style={{ color: C.brass }}>
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
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.forest }}>
              En el centro de Curicó,
              <br />
              como los consultorios de antes
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
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2"
                style={{ color: C.brass, textDecorationColor: 'rgba(200,162,75,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2"
                style={{ color: C.brass, textDecorationColor: 'rgba(200,162,75,0.35)' }}
              >
                @{BIZ.instagram} en Instagram →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={120}>
              <figure className="rounded-none overflow-hidden border" style={{ borderColor: C.line }}>
                <img
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de Clínica Dental Bilbao en Curicó"
                  loading="lazy"
                  className="w-full object-cover aspect-[16/10]"
                />
              </figure>
            </Reveal>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={160 + i * 100}>
                <figure className="p-5 md:p-6 border" style={{ backgroundColor: '#FCFAF3', borderColor: C.line }}>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.brass }}>
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
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.forest }}>
              Manuel Montt 357,
              <br />
              oficina 718
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <dl className="border text-sm mb-8" style={{ borderColor: C.line, backgroundColor: '#FCFAF3' }}>
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
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.forest, color: '#F6F1E7' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(30,61,47,0.4)', color: C.forest }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#F6F1E7' }}>
              Agenda tu hora
              <br />
              <em className="not-italic" style={{ color: C.brassSoft }}>o escribe por urgencia</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,241,231,0.78)' }}>
              Respondemos por WhatsApp, a cualquier hora. En urgencias
              priorizamos el dolor primero.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95"
              style={{ backgroundColor: C.brass, color: '#1E130A' }}
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
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
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
