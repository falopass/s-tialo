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
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  paper: '#F5EEDC',
  paperHi: '#FBF7EA',
  ink: '#191A14',
  muted: '#5D5B4B',
  yellow: '#EFB200',
  green: '#2E6B34',
  greenDeep: '#1E4B25',
  night: '#12140C',
  line: 'rgba(25,26,20,0.16)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// usa la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'carro-el-pelao',
  title: 'Carro El Pelao — la picada a la salida de Licantén',
  description:
    'Comida rápida a la salida de Licantén, Región del Maule: completos, churrascos, mechada y barros luco. 4,7 estrellas en Google. Pide por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La picada', href: '#picada' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const MARQUEE = [
  'Completos',
  'Churrascos',
  'Barros luco',
  'Lomitos',
  'Mechada',
  'Pan amasado',
  'Té y café',
  'Bebidas y jugos',
]

const CARTA = [
  { item: 'Completos', nota: 'italiano, completo, dinámico' },
  { item: 'Churrascos', nota: 'el clásico de la casa — queso, palta' },
  { item: 'Barros luco', nota: 'carne, queso y palta' },
  { item: 'Lomitos', nota: 'en pan casero' },
  { item: 'Mechada', nota: 'jugosa, con palta' },
  { item: 'Sandwiches', nota: 'los de siempre, abundantes' },
  { item: 'Té y café', nota: 'para la espera y la sobremesa' },
  { item: 'Bebidas y jugos', nota: 'frías, de la caja del carro' },
]

const RESENAS = [
  {
    nombre: 'Luis Soto',
    fecha: 'Hace 5 meses',
    estrellas: 5,
    texto: 'Me comí 2 churrasquitas queso palta, ultra exquisitas.',
  },
  {
    nombre: 'Gonzalo Aguilera',
    fecha: 'Hace 2 años',
    estrellas: 5,
    texto: 'Excelente picada a la salida de Licantén para servirse una rica churrasca.',
  },
  {
    nombre: 'ER JOZE',
    fecha: 'Hace un año',
    estrellas: 5,
    texto: 'Muy buena atención además de buena disposición y sabor. Muy buena respuesta por parte del dueño.',
  },
]

const HORARIO = [
  { dias: 'Lunes a viernes', horas: '8:00 – 23:30' },
  { dias: 'Sábado', horas: '8:00 – 14:30' },
  { dias: 'Domingo', horas: '18:00 – 00:00' },
]

/* Hito de carretera: "KM 0" tipo mojón de ruta */
function Hito({ km, titulo, dark = false }: { km: string; titulo: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-8 md:mb-10">
      <span
        className={`${mono.className} shrink-0 inline-flex items-center justify-center font-semibold text-xs md:text-sm px-3 py-1.5 rounded-full border-2`}
        style={{
          borderColor: dark ? C.yellow : C.ink,
          backgroundColor: dark ? C.yellow : C.ink,
          color: dark ? C.night : C.paper,
        }}
      >
        {km}
      </span>
      <h2
        className={`${display.className} uppercase leading-none tracking-wide text-[clamp(1.9rem,6vw,3.4rem)]`}
        style={{ color: dark ? C.paper : C.ink }}
      >
        {titulo}
      </h2>
    </div>
  )
}

/* Línea segmentada de la ruta */
function RoadLine({ bg = C.ink }: { bg?: string }) {
  return (
    <div aria-hidden="true" className="h-[10px] w-full" style={{ backgroundColor: bg }}>
      <div
        className="h-[3px] w-full mt-[3.5px]"
        style={{ background: `repeating-linear-gradient(90deg, ${C.yellow} 0 42px, transparent 42px 74px)` }}
      />
    </div>
  )
}

