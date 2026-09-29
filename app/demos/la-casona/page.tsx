import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'

const display = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-body',
})

const C = {
  crema: '#F1E7D4',
  cremaDeep: '#E6D7BD',
  adobe: '#3A1F18',
  adobeSoft: 'rgba(58,31,24,0.7)',
  teja: '#A43B26',
  musgo: '#3E5B34',
  board: '#20281F',
  line: 'rgba(58,31,24,0.18)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
)

export const metadata: Metadata = demoMetadata({
  slug: 'la-casona',
  title: 'Restaurant La Casona · Villa Alegre',
  description:
    'Comida chilena de la casa frente al Museo de Villa Alegre: pastel de choclo, cazuela, porotos y la colación del día. Av. Abate Molina 424.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'De la olla', href: '#olla' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const RECORRIDO = [
  {
    parada: 'La fachada',
    src: 'fachada.webp',
    alt: 'Fachada de La Casona con su letrero pintado a mano',
    texto: 'Sobre Av. Abate Molina, frente al Museo de Villa Alegre. El letrero sigue pintado a mano sobre el portón de madera.',
  },
  {
    parada: 'El corredor',
    src: 'corredor.webp',
    alt: 'Corredor colonial de La Casona con plantas y madera',
    texto: 'Un corredor con plantas que cuelga del techo de teja, como en la casa de campo de siempre.',
  },
  {
    parada: 'El comedor',
    src: 'comedor.webp',
    alt: 'Comedor interior de La Casona con vigas a la vista',
    texto: 'Adentro, vigas y piso de baldosa; afuera, terraza. Las reseñas nombran el ambiente una y otra vez.',
  },
  {
    parada: 'El muro de fotos',
    src: 'muro.webp',
    alt: 'Muro de La Casona cubierto de fotografías',
    texto: 'Un muro completo con la historia de la casa y del pueblo. Vale la pena mirarlo antes de pedir.',
  },
] as const

const OLLA = [
  { plato: 'Pastel de choclo', nota: 'servido en paila, lo más nombrado de la casa' },
  { plato: 'Cazuela', nota: 'la de olla de campo, con su verdura' },
  { plato: 'Porotos', nota: 'con mazamorra y todo' },
  { plato: 'Empanadas', nota: 'también figuran entre las favoritas' },
  { plato: 'Pollo asado y carne mechada', nota: 'los platos de fondo del día' },
] as const

const REVIEWS = [
  {
    nombre: 'Jorge Maldonado M.',
    texto: 'Buena comida y atención. Es barato.',
  },
  {
    nombre: 'Rainel Diaz',
    texto: 'Buena comida, con sabor a casa, ensaladas frescas y buen ambiente en el comedor y la terraza.',
  },
  {
    nombre: 'Elvis Yovera',
    texto: 'Probé el pastel de choclo y súper rico, recomendado, y el valor vale la pena.',
  },
  {
    nombre: 'Claudia Pérez Rubilar',
    texto: 'Almorzamos como siempre cuando vamos a Villa Alegre.',
  },
] as const

/** Marco de arco colonial para las fotos del recorrido. */
function FotoArco({
  src,
  alt,
  sizes,
}: {
  src: string
  alt: string
  sizes: string
}) {
  return (
    <figure
      className="relative overflow-hidden aspect-[3/4] w-full"
      style={{
        borderRadius: '999px 999px 14px 14px',
        border: `6px solid ${C.adobe}`,
        backgroundColor: C.cremaDeep,
      }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
    </figure>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(20,12,9,0.95)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} · así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function LaCasonaPage() {
  return (
    <div
      className={`${body.className} lc min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.adobe }}
    >
      <style>{`
        .lc a:focus-visible { outline: 2px solid ${C.teja}; outline-offset: 3px }
        .lc .btn { transition: transform 0.16s ease, filter 0.16s ease }
        .lc .btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .lc .btn:active { transform: translateY(0) scale(0.97) }
        .lc img { max-width: 100% }
        @media (prefers-reduced-motion: reduce) { .lc * { animation: none !important; transition: none !important } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} italic`}
        theme={{
          over: 'light',
          bar: 'rgba(241,231,212,0.94)',
          ink: C.adobe,
          line: C.line,
          btnBg: C.teja,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el portón de la casa ── */}
      <section id="inicio" className="max-w-6xl mx-auto px-5 md:px-8 pt-[110px] md:pt-[130px] pb-14 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Letrero pintado de ${BIZ.name}`}
              width={900}
              height={150}
              className="w-full max-w-[340px] h-auto rounded-lg mb-7"
              style={{ boxShadow: `0 0 0 1px ${C.line}, 4px 4px 0 ${C.adobe}` }}
            />
            <h1 className={`${display.className} text-4xl md:text-6xl font-bold leading-[1.02]`}>
              Almorzar como en casa, frente al museo
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.adobeSoft }}>
              Comida chilena servida en una casona del centro de Villa Alegre:
              pastel de choclo en paila, cazuela, porotos y la colación del día
              escrita en la pizarra.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full text-white"
                style={{ backgroundColor: C.teja }}
              >
                Preguntar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full border-2"
                style={{ borderColor: C.adobe, color: C.adobe }}
              >
                Llamar
              </a>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em]" style={{ color: C.adobeSoft }}>
              {BIZ.address} · frente al Museo de Villa Alegre
            </p>
          </Reveal>
          <Reveal delay={140}>
            <FotoArco
              src={`${IMG}/fachada.webp`}
              alt={RECORRIDO[0].alt}
              sizes="(min-width:1024px) 45vw, 92vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ── La pizarra de la colación ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
        <Reveal>
          <div
            className="rounded-xl px-6 py-7 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center gap-6 justify-between"
            style={{
              backgroundColor: C.board,
              color: '#F3EFDD',
              border: `5px solid ${C.adobe}`,
              boxShadow: `6px 6px 0 rgba(58,31,24,0.25)`,
            }}
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] mb-2" style={{ color: 'rgba(243,239,221,0.6)' }}>
                Colación del día · lo que dice su pizarra
              </p>
              <p className={`${display.className} text-2xl md:text-4xl font-bold leading-tight`}>
                Colación del día + ensalada, pan y pebre
              </p>
            </div>
            <p className={`${display.className} text-4xl md:text-5xl font-bold shrink-0`} style={{ color: '#F3C95A' }}>
              $4.500
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <div className="flex items-center gap-2.5">
              <Stars value={BIZ.rating} color={C.teja} className="w-5 h-5" />
              <span className={`${display.className} text-2xl font-bold`}>{BIZ.rating}</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: C.adobeSoft }}>
              {BIZ.reviewsCount} opiniones en Google
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: C.adobeSoft }}>
              almuerzos de martes a domingo
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── El recorrido de la casa ── */}
      <section id="casa" className="border-y" style={{ borderColor: C.line, backgroundColor: C.cremaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[1.0] max-w-2xl`}>
              El recorrido de la casa
            </h2>
          </Reveal>
          <div className="mt-10 space-y-12 md:space-y-0">
            {RECORRIDO.map((p, i) => (
              <Reveal key={p.parada} delay={i * 60}>
                <div
                  className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${i !== 0 ? 'md:-mt-6 md:pt-10' : ''}`}
                >
                  <div className={`md:col-span-4 ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-8'}`}>
                    <FotoArco
                      src={`${IMG}/${p.src}`}
                      alt={p.alt}
                      sizes="(min-width:768px) 32vw, 72vw"
                    />
                  </div>
                  <div className={`md:col-span-5 ${i % 2 === 0 ? 'md:col-start-6' : 'md:col-start-2 md:row-start-1'}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] mb-3" style={{ color: C.teja }}>
                      Parada {i + 1} de {RECORRIDO.length}
                    </p>
                    <h3 className={`${display.className} text-3xl md:text-4xl font-bold`}>{p.parada}</h3>
                    <p className="mt-3 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.adobeSoft }}>
                      {p.texto}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── De la olla ── */}
      <section id="olla" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl font-bold leading-[1.0]`}>
              De la olla, con nombre propio
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.adobeSoft }}>
              Los platos que la gente nombra en sus reseñas. La carta del día se
              lee en la pizarra de la entrada.
            </p>
            <ul className="mt-7 space-y-0 border-t" style={{ borderColor: C.line }}>
              {OLLA.map((o) => (
                <li key={o.plato} className="py-4 border-b flex items-baseline gap-4" style={{ borderColor: C.line }}>
                  <span className={`${display.className} text-lg md:text-xl font-bold shrink-0 min-w-[7ch]`}>
                    {o.plato}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: C.adobeSoft }}>
                    {o.nota}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <FotoArco
                src={`${IMG}/pastel.webp`}
                alt="Pastel de choclo de La Casona servido en paila de greda"
                sizes="(min-width:1024px) 22vw, 44vw"
              />
              <div className="space-y-4 md:space-y-5 mt-10">
                <FotoArco
                  src={`${IMG}/sopa.webp`}
                  alt="Cazuela humeante de La Casona"
                  sizes="(min-width:1024px) 22vw, 44vw"
                />
                <div className="grid grid-cols-2 gap-4">
                  <figure className="relative overflow-hidden aspect-square rounded-xl border" style={{ borderColor: C.line }}>
                    <Image src={`${IMG}/ensalada.webp`} alt="Ensalada chilena de tomate de La Casona" fill className="object-cover" sizes="22vw" />
                  </figure>
                  <figure className="relative overflow-hidden aspect-square rounded-xl border" style={{ borderColor: C.line }}>
                    <Image src={`${IMG}/repollo.webp`} alt="Ensalada de repollo y lechuga de La Casona" fill className="object-cover" sizes="22vw" />
                  </figure>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.adobe }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl font-bold leading-[1.02] max-w-2xl`} style={{ color: C.crema }}>
              “Con sabor a casa”
            </h2>
          </Reveal>
          <div className="mt-9 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <blockquote className="h-full rounded-xl p-5 flex flex-col" style={{ backgroundColor: C.crema }}>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: C.adobe }}>
                    {r.texto}
                  </p>
                  <footer className="mt-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: C.teja }}>
                    {r.nombre} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 font-mono text-xs uppercase tracking-[0.2em] underline underline-offset-4 tap-44"
              style={{ color: 'rgba(241,231,212,0.8)' }}
            >
              Leer las {BIZ.reviewsCount} opiniones en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl font-bold leading-[1.0]`}>
              En el centro de Villa Alegre
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.adobeSoft }}>
              Al lado de la calle principal y frente al museo; los lunes la casa
              descansa. En el mostrador también funciona una agencia de encomiendas.
            </p>
            <address className="not-italic mt-6">
              <p className="font-semibold">{BIZ.address} · {BIZ.city}</p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] mt-2" style={{ color: C.adobeSoft }}>
                Lunes cerrado · Región del Maule
              </p>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full text-white"
                style={{ backgroundColor: C.teja }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full border-2"
                style={{ borderColor: C.adobe, color: C.adobe }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden border aspect-[4/3]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name} en ${BIZ.city}`}
                className="w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#24120D', color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} italic text-2xl mb-1.5`}>{BIZ.short}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(241,231,212,0.66)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(241,231,212,0.66)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(241,231,212,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(241,231,212,0.75)' }}>
            Textos de muestra. Dirección, teléfono, reseñas, letrero y fotos son reales del negocio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
