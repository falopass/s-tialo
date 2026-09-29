import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2' }],
  variable: '--font-paila-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/** Letrero de carretera: papel de horno, greda y el rojo del letrero pintado. */
const C = {
  paper: '#F4E9D2',
  paperSoft: '#EFE0C4',
  ink: '#241B0F',
  greda: '#B84A24',
  letrero: '#A52A17',
  bosque: '#4F6134',
  muted: '#6F6150',
  line: 'rgba(36,27,15,0.16)',
  creamSoft: 'rgba(244,233,210,0.78)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'paila-con-huevos',
  title: 'La Paila de Huevos — Picada de la carretera en San Rafael',
  description:
    'Comida casera en San Rafael, Maule: almuerzo de $5.500 con pan amasado y ensalada, cazuela, churrasco con huevo frito y la paila de la casa. Autoservicio desde las 6 AM, al costado de la Ruta 5.',
  image: '/demos/paila-con-huevos/quincho.webp',
})

const NAV_LINKS = [
  { label: 'La bandeja', href: '#ritual' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'Cómo llegar', href: '#como-llegar' },
]

const MARQUEE = [
  'Pan amasado',
  'Cazuela',
  'Churrasco con huevo frito',
  'Picada de camioneros',
  'Desde las 6 AM',
  'San Rafael',
]

const RITUAL = [
  {
    num: '01',
    title: 'Pides y pagas primero',
    desc: 'Es autoservicio: eliges en el mesón, pagas por adelantado (aceptan Redbanc) y tomas asiento donde quieras.',
  },
  {
    num: '02',
    title: 'La bandeja sale en menos de 5 minutos',
    desc: 'Las reseñas repiten lo mismo: comida casera recién hecha que llega a la mesa antes de que te des cuenta.',
  },
  {
    num: '03',
    title: 'Pan amasado y ensalada incluidos',
    desc: 'Cada almuerzo viene con su pan amasado y su ensalada. Por eso a las 14:00 ya puede no quedar.',
  },
]

