import type { CSSProperties } from 'react'
import { logoFont } from '@/lib/fonts'
import { SITE, whatsappLink } from '@/lib/config'
import type { Demo, DemoSection, DemoTheme, DemoMotif, DemoSwatch } from './data'
import { DemoQuoter, DemoMeasure } from './quote'

// ── Theme ────────────────────────────────────────────────────

export function themeStyle(t: DemoTheme): CSSProperties {
  return {
    '--d-paper': t.paper,
    '--d-ink': t.ink,
    '--d-muted': t.muted,
    '--d-accent': t.accent,
    '--d-accent-ink': t.accentInk,
    '--d-soft': t.soft,
    '--d-line': t.line,
    '--d-radius': t.radius,
    backgroundColor: t.paper,
    color: t.ink,
  } as CSSProperties
}

export function headingFont(t: DemoTheme): string {
  if (t.heading === 'serif') return 'font-display font-bold tracking-display'
  if (t.heading === 'black') return `${logoFont.className} uppercase`
  return 'font-body font-bold tracking-tight'
}

export function waLink(demo: Demo, extra?: string): string {
  const msg = `Hola ${demo.name}! Vi su sitio web y quiero consultar${extra ? ` por ${extra}` : ''}.`
  return `https://wa.me/${demo.whatsapp}?text=${encodeURIComponent(msg)}`
}

// ── Motifs (SVG decorativos por rubro) ───────────────────────

const MOTIF_PATHS: Record<DemoMotif, React.ReactNode> = {
  road: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8 3 C6 9 4.5 15 4 21" />
      <path d="M16 3 C18 9 19.5 15 20 21" />
      <path d="M12 4.5 v2.5 M12 10 v3 M12 16.5 v4" strokeWidth="2" />
    </g>
  ),
  paw: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="15.5" rx="4.6" ry="3.6" />
      <circle cx="6.4" cy="9.6" r="1.7" />
      <circle cx="12" cy="7.4" r="1.7" />
      <circle cx="17.6" cy="9.6" r="1.7" />
    </g>
  ),
  leaf: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M5 19 C5 10 11 4 20 4 C20 13 14 19 5 19 Z" />
      <path d="M7.5 16.5 C10.5 12.5 13.5 9.5 16.5 6.5" />
    </g>
  ),
  glasses: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="10.5" width="7" height="6" rx="3" />
      <rect x="14" y="10.5" width="7" height="6" rx="3" />
      <path d="M10 12.5 q2 -2.5 4 0" />
      <path d="M3 12 L1.5 8.5 M21 12 L22.5 8.5" />
    </g>
  ),
  mountain: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 19 L9 7 L13 14 L16 9 L21 19 Z" />
      <circle cx="17.5" cy="5" r="1.8" />
    </g>
  ),
  hammer: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M13.5 3.5 L20 10 L17.5 12.5 L11 6 Z" />
      <path d="M11.5 9.5 L4.5 20" strokeWidth="2" />
    </g>
  ),
  tooth: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8 4.5 C5.5 4.5 4 6.5 4 9.5 C4 14 5.5 20 7.5 20 C9 20 8.5 15.5 12 15.5 C15.5 15.5 15 20 16.5 20 C18.5 20 20 14 20 9.5 C20 6.5 18.5 4.5 16 4.5 C14 4.5 13.5 5.5 12 5.5 C10.5 5.5 10 4.5 8 4.5 Z" />
    </g>
  ),
  flame: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3 C12 7 7 9.5 7 14 A5 5 0 0 0 17 14 C17 10.5 14.5 9 14.5 6 C13.5 7.5 12.5 8 11.5 8" />
    </g>
  ),
  megaphone: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 10.5 v3 h2.5 L15 18 V6 L6.5 10.5 Z" />
      <path d="M7 13.8 L8.2 19" />
      <path d="M18 9 a4.2 4.2 0 0 1 0 6.5" />
    </g>
  ),
  calculator: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7 h6" strokeWidth="1.8" />
      <path
        d="M9 11.5 h.01 M12 11.5 h.01 M15 11.5 h.01 M9 14.5 h.01 M12 14.5 h.01 M15 14.5 h.01 M9 17.5 h.01 M12 17.5 h.01 M15 17.5 h.01"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </g>
  ),
  tow: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="6.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
      <path d="M2 17 h2.5 M8.5 17 h6 M18.5 17 h3" />
      <path d="M4.5 15 v-4.5 h6 V15" />
      <path d="M10.5 11.5 L18.5 7.5" />
      <path d="M18.5 7.5 v3 v1.5 a2.4 2.4 0 1 1 -4.8 0" />
    </g>
  ),
  gear: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 2.8 v3 M12 18.2 v3 M2.8 12 h3 M18.2 12 h3 M5.5 5.5 l2.1 2.1 M16.4 16.4 l2.1 2.1 M18.5 5.5 l-2.1 2.1 M7.6 16.4 l-2.1 2.1" />
    </g>
  ),
  print: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 1.5 v4 M12 18.5 v4 M1.5 12 h4 M18.5 12 h4" />
    </g>
  ),
  window: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3.5" y="3.5" width="17" height="17" />
      <rect x="6" y="6" width="12" height="12" />
      <path d="M12 6 v12 M6 12 h12" />
    </g>
  ),
}

