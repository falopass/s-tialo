import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_TINAJA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

const C = {
  bosque: '#17301F',
  bosque2: '#22402C',
  crema: '#F6EFE0',
  papel: '#FBF7EC',
  brasa: '#9A4A15',
  brasaBtn: '#E07B32',
  arena: '#E8B478',
  ink: '#1E241C',
  line: 'rgba(30,36,28,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-fogon-de-rio-claro',
  title: 'El Fogón de Río Claro — Hospedaje, restaurant y cafetería en el Maule',
  description:
    'Hostería de campo en Río Claro: cabañas, piscina, tinaja caliente, sauna y restaurant frente al río. Reserva por WhatsApp.',
  image: '/demos/el-fogon-de-rio-claro/hero.webp',
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'La mesa', href: '#mesa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const RECORRIDO = [
  {
    km: '00 · LA PORTADA',
    src: `${IMG}/portada.webp`,
    alt: 'Portada de piedra en la entrada de El Fogón de Río Claro',
    title: 'Se entra por Los Maitenes',
    text: 'El predio abre con una portada de piedra en la parcela 15c, sector Las Tablas. Del camino se pasa directo al silencio del campo.',
  },
  {
    km: '01 · LAS CABAÑAS',
    src: `${IMG}/cabana-terraza.webp`,
    alt: 'Cabaña de madera con terraza entre árboles en El Fogón',
    title: 'Madera, terraza y sombra',
    text: 'Cabañas de madera repartidas entre los árboles, cada una con su terraza para el café de la mañana y la conversación de la tarde.',
  },
  {
    km: '02 · EL INTERIOR',
    src: `${IMG}/interior.webp`,
    alt: 'Interior de cabaña con cama y kitchenette en El Fogón',
    title: 'Todo a mano, nada sobra',
    text: 'Habitaciones limpias y cómodas con kitchenette: las reseñas repiten lo mismo — se duerme bien y se despierta con el campo.',
  },
  {
    km: '03 · LA PISCINA',
    src: `${IMG}/piscina.webp`,
    alt: 'Piscina rodeada de quila y jardín en El Fogón',
    title: 'Agua fría, quila alrededor',
    text: 'La piscina queda al fondo del jardín, cercada por quila y árboles. En verano es el punto fijo de la tarde.',
  },
  {
    km: '04 · TINAJA Y SAUNA',
    src: `${IMG}/tinaja.webp`,
    alt: 'Sauna de madera y tinaja caliente al aire libre en El Fogón',
    title: 'La noche es de la tinaja',
    text: 'Tinaja caliente a leña y sauna de madera: “ver las estrellas dentro de una tinaja caliente”, escribe quien la probó. Se reserva por WhatsApp.',
    wa: WA_LINK_TINAJA,
    cta: 'Reservar tinaja',
  },
  {
    km: '05 · EL RÍO',
    src: `${IMG}/rio.webp`,
    alt: 'Gansos en el río junto a El Fogón de Río Claro',
    title: 'El Claro corre al lado',
    text: 'Acceso al río dentro del predio, con sus patos y gansos de siempre. El dato que más se repite: aquí se desconecta de verdad.',
  },
]

const REVIEWS = [
  {
    name: 'Mariela Miranda',
    fecha: 'hace un año',
    stars: 5,
    text: 'Lindo lugar: cabañas muy cómodas y acceso al río. Muy atentos sus dueños. Ideal para desconectar y descansar.',
  },
  {
    name: 'Marjury D.',
    fecha: 'hace 8 meses',
    stars: 5,
    text: 'La atención de sus dueños te hace sentir en casa. Rico desayuno, habitaciones amplias y ver las estrellas dentro de una tinaja caliente.',
  },
  {
    name: 'Mandy Paz',
    fecha: 'reseña de Google',
    stars: 5,
    text: 'Lugar muy lindo y acogedor. Las habitaciones son limpias y cómodas; tiene estacionamiento, piscina, comedor, restaurant y tinaja.',
  },
]

