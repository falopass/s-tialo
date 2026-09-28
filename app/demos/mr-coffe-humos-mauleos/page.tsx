import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG, HORAS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  base: '#171009',
  card: '#221710',
  ink: '#F5EDE0',
  muted: '#B3A493',
  ember: '#E4572E',
  // Variante quemada para fondos sólidos con texto blanco: #E4572E da 3.7:1
  // con blanco (baja de 4.5); este tono llega a ~5.1:1.
  emberBtn: '#C0431F',
  line: 'rgba(245,237,224,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'mr-coffe-humos-mauleos',
  title: 'Mr.Coffe / Humos Mauleños — Restaurant en el bypass de San Clemente',
  description: 'Restaurante y smokehouse en el bypass de San Clemente, Región del Maule. Carnes ahumadas, café, terraza y jardín. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La brasa', href: '#brasa' },
  { label: 'El café', href: '#cafe' },
  { label: 'El jardín', href: '#jardin' },
  { label: 'Ubicación', href: '#ruta' },
]

const BRASA = [
  {
    src: `${IMG}/parrilla.webp`,
    alt: 'Plato de carne a la parrilla con arroz y papas fritas, acompañado de tragos',
    title: 'Carnes ahumadas y a la parrilla',
    desc: 'Costillas BBQ que los clientes mencionan una y otra vez, cortes al fuego lento y platos de fondo contundentes. La cocina humea desde temprano.',
  },
  {
    src: `${IMG}/burger.webp`,
    alt: 'Hamburguesa con papas fritas y milkshake en el restaurant',
    title: 'La hamburguesa de la ruta',
    desc: 'Pan, carne y papas de verdad, con milkshake o schop al lado. El plato rápido que se pide sin mirar la carta.',
  },
]

