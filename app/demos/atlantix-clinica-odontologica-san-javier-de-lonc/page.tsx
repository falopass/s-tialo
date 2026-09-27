import type { Metadata } from 'next'
import { Prata, Mulish } from 'next/font/google'
import { DemoBand, Motif } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_EVAL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Prata({
  subsets: ['latin'],
  weight: '400',
})
const body = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const C = {
  night: '#1B2A41',
  nightDeep: '#131F32',
  sand: '#E8DCC8',
  sandSoft: '#F6F1E6',
  terra: '#C1663F',
  terraSoft: '#E4B08F',
  white: '#FCFAF4',
  muted: '#5E6B7E',
  lineLight: 'rgba(27,42,65,0.14)',
  lineDark: 'rgba(232,220,200,0.22)',
}

export const metadata: Metadata = {
  title: 'Atlantix Clínica Odontológica — Dentista en San Javier de Loncomilla',
  description:
    'Clínica dental en Sgto. Aldea 2610, San Javier de Loncomilla, Maule. Limpieza, restauraciones, ortodoncia y evaluación. Agenda por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Valores', href: '#precios' },
  { label: 'Ubicación', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle3.webp`,
    num: '01',
    tag: 'ortodoncia',
    name: 'Ortodoncia y alineadores',
    desc: 'Brackets y alineadores transparentes para ordenar tu sonrisa, con control de avance en cada visita.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    num: '02',
    tag: 'estética y restauración',
    name: 'Limpieza y restauraciones',
    desc: 'Limpieza profesional, tapaduras y rehabilitación del color y la forma de tus piezas dentales.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    num: '03',
    tag: 'atención general',
    name: 'Diagnóstico y urgencias',
    desc: 'Evaluación completa, plan de tratamiento claro y alivio del dolor en un box tranquilo.',
  },
]

const PRECIOS = [
  { name: 'Evaluación y diagnóstico', desc: 'Revisión completa y plan de tratamiento', price: 'desde $20.000' },
  { name: 'Limpieza dental profesional', desc: 'Destartraje y pulido', price: 'desde $35.000' },
  { name: 'Tapadura / restauración', desc: 'Por pieza, según complejidad', price: 'desde $45.000' },
  { name: 'Exodoncia simple', desc: 'Extracción de pieza comprometida', price: 'desde $40.000' },
  { name: 'Control de ortodoncia', desc: 'Visita de avance mensual', price: 'desde $30.000' },
  { name: 'Blanqueamiento dental', desc: 'En clínica o con kit domiciliario', price: 'a consultar' },
]

const OPINIONES = [
  {
    text: 'Me atendieron con una calma que no esperaba: me explicaron cada paso antes de empezar y salí tranquila.',
    author: 'Paciente de San Javier',
  },
  {
    text: 'Agendé por WhatsApp, me confirmaron altiro y la limpieza fue impecable. Se nota que les importa el detalle.',
    author: 'Paciente de Loncomilla',
  },
  {
    text: 'Mi hijo partió con brackets aquí y cada control ha sido puntual y claro. Cero sustos con los valores.',
    author: 'Mamá de paciente',
  },
]

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: dark ? C.terraSoft : C.terra }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

export default function AtlantixPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.sandSoft, color: C.night }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,230,0.94)',
          ink: C.night,
          line: C.lineLight,
          btnBg: C.terra,
          btnInk: '#FCFAF4',
        }}
      />

      {/* ── Hero tipográfico (sin foto) ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col overflow-hidden"
        style={{ backgroundColor: C.night }}
      >
        <div
          className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: C.sand, opacity: 0.05 }}
          aria-hidden="true"
        >
          <Motif motif="tooth" className="w-[320px] md:w-[540px]" />
        </div>
        <div
          className="absolute -left-24 -bottom-24 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(232,220,200,0.14)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -left-40 -bottom-40 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(232,220,200,0.08)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 pt-24 md:pt-28">
          <Reveal>
            <div
              className="flex items-baseline justify-between gap-4 border-t-2 border-b py-3 text-[10px] md:text-xs uppercase tracking-[0.22em] font-bold"
              style={{ borderTopColor: C.sand, borderBottomColor: C.lineDark, color: 'rgba(232,220,200,0.72)' }}
            >
              <span>{BIZ.rubro}</span>
              <span className="hidden md:inline">{BIZ.address}</span>
              <span>{BIZ.city}</span>
            </div>
          </Reveal>
        </div>

        <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 flex-1 flex flex-col justify-center py-12 md:py-16">
          <Reveal delay={90}>
            <h1 className={display.className}>
              <span
                className="block leading-[0.9] tracking-[-0.015em] text-[clamp(4rem,15.5vw,12.5rem)]"
                style={{ color: C.sand }}
              >
                Atlantix
              </span>
              <span
                className={`${body.className} block mt-3 md:mt-5 text-[clamp(1.6rem,4.6vw,3.6rem)] leading-[1.08] italic font-light tracking-[0.01em]`}
                style={{ color: C.terraSoft }}
              >
                sonrisas sin apuro.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid md:grid-cols-[1.25fr_1fr] gap-8 md:gap-16 items-end mt-10 md:mt-14">
              <div>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(232,220,200,0.82)' }}>
                  Clínica dental en {BIZ.address}, {BIZ.city}: atención
                  directa, presupuesto claro y horas que se agendan por
                  WhatsApp, sin esperas de más.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                    style={{ backgroundColor: C.terra, color: '#FCFAF4' }}
                  >
                    <WaIcon />
                    Agendar mi hora
                  </a>
                  <a
                    href="#servicios"
                    className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                    style={{ borderColor: 'rgba(232,220,200,0.45)', color: C.sand }}
                  >
                    Ver servicios
                  </a>
                </div>
              </div>
              <dl
                className="border-t pt-5 grid grid-cols-3 gap-4"
                style={{ borderColor: C.lineDark }}
              >
                {[
                  { value: `${BIZ.reviews}`, label: 'reseñas en Google' },
                  { value: 'WhatsApp', label: 'agenda directa' },
                  { value: 'Maule', label: 'San Javier de Loncomilla' },
                ].map((s) => (
                  <div key={s.label}>
                    <dt
                      className={`${display.className} text-lg md:text-2xl leading-none mb-1.5`}
                      style={{ color: C.sand }}
                    >
                      {s.value}
                    </dt>
                    <dd className="text-[11px] md:text-xs uppercase tracking-[0.14em]" style={{ color: 'rgba(232,220,200,0.6)' }}>
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <div
          className="relative border-t"
          style={{ borderColor: C.lineDark, backgroundColor: 'rgba(19,31,50,0.6)' }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]"
            style={{ color: 'rgba(232,220,200,0.66)' }}
          >
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill={C.terraSoft} stroke={C.terraSoft} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </span>
            <span className="hidden md:inline" style={{ color: 'rgba(232,220,200,0.4)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02]`}>
              De la limpieza
              <br />
              <span style={{ color: C.terra }}>a la ortodoncia</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra del listado: al publicar van los
              servicios y prestaciones reales de la clínica.
            </p>
          </div>
        </Reveal>
        <ul className="grid md:grid-cols-3 gap-5 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 110}>
              <li
                className="group rounded-3xl overflow-hidden border h-full flex flex-col"
                style={{ backgroundColor: C.white, borderColor: C.lineLight, boxShadow: '0 2px 6px rgba(27,42,65,0.05)' }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={s.src}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-lg w-11 h-11 rounded-full flex items-center justify-center shadow-sm`}
                    style={{ backgroundColor: 'rgba(246,241,230,0.95)', color: C.terra }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold mb-2" style={{ color: C.terra }}>
                    {s.tag}
                  </p>
                  <h3 className={`${display.className} text-xl md:text-2xl leading-snug mb-2.5`}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── La clínica ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center mb-14 md:mb-20">
            <Reveal>
              <Eyebrow dark>La clínica</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.sand }}>
                Una clínica de pueblo,
                <br />
                <span style={{ color: C.terraSoft }}>con nombre propio</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(232,220,200,0.78)' }}>
                Atlantix atiende en {BIZ.address}, en pleno San Javier
                de Loncomilla: el dentista de la comuna, al alcance de
                un mensaje. Acumula {BIZ.reviews} reseñas en su ficha
                de Google.
              </p>
              <ul className="space-y-3 mb-9">
                {[
                  'Agenda y consultas directas por WhatsApp',
                  'Presupuesto claro antes de empezar cualquier tratamiento',
                  'Box tranquilo y atención sin apuro, pensada para volver',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(232,220,200,0.9)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.terra }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.sand, color: C.night }}
              >
                Ver las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-5 gap-3 md:gap-4">
                <figure className="col-span-3 rounded-3xl overflow-hidden rotate-[-1.4deg]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                  <img
                    src={`${IMG}/hero.webp`}
                    alt="Box de atención de la clínica: sillón dental azul junto a un ventanal con vista al pueblo"
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </figure>
                <figure className="col-span-2 rounded-3xl overflow-hidden self-end rotate-[1.6deg]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                  <img
                    src={`${IMG}/ambiente.webp`}
                    alt="Fachada de la clínica en la calle principal de San Javier, con cerros de fondo"
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </figure>
              </div>
            </Reveal>
          </div>

          {/* Opiniones */}
          <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.lineDark }}>
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
              <Reveal>
                <Eyebrow dark>Opiniones</Eyebrow>
                <h3 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.sand }}>
                  Lo que dicen los pacientes
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(232,220,200,0.65)' }}>
                  Atlantix acumula {BIZ.reviews} reseñas en Google Maps.
                  Estos textos son de muestra: al publicar van las
                  reseñas reales.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2"
                  style={{ color: C.terraSoft, textDecorationColor: 'rgba(228,176,143,0.35)' }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-5">
                {OPINIONES.map((t, i) => (
                  <Reveal key={i} delay={120 + i * 110}>
                    <figure
                      className="rounded-3xl p-6 md:p-7 border"
                      style={{ backgroundColor: 'rgba(246,241,230,0.06)', borderColor: C.lineDark }}
                    >
                      <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.sand }}>
                        “{t.text}”
                      </blockquote>
                      <figcaption className="flex items-center justify-between gap-3">
                        <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.terraSoft }}>
                          {t.author} · Reseña de ejemplo
                        </span>
                        <Motif motif="tooth" className="w-4 h-4 shrink-0" />
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Valores de referencia</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02]`}>
              Precios claros,
              <br />
              <span style={{ color: C.terra }}>antes de partir</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Los valores de esta tabla son de muestra: al publicar van
              los precios reales de la clínica.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border-t" style={{ borderColor: C.lineLight }}>
            {PRECIOS.map((p) => (
              <li
                key={p.name}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1.2fr_auto] gap-x-6 gap-y-1 items-baseline border-b py-5 md:py-6"
                style={{ borderColor: C.lineLight }}
              >
                <div>
                  <p className={`${display.className} text-lg md:text-2xl`}>{p.name}</p>
                  <p className="text-xs md:text-sm md:hidden" style={{ color: C.muted }}>{p.desc}</p>
                </div>
                <p className="hidden md:block text-sm" style={{ color: C.muted }}>{p.desc}</p>
                <p className={`${display.className} text-lg md:text-2xl whitespace-nowrap`} style={{ color: C.terra }}>
                  {p.price}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xs md:text-sm mt-6 max-w-2xl leading-relaxed" style={{ color: C.muted }}>
            Tabla de muestra. Los tratamientos se presupuestan después
            de la evaluación y los valores se confirman por escrito
            antes de iniciar.
          </p>
        </Reveal>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Agenda y ubicación</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`}>
              Sgto. Aldea 2610,
              <br />
              <span style={{ color: C.terra }}>San Javier</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <WaIcon className="w-4 h-4 shrink-0" />
                <span>
                  <strong className="font-bold" style={{ color: C.night }}>WhatsApp:</strong>{' '}
                  {BIZ.phoneDisplay}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.terra} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.8" fill={C.terra} />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.night }}>Instagram:</strong>{' '}
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">
                    @clinicaatlantix
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.terra} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.night }}>Horario:</strong>{' '}
                  por confirmar — agenda tu hora por WhatsApp
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_EVAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2.5 text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.terra, color: '#FCFAF4' }}
              >
                <WaIcon />
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm px-6 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(27,42,65,0.3)', color: C.night }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.lineLight, backgroundColor: C.sandSoft }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.nightDeep }}>
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          style={{ color: C.sand, opacity: 0.04 }}
          aria-hidden="true"
        >
          <span className={`${display.className} whitespace-nowrap text-[clamp(6rem,22vw,20rem)] leading-none`}>
            sonríe
          </span>
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.sand }}>
              Tu próxima hora al dentista
              <br />
              <span style={{ color: C.terraSoft }}>parte por un mensaje</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(232,220,200,0.78)' }}>
              Escríbenos por WhatsApp para agendar tu evaluación.
              Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.terra, color: '#FCFAF4' }}
            >
              <WaIcon />
              Agendar mi hora
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.nightDeep, color: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t" style={{ borderColor: C.lineDark }}>
          <div>
            <p className={`${display.className} text-2xl mb-2 flex items-center gap-3`}>
              <Motif motif="tooth" className="w-5 h-5" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(232,220,200,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(232,220,200,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(232,220,200,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(232,220,200,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}.
            Textos, servicios, precios, horarios, reseñas y fotos son de
            muestra; el nombre, la dirección, el WhatsApp y el conteo de
            reseñas son datos públicos reales.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