function Poste({ n, title, light }: { n: string; title: string; light?: boolean }) {
  return (
    <div className="flex items-baseline gap-4 mb-10 md:mb-14">
      <span
        className={`${mono.className} text-xs md:text-sm tracking-[0.25em] uppercase shrink-0`}
        style={{ color: light ? C.arena : C.brasa }}
      >
        {n}
      </span>
      <h2
        className={`${display.className} uppercase leading-[0.95] text-[clamp(1.9rem,6vw,3.6rem)]`}
        style={{ color: light ? C.crema : C.ink }}
      >
        {title}
      </h2>
    </div>
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
          style={{ backgroundColor: C.brasaBtn }}
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

export default function ElFogonDeRioClaroPage() {
  return (
    <div
      className={`${body.className} efr min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`
        .efr a:focus-visible { outline: 2px solid ${C.brasa}; outline-offset: 3px }
        @media (max-width: 767px) {
          .efr .camino::before {
            content: '';
            position: absolute;
            left: 9px;
            top: 6px;
            bottom: 6px;
            width: 0;
            border-left: 2px dashed rgba(30,36,28,0.3);
          }
          .efr .hitodef::before {
            content: '';
            position: absolute;
            left: -29px;
            top: 10px;
            width: 14px;
            height: 14px;
            border-radius: 9999px;
            background: ${C.crema};
            border: 3px solid ${C.brasa};
          }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(246,239,224,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.bosque,
          btnInk: C.crema,
        }}
      />

      {/* HERO — la cabaña al atardecer */}
      <header className="relative min-h-[92svh] flex items-end">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cabaña de madera de El Fogón de Río Claro al atardecer"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,26,18,0.55) 0%, rgba(15,26,18,0.15) 40%, rgba(15,26,18,0.82) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 pt-28">
          <p
            className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4`}
            style={{ color: 'rgba(246,239,224,0.85)' }}
          >
            {BIZ.rubro} — {BIZ.city}, {BIZ.region}
          </p>
          <h1
            className={`${display.className} uppercase leading-[0.92] text-[clamp(3rem,12vw,7.5rem)]`}
            style={{ color: C.crema }}
          >
            El Fogón
            <span
              className="block text-[clamp(1.4rem,5vw,3.2rem)] tracking-[0.06em] mt-2"
              style={{ color: C.brasaBtn }}
            >
              de Río Claro
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base md:text-lg leading-snug" style={{ color: 'rgba(246,239,224,0.9)' }}>
            Cabañas, piscina, tinaja a leña y mesa de campo a orillas del río
            Claro, en el corazón del Maule.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 font-bold text-base tap-44"
              style={{ backgroundColor: C.brasaBtn, color: C.ink, height: 48 }}
            >
              Reservar por WhatsApp
            </a>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 text-sm"
              style={{
                border: '1px solid rgba(246,239,224,0.45)',
                color: C.crema,
                height: 40,
                backgroundColor: 'rgba(15,26,18,0.6)',
              }}
            >
              <Stars value={5} color={C.brasaBtn} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviewsCount} reseñas en Google
            </span>
          </div>
          <p
            className={`${mono.className} mt-8 text-[11px] uppercase tracking-[0.3em]`}
            style={{ color: 'rgba(246,239,224,0.7)' }}
          >
            ↓ El recorrido del predio
          </p>
        </div>
      </header>

      {/* EL RECORRIDO — camino con hitos */}
      <section id="recorrido" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Poste n="Parcela 15c · Las Tablas" title="El recorrido" />
        </Reveal>
        <div className="camino relative pl-9 md:pl-0 space-y-14 md:space-y-20">
          {RECORRIDO.map((h, i) => (
            <Reveal key={h.km} delay={i % 2 ? 80 : 0}>
              <article
                className={`hitodef relative md:grid md:grid-cols-2 md:gap-10 items-center md:pl-0 ${
                  i % 2 ? 'md:[&>.foto]:order-2' : ''
                }`}
              >
                <div className="foto relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={h.src}
                    alt={h.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 45vw, 90vw"
                  />
                </div>
                <div className="mt-5 md:mt-0">
                  <p
                    className={`${mono.className} text-[11px] uppercase tracking-[0.25em] mb-2`}
                    style={{ color: C.brasa }}
                  >
                    {h.km}
                  </p>
                  <h3
                    className={`${display.className} uppercase text-2xl md:text-3xl leading-tight`}
                    style={{ color: C.bosque }}
                  >
                    {h.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed max-w-md" style={{ color: 'rgba(30,36,28,0.85)' }}>
                    {h.text}
                  </p>
                  {h.wa && (
                    <a
                      href={h.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center rounded-full px-5 font-bold text-sm tap-44"
                      style={{ backgroundColor: C.bosque, color: C.crema, height: 44 }}
                    >
                      {h.cta} →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LA MESA DEL FOGÓN — restaurant y cafetería */}
      <section id="mesa" className="scroll-mt-16" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Poste n="Restaurant · Cafetería" title="La mesa del fogón" light />
          </Reveal>
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            <Reveal className="md:col-span-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="Comedor y quincho de El Fogón de Río Claro"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 55vw, 90vw"
                />
              </div>
            </Reveal>
            <div className="md:col-span-2">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(246,239,224,0.92)' }}>
                El quincho-comedor es el corazón del predio: restaurant a la
                carta, cafetería de día y el desayuno que ya viene incluido con
                las cabañas.
              </p>
              <ul className="mt-6 space-y-3" style={{ color: 'rgba(246,239,224,0.85)' }}>
                {[
                  'Desayuno incluido con el hospedaje',
                  'Restaurant a la carta y cafetería',
                  'Comedor con vistas al jardín y los animales',
                  'Pavos reales y gallinas sueltas por el predio',
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm md:text-base leading-snug">
                    <span
                      className="mt-1.5 inline-block w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: C.brasaBtn }}
                      aria-hidden="true"
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center rounded-full px-6 font-bold text-base tap-44"
                style={{ backgroundColor: C.brasaBtn, color: C.ink, height: 48 }}
              >
                Consultar por mesa o estadía
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Poste n={`${BIZ.rating} en Google · ${BIZ.reviewsCount} reseñas`} title="Los que vuelven" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure
                className="h-full rounded-xl p-6 flex flex-col"
                style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}
              >
                <Stars value={r.stars} color={C.brasa} className="w-3.5 h-3.5" />
                <blockquote className="mt-3 text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(30,36,28,0.9)' }}>
                  “{r.text}”
                </blockquote>
                <figcaption
                  className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.15em]`}
                  style={{ color: 'rgba(30,36,28,0.6)' }}
                >
                  {r.name} · {r.fecha}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <p className="mt-6 text-sm" style={{ color: 'rgba(30,36,28,0.65)' }}>
            Extractos de reseñas públicas en Google Maps.{' '}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Leerlas todas →
            </a>
          </p>
        </Reveal>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="llegar" className="scroll-mt-16" style={{ backgroundColor: C.bosque2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Poste n="Ruta K-235" title="Cómo llegar" light />
            <address
              className="not-italic text-base leading-relaxed space-y-1"
              style={{ color: 'rgba(246,239,224,0.9)' }}
            >
              <p className="font-bold text-lg" style={{ color: C.crema }}>{BIZ.name}</p>
              <p>{BIZ.address} — {BIZ.sector}</p>
              <p>{BIZ.city}, {BIZ.region}</p>
              <p className="pt-2">
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </p>
            </address>
            <p className="mt-5 text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(246,239,224,0.75)' }}>
              Quienes llegan recomiendan entrar por Molina hacia el sector Las
              Tablas (ruta K-235): camino ripiado corto y en buen estado.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center rounded-full px-6 font-bold text-base tap-44"
              style={{ backgroundColor: C.brasaBtn, color: C.ink, height: 48 }}
            >
              Coordinar llegada por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'rgba(246,239,224,0.2)' }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full aspect-[4/3] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6 flex flex-col gap-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`${display.className} uppercase text-2xl`} style={{ color: C.crema }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm mt-1" style={{ color: 'rgba(246,239,224,0.75)' }}>
                {BIZ.address}, {BIZ.sector} · {BIZ.city},{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: 'rgba(246,239,224,0.7)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t" style={{ borderColor: 'rgba(246,239,224,0.15)' }}>
            <p className="pt-4 text-xs leading-relaxed" style={{ color: 'rgba(246,239,224,0.7)' }}>
              Fotos, dirección, teléfono, WhatsApp y número de reseñas son los
              reales de la ficha del negocio; los textos son de muestra.
            </p>
          </div>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