export default function PailaConHuevos() {
  return (
    <div
      className={`min-h-screen ${body.className} antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir por WhatsApp"
        theme={{
          over: 'dark',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.letrero,
          btnInk: '#FFF6E4',
        }}
      />

      {/* ── Hero: el quincho + letrero de carretera ── */}
      <section id="inicio" className="relative">
        <div className="relative w-full min-h-[540px] md:min-h-[640px]">
          <Image
            src={`${IMG}/quincho.webp`}
            alt="Quincho interior de La Paila de Huevos: techo de madera, mesas con sillas rojas y la cocina de fondo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,14,6,0.55) 0%, rgba(20,14,6,0.25) 45%, rgba(20,14,6,0.78) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 w-full">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
                <img
                  src={`${IMG}/sello.webp`}
                  alt="Letrero pintado de la Hostería La Paila de Huevo"
                  className="w-[220px] md:w-[320px] mb-5 border-4"
                  style={{ borderColor: C.paper, boxShadow: '6px 7px 0 rgba(20,14,6,0.55)', transform: 'rotate(-1.5deg)' }}
                />
                <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] mb-3`} style={{ color: C.creamSoft }}>
                  Picada de la Ruta 5 · San Rafael, Maule
                </p>
                <h1
                  className={`${display.className} uppercase leading-[0.92] text-[clamp(2.7rem,9vw,6rem)]`}
                  style={{ color: '#FFF6E4', textShadow: '0 3px 0 rgba(20,14,6,0.6)' }}
                >
                  El almuerzo que se acaba
                  <br />
                  <span style={{ color: '#F0A868' }}>antes de las dos</span>
                </h1>
                <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,246,228,0.9)' }}>
                  Comida casera servida en bandeja junto a la carretera: cazuela, cerdo y pollo al
                  horno y al jugo, con pan amasado y ensalada. Todo por $5.500.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.letrero, color: '#FFF6E4', boxShadow: '5px 6px 0 rgba(20,14,6,0.6)' }}
                  >
                    Hablar con el local →
                  </a>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: 'rgba(20,14,6,0.55)' }}>
                    <Stars value={4.4} color="#F0A868" className="w-4 h-4" />
                    <span className={`${mono.className} text-xs font-bold`} style={{ color: '#FFF6E4' }}>
                      {BIZ.rating} · {BIZ.reviews} reseñas
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cinta corrida ── */}
      <div className="overflow-hidden border-y-4 py-3" style={{ borderColor: C.ink, backgroundColor: C.letrero }} aria-hidden="true">
        <div className="paila-marquee flex whitespace-nowrap">
          {[0, 1].map((rep) => (
            <span key={rep} className="flex shrink-0">
              {MARQUEE.map((m) => (
                <span
                  key={`${rep}-${m}`}
                  className={`${display.className} uppercase text-lg md:text-2xl px-6`}
                  style={{ color: '#FFF0D6' }}
                >
                  {m} <span className="px-2" style={{ color: 'rgba(255,240,214,0.45)' }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── El ritual de la bandeja ── */}
      <section id="ritual" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-4`}>
            El ritual de <span style={{ color: C.greda }}>la bandeja</span>
          </h2>
          <p className="max-w-xl text-base md:text-lg leading-relaxed mb-10" style={{ color: C.muted }}>
            Nada de meseros ni carta impresa: así funciona la picada mejor evaluada de San Rafael,
            atendida por sus dueños hace más de 20 años.
          </p>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="col-span-12 md:col-span-7 space-y-5">
            {RITUAL.map((s, i) => (
              <Reveal key={s.num} delay={i * 90}>
                <article className="flex gap-5 items-start border-4 p-5 md:p-6" style={{ backgroundColor: i === 1 ? C.ink : C.paperSoft, borderColor: C.ink, boxShadow: '5px 6px 0 rgba(36,27,15,0.85)' }}>
                  <span className={`${display.className} text-4xl md:text-5xl leading-none shrink-0`} style={{ color: i === 1 ? '#F0A868' : C.greda }}>
                    {s.num}
                  </span>
                  <div>
                    <h3 className={`${display.className} uppercase text-xl md:text-2xl leading-tight mb-1.5`} style={{ color: i === 1 ? '#FFF6E4' : C.ink }}>
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: i === 1 ? 'rgba(255,246,228,0.82)' : C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140} className="col-span-12 md:col-span-5">
            <figure className="border-4 p-2.5 pb-9" style={{ backgroundColor: '#FFF6E4', borderColor: C.ink, boxShadow: '6px 7px 0 rgba(36,27,15,0.85)', transform: 'rotate(1.2deg)' }}>
              <div className="relative w-full aspect-[4/5] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón de La Paila de Huevos con el letrero de autoservicio sobre el mesón"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                el letrero lo dice todo: atención, autoservicio
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Lo que sale de la cocina ── */}
      <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-10`} style={{ color: '#FFF6E4' }}>
              Lo que sale <span style={{ color: '#F0A868' }}>del fogón</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6 items-start">
            <Reveal className="col-span-12 md:col-span-7">
              <figure className="relative aspect-[4/3] overflow-hidden border-4" style={{ borderColor: '#FFF6E4', boxShadow: '6px 7px 0 rgba(0,0,0,0.5)' }}>
                <Image
                  src={`${IMG}/paila.webp`}
                  alt="La paila de greda de la casa, caldo generoso servido al centro de la mesa"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <p className={`${mono.className} mt-3 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(255,246,228,0.7)' }}>
                la paila que le da el nombre al local
              </p>
            </Reveal>
            <div className="col-span-12 md:col-span-5 space-y-5">
              <Reveal delay={80}>
                <figure className="relative aspect-[4/3] overflow-hidden border-4" style={{ borderColor: '#FFF6E4', boxShadow: '6px 7px 0 rgba(0,0,0,0.5)' }}>
                  <Image
                    src={`${IMG}/almuerzo.webp`}
                    alt="Bandeja de almuerzo: carne al jugo con puré, ensalada y pan amasado"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
              {/* La boleta */}
              <Reveal delay={140}>
                <div
                  className="relative p-5 md:p-6"
                  style={{
                    backgroundColor: '#FFF9EC',
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 3px, rgba(36,27,15,0.03) 3px 4px)',
                    boxShadow: '6px 7px 0 rgba(0,0,0,0.5)',
                  }}
                >
                  <div className="text-center border-b-2 border-dashed pb-4 mb-4" style={{ borderColor: 'rgba(36,27,15,0.3)' }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
                      La boleta del día
                    </p>
                    <p className={`${display.className} uppercase text-3xl md:text-4xl mt-1`} style={{ color: C.letrero }}>
                      Almuerzo $5.500
                    </p>
                  </div>
                  <ul className={`${mono.className} text-xs md:text-sm space-y-2`} style={{ color: C.ink }}>
                    <li className="flex justify-between gap-3"><span>Cazuela o plato de fondo</span><span style={{ color: C.muted }}>····</span></li>
                    <li className="flex justify-between gap-3"><span>Cerdo y pollo al horno y al jugo</span><span style={{ color: C.muted }}>····</span></li>
                    <li className="flex justify-between gap-3"><span>Pan amasado + ensalada</span><span>incluido</span></li>
                    <li className="flex justify-between gap-3 pt-3 border-t-2 border-dashed" style={{ borderColor: 'rgba(36,27,15,0.3)' }}>
                      <span className="font-bold">Desayuno de campeones</span>
                    </li>
                    <li><span style={{ color: C.muted }}>churrasco con huevo frito, desde las 6 AM</span></li>
                  </ul>
                </div>
              </Reveal>
            </div>
            <Reveal className="col-span-6 md:col-span-4" delay={60}>
              <figure className="relative aspect-square overflow-hidden border-4" style={{ borderColor: '#FFF6E4', boxShadow: '5px 6px 0 rgba(0,0,0,0.5)' }}>
                <Image
                  src={`${IMG}/pollo.webp`}
                  alt="Pollo asado con arroz, ensalada chilena y pan amasado en bandeja"
                  fill
                  sizes="(min-width: 768px) 32vw, 50vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal className="col-span-6 md:col-span-4" delay={120}>
              <figure className="relative aspect-square overflow-hidden border-4" style={{ borderColor: '#FFF6E4', boxShadow: '5px 6px 0 rgba(0,0,0,0.5)' }}>
                <Image
                  src={`${IMG}/pebre.webp`}
                  alt="Pebre molido en piedra, el pebre de mesa de la casa"
                  fill
                  sizes="(min-width: 768px) 32vw, 50vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-4" delay={180}>
              <div className="border-4 p-5 h-full" style={{ borderColor: '#F0A868', backgroundColor: 'rgba(240,168,104,0.08)' }}>
                <p className={`${display.className} uppercase text-2xl leading-tight`} style={{ color: '#F0A868' }}>
                  Ojo con la hora
                </p>
                <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,246,228,0.85)' }}>
                  Abren a las 6 AM y el almuerzo vuela: los comensales cuentan que a las 14:00 ya no queda.
                  Llega temprano o quédate con las ganas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Las dueñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
          <Reveal className="col-span-12 md:col-span-5">
            <figure className="border-4 p-2.5 pb-9" style={{ backgroundColor: '#FFF6E4', borderColor: C.ink, boxShadow: '6px 7px 0 rgba(36,27,15,0.85)', transform: 'rotate(-1.3deg)' }}>
              <div className="relative w-full aspect-[3/4] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/duenas.webp`}
                  alt="Las dueñas de La Paila de Huevos en la cocina de su local"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                las dueñas, más de 20 años en esto
              </figcaption>
            </figure>
          </Reveal>
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-5`}>
                De la cocina <span style={{ color: C.greda }}>de la casa</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.muted }}>
                No es franquicia ni cadena: es una hostería de carretera atendida por sus propias
                dueñas, con más de dos décadas de experiencia según cuentan quienes paran ahí.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: C.muted }}>
                Camioneros, familias y quienes cruzan el Maule por la Ruta 5 llegan por lo mismo:
                porciones abundantes, precio justo y el gusto a comida hecha en casa.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.14em] px-4 py-2.5 border-2`} style={{ borderColor: C.ink, backgroundColor: C.paperSoft }}>
                  Consumo en el lugar
                </span>
                <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.14em] px-4 py-2.5 border-2`} style={{ borderColor: C.ink, backgroundColor: C.paperSoft }}>
                  Para llevar
                </span>
                <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.14em] px-4 py-2.5 border-2`} style={{ borderColor: C.letrero, color: C.letrero, backgroundColor: '#FFF6E4' }}>
                  Sin delivery
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12" delay={100}>
            <figure className="relative w-full aspect-[21/9] overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '6px 7px 0 rgba(36,27,15,0.85)' }}>
              <Image
                src={`${IMG}/mesa.webp`}
                alt="Mesa servida de La Paila de Huevos: pollo, tallarines, ensalada chilena, pan amasado y bebida"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="border-y-4" style={{ backgroundColor: C.paperSoft, borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)]`}>
                Los que pararon <span style={{ color: C.greda }}>y volvieron</span>
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={4.4} color={C.letrero} className="w-5 h-5" />
                <span className={`${mono.className} text-sm font-bold`} style={{ color: C.ink }}>
                  {BIZ.rating} en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90} className={`col-span-12 ${i === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}>
                <figure className="h-full border-4 p-5 md:p-6 flex flex-col" style={{ backgroundColor: i === 0 ? C.ink : '#FFF6E4', borderColor: C.ink, boxShadow: '5px 6px 0 rgba(36,27,15,0.8)' }}>
                  <Stars value={r.stars} color={i === 0 ? '#F0A868' : C.letrero} className="w-4 h-4 mb-3" />
                  <blockquote className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: i === 0 ? 'rgba(255,246,228,0.92)' : C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em] font-bold`} style={{ color: i === 0 ? '#F0A868' : C.muted }}>
                    {r.author} · {r.when} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-bold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.letrero }}
            >
              Leer las {BIZ.reviews} reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="como-llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-10`}>
            Al llegar a <span style={{ color: C.greda }}>San Rafael</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="border-4 p-2.5 pb-9" style={{ backgroundColor: '#FFF6E4', borderColor: C.ink, boxShadow: '6px 7px 0 rgba(36,27,15,0.85)', transform: 'rotate(-1deg)' }}>
              <div className="relative w-full aspect-[16/10] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de la Hostería La Paila de Huevo: quincho de madera, letrero pintado y estacionamiento de ripio"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                el letrero pintado se ve desde la carretera
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-5">
            <div className="border-4 p-5 md:p-6" style={{ backgroundColor: C.ink, borderColor: C.ink, boxShadow: '6px 7px 0 rgba(36,27,15,0.4)' }}>
              <address className="not-italic">
                <p className={`${display.className} uppercase text-xl md:text-2xl leading-tight`} style={{ color: '#FFF6E4' }}>
                  {BIZ.city}, {BIZ.region}
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-2 leading-relaxed`} style={{ color: 'rgba(255,246,228,0.75)' }}>
                  Al costado de la carretera, junto al cruce Pelarco
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-1`} style={{ color: 'rgba(255,246,228,0.55)' }}>
                  Plus code {BIZ.plusCode}
                </p>
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-4 text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: '#F0A868' }}>
                  {BIZ.phoneDisplay}
                </a>
                <p className={`${mono.className} text-xs mt-4 pt-4 border-t`} style={{ color: 'rgba(255,246,228,0.75)', borderColor: 'rgba(255,246,228,0.2)' }}>
                  Abre 6:00 · Almuerzo hasta agotar (~14:00) · {BIZ.ticket}
                </p>
              </address>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="mt-10 border-4 p-2.5" style={{ backgroundColor: '#FFF6E4', borderColor: C.ink, boxShadow: '6px 7px 0 rgba(36,27,15,0.85)' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden border-2" style={{ borderColor: C.ink }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
            <img src={`${IMG}/sello.webp`} alt="" className="h-11 w-16 object-cover border-2" style={{ borderColor: '#F0A868' }} aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-tight`}>{BIZ.name}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(244,233,210,0.7)' }}>
                {BIZ.city} · {BIZ.region}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: '#F0A868' }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,233,210,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(244,233,210,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. En Google Maps figura como {BIZ.mapsName}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#F0A868' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />

      <style>{`
        @keyframes paila-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .paila-marquee {
          animation: paila-marquee 26s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .paila-marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}
