import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '600', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '500', style: 'italic' }],
})
const quote = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '500', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «la carta del salón» — la página se comporta como
 * la carta física del café: numerales romanos, filetes dorados dobles,
 * platos con puntos suspensivos y precio al margen, rosa de las rosas
 * de la fachada y negro de la marquesina sobre marfil.
 * Playfair hace de carta impresa; Jost es la servilleta.
 */
const C = {
  marfil: '#F8F1E9',
  carta: '#FDF8F1',
  rosa: '#B44A72',
  rosaClara: '#E8C4CF',
  dorado: '#A8844A',
  noir: '#211D1C',
  ink: '#2E2624',
  muted: '#6B5A56',
  line: 'rgba(168,132,74,0.45)',
  lineSoft: 'rgba(168,132,74,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cafe-paris-talca',
  title: 'Café París — Salón de té en 2 Poniente, Talca',
  description:
    'Café, pastelería y carta de cocina en una casona del centro de Talca: murales, piano y rosas pintadas a mano. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#la-carta' },
  { label: 'El salón', href: '#el-salon' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'La visita', href: '#la-visita' },
]

const CARTA = [
  {
    numeral: 'I',
    seccion: 'Para empezar',
    platos: [
      { nombre: 'Mix de brusquetas', detalle: 'Pan de campo, tomate, prosciutto y ricotta, mousse de palta', precio: '$5.900' },
      { nombre: 'Tabla Amour', detalle: 'Frutos secos, chocolate, frutas de estación, aceitunas y prosciutto', precio: '$6.900' },
      { nombre: 'Carpaccio de salmón', detalle: 'Salmón marinado, rúcula, queso parmesano y alioli', precio: '$10.990' },
    ],
  },
  {
    numeral: 'II',
    seccion: 'Ensaladas y pastas',
    platos: [
      { nombre: 'Ensalada Pierre Renoir', detalle: 'Hojas en albahaca, crudo de carne, crema de la casa y tostadas', precio: '$12.900' },
      { nombre: 'Ensalada E. Piaf tipo césar', detalle: 'Pollo grillado, crutones artesanales, parmesano y salsa de la casa', precio: '$8.900' },
      { nombre: 'Lenguini bolognesa', detalle: 'Pasta casera con salsa bolognesa', precio: '$7.990' },
      { nombre: 'Lenguini fruto di mare', detalle: 'Pasta de la casa con mariscos y salsa pomodoro', precio: '$9.900' },
    ],
  },
]

const RESENAS = [
  {
    texto:
      'Hermoso lugar, muy agradable estéticamente; se nota que cuidan cada detalle. Celebramos un cumpleaños y el servicio fue excelente: nos dieron un salón privado. La comida, 10 de 10.',
    autor: 'Paulina V. · Google',
  },
  {
    texto:
      'Café precioso, acogedor y bellamente decorado con muchos detalles que lo hacen atractivo. Buen café y buena atención.',
    autor: 'Jacqueline C. · Google',
  },
  {
    texto: 'Fui a probar el café y la pastelería: muy bueno todo, al igual que la atención. 10 de 10.',
    autor: 'Kata R. · Google',
  },
]

/** Filete dorado doble, el borde de la carta. */
function Filete({ className = '' }: { className?: string }) {
  return (
    <div className={`${className}`} aria-hidden="true">
      <div className="border-t-2" style={{ borderColor: C.line }} />
      <div className="border-t mt-[3px]" style={{ borderColor: C.lineSoft }} />
    </div>
  )
}

