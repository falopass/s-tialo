import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({ src: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900' })
const body = localFont({ src: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

export const metadata: Metadata = demoMetadata({
  slug: 'jaime-acuna-y-cia-ltda',
  title: 'Jaime Acuña y Cía. — Contabilidad y auditoría en Talca',
  description:
    'Estudio de contabilidad y auditoría en Talca: contabilidad mensual, declaraciones de impuestos, remuneraciones y auditoría para pymes. Consulta por WhatsApp.',
})

const C = {
  ink: '#10233A',
  navy: '#16324F',
  steel: '#3E5A7A',
  accent: '#2F7FD1',
  paper: '#F3F5F7',
  card: '#FFFFFF',
  muted: '#4A5A6C',
  line: 'rgba(16,35,58,0.12)',
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajo', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  { n: '01', t: 'Contabilidad mensual', d: 'Libros al día, cierre de mes y reportes para que tomes decisiones con números reales.' },
  { n: '02', t: 'Declaraciones de impuestos', d: 'IVA, renta y formularios del SII presentados en plazo y sin sustos.' },
  { n: '03', t: 'Remuneraciones y personal', d: 'Liquidaciones de sueldo, contratos y finiquitos alineados al código del trabajo.' },
  { n: '04', t: 'Auditoría', d: 'Revisión de estados financieros y procesos para bancos, licitaciones o socios.' },
]

const PASOS = [
  { n: '1', t: 'Conversamos', d: 'Cuéntame tu situación por WhatsApp o correo; definimos qué necesita tu empresa.' },
  { n: '2', t: 'Ordeno los números', d: 'Regularizo la contabilidad, los impuestos y las remuneraciones pendientes.' },
  { n: '3', t: 'Reporto cada mes', d: 'Cierres mensuales con indicadores claros, sin contabilés innecesario.' },
]

function Bosquejo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure className="relative overflow-hidden rounded-xl" style={{ border: `1.5px dashed ${C.steel}` }}>
      <figcaption className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest" style={{ backgroundColor: C.ink, color: '#FFFFFF', fontFamily: 'monospace' }}>
        bosquejo · {label}
      </figcaption>
      {children}
    </figure>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'accent' | 'ink' | 'paper'
  external?: boolean
}) {
  const st =
    tone === 'accent'
      ? { backgroundColor: C.accent, color: '#FFFFFF' }
      : tone === 'ink'
        ? { backgroundColor: C.ink, color: '#FFFFFF' }
        : { backgroundColor: C.paper, color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.line}` }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${body.className} inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-semibold transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function JaimeAcunaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name="J. Acuña y Cía."
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold tracking-wide`}
        theme={{ over: 'light', bar: 'rgba(243,245,247,0.94)', ink: C.ink, line: C.line, btnBg: C.accent, btnInk: '#FFFFFF' }}
        ctaLabel="Consultar"
      />

      {/* HERO — tipográfico, motivo libro mayor */}
      <section id="inicio" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.55]" style={{ backgroundImage: `repeating-linear-gradient(180deg, transparent 0 31px, ${C.line} 31px 32px)` }} />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-[1.15fr_1fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} inline-flex items-center gap-2 px-3 py-1 rounded text-xs uppercase tracking-widest`} style={{ backgroundColor: C.navy, color: '#FFFFFF' }}>
                Contabilidad y auditoría · Talca
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} mt-5 text-[44px] leading-[1.02] md:text-[72px] font-bold tracking-tight`}>
                Tus números en regla,
                <br />
                <span style={{ color: C.accent }}>tu pyme en orden</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                {BIZ.legalName} es un estudio contable en {BIZ.city} que acompaña a
                pymes y emprendedores con la contabilidad mensual, los impuestos
                y las remuneraciones de su negocio.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="accent">Consultar por WhatsApp</Btn>
                <Btn href="#servicios" tone="paper" external={false}>Ver servicios</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            {/* bosquejo visual: tarjeta tipo balance — sin foto real disponible */}
            <Bosquejo label="ilustración, sin fotos reales">
              <div className="p-6 md:p-8" style={{ backgroundColor: C.card }}>
                <div className="flex items-baseline justify-between" style={{ borderBottom: `2px solid ${C.ink}`, paddingBottom: 10 }}>
                  <p className={`${mono.className} text-[11px] uppercase tracking-widest`} style={{ color: C.steel }}>Balance simplificado</p>
                  <p className={`${mono.className} text-[11px]`} style={{ color: C.steel }}>CLP</p>
                </div>
                {[
                  ['ACTIVO', '12.400.000', C.ink],
                  ['PASIVO', '4.800.000', C.muted],
                  ['PATRIMONIO', '7.600.000', C.accent],
                ].map(([k, v, col]) => (
                  <div key={k} className="flex items-baseline justify-between py-3" style={{ borderBottom: `1px solid ${C.line}` }}>
                    <span className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.steel }}>{k}</span>
                    <span className={`${display.className} text-2xl md:text-3xl font-bold tabular-nums`} style={{ color: col }}>{v}</span>
                  </div>
                ))}
                <p className="mt-4 text-xs leading-snug" style={{ color: C.muted }}>
                  Ilustración de una cartilla de balances; los montos son de ejemplo.
                </p>
              </div>
            </Bosquejo>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS — numeración mono */}
      <section id="servicios" className="py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.accent }}>Servicios</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl font-bold tracking-tight leading-[0.98]`}>
              Lo que puedo <span style={{ color: C.accent }}>llevar por ti</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid md:grid-cols-2 gap-4">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <li className="h-full rounded-xl p-6" style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                  <p className={`${mono.className} text-sm`} style={{ color: C.accent }}>{s.n}</p>
                  <h3 className={`${display.className} mt-2 text-2xl font-bold`}>{s.t}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: C.muted }}>{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.navy }}>
        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: '#9CCBFF' }}>Cómo trabajo</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl font-bold tracking-tight leading-[0.98]`} style={{ color: '#FFFFFF' }}>
              Simple, mensual, <span style={{ color: '#9CCBFF' }}>sin sorpresas</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid md:grid-cols-3 gap-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <li className="h-full rounded-xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)' }}>
                  <p className={`${display.className} text-4xl font-bold`} style={{ color: '#9CCBFF' }}>{p.n}</p>
                  <h3 className={`${display.className} mt-3 text-xl font-bold`} style={{ color: '#FFFFFF' }}>{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={140}>
            <div className="mt-10 rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4" style={{ backgroundColor: 'rgba(255,255,255,0.09)', border: '1px dashed rgba(255,255,255,0.35)' }}>
              <p className={`${mono.className} text-xs uppercase tracking-widest shrink-0`} style={{ color: '#9CCBFF' }}>
                bosquejo
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Este estudio no tiene fotos públicas verificables en su ficha o redes: por eso
                esta página usa solo tipografía y bloques ilustrativos marcados como bosquejo,
                sin inventar fachadas ni retratos.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO + MAPA (zona Talca) */}
      <section id="contacto" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.accent }}>Contacto</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl font-bold tracking-tight leading-[0.98]`}>
              Escríbeme <span style={{ color: C.accent }}>directamente</span>
            </h2>
            <ul className="mt-6 space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <span className={`${mono.className} text-xs uppercase tracking-widest w-20 shrink-0`} style={{ color: C.steel }}>WhatsApp</span>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold underline tap-44" style={{ color: C.accent }}>{BIZ.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className={`${mono.className} text-xs uppercase tracking-widest w-20 shrink-0`} style={{ color: C.steel }}>Correo</span>
                <a href={`mailto:${BIZ.email}`} className="font-semibold underline break-all tap-44" style={{ color: C.accent }}>{BIZ.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className={`${mono.className} text-xs uppercase tracking-widest w-20 shrink-0`} style={{ color: C.steel }}>Oficina</span>
                <span style={{ color: C.muted }}>{BIZ.address}, {BIZ.city}, Región del Maule</span>
              </li>
            </ul>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="accent">Abrir WhatsApp</Btn>
              <Btn href={MAPS_URL} tone="paper">Cómo llegar</Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(16,35,58,0.15)', border: `6px solid ${C.navy}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de la zona de ${BIZ.city}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
            <p className="mt-3 text-xs" style={{ color: C.muted }}>
              El estudio atiende en {BIZ.address}, {BIZ.city} — coordina tu visita por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.accent }}>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className={`${display.className} text-4xl md:text-6xl font-bold tracking-tight leading-[0.98]`} style={{ color: '#FFFFFF' }}>
            ¿Ordenamos tu contabilidad?
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Una conversación basta para saber qué necesita tu empresa.
          </p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="ink">Escribir por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.ink, color: 'rgba(243,245,247,0.7)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl font-bold`} style={{ color: '#FFFFFF' }}>
              {BIZ.legalName}
            </p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
