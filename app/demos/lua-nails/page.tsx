import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ, C, IMG, MAPS_EMBED, MAPS_URL, REVIEWS, SERVICIOS, TAMBIEN, TRABAJOS, WA_LINK, WA_LINK_DISENO,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'lua-nails',
  title: 'Lua Nails Home — Nail art de autor en Talca',
  description:
    'Manicure, polygel, soft gel, nail art y pedicura en Treinta y Medio Ote. 1729, Talca. Diseños pintados a mano — trae tu idea y la llevan a tus uñas. Agenda por WhatsApp.',
  image: '/demos/lua-nails/vangogh.webp',
})

const NAV_LINKS = [
  { label: 'Diseños', href: '#disenos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Agenda', href: '#agenda' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 font-medium`}
      style={{ color: light ? '#9FD8CF' : C.fucsia }}
    >
      {children}
    </p>
  )
}

function WaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

export default function LuaNailsPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={
          <span>
            LUA <span className="italic" style={{ color: 'inherit' }}>Nail’s Home</span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,239,231,0.94)',
          ink: C.teal,
          line: C.linea,
          btnBg: C.fucsia,
          btnInk: '#FFFDF9',
        }}
      />

      {/* ── Hero: lookbook ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        {/* trazo acuarela del logo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 40% at 15% 10%, ${C.tealMid} 0%, transparent 60%), radial-gradient(ellipse 45% 35% at 90% 85%, ${C.fucsia} 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Nail art · Manicure · Talca</Eyebrow>
            <h1 className={`${display.className} leading-[0.98] text-[clamp(3.2rem,11vw,6.8rem)]`} style={{ color: C.teal }}>
              Tus uñas,
              <br />
              <em style={{ color: C.fucsia }}>pintadas a mano.</em>
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg font-light leading-relaxed" style={{ color: C.gris }}>
              En Lua Nails Home los diseños se hacen a mano alzada — flores,
              Van Gogh, lo que imagines. Trae tu idea y la llevan a tus uñas.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {SERVICIOS.map((s) => (
                <li
                  key={s.name}
                  className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.14em] px-3.5 py-2 rounded-full border`}
                  style={{ borderColor: C.teal, color: C.teal }}
                >
                  {s.name}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-7 rounded-full text-sm md:text-base font-semibold transition-transform active:scale-[0.98] tap-44"
                style={{ backgroundColor: C.fucsia, color: C.blanco }}
              >
                <WaIcon className="w-4 h-4" />
                Agendar por WhatsApp
              </a>
              <a
                href="#disenos"
                className="inline-flex items-center min-h-[48px] px-7 rounded-full text-sm md:text-base font-semibold border transition-colors tap-44"
                style={{ borderColor: C.teal, color: C.teal }}
              >
                Ver diseños
              </a>
            </div>
            <dl className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
              {[
                [`${BIZ.rating}★`, `${BIZ.reviews} reseñas en Google`],
                ['Hora', 'agendada por WhatsApp'],
                ['Ambiente', 'relajado, local de barrio'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className={`${display.className} text-lg md:text-xl`} style={{ color: C.teal }}>{k}</dt>
                  <dd className="text-xs md:text-sm leading-snug" style={{ color: C.gris }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Foto estrella: la Noche estrellada de Van Gogh, real del salón */}
          <div className="relative">
            <Reveal delay={120}>
              <figure className="relative rounded-[28px] overflow-hidden shadow-2xl" style={{ transform: 'rotate(1.5deg)' }}>
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`${IMG}/vangogh.webp`}
                    alt={TRABAJOS[0].alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption
                  className={`${mono.className} absolute left-4 bottom-4 px-3.5 py-2 rounded-full text-[11px] md:text-xs uppercase tracking-[0.14em]`}
                  style={{ backgroundColor: 'rgba(11,41,38,0.85)', color: '#9FD8CF' }}
                >
                  {TRABAJOS[0].name}
                </figcaption>
              </figure>
            </Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Logo de Lua Nail’s Home"
              className="absolute -top-7 -right-3 md:-right-6 w-20 h-20 md:w-24 md:h-24 rounded-full shadow-xl ring-4"
              style={{ ['--tw-ring-color' as string]: C.crema }}
            />
          </div>
        </div>
      </section>

      {/* ── Galería: últimos diseños ── */}
      <section id="disenos" className="scroll-mt-20" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Últimos diseños del salón</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] text-white`}>
                Trabajo real,
                <br />
                <em style={{ color: '#E8A5CE' }}>uña por uña</em>
              </h2>
              <p className="text-sm md:text-base font-light max-w-sm leading-relaxed" style={{ color: 'rgba(255,253,249,0.75)' }}>
                Lo que publican en su Instagram y en Google: cada set es
                distinto porque cada diseño nace de una idea tuya.
              </p>
            </div>
          </Reveal>
          <div className="columns-2 md:columns-3 gap-3 md:gap-4 [&>figure]:mb-3 md:[&>figure]:mb-4">
            {TRABAJOS.slice(1).map((t, i) => (
              <figure key={t.img} className="break-inside-avoid">
                <Reveal delay={(i % 3) * 80}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={`${IMG}/${t.img}.webp`}
                      alt={t.alt}
                      width={1100}
                      height={1400}
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.14em]`} style={{ color: '#9FD8CF' }}>
                    {t.name}
                  </figcaption>
                </Reveal>
              </figure>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-8">
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 min-h-[44px] text-xs md:text-sm uppercase tracking-[0.16em] underline underline-offset-4 tap-44`}
                style={{ color: '#E8A5CE' }}
              >
                Más diseños en {BIZ.instagram} →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios: carta real ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow>Lo que hacen</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-5`} style={{ color: C.teal }}>
              Especialistas en
              <br />
              <em style={{ color: C.fucsia }}>uñas naturales</em>
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-sm" style={{ color: C.gris }}>
              Así se presenta el salón en su Instagram: manicuristas
              especializadas en el cuidado de la uña natural. También
              atienden {TAMBIEN.toLowerCase()}.
            </p>
            <a
              href={WA_LINK_DISENO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 min-h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-[0.98] tap-44"
              style={{ backgroundColor: C.teal, color: C.blanco }}
            >
              <WaIcon className="w-4 h-4" />
              Cotizar un diseño
            </a>
          </Reveal>
          <Reveal delay={120}>
            <ol className="border-t" style={{ borderColor: C.linea }}>
              {SERVICIOS.map((s, i) => (
                <li
                  key={s.name}
                  className="flex items-baseline gap-5 md:gap-8 py-5 border-b"
                  style={{ borderColor: C.linea }}
                >
                  <span className={`${mono.className} text-xs font-semibold tabular-nums`} style={{ color: C.fucsia }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.teal }}>
                      {s.name}
                    </h3>
                    <p className="mt-1 text-sm md:text-[15px] font-light leading-relaxed" style={{ color: C.gris }}>
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.gris }}>
              Precios y duración: se confirman por WhatsApp
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.teal }}>
                Cinco estrellas
                <br />
                <em style={{ color: C.fucsia }}>de {BIZ.reviews} reseñas</em>
              </h2>
              <div className="flex items-center gap-3">
                <Stars value={5} color={C.fucsia} className="w-5 h-5" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-xs md:text-sm font-medium underline underline-offset-4 tap-44`}
                  style={{ color: C.teal }}
                >
                  Ver la ficha en Google
                </a>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure
                  className="h-full p-6 md:p-7 rounded-2xl border"
                  style={{ backgroundColor: C.crema, borderColor: C.linea }}
                >
                  <Stars value={5} color={C.fucsia} className="w-4 h-4" />
                  <blockquote className={`${display.className} mt-4 text-lg md:text-xl italic leading-snug`} style={{ color: C.teal }}>
                    «{r.text}»
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="text-sm font-semibold" style={{ color: C.tinta }}>{r.name}</p>
                    <p className={`${mono.className} mt-0.5 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.gris }}>
                      Google Maps · {r.when}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda + el estudio ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.teal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <figure className="rounded-2xl overflow-hidden shadow-2xl" style={{ transform: 'rotate(-1.2deg)' }}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Lua Nails Home: letrero LUA con dalia fucsia y arco de globos dorados"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} absolute left-4 bottom-4 px-3.5 py-2 rounded-full text-[11px] uppercase tracking-[0.14em]`}
                style={{ backgroundColor: 'rgba(11,41,38,0.85)', color: '#9FD8CF' }}
              >
                El local en 30 Oriente, Talca
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow light>Agenda tu hora</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6 text-white`}>
              Se atiende con hora,
              <br />
              <em style={{ color: '#E8A5CE' }}>sin apuro</em>
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,253,249,0.82)' }}>
              Escríbenos por WhatsApp, cuéntanos qué diseño traes en la
              mente y agendamos tu hora. El salón es de barrio: ambiente
              relajado y atención personalizada.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[52px] px-8 rounded-full text-base font-semibold transition-transform active:scale-[0.98] tap-44"
              style={{ backgroundColor: C.fucsia, color: C.blanco }}
            >
              <WaIcon className="w-5 h-5" />
              Escribir al {BIZ.phoneDisplay}
            </a>
            <dl className="mt-9 space-y-2 text-sm" style={{ color: 'rgba(255,253,249,0.82)' }}>
              <div className="flex gap-2">
                <dt className="font-semibold text-white">Dirección:</dt>
                <dd>{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-white">Instagram:</dt>
                <dd>
                  <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                    {BIZ.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.teal }}>
              Treinta y Medio Ote. 1729,
              <br />
              <em style={{ color: C.fucsia }}>Talca</em>
            </h2>
            <address className="not-italic text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: C.gris }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[48px] px-7 rounded-full text-sm md:text-base font-semibold transition-transform active:scale-[0.98] tap-44"
                style={{ backgroundColor: C.teal, color: C.blanco }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.linea, backgroundColor: C.blanco }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tealDeep, color: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl md:text-2xl flex items-center gap-3`}>
              {BIZ.short}
            </p>
            <address className="not-italic text-sm font-light" style={{ color: 'rgba(255,253,249,0.7)' }}>
              {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-light" style={{ color: 'rgba(255,253,249,0.7)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,253,249,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs font-light leading-relaxed" style={{ color: 'rgba(255,253,249,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 tap-44" style={{ color: C.blanco }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, WhatsApp, reseñas, servicios
            y fotos son datos reales de su ficha pública de Google e Instagram.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 tap-44" style={{ color: C.blanco }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
