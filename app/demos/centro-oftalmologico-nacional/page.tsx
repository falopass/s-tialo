import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, FACEBOOK_URL, HOURS, IMG } from './content'
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
  deep: '#161435',
  panel: '#232052',
  panelSoft: '#2E2C66',
  violet: '#9AA3F5',
  violetSoft: '#CDD3FF',
  ink: '#F0F1FB',
  muted: '#A6AAD0',
  mutedDark: '#565879',
  paper: '#F5F5FB',
  line: 'rgba(240,241,251,0.16)',
  linePaper: 'rgba(22,20,53,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-oftalmologico-nacional',
  title: 'Centro Oftalmológico Nacional — Oftalmología en Talca',
  description:
    'Oftalmología en Calle 6 Oriente 1158, Talca centro. Atención de lunes a sábado — agenda tu consulta por WhatsApp.',
  image: '/demos/centro-oftalmologico-nacional/fachada.webp',
})

const NAV_LINKS = [
  { label: 'Atención', href: '#atencion' },
  { label: 'La vitrina', href: '#vitrina' },
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

const ARMAZONES = [1, 2, 3, 4, 5, 6, 7]

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
      style={{ color: onPaper ? C.mutedDark : C.violet }}
    >
      <EyeIcon className="w-[18px] h-[18px]" color={onPaper ? C.panelSoft : C.violet} />
      {children}
    </p>
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
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(22,20,53,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.violet,
          btnInk: C.deep,
        }}
      />

      {/* ── Hero: ficha clínica oscura + letrero real ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(700px 420px at 82% 12%, rgba(154,163,245,0.16), transparent 65%)',
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
              atendida en el <em style={{ color: C.violet }}>centro de Talca</em>
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
                style={{ backgroundColor: C.violet, color: C.deep }}
              >
                Agendar consulta
              </a>
              <a
                href="#horarios"
                className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full border tap-44 transition-colors hover:bg-white/5`}
                style={{ borderColor: C.violet, color: C.violet }}
              >
                Ver horarios
              </a>
            </div>
            <dl className={`${mono.className} grid grid-cols-2 gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] border-t pt-5 max-w-md`} style={{ borderColor: C.line }}>
              <dt style={{ color: C.muted }}>Dirección</dt>
              <dd className="text-right" style={{ color: C.violetSoft }}>6 Ote. 1158, of. 11</dd>
              <dt style={{ color: C.muted }}>Ciudad</dt>
              <dd className="text-right" style={{ color: C.violetSoft }}>{BIZ.city}</dd>
              <dt style={{ color: C.muted }}>Contacto</dt>
              <dd className="text-right" style={{ color: C.violetSoft }}>{BIZ.phoneDisplay}</dd>
              <dt style={{ color: C.muted }}>Atención</dt>
              <dd className="text-right" style={{ color: C.violetSoft }}>Lun a sáb</dd>
            </dl>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border shadow-2xl rotate-[1.2deg]" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Letrero interior del Centro Oftalmológico Nacional en Calle 6 Oriente, Talca"
                    fill
                    priority
                    sizes="(min-width: 768px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-3.5" style={{ backgroundColor: C.panel }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.violetSoft }}>
                    El letrero, en el piso 2
                  </p>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} text-[10px] uppercase tracking-[0.16em] underline underline-offset-4 tap-44`}
                    style={{ color: C.muted }}
                  >
                    Facebook →
                  </a>
                </div>
              </div>
              <span className="absolute -top-5 -left-3 w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 shadow-xl bg-white" style={{ borderColor: C.deep }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- logo real de su Facebook */}
                <img src={`${IMG}/logo.webp`} alt="" className="w-full h-full object-cover" aria-hidden="true" />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La vitrina: armazones reales ── */}
      <section id="vitrina" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: 'rgba(35,32,82,0.35)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <Eyebrow>La vitrina</Eyebrow>
                <h2 className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.ink }}>
                  Armazones, tal como los muestran ellos
                </h2>
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] max-w-[220px] text-right`} style={{ color: C.muted }}>
                Fotos reales de su Facebook
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5 md:gap-3">
            {ARMAZONES.map((n, i) => (
              <Reveal key={n} delay={i * 60}>
                <div className="relative aspect-square rounded-lg overflow-hidden border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/armazon${n}.webp`}
                    alt={`Armazones en la vitrina del Centro Oftalmológico Nacional (foto ${n})`}
                    fill
                    sizes="(min-width: 640px) 13vw, 23vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
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
                Su ficha indica que trabajan con bono FONASA.
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
                  <span className={`${mono.className} block text-[11px] font-semibold tracking-[0.2em] mb-5`} style={{ color: C.mutedDark }}>
                    {f.num}
                  </span>
                  <h3 className={`${display.className} text-2xl leading-tight mb-3`} style={{ color: C.deep }}>
                    {f.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: C.mutedDark }}>
                    {f.desc}
                  </p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-2`} style={{ color: C.panelSoft }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#4B3FBF' }} aria-hidden="true" />
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
              <em style={{ color: C.violet }}>en dos jornadas</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm mb-8" style={{ color: C.muted }}>
              Horario real de su ficha pública. Entre semana atiende con
              colación intermedia; los sábados solo en la mañana.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
              style={{ backgroundColor: C.violet, color: C.deep }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: C.line }}>
              <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] font-semibold`} style={{ color: C.violet }}>
                  Cartilla de horarios
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  Google Maps
                </p>
              </div>
              {HOURS.map((h) => (
                <div
                  key={h.d}
                  className="flex items-center justify-between gap-4 px-5 py-4 border-b last:border-0"
                  style={{ borderColor: C.line, backgroundColor: 'rgba(35,32,82,0.4)' }}
                >
                  <span className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>
                    {h.d}
                  </span>
                  <span className={`${mono.className} text-xs md:text-sm text-right`} style={{ color: h.h === 'Cerrado' ? C.muted : C.violetSoft }}>
                    {h.h}
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
                style={{ backgroundColor: C.deep, color: C.violet }}
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
      <footer style={{ backgroundColor: '#0E0C26' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid md:grid-cols-2 gap-4 md:gap-5 items-start">
          <div>
            <p className={`${display.className} text-2xl mb-2 flex items-center gap-3`} style={{ color: C.ink }}>
              <EyeIcon className="w-5 h-5" color={C.violet} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(240,241,251,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(240,241,251,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tap-44">
              Facebook
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(240,241,251,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-xs leading-relaxed" style={{ color: 'rgba(240,241,251,0.72)' }}>
            Servicios de muestra; nombre, dirección, teléfono, horario y
            fotos (letrero y armazones) son públicos, de su ficha y su
            Facebook.
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
