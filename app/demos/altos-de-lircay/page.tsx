import type { Metadata } from 'next'
import { Space_Grotesk, Public_Sans } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import { ValleyScene } from './scenes'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const body = Public_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })

const C = {
  paper: '#FCFDFB',
  forestSoft: '#EDF3EE',
  forest: '#24503A',
  forestDeep: '#16342A',
  copper: '#B4643C',
  copperSoft: '#EFDCCF',
  muted: '#5B6E60',
  line: 'rgba(36,80,58,0.14)',
}

export const metadata: Metadata = {
  title: 'Altos de Lircay - Clínica Dental en San Clemente',
  description:
    'Clínica dental en San Clemente, valle del Maule. Agenda tu hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const TREATMENTS = [
  { name: 'Evaluación y diagnóstico', desc: 'Revisión completa con un plan claro para tu caso.' },
  { name: 'Limpieza dental', desc: 'Profilaxis y control para mantener tu boca sana.' },
  { name: 'Empastes y restauraciones', desc: 'Reparación de caries y piezas dañadas.' },
  { name: 'Urgencias dentales', desc: 'Dolor o fracturas que necesitan atención pronta.' },
  { name: 'Estética dental', desc: 'Opciones para mejorar el aspecto de tu sonrisa.' },
  { name: 'Prótesis', desc: 'Soluciones para recuperar función y comodidad.' },
]

const TEAM = [
  { role: 'Odontóloga', note: 'Atención general' },
  { role: 'Odontólogo', note: 'Atención general' },
  { role: 'Asistente dental', note: 'Apoyo clínico' },
]

const FAQS = [
  {
    q: '¿Cómo agendo una hora?',
    a: 'Escríbenos por WhatsApp con tu nombre y el motivo de la consulta. Te respondemos con las horas disponibles.',
  },
  {
    q: '¿Atienden urgencias?',
    a: 'Si tienes dolor o una fractura, escríbenos por WhatsApp y te indicamos la hora más próxima.',
  },
  {
    q: '¿Atienden a toda la familia?',
    a: 'La atención está pensada para vecinos de todas las edades. Consulta tu caso por WhatsApp.',
  },
  {
    q: '¿Dónde queda la clínica?',
    a: `En ${BIZ.address}, en pleno pueblo de ${BIZ.city}, a pasos del centro.`,
  },
]

