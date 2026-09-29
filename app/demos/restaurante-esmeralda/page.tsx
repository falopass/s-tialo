import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, SITE_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2' }],
})

/**
 * Dirección de arte: «almuerzo al otro lado del río» — editorial de
 * lodge patagónico: verde esmeralda profundo, papel de carta y el
 * serif fino de un restaurant que se llega en lancha. Cormorant
 * Garamond hace el letrero del muelle; Jost, el cuaderno de viaje.
 * La estructura sigue la travesía: el restaurante, el cruce en
 * lancha, la mesa, la vista al volcán y el regreso.
 */
const C = {
  deep: '#0C2B23',
  pine: '#123C30',
  esmeralda: '#256B52',
  paper: '#F3EEE1',
  card: '#EAE3D0',
  ink: '#1D2822',
  muted: '#63706A',
  bronze: '#B98A4C',
  bronzeDeep: '#8F6420',
  line: 'rgba(29,40,34,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-esmeralda',
  title: 'Restaurante Esmeralda — Almuerzo frente al volcán Osorno, Petrohué',
  description:
    'Restaurante en Petrohué, Puerto Varas: se llega en lancha gratuita desde el embarcadero. Jabalí, trucha y salmón con vista al volcán Osorno. Reservas por WhatsApp.',
  image: '/demos/restaurante-esmeralda/hero.webp',
})

