import type { Metadata } from 'next'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_DOLOR, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
})
const body = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const C = {
  night: '#07141A',
  night2: '#0A1C23',
  petrol: '#0E4C5C',
  petrolSoft: '#0F3540',
  mint: '#9FD8CB',
  mintHi: '#DDF3EC',
  bone: '#F7F9F9',
  muted: 'rgba(247,249,249,0.64)',
  faint: 'rgba(247,249,249,0.38)',
  line: 'rgba(159,216,203,0.20)',
  lineSoft: 'rgba(159,216,203,0.10)',
} as const

const NEON_TEXT = {
  color: C.mint,
  textShadow:
    '0 0 8px rgba(159,216,203,0.7), 0 0 28px rgba(159,216,203,0.38), 0 0 72px rgba(14,76,92,0.9)',
} as const

const NEON_LINE =
  'linear-gradient(90deg, transparent, rgba(159,216,203,0.85) 18%, rgba(159,216,203,0.85) 82%, transparent)'

const FOCUS =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9FD8CB]'

export const metadata: Metadata = {
  title: 'Clínica Dental San José — Dentista en Quechereguas 1667, Molina',
  description:
    'Clínica dental en Quechereguas 1667, Molina, Región del Maule. Atención directa y cercana: agenda tu hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Valores', href: '#valores' },
  { label: 'Ubicación', href: '#contacto' },
]

const SERVICES = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Box dental de la clínica con sillón de atención e instrumental listo',
    tag: 'Diagnóstico',
    name: 'Consulta y plan de tratamiento',
    desc: 'Evaluación completa, radiografía si corresponde y un presupuesto por escrito antes de partir. Sabes qué se va a hacer y cuánto vale.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Limpieza dental con ultrasonido en el box de atención',
    tag: 'Prevención',
    name: 'Limpieza y control',
    desc: 'Profilaxis con ultrasonido, pulido y control de caries y encías. La idea es simple: venir dos veces al año para no llegar de urgencia.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Detalle de instrumental y materiales para restauraciones dentales',
    tag: 'Restauración',
    name: 'Tapaduras, coronas y estética',
    desc: 'Restauraciones del color del diente, coronas y prótesis pensadas para que el trabajo no se note. Materiales de muestra, plan real al publicar.',
  },
]

const PRICES = [
  { name: 'Consulta y diagnóstico', desc: 'Evaluación completa y plan escrito', price: 'desde $XX.XXX' },
  { name: 'Limpieza dental', desc: 'Profilaxis con ultrasonido y pulido', price: 'desde $XX.XXX' },
  { name: 'Restauración (tapadura)', desc: 'Resina del color del diente', price: 'desde $XX.XXX' },
  { name: 'Extracción simple', desc: 'Pieza con daño irreversible', price: 'desde $XX.XXX' },
  { name: 'Endodoncia', desc: 'Tratamiento de conducto por pieza', price: 'a evaluar' },
  { name: 'Urgencia por dolor', desc: 'Atención prioritaria el mismo día', price: 'se informa al agendar' },
]

const waBtn =
  'inline-block font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all active:scale-95 tracking-wide'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: C.mint }}
    >
      <span
        className="inline-block w-10 h-px shrink-0"
        style={{ backgroundColor: C.mint, boxShadow: '0 0 8px rgba(159,216,203,0.8)' }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function NeonDivider() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8" aria-hidden="true">
      <div className="h-px" style={{ background: NEON_LINE }} />
    </div>
  )
}

export default function ClinicaDentalSanJosePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.night, color: C.bone }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(7,20,26,0.94)',
          ink: C.bone,
          line: C.line,
          btnBg: C.mint,
          btnInk: C.night,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-[100svh] flex flex-col overflow-hidden pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${IMG}/hero.webp`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ filter: 'contrast(1.12) saturate(1.05) brightness(0.82)' }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(7,20,26,0.55) 0%, rgba(7,20,26,0.35) 40%, ${C.night} 96%), linear-gradient(100deg, rgba(14,76,92,0.55) 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="relative flex-1 flex items-center max-w-6xl mx-auto px-5 md:px-8 w-full pt-28 pb-16">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Clínica dental · Molina · Región del Maule</Eyebrow>
              <h1
                className={`${display.className} font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,7vw,5.2rem)] mb-6`}
                style={{ color: C.bone }}
              >
                Tu dentista de barrio,{' '}
                <span style={NEON_TEXT}>encendido</span> en Quechereguas
              </h1>
              <p className="text-base md:text-lg font-light leading-relaxed max-w-xl mb-9" style={{ color: C.muted }}>
                Clínica Dental San José atiende en pleno Molina con trato
                directo: te atiende el mismo equipo de siempre, con valores
                claros y hora agendada por WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${waBtn} ${FOCUS}`}
                  style={{
                    backgroundColor: C.mint,
                    color: C.night,
                    boxShadow: '0 0 18px rgba(159,216,203,0.45), 0 0 48px rgba(159,216,203,0.22)',
                  }}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href={WA_LINK_DOLOR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${waBtn} ${FOCUS} border`}
                  style={{
                    borderColor: 'rgba(159,216,203,0.6)',
                    color: C.mint,
                    backgroundColor: 'rgba(7,20,26,0.5)',
                    boxShadow: 'inset 0 0 12px rgba(159,216,203,0.12)',
                  }}
                >
                  Me duele una muela
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Franja inferior del hero: datos reales */}
        <div className="relative border-t" style={{ borderColor: C.line, backgroundColor: 'rgba(7,20,26,0.72)', backdropFilter: 'blur(8px)' }}>
          <dl className="max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {[
              { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
              { k: 'WhatsApp', v: BIZ.phoneDisplay },
              { k: 'Instagram', v: `@${BIZ.instagram}` },
              { k: 'Google', v: `${BIZ.reviews} reseñas`, link: MAPS_URL },
            ].map((r) => (
              <div key={r.k}>
                <dt className="text-[10px] uppercase tracking-[0.26em] font-bold mb-1" style={{ color: C.faint }}>
                  {r.k}
                </dt>
                <dd className="text-sm md:text-base font-bold" style={{ color: C.bone }}>
                  {r.link ? (
                    <a href={r.link} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-[rgba(159,216,203,0.45)] hover:text-[#9FD8CB] transition-colors ${FOCUS}`}>
                      {r.v}
                    </a>
                  ) : (
                    r.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Servicios: fichas de letrero con foto ── */}
      <section id="servicios" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
              <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.bone }}>
                Lo que hacemos
              </h2>
              <p className="text-sm font-light max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Servicios de ejemplo: al publicar va la lista real de
                prestaciones y valores de la clínica.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10 md:space-y-14">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={80}>
                <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <figure
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl ${i % 2 === 1 ? 'md:order-2' : ''}`}
                    style={{
                      border: '1px solid rgba(159,216,203,0.35)',
                      boxShadow: '0 0 24px rgba(159,216,203,0.12), 0 24px 60px rgba(0,0,0,0.45)',
                    }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      loading="eager"
                      style={{ filter: 'contrast(1.1) saturate(1.05)' }}
                    />
                    <div
                      className="absolute inset-0"
                      aria-hidden="true"
                      style={{ background: 'linear-gradient(160deg, rgba(14,76,92,0.28) 0%, transparent 55%, rgba(7,20,26,0.45) 100%)' }}
                    />
                    <span
                      className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.26em] font-bold px-3 py-1.5 rounded-full"
                      style={{
                        color: C.mintHi,
                        border: '1px solid rgba(159,216,203,0.6)',
                        backgroundColor: 'rgba(7,20,26,0.62)',
                        textShadow: '0 0 10px rgba(159,216,203,0.7)',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      {s.tag}
                    </span>
                  </figure>
                  <div>
                    <span className={`${display.className} block text-2xl italic mb-3`} style={NEON_TEXT}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`${display.className} font-semibold text-2xl md:text-4xl leading-[1.08] mb-4`} style={{ color: C.bone }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-base font-light leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NeonDivider />

      {/* ── Sobre la clínica ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.night2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>La clínica</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.bone }}>
              En Molina, con la luz puesta en el paciente
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-5 max-w-xl" style={{ color: C.muted }}>
              Clínica Dental San José atiende en Quechereguas 1667, a pasos
              del centro de Molina. Es una clínica de comuna: te recibe el
              equipo de siempre, te explican el diagnóstico sin vueltas y el
              presupuesto va por escrito antes de empezar.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl" style={{ color: C.muted }}>
              Están recién partiendo en Google — {BIZ.reviews} reseñas y
              subiendo — y en Instagram ya juntan {BIZ.instagramFollowers}{' '}
              seguidores en @{BIZ.instagram}. Lo que más se valora: la
              cercanía, la puntualidad y que contestan el WhatsApp.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-colors ${FOCUS}`}
                style={{ color: C.mint, textDecorationColor: 'rgba(159,216,203,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-colors ${FOCUS}`}
                style={{ color: C.mint, textDecorationColor: 'rgba(159,216,203,0.4)' }}
              >
                @{BIZ.instagram} en Instagram →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure
              className="relative overflow-hidden rounded-xl"
              style={{
                border: '1px solid rgba(159,216,203,0.35)',
                boxShadow: '0 0 28px rgba(159,216,203,0.12), 0 28px 64px rgba(0,0,0,0.5)',
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Ambiente de la clínica: recepción y área de atención"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                  loading="eager"
                  style={{ filter: 'contrast(1.1) saturate(1.05)' }}
                />
              </div>
              <figcaption
                className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4"
                style={{ backgroundColor: C.petrolSoft, borderTop: `1px solid ${C.line}` }}
              >
                <span className="text-sm font-bold" style={{ color: C.bone }}>
                  {BIZ.address}, {BIZ.city}
                </span>
                <span className="flex items-center gap-2 text-xs" style={{ color: C.muted }}>
                  <Stars value={5} color={C.mint} className="w-3 h-3" />
                  Atención con hora agendada
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <NeonDivider />

      {/* ── Valores de referencia: pizarra luminosa ── */}
      <section id="valores" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Valores de referencia</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.bone }}>
              La carta de valores
            </h2>
            <p className="text-sm font-light max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Tabla de muestra: los valores reales se confirman por WhatsApp
              o en la primera consulta.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div
            className="rounded-xl px-6 md:px-10 py-8 md:py-10"
            style={{
              backgroundColor: C.night2,
              border: '1px solid rgba(159,216,203,0.4)',
              boxShadow: '0 0 26px rgba(159,216,203,0.14), inset 0 0 34px rgba(159,216,203,0.06), 0 24px 60px rgba(0,0,0,0.4)',
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3" style={{ color: C.mint }}>
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: C.mint, boxShadow: '0 0 10px rgba(159,216,203,0.9)' }} aria-hidden="true" />
              Muestra · valores de ejemplo
            </p>
            <ul>
              {PRICES.map((p) => (
                <li
                  key={p.name}
                  className="flex items-baseline gap-3 md:gap-5 py-4 border-b last:border-b-0"
                  style={{ borderColor: C.lineSoft }}
                >
                  <div className="min-w-0">
                    <h3 className={`${display.className} font-semibold text-lg md:text-xl leading-snug`} style={{ color: C.bone }}>
                      {p.name}
                    </h3>
                    <p className="text-xs md:text-sm font-light" style={{ color: C.faint }}>
                      {p.desc}
                    </p>
                  </div>
                  <span className="flex-1 border-b border-dotted mx-1 -translate-y-1" style={{ borderColor: 'rgba(159,216,203,0.35)' }} aria-hidden="true" />
                  <span className={`${display.className} text-lg md:text-xl whitespace-nowrap italic`} style={NEON_TEXT}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs font-light mt-4" style={{ color: C.faint }}>
            Precios referenciales de muestra. Al publicar van los valores
            reales, convenios y formas de pago de la clínica.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${waBtn} ${FOCUS} mt-7 border`}
            style={{
              borderColor: 'rgba(159,216,203,0.6)',
              color: C.mint,
              boxShadow: 'inset 0 0 14px rgba(159,216,203,0.10)',
            }}
          >
            Consultar un valor por WhatsApp
          </a>
        </Reveal>
      </section>

      {/* ── Contacto / ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.night2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.bone }}>
              Quechereguas 1667, Molina
            </h2>
            <address className="not-italic text-sm md:text-base font-light leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <dl
              className="text-sm mb-8 rounded-xl overflow-hidden"
              style={{ border: `1px solid ${C.line}`, backgroundColor: C.night }}
            >
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay },
                { k: 'Instagram', v: `@${BIZ.instagram}` },
                { k: 'Agenda', v: 'Con hora, por WhatsApp' },
              ].map((r) => (
                <div
                  key={r.k}
                  className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b last:border-b-0"
                  style={{ borderColor: C.lineSoft }}
                >
                  <dt className="text-[10px] uppercase tracking-[0.26em] font-bold shrink-0" style={{ color: C.faint }}>
                    {r.k}
                  </dt>
                  <dd className="text-right font-bold" style={{ color: C.bone }}>
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
                className={`${waBtn} ${FOCUS}`}
                style={{
                  backgroundColor: C.mint,
                  color: C.night,
                  boxShadow: '0 0 18px rgba(159,216,203,0.4), 0 0 44px rgba(159,216,203,0.2)',
                }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} ${FOCUS} border`}
                style={{ borderColor: 'rgba(247,249,249,0.3)', color: C.bone }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden rounded-xl min-h-[320px] h-full"
              style={{
                border: '1px solid rgba(159,216,203,0.35)',
                boxShadow: '0 0 24px rgba(159,216,203,0.12)',
                backgroundColor: C.petrolSoft,
              }}
            >
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
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url(${IMG}/detalle2.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.15)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, rgba(7,20,26,0.5), rgba(14,76,92,0.55))` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.bone }}>
              Agenda tu hora{' '}
              <span style={NEON_TEXT}>sin salir de WhatsApp</span>
            </h2>
            <p className="text-sm md:text-base font-light max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(247,249,249,0.8)' }}>
              Escribe, cuentas qué necesitas y te confirmamos hora. Si es
              dolor, cuéntanos desde cuándo.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${waBtn} ${FOCUS} px-8 py-4`}
              style={{
                backgroundColor: C.mint,
                color: C.night,
                boxShadow: '0 0 22px rgba(159,216,203,0.5), 0 0 64px rgba(159,216,203,0.28)',
              }}
            >
              Escribir a {BIZ.short}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pb-24" style={{ backgroundColor: '#050F14', color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-semibold text-xl mb-2`} style={NEON_TEXT}>
            {BIZ.name}
          </p>
          <address className="not-italic text-sm font-light leading-relaxed" style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className={`underline underline-offset-2 hover:text-white transition-colors ${FOCUS}`}>
              {BIZ.phoneDisplay}
            </a>{' '}
            ·{' '}
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:text-white transition-colors ${FOCUS}`}>
              Instagram
            </a>
          </address>
          <p className="mt-3 text-xs font-light" style={{ color: 'rgba(247,249,249,0.6)' }}>
            Sitio de ejemplo de Sitiazo: textos, precios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
