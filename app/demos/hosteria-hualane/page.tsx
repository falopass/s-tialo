import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PIEZAS, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

/**
 * Dirección de arte: «el mantel de la picada» — cuadrillé rojo sobre
 * papel crema, ventanas en arco de la casona colonial de Garcés Gana
 * y la pizarra de precios como documento. Anton pesa como letra de
 * letrero de carretera; Karla lleva el texto.
 */
const C = {
  paper: '#FBF5E8',
  soft: '#F2E8D3',
  red: '#A91F16',
  redDeep: '#6E130D',
  wood: '#4A2E1C',
  ink: '#2F2118',
  muted: '#6B5747',
  line: 'rgba(110,19,13,0.25)',
}

/** Cenefa de cuadrillé: dos tramas de cuadros superpuestas. */
function Mantel({ className = '', height = 22 }: { className?: string; height?: number }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${className}`}
      style={{
        height,
        backgroundColor: C.paper,
        backgroundImage:
          'repeating-linear-gradient(90deg, rgba(169,31,22,0.85) 0 14px, rgba(169,31,22,0) 14px 28px), repeating-linear-gradient(0deg, rgba(169,31,22,0.85) 0 14px, rgba(169,31,22,0) 14px 28px)',
        backgroundBlendMode: 'multiply',
      }}
    />
  )
}

/** Marco de ventana colonial: foto recortada en arco. */
function Ventana({
  src,
  alt,
  sizes,
  className = '',
}: {
  src: string
  alt: string
  sizes: string
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden border-2 ${className}`}
      style={{ borderColor: C.redDeep, borderRadius: '999px 999px 10px 10px' }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}

function Letrero({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.28em] font-extrabold mb-4 flex items-center gap-3"
      style={{ color: light ? '#F3D9A8' : C.red }}
    >
      <span
        className="inline-block w-8 h-[10px] shrink-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, currentColor 0 4px, transparent 4px 8px)',
        }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'La casa', href: '#la-casa' },
  { label: 'La carta', href: '#la-carta' },
  { label: 'Las piezas', href: '#piezas' },
  { label: 'Reseñas', href: '#resenas' },
]

const PLATOS = [
  {
    src: `${IMG}/cazuela.webp`,
    name: 'Cazuela de la casa',
    desc: 'La que pide la gente del campo y la que vuelve del camino.',
  },
  {
    src: `${IMG}/plateada.webp`,
    name: 'Plateada al jugo',
    desc: 'Con puré casero, como corresponde a una picada.',
  },
  {
    src: `${IMG}/ceviche.webp`,
    name: 'Ceviche',
    desc: 'Fresco, con su jugo natural de frambuesa al lado.',
  },
  {
    src: `${IMG}/mesa.webp`,
    name: 'La mesa servida',
    desc: 'Platos al centro para compartir, mantel cuadrillé abajo.',
  },
]

const PIZZAS = [
  { name: 'Pizza personal', price: '$4.500' },
  { name: 'Pizza personal napolitana', price: '$3.900' },
  { name: 'Pizza familiar, variedad', price: '$8.900' },
  { name: 'Pizza familiar napolitana', price: '$8.900' },
]

const TESTIMONIALS = [
  {
    text: 'Hermoso lugar y muy rica su comida, súper bien atendido, muy amables. 100% recomendable.',
    author: 'Yessenia Cortes',
    stars: 5,
  },
  {
    text: 'Muy buena atención, lugar muy agradable, calefaccionado, platos contundentes y ricos. Tiene estacionamiento, baños higiénicos y es central.',
    author: 'María Ramos',
    stars: 4,
  },
  {
    text: 'Buen lugar con variada carta, ni barato ni caro. Recomendable para comida al paso y de los pocos lugares abiertos un día domingo.',
    author: 'Eugenio Golusda',
    stars: 4,
  },
]

