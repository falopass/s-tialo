import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_TORTA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' },
    { path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF5E9',
  soft: '#F3E8D2',
  card: '#FFFDF7',
  choco: '#2E1C0E',
  chocoDeep: '#211204',
  gold: '#D59A33',
  goldSoft: '#EFD8A8',
  berry: '#A33B44',
  ink: '#3B2A1B',
  muted: '#65523F',
  goldText: '#8A5A12',
  line: 'rgba(59,42,27,0.16)',
}

export const metadata: Metadata = {
  title: 'Panadería Bravo — Pan recién horneado en Molina',
  description:
    'Panadería y pastelería en Avenida Pte. 2123, Molina. Pan amasado, marraquetas, masas dulces, café y tortas por encargo.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Del horno', href: '#horno' },
  { label: 'Tortas por encargo', href: '#tortas' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const DEL_HORNO = [
  {
    src: `${IMG}/panes.webp`,
    tag: 'el de todos los días',
    name: 'Pan amasado y marraquetas',
    desc: 'El pan de la casa: amasado de campo, marraqueta y hallulla, caliente desde primera hora.',
  },
  {
    src: `${IMG}/dulces.webp`,
    tag: 'para la once',
    name: 'Masas dulces',
    desc: 'Berlines con manjar, alfajores con coco y hojarascas: el dulce que acompaña el té.',
  },
  {
    src: `${IMG}/torta.webp`,
    tag: 'por encargo',
    name: 'Tortas para celebrar',
    desc: 'De crema, nuez o fruta, para cumpleaños y ocasiones especiales. Se encargan con anticipación.',
  },
  {
    src: `${IMG}/cafe.webp`,
    tag: 'pa’ quedarse',
    name: 'Café con pastelito',
    desc: 'Café recién pasado y algo rico al lado, para sentarse un rato a mirar la calle.',
  },
]

const TESTIMONIALS = [
  {
    text: 'El pan amasado de acá es otra cosa: llega tibio a la mesa y no sobra nada para el día siguiente.',
    author: 'Vecina del centro',
  },
  {
    text: 'Encargué la torta del cumpleaños de mi hija y quedó preciosa, con la fruta fresca encima.',
    author: 'Mamá de Molina',
  },
  {
    text: 'Paso todas las mañanas por la marraqueta. Atención de barrio, de las que ya quedan pocas.',
    author: 'Cliente de siempre',
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: 'Desde la mañana hasta la tarde' },
  { days: 'Domingo y festivos', time: 'Horario de mañana' },
]

function Wheat({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21 V9" />
      <path d="M12 9 C12 6 10 4.5 7.5 4.5 C7.5 7.5 9.5 9 12 9 Z" />
      <path d="M12 9 C12 6 14 4.5 16.5 4.5 C16.5 7.5 14.5 9 12 9 Z" />
      <path d="M12 14 C12 11 10 9.5 7.5 9.5 C7.5 12.5 9.5 14 12 14 Z" />
      <path d="M12 14 C12 11 14 9.5 16.5 9.5 C16.5 12.5 14.5 14 12 14 Z" />
      <path d="M12 19 C12 16 10 14.5 7.5 14.5 C7.5 17.5 9.5 19 12 19 Z" />
      <path d="M12 19 C12 16 14 14.5 16.5 14.5 C16.5 17.5 14.5 19 12 19 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.goldSoft : C.berry }}
    >
      <Wheat className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function PanaderiaBravoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      {/* fondo oscuro del hero bajo el nav transparente (el wrapper no ocupa alto) */}
      <div style={{ backgroundColor: C.chocoDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(251,245,233,0.94)',
            ink: C.chocoDeep,
            line: C.line,
            btnBg: C.berry,
            btnInk: '#FBF5E9',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.chocoDeep }}>
        <img
          loading="eager"
          src={`${IMG}/hero.webp`}
          alt="Interior de Panadería Bravo: vitrina con panes y masas dulces recién horneadas"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(33,18,4,0.6) 0%, rgba(33,18,4,0.45) 38%, rgba(33,18,4,0.9) 100%)',
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
              style={{ backgroundColor: 'rgba(251,245,233,0.95)', color: C.chocoDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.gold} stroke={C.gold} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Panadería · Pastelería · Molina</Eyebrow>
            <h1
              className={`${display.className} font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.8rem,10vw,6rem)] mb-6`}
              style={{ color: '#FBF5E9' }}
            >
              El pan calientito
              <br />
              <em className="font-bold" style={{ color: C.goldSoft }}>sale de madrugada</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: '#FBF5E9' }}>
              Panadería y pastelería de barrio en Avenida Pte. 2123,
              Molina: pan amasado, marraquetas, masas dulces y tortas
              por encargo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.gold, color: '#211204' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#horno"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(251,245,233,0.55)', color: '#FBF5E9' }}
              >
                Ver lo del horno
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(251,245,233,0.22)', backgroundColor: 'rgba(33,18,4,0.8)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 md:pb-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,245,233,0.92)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.gold }} aria-hidden="true" />
              recién horneado
            </span>
            <span>Tortas por encargo</span>
            <span className="hidden md:inline" style={{ color: C.goldSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Lo que sale del horno ── */}
      <section id="horno" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Lo que sale del horno</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.choco }}>
              Del horno
              <br />
              <em className="font-bold" style={{ color: C.goldText }}>a tu mesa</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra de la vitrina: al publicar van los
              productos y precios reales de la panadería.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {DEL_HORNO.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <li
                className="group rounded-3xl overflow-hidden border h-full"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 4px rgba(33,18,4,0.05)' }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    loading="eager"
                    src={p.src}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs font-bold italic px-3.5 py-1.5 rounded-full shadow-sm`}
                    style={{ backgroundColor: 'rgba(251,245,233,0.95)', color: C.berry }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <h3 className={`${display.className} font-extrabold text-xl md:text-2xl mb-2`} style={{ color: C.choco }}>
                    {p.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 md:mt-16">
            {['Horneamos todos los días', 'Manjar, crema y fruta', 'Café para llevar'].map((chip) => (
              <span key={chip} className="flex items-center gap-2.5 text-sm font-bold" style={{ color: C.berry }}>
                <Wheat className="w-4 h-4" />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Encarga tu torta ── */}
      <section id="tortas" className="scroll-mt-20" style={{ backgroundColor: C.choco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden rotate-[-1.2deg]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
              <img
                loading="eager"
                src={`${IMG}/torta.webp`}
                alt="Torta de crema y nuez con fruta fresca de Panadería Bravo"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow light>Encargos</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#FBF5E9' }}>
              Tu torta,
              <br />
              <em className="font-bold" style={{ color: C.goldSoft }}>hecha a pedido</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(251,245,233,0.88)' }}>
              Para cumpleaños, celebraciones y esas fechas que no se
              pueden olvidar: cuéntanos para cuántas personas es y qué
              sabor te tinca, y la preparamos con anticipación.
            </p>
            <ul className="space-y-3 mb-9">
              {['Cumpleaños, aniversarios y celebraciones', 'Crema, manjar, nuez y fruta de temporada', 'Encargos con días de anticipación'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(251,245,233,0.88)' }}>
                  <Wheat className="w-4 h-4 shrink-0" color={C.gold} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_TORTA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.gold, color: '#211204' }}
            >
              Encargar mi torta
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Galería ── */}
      <section id="galeria" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Galería</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.choco }}>
              La panadería, en fotos
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Una muestra de lo que se ve y se huele al entrar a
              la panadería.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-6 md:auto-rows-[215px] lg:auto-rows-[250px] gap-3">
            <figure className="col-span-2 md:col-span-4 md:row-span-2 rounded-3xl overflow-hidden">
              <img loading="eager" src={`${IMG}/hero.webp`} alt="Interior de la panadería con vitrina de panes" className="w-full h-full object-cover aspect-[16/10] md:aspect-auto" />
            </figure>
            <figure className="rounded-3xl overflow-hidden">
              <img loading="eager" src={`${IMG}/panes.webp`} alt="Pan amasado y marraquetas recién horneadas" className="w-full h-full object-cover aspect-square md:aspect-auto" />
            </figure>
            <figure className="rounded-3xl overflow-hidden">
              <img loading="eager" src={`${IMG}/cafe.webp`} alt="Café humeante con pastelito en la mesa de la panadería" className="w-full h-full object-cover aspect-square md:aspect-auto" />
            </figure>
            <figure className="col-span-2 md:col-span-3 rounded-3xl overflow-hidden">
              <img loading="eager" src={`${IMG}/dulces.webp`} alt="Berlines con manjar, alfajores y hojarascas" className="w-full h-full object-cover aspect-[16/9] md:aspect-auto" />
            </figure>
            <figure className="col-span-2 md:col-span-3 rounded-3xl overflow-hidden">
              <img loading="eager" src={`${IMG}/torta.webp`} alt="Torta de celebración con crema y fruta" className="w-full h-full object-cover aspect-[16/9] md:aspect-auto" />
            </figure>
          </div>
        </Reveal>
      </section>

      {/* ── Opiniones ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.choco }}>
                Lo que dicen los vecinos
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                Panadería Bravo acumula {BIZ.reviews} reseñas en su ficha
                de Google. Estos textos son de muestra: al publicar van
                las reseñas reales.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2"
                style={{ color: C.berry, textDecorationColor: 'rgba(163,59,68,0.35)' }}
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
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.berry }}>
                        {t.author} · Reseña de ejemplo
                      </span>
                      <Wheat className="w-4 h-4 shrink-0" color={C.gold} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.choco }}>
              Avenida Pte. 2123,
              <br />
              <em className="font-bold" style={{ color: C.berry }}>Molina</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
              de la panadería.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.berry, color: '#FBF5E9' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(59,42,27,0.35)', color: C.choco }}
              >
                Escribir por WhatsApp
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.chocoDeep }}>
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
            <h2 className={`${display.className} font-black text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#FBF5E9' }}>
              Te esperamos
              <br />
              <em className="font-bold" style={{ color: C.goldSoft }}>con pan caliente</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(251,245,233,0.9)' }}>
              Escríbenos por WhatsApp para encargar tu torta o reservar
              el pan del fin de semana. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.gold, color: '#211204' }}
            >
              Pedir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.chocoDeep, color: '#FBF5E9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <p className={`${display.className} font-extrabold text-xl mb-1 flex items-center gap-3`}>
            <Wheat className="w-5 h-5" color={C.gold} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,245,233,0.8)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,245,233,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-4 text-xs leading-relaxed" style={{ color: 'rgba(251,245,233,0.8)' }}>
            Sitio de ejemplo de Sitiazo: textos, productos, horarios y fotos son de muestra.
          </p>
        </div>
        {/* aviso de Sitiazo en el flujo (no flotante) para que no tape contenido; pb deja libre la burbuja de WhatsApp */}
        <div className="px-4 pb-20 [&>div]:static [&>div]:max-w-full [&>div]:w-fit [&>div]:mx-auto [&>div]:rounded-2xl [&>div]:bg-[#0A0A0A]">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
