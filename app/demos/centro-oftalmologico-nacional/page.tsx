import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  deep: '#07222B',
  panel: '#0C313D',
  panelSoft: '#0F3A47',
  cian: '#4FD8D2',
  cianSoft: '#A8EDEA',
  ink: '#E9F5F5',
  muted: '#9CC4C6',
  mutedDark: '#3E6669',
  paper: '#F3FAF9',
  line: 'rgba(233,245,245,0.16)',
  linePaper: 'rgba(7,34,43,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-oftalmologico-nacional',
  title: 'Centro Oftalmológico Nacional — Oftalmología en Talca',
  description:
    'Oftalmología en Calle 6 Oriente 1158, Talca centro. Atención de lunes a sábado — agenda tu consulta por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'Atención', href: '#atencion' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const FICHAS = [
  {
    num: 'F-01',
    name: 'Consulta oftalmológica',
    desc: 'Evaluación general de la vista: molestias, visión borrosa, cansancio visual o control de rutina.',
    datum: 'Agenda por WhatsApp',
  },
  {
    num: 'F-02',
    name: 'Medición de vista',
    desc: 'Examen de agudeza visual para receta de lentes, el paso antes de encargar tus anteojos.',
    datum: 'Receta para óptica',
  },
  {
    num: 'F-03',
    name: 'Control y seguimiento',
    desc: 'Controles periódicos para quienes ya usan lentes o siguen un tratamiento en curso.',
    datum: 'Controles periódicos',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00 a 13:30 · 15:00 a 18:00' },
  { days: 'Sábado', time: '10:00 a 13:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

const OPTOTIPO = ['E', 'F P', 'T O Z', 'L P E D', 'P E C F D', 'E D F C Z P', 'F E L O P Z D']

function EyeIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 12 C6 5.5, 18 5.5, 21.5 12 C18 18.5, 6 18.5, 2.5 12 Z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  )
}

function Eyebrow({ children, onPaper = false }: { children: React.ReactNode; onPaper?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color: onPaper ? C.mutedDark : C.cian }}
    >
      <EyeIcon className="w-[18px] h-[18px]" color={onPaper ? C.panelSoft : C.cian} />
      {children}
    </p>
  )
}