export function Motif({
  motif,
  className = '',
}: {
  motif: DemoMotif
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {MOTIF_PATHS[motif]}
    </svg>
  )
}

// ── Chrome del demo ─────────────────────────────────────────

export function DemoHeader({ demo }: { demo: Demo }) {
  const t = demo.theme
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{
        backgroundColor: `${t.paper}E6`,
        borderColor: t.line,
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[56px] md:h-[64px] flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className={`${headingFont(t)} text-lg md:text-xl leading-none`}
        >
          {demo.name}
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
          {demo.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: t.muted }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink(demo)}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold px-4 py-2 transition-transform active:scale-95"
          style={{
            backgroundColor: t.accent,
            color: t.accentInk,
            borderRadius: t.radius,
          }}
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export function DemoBand({ name }: { name: string }) {
  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[calc(100vw-7rem)] flex items-center gap-2 bg-ink/90 text-cream text-[11px] leading-tight px-3 py-2 rounded-full shadow-lg backdrop-blur-sm">
      <span
        className="inline-block w-[6px] h-[6px] rounded-full bg-yellow shrink-0"
        aria-hidden="true"
      />
      <span>
        Mockup preparado por{' '}
        <a
          href={SITE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:text-yellow"
        >
          Sitiazo
        </a>{' '}
        para {name} — así se vería tu sitio.{' '}
        <a
          href={whatsappLink('contacto')}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:text-yellow"
        >
          ¿Lo hacemos realidad?
        </a>
      </span>
    </div>
  )
}

export function WhatsAppFab({ demo }: { demo: Demo }) {
  return (
    <a
      href={waLink(demo)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp a ${demo.name}`}
      className="fixed bottom-4 right-4 z-50 w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
    </a>
  )
}

// ── Hero ─────────────────────────────────────────────────────

function HeroContent({ demo }: { demo: Demo }) {
  const t = demo.theme
  return (
    <div>
      <p
        className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
        style={{ color: t.muted }}
      >
        {demo.rubro} · {demo.city} · {demo.established}
      </p>
      <h1
        className={`${headingFont(t)} text-4xl md:text-6xl leading-[1.02] mb-5`}
      >
        {demo.tagline}
      </h1>
      <p
        className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
        style={{ color: t.muted }}
      >
        {demo.intro}
      </p>
      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href={waLink(demo)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sm px-6 py-3 transition-transform active:scale-95"
          style={{
            backgroundColor: t.accent,
            color: t.accentInk,
            borderRadius: t.radius,
          }}
        >
          Escribir por WhatsApp
        </a>
        <a
          href="#contacto"
          className="font-semibold text-sm px-6 py-3 border transition-colors"
          style={{ borderColor: t.line, borderRadius: t.radius }}
        >
          Ver contacto
        </a>
      </div>
      <dl className="grid grid-cols-3 gap-4 max-w-lg">
        {demo.stats.map((s) => (
          <div key={s.label}>
            <dt
              className={`${headingFont(t)} text-sm md:text-base`}
              style={{ color: t.accent }}
            >
              {s.value}
            </dt>
            <dd
              className="text-xs md:text-sm leading-snug"
              style={{ color: t.muted }}
            >
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function DemoHero({ demo }: { demo: Demo }) {
  const t = demo.theme
  if (demo.hero === 'banner') {
    return (
      <section
        id="inicio"
        className="relative overflow-hidden border-b"
        style={{ borderColor: t.line }}
      >
        <Motif
          motif={demo.motif}
          className="absolute -right-6 -bottom-8 w-[224px] md:w-[384px] opacity-[0.08] pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(120deg, ${t.soft} 0%, ${t.paper} 70%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <HeroContent demo={demo} />
        </div>
      </section>
    )
  }

  if (demo.hero === 'type') {
    return (
      <section
        id="inicio"
        className="border-b"
        style={{ borderColor: t.line }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-14 md:pb-20">
          <div
            className="flex items-baseline justify-between gap-4 border-t-[3px] border-b py-2.5 font-mono text-[10px] md:text-xs uppercase tracking-[0.15em]"
            style={{
              borderTopColor: t.ink,
              borderBottomColor: t.line,
              color: t.muted,
            }}
          >
            <span>{demo.rubro}</span>
            <span className="hidden md:inline">{demo.established}</span>
            <span>{demo.city}</span>
          </div>

          <h1
            className={`${headingFont(t)} uppercase leading-[0.85] tracking-[-0.01em] mt-8 md:mt-10 text-[clamp(3.5rem,14.5vw,11rem)]`}
          >
            {demo.name}
          </h1>

          <div
            className="flex items-center gap-1.5 mt-5 mb-10"
            aria-hidden="true"
          >
            {['#00AEEF', '#EC008C', '#F8E71C', '#231F20'].map((c) => (
              <span
                key={c}
                className="h-[10px] w-[48px] md:w-[72px]"
                style={{ backgroundColor: c }}
              />
            ))}
            <span className="ml-3 shrink-0" style={{ color: t.ink }}>
              <Motif motif={demo.motif} className="w-[24px] h-[24px]" />
            </span>
          </div>

          <div className="grid md:grid-cols-[1.35fr_1fr] gap-10 md:gap-16 items-start">
            <div>
              <p
                className={`${headingFont(t)} text-2xl md:text-3xl leading-tight mb-4`}
              >
                {demo.tagline}
              </p>
              <p
                className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: t.muted }}
              >
                {demo.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink(demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm px-6 py-3 transition-transform active:scale-95"
                  style={{
                    backgroundColor: t.accent,
                    color: t.accentInk,
                    borderRadius: t.radius,
                  }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="#cotiza"
                  className="font-semibold text-sm px-6 py-3 border transition-colors"
                  style={{ borderColor: t.line, borderRadius: t.radius }}
                >
                  Cotiza tu impresión
                </a>
              </div>
            </div>
            <div
              className="border p-5 md:p-6"
              style={{ borderColor: t.ink, borderRadius: t.radius }}
            >
              <p
                className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4"
                style={{ color: t.muted }}
              >
                Ficha del taller
              </p>
              <dl className="space-y-3">
                {demo.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between gap-4 border-b pb-3 last:border-b-0 last:pb-0"
                    style={{ borderColor: t.line }}
                  >
                    <dt
                      className="font-mono text-[11px] uppercase tracking-[0.1em]"
                      style={{ color: t.muted }}
                    >
                      {s.label}
                    </dt>
                    <dd
                      className={`${headingFont(t)} text-lg md:text-xl shrink-0`}
                      style={{ color: t.accent }}
                    >
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (demo.hero === 'frame') {
    return (
      <section
        id="inicio"
        className="relative overflow-hidden border-b"
        style={{ borderColor: t.line }}
      >
        {/* Franja de medidas: regla en centímetros */}
        <div
          aria-hidden="true"
          className="border-b"
          style={{ borderColor: t.line, backgroundColor: t.soft }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4">
            <div
              className="flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.15em] mb-1"
              style={{ color: t.muted }}
            >
              <span>Medidas a pedido</span>
              <span>ancho × alto · cm</span>
            </div>
            <svg
              viewBox="0 0 960 26"
              preserveAspectRatio="none"
              className="block w-full h-[26px]"
            >
              {Array.from({ length: 97 }, (_, i) => {
                const x = i * 10
                const h = i % 10 === 0 ? 18 : i % 5 === 0 ? 12 : 7
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={0}
                    x2={x}
                    y2={h}
                    stroke={t.muted}
                    strokeWidth={i % 10 === 0 ? 1.4 : 1}
                  />
                )
              })}
              <line
                x1={0}
                y1={0.5}
                x2={960}
                y2={0.5}
                stroke={t.ink}
                strokeWidth={1.2}
              />
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
              style={{ color: t.muted }}
            >
              {demo.rubro} · {demo.city} · {demo.established}
            </p>
            <h1
              className={`${headingFont(t)} text-4xl md:text-6xl leading-[1.02] mb-5`}
            >
              {demo.tagline}
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: t.muted }}
            >
              {demo.intro}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#cotiza"
                className="font-semibold text-sm px-6 py-3 transition-transform active:scale-95"
                style={{
                  backgroundColor: t.accent,
                  color: t.accentInk,
                  borderRadius: t.radius,
                }}
              >
                Cotizar con tus medidas
              </a>
              <a
                href={waLink(demo)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 border transition-colors"
                style={{ borderColor: t.line, borderRadius: t.radius }}
              >
                Escribir por WhatsApp
              </a>
            </div>
            <dl className="grid grid-cols-3 gap-4 max-w-lg">
              {demo.stats.map((s) => (
                <div key={s.label}>
                  <dt
                    className={`${headingFont(t)} text-sm md:text-base`}
                    style={{ color: t.accent }}
                  >
                    {s.value}
                  </dt>
                  <dd
                    className="text-xs md:text-sm leading-snug"
                    style={{ color: t.muted }}
                  >
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Esquema acotado: ventana con cotas de ancho y alto */}
          <div
            className="border p-5 md:p-6"
            style={{
              borderColor: t.ink,
              borderRadius: t.radius,
              backgroundColor: t.soft,
            }}
          >
            <svg
              viewBox="0 0 200 170"
              className="block w-full h-auto"
              role="img"
              aria-label="Esquema de ventana con cotas de ancho y alto"
            >
              {/* líneas de extensión */}
              <line x1="40" y1="28" x2="40" y2="36" stroke={t.muted} strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="160" y1="28" x2="160" y2="36" stroke={t.muted} strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="166" y1="34" x2="182" y2="34" stroke={t.muted} strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="166" y1="140" x2="182" y2="140" stroke={t.muted} strokeWidth="0.8" strokeDasharray="2 2" />
              {/* cota ancho */}
              <line x1="40" y1="24" x2="160" y2="24" stroke={t.accent} strokeWidth="1.2" />
              <path d="M40 24 l7 -3 v6 z" fill={t.accent} />
              <path d="M160 24 l-7 -3 v6 z" fill={t.accent} />
              <text x="100" y="16" textAnchor="middle" fontSize="9" fill={t.accent} fontFamily="monospace" letterSpacing="2">ANCHO</text>
              {/* cota alto */}
              <line x1="186" y1="34" x2="186" y2="140" stroke={t.accent} strokeWidth="1.2" />
              <path d="M186 34 l-3 7 h6 z" fill={t.accent} />
              <path d="M186 140 l-3 -7 h6 z" fill={t.accent} />
              <text x="196" y="87" textAnchor="middle" fontSize="9" fill={t.accent} fontFamily="monospace" letterSpacing="2" transform="rotate(90 196 87)">ALTO</text>
              {/* ventana */}
              <rect x="40" y="34" width="120" height="106" fill="#FFFFFF" stroke={t.ink} strokeWidth="2" />
              <line x1="100" y1="34" x2="100" y2="140" stroke={t.ink} strokeWidth="1.2" />
              <line x1="40" y1="87" x2="160" y2="87" stroke={t.ink} strokeWidth="1.2" />
              <path d="M50 78 l24 -36 M110 78 l24 -36" stroke={t.line} strokeWidth="2" />
            </svg>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.15em] mt-4"
              style={{ color: t.muted }}
            >
              Cada pieza se fabrica a la medida del vano
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="inicio"
      className="grid md:grid-cols-2 border-b"
      style={{ borderColor: t.line }}
    >
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8 py-14 md:py-20 md:pr-12">
        <HeroContent demo={demo} />
      </div>
      <div
        className="relative min-h-[224px] md:min-h-0 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(150deg, ${t.accent} 0%, ${t.soft} 130%)`,
        }}
      >
        <Motif
          motif={demo.motif}
          className="w-[160px] md:w-[256px] opacity-30"
        />
        <span
          className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.15em]"
          style={{ color: t.accentInk, opacity: 0.85 }}
        >
          {demo.name} — {demo.city}
        </span>
      </div>
    </section>
  )
}

