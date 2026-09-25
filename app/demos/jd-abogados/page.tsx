import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const body = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'] })

const C = {
  paper: '#F7F5F0',
  paperDeep: '#EFEAE0',
  graphite: '#23262B',
  ink: '#1B1E22',
  gold: '#A5885A',
  goldSoft: '#E4DCC8',
  muted: '#6E6E63',
  line: 'rgba(35,38,43,0.16)',
}

export const metadata: Metadata = {
  title: 'J&D Abogados - Estudio jurídico en Talca',
  description:
    'Estudio de abogados en Talca. Escríbenos por WhatsApp para una primera orientación.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Áreas', href: '#areas' },
  { label: 'Primera consulta', href: '#consulta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Oficina', href: '#oficina' },
]

const AREAS = [
  {
    name: 'Derecho civil',
    desc: 'Contratos, obligaciones, indemnizaciones y disputas entre personas.',
  },
  {
    name: 'Derecho de familia',
    desc: 'Divorcio, pensión de alimentos, cuidado personal y mediación.',
  },
  {
    name: 'Derecho laboral',
    desc: 'Despidos, finiquitos, tutela laboral y asesoría a trabajadores.',
  },
  {
    name: 'Derecho penal',
    desc: 'Defensa penal y querellas, con acompañamiento en cada etapa.',
  },
  {
    name: 'Cobranzas',
    desc: 'Recupero de deudas por vía judicial y extrajudicial.',
  },
  {
    name: 'Contratos y sociedades',
    desc: 'Constitución de sociedades y redacción de contratos a la medida.',
  },
]

const FAQS = [
  {
    q: '¿Cómo pido una primera orientación?',
    a: 'Escríbenos por WhatsApp contando brevemente tu caso. Te indicamos los pasos a seguir y agendamos si corresponde.',
  },
  {
    q: '¿Qué documentos necesito para la primera reunión?',
    a: 'Cédula de identidad y cualquier documento relacionado con tu caso: contratos, cartas, sentencias o antecedentes.',
  },
  {
    q: '¿Atienden solo en Talca?',
    a: 'La oficina está en Talca, pero muchos trámites pueden coordinarse a distancia. Consulta tu caso por WhatsApp.',
  },
  {
    q: '¿Dónde está la oficina?',
    a: `En ${BIZ.address}, frente a la plaza de ${BIZ.city}.`,
  },
]

/** Balanza de línea fina, marca de agua del hero */
function ScalesMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3 v17" />
      <path d="M7 20.5 h10" />
      <path d="M4.5 6.5 h15" />
      <path d="M6.5 6.5 L4 12.5 a2.8 2.8 0 0 0 5 0 L6.5 6.5" />
      <path d="M17.5 6.5 L15 12.5 a2.8 2.8 0 0 0 5 0 L17.5 6.5" />
      <circle cx="12" cy="4.5" r="1.2" />
    </svg>
  )
}