/** Marca de sección: numeral romano entre filetes. */
function Numeral({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-3">
      <span className="h-px flex-1" style={{ backgroundColor: C.lineSoft }} aria-hidden="true" />
      <span className={`${display.className} text-sm tracking-[0.3em]`} style={{ color: C.dorado }}>
        {n}
      </span>
      <span className="text-[11px] uppercase tracking-[0.32em] font-medium" style={{ color: C.rosa }}>
        {children}
      </span>
      <span className={`${display.className} text-sm tracking-[0.3em]`} style={{ color: C.dorado }}>
        {n}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: C.lineSoft }} aria-hidden="true" />
    </div>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CafeParisPage() {
  return (
    <div
      className={`${body.className} cpx min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.marfil, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cpx a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK_RESERVA}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(248,241,233,0.95)',
          ink: C.noir,
          line: C.line,
          btnBg: C.rosa,
          btnInk: '#FDF8F1',
        }}
      />

      {/* ── Hero: la portada de la carta ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.noir }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Salón de Café París con murales pintados a mano y mesas puestas, Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(33,29,28,0.55) 0%, rgba(33,29,28,0.28) 42%, rgba(33,29,28,0.82) 100%)',
          }}
        />
        <div className="relative w-full max-w-4xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28 text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <Image
                src={`${IMG}/logo.webp`}
                alt="Medallón de Café París en la fachada de 2 Poniente 966"
                width={96}
                height={124}
                className="border-2"
                style={{ borderColor: C.dorado }}
              />
            </div>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] font-medium mb-4" style={{ color: C.rosaClara }}>
              Cafetería · Salón de té · Talca
            </p>
            <h1
              className={`${display.className} leading-[0.98] text-[clamp(2.8rem,9vw,5.4rem)] mb-4`}
              style={{ color: '#FDF8F1' }}
            >
              Café París
            </h1>
            <p className={`${displayItalic.className} text-xl md:text-2xl mb-7`} style={{ color: C.rosaClara }}>
              un pedazo de París en 2 Poniente
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rosa, color: '#FDF8F1' }}
              >
                Reservar una mesa
              </a>
              <a
                href="#la-carta"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: C.dorado, color: '#FDF8F1' }}
              >
                Ver la carta
              </a>
            </div>
            <div className="flex items-center justify-center gap-2.5 mt-7">
              <Stars value={4.5} color={C.rosaClara} className="w-4 h-4" />
              <span className="text-xs md:text-sm" style={{ color: 'rgba(253,248,241,0.9)' }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta: platos reales, precios reales ── */}
      <section id="la-carta" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.carta }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="border-2 p-6 md:p-12" style={{ borderColor: C.line, backgroundColor: C.marfil }}>
            <Filete className="mb-10" />
            <Reveal>
              <Numeral n="§">La carta</Numeral>
              <h2 className={`${display.className} text-center text-3xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.noir }}>
                De la carta real,
                <br />
                <span className={displayItalic.className} style={{ color: C.rosa }}>con sus precios reales</span>
              </h2>
              <p className={`${quote.className} text-center text-lg md:text-xl mb-12`} style={{ color: C.muted }}>
                — la carta completa, como en todo buen salón, se pide en la mesa —
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              {CARTA.map((g) => (
                <Reveal key={g.seccion}>
                  <Numeral n={g.numeral}>{g.seccion}</Numeral>
                  <ul>
                    {g.platos.map((p) => (
                      <li key={p.nombre} className="py-4 border-b border-dashed" style={{ borderColor: C.lineSoft }}>
                        <div className="flex items-baseline gap-2">
                          <h3 className={`${display.className} text-lg md:text-xl`} style={{ color: C.noir }}>
                            {p.nombre}
                          </h3>
                          <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                          <span className={`${display.className} text-lg md:text-xl whitespace-nowrap`} style={{ color: C.rosa }}>
                            {p.precio}
                          </span>
                        </div>
                        <p className="text-[13px] leading-relaxed mt-1 pr-14" style={{ color: C.muted }}>
                          {p.detalle}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal delay={140}>
              <div className="grid sm:grid-cols-3 gap-4 mt-12">
                {[
                  { src: `${IMG}/capuchino.webp`, alt: 'Capuchino con latte art de Café París' },
                  { src: `${IMG}/helados.webp`, alt: 'Cafés helados con crema de Café París' },
                  { src: `${IMG}/carta.webp`, alt: 'La carta física de Café París con su logo' },
                ].map((f) => (
                  <div key={f.src} className="relative overflow-hidden aspect-[3/4] border" style={{ borderColor: C.line }}>
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width: 640px) 30vw, 90vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Filete className="mt-10" />
          </div>
        </div>
      </section>

      {/* ── El salón ── */}
      <section id="el-salon" className="scroll-mt-20" style={{ backgroundColor: C.noir }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] font-medium mb-4 text-center" style={{ color: C.rosaClara }}>
              El salón
            </p>
            <h2 className={`${display.className} text-center text-3xl md:text-5xl leading-[1.05] mb-5`} style={{ color: '#FDF8F1' }}>
              Una casona con historia,
              <br />
              <span className={displayItalic.className} style={{ color: C.rosaClara }}>pintada a mano</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto mb-12 md:mb-16" style={{ color: 'rgba(253,248,241,0.75)' }}>
              Rosas en las paredes, querubines en el techo, un piano que
              espera la tarde y la fachada de rosas que ya es postal del
              centro de Talca. Lo que más nombran las reseñas: la decoración.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: `${IMG}/piano.webp`, alt: 'Piano y mural floral en el salón de Café París', tall: true },
              { src: `${IMG}/techo.webp`, alt: 'Techo pintado con querubines y candelabro en Café París', tall: true },
              { src: `${IMG}/fachada.webp`, alt: 'Fachada de Café París con toldo de rayas y rosas pintadas, 2 Poniente 966', tall: false },
              { src: `${IMG}/noche.webp`, alt: 'Fachada de Café París iluminada de noche', tall: false },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <div className={`relative overflow-hidden border ${f.tall ? 'aspect-[3/4]' : 'aspect-[3/4] lg:mt-10'}`} style={{ borderColor: 'rgba(168,132,74,0.5)' }}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 46vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Numeral n="§">Lo que se comenta</Numeral>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12">
            <h2 className={`${display.className} text-4xl md:text-5xl`} style={{ color: C.noir }}>
              {BIZ.rating} <span style={{ color: C.dorado }}>/ 5</span>
            </h2>
            <div className="flex items-center gap-3">
              <Stars value={4.5} color={C.rosa} className="w-5 h-5" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.rosa, textDecorationColor: C.rosaClara }}
              >
                {BIZ.reviews} reseñas en Google →
              </a>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={i} delay={i * 110}>
              <figure className="h-full p-6 md:p-7 border flex flex-col" style={{ backgroundColor: C.carta, borderColor: C.line }}>
                <span className={`${display.className} text-4xl leading-none mb-3`} style={{ color: C.dorado }} aria-hidden="true">
                  “
                </span>
                <blockquote className={`${quote.className} text-lg leading-relaxed mb-5 flex-1`} style={{ color: C.ink }}>
                  {r.texto}
                </blockquote>
                <figcaption className="text-[10px] uppercase tracking-[0.22em] font-medium border-t pt-3" style={{ color: C.muted, borderColor: C.lineSoft }}>
                  {r.autor}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La visita: horario + mapa ── */}
      <section id="la-visita" className="scroll-mt-20" style={{ backgroundColor: C.rosa }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] font-medium mb-4" style={{ color: '#FDF8F1' }}>
              La visita
            </p>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#FDF8F1' }}>
              Bienvenue,
              <br />
              <span className={displayItalic.className}>la mesa está puesta</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(253,248,241,0.9)' }}>
              En pleno centro de Talca: ideal para el café de la mañana,
              el té de la tarde o una celebración chica en el salón
              privado. Escríbenos y te guardamos mesa.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-105 active:scale-95 tap-44`}
                style={{ backgroundColor: C.noir, color: '#FDF8F1' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(253,248,241,0.7)', color: '#FDF8F1' }}
              >
                Cómo llegar
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(253,248,241,0.92)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              {BIZ.hours}
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-4 min-h-[280px]" style={{ borderColor: C.noir }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.noir, color: '#FDF8F1' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(253,248,241,0.65)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(253,248,241,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(253,248,241,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(253,248,241,0.72)' }}>
            Fotos, carta, precios, reseñas, rating, dirección, teléfono y
            horario son reales de su ficha de Google y su carta física;
            los textos son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK_RESERVA} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
