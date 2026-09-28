import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, FOTOS, WA_LINK, WA_LINK_STOCK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const viDisplay = localFont({
  src: [
    { path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const viBody = localFont({
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
  title: 'Vivero Doña Inés — El vivero de Itahue, Molina',
  description: 'Vivero en Itahue, sector Los Aromos, Molina. Plantas en bolsa, almácigos y arreglos, a un costado de la caletera oriente. Consultas por WhatsApp.',
  image: FOTOS.plantas.src,
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#vivero' },
  { label: 'Antes de ir', href: '#antes' },
  { label: 'Cómo llegar', href: '#llegar' },
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
      className={`${viBody.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <div style={{ backgroundColor: C.leafDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={viDisplay.className}
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

      {/* ── Hero a sangre: plantas reales en bolsa ── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.leafDeep }}>
        <img
          src={FOTOS.plantas.src}
          alt={FOTOS.plantas.alt}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(36,56,31,0.5) 0%, rgba(36,56,31,0.3) 38%, rgba(36,56,31,0.9) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(251,247,239,0.95)', color: C.leafDeep }}
            >
              <Stars value={BIZ.rating} color={C.terra} className="w-[14px] h-[14px]" />
              {BIZ.ratingLabel} en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Vivero familiar · Itahue · Molina</Eyebrow>
            <h1
              className={`${viDisplay.className} leading-[1.04] tracking-[-0.005em] text-[clamp(2.5rem,9vw,5.4rem)] mb-6`}
              style={{ color: '#FBF7EF' }}
            >
              El vivero de
              <br />
              <em style={{ color: C.terraSoft }}>Itahue</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(251,247,239,0.9)' }}>
              Plantas en bolsa, almácigos bajo malla y arreglos hechos
              a mano, a un costado de la caletera oriente, camino a
              Los Aromos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_STOCK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${viDisplay.className} text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.terra, color: '#FBF7EF' }}
              >
                Preguntar qué hay esta semana
              </a>
              <a
                href="#llegar"
                className={`${viDisplay.className} text-sm px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(251,247,239,0.55)', color: '#FBF7EF' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(251,247,239,0.22)', backgroundColor: 'rgba(36,56,31,0.85)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,247,239,0.9)' }}>
            <span>{BIZ.address}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.terraSoft }} aria-hidden="true" />
              stock según temporada
            </span>
            <span>Confirma el horario por WhatsApp</span>
          </div>
        </div>
      </section>

      {/* ── El vivero por dentro: solo fotos reales ── */}
      <section id="vivero" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Así se ve el vivero</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${viDisplay.className} text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.leafDeep }}>
              Criado acá mismo,
              <br />
              <em style={{ color: C.leaf }}>entre Itahue y Los Aromos</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Estas son las fotos reales que el vivero publica en su
              ficha de Google: las plantas se crían al aire libre y
              bajo malla, a la orilla del camino.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          <Reveal>
            <figure className="rounded-[2rem] overflow-hidden md:row-span-2 h-full">
              <img
                src={FOTOS.plantas.src}
                alt={FOTOS.plantas.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </figure>
          </Reveal>
          <Reveal delay={90}>
            <figure className="rounded-[2rem] overflow-hidden">
              <img
                src={FOTOS.almacigos.src}
                alt={FOTOS.almacigos.alt}
                loading="lazy"
                className="w-full object-cover aspect-[4/3]"
              />
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <figure className="rounded-[2rem] overflow-hidden">
              <img
                src={FOTOS.arreglos.src}
                alt={FOTOS.arreglos.alt}
                loading="lazy"
                className="w-full object-cover aspect-[4/3]"
              />
            </figure>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 md:mt-14">
            {['Plantas en bolsa listas para plantar', 'Almácigos bajo malla sombra', 'Arreglos de suculentas hechos a mano'].map((chip) => (
              <span key={chip} className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.leaf }}>
                <Leaf className="w-4 h-4" color={C.terra} />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Antes de ir ── */}
      <section id="antes" className="scroll-mt-20" style={{ backgroundColor: C.leafDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Antes de ir</Eyebrow>
            <h2 className={`${viDisplay.className} text-4xl md:text-5xl leading-[1.06] mb-4`} style={{ color: '#FBF7EF' }}>
              Escríbenos primero,
              <br />
              <em style={{ color: C.terraSoft }}>sales con la planta segura</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-10 md:mb-14" style={{ color: 'rgba(251,247,239,0.85)' }}>
              El vivero atiende según la temporada y el trabajo de campo.
              Por WhatsApp confirmas horario, stock y precio antes de
              manejar hasta Itahue.
            </p>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { t: 'Horario', d: 'Cambia con la temporada: confírmalo por WhatsApp el mismo día que piensas ir.' },
              { t: 'Stock', d: 'Pregunta qué plantas hay esta semana; el vivero trabaja con lo que está en temporada.' },
              { t: 'Retiro', d: 'El local queda a un costado de la caletera oriente de Itahue, sector Los Aromos.' },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <li className="rounded-3xl p-6 h-full border" style={{ backgroundColor: 'rgba(251,247,239,0.06)', borderColor: 'rgba(251,247,239,0.2)' }}>
                  <Leaf className="w-5 h-5 mb-4" color={C.terraSoft} />
                  <h3 className={`${viDisplay.className} text-xl mb-2`} style={{ color: '#FBF7EF' }}>{s.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,247,239,0.82)' }}>{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <a
              href={WA_LINK_STOCK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${viDisplay.className} inline-block mt-10 text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.terra, color: '#FBF7EF' }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales (solo nota + link, sin citas inventadas) ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div
            className="rounded-[2rem] p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border"
            style={{ backgroundColor: C.card, borderColor: C.line }}
          >
            <div className="flex items-center gap-4">
              <Stars value={BIZ.rating} color={C.terra} className="w-5 h-5" />
              <p className={`${viDisplay.className} text-4xl md:text-5xl`} style={{ color: C.leafDeep }}>
                {BIZ.ratingLabel}
              </p>
            </div>
            <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: C.muted }}>
              Nota promedio en la ficha de Google, con {BIZ.reviewsLabel}
              de vecinos y visitantes del sector.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold px-6 py-3 rounded-full border-2 transition-colors tap-44"
              style={{ borderColor: 'rgba(62,107,58,0.4)', color: C.leafDeep }}
            >
              Ver la ficha en Google →
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${viDisplay.className} text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.leafDeep }}>
              Dobla en Itahue
              <br />
              <em style={{ color: C.terra }}>y sigue la caletera</em>
            </h2>
            <figure className="rounded-3xl overflow-hidden mb-6">
              <img
                src={FOTOS.llegada.src}
                alt={FOTOS.llegada.alt}
                loading="lazy"
                className="w-full object-cover aspect-[16/10]"
              />
            </figure>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-sm" style={{ color: C.muted }}>
              El vivero queda a un costado de la caletera oriente de
              Itahue, en el sector Los Aromos. En Google Maps aparece
              como «{BIZ.name}».
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${viDisplay.className} text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.leaf, color: '#FBF7EF' }}
              >
                Abrir en Google Maps →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${viDisplay.className} text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(62,107,58,0.4)', color: C.leafDeep }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-[2rem] overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
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
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.terra }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${FOTOS.plantas.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${viDisplay.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.06] mb-6`} style={{ color: '#FBF7EF' }}>
              Pregunta por la planta
              <br />
              <em style={{ color: '#FBE4CF' }}>que le falta a tu casa</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: '#FBF7EF' }}>
              Escríbenos por WhatsApp, te contamos qué hay en stock
              esta semana y te confirmamos el horario del día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${viDisplay.className} inline-block text-sm px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
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
          <p className={`${viDisplay.className} text-xl mb-1.5 flex items-center gap-3`}>
            <Leaf className="w-5 h-5" color={C.terraSoft} />
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,247,239,0.85)' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp {BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,247,239,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(251,247,239,0.8)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.terraSoft }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.terraSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