const CAFE = [
  { src: `${IMG}/cafe.webp`, alt: 'Café helado en capas servido en vaso alto' },
  { src: `${IMG}/interior-barra.webp`, alt: 'Barra del restaurant con vitrina de pasteles y equipo preparando' },
  { src: `${IMG}/interior-muro.webp`, alt: 'Interior de ladrillo visto con reloj de pared y vitrina' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5 flex items-center gap-3`}
      style={{ color: C.ember }}
    >
      <span className="inline-block w-8 border-t border-dashed" style={{ borderColor: C.ember }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function MrCoffePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.base, color: C.ink }}
    >
      <style>{`
        .mc-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .mc-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .mc-btn:active { transform: translateY(0) scale(0.97); }
        .mc-btn:focus-visible { outline: 3px solid ${C.ember}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(23,16,9,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.emberBtn,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la parada en la ruta ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.base }}
      >
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de Mr.Coffe Humos Mauleños: local de ladrillo oscuro con letrero y pasto frente al bypass de San Clemente"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,16,9,0.55) 0%, rgba(23,16,9,0.12) 42%, rgba(23,16,9,0.92) 100%)',
          }}
        />
        <div className="absolute top-[76px] right-5 md:right-8">
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mc-btn flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: C.emberBtn, color: '#FFFFFF' }}
            >
              <Stars value={4.8} color="#FFFFFF" className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-44">
          <Reveal>
            <img
              src={`${IMG}/logo.webp`}
              alt="Letrero metálico de Mr.Coffe sobre la fachada de ladrillo"
              className="w-[190px] md:w-[250px] rounded-lg mb-7 border"
              style={{ borderColor: C.line }}
            />
          </Reveal>
          <Reveal delay={100}>
            <h1
              className={`${display.className} font-black uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.8rem,8.5vw,6.5rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              El humo bueno
              <br />
              está a la{' '}
              <span className="italic" style={{ color: C.ember }}>
                salida
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-medium" style={{ color: 'rgba(245,237,224,0.88)' }}>
              Restaurant y smokehouse en el bypass de San Clemente.
              Carnes ahumadas, café de verdad y un jardín para estirar
              las piernas antes de seguir viaje.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mc-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.emberBtn, color: '#FFFFFF' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#brasa"
                className={`${display.className} mc-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 border-2 hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(245,237,224,0.55)', color: '#F5EDE0' }}
              >
                Ver la cocina
              </a>
            </div>
          </Reveal>
        </div>
        <div
          className="relative border-t border-dashed"
          style={{ borderColor: 'rgba(245,237,224,0.3)', backgroundColor: 'rgba(23,16,9,0.6)', backdropFilter: 'blur(6px)' }}
        >
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ color: 'rgba(245,237,224,0.8)' }}
          >
            <span>Bypass San Clemente</span>
            <span>4,8 sobre 503 reseñas</span>
            <span>Estacionamiento propio</span>
            <span className="hidden md:inline" style={{ color: C.ember }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La brasa ── */}
      <section id="brasa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionLabel>La brasa</SectionLabel>
          <h2
            className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.6rem)] mb-6`}
          >
            Lo que huele
            <br />
            desde la carretera
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-medium" style={{ color: C.muted }}>
            Humos Mauleños es la mitad con fuego del local: parrilla y
            ahumados que los comensales nombran en sus reseñas. Esto es
            lo que la gente prueba cuando para.
          </p>
        </Reveal>
        <ul className="grid grid-cols-12 gap-8 md:gap-10">
          {BRASA.map((p, i) => (
            <Reveal
              key={p.title}
              className={`col-span-12 md:col-span-6 ${i === 1 ? 'md:mt-16' : ''}`}
              delay={i * 120}
            >
              <li className="group h-full">
                <div className="relative overflow-hidden rounded-lg mb-5 aspect-[4/5] border" style={{ borderColor: C.line }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl mb-2`}>
                  {p.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                  {p.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={160}>
          <div className={`${mono.className} mt-12 rounded-lg border p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-5 text-[11px] uppercase tracking-[0.14em]`} style={{ borderColor: C.line, color: C.muted }}>
            {['Costillas BBQ', 'Ceviche de salmón', 'Tragos de autor', 'Pasteles'].map((t) => (
              <span key={t} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.ember }} aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── El café (franja horizontal de fotos) ── */}
      <section id="cafe" className="scroll-mt-20 border-y border-dashed" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionLabel>El café</SectionLabel>
            <h2
              className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.6rem)] mb-6`}
            >
              Mr.Coffe,
              <br />
              <span className="italic" style={{ color: C.ember }}>con t de cafetería</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-medium" style={{ color: C.muted }}>
              La otra mitad del nombre: espresso, cafés helados en capa,
              vitrina de pasteles y una barra de ladrillo visto que se
              presta para quedarse un rato.
            </p>
          </Reveal>
        </div>
        <div className="overflow-x-auto pb-6 md:pb-8" role="region" aria-label="Fotos del café y la barra">
          <div className="flex gap-5 md:gap-7 px-5 md:px-8 w-max">
            {CAFE.map((f, i) => (
              <Reveal key={f.src} delay={i * 90} className="shrink-0">
                <div className="relative overflow-hidden rounded-lg border aspect-[3/4] w-[240px] md:w-[340px]" style={{ borderColor: C.line }}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="340px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El jardín (foto a sangre + cita) ── */}
      <section id="jardin" className="scroll-mt-20">
        <Reveal>
          <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
            <Image
              src={`${IMG}/jardin.webp`}
              alt="Jardín y terraza del restaurant: césped, sombrilla y puff para sentarse al aire libre"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(0deg, rgba(23,16,9,0.85) 0%, rgba(23,16,9,0.15) 55%)' }}
            />
            <div className="absolute inset-x-0 bottom-0">
              <div className="max-w-6xl mx-auto px-5 md:px-8 pb-8 md:pb-10">
                <h2
                  className={`${display.className} font-black uppercase leading-[0.98] text-[clamp(2rem,5.5vw,3.8rem)] mb-4`}
                  style={{ color: '#FFFFFF' }}
                >
                  La terraza para
                  <br />
                  estirar las piernas
                </h2>
                <p className="text-sm md:text-base max-w-xl font-medium" style={{ color: 'rgba(245,237,224,0.9)' }}>
                  Jardín con sombrilla, mesas afuera, estacionamiento
                  propio y juegos para los niños. Una parada pensada
                  para las familias que viajan por el Maule.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionLabel>Las reseñas</SectionLabel>
          <div className="flex flex-wrap items-end gap-x-10 gap-y-6 mb-12">
            <h2
              className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.6rem)]`}
            >
              Los que pararon
              <br />
              y volvieron
            </h2>
            <div className="pb-2">
              <p className={`${display.className} font-black text-5xl md:text-6xl leading-none`} style={{ color: C.ember }}>
                {BIZ.rating}
              </p>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>
                de {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {RESENAS.map((r, i) => (
            <Reveal
              key={r.name}
              className={`col-span-12 md:col-span-4 ${i === 1 ? 'md:mt-10' : i === 2 ? 'md:mt-20' : ''}`}
              delay={i * 110}
            >
              <figure className="rounded-lg border p-6 md:p-7 h-full flex flex-col" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <Stars value={r.stars} color={C.ember} className="w-4 h-4 mb-4" />
                <blockquote className="text-sm md:text-base leading-relaxed font-medium flex-1" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-5`} style={{ color: C.muted }}>
                  {r.name} · reseña de Google
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
            className={`${display.className} inline-block mt-9 text-sm font-extrabold uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.ember, textDecorationColor: 'rgba(228,87,46,0.4)' }}
          >
            Leer las reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── La ruta: ubicación y horario ── */}
      <section id="ruta" className="scroll-mt-20 border-t border-dashed" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionLabel>La ruta</SectionLabel>
            <h2
              className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.6rem)] mb-12`}
            >
              ¿Cuándo
              <br />
              <span style={{ color: C.ember }}>parar?</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <Reveal>
                <ul className="divide-y" style={{ borderColor: C.line }}>
                  {HORAS.map((h) => (
                    <li key={h.d} className="py-3.5 flex items-baseline justify-between gap-4" style={{ borderColor: C.line }}>
                      <span className="text-sm md:text-base font-semibold">{h.d}</span>
                      <span className={`${mono.className} text-sm`} style={{ color: h.h === 'Cerrado' ? C.ember : C.muted }}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
                <address className="not-italic text-sm md:text-base leading-relaxed mt-8 font-medium" style={{ color: C.muted }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.ink }}>
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} mc-btn inline-block font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 mt-8 tap-44`}
                  style={{ backgroundColor: C.emberBtn, color: '#FFFFFF' }}
                >
                  Consultar por WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 min-w-0">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-lg border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]"
                  style={{ borderColor: C.line }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0F0A05' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <p className={`${display.className} font-black uppercase text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,237,224,0.6)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,237,224,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed" style={{ color: 'rgba(245,237,224,0.68)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F5EDE0' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son reales
            y salen de su ficha de Google; la carta se arma con el local
            al publicar.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ember }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
