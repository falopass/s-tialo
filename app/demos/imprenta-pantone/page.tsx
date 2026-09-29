import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS, SERVICES, JOBS, CLIENTS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/* Paleta de prensa: papel, tinta y el magenta de su molinillo CMYK. */
const C = {
  paper: '#F5F1E8',
  card: '#FDFBF4',
  ink: '#181511',
  soft: '#4A453C',
  muted: '#8A8272',
  magenta: '#D81B60',
  line: 'rgba(24,21,17,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'imprenta-pantone',
  title: 'Imprenta Pantone — Talonarios, etiquetas e impresos en Talca',
  description:
    'Imprenta en 6 Oriente 926, Talca. Talonarios autocopiativos, etiquetas, individuales, tickets y tarjetas de presentación.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** Marca de registro de imprenta (el circulito + cruz de las guillotinas). */
function RegMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="6" />
      <path d="M12 0v6M12 18v6M0 12h6M18 12h6" />
    </svg>
  )
}

const PAPERS = ['Couche', 'Cartón duplex', 'Kraft', 'Mantequilla', 'Autocopiativo']

export default function PantoneDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-bold`} style={{ letterSpacing: '-0.01em' }}>
            Imprenta <span style={{ color: C.magenta }}>Pantone</span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.paper }}
      />

      {/* ── HERO: la orden de trabajo ──────────────────── */}
      <section id="inicio" className="pt-[100px] md:pt-[128px] pb-12 md:pb-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.15fr_1fr] items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5 flex items-center gap-2`} style={{ color: C.magenta }}>
                <RegMark className="w-4 h-4" /> Orden de impresión · Talca
              </p>
            </Reveal>
            <Reveal>
              <h1 className={`${display.className} font-bold leading-[1.02] text-4xl md:text-6xl`} style={{ letterSpacing: '-0.02em' }}>
                Lo que tu negocio imprime{' '}
                <span style={{ color: C.magenta }}>nace en 6 Oriente</span>
              </h1>
            </Reveal>
            <Reveal className="mt-5 max-w-md">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
                {BIZ.name} imprime el papel que ordena un negocio: talonarios,
                etiquetas, individuales, tickets y tarjetas, a una cuadra del
                centro de Talca.
              </p>
            </Reveal>
            <Reveal className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} font-bold text-sm md:text-base px-6 py-3 text-white transition-transform active:scale-95`}
                style={{ backgroundColor: C.magenta }}
              >
                Llamar al {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 border transition-transform active:scale-95"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar →
              </a>
            </Reveal>
            <Reveal className="mt-7 flex flex-wrap gap-2">
              {PAPERS.map((p) => (
                <span
                  key={p}
                  className={`${mono.className} text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border`}
                  style={{ borderColor: C.line, color: C.soft }}
                >
                  {p}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Fachada con marcas de corte */}
          <Reveal>
            <figure className="relative">
              <RegMark className="absolute -top-4 -left-4 w-6 h-6" />
              <RegMark className="absolute -top-4 -right-4 w-6 h-6" />
              <RegMark className="absolute -bottom-4 -left-4 w-6 h-6" />
              <RegMark className="absolute -bottom-4 -right-4 w-6 h-6" />
              <div className="relative aspect-[4/5] border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt={`Local de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}, con su letrero del molinillo de colores`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em] flex justify-between`} style={{ color: C.muted }}>
                <span>{BIZ.address} {BIZ.addressHint}</span>
                <span>{BIZ.city}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Fichas de trabajo ──────────────────────────── */}
      <section id="trabajos" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.magenta }}>
              Salida de máquina
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight`} style={{ letterSpacing: '-0.02em' }}>
              Trabajos que ya salieron de la imprenta
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {JOBS.map((j) => (
              <Reveal key={j.src}>
                <figure className="bg-white text-ink" style={{ color: C.ink }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={j.src}
                      alt={j.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4">
                    <p className={`${display.className} font-bold text-base`}>{j.job}</p>
                    <p className={`${mono.className} mt-1 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.magenta }}>
                      {j.spec}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios: la pauta ────────────────────────── */}
      <section id="servicios" className="px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight`} style={{ letterSpacing: '-0.02em' }}>
              La pauta <span style={{ color: C.magenta }}>completa</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: C.soft }}>
              Todo lo que publican en su Instagram, resumido: si tu negocio
              necesita papel impreso, aquí se hace.
            </p>
          </Reveal>
          <div className="border-t" style={{ borderColor: C.line }}>
            {SERVICES.map((s) => (
              <Reveal key={s}>
                <p className="py-3.5 md:py-4 border-b flex items-baseline gap-3 text-sm md:text-base" style={{ borderColor: C.line }}>
                  <span aria-hidden="true" style={{ color: C.magenta }}>■</span> {s}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clientes reales ────────────────────────────── */}
      <section id="clientes" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight`} style={{ letterSpacing: '-0.02em' }}>
              Quienes ya <span style={{ color: C.magenta }}>imprimen aquí</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CLIENTS.map((cl) => (
              <Reveal key={cl.name}>
                <div className="border p-5" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                  <p className={`${display.className} font-bold text-lg`}>{cl.name}</p>
                  <p className={`${mono.className} mt-1.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {cl.what}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <figure className="border-l-4 pl-5 py-1" style={{ borderColor: C.magenta }}>
              <p className="text-sm leading-relaxed" style={{ color: C.soft }}>
                En su Instagram también se les ve en ferias de impresión:
                una imprenta que sale a mostrar su trabajo.
              </p>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ──────────────────────────────────── */}
      <section id="ubicacion" className="px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight`} style={{ letterSpacing: '-0.02em' }}>
              En el centro, <span style={{ color: C.magenta }}>horario continuo</span>
            </h2>
            <dl className="mt-8 space-y-4">
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-1`} style={{ color: C.muted }}>Dirección</dt>
                <dd className="text-lg font-semibold">{BIZ.address} {BIZ.addressHint}, {BIZ.city}</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-1`} style={{ color: C.muted }}>Teléfono</dt>
                <dd>
                  <a href={CALL_LINK} className="text-lg font-semibold underline underline-offset-4" style={{ color: C.magenta }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-2`} style={{ color: C.muted }}>Horario</dt>
                <dd className="space-y-1.5">
                  {HOURS.map((h) => (
                    <p key={h.d} className="flex justify-between gap-6 text-sm max-w-[330px]">
                      <span style={{ color: C.soft }}>{h.d}</span>
                      <span className="font-semibold text-right">{h.h}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="px-5 md:px-8 py-8 pb-6 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
            {BIZ.name} · {BIZ.city} · {BIZ.instagram}
          </p>
          <a
            href={whatsappLink('demo')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
            style={{ color: C.muted }}
          >
            Demo por {SITE.name} →
          </a>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.magenta} fg="#fff" />
    </div>
  )
}
