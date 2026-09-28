import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F6F1E4',
  soft: '#EDE4CE',
  green: '#2E4A3C',
  deep: '#1B2E24',
  mustard: '#D9A441',
  mustardSoft: '#EFDCA9',
  wood: '#8A5A33',
  ink: '#22281F',
  muted: '#57554A',
  line: 'rgba(46,74,60,0.22)',
  lineSoft: 'rgba(46,74,60,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'parrilladas-caupolican',
  title: 'Parrilladas Caupolican — Restaurante a la leña en Pencahue',
  description: 'Parrilladas a la leña, marraqueta caliente y pebre recién molido a la orilla de la K-60 en Pencahue, Región del Maule. Reserva por WhatsApp.',
  image: '/demos/parrilladas-caupolican/hero.webp',
})

const NAV_LINKS = [
  { label: 'La parrilla', href: '#historia' },
  { label: 'Carta', href: '#carta' },
  { label: 'Pencahue', href: '#pencahue' },
  { label: 'Contacto', href: '#contacto' },
]

const SPECS = [
  { k: 'Ubicación', v: 'K-60 36, Pencahue' },
  { k: 'Fuego', v: 'Leña y parrilla de ladrillo' },
  { k: 'Reseñas', v: `${BIZ.reviews} en Google` },
  { k: 'Facebook', v: `${BIZ.fbFollowers} seguidores` },
]

const STEPS = [
  {
    num: '01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Parrilla de ladrillo con costillar y longanizas sobre brasas de leña',
    title: 'Primero, el fuego',
    text: 'El día parte con leña apilada y la parrilla de ladrillo tomando temperatura. Cuando las brasas están blancas, la cocina ya está lista para el primer servicio.',
  },
  {
    num: '02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Parrillada servida en tabla de madera con longaniza, verduras asadas, papas y pebre',
    title: 'La carne a su tiempo',
    text: 'Costillar, longaniza, pollo y cerdo pasan por las brasas sin apuro. Cada pieza sale en su punto, con papas y verduras doradas al lado del fuego.',
  },
  {
    num: '03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de madera con canasto de marraquetas, pocillos de pebre y la parrilla al fondo',
    title: 'Marraqueta y pebre a la mesa',
    text: 'El pan llega caliente y el pebre recién molido, en pocillo de greda. Mientras se hace la carne, la mesa ya está comiendo.',
  },
  {
    num: '04',
    src: `${IMG}/ambiente.webp`,
    alt: 'Local de adobe blanco con teja y comedor de madera, a la orilla de la K-60 con cerros detrás',
    title: 'La casa, a pie de camino',
    text: 'Un restaurante de adobe y teja al costado de la K-60, con mesas de madera y vista al cerro. Se entra con hambre y se sale quedando bien.',
  },
]

const CARTA = [
  { name: 'Parrillada Caupolican (para dos)', desc: 'Costillar, longaniza, pollo, papas y pebre', price: '$24.900' },
  { name: 'Plato de costillar', desc: 'Con papas doradas y ensalada chilena', price: '$11.900' },
  { name: 'Cazuela de la casa', desc: 'Vacuno o ave, según el día', price: '$8.500' },
  { name: 'Sándwich de parrillada', desc: 'En marraqueta, para el camino', price: '$6.500' },
  { name: 'Empanada de pino al horno', price: '$2.800' },
  { name: 'Marraqueta y pebre', desc: 'Lo primero que llega a la mesa', price: 'cortesía' },
]

const TESTIMONIALS = [
  'Parábamos de paso por la K-60 y terminamos volviendo cada domingo. El costillar a la leña es de otro nivel.',
  'Porciones generosas, pebre fresco y la marraqueta recién salida. Lo clásico de carretera, bien hecho.',
  'Atención rápida y buena onda, como debe ser en un restaurante de camino. El lugar es amplio y hay estacionamiento.',
]

