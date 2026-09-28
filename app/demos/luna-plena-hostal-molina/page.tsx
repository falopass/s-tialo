import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Chrome, C } from './chrome'
import { AMENIDADES, BIZ, CERCA_DE, MAPS_EMBED, MAPS_URL, PARADAS, RESENAS, WA_LINK } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' }],
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

function Etiqueta({ children, oscuro = false }: { children: React.ReactNode; oscuro?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`}
      style={{ color: oscuro ? C.mostaza : C.bosque }}
    >
      {children}
    </p>
  )
}

function Foto({ src, alt, className = '', ratio = 'aspect-[4/5]' }: { src: string; alt: string; className?: string; ratio?: string }) {
  return (
    <figure className={`rounded-xl border-2 p-2 ${className}`} style={{ borderColor: C.tinta, backgroundColor: C.carta }}>
      <div className={`relative overflow-hidden rounded-lg ${ratio}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
      </div>
    </figure>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'luna-plena-hostal-molina',
  title: 'Luna Plena Hostal — alojamiento en el camino a Aguas Frías, Molina',
  description:
    'Hostal campestre en Molina: piscina, tinaja, quincho, cabañas y comida casera. 4,7 estrellas en Google con 85 opiniones. Reservas por WhatsApp.',
  image: '/demos/luna-plena-hostal-molina/hero.webp',
})