export default function JdAbogadosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,245,240,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.graphite,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero sobrio ── */}
      <section id="inicio" className="relative overflow-hidden">
        <ScalesMark className="absolute -right-10 top-24 w-[280px] md:w-[420px] opacity-[0.07] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <Reveal>
            <div
              className="flex items-center justify-between gap-4 border-t border-b py-3 text-[11px] md:text-xs uppercase tracking-[0.24em]"
              style={{ borderColor: C.gold, color: C.muted }}
            >
              <span>Estudio jurídico</span>
              <span className="hidden sm:inline">Talca, Chile</span>
              <span>{BIZ.ratingLabel} en Google</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className={`${display.className} font-semibold leading-[1.04] tracking-[-0.01em] text-[clamp(2.6rem,8vw,5.6rem)] mt-10 md:mt-14 mb-6`}
            >
              Criterio jurídico
              <br />
              para tu caso
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: C.muted }}>
              Asesoría y representación legal en Talca, con trato directo
              y explicaciones en simple. Escríbenos por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-7 py-3.5 transition-transform active:scale-95"
                style={{ backgroundColor: C.graphite, color: '#fff' }}
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href="#areas"
                className="font-semibold text-sm px-7 py-3.5 border transition-colors"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Áreas de práctica
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Áreas de práctica ── */}
      <section id="areas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`}>
            Áreas de práctica
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Áreas de ejemplo para ilustrar el sitio: la cartera real se
            publica junto al estudio.
          </p>
        </Reveal>
        <ul className="grid md:grid-cols-2 gap-x-14">
          {AREAS.map((a, i) => (
            <Reveal key={a.name} delay={i * 60}>
              <li
                className="py-6 border-t"
                style={{ borderColor: C.line }}
              >
                <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-1.5`}>
                  {a.name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {a.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Primera consulta ── */}
      <section id="consulta" className="scroll-mt-20" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div
            className="border p-8 md:p-12 max-w-3xl"
            style={{ borderColor: C.gold, backgroundColor: C.paper }}
          >
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.24em] mb-4 font-semibold" style={{ color: C.gold }}>
                Primera consulta
              </p>
              <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mb-4`}>
                Cuéntanos tu caso
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
                Escríbenos por WhatsApp con un resumen de tu situación.
                Te orientamos sobre los pasos posibles y, si corresponde,
                agendamos una reunión en la oficina.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-sm px-8 py-4 transition-transform active:scale-95"
                style={{ backgroundColor: C.graphite, color: '#fff' }}
              >
                Escribir ahora
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <div
              className="p-7 md:p-9"
              style={{ border: `1px solid ${C.gold}` }}
            >
              <p className="text-[11px] uppercase tracking-[0.24em] mb-4 font-semibold" style={{ color: C.gold }}>
                En Google Maps
              </p>
              <p className={`${display.className} font-semibold text-6xl md:text-7xl leading-none mb-3`}>
                {BIZ.ratingLabel}
              </p>
              <Stars value={BIZ.rating} color={C.gold} className="w-5 h-5" />
              <p className="text-sm mt-3" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas de clientes
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2"
                style={{ color: C.ink, textDecorationColor: 'rgba(165,136,90,0.5)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={100}>
              <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight`}>
                Lo que dicen los clientes
              </h2>
              <p className="text-sm mt-2 mb-2" style={{ color: C.muted }}>
                Textos de muestra: al publicar van las reseñas reales.
              </p>
            </Reveal>
            {[
              'Me orientaron desde el primer mensaje, con claridad y sin vueltas. Se nota la seriedad del estudio.',
              'Llevaron mi caso con profesionalismo y me mantuvieron informada en cada etapa.',
            ].map((t, i) => (
              <Reveal key={i} delay={200 + i * 120}>
                <figure
                  className="p-6 md:p-7 border-t"
                  style={{ borderColor: C.line }}
                >
                  <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: C.gold }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Oficina ── */}
      <section id="oficina" className="scroll-mt-20" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-6`}>
              La oficina
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base mb-8" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4" style={{ color: C.ink }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 transition-transform active:scale-95"
                style={{ backgroundColor: C.graphite, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 border transition-colors"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.goldSoft }}
            >
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-3`}>
            Preguntas frecuentes
          </h2>
          <p className="text-sm mb-8" style={{ color: C.muted }}>
            Preguntas y respuestas de muestra.
          </p>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.goldSoft, plusInk: C.ink }}
        />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.goldSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,6vw,3.8rem)] leading-[1.06] mb-6`}>
              Hablemos de tu caso
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: C.muted }}>
              Escríbenos por WhatsApp y te orientamos sobre los pasos a
              seguir.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-8 py-4 transition-transform active:scale-95"
                style={{ backgroundColor: C.graphite, color: '#fff' }}
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-4 border transition-colors"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#F7F5F0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,245,240,0.6)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(247,245,240,0.4)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
