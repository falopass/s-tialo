import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_EMERGENCIA, FACEBOOK_URL } from './content'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900' }],
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'electricista-sec-rancagua',
  title: 'Electricista certificado SEC en Rancagua · atención 24 horas',
  description:
    'Electricista certificado SEC en Rancagua: instalaciones eléctricas, certificación SEC, emergencias las 24 horas y mantención. Coordinas la visita por WhatsApp.',
})

// Negro profundo, amarillo eléctrico y líneas de circuito.
const C = {
  negro: '#0B0B0C',
  noche: '#101A2B',
  amar: '#F5D90A',
  blanco: '#F4F4F2',
  gris: '#8A8F98',
  lineDark: 'rgba(244,244,242,0.14)',
  lineLight: 'rgba(16,26,43,0.14)',
  mutedDark: 'rgba(244,244,242,0.72)',
  mutedLight: 'rgba(16,26,43,0.75)',
} as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Certificado SEC', href: '#certificado' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    t: 'Instalaciones eléctricas',
    d: 'Circuitos, tableros, enchufes e iluminación para casas y locales. Canalizaciones ordenadas y trabajo conforme a la norma.',
    icon: 'bolt',
  },
  {
    n: '02',
    t: 'Certificación SEC',
    d: 'Declaración y certificación de instalaciones ante la SEC: revisión, medición y el documento oficial que respalda el trabajo.',
    icon: 'file',
  },
  {
    n: '03',
    t: 'Emergencias 24 horas',
    d: 'Cortes, fallas y urgencias eléctricas a cualquier hora. Su ficha de Google figura abierta las 24 horas, todos los días.',
    icon: 'clock',
  },
  {
    n: '04',
    t: 'Mantención',
    d: 'Revisión de tableros, apriete de conexiones y detección de fallas antes de que se transformen en un corte.',
    icon: 'wrench',
  },
] as const

const RAZONES = [
  {
    t: 'Seguridad primero',
    d: 'Una mala conexión no se ve, pero recalienta cables y enchufes. El trabajo certificado parte por la norma eléctrica chilena.',
    icon: 'shield',
  },
  {
    t: 'Respaldo formal',
    d: 'La certificación SEC es el documento oficial de que la instalación quedó conforme. Sirve para escrituras, arriendos y seguros.',
    icon: 'file',
  },
  {
    t: 'Hecho para pasar revisión',
    d: 'Materiales, protecciones y canalizaciones según norma: una instalación hecha por un certificado está pensada para la inspección.',
    icon: 'check',
  },
] as const

const TIRA = ['CERTIFICADO SEC', '24 HORAS', 'RANCAGUA']

/** Iconos lineales del oficio: rayo, documento, reloj, herramienta, escudo y check. */
function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.28em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.amar : C.noche }}
    >
      <Icon name="bolt" className="w-3.5 h-3.5" />
      {children}
    </p>
  )
}

