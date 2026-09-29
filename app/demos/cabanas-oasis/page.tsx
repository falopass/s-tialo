import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el camino al río» — el demo se lee como la bajada
 * del portón al agua: hitos numerados en mono sobre una línea de
 * sendero punteada, señales de camino y agua profunda. Bricolage hace
 * el cartel de entrada; Karla el papel; IBM Plex Mono los hitos «km».
 * Terracota solo para las marcas grandes (tinaja/quincho), nunca en
 * texto pequeño sobre oscuro.
 */
const C = {
  paper: '#EEF1E9',
  soft: '#E0E8E1',
  agua: '#9FD4CC',
  teal: '#14655E',
  barro: '#A04A28',
  deep: '#0C2E33',
  ink: '#1E2A27',
  muted: '#4C5C56',
  line: 'rgba(20,101,94,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-oasis',
  title: 'Cabañas Oasis — Cabañas junto al río Claro, Molina',
  description:
    'Cabañas en el km 14,2 del camino a Radal, Río Claro, Molina. Bajada al río, piscina en verano, tinajas y quincho. Reserva directa por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#sendero' },
  { label: 'Lo que hay', href: '#senales' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const HITOS = [
  {
    num: '01',
    src: `${IMG}/cabana.webp`,
    alt: 'Interior de una cabaña de Cabañas Oasis: cocina, comedor de madera y estufa',
    name: 'Las cabañas',
    desc: 'Madera a la vista, cocina equipada y camas hechas: cabañas familiares de dos dormitorios para hasta seis personas, cada una con su quincho.',
    spec: '2 dormitorios · hasta 6 personas',
  },
  {
    num: '02',
    src: `${IMG}/piscina.webp`,
    alt: 'Piscina de Cabañas Oasis bordeada de madera bajo el cielo despejado',
    name: 'La piscina',
    desc: 'En verano la piscina abre para las visitas: el agua fresca del mediodía, entre el potrero y la montaña.',
    spec: 'Funciona en verano',
  },
  {
    num: '03',
    src: `${IMG}/tinaja.webp`,
    alt: 'Tinaja de madera con humo saliendo del calefactor junto a la caseta de sauna de Cabañas Oasis',
    name: 'La tinaja y el sauna',
    desc: 'La zona de tinaja que nombran las visitas: madera caliente al lado del sauna, con el bosque alrededor.',
    spec: 'Tinaja · sauna',
  },
  {
    num: '04',
    src: `${IMG}/valle.webp`,
    alt: 'Bosque nativo y cerros que rodean el predio de Cabañas Oasis',
    name: 'El bosque del predio',
    desc: 'Del jardín baja un sendero corto entre árboles — las visitas lo llaman su mini trekking — hasta llegar al cauce.',
    spec: 'Sendero por el bosque',
  },
  {
    num: '05',
    src: `${IMG}/rio.webp`,
    alt: 'Visitas bañándose en el río Claro junto a las rocas',
    name: 'La bajada al río',
    desc: 'Al final del sendero, el Claro: agua limpia, piedras y pozones para meterse los días de calor.',
    spec: 'Acceso directo al río',
  },
]

/* El hito 04 (bosque) usa valle.webp; los números quedan 01 cabañas,
   02 piscina, 03 tinaja+sauna, 04 bosque, 05 río, 06 postales. */

const SENALES = [
  'Bajada al río',
  'Piscina en verano',
  'Tinajas',
  'Mesa de pool y ping pong',
  'Quincho por cabaña',
  'Quincho común',
  'Jardín campestre',
  'Estacionamiento',
  'Perritos de la casa',
  'Atendido por sus dueños',
]

const RESENAS = [
  {
    quote:
      'Excelente atención por parte de sus dueños, fueron muy amables y acogedores, nos enseñaron todo el lugar, el acceso al río, la piscina que funciona en verano, la zona de tinaja… Lo recomiendo sin dudas, espero volver para el verano.',
    name: 'Constanza Paloma Núñez Ayala',
    when: 'hace 3 meses',
  },
  {
    quote:
      'La atención del dueño y todas las personas de ahí fue excelente, siempre preocupados de que nos sintiéramos cómodos. Salimos felices de las instalaciones y la hermosa vista al río: duermes escuchando el sonido del río.',
    name: 'Edith Briones',
    when: 'hace 8 meses',
  },
  {
    quote:
      'Maravillosa experiencia, grato ambiente, espacios para la recreación de adultos y niños, mesa de pool y ping pong, quincho en cada cabaña más uno con amplio espacio para compartir; y mencionar especialmente la amabilidad de sus anfitriones.',
    name: 'Luis Quiroga',
    when: 'hace 8 meses',
  },
  {
    quote:
      'Segunda vez que vuelvo, espero venir nuevamente. Sus dueños un 7, las cabañas lindas limpias y acogedoras… tienen piscina, un lindo jardín muy campestre, la bajada al río con un mini trekking por el bosque.',
    name: 'Ashly MM',
    when: 'hace 7 meses',
  },
]

// ── Piezas del camino ──────────────────────────────────────

/** Hito numerado del sendero: círculo de señal con número mono. */
function Hito({ num, className = '' }: { num: string; className?: string }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center justify-center w-12 h-12 rounded-full border-2 text-base font-bold shrink-0 ${className}`}
      style={{ borderColor: C.barro, color: C.barro, backgroundColor: C.paper }}
      aria-hidden="true"
    >
      {num}
    </span>
  )
}

/** Señal de camino: chip mono con doble borde, como placa de ruta. */
function Senal({ children }: { children: React.ReactNode }) {
  return (
    <li
      className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] px-4 py-2.5 border-2`}
      style={{ borderColor: C.teal, color: C.teal, backgroundColor: '#F7F9F2' }}
    >
      {children}
    </li>
  )
}

