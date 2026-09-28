import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, IMG, HORARIOS, ESPECIALIDADES, RUTA, RESENAS, TEMAS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' }],
  variable: '--font-display',
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' }],
  variable: '--font-display-italic',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' }],
  variable: '--font-mono',
})

const C = {
  paper: '#F5EFE0',
  card: '#FCF8EE',
  ink: '#23301E',
  muted: 'rgba(35,48,30,0.72)',
  faint: 'rgba(35,48,30,0.68)',
  line: 'rgba(35,48,30,0.18)',
  terra: '#B8502F',
  terraDeep: '#A03E1B',
  terraLight: '#E08A63',
  terraInk: '#FFF6EA',
  pine: '#1F2E1A',
  pineSoft: '#2A3C23',
  pineInk: '#F1EAD8',
  pineMuted: 'rgba(241,234,216,0.68)',
  mustard: '#8A6A12',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-veterinario-colchagua',
  title: 'Centro Veterinario Colchagua — San Fernando',
  description:
    'Centro Veterinario Colchagua en Av. Circunvalación 1143, San Fernando. Atención a domicilio, cirugía, animales exóticos y neurología. Agenda por WhatsApp.',
  image: `${IMG}/paciente-sofa.webp`,
})

const WA_MSG = `?text=${encodeURIComponent(
  'Hola! Quiero agendar una visita en Centro Veterinario Colchagua',
)}`

