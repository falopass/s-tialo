import type { Metadata } from 'next'
import { demoMetadata } from '../meta'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Stars, FaqList } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_CUMPLE,
  MAPS_URL,
  MAPS_EMBED,
  HOURS,
  IMG,
} from './content'
import { Nav, WhatsAppFab, Reveal } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
  display: 'swap',
})

const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  display: 'swap',
})

const C = {
  crema: '#FFF8EF',
  ink: '#38175E',
  inkDeep: '#2A0F4C',
  violet: '#6D28D9',
  fucsia: '#D61F7F',
  amarillo: '#FFC93C',
  lima: '#84CC16',
  muted: '#5D4A75',
  line: 'rgba(56,23,94,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'kid-mania',
  title: 'Kid Mania — Cumpleaños y entretención infantil en Talca',
  description:
    'Centro de entretención infantil en Talca: juegos inflables, decoración temática y mesa dulce para cumpleaños. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const ESPACIO = [
  {
    src: 'basquetbol',
    alt: 'Juego inflable de básquetbol dentro de Kid Mania, Talca',
    title: 'Juegos inflables',
    text: 'Inflables y juegos de distinto porte para que los niños y niñas no paren de moverse.',
  },
  {
    src: 'salon-mesas',
    alt: 'Salón techado de Kid Mania con mesas de cumpleaños sobre pasto sintético',
    title: 'Espacio techado con mesas',
    text: 'El cumpleaños se celebra en un recinto cubierto, con mesas para la familia y los invitados.',
  },
  {
    src: 'mesa-frozen',
    alt: 'Mesa de cumpleaños con decoración temática en Kid Mania',
    title: 'Decoración temática',
    text: 'Mesas ambientadas con la temática de tu elección, como se ve en las fotos del local.',
  },
]

const CUMPLE_INCLUYE = [
  'Juegos inflables para todas las edades',
  'Animación y personajes a pedido',
  'Mesa dulce y decoración temática',
  'Arco de globos y carrito de dulces',
  'Espacio techado, llueva o truene',
]

const GALERIA = [
  { src: 'inflable-tunel', alt: 'Inflable túnel de colores en Kid Mania' },
  { src: 'carrito-globos', alt: 'Arco de globos y carrito de dulces en Kid Mania' },
  { src: 'mesa-dulce', alt: 'Mesa dulce decorada para cumpleaños en Kid Mania' },
  { src: 'salon-mesas', alt: 'Vista del salón techado con mesas de Kid Mania' },
]

const REVIEWS = [
  {
    text: 'Excelente local para hacer el cumpleaños de tu hijo. Atención excelente y cómodas instalaciones. 100% recomendable.',
    author: 'Lorena Aguilera',
    stars: 5,
  },
  {
    text: 'Maravilloso lugar.',
    author: 'Miguel Oyarce',
    stars: 5,
  },
  {
    text: 'Muy buen lugar para realizar eventos.',
    author: 'Patricia Ríos',
    stars: 4,
  },
]

const FAQS = [
  {
    q: '¿Cómo reservo un cumpleaños?',
    a: 'Escríbenos por WhatsApp con la fecha y la cantidad de invitados. Te contamos las opciones y confirmamos la reserva.',
  },
  {
    q: '¿Qué incluye el cumpleaños?',
    a: 'Los juegos inflables, el espacio techado con mesas y la decoración son parte del servicio; los detalles de cada paquete se confirman al reservar.',
  },
  {
    q: '¿Atienden entre semana?',
    a: `Sí. De lunes a viernes atendemos de ${HOURS[0].time} y fines de semana de ${HOURS[1].time}.`,
  },
  {
    q: '¿Dónde están ubicados?',
    a: `En ${BIZ.address}, ${BIZ.city}. Te compartimos la ubicación exacta por WhatsApp al reservar.`,
  },
]

function Balloon({ color, delay }: { color: string; delay: number }) {
  return (
    <span
      className="w-9 h-11 md:w-11 md:h-14 rounded-[50%] shadow-lg"
      style={{ backgroundColor: color, transform: `rotate(${delay % 2 === 0 ? -7 : 6}deg)` }}
      aria-hidden="true"
    />
  )
}

