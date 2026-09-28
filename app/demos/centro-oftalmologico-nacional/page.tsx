import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EXAMEN, MAPS_URL, MAPS_EMBED, FACEBOOK_URL, HOURS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  paper: '#F4F7F9',
  card: '#FFFFFF',
  navy: '#123A5C',
  deep: '#0B2740',
  cyan: '#4FB7D9',
  // versión oscura del acento: cumple AA en texto chico sobre fondo claro
  cyanDeep: '#1B6D8C',
  ink: '#1E2A33',
  muted: '#54636E',
  line: 'rgba(18,58,92,0.15)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-oftalmologico-nacional',
  title: 'Centro Oftalmológico Nacional · Oftalmología y óptica en Talca',
  description:
    'Oftalmólogo y óptica en Calle 6 Oriente 1158, centro de Talca: consulta oftalmológica, medición de vista y armazones. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La óptica', href: '#la-optica' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
]

// Optotipo estilo cartilla de Snellen: solo tipografía, sin foto de relleno.
const CHART_ROWS = [
  { letters: 'E', size: '3.4rem', track: '0.06em' },
  { letters: 'F P', size: '2.5rem', track: '0.14em' },
  { letters: 'T O Z', size: '1.9rem', track: '0.18em' },
  { letters: 'L P E D', size: '1.45rem', track: '0.2em' },
  { letters: 'P E C F D', size: '1.1rem', track: '0.22em' },
  { letters: 'E D F C Z P', size: '0.85rem', track: '0.24em' },
]

const SERVICIOS = [
  {
    name: 'Consulta oftalmológica',
    desc: 'Atención con tecnólogos médicos en oftalmología, con la opción de pagar con bono FONASA según su descripción pública.',
    note: 'agenda por WhatsApp',
  },
  {
    name: 'Medición de vista',
    desc: 'Examen de refracción para saber si necesitas lentes y con qué graduación.',
    note: 'examen',
  },
  {
    name: 'Óptica y armazones',
    desc: 'La óptica del mismo centro: vitrina de armazones y lentes, como se ve en sus fotos reales.',
    note: 'vitrina en el local',
  },
  {
    name: 'Lentes a pedido',
    desc: 'Con tu receta o tu medición reciente, cotizas tus lentes directo por WhatsApp.',
    note: 'cotización directa',
  },
]

// Fotos reales de la vitrina publicadas en su página de Facebook (160px)
const ARMAZONES = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `${IMG}/armazon${n}.webp`,
  alt: `Vitrina de armazones y lentes del Centro Oftalmológico Nacional, foto ${n} de su Facebook`,
}))

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.cyan : C.cyanDeep }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: 'currentColor' }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

export default function CentroOftalmologicoNacionalPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,247,249,0.95)',
          ink: C.navy,
          line: C.line,
          btnBg: C.navy,
          btnInk: '#F4F7F9',
        }}
      />

      {/* ── Hero tipográfico con optotipo ── */}
      <section
        id="inicio"
        className="border-b"
        style={{ borderColor: C.line, backgroundColor: C.paper }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[120px] pb-14 md:pb-20 grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Oftalmólogo y óptica · Centro de Talca · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.04] text-[clamp(2.6rem,9vw,5.4rem)] mb-6`}
              style={{ color: C.navy }}
            >
              Ver bien
              <br />
              <em className="not-italic" style={{ color: C.cyanDeep }}>empieza por medirse</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: C.muted }}>
              Consulta oftalmológica, medición de vista y óptica en un
              mismo lugar, en pleno centro de Talca. La agenda es directa:
              un mensaje y quedas con hora.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123A5C]`}
                style={{ backgroundColor: C.navy, color: '#F4F7F9' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3 rounded-full border transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123A5C]`}
                style={{ borderColor: C.line, color: C.navy }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>

          {/* Cartilla optotipo */}
          <Reveal delay={140}>
            <div
              className="rounded-2xl border p-5 md:p-7 text-center select-none"
              style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 16px 44px rgba(11,39,64,0.10)' }}
              role="img"
              aria-label="Cartilla de medición de vista con letras que se hacen cada vez más pequeñas"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-bold mb-5" style={{ color: C.muted }}>
                ¿Hasta qué línea lees?
              </p>
              {CHART_ROWS.map((r) => (
                <p
                  key={r.letters}
                  className={`${display.className} leading-[1.35]`}
                  style={{ fontSize: r.size, letterSpacing: r.track, color: C.ink }}
                  aria-hidden="true"
                >
                  {r.letters}
                </p>
              ))}
              <div className="mt-5 pt-4 border-t flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold" style={{ borderColor: C.line, color: C.muted }}>
                <span>Medición de vista</span>
                <span style={{ color: C.cyanDeep }}>6 Oriente 1158</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: C.muted }}>
            <span>Calle 6 Oriente 1158, Talca</span>
            <span>Consulta + óptica en un mismo lugar</span>
            <span>Bono FONASA</span>
            <span className="hidden md:inline" style={{ color: C.cyanDeep }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-4`} style={{ color: C.navy }}>
              De la consulta
              <br />
              a tus lentes
            </h2>
            <p className="text-sm md:text-base max-w-xl leading-relaxed mb-8 md:mb-10" style={{ color: C.muted }}>
              La descripción pública del centro anuncia atención con
              tecnólogos médicos en oftalmología y pago con bono FONASA;
              el detalle de cada servicio se confirma al agendar.
            </p>
          </Reveal>
          <ul>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <li
                  className="grid grid-cols-[44px_1fr_auto] md:grid-cols-[64px_1fr_auto] gap-4 md:gap-8 items-baseline border-t py-5 md:py-6"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className={`${display.className} text-xl md:text-3xl`}
                    style={{ color: C.cyanDeep }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`${display.className} text-xl md:text-2xl leading-tight mb-1`} style={{ color: C.navy }}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-lg" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-bold text-right shrink-0" style={{ color: C.muted }}>
                    {s.note}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <a
              href={WA_LINK_EXAMEN}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-8 font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123A5C]`}
              style={{ backgroundColor: C.navy, color: '#F4F7F9' }}
            >
              Consultar por una medición
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La óptica: fotos reales de la vitrina ── */}
      <section id="la-optica" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>La óptica</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-4`} style={{ color: '#F4F7F9' }}>
              Armazones que
              <br />
              se ven en persona
            </h2>
            <p className="text-sm md:text-base max-w-xl leading-relaxed mb-9" style={{ color: 'rgba(244,247,249,0.75)' }}>
              Fotos reales de la vitrina, publicadas por el centro en su
              página de Facebook. El stock y los modelos disponibles se
              ven en el local o consultando por WhatsApp.
            </p>
          </Reveal>
          <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 md:gap-3 mb-9">
            {ARMAZONES.map((a, i) => (
              <Reveal key={a.src} delay={i * 50}>
                <li className="relative aspect-square rounded-lg overflow-hidden border" style={{ borderColor: 'rgba(244,247,249,0.2)' }}>
                  <Image
                    src={a.src}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 1024px) 140px, 30vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4FB7D9]"
              style={{ color: C.cyan }}
            >
              Ver más en su Facebook →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Horarios y ubicación ── */}
      <section id="horarios" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Horarios de la ficha</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.navy }}>
              En pleno centro,
              <br />
              con hora
            </h2>
            <dl className="rounded-2xl border overflow-hidden mb-7" style={{ backgroundColor: C.card, borderColor: C.line }}>
              {HOURS.map((h) => (
                <div key={h.d} className="flex items-baseline justify-between gap-4 px-5 py-4 border-b last:border-b-0" style={{ borderColor: C.line }}>
                  <dt className="text-sm font-semibold" style={{ color: C.ink }}>{h.d}</dt>
                  <dd className="text-sm text-right" style={{ color: C.muted }}>{h.h}</dd>
                </div>
              ))}
            </dl>
            <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.muted }}>
              <strong className="block mb-1 font-semibold" style={{ color: C.ink }}>{BIZ.address}, {BIZ.city}</strong>
              Oficina 11, segundo piso · centro de Talca.
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B6D8C]" style={{ color: C.cyanDeep }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123A5C]`}
                style={{ backgroundColor: C.navy, color: '#F4F7F9' }}
              >
                Agendar hora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123A5C]`}
                style={{ borderColor: C.line, color: C.navy }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line, boxShadow: '0 16px 44px rgba(11,39,64,0.12)' }}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Letrero luminoso del Centro Oftalmológico Nacional en Calle 6 Oriente, Talca"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-4" style={{ backgroundColor: C.card }}>
                <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                  Foto real del letrero del centro, publicada en su Facebook. El
                  local está en el segundo piso del edificio.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mapa + cierre ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="rounded-2xl overflow-hidden min-h-[320px] border" style={{ borderColor: C.line }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px] md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F4F7F9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 border-t" style={{ borderColor: 'rgba(244,247,249,0.14)' }}>
          <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-5">
            <div>
              <p className={`${display.className} text-xl mb-1`}>{BIZ.name}</p>
              <p className="text-xs" style={{ color: 'rgba(244,247,249,0.65)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(244,247,249,0.65)' }}>
              <p className="font-semibold mb-1" style={{ color: 'rgba(244,247,249,0.9)' }}>Contacto</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4FB7D9]" style={{ color: C.cyan }}>
                WhatsApp {BIZ.phoneDisplay}
              </a>
              <br />
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4FB7D9]" style={{ color: C.cyan }}>
                Facebook del centro
              </a>
            </div>
          </div>
          <p className="text-[11px] mt-5 pt-4 border-t" style={{ color: 'rgba(244,247,249,0.5)', borderColor: 'rgba(244,247,249,0.14)' }}>
            Sitio de ejemplo preparado por Sitiazo con datos públicos de la ficha de Google y el Facebook del centro.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