/** Etiqueta de sección: placa «km» del camino. */
function RielTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} inline-flex items-center gap-2.5 text-[11px] md:text-xs uppercase tracking-[0.24em] font-bold mb-5 px-3 py-1.5 border-2`}
      style={{
        color: light ? C.agua : C.teal,
        borderColor: light ? 'rgba(159,212,204,0.5)' : C.line,
      }}
    >
      <span className="inline-block w-2 h-2 rotate-45" style={{ backgroundColor: light ? C.agua : C.barro }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): fondo rgba() para el chequeo de contraste. */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
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

export default function CabanasOasisPage() {
  return (
    <div
      className={`${body.className} co min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .co a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        .co .sendero { position: relative }
        .co .sendero::before {
          content: ''; position: absolute; top: 8px; bottom: 8px; left: 24px;
          border-left: 3px dashed ${C.barro}; opacity: 0.55;
        }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(238,241,233,0.95)',
          ink: C.deep,
          line: C.line,
          btnBg: C.teal,
          btnInk: '#F7F9F2',
        }}
      />

      {/* ── Hero partido: el panel del camino + la terraza ── */}
      <section id="inicio" className="relative min-h-svh grid md:grid-cols-[1fr_1.05fr]">
        <div className="relative h-[46svh] md:h-auto md:order-2 overflow-hidden" style={{ backgroundColor: C.deep }}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="Terraza de madera de una cabaña de Cabañas Oasis con vista al bosque y los cerros"
            fill
            priority
            sizes="(min-width: 768px) 52vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(12,46,51,0.35) 0%, rgba(12,46,51,0.05) 55%, rgba(12,46,51,0.3) 100%)' }}
          />
          <p
            className={`${mono.className} absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.22em]`}
            style={{ color: 'rgba(238,241,233,0.9)' }}
          >
            la terraza · vista al valle
          </p>
        </div>
        <div
          className="md:order-1 flex flex-col justify-center px-5 md:px-10 lg:px-14 pt-20 pb-14 md:pt-28 md:pb-16"
          style={{ backgroundColor: C.deep }}
        >
          <Reveal>
            <RielTag light>km 14,2 · camino a Radal</RielTag>
            <h1
              className={`${display.className} font-bold leading-[0.98] tracking-[-0.01em] text-[clamp(2.9rem,10vw,5.6rem)] mb-6`}
              style={{ color: '#EEF1E9' }}
            >
              duerme con
              <br />
              el río <span style={{ color: C.agua }}>de fondo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: 'rgba(238,241,233,0.82)' }}>
              {BIZ.name} queda al final del camino de ripio, entre el bosque
              y el río Claro. Atendido por sus dueños, con bajada al agua,
              piscina en verano y tinajas.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold mb-9 tap-44"
              style={{ color: C.agua }}
            >
              <Stars value={BIZ.rating} color={C.agua} />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google →
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.agua, color: C.deep }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#sendero"
                className={`${display.className} uppercase font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(238,241,233,0.55)', color: '#EEF1E9' }}
              >
                Bajar al río ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Balizas del camino ── */}
      <section aria-label="Datos rápidos" style={{ backgroundColor: C.teal }}>
        <ul
          className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-7 gap-y-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-center`}
          style={{ color: '#EAF3EF' }}
        >
          {['Río Claro · Molina', 'Bajada al río', 'Piscina · tinajas', 'Atendido por sus dueños'].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      {/* ── El sendero: hitos del portón al agua ── */}
      <section id="sendero" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <RielTag>el recorrido</RielTag>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
            <h2 className={`${display.className} font-bold tracking-[-0.01em] text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.deep }}>
              del portón
              <br />
              <span style={{ color: C.teal }}>al agua</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Así se baja en Oasis. Cada hito existe de verdad: es lo que las
              visitas repiten en sus reseñas.
            </p>
          </div>
        </Reveal>

        <ol className="sendero space-y-12 md:space-y-16 pl-16 md:pl-20">
          {HITOS.map((h, i) => (
            <li key={h.num} className="relative">
              <span className="absolute -left-16 md:-left-20 top-0">
                <Hito num={h.num} />
              </span>
              <Reveal delay={i * 90}>
                <div className={`grid md:grid-cols-2 gap-5 md:gap-8 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                  <div className="relative overflow-hidden aspect-[4/3] border-2 [direction:ltr]" style={{ borderColor: C.deep }}>
                    <Image
                      src={h.src}
                      alt={h.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, calc(100vw - 6.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <div className="[direction:ltr]">
                    <h3 className={`${display.className} font-bold text-2xl md:text-3xl tracking-[-0.01em] mb-3`} style={{ color: C.deep }}>
                      {h.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: C.muted }}>
                      {h.desc}
                    </p>
                    <p className={`${mono.className} inline-block text-[11px] uppercase tracking-[0.16em] font-semibold px-3 py-1.5 border`} style={{ borderColor: C.line, color: C.teal }}>
                      {h.spec}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
          {/* fin del sendero: tres postales más */}
          <li className="relative">
            <span className="absolute -left-16 md:-left-20 top-0">
              <Hito num="06" />
            </span>
            <Reveal delay={120}>
              <h3 className={`${display.className} font-bold text-2xl md:text-3xl tracking-[-0.01em] mb-4`} style={{ color: C.deep }}>
                …y a dormir al sonido del río
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl">
                <div className="relative overflow-hidden aspect-[3/4] border-2" style={{ borderColor: C.deep }}>
                  <Image
                    src={`${IMG}/piscina-v.webp`}
                    alt="Piscina de Cabañas Oasis vista desde el jardín"
                    fill
                    sizes="(min-width: 768px) 30vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/4] border-2" style={{ borderColor: C.deep }}>
                  <Image
                    src={`${IMG}/rio-piedras.webp`}
                    alt="Piedras y agua clara del río Claro junto al predio"
                    fill
                    sizes="(min-width: 768px) 30vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[16/10] border-2 col-span-2" style={{ borderColor: C.deep }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de una cabaña de Cabañas Oasis: terraza techada, jardín y el perro de la casa"
                    fill
                    sizes="(min-width: 768px) 60vw, calc(100vw - 6.5rem)"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </li>
        </ol>
      </section>

      {/* ── Señales del camino: lo que hay en el predio ── */}
      <section id="senales" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <RielTag>señalética del lugar</RielTag>
              <h2 className={`${display.className} font-bold tracking-[-0.01em] text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.deep }}>
                lo que hay
                <br />
                <span style={{ color: C.teal }}>en Oasis</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                Las señales que repiten las {BIZ.reviews} reseñas de Google:
                cada una está confirmada por quienes ya se quedaron.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block text-xs font-bold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.teal }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <ul className="flex flex-wrap gap-3">
                {SENALES.map((s) => (
                  <Senal key={s}>{s}</Senal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: lo que dicen las visitas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <RielTag>el parte de las visitas</RielTag>
            <div className="flex items-baseline gap-3 mb-3">
              <span className={`${display.className} font-bold text-6xl md:text-7xl leading-none`} style={{ color: C.deep }}>
                {BIZ.rating}
              </span>
              <Stars value={BIZ.rating} color={C.barro} className="w-5 h-5" />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en Google, casi todas de cinco estrellas.
              Lo que más se repite: el río, la limpieza y los dueños.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase inline-block font-bold tracking-[0.04em] text-sm px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.teal, color: '#F7F9F2' }}
            >
              Leerlas en Google →
            </a>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure
                  className="h-full p-5 md:p-6 border-2 flex flex-col"
                  style={{ backgroundColor: '#F7F9F2', borderColor: C.line }}
                >
                  <Stars value={5} color={C.barro} className="w-3.5 h-3.5" />
                  <blockquote className="text-[14px] leading-relaxed mt-3 mb-4 flex-1" style={{ color: C.ink }}>
                    “{r.quote}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.14em] border-t border-dashed pt-3`} style={{ color: C.muted, borderColor: C.line }}>
                    {r.name} · reseña de Google · {r.when}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar: el kilómetro 14,2 ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <RielTag light>llegada</RielTag>
            <h2 className={`${display.className} font-bold tracking-[-0.01em] text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#EEF1E9' }}>
              km 14,2
              <br />
              <span style={{ color: C.agua }}>del camino a Radal</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(238,241,233,0.78)' }}>
              Desde Molina se sigue el camino al Parque Nacional Radal Siete
              Tazas; en el kilómetro 14,2, junto al río Claro, está el predio.
              La fecha y la tarifa se cierran por WhatsApp.
            </p>
            <div
              className="border-2 border-dashed px-6 md:px-8 py-6 mb-7"
              style={{ borderColor: 'rgba(159,212,204,0.55)', backgroundColor: 'rgba(238,241,233,0.06)' }}
            >
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.26em] font-bold mb-3`} style={{ color: C.agua }}>
                coordenadas del descanso
              </p>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(238,241,233,0.92)' }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.agua }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.agua }}
                >
                  Llamar
                </a>
                <a
                  href={BIZ.fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.agua }}
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-105 active:scale-95 tap-44`}
                style={{ backgroundColor: C.agua, color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-2 min-h-[280px]" style={{ borderColor: 'rgba(159,212,204,0.35)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#EEF1E9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ borderColor: 'rgba(238,241,233,0.14)' }}>
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(238,241,233,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={BIZ.fbUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                Facebook
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(238,241,233,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(238,241,233,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(238,241,233,0.7)' }}>
            Fotos, puntaje y reseñas son los reales de la ficha de Google;
            el WhatsApp, la dirección y las señales del predio también.
            Las descripciones de cada hito son de muestra: se ajustan con
            los textos del negocio al activar el sitio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
