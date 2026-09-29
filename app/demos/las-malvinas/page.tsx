import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SITE_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2' }],
})
const bodyItalic = localFont({
  src: [{ path: '../../fonts/mulish/italic-200-1000.woff2' }],
})

/**
 * Dirección de arte: «la casona de eventos del Maule Sur» — el crema
 * de la mantelería, el índigo de los caminos de mesa y el verde del
 * jardín de la terraza drapé. Marcellus hace la marca de la casa en
 * capitales romanas; Mulish sostiene la lectura. La página se ordena
 * como el negocio real: restaurante, banquetes para 50 personas,
 * catering y los domingos familiares.
 */
const C = {
  malva: '#4A3B63',
  malvaProf: '#312546',
  ladrillo: '#A4552F',
  verde: '#54623B',
  papel: '#F6F1E6',
  carta: '#ECE2CD',
  tinta: '#261E17',
  suave: '#6A6055',
  dorado: '#B98A4E',
  linea: 'rgba(38,30,23,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'las-malvinas',
  title: 'Las Malvinas — Restaurant y Residencial, Longaví',
  description:
    'Restaurant y residencial en 2 Norte 20, Longaví: cocina criolla del Maule Sur, banquetes para 50 personas, catering y domingos familiares. Reservas al (73) 2 411 076.',
  image: '/demos/las-malvinas/hero.webp',
})