export default function CarroElPelaoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes cep-marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .cep-marq { animation: cep-marq 30s linear infinite }
        .cep-btn { transition: transform .18s ease, filter .18s ease; }
        .cep-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .cep-btn:active { transform: scale(.97); }
        .cep-btn:focus-visible { outline: 3px solid ${C.yellow}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .cep-marq { animation: none } }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} uppercase tracking-wide`}>El Pelao</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(18,20,12,0.94)',
          ink: C.paper,
          line: 'rgba(245,238,220,0.16)',
          btnBg: C.yellow,
          btnInk: C.night,
        }}
      />

      {/* ── Hero: el carro de noche, neón ABIERTO ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.night }}>
        <Image
          src={`${IMG}/abierto.webp`}
          alt="El carro El Pelao de noche con el neón ABIERTO encendido y mesas en la vereda"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(18,20,12,0.62) 0%, rgba(18,20,12,0.28) 42%, rgba(18,20,12,0.94) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-9 md:pb-12 pt-28">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.yellow }}>
              {BIZ.rubro} · {BIZ.address} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.92] text-[clamp(3.4rem,13vw,8.5rem)] mb-5`}
              style={{ color: C.paper }}
            >
              Carro
              <br />
              <span style={{ color: C.yellow }}>“El Pelao”</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: 'rgba(245,238,220,0.88)' }}>
              La picada a la salida de Licantén: completos, churrascos y
              pan amasado, abierto hasta tarde para los que van de paso.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} cep-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                style={{ backgroundColor: C.yellow, color: C.night }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} cep-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(245,238,220,0.55)', color: C.paper }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(245,238,220,0.2)', backgroundColor: 'rgba(18,20,12,0.85)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs`} style={{ color: 'rgba(245,238,220,0.82)' }}>
            <span className="inline-flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.yellow} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </span>
            <span>Lun–Vie 8:00–23:30</span>
            <span className="hidden sm:inline">Dom desde las 18:00</span>
            <span className="hidden md:inline" style={{ color: C.yellow }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta amarilla: la carta en rotación ── */}
      <div className="overflow-hidden py-2.5" style={{ backgroundColor: C.yellow }} aria-hidden="true">
        <div className="cep-marq flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {MARQUEE.map((t) => (
                <span
                  key={`${copy}-${t}`}
                  className={`${display.className} uppercase tracking-[0.1em] text-base md:text-lg px-5 flex items-center gap-5 whitespace-nowrap`}
                  style={{ color: C.night }}
                >
                  {t}
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill={C.green} aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <RoadLine />

      {/* ── KM 0 · La picada ── */}
      <section id="picada" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Hito km="KM 0" titulo="La picada de la salida" />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="md:col-span-5">
            <figure className="relative overflow-hidden border-2 aspect-[3/4]" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/pelao.webp`}
                alt="El Pelao cocinando en la parrilla del carro, con el mural pintado detrás"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
              El dueño, en su parrilla — foto real
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal delay={90}>
              <h3 className={`${display.className} uppercase leading-[0.98] text-3xl md:text-5xl mb-5`}>
                Carretera adentro
                <br />
                <span style={{ color: C.green }}>se come de verdad</span>
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
                <p>
                  A la salida de Licantén se para en un carro con toldo
                  amarillo y letrero pintado a mano. No hay mesa de
                  espera ni carta impresa: se pide en la ventana y se
                  come donde se pueda — vereda, capó del auto o las
                  mesas que sacan de noche.
                </p>
                <p>
                  En Google acumula {BIZ.reviews} reseñas con nota{' '}
                  {BIZ.rating}: los que pasan por la ruta lo repiten y
                  recomiendan las churrascas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <figure className="relative overflow-hidden border-2 mt-7 aspect-[16/10]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/carro.webp`}
                  alt="El carro El Pelao con toldo amarillo y la carta pintada en el panel verde"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── KM 1 · La carta (pizarrón verde del carro) ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.greenDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Hito km="KM 1" titulo="La carta del carro" dark />
          </Reveal>
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            <Reveal className="md:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-px border-2" style={{ borderColor: 'rgba(245,238,220,0.35)', backgroundColor: 'rgba(245,238,220,0.25)' }}>
                {CARTA.map((c) => (
                  <li key={c.item} className="p-4 md:p-5" style={{ backgroundColor: C.green }}>
                    <p className={`${display.className} uppercase tracking-wide text-lg md:text-xl`} style={{ color: C.paper }}>
                      {c.item}
                    </p>
                    <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-1.5`} style={{ color: 'rgba(245,238,220,0.75)' }}>
                      {c.nota}
                    </p>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em] mt-4`} style={{ color: 'rgba(245,238,220,0.7)' }}>
                Carta tomada del letrero del carro · se pide en la ventana
              </p>
            </Reveal>
            <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
              <Reveal delay={90}>
                <figure className="relative overflow-hidden border-2 aspect-[4/3] md:aspect-[16/9]" style={{ borderColor: 'rgba(245,238,220,0.35)' }}>
                  <Image
                    src={`${IMG}/amasados.webp`}
                    alt="Pan amasado dorándose en la parrilla del carro"
                    fill
                    sizes="(min-width: 768px) 40vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
              <Reveal delay={150}>
                <figure className="relative overflow-hidden border-2 aspect-[4/3] md:aspect-[16/9]" style={{ borderColor: 'rgba(245,238,220,0.35)' }}>
                  <Image
                    src={`${IMG}/churrasco.webp`}
                    alt="Churrasco con palta y tomate recién armado"
                    fill
                    sizes="(min-width: 768px) 40vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La mesa de noche: foto que corta la página ── */}
      <section aria-label="Un sandwich del Pelao servido en la mesa">
        <Reveal>
          <div className="relative h-[46vh] md:h-[62vh] overflow-hidden">
            <Image
              src={`${IMG}/mesa.webp`}
              alt="Sandwich en pan amasado con taza de café sobre la mesa del carro"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <RoadLine />
      </section>

      {/* ── KM 2 · Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Hito km="KM 2" titulo="Lo que dice la ruta" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 90}>
              <figure
                className="h-full border-2 p-5 md:p-6 flex flex-col"
                style={{ borderColor: C.ink, backgroundColor: C.paperHi }}
              >
                <Stars value={r.estrellas} color={C.green} className="w-3.5 h-3.5" />
                <blockquote className="text-sm md:text-base leading-relaxed mt-4 mb-5 font-medium" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                  <span style={{ color: C.ink }}>{r.nombre}</span>
                  <span className="shrink-0">{r.fecha} · Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} inline-block mt-7 text-sm md:text-base uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.green, textDecorationColor: 'rgba(46,107,52,0.4)' }}
          >
            Ver las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── KM 3 · Dónde parar ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <RoadLine bg="rgba(245,238,220,0.08)" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Hito km="KM 3" titulo="Dónde parar" dark />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="min-w-0">
              <Reveal>
                <address className="not-italic mb-6">
                  <p className={`${display.className} uppercase leading-tight text-2xl md:text-4xl mb-2`} style={{ color: C.paper }}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm md:text-base" style={{ color: 'rgba(245,238,220,0.75)' }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${mono.className} inline-block text-sm md:text-base mt-3 underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.yellow, textDecorationColor: 'rgba(239,178,0,0.4)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
              </Reveal>
              <Reveal delay={90}>
                <div className="border-t" style={{ borderColor: 'rgba(245,238,220,0.18)' }}>
                  {HORARIO.map((h) => (
                    <div key={h.dias} className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(245,238,220,0.18)' }}>
                      <span className={`${display.className} uppercase tracking-wide text-base md:text-lg`} style={{ color: C.paper }}>
                        {h.dias}
                      </span>
                      <span className={`${mono.className} text-sm`} style={{ color: C.yellow }}>
                        {h.horas}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} cep-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ backgroundColor: C.yellow, color: C.night }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} cep-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                    style={{ borderColor: 'rgba(245,238,220,0.4)', color: C.paper }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative overflow-hidden border-2 min-h-[300px] md:aspect-[4/3]" style={{ borderColor: 'rgba(245,238,220,0.3)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2`} style={{ color: 'rgba(245,238,220,0.6)' }}>
                Busca el toldo amarillo a la salida de Licantén
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0B0D07', color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} uppercase tracking-wide text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,238,220,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,238,220,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(245,238,220,0.68)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son los
            reales de la ficha de Google del negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
