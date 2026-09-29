import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_DISENO,
  WA_LINK_PRECIOS,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  night: '#1B0710',
  panel: '#260C18',
  pink: '#F23D8C',
  pinkSoft: '#FFB8D4',
  blush: '#FFEDF4',
  paper: '#FFF9FB',
  muted: 'rgba(255,237,244,0.74)',
  mutedDark: 'rgba(38,12,24,0.7)',
  line: 'rgba(242,61,140,0.32)',
  lineLight: 'rgba(38,12,24,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'beauty-love',
  title: 'Beauty Love — Manicura y pedicura en Molina',
  description: 'Salón de manicura y pedicura en Notre Damme 913, Molina. Hora agendada y atención directa por WhatsApp.',
  image: '/demos/beauty-love/hero.webp',
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'La carta', href: '#carta' },
  { label: 'El salón', href: '#salon' },
  { label: 'Contacto', href: '#contacto' },
]

/** Las fotos son trabajos reales publicados por el salón — el rótulo
 *  describe lo que se ve, sin inventar nombres de catálogo. */
const TRABAJOS = [
  { src: `${IMG}/diseno-francesa.webp`, alt: 'Uñas francesas en tono rosa con moños y estrellas doradas', name: 'Francesa rosa con moños' },
  { src: `${IMG}/diseno-corazones.webp`, alt: 'Uñas stiletto rosadas con corazones blancos, moños y brillos', name: 'Corazones y moños' },
  { src: `${IMG}/diseno-negro.webp`, alt: 'Uñas negras con efecto ojo de gato y destellos holográficos', name: 'Negro ojo de gato' },
  { src: `${IMG}/diseno-rosa.webp`, alt: 'Uñas almendra en rosa con puntos blancos dibujados a mano', name: 'Rosa con puntos' },
  { src: `${IMG}/diseno-uvas.webp`, alt: 'Uñas en tono malva con racimos de uva pintados a mano alzada', name: 'Uvas en malva' },
]

const CARTA = [
  { name: 'Manicura', desc: 'Limado, cutícula trabajada con calma y acabado parejo. La base de unas manos cuidadas.' },
  { name: 'Esmaltado permanente', desc: 'Color que aguanta semanas intacto, con el brillo del primer día.' },
  { name: 'Pedicura', desc: 'Pies cuidados de punta a punta: limpieza, limado y esmalte, sin apuro.' },
  { name: 'Nail art', desc: 'Corazones, moños, frutas o lo que traigas guardado en el teléfono: se dibuja a mano.' },
]