const NAV_LINKS = [
  { label: 'La travesía', href: '#travesia' },
  { label: 'La mesa', href: '#mesa' },
  { label: 'La vista', href: '#vista' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Destacados de la ficha de Google.
const PLATOS = [
  { plato: 'Jabalí con Papas Nativas', nota: 'El plato firma de la casa' },
  { plato: 'Salmón con Papas Nativas', nota: 'Fresquísimo, según las reseñas' },
  { plato: 'Posta a la Cacerola con Papas Rústicas', nota: 'La cazuela del campo' },
  { plato: 'Filete de Res con Ensalada de Temporada', nota: 'El clásico del almuerzo' },
]

const TRAVESIA = [
  {
    paso: '01',
    titulo: 'Estacionas en Puerto Petrohue',
    nota: 'Hay estacionamiento junto al embarcadero; si no ves el cartel, pregunta por el restaurante en la feria del puerto.',
  },
  {
    paso: '02',
    titulo: 'Cruzas el río en lancha',
    nota: 'El capitán del restaurante te pasa gratis al otro lado. El viaje dura unos minutos y ya es parte del almuerzo.',
  },
  {
    paso: '03',
    titulo: 'Te recibe el Osorno',
    nota: 'Al llegar: casa de madera, ventanales al lago y el volcán plantado frente a la mesa.',
  },
]

const OPINIONES = [
  {
    nombre: 'Miriam Rosica',
    estrellas: 5,
    texto: 'La belleza del entorno, la calidez de sus camareros y el excelente menú vegetariano que degustamos. Sin mencionar al capitán de la lancha que te cruza el río de manera gratuita. Todo formidable.',
  },
  {
    nombre: 'Watermelon',
    estrellas: 5,
    texto: 'Salmón fresquísimo y muy sabroso, pollo al wok con un aderezo perfecto. Ambiente fantástico y súper agradable con una atención genial, desde la camarera hasta el hombre de la barca.',
  },
  {
    nombre: 'Rodrigo Gaubert',
    estrellas: 4,
    texto: 'Ubicado a metros del embarcadero. Buen ambiente, rústico. La vista hacia el volcán le da un plus especial. Especialistas en jabalí, trucha, salmón y menú para niños. Su personal es bilingüe.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.32em] font-semibold mb-4"
      style={{ color: light ? C.bronze : C.esmeralda }}
    >
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(7,10,8,0.95)', color: '#FAF7EF' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function EsmeraldaPage() {
  return (
    <div className={`${body.className} esm min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .esm a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        @media (prefers-reduced-motion: reduce) { .esm * { transition: none !important; animation: none !important } }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.02em] font-semibold">Esmeralda</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(243,238,225,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.esmeralda,
          btnInk: '#F3EEE1',
        }}
      />

      {/* ── Hero: el ventanal del restaurante ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Comedor de madera de Restaurante Esmeralda con ventanales al lago, Petrohué"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(12,43,35,0.5) 0%, rgba(12,43,35,0.2) 40%, rgba(12,43,35,0.92) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow light>Petrohué · Puerto Varas · Lago Todos los Santos</Eyebrow>
              <h1 className={`${display.className} font-semibold leading-[0.98] text-[clamp(2.9rem,10vw,6.4rem)] mb-5`} style={{ color: C.paper }}>
                Restaurante
                <span className={`${displayItalic.className} block font-normal`} style={{ color: C.bronze }}>
                  Esmeralda
                </span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: 'rgba(243,238,225,0.88)' }}>
                Almuerzo de campo frente al volcán Osorno, en una casa de
                madera a la que solo se llega cruzando el río Petrohué en
                lancha.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.bronze, color: C.deep }}
                >
                  Reservar mesa por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.paper, textDecorationColor: C.bronze }}
                >
                  {BIZ.rating}★ · {BIZ.reviews} reseñas en Google
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La travesía ── */}
      <section id="travesia" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
          <Reveal>
            <Eyebrow>La travesía</Eyebrow>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] mb-4`} style={{ color: C.deep }}>
              El almuerzo empieza
              <br />
              <span className={displayItalic.className} style={{ color: C.esmeralda }}>antes de sentarse</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mb-10" style={{ color: C.muted }}>
              El restaurante está al otro lado del río, y eso lo cambia todo:
              las reseñas cuentan el cruce en lancha como parte de la
              experiencia, no como un trámite.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
            <ol className="space-y-0">
              {TRAVESIA.map((t, i) => (
                <Reveal key={t.paso} delay={i * 110}>
                  <li className="flex gap-5 py-6 border-b first:border-t" style={{ borderColor: C.line }}>
                    <span className={`${display.className} font-semibold text-3xl md:text-4xl leading-none shrink-0 w-14`} style={{ color: C.bronzeDeep }}>
                      {t.paso}
                    </span>
                    <div>
                      <h3 className={`${display.className} font-semibold text-2xl md:text-[26px] leading-tight mb-1.5`} style={{ color: C.deep }}>
                        {t.titulo}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                        {t.nota}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]" style={{ boxShadow: '0 18px 48px rgba(12,43,35,0.25)' }}>
                  <Image
                    src={`${IMG}/lago.webp`}
                    alt="Lago Todos los Santos y montañas: el cruce en lancha hacia Restaurante Esmeralda"
                    fill
                    sizes="(min-width: 1024px) 42vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-2 md:-left-5 w-[42%] max-w-[210px]">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/5] rotate-[-2deg]" style={{ boxShadow: '0 12px 30px rgba(12,43,35,0.32)' }}>
                    <Image
                      src={`${IMG}/volcan.webp`}
                      alt="Volcán Osorno nevado visto desde los terrenos de Restaurante Esmeralda"
                      fill
                      sizes="210px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La mesa ── */}
      <section id="mesa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
        <Reveal>
          <Eyebrow>La mesa</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.deep }}>
              Jabalí, trucha
              <br />
              <span className={displayItalic.className} style={{ color: C.esmeralda }}>y salmón del sur</span>
            </h2>
            <p className="text-xs md:text-sm max-w-[280px] leading-relaxed" style={{ color: C.muted }}>
              También opciones vegetarianas y menú para niños. Google
              indica {BIZ.precioGoogle}.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-10">
          {[
            {
              src: `${IMG}/jabali.webp`,
              alt: 'Jabalí con papas nativas y ensalada en Restaurante Esmeralda, Petrohué',
              titulo: 'Jabalí',
              nota: 'El plato firma según las reseñas.',
            },
            {
              src: `${IMG}/salmon.webp`,
              alt: 'Salmón con arroz y ensalada servido en Restaurante Esmeralda',
              titulo: 'Salmón',
              nota: 'Con papas nativas o arroz, al gusto.',
            },
            {
              src: `${IMG}/postre.webp`,
              alt: 'Postre servido junto al ventanal con el volcán Osorno de fondo',
              titulo: 'El postre con vista',
              nota: 'El final del almuerzo, mirando el Osorno.',
            },
          ].map((f, i) => (
            <Reveal key={f.titulo} delay={i * 100}>
              <figure className="h-full">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <figcaption>
                  <h3 className={`${display.className} font-semibold text-2xl mb-1`} style={{ color: C.deep }}>
                    {f.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                    {f.nota}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <ul className="max-w-2xl border-t" style={{ borderColor: C.line }}>
            {PLATOS.map((p) => (
              <li key={p.plato} className="flex items-baseline gap-4 py-3.5 border-b" style={{ borderColor: C.line }}>
                <span className={`${display.className} font-semibold text-lg md:text-xl`} style={{ color: C.deep }}>
                  {p.plato}
                </span>
                <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: C.line }} aria-hidden="true" />
                <span className="text-xs md:text-sm text-right shrink-0" style={{ color: C.muted }}>
                  {p.nota}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── La vista ── */}
      <section id="vista" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow light>La vista</Eyebrow>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.paper }}>
                El Osorno
                <br />
                <span className={displayItalic.className} style={{ color: C.bronze }}>de frente a la mesa</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: 'rgba(243,238,225,0.8)' }}>
                El restaurante mira el Lago Todos los Santos y el volcán
                Osorno. Queda a minutos de los Saltos de Petrohué: el plan
                natural es saltos primero, almuerzo después.
              </p>
              <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'rgba(243,238,225,0.65)' }}>
                Adentro, casa de madera con ventanales; afuera, terraza y
                campo abierto. Según las reseñas, el personal también
                atiende en inglés.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Mesa de madera en la terraza de Restaurante Esmeralda con vista al campo"
                    fill
                    sizes="(min-width: 1024px) 24vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mt-8">
                  <Image
                    src={`${IMG}/interior.webp`}
                    alt="Comedor de madera con pizarra de café en Restaurante Esmeralda"
                    fill
                    sizes="(min-width: 1024px) 24vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>Las {BIZ.reviews} reseñas de Google</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.deep }}>
              «Todo formidable»,
              <br />
              <span className={displayItalic.className} style={{ color: C.esmeralda }}>dice una visita</span>
            </h2>
            <div className="flex items-center gap-3">
              <Stars value={4.6} color={C.bronzeDeep} />
              <span className="text-sm font-semibold" style={{ color: C.muted }}>
                {BIZ.rating} de 5
              </span>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {OPINIONES.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 100}>
              <figure className="h-full p-5 md:p-6 rounded-xl" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                <Stars value={r.estrellas} color={C.bronzeDeep} className="w-3.5 h-3.5" />
                <blockquote className="text-[13px] md:text-sm leading-relaxed mt-3 mb-4" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.esmeralda }}>
                  {r.nombre} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
            style={{ color: C.deep, textDecorationColor: C.bronzeDeep }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow>Cómo llegar</Eyebrow>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.deep }}>
                Camino a
                <br />
                <span className={displayItalic.className} style={{ color: C.esmeralda }}>los Saltos de Petrohué</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  {BIZ.site}
                </a>
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.esmeralda, color: C.paper }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-colors tap-44"
                  style={{ borderColor: C.deep, color: C.deep }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-2xl min-h-[280px]" style={{ border: `1px solid ${C.esmeralda}` }}>
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
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ borderColor: 'rgba(243,238,225,0.16)' }}>
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(243,238,225,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              WhatsApp{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.site}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(243,238,225,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,238,225,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: 'rgba(243,238,225,0.7)' }}>
            Fotos, reseñas, dirección, rating, sitio web y teléfono son los
            reales de la ficha de Google y el sitio del restaurant.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
