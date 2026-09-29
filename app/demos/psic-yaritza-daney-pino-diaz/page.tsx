import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, IMG, SERVICIOS, RESENAS, FORMACION, TEMAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// De sus activos reales: la oficina luminosa con planta y alfombra, el top
// ciruela del retrato y el verde salvia que aparece en su consulta.
const C = {
  crema: '#F6F1E7',
  papel: '#FCF8F0',
  tinta: '#33262C',
  salvia: '#3E5F49',
  salviaSuave: '#7C937F',
  terracota: '#A4512E',
  muda: 'rgba(51,38,44,0.72)',
  linea: 'rgba(51,38,44,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'psic-yaritza-daney-pino-diaz',
  title: 'Ps. Yaritza Daney Pino Díaz — Psicóloga en Talca | Sitiazo.cl',
  description:
    'Psicóloga clínica en Av. Dos Sur 870, Talca. Atención presencial y online para adultos y niños desde 6 años. Agenda por WhatsApp.',
  image: `${IMG}/retrato.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'La consulta', href: '#consulta' },
]

function Kicker({ children, color = C.salvia }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] font-semibold`}
      style={{ color }}
    >
      {children}
    </p>
  )
}

export default function PsicYaritzaPage() {
  return (
    <main
      id="inicio"
      className={`${body.className} min-h-screen`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <BlitzNav
        name="Ps. Yaritza Pino"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(246,241,231,0.92)', ink: C.tinta, line: C.linea, btnBg: C.salvia, btnInk: '#fff' }}
      />

      {/* ── HERO editorial ── */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-32 w-[420px] h-[420px] rounded-full"
          style={{ backgroundColor: 'rgba(62,95,73,0.10)' }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center relative">
          <div className="md:col-span-7">
            <Reveal>
              <Kicker>Psicóloga clínica — Talca</Kicker>
              <h1
                className={`${display.className} mt-4 text-[42px] md:text-7xl leading-[1.02] tracking-tight`}
              >
                Un espacio para{' '}
                <em style={{ color: C.salvia }}>entenderte</em>, con calma.
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muda }}>
                Atención presencial en Av. Dos Sur 870 y online para adultos y niños a partir de
                6 años. Especialista en inteligencia emocional y en el trabajo con sueños.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[48px] px-7 rounded-full text-sm font-semibold transition-transform active:scale-95"
                  style={{ backgroundColor: C.salvia, color: '#fff' }}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold border transition-colors"
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div
                className={`${mono.className} mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.14em]`}
                style={{ color: C.muda }}
              >
                <span>5,0 ★ · {BIZ.reviewsMaps} reseñas en Google</span>
                <span>N° col. {BIZ.colegiado}</span>
                <span>Online + presencial</span>
                <span>Amigable LGBTQ+</span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={150}>
              <div className="relative max-w-[320px] mx-auto">
                <img
                  src={`${IMG}/retrato.webp`}
                  alt="Ps. Yaritza Daney Pino Díaz, psicóloga clínica en Talca"
                  className="w-full object-cover"
                  style={{ borderRadius: '160px 160px 18px 18px', aspectRatio: '4/5' }}
                />
                <div
                  className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-lg"
                  style={{ backgroundColor: C.papel, border: `1px solid ${C.linea}` }}
                >
                  <Stars value={5} color={C.terracota} className="w-3.5 h-3.5" />
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muda }}>
                    5,0 en Google
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Temas que trae la gente ── */}
      <section className="py-12 md:py-16" style={{ backgroundColor: C.salvia }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker color="#DCE8DC">Con qué se llega</Kicker>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl text-white leading-tight max-w-2xl`}>
              No hace falta llegar sabiendo explicarlo.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {TEMAS.map((t) => (
                <span
                  key={t}
                  className="text-sm md:text-base px-4 py-2 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#F0F5EF', border: '1px solid rgba(255,255,255,0.22)' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm md:text-base max-w-xl leading-relaxed" style={{ color: 'rgba(240,245,239,0.85)' }}>
              Especializada en el desarrollo de la inteligencia emocional — regulación, autoestima,
              motivación, empatía — y en el procesamiento de las experiencias oníricas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker>Servicios</Kicker>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight max-w-xl`}>
              Lo que ofrece su consulta
            </h2>
            <p className="mt-3 text-sm md:text-base max-w-lg" style={{ color: C.muda }}>
              Lista tal como aparece en su perfil profesional. Consulta solo particular;
              para agendar se usa su perfil de Encuadrado o WhatsApp.
            </p>
          </Reveal>
          <div className="mt-10 divide-y" style={{ borderColor: C.linea }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_260px_1fr] gap-4 md:gap-8 py-6 items-baseline">
                  <span className={`${mono.className} text-sm`} style={{ color: C.salviaSuave }}>
                    {s.n}
                  </span>
                  <h3 className={`${display.className} text-xl md:text-2xl`}>{s.t}</h3>
                  <p className="col-span-2 md:col-span-1 text-sm md:text-[15px] leading-relaxed" style={{ color: C.muda }}>
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La consulta (fotos reales) ── */}
      <section id="consulta" className="py-16 md:py-24 scroll-mt-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker>La consulta</Kicker>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight max-w-2xl`}>
              Un quinto piso con luz de ventana
            </h2>
            <p className="mt-3 text-sm md:text-base max-w-xl leading-relaxed" style={{ color: C.muda }}>
              Fotos reales de su ficha de Google: la oficina en Av. Dos Sur, luminosa y con vista
              a la ciudad — y, afuera, la torre donde atiende.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-12 gap-4">
            <Reveal className="col-span-2 md:col-span-7">
              <img
                src={`${IMG}/consulta.webp`}
                alt="Interior de la consulta de psicología en Talca: sillones, alfombra y ventanal"
                className="w-full h-full object-cover rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <img
                src={`${IMG}/escritorio.webp`}
                alt="Escritorio de trabajo junto al ventanal de la consulta"
                className="w-full h-full object-cover rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </Reveal>
            <Reveal delay={80} className="md:col-span-4">
              <img
                src={`${IMG}/edificio.webp`}
                alt="Edificio de oficinas en Av. Dos Sur donde está la consulta"
                className="w-full object-cover rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </Reveal>
            <Reveal delay={140} className="md:col-span-4">
              <img
                src={`${IMG}/certificado.webp`}
                alt="Certificado enmarcado de Yaritza Daney Pino Díaz junto al ventanal"
                className="w-full object-cover rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </Reveal>
            <Reveal delay={200} className="col-span-2 md:col-span-4">
              <img
                src={`${IMG}/libros.webp`}
                alt="Libros de emociones y sentimientos usados en la consulta"
                className="w-full h-full object-cover rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker>Opiniones</Kicker>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
              Lo que dicen quienes ya fueron
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 70}>
                <figure
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ backgroundColor: C.papel, border: `1px solid ${C.linea}` }}
                >
                  <Stars value={5} color={C.terracota} className="w-4 h-4" />
                  <blockquote className="mt-4 text-[15px] md:text-base leading-relaxed flex-1">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muda }}>
                    {r.autor} · {r.fuente}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muda }}>
              5,0 de 5 en Google ({BIZ.reviewsMaps}) · {BIZ.reviewsDoctoralia} opiniones en Doctoralia
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Escritora y formación ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.salvia }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Kicker color="#DCE8DC">También escribe</Kicker>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight text-white`}>
              Psicóloga <em>y</em> escritora
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(240,245,239,0.88)' }}>
              Se presenta como escritora y psicóloga clínica independiente. En 2026 coescribió con
              Clara Paz Lorca el capítulo sobre bienestar docente del libro
              «Capacidades educativas para el aprendizaje socioemocional y la convivencia».
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(240,245,239,0.88)' }}>
              En su consulta trabaja además con material propio sobre emociones y sentimientos,
              pensado sobre todo para niños y niñas.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4`} style={{ color: 'rgba(240,245,239,0.7)' }}>
                Formación
              </p>
              <ul className="space-y-3">
                {FORMACION.map((f) => (
                  <li key={f} className="flex gap-3 text-sm md:text-[15px] leading-snug text-white">
                    <span aria-hidden="true" style={{ color: C.salviaSuave }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha práctica + mapa ── */}
      <section id="llegar" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          <Reveal>
            <Kicker>Cómo agendar</Kicker>
            <h2 className={`${display.className} mt-3 text-3xl md:text-4xl leading-tight`}>
              Av. Dos Sur 870, of. 505
            </h2>
            <dl className="mt-6 space-y-4 text-sm md:text-base">
              <div className="flex gap-3">
                <dt className={`${mono.className} w-28 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Atiende</dt>
                <dd>Adultos y niños a partir de 6 años · presencial y online</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-28 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Horario</dt>
                <dd>Lunes a viernes desde las 9:00 · sábado y domingo cerrado</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-28 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Contacto</dt>
                <dd>{BIZ.phoneDisplay} · agenda también por Encuadrado</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-28 shrink-0 uppercase text-[11px] tracking-[0.14em] pt-0.5`} style={{ color: C.muda }}>Pago</dt>
                <dd>Solo pacientes particulares (según su perfil de Doctoralia)</dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center h-[48px] px-7 rounded-full text-sm font-semibold transition-transform active:scale-95"
              style={{ backgroundColor: C.terracota, color: '#fff' }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden h-[300px] md:h-full min-h-[300px]" style={{ border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: consulta de la Ps. Yaritza Daney Pino Díaz en Av. Dos Sur 870, Talca"
                className="w-full h-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pt-10 pb-8" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className={`${display.className} text-xl text-white`}>{BIZ.name}</p>
          <p className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Psicóloga clínica · N° Colegiado {BIZ.colegiado} · {BIZ.address}, {BIZ.city}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4 text-white">
              WhatsApp
            </a>
            <a href={BIZ.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Ficha en Google Maps
            </a>
          </div>
          <p className={`${mono.className} mt-6 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.45)' }}>
            Demo de muestra · Sitiazo.cl
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
