import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF8F1',
  sand: '#EFE7DA',
  sage: '#7C8F7B',
  sageDeep: '#4F5F4E',
  charcoal: '#2B2B27',
  ink: '#2B2B27',
  muted: '#5C5C56',
  line: 'rgba(43,43,39,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'matrokin',
  title: 'Matrokin SPA — Spa y terapias en Molina',
  description: 'Spa y terapias en Camino a Agua Fría, Molina, Región del Maule. Masajes, limpieza facial y sauna con reserva por WhatsApp.',
  image: '/demos/matrokin/hero.webp',
})

const NAV_LINKS = [
  { label: 'Rituales', href: '#rituales' },
  { label: 'La experiencia', href: '#experiencia' },
  { label: 'Precios', href: '#precios' },
  { label: 'Reservar', href: '#reserva' },
  { label: 'Ubicación', href: '#contacto' },
]

const RITUALS = [
  {
    src: `${IMG}/masaje.webp`,
    name: 'Masaje relajante',
    desc: 'Sesión de cuerpo completo con aceites tibios, pensada para soltar la semana entera en una hora.',
  },
  {
    src: `${IMG}/facial.webp`,
    name: 'Limpieza facial',
    desc: 'Cuidado facial profundo con productos naturales: limpieza, exfoliación suave e hidratación.',
  },
  {
    src: `${IMG}/sauna.webp`,
    name: 'Sauna',
    desc: 'Calor seco entre madera y silencio, para cerrar la sesión con el cuerpo liviano y la mente quieta.',
  },
]

const DETAILS = [
  {
    title: 'Toallas tibias',
    desc: 'Todo está preparado antes de que llegues: cabina temperada y toallas recién calentadas.',
  },
  {
    title: 'Té de hierbas',
    desc: 'Al terminar te espera una infusión de hierbas del jardín, para volver al día sin apuro.',
  },
  {
    title: 'Aceites naturales',
    desc: 'Trabajamos con aceites de lavanda, rosa mosqueta y almendras, elegidos según tu piel.',
  },
  {
    title: 'Silencio de verdad',
    desc: 'El spa está en el campo, a orillas del camino a Agua Fría: aquí el silencio no es decoración.',
  },
]

const PRICES = [
  { name: 'Masaje relajante (60 min)', desc: 'Cuerpo completo con aceites naturales', price: 'desde $XX.XXX' },
  { name: 'Masaje descontracturante', desc: 'Foco en espalda, cuello y hombros', price: 'desde $XX.XXX' },
  { name: 'Limpieza facial profunda', desc: 'Limpieza, exfoliación e hidratación', price: 'desde $XX.XXX' },
  { name: 'Sauna (sesión)', desc: 'Por persona, con toalla incluida', price: 'desde $XX.XXX' },
  { name: 'Ritual completo', desc: 'Masaje + facial + sauna, una tarde entera', price: 'a convenir' },
]

const STEPS = [
  {
    title: 'Escríbenos por WhatsApp',
    desc: 'Cuéntanos qué necesitas: un masaje, un facial o la tarde completa.',
  },
  {
    title: 'Agendamos tu hora',
    desc: 'Te respondemos con las horas disponibles de la semana y reservamos la tuya.',
  },
  {
    title: 'Llega y respira',
    desc: 'Ven con diez minutos de anticipación. Del resto nos encargamos nosotras.',
  },
]

const TESTIMONIALS = [
  'Salí flotando. El lugar es precioso, todo huele rico y el masaje fue exactamente lo que necesitaba.',
  'Una maravilla escondida camino a Agua Fría. El té al final y la calma del lugar lo valen todo.',
  'Reservé un facial para regalonear y terminé volviendo cada mes. Atención cálida y muy profesional.',
]