export default function KidMania() {
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
          alt="Interior de Kid Mania en Talca: juegos inflables, mesas de cumpleaños y pasto sintético"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(42,15,76,0.55) 0%, rgba(42,15,76,0.35) 40%, rgba(42,15,76,0.92) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8 flex gap-3" aria-hidden="true">
          <Balloon color={C.amarillo} delay={0} />
          <Balloon color={C.fucsia} delay={1} />
          <Balloon color={C.lima} delay={2} />
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-32">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3" style={{ color: C.amarillo }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
              Cumpleaños infantiles · Talca
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.01em] text-[clamp(3rem,11vw,7rem)] mb-5`}
              style={{ color: '#FFFFFF' }}
            >
              Kid Mania
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-3" style={{ color: 'rgba(255,248,239,0.9)' }}>
              Juegos inflables, animación y decoración temática: el
              cumpleaños de tu hijo, listo en un solo lugar.
            </p>
            <p className="flex items-center gap-2 text-sm mb-9" style={{ color: C.amarillo }}>
              <Stars value={4.7} color={C.amarillo} />
              <span style={{ color: 'rgba(255,248,239,0.85)' }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_CUMPLE}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.fucsia, color: '#FFFFFF' }}
              >
                Reservar cumpleaños
              </a>
              <a
                href="#lugar"
                className="font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(255,248,239,0.5)', color: '#FFFFFF' }}
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
          <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.fucsia }}>
            El lugar
          </p>
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight mb-4`}>
            Un recinto pensado para jugar
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            En {BIZ.address}, {BIZ.city}: un espacio techado donde los
            inflables, las mesas y la decoración ya están listos.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ESPACIO.map((e, i) => (
            <Reveal key={e.src} delay={i * 120}>
              <li
                className="group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(42,15,76,0.45)] h-full"
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
                  <h3 className={`${display.className} font-bold text-xl mb-2`}>{e.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {e.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Cumpleaños ── */}
      <section id="cumpleanos" className="scroll-mt-20" style={{ backgroundColor: C.inkDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden rotate-[1.5deg]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}>
              <img
                src={`${IMG}/carrito-globos.webp`}
                alt="Arco de globos y carrito de dulces para cumpleaños en Kid Mania"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.amarillo }}>
              Cumpleaños
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight mb-6`} style={{ color: '#FFFFFF' }}>
              La fiesta lista,
              <br />
              sin que armes nada
            </h2>
            <ul className="space-y-3 mb-9">
              {CUMPLE_INCLUYE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(255,248,239,0.88)' }}>
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_CUMPLE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95"
              style={{ backgroundColor: C.amarillo, color: C.inkDeep }}
            >
              Cotizar mi cumpleaños
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Galería ── */}
      <section id="galeria" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.fucsia }}>
            Galería
          </p>
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight mb-10`}>
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
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div
                className="rounded-2xl p-7 md:p-9"
                style={{ backgroundColor: 'rgba(255,248,239,0.06)', border: '1px solid rgba(255,248,239,0.16)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.22em] mb-4 font-semibold" style={{ color: C.amarillo }}>
                  En Google Maps
                </p>
                <p className={`${display.className} font-extrabold text-6xl md:text-7xl leading-none mb-3`} style={{ color: '#FFFFFF' }}>
                  {BIZ.rating}
                </p>
                <Stars value={4.7} color={C.amarillo} className="w-5 h-5" />
                <p className="text-sm mt-3" style={{ color: 'rgba(255,248,239,0.75)' }}>
                  {BIZ.reviews} reseñas de familias
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2"
                  style={{ color: C.amarillo, textDecorationColor: 'rgba(255,201,60,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={100}>
                <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-tight`} style={{ color: '#FFFFFF' }}>
                  Lo que dicen las familias
                </h2>
                <p className="text-sm mt-2 mb-2" style={{ color: 'rgba(255,248,239,0.6)' }}>
                  Reseñas reales de Google Maps.
                </p>
              </Reveal>
              {REVIEWS.map((t, i) => (
                <Reveal key={t.author} delay={200 + i * 120}>
                  <figure
                    className="rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: 'rgba(255,248,239,0.06)', border: '1px solid rgba(255,248,239,0.16)' }}
                  >
                    <Stars value={t.stars} color={C.amarillo} className="w-4 h-4" />
                    <blockquote className="text-sm md:text-base leading-relaxed mt-3 mb-4" style={{ color: 'rgba(255,248,239,0.9)' }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-[0.15em]" style={{ color: C.amarillo }}>
                      {t.author} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Horarios + Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.fucsia }}>
              Horarios y ubicación
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight mb-6`}>
              En pleno centro
              <br />
              de Talca
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <ul className="space-y-1.5 mb-6 text-sm md:text-base" style={{ color: C.muted }}>
              {HOURS.map((h) => (
                <li key={h.days} className="flex gap-2">
                  <span className="font-semibold" style={{ color: C.ink }}>{h.days}:</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.violet, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors"
                style={{ borderColor: C.line, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-2xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}
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
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight mb-10`}>
            Preguntas frecuentes
          </h2>
        </Reveal>
        <FaqList
          items={FAQS.map((f) => ({ q: f.q, a: f.a }))}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.crema, plusInk: C.fucsia }}
        />
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.inkDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(42,15,76,0.82) 0%, rgba(42,15,76,0.7) 50%, rgba(42,15,76,0.85) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-36 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-extrabold text-[clamp(2.2rem,7vw,4.5rem)] leading-[1.02] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              ¿El próximo cumpleaños
              <br />
              <span style={{ color: C.amarillo }}>en Kid Mania?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(255,248,239,0.85)' }}>
              Escríbenos por WhatsApp con la fecha y te contamos todo lo que
              incluye.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_CUMPLE}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-8 py-3.5 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.fucsia, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-3.5 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(255,248,239,0.5)', color: '#FFFFFF' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.inkDeep, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,248,239,0.7)' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2" style={{ color: '#FFFFFF' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,248,239,0.7)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,248,239,0.16)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed"
            style={{ color: 'rgba(255,248,239,0.8)' }}
          >
            Mockup preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
              style={{ color: '#FFFFFF' }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
              style={{ color: '#FFFFFF' }}
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
