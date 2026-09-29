import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import {
  BIZ,
  IMG,
  MAPS_EMBED,
  MAPS_URL,
  WA_LINK,
  WA_LINK_PRECIO,
} from './content'

const display = localFont({
  src: '../../fonts/epilogue/normal-100-900.woff2',
  variable: '--on-display',
})

const sans = localFont({
  src: '../../fonts/sora/normal-100-800.woff2',
  variable: '--on-sans',
})

const mono = localFont({
  src: '../../fonts/geist-mono/normal-100-900.woff2',
  variable: '--on-mono',
})

export const metadata = demoMetadata({
  slug: 'outlet-neira-talca',
  title: 'Outlet Neira Talca — muebles y textil en 3 y media Sur',
  description:
    'Outlet de muebles y textil en 3 1/2 Sur, Talca: sillas, comedores, closets y despacho. 4,3 estrellas en Google.',
  image: `${IMG}/fachada.webp`,
})

const C = {
  carbon: '#15171B',
  hondo: '#0F1114',
  lima: '#B7E335',
  papel: '#F3F2EC',
  ink: '#1A1C20',
  muted: '#5A6067',
  line: 'rgba(21,23,27,0.14)',
  lineOscura: 'rgba(243,242,236,0.16)',
} as const

const PISO = [
  {
    foto: `${IMG}/sillas.webp`,
    alt: 'Sillas de madera con tapiz verde en Outlet Neira',
    etq: 'ETQ-01',
    nombre: 'Sillas y comedores',
    detalle: 'Madera maciza con tapiz — juegos listos para llevar.',
  },
  {
    foto: `${IMG}/comedor.webp`,
    alt: 'Juego de comedor exhibido en Outlet Neira',
    etq: 'ETQ-02',
    nombre: 'Comedores completos',
    detalle: 'Mesa y sillas en conjunto, como se ven en la foto.',
  },
  {
    foto: `${IMG}/closet.webp`,
    alt: 'Closet gris con puertas correderas en Outlet Neira',
    etq: 'ETQ-03',
    nombre: 'Closets y dormitorio',
    detalle: 'Roperos, veladores y todo lo que ocupa el dormitorio.',
  },
  {
    foto: `${IMG}/textil.webp`,
    alt: 'Sofá y sillas burdeo en el sector textil de Outlet Neira',
    etq: 'ETQ-04',
    nombre: 'Living y textil',
    detalle: 'Sofás, sillas y ropa de hogar — el otro lado del letrero.',
  },
]

const HORARIO = [
  { dia: 'Lunes a viernes', horas: '9:00 – 19:00' },
  { dia: 'Sábado', horas: '9:00 – 16:00' },
  { dia: 'Domingo', horas: 'Cerrado' },
]