const HOURS = [
  { days: 'Lunes a viernes', time: '10:00–19:00' },
  { days: 'Sábado', time: '10:00–14:00' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.sand : C.sageDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function MatrokinPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(251,248,241,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.sageDeep,
          btnInk: '#FBF8F1',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Cabina de masajes de Matrokin SPA: camilla con toallas blancas, velas encendidas y vista al jardín"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(43,43,39,0.6) 0%, rgba(43,43,39,0.5) 40%, rgba(43,43,39,0.9) 100%)',
          }}
        />
        <div className="relative mt-auto w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28 md:pt-36">
          <Reveal>
            {/* sello de reseñas */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg mb-6"
              style={{ backgroundColor: 'rgba(251,248,241,0.94)', color: C.charcoal }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.sageDeep} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
            <Eyebrow light>Spa &amp; terapias · Molina · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.04] tracking-[0.01em] text-[clamp(2.8rem,9.5vw,5.8rem)] mb-6`}
              style={{ color: '#FBF8F1' }}
            >
              El tiempo,
              <br />
              <span style={{ color: C.sand }}>a tu ritmo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,248,241,0.94)' }}>
              Un spa pequeño y tranquilo en el campo de Molina. Masajes,
              faciales y sauna con reserva previa, a tu propio ritmo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.sand, color: C.charcoal }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#rituales"
                className={`${display.className} text-sm md:text-base px-8 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(251,248,241,0.55)', color: '#FBF8F1' }}
              >
                Ver los rituales
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(251,248,241,0.22)', backgroundColor: 'rgba(43,43,39,0.85)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,248,241,0.9)' }}>
            <span>Camino a Agua Fría 767</span>
            <span>Molina · Maule</span>
            <span>Con reserva previa</span>
            <span className="hidden md:inline" style={{ color: C.sand }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Rituales ── */}
      <section id="rituales" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-18 md:py-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-start mb-12 md:mb-16">
          <Reveal>
            <Eyebrow>Rituales</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08]`} style={{ color: C.ink }}>
              Pausas que
              <br />
              <span style={{ color: C.sageDeep }}>se sienten</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl lg:pt-12" style={{ color: C.muted }}>
              Tres formas de bajar las revoluciones. Los servicios son de
              muestra: al publicar van la carta y los valores reales del
              spa.
            </p>
          </Reveal>
        </div>
        <ul className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {RITUALS.map((r) => (
              <li key={r.name} className="group h-full">
                <div className="relative overflow-hidden rounded-t-[999px] aspect-[4/5] border" style={{ borderColor: C.line }}>
                  <img
                    src={r.src}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="pt-6 text-center">
                  <h3 className={`${display.className} text-2xl md:text-[1.7rem] mb-2.5`} style={{ color: C.ink }}>
                    {r.name}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: C.muted }}>
                    {r.desc}
                  </p>
                </div>
              </li>
          ))}
        </ul>
      </section>

      {/* ── Detalle de la experiencia ── */}
      <section id="experiencia" className="scroll-mt-20" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="rounded-[2rem] overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
              <img
                src={`${IMG}/te.webp`}
                alt="Té de hierbas humeante junto a toallas blancas, lavanda y manzanilla"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          <Reveal delay={140}>
            <Eyebrow light>La experiencia</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: '#FBF8F1' }}>
              Lo que se nota
              <br />
              <span style={{ color: C.sand }}>en los detalles</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(251,248,241,0.88)' }}>
              Un spa no son solo las manos de quien te atiende: es todo
              lo que rodea la hora. Esto es lo que prepara cada visita.
            </p>
            <ul className="space-y-5">
              {DETAILS.map((d) => (
                <li key={d.title} className="flex gap-4">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.sage }} aria-hidden="true" />
                  <div>
                    <p className={`${display.className} text-lg leading-snug mb-1`} style={{ color: '#FBF8F1' }}>
                      {d.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,248,241,0.85)' }}>
                      {d.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow>Precios de referencia</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-5`} style={{ color: C.ink }}>
              Valores
              <br />
              <span style={{ color: C.sageDeep }}>transparentes</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Precios de muestra para mostrar cómo se vería la carta: al
              publicar van los valores reales de cada servicio.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="rounded-[1.5rem] border divide-y overflow-hidden" style={{ backgroundColor: C.paper, borderColor: C.line }}>
              {PRICES.map((p) => (
                <li key={p.name} className="flex items-baseline justify-between gap-6 px-6 md:px-8 py-5">
                  <div>
                    <p className={`${display.className} text-lg md:text-xl leading-snug`} style={{ color: C.ink }}>
                      {p.name}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                  <p className={`${display.className} shrink-0 text-lg md:text-xl`} style={{ color: C.sageDeep }}>
                    {p.price}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-xs mt-4 uppercase tracking-[0.18em] font-semibold" style={{ color: C.sageDeep }}>
              Valores referenciales — se confirman al reservar
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reserva por WhatsApp ── */}
      <section id="reserva" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Reservar</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08]`} style={{ color: C.ink }}>
              Reservar es
              <br />
              <span style={{ color: C.sageDeep }}>un mensaje</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Sin formularios ni cuentas: un WhatsApp y quedas agendada.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-14">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="border-t-2 pt-6" style={{ borderColor: C.sage }}>
                <p className={`${display.className} text-5xl md:text-6xl leading-none mb-3`} style={{ color: C.sageDeep }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className={`${display.className} text-xl md:text-2xl mb-2.5`} style={{ color: C.ink }}>
                  {s.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className="text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-base md:text-lg px-10 py-3 rounded-full shadow-lg transition-transform hover:scale-[1.03] active:scale-95`}
              style={{ backgroundColor: C.sageDeep, color: '#FBF8F1' }}
            >
              Reservar mi hora por WhatsApp
            </a>
            <p className="text-xs mt-4 uppercase tracking-[0.18em]" style={{ color: C.muted }}>
              Respondemos el mismo día
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Opiniones ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
                Lo que dicen las visitas
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                {BIZ.name} acumula {BIZ.reviews} reseñas en su ficha de
                Google. Estos textos son de muestra: al publicar van las
                reseñas reales.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2"
                style={{ color: C.sageDeep, textDecorationColor: 'rgba(124,143,123,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="rounded-[1.5rem] p-6 md:p-7 border"
                    style={{ backgroundColor: '#FFFDF8', borderColor: C.line }}
                  >
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.sageDeep }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: C.ink }}>
              Camino a
              <br />
              <span style={{ color: C.sageDeep }}>Agua Fría</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <dl className="mb-8 max-w-xs">
              {HOURS.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-4 border-b py-2.5 text-sm" style={{ borderColor: C.line }}>
                  <dt style={{ color: C.muted }}>{h.days}</dt>
                  <dd className={`${display.className}`} style={{ color: C.ink }}>{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horarios de muestra — la atención es con reserva previa por
              WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.sageDeep, color: '#FBF8F1' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm px-6 py-3 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(90,107,89,0.45)', color: C.sageDeep }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-[2rem] overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.sageDeep }}>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.06] mb-6`} style={{ color: '#FBF8F1' }}>
              Tu próxima pausa
              <br />
              <span style={{ color: C.sand }}>empieza aquí</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(251,248,241,0.94)' }}>
              Escríbenos por WhatsApp y agendamos tu masaje, facial o
              tarde de sauna. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.sand, color: C.charcoal }}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.charcoal, color: '#FBF8F1' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
          <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,248,241,0.82)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,248,241,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-5 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(251,248,241,0.82)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.sand }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, precios, horarios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.sand }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