export const metadata: Metadata = demoMetadata({
  slug: 'hosteria-hualane',
  title: 'Hostería Hualañe — Comida al paso y hostería en Hualañé',
  description:
    'Hostería en el centro de Hualañé: cazuela, plateada, pizzas de la pizarra y piezas para quedarse. Reserva y consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

export default function HosteriaHualanePage() {
  return (
    <div
      className={`${body.className} hhn min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .hhn a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(251,245,232,0.95)',
          ink: C.redDeep,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FBF5E8',
        }}
      />

      {/* ── Hero: la fachada colonial ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.redDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada colonial blanca de Hostería Hualañe con palmera, en el centro del pueblo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(60,10,6,0.45) 0%, rgba(60,10,6,0.05) 45%, rgba(60,10,6,0.72) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-10">
          <Reveal>
            <div className="max-w-2xl">
              <div
                className="px-6 md:px-9 pt-7 md:pt-9 pb-8"
                style={{
                  backgroundColor: C.paper,
                  borderRadius: '999px 999px 0 0',
                }}
              >
                <Letrero>Hostería · Restaurante · Hualañé</Letrero>
                <h1
                  className={`${display.className} uppercase leading-[0.98] tracking-[0.01em] text-[clamp(2.6rem,10vw,5.2rem)] mb-5`}
                  style={{ color: C.redDeep }}
                >
                  La picada
                  <br />
                  del pueblo
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
                  Cazuela, plateada al jugo, pizza de la pizarra y jugo
                  natural, en la casona de Garcés Gana 22-B. Y si el viaje
                  da para más, arriba hay piezas.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.red, color: '#FBF5E8', borderRadius: '8px' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href="#la-carta"
                    className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 border-2 transition-colors tap-44`}
                    style={{ borderColor: C.redDeep, color: C.redDeep, borderRadius: '8px' }}
                  >
                    Ver la carta
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <Mantel height={20} />
      </section>

      {/* ── Sello de reseñas + dirección ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14">
        <Reveal>
          <div
            className="flex flex-wrap items-center justify-between gap-4 border-y-2 border-dashed py-4"
            style={{ borderColor: C.line }}
          >
            <p className={`${display.className} uppercase text-lg md:text-xl tracking-[0.03em]`} style={{ color: C.redDeep }}>
              {BIZ.address} · {BIZ.city}
            </p>
            <div className="flex items-center gap-3">
              <Stars value={4.2} color={C.red} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
                style={{ color: C.redDeep }}
              >
                {BIZ.rating} · {BIZ.reviews} reseñas en Google →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── La casa: el comedor de la casona ── */}
      <section id="la-casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Letrero>La casa</Letrero>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.redDeep }}>
              Comedor de casona,
              <br />
              <span style={{ color: C.red }}>mantel cuadrillé</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.ink }}>
              La hostería funciona en una casona del centro de Hualañé,
              a pasos de la plaza. Salón amplio con ventanas en arco,
              calefacción en invierno y la cocina de siempre.
            </p>
            <ul className="space-y-2.5 text-sm md:text-base" style={{ color: C.muted }}>
              {[
                'Estacionamiento en el lugar',
                'Baños limpios, dicen las reseñas',
                'Abierto también los domingos',
                'Céntrico: Garcés Gana 22-B',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 shrink-0" style={{ backgroundColor: C.red }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4 items-end">
              <Ventana
                src={`${IMG}/salon.webp`}
                alt="Comedor de la hostería con ventanas en arco, cortinas y manteles de cuadrillé"
                sizes="(min-width:1024px) 22vw, 45vw"
                className="aspect-[3/4]"
              />
              <Ventana
                src={`${IMG}/noche.webp`}
                alt="Interior del salón de noche con música y comensales en Hostería Hualañe"
                sizes="(min-width:1024px) 22vw, 45vw"
                className="aspect-[3/4] translate-y-8"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Mantel height={18} className="opacity-90" />

      {/* ── La carta: platos y la pizarra ── */}
      <section id="la-carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Letrero>La carta</Letrero>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.redDeep }}>
              Lo que sale
              <br />
              <span style={{ color: C.red }}>de la cocina</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Fotos reales de la casa. Los nombres de los platos son de
              muestra: la carta completa vive en su menú online.
            </p>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-14">
          {PLATOS.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 90}>
                <figure
                  className="border-2 p-3 pb-4 h-full"
                  style={{ backgroundColor: '#FFFBF2', borderColor: C.line, rotate: i % 2 === 0 ? '-0.6deg' : '0.7deg' }}
                >
                  <div className="relative overflow-hidden aspect-square mb-3" style={{ borderRadius: '6px' }}>
                    <Image
                      src={p.src}
                      alt={`${p.name} — Hostería Hualañe`}
                      fill
                      sizes="(min-width:1024px) 22vw, 44vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption>
                    <p className={`${display.className} uppercase text-sm md:text-base mb-1`} style={{ color: C.redDeep }}>
                      {p.name}
                    </p>
                    <p className="text-xs md:text-[13px] leading-snug" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* La pizarra real */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center">
          <Reveal>
            <div className="relative overflow-hidden border-4" style={{ borderColor: C.wood, borderRadius: '10px' }}>
              <Image
                src={`${IMG}/carta.webp`}
                alt="Pizarra de pizzas de Hostería Hualañe con sabores y precios escritos a mano"
                width={1200}
                height={900}
                sizes="(min-width:1024px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Letrero>De su pizarra</Letrero>
            <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-tight mb-5`} style={{ color: C.redDeep }}>
              Las pizzas, con precio y todo
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: C.muted }}>
              Tal como está escrito en la pizarra del local: Chacarita,
              Peperoni, Suprema, Mechesa y Mexicana.
            </p>
            <ul className="border-2 divide-y-2" style={{ borderColor: C.redDeep, backgroundColor: '#FFFBF2' }}>
              {PIZZAS.map((p) => (
                <li key={p.name} className="flex items-baseline gap-3 px-4 py-2.5" style={{ borderColor: C.line }}>
                  <span className="text-sm font-bold">{p.name}</span>
                  <span className="flex-1 border-b-2 border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                  <span className={`${display.className} text-base`} style={{ color: C.red }}>{p.price}</span>
                </li>
              ))}
            </ul>
            <a
              href={BIZ.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-sm font-bold underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
              style={{ color: C.redDeep }}
            >
              Ver el menú completo online →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Las piezas ── */}
      <section id="piezas" className="scroll-mt-20" style={{ backgroundColor: C.redDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <Reveal>
              <Letrero light>Las piezas</Letrero>
              <h2 className={`${display.className} uppercase text-3xl md:text-4xl leading-[1.05] mb-5`} style={{ color: '#FBF5E8' }}>
                No es solo restaurante:
                <br />
                <span style={{ color: '#F3D9A8' }}>es hostería</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: 'rgba(251,245,232,0.8)' }}>
                Si el camino pide quedarse, la casa también aloja.
                Disponibilidad, valores y hora de entrada se confirman
                directo por WhatsApp, sin intermediarios.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK_PIEZAS}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] block text-center text-sm md:text-base px-7 py-3.5 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: '#FBF5E8', color: C.redDeep, borderRadius: '8px' }}
              >
                Consultar por piezas →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Letrero>Las reseñas</Letrero>
          <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.02] mb-4`} style={{ color: C.redDeep }}>
            Lo que dice la gente
          </h2>
          <p className="text-sm md:text-base mb-10 flex items-center gap-3" style={{ color: C.muted }}>
            <Stars value={4.2} color={C.red} />
            {BIZ.rating} de 5 · {BIZ.reviews} reseñas publicadas en Google
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure
                className="h-full p-5 md:p-6 border-2"
                style={{ backgroundColor: '#FFFBF2', borderColor: C.line, rotate: i === 1 ? '0.6deg' : '-0.5deg' }}
              >
                <div className="mb-3">
                  <Stars value={t.stars} color={C.red} className="w-4 h-4" />
                </div>
                <blockquote className="text-[15px] leading-relaxed mb-5" style={{ color: C.ink }}>
                  “{t.text}”
                </blockquote>
                <figcaption
                  className="text-[11px] uppercase tracking-[0.18em] font-extrabold border-t-2 border-dashed pt-3"
                  style={{ color: C.redDeep, borderColor: C.line }}
                >
                  {t.author} · reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Letrero>Cómo llegar</Letrero>
            <h2 className={`${display.className} uppercase text-3xl md:text-4xl leading-[1.05] mb-5`} style={{ color: C.redDeep }}>
              En el centro,
              <br />
              a pasos de la plaza
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.ink }}>
              {BIZ.address}, {BIZ.city}
              <br />
              Provincia de Curicó, {BIZ.region}
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.red, color: '#FBF5E8', borderRadius: '8px' }}
              >
                Abrir en Google Maps
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 border-2 transition-colors tap-44`}
                style={{ borderColor: C.redDeep, color: C.redDeep, borderRadius: '8px' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden border-4 min-h-[280px]" style={{ borderColor: C.redDeep, borderRadius: '10px' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.redDeep, color: '#FBF5E8' }}>
        <Mantel height={14} className="opacity-80" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} uppercase text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,245,232,0.7)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={BIZ.menuUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                Menú online
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(251,245,232,0.7)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,245,232,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(251,245,232,0.75)' }}>
            Fotos, reseñas, dirección, teléfono y precios de la pizarra
            son reales; los nombres de los platos y los textos
            descriptivos son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