const PACIENTES = [
  { src: `${IMG}/paciente-gata.webp`, alt: 'Gata atendida en el living de su casa', tag: 'sin jaula' },
  { src: `${IMG}/paciente-cono.webp`, alt: 'Perro con collar de recuperación descansando bajo una silla', tag: 'post-operatorio' },
  { src: `${IMG}/paciente-exotico.webp`, alt: 'Chingue en el portón de una casa, paciente exótico del centro', tag: 'paciente exótico' },
  { src: `${IMG}/paciente-patio.webp`, alt: 'Gata descansando en el patio de su casa', tag: 'en su patio' },
] as const

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name="Centro Vet. Colchagua"
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'A domicilio', href: '#domicilio' },
          { label: 'Especialidades', href: '#especialidades' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Horario', href: '#horario' },
        ]}
        waLink={BIZ.wa}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.pine, btnInk: C.pineInk }}
        fontClass={body.className}
      />

      {/* HERO — papel crema, titular serif cálido, foto de paciente en casa */}
      <header className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(35,48,30,0.10) 1px, transparent 1px)`,
            backgroundSize: '22px 22px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-14 md:pt-16 md:pb-20 grid md:grid-cols-12 gap-10 items-center min-h-[100dvh] md:min-h-0">
          <Reveal className="md:col-span-7">
            <p
              className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] border rounded-full px-4 py-2`}
              style={{ borderColor: C.line, color: C.ink }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.terra }} />
              Atención a domicilio · San Fernando
            </p>
            <h1
              className={`${display.className} mt-6 text-[2.6rem] leading-[1.02] md:text-7xl font-bold tracking-tight`}
            >
              El veterinario que llega{' '}
              <span className={displayItalic.className} style={{ color: C.terra }}>
                hasta tu casa.
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-md" style={{ color: C.muted }}>
              Consulta, cirugía y pacientes exóticos en {BIZ.zona}, {BIZ.city}. También visitas a
              domicilio: tu mascota se atiende en su propio sofá.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`${BIZ.wa}${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center justify-center h-[52px] px-7 rounded-full font-extrabold text-base"
                style={{ backgroundColor: C.terra, color: C.terraInk }}
              >
                Agendar visita
              </a>
              <a
                href={BIZ.phoneTel}
                className="tap-44 inline-flex items-center justify-center h-[52px] px-6 rounded-full font-bold text-base border-2"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
            <a
              href={BIZ.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-5 inline-flex items-center gap-2 py-2 text-sm"
              style={{ color: C.muted }}
            >
              <Stars value={BIZ.rating} color={C.mustard} />
              <span className={mono.className}>
                {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
              </span>
            </a>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden border-4 rotate-1 shadow-xl"
                style={{ borderColor: C.card, boxShadow: '0 24px 48px rgba(35,48,30,0.22)' }}
              >
                <Image
                  src={`${IMG}/paciente-sofa.webp`}
                  alt="Perro y gata atendidos en el sofá de su casa por Centro Veterinario Colchagua"
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-cover max-h-[440px] md:max-h-[540px]"
                  priority
                />
              </div>
              <div
                className={`${mono.className} absolute -bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-2 rounded-full border`}
                style={{ backgroundColor: C.card, borderColor: C.line, color: C.ink }}
              >
                Pacientes en su casa
              </div>
              <div
                className={`${displayItalic.className} absolute -top-5 -right-1 md:-right-4 text-2xl md:text-3xl -rotate-3`}
                style={{ color: C.terra }}
                aria-hidden="true"
              >
                «un 7»
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* RUTA DE LA VISITA — paradas numeradas unidas por línea punteada */}
      <section id="domicilio" className="relative" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20" style={{ color: C.pineInk }}>
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`}
              style={{ color: C.pineMuted }}
            >
              La visita a domicilio
            </p>
            <h2 className={`${display.className} mt-4 text-3xl md:text-5xl font-bold tracking-tight max-w-2xl`}>
              Del WhatsApp a tu puerta:{' '}
              <span className={displayItalic.className}>así llega el vet.</span>
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-4 gap-x-8 gap-y-10">
            {RUTA.map((r, i) => (
              <Reveal key={r.n} delay={i * 110}>
                <div className="relative pl-10 md:pl-0 md:pt-12">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 border-l-2 border-dashed md:left-0 md:top-0 md:right-0 md:bottom-auto md:border-l-0 md:border-t-2"
                    style={{ borderColor: 'rgba(241,234,216,0.28)' }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-[-7px] top-1 w-3.5 h-3.5 rounded-full border-2 md:left-0 md:top-[-8px]"
                    style={{ backgroundColor: C.terra, borderColor: C.pineInk }}
                  />
                  <span
                    className={`${display.className} block text-4xl md:text-5xl font-black`}
                    style={{ color: C.terraLight }}
                  >
                    {r.n}
                  </span>
                  <h3 className={`${display.className} mt-2 text-lg md:text-xl font-bold`}>{r.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.pineMuted }}>
                    {r.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FICHA DEL DR. — tarjeta clínica sobre papel */}
      <section id="especialidades" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-10 items-start">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-4 -rotate-1" style={{ borderColor: C.card }}>
              <Image
                src={`${IMG}/paciente-senior.webp`}
                alt="Perro senior descansando en un sillón, paciente de Centro Veterinario Colchagua"
                width={1200}
                height={963}
                className="w-full h-auto object-cover max-h-[380px]"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-2 md:-right-5 rounded-2xl px-4 py-3 border rotate-2"
              style={{ backgroundColor: C.card, borderColor: C.line }}
            >
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado */}
                <img src={`${IMG}/logo.webp`} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-extrabold leading-tight">{BIZ.doctor}</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.terraDeep }}>
                    {BIZ.doctorTitulo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7">
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.terraDeep }}>
            Ficha del centro
          </p>
          <h2 className={`${display.className} mt-4 text-3xl md:text-4xl font-bold tracking-tight`}>
            Un especialista de clínica,{' '}
            <span className={displayItalic.className}>con trato de barrio.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-xl" style={{ color: C.muted }}>
            El equipo del {BIZ.zona} declara sus especialidades en su propio perfil. Nada de letra
            chica: esto es lo que atienden.
          </p>
          <ul
            className="mt-6 rounded-2xl border divide-y overflow-hidden"
            style={{ backgroundColor: C.card, borderColor: C.line }}
          >
            {ESPECIALIDADES.map((e) => (
              <li key={e.s} className="flex items-baseline justify-between gap-4 px-4 md:px-5 py-3">
                <span className="text-sm md:text-base font-bold">{e.s}</span>
                <span
                  className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-right`}
                  style={{ color: C.faint }}
                >
                  {e.d}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* PACIENTES — polaroids en la mesa */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal>
          <h2 className={`${display.className} text-3xl md:text-4xl font-bold tracking-tight`}>
            Pacientes fotografiados{' '}
            <span className={displayItalic.className}>en su propia casa.</span>
          </h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: C.muted }}>
            Las fotos del perfil del centro no son de un box: son mascotas en sus living, patios y
            sillones. Así se ve la atención a domicilio.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {PACIENTES.map((p, i) => (
            <Reveal key={p.src} delay={i * 90}>
              <figure
                className={`rounded-xl border p-2 pb-3 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={1200}
                  height={900}
                  className="w-full h-40 md:h-48 object-cover rounded-lg"
                />
                <figcaption
                  className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.16em] text-center`}
                  style={{ color: C.faint }}
                >
                  {p.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESEÑAS — la nota que se repite */}
      <section id="resenas" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20" style={{ color: C.pineInk }}>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <Reveal className="md:col-span-5">
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`}
                style={{ color: C.pineMuted }}
              >
                Lo que dicen en San Fernando
              </p>
              <p
                className={`${display.className} mt-4 font-black leading-none`}
                style={{ fontSize: 'clamp(5rem, 16vw, 9rem)', color: C.terraLight }}
              >
                4,6
              </p>
              <Stars value={BIZ.rating} color={C.pineInk} className="mt-3" />
              <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.2em]`} style={{ color: C.pineMuted }}>
                {BIZ.reviews} reseñas en Google Maps
              </p>
              <a
                href={BIZ.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-3 inline-block py-2 text-sm underline underline-offset-4"
                style={{ color: C.pineInk }}
              >
                Leerlas todas ↗
              </a>
              <div className="mt-6 flex flex-wrap gap-2">
                {TEMAS.map((t) => (
                  <span
                    key={t.t}
                    className={`${mono.className} text-[10px] uppercase tracking-[0.16em] border rounded-full px-3 py-1.5`}
                    style={{ borderColor: 'rgba(241,234,216,0.3)', color: C.pineMuted }}
                  >
                    {t.t} ×{t.n}
                  </span>
                ))}
              </div>
            </Reveal>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 90}>
                  <figure
                    className="h-full rounded-2xl border p-5"
                    style={{ backgroundColor: C.pineSoft, borderColor: 'rgba(241,234,216,0.16)' }}
                  >
                    <Stars value={r.estrellas} color="#D9A521" />
                    <blockquote className="mt-3 text-sm leading-relaxed" style={{ color: C.pineInk }}>
                      «{r.texto}»
                    </blockquote>
                    <figcaption
                      className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.18em]`}
                      style={{ color: C.pineMuted }}
                    >
                      {r.nombre}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HORARIO + MAPA */}
      <section id="horario" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-stretch">
        <Reveal>
          <div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.terraDeep }}>
              Horario y dirección
            </p>
            <h2 className={`${display.className} mt-4 text-3xl md:text-4xl font-bold tracking-tight`}>
              {BIZ.address}, {BIZ.city}
            </h2>
            <p className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.faint }}>
              {BIZ.zona} · {BIZ.region}
            </p>
            <ul className="mt-6 divide-y border-t border-b" style={{ borderColor: C.line }}>
              {HORARIOS.map((h) => (
                <li
                  key={h.d}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                  style={{ borderColor: C.line }}
                >
                  <span className="text-sm md:text-base" style={{ color: C.muted }}>
                    {h.d}
                  </span>
                  <span
                    className={`${mono.className} text-sm md:text-base font-bold text-right`}
                    style={{ color: h.d === 'Domingo' ? C.faint : C.ink }}
                  >
                    {h.h}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs md:text-sm" style={{ color: C.faint }}>
              Al mediodía cierran y vuelven 15:30. Las visitas a domicilio se coordinan por WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`${BIZ.wa}${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center justify-center h-[48px] px-6 rounded-full font-bold text-sm"
                style={{ backgroundColor: C.terra, color: C.terraInk }}
              >
                WhatsApp {BIZ.waDisplay}
              </a>
              <a
                href={BIZ.phoneTel}
                className="tap-44 inline-flex items-center justify-center h-[48px] px-5 rounded-full font-bold text-sm border"
                style={{ borderColor: C.line, color: C.ink }}
              >
                Llamar
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div
            className="rounded-2xl overflow-hidden border-4 h-[300px] md:h-full min-h-[300px]"
            style={{ borderColor: C.card }}
          >
            <LazyMap src={MAPS_EMBED} title={`Mapa: ${BIZ.nameFull}, ${BIZ.city}`} className="w-full h-full border-0" />
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-extrabold leading-tight">{BIZ.nameFull}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.faint }}>
                {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
              </p>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.terraDeep }}>
            Atención a domicilio · San Fernando
          </p>
        </div>
      </footer>

      <WaFab href={`${BIZ.wa}${WA_MSG}`} label="WhatsApp Centro Veterinario Colchagua" />
    </div>
  )
}