export default function OutletNeira() {
  return (
    <div
      className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.papel, color: C.ink, fontFamily: 'var(--on-sans)' }}
    >
      <BlitzNav
        name="Outlet Neira"
        links={[
          { href: '#piso', label: 'El piso' },
          { href: '#despacho', label: 'Despacho' },
          { href: '#reseñas', label: 'Reseñas' },
          { href: '#llegar', label: 'Llegar' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(15,17,20,0.85)',
          ink: '#F3F2EC',
          line: 'rgba(243,242,236,0.14)',
          btnBg: C.lima,
          btnInk: C.carbon,
        }}
        fontClass={display.className}
      />

      {/* ── Hero: el letrero verde de la 3 y media ───────────── */}
      <header className="relative min-h-svh flex items-end" style={{ backgroundColor: C.hondo }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de Outlet Neira con su letrero verde en 3 y media Sur, Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(15,17,20,0.94) 0%, rgba(15,17,20,0.4) 55%, rgba(15,17,20,0.3) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 w-full">
          <Reveal>
            <p
              className={`${mono.className} inline-block text-[11px] uppercase tracking-[0.22em] px-3 py-1.5`}
              style={{ backgroundColor: C.lima, color: C.carbon }}
            >
              3 1/2 Sur 2490 · Talca
            </p>
            <h1
              className={`${display.className} uppercase font-black leading-[0.92] mt-5 text-[clamp(3rem,10vw,6.5rem)]`}
              style={{ color: C.papel }}
            >
              Outlet
              <br />
              <span style={{ color: C.lima }}>Neira</span>
            </h1>
            <p
              className="mt-5 text-base md:text-lg max-w-md leading-relaxed"
              style={{ color: 'rgba(243,242,236,0.85)' }}
            >
              Muebles y textil al precio del outlet — el letrero verde de la 3
              y media, el que dicen que es “su mejor opción”.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center px-6 py-3 text-base font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.lima, color: C.carbon, fontFamily: 'var(--on-display)' }}
              >
                Consultar por un mueble
              </a>
              <a
                href={WA_LINK_PRECIO}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center px-6 py-3 text-base font-bold uppercase tracking-wide border"
                style={{ borderColor: 'rgba(243,242,236,0.5)', color: C.papel, fontFamily: 'var(--on-display)' }}
              >
                Preguntar precio
              </a>
            </div>
            <p className={`${mono.className} mt-6 text-xs`} style={{ color: 'rgba(243,242,236,0.7)' }}>
              ★ {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── Lo que está en el piso ───────────────────────────── */}
      <section id="piso" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
            style={{ color: C.muted }}
          >
            Fotos reales del local
          </p>
          <h2
            className={`${display.className} uppercase font-black text-[clamp(2rem,6vw,3.6rem)] leading-none mb-10`}
          >
            Lo que está en el piso
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10 md:gap-x-8">
          {PISO.map((p, i) => (
            <Reveal key={p.etq} delay={i * 90}>
              <article className="relative pt-6">
                {/* cordel + ojal de la etiqueta */}
                <div
                  className="absolute top-0 left-8 w-px h-6"
                  style={{ backgroundColor: C.muted }}
                  aria-hidden="true"
                />
                <div
                  className="absolute top-6 left-8 -translate-x-1/2 w-3 h-3 rounded-full border-2"
                  style={{ borderColor: C.muted, backgroundColor: C.papel }}
                  aria-hidden="true"
                />
                <div
                  className="overflow-hidden rounded-xl"
                  style={{ border: `1px solid ${C.line}`, backgroundColor: '#fff' }}
                >
                  <div className="relative">
                    <Image
                      src={p.foto}
                      alt={p.alt}
                      width={640}
                      height={420}
                      className="w-full h-52 md:h-60 object-cover"
                    />
                    <span
                      className={`${mono.className} absolute top-3 left-3 text-[11px] uppercase tracking-widest px-2 py-1`}
                      style={{ backgroundColor: C.lima, color: C.carbon }}
                    >
                      {p.etq}
                    </span>
                  </div>
                  <div className="px-5 py-4 flex items-center justify-between gap-4">
                    <div>
                      <h3 className={`${display.className} font-extrabold text-lg uppercase`}>
                        {p.nombre}
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: C.muted }}>
                        {p.detalle}
                      </p>
                    </div>
                    <a
                      href={WA_LINK_PRECIO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} tap-44 shrink-0 text-[11px] uppercase tracking-widest underline underline-offset-4`}
                      style={{ color: C.ink }}
                    >
                      Precio →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className={`${mono.className} mt-10 text-sm`} style={{ color: C.muted }}>
            El stock cambia todas las semanas — lo que ves hoy quizás mañana ya se fue.
          </p>
        </Reveal>
      </section>

      {/* ── El despacho ──────────────────────────────────────── */}
      <section
        id="despacho"
        className="border-t"
        style={{ backgroundColor: C.carbon, borderColor: C.lineOscura }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.lima }}
            >
              Despacho
            </p>
            <h2
              className={`${display.className} uppercase font-black text-[clamp(2rem,6vw,3.6rem)] leading-none`}
              style={{ color: C.papel }}
            >
              Lo llevan
              <br />
              hasta tu <span style={{ color: C.lima }}>casa</span>
            </h2>
            <p
              className="mt-5 text-sm md:text-base leading-relaxed max-w-md"
              style={{ color: 'rgba(243,242,236,0.75)' }}
            >
              La camioneta sale con los muebles envueltos y el equipo lo
              instala donde va. “Muy buena la entrega”, escribe Carina en su
              reseña.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center px-6 py-3 text-base font-bold uppercase tracking-wide"
              style={{ backgroundColor: C.lima, color: C.carbon, fontFamily: 'var(--on-display)' }}
            >
              Coordinar despacho
            </a>
          </Reveal>
          <Reveal delay={140}>
            <figure className="overflow-hidden rounded-xl" style={{ border: `1px solid ${C.lineOscura}` }}>
              <Image
                src={`${IMG}/despacho.webp`}
                alt="Camioneta de Outlet Neira entregando muebles"
                width={640}
                height={420}
                className="w-full h-64 md:h-80 object-cover"
              />
              <figcaption
                className={`${mono.className} px-5 py-3 text-[11px] uppercase tracking-widest`}
                style={{ backgroundColor: C.hondo, color: 'rgba(243,242,236,0.6)' }}
              >
                El despacho saliendo — foto real del negocio
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ──────────────────────────────────────────── */}
      <section id="reseñas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
            style={{ color: C.muted }}
          >
            Reseñas de Google
          </p>
          <h2
            className={`${display.className} uppercase font-black text-[clamp(2rem,6vw,3.6rem)] leading-none mb-10`}
          >
            Lo que deja la visita
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-6 md:gap-8 items-stretch">
          <Reveal>
            <figure
              className="h-full rounded-xl p-7 md:p-9 flex flex-col justify-between"
              style={{ backgroundColor: C.carbon, color: C.papel }}
            >
              <div>
                <p className={`${mono.className} text-xs`} style={{ color: C.lima }}>
                  ★★★★★
                </p>
                <blockquote className="mt-5 text-lg md:text-xl leading-relaxed">
                  “Muy buena la entrega, el personal de trabajo es un 10/10 al
                  igual que la calidad de sus productos.”
                </blockquote>
              </div>
              <figcaption
                className={`${mono.className} mt-7 text-[11px] uppercase tracking-widest`}
                style={{ color: 'rgba(243,242,236,0.6)' }}
              >
                Carina Cancino — reseña de Google
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <div
              className="h-full rounded-xl p-7 flex flex-col justify-center items-start"
              style={{ backgroundColor: '#fff', border: `1px solid ${C.line}` }}
            >
              <p className={`${display.className} font-black text-6xl leading-none`}>
                {BIZ.rating}
              </p>
              <p className={`${mono.className} mt-3 text-sm`} style={{ color: C.muted }}>
                ★ promedio en Google
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas publicadas — cinco de ellas con las 5
                estrellas completas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ──────────────────────────────────────── */}
      <section
        id="llegar"
        className="border-t"
        style={{ backgroundColor: C.hondo, borderColor: C.lineOscura }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.lima }}
            >
              Cómo llegar
            </p>
            <h2
              className={`${display.className} uppercase font-black text-[clamp(2rem,6vw,3.6rem)] leading-none`}
              style={{ color: C.papel }}
            >
              3 1/2 Sur 2490,
              <br />
              Talca
            </h2>
            <ul className={`${mono.className} mt-6 space-y-3 text-sm`} style={{ color: 'rgba(243,242,236,0.7)' }}>
              <li>— El local del letrero verde, a la altura del 2490.</li>
              <li>— Lun–Vie 9:00–19:00 · Sáb 9:00–16:00</li>
              <li>
                —{' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                  style={{ color: C.papel }}
                >
                  Abrir en Google Maps
                </a>
              </li>
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center px-6 py-3 text-base font-bold uppercase tracking-wide"
              style={{ backgroundColor: C.lima, color: C.carbon, fontFamily: 'var(--on-display)' }}
            >
              Escribir al outlet
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.lineOscura}` }}>
              <LazyMap
                title="Mapa de Outlet Neira Talca"
                src={MAPS_EMBED}
                className="w-full min-h-[320px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.lineOscura, backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
          <div>
            <p className={`${display.className} uppercase font-black text-lg`} style={{ color: C.papel }}>
              {BIZ.name}
            </p>
            <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(243,242,236,0.6)' }}>
              {BIZ.rubro} · {BIZ.lema} · {BIZ.city}
            </p>
          </div>
          <nav
            className={`${mono.className} flex gap-5 text-xs`}
            style={{ color: 'rgba(243,242,236,0.7)' }}
          >
            <a href="#piso" className="tap-44 hover:text-white transition-colors">El piso</a>
            <a href="#despacho" className="tap-44 hover:text-white transition-colors">Despacho</a>
            <a href="#llegar" className="tap-44 hover:text-white transition-colors">Llegar</a>
          </nav>
          <p className="text-[11px] leading-relaxed max-w-xs" style={{ color: 'rgba(243,242,236,0.6)' }}>
            Maqueta hecha por{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {SITE.name}
            </a>{' '}
            con los datos públicos del negocio.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />
    </div>
  )
}
