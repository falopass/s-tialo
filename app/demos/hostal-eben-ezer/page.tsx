import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  papel: '#F2EAD9',
  papel2: '#EADFC7',
  oliva: '#3F4A2A',
  oliva2: '#2F3820',
  ladrillo: '#A8401F',
  ladrilloFill: '#A8401F',
  ink: '#262019',
  line: 'rgba(38,32,25,0.18)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'hostal-eben-ezer',
  title: 'Hostal Eben-Ezer — Comida casera en el centro de Empedrado',
  description:
    'Hostal y comedor de comida casera en Gral. Barboza, Empedrado. Menú del día todos los días de 10:00 a 21:00. Reserva por WhatsApp.',
  image: '/demos/hostal-eben-ezer/comedor.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El comedor', href: '#comedor' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde está', href: '#donde' },
]

const PLATOS = [
  {
    src: `${IMG}/plato-guiso.webp`,
    alt: 'Guiso de carne con arroz servido en Hostal Eben-Ezer',
    name: 'El guiso de la casa',
    nota: 'Olla larga, como se sirve siempre',
  },
  {
    src: `${IMG}/plato-cazuela.webp`,
    alt: 'Cazuela de ave con verduras en Hostal Eben-Ezer',
    name: 'La cazuela de ave',
    nota: 'Caliente, con verduras de la temporada',
  },
  {
    src: `${IMG}/plato-pure.webp`,
    alt: 'Puré con carne en Hostal Eben-Ezer',
    name: 'Puré con carne',
    nota: 'Porciones de buen tamaño, dicen las reseñas',
  },
  {
    src: `${IMG}/plato-sopa.webp`,
    alt: 'Sopa casera en Hostal Eben-Ezer',
    name: 'La sopa del día',
    nota: 'La entrada que abre el almuerzo',
  },
  {
    src: `${IMG}/plato-ensalada.webp`,
    alt: 'Ensalada fresca de lechuga y tomate en Hostal Eben-Ezer',
    name: 'La ensalada fresca',
    nota: 'Para acompañar cada plato',
  },
]

const REVIEWS = [
  {
    name: 'Estrella Azul',
    fecha: 'reseña de Google',
    stars: 5,
    text: 'El lugar es amplio, ordenado y limpio. El trato es amable y cordial, ambiente familiar. La comida casera, rica y saludable, con porción exacta.',
  },
  {
    name: 'Francisca Sepúlveda Ortiz',
    fecha: 'reseña de Google',
    stars: 5,
    text: 'Un lugar agradable, muy rico el almuerzo y las señoras que atienden muy amorosas.',
  },
  {
    name: 'Yasna Bahamondes',
    fecha: 'reseña de Google',
    stars: 4,
    text: 'Comida casera, grato sabor, porciones de buen tamaño.',
  },
]

