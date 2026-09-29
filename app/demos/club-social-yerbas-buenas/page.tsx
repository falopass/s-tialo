import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, CallFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'club-social-yerbas-buenas',
  title: `${BIZ.name} — el patio de siempre en ${BIZ.city}`,
  description: `Club social y restaurante en ${BIZ.city}, Linares: mesas bajo el parrón, comida casera y la bandera en el muro. Nota ${BIZ.rating} en Google.`,
  image: `${IMG}/patio.webp`,
})

// Paleta de la foto real del patio: verde parrón, adobe/terracota del
// muro, crema de los manteles y la bandera.
const C = {
  verde: '#1E4630',
  verdeOsc: '#122B1C',
  papel: '#F7F1E3',
  crema: '#FDF9EE',
  adobe: '#B4552E',
  trigo: '#D9A93B',
  line: 'rgba(30,70,48,.16)',
} as const

// Estampa tipo credencial de socio: el motivo del sitio.
function Estampa({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-block text-[11px] md:text-xs tracking-[0.24em] uppercase rounded-sm px-3 py-1.5 border`}
      style={
        dark
          ? { background: C.trigo, color: C.verdeOsc, borderColor: C.verdeOsc }
          : { background: C.verde, color: C.crema, borderColor: C.trigo }
      }
    >
      {children}
    </span>
  )
}

// Marco de escena pendiente: no hay fotos de platos publicadas, la vara
// exige marcar lo que no es foto real.
function Bosquejo({ titulo, detalle }: { titulo: string; detalle: string }) {
  return (
    <figure
      className="relative rounded-xl overflow-hidden border-2 border-dashed h-full"
      style={{ borderColor: C.adobe, background: `linear-gradient(160deg, ${C.papel} 0%, #EFE3CC 100%)` }}
    >
      <span
        className={`${mono.className} absolute top-3 left-3 z-10 text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm`}
        style={{ background: C.verdeOsc, color: C.trigo }}
      >
        Bosquejo · falta la foto real
      </span>
      <div className="aspect-[4/3] flex items-center justify-center p-8">
        <svg viewBox="0 0 120 90" className="w-full h-full opacity-60" aria-hidden="true">
          <rect x="18" y="56" width="84" height="6" rx="3" fill={C.verde} opacity=".35" />
          <ellipse cx="60" cy="50" rx="30" ry="12" fill="none" stroke={C.verde} strokeWidth="2" strokeDasharray="5 4" />
          <path d="M38 32q8-14 18-6M66 24q12-8 18 4" fill="none" stroke={C.adobe} strokeWidth="2" strokeLinecap="round" />
          <path d="M24 20l6 10M96 20l-6 10" stroke={C.trigo} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <figcaption className="px-4 pb-4">
        <p className={`${display.className} text-lg md:text-xl`} style={{ color: C.verdeOsc }}>{titulo}</p>
        <p className={`${mono.className} text-[10px] tracking-[0.18em] uppercase mt-1`} style={{ color: C.adobe }}>{detalle}</p>
      </figcaption>
    </figure>
  )
}

const PhoneIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const PinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

export default function ClubSocialPage() {
  return (
    <main className={`${body.className} min-h-screen`} style={{ background: C.crema, color: C.verdeOsc }}>
      <BlitzNav
        name={<span className={display.className}>Club Social Yerbas Buenas</span>}
        links={[
          { label: 'El patio', href: '#patio' },
          { label: 'La casa club', href: '#club' },
          { label: 'Cómo llegar', href: '#mapa' },
        ]}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{
          over: 'dark',
          bar: C.crema,
          ink: C.verdeOsc,
          line: C.line,
          btnBg: C.verde,
          btnInk: C.crema,
        }}
      />

      {/* ── Hero: el patio real bajo el parrón ────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ background: C.verdeOsc }}>
        <Image
          src={`${IMG}/patio.webp`}
          alt="Patio del Club Social Yerbas Buenas: mesas con manteles bajo el parrón, la bandera chilena en el muro de adobe y clientes almorzando"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(18,43,28,.35) 0%, rgba(18,43,28,.05) 40%, rgba(18,43,28,.9) 100%)' }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-28">
          <Reveal>
            <Estampa dark>Casa club · {BIZ.city} · Linares</Estampa>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className={`${display.className} mt-5 text-[clamp(2.8rem,11vw,7rem)] leading-[0.95] tracking-tight`}
              style={{ color: C.crema, textShadow: '0 2px 30px rgba(18,43,28,.65)' }}
            >
              El patio donde<br />almuerza el pueblo
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(253,249,238,.92)' }}>
              Mesas de madera bajo el parrón, la bandera colgada en el muro de
              adobe y la cocina prendida temprano. El club social que mantiene la
              mesa de {BIZ.city} como se ha hecho siempre.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 font-semibold text-sm md:text-base px-6 h-[52px] rounded-full transition-transform active:scale-95"
                style={{ background: C.trigo, color: C.verdeOsc }}
              >
                <PhoneIcon /> {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm md:text-base px-6 h-[52px] rounded-full border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(253,249,238,.55)', color: C.crema, background: 'rgba(18,43,28,.4)' }}
              >
                <PinIcon /> Cómo llegar
              </a>
              <span className="inline-flex items-center gap-2" style={{ color: C.crema }}>
                <Stars value={4.5} color={C.trigo} />
                <span className={`${mono.className} text-xs tracking-[0.12em]`}>{BIZ.rating} en Google</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La casa club ─────────────────────────────────────────── */}
      <section id="club" className="py-16 md:py-24" style={{ background: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Estampa>La casa club</Estampa>
            <h2 className={`${display.className} mt-4 text-4xl md:text-6xl tracking-tight leading-[1.02]`}>
              Mesa larga,<br />puerta abierta
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(18,43,28,.78)' }}>
              Como todo club social de pueblo, este es al mismo tiempo
              restaurante, punto de encuentro y sala de la comunidad. La foto de
              su ficha lo dice todo: el parrón cargado, las sillas corridas para
              la sobremesa y la bandera que no falta.
            </p>
            <ul className="mt-8 space-y-0 border-t" style={{ borderColor: C.line }}>
              {[
                ['Qué es', 'Club social y restaurante'],
                ['Dónde', `${BIZ.address}, provincia de Linares`],
                ['Teléfono', `${BIZ.phoneDisplay} (fijo)`],
                ['Nota en Google', `${BIZ.rating} estrellas`],
                ['Horario', 'La ficha no publica horario confiable — mejor llamar'],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-4 items-baseline py-3.5 border-b" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[11px] tracking-[0.18em] uppercase w-28 shrink-0`} style={{ color: C.adobe }}>{k}</span>
                  <span className="text-sm md:text-base">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="rounded-2xl overflow-hidden shadow-lg border-4" style={{ borderColor: C.verde }}>
              <Image
                src={`${IMG}/patio.webp`}
                alt="Vista del patio del Club Social Yerbas Buenas con parrón, mesas con mantel y la bandera chilena"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
              />
              <figcaption className={`${mono.className} text-[11px] tracking-[0.14em] px-4 py-3`} style={{ background: C.verdeOsc, color: C.trigo }}>
                FOTO REAL · EL PATIO BAJO EL PARRÓN
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La mesa (bosquejos marcados) ─────────────────────────── */}
      <section id="patio" className="py-16 md:py-24" style={{ background: C.verdeOsc, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Estampa dark>La mesa del club</Estampa>
            <h2 className={`${display.className} mt-4 text-4xl md:text-6xl tracking-tight leading-[1.02]`}>
              Lo que sale de esa cocina
            </h2>
            <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'rgba(253,249,238,.75)' }}>
              La ficha no publica fotos de sus platos todavía. Estas escenas son
              bosquejos — se cambian por las fotos reales del club.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { t: 'El almuerzo de patio', d: 'plato del día' },
              { t: 'La once del club', d: 'té y algo dulce' },
              { t: 'La sobremesa', d: 'bajo el parrón' },
            ].map((b, i) => (
              <Reveal key={b.t} delay={0.08 * i}>
                <Bosquejo titulo={b.t} detalle={b.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ──────────────────────────────────────────── */}
      <section id="mapa" className="py-16 md:py-24" style={{ background: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal>
            <Estampa>En el centro de {BIZ.city}</Estampa>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl tracking-tight leading-[1.02]`}>
              A pasos de la plaza
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(18,43,28,.78)' }}>
              El club queda en {BIZ.city}, capital de la comuna del mismo nombre
              en la provincia de Linares. Plus code {BIZ.plusCode}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 h-[52px] rounded-full transition-transform active:scale-95"
                style={{ background: C.verde, color: C.crema }}
              >
                <PhoneIcon /> Llamar
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 h-[52px] rounded-full border transition-transform active:scale-95"
                style={{ borderColor: C.verde, color: C.verde }}
              >
                <PinIcon /> Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                className="w-full aspect-[4/3] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="py-10" style={{ background: C.verdeOsc, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl`}>{BIZ.name}</p>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mt-1`} style={{ color: C.trigo }}>
              {BIZ.rubro} · provincia de Linares
            </p>
          </div>
          <div className={`${mono.className} text-xs space-y-1`} style={{ color: 'rgba(253,249,238,.7)' }}>
            <p>{BIZ.phoneDisplay} · {BIZ.rating} en Google</p>
            <p>{BIZ.city}, {BIZ.region}</p>
          </div>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.verde} />
      <DemoBand name={BIZ.short} />
    </main>
  )
}
