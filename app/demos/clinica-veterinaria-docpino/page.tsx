import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_URGENCIA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' },
  ],
})

const C = {
  paper: '#F6F1E7',
  card: '#FCF9F2',
  forest: '#1E3D2F',
  forestDeep: '#142A20',
  brass: '#C8A24B',
  brassSoft: '#E8D9B4',
  brassDeep: '#7A5D1C',
  ink: '#2A2922',
  muted: '#6E675A',
  line: 'rgba(30,61,47,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-veterinaria-docpino',
  title: 'Clínica Veterinaria Docpino — Veterinario en Linares',
  description: 'Clínica veterinaria en Diputado Mario Dueñas 698, Linares. Consultas, vacunas, cirugías y atención a domicilio. Agenda por WhatsApp.',
  image: '/demos/clinica-veterinaria-docpino/hero.webp',
})

const NAV_LINKS = [
  { label: 'La clínica', href: '#clinica' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const RAIL = [
  { src: `${IMG}/fachada.webp`, alt: 'Fachada de la clínica en Diputado Mario Dueñas 698, Linares', label: 'La fachada' },
  { src: `${IMG}/equipo.webp`, alt: 'El equipo de Docpino trabajando dentro de la clínica', label: 'El equipo' },
  { src: `${IMG}/paciente1.webp`, alt: 'Gato atigrado paciente de la clínica', label: 'Pacientes' },
  { src: `${IMG}/paciente3.webp`, alt: 'Gata descansando tranquila tras su atención', label: 'En recuperación' },
]

const SERVICIOS = [
  { n: '01', name: 'Consulta general y diagnóstico', desc: 'Examen completo y plan de tratamiento explicado con calma, en el mismo box.' },
  { n: '02', name: 'Vacunas y desparasitación', desc: 'Calendario para cachorros y adultos, según peso y edad.' },
  { n: '03', name: 'Cirugías y esterilización', desc: 'Procedimientos programados con controles post-operatorios.' },
  { n: '04', name: 'Urgencias', desc: 'Si es urgente, escribe por WhatsApp de inmediato y te orientamos.' },
  { n: '05', name: 'Atención a domicilio', desc: 'El Dr. Pino también visita mascotas que no pueden trasladarse a la clínica.' },
]

const RESENAS = [
  {
    text: 'Excelente atención del Dr. Pino, se nota su experiencia y cariño por los animalitos. Lo recomiendo totalmente.',
    author: 'Javiera Pincheira',
    meta: 'reseña de Google',
  },
  {
    text: 'Atención a domicilio y en urgencias. Un veterinario de verdad preocupado por sus pacientes.',
    author: 'Paola Velásquez',
    meta: 'reseña de Google',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00 – 13:00 · 14:30 – 18:15' },
  { days: 'Sábado', time: '10:00 – 13:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function Paw({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="12" cy="16.2" rx="4.4" ry="3.6" />
      <ellipse cx="5.4" cy="11" rx="1.9" ry="2.5" transform="rotate(-18 5.4 11)" />
      <ellipse cx="9.3" cy="7.4" rx="1.9" ry="2.6" transform="rotate(-6 9.3 7.4)" />
      <ellipse cx="14.7" cy="7.4" rx="1.9" ry="2.6" transform="rotate(6 14.7 7.4)" />
      <ellipse cx="18.6" cy="11" rx="1.9" ry="2.5" transform="rotate(18 18.6 11)" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.brassSoft : C.brassDeep }}
    >
      <Paw className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

function StarIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={C.brass} stroke={C.brass} strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.2l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L12 16.6l-5.4 2.8 1.2-5.9-4.4-4.1 6-.7z" />
    </svg>
  )
}

export default function ClinicaVeterinariaDocpinoPage() {
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
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,231,0.94)',
          ink: C.forestDeep,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F6F1E7',
        }}
      />

      {/* Hero — texto a la izquierda, paciente real a la derecha */}
      <section id="inicio" className="relative min-h-svh flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-10 lg:py-0">
          <Reveal>
            <Eyebrow>Clínica veterinaria · Linares</Eyebrow>
            <h1
              className={`${display.className} text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6`}
              style={{ color: C.forestDeep }}
            >
              En Linares, tu mascota ya tiene <em style={{ color: C.brassDeep }}>doctor de cabecera</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              El Dr. Pino y su equipo atienden perros y gatos en Diputado Mario Dueñas 698 — y también a domicilio cuando la mascota no puede llegar.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 tap-44`}
                style={{ backgroundColor: C.forest, color: '#F6F1E7' }}
              >
                Agendar una hora
              </a>
              <a
                href={WA_LINK_URGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: C.forest, color: C.forestDeep }}
              >
                Urgencia
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-xs font-bold" style={{ color: C.forest }}>
                4.7 · {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>
        </div>
        <div className="relative lg:w-[44%] min-h-[55vh] lg:min-h-svh">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Perro en la mesa de examen de la clínica Docpino, bajo la lámpara de procedimientos"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 44vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${C.paper} 0%, transparent 12%), linear-gradient(0deg, rgba(20,42,32,0.28), transparent 45%)` }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Riel fotográfico — la clínica se ve antes de leer nada */}
      <section className="px-0 py-10 md:py-14 overflow-hidden" style={{ backgroundColor: C.forestDeep }} aria-label="Galería de la clínica">
        <div className="px-6 md:px-12 lg:px-16 mb-6 flex items-end justify-between gap-4">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] font-bold" style={{ color: C.brassSoft }}>
              Por dentro y por fuera
            </p>
          </Reveal>
        </div>
        <div className="flex gap-3 md:gap-4 px-6 md:px-12 lg:px-16 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {RAIL.map((f, i) => (
            <Reveal key={f.src} delay={i * 60} className="shrink-0 snap-start">
              <figure className="w-44 md:w-56">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="224px" />
                </div>
                <figcaption className="mt-2 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.brassSoft }}>
                  {f.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* La clínica — el equipo y el doctor */}
      <section id="clinica" className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative col-span-2 h-64 md:h-80 rounded-3xl overflow-hidden">
                <Image src={`${IMG}/doctor.webp`} alt="El Dr. Pino sosteniendo un gato dentro de la clínica" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 560px" />
              </div>
              <div className="relative h-40 md:h-52 rounded-3xl overflow-hidden">
                <Image src={`${IMG}/paciente2.webp`} alt="Gato blanco paciente de la clínica, durmiendo tranquilo" fill className="object-cover" sizes="280px" />
              </div>
              <div className="relative h-40 md:h-52 rounded-3xl overflow-hidden">
                <Image src={`${IMG}/doctor2.webp`} alt="El Dr. Pino revisando a un gato naranjo" fill className="object-cover" sizes="280px" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow>La clínica</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.forest }}>
              El veterinario que los vecinos llaman <em style={{ color: C.brassDeep }}>de confianza</em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.muted }}>
              En el número 698 de Diputado Mario Dueñas funciona una clínica chica, de las que atienden a cada paciente por su nombre. La dirige el veterinario al que en Linares le dicen «el Dr. Pino».
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: C.muted }}>
              Consulta, vacunas y procedimientos en el box; y si la mascota no puede trasladarse, la visita llega hasta la casa.
            </p>
            <ul className="space-y-3">
              {[
                'Atención a domicilio en Linares',
                'Urgencias por WhatsApp',
                'Perros y gatos',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm md:text-base font-medium" style={{ color: C.forestDeep }}>
                  <Paw className="w-4 h-4 shrink-0" color={C.brass} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Servicios — lista compacta numerada */}
      <section id="servicios" className="px-6 md:px-12 lg:px-16 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-10`} style={{ color: C.forest }}>
              De la vacuna al domicilio, <em style={{ color: C.brassDeep }}>todo en el mismo lugar</em>
            </h2>
          </Reveal>
          <div className="divide-y" style={{ borderColor: C.line }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 50}>
                <div className="flex items-baseline gap-5 md:gap-8 py-5 md:py-6">
                  <span className={`${display.className} text-lg md:text-2xl italic shrink-0`} style={{ color: C.brass }}>
                    {s.n}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-xl md:text-2xl mb-1`} style={{ color: C.forestDeep }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas reales de Google */}
      <section id="resenas" className="px-6 md:px-12 lg:px-16 py-16 md:py-24" style={{ backgroundColor: C.forest }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Eyebrow light>Lo que dicen en Linares</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-12`} style={{ color: '#F6F1E7' }}>
              4.7 estrellas, <em style={{ color: C.brassSoft }}>144 reseñas reales</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure className="rounded-3xl p-7 md:p-9 h-full flex flex-col" style={{ backgroundColor: C.forestDeep, border: `1px solid rgba(232,217,180,0.18)` }}>
                  <div className="flex gap-1 mb-4" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <StarIcon key={s} className="w-4 h-4" />
                    ))}
                  </div>
                  <blockquote className={`${display.className} text-lg md:text-xl leading-relaxed flex-1 mb-6`} style={{ color: '#F6F1E7' }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption>
                    <p className="text-sm font-bold" style={{ color: C.brassSoft }}>{r.author}</p>
                    <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,231,0.55)' }}>{r.meta}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha — horario, dirección, mapa, contacto */}
      <section id="contacto" className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-12`} style={{ color: C.forest }}>
              Diputado Mario Dueñas 698, <em style={{ color: C.brassDeep }}>Linares</em>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-5 gap-6">
            <Reveal className="lg:col-span-2">
              <div className="rounded-3xl p-7 md:p-9 h-full" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-5" style={{ color: C.brassDeep }}>
                  Horario
                </p>
                <ul className="space-y-4">
                  {HORAS.map((h) => (
                    <li key={h.days} className="flex flex-col gap-0.5 pb-4 border-b last:border-0 last:pb-0" style={{ borderColor: C.line }}>
                      <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: C.muted }}>{h.days}</span>
                      <span className={`${display.className} text-xl md:text-2xl`} style={{ color: C.forestDeep }}>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex mt-7 text-sm px-6 py-3 rounded-full tap-44 transition-transform hover:-translate-y-0.5`}
                  style={{ backgroundColor: C.forest, color: '#F6F1E7' }}
                >
                  Agendar por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden h-full min-h-[320px]" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa: Clínica Veterinaria Docpino, Diputado Mario Dueñas 698, Linares"
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: C.muted }}>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-medium" style={{ color: C.forestDeep }}>
                Abrir en Google Maps
              </a>
              <span>{BIZ.address}, {BIZ.city}</span>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-medium" style={{ color: C.forestDeep }}>
                Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 text-center" style={{ backgroundColor: C.forestDeep }}>
        <Reveal>
          <Paw className="w-10 h-10 mx-auto mb-6" color={C.brass} />
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.05] mb-5 max-w-3xl mx-auto`} style={{ color: '#F6F1E7' }}>
            Tu mascota se va a portar mal igual. <em style={{ color: C.brassSoft }}>Que sea con un buen doctor.</em>
          </h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} inline-flex text-sm md:text-base px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44`}
            style={{ backgroundColor: C.brass, color: C.forestDeep }}
          >
            Escribir a la clínica
          </a>
        </Reveal>
      </section>

      <footer className="px-6 md:px-12 lg:px-16 py-8 text-center text-xs" style={{ backgroundColor: C.forestDeep, color: 'rgba(246,241,231,0.55)' }}>
        <p>{BIZ.name} · {BIZ.address}, {BIZ.city} · demo de sitio web</p>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp de la clínica" />
    </div>
  )
}
