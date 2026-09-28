import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_URGENCIA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
  variable: '--font-body',
})

const C = {
  paper: '#FFFFFF',
  soft: '#EFF2F7',
  ink: '#10152B',
  muted: '#5A6373',
  blue: '#2251FF',
  blueDeep: '#0C1B63',
  lime: '#C6F24E',
  line: 'rgba(16,21,43,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hospital-clinico-veterinario-la-granja-linares',
  title: 'Hospital Clínico Veterinario La Granja — Linares',
  description: 'Hospital veterinario en Colo Colo 1634, Linares. Consultas, vacunas, diagnóstico por imagen y cirugía. Agenda por WhatsApp.',
  image: '/demos/hospital-clinico-veterinario-la-granja-linares/hero.webp',
})

const NAV_LINKS = [
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Precios', href: '#precios' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const TICKER = [
  'Consultas y urgencias',
  'Vacunación completa',
  'Ecografía y diagnóstico',
  'Cirugía con monitoreo',
  'Hospitalización',
  'Colo Colo 1634, Linares',
]

const PACIENTES = [
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Recepción de la clínica veterinaria con mesón de madera, transportadora y retratos de mascotas',
    kicker: 'atención general',
    title: 'Consulta completa, sin apuro y con el carnet al día',
    desc: 'Evaluación general, plan de tratamiento y seguimiento, con el carnet sanitario siempre a la mano.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Sala de diagnóstico con ecógrafo y mesa de examen de acero',
    kicker: 'diagnóstico por imagen',
    title: 'Ecografía en la casa: resultados sin derivar fuera',
    desc: 'Imágenes tomadas dentro de la clínica para decidir rápido, sin derivar a otra ciudad.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de atención con correa, premios para mascotas y sala de espera al fondo',
    kicker: 'preventivo',
    title: 'Vacunas y desparasitación, con recordatorio incluido',
    desc: 'Calendario completo para cachorros y adultos, con aviso cuando toca el refuerzo.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Interior luminoso de la clínica veterinaria junto a la ventana',
    kicker: 'quirófano',
    title: 'Cirugías programadas con anestesia monitoreada',
    desc: 'Esterilizaciones y cirugías menores en pabellón propio, con control postoperatorio.',
  },
]

const PRECIOS = [
  { item: 'Consulta general', price: 'desde $18.000' },
  { item: 'Vacuna antirrábica', price: 'desde $12.000' },
  { item: 'Desparasitación interna', price: 'desde $8.000' },
  { item: 'Ecografía diagnóstica', price: 'desde $30.000' },
  { item: 'Esterilización canina/felina', price: 'a evaluar' },
  { item: 'Urgencia en horario de atención', price: 'consultar' },
]

const TESTIMONIALS = [
  'Me atendieron de inmediato y me explicaron todo el tratamiento con calma. Mi perra salió caminando feliz.',
  'Llegamos de urgencia un domingo y respondieron al tiro por WhatsApp. Se nota que les importan los animales.',
  'Precios claros y buen trato. Mi gato es mañoso y aun así lo revisaron con paciencia.',
]

function Filete({ light = false }: { light?: boolean }) {
  const color = light ? 'rgba(255,255,255,0.55)' : C.blue
  return (
    <div aria-hidden="true" className="w-full">
      <div className="h-[3px]" style={{ backgroundColor: color }} />
      <div className="h-px mt-[3px]" style={{ backgroundColor: color }} />
    </div>
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] font-extrabold uppercase tracking-[0.26em] mb-3"
      style={{ color: light ? C.lime : C.blue }}
    >
      {children}
    </p>
  )
}

function Paw({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="7" cy="8" rx="2" ry="2.6" />
      <ellipse cx="17" cy="8" rx="2" ry="2.6" />
      <ellipse cx="4" cy="12.5" rx="1.7" ry="2.2" />
      <ellipse cx="20" cy="12.5" rx="1.7" ry="2.2" />
      <path d="M12 11c3.2 0 6 2.6 6 5.4 0 1.9-1.4 3-3 3-1 0-2-.5-3-.5s-2 .5-3 .5c-1.6 0-3-1.1-3-3 0-2.8 2.8-5.4 6-5.4Z" />
    </svg>
  )
}