// ── Info strip ───────────────────────────────────────────────

export function InfoStrip({ demo }: { demo: Demo }) {
  const t = demo.theme
  const items = [
    { label: 'Dirección', value: demo.address },
    {
      label: 'Horario',
      value: demo.hours.map((h) => `${h.days} ${h.time}`).join(' · '),
    },
    { label: 'Teléfono', value: demo.phone },
  ]
  return (
    <div
      id="horario"
      className="border-b"
      style={{ borderColor: t.line, backgroundColor: t.soft }}
    >
      <dl className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid sm:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.label}>
            <dt
              className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1"
              style={{ color: t.muted }}
            >
              {it.label}
            </dt>
            <dd className="text-sm font-medium leading-snug">{it.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// ── Sections ─────────────────────────────────────────────────

function SectionShell({
  id,
  title,
  blurb,
  t,
  children,
}: {
  id?: string
  title: string
  blurb?: string
  t: DemoTheme
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20"
    >
      <h2
        className={`${headingFont(t)} text-2xl md:text-4xl leading-tight mb-3`}
      >
        {title}
      </h2>
      {blurb && (
        <p
          className="text-sm md:text-base mb-8 max-w-2xl leading-relaxed"
          style={{ color: t.muted }}
        >
          {blurb}
        </p>
      )}
      {!blurb && <div className="mb-8" />}
      {children}
    </section>
  )
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="w-4 h-4 mt-0.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5 L8.5 15 L16 5.5" />
    </svg>
  )
}

// Muestrario: composiciones CSS/SVG por tipo de producto (sin fotos).
function SwatchArt({ kind, t }: { kind: DemoSwatch; t: DemoTheme }) {
  const paper = '#FFFFFF'
  const stroke = { fill: paper, stroke: t.ink, strokeWidth: 1.5 }
  const lines = { stroke: t.line, strokeWidth: 2 }
  const art: Record<DemoSwatch, React.ReactNode> = {
    sheet: (
      <>
        <rect x="42" y="20" width="38" height="30" {...stroke} />
        <rect x="36" y="14" width="38" height="30" {...stroke} />
        <rect x="30" y="8" width="38" height="30" {...stroke} />
        <path d="M36 16 h14 M36 21 h22 M36 26 h17" {...lines} />
      </>
    ),
    card: (
      <>
        <rect x="32" y="8" width="46" height="26" fill={t.accent} />
        <rect x="18" y="28" width="46" height="26" {...stroke} />
        <path d="M24 36 h16 M24 42 h28 M24 48 h20" {...lines} />
      </>
    ),
    fold: (
      <>
        <rect x="20" y="10" width="56" height="44" {...stroke} />
        <path
          d="M48 10 v44"
          fill="none"
          stroke={t.ink}
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <rect x="25" y="16" width="18" height="14" fill={t.soft} />
        <path d="M25 36 h18 M25 42 h18 M25 48 h12" {...lines} />
        <path d="M53 18 h18 M53 24 h18 M53 30 h14" {...lines} />
        <rect x="53" y="38" width="18" height="10" fill={t.accent} />
      </>
    ),
    sticker: (
      <>
        <circle
          cx="48"
          cy="32"
          r="24"
          fill="none"
          stroke={t.muted}
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <circle cx="48" cy="32" r="19" {...stroke} />
        <circle cx="48" cy="32" r="9" fill={t.accent} />
      </>
    ),
    banner: (
      <>
        <rect x="8" y="20" width="80" height="24" {...stroke} />
        <circle cx="12" cy="23.5" r="1.6" fill={t.ink} />
        <circle cx="84" cy="23.5" r="1.6" fill={t.ink} />
        <circle cx="12" cy="40.5" r="1.6" fill={t.ink} />
        <circle cx="84" cy="40.5" r="1.6" fill={t.ink} />
        <rect x="16" y="26" width="20" height="12" fill={t.accent} />
        <path d="M42 29 h30 M42 35 h24" {...lines} />
      </>
    ),
    pendon: (
      <>
        <path
          d="M30 12 h36"
          fill="none"
          stroke={t.ink}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="36" y="12" width="24" height="44" {...stroke} />
        <circle cx="48" cy="28" r="7" fill={t.accent} />
        <path d="M42 42 h12 M42 47 h8" {...lines} />
      </>
    ),
    letter: (
      <>
        <rect x="32" y="6" width="34" height="52" {...stroke} />
        <rect x="37" y="11" width="12" height="6" fill={t.accent} />
        <path d="M37 24 h22 M37 30 h22 M37 36 h22 M37 42 h16" {...lines} />
        <path d="M37 50 h10" fill="none" stroke={t.ink} strokeWidth="2" />
      </>
    ),
    flyer: (
      <>
        <rect
          x="38"
          y="10"
          width="26"
          height="42"
          fill={t.soft}
          stroke={t.muted}
          strokeWidth="1.2"
          transform="rotate(6 51 31)"
        />
        <rect x="30" y="8" width="26" height="42" {...stroke} />
        <rect x="34" y="13" width="18" height="9" fill={t.accent} />
        <path d="M34 27 h18 M34 32 h18 M34 37 h12" {...lines} />
      </>
    ),
    // Secciones de vidrio vistas de canto (sin fotos).
    pane: (
      <>
        <rect x="40" y="8" width="16" height="48" fill={t.soft} stroke={t.ink} strokeWidth="1.5" />
        <path d="M44 44 l8 -16" {...lines} />
      </>
    ),
    laminado: (
      <>
        <rect x="34" y="8" width="12" height="48" fill={t.soft} stroke={t.ink} strokeWidth="1.5" />
        <rect x="46" y="8" width="4" height="48" fill={t.accent} />
        <rect x="50" y="8" width="12" height="48" fill={t.soft} stroke={t.ink} strokeWidth="1.5" />
      </>
    ),
    templado: (
      <>
        <rect x="38" y="8" width="20" height="48" fill={t.soft} stroke={t.ink} strokeWidth="1.5" />
        <path d="M42 18 l12 7 M42 30 l12 7 M42 42 l12 7" stroke={t.accent} strokeWidth="1.4" />
      </>
    ),
    dvh: (
      <>
        <rect x="28" y="8" width="11" height="48" fill={t.soft} stroke={t.ink} strokeWidth="1.5" />
        <rect x="57" y="8" width="11" height="48" fill={t.soft} stroke={t.ink} strokeWidth="1.5" />
        <rect x="39" y="8" width="18" height="5" fill={t.muted} />
        <rect x="39" y="51" width="18" height="5" fill={t.muted} />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 96 64" className="h-full w-auto" aria-hidden="true">
      {art[kind]}
    </svg>
  )
}

function RenderSection({ s, demo }: { s: DemoSection; demo: Demo }) {
  const t = demo.theme
  const id = s.id

  switch (s.type) {
    case 'services':
      return (
        <SectionShell id={id} title={s.title} blurb={s.blurb} t={t}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.items.map((it) => (
              <li
                key={it.name}
                className="p-5 border"
                style={{
                  backgroundColor: t.soft,
                  borderColor: t.line,
                  borderRadius: t.radius,
                }}
              >
                <h3 className="font-semibold text-base mb-1.5">{it.name}</h3>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: t.muted }}
                >
                  {it.desc}
                </p>
                {it.price && (
                  <p
                    className="font-mono text-sm font-medium"
                    style={{ color: t.accent }}
                  >
                    {it.price}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </SectionShell>
      )

    case 'plans':
      return (
        <SectionShell id={id} title={s.title} blurb={s.note} t={t}>
          <ul className="grid md:grid-cols-3 gap-4">
            {s.items.map((p) => (
              <li
                key={p.name}
                className="relative p-6 border flex flex-col"
                style={{
                  backgroundColor: p.highlight ? t.soft : 'transparent',
                  borderColor: p.highlight ? t.accent : t.line,
                  borderWidth: p.highlight ? 2 : 1,
                  borderRadius: t.radius,
                }}
              >
                {p.highlight && (
                  <span
                    className="absolute -top-3 left-5 text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1"
                    style={{
                      backgroundColor: t.accent,
                      color: t.accentInk,
                      borderRadius: t.radius,
                    }}
                  >
                    Más elegido
                  </span>
                )}
                <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                <p className="mb-5">
                  <span className={`${headingFont(t)} text-3xl`}>{p.price}</span>
                  {p.unit && (
                    <span className="text-sm ml-1" style={{ color: t.muted }}>
                      / {p.unit}
                    </span>
                  )}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm leading-snug">
                      <span style={{ color: t.accent }}>
                        <Check />
                      </span>
                      <span style={{ color: t.muted }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </SectionShell>
      )

    case 'features':
      return (
        <SectionShell id={id} title={s.title} t={t}>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5 max-w-4xl">
            {s.items.map((f) => (
              <li key={f.title} className="flex gap-3">
                <span style={{ color: t.accent }}>
                  <Check />
                </span>
                <div>
                  <h3 className="font-semibold text-base mb-1">{f.title}</h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: t.muted }}
                  >
                    {f.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SectionShell>
      )

    case 'gallery':
      return (
        <SectionShell id={id} title={s.title} blurb={s.blurb} t={t}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.items.map((g, i) => (
              <li
                key={g.label}
                className="relative overflow-hidden border min-h-[144px] p-5 flex flex-col justify-end"
                style={{
                  borderColor: t.line,
                  borderRadius: t.radius,
                  background: `linear-gradient(${135 + i * 30}deg, ${t.soft} 0%, ${t.paper} 100%)`,
                }}
              >
                <Motif
                  motif={demo.motif}
                  className="absolute top-4 right-4 w-[48px] opacity-20"
                />
                <h3 className="font-semibold text-base">{g.label}</h3>
                {g.desc && (
                  <p className="text-sm" style={{ color: t.muted }}>
                    {g.desc}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </SectionShell>
      )

    case 'pricelist':
      return (
        <SectionShell id={id} title={s.title} blurb={s.note} t={t}>
          <ul className="max-w-3xl">
            {s.items.map((it) => (
              <li
                key={it.name}
                className="flex items-baseline justify-between gap-4 py-4 border-b"
                style={{ borderColor: t.line }}
              >
                <div>
                  <h3 className="font-semibold text-base">{it.name}</h3>
                  {it.desc && (
                    <p className="text-sm mt-0.5" style={{ color: t.muted }}>
                      {it.desc}
                    </p>
                  )}
                </div>
                <span
                  className="font-mono text-sm md:text-base font-medium whitespace-nowrap shrink-0"
                  style={{ color: t.accent }}
                >
                  {it.price}
                </span>
              </li>
            ))}
          </ul>
        </SectionShell>
      )

    case 'steps':
      return (
        <SectionShell id={id} title={s.title} t={t}>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.steps.map((st, i) => (
              <li key={st.title}>
                <span
                  className="font-mono text-3xl font-medium block mb-2"
                  style={{ color: t.accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-semibold text-base mb-1">{st.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: t.muted }}>
                  {st.desc}
                </p>
              </li>
            ))}
          </ol>
        </SectionShell>
      )

    case 'swatches':
      return (
        <SectionShell id={id} title={s.title} blurb={s.blurb} t={t}>
          <ul
            className="grid grid-cols-2 lg:grid-cols-4 gap-px border"
            style={{ backgroundColor: t.line, borderColor: t.line }}
          >
            {s.items.map((it, i) => (
              <li
                key={it.name}
                className="p-4 md:p-5"
                style={{ backgroundColor: t.paper }}
              >
                <div className="h-[88px] md:h-[104px] mb-4 flex items-center justify-center">
                  <SwatchArt kind={it.swatch} t={t} />
                </div>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1"
                  style={{ color: t.muted }}
                >
                  Nº {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-semibold text-sm md:text-base mb-1">
                  {it.name}
                </h3>
                <p
                  className="text-xs md:text-sm leading-snug"
                  style={{ color: t.muted }}
                >
                  {it.desc}
                </p>
              </li>
            ))}
          </ul>
        </SectionShell>
      )

    case 'quoter':
      return (
        <SectionShell id={id} title={s.title} blurb={s.blurb} t={t}>
          <DemoQuoter demo={demo} products={s.products} sizes={s.sizes} />
        </SectionShell>
      )

    case 'measure':
      return (
        <SectionShell id={id} title={s.title} blurb={s.blurb} t={t}>
          <DemoMeasure demo={demo} products={s.products} glasses={s.glasses} />
        </SectionShell>
      )

    case 'cta':
      return (
        <section id={id} className="px-5 md:px-8 py-4">
          <div
            className="max-w-6xl mx-auto p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:justify-between"
            style={{ backgroundColor: t.accent, borderRadius: t.radius }}
          >
            <p
              className={`${headingFont(t)} text-xl md:text-2xl leading-snug max-w-xl`}
              style={{ color: t.accentInk }}
            >
              {s.text}
            </p>
            <a
              href={waLink(demo)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-semibold text-sm px-6 py-3 transition-transform active:scale-95"
              style={{
                backgroundColor: t.accentInk,
                color: t.accent,
                borderRadius: t.radius,
              }}
            >
              {s.button}
            </a>
          </div>
        </section>
      )
  }
}

export function DemoSections({ demo }: { demo: Demo }) {
  return (
    <>
      {demo.sections.map((s, i) => (
        <RenderSection key={i} s={s} demo={demo} />
      ))}
    </>
  )
}

// ── Testimonials / FAQ / Contact / Footer ────────────────────

export function Testimonials({ demo }: { demo: Demo }) {
  const t = demo.theme
  if (demo.testimonials.length === 0) return null
  return (
    <SectionShell title="Lo que dicen los clientes" t={t}>
      <ul className="grid md:grid-cols-3 gap-4">
        {demo.testimonials.map((ts) => (
          <li
            key={ts.author}
            className="p-6 border flex flex-col"
            style={{ borderColor: t.line, borderRadius: t.radius }}
          >
            <p className="text-sm leading-relaxed flex-1 mb-5">
              “{ts.text}”
            </p>
            <footer>
              <p className="font-semibold text-sm">{ts.author}</p>
              {ts.detail && (
                <p className="text-xs" style={{ color: t.muted }}>
                  {ts.detail}
                </p>
              )}
            </footer>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}

export function Faq({ demo }: { demo: Demo }) {
  const t = demo.theme
  return (
    <SectionShell title="Preguntas frecuentes" t={t}>
      <div className="max-w-3xl">
        {demo.faqs.map((f) => (
          <details
            key={f.q}
            className="group border-b py-4"
            style={{ borderColor: t.line }}
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base">
              {f.q}
              <span
                className="shrink-0 text-xl leading-none transition-transform group-open:rotate-45"
                style={{ color: t.accent }}
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p
              className="text-sm leading-relaxed mt-3 max-w-2xl"
              style={{ color: t.muted }}
            >
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </SectionShell>
  )
}

export function DemoFooter({ demo }: { demo: Demo }) {
  const t = demo.theme
  return (
    <footer
      className="mt-8"
      style={{ backgroundColor: t.ink, color: t.paper }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className={`${headingFont(t)} text-xl mb-2`}>{demo.name}</p>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              {demo.tagline}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3 opacity-60">
              Encuéntranos
            </p>
            <address className="not-italic text-sm opacity-80 leading-relaxed">
              {demo.address !== demo.city && (
                <>
                  {demo.address}
                  <br />
                </>
              )}
              {demo.city}, Región del Maule
              <br />
              <a href={`tel:${demo.phone.replace(/\s/g, '')}`} className="underline underline-offset-2">
                {demo.phone}
              </a>
              {demo.instagram && (
                <>
                  <br />
                  <a
                    href={demo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    @{demo.instagram.replace(/\/$/, '').split('/').pop()}
                  </a>
                </>
              )}
              {demo.facebook && (
                <>
                  <br />
                  <a
                    href={demo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Facebook
                  </a>
                </>
              )}
            </address>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3 opacity-60">
              Horario
            </p>
            <ul className="text-sm opacity-80 space-y-1">
              {demo.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 max-w-[240px]">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs opacity-60"
          style={{ borderColor: `${t.paper}33` }}
        >
          <p>
            © {new Date().getFullYear()} {demo.name} · {demo.city}, Chile
          </p>
          <p>{demo.rubro}</p>
        </div>
      </div>
    </footer>
  )
}
