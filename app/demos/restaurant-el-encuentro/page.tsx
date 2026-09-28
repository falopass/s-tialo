import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, HORARIO, LETRERO, COMBO, RESENA, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  crema: '#F7EFE0',
  tinta: '#27190F',
  toldo: '#B3231A',
  morado: '#4E2E63',
  muted: 'rgba(39,25,15,0.72)',
  line: 'rgba(39,25,15,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-el-encuentro',
  title: 'Restaurant El Encuentro — la picá de Pencahue',
  description: 'Restaurant El Encuentro (ex La Tortolita) en Pencahue, Maule. Cocina chilena, música en vivo y celebraciones. Domingos de 13:00 a 16:00.',
  image: `${IMG}/salon.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'Celebraciones', href: '#celebra' },
  { label: 'Cómo llegar', href: '#llegar' },
]

function Raya({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] flex items-center gap-3`}
      style={{ color: light ? 'rgba(247,239,224,0.8)' : C.toldo }}
    >
      <span aria-hidden="true" className="inline-block w-8 h-[3px]" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B3231A]'

export default function RestaurantElEncuentroPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full object-cover" aria-hidden="true" />
            {BIZ.short}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold uppercase tracking-wide text-xl`}
        theme={{
          over: 'dark',
          bar: 'rgba(247,239,224,0.96)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.toldo,
          btnInk: '#F7EFE0',
        }}
      />

      {/* ── Portada: el salón a toda sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <Image
          src={`${IMG}/salon.webp`}
          alt="Salón de Restaurant El Encuentro con vigas de madera, manteles y guirnaldas tricolores"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(39,25,15,0.45) 0%, rgba(39,25,15,0.55) 50%, rgba(39,25,15,0.94) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-10 md:pb-14 w-full">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: '#F7EFE0' }}>
              {BIZ.city}, Región del Maule · {BIZ.exName}
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(3.4rem,13vw,9.5rem)] mb-6`}
              style={{ color: C.crema }}
            >
              La picá<br />de <span style={{ color: '#F0C24B' }}>Pencahue</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(247,239,224,0.92)' }}>
              Cocina chilena de la que se sirve en porción de verdad,
              manteles morados, música en vivo y domingos de almuerzo largo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                style={{ backgroundColor: C.toldo, color: C.crema }}
              >
                Reservar por WhatsApp <span aria-hidden="true">→</span>
              </a>
              <a
                href="#cocina"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7EFE0] tap-44`}
                style={{ borderColor: 'rgba(247,239,224,0.55)', color: C.crema }}
              >
                Qué sale de la cocina <span aria-hidden="true">↓</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl border-t pt-5" style={{ borderColor: 'rgba(247,239,224,0.3)' }}>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: 'rgba(247,239,224,0.75)' }}>Google</dt>
                <dd className="flex items-center gap-2">
                  <span className={`${display.className} text-2xl font-bold`} style={{ color: C.crema }}>{BIZ.ratingLabel}</span>
                  <Stars value={BIZ.rating} color="#F0C24B" className="w-3.5 h-3.5" />
                </dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: 'rgba(247,239,224,0.75)' }}>Reseñas</dt>
                <dd className={`${display.className} text-2xl font-bold`} style={{ color: C.crema }}>{BIZ.reviews}</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: 'rgba(247,239,224,0.75)' }}>Atiende</dt>
                <dd className="text-sm font-bold leading-tight" style={{ color: C.crema }}>{HORARIO.publicado}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── La cocina: platos reales ── */}
      <section id="cocina" className="scroll-mt-20 border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Raya>La cocina</Raya>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.9] mt-5 mb-4 max-w-4xl`}>
              Plato hondo, <span style={{ color: C.toldo }}>paila y pebre.</span>
            </h2>
            <p className="text-base leading-relaxed mb-12 max-w-xl" style={{ color: C.muted }}>
              Fotos reales de la ficha del restaurante: esto es lo que llega a
              la mesa un domingo en Pencahue.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/lomo.webp`}
                    alt="Lomo a lo pobre con papas fritas servido en Restaurant El Encuentro"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em] flex justify-between gap-3`} style={{ color: C.toldo }}>
                  <span>Lomo a lo pobre</span>
                  <span>Foto real</span>
                </figcaption>
              </figure>
            </Reveal>
            <div className="md:col-span-5 grid gap-8">
              <Reveal delay={80}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/cazuela.webp`}
                      alt="Cazuela con choclo y verduras y empanadas de acompañamiento"
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.toldo }}>
                    Cazuela y empanadas — foto real
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={140}>
                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={`${IMG}/pebre.webp`}
                      alt="Pocillos de pebre listos para servir en las mesas"
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.toldo }}>
                    Pebre para la mesa — foto real
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          {/* El letrero de la fachada */}
          <Reveal delay={100}>
            <div className="mt-14 border-y py-8 md:py-10" style={{ borderColor: C.line }}>
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-6">
                <h3 className={`${display.className} font-bold uppercase text-2xl md:text-3xl`}>Del letrero</h3>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  Lo que anuncia la fachada en su ficha de Google
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-7 gap-y-3">
                {LETRERO.map((l) => (
                  <li key={l} className={`${display.className} font-bold uppercase text-xl md:text-2xl`} style={{ color: C.tinta }}>
                    {l}
                  </li>
                ))}
              </ul>
              <div
                className="mt-7 inline-flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-3 border-2"
                style={{ borderColor: C.toldo, backgroundColor: 'rgba(179,35,26,0.06)' }}
              >
                <span className={`${display.className} font-extrabold uppercase text-2xl md:text-3xl`} style={{ color: C.toldo }}>
                  {COMBO.name} {COMBO.price}
                </span>
                <span className="text-sm font-semibold" style={{ color: C.muted }}>{COMBO.desc}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Aquí se celebra: manteles morados, música en vivo ── */}
      <section id="celebra" className="scroll-mt-20" style={{ backgroundColor: C.morado, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Raya light>Celebraciones</Raya>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.9] mt-5 mb-4 max-w-4xl`}>
              Los 50 años<br />se celebran aquí.
            </h2>
            <p className="text-base leading-relaxed mb-12 max-w-xl" style={{ color: 'rgba(247,239,224,0.88)' }}>
              El salón se arregla para cumpleaños, aniversarios y almuerzos de
              familia — con música en vivo cuando la ocasión lo pide.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-2 md:col-span-5">
              <figure className="h-full">
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                  <Image
                    src={`${IMG}/musicos.webp`}
                    alt="Músicos tocando en vivo junto a las mesas del restaurante"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,239,224,0.7)' }}>
                  Música en vivo — foto real
                </figcaption>
              </figure>
            </Reveal>
            <div className="col-span-2 md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
              <Reveal delay={80} className="col-span-2">
                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={`${IMG}/evento.webp`}
                      alt="Salón decorado con manteles morados y globos para un aniversario de 50 años"
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,239,224,0.7)' }}>
                    Aniversario en el salón — foto real
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={120} className="col-span-2 sm:col-span-1">
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/clientes.webp`}
                      alt="Clientes celebrando en la mesa con pebre y bebidas"
                      fill
                      sizes="(min-width: 768px) 22vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,239,224,0.7)' }}>
                    Mesa servida — foto real
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={160} className="col-span-2 sm:col-span-1">
                <blockquote className="h-full flex flex-col justify-center border border-dashed p-5" style={{ borderColor: 'rgba(247,239,224,0.45)' }}>
                  <Stars value={5} color="#F0C24B" className="w-4 h-4 mb-3" />
                  <p className={`${display.className} font-bold text-xl md:text-2xl leading-tight mb-3`}>«{RESENA.text}»</p>
                  <footer className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,239,224,0.7)' }}>
                    {RESENA.author} — reseña en {RESENA.via}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
          <Reveal delay={120}>
            <a
              href={WA_LINK_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-12 inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7EFE0] tap-44`}
              style={{ backgroundColor: C.crema, color: C.morado }}
            >
              Consultar por tu fecha <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar: la ficha real ── */}
      <section id="llegar" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="md:col-span-5">
            <Raya>Cómo llegar</Raya>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2rem,5.5vw,3.8rem)] leading-[0.9] mt-5 mb-6`}>
              Domingo de almuerzo en Pencahue.
            </h2>
            <dl className="border-t mb-8" style={{ borderColor: C.line }}>
              {[
                ['Horario', HORARIO.publicado],
                ['Comuna', `${BIZ.city}, ${BIZ.region}`],
                ['WhatsApp', BIZ.phoneDisplay],
                ['Facebook', `${BIZ.fbFollowers} seguidores`],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] py-3 border-b" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.22em] pt-1`} style={{ color: C.muted }}>{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[15px] leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              {HORARIO.nota}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
                style={{ backgroundColor: C.toldo, color: C.crema }}
              >
                Consultar por WhatsApp <span aria-hidden="true">→</span>
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] border transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Facebook <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.22em] underline underline-offset-4 ${focusRing} tap-44`}
              style={{ color: C.toldo }}
            >
              Abrir en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.tinta, color: 'rgba(247,239,224,0.8)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 gap-5 items-end">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-10 w-10 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-bold uppercase text-base`} style={{ color: C.crema }}>{BIZ.short}</p>
              <p className="text-xs">{BIZ.exName} · {BIZ.city}, Maule</p>
            </div>
          </div>
          <div className="text-right text-xs leading-relaxed">
            <p>{BIZ.phoneDisplay}</p>
            <p style={{ color: 'rgba(247,239,224,0.55)' }}>Demo de Sitiazo — datos verificados en Google Maps y Facebook</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