export default function LaGranjaPage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${body.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes hcvTicker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hcv-ticker-track { animation: hcvTicker 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .hcv-ticker-track { animation: none; } }
      `}</style>

      {/* ── Cabecera del periódico ── */}
      <header id="inicio" className="pt-5 md:pt-7">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div
            className="flex items-baseline justify-between gap-4 border-b pb-2 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold"
            style={{ borderColor: C.line, color: C.muted }}
          >
            <span>{BIZ.rubro}</span>
            <span className="hidden sm:inline">Linares · Región del Maule</span>
            <span>Edición de muestra</span>
          </div>

          {/* cabecera: wordmark a todo lo ancho */}
          <div className="pt-7 md:pt-10 pb-6 md:pb-8">
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
              <h1
                className={`${display.className} font-extrabold leading-[0.9] tracking-[-0.03em] text-[clamp(3.2rem,12vw,8.5rem)]`}
                style={{ color: C.blue }}
              >
                LA&nbsp;GRANJA
              </h1>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-right leading-relaxed pb-2" style={{ color: C.muted }}>
                Hospital Clínico Veterinario
                <br />
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
            <div
              className={`${display.className} mt-4 inline-block px-3 py-1.5 text-[11px] md:text-sm font-bold uppercase tracking-[0.3em]`}
              style={{ backgroundColor: C.lime, color: C.ink }}
            >
              El diario de las mascotas de Linares
            </div>
          </div>

          {/* doble filete + fecha/nav */}
          <Filete />
          <div
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2.5 border-b text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold"
            style={{ borderColor: C.blue, color: C.muted }}
          >
            <span>Linares, domingo 27 de septiembre de 2026</span>
            <nav className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Secciones">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2251FF]" style={{ color: C.blue }}>
                  {l.label}
                </a>
              ))}
            </nav>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2251FF]" style={{ color: C.blue }}>
              {BIZ.reviews} reseñas en Google
            </a>
          </div>
        </div>

        {/* cinta corrida azul */}
        <div className="mt-4 max-w-full overflow-x-auto snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ backgroundColor: C.blue }} aria-hidden="true">
          <div className="hcv-ticker-track flex w-max whitespace-nowrap py-2 snap-start">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center">
                {TICKER.map((t) => (
                  <span
                    key={`${half}-${t}`}
                    className={`${display.className} flex items-center gap-4 px-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-white`}
                  >
                    {t}
                    <Paw className="w-3.5 h-3.5" color={C.lime} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Portada: foto a sangre con titular ── */}
      <figure className="relative mt-6 md:mt-8">
        <div className="relative h-[64vh] md:h-[76vh] overflow-hidden" style={{ backgroundColor: C.blueDeep }}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="Mesa de examen veterinaria con fonendoscopio e instrumental, y los cerros del Maule por la ventana"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(12,27,99,0.18) 0%, rgba(12,27,99,0.02) 42%, rgba(12,27,99,0.78) 100%)',
            }}
          />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 md:top-6 right-4 md:right-6 flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F24E]"
            style={{ backgroundColor: 'rgba(255,255,255,0.96)', color: C.blue }}
          >
            <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.blue} aria-hidden="true">
              <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
            </svg>
            {BIZ.reviews} reseñas en Google
          </a>
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pb-8 md:pb-10">
              <Reveal>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] mb-3" style={{ color: C.lime }}>
                  Portada · Colo Colo 1634
                </p>
                <h2
                  className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.02em] text-[clamp(2rem,6.4vw,4.6rem)] max-w-4xl mb-5 text-white`}
                >
                  Cuando tu mascota lo necesita,{' '}
                  <span style={{ color: C.lime }}>aquí hay hospital</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm md:text-base font-bold px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F24E]`}
                    style={{ backgroundColor: C.lime, color: C.ink }}
                  >
                    Agendar hora por WhatsApp
                  </a>
                  <a
                    href="#pacientes"
                    className={`${display.className} text-sm md:text-base font-bold px-7 py-3.5 border-2 border-white/70 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F24E]`}
                  >
                    Leer la edición
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <figcaption
          className="border-b text-[11px] md:text-xs italic px-5 md:px-8 py-2.5 flex flex-wrap justify-between gap-x-6 gap-y-1"
          style={{ borderColor: C.line, color: C.muted, backgroundColor: C.paper }}
        >
          <span>El box de examen listo para el primer paciente de la jornada.</span>
          <span className="not-italic uppercase tracking-[0.16em] font-bold">Foto de muestra</span>
        </figcaption>
      </figure>

      {/* ── Entradilla en columnas con capitular + por los números ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <Reveal>
          <Kicker>Editorial · edición de muestra</Kicker>
          <p
            className="text-[15px] md:text-base leading-[1.75] md:columns-3 gap-8 first-letter:float-left first-letter:font-[family-name:var(--font-display)] first-letter:text-[3.6rem] first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-1 first-letter:font-extrabold first-letter:text-[#2251FF]"
            style={{ color: C.ink, columnRule: `1px solid ${C.line}` }}
          >
            En Colo Colo 1634, a pasos del centro de Linares, funciona el
            Hospital Clínico Veterinario La Granja: un equipo que atiende
            perros y gatos con infraestructura de hospital y el trato
            directo de un negocio de barrio. Este sitio es una muestra de
            cómo se vería su página — el nombre, la dirección, el WhatsApp
            y las reseñas son reales; los textos, precios y fotos son de
            ejemplo.{'\u00A0'}En sus {BIZ.reviews} reseñas de Google los
            vecinos destacan la buena atención, y su Instagram —donde ya
            los siguen {BIZ.igFollowers} personas— muestra un equipo
            activo, con pacientes que llegan y vuelven sanos a la casa.
            Al publicarse, cada párrafo de esta edición llevaría la letra
            real del hospital.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px border"
            style={{ borderColor: C.line, backgroundColor: C.line }}
          >
            {[
              [`${BIZ.reviews}`, 'reseñas en Google'],
              [BIZ.igFollowers, 'seguidores en Instagram'],
              ['Colo Colo 1634', 'a pasos del centro'],
              ['WhatsApp', 'agenda directa'],
            ].map(([v, l]) => (
              <div key={l} className="py-5 px-4 text-center" style={{ backgroundColor: C.paper }}>
                <p className={`${display.className} font-extrabold text-xl md:text-2xl leading-none mb-1.5`} style={{ color: C.blue }}>
                  {v}
                </p>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  {l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Sección pacientes: noticias con foto ── */}
      <section id="pacientes" className="scroll-mt-8" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Filete />
            <div className="flex items-baseline justify-between gap-4 pt-4 mb-8 md:mb-10">
              <h2
                className={`${display.className} font-extrabold text-3xl md:text-5xl leading-none tracking-[-0.02em]`}
                style={{ color: C.ink }}
              >
                Pacientes
              </h2>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold shrink-0" style={{ color: C.muted }}>
                Sección salud
              </span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {PACIENTES.map((n, i) => (
              <Reveal key={n.title} delay={i * 90}>
                <article>
                  <div className="relative overflow-hidden mb-4 aspect-[16/10]" style={{ border: `1px solid ${C.line}` }}>
                    <Image
                      src={n.src}
                      alt={n.alt}
                      fill
                      loading="eager"
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] mb-1.5" style={{ color: C.blue }}>
                    {n.kicker}
                  </p>
                  <h3
                    className={`${display.className} font-bold text-xl md:text-2xl leading-[1.08] tracking-[-0.01em] mb-2`}
                    style={{ color: C.ink }}
                  >
                    {n.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {n.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p
              className="mt-10 pt-4 border-t text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold flex flex-wrap gap-x-8 gap-y-2"
              style={{ borderColor: C.line, color: C.blue }}
            >
              <span>Agenda por WhatsApp</span>
              <span>Atención de perros y gatos</span>
              <span>Servicios y fotos de muestra</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Crónica local: la clínica ── */}
      <section id="clinica" className="scroll-mt-8">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Filete />
            <div className="flex items-baseline justify-between gap-4 pt-4 mb-8 md:mb-10">
              <h2
                className={`${display.className} font-extrabold text-3xl md:text-5xl leading-none tracking-[-0.02em]`}
                style={{ color: C.ink }}
              >
                La clínica
              </h2>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold shrink-0" style={{ color: C.muted }}>
                Crónica local
              </span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <p
                className="text-[15px] md:text-base leading-[1.75] md:columns-2 gap-8 mb-8 first-letter:float-left first-letter:font-[family-name:var(--font-display)] first-letter:text-[3.6rem] first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-1 first-letter:font-extrabold first-letter:text-[#2251FF]"
                style={{ color: C.ink, columnRule: `1px solid ${C.line}` }}
              >
                La Granja atiende en Colo Colo 1634, en Linares, con el
                trato directo de un hospital de barrio: quien recibe a tu
                mascota es quien la va a atender. Eso se nota en las{' '}
                {BIZ.reviews} reseñas que ya acumula en Google y en los{' '}
                {BIZ.igFollowers} seguidores que siguen su Instagram, donde
                publican los casos del día a día. Este texto es de muestra:
                al publicarse, aquí iría la historia real del hospital,
                contada por su equipo.
              </p>
              <div className="space-y-5">
                {TESTIMONIALS.map((t, i) => (
                  <figure key={i} className="border-l-[3px] pl-5" style={{ borderColor: C.lime }}>
                    <blockquote
                      className={`${display.className} font-semibold text-base md:text-lg leading-snug mb-2`}
                      style={{ color: C.ink }}
                    >
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.muted }}>
                      Reseña de ejemplo — al publicar van las reales
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>

            {/* ficha del hospital */}
            <Reveal delay={120}>
              <aside className="border-2 p-6 md:p-7" style={{ borderColor: C.blue, backgroundColor: C.paper }}>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] mb-5" style={{ color: C.blue }}>
                  Ficha del hospital
                </p>
                <dl className="divide-y text-sm">
                  {[
                    ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                    ['Región', BIZ.region],
                    ['WhatsApp', BIZ.phoneDisplay],
                    ['Google', `${BIZ.reviews} reseñas`],
                    ['Instagram', `${BIZ.igFollowers} seguidores`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                      <dt className="uppercase tracking-[0.12em] text-[11px] font-bold" style={{ color: C.muted }}>
                        {k}
                      </dt>
                      <dd className={`${display.className} font-bold text-right`} style={{ color: C.ink }}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block text-center text-sm font-bold px-4 py-3 border-2 text-[#2251FF] transition-colors hover:bg-[#2251FF] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2251FF]"
                  style={{ borderColor: C.blue }}
                >
                  Ver Instagram →
                </a>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Avisos: precios de referencia ── */}
      <section id="precios" className="scroll-mt-8" style={{ backgroundColor: C.blueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Filete light />
            <div className="flex flex-wrap items-baseline justify-between gap-4 pt-4 mb-8 md:mb-10">
              <h2
                className={`${display.className} font-extrabold text-3xl md:text-5xl leading-none tracking-[-0.02em] text-white`}
              >
                Tarifario de referencia
              </h2>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold shrink-0" style={{ color: C.lime }}>
                Sección avisos · valores de muestra
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
              {PRECIOS.map((p) => (
                <li
                  key={p.item}
                  className="flex items-baseline gap-3 py-4"
                  style={{ borderColor: 'rgba(255,255,255,0.18)' }}
                >
                  <span className={`${display.className} font-bold text-lg md:text-2xl tracking-[-0.01em] text-white`}>
                    {p.item}
                  </span>
                  <span
                    className="flex-1 border-b-2 border-dotted translate-y-[-4px]"
                    style={{ borderColor: 'rgba(198,242,78,0.5)' }}
                    aria-hidden="true"
                  />
                  <span className={`${display.className} font-extrabold text-lg md:text-2xl shrink-0`} style={{ color: C.lime }}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center justify-between gap-5">
              <p className="text-xs md:text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Precios de muestra para ilustrar la sección: el valor final
                se confirma siempre antes de atender, según el peso y la
                condición de cada paciente.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F24E]`}
                style={{ backgroundColor: C.lime, color: C.ink }}
              >
                Consultar valor exacto →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Aviso destacado: contacto ── */}
      <section id="contacto" className="scroll-mt-8">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Filete />
            <div className="flex items-baseline justify-between gap-4 pt-4 mb-8 md:mb-10">
              <h2
                className={`${display.className} font-extrabold text-3xl md:text-5xl leading-none tracking-[-0.02em]`}
                style={{ color: C.ink }}
              >
                Agenda y llegada
              </h2>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold shrink-0" style={{ color: C.muted }}>
                Aviso destacado
              </span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div
                className="h-full p-6 md:p-8 border-2 flex flex-col justify-between"
                style={{ borderColor: C.ink, backgroundColor: C.lime }}
              >
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] mb-4" style={{ color: C.ink }}>
                    Aviso destacado
                  </p>
                  <h3
                    className={`${display.className} font-extrabold text-3xl md:text-4xl leading-[1.02] tracking-[-0.02em] mb-4`}
                    style={{ color: C.ink }}
                  >
                    Se atiende por WhatsApp: hora el mismo día
                  </h3>
                  <address className="not-italic text-sm md:text-base leading-relaxed mb-2 font-semibold" style={{ color: C.ink }}>
                    {BIZ.address}, {BIZ.city}, {BIZ.region}
                  </address>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(16,21,43,0.72)' }}>
                    Atención según la agenda del día: escribe directo y te
                    confirman la hora al tiro.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} block text-center font-bold text-sm md:text-lg leading-tight md:leading-normal px-4 py-2 md:px-7 md:py-4 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10152B]`}
                    style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
                  >
                    Agendar por WhatsApp — {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={WA_LINK_URGENCIA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} block text-center font-bold text-sm px-7 py-3 border-2 text-[#10152B] transition-colors hover:bg-[#10152B] hover:text-[#C6F24E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10152B]`}
                    style={{ borderColor: C.ink }}
                  >
                    Tengo una urgencia →
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-2 min-h-[360px] h-full" style={{ borderColor: C.blue, backgroundColor: C.soft }}>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Colofón ── */}
      <footer style={{ backgroundColor: C.ink, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-extrabold text-xl tracking-[-0.02em] mb-1`}>
            La Granja
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {BIZ.address}, {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F24E]">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto pl-5 pr-20 md:px-8 py-4 pb-20 md:pb-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.lime }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, servicios, precios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.lime }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
