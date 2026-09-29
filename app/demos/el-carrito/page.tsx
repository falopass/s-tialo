import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el container amarillo» — el local es un carrito dentro
 * de un container pintado de amarillo sobre fondo negro, con su mural rojo
 * «sacamos tu apetito». La página va sobre carbón como la terraza de noche:
 * panel-ticket para la carta, fotos pegadas como stickers en el container
 * y franjas amarillas de container.
 */
const C = {
  carbon: '#141110',
  papel: '#FFF8EC',
  amarillo: '#FFC629',
  rojo: '#E63B2E',
  onCarbon: '#F5EDE0',
  onCarbonSoft: 'rgba(245,237,224,0.68)',
  lineDark: 'rgba(245,237,224,0.16)',
  ink: '#241C14',
  muted: 'rgba(36,28,20,0.68)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'el-carrito',
  title: 'El Carrito — Comida rápida en Parral',
  description:
    'Completos, hamburguesas y empanadas en la terraza del carrito amarillo de Parral. 4,4 estrellas en Google. Pedidos por WhatsApp.',
  image: `${IMG}/terraza.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

// Lo que se ve y se dice del carrito: completos en 35 opiniones, empanadas
// y hamburguesas en sus fotos, la mayonesa en reseñas.
const CARTA = [
  { n: '01', t: 'Completos', d: 'los más nombrados de la casa: palta, tomate y su mayonesa' },
  { n: '02', t: 'Hamburguesas', d: 'al plato o en la mano, del tamaño que se ve en las fotos' },
  { n: '03', t: 'Empanadas', d: 'doradas, de las que salen del horno al mostrador' },
  { n: '04', t: 'Sándwich de la casa', d: 'pollo completo con su mayo y palta' },
  { n: '05', t: 'Mayonesa de la casa', d: 'la que la gente nombra en las reseñas' },
  { n: '06', t: 'Bilz y bebidas heladas', d: 'la roja de siempre, en la mesa roja' },
]

const STICKERS = [
  { img: 'completo', t: 'Completo + Bilz', rot: '-2.5deg' },
  { img: 'hamburguesa', t: 'Hamburguesa al plato', rot: '1.8deg' },
  { img: 'empanadas', t: 'Empanadas del horno', rot: '-1.6deg' },
]

export default function ElCarritoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.carbon, color: C.onCarbon }}
    >
      <style>{`
        .ec-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .ec-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .ec-btn:active { transform: translateY(0) scale(0.97); }
        .ec-btn:focus-visible { outline: 3px solid ${C.rojo}; outline-offset: 3px; }
        .ec-marquee { animation: ec-scroll 24s linear infinite; }
        @keyframes ec-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        /* nervios del container */
        .ec-ribs { background-image: repeating-linear-gradient(90deg, rgba(20,17,16,0.10) 0 18px, rgba(20,17,16,0) 18px 36px); }
        @media (prefers-reduced-motion: reduce) { .ec-marquee { animation: none; } }
      `}</style>

      <BlitzNav
        name="El Carrito"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{
          over: 'dark',
          bar: 'rgba(20,17,16,0.94)',
          ink: C.onCarbon,
          line: C.lineDark,
          btnBg: C.amarillo,
          btnInk: C.carbon,
        }}
      />

      {/* ── Hero: la terraza del container ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/terraza.webp`}
            alt="Terraza de El Carrito en Parral: container amarillo con mesas rojas"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(20,17,16,0.55) 0%, rgba(20,17,16,0.82) 62%, #141110 100%)' }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[190px] md:pt-[210px] pb-14 md:pb-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4`} style={{ color: C.amarillo }}>
              Comida rápida · Parral
            </p>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.95] tracking-tight text-[clamp(3rem,11vw,6.4rem)] max-w-3xl`}
              style={{ color: C.onCarbon }}
            >
              Sacamos <span style={{ color: C.amarillo }}>tu apetito</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-md mt-5" style={{ color: 'rgba(245,237,224,0.85)' }}>
              El container amarillo de Parral: completos, hamburguesas y
              empanadas al paso o en la terraza.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ec-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.amarillo, color: C.carbon }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${mono.className} ec-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: 'rgba(20,17,16,0.5)', color: C.onCarbon, border: '1px solid rgba(245,237,224,0.5)' }}
              >
                Ver la carta
              </a>
            </div>
            <div className="flex items-center gap-3 mt-7">
              <Stars value={4.4} color={C.amarillo} className="w-4 h-4" />
              <span className={`${mono.className} text-xs font-bold`} style={{ color: C.onCarbon }}>
                {BIZ.rating} en Google · {BIZ.ratingCount} opiniones
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de container ── */}
      <div className="ec-ribs overflow-hidden border-y-4 py-3" style={{ borderColor: C.carbon, backgroundColor: C.amarillo }} aria-hidden="true">
        <div className="ec-marquee flex whitespace-nowrap w-max">
          {[0, 1].map((dup) => (
            <span key={dup} className={`${display.className} uppercase tracking-[0.08em] text-xl md:text-2xl`} style={{ color: C.carbon }}>
              {['Completos', 'Hamburguesas', 'Empanadas', 'Sándwiches', 'Terraza', 'Mayonesa de la casa'].map((w) => (
                <span key={w} className="mx-5">
                  {w} <span style={{ color: C.rojo }}>●</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── La carta: ticket del carrito ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amarillo }}>
                Lo que se pide en la ventana
              </p>
              <h2 className={`${display.className} font-bold uppercase text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.95] tracking-tight mb-8`} style={{ color: C.onCarbon }}>
                La carta del carrito
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div
                className="rounded-t-2xl px-6 md:px-8 pt-7 pb-6"
                style={{
                  backgroundColor: C.papel,
                  color: C.ink,
                  // borde inferior perforado de ticket
                  WebkitMaskImage: 'radial-gradient(circle at 10px 100%, transparent 9px, black 10px)',
                  WebkitMaskSize: '24px 100%',
                  WebkitMaskRepeat: 'repeat-x',
                  maskImage: 'radial-gradient(circle at 10px 100%, transparent 9px, black 10px)',
                  maskSize: '24px 100%',
                  maskRepeat: 'repeat-x',
                  maskPosition: 'bottom',
                }}
              >
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-center pb-5 border-b-2 border-dashed`} style={{ borderColor: 'rgba(36,28,20,0.3)', color: C.muted }}>
                  Pedido · El Carrito · Parral
                </p>
                <ul>
                  {CARTA.map((item) => (
                    <li
                      key={item.n}
                      className="flex items-baseline gap-4 py-3.5 border-b border-dashed"
                      style={{ borderColor: 'rgba(36,28,20,0.2)' }}
                    >
                      <span className={`${mono.className} text-sm font-bold w-7 shrink-0`} style={{ color: C.rojo }}>
                        {item.n}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`${display.className} uppercase text-xl md:text-2xl leading-none`} style={{ color: C.ink }}>
                          {item.t}
                        </p>
                        <p className="text-sm mt-1" style={{ color: C.muted }}>
                          {item.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] pt-5 text-center`} style={{ color: C.muted }}>
                  Precios y disponibilidad se confirman por WhatsApp
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-5" delay={120}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 rotate-2" style={{ borderColor: C.amarillo }}>
                <Image
                  src={`${IMG}/mural.webp`}
                  alt="Mural del carrito: logo El Carrito y su lema sacamos tu apetito"
                  fill
                  sizes="(min-width: 768px) 38vw, 92vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-4 text-center`} style={{ color: C.onCarbonSoft }}>
                El mural que da la bienvenida
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Stickers: lo que sale de la cocina ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {STICKERS.map((s, i) => (
            <Reveal key={s.img} delay={i * 80}>
              <figure className="p-2 md:p-3 rounded-xl" style={{ backgroundColor: C.papel, transform: `rotate(${s.rot})` }}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`${IMG}/${s.img}.webp`}
                    alt={`${s.t} de El Carrito Parral`}
                    fill
                    sizes="(min-width: 768px) 28vw, 29vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[9px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-center py-2`} style={{ color: C.ink }}>
                  {s.t}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La terraza: container + juegos ── */}
      <section id="terraza" className="scroll-mt-20" style={{ backgroundColor: C.amarillo }}>
        <div className="ec-ribs">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
                La terraza del container
              </p>
              <h2 className={`${display.className} font-bold uppercase text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.95] tracking-tight mb-4`} style={{ color: C.carbon }}>
                Venir es quedarse un rato
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-10" style={{ color: 'rgba(20,17,16,0.75)' }}>
                Mesas al aire libre bajo techo, juegos para los chicos y música.
                En las reseñas lo describen como un ambiente bonito y grato.
              </p>
            </Reveal>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <Reveal className="col-span-12 md:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4" style={{ borderColor: C.carbon }}>
                  <Image
                    src={`${IMG}/container.webp`}
                    alt="Terraza de El Carrito con mesas rojas frente al container amarillo"
                    fill
                    sizes="(min-width: 768px) 56vw, 92vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal className="col-span-12 md:col-span-5" delay={120}>
                <div className="relative h-full min-h-[220px] overflow-hidden rounded-2xl border-4" style={{ borderColor: C.carbon }}>
                  <Image
                    src={`${IMG}/juegos.webp`}
                    alt="Juegos infantiles de la terraza de El Carrito en Parral"
                    fill
                    sizes="(min-width: 768px) 34vw, 92vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <Reveal className="col-span-12 md:col-span-5">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amarillo }}>
              Lo que dice Parral
            </p>
            <p className={`${display.className} font-bold uppercase leading-[0.9] text-[clamp(4rem,10vw,7rem)]`} style={{ color: C.onCarbon }}>
              {BIZ.rating}
            </p>
            <Stars value={4.4} color={C.amarillo} className="w-5 h-5" />
            <p className={`${mono.className} text-sm font-bold mt-3`} style={{ color: C.onCarbon }}>
              {BIZ.ratingCount} opiniones en Google
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-4 px-3 py-1.5 rounded-full inline-block`} style={{ backgroundColor: 'rgba(255,198,41,0.15)', color: C.amarillo }}>
              «completos» en 35 opiniones
            </p>
            <div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block mt-6 text-xs uppercase tracking-[0.16em] font-bold underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.onCarbon, textDecorationColor: C.rojo }}
              >
                Ver su ficha en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <figure className="rounded-2xl border-2 p-6 md:p-8" style={{ borderColor: C.amarillo, backgroundColor: 'rgba(255,248,236,0.06)' }}>
              <Stars value={4} color={C.amarillo} className="w-4 h-4" />
              <blockquote className="text-lg md:text-xl leading-relaxed font-medium mt-4" style={{ color: C.onCarbon }}>
                “La atención es super buena, ambiente muy bien decorado y buena
                música. Su mayonesa es super rica, destacable dentro de Parral.”
              </blockquote>
              <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-5`} style={{ color: C.onCarbonSoft }}>
                Yohn Antony Retamal · reseña de Google
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Llegar ── */}
      <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-6 flex flex-col">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amarillo }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-bold uppercase text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[0.95] tracking-tight mb-5`} style={{ color: C.onCarbon }}>
              Fíjate en el container amarillo
            </h2>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border-4 mb-5" style={{ borderColor: C.amarillo }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada de El Carrito en Parral con su toldo y clientes haciendo fila"
                fill
                sizes="(min-width: 768px) 46vw, 92vw"
                className="object-cover"
              />
            </div>
            <address className="not-italic text-sm md:text-base leading-relaxed font-semibold" style={{ color: C.onCarbon }}>
              {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:+${BIZ.phone}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ec-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Pedir ahora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} ec-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ borderColor: C.amarillo, color: C.amarillo, borderWidth: '2px', borderStyle: 'solid' }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6" delay={100}>
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border-2" style={{ borderColor: C.amarillo }}>
              <LazyMap src={MAPS_EMBED} title="El Carrito en Google Maps" className="absolute inset-0 w-full h-full border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.lineDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col items-center gap-3 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- wordmark real recortado del mural del carrito */}
          <img src={`${IMG}/logo.webp`} alt="Logo de El Carrito en su mural" className="h-16 w-auto rounded-lg" />
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.onCarbonSoft }}>
            {BIZ.name} · {BIZ.kind} · {BIZ.city}, Maule
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ec-btn text-sm font-bold px-6 py-2.5 rounded-full tap-44"
            style={{ backgroundColor: C.amarillo, color: C.carbon }}
          >
            Pedir por WhatsApp
          </a>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(245,237,224,0.4)' }}>
            Demo de Sitiazo para {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
