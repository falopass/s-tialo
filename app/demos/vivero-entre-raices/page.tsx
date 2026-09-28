import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_FRUTAL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-300.woff2', weight: '300', style: 'normal' },
    { path: '../../fonts/lato/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/lato/normal-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-body',
})

const C = {
  paper: '#F7F9F9',
  petrol: '#0E4C5C',
  petrolDeep: '#093540',
  mint: '#9FD8CB',
  mintSoft: '#E4F1EE',
  graphite: '#2E3538',
  muted: '#5B6A70',
  line: 'rgba(14,76,92,0.25)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-entre-raices',
  title: 'Vivero Entre Raices — Centro de jardinería en Linares',
  description: 'Centro de jardinería en Los Cardenales 848, Linares. Plantas de temporada, frutales, maceteros y sustratos. Consultas por WhatsApp.',
  image: '/demos/vivero-entre-raices/hero.webp',
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#vivero' },
  { label: 'La casa', href: '#local' },
  { label: 'Precios', href: '#precios' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const NOTAS = [
  {
    src: `${IMG}/invernadero.webp`,
    alt: 'Interior del invernadero con plantas colgantes y mesas de producción',
    kicker: 'invernadero',
    title: 'Recién endurecidas, listas para maceta o tierra',
    desc: 'Plantas jóvenes que salen del invernadero ya aclimatadas al aire libre del Maule.',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Maceteros de terracota con hierbas y aromáticas en la entrada del vivero',
    kicker: 'terraza y cocina',
    title: 'Aromáticas y hierbas para tener a mano',
    desc: 'Albahaca, romero, tomillo y más, en maceteros de terracota listos para llevar.',
  },
  {
    src: `${IMG}/jardin.webp`,
    alt: 'Rincón de jardín con un citrico joven en maceta, regadera y herramientas',
    kicker: 'patio y parcela',
    title: 'Frutales con consejo de plantación incluido',
    desc: 'Frutales para patio y parcela: te explican dónde plantarlo, cómo regarlo y cuándo podar.',
  },
]

const PRECIOS = [
  { item: 'Planta de temporada en maceta', price: 'desde $2.500' },
  { item: 'Aromática en maceta pequeña', price: 'desde $1.800' },
  { item: 'Macetero de terracota mediano', price: '$5.990' },
  { item: 'Sustrato, bolsa de 20 litros', price: '$4.990' },
  { item: 'Tierra de hoja, bolsa de 20 litros', price: '$4.500' },
  { item: 'Árbol frutal enraizado', price: 'desde $12.000' },
]

const HORAS = [
  { days: 'Lunes a sábado', time: 'Mañana y tarde' },
  { days: 'Domingo', time: 'Solo mañana' },
]

const TESTIMONIALS = [
  'Me atendieron altiro y me explicaron cómo cuidar cada planta que me llevé. Se nota que saben.',
  'Compré un limonero y me enseñaron dónde plantarlo. Se afirmó perfecto y ya está creciendo.',
  'Precios justos y todo muy ordenado. Vivo cerca y ahora paso cada vez que necesito algo para el jardín.',
]

function Leaf({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19 C5 10 11 4 20 4 C20 13 14 19 5 19 Z" />
      <path d="M7.5 16.5 C10.5 12.5 13.5 9.5 16.5 6.5" />
    </svg>
  )
}

function Filete({ light = false }: { light?: boolean }) {
  const color = light ? 'rgba(247,249,249,0.55)' : C.petrol
  return (
    <div aria-hidden="true" className="w-full">
      <div className="h-[3px]" style={{ backgroundColor: color }} />
      <div className="h-px mt-[3px]" style={{ backgroundColor: color }} />
    </div>
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] font-black uppercase tracking-[0.28em] mb-3"
      style={{ color: light ? C.mint : C.petrol }}
    >
      {children}
    </p>
  )
}

export default function ViveroEntreRaicesPage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${body.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.graphite }}
    >
      {/* ── Cabecera del periódico ── */}
      <header id="inicio" className="pt-6 md:pt-8">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {/* barra superior: rubro · ciudad · edición */}
          <div
            className="flex items-baseline justify-between gap-4 border-b pb-2 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold"
            style={{ borderColor: C.line, color: C.muted }}
          >
            <span>{BIZ.rubro}</span>
            <span className="hidden sm:inline">Linares · Región del Maule</span>
            <span>Edición de muestra</span>
          </div>

          {/* cabecera */}
          <div className="py-7 md:py-10 text-center">
            <h1
              className={`${display.className} font-bold leading-[0.95] tracking-[-0.01em] text-[clamp(2.6rem,9.5vw,6.5rem)]`}
              style={{ color: C.petrol }}
            >
              Vivero <em className="font-medium">Entre Raices</em>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-5" aria-hidden="true">
              <span className="h-px flex-1 max-w-[180px]" style={{ backgroundColor: C.line }} />
              <Leaf className="w-5 h-5" color={C.petrol} />
              <span className="h-px flex-1 max-w-[180px]" style={{ backgroundColor: C.line }} />
            </div>
          </div>

          {/* doble filete + fecha */}
          <Filete />
          <div
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2.5 border-b text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold"
            style={{ borderColor: C.petrol, color: C.muted }}
          >
            <span>Linares, domingo 27 de septiembre de 2026</span>
            <nav className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Secciones">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E4C5C] tap-44"
                  style={{ color: C.petrol }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E4C5C] tap-44"
              style={{ color: C.petrol }}
            >
              {BIZ.reviews} reseñas en Google
            </a>
          </div>
        </div>
      </header>

      {/* ── Portada: titular + foto a sangre ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-10 md:pb-12">
        <Reveal>
          <Kicker>Portada · El vivero de Linares</Kicker>
          <h2
            className={`${display.className} font-bold leading-[1.02] tracking-[-0.015em] text-[clamp(2rem,6.2vw,4.4rem)] max-w-4xl mb-5`}
            style={{ color: C.graphite }}
          >
            En Los Cardenales 848, la primavera se cultiva en maceta
          </h2>
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-12 items-end mb-8 md:mb-10">
            <p className="text-base md:text-xl leading-relaxed max-w-[calc(100%-3.5rem)] md:max-w-none" style={{ color: C.muted }}>
              Centro de jardinería de atención directa en Linares: plantas de
              temporada, aromáticas, frutales, maceteros y sustratos — y la
              palabra de quien las cría para que cada una llegue bien a tu casa.
            </p>
            <div className="flex flex-wrap md:justify-end gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-7 py-3.5 bg-[#0E4C5C] text-[#F7F9F9] transition-colors hover:bg-[#093540] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C] tap-44"
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#vivero"
                className="text-sm md:text-base font-bold px-7 py-3.5 border-2 border-[#0E4C5C] text-[#0E4C5C] transition-colors hover:bg-[#0E4C5C] hover:text-[#F7F9F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C] tap-44"
              >
                Leer la edición
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* foto principal a sangre */}
      <figure className="relative">
        <div className="relative h-[52vh] md:h-[68vh] overflow-hidden" style={{ backgroundColor: C.petrolDeep }}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="Hileras de plantas en maceta en el vivero, con lavanda en primer plano y los cerros del Maule al fondo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 md:top-6 right-4 md:right-6 flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4C5C] tap-44x"
            style={{ backgroundColor: 'rgba(247,249,249,0.96)', color: C.petrol }}
          >
            <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.petrol} aria-hidden="true">
              <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
            </svg>
            {BIZ.reviews} reseñas en Google
          </a>
        </div>
        <figcaption
          className="border-b text-[11px] md:text-xs italic px-5 md:px-8 py-2.5 flex flex-wrap justify-between gap-x-6 gap-y-1"
          style={{ borderColor: C.line, color: C.muted, backgroundColor: C.paper }}
        >
          <span>El vivero al atardecer: hileras de macetas esperando dueño.</span>
          <span className="not-italic uppercase tracking-[0.16em] font-bold">Foto de muestra</span>
        </figcaption>
      </figure>

      {/* entradilla en columnas con capitular */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <Reveal>
          <p
            className="text-[15px] md:text-base leading-[1.75] md:columns-3 gap-8 first-letter:float-left first-letter:font-[family-name:var(--font-display)] first-letter:text-[3.6rem] first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-1 first-letter:font-bold first-letter:text-[#0E4C5C]"
            style={{ color: C.graphite, columnRule: `1px solid ${C.line}` }}
          >
            A pasos del centro de Linares, en Los Cardenales 848, funciona un
            centro de jardinería de los de antes: se entra, se mira, se pregunta
            y se sale con la planta correcta para el lugar correcto. Este sitio
            es una muestra de cómo se vería su página — los datos de contacto,
            la dirección y las reseñas son reales; los textos, precios y fotos
            son de ejemplo.{'\u00A0'}En sus {BIZ.reviews} reseñas de Google los
            vecinos destacan la buena atención, y su página de Facebook —donde
            ya los siguen {BIZ.facebookFollowers} personas— muestra un negocio
            activo, con stock que cambia semana a semana. Al publicarse, cada
            párrafo de esta edición llevaría la letra real de la casa.
          </p>
        </Reveal>
      </section>

      {/* ── Sección: el vivero ── */}
      <section id="vivero" className="scroll-mt-8 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal>
          <Filete />
          <div className="flex items-baseline justify-between gap-4 pt-4 mb-8 md:mb-10">
            <h2
              className={`${display.className} font-bold text-3xl md:text-5xl leading-none`}
              style={{ color: C.petrol }}
            >
              El vivero
            </h2>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold shrink-0" style={{ color: C.muted }}>
              Sección plantas
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-0">
          {/* nota principal */}
          <Reveal>
            <article className="lg:pr-10 lg:border-r" style={{ borderColor: C.line }}>
              <div className="relative overflow-hidden mb-5 aspect-[16/10]" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/flores.webp`}
                  alt="Macetas con lavanda, margaritas y geranios en flor"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <Kicker>temporada</Kicker>
              <h3
                className={`${display.className} font-bold text-2xl md:text-4xl leading-[1.05] mb-4`}
                style={{ color: C.graphite }}
              >
                El color del mes ya está en los estantes
              </h3>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Flores de temporada en maceta para el patio, el balcón o la
                entrada de la casa. Texto de muestra: al publicar van las
                especies reales que el vivero tiene disponibles cada semana.
              </p>
            </article>
          </Reveal>

          {/* columna de notas breves */}
          <div className="lg:pl-10 flex flex-col divide-y" style={{ borderColor: C.line }}>
            {NOTAS.map((n, i) => (
              <Reveal key={n.title} delay={i * 90}>
                <article className={`grid grid-cols-[112px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-5 ${i === 0 ? 'pb-6' : i === NOTAS.length - 1 ? 'pt-6' : 'py-6'}`}>
                  <div className="relative overflow-hidden self-start aspect-square" style={{ border: `1px solid ${C.line}` }}>
                    <Image
                      src={n.src}
                      alt={n.alt}
                      fill
                      sizes="(min-width: 768px) 140px, 112px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] mb-1.5" style={{ color: C.petrol }}>
                      {n.kicker}
                    </p>
                    <h3
                      className={`${display.className} font-bold text-lg md:text-xl leading-[1.12] mb-2`}
                      style={{ color: C.graphite }}
                    >
                      {n.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.muted }}>
                      {n.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={NOTAS.length * 90}>
              <div className="pt-6">
                <a
                  href={WA_LINK_FRUTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 hover:text-[#093540] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E4C5C] tap-44"
                  style={{ color: C.petrol, textDecorationColor: C.mint }}
                >
                  Consultar por un frutal →
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={140}>
          <p
            className="mt-10 pt-4 border-t text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold flex flex-wrap gap-x-8 gap-y-2"
            style={{ borderColor: C.line, color: C.petrol }}
          >
            <span>El stock cambia cada semana</span>
            <span>Consulta disponibilidad por WhatsApp</span>
            <span>Consejo incluido con cada planta</span>
          </p>
        </Reveal>
      </section>

      {/* ── Crónica local: sobre el negocio ── */}
      <section id="local" className="scroll-mt-8" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Filete />
            <div className="flex items-baseline justify-between gap-4 pt-4 mb-8 md:mb-10">
              <h2
                className={`${display.className} font-bold text-3xl md:text-5xl leading-none`}
                style={{ color: C.petrol }}
              >
                La casa
              </h2>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold shrink-0" style={{ color: C.muted }}>
                Crónica local
              </span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <p
                className="text-[15px] md:text-base leading-[1.75] md:columns-2 gap-8 mb-8 first-letter:float-left first-letter:font-[family-name:var(--font-display)] first-letter:text-[3.6rem] first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-1 first-letter:font-bold first-letter:text-[#0E4C5C]"
                style={{ color: C.graphite, columnRule: `1px solid ${C.line}` }}
              >
                Vivero Entre Raices atiende en Los Cardenales 848, en Linares,
                con el trato directo de un negocio chico: quien te vende la
                planta es quien la cuida. Eso se nota en las {BIZ.reviews}{' '}
                reseñas que ya acumula en Google y en los{' '}
                {BIZ.facebookFollowers} seguidores que siguen su página de
                Facebook, donde publican lo que va llegando al local. Este
                texto es de muestra: al publicarse, aquí iría la historia real
                del vivero, contada por sus dueños.
              </p>
              <div className="space-y-5">
                {TESTIMONIALS.map((t, i) => (
                  <figure key={i} className="border-l-[3px] pl-5" style={{ borderColor: C.petrol }}>
                    <blockquote
                      className={`${display.className} italic text-base md:text-lg leading-snug mb-2`}
                      style={{ color: C.graphite }}
                    >
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.muted }}>
                      Reseña de ejemplo — al publicar van las reales
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>

            {/* ficha del local */}
            <Reveal delay={120}>
              <aside
                className="border p-6 md:p-7"
                style={{ borderColor: C.petrol, backgroundColor: C.paper }}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.24em] mb-5" style={{ color: C.petrol }}>
                  Ficha del local
                </p>
                <dl className="divide-y text-sm" style={{ borderColor: C.line }}>
                  {[
                    ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                    ['Región', BIZ.region],
                    ['WhatsApp', BIZ.phoneDisplay],
                    ['Google', `${BIZ.reviews} reseñas`],
                    ['Facebook', `${BIZ.facebookFollowers} seguidores`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                      <dt className="uppercase tracking-[0.12em] text-[11px] font-bold" style={{ color: C.muted }}>
                        {k}
                      </dt>
                      <dd className={`${display.className} font-semibold text-right`} style={{ color: C.graphite }}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm font-bold underline underline-offset-4 decoration-2 hover:text-[#093540] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E4C5C] tap-44"
                  style={{ color: C.petrol, textDecorationColor: C.mint }}
                >
                  Ver la página de Facebook →
                </a>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Guía de precios ── */}
      <section id="precios" className="scroll-mt-8 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Filete />
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-12 items-end pt-4 mb-8 md:mb-10">
            <h2
              className={`${display.className} font-bold text-3xl md:text-5xl leading-none`}
              style={{ color: C.petrol }}
            >
              Guía de precios
            </h2>
            <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.muted }}>
              Valores de muestra para mostrar cómo se vería la lista. Al
              publicar van los precios reales del vivero.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="max-w-3xl">
            {PRECIOS.map((p) => (
              <li key={p.item} className="flex items-baseline py-3.5 text-sm md:text-base">
                <span className="font-bold" style={{ color: C.graphite }}>{p.item}</span>
                <span className="flex-1 mx-3 border-b border-dotted" style={{ borderColor: C.muted }} aria-hidden="true" />
                <span className={`${display.className} font-semibold whitespace-nowrap`} style={{ color: C.petrol }}>
                  {p.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed max-w-2xl" style={{ color: C.muted }}>
            * Lista y precios de ejemplo — el stock y los valores reales se
            confirman por WhatsApp el mismo día.
          </p>
        </Reveal>
      </section>

      {/* ── Avisos: contacto y cómo llegar ── */}
      <section id="contacto" className="scroll-mt-8" style={{ backgroundColor: C.petrol }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Filete light />
            <div className="flex items-baseline justify-between gap-4 pt-4 mb-8 md:mb-10">
              <h2
                className={`${display.className} font-bold text-3xl md:text-5xl leading-none`}
                style={{ color: C.paper }}
              >
                Avisos
              </h2>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold shrink-0" style={{ color: C.mint }}>
                Contacto y cómo llegar
              </span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Kicker light>Se atiende por WhatsApp</Kicker>
              <h3
                className={`${display.className} font-bold text-2xl md:text-4xl leading-[1.06] mb-5`}
                style={{ color: C.paper }}
              >
                Pregunta por la planta
                <br />
                <em style={{ color: C.mint }}>que le falta a tu casa</em>
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(247,249,249,0.8)' }}>
                Escríbenos y te contamos qué hay en stock, cuánto vale y cómo
                llegar. La dirección es {BIZ.address}, Linares — en Google Maps
                aparece como «{BIZ.name}».
              </p>
              <ul className="space-y-2.5 mb-8">
                {HORAS.map((h) => (
                  <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(247,249,249,0.85)' }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.mint} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7 v5 l3.5 2" />
                    </svg>
                    <span>
                      <strong className="font-bold">{h.days}:</strong> {h.time}
                    </span>
                  </li>
                ))}
                <li className="text-xs pt-1" style={{ color: 'rgba(247,249,249,0.75)' }}>
                  Horario de muestra: al publicar van los horarios reales.
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-bold px-7 py-3.5 bg-[#9FD8CB] text-[#093540] transition-colors hover:bg-[#F7F9F9] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9FD8CB] tap-44"
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-bold px-7 py-3.5 border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9FD8CB] tap-44"
                  style={{ borderColor: 'rgba(247,249,249,0.55)', color: C.paper }}
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="border min-h-[320px] h-full overflow-hidden"
                style={{ borderColor: 'rgba(247,249,249,0.3)', backgroundColor: C.petrolDeep }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Colofón ── */}
      <footer style={{ backgroundColor: C.petrolDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 md:pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold text-2xl mb-1 flex items-center gap-3`}>
              <Leaf className="w-5 h-5" color={C.mint} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,249,249,0.85)' }}>
              {BIZ.address}, {BIZ.city} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9FD8CB] tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem]" style={{ color: 'rgba(247,249,249,0.78)' }}>
            Mockup de Sitiazo: datos del vivero reales; textos, precios y fotos de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