export default function AltosDeLircayPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.forestDeep }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(252,253,251,0.94)',
          ink: C.forestDeep,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero con escena grande ── */}
      <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden">
        <ValleyScene className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(22,52,42,0.25) 0%, rgba(22,52,42,0) 35%, rgba(22,52,42,0.72) 100%)',
          }}
        />
        {/* sello de rating */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <p
              className="flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(252,253,251,0.94)', color: C.forestDeep }}
            >
              <Stars value={BIZ.rating} color={C.copper} />
              {BIZ.ratingLabel} en Google
            </p>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3" style={{ color: C.copperSoft }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.copperSoft }} aria-hidden="true" />
              Clínica dental en San Clemente
            </p>
            <h1
              className={`${display.className} font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.4rem)] mb-5`}
              style={{ color: '#FCFDFB' }}
            >
              Sonríe tranquilo
              <br />
              en el valle
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(252,253,251,0.88)' }}>
              Atención dental cercana, sin traslados largos ni esperas
              eternas. Agenda tu hora por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.copper, color: '#fff' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#tratamientos"
                className={`${display.className} font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(252,253,251,0.5)', color: '#FCFDFB' }}
              >
                Ver tratamientos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Confianza ── */}
      <section style={{ backgroundColor: C.forestSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
          <Reveal className="flex items-center gap-4">
            <p className={`${display.className} font-semibold text-5xl leading-none`} style={{ color: C.forest }}>
              {BIZ.ratingLabel}
            </p>
            <div>
              <Stars value={BIZ.rating} color={C.copper} className="w-5 h-5" />
              <p className="text-sm mt-1" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas verificadas
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="sm:ml-auto">
            <p className="text-sm md:text-base font-medium max-w-sm" style={{ color: C.forest }}>
              Una clínica del valle, para los vecinos del valle:
              atención dental en San Clemente sin irte lejos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Tratamientos (lista) ── */}
      <section id="tratamientos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.copper }}>
            Tratamientos
          </p>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`} style={{ color: C.forest }}>
            Cuidado dental completo
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Carta referencial: al publicar el sitio van las prestaciones
            reales de la clínica.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2 max-w-4xl">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <li
                className="flex items-start gap-4 py-4 border-b"
                style={{ borderColor: C.line }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[22px] h-[22px] shrink-0 mt-0.5"
                  fill="none"
                  stroke={C.copper}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 4.5 C5.5 4.5 4 6.5 4 9.5 C4 14 5.5 20 7.5 20 C9 20 8.5 15.5 12 15.5 C15.5 15.5 15 20 16.5 20 C18.5 20 20 14 20 9.5 C20 6.5 18.5 4.5 16 4.5 C14 4.5 13.5 5.5 12 5.5 C10.5 5.5 10 4.5 8 4.5 Z" />
                </svg>
                <div>
                  <h3 className={`${display.className} font-semibold text-lg`} style={{ color: C.forest }}>
                    {t.name}
                  </h3>
                  <p className="text-sm leading-relaxed mt-0.5" style={{ color: C.muted }}>
                    {t.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Equipo (placeholders) ── */}
      <section id="equipo" className="scroll-mt-20" style={{ backgroundColor: C.forestSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`} style={{ color: C.forest }}>
              El equipo
            </h2>
            <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
              Espacios reservados: al publicar van las fotos y los
              nombres reales del equipo de la clínica.
            </p>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-5 max-w-4xl">
            {TEAM.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <li
                  className="rounded-2xl p-6 text-center border-2 border-dashed"
                  style={{ borderColor: 'rgba(36,80,58,0.25)', backgroundColor: 'rgba(252,253,251,0.7)' }}
                >
                  <span
                    className="mx-auto mb-4 w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: C.forestSoft }}
                  >
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke={C.forest} strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="8.5" r="3.5" />
                      <path d="M5.5 19.5 c1.2 -3.5 3.6 -5 6.5 -5 c2.9 0 5.3 1.5 6.5 5" />
                    </svg>
                  </span>
                  <p className={`${display.className} font-semibold text-base`} style={{ color: C.forest }}>
                    {m.role}
                  </p>
                  <p className="text-xs mt-1" style={{ color: C.muted }}>
                    {m.note} · foto de ejemplo
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <div
              className="rounded-2xl p-7 md:p-9"
              style={{ backgroundColor: C.forest, color: '#FCFDFB' }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] mb-4 font-semibold" style={{ color: C.copperSoft }}>
                En Google Maps
              </p>
              <p className={`${display.className} font-semibold text-6xl md:text-7xl leading-none mb-3`}>
                {BIZ.ratingLabel}
              </p>
              <Stars value={BIZ.rating} color={C.copperSoft} className="w-5 h-5" />
              <p className="text-sm mt-3" style={{ color: 'rgba(252,253,251,0.7)' }}>
                {BIZ.reviews} reseñas de pacientes
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2"
                style={{ color: C.copperSoft, textDecorationColor: 'rgba(216,150,114,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={100}>
              <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight`} style={{ color: C.forest }}>
                Lo que dicen los vecinos
              </h2>
              <p className="text-sm mt-2 mb-2" style={{ color: C.muted }}>
                Textos de muestra: al publicar van las reseñas reales.
              </p>
            </Reveal>
            {[
              'Excelente atención, me explicaron todo con calma y sin apuro. Se agradece tener una clínica así en el pueblo.',
              'Agendé por WhatsApp y me atendieron puntual. Trato muy cercano, como debe ser.',
            ].map((t, i) => (
              <Reveal key={i} delay={200 + i * 120}>
                <figure
                  className="rounded-2xl p-6 md:p-7 border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
                >
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.forestDeep }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: C.copper }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horario + ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.forestSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-6`} style={{ color: C.forest }}>
              Ven a conocernos
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.region}, Chile
            </address>
            <div
              className="rounded-2xl p-5 mb-8 max-w-sm"
              style={{ backgroundColor: 'rgba(252,253,251,0.7)', border: `1px solid ${C.line}` }}
            >
              <p className={`${display.className} font-semibold text-sm uppercase tracking-[0.12em] mb-3`} style={{ color: C.forest }}>
                Horario de atención
              </p>
              <dl className="space-y-1.5 text-sm" style={{ color: C.muted }}>
                <div className="flex justify-between gap-4">
                  <dt>Lunes a viernes</dt>
                  <dd className="font-semibold" style={{ color: C.forest }}>mañana y tarde</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sábado</dt>
                  <dd className="font-semibold" style={{ color: C.forest }}>por agenda</dd>
                </div>
              </dl>
              <p className="text-xs mt-3" style={{ color: C.muted }}>
                Horario referencial: confirma las horas reales por
                WhatsApp.
              </p>
            </div>
            <p className="text-sm md:text-base mb-8" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4" style={{ color: C.forest }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.forest, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(36,80,58,0.35)', color: C.forest }}
              >
                Agendar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-2xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.forestSoft }}
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
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-3`} style={{ color: C.forest }}>
            Preguntas frecuentes
          </h2>
          <p className="text-sm mb-8" style={{ color: C.muted }}>
            Preguntas y respuestas de muestra.
          </p>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.forest, a: C.muted, line: C.line, plusBg: C.forestSoft, plusInk: C.copper }}
        />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.copperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,6vw,3.8rem)] leading-[1.04] mb-6`} style={{ color: C.forestDeep }}>
              Agenda tu hora en San Clemente
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: C.muted }}>
              Escríbenos por WhatsApp y te confirmamos la hora más
              cercana disponible.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-8 py-4 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.forest, color: '#fff' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-semibold text-sm px-8 py-4 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(22,52,42,0.35)', color: C.forestDeep }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.forestDeep, color: '#FCFDFB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(252,253,251,0.65)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(252,253,251,0.45)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
