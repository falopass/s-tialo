import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_ACEITE, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  paper: '#FFFFFF',
  soft: '#F2F6F8',
  card: '#FFFFFF',
  aqua: '#00A6C4',
  aquaSoft: '#BFE9F2',
  aquaDeep: '#00758A',
  graphite: '#1C1F22',
  graphiteDeep: '#121517',
  ink: '#1C1F22',
  muted: '#5C6670',
  line: 'rgba(28,31,34,0.14)',
}

export const metadata: Metadata = {
  title: 'Lubricentro Zamono — Lavado y lubricentro en Molina',
  description:
    'Lavado y lubricentro de autos en Luis Cruz Martínez 1441, Molina. Lavado completo, encerado, limpieza de interiores y cambio de aceite. Agenda por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/bahia.webp`,
    tag: 'rápido',
    name: 'Lavado básico',
    desc: 'Exterior completo con espuma activa y secado a mano. Tu auto entra sucio y sale presentable en la misma pasada.',
  },
  {
    src: `${IMG}/espuma.webp`,
    tag: 'el pedido de siempre',
    name: 'Lavado completo',
    desc: 'Exterior a fondo, llantas, tapas de ruedas y molduras, más aspirado rápido del interior. El balance justo.',
  },
  {
    src: `${IMG}/brillo.webp`,
    tag: 'brillo de espejo',
    name: 'Encerado',
    desc: 'Capa de cera protectora que le devuelve el brillo a la pintura y ayuda a que el polvo del campo se pegue menos.',
  },
  {
    src: `${IMG}/interior.webp`,
    tag: 'por dentro también',
    name: 'Limpieza de interiores',
    desc: 'Aspirado profundo de asientos y alfombras, limpieza de tablero, puertas y vidrios por dentro.',
  },
]

