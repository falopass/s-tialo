import type { Metadata } from 'next'
import { demoMetadata } from '../meta'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Stars, FaqList } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_RESERVA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import { Nav, WhatsAppFab, Reveal } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  display: 'swap',
})

const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  display: 'swap',
})

const C = {
  crema: '#F7F3E8',
  ink: '#0F3530',
  inkDeep: '#0A2E29',
  laguna: '#0F766E',
  arena: '#E4DCC6',
  sol: '#92400E',
  muted: '#4E5F57',
  line: 'rgba(15,53,48,0.15)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'turismo-las-brujas',
  title: 'Turismo Las Brujas — Camping y piscina natural en Colbún',
  description:
    'Camping familiar en Colbún, Maule: laguna natural, quinchos, parrillas y arboleda para el día o la noche. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const ICON_PATHS: Record<string, React.ReactNode> = {
  agua: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 C12 3 5.5 10.5 5.5 14.5 a6.5 6.5 0 0 0 13 0 C18.5 10.5 12 3 12 3 Z" />
      <path d="M9 14.5 a3 3 0 0 0 3 3" />
    </g>
  ),
  parrilla: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5 h14 v3 a7 7 0 0 1 -14 0 Z" />
      <path d="M5 8.5 h14 M8 5.5 v3 M12 5.5 v3 M16 5.5 v3" />
      <path d="M7.5 15.5 L5.5 20 M16.5 15.5 L18.5 20 M12 15.5 v4" />
    </g>
  ),
  arbol: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L7 11 h2.5 L5 16.5 h5.5 V21 h3 v-4.5 H19 L14.5 11 H17 Z" />
    </g>
  ),
  ducha: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21 V8 a6 6 0 0 1 12 0 v1" />
      <path d="M14 9.5 a3.5 3.5 0 0 1 5 3.1 l0 .9" />
      <path d="M14 13.5 h6" />
      <path d="M15 16.5 v.01 M17.5 16.5 v.01 M20 16.5 v.01 M15 19.5 v.01 M17.5 19.5 v.01 M20 19.5 v.01" />
    </g>
  ),
  auto: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15 l1.5 -6 a2 2 0 0 1 2 -1.5 h9 a2 2 0 0 1 2 1.5 L20 15" />
      <path d="M3.5 15 h17 v3.5 h-2.5 a1.75 1.75 0 0 1 -3.5 0 h-5 a1.75 1.75 0 0 1 -3.5 0 H3.5 Z" />
      <path d="M7 11 h10" />
    </g>
  ),
  tienda: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 9 L6 4.5 h12 L19.5 9" />
      <path d="M4.5 9 a2.6 2.6 0 0 0 5.2 0 a2.6 2.6 0 0 0 5.1 0 a2.6 2.6 0 0 0 5.2 0" />
      <path d="M5.5 12 v8 h13 v-8" />
      <path d="M10 20 v-5 h4 v5" />
    </g>
  ),
  carpa: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 L2.5 20 h19 Z" />
      <path d="M12 12 L8 20 M12 12 l4 8" />
    </g>
  ),
  cabana: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 11 L12 4 l8.5 7" />
      <path d="M5.5 9.5 V20 h13 V9.5" />
      <path d="M9.5 20 v-5.5 h5 V20" />
    </g>
  ),
  luna: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 13.5 A7.5 7.5 0 1 1 10.5 5 a6 6 0 0 0 8.5 8.5 Z" />
    </g>
  ),
}

function AmenityIcon({ icon }: { icon: keyof typeof ICON_PATHS }) {
  return (
    <span
      className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: C.arena, color: C.laguna }}
    >
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden="true">
        {ICON_PATHS[icon]}
      </svg>
    </span>
  )
}

const LUGAR = [
  {
    src: 'laguna',
    alt: 'Laguna natural de Turismo Las Brujas en Colbún con visitantes y cerro al fondo',
    title: 'Laguna natural',
    text: 'La piscina natural del recinto, alimentada por vertientes. Según los visitantes, el agua se renueva a diario.',
  },
  {
    src: 'pozones',
    alt: 'Pozones con decks de madera entre la arboleda en Turismo Las Brujas',
    title: 'Pozones y decks',
    text: 'Sectores de agua poco profunda con plataformas de madera: los niños juegan tranquilos a la vista.',
  },
  {
    src: 'piscina-juncos',
    alt: 'Piscina natural rodeada de juncos y árboles en Turismo Las Brujas',
    title: 'Arboleda y sombra',
    text: 'Mesas bajo la sombra de los árboles para almorzar, descansar y capear el calor.',
  },
]

