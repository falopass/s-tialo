import type { Metadata } from 'next'
import { Fraunces, Public_Sans } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_EVENTO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
const body = Public_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const C = {
  paper: '#F5F0E3',
  soft: '#EBE3D0',
  forest: '#1F3B2B',
  deep: '#12231A',
  amber: '#B97E33',
  amberSoft: '#E7D3AC',
  ink: '#232A20',
  muted: '#6C7260',
  line: 'rgba(35,42,32,0.16)',
}

export const metadata: Metadata = {
  title: 'Rancho Itahue — Agroturismo y eventos en Molina',
  description:
    'Naturaleza, cabalgatas y tardes de campo a 15 minutos de Molina, Región del Maule. Cabalgatas, piscina, quinchos y arriendo para eventos.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Un día en el rancho', href: '#el-dia' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#contacto' },
]

const DAY = [
  {
    time: 'La mañana',
    hour: '09:00',
    text: 'Llegas cuando el rocío todavía está sobre el pasto. Café de cocina, pan amasado y los caballos ya ensillados esperando en el corral.',
  },
  {
    time: 'La tarde',
    hour: '14:00',
    text: 'Después del almuerzo de campo, la piscina y la sombra de los quinchos. Los niños corren por la pradera; los grandes conversan lento.',
  },
  {
    time: 'El atardecer',
    hour: '19:00',
    text: 'El sol baja detrás del cerro y el cielo se pone color miel. Once en la terraza, o el regreso tranquilo a Molina con ganas de volver.',
  },
]

const EXPERIENCES = [
  {
    src: `${IMG}/cabalgata.webp`,
    name: 'Cabalgatas guiadas',
    desc: 'Recorridos a caballo por potreros y senderos de precordillera, para principiantes y gente con monta.',
  },
  {
    src: `${IMG}/piscina.webp`,
    name: 'Piscina y quinchos',
    desc: 'Piscina al aire libre rodeada de pradera, con quinchos y mesas para el almuerzo largo de los domingos.',
  },
  {
    src: `${IMG}/eventos.webp`,
    name: 'Eventos y celebraciones',
    desc: 'Matrimonios, cumpleaños y jornadas de empresa en un entorno que ya viene decorado por la naturaleza.',
  },
  {
    src: `${IMG}/naturaleza.webp`,
    name: 'Senderos y naturaleza',
    desc: 'Caminatas suaves entre bosque nativo, aves y aire de precordillera, al ritmo de cada visita.',
  },
]