const NAV_LINKS = [
  { label: 'El restaurant', href: '#restaurant' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const SERVICIOS = [
  {
    titulo: 'Banquetes para 50 personas',
    nota: 'Comedores reservados para celebraciones de empresa o familia, a la carta o con menú predefinido.',
  },
  {
    titulo: 'Servicio de catering',
    nota: 'Eventos fuera del local y alimentación regular para empresas, con equipo de cocina que incluye nutricionista.',
  },
  {
    titulo: 'Domingos familiares',
    nota: 'Todos los domingos la familia completa puede venir a celebrar, con descuento especial para familias.',
  },
  {
    titulo: 'Residencial',
    nota: 'También es residencial: el «Restaurant y Residencial» del letrero lo dice completo.',
  },
]

// Textos reales de la ficha del restaurante.
const OPINIONES = [
  {
    nombre: 'A. S.',
    estrellas: 5,
    texto: 'Excelente y amplio lugar con estilo rústico muy bonito. Excelente atención de todo el personal, destacando a los garzones, y la comida muy bien preparada, exquisitos platillos. Con precios accesibles para todo bolsillo.',
  },
  {
    nombre: 'O. R.',
    estrellas: 5,
    texto: 'La especialidad es la mechada, buenos platos y buena carta. Quién se imaginaría un restaurante tan bueno en Longaví: servicio rápido, agradable ambiente y estacionamiento propio al frente. Si va al sur, pase a almorzar.',
  },
  {
    nombre: 'E. D. V.',
    estrellas: 5,
    texto: 'Pasamos a probar suerte, casi al costado de la carretera, y grata sorpresa: excelente servicio, ordenado y limpio, ambiente colonial bello, atención rápida, comida exquisita. Totalmente recomendado.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.34em] font-extrabold mb-4"
      style={{ color: light ? C.dorado : C.malva }}
    >
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(22,16,12,0.96)', color: '#F6F1E6' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.full}.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function LasMalvinasPage() {
  return (
    <div className={`${body.className} malv min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`
        .malv a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        @media (prefers-reduced-motion: reduce) { .malv * { transition: none !important; animation: none !important } }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.12em] uppercase">Las Malvinas</span>}
        links={NAV_LINKS}
        waLink={BIZ.tel}
        ctaLabel="Reservar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,230,0.95)',
          ink: C.malvaProf,
          line: C.linea,
          btnBg: C.malva,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero: el salón con ventanales al jardín ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.malvaProf }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Salón de Las Malvinas con techo de madera, arañas y ventanales al jardín, Longaví"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(40,28,20,0.42) 0%, rgba(40,28,20,0.16) 42%, rgba(40,28,20,0.92) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow light>{BIZ.lema} · Longaví</Eyebrow>
              <h1 className={`${display.className} leading-[1.0] text-[clamp(2.9rem,9.5vw,6rem)] mb-5`} style={{ color: C.papel }}>
                Las Malvinas
                <span className="block text-[0.5em] tracking-[0.1em] mt-2" style={{ color: C.dorado }}>
                  Restaurant y Residencial
                </span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: 'rgba(246,241,230,0.88)' }}>
                A la entrada de Longaví: cocina criolla de la región, un
                salón que mira al jardín y banquetes para hasta 50
                personas.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={BIZ.tel}
                  className="font-bold text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.dorado, color: C.malvaProf }}
                >
                  Reservar al {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.papel, textDecorationColor: C.dorado }}
                >
                  {BIZ.rating}★ · ~{BIZ.reviews} opiniones
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El restaurant ── */}
      <section id="restaurant" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
        <Reveal>
          <Eyebrow>El restaurant</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.malvaProf }}>
              Cocina criolla
              <br />
              <span style={{ color: C.malva }}>a la entrada de Longaví</span>
            </h2>
            <p className="text-xs md:text-sm max-w-[280px] leading-relaxed" style={{ color: C.suave }}>
              Comida típica de la región en un ambiente familiar: el
              salón de techo de madera y los ventanales al jardín son el
              marco del almuerzo.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              src: `${IMG}/banquete.webp`,
              alt: 'Salón de banquetes de Las Malvinas con mesas imperiales y caminos de mesa índigo',
              titulo: 'El salón',
              nota: 'Mesas de banquete bajo las arañas de la casa.',
            },
            {
              src: `${IMG}/mesa.webp`,
              alt: 'Mesa imperial montada con mantel crema y camino índigo en Las Malvinas',
              titulo: 'La mesa montada',
              nota: 'El camino índigo y la mantelería crema de la casa.',
            },
            {
              src: `${IMG}/menu-evento.webp`,
              alt: 'Menú impreso de evento sobre la mesa en Las Malvinas, Longaví',
              titulo: 'Menú de la ocasión',
              nota: 'Cada celebración lleva su carta impresa.',
            },
          ].map((f, i) => (
            <Reveal key={f.titulo} delay={i * 100}>
              <figure className="h-full">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4" style={{ boxShadow: '0 14px 36px rgba(38,30,23,0.2)' }}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <figcaption>
                  <h3 className={`${display.className} text-2xl mb-1`} style={{ color: C.malvaProf }}>
                    {f.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.suave }}>
                    {f.nota}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Eventos y servicios ── */}
      <section id="eventos" className="scroll-mt-20" style={{ backgroundColor: C.malvaProf }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
          <Reveal>
            <Eyebrow light>Eventos y servicios</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.papel }}>
              La terraza drapé
              <br />
              <span style={{ color: C.dorado }}>y los comedores reservados</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mb-10" style={{ color: 'rgba(246,241,230,0.8)' }}>
              Las Malvinas recibe cenas especiales, banquetes y eventos:
              comedores con distintos ambientes dentro de la casa y la
              terraza de telas crema junto al jardín para el cóctel.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza drapé de Las Malvinas con mesas de cóctel, araña de hierro y jardín al fondo"
                    fill
                    sizes="(min-width: 1024px) 28vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mt-8">
                  <Image
                    src={`${IMG}/coctel.webp`}
                    alt="Mesa de cóctel con mantel crema y orquídea en la terraza de Las Malvinas"
                    fill
                    sizes="(min-width: 1024px) 28vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] col-span-2">
                  <Image
                    src={`${IMG}/jardin.webp`}
                    alt="Terraza drapé con mesas de cóctel junto al árbol y el jardín de Las Malvinas"
                    fill
                    sizes="(min-width: 1024px) 56vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <div className="space-y-0">
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.titulo} delay={i * 100}>
                  <div className="py-5 border-b first:border-t" style={{ borderColor: 'rgba(246,241,230,0.22)' }}>
                    <h3 className={`${display.className} text-xl md:text-2xl mb-1.5`} style={{ color: C.dorado }}>
                      {s.titulo}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: 'rgba(246,241,230,0.78)' }}>
                      {s.nota}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={440}>
                <a
                  href={BIZ.tel}
                  className="inline-block mt-6 font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.dorado, color: C.malvaProf }}
                >
                  Consultar por eventos — {BIZ.phoneDisplay}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>Cerca de {BIZ.reviews} opiniones</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.malvaProf }}>
              «Un restaurante tan bueno
              <br />
              en Longaví»,
              <span className={`${bodyItalic.className} text-[0.7em] block mt-2`} style={{ color: C.malva }}>
                dice una de las opiniones
              </span>
            </h2>
            <div className="flex items-center gap-3">
              <Stars value={4.6} color={C.dorado} />
              <span className="text-sm font-bold" style={{ color: C.suave }}>
                {BIZ.rating} de 5
              </span>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {OPINIONES.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 100}>
              <figure className="h-full p-5 md:p-6 rounded-xl" style={{ backgroundColor: C.carta, border: `1px solid ${C.linea}` }}>
                <Stars value={r.estrellas} color={C.dorado} className="w-3.5 h-3.5" />
                <blockquote className="text-[13px] md:text-sm leading-relaxed mt-3 mb-4" style={{ color: C.tinta }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-extrabold" style={{ color: C.malva }}>
                  {r.nombre} · Opinión de la ficha
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
            style={{ color: C.malvaProf, textDecorationColor: C.dorado }}
          >
            Leer las opiniones en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.carta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow>Cómo llegar</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.malvaProf }}>
                A la entrada
                <br />
                <span style={{ color: C.malva }}>de Longaví</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-5" style={{ color: C.suave }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  {BIZ.site}
                </a>
              </address>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.suave }}>
                {BIZ.horarioSemana}
                <br />
                {BIZ.horarioSabado} · {BIZ.horarioDomingo}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BIZ.tel}
                  className="font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.malva, color: C.papel }}
                >
                  Llamar al {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-colors tap-44"
                  style={{ borderColor: C.malvaProf, color: C.malvaProf }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-2xl min-h-[280px]" style={{ border: `1px solid ${C.malva}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.malvaProf, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ borderColor: 'rgba(246,241,230,0.16)' }}>
          <div>
            <p className={`${display.className} text-2xl mb-1.5`}>{BIZ.full}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(246,241,230,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              Teléfonos{' '}
              <a href={BIZ.tel} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' '}· {BIZ.phoneAlt}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(246,241,230,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,230,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: 'rgba(246,241,230,0.7)' }}>
            Fotos, reseñas, dirección, horarios, teléfonos, rating y sitio
            web son los reales de la ficha de Google y del sitio del
            restaurant.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <CallFab href={BIZ.tel} label={`Llamar a ${BIZ.full}`} bg={C.malva} />
    </div>
  )
}