const AMENITIES: { icon: keyof typeof ICON_PATHS; label: string; note?: string }[] = [
  { icon: 'agua', label: 'Piscina natural' },
  { icon: 'parrilla', label: 'Quinchos y parrillas' },
  { icon: 'arbol', label: 'Mesas con sombra' },
  { icon: 'ducha', label: 'Baños y vestidores' },
  { icon: 'auto', label: 'Estacionamiento' },
  { icon: 'tienda', label: 'Negocio en el recinto' },
  { icon: 'carpa', label: 'Camping' },
  { icon: 'cabana', label: 'Cabañas', note: 'a consultar' },
]

const GALERIA = [
  { src: 'pasarela', alt: 'Pasarela de madera sobre el agua en Turismo Las Brujas' },
  { src: 'pozo-deck', alt: 'Pozo de agua natural con deck de madera en Turismo Las Brujas' },
  { src: 'laguna-totoras', alt: 'Laguna vista entre las totoras en Turismo Las Brujas' },
  { src: 'laguna', alt: 'Vista amplia de la laguna y el cerro en Turismo Las Brujas' },
]

const REVIEWS = [
  {
    text: 'Muy lindo y tranquilo; los niños se divierten en las aguas, que no son muy profundas. Hay baños, vestidores y parrillas en todos los sectores de mesa.',
    author: 'My House',
  },
  {
    text: 'Muy bello lugar y grato ambiente. Muy amables sus dueños.',
    author: 'Constanza Valdés',
  },
  {
    text: 'Muy buen lugar para descansar y pasar el calor en familia, un ambiente acogedor desde el ingreso.',
    author: 'Matías D.',
  },
]

const FAQS = [
  {
    q: '¿Cómo reservo?',
    a: 'Escríbenos por WhatsApp con la fecha y la cantidad de personas. Te confirmamos disponibilidad y valores del día o de camping.',
  },
  {
    q: '¿Puedo ir solo por el día?',
    a: 'Sí, el recinto recibe visitas de día y también camping para quedarse a dormir. Los horarios y valores se confirman al reservar.',
  },
  {
    q: '¿Hay dónde hacer asado?',
    a: 'Sí, hay quinchos y parrillas junto a los sectores de mesa con sombra. Consulta la disponibilidad de quincho al reservar.',
  },
  {
    q: '¿Dónde queda?',
    a: `En ${BIZ.address}, ${BIZ.city}, Región del Maule. Te compartimos la ubicación exacta por WhatsApp al reservar.`,
  },
]

