import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, IG_URL, IG_DUENA_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

/**
 * Paleta de la carta real del estudio (la tarjeta "GIRL'S HOUSE
 * ESTETICA" que publican): mármol marfil, carbón cálido y bronce.
 * Motivo propio: el arco de los espejos del salón — los retratos
 * van en marcos de medio punto.
 */
const C = {
  marfil: '#F7F3EC',
  card: '#FFFFFF',
  tinta: '#26221C',
  bronce: '#A8865B',
  bronceTinta: '#84652F',
  bronceClaro: '#D9C6A3',
  muted: '#6E6557',
  line: 'rgba(38,34,28,0.16)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8865B]'
const ARCH = 'rounded-t-[999px]'

export const metadata: Metadata = demoMetadata({
  slug: 'girls-house-estetica',
  title: 'Girls House Estética: estudio de belleza en Molina',
  description: 'Centro de estética en Quechereguas 2120, Molina. Uñas, pestañas, faciales, depilación y cabello. Reserva tu hora por WhatsApp.',
  image: '/demos/girls-house-estetica/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El trabajo', href: '#trabajo' },
  { label: 'Vale', href: '#vale' },
  { label: 'Reservas', href: '#contacto' },
]

// Servicios tal como los publica el estudio en su carta.
const CARTA = [
  {
    title: 'Rostro y mirada',
    items: [
      'Lifting de pestañas',
      'Limpieza facial',
      'BB glow',
      'Camuflaje de estrías',
      'Depilación rostro',
      'Depilación cuerpo',
      'Maquillaje y peinado',
    ],
  },
  {
    title: 'Cabello',
    items: [
      'Cortes de pelo',
      'Alisado permanente',
      'Masaje de hidratación',
      'Decoloración',
    ],
  },
  {
    title: 'Manos',
    items: ['Manicure permanente'],
  },
]

// Fotos reales del trabajo del estudio (su Instagram y su ficha de Google).
const LAMINAS = [
  {
    src: `${IMG}/pestanas.webp`,
    alt: 'Trabajo de lifting de pestañas realizado en Girls House Estética',
    caption: 'Lifting de pestañas',
    arch: true,
  },
  {
    src: `${IMG}/unas.webp`,
    alt: 'Manicure permanente en tono nude realizada en el estudio',
    caption: 'Manicure permanente',
    arch: false,
  },
  {
    src: `${IMG}/cambio.webp`,
    alt: 'Cambio de look de cabello hecho en Girls House: antes y después',
    caption: 'Cambio de look',
    arch: false,
  },
  {
    src: `${IMG}/cabina.webp`,
    alt: 'Cabina de atención de Girls House con camilla y carrito de trabajo',
    caption: 'La cabina',
    arch: true,
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: C.bronceTinta }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: C.bronceTinta }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function GirlsHousePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.marfil, color: C.tinta }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,243,236,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.tinta,
          btnInk: C.marfil,
        }}
      />

      {/* Portada editorial: retrato real de novia enmarcado en arco */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
          <Reveal>
            <Eyebrow>Centro de estética · Molina</Eyebrow>
            <h1
              className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.7rem,9vw,5.6rem)] mb-6`}
              style={{ color: C.tinta }}
            >
              Girls House,
              <br />
              <em className="italic font-light" style={{ color: C.bronce }}>estética de Vale</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-9" style={{ color: C.muted }}>
              Uñas, pestañas, faciales y cabello en {BIZ.address},{' '}
              {BIZ.city}. La que te atiende es la dueña. Se reserva por
              WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-8 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44`}
                style={{ backgroundColor: C.tinta, color: C.marfil }}
              >
                Reservar hora
              </a>
              <a
                href="#carta"
                className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-8 py-3.5 rounded-full border transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.bronce, color: C.tinta }}
              >
                Ver la carta
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
              <li>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={`${FOCUS} hover:underline underline-offset-4 tap-44`}>
                  @{BIZ.instagram} · {BIZ.instagramFollowers} seguidores
                </a>
              </li>
              <li>{BIZ.address}, {BIZ.city}</li>
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative mx-auto w-full max-w-[340px] md:max-w-[420px]">
              <div className={`${ARCH} border p-2.5 md:p-3`} style={{ borderColor: C.bronce, backgroundColor: C.card }}>
                <div className={`relative ${ARCH} overflow-hidden aspect-[4/5]`}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Novia con maquillaje y peinado realizado en Girls House Estética, Molina"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.24em] font-bold" style={{ color: C.bronceTinta }}>
                Maquillaje y peinado · novia
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* La carta real del estudio */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">
          <Reveal>
            <figure className="relative">
              <div className="shadow-xl border p-2" style={{ borderColor: C.line, backgroundColor: C.card, transform: 'rotate(-1.5deg)' }}>
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta original de servicios de Girl's House Estética: manicure permanente, lifting de pestañas, depilación, limpieza facial, BB glow, camuflaje de estrías, maquillaje y peinado, cortes, alisado, masaje de hidratación y decoloración"
                  width={800}
                  height={1067}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-5 text-center text-[11px] uppercase tracking-[0.22em] font-bold" style={{ color: C.bronceTinta }}>
                La carta original del estudio
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>La carta</Eyebrow>
            <h2 className={`${display.className} font-medium text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.tinta }}>
              Todo lo que hace
              <br />
              <em className="italic font-light" style={{ color: C.bronce }}>el estudio</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-9 max-w-md" style={{ color: C.muted }}>
              La lista tal como la publica Girls House en su carta. El
              precio de cada servicio se confirma al reservar por
              WhatsApp.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {CARTA.map((g) => (
                <div key={g.title}>
                  <h3 className={`${display.className} italic text-xl md:text-2xl mb-3`} style={{ color: C.bronce }}>
                    {g.title}
                  </h3>
                  <ul>
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm md:text-[15px] py-2 border-b border-dotted font-medium"
                        style={{ borderColor: C.line }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Único precio que el estudio publica abiertamente */}
            <div className="mt-10 border-t pt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1" style={{ borderColor: C.line }}>
              <p className="text-sm md:text-base font-medium" style={{ color: C.tinta }}>
                Masaje capilar full hidratación
              </p>
              <p className={`${display.className} italic text-xl md:text-2xl`} style={{ color: C.bronce }}>
                desde $10.000
              </p>
            </div>
            <p className="mt-2 text-xs" style={{ color: C.muted }}>
              Valor publicado por el estudio en su ficha.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lookbook: el trabajo real, como láminas */}
      <section id="trabajo" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <header className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>El trabajo</Eyebrow>
            <h2 className={`${display.className} font-medium text-[clamp(2.2rem,6vw,4rem)] leading-[1.05]`} style={{ color: C.tinta }}>
              Lo que hace,
              <br />
              <em className="italic font-light" style={{ color: C.bronce }}>tal como quedó</em>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              Fotos reales del estudio y de su Instagram
              @{BIZ.instagram}: nada de catálogo genérico.
            </p>
          </header>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 items-end">
          {LAMINAS.map((l, i) => (
            <Reveal key={l.caption} delay={i * 90} className={i % 2 ? 'md:translate-y-8' : ''}>
              <figure>
                <div
                  className={`relative overflow-hidden ${l.arch ? ARCH : 'rounded-2xl'} aspect-[3/4] border p-1.5`}
                  style={{ borderColor: C.bronceClaro, backgroundColor: C.card }}
                >
                  <div className={`relative w-full h-full overflow-hidden ${l.arch ? ARCH : 'rounded-xl'}`}>
                    <Image
                      src={l.src}
                      alt={l.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: C.bronceTinta }}>
                  {l.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        {/* El salón, a lo ancho */}
        <Reveal delay={200}>
          <figure className="mt-14 md:mt-20">
            <div className="relative overflow-hidden rounded-2xl border p-1.5" style={{ borderColor: C.bronceClaro, backgroundColor: C.card }}>
              <div className="relative w-full h-[260px] md:h-[420px] overflow-hidden rounded-xl">
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón de Girls House Estética en Molina: muro de listones de madera, espejos de arco y estaciones de trabajo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 72vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: C.bronceTinta }}>
              El salón · {BIZ.address}, {BIZ.city}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Vale, la dueña */}
      <section id="vale" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <figure className="mx-auto w-44 md:w-56">
              <div className={`${ARCH} border p-2`} style={{ borderColor: C.bronce, backgroundColor: C.marfil }}>
                <div className={`relative ${ARCH} overflow-hidden aspect-[3/4]`}>
                  <Image
                    src={`${IMG}/duena.webp`}
                    alt="Vale, dueña de Girls House Estética y maquilladora detrás de @valeferrettimakeup"
                    fill
                    sizes="(max-width: 768px) 176px, 224px"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: C.bronceTinta }}>
                Vale · la dueña
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Quién atiende</Eyebrow>
            <h2 className={`${display.className} font-medium text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] mb-6`} style={{ color: C.tinta }}>
              La que responde el WhatsApp
              <br />
              <em className="italic font-light" style={{ color: C.bronce }}>es la que te atiende</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: C.muted }}>
              Girls House es el estudio de Vale en pleno Molina. Sin
              recepción ni turnos perdidos: escribes, reservas y te
              atiende la dueña.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg" style={{ color: C.muted }}>
              Su trabajo está en dos cuentas:{' '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-bold underline underline-offset-4 decoration-1 tap-44`} style={{ color: C.bronceTinta, textDecorationColor: 'rgba(132,101,47,0.4)' }}>
                @{BIZ.instagram}
              </a>{' '}
              ({BIZ.instagramFollowers} seguidores) y su cuenta de
              maquilladora{' '}
              <a href={IG_DUENA_URL} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-bold underline underline-offset-4 decoration-1 tap-44`} style={{ color: C.bronceTinta, textDecorationColor: 'rgba(132,101,47,0.4)' }}>
                @{BIZ.duenaInstagram}
              </a>{' '}
              ({BIZ.duenaFollowers} seguidores).
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.bronce, color: C.tinta }}
              >
                Instagram del estudio
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reservas y cómo llegar */}
      <section id="contacto" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Reservas</Eyebrow>
            <h2 className={`${display.className} font-medium text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] mb-6`} style={{ color: C.tinta }}>
              Se reserva
              <br />
              <em className="italic font-light" style={{ color: C.bronce }}>por WhatsApp</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              Escríbenos con el servicio que te interesa y te confirman
              hora y valor. El estudio no publica horario fijo: cada
              atención es con hora agendada.
            </p>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-4 tap-44`} style={{ color: C.tinta }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-8 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: C.tinta, color: C.marfil }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-8 py-3.5 rounded-full border transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.bronce, color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border p-1.5 rounded-2xl" style={{ borderColor: C.bronceClaro, backgroundColor: C.card }}>
              <LazyMap
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px] md:h-[420px] rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Franja Sitiazo */}
      <section style={{ backgroundColor: C.bronceClaro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm md:text-[15px] leading-relaxed font-semibold" style={{ color: C.tinta }}>
            Sitio de ejemplo de{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-extrabold underline underline-offset-4 tap-44`}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} shrink-0 text-sm font-bold underline underline-offset-4 tap-44`}
            style={{ color: C.tinta }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#211D16', color: C.marfil }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className={`${display.className} italic text-2xl mb-1`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,243,236,0.75)' }}>
              {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
            </address>
          </div>
          <p className="text-xs leading-relaxed max-w-sm" style={{ color: 'rgba(247,243,236,0.7)' }}>
            Sitio de ejemplo de Sitiazo: fotos, dirección y servicios son
            los reales de su carta y su Instagram; los valores se
            confirman por WhatsApp.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
