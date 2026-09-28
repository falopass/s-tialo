import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, INCLUYE, TARIFA_REF, RESENAS, HABITACIONES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el libro de huéspedes del hostal de barrio».
 * Papel crema, tinta verde patio y terracota de macetero. Las fotos se
 * enmarcan en arcos (el corredor y el patio de la casa), la ficha de
 * registro lleva líneas punteadas de libro mayor y las reseñas firman
 * como en una libreta de recepción. Serif DM Serif evoca el letrero
 * luminoso de la fachada.
 */
const C = {
  paper: '#F7F2E7',
  paper2: '#EFE7D6',
  ink: '#1C3024',
  inkSoft: '#41594A',
  terra: '#9A4215',
  terraDark: '#833511',
  line: 'rgba(28,48,36,0.18)',
  dark: '#13211A',
  darkInk: '#F1EBDD',
  darkSoft: 'rgba(241,235,221,0.72)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'oriente-hotel-boutique',
  title: `${BIZ.name} · Hostal en el centro de Talca`,
  description:
    'Habitaciones con desayuno, estacionamiento y wifi a cuadras del centro de Talca. Reserva directo por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}, así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

/** Línea de libro mayor: etiqueta a la izquierda, puntos, dato a la derecha */
function Fila({ label, valor }: { label: string; valor: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 py-2.5">
      <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em] shrink-0`} style={{ color: C.inkSoft }}>
        {label}
      </span>
      <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.line }} aria-hidden="true" />
      <span className="text-sm font-medium text-right" style={{ color: C.ink }}>
        {valor}
      </span>
    </div>
  )
}

export default function OrienteHotelBoutiquePage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={[
          { label: 'Habitaciones', href: '#habitaciones' },
          { label: 'Patio', href: '#patio' },
          { label: 'Huéspedes', href: '#huespedes' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(247,242,231,0.96)', ink: C.ink, line: C.line, btnBg: C.terra, btnInk: '#FFF7EA' }}
      />

      {/* Hero: la fachada iluminada de noche */}
      <header id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.dark }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada nocturna de Oriente Hotel Boutique en la 2 Oriente de Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '50% 40%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,16,12,0.30) 0%, rgba(10,16,12,0.12) 40%, rgba(10,16,12,0.82) 100%)' }} aria-hidden="true" />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 pt-40">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-4`} style={{ color: 'rgba(241,235,221,0.85)' }}>
              Hostal · Talca centro
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className={`${display.className} text-[44px] leading-[0.98] md:text-7xl max-w-3xl`} style={{ color: '#FDFAF1' }}>
              Una casa con patio a cuadras del centro
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 max-w-xl text-[15px] md:text-lg leading-relaxed" style={{ color: 'rgba(241,235,221,0.88)' }}>
              En la 2 Oriente 906 el Oriente recibe a quienes llegan a Talca de paso o por trabajo: piezas cómodas, desayuno incluido y estacionamiento propio.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[46px] px-6 rounded-full text-sm font-semibold active:scale-95 transition-transform tap-44"
                style={{ backgroundColor: C.terra, color: '#FFF7EA' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#habitaciones"
                className="inline-flex items-center justify-center h-[46px] px-6 rounded-full text-sm font-semibold tap-44"
                style={{ border: '1.5px solid rgba(241,235,221,0.7)', color: '#F1EBDD' }}
              >
                Ver habitaciones
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className={`${mono.className} mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(241,235,221,0.8)' }}>
              <span className="flex items-center gap-2"><Stars value={BIZ.rating} color="#F2C14E" className="w-3.5 h-3.5" /> {BIZ.ratingLabel} · {BIZ.reviews} opiniones</span>
              <span>{BIZ.address}</span>
              <span>{TARIFA_REF}</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Ficha de registro */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 -mt-1 py-10 md:py-14">
        <Reveal>
          <div className="grid md:grid-cols-[1.05fr_1fr] gap-8 md:gap-14 items-start">
            <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: '#FFFDF6', border: `1px solid ${C.line}`, boxShadow: '0 14px 34px rgba(28,48,36,0.10)' }}>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.terra }}>
                Ficha de registro
              </p>
              <Fila label="Dirección" valor={`${BIZ.address}, ${BIZ.city}`} />
              <Fila label="WhatsApp" valor={<a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>} />
              <Fila label="Mapa" valor={<a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Cómo llegar</a>} />
              <Fila label="Tarifa ref." valor={TARIFA_REF} />
              <div className="mt-5 pt-4 flex flex-wrap gap-2" style={{ borderTop: `1px solid ${C.line}` }}>
                {INCLUYE.map((a) => (
                  <span
                    key={a}
                    className="text-[11.5px] font-medium px-3 py-1.5 rounded-full"
                    style={{ border: `1px solid ${C.line}`, color: C.inkSoft }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.terra }}>
                De la recepción
              </p>
              <h2 className={`${display.className} text-3xl md:text-[40px] leading-[1.05]`}>
                Llega, deja el auto adentro y duerme tranquilo
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.inkSoft }}>
                El hostal ocupa una casa de ciudad con corredor y patio: los huéspedes destacan el trato del personal, la ubicación y el desayuno casero que sale en la mañana. Las reservas se cierran directo por WhatsApp, sin formularios.
              </p>
              <p className={`${displayItalic.className} mt-5 text-lg`} style={{ color: C.ink }}>
                «Su mayor fortaleza es el personal; un excelente trato, siempre con la mejor disposición».
              </p>
              <p className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.inkSoft }}>
                Gabriel Sáez · reseña de Google
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Habitaciones: fotos en arco, etiqueta de llave */}
      <section id="habitaciones" className="py-12 md:py-20" style={{ backgroundColor: C.paper2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.terra }}>
              Las piezas
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight max-w-2xl`}>
              Habitaciones para dormir bien, sin vueltas
            </h2>
          </Reveal>
          <div className="mt-9 grid sm:grid-cols-3 gap-6">
            {HABITACIONES.map((h, i) => (
              <Reveal key={h.tag} delay={i * 100}>
                <figure className="group">
                  <div className="relative overflow-hidden rounded-t-[8rem] rounded-b-2xl" style={{ aspectRatio: '4/5', border: `1px solid ${C.line}` }}>
                    <Image
                      src={h.src}
                      alt={h.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span
                      className={`${mono.className} absolute top-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full`}
                      style={{ backgroundColor: 'rgba(19,33,26,0.82)', color: '#F1EBDD', border: '1px solid rgba(241,235,221,0.35)' }}
                    >
                      Hab. {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <figcaption className="pt-3.5">
                    <p className={`${display.className} text-xl`}>{h.tag}</p>
                    <p className="text-[13px] leading-snug mt-1" style={{ color: C.inkSoft }}>{h.nota}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Patio y desayuno */}
      <section id="patio" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-2xl col-span-2" style={{ aspectRatio: '16/10', border: `1px solid ${C.line}` }}>
                <Image src={`${IMG}/terraza.webp`} alt="Terraza del hostal de noche con luces y banderines" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/4.6', border: `1px solid ${C.line}` }}>
                <Image src={`${IMG}/desayuno.webp`} alt="Desayuno del hostal: café, tostadas, mantequilla y mermelada" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/4.6', border: `1px solid ${C.line}` }}>
                <Image src={`${IMG}/patio.webp`} alt="Patio interior del hostal con plantas y muros terracota" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.terra }}>
                El patio y la mañana
              </p>
              <h2 className={`${display.className} text-3xl md:text-[42px] leading-[1.06]`}>
                Desayuno casero y una terraza que se prende de noche
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.inkSoft }}>
                La estadía incluye desayuno: café, tostadas, jamón, queso y queque, como cuentan los mismos huéspedes. El patio interior guarda silencio entre maceteros, y la terraza se llena de luces cuando cae el sol.
              </p>
              <div className="mt-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 rounded-full text-sm font-semibold active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.ink, color: C.paper }}
                >
                  Pedir disponibilidad
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Libro de huéspedes */}
      <section id="huespedes" className="py-12 md:py-20" style={{ backgroundColor: C.dark, color: C.darkInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: '#E8C76A' }}>
                  Libro de huéspedes
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl leading-tight`}>
                  Lo que escriben los que se quedaron
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.darkSoft }}>
                {BIZ.ratingLabel} ★ · {BIZ.reviews} opiniones en Google
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-12">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <article className="py-6" style={{ borderTop: '1px dashed rgba(241,235,221,0.28)' }}>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <Stars value={r.estrellas} color="#E8C76A" className="w-3.5 h-3.5" />
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.darkSoft }}>
                      {r.sello}
                    </span>
                  </div>
                  <p className={`${displayItalic.className} text-lg md:text-[21px] leading-snug`}>
                    «{r.texto}»
                  </p>
                  <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em] text-right`} style={{ color: '#E8C76A' }}>
                    {r.nombre}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.terra }}>
                Ubicación
              </p>
              <h2 className={`${display.className} text-3xl md:text-[42px] leading-[1.06]`}>
                {BIZ.address}, en pleno centro
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.inkSoft }}>
                A cuadras de la Plaza de Armas, con locales para comer cerca y el auto seguro en el estacionamiento del hostal. Para reservar o consultar precios, escribe directo al WhatsApp.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 rounded-full text-sm font-semibold active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.terra, color: '#FFF7EA' }}
                >
                  Escribir al hostal
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 rounded-full text-sm font-semibold tap-44"
                  style={{ border: `1.5px solid ${C.line}`, color: C.ink }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full min-h-[320px] h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.dark, color: C.darkInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/logo.webp`} alt="Letrero de Oriente Hotel Boutique" className="h-9 w-auto rounded-md" />
              <p className={`${display.className} text-xl leading-tight`}>{BIZ.name}</p>
            </div>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.darkSoft }}>
              {BIZ.address}, {BIZ.city} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
              {' · '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Google Maps</a>
            </address>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(241,235,221,0.55)' }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} opiniones · {BIZ.city}, Chile
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