export default function TurismoLasBrujas() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <Nav fontClass={display.className} />

      {/* ── Hero ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.inkDeep }}
      >
        <img
          src={`${IMG}/hero.webp`}
          fetchPriority="high"
          alt="Laguna natural de Turismo Las Brujas en Colbún, con decks de madera, visitantes y el cerro al fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,46,41,0.5) 0%, rgba(10,46,41,0.3) 40%, rgba(10,46,41,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-32">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3" style={{ color: C.arena }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.arena }} aria-hidden="true" />
              Camping familiar · Colbún, Maule
            </p>
            <h1
              className={`${display.className} leading-[0.98] tracking-[-0.01em] text-[clamp(2.8rem,10vw,6.5rem)] mb-5`}
              style={{ color: '#FFFFFF' }}
            >
              Turismo
              <br />
              Las Brujas
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-3" style={{ color: 'rgba(247,243,232,0.9)' }}>
              Laguna natural, quinchos y arboleda para pasar el día — o la
              noche — en familia.
            </p>
            <p className="flex items-center gap-2 text-sm mb-9" style={{ color: C.arena }}>
              <Stars value={4.4} color={C.arena} />
              <span style={{ color: 'rgba(247,243,232,0.85)' }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.laguna, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#lugar"
                className="font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(247,243,232,0.5)', color: '#FFFFFF' }}
              >
                Ver el lugar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El lugar ── */}
      <section id="lugar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.sol }}>
            El lugar
          </p>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-4`}>
            Agua, sombra y quincho
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            En el sector Las Brujas de Colbún, un camping familiar con
            laguna natural alimentada por vertientes.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LUGAR.map((e, i) => (
            <Reveal key={e.src} delay={i * 120}>
              <li
                className="group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(10,46,41,0.4)] h-full"
                style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`${IMG}/${e.src}.webp`}
                    alt={e.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} text-xl mb-2`}>{e.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {e.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.sol }}>
              Servicios
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-4`}>
              Qué encontrarás
            </h2>
            <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
              Servicios reportados por los visitantes en Google Maps;
              confirma los detalles al reservar por WhatsApp.
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.label} delay={i * 60}>
                <li className="flex flex-col gap-3">
                  <AmenityIcon icon={a.icon} />
                  <p className="text-sm font-medium" style={{ color: C.ink }}>
                    {a.label}
                    {a.note && (
                      <span
                        className="ml-2 text-[10px] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full align-middle"
                        style={{ backgroundColor: C.crema, color: C.ink }}
                      >
                        {a.note}
                      </span>
                    )}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Galería ── */}
      <section id="galeria" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.sol }}>
            Galería
          </p>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-10`}>
            Así se ve {BIZ.name}
          </h2>
        </Reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {GALERIA.map((g, i) => (
            <Reveal key={g.src} delay={i * 80}>
              <li className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={`${IMG}/${g.src}.webp`}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.inkDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div
                className="rounded-2xl p-7 md:p-9"
                style={{ backgroundColor: 'rgba(247,243,232,0.06)', border: '1px solid rgba(247,243,232,0.16)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.22em] mb-4 font-semibold" style={{ color: C.arena }}>
                  En Google Maps
                </p>
                <p className={`${display.className} text-6xl md:text-7xl leading-none mb-3`} style={{ color: '#FFFFFF' }}>
                  {BIZ.rating}
                </p>
                <Stars value={4.4} color={C.arena} className="w-5 h-5" />
                <p className="text-sm mt-3" style={{ color: 'rgba(247,243,232,0.75)' }}>
                  {BIZ.reviews} reseñas de visitantes
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.arena, textDecorationColor: 'rgba(228,220,198,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={100}>
                <h2 className={`${display.className} text-3xl md:text-4xl leading-tight`} style={{ color: '#FFFFFF' }}>
                  Lo que dicen los visitantes
                </h2>
                <p className="text-sm mt-2 mb-2" style={{ color: 'rgba(247,243,232,0.6)' }}>
                  Extractos de reseñas reales de Google Maps.
                </p>
              </Reveal>
              {REVIEWS.map((t, i) => (
                <Reveal key={t.author} delay={200 + i * 120}>
                  <figure
                    className="rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: 'rgba(247,243,232,0.06)', border: '1px solid rgba(247,243,232,0.16)' }}
                  >
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(247,243,232,0.9)' }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-[0.15em]" style={{ color: C.arena }}>
                      {t.author} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.sol }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-6`}>
              Camino a la
              <br />
              precordillera
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <p className="text-sm md:text-base mb-8" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.ink }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.ink, color: C.crema }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors tap-44"
                style={{ borderColor: C.line, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-2xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.arena }}
            >
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-10`}>
            Preguntas frecuentes
          </h2>
        </Reveal>
        <FaqList
          items={FAQS.map((f) => ({ q: f.q, a: f.a }))}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.arena, plusInk: C.sol }}
        />
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.inkDeep }}>
        <img
          src={`${IMG}/laguna.webp`}
          alt=""
          loading="lazy"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,46,41,0.8) 0%, rgba(10,46,41,0.65) 50%, rgba(10,46,41,0.85) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-36 text-center">
          <Reveal>
            <h2
              className={`${display.className} text-[clamp(2.2rem,7vw,4.5rem)] leading-[1.02] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              ¿Nos vemos junto
              <br />
              a <span style={{ color: C.arena }}>la laguna?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(247,243,232,0.85)' }}>
              Escríbenos por WhatsApp y consulta por el día, el camping o
              las cabañas.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.laguna, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-3.5 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(247,243,232,0.5)', color: '#FFFFFF' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.inkDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className={`${display.className} text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,243,232,0.7)' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.crema }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(247,243,232,0.7)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,243,232,0.16)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed"
            style={{ color: 'rgba(247,243,232,0.8)' }}
          >
            Mockup preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.crema }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.crema }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  )
}
