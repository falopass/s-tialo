import type { Metadata } from 'next'
import { Outfit, Manrope } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
})
const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const C = {
  ink: '#0E0E0E',
  paper: '#F4F4F0',
  white: '#FFFFFF',
  gray: '#E4E4DE',
  blue: '#2251FF',
  lime: '#C6F24E',
}

export const metadata: Metadata = {
  title: 'CSF Especialidades Veterinarias — Clínica veterinaria en Talca',
  description:
    'Clínica veterinaria en San Francisco, Talca. Consulta, ecografía, vacunas, farmacia y cirugía. Agenda por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#contacto' },
]

const TICKER = [
  'Consulta general',
  'Vacunas',
  'Ecografía',
  'Cirugía',
  'Urgencias',
  'Farmacia veterinaria',
  'Desparasitación',
  'Control de cachorros',
]

const SERVICIOS = [
  {
    num: 'S.01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Instrumental veterinario sobre mesa de acero: estetoscopio, otoscopio, termómetro y guantes',
    name: 'Consulta y diagnóstico',
    desc: 'Evaluación completa en box, con plan de tratamiento claro antes de cualquier procedimiento.',
  },
  {
    num: 'S.02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Ecógrafo junto a mesa de examen con vista al centro de Talca',
    name: 'Ecografía e imagenología',
    desc: 'Diagnóstico por imágenes dentro de la clínica, sin derivar a otro centro.',
  },
  {
    num: 'S.03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción de la clínica con repisas de insumos y productos veterinarios',
    name: 'Vacunas y farmacia',
    desc: 'Calendario de vacunas, desparasitación e insumos veterinarios en el mismo lugar.',
  },
  {
    num: 'S.04',
    src: `${IMG}/hero.webp`,
    alt: 'Box de atención de la clínica: mesa de acero, ecógrafo y ventana con vista a Talca',
    name: 'Cirugía y urgencias',
    desc: 'Procedimientos programados y atención de urgencia con el equipo de la casa.',
  },
]

const PRECIOS = [
  { num: 'P.01', name: 'Consulta general', desc: 'Evaluación completa + plan de tratamiento', price: 'desde $20.000' },
  { num: 'P.02', name: 'Vacuna anual', desc: 'Perro o gato, incluye registro en carnet', price: 'desde $18.000' },
  { num: 'P.03', name: 'Desparasitación', desc: 'Interna y externa, según peso y edad', price: 'desde $8.000' },
  { num: 'P.04', name: 'Ecografía', desc: 'Diagnóstico por imagen en la clínica', price: 'desde $35.000' },
  { num: 'P.05', name: 'Esterilización y cirugía', desc: 'Anestesia monitoreada, previa evaluación', price: 'a evaluar' },
]

const RESENAS = [
  {
    text: 'Atención directa y sin vueltas: te explican qué tiene tu mascota y cuánto va a costar antes de hacer cualquier cosa.',
    author: 'Tutor de perro · San Francisco',
  },
  {
    text: 'La ecografía la hicieron ahí mismo, sin mandarnos a otro lado. Eso con un animalito enfermo vale oro.',
    author: 'Tutora de gata · Talca',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: 'Horario de día' },
  { days: 'Sábado', time: 'Horario de mañana' },
]