/** La línea de circuito del hero: trazas que se dibujan solas y un pulso que las recorre. */
function Circuito() {
  const trazas = [
    'M1200 96H928V216H760V150H560',
    'M1200 336H1000V430H824V372H692',
    'M1200 600H880V680H640V612H480',
  ]
  const pads = [
    { cx: 560, cy: 150 },
    { cx: 692, cy: 372 },
    { cx: 480, cy: 612 },
  ]
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {trazas.map((d, i) => (
        <path
          key={d}
          className={`sec-draw sec-d${i + 1}`}
          pathLength={1}
          d={d}
          stroke="rgba(138,143,152,0.3)"
          strokeWidth="2"
        />
      ))}
      {trazas.map((d, i) => (
        <path
          key={`p${d}`}
          className={`sec-pulse sec-p${i + 1}`}
          pathLength={1}
          d={d}
          stroke={C.amar}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      {pads.map((p, i) => (
        <circle
          key={`${p.cx}-${p.cy}`}
          className={`sec-pad sec-pd${i + 1}`}
          cx={p.cx}
          cy={p.cy}
          r="7"
          stroke={C.amar}
          strokeWidth="2"
        />
      ))}
      {pads.map((p, i) => (
        <circle
          key={`f${p.cx}`}
          cx={p.cx}
          cy={p.cy}
          r="2.5"
          fill={C.amar}
          className={`sec-pad sec-pd${i + 1}`}
        />
      ))}
    </svg>
  )
}

/** Media tira de la franja en bucle: las tres palabras con rayos entre medio. */
function TiraContent() {
  return (
    <div className="flex items-center shrink-0">
      {Array.from({ length: 4 }, (_, r) =>
        TIRA.map((t) => (
          <span key={`${r}-${t}`} className="flex items-center shrink-0">
            <span
              className={`${display.className} text-sm md:text-base font-bold uppercase tracking-[0.18em] px-6 md:px-8`}
            >
              {t}
            </span>
            <Icon name="bolt" className="w-4 h-4 shrink-0" />
          </span>
        )),
      )}
    </div>
  )
}

export default function ElectricistaSecRancaguaPage() {
  return (
    <main
      className={`${body.className} antialiased`}
      style={{ backgroundColor: C.negro, color: C.blanco }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <Icon name="bolt" className="w-4 h-4" />
            {BIZ.short}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(11,11,12,0.94)',
          ink: C.blanco,
          line: C.lineDark,
          btnBg: C.amar,
          btnInk: C.negro,
        }}
      />

      {/* ── Hero: corriente entrando a la ciudad ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: C.negro }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(244,244,242,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,242,0.035) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(720px 380px at 82% 10%, rgba(245,217,10,0.10), transparent 65%)',
          }}
        />
        <Circuito />
        <span
          aria-hidden="true"
          className={`${display.className} absolute -right-2 -bottom-10 md:-bottom-16 font-black leading-none select-none pointer-events-none`}
          style={{
            fontSize: 'clamp(8rem, 34vw, 24rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(244,244,242,0.10)',
          }}
        >
          SEC
        </span>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-24 w-full">
          <Reveal>
            <Eyebrow light>Rancagua · Instalaciones eléctricas</Eyebrow>
            <h1
              className={`${display.className} sec-flick font-black leading-[1.04] text-[clamp(2.2rem,8.5vw,5rem)] mb-6`}
              style={{ color: C.blanco }}
            >
              Corriente segura,
              <br />
              trabajo <span style={{ color: C.amar }}>certificado.</span>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl mb-8"
              style={{ color: C.mutedDark }}
            >
              Instalaciones eléctricas, certificación SEC y emergencias las
              24 horas en {BIZ.city}. Escribes por WhatsApp y coordinamos la
              visita.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.amar, color: C.negro }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold text-sm px-6 py-3 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(244,244,242,0.45)', color: C.blanco }}
              >
                Ver servicios
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="flex items-center gap-2">
                <Stars value={BIZ.rating} color={C.amar} size={15} />
                <span className="text-sm font-semibold" style={{ color: C.blanco }}>
                  {BIZ.rating.toFixed(1)} en Google · {BIZ.reviews} opiniones
                </span>
              </span>
              <span
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: C.amar }}
              >
                <Icon name="clock" className="w-4 h-4" />
                {BIZ.hours}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja en bucle ── */}
      <section
        aria-hidden="true"
        className="overflow-hidden border-y-2 py-3"
        style={{ backgroundColor: C.amar, borderColor: C.negro, color: C.negro }}
      >
        <div className="sec-tira flex w-max">
          <TiraContent />
          <TiraContent />
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Servicios</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2
                className={`${display.className} font-black text-3xl md:text-5xl leading-[1.08]`}
                style={{ color: C.blanco }}
              >
                Del tablero
                <br />
                <span style={{ color: C.amar }}>al último enchufe</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedDark }}>
                Esto es una muestra de los servicios: al publicar van los
                trabajos y alcances reales del electricista.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <article
                  className="relative h-full p-6 md:p-7 border"
                  style={{
                    borderColor: 'rgba(138,143,152,0.35)',
                    backgroundColor: 'rgba(11,11,12,0.55)',
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="svc-edge pointer-events-none absolute inset-0 border"
                    style={{
                      borderColor: C.amar,
                      boxShadow:
                        '0 0 22px rgba(245,217,10,0.14), inset 0 0 22px rgba(245,217,10,0.05)',
                    }}
                  />
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span
                      className="w-11 h-11 flex items-center justify-center border"
                      style={{ borderColor: 'rgba(245,217,10,0.55)', color: C.amar }}
                    >
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span
                      className={`${display.className} text-xs font-bold`}
                      style={{ color: C.gris }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h3
                    className={`${display.className} font-bold text-lg md:text-xl mb-2`}
                    style={{ color: C.blanco }}
                  >
                    {s.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.mutedDark }}>
                    {s.d}
                  </p>
                  {s.icon === 'clock' && (
                    <a
                      href={WA_EMERGENCIA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block mt-4 text-sm font-bold underline underline-offset-4 decoration-2 hover:opacity-80 ${focusRing} tap-44`}
                      style={{ color: C.amar }}
                    >
                      Es una urgencia →
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué certificado ── */}
      <section id="certificado" className="scroll-mt-20" style={{ backgroundColor: C.blanco, color: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Por qué certificado</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-black text-3xl md:text-5xl leading-[1.08]`}>
                La diferencia entre
                <br />
                <span style={{ color: '#8A7300' }}>«anda» y «anda bien»</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedLight }}>
                En Google acumula {BIZ.rating.toFixed(1)} estrellas con{' '}
                {BIZ.reviews} opiniones reales.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {RAZONES.map((r, i) => (
              <Reveal key={r.t} delay={i * 100}>
                <article
                  className="h-full p-6 md:p-7 border-2"
                  style={{ borderColor: C.noche, backgroundColor: '#FFFFFF' }}
                >
                  <span
                    className="w-11 h-11 mb-5 flex items-center justify-center"
                    style={{ backgroundColor: C.amar, color: C.negro }}
                  >
                    <Icon name={r.icon} className="w-5 h-5" />
                  </span>
                  <h3 className={`${display.className} font-bold text-base md:text-lg mb-2`}>
                    {r.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.mutedLight }}>
                    {r.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cobertura ── */}
      <section id="cobertura" className="scroll-mt-20 border-t" style={{ backgroundColor: C.negro, borderColor: C.lineDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cobertura</Eyebrow>
            <h2
              className={`${display.className} font-black text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`}
              style={{ color: C.blanco }}
            >
              {BIZ.city},
              <br />
              <span style={{ color: C.amar }}>a cualquier hora</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                k: BIZ.city,
                d: 'Ciudad base del servicio: visitas a domicilios y locales de la comuna.',
              },
              {
                k: '24 horas',
                d: 'Su ficha de Google figura abierta las 24 horas, todos los días de la semana.',
              },
              {
                k: 'WhatsApp',
                d: 'Sin dirección publicada: agenda, fotos de la falla y coordinación de la visita, todo por WhatsApp.',
              },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 100}>
                <div className="h-full border-t-2 pt-5" style={{ borderColor: C.amar }}>
                  <p
                    className={`${display.className} font-black text-2xl md:text-3xl mb-3`}
                    style={{ color: C.blanco }}
                  >
                    {b.k}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: C.mutedDark }}>
                    {b.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.amar, color: C.negro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Icon name="bolt" className="w-8 h-8 mx-auto mb-5" />
            <h2 className={`${display.className} font-black text-[clamp(1.9rem,6.5vw,3.8rem)] leading-[1.05] mb-5`}>
              ¿Necesitas
              <br />
              un electricista?
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed font-medium">
              Escríbenos por WhatsApp, cuéntanos qué pasa y coordinamos la
              visita en {BIZ.city}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.negro, color: C.amar }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-bold text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: C.negro, color: C.negro }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.negro, color: C.blanco }}>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-bold text-lg md:text-xl mb-1.5 flex items-center gap-2`}>
                <Icon name="bolt" className="w-4 h-4" />
                {BIZ.name}
              </p>
              <p className="text-sm" style={{ color: 'rgba(244,244,242,0.62)' }}>
                {BIZ.city}, {BIZ.region} · {BIZ.hours}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,244,242,0.62)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                  {l.label}
                </a>
              ))}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-white transition-colors ${focusRing} tap-44`}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed"
            style={{ color: 'rgba(244,244,242,0.75)' }}
          >
            Mockup preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`}
              style={{ color: C.blanco }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name}: así se vería tu sitio. Datos reales de su ficha
            de Google; textos de muestra.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`}
              style={{ color: C.amar }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />

      <style>{`
        .sec-draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: sec-draw 1.7s cubic-bezier(.4,0,.2,1) forwards; }
        .sec-d2 { animation-delay: .4s; }
        .sec-d3 { animation-delay: .8s; }
        @keyframes sec-draw { to { stroke-dashoffset: 0; } }
        .sec-pulse { stroke-dasharray: .055 .945; animation: sec-pulse 4.2s linear infinite; }
        .sec-p2 { animation-delay: 1.4s; }
        .sec-p3 { animation-delay: 2.8s; }
        @keyframes sec-pulse { to { stroke-dashoffset: -1; } }
        .sec-pad { opacity: 0; animation: sec-pad .6s ease-out 1.8s forwards; }
        .sec-pd2 { animation-delay: 2.2s; }
        .sec-pd3 { animation-delay: 2.6s; }
        @keyframes sec-pad { to { opacity: 1; } }
        .sec-flick { animation: sec-flick 1.1s linear .15s both; }
        @keyframes sec-flick { 0% { opacity: 0; } 13% { opacity: 0; } 17% { opacity: 1; } 24% { opacity: .28; } 33% { opacity: 1; } 44% { opacity: .4; } 54% { opacity: 1; } 100% { opacity: 1; } }
        .sec-tira { animation: sec-tira 22s linear infinite; }
        @keyframes sec-tira { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .svc-edge { opacity: 1; }
        @supports (animation-timeline: view()) {
          .svc-edge { opacity: 0; animation: svc-edge linear both; animation-timeline: view(); animation-range: entry; }
        }
        @keyframes svc-edge { to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .sec-draw, .sec-d2, .sec-d3 { animation: none; stroke-dashoffset: 0; }
          .sec-pulse, .sec-p2, .sec-p3 { animation: none; opacity: 0; }
          .sec-pad, .sec-pd2, .sec-pd3 { animation: none; opacity: 1; }
          .sec-flick { animation: none; }
          .sec-tira { animation: none; }
          .svc-edge { animation: none; opacity: 1; }
        }
      `}</style>
    </main>
  )
}
