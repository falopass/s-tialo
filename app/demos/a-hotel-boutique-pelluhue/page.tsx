import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, IG_URL, FB_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
  variable: '--font-ahotel-display',
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-ahotel-body',
})

/**
 * Dirección de arte: «la casa barroca del borde costero» — azul noche,
 * oro viejo y rojo teatro, como su logotipo AH. Marco doble dorado en
 * las fotos, rombos de ornamento y serif de libro (Cormorant Garamond)
 * sobre texto en Jost.
 */
const C = {
  night: '#101A29',
  night2: '#0A111D',
  gold: '#C9A24B',
  goldSoft: '#E4CD96',
  cream: '#F3ECDD',
  crimson: '#8E2331',
  inkSoft: 'rgba(243,236,221,0.72)',
  lineGold: 'rgba(201,162,75,0.45)',
}

/** Rombito de ornamento. */
function Rombo({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block w-2 h-2 rotate-45 shrink-0 ${className}`}
      style={{ backgroundColor: C.gold }}
    />
  )
}

function Letrero({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.32em] font-medium mb-5" style={{ color: C.gold }}>
      <Rombo className="w-1.5 h-1.5" />
      {children}
      <Rombo className="w-1.5 h-1.5" />
    </p>
  )
}

/** Marco doble dorado para fotos. */
function Marco({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <figure
      className={`relative overflow-hidden ${className}`}
      style={{ border: `1px solid ${C.lineGold}`, padding: '8px', backgroundColor: C.night2 }}
    >
      <div className="relative w-full h-full overflow-hidden" style={{ border: `1px solid ${C.lineGold}` }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </figure>
  )
}

function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
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

const NAV_LINKS = [
  { label: 'La casa', href: '#la-casa' },
  { label: 'El jardín', href: '#jardin' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
]

const GALERIA_CASA = [
  {
    src: `${IMG}/sala.webp`,
    alt: 'Cómoda dorada con lámparas, espejo y flores rosadas en el interior del hotel',
  },
  {
    src: `${IMG}/rincon.webp`,
    alt: 'Rincón del hotel con sillas rojas, aparador y lámparas de araña encendidas',
  },
]

const GALERIA_JARDIN = [
  {
    src: `${IMG}/jardin.webp`,
    alt: 'Jardín del hotel con pérgola de madera, mesas de sombra y hortensias',
    cap: 'El jardín, con su pérgola',
  },
  {
    src: `${IMG}/terraza.webp`,
    alt: 'Terraza techada del hotel con sillones y vista hacia el jardín',
    cap: 'La terraza del pisco sour',
  },
  {
    src: `${IMG}/atardecer.webp`,
    alt: 'Fachada del hotel iluminada al atardecer, con el jardín en primer plano',
    cap: 'La casa encendida al atardecer',
  },
]

const TESTIMONIALS = [
  {
    text: 'Hermoso lugar, con estética maravillosa y gran atención tanto del dueño —que atiende él mismo— como de los jóvenes que trabajan con él. Las habitaciones son impecables y el desayuno es maravilloso.',
    author: 'Felipe Merino Muñoz',
    stars: 5,
  },
  {
    text: 'Un lugar lleno de detalles en su interior, jardines y vista increíble. Precioso lugar, atendido por su dueño, muy amable. Los pisco sour son de lo mejor que he probado, exquisitos.',
    author: 'Andrea Paz',
    stars: 5,
  },
  {
    text: 'Hace años que venimos un día de nuestras vacaciones a tomarnos un exquisito sour en la terraza. Este año está más florido y lindo que nunca.',
    author: 'Andrea Denisse Bustamante',
    stars: 5,
  },
]

export const metadata: Metadata = demoMetadata({
  slug: 'a-hotel-boutique-pelluhue',
  title: 'A Hotel Boutique Pelluhue — La casa de las lámparas frente al mar',
  description:
    'Hotel boutique en Condell 951, Pelluhue: interior barroco, jardín florido y terraza frente al Pacífico. Reserva directa por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

export default function AHotelPelluhuePage() {
  return (
    <div
      className={`${body.variable} ${display.variable} ahotel min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.night2, color: C.cream, fontFamily: 'var(--font-ahotel-body)' }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .ahotel a:focus-visible { outline: 2px solid ${C.goldSoft}; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(10,17,29,0.9)',
          ink: C.cream,
          line: 'rgba(243,236,221,0.18)',
          btnBg: C.gold,
          btnInk: '#0A111D',
        }}
      />

      {/* ── Hero: el pasillo de terciopelo rojo ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col items-center justify-end overflow-hidden" style={{ backgroundColor: C.night2 }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Pasillo interior de A Hotel Boutique Pelluhue con cortinas rojas, cuadros dorados y lámparas encendidas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,17,29,0.55) 0%, rgba(10,17,29,0.2) 45%, rgba(10,17,29,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-4xl mx-auto px-5 pb-12 md:pb-16 text-center">
          <Reveal>
            <Image
              src={`${IMG}/logo.webp`}
              alt="Logotipo AH de A Hotel Boutique Pelluhue"
              width={88}
              height={88}
              className="mx-auto mb-6 rounded-full"
              style={{ border: `1px solid ${C.lineGold}` }}
            />
            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] font-medium mb-4" style={{ color: C.goldSoft }}>
              {BIZ.city} · {BIZ.region}
            </p>
            <h1
              className="font-medium leading-[1.02] text-[clamp(2.6rem,9vw,5.5rem)] mb-5"
              style={{ fontFamily: 'var(--font-ahotel-display)', color: C.cream }}
            >
              La casa de las lámparas
              <br />
              <em className="not-italic" style={{ color: C.goldSoft }}>
                frente al Pacífico
              </em>
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8" style={{ color: C.inkSoft }}>
              Hotel boutique de tres estrellas en Condell 951, atendido por
              su dueño: interior barroco, jardín florido y una terraza para
              ver caer la tarde sobre el mar.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium tracking-[0.08em] uppercase px-8 py-3 transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.gold, color: C.night2 }}
              >
                Consultar disponibilidad
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="text-sm md:text-base font-medium tracking-[0.08em] uppercase px-8 py-3 border transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: C.goldSoft, color: C.goldSoft }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Firma de nota ── */}
      <section className="border-b" style={{ borderColor: C.lineGold }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="text-2xl" style={{ fontFamily: 'var(--font-ahotel-display)', color: C.gold }}>
                {BIZ.rating}
              </span>
              <Stars value={4.8} color={C.gold} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.18em] font-medium underline underline-offset-4 decoration-1 hover:decoration-2 tap-44"
                style={{ color: C.inkSoft }}
              >
                {BIZ.reviews} opiniones en Google
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-xs uppercase tracking-[0.18em] font-medium flex items-center gap-3" style={{ color: C.inkSoft }}>
              <Rombo className="w-1.5 h-1.5" /> Hotel 3 estrellas <Rombo className="w-1.5 h-1.5" /> Desayuno incluido
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="la-casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Letrero>La casa</Letrero>
          <h2
            className="text-center font-medium text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto mb-6"
            style={{ fontFamily: 'var(--font-ahotel-display)' }}
          >
            Cada rincón, un cuadro
            <br />
            <span style={{ color: C.goldSoft }}>iluminado a lámpara</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto mb-12 md:mb-16" style={{ color: C.inkSoft }}>
            Cómodas doradas, terciopelo rojo, espejos y arañas: el interior
            de la casa es su propia galería. Fotos reales del hotel; las
            descripciones son de muestra.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
          {GALERIA_CASA.map((f, i) => (
            <Reveal key={f.src} delay={i * 120}>
              <Marco src={f.src} alt={f.alt} className="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El jardín y el mar ── */}
      <section id="jardin" className="scroll-mt-20 border-y" style={{ borderColor: C.lineGold, backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Letrero>El jardín y el mar</Letrero>
            <h2
              className="text-center font-medium text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto mb-6"
              style={{ fontFamily: 'var(--font-ahotel-display)' }}
            >
              Donde el atardecer
              <br />
              <span style={{ color: C.goldSoft }}>se toma con pisco sour</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto mb-12 md:mb-16" style={{ color: C.inkSoft }}>
              La terraza y el jardín sobre el borde costero son la parte
              favorita de quienes vuelven cada año — «los pisco sour de lo
              mejor que he probado», escriben.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {GALERIA_JARDIN.map((f, i) => (
              <Reveal key={f.src} delay={i * 120}>
                <figure>
                  <Marco src={f.src} alt={f.alt} className="aspect-[4/5]" />
                  <figcaption
                    className="mt-4 text-center text-sm italic"
                    style={{ fontFamily: 'var(--font-ahotel-display)', color: C.goldSoft }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Las habitaciones ── */}
      <section id="habitaciones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <Marco
              src={`${IMG}/habitacion.webp`}
              alt="Dormitorio del hotel con cama imperial de terciopelo rojo, papel mural floreado y lámparas"
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={120}>
            <Letrero>Las habitaciones</Letrero>
            <h2
              className="font-medium text-4xl md:text-5xl leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-ahotel-display)' }}
            >
              Terciopelo, papel mural
              <br />
              <span style={{ color: C.goldSoft }}>y mar al despertar</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.inkSoft }}>
              Habitaciones impecables —palabra de las reseñas— en una casa
              que no parece hotel sino hogar de familia. Desayuno americano
              incluido en la estadía.
            </p>
            <ul className="space-y-3 text-sm mb-8" style={{ color: C.inkSoft }}>
              {[
                'Hotel de 3 estrellas, frente al mar',
                'Atendido personalmente por su dueño',
                'Desayuno americano incluido',
                'Espacio amigable para todas las personas',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Rombo className="w-1.5 h-1.5" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm md:text-base font-medium tracking-[0.08em] uppercase px-8 py-3 transition-all hover:brightness-110 active:scale-95 tap-44"
              style={{ backgroundColor: C.crimson, color: C.cream }}
            >
              Reservar habitación →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 border-t" style={{ borderColor: C.lineGold, backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Letrero>Las opiniones</Letrero>
            <div className="text-center mb-12 md:mb-14">
              <span
                className="block font-medium text-7xl md:text-8xl leading-none mb-3"
                style={{ fontFamily: 'var(--font-ahotel-display)', color: C.gold }}
              >
                {BIZ.rating}
              </span>
              <Stars value={4.8} color={C.gold} className="mx-auto w-5 h-5" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs uppercase tracking-[0.2em] font-medium underline underline-offset-4 decoration-1 hover:decoration-2 tap-44"
                style={{ color: C.inkSoft }}
              >
                {BIZ.reviews} opiniones en Google →
              </a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 120}>
                <figure
                  className="h-full p-6 md:p-7"
                  style={{ border: `1px solid ${C.lineGold}`, backgroundColor: C.night2 }}
                >
                  <div className="mb-4">
                    <Stars value={t.stars} color={C.gold} className="w-4 h-4" />
                  </div>
                  <blockquote
                    className="text-[15px] leading-relaxed italic mb-6"
                    style={{ fontFamily: 'var(--font-ahotel-display)', color: C.cream }}
                  >
                    “{t.text}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: C.goldSoft }}>
                    {t.author} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar / ubicación ── */}
      <section id="reservar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <Letrero>Reserva directa</Letrero>
            <h2
              className="font-medium text-4xl md:text-5xl leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-ahotel-display)' }}
            >
              Condell 951,
              <br />
              <span style={{ color: C.goldSoft }}>Pelluhue</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.inkSoft }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}, Chile
            </address>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium tracking-[0.08em] uppercase px-8 py-3 transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.gold, color: C.night2 }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium tracking-[0.08em] uppercase px-8 py-3 border transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: C.goldSoft, color: C.goldSoft }}
              >
                Abrir en Maps
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-medium flex flex-wrap gap-x-6 gap-y-2" style={{ color: C.inkSoft }}>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 hover:decoration-2 tap-44">
                {BIZ.igHandle}
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 hover:decoration-2 tap-44">
                Facebook oficial
              </a>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="relative overflow-hidden min-h-[300px]"
              style={{ border: `1px solid ${C.lineGold}`, padding: '8px', backgroundColor: C.night }}
            >
              <div className="relative w-full h-full" style={{ border: `1px solid ${C.lineGold}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#060B14', color: C.cream }}>
        <div
          className="h-px"
          style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.gold} 0 26px, transparent 26px 40px)`, opacity: 0.5 }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image src={`${IMG}/logo.webp`} alt="" width={40} height={40} className="rounded-full" />
              <p className="font-medium text-xl" style={{ fontFamily: 'var(--font-ahotel-display)' }}>
                {BIZ.name}
              </p>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.inkSoft }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.inkSoft }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,236,221,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(243,236,221,0.7)' }}>
            Fotos, logo, dirección, teléfono y reseñas son reales; las
            descripciones de espacios y habitaciones son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
