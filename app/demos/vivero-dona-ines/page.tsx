import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_FRUTAL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF7EF',
  soft: '#F0E8D3',
  card: '#FFFDF6',
  leaf: '#3E6B3A',
  leafDeep: '#24381F',
  terra: '#9E4B2B',
  terraSoft: '#EDD0B8',
  ink: '#2F3226',
  muted: '#5F5A4A',
  line: 'rgba(47,50,38,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-dona-ines',
  title: 'Vivero Doña Inés — Plantas y frutales en Molina',
  description: 'Vivero en Itahue, sector Los Aromos, Molina. Plantas de temporada, maceteros, árboles frutales y sustratos. Consultas por WhatsApp.',
  image: '/demos/vivero-dona-ines/hero.webp',
})

const NAV_LINKS = [
  { label: 'Temporada', href: '#plantas' },
  { label: 'Frutales y sustratos', href: '#frutales' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const TEMPORADA = [
  {
    src: `${IMG}/flores.webp`,
    tag: 'flores',
    name: 'Flores de temporada',
    desc: 'Las que están dando color ahora mismo: especies de muestra, el stock real cambia cada semana según la época.',
  },
  {
    src: `${IMG}/macetas.webp`,
    tag: 'para el patio',
    name: 'Maceteros de barro y terracota',
    desc: 'Macetas en varios tamaños para trasplantar, colgar o armar el rincón de la terraza.',
  },
  {
    src: `${IMG}/invernadero.webp`,
    tag: 'recién salidas',
    name: 'Del invernadero',
    desc: 'Plantas jóvenes recién endurecidas, listas para pasar a maceta o directo a la tierra.',
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: 'Mañana y tarde' },
  { days: 'Domingo', time: 'Solo mañana' },
]

const TESTIMONIALS = [
  'Siempre encuentro lo que busco y me explican cómo cuidarla. El vivero de toda la vida, con plantas sanas.',
  'Compré un limonero y me enseñaron dónde plantarlo y cómo regarlo. Ya dio sus primeras frutas.',
  'Buen precio, atención de campo y todo el consejo del mundo. Vale la pena la ida a Itahue.',
]

function Leaf({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21 V11" />
      <path d="M12 11 C12 5.5 16 3 20.5 3 C20.5 8.5 17 11 12 11 Z" />
      <path d="M12 15 C12 10.5 8.5 8 4 8 C4 13 7.5 15 12 15 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.terraSoft : C.terra }}
    >
      <Leaf className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function ViveroDonaInesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* el nav fijo es transparente arriba: este wrapper declara el fondo oscuro real detrás (hero) */}
      <div style={{ backgroundColor: C.leafDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(251,247,239,0.94)',
            ink: C.leafDeep,
            line: C.line,
            btnBg: C.leaf,
            btnInk: '#FBF7EF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.leafDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Hileras de plantas en maceta en el vivero, con los cerros del Maule al atardecer"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(36,56,31,0.55) 0%, rgba(36,56,31,0.4) 38%, rgba(36,56,31,0.88) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(251,247,239,0.95)', color: C.leafDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.terra} stroke={C.terra} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Vivero · Itahue · Molina</Eyebrow>
            <h1
              className={`${display.className} leading-[1.04] tracking-[-0.005em] text-[clamp(2.6rem,9vw,5.6rem)] mb-6`}
              style={{ color: '#FBF7EF' }}
            >
              Lo que plantas hoy,
              <br />
              <em style={{ color: C.terraSoft }}>crece contigo</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,247,239,0.88)' }}>
              Vivero familiar en el sector de Itahue, a un costado de la
              caletera oriente: plantas de temporada, frutales, maceteros
              y el consejo de quienes las crían.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.terra, color: '#FBF7EF' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#plantas"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(251,247,239,0.55)', color: '#FBF7EF' }}
              >
                Ver lo de temporada
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(251,247,239,0.22)', backgroundColor: 'rgba(36,56,31,0.85)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,247,239,0.9)' }}>
            <span>{BIZ.address}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.terraSoft }} aria-hidden="true" />
              plantas de temporada
            </span>
            <span>Frutales · sustratos · maceteros</span>
            <span className="hidden md:inline" style={{ color: C.terraSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Plantas y temporada ── */}
      <section id="plantas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Plantas y temporada</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-16">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.leafDeep }}>
              Lo que está brotando
              <br />
              <em style={{ color: C.leaf }}>esta temporada</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra: al publicar van las fotos y las
              especies reales que el vivero tiene disponibles cada
              semana.
            </p>
          </div>
        </Reveal>
        <div className="space-y-8 md:space-y-12">
          {TEMPORADA.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                className={`group grid md:grid-cols-2 gap-5 md:gap-10 items-center`}
              >
                <div className={`relative rounded-[2rem] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={p.src}
                    alt={p.name}
                    loading="eager"
                    className="w-full h-full object-cover aspect-[3/2] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs italic px-3.5 py-1.5 rounded-full shadow-sm`}
                    style={{ backgroundColor: 'rgba(251,247,239,0.95)', color: C.leaf }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className={`${display.className} text-3xl md:text-4xl mb-3`} style={{ color: C.leafDeep }}>
                    {p.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 md:mt-16">
            {['El stock cambia cada semana', 'Consulta disponibilidad por WhatsApp', 'Consejo incluido con cada planta'].map((chip) => (
              <span key={chip} className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.leaf }}>
                <Leaf className="w-4 h-4" color={C.terra} />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Frutales y sustratos ── */}
      <section id="frutales" className="scroll-mt-20" style={{ backgroundColor: C.leafDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-[2rem] overflow-hidden rotate-[1.2deg]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
              <img
                src={`${IMG}/jardin.webp`}
                alt="Frutal joven recién plantado en un jardín con regadera y maceteros de terracota"
                loading="eager"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow light>Para el patio y la chacra</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: '#FBF7EF' }}>
              Frutales, sustratos
              <br />
              <em style={{ color: C.terraSoft }}>y buena tierra</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(251,247,239,0.85)' }}>
              Texto de muestra: aquí va la oferta real del vivero —
              frutales enraizados, plantas de interior y las bolsas de
              sustrato y tierra preparada que se venden en el local.
            </p>
            <ul className="space-y-3 mb-9">
              {['Árboles frutales para patio y parcela', 'Sustratos y tierra de hoja por saco', 'Te enseñamos cómo plantarlo y cuidarlo'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(251,247,239,0.88)' }}>
                  <Leaf className="w-4 h-4 shrink-0" color={C.terraSoft} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_FRUTAL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.terra, color: '#FBF7EF' }}
            >
              Consultar por un frutal
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.leafDeep }}>
              Lo que dicen los vecinos
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              Vivero Doña Inés acumula {BIZ.reviews} reseñas en su ficha
              de Google. Estos textos son de muestra: al publicar van
              las reseñas reales.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2"
              style={{ color: C.terra, textDecorationColor: 'rgba(193,102,63,0.35)' }}
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
                    “{t}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.terra }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar + horarios ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.leafDeep }}>
              En Itahue, camino
              <br />
              <em style={{ color: C.terra }}>a Los Aromos</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: C.muted }}>
              El vivero queda a un costado de la caletera oriente de
              Itahue, en el sector Los Aromos. En Google Maps aparece
              como «{BIZ.name}».
            </p>
            <ul className="space-y-2.5 mb-6">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.leaf} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-semibold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horario de muestra: al publicar van los horarios reales
              del vivero.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.leaf, color: '#FBF7EF' }}
              >
                Abrir en Google Maps →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm px-6 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(62,107,58,0.4)', color: C.leafDeep }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-[2rem] overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.terra }}>
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
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.06] mb-6`} style={{ color: '#FBF7EF' }}>
              Pregunta por la planta
              <br />
              <em style={{ color: '#FBE4CF' }}>que le falta a tu casa</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: '#FBF7EF' }}>
              Escríbenos por WhatsApp y te contamos qué hay en stock,
              cuánto vale y cómo llegar. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: '#FBF7EF', color: C.terra }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.leafDeep, color: '#FBF7EF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <p className={`${display.className} text-xl mb-1.5 flex items-center gap-3`}>
            <Leaf className="w-5 h-5" color={C.terraSoft} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,247,239,0.85)' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,247,239,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(251,247,239,0.8)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.terraSoft }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: productos, horarios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.terraSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