const PRECIOS = [
  { name: 'Lavado básico (auto)', price: 'desde $10.000' },
  { name: 'Lavado completo (auto)', price: 'desde $15.000' },
  { name: 'Lavado camioneta / SUV', price: 'desde $18.000' },
  { name: 'Encerado', price: 'desde $12.000' },
  { name: 'Limpieza de interiores', price: 'desde $20.000' },
  { name: 'Cambio de aceite y filtro', price: 'a cotizar' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00 – 19:00' },
  { days: 'Sábado', time: '9:00 – 14:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

const TESTIMONIALS = [
  {
    text: 'Dejé la camioneta en la mañana y a la hora de almuerzo estaba lista, brillante y sin olor a químico fuerte.',
    author: 'Cliente de Molina centro',
  },
  {
    text: 'Precio justo y trabajo prolijo. Se nota que le ponen empeño a los rincones que otros ni miran.',
    author: 'Vecino de Luis Cruz Martínez',
  },
  {
    text: 'Agendé por WhatsApp, llegué y lo pasaron de una. Cero espera y el auto quedó impecable por dentro.',
    author: 'Cliente de paso por la comuna',
  },
]

function Drop({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 C12 3 5.5 10.2 5.5 14.5 C5.5 18.1 8.4 21 12 21 C15.6 21 18.5 18.1 18.5 14.5 C18.5 10.2 12 3 12 3 Z" />
      <path d="M9.2 14.2 C9.4 16.3 10.3 17.5 12 18.2" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.aquaSoft : C.aquaDeep }}
    >
      <Drop className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function ZamonoPage() {
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
          bar: 'rgba(255,255,255,0.94)',
          ink: C.graphite,
          line: C.line,
          btnBg: C.aqua,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.graphiteDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Auto cubierto de espuma en la bahía de lavado de Lubricentro Zamono"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,21,23,0.55) 0%, rgba(18,21,23,0.1) 40%, rgba(18,21,23,0.85) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: C.graphite }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.aqua} stroke={C.aqua} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Lavado · Lubricentro · Molina</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.4rem)] mb-6 text-white`}
            >
              Tu auto impecable,
              <br />
              sin perder <span style={{ color: C.aquaSoft }}>la mañana</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Lavado y lubricentro en {BIZ.address}, Molina: llegas,
              lo dejas en la bahía y sigues con tu día. Agenda tu hora
              por WhatsApp y te lo confirmamos al tiro.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.aqua, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(18,21,23,0.55)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.aqua }} aria-hidden="true" />
              llega y lava
            </span>
            <span>Cambio de aceite</span>
            <span className="hidden md:inline" style={{ color: C.aquaSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.graphite }}>
              Del polvo del camino
              <br />
              <span style={{ color: C.aquaDeep }}>al brillo parejo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra de los servicios: al publicar van los
              servicios y precios reales del lubricentro.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <li
                className="group rounded-3xl overflow-hidden border h-full"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 4px rgba(18,21,23,0.05)' }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={s.src}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm`}
                    style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: C.aquaDeep }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-2`} style={{ color: C.graphite }}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Antes y después ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>El proceso</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.graphite }}>
                Entra con polvo,
                <br />
                <span style={{ color: C.aquaDeep }}>sale con brillo</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Espuma activa que suelta la tierra y un secado a mano
                que deja la pintura pareja, sin marcas de agua.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <figure className="relative rounded-3xl overflow-hidden">
                <img
                  src={`${IMG}/espuma.webp`}
                  alt="Auto cubierto de espuma activa durante el lavado"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
                <figcaption
                  className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                  style={{ backgroundColor: 'rgba(18,21,23,0.7)', color: '#FFFFFF', backdropFilter: 'blur(4px)' }}
                >
                  01 · Espuma que afloja la tierra
                </figcaption>
              </figure>
              <figure className="relative rounded-3xl overflow-hidden">
                <img
                  src={`${IMG}/brillo.webp`}
                  alt="Carrocería limpia y brillante después del lavado y secado"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
                <figcaption
                  className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                  style={{ backgroundColor: C.aqua, color: '#FFFFFF' }}
                >
                  02 · Brillo parejo, sin marcas
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Precios</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.graphite }}>
              Precios de
              <br />
              <span style={{ color: C.aquaDeep }}>referencia</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: C.muted }}>
              Los valores de esta lista son <strong className="font-bold" style={{ color: C.ink }}>de muestra</strong>,
              para mostrar cómo se vería la carta de precios. Al publicar
              van los valores reales del lubricentro.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2"
              style={{ color: C.aquaDeep, textDecorationColor: 'rgba(0,117,138,0.35)' }}
            >
              Consultar valor exacto por WhatsApp →
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-3xl border overflow-hidden"
              style={{ borderColor: C.line, backgroundColor: C.card }}
            >
              <div
                className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
                style={{ backgroundColor: C.graphite }}
              >
                <span className={`${display.className} text-xs uppercase tracking-[0.18em] font-bold text-white`}>
                  Carta de servicios
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(0,166,196,0.25)', color: C.aquaSoft }}
                >
                  valores de muestra
                </span>
              </div>
              <ul>
                {PRECIOS.map((p, i) => (
                  <li
                    key={p.name}
                    className="flex items-baseline justify-between gap-4 px-6 md:px-8 py-4 border-b last:border-b-0"
                    style={{ borderColor: C.line, backgroundColor: i % 2 ? C.soft : C.card }}
                  >
                    <span className="text-sm md:text-base font-medium" style={{ color: C.ink }}>
                      {p.name}
                    </span>
                    <span className={`${display.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.aquaDeep }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Agenda por WhatsApp ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.graphiteDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow light>Agenda</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6 text-white`}>
                Reserva tu hora
                <br />
                <span style={{ color: C.aquaSoft }}>por WhatsApp</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-9 max-w-md" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Escríbenos el tipo de lavado y la hora que te acomoda.
                Te confirmamos en minutos y tu auto entra apenas llegas.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.aqua, color: '#FFFFFF' }}
              >
                Agendar mi lavado
              </a>
              <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {BIZ.phoneDisplay} · respondemos en horario de atención
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ol className="space-y-0">
                {[
                  { n: '1', title: 'Escríbenos', desc: 'Cuéntanos qué necesita tu auto: lavado, encerado, interiores o cambio de aceite.' },
                  { n: '2', title: 'Confirmamos hora', desc: 'Te devolvemos la hora disponible más cercana, el mismo día si se puede.' },
                  { n: '3', title: 'Llegas y listo', desc: 'Dejas el auto en la bahía, das una vuelta y lo retiras impecable.' },
                ].map((s, i) => (
                  <li key={s.n} className="flex gap-5 py-5 border-b last:border-b-0" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
                    <span
                      className={`${display.className} shrink-0 w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-sm`}
                      style={{ backgroundColor: i === 1 ? C.aqua : 'rgba(0,166,196,0.18)', color: i === 1 ? '#FFFFFF' : C.aquaSoft }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <p className={`${display.className} font-bold text-base md:text-lg text-white mb-1`}>{s.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.graphite }}>
              Lo que dicen los que ya vinieron
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
              className="text-sm font-bold underline underline-offset-4 decoration-2"
              style={{ color: C.aquaDeep, textDecorationColor: 'rgba(0,117,138,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={120 + i * 110}>
                <figure
                  className="rounded-3xl p-6 md:p-7 border"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.aquaDeep }}>
                      {t.author} · Reseña de ejemplo
                    </span>
                    <Drop className="w-4 h-4 shrink-0" color={C.aqua} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.graphite }}>
              Luis Cruz Martínez 1441,
              <br />
              <span style={{ color: C.aquaDeep }}>Molina</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.aqua} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
              Horario referencial: al publicar van los horarios reales
              del lubricentro.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.aqua, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK_ACEITE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(28,31,34,0.35)', color: C.graphite }}
              >
                Consultar cambio de aceite
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.graphiteDeep }}>
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
            <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6 text-white`}>
              Deja el auto
              <br />
              <span style={{ color: C.aquaSoft }}>como recién salido</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Agenda por WhatsApp y te confirmamos la hora más cercana.
              Lavas, sigues tu día y listo.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.aqua, color: '#FFFFFF' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.graphiteDeep, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2 flex items-center gap-3`}>
              <Drop className="w-5 h-5" color={C.aqua} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            servicios, precios, horarios y fotos son de muestra; la
            dirección, el teléfono y las {BIZ.reviews} reseñas de Google
            son los datos reales de la ficha.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