function BosquejoTag({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-block text-[9px] uppercase tracking-[0.2em] font-semibold px-2 py-0.5 rounded-sm border border-dashed`}
      style={{
        color: dark ? C.deep : C.cian,
        borderColor: dark ? 'rgba(7,34,43,0.55)' : 'rgba(79,216,210,0.6)',
        backgroundColor: dark ? 'rgba(79,216,210,0.55)' : 'rgba(79,216,210,0.12)',
      }}
    >
      Bosquejo
    </span>
  )
}

export default function CentroOftalmologicoNacionalPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.deep, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(7,34,43,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.cian,
          btnInk: C.deep,
        }}
      />

      {/* ── Hero: ficha clínica oscura + optotipo (bosquejo) ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(700px 420px at 82% 12%, rgba(79,216,210,0.14), transparent 65%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.muted }}>
              Expediente — oftalmología · Talca centro
            </p>
            <h1 className={`${display.className} text-[clamp(2.4rem,8vw,4.4rem)] leading-[1.08] mb-6`} style={{ color: C.ink }}>
              Tu vista,
              <br />
              atendida en el <em style={{ color: C.cian }}>centro de Talca</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              {BIZ.name} atiende en {BIZ.address}. Agenda tu consulta
              directo por WhatsApp: sin formularios, sin esperas de
              call center.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.cian, color: C.deep }}
              >
                Agendar consulta
              </a>
              <a
                href="#horarios"
                className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full border tap-44 transition-colors hover:bg-white/5`}
                style={{ borderColor: C.cian, color: C.cian }}
              >
                Ver horarios
              </a>
            </div>
            <dl className={`${mono.className} grid grid-cols-2 gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] border-t pt-5 max-w-md`} style={{ borderColor: C.line }}>
              <dt style={{ color: C.mutedDark }}>Dirección</dt>
              <dd className="text-right" style={{ color: C.cianSoft }}>6 Ote. 1158, of. 11</dd>
              <dt style={{ color: C.mutedDark }}>Ciudad</dt>
              <dd className="text-right" style={{ color: C.cianSoft }}>{BIZ.city}</dd>
              <dt style={{ color: C.mutedDark }}>Contacto</dt>
              <dd className="text-right" style={{ color: C.cianSoft }}>{BIZ.phoneDisplay}</dd>
              <dt style={{ color: C.mutedDark }}>Atención</dt>
              <dd className="text-right" style={{ color: C.cianSoft }}>Lun a sáb</dd>
            </dl>
          </Reveal>
          <Reveal delay={140}>
            {/* Escena bosquejo: optotipo de examen visual */}
            <div className="relative rounded-2xl border p-1.5 shadow-2xl" style={{ borderColor: C.line, backgroundColor: C.panel }}>
              <div className="absolute -top-3 left-5 z-10"><BosquejoTag /></div>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: C.paper }}>
                <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-dashed" style={{ borderColor: C.linePaper }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] font-semibold`} style={{ color: C.mutedDark }}>
                    Optotipo — examen visual
                  </p>
                  <EyeIcon className="w-5 h-5" color={C.panelSoft} />
                </div>
                <div className="px-5 py-6 flex flex-col items-center gap-3" aria-hidden="true">
                  {OPTOTIPO.map((row, i) => (
                    <p
                      key={row}
                      className={`${display.className} leading-none tracking-[0.3em] whitespace-nowrap`}
                      style={{ color: C.deep, fontSize: `${3.4 - i * 0.42}rem` }}
                    >
                      {row}
                    </p>
                  ))}
                </div>
                <p className={`${mono.className} px-5 pb-4 text-[9px] uppercase tracking-[0.18em] text-center`} style={{ color: C.mutedDark }}>
                  Escena referencial — al publicar va una foto real del centro
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La atención: fichas ── */}
      <section id="atencion" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow onPaper>La atención</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08]`} style={{ color: C.deep }}>
                Oftalmología directa,
                <br />
                <em style={{ color: C.panelSoft }}>sin vueltas</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedDark }}>
                Servicios de muestra para mostrar cómo se vería el sitio:
                al publicar va la lista real de prestaciones del centro.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
            {FICHAS.map((f, i) => (
              <Reveal key={f.num} delay={i * 90}>
                <article
                  className="relative rounded-xl border bg-white p-6 md:p-7 h-full shadow-sm"
                  style={{ borderColor: C.linePaper }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`${mono.className} text-[11px] font-semibold tracking-[0.2em]`} style={{ color: C.mutedDark }}>
                      {f.num}
                    </span>
                    <BosquejoTag dark />
                  </div>
                  <h3 className={`${display.className} text-2xl leading-tight mb-3`} style={{ color: C.deep }}>
                    {f.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: C.mutedDark }}>
                    {f.desc}
                  </p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-2`} style={{ color: C.panelSoft }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2AA89F' }} aria-hidden="true" />
                    {f.datum}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horarios: cartilla ── */}
      <section id="horarios" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow>Horarios de atención</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-5`} style={{ color: C.ink }}>
              De lunes a sábado,
              <br />
              <em style={{ color: C.cian }}>en dos jornadas</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm mb-8" style={{ color: C.muted }}>
              Horario real de la ficha pública del centro. Entre semana
              atiende con colación intermedia; los sábados solo en la
              mañana.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
              style={{ backgroundColor: C.cian, color: C.deep }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: C.line }}>
              <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] font-semibold`} style={{ color: C.cian }}>
                  Cartilla de horarios
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedDark }}>
                  Google Maps
                </p>
              </div>
              {HORAS.map((h) => (
                <div
                  key={h.days}
                  className="flex items-center justify-between gap-4 px-5 py-4 border-b last:border-0"
                  style={{ borderColor: C.line, backgroundColor: 'rgba(12,49,61,0.4)' }}
                >
                  <span className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>
                    {h.days}
                  </span>
                  <span className={`${mono.className} text-xs md:text-sm text-right`} style={{ color: h.time === 'Cerrado' ? C.mutedDark : C.cianSoft }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow onPaper>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: C.deep }}>
              Calle 6 Oriente 1158,
              <br />
              <em style={{ color: C.panelSoft }}>Talca centro</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.mutedDark }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.mutedDark }}>
              A pasos de la Alameda y el Mercado de Talca. El acceso es
              por la entrada del edificio: el centro atiende en el piso 2.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 tap-44`}
                style={{ backgroundColor: C.deep, color: C.cian }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full border-2 transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.deep, color: C.deep }}
              >
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-xl overflow-hidden border shadow-lg h-full min-h-[320px] bg-white" style={{ borderColor: C.linePaper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, Calle 6 Ote. 1158, ${BIZ.city}`}
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
      <footer style={{ backgroundColor: '#051820' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid md:grid-cols-2 gap-4 md:gap-5 items-start">
          <div>
            <p className={`${display.className} text-2xl mb-2 flex items-center gap-3`} style={{ color: C.ink }}>
              <EyeIcon className="w-5 h-5" color={C.cian} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(233,245,245,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(233,245,245,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(233,245,245,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-xs leading-relaxed" style={{ color: 'rgba(233,245,245,0.72)' }}>
            Servicios e imágenes son bosquejos de muestra; nombre,
            dirección, teléfono y horario son públicos.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
