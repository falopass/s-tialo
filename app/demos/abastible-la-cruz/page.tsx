import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HOURS,
  REVIEWS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Navy del camión Abastible + el naranjo de sus afiches de reparto.
const C = {
  navy: '#0D1B33',
  navy2: '#14264A',
  papel: '#F6F3EC',
  papelDim: 'rgba(246,243,236,0.7)',
  naranjo: '#F58220',
  naranjoDeep: '#D96805',
  azul: '#3E7BD9',
  line: 'rgba(246,243,236,0.15)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'abastible-la-cruz',
  title: `${BIZ.name} — Gas a domicilio en ${BIZ.city} y ${BIZ.cityAlt}`,
  description: `Distribuidora de gas Abastible en ${BIZ.city}: cilindros de 15 kg a domicilio en ${BIZ.cityAlt}, reciben Vales Abastible de Caja Los Andes. ${BIZ.address}, ${BIZ.city}.`,
  image: `${IMG}/equipo.webp`,
})

const NAV_LINKS = [
  { label: 'Reparto', href: '#reparto' },
  { label: 'Vales', href: '#vales' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Local', href: '#local' },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.9a11.6 11.6 0 0 0 4.6 4.4c1.7.8 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2Z" />
    </svg>
  )
}

export default function AbastibleLaCruzDemo() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.navy, color: C.papel }}
    >
      <BlitzNav
        name={<span className={`${display.className} font-bold tracking-tight uppercase`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.navy, ink: C.papel, line: C.line, btnBg: C.naranjo, btnInk: '#241000' }}
      />

      {/* ── Hero: pedido directo, como su afiche ───────────────────── */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-16 grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4`} style={{ color: C.naranjo }}>
                Distribuidora de gas · {BIZ.city} — {BIZ.cityAlt}
              </p>
              <h1 className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-tight text-[clamp(2.7rem,10vw,6rem)]`}>
                Gas a
                <br />
                <span style={{ color: C.naranjo }}>domicilio</span>
              </h1>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.papelDim }}>
                Reparto rápido de cilindros de 15&nbsp;kg en {BIZ.cityAlt} y {BIZ.city}. Llama,
                pide por WhatsApp y la camioneta llega a tu puerta.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: C.naranjo, color: '#241000' }}
                >
                  <WaIcon />
                  Pedir cilindro
                </a>
                <span className={`${mono.className} text-sm`} style={{ color: C.papelDim }}>
                  {BIZ.phoneDisplay}
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="relative">
            <div className="rounded-3xl overflow-hidden rotate-1 border-4" style={{ borderColor: C.naranjo }}>
              <Image
                src={`${IMG}/domicilio.webp`}
                alt="Afiche real de Abastible La Cruz: repartidor con cilindro naranjo junto a la camioneta de reparto en Quillota"
                width={1200}
                height={1200}
                priority
                className="w-full h-auto"
              />
            </div>
            <span
              className={`${mono.className} absolute -bottom-4 left-6 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full`}
              style={{ backgroundColor: C.navy, color: C.naranjo, border: `1px solid ${C.line}` }}
            >
              Afiche real del local
            </span>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: el precio del afiche ───────────────────────────── */}
      <section aria-label="Promoción publicada" style={{ backgroundColor: C.naranjo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-2`} style={{ color: '#3D1D00' }}>
              Publicado por la distribuidora
            </p>
            <p className={`${display.className} font-extrabold uppercase leading-none text-[clamp(3rem,9vw,5.5rem)]`} style={{ color: '#241000' }}>
              $17.900<span className={`${mono.className} text-base md:text-xl tracking-normal ml-3 align-middle`}>cilindro 15 kg · promo</span>
            </p>
            <p className="mt-3 text-sm md:text-base font-medium" style={{ color: '#3D1D00' }}>
              Precio exclusivo con descuentos incluidos, según el afiche vigente que publican —
              confirma el precio del día por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={100} className="hidden md:block">
            <div className="rounded-2xl overflow-hidden -rotate-2 border-4 border-white/60 shadow-xl w-52">
              <Image
                src={`${IMG}/promo.webp`}
                alt="Afiche de promoción de Abastible La Cruz: cilindro de 15 kg a $17.900 con descuentos incluidos"
                width={520}
                height={650}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reparto: equipo + cobertura ────────────────────────────── */}
      <section id="reparto" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src={`${IMG}/equipo.webp`}
              alt="El equipo de Abastible La Cruz junto a la camioneta de reparto frente a una casa"
              fill
              sizes="(max-width:768px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.azul }}>
                La vuelta del gas
              </p>
              <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-[1.02]`}>
                De Av. 21 de Mayo
                <br />
                a tu cocina.
              </h2>
              <div className="mt-8 space-y-0 border-t" style={{ borderColor: C.line }}>
                {[
                  ['01', 'Llamas o escribes', `pedido directo al ${BIZ.phoneDisplay}`],
                  ['02', 'Cargamos el cilindro', '15 kg Abastible, revisado y sellado'],
                  ['03', 'Reparto a domicilio', `${BIZ.city} y ${BIZ.cityAlt}, gente de la zona`],
                ].map(([n, t, d]) => (
                  <div key={n} className="flex gap-4 items-start py-4 border-b" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-sm pt-1`} style={{ color: C.naranjo }}>{n}</span>
                    <div>
                      <p className={`${display.className} font-bold text-lg uppercase tracking-wide`}>{t}</p>
                      <p className="text-sm" style={{ color: C.papelDim }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-8 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.naranjo, color: '#241000' }}
              >
                <WaIcon />
                Agendar reparto
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Vales ──────────────────────────────────────────────────── */}
      <section id="vales" className="scroll-mt-16" style={{ backgroundColor: C.navy2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.naranjo }}>
              Formas de pago
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-tight`}>
              Reciben tus
              <br />
              <span style={{ color: C.naranjo }}>Vales Abastible</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm md:text-base leading-relaxed" style={{ color: C.papelDim }}>
              Si tu empresa te entrega vales de gas de Caja Los Andes, acá los reciben. También
              aplican los descuentos del vale, como confirman sus propios clientes.
            </p>
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.papelDim }}>
              Contacto: {BIZ.contact} · {BIZ.phoneDisplay}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl overflow-hidden border-2 rotate-1 shadow-2xl" style={{ borderColor: C.naranjo }}>
              <Image
                src={`${IMG}/vales.webp`}
                alt="Afiche real de Abastible La Cruz: reciben Vales Abastible de Caja Los Andes, contacto Mauricio Ríos"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones ──────────────────────────────────────────────── */}
      <section id="opiniones" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.azul }}>
                Opiniones de clientes
              </p>
              <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-tight`}>
                Lo que dice la gente
              </h2>
            </div>
            <div className="text-right">
              <p className={`${display.className} font-extrabold text-6xl md:text-7xl leading-none`} style={{ color: C.naranjo }}>
                {BIZ.rating}
              </p>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-1`} style={{ color: C.papelDim }}>
                {BIZ.reviewCount} reseñas en Google
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 90}>
              <figure
                className="h-full rounded-2xl p-5 md:p-6 border flex flex-col"
                style={{ backgroundColor: C.navy2, borderColor: C.line }}
              >
                <Stars value={r.stars} color={C.naranjo} />
                <blockquote className="mt-3 text-sm md:text-base leading-relaxed flex-1">“{r.text}”</blockquote>
                <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.papelDim }}>
                  {r.author} · {r.when}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Local ──────────────────────────────────────────────────── */}
      <section id="local" className="scroll-mt-16" style={{ backgroundColor: C.navy2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.naranjo }}>
              El local
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-3xl md:text-5xl leading-tight`}>
              {BIZ.address}, {BIZ.city}
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal delay={80}>
              <div className="rounded-3xl overflow-hidden border h-full min-h-[300px]" style={{ borderColor: C.line }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="h-full rounded-3xl border p-6 md:p-8 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.navy }}>
                <dl className="space-y-5 flex-1">
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranjo }}>Dirección</dt>
                    <dd className="mt-1.5 text-base font-semibold">{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranjo }}>Horario</dt>
                    {HOURS.map((h) => (
                      <dd key={h.d} className="mt-1.5 text-base font-semibold">
                        {h.d} <span style={{ color: C.papelDim }}>·</span> {h.h}
                      </dd>
                    ))}
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranjo }}>Pedidos</dt>
                    <dd className="mt-1.5 text-base font-semibold">
                      {BIZ.phoneDisplay} <span className="text-sm font-normal" style={{ color: C.papelDim }}>(WhatsApp)</span>
                    </dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.naranjo, color: '#241000' }}
                  >
                    <WaIcon />
                    Pedir cilindro
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-semibold"
                    style={{ color: C.papel, border: `1px solid ${C.line}` }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-24 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-between text-xs" style={{ color: C.papelDim }}>
          <p>
            <span className={`${display.className} font-bold uppercase text-sm tracking-wide`} style={{ color: C.papel }}>{BIZ.name}</span>
            {' '}· {BIZ.address}, {BIZ.city}, {BIZ.region}
          </p>
          <div className="flex items-center gap-5">
            <span>Distribuidora de gas Abastible</span>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.naranjo }}>
              Google Maps
            </a>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
