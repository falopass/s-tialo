import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars, FaqList } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_HORA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Noche de guardia: fondo ciruela casi negro, rosa del logo de Ecovets.
const C = {
  bg: '#17080F',
  panel: '#24101B',
  panelHi: '#301526',
  ink: '#FFF4F9',
  soft: '#FF9DC6',
  muted: '#DCA8C0',
  line: 'rgba(255,157,198,0.18)',
  pink: '#F2437F',
  pinkDeep: '#C7185B',
  dark: '#17080F',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-veterinaria-ecovets',
  title: 'Clínica Veterinaria Ecovets — Atención 24 horas en Rancagua',
  description:
    'Urgencias veterinarias las 24 horas en Gamero 151, Rancagua. Consultas, cirugías, hospitalización, vacunas y telemedicina.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Urgencias', href: '#urgencias' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const PASOS = [
  {
    t: 'Llegas o llamas',
    d: 'La recepción está abierta las 24 horas. Si es urgencia, entra directo: no necesitas hora.',
  },
  {
    t: 'Evaluación inmediata',
    d: 'El equipo de turno revisa a tu mascota al llegar y te explica qué está pasando, sin vueltas.',
  },
  {
    t: 'Tratamiento o cirugía',
    d: 'Consulta, procedimiento o cirugía de urgencia según el caso, con valores claros antes de decidir.',
  },
  {
    t: 'Hospitalización y alta',
    d: 'Si necesita quedarse, hay hospitalización con seguimiento. Te cuentan cómo va con fotos y videos.',
  },
]

const SERVICIOS = [
  { t: 'Urgencias 24/7', d: 'Guardia permanente, todos los días del año.', big: true },
  { t: 'Consultas y diagnóstico', d: 'Control general, diagnóstico y plan de tratamiento.', big: false },
  { t: 'Cirugías de urgencia', d: 'Pabellón propio para resolver sin derivaciones de noche.', big: false },
  { t: 'Hospitalización', d: 'Monitoreo continuo hasta el alta.', big: false },
  { t: 'Vacunas y desparasitación', d: 'Calendario al día, interna y externa.', big: false },
  { t: 'Telemedicina', d: 'Orientación a distancia cuando no puedes venir.', big: false },
  { t: 'Operativos de esterilización', d: 'Jornadas a precio conveniente, también para temporales.', big: false },
  { t: 'Alimento y accesorios', d: 'Todo para su día a día, en el mismo lugar.', big: false },
]

const RESENAS = [
  {
    nombre: 'Natalia Díaz',
    texto:
      'Llevé a mi perra por una urgencia y la atendieron muy bien. Nos explicaron todo con claridad.',
  },
  {
    nombre: 'Anastacia Matamala',
    texto:
      'Nos atendieron súper rápido y eficiente. Nos mantuvieron al tanto mandando fotos y videos.',
  },
  {
    nombre: 'Javi Rodríguez',
    texto: 'Explicaron todo súper bien y los precios son muy convenientes.',
  },
  {
    nombre: 'Jecsika Carmona',
    texto:
      'Hacen operativos de esterilización, hospitalización y atienden urgencias. Precios convenientes.',
  },
]

const FAQS = [
  {
    q: '¿De verdad atienden de noche y fines de semana?',
    a: 'Sí. La clínica recibe pacientes las 24 horas, todos los días del año, incluidas las urgencias.',
  },
  {
    q: '¿Necesito hora para una urgencia?',
    a: 'No. Las urgencias entran directo. Para consultas programadas puedes pedir hora por WhatsApp.',
  },
  {
    q: '¿Qué es la telemedicina?',
    a: 'Orientación veterinaria a distancia por mensajes, fotos o videollamada cuando no puedes llevar a tu mascota a la clínica.',
  },
  {
    q: '¿Hacen operativos de esterilización?',
    a: 'Sí, periódicamente, a precios convenientes. También evalúan mascotas temporales que vayan a esterilizarse.',
  },
]

// Línea de pulso tipo monitor: motivo de la guardia veterinaria.
function PulseLine({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="ecg w-[200%] h-full"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 30 H140 L160 30 L175 8 L190 52 L205 30 H420 L440 30 L455 8 L470 52 L485 30 H700 L720 30 L735 8 L750 52 L765 30 H980 L1000 30 L1015 8 L1030 52 L1045 30 H1200"
          stroke={C.pink}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}

export default function EcovetsDemo() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.bg, color: C.ink }}
    >
      <style>{`
        @keyframes ecg-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ecg { animation: ecg-scroll 7s linear infinite; }
        @keyframes blink-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        .blink { animation: blink-dot 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ecg, .blink { animation: none !important; }
        }
      `}</style>

      <BlitzNav
        name="ECOVETS"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Urgencia"
        fontClass={display.className}
        logoSrc={`${IMG}/logo-mark.webp`}
        theme={{
          over: 'dark',
          bar: C.bg,
          ink: C.ink,
          line: C.line,
          btnBg: C.pinkDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* HERO: guardia de turno */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(60% 50% at 80% 10%, rgba(242,67,127,0.22) 0%, rgba(23,8,15,0) 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-10 md:pb-16">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <span
                  className={`${mono.className} inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase px-3.5 py-2 rounded-full border`}
                  style={{ borderColor: C.line, color: C.soft, backgroundColor: C.panel }}
                >
                  <span
                    className="blink w-2 h-2 rounded-full"
                    style={{ backgroundColor: C.pink }}
                    aria-hidden="true"
                  />
                  Abierto ahora, 24/7
                </span>
              </Reveal>
              <Reveal delay={90}>
                <h1
                  className={`${display.className} mt-6 text-[42px] leading-[0.98] md:text-[76px] uppercase`}
                >
                  Cuando tu mascota
                  <br />
                  no puede{' '}
                  <span style={{ color: C.soft }}>esperar</span>
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
                  Hospital veterinario en el centro de Rancagua que atiende las
                  24 horas: urgencias, cirugías y hospitalización, todos los días
                  del año.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-[48px] px-6 rounded-full text-[15px] font-bold active:scale-95 transition-transform"
                    style={{ backgroundColor: C.pinkDeep, color: '#FFFFFF' }}
                  >
                    Urgencia ahora
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href="#servicios"
                    className="inline-flex items-center h-[48px] px-6 rounded-full text-[15px] font-bold border active:scale-95 transition-transform"
                    style={{ borderColor: C.line, color: C.ink }}
                  >
                    Ver servicios
                  </a>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div
                  className={`${mono.className} mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] tracking-wider uppercase`}
                  style={{ color: C.muted }}
                >
                  <span>Gamero 151, Rancagua</span>
                  <span aria-hidden="true" style={{ color: C.pink }}>●</span>
                  <span>{BIZ.phoneDisplay}</span>
                  <span aria-hidden="true" style={{ color: C.pink }}>●</span>
                  <span>{BIZ.reviews}+ reseñas</span>
                </div>
              </Reveal>
            </div>

            {/* Fotos reales como fichas de guardia */}
            <Reveal delay={200} className="relative">
              <div className="relative max-w-[380px] mx-auto">
                <div
                  className="rounded-2xl overflow-hidden rotate-2 border shadow-2xl"
                  style={{ borderColor: C.line, transform: 'rotate(2deg)' }}
                >
                  <Image
                    src={`${IMG}/paciente2.webp`}
                    alt="Paciente de Ecovets con su dueña después de la atención"
                    width={1000}
                    height={1333}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div
                  className="absolute -bottom-8 -left-6 w-[130px] rounded-xl overflow-hidden border-4 shadow-xl"
                  style={{ borderColor: C.bg, transform: 'rotate(-5deg)' }}
                >
                  <Image
                    src={`${IMG}/paciente1.webp`}
                    alt="Cachorro atendido en la clínica"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div
                  className={`${mono.className} absolute -top-4 -right-2 rounded-xl px-3.5 py-2.5 text-[11px] font-bold tracking-wider uppercase shadow-xl border`}
                  style={{ backgroundColor: C.panel, borderColor: C.line, color: C.soft }}
                >
                  Guardia activa
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <PulseLine className="h-[44px] md:h-[60px] opacity-80" />
      </section>

      {/* CIFRA GIGANTE 24/7 */}
      <section className="relative" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p
              className={`${display.className} text-[88px] md:text-[150px] leading-[0.85]`}
              style={{
                color: 'transparent',
                WebkitTextStroke: `2px ${C.pink}`,
              }}
            >
              24/7
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm md:text-base leading-relaxed pb-2" style={{ color: C.muted }}>
              La única hora que importa es la de tu mascota. La clínica no
              cierra: ni feriados, ni madrugadas, ni domingos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* URGENCIAS: protocolo de guardia */}
      <section id="urgencias" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
          <div>
            <Reveal>
              <h2 className={`${display.className} text-[32px] md:text-[48px] leading-[1.02] uppercase`}>
                Una urgencia acá
                <br />
                funciona <span style={{ color: C.soft }}>así</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                No hay agenda ni sala de espera llena: el equipo de turno
                trabaja con protocolo de urgencia, como un servicio de
                emergencia, pero para animales.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div
                className="mt-8 rounded-2xl overflow-hidden border hidden md:block"
                style={{ borderColor: C.line }}
              >
                <Image
                  src={`${IMG}/paciente3.webp`}
                  alt="Perrito en recuperación dentro de la clínica"
                  width={1000}
                  height={1400}
                  className="w-full h-auto object-cover max-h-[340px]"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </Reveal>
          </div>
          <ol className="relative pl-10">
            <span
              className="absolute left-[13px] top-2 bottom-2 w-[2px]"
              style={{
                background: `linear-gradient(180deg, ${C.pink}, ${C.pink}33)`,
              }}
              aria-hidden="true"
            />
            {PASOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <li className="relative pb-9 last:pb-0">
                  <span
                    className={`${mono.className} absolute -left-10 top-0.5 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold`}
                    style={{ backgroundColor: C.pinkDeep, color: '#FFF' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold">{p.t}</h3>
                  <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                    {p.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 md:py-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <Reveal>
              <h2 className={`${display.className} text-[32px] md:text-[48px] leading-[1.02] uppercase`}>
                Todo lo que necesita,
                <br />
                bajo un <span style={{ color: C.soft }}>techo</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${mono.className} text-[12px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                Servicios reales de sus propios avisos
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={(i % 4) * 70} className={s.big ? 'col-span-2' : ''}>
                <div
                  className={`h-full rounded-2xl border p-5 md:p-6 flex flex-col justify-between min-h-[130px] md:min-h-[150px] ${
                    s.big ? '' : ''
                  }`}
                  style={{
                    borderColor: s.big ? C.pink : C.line,
                    backgroundColor: s.big ? C.pink : C.bg,
                  }}
                >
                  <h3
                    className="font-bold text-[15px] md:text-lg leading-snug"
                    style={{ color: s.big ? '#FFF' : C.ink }}
                  >
                    {s.t}
                  </h3>
                  <p
                    className="mt-2 text-[13px] md:text-sm leading-relaxed"
                    style={{ color: s.big ? 'rgba(255,255,255,0.92)' : C.muted }}
                  >
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <Reveal>
            <h2 className={`${display.className} text-[32px] md:text-[48px] leading-[1.02] uppercase`}>
              Los que ya llegaron
              <br />
              de <span style={{ color: C.soft }}>noche</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center gap-3 pb-1">
              <Stars value={BIZ.rating} color={C.soft} />
              <span className={`${mono.className} text-[12px] tracking-wider uppercase`} style={{ color: C.muted }}>
                {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={(i % 2) * 90}>
              <figure
                className="h-full rounded-2xl border p-6 md:p-7"
                style={{ borderColor: C.line, backgroundColor: C.panel }}
              >
                <blockquote className="text-[15px] md:text-base leading-relaxed">
                  “{r.texto}”
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between gap-3">
                  <span className={`${mono.className} text-[12px] font-bold tracking-wider uppercase`} style={{ color: C.soft }}>
                    {r.nombre}
                  </span>
                  <Stars value={5} color={C.soft} className="w-3.5 h-3.5" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COMUNIDAD */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-[1fr_0.7fr] gap-10 items-center">
          <div>
            <Reveal>
              <h2 className={`${display.className} text-[28px] md:text-[40px] leading-[1.05] uppercase`}>
                También cuidan
                <br />a los que <span style={{ color: C.soft }}>no tienen dueño</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
                Operativos de esterilización a precio conveniente y acopio de
                ayuda para mascotas de familias afectadas por emergencias. La
                clínica funciona como un punto de apoyo del barrio.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div
              className="rounded-2xl overflow-hidden border shadow-xl max-w-[300px] md:ml-auto"
              style={{ borderColor: C.line, transform: 'rotate(2deg)' }}
            >
              <Image
                src={`${IMG}/cuidados.webp`}
                alt="Camada de cachorros que nacieron en Ecovets"
                width={900}
                height={1600}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <h2 className={`${display.className} text-[28px] md:text-[40px] leading-[1.05] uppercase mb-8`}>
            Lo que preguntan
            <br />
            a las <span style={{ color: C.soft }}>2 AM</span>
          </h2>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.pinkDeep, plusInk: '#FFF' }}
        />
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-16 md:py-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <Reveal>
                <h2 className={`${display.className} text-[32px] md:text-[48px] leading-[1.02] uppercase`}>
                  En el centro,
                  <br />
                  siempre <span style={{ color: C.soft }}>abierto</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div
                  className="mt-8 rounded-2xl overflow-hidden border"
                  style={{ borderColor: C.line }}
                >
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Mural de Ecovets en su fachada de Gamero 151, Rancagua"
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={180}>
                <dl className={`${mono.className} mt-8 space-y-4 text-[13px] tracking-wide`}>
                  <div className="flex gap-4">
                    <dt className="shrink-0 uppercase font-bold" style={{ color: C.soft }}>Dirección</dt>
                    <dd style={{ color: C.ink }}>{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="shrink-0 uppercase font-bold" style={{ color: C.soft }}>Horario</dt>
                    <dd style={{ color: C.ink }}>Las 24 horas, todos los días</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="shrink-0 uppercase font-bold" style={{ color: C.soft }}>Teléfono</dt>
                    <dd>
                      <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4" style={{ color: C.ink }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="shrink-0 uppercase font-bold" style={{ color: C.soft }}>WhatsApp</dt>
                    <dd>
                      <a href={WA_LINK_HORA} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.ink }}>
                        {BIZ.whatsappDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div
                className="rounded-2xl overflow-hidden border h-[320px] md:h-[480px]"
                style={{ borderColor: C.line }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
                style={{ color: C.soft }}
              >
                Cómo llegar en Google Maps
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-xl overflow-hidden w-[72px]">
              <Image
                src={`${IMG}/logo.webp`}
                alt="Tarjeta de Ecovets Clínica Veterinaria"
                width={1080}
                height={540}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className={`${display.className} text-sm uppercase`}>{BIZ.short}</p>
              <p className={`${mono.className} text-[11px] tracking-wider uppercase`} style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-[44px] px-5 rounded-full text-sm font-bold"
            style={{ backgroundColor: C.pinkDeep, color: '#FFF' }}
          >
            Escribir por WhatsApp
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