function Cabecera({ tag, title, dark }: { tag: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-10 md:mb-14">
      <p
        className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`}
        style={{ color: dark ? '#E8C97E' : C.ladrillo }}
      >
        {tag}
      </p>
      <h2
        className={`${display.className} uppercase font-semibold leading-[0.95] text-[clamp(2rem,7vw,4rem)]`}
        style={{ color: dark ? C.papel : C.ink }}
      >
        {title}
      </h2>
      <span
        className="block mt-4 h-[3px] w-16"
        style={{ backgroundColor: dark ? '#E8C97E' : C.ladrillo }}
        aria-hidden="true"
      />
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
          style={{ backgroundColor: '#E8C97E' }}
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

export default function HostalEbenEzerPage() {
  return (
    <div
      className={`${body.className} ebe min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        .ebe a:focus-visible { outline: 2px solid ${C.ladrillo}; outline-offset: 3px }
        .ebe .marco {
          box-shadow: 0 10px 30px rgba(38,32,25,0.18);
          border: 10px solid #FBF6EA;
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: 'rgba(242,234,217,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ladrillo,
          btnInk: C.papel,
        }}
      />

      {/* HERO — la pizarra del almuerzo */}
      <header className="relative" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`}
              style={{ color: C.ladrillo }}
            >
              {BIZ.rubro} — {BIZ.city}, Maule
            </p>
            <h1
              className={`${display.className} mt-4 uppercase font-semibold leading-[0.92] text-[clamp(3.2rem,11vw,6.5rem)]`}
              style={{ color: C.oliva2 }}
            >
              Eben-
              <wbr />
              Ezer
              <span className="block text-[clamp(1.1rem,3.6vw,1.8rem)] tracking-[0.12em] mt-3" style={{ color: C.ladrillo }}>
                hostal · comida casera
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base md:text-lg leading-snug" style={{ color: 'rgba(38,32,25,0.85)' }}>
              El almuerzo de todos los días en el centro de Empedrado: menú del
              día, porciones honestas y mesa familiar desde las 10:00.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-6 font-bold text-base tap-44"
                style={{ backgroundColor: C.ladrillo, color: C.papel, height: 48 }}
              >
                Reservar por WhatsApp
              </a>
              <span
                className={`${mono.className} inline-flex items-center rounded-full px-4 text-xs uppercase tracking-[0.12em]`}
                style={{ border: `1px solid ${C.line}`, color: 'rgba(38,32,25,0.8)', height: 40 }}
              >
                {BIZ.hours}
              </span>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: 'rgba(38,32,25,0.75)' }}>
              <Stars value={4.3} color={C.ladrilloFill} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviewsCount} reseñas en Google
            </p>
          </div>
          <Reveal>
            <div className="marco relative aspect-[4/3] rounded-sm overflow-hidden md:rotate-[1.5deg]">
              <Image
                src={`${IMG}/comedor.webp`}
                alt="Comedor de Hostal Eben-Ezer con mesas y clientes almorzando"
                fill
                priority
                className="object-cover"
                sizes="(min-width:768px) 45vw, 90vw"
              />
            </div>
            <p
              className={`${mono.className} mt-10 md:mt-3 text-[11px] uppercase tracking-[0.2em] text-center md:rotate-[1.5deg]`}
              style={{ color: 'rgba(38,32,25,0.6)' }}
            >
              El comedor a la hora de almuerzo
            </p>
          </Reveal>
        </div>
      </header>

      {/* LA CARTA — pizarrón con los platos del día */}
      <section id="carta" className="scroll-mt-16" style={{ backgroundColor: C.oliva }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Cabecera tag="Del fogón a la mesa" title="La carta de la casa" dark />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {PLATOS.map((p, i) => (
              <Reveal key={p.src} delay={i * 60} className={i === 0 ? 'col-span-2 md:col-span-1' : ''}>
                <figure
                  className="rounded-lg overflow-hidden h-full"
                  style={{ backgroundColor: C.oliva2, border: '1px solid rgba(242,234,217,0.18)' }}
                >
                  <div className="relative aspect-[5/4]">
                    <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(min-width:768px) 30vw, 45vw" />
                  </div>
                  <figcaption className="p-4" style={{ color: C.papel }}>
                    <p className={`${display.className} uppercase font-medium text-lg leading-tight`} style={{ color: C.papel }}>
                      {p.name}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug" style={{ color: 'rgba(242,234,217,0.7)' }}>
                      {p.nota}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div
                className="rounded-lg p-5 h-full flex flex-col justify-center"
                style={{ backgroundColor: C.ladrilloFill }}
              >
                <p className={`${display.className} uppercase font-semibold text-2xl leading-tight`} style={{ color: C.papel }}>
                  Menú del día
                </p>
                <p className="mt-2 text-sm leading-snug" style={{ color: 'rgba(242,234,217,0.9)' }}>
                  Todos los días de 10:00 a 21:00. La carta cambia según la
                  temporada y lo que hay fresco.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full px-5 font-bold text-sm tap-44"
                  style={{ backgroundColor: C.papel, color: C.ladrillo, height: 44 }}
                >
                  Preguntar qué hay hoy
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EL COMEDOR */}
      <section id="comedor" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="marco relative aspect-[4/3] rounded-sm overflow-hidden md:-rotate-[1.2deg]">
              <Image
                src={`${IMG}/alameda.webp`}
                alt="Alameda de árboles en el centro de Empedrado"
                fill
                className="object-cover"
                sizes="(min-width:768px) 45vw, 90vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Cabecera tag="Gral. Barboza 140" title="Una mesa en el centro" />
            </Reveal>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(38,32,25,0.88)' }}>
              Comedor amplio y ordenado, a pasos de la alameda de Empedrado. Las
              reseñas lo describen igual: limpio, familiar y con la comida
              casera que uno espera encontrar cuando para en el camino.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Almuerzo y comida casera todos los días',
                'Hostal para quedarse en Empedrado',
                'Atención directa de sus dueñas',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm md:text-base leading-snug" style={{ color: 'rgba(38,32,25,0.85)' }}>
                  <span
                    className="mt-1.5 inline-block w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: C.ladrilloFill }}
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="scroll-mt-16" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Cabecera tag={`${BIZ.rating} en Google · ${BIZ.reviewsCount} reseñas`} title="Lo que dicen los que paran" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <figure
                  className="h-full rounded-lg p-6 flex flex-col"
                  style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}
                >
                  <Stars value={r.stars} color={C.ladrilloFill} className="w-3.5 h-3.5" />
                  <blockquote className="mt-3 text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(38,32,25,0.9)' }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.15em]`}
                    style={{ color: 'rgba(38,32,25,0.6)' }}
                  >
                    {r.name} · {r.fecha}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="mt-6 text-sm" style={{ color: 'rgba(38,32,25,0.65)' }}>
              Extractos de reseñas públicas en Google Maps.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                Leerlas todas →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* DÓNDE ESTÁ */}
      <section id="donde" className="scroll-mt-16" style={{ backgroundColor: C.oliva2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Cabecera tag="Empedrado, Maule" title="Dónde está" dark />
            <address className="not-italic text-base leading-relaxed space-y-1" style={{ color: 'rgba(242,234,217,0.9)' }}>
              <p className="font-bold text-lg" style={{ color: C.papel }}>{BIZ.name}</p>
              <p>{BIZ.address}</p>
              <p>{BIZ.city}, {BIZ.region}</p>
              <p>{BIZ.hours}</p>
              <p className="pt-2">
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </p>
            </address>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center rounded-full px-6 font-bold text-base tap-44"
              style={{ backgroundColor: C.ladrilloFill, color: C.papel, height: 48 }}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-lg overflow-hidden border" style={{ borderColor: 'rgba(242,234,217,0.2)' }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full aspect-[4/3] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#262E19' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6 flex flex-col gap-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`${display.className} uppercase font-semibold text-2xl`} style={{ color: C.papel }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm mt-1" style={{ color: 'rgba(242,234,217,0.75)' }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: 'rgba(242,234,217,0.7)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t" style={{ borderColor: 'rgba(242,234,217,0.15)' }}>
            <p className="pt-4 text-xs leading-relaxed" style={{ color: 'rgba(242,234,217,0.7)' }}>
              Fotos, dirección, teléfono, horario, WhatsApp y número de reseñas
              son los reales de la ficha del negocio; los textos son de muestra.
            </p>
          </div>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