export default function LunaPlenaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero: portada editorial con arco ── */}
        <section id="inicio" className="pt-24 md:pt-32 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <Reveal>
                <Etiqueta>Hostal · Molina · Región del Maule</Etiqueta>
                <h1 className={`${display.className} leading-[0.95] text-[clamp(3.4rem,12vw,6.5rem)] mb-5`}>
                  Luna
                  <br />
                  Plena
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                  Un hostal de campo en el camino a Aguas Frías: piscina, tinaja, quincho
                  y habitaciones para descansar en familia.
                </p>
                <div className="flex items-center gap-3 mb-7">
                  <Stars value={BIZ.rating} color={C.bosque} className="w-5 h-5" />
                  <p className={`${mono.className} text-xs font-bold`} style={{ color: C.tinta }}>
                    {BIZ.rating.toString().replace('.', ',')} · {BIZ.resenasCount} opiniones en Google
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.bosque, color: C.papel }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#recorrido"
                    className={`${body.className} font-bold text-sm px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                    style={{ borderColor: C.tinta, color: C.tinta }}
                  >
                    Hacer el recorrido
                  </a>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="relative">
                  <div
                    className="relative overflow-hidden rounded-t-[999px] rounded-b-2xl border-2 mx-auto max-w-[340px] md:max-w-[400px]"
                    style={{ borderColor: C.tinta }}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src="/demos/luna-plena-hostal-molina/piscina.webp"
                        alt="Piscina de Luna Plena Hostal rodeada de pasto"
                        fill
                        priority
                        sizes="(min-width: 768px) 40vw, 85vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p
                    className={`${mono.className} absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border`}
                    style={{ backgroundColor: C.carta, borderColor: C.tinta, color: C.tinta }}
                  >
                    Foto real · Google Maps
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── La entrada al fundo ── */}
        <section className="pb-14 md:pb-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <figure className="rounded-2xl border-2 p-2 md:p-3" style={{ borderColor: C.tinta, backgroundColor: C.carta }}>
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-[21/9]">
                  <Image
                    src="/demos/luna-plena-hostal-molina/hero.webp"
                    alt="Piscina, quincho y sectores verdes de Luna Plena Hostal, en el camino a Aguas Frías"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── Datos en franja oscura ── */}
        <section style={{ backgroundColor: C.bosque }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
              {[
                ['Dirección', 'Buena Unión 655 · Molina'],
                ['Nota en Google', `${BIZ.rating.toString().replace('.', ',')} de 5`],
                ['Opiniones', `${BIZ.resenasCount} publicadas`],
                ['Reservas', 'Solo por WhatsApp'],
              ].map(([dt, dd]) => (
                <div key={dt} className="border-l-2 pl-4" style={{ borderColor: C.mostaza }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.mostaza }}>
                    {dt}
                  </dt>
                  <dd className="text-sm md:text-base font-bold leading-snug" style={{ color: C.papel }}>
                    {dd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Qué hay en el fundo ── */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>Lo que hay</Etiqueta>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-3xl mb-8`}>
                un fundo pensado para quedarse
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="flex flex-wrap gap-2.5 max-w-3xl" aria-label="Amenidades del hostal">
                {AMENIDADES.map((a) => (
                  <li
                    key={a}
                    className="text-sm md:text-base font-bold px-4 py-2.5 rounded-full border-2"
                    style={{ borderColor: C.tinta, backgroundColor: C.carta }}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <p className={`${mono.className} text-xs mt-6 max-w-xl leading-relaxed`} style={{ color: C.muted }}>
                Según las reseñas de Google: piscina, tinaja, cancha de fútbol, parrilla y mesones al aire libre.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── El recorrido: paradas numeradas ── */}
        <section id="recorrido" className="scroll-mt-20 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>El recorrido</Etiqueta>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-3xl mb-12 md:mb-16`}>
                de la recepción a la piscina, parada por parada
              </h2>
            </Reveal>
            <ol className="relative">
              {PARADAS.map((p, i) => (
                <li key={p.num} className="relative md:grid md:grid-cols-[72px_1fr] md:gap-10">
                  {/* Riel punteado del camino */}
                  <div className="absolute left-4 md:left-0 top-1 bottom-0 md:relative md:top-0 md:flex md:flex-col md:items-center w-8 md:w-auto">
                    <span
                      className={`${mono.className} relative z-10 text-sm md:text-base font-bold w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center shrink-0`}
                      style={{ borderColor: C.tinta, backgroundColor: C.papel, color: C.tinta }}
                    >
                      {p.num}
                    </span>
                    {i < PARADAS.length - 1 && (
                      <span
                        className="hidden md:block w-0 flex-1 border-l-2 border-dashed mt-1"
                        style={{ borderColor: C.tinta }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {/* Línea punteada móvil */}
                  {i < PARADAS.length - 1 && (
                    <span
                      className="md:hidden absolute left-[1.94rem] top-9 bottom-0 w-0 border-l-2 border-dashed"
                      style={{ borderColor: C.tinta }}
                      aria-hidden="true"
                    />
                  )}
                  <Reveal className="pl-12 md:pl-0 pb-12 md:pb-16">
                    <div className={`grid gap-6 md:gap-10 items-center ${i % 2 ? 'md:grid-cols-[1fr_auto]' : 'md:grid-cols-[auto_1fr]'}`}>
                      <div className={i % 2 ? 'md:order-2' : ''}>
                        {'fotos' in p && p.fotos ? (
                          <div className="grid grid-cols-2 gap-3">
                            <Foto src={p.fotos[0].src} alt={p.fotos[0].alt} ratio="aspect-[4/5]" />
                            <Foto src={p.fotos[1].src} alt={p.fotos[1].alt} ratio="aspect-[4/5]" className="mt-6" />
                          </div>
                        ) : (
                          <Foto src={p.foto!} alt={p.alt!} className="max-w-[380px]" ratio="aspect-[4/3.4]" />
                        )}
                      </div>
                      <div className={i % 2 ? 'md:order-1 md:text-right md:justify-self-end' : ''}>
                        <h3 className={`${display.className} text-2xl md:text-3xl mb-3`}>{p.nombre}</h3>
                        <p className={`text-sm md:text-base leading-relaxed max-w-md ${i % 2 ? 'md:ml-auto' : ''}`} style={{ color: C.muted }}>
                          {p.texto}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Reseñas ── */}
        <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start">
              <Reveal>
                <Etiqueta oscuro>Reseñas de Google</Etiqueta>
                <p className={`${display.className} text-7xl md:text-8xl leading-none mb-3`} style={{ color: C.papel }}>
                  {BIZ.rating.toString().replace('.', ',')}
                </p>
                <Stars value={BIZ.rating} color={C.mostaza} className="w-5 h-5" />
                <p className={`${mono.className} text-xs mt-3`} style={{ color: C.mutedOsc }}>
                  {BIZ.resenasCount} opiniones publicadas
                </p>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {RESENAS.map((r, i) => (
                  <Reveal key={r.autor} delay={i * 80} className="h-full">
                    <blockquote
                      className="h-full rounded-xl p-5 md:p-6 border"
                      style={{ backgroundColor: C.carta, borderColor: 'rgba(31,42,29,0.12)' }}
                    >
                      <p className="text-sm leading-relaxed mb-4" style={{ color: C.tinta }}>
                        “{r.texto}”
                      </p>
                      <footer className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                        {r.autor} · Google
                      </footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Cómo llegar ── */}
        <section id="visita" className="scroll-mt-20 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>Cómo llegar</Etiqueta>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-3xl mb-10`}>
                en el camino a Aguas Frías, pasando Molina
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              <Reveal>
                <div className="h-full rounded-xl border-2 flex flex-col" style={{ borderColor: C.tinta, backgroundColor: C.carta }}>
                  <div className="px-6 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.bosque }}>
                      Dirección
                    </p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3 font-bold">
                      {BIZ.addressCorto}
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: C.bosque, textDecorationColor: 'rgba(38,67,46,0.35)' }}
                    >
                      Abrir en Google Maps →
                    </a>
                  </div>
                  <div className="px-6 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-3`} style={{ color: C.bosque }}>
                      Cerca de
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {CERCA_DE.map((c) => (
                        <li
                          key={c}
                          className="text-xs font-bold px-3 py-1.5 rounded-full border"
                          style={{ borderColor: C.line, color: C.muted }}
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 py-6 flex-1">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.bosque }}>
                      Reservas
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      El hostal no publica horario de recepción: fechas, valores y disponibilidad
                      se consultan directo por WhatsApp al {BIZ.phone}.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="rounded-xl border-2 overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.tinta, backgroundColor: '#DCD6C4' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, Molina`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p
                    className={`${mono.className} px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em]`}
                    style={{ borderColor: C.line, color: C.tinta }}
                  >
                    Molina · Región del Maule
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section style={{ backgroundColor: C.mostaza }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.tinta }}>
                un fin de semana en el campo
                <br />
                empieza con un mensaje
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.bosqueOsc, color: C.papel }}
              >
                Escribir a {BIZ.name}
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