const TESTIMONIALS = [
  'Fuimos con los niños un domingo y terminamos quedándonos todo el día. La cabalgata fue lo que más les gustó.',
  'Celebramos un cumpleaños en los quinchos y salió redondo. Lugar amplio, verde y con buena sombra.',
  'A 15 minutos de Molina y se siente como estar en el sur. El atardecer desde el predio es un regalo.',
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.amberSoft : C.amber }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function RanchoItahuePage() {
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
          over: 'dark',
          bar: 'rgba(245,240,227,0.94)',
          ink: C.deep,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F5F0E3',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Vista amplia de Rancho Itahue: pradera, caballos y cerros de la precordillera maulina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,35,26,0.42) 0%, rgba(18,35,26,0.08) 38%, rgba(18,35,26,0.78) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(245,240,227,0.94)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Agroturismo · Molina · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} font-medium leading-[1.0] tracking-[-0.01em] text-[clamp(2.9rem,10.5vw,6.2rem)] mb-6`}
              style={{ color: '#F5F0E3' }}
            >
              Aquí el tiempo
              <br />
              <em className="font-normal" style={{ color: C.amberSoft }}>anda a caballo</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(245,240,227,0.88)' }}>
              Naturaleza, cabalgatas y tardes de campo a 15 minutos de
              Molina. Ven por el día, o celebra tu próximo gran momento
              en el rancho.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.amber, color: '#1E130A' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#el-dia"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(245,240,227,0.55)', color: '#F5F0E3' }}
              >
                Conocer el rancho
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(245,240,227,0.22)', backgroundColor: 'rgba(18,35,26,0.45)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(245,240,227,0.78)' }}>
            <span>Camino K-165</span>
            <span>15 min de Molina</span>
            <span>Días de campo · eventos</span>
            <span className="hidden md:inline" style={{ color: C.amberSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Un día en el rancho ── */}
      <section id="el-dia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-18 md:py-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-14 items-start mb-12 md:mb-16">
          <Reveal>
            <Eyebrow>Un día en el rancho</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
              El día se ordena
              <br />
              <em className="font-normal" style={{ color: C.amber }}>solo</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl lg:pt-12" style={{ color: C.muted }}>
              No hace falta programa ni reloj: el rancho tiene su propio
              horario, y es el mismo de siempre. Así transcurre un día
              típico entre los potreros del Itahue.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {DAY.map((d, i) => (
            <Reveal key={d.time} delay={i * 120}>
              <article className="border-t-2 pt-6" style={{ borderColor: C.forest }}>
                <p className={`${display.className} text-5xl md:text-6xl font-light leading-none mb-3`} style={{ color: C.amber }}>
                  {d.hour}
                </p>
                <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-3`} style={{ color: C.forest }}>
                  {d.time}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {d.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className={`${display.className} italic font-normal text-2xl md:text-3xl leading-snug text-center max-w-2xl mx-auto mt-16 md:mt-24`} style={{ color: C.forest }}>
            “La idea es simple: que vengas un rato
            y te vayas con ganas de quedarte.”
          </p>
        </Reveal>
      </section>

      {/* ── Experiencias ── */}
      <section id="experiencias" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Experiencias</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
                Qué hacer en el rancho
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Actividades de ejemplo: al publicar van los programas,
                valores y horarios reales del rancho.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.name} delay={i * 90}>
                <li
                  className="group rounded-2xl overflow-hidden border h-full"
                  style={{ backgroundColor: '#FCFAF3', borderColor: C.line, boxShadow: '0 1px 2px rgba(18,35,26,0.05)' }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={e.src}
                      alt={e.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      className={`${display.className} absolute top-4 left-4 text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center`}
                      style={{ backgroundColor: 'rgba(245,240,227,0.92)', color: C.forest }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-2`} style={{ color: C.forest }}>
                      {e.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {e.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Arriendo para eventos ── */}
      <section id="eventos" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
              <img
                src={`${IMG}/eventos.webp`}
                alt="Quinchos y sector de eventos de Rancho Itahue al atardecer"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow light>Arriendo para eventos</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F5F0E3' }}>
              Tu celebración,
              <br />
              <em className="font-normal" style={{ color: C.amberSoft }}>en el campo</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(245,240,227,0.75)' }}>
              El predio se arrienda completo para celebraciones: quinchos,
              pradera, piscina y estacionamiento. Cuéntanos qué tienes en
              mente y armamos la propuesta.
            </p>
            <ul className="space-y-3 mb-9">
              {['Matrimonios y ceremonias al aire libre', 'Cumpleaños y celebraciones familiares', 'Jornadas y paseos de empresa'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(245,240,227,0.88)' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.amber }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_EVENTO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.amber, color: '#1E130A' }}
            >
              Cotizar mi evento
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Galería ── */}
      <section id="galeria" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Galería</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
              El rancho, en fotos
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Una muestra del predio: pradera, piscina, quinchos y
              senderos.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-6 md:auto-rows-[215px] lg:auto-rows-[250px] gap-3">
            <figure className="col-span-2 md:col-span-4 md:row-span-2 rounded-2xl overflow-hidden">
              <img src={`${IMG}/hero.webp`} alt="Panorámica de Rancho Itahue" loading="lazy" className="w-full h-full object-cover aspect-[16/10] md:aspect-auto" />
            </figure>
            <figure className="rounded-2xl overflow-hidden">
              <img src={`${IMG}/cabalgata.webp`} alt="Cabalgata por los senderos del rancho" loading="lazy" className="w-full h-full object-cover aspect-square md:aspect-auto" />
            </figure>
            <figure className="rounded-2xl overflow-hidden">
              <img src={`${IMG}/naturaleza.webp`} alt="Bosque nativo y senderos del predio" loading="lazy" className="w-full h-full object-cover aspect-square md:aspect-auto" />
            </figure>
            <figure className="col-span-2 md:col-span-3 rounded-2xl overflow-hidden">
              <img src={`${IMG}/piscina.webp`} alt="Piscina al aire libre rodeada de pradera" loading="lazy" className="w-full h-full object-cover aspect-[16/9] md:aspect-auto" />
            </figure>
            <figure className="col-span-2 md:col-span-3 rounded-2xl overflow-hidden">
              <img src={`${IMG}/eventos.webp`} alt="Sector de quinchos preparado para un evento" loading="lazy" className="w-full h-full object-cover aspect-[16/9] md:aspect-auto" />
            </figure>
          </div>
        </Reveal>
      </section>

      {/* ── Opiniones ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-medium text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.forest }}>
                Lo que dicen las visitas
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                Rancho Itahue acumula {BIZ.reviews} reseñas en su ficha de
                Google. Estos textos son de muestra: al publicar van las
                reseñas reales.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2"
                style={{ color: C.amber, textDecorationColor: 'rgba(185,126,51,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="rounded-2xl p-6 md:p-7 border"
                    style={{ backgroundColor: '#FCFAF3', borderColor: C.line }}
                  >
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.amber }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.forest }}>
              A 15 minutos
              <br />
              de Molina
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Desde Molina se toma el camino K-165 hacia Itahue. El
              acceso es expedido y hay estacionamiento dentro del
              predio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.forest, color: '#F5F0E3' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(31,59,43,0.4)', color: C.forest }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.forest }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-medium text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#F5F0E3' }}>
              Te esperamos
              <br />
              <em className="font-normal" style={{ color: C.amberSoft }}>en el rancho</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,240,227,0.78)' }}>
              Escríbenos por WhatsApp para reservar tu día de campo o
              cotizar tu evento. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.amber, color: '#1E130A' }}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F5F0E3' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,240,227,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,240,227,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,240,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(245,240,227,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            actividades y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
