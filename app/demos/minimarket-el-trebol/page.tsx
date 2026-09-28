import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Chrome, C } from './chrome'
import { BIZ, FACHADAS, MAPS_EMBED, MAPS_URL, RESENAS, TIENDA, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }],
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

const CLIP_D = 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)'
const CLIP_I = 'polygon(16px 0, 100% 0, 100% 100%, 16px 100%, 0 50%)'

// Señalética de calle: placa azul con filo blanco y punta de flecha.
function Blade({ children, flip = false, className = '' }: { children: React.ReactNode; flip?: boolean; className?: string }) {
  const clip = flip ? CLIP_I : CLIP_D
  return (
    <span className={`inline-block p-1 ${className}`} style={{ backgroundColor: '#FBF6EA', clipPath: clip }}>
      <span
        className={`${mono.className} inline-flex items-center justify-center px-6 py-2 text-[11px] md:text-sm font-bold uppercase tracking-[0.18em] whitespace-nowrap`}
        style={{ backgroundColor: C.azul, color: '#fff', clipPath: clip }}
      >
        {children}
      </span>
    </span>
  )
}

function Etiqueta({ children, color = '#14532D' }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color }}>
      {children}
    </p>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'minimarket-el-trebol',
  title: 'Minimarket El Trébol — el almacén de la esquina en Talca',
  description:
    'Minimarket en 22 norte esquina 30 oriente, Talca: abarrotes, verduras, las churrascas Don Trébol y reparto por PedidosYa. 4,3 estrellas en Google.',
  image: '/demos/minimarket-el-trebol/fachada.webp',
})

