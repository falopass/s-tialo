import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS, MENU, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/* Paleta sacada del local real: la pared de pasto con el neón lima "G14". */
const C = {
  bg: '#0B0E08',
  panel: '#131809',
  deep: '#070905',
  ink: '#EDF2E2',
  soft: '#B7C3A4',
  muted: '#8A9678',
  lime: '#C6F24E',
  line: 'rgba(237,242,226,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'alcatorce',
  title: 'Alcatorce Restaurant — Restaurante panorámico en el piso 14, Concepción',
  description:
    "Cocina internacional en el piso 14 de O'Higgins 241, Concepción. La mejor panorámica del centro, de lunes a viernes.",
  image: '/demos/alcatorce/hero.webp',
})

const NAV_LINKS = [
  { label: 'La vista', href: '#vista' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/* Los pisos del edificio: el 14 encendido, como el botón del ascensor. */
const FLOORS = ['PB', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14']

function MenuGroup({ title, items }: { title: string; items: readonly { name: string; price: string }[] }) {
  return (
    <div>
      <h3
        className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.3em] pb-3 border-b`}
        style={{ color: C.lime, borderColor: C.line }}
      >
        {title}
      </h3>
      <ul>
        {items.map((m) => (
          <li
            key={m.name}
            className="flex items-baseline justify-between gap-4 py-3.5 border-b"
            style={{ borderColor: 'rgba(237,242,226,0.08)' }}
          >
            <span className="text-sm md:text-base font-medium leading-snug" style={{ color: C.ink }}>
              {m.name}
            </span>
            <span className={`${mono.className} shrink-0 text-sm md:text-base font-bold`} style={{ color: C.lime }}>
              {m.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AlcatorcePage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <style>{`
        .a14-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .a14-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .a14-btn:active { transform: translateY(0) scale(0.97); }
        .a14-btn:focus-visible { outline: 3px solid ${C.lime}; outline-offset: 3px; }
        @media (prefers-reduced-motion: no-preference) {
          .a14-hero { animation: a14zoom 14s cubic-bezier(0.16,1,0.3,1) both; }
          @keyframes a14zoom { from { transform: scale(1.08); } to { transform: scale(1); } }
        }
        .a14-num { -webkit-text-stroke: 1.5px rgba(198,242,78,0.35); color: rgba(198,242,78,0.5); }
        .a14-floor { transition: background-color 0.3s ease, color 0.3s ease; }
        .a14-floor:hover { background-color: rgba(198,242,78,0.10); }
      `}</style>

      <BlitzNav
        name={BIZ.short.toUpperCase()}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(11,14,8,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.lime,
          btnInk: C.bg,
        }}
      />

      {/* ── Hero: la panorámica real del piso 14 ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Panorámica de día sobre el centro de Concepción desde la terraza de Alcatorce, piso 14"
          fill
          priority
          sizes="100vw"
          className="a14-hero object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,9,5,0.62) 0%, rgba(7,9,5,0.18) 42%, rgba(7,9,5,0.9) 100%)',
          }}
        />
        {/* el 14 gigante, como luz del edificio */}
        <span
          aria-hidden="true"
          className={`${display.className} a14-num absolute right-[-4vw] top-[16vh] font-extrabold leading-none select-none text-[38vw] md:text-[26vw]`}
        >
          14
        </span>
        {/* sello de rating */}
        <div className="absolute top-[84px] md:top-[96px] right-5 md:right-8 z-10">
          <Reveal delay={300}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="a14-btn flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 tap-44"
              style={{ backgroundColor: 'rgba(7,9,5,0.55)', color: '#FFFFFF', border: `1px solid ${C.line}`, backdropFilter: 'blur(8px)' }}
            >
              <Stars value={BIZ.rating} color={C.lime} className="w-3.5 h-3.5" />
              {BIZ.ratingDisplay} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-44">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs font-bold uppercase tracking-[0.32em] mb-5`} style={{ color: C.lime }}>
              {BIZ.brand} · {BIZ.tag}
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(3.2rem,11vw,9rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Alcatorce
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Cocina internacional en el piso 14 de O'Higgins 241: toda
              Concepción a tus pies, de lunes a viernes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} a14-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.lime, color: C.bg }}
              >
                Llamar y reservar
              </a>
              <a
                href="#carta"
                className={`${display.className} a14-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de prueba social ── */}
      <div className="border-y" style={{ backgroundColor: C.lime, borderColor: C.deep }}>
        <div
          className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]`}
          style={{ color: C.bg }}
        >
          <span>{BIZ.ratingDisplay} en Google</span>
          <span>{BIZ.reviews} reseñas</span>
          <span>Piso 14</span>
          <span className="hidden md:inline">Lun a Vie hasta la 01:00</span>
        </div>
      </div>

      {/* ── La vista: dial de ascensor + terraza ── */}
      <section id="vista" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-5 md:gap-8 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.4rem)] mb-6`}
              >
                Catorce pisos
                <br />
                sobre <span style={{ color: C.lime }}>O'Higgins</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.soft }}>
                <p>
                  {BIZ.name} ocupa el último piso de un edificio del centro
                  de Concepción. Abajo queda la ciudad entera: la plaza,
                  el río y los cerros. Por eso lleva su nombre, y por eso
                  hoy el letrero dice G14.
                </p>
                <p>
                  Se almuerza con luz de día y se cena con la ciudad
                  encendida. Solo entre semana: sábado y domingo el
                  restaurante no abre.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="flex flex-wrap gap-6 mt-9">
                <div className="border-l-2 pl-4" style={{ borderColor: C.lime }}>
                  <p className={`${mono.className} font-bold text-3xl leading-none`}>{BIZ.ratingDisplay}</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1.5`} style={{ color: C.muted }}>
                    en {BIZ.reviews} reseñas
                  </p>
                </div>
                <div className="border-l-2 pl-4" style={{ borderColor: C.line }}>
                  <p className={`${mono.className} font-bold text-3xl leading-none`}>P14</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1.5`} style={{ color: C.muted }}>
                    último piso habitable
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          {/* el panel del ascensor */}
          <Reveal className="col-span-5 lg:col-span-2" delay={140}>
            <div
              className="border-y-2 py-2"
              style={{ borderColor: C.line }}
              aria-label="Panel de pisos del edificio, el piso 14 encendido"
            >
              {[...FLOORS].reverse().map((f) => {
                const top = f === '14'
                return (
                  <div
                    key={f}
                    className="a14-floor flex items-center justify-between px-3"
                    style={top ? { backgroundColor: C.lime } : undefined}
                    aria-current={top ? 'true' : undefined}
                  >
                    <span
                      className={`${mono.className} font-bold leading-[1.9] ${top ? 'text-lg' : 'text-[11px]'}`}
                      style={{ color: top ? C.bg : C.muted }}
                    >
                      {f}
                    </span>
                    <span
                      className="rounded-full"
                      style={{
                        width: top ? 10 : 5,
                        height: top ? 10 : 5,
                        backgroundColor: top ? C.bg : 'rgba(237,242,226,0.18)',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                )
              })}
            </div>
          </Reveal>
          <Reveal className="col-span-7 lg:col-span-5" delay={220}>
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src={`${IMG}/terraza.webp`}
                alt="Terraza de Alcatorce con sillones y sombrillas, con vista panorámica al atardecer"
                fill
                sizes="(min-width: 1024px) 40vw, 58vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: C.muted }}>
              La terraza, piso 14
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La carta: precios reales del local ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4`} style={{ color: C.lime }}>
              La carta real
            </p>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.2rem,6vw,4.4rem)] mb-10 md:mb-14`}
            >
              Lomos, milanesas
              <br />y postres de autor
            </h2>
          </Reveal>

          {/* fotos de la carta, ritmo desparejo */}
          <div className="grid grid-cols-12 gap-5 md:gap-6 mb-12 md:mb-16 items-start">
            <Reveal className="col-span-7 md:col-span-7">
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={`${IMG}/salmon.webp`}
                  alt="Salmón sellado sobre arroz, plato de la carta de Alcatorce"
                  fill
                  sizes="(min-width: 768px) 58vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-5 md:col-span-4 md:mt-12" delay={120}>
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={`${IMG}/pulpo.webp`}
                  alt="Pulpo grillado con ensalada, emplatado oscuro de Alcatorce"
                  fill
                  sizes="(min-width: 768px) 34vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-6 col-start-4 md:col-span-4 md:col-start-6 md:-mt-10" delay={200}>
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image
                  src={`${IMG}/postre.webp`}
                  alt="Postre de chocolate con salsa, de la carta dulce de Alcatorce"
                  fill
                  sizes="(min-width: 768px) 34vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-12 gap-5 md:gap-x-10 md:gap-y-12">
            <div className="col-span-12 md:col-span-7 space-y-12">
              <Reveal><MenuGroup title="Carnes premium" items={MENU.carnes} /></Reveal>
              <Reveal delay={100}><MenuGroup title="Milanesas de lomo liso" items={MENU.milanesas} /></Reveal>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Reveal delay={60}>
                <MenuGroup title="Postres" items={MENU.postres} />
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-10 border-2 p-6" style={{ borderColor: C.lime }}>
                  <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.24em] mb-3`} style={{ color: C.lime }}>
                    Bueno saberlo
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: C.soft }}>
                    Precios según la carta del local; pueden variar. Los
                    agregados van aparte (papas, puré rústico, risotto de
                    zapallo camote, entre otros).
                  </p>
                  <a
                    href={CALL_LINK}
                    className={`${display.className} a14-btn inline-block font-bold uppercase tracking-wide text-sm px-6 py-3 tap-44`}
                    style={{ backgroundColor: C.lime, color: C.bg }}
                  >
                    Llamar y reservar
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Banda del local: el neón G14 ── */}
      <section aria-label="El letrero de neón del restaurante">
        <div className="grid grid-cols-12 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 items-center gap-5 md:gap-8">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative overflow-hidden aspect-[4/5] max-h-[520px]">
              <Image
                src={`${IMG}/neon.webp`}
                alt="Letrero de neón lima G14 Fusión Gastronómica sobre la pared de pasto del restaurante"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6 md:col-start-7" delay={140}>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2rem,5vw,3.8rem)] mb-6`}
            >
              El letrero dice <span style={{ color: C.lime }}>G14</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.soft }}>
              Alcatorce cambió de nombre, no de idea: el piso catorce de
              siempre, la cocina de siempre y el neón verde que ya es
              marca de la casa sobre la pared de pasto.
            </p>
          </Reveal>
        </div>
        <div className="relative h-[46vh] md:h-[62vh] overflow-hidden">
          <Image
            src={`${IMG}/interior.webp`}
            alt="Salón de Alcatorce lleno de comensales de noche, con plantas colgantes y luces cálidas"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-5 md:gap-10 lg:gap-14">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <h2
                  className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.2rem,5vw,3.6rem)] mb-8`}
                >
                  Lo que dicen en Google
                </h2>
                <div className="flex items-end gap-4 mb-3">
                  <span className={`${mono.className} font-bold leading-none text-6xl md:text-7xl`} style={{ color: C.lime }}>
                    {BIZ.ratingDisplay}
                  </span>
                  <Stars value={BIZ.rating} color={C.lime} className="w-5 h-5 mb-2" />
                </div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en su ficha
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-block mt-6 text-[11px] font-bold uppercase tracking-[0.18em] underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.ink, textDecorationColor: 'rgba(198,242,78,0.5)' }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 110}>
                  <figure
                    className={`py-7 md:py-8 ${i > 0 ? 'border-t' : ''} ${i === 0 ? 'pt-0' : ''}`}
                    style={{ borderColor: C.line }}
                  >
                    <blockquote
                      className={`${display.className} font-semibold leading-snug mb-4 ${i === 0 ? 'text-xl md:text-3xl' : 'text-base md:text-xl'}`}
                      style={{ color: i === 0 ? C.ink : C.soft }}
                    >
                      “{r.text}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                      {r.name} · reseña en Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <h2
                  className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.2rem,5.5vw,4rem)] mb-6`}
                >
                  O'Higgins 241,
                  <br />
                  <span style={{ color: C.lime }}>piso 14</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.soft }}>
                  Reserva llamando al fijo. El ascensor sube hasta el 14:
                  al salir, la terraza está a la izquierda.
                </p>
                <a
                  href={CALL_LINK}
                  className={`${mono.className} block font-bold text-2xl md:text-4xl tracking-tight mb-8 tap-44`}
                  style={{ color: C.lime }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <ul className="mb-9 max-w-md">
                  {HOURS.map((h) => (
                    <li
                      key={h.d}
                      className="flex items-baseline justify-between gap-4 py-3 border-b"
                      style={{ borderColor: C.line }}
                    >
                      <span className="text-sm font-medium" style={{ color: C.ink }}>{h.d}</span>
                      <span
                        className={`${mono.className} text-sm font-bold`}
                        style={{ color: h.h === 'Cerrado' ? C.muted : C.ink }}
                      >
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CALL_LINK}
                  className={`${display.className} a14-btn inline-block font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.lime, color: C.bg }}
                >
                  Llamar y reservar
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full max-w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
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
      <footer style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex items-center gap-4">
          <span className="relative block w-11 h-11 overflow-hidden shrink-0">
            <Image
              src={`${IMG}/logo-g14.webp`}
              alt="Letrero de neón G14 de Alcatorce"
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <div>
            <p className={`${display.className} font-extrabold uppercase text-lg md:text-xl leading-tight`}>{BIZ.name}</p>
            <address className={`${mono.className} not-italic text-[11px] md:text-xs leading-relaxed`} style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city}
              {' · '}
              <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-[11px] leading-relaxed`} style={{ color: C.muted }}>
            Sitio de muestra preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos y reseñas reales de su ficha de Google;
            la carta puede variar.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.lime }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.lime} fg={C.bg} />
    </div>
  )
}
