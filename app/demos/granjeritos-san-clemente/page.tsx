import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  variable: '--font-body',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  crema: '#FBF3DC',
  cremaDeep: '#F1E4BE',
  pradera: '#2F7D3A',
  praderaDeep: '#1C5223',
  granero: '#C65D21',
  graneroTxt: '#8A3B0E',
  sol: '#F4B942',
  tinta: '#26331F',
  tintaSuave: '#55604B',
  linea: 'rgba(38,51,31,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'granjeritos-san-clemente',
  title: 'Granjeritos San Clemente — Jardín infantil y escuela de lenguaje',
  description:
    'Jardín infantil y escuela de lenguaje gratuita en Orlando Franz 23, San Clemente: Medio Mayor, Prekínder y Kínder, transporte escolar y talleres. Teléfono +56 44 305 7519.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La granja', href: '#granja' },
  { label: 'Niveles', href: '#niveles' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const NIVELES = [
  {
    nivel: 'Medio Mayor',
    edad: 'Desde los 3 años',
    nota: 'El primer corralito: juego, rutinas y lenguaje todos los días.',
  },
  {
    nivel: 'Prekínder',
    edad: '4 años',
    nota: 'Letras, números y talleres para soltar la mano despacito.',
  },
  {
    nivel: 'Kínder',
    edad: '5 años',
    nota: 'La antesala del colegio, con la confianza ya sembrada.',
  },
]

const INCLUYE = [
  { titulo: 'Establecimiento gratuito', detalle: 'Particular subvencionado: la mensualidad no es una barrera.' },
  { titulo: 'Transporte escolar', detalle: 'Recorridos para los párvulos de San Clemente y alrededores.' },
  { titulo: 'Aire acondicionado', detalle: 'Salas temperadas en verano e invierno.' },
  { titulo: 'Cámaras en patios y salas', detalle: 'El día a día queda a la vista de quienes cuidan.' },
  { titulo: 'Talleres', detalle: 'Actividades más allá de la sala: folclor, celebraciones y oficios.' },
]

const RESENAS = [
  {
    nombre: 'Natalia Jara',
    texto:
      'Buen ambiente, excelente cuidado, educación de calidad, educadoras muy cariñosas y amables.',
    cuando: 'Reseña de Google',
  },
  {
    nombre: 'Luis Garrido Estay',
    texto:
      'Es un jardín de excelente infraestructura y construcción nueva. Además es ideal para la primera orientación educativa de los pequeños.',
    cuando: 'Reseña de Google',
  },
]

export default function GranjeritosSanClemente() {
  return (
    <main
      className={`${body.variable} ${display.variable} font-[family-name:var(--font-body)] antialiased`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full object-cover" aria-hidden="true" />
            <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-wide">
              Granjeritos
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass="font-[family-name:var(--font-display)]"
        theme={{
          over: 'light',
          bar: C.crema,
          ink: C.tinta,
          line: C.linea,
          btnBg: C.pradera,
          btnInk: '#FFFFFF',
        }}
      />

      {/* HERO — la postal de la granja */}
      <header id="inicio" className="relative overflow-hidden">
        {/* sol y nubes del patio */}
        <div
          aria-hidden="true"
          className="absolute -top-10 right-6 h-36 w-36 rounded-full opacity-90 md:right-24 md:h-48 md:w-48"
          style={{ backgroundColor: C.sol }}
        />
        <div
          aria-hidden="true"
          className="absolute top-24 right-28 h-10 w-24 rounded-full bg-white/70 blur-[2px] md:right-52"
        />
        <div
          aria-hidden="true"
          className="absolute top-36 right-10 h-8 w-20 rounded-full bg-white/60 blur-[2px]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pt-36">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.graneroTxt }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
              La granja donde crecen los chicos de San Clemente
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed md:text-lg" style={{ color: C.tintaSuave }}>
              Jardín infantil y escuela de lenguaje gratuita en Orlando Franz: de los 3 a los 5 años,
              con transporte escolar, talleres y educadoras que los papás nombran por su cariño.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex h-11 items-center rounded-full px-6 text-sm font-extrabold text-white"
                style={{ backgroundColor: C.pradera }}
              >
                Llamar al jardín
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-full border-2 px-6 text-sm font-extrabold"
                style={{ borderColor: C.pradera, color: C.praderaDeep }}
              >
                Cómo llegar
              </a>
            </div>
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{ backgroundColor: C.cremaDeep }}
            >
              <Stars value={BIZ.rating} color={C.granero} className="text-sm" />
              <span className="text-xs font-bold" style={{ color: C.tinta }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-t-[999px] rounded-b-[28px]"
                style={{ backgroundColor: C.pradera }}
              />
              <Image
                src={`${IMG}/hero.webp`}
                alt="Niños y niñas de Granjeritos disfrazados frente a la fachada del jardín, con su letrero"
                width={960}
                height={458}
                priority
                className="relative w-full rounded-t-[999px] rounded-b-3xl object-cover"
                style={{ aspectRatio: '960/458' }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <figcaption
                className="absolute bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full px-4 py-1.5 text-[11px] font-extrabold text-white"
                style={{ backgroundColor: C.praderaDeep }}
              >
                Foto real de su Facebook
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      {/* EL TABLÓN — polaroids del día a día */}
      <section id="granja" className="py-14 md:py-20" style={{ backgroundColor: C.pradera }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white">
              El tablón de la granja
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold text-white md:text-5xl">
              Así se ven sus semanas
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { src: 'sala', alt: 'Grupo de párvulos con sus profesoras de polera amarilla dentro de la sala', pie: 'La sala', giro: '-rotate-2' },
              { src: 'patio', alt: 'Patio del jardín decorado con un tren navideño e inflables', pie: 'El patio', giro: 'rotate-1' },
              { src: 'navidad', alt: 'Tren de navidad frente a la fachada del jardín en diciembre', pie: 'Navidad', giro: '-rotate-1' },
              { src: 'cueca', alt: 'Niños y apoderados en traje de huaso después de una presentación de folclor', pie: 'Septiembre', giro: 'rotate-2' },
            ].map((f) => (
              <Reveal key={f.src}>
                <figure className={`${f.giro} rounded-xl bg-white p-2 pb-3 shadow-lg`}>
                  <Image
                    src={`${IMG}/${f.src}.webp`}
                    alt={f.alt}
                    width={960}
                    height={960}
                    className="aspect-square w-full rounded-lg object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <figcaption className="pt-2 text-center text-xs font-extrabold" style={{ color: C.tintaSuave }}>
                    {f.pie}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NIVELES — puertas de granero */}
      <section id="niveles" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.graneroTxt }}>
            De los 3 a los 5 años
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-5xl">
            Tres puertas, un mismo patio
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: C.tintaSuave }}>
            Granjeritos es además escuela especial de lenguaje: cada nivel trabaja la palabra,
            el juego y la convivencia en grupos chicos.
          </p>
        </Reveal>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {NIVELES.map((n, i) => (
            <Reveal key={n.nivel} delay={i * 90}>
              <article
                className="rounded-t-[140px] rounded-b-3xl border-2 px-6 pb-8 pt-14 text-center"
                style={{ borderColor: C.pradera, backgroundColor: i === 1 ? C.cremaDeep : '#FFFDF4' }}
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.graneroTxt }}>
                  {n.edad}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold">
                  {n.nivel}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                  {n.nota}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LO QUE INCLUYE — cartelitos del corral */}
      <section className="mx-auto max-w-6xl px-5 pb-14 md:px-8 md:pb-20">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl">
            Lo que el jardín incluye
          </h2>
          <p className="mt-2 text-sm" style={{ color: C.tintaSuave }}>
            Según lo que ellos mismos publican en sus redes.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUYE.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 60}>
              <article
                className="relative rounded-xl border-2 px-5 pb-5 pt-4"
                style={{ borderColor: C.linea, backgroundColor: '#FFFDF4' }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-2 left-5 h-4 w-1.5 rounded-full"
                  style={{ backgroundColor: C.granero }}
                />
                <h3 className="font-[family-name:var(--font-display)] text-lg font-extrabold" style={{ color: C.praderaDeep }}>
                  {item.titulo}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                  {item.detalle}
                </p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={INCLUYE.length * 60}>
            <article
              className="flex h-full min-h-[96px] flex-col justify-center rounded-xl px-5 py-4"
              style={{ backgroundColor: C.granero }}
            >
              <p className="font-[family-name:var(--font-display)] text-lg font-extrabold text-white">
                ¿Quieres visitarlo?
              </p>
              <a
                href={CALL_LINK}
                className="mt-2.5 inline-flex h-11 w-fit items-center rounded-full bg-white px-5 text-sm font-extrabold"
                style={{ color: C.graneroTxt }}
              >
                Llama al {BIZ.phoneDisplay}
              </a>
            </article>
          </Reveal>
        </div>
      </section>

      {/* FACHADA REAL — Street View */}
      <section className="relative overflow-hidden">
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada del jardín en calle Orlando Franz: rejas verdes y el segundo piso naranjo con el logo de Granjeritos"
          width={1200}
          height={750}
          className="h-[46vh] w-full object-cover md:h-[56vh]"
          sizes="100vw"
        />
        <div
          className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-20 md:px-8"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(28,82,35,0.9))' }}
        >
          <div className="mx-auto max-w-6xl">
            <p className="font-[family-name:var(--font-display)] text-xl font-extrabold text-white md:text-2xl">
              Orlando Franz 23, San Clemente
            </p>
            <p className="mt-1 text-xs font-bold text-white/85">
              Fachada según Google Street View, mayo 2024
            </p>
          </div>
        </div>
      </section>

      {/* RESEÑAS — globos de diálogo */}
      <section id="resenas" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.graneroTxt }}>
            Lo que dicieron en Google
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-5xl">
            Palabra de apoderado
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {RESENAS.map((r) => (
            <Reveal key={r.nombre}>
              <figure className="relative rounded-3xl border-2 px-6 pb-6 pt-6" style={{ borderColor: C.pradera, backgroundColor: '#FFFDF4' }}>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-8 h-6 w-6 rotate-45 border-b-2 border-r-2"
                  style={{ borderColor: C.pradera, backgroundColor: '#FFFDF4' }}
                />
                <Stars value={5} color={C.granero} className="text-sm" />
                <blockquote className="mt-3 text-base leading-relaxed" style={{ color: C.tinta }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-extrabold uppercase tracking-wider" style={{ color: C.tintaSuave }}>
                  {r.nombre} · {r.cuando}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <figure className="mt-8 flex flex-col items-start gap-4 rounded-3xl p-5 md:flex-row md:items-center md:gap-6" style={{ backgroundColor: C.cremaDeep }}>
            <Image
              src={`${IMG}/entrada.webp`}
              alt="Entrada del jardín de noche, con el letrero Granjeritos iluminado y un soldado decorativo"
              width={960}
              height={720}
              className="h-32 w-full rounded-2xl object-cover md:w-56"
              sizes="(max-width: 768px) 100vw, 224px"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-extrabold" style={{ color: C.praderaDeep }}>
                Un jardín chico y muy querido
              </p>
              <p className="mt-1 max-w-lg text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                Casi cinco mil personas siguen su página en Facebook: es de esos jardines
                donde cada párvulo tiene nombre y los apoderados salen en las fotos.
              </p>
            </div>
          </figure>
        </Reveal>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-14 md:py-20" style={{ backgroundColor: C.praderaDeep }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em]" style={{ color: C.sol }}>
              Cómo llegar
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold text-white md:text-4xl">
              La granja queda a cuadras de todo
            </h2>
            <dl className="mt-7 space-y-4 text-sm">
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Horario', `${BIZ.hours} · sábado y domingo cerrado`],
                ['Teléfono', BIZ.phoneDisplay],
                ['Correo', BIZ.email],
                ['Instagram', BIZ.ig],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                  <dt className="w-24 shrink-0 font-extrabold uppercase tracking-wider text-[11px] pt-0.5 text-white/90">
                    {k}
                  </dt>
                  <dd className="font-bold text-white">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={CALL_LINK}
              className="mt-7 inline-flex h-11 items-center rounded-full px-6 text-sm font-extrabold"
              style={{ backgroundColor: C.sol, color: C.tinta }}
            >
              Llamar: {BIZ.phoneDisplay}
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border-4" style={{ borderColor: C.sol }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="h-[320px] w-full md:h-[380px]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-10 text-center md:px-12"
            style={{ backgroundColor: C.pradera }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-14 select-none font-[family-name:var(--font-display)] text-[180px] font-extrabold leading-none text-white/10"
            >
              G
            </span>
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="mx-auto h-20 w-20 rounded-full border-4 border-white/70 object-cover"
            />
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-extrabold text-white md:text-4xl">
              Un cupo en la granja empieza con una llamada
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm font-bold text-white">
              Atienden de lunes a viernes, de 8:30 a 17:45. Pregunta por Medio Mayor,
              Prekínder o Kínder.
            </p>
            <a
              href={CALL_LINK}
              className="mt-6 inline-flex h-11 items-center rounded-full bg-white px-7 text-sm font-extrabold"
              style={{ color: C.praderaDeep }}
            >
              {BIZ.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t px-5 py-6 md:px-8" style={{ borderColor: C.linea }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-bold" style={{ color: C.tintaSuave }}>
            {BIZ.name} · {BIZ.legal} · {BIZ.address}, {BIZ.city}
          </p>
          <p className="text-xs" style={{ color: C.tintaSuave }}>
            {BIZ.phoneDisplay} · {BIZ.email}
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.pradera} fg="#fff" />
    </main>
  )
}