export default function TrebolPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero: el letrero de la esquina ── */}
        <section id="inicio" className="pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
          <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
            <Reveal>
              <div className="flex items-center justify-center -mx-2 mb-6" aria-hidden="true">
                <span className="-rotate-3 -mr-6 relative z-10">
                  <Blade>22 norte</Blade>
                </span>
                <span className="rotate-3 -ml-6">
                  <Blade flip>30 oriente</Blade>
                </span>
              </div>
              <div
                className="inline-block border-4 rounded-lg px-6 py-5 md:px-10 md:py-7 mb-5"
                style={{ backgroundColor: C.amarillo, borderColor: C.tinta, boxShadow: `8px 8px 0 ${C.tinta}` }}
              >
                <h1 className={`${display.className} uppercase leading-[0.9] text-[clamp(3rem,13vw,6.2rem)]`}>
                  Minimarket
                  <br />
                  El Trébol
                </h1>
              </div>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-6" style={{ color: C.muted }}>
                El almacén de la esquina de {BIZ.esquina.split(',')[0]}: abarrotes,
                verduras y las {BIZ.marcaChurrasco}, hechas a la parrilla.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span
                  className={`${mono.className} inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border-2`}
                  style={{ borderColor: C.tinta, backgroundColor: C.carta }}
                >
                  <Stars value={BIZ.rating} color="#B8860B" className="w-4 h-4" />
                  {BIZ.rating.toString().replace('.', ',')} · {BIZ.resenasCount} opiniones en Google
                </span>
                <span
                  className={`${mono.className} text-xs font-bold px-4 py-2 rounded-full border-2`}
                  style={{ borderColor: C.tinta, backgroundColor: C.carta }}
                >
                  También en PedidosYa
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: '#14532D', color: C.papel }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold text-sm px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <figure className="rounded-xl border-4 p-2 md:p-3" style={{ borderColor: C.tinta, backgroundColor: C.carta }}>
                <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                  <Image
                    src={FACHADAS[0].src}
                    alt={FACHADAS[0].alt}
                    fill
                    priority
                    sizes="(min-width: 768px) 80vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em] text-left px-2 pt-2`} style={{ color: C.muted }}>
                  La esquina, de día · foto publicada en Google Maps
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── La tienda: qué comprar ── */}
        <section id="tienda" className="scroll-mt-20 py-14 md:py-20 border-t-2" style={{ borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>La tienda</Etiqueta>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.95] max-w-3xl mb-10`}>
                lo que se compra en la esquina
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {TIENDA.map((t, i) => (
                <Reveal key={t.nombre} delay={i * 80} className="h-full">
                  <article
                    className="h-full rounded-xl border-2 overflow-hidden"
                    style={{ borderColor: C.tinta, backgroundColor: C.carta }}
                  >
                    <div className={`relative border-b-2 ${t.esMarca || t.esAfiche ? 'aspect-square' : 'aspect-[4/3]'}`} style={{ borderColor: C.tinta }}>
                      <Image
                        src={t.foto}
                        alt={t.alt}
                        fill
                        sizes="(min-width: 768px) 40vw, 90vw"
                        className="object-cover"
                      />
                      {(t.esMarca || t.esAfiche) && (
                        <span
                          className={`${mono.className} absolute top-2 left-2 text-[9px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border`}
                          style={{ backgroundColor: C.papel, borderColor: C.tinta, color: C.tinta }}
                        >
                          {t.esMarca ? 'su marca' : 'afiche publicado'}
                        </span>
                      )}
                    </div>
                    <div className="px-5 py-4">
                      <h3 className={`${display.className} uppercase text-xl md:text-2xl leading-tight mb-1`}>{t.nombre}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {t.detalle}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── La esquina: galería de fachada ── */}
        <section id="esquina" className="scroll-mt-20 py-14 md:py-20" style={{ backgroundColor: C.azul }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-4" aria-hidden="true">
                <Blade>22 norte</Blade>
                <Blade flip>30 oriente</Blade>
              </div>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.95] max-w-3xl mb-8`} style={{ color: C.papel }}>
                el almacén de la esquina
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <Reveal className="md:row-span-2 h-full">
                <figure className="h-full rounded-xl border-4 overflow-hidden flex flex-col" style={{ borderColor: C.papel }}>
                  <div className="relative flex-1 min-h-[280px]">
                    <Image
                      src={FACHADAS[1].src}
                      alt={FACHADAS[1].alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <figure className="rounded-xl border-4 overflow-hidden" style={{ borderColor: C.papel }}>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={FACHADAS[2].src}
                      alt={FACHADAS[2].alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-xl border-2 p-5 md:p-6" style={{ borderColor: 'rgba(251,246,234,0.4)', backgroundColor: 'rgba(0,0,0,0.18)' }}>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.papel }}>
                    Fachada amarilla con letreros azules, en la esquina de pasaje 22 norte
                    con 30 oriente. Es el almacén del barrio: se llega a pie, se pide por
                    WhatsApp o se encarga por PedidosYa.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Horario + reseñas ── */}
        <section id="resenas" className="scroll-mt-20 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <Reveal>
                  <Etiqueta>Horario · según Google Maps</Etiqueta>
                  <h2 className={`${display.className} uppercase text-3xl md:text-4xl leading-[0.95] mb-6`}>
                    abierto de lunes a viernes
                  </h2>
                  <ul className="space-y-3 max-w-sm mb-8">
                    {BIZ.hours.map((h) => (
                      <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                        <span className="font-bold">{h.days}</span>
                        <span className="flex-1 border-b-2 border-dotted translate-y-[-3px]" style={{ borderColor: C.line }} aria-hidden="true" />
                        <span className={`${mono.className}`} style={{ color: C.muted }}>
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={120}>
                  <figure className="rounded-xl border-2 overflow-hidden max-w-[300px]" style={{ borderColor: C.tinta, backgroundColor: C.carta }}>
                    <div className="relative aspect-square">
                      <Image
                        src="/demos/minimarket-el-trebol/flyer-horario.webp"
                        alt="Afiche de Churrascas Don Trébol con su horario publicado"
                        fill
                        sizes="300px"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className={`${mono.className} text-[9px] uppercase tracking-[0.16em] px-3 py-2 border-t`} style={{ borderColor: C.line, color: C.muted }}>
                      Afiche de {BIZ.marcaChurrasco} · su Facebook
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <Etiqueta>Reseñas de Google</Etiqueta>
                  <div className="flex items-end gap-4 mb-6">
                    <p className={`${display.className} text-6xl md:text-7xl leading-none`}>
                      {BIZ.rating.toString().replace('.', ',')}
                    </p>
                    <div className="pb-1">
                      <Stars value={BIZ.rating} color="#B8860B" className="w-5 h-5" />
                      <p className={`${mono.className} text-[11px] mt-1.5`} style={{ color: C.muted }}>
                        {BIZ.resenasCount} opiniones publicadas
                      </p>
                    </div>
                  </div>
                </Reveal>
                <div className="space-y-4">
                  {RESENAS.map((r, i) => (
                    <Reveal key={r.autor} delay={i * 90}>
                      <blockquote className="rounded-xl border-2 p-5" style={{ borderColor: C.tinta, backgroundColor: C.carta }}>
                        <p className="text-sm leading-relaxed mb-3">“{r.texto}”</p>
                        <footer className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                          {r.autor} · Google
                        </footer>
                      </blockquote>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mapa + CTA ── */}
        <section id="visita" className="scroll-mt-20 pb-14 md:pb-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>Cómo llegar</Etiqueta>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.95] max-w-3xl mb-10`}>
                en la esquina, a pasos de tu casa
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
              <Reveal>
                <div className="h-full rounded-xl border-2 flex flex-col" style={{ borderColor: C.tinta, backgroundColor: C.carta }}>
                  <div className="px-6 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: '#14532D' }}>
                      Dirección
                    </p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3 font-bold">
                      {BIZ.address}
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: '#14532D', textDecorationColor: 'rgba(20,83,45,0.35)' }}
                    >
                      Abrir en Google Maps →
                    </a>
                  </div>
                  <div className="px-6 py-6 flex-1 flex flex-col justify-center">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                      ¿Algo te falta para la once? Pregunta si hay antes de salir.
                    </p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${body.className} inline-block text-center font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                      style={{ backgroundColor: '#14532D', color: C.papel }}
                    >
                      Preguntar por WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="rounded-xl border-4 overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.tinta, backgroundColor: '#DCD6C4' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, Talca`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className={`${mono.className} px-5 py-3 border-t-2 text-[10px] uppercase tracking-[0.18em]`} style={{ borderColor: C.tinta, color: C.tinta }}>
                    Pasaje 22 norte esquina 30 oriente · Talca
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