const FICHA = [
  { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
  { k: 'Agenda', v: 'Con hora reservada por WhatsApp' },
  { k: 'Instagram', v: `@${BIZ.instagram}`, href: INSTAGRAM_URL },
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-3'

export default function BeautyLovePage() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-hidden antialiased`}
      style={{ backgroundColor: C.night, color: C.blush }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .bl-tira { scrollbar-width: thin; scrollbar-color: ${C.pink} transparent }
        .bl-tira::-webkit-scrollbar { height: 6px }
        .bl-tira::-webkit-scrollbar-thumb { background: ${C.pink}; border-radius: 999px }
        .bl-card { transition: transform .5s cubic-bezier(.25,.1,.25,1), box-shadow .5s }
        .bl-card:hover { transform: translateY(-4px); box-shadow: 0 0 0 1px ${C.pink}, 0 18px 40px -18px rgba(242,61,140,.55) }
        .bl-band { display: flex; justify-content: center; padding: 0 5rem 1.25rem 1.25rem; background-color: ${C.panel} }
        .bl-band > div { position: static; max-width: 100% }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} italic font-bold`}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${body.className} font-semibold tracking-tight`}
        theme={{
          over: 'dark',
          bar: 'rgba(27,7,16,0.88)',
          ink: C.blush,
          line: C.line,
          btnBg: C.pink,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Manicura francesa con corazón rosado pintado a mano, trabajo de Beauty Love"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,7,16,0.6) 0%, rgba(27,7,16,0.5) 45%, rgba(27,7,16,0.94) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-14 md:pb-20">
          <Reveal>
            <p
              className="inline-flex items-center gap-2.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.26em] px-4 py-2 border rounded-full mb-7"
              style={{ borderColor: C.line, color: C.pinkSoft, backgroundColor: 'rgba(27,7,16,0.55)' }}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill={C.pink} aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} italic font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3.4rem,16vw,9rem)] mb-6`}
              style={{ color: C.paper }}
            >
              Beauty <span style={{ color: C.pink }}>Love</span>
            </h1>
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-7 md:gap-12 items-end">
              <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted, textShadow: '0 1px 12px rgba(27,7,16,0.9)' }}>
                Manicura y pedicura en Notre Damme, {BIZ.city}. Cada diseño se
                dibuja a mano en tu hora reservada — la misma persona te
                responde y te atiende.
              </p>
              <div className="flex flex-wrap md:justify-end gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center min-h-[48px] px-7 rounded-full text-sm font-bold uppercase tracking-[0.1em] transition hover:brightness-110 active:scale-95 tap-44 ${FOCUS} focus-visible:outline-[#FFB8D4]`}
                  style={{ backgroundColor: C.pink, color: '#FFFFFF' }}
                >
                  Agendar hora
                </a>
                <a
                  href="#trabajos"
                  className={`inline-flex items-center min-h-[48px] px-7 rounded-full text-sm font-semibold uppercase tracking-[0.1em] border tap-44 ${FOCUS} focus-visible:outline-[#FFB8D4]`}
                  style={{ borderColor: 'rgba(255,237,244,0.5)', color: C.blush }}
                >
                  Ver trabajos
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-5 border-t pt-5 text-sm"
              style={{ borderColor: 'rgba(255,237,244,0.28)' }}
            >
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay },
                { k: 'Instagram', v: `@${BIZ.instagram}` },
                { k: 'Modalidad', v: 'Hora agendada' },
              ].map((f) => (
                <div key={f.k}>
                  <dt className="text-[10px] uppercase tracking-[0.26em] mb-1" style={{ color: C.pinkSoft }}>
                    {f.k}
                  </dt>
                  <dd className="font-medium" style={{ color: C.paper }}>{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Prueba social ── */}
      <section aria-label="Presencia en redes" style={{ backgroundColor: C.blush, color: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(38,12,24,0.85)' }}>
            Los trabajos nuevos salen primero en{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-4 decoration-1 hover:opacity-80 tap-44 ${FOCUS} focus-visible:outline-[#F23D8C]`}
              style={{ color: C.pink }}
            >
              Instagram @{BIZ.instagram}
            </a>
            {' '}— el muestrario de diseños más reciente del salón.
          </p>
          <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(38,12,24,0.85)' }}>
            Recién llegando a Google Maps: la ficha está activa y{' '}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-4 decoration-1 hover:opacity-80 tap-44 ${FOCUS} focus-visible:outline-[#F23D8C]`}
              style={{ color: C.pink }}
            >
              la primera reseña puede ser la tuya
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Últimos trabajos: tira de contactos ── */}
      <section id="trabajos" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
              <h2
                className={`${display.className} italic font-semibold leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl`}
                style={{ color: C.paper }}
              >
                Lo que sale<br />
                <span style={{ color: C.pink }}>de esta mesa</span>
              </h2>
              <p className="max-w-sm text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Diseños reales del salón, tal como quedaron en las manos que
                los llevaron. Traes la idea, la mesa la hace.
              </p>
            </div>
          </Reveal>
        </div>

        {/* tira: perforaciones arriba y abajo, placas al centro */}
        <Reveal delay={100}>
          <div className="max-w-6xl mx-auto">
            <div
              className="h-4 mx-5 md:mx-8"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, rgba(255,237,244,0.5) 0 14px, transparent 14px 36px)`,
                backgroundSize: '36px 8px',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center',
              }}
              aria-hidden="true"
            />
            <div
              className="bl-tira overflow-x-auto snap-x px-5 md:px-8 py-5"
              role="list"
              aria-label="Últimos trabajos del salón"
            >
              <div className="flex gap-5 md:gap-7 w-max">
                {TRABAJOS.map((t, i) => (
                  <figure key={t.src} className="bl-card snap-start w-[232px] md:w-[272px] shrink-0" role="listitem">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-md" style={{ boxShadow: `0 0 0 1px ${C.line}` }}>
                      <Image
                        src={t.src}
                        alt={t.alt}
                        fill
                        sizes="(min-width: 768px) 272px, 232px"
                        className="object-cover"
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                    </div>
                    <figcaption className="mt-3 flex items-baseline gap-3">
                      <span className={`${display.className} italic font-bold text-sm`} style={{ color: C.pink }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] font-medium tracking-wide" style={{ color: C.blush }}>
                        {t.name}
                      </span>
                    </figcaption>
                  </figure>
                ))}
                {/* placa CTA al final de la tira */}
                <figure className="snap-start w-[232px] md:w-[272px] shrink-0" role="listitem">
                  <a
                    href={WA_LINK_DISENO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col justify-between aspect-[3/4] rounded-md p-5 tap-44 ${FOCUS} focus-visible:outline-[#F23D8C]`}
                    style={{ backgroundColor: C.pink, color: '#FFFFFF' }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/85">
                      Tu diseño
                    </span>
                    <span>
                      <span className={`${display.className} italic font-semibold block text-2xl md:text-[26px] leading-tight mb-3`}>
                        La siguiente placa puede ser tuya
                      </span>
                      <span className="text-sm font-semibold underline underline-offset-4 decoration-1">
                        Consultar por WhatsApp →
                      </span>
                    </span>
                  </a>
                </figure>
              </div>
            </div>
            <div
              className="h-4 mx-5 md:mx-8"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, rgba(255,237,244,0.5) 0 14px, transparent 14px 36px)`,
                backgroundSize: '36px 8px',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center',
              }}
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.paper, color: C.panel }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className={`${display.className} italic font-semibold text-4xl md:text-6xl leading-[1] tracking-[-0.02em]`}>
                La carta
              </h2>
              <span
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] px-3.5 py-1.5 rounded-full border"
                style={{ borderColor: C.pink, color: C.pink }}
              >
                Valores a confirmar
              </span>
            </div>
            <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: C.mutedDark }}>
              Esto es lo que se hace en la mesa. Los valores de cada servicio
              se consultan directo por WhatsApp — la lista real la publica el salón.
            </p>
          </Reveal>
          <ul>
            {CARTA.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <li className="py-5 border-t" style={{ borderColor: C.lineLight }}>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl`}>
                      <span className={`${display.className} italic mr-3 text-base md:text-lg`} style={{ color: C.pink }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {s.name}
                    </h3>
                    <span className="flex-1 border-b border-dotted mx-2 translate-y-[-3px]" style={{ borderColor: 'rgba(242,61,140,0.45)' }} aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap" style={{ color: C.pink }}>
                      Consultar
                    </span>
                  </div>
                  <p className="text-sm md:text-[15px] leading-relaxed pl-9 md:pl-10" style={{ color: C.mutedDark }}>
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={160}>
            <div className="mt-9 text-center">
              <a
                href={WA_LINK_PRECIOS}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center min-h-[48px] px-7 rounded-full text-sm font-bold uppercase tracking-[0.1em] tap-44 ${FOCUS} focus-visible:outline-[#F23D8C]`}
                style={{ backgroundColor: C.panel, color: C.blush }}
              >
                Consultar valores
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El salón ── */}
      <section id="salon" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            {/* collage de dos fotos reales del salón */}
            <Reveal>
              <div className="relative pb-10">
                <div className="relative aspect-[4/5] w-[72%] overflow-hidden rounded-md" style={{ boxShadow: `0 0 0 1px ${C.line}, 0 30px 60px -20px rgba(0,0,0,0.6)` }}>
                  <Image
                    src={`${IMG}/estacion.webp`}
                    alt="Estación de manicura de Beauty Love: lámpara de trabajo, repisa de esmaltes y cojín fucsia"
                    fill
                    sizes="(min-width: 1024px) 40vw, 72vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute right-0 bottom-0 w-[46%] aspect-[4/5] overflow-hidden rounded-md rotate-2"
                  style={{ boxShadow: `0 0 0 1px ${C.pink}, 0 24px 48px -16px rgba(0,0,0,0.65)` }}
                >
                  <Image
                    src={`${IMG}/texia.webp`}
                    alt="Quien atiende el salón, en su uniforme de trabajo negro y fucsia"
                    fill
                    sizes="(min-width: 1024px) 24vw, 46vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.pinkSoft }}>
                {BIZ.address} · {BIZ.city}
              </p>
              <h2 className={`${display.className} italic font-semibold text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] mb-6`} style={{ color: C.paper }}>
                Un salón chico,
                <br />
                atendido <span style={{ color: C.pink }}>por su dueña</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                Sin recepción ni filas: escribes por WhatsApp, se confirma tu
                hora y la estación queda lista cuando llegas. El trato es
                directo, de vecina a vecina.
              </p>
              <dl className="border-t" style={{ borderColor: C.line }}>
                {FICHA.map((f) => (
                  <div key={f.k} className="grid grid-cols-[110px_1fr] gap-4 py-4 border-b" style={{ borderColor: C.line }}>
                    <dt className="text-[10px] uppercase tracking-[0.26em] font-semibold pt-1" style={{ color: C.pinkSoft }}>
                      {f.k}
                    </dt>
                    <dd className="text-sm font-medium" style={{ color: C.paper }}>
                      {f.href ? (
                        <a href={f.href} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-1 hover:opacity-80 tap-44 ${FOCUS} focus-visible:outline-[#F23D8C]`}>
                          {f.v}
                        </a>
                      ) : (
                        f.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.pink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-white/85">
              Agenda tu hora
            </p>
            <h2 className={`${display.className} italic font-semibold leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl text-white mb-6`}>
              Tus manos,
              <br />
              en la lista
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-9 max-w-md text-white/90">
              Escribe el día que te acomoda y el servicio que buscas — te
              responden con las horas disponibles en Notre Damme.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 min-h-[48px] px-7 rounded-full text-sm font-bold uppercase tracking-[0.1em] transition hover:brightness-95 active:scale-95 tap-44 ${FOCUS} focus-visible:outline-white`}
              style={{ backgroundColor: C.night, color: C.blush }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
              WhatsApp {BIZ.phoneDisplay}
            </a>
            <dl className="mt-10 space-y-4 text-sm">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/80">Dirección</dt>
                <dd className="mt-1">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-1 text-white tap-44 ${FOCUS} focus-visible:outline-white`}>
                    {BIZ.address}, {BIZ.city}, Maule
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/80">Instagram</dt>
                <dd className="mt-1">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-1 text-white tap-44 ${FOCUS} focus-visible:outline-white`}>
                    @{BIZ.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-md overflow-hidden" style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.4), 0 30px 60px -20px rgba(0,0,0,0.4)` }}>
              <LazyMap
                title={`Mapa de ${BIZ.name} en ${BIZ.city}`}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[340px] md:h-[440px] border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo + footer ── */}
      <div className="bl-band">
        <DemoBand name={BIZ.name} />
      </div>
      <footer className="pt-6 pb-20 px-5 text-center text-xs" style={{ backgroundColor: C.panel, color: C.muted }}>
        <p className={`${display.className} italic text-xl font-semibold`} style={{ color: C.paper }}>
          {BIZ.name}
        </p>
        <p className="mt-2">
          {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.region}
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
