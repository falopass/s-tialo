import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PRECIO, MAPS_URL, MAPS_EMBED, FORMATOS, PASOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// La tapita naranja: papel de guía de despacho, naranjo Abastible y tinta oscura.
const C = {
  paper: '#FBF4E8',
  paper2: '#F3E9D7',
  ink: '#1C140C',
  inkDim: 'rgba(28,20,12,0.72)',
  naranjo: '#F15A24',
  naranjoDeep: '#C64311',
  naranjoInk: '#3A1100',
  line: 'rgba(28,20,12,0.18)',
  card: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'abastible-de-la-fuente',
  title: `${BIZ.name} — gas a domicilio en ${BIZ.city}`,
  description: `${BIZ.fullName}: distribuidora oficial Abastible en ${BIZ.address}, ${BIZ.city}. Pide tu cilindro por WhatsApp al ${BIZ.phoneDisplay}.`,
})

const NAV_LINKS = [
  { label: 'Cómo pedir', href: '#pedir' },
  { label: 'Formatos', href: '#formatos' },
  { label: 'El local', href: '#local' },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.9a11.6 11.6 0 0 0 4.6 4.4c1.7.8 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2Z" />
    </svg>
  )
}

/** Cilindro Abastible como pictograma (nivel icono). */
function Cilindro({ className = 'w-10 h-10', color = C.naranjo, tapa = C.naranjoDeep }: { className?: string; color?: string; tapa?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={className} fill="none" aria-hidden="true">
      <rect x="15" y="2" width="10" height="6" rx="2" fill={tapa} />
      <rect x="12" y="8" width="16" height="5" rx="2.5" fill={tapa} />
      <rect x="7" y="13" width="26" height="38" rx="8" fill={color} />
      <rect x="10" y="22" width="20" height="9" rx="4.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  )
}

/** Marca de bosquejo visible, obligatoria en toda escena generada. */
function Bosquejo() {
  return (
    <span
      className={`${mono.className} inline-block text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-1 rounded border border-dashed`}
      style={{ borderColor: C.ink, color: C.ink, backgroundColor: 'rgba(251,244,232,0.9)' }}
    >
      Bosquejo — se reemplaza por tu foto real
    </span>
  )
}

export default function AbastibleDeLaFuenteDemo() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={<span className={`${display.className} tracking-tight uppercase text-base md:text-lg`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.naranjo, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: la hoja de despacho ──────────────────────────────── */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4`} style={{ color: C.naranjoDeep }}>
                Distribuidora oficial Abastible · {BIZ.city}
              </p>
              <h1 className={`${display.className} uppercase leading-[0.92] tracking-tight text-[clamp(2.6rem,10vw,5.6rem)]`}>
                El gas llega<br />
                <span style={{ color: C.naranjo }}>a tu puerta</span>
              </h1>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.inkDim }}>
                {BIZ.fullName}: reparto de cilindros en {BIZ.city} y venta al paso en
                {' '}{BIZ.address}. Pides por WhatsApp y listo.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: C.naranjo, color: '#FFFFFF' }}
                >
                  <WaIcon />
                  Pedir cilindro
                </a>
                <a
                  href={WA_LINK_PRECIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-semibold"
                  style={{ color: C.ink, border: `1.5px solid ${C.ink}` }}
                >
                  Precio del día
                </a>
              </div>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: C.ink }}>
                <Stars value={4.9} color={C.naranjoDeep} className="w-4 h-4" />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </p>
            </Reveal>
          </div>

          {/* Escena: cilindro sobre guía de despacho (bosquejo marcado) */}
          <Reveal delay={120} className="relative">
            <div
              className="relative rounded-3xl border-2 border-dashed p-6 md:p-8 overflow-hidden"
              style={{ borderColor: C.ink, backgroundColor: C.card }}
            >
              <div className="absolute top-3 left-3 z-10">
                <Bosquejo />
              </div>
              <div className={`${mono.className} text-[10px] uppercase tracking-[0.25em] text-right mb-4`} style={{ color: C.inkDim }}>
                Guía de despacho · {BIZ.city}
              </div>
              <div className="flex items-end justify-center gap-5 py-4">
                <Cilindro className="w-12 h-auto" color={C.paper2} tapa="rgba(28,20,12,0.35)" />
                <Cilindro className="w-16 h-auto" color={C.paper2} tapa="rgba(28,20,12,0.35)" />
                <div className="relative">
                  <Cilindro className="w-24 h-auto" />
                  <span
                    className={`${mono.className} absolute -top-2 -right-3 text-[10px] font-bold px-2 py-0.5 rounded-full`}
                    style={{ backgroundColor: C.naranjoDeep, color: '#fff' }}
                  >
                    15 kg
                  </span>
                </div>
              </div>
              <div className="mt-4 border-t border-dashed pt-4 flex items-center justify-between" style={{ borderColor: C.line }}>
                <div className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.inkDim }}>
                  Destino: tu casa
                  <br />
                  {BIZ.city} · {BIZ.region}
                </div>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={C.naranjo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: formatos en corrido ────────────────────────────── */}
      <section aria-label="Formatos de cilindro" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {FORMATOS.map((f) => (
            <span key={f.kg} className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.22em]`} style={{ color: C.paper }}>
              Cilindro <span style={{ color: C.naranjo }}>{f.kg} kg</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Cómo pedir: la ruta en tres pasos ──────────────────────── */}
      <section id="pedir" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.naranjoDeep }}>
            Cómo pedir
          </p>
          <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-tight`}>
            Pedir gas es un trámite<br />de un minuto
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {PASOS.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="relative rounded-2xl border-2 p-6 h-full" style={{ borderColor: C.ink, backgroundColor: C.card }}>
                <span
                  className={`${mono.className} inline-block text-xs font-bold tracking-[0.2em] px-2.5 py-1 rounded-full mb-4`}
                  style={{ backgroundColor: C.naranjo, color: '#fff' }}
                >
                  {p.n}
                </span>
                <h3 className={`${display.className} uppercase text-lg md:text-xl leading-snug`}>{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: C.inkDim }}>{p.d}</p>
                {i < PASOS.length - 1 && (
                  <svg viewBox="0 0 24 24" className="hidden md:block absolute top-6 -right-4 w-6 h-6 z-10" fill="none" stroke={C.naranjo} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Formatos: el rack de cilindros ─────────────────────────── */}
      <section id="formatos" className="scroll-mt-16" style={{ backgroundColor: C.paper2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.naranjoDeep }}>
              Cilindros Abastible
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-tight`}>
              Un formato para cada casa
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: C.inkDim }}>
              Los precios se publican por el distribuidor día a día — consulta el valor
              vigente y la entrega directamente por WhatsApp.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {FORMATOS.map((f, i) => (
              <Reveal key={f.kg} delay={i * 80}>
                <div className="rounded-2xl border p-5 md:p-6 text-center h-full" style={{ borderColor: C.line, backgroundColor: C.card }}>
                  <Cilindro className="w-10 md:w-12 h-auto mx-auto" color={i === 2 ? C.naranjo : C.paper2} tapa={i === 2 ? C.naranjoDeep : 'rgba(28,20,12,0.35)'} />
                  <p className={`${display.className} uppercase text-2xl md:text-3xl mt-4 leading-none`}>{f.kg}<span className="text-base md:text-lg"> kg</span></p>
                  <p className="mt-2 text-[13px] leading-snug" style={{ color: C.inkDim }}>{f.uso}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK_PRECIO}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.ink, color: C.paper }}
              >
                <WaIcon />
                Consultar precio y reparto
              </a>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.inkDim }}>
                También venta al paso en el local
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Prueba social + sello oficial ──────────────────────────── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.naranjo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <Reveal>
            <p className={`${display.className} text-[64px] md:text-[96px] leading-none`} style={{ color: '#FFFFFF' }}>
              {BIZ.rating}
            </p>
            <Stars value={4.9} color="#FFFFFF" className="w-5 h-5" />
          </Reveal>
          <Reveal delay={100}>
            <p className={`${display.className} uppercase text-2xl md:text-4xl leading-tight`} style={{ color: '#FFFFFF' }}>
              {BIZ.reviews} vecinos de {BIZ.city} ya la califican
            </p>
            <p className="mt-3 text-sm md:text-base font-medium max-w-xl" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Nota publicada en su ficha de Google Maps. Es distribuidor oficial:
              figura en el listado de distribuidores de abastible.cl para Molina.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} tap-44 mt-4 inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] underline underline-offset-4`}
              style={{ color: '#FFFFFF' }}
            >
              Ver ficha en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El local ───────────────────────────────────────────────── */}
      <section id="local" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.naranjoDeep }}>
            El local
          </p>
          <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-tight`}>
            {BIZ.address}, {BIZ.city}
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal delay={80}>
            <div className="rounded-3xl overflow-hidden border-2 h-full min-h-[300px]" style={{ borderColor: C.ink }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="h-full rounded-3xl border-2 p-6 md:p-8 flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.card }}>
              <dl className="space-y-5 flex-1">
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranjoDeep }}>Dirección</dt>
                  <dd className="mt-1.5 text-base font-semibold">{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranjoDeep }}>Horario publicado</dt>
                  <dd className="mt-1.5 text-base font-semibold">
                    Atención hasta las 19:00
                    <span className="block text-sm font-normal" style={{ color: C.inkDim }}>
                      La ficha publica el horario del día; confirma el reparto por WhatsApp.
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.naranjoDeep }}>Pedidos</dt>
                  <dd className="mt-1.5 text-base font-semibold">
                    {BIZ.phoneDisplay} <span className="text-sm font-normal" style={{ color: C.inkDim }}>(WhatsApp y llamada)</span>
                  </dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: C.naranjo, color: '#FFFFFF' }}
                >
                  <WaIcon />
                  Pedir cilindro
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-semibold"
                  style={{ color: C.ink, border: `1.5px solid ${C.ink}` }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ≤340px ──────────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-24 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-between text-xs" style={{ color: C.inkDim }}>
          <p>
            <span className={`${display.className} uppercase text-sm tracking-wide`} style={{ color: C.ink }}>{BIZ.name}</span>
            {' '}· {BIZ.address}, {BIZ.city}, {BIZ.region}
          </p>
          <div className="flex items-center gap-5">
            <span>Distribuidor oficial Abastible</span>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.naranjoDeep }}>
              Google Maps
            </a>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