function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold px-3 py-1.5 border-[3px] ${dark ? 'border-white' : ''}`}
      style={{
        backgroundColor: dark ? C.ink : C.lime,
        color: dark ? C.lime : C.ink,
        borderColor: dark ? C.lime : C.ink,
      }}
    >
      <span className="inline-block w-2 h-2" style={{ backgroundColor: dark ? C.lime : C.blue }} aria-hidden="true" />
      {children}
    </p>
  )
}

function SectionHead({
  num,
  title,
  note,
  light = false,
}: {
  num: string
  title: React.ReactNode
  note?: string
  light?: boolean
}) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <Tag dark={light}>{num}</Tag>
        <h2
          className={`${display.className} font-black uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2.2rem,6.5vw,4.5rem)] mt-5`}
          style={{ color: light ? C.white : C.ink }}
        >
          {title}
        </h2>
        {note && (
          <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.14em] mt-4 max-w-md" style={{ color: light ? 'rgba(255,255,255,0.6)' : 'rgba(14,14,14,0.6)' }}>
            {note}
          </p>
        )}
      </Reveal>
    </div>
  )
}

export default function CsfVeterinariaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes csf-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .csf-marquee-track { animation: csf-marquee 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .csf-marquee-track { animation: none; } }
      `}</style>

      {/* ── Barra superior ── */}
      <header
        className="fixed top-0 inset-x-0 z-40 border-b-[3px]"
        style={{ backgroundColor: C.white, borderColor: C.ink }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2.5 leading-none">
            <span
              className={`${display.className} font-black text-base md:text-lg px-2 py-1 border-[3px]`}
              style={{ backgroundColor: C.blue, color: C.white, borderColor: C.ink }}
            >
              CSF
            </span>
            <span className={`${display.className} font-extrabold uppercase text-xs md:text-sm tracking-[0.04em]`}>
              Especialidades
              <br className="md:hidden" /> Veterinarias
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold hover:underline underline-offset-4 decoration-2"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} shrink-0 font-extrabold uppercase text-xs md:text-sm px-4 md:px-5 py-2.5 border-[3px] transition-transform active:translate-x-[2px] active:translate-y-[2px]`}
            style={{
              backgroundColor: C.blue,
              color: C.white,
              borderColor: C.ink,
              boxShadow: `4px 4px 0 ${C.ink}`,
            }}
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Box de atención de la clínica veterinaria CSF: mesa de acero, ecógrafo y ventana con vista a Talca"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(14,14,14,0.88) 0%, rgba(14,14,14,0.55) 52%, rgba(34,81,255,0.25) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-40">
          <Reveal>
            <Tag>Clínica veterinaria · San Francisco · Talca</Tag>
            <h1
              className={`${display.className} font-black uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.9rem,10.5vw,7rem)] mt-6 mb-6`}
              style={{ color: C.white }}
            >
              Atención de
              <br />
              <span style={{ color: C.lime }}>especialistas</span>
              <br />
              para tu mascota
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Consulta, diagnóstico por imágenes, vacunas, farmacia y cirugía:
              todo dentro de la misma clínica, en el sector San Francisco de Talca.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-extrabold uppercase text-sm md:text-base px-7 py-4 border-[3px] transition-transform active:translate-x-[2px] active:translate-y-[2px]`}
                style={{ backgroundColor: C.lime, color: C.ink, borderColor: C.ink, boxShadow: `6px 6px 0 ${C.blue}` }}
              >
                Agendar por WhatsApp →
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-extrabold uppercase text-sm md:text-base px-7 py-4 border-[3px] transition-colors hover:bg-white/10`}
                style={{ borderColor: C.white, color: C.white }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos: retícula de celdas al pie del hero */}
        <div className="relative border-t-[3px]" style={{ borderColor: C.ink, backgroundColor: C.white }}>
          <dl className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {[
              { v: `${BIZ.reviews}`, l: 'reseñas en Google', href: MAPS_URL },
              { v: BIZ.followers, l: 'seguidores en Instagram', href: BIZ.instagram },
              { v: BIZ.phoneDisplay, l: 'WhatsApp directo', href: WA_LINK },
              { v: 'San Francisco', l: 'sector · Talca' },
            ].map((s) => (
              <div key={s.l} className="border-r-[3px] last:border-r-0 px-4 md:px-6 py-4 md:py-5" style={{ borderColor: C.ink }}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] order-2" style={{ color: 'rgba(14,14,14,0.55)' }}>
                  {s.l}
                </dt>
                <dd className={`${display.className} font-black text-lg md:text-2xl leading-tight mt-1`} style={{ color: C.blue }}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-[3px]">
                      {s.v}
                    </a>
                  ) : (
                    s.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Cinta corrida ── */}
      <div className="overflow-hidden border-b-[3px]" style={{ backgroundColor: C.lime, borderColor: C.ink }} aria-hidden="true">
        <div className="csf-marquee-track flex w-max items-center py-3">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className={`${display.className} font-extrabold uppercase text-sm md:text-base tracking-[0.06em] whitespace-nowrap px-5`} style={{ color: C.ink }}>
              {t} <span style={{ color: C.blue }}>+</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-24 border-b-[3px]" style={{ borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead
            num="01 / Servicios"
            title={
              <>
                Todo lo que necesita
                <br />
                <span style={{ color: C.blue }}>en un solo lugar</span>
              </>
            }
            note="Listado de muestra: al publicar van los servicios reales de la clínica."
          />
          <ul className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <li
                  className="group h-full border-[3px] flex flex-col transition-transform hover:-translate-x-1 hover:-translate-y-1"
                  style={{ backgroundColor: C.white, borderColor: C.ink, boxShadow: `8px 8px 0 ${C.ink}` }}
                >
                  <div className="relative overflow-hidden border-b-[3px]" style={{ borderColor: C.ink }}>
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span
                      className="absolute top-4 left-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 border-[3px]"
                      style={{ backgroundColor: C.lime, color: C.ink, borderColor: C.ink }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <div className="p-5 md:p-7 flex flex-col flex-1">
                    <h3 className={`${display.className} font-black uppercase text-xl md:text-2xl mb-2 leading-tight`}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed mb-5" style={{ color: 'rgba(14,14,14,0.65)' }}>
                      {s.desc}
                    </p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto font-mono text-[11px] uppercase tracking-[0.18em] font-bold underline underline-offset-4 decoration-2"
                      style={{ color: C.blue, textDecorationColor: C.blue }}
                    >
                      Consultar por WhatsApp →
                    </a>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La clínica ── */}
      <section id="clinica" className="scroll-mt-24 border-b-[3px]" style={{ borderColor: C.ink, backgroundColor: C.gray }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <div
              className="border-[3px]"
              style={{ borderColor: C.ink, backgroundColor: C.white, boxShadow: `10px 10px 0 ${C.blue}` }}
            >
              <img
                src={`${IMG}/ambiente.webp`}
                alt="Fachada de la clínica veterinaria a nivel de calle, con vitrina y perritos en la ventana"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] px-4 py-3 border-t-[3px]" style={{ borderColor: C.ink, color: 'rgba(14,14,14,0.55)' }}>
                La clínica a nivel de calle · {BIZ.sector}, {BIZ.city}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Tag>02 / La clínica</Tag>
            <h2
              className={`${display.className} font-black uppercase leading-[0.95] text-4xl md:text-5xl mt-5 mb-6`}
            >
              De barrio, en serio,
              <br />
              <span style={{ color: C.blue }}>en Talca</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(14,14,14,0.7)' }}>
              CSF Especialidades Veterinarias atiende en el sector San Francisco
              de Talca: una clínica de barrio donde hablas directo con el equipo
              que atiende a tu mascota, sin call center ni intermediarios.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(14,14,14,0.7)' }}>
              Lo que más valoran quienes llegan: que el diagnóstico se hace
              dentro de la misma clínica y que el trato es cara a cara.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 border-[3px]" style={{ borderColor: C.ink, backgroundColor: C.white }}>
              {[
                { v: `${BIZ.reviews}`, l: 'reseñas en Google', href: MAPS_URL },
                { v: BIZ.followers, l: 'seguidores en Instagram', href: BIZ.instagram },
                { v: 'Directo', l: 'hablas con el equipo', href: WA_LINK },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-4 sm:border-r-[3px] last:border-r-0 border-b-[3px] sm:border-b-0 last:border-b-0 hover:bg-[#F0F0EA] transition-colors"
                  style={{ borderColor: C.ink }}
                >
                  <p className={`${display.className} font-black text-2xl leading-none`} style={{ color: C.blue }}>
                    {s.v}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] mt-1.5" style={{ color: 'rgba(14,14,14,0.6)' }}>
                    {s.l}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        {/* reseñas de muestra */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure
                  className="h-full border-[3px] p-6 md:p-7"
                  style={{ backgroundColor: C.white, borderColor: C.ink, boxShadow: `6px 6px 0 ${C.lime}` }}
                >
                  <blockquote className={`${display.className} font-bold text-base md:text-lg leading-snug mb-4`}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(14,14,14,0.55)' }}>
                    {r.author} · reseña de muestra
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] mt-6" style={{ color: 'rgba(14,14,14,0.5)' }}>
              La clínica acumula {BIZ.reviews} reseñas reales en Google Maps; estos textos son de muestra.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Instagram ── */}
      <a
        href={BIZ.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-b-[3px] transition-colors"
        style={{ backgroundColor: C.blue, borderColor: C.ink }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 flex flex-wrap items-center justify-between gap-4">
          <p className={`${display.className} font-black uppercase text-xl md:text-3xl`} style={{ color: C.white }}>
            {BIZ.instagramHandle}
          </p>
          <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold px-3 py-2 border-[3px]" style={{ backgroundColor: C.lime, color: C.ink, borderColor: C.ink }}>
            {BIZ.followers} seguidores → seguir
          </p>
        </div>
      </a>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-24 border-b-[3px]" style={{ borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead
            num="03 / Precios"
            title={
              <>
                Valores
                <br />
                <span style={{ color: C.blue }}>de referencia</span>
              </>
            }
            note="Precios de muestra del demo: la clínica confirma sus valores reales por WhatsApp."
          />
          <Reveal>
            <div className="border-[3px]" style={{ borderColor: C.ink, backgroundColor: C.white, boxShadow: `10px 10px 0 ${C.lime}` }}>
              <div
                className="flex items-center justify-between gap-4 px-5 md:px-7 py-3.5 border-b-[3px] font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold"
                style={{ backgroundColor: C.ink, color: C.lime, borderColor: C.ink }}
              >
                <span>Servicio</span>
                <span>Valor de muestra</span>
              </div>
              <ul>
                {PRECIOS.map((p) => (
                  <li
                    key={p.num}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 md:px-7 py-4 md:py-5 border-b-[3px] last:border-b-0"
                    style={{ borderColor: C.ink }}
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="font-mono text-[10px] font-bold shrink-0" style={{ color: C.blue }}>{p.num}</span>
                      <div>
                        <p className={`${display.className} font-extrabold uppercase text-base md:text-lg leading-tight`}>
                          {p.name}
                        </p>
                        <p className="text-xs md:text-sm mt-0.5" style={{ color: 'rgba(14,14,14,0.55)' }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                    <p className={`${display.className} font-black text-lg md:text-xl shrink-0`} style={{ color: C.blue }}>
                      {p.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-24" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead
            light
            num="04 / Agenda"
            title={
              <>
                Agenda tu hora
                <br />
                <span style={{ color: C.lime }}>por WhatsApp</span>
              </>
            }
          />
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} flex items-center justify-between gap-4 font-black uppercase text-lg md:text-2xl px-6 md:px-8 py-5 md:py-6 border-[3px] transition-transform active:translate-x-[2px] active:translate-y-[2px] mb-8`}
                style={{ backgroundColor: C.lime, color: C.ink, borderColor: C.lime, boxShadow: `8px 8px 0 ${C.blue}` }}
              >
                <span>WhatsApp</span>
                <span>{BIZ.phoneDisplay} →</span>
              </a>
              <dl className="space-y-0 border-[3px]" style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
                {[
                  { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                  { k: 'Sector', v: `${BIZ.sector} · ${BIZ.region}, Chile` },
                  ...HORAS.map((h) => ({ k: h.days, v: h.time })),
                  { k: 'Instagram', v: BIZ.instagramHandle },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-4 border-b-[3px] last:border-b-0"
                    style={{ borderColor: 'rgba(255,255,255,0.35)' }}
                  >
                    <dt className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]" style={{ color: C.lime }}>
                      {row.k}
                    </dt>
                    <dd className="text-sm md:text-base font-semibold text-right" style={{ color: C.white }}>
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] mt-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Horarios referenciales: al publicar van los horarios reales de la clínica.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="border-[3px] h-full min-h-[320px]" style={{ borderColor: C.lime, backgroundColor: '#161616' }}>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px] grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t-[3px]" style={{ backgroundColor: C.ink, borderColor: C.lime, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-black uppercase text-xl md:text-2xl mb-2`}>
              <span style={{ color: C.lime }}>CSF</span> Especialidades Veterinarias
            </p>
            <address className="not-italic font-mono text-[11px] uppercase tracking-[0.14em] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {BIZ.address} · {BIZ.sector}, {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline underline-offset-4 decoration-2">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 font-mono text-[10px] uppercase tracking-[0.12em] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Servicios,
            precios, horarios y fotos son de muestra; el nombre, la dirección,
            el WhatsApp, las reseñas y el Instagram son los datos reales del negocio.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