function Tag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.22em] mb-4 flex items-center gap-2.5 font-semibold"
      style={{ color: light ? C.mustardSoft : C.wood }}
    >
      <span
        className="inline-block w-2.5 h-2.5 shrink-0"
        style={{ backgroundColor: light ? C.mustardSoft : C.mustard }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

export default function ParrilladasCaupolicanPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold tracking-tight`}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,228,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.green,
          btnInk: '#F6F1E4',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Comedor de Parrilladas Caupolican: mesas de madera, parrilla de ladrillo encendida y vista a los cerros de Pencahue"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,46,36,0.7) 0%, rgba(27,46,36,0.45) 40%, rgba(27,46,36,0.92) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 shadow-lg transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: 'rgba(246,241,228,0.95)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.wood} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Tag light>Restaurante · Pencahue · Región del Maule</Tag>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.02em] text-[clamp(2.8rem,10vw,6rem)] mb-6`}
              style={{ color: '#F6F1E4' }}
            >
              La parrilla
              <br />
              <span style={{ color: C.mustardSoft }}>de la K-60</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(246,241,228,0.88)' }}>
              Parrilladas a la leña, marraqueta caliente y pebre recién
              molido, a la orilla del camino en Pencahue. El resto lo
              pone el fuego.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-[transform,filter] hover:brightness-95 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ backgroundColor: C.mustard, color: C.deep }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ borderColor: 'rgba(246,241,228,0.55)', color: '#F6F1E4' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(246,241,228,0.22)', backgroundColor: 'rgba(27,46,36,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,228,0.9)' }}>
            <span>K-60 36</span>
            <span>Pencahue, Maule</span>
            <span>Parrilla a leña</span>
            <span className="hidden md:inline" style={{ color: C.mustardSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Ficha técnica ── */}
      <section aria-label="Ficha del restaurante" className="border-b-2" style={{ borderColor: C.green, backgroundColor: C.soft }}>
        <dl className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {SPECS.map((s, i) => (
            <div
              key={s.k}
              className={`px-5 md:px-8 py-5 md:py-6 ${i > 0 ? 'border-l' : ''} ${i > 1 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'border-l-0 md:border-l' : ''}`}
              style={{ borderColor: C.line }}
            >
              <dt className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold mb-1.5" style={{ color: C.wood }}>
                {s.k}
              </dt>
              <dd className={`${display.className} font-bold text-sm md:text-base leading-snug`} style={{ color: C.green }}>
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Historia por pasos ── */}
      <section id="historia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-start mb-12 md:mb-16">
          <Reveal>
            <Tag>De la leña a la mesa</Tag>
            <h2 className={`${display.className} font-extrabold tracking-tight text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.green }}>
              La parrilla,
              <br />
              paso a paso
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl lg:pt-12" style={{ color: C.muted }}>
              En una parrillada de carretera no hay secretos: hay orden.
              Así funciona la casa todos los días, del primer carbón al
              último pocillo de pebre.
            </p>
          </Reveal>
        </div>

        {/* Línea de tiempo: riel a la izquierda en móvil, al centro en escritorio */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[23px] md:left-1/2 top-3 bottom-8 w-[2px] md:-translate-x-1/2"
            style={{ backgroundColor: C.line }}
          />
          <ol>
            {STEPS.map((s, i) => (
              <li
                key={s.num}
                className="relative pb-14 md:pb-24 last:pb-0 md:grid md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24"
              >
                {/* nodo numerado sobre la línea */}
                <span
                  aria-hidden="true"
                  className={`${display.className} absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 font-extrabold tracking-tight text-lg md:left-1/2 md:top-1/2 md:h-16 md:w-16 md:-translate-x-1/2 md:-translate-y-1/2 md:text-2xl`}
                  style={{
                    borderColor: C.green,
                    backgroundColor: i === STEPS.length - 1 ? C.mustard : C.paper,
                    color: i === STEPS.length - 1 ? C.deep : C.green,
                  }}
                >
                  {s.num}
                </span>
                <div className={`ml-16 md:ml-0 ${i % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <figure
                    className="relative aspect-[4/3] overflow-hidden border-2"
                    style={{ borderColor: C.green }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 768px) 42vw, 74vw"
                      loading="eager"
                      className="object-cover"
                    />
                  </figure>
                </div>
                <Reveal
                  delay={i * 70 + 90}
                  className={`ml-16 md:ml-0 mt-5 md:mt-0 ${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className={`max-w-md ${i % 2 === 1 ? 'md:ml-auto md:text-right' : ''}`}>
                    <p
                      className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3"
                      style={{ color: C.wood }}
                    >
                      Paso {s.num} de {String(STEPS.length).padStart(2, '0')}
                    </p>
                    <h3
                      className={`${display.className} font-bold tracking-tight text-2xl md:text-3xl mb-3`}
                      style={{ color: C.green }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Carta de referencia ── */}
      <section id="carta" className="scroll-mt-20 border-y-2" style={{ borderColor: C.green, backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Tag>Carta de referencia</Tag>
            <h2 className={`${display.className} font-extrabold tracking-tight text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.green }}>
              Lo que sale
              <br />
              de la parrilla
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm mb-6" style={{ color: C.muted }}>
              Productos y valores de muestra: al publicar va la carta
              real del restaurante, con sus platos y precios del día.
            </p>
            <p
              className={`${display.className} inline-block text-xs md:text-sm font-bold uppercase tracking-[0.16em] px-3 py-2 border-2`}
              style={{ borderColor: C.mustard, color: C.wood }}
            >
              Precios de muestra
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="border-2 divide-y" style={{ borderColor: C.green, backgroundColor: C.paper, '--tw-divide-opacity': '1' } as React.CSSProperties}>
              {CARTA.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline gap-3 px-5 md:px-7 py-4 md:py-5 transition-colors hover:bg-[rgba(46,74,60,0.06)]"
                  style={{ borderColor: C.lineSoft }}
                >
                  <div className="min-w-0">
                    <h3 className={`${display.className} font-bold text-base md:text-lg leading-snug`} style={{ color: C.ink }}>
                      {item.name}
                    </h3>
                    {item.desc && (
                      <p className="text-xs md:text-sm mt-0.5" style={{ color: C.muted }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <span
                    className="flex-1 border-b-2 border-dotted self-center min-w-8"
                    style={{ borderColor: C.line }}
                    aria-hidden="true"
                  />
                  <span className={`${display.className} font-extrabold text-base md:text-lg shrink-0`} style={{ color: C.green }}>
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="pencahue" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <Tag>Pencahue, Región del Maule</Tag>
            <h2 className={`${display.className} font-extrabold tracking-tight text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.green }}>
              El clásico
              <br />
              del camino
            </h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              <p>
                Parrilladas Caupolican es el restaurante de siempre del
                kilómetro 36 de la K-60: casa de adobe, parrilla de
                ladrillo y mesas de madera. Aquí atiende la misma gente
                de la casa, y eso se nota.
              </p>
              <p>
                Son <strong style={{ color: C.green }}>{BIZ.reviews} reseñas</strong> en
                su ficha de Google y{' '}
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4 decoration-2 transition-colors hover:text-[#1B2E24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: C.green, textDecorationColor: 'rgba(217,164,65,0.5)' }}
                >
                  {BIZ.fbFollowers} seguidores en Facebook
                </a>
                : los que paran una vez, repiten.
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 transition-colors hover:text-[#5d3c20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: C.wood, textDecorationColor: 'rgba(138,90,51,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-5" style={{ color: C.wood }}>
              Lo que valoran los clientes — textos de muestra
            </p>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <figure
                    className="border-2 p-5 md:p-6"
                    style={{ borderColor: C.line, backgroundColor: i === 1 ? C.soft : C.paper }}
                  >
                    <blockquote className="text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: C.wood }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Tag light>Contacto y ubicación</Tag>
            <h2 className={`${display.className} font-extrabold tracking-tight text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#F6F1E4' }}>
              Reserva o pide
              <br />
              <span style={{ color: C.mustardSoft }}>para llevar</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: 'rgba(246,241,228,0.85)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ textDecorationColor: 'rgba(217,164,65,0.5)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-[transform,filter] hover:brightness-95 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ backgroundColor: C.mustard, color: C.deep }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ borderColor: 'rgba(246,241,228,0.45)', color: '#F6F1E4' }}
              >
                Facebook
              </a>
            </div>
            <p className="text-xs md:text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(246,241,228,0.82)' }}>
              En la K-60 camino a San Rafael, antes de llegar al centro
              de Pencahue. Estacionamiento a la orilla del local.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 overflow-hidden min-h-[320px] h-full" style={{ borderColor: 'rgba(246,241,228,0.3)', backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.green }}>
        <Image
          src={`${IMG}/detalle1.webp`}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold tracking-tight text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.02] mb-6`} style={{ color: '#F6F1E4' }}>
              La parrilla ya
              <br />
              <span style={{ color: C.mustardSoft }}>está prendida</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,241,228,0.9)' }}>
              Escríbenos por WhatsApp para reservar mesa o encargar
              para llevar. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 transition-[transform,filter] hover:brightness-95 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              style={{ backgroundColor: C.mustard, color: C.deep }}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F6F1E4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-extrabold tracking-tight text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,228,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,241,228,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(246,241,228,0.75)' }}>
            Textos, carta, precios y fotos son de muestra.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
