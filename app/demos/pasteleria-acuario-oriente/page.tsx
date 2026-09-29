import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars, CallFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, VITRINA, RESENAS } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'pasteleria-acuario-oriente',
  title: 'Pastelería Acuario · la vitrina de 23 Oriente, Talca',
  description:
    'Panadería y pastelería desde 1991: vitrina de dulces, tortas a pedido y pan de cada día en 23 Oriente, Talca. Demo de muestra.',
  image: `${IMG}/fachada.webp`,
})

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800' }],
  variable: '--font-disp',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' }],
  variable: '--font-body',
})

// Identidad desde sus activos: crema de vitrina + azul del letrero Acuario.
const C = {
  crema: '#FBF3E3',
  cremaBaja: '#F5E9D2',
  carta: '#FFFDF7',
  azul: '#17547E',
  azulHondo: '#0F3B5C',
  tinta: '#3A2A20',
  muted: '#7A6553',
  linea: '#E8D9BE',
} as const

export default function AcuarioPage() {
  return (
    <main
      className={`${display.variable} ${body.variable}`}
      style={{ backgroundColor: C.crema, color: C.tinta, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Barra superior con logo real ──────────────────────── */}
      <header className="sticky top-0 z-40 border-b" style={{ backgroundColor: C.crema, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3 tap-44">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="h-10 w-10 rounded-full object-cover border"
              style={{ borderColor: C.linea }}
              aria-hidden="true"
            />
            <span className="leading-none">
              <span className="block text-lg" style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, color: C.azulHondo }}>
                Pastelería Acuario
              </span>
              <span className="block text-[11px] tracking-wide" style={{ color: C.muted }}>
                23 Oriente · Talca · desde {BIZ.desde}
              </span>
            </span>
          </a>
          <a
            href={TEL_LINK}
            className="text-sm font-bold px-4 py-2 rounded-full tap-44"
            style={{ backgroundColor: C.azul, color: '#fff' }}
          >
            Llamar
          </a>
        </div>
      </header>

      {/* ── Portada: mostrador con la fachada ─────────────────── */}
      <section id="inicio" className="scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-12">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
            <Reveal>
              <h1
                className="text-[38px] md:text-[56px] leading-[1.02]"
                style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, color: C.azulHondo }}
              >
                La vitrina de Acuario lleva {new Date().getFullYear() - BIZ.desde} años endulzando 23 Oriente
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
                Pan de cada día, kuchen, tortas y una vitrina de dulces con cartelitos
                escritos a mano. La sucursal oriente de una pastelería talquina que abrió en {BIZ.desde}.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-[15px] font-bold tap-44"
                  style={{ backgroundColor: C.azul, color: '#fff' }}
                >
                  Encargar: {BIZ.phoneDisplay}
                </a>
                <a
                  href="#vitrina"
                  className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-[15px] font-bold border tap-44"
                  style={{ borderColor: C.azul, color: C.azul }}
                >
                  Ver la vitrina
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm" style={{ color: C.muted }}>
                <Stars value={BIZ.rating} color={C.azul} />
                <span>{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
              </p>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative">
                <div
                  className="rounded-[28px] border-[6px] overflow-hidden"
                  style={{ borderColor: C.azul }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Panadería Pastelería Acuario en 23 Oriente, Talca"
                    className="w-full aspect-[4/3] object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold shadow-sm"
                  style={{ backgroundColor: C.azulHondo, color: '#FFFDF7' }}
                >
                  El local, como se ve desde la vereda
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La vitrina: precios reales ────────────────────────── */}
      <section id="vitrina" className="scroll-mt-16" style={{ backgroundColor: C.azulHondo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                className="text-[32px] md:text-[46px] leading-none"
                style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, color: '#FFFDF7' }}
              >
                Los precios de la vitrina, tal cual
              </h2>
              <p className="text-sm max-w-xs" style={{ color: 'rgba(255,253,247,0.75)' }}>
                Leídos de los cartelitos del mostrador: dulces desde $300 y palitaos de manjar para llevar.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-[1fr_360px] gap-8 items-start">
            <Reveal delay={100}>
              <ul
                className="rounded-3xl overflow-hidden divide-y"
                style={{ backgroundColor: C.carta, borderColor: C.linea }}
              >
                {VITRINA.map((v) => (
                  <li key={v.n} className="flex items-baseline gap-3 px-5 py-3">
                    <span className="text-[15px] font-bold" style={{ color: C.tinta }}>{v.n}</span>
                    <span className="flex-1 border-b-2 border-dotted translate-y-[-4px]" style={{ borderColor: C.linea }} aria-hidden="true" />
                    <span className="text-[15px] font-bold" style={{ color: C.azul }}>{v.p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <figure className="rounded-3xl overflow-hidden border-[6px]" style={{ borderColor: C.carta }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/vitrina.webp`}
                  alt="Vitrina de dulces de Pastelería Acuario con cartelitos de precios escritos a mano"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Del obrador ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className="text-[32px] md:text-[46px] leading-none text-center"
            style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, color: C.azulHondo }}
          >
            De su obrador a la mesa
          </h2>
          <p className="mt-3 text-center text-base max-w-xl mx-auto" style={{ color: C.muted }}>
            Fotos reales del local y de su Instagram: tortas, mini antojos y la empanada de choclo
            de la vitrina.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: 'morenita.webp', alt: 'Trozo de torta Morenita con manjar nuez de Pastelería Acuario', t: 'Morenita manjar nuez' },
            { src: 'antojos.webp', alt: 'Mini antojos variados para compartir de Pastelería Acuario', t: 'Mini antojos' },
            { src: 'empanada.webp', alt: 'Empanada de choclo en la vitrina de Acuario', t: 'Empanada de choclo' },
            { src: 'vitrina-dulces.webp', alt: 'Kuchen y pasteles en la vitrina refrigerada de Acuario', t: 'La vitrina de siempre' },
          ].map((p, i) => (
            <Reveal key={p.src} delay={i * 70}>
              <figure className="rounded-3xl overflow-hidden border bg-white" style={{ borderColor: C.linea }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/${p.src}`} alt={p.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                <figcaption className="px-4 py-3 text-sm font-bold text-center" style={{ color: C.azulHondo, fontFamily: 'var(--font-disp)' }}>
                  {p.t}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Mostrador: gente + reseñas ────────────────────────── */}
      <section className="border-y" style={{ backgroundColor: C.cremaBaja, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[360px_1fr] gap-10 items-center">
          <Reveal>
            <figure className="rounded-3xl overflow-hidden border-[6px]" style={{ borderColor: C.carta }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/atencion.webp`}
                alt="Atención en el mostrador de Pastelería Acuario: una torta en su caja lista para llevar"
                className="w-full object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <h2
                className="text-[30px] md:text-[42px] leading-tight"
                style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, color: C.azulHondo }}
              >
                Atención de mostrador, como en toda pastelería de barrio
              </h2>
            </Reveal>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 80}>
                  <blockquote
                    className="h-full rounded-3xl border p-5 flex flex-col"
                    style={{ backgroundColor: C.carta, borderColor: C.linea }}
                  >
                    <Stars value={r.s} color={C.azul} className="w-3.5 h-3.5" />
                    <p className="mt-3 text-[15px] leading-relaxed flex-1" style={{ color: C.tinta }}>
                      “{r.t}”
                    </p>
                    <footer className="mt-3 text-xs" style={{ color: C.muted }}>
                      {r.a} · Google
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Horario y mapa ────────────────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal>
            <h2
              className="text-[30px] md:text-[42px] leading-tight"
              style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, color: C.azulHondo }}
            >
              Abre temprano: llega por el pan o encarga la torta
            </h2>
            <div
              className="mt-6 rounded-3xl border p-6 space-y-4"
              style={{ backgroundColor: C.carta, borderColor: C.linea }}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] w-20 shrink-0" style={{ color: C.muted }}>
                  Dónde
                </span>
                <span className="text-base font-bold" style={{ color: C.tinta }}>
                  {BIZ.address}, {BIZ.city}
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] w-20 shrink-0" style={{ color: C.muted }}>
                  Teléfono
                </span>
                <a href={TEL_LINK} className="text-base font-bold underline underline-offset-4 tap-44" style={{ color: C.azul }}>
                  {BIZ.phoneDisplay}
                </a>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] w-20 shrink-0" style={{ color: C.muted }}>
                  Horario
                </span>
                <span className="text-base leading-relaxed" style={{ color: C.tinta }}>
                  {BIZ.hours.map((h) => (
                    <span key={h.d} className="block">
                      <strong>{h.d}:</strong> {h.h}
                    </span>
                  ))}
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] w-20 shrink-0" style={{ color: C.muted }}>
                  Redes
                </span>
                <span className="flex gap-4">
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-base font-bold underline underline-offset-4 tap-44" style={{ color: C.azul }}>
                    Instagram
                  </a>
                  <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="text-base font-bold underline underline-offset-4 tap-44" style={{ color: C.azul }}>
                    Facebook
                  </a>
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <LazyMap
              src={MAPS_EMBED}
              title="Mapa: Pastelería Acuario, 23 Oriente, Talca"
              className="w-full min-h-[340px] rounded-3xl border"
              style={{ borderColor: C.linea }}
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-bold underline underline-offset-4 tap-44"
              style={{ color: C.azul }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.azulHondo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <Reveal>
            <h2
              className="text-[30px] md:text-[44px] leading-tight"
              style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, color: '#FFFDF7' }}
            >
              ¿Torta para el finde? Llama y encarga
            </h2>
            <a
              href={TEL_LINK}
              className="mt-6 inline-flex items-center justify-center h-[48px] px-8 rounded-full text-[15px] font-bold tap-44"
              style={{ backgroundColor: '#FFFDF7', color: C.azulHondo }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
        <footer className="border-t" style={{ borderColor: 'rgba(255,253,247,0.15)' }}>
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
            style={{ color: 'rgba(255,253,247,0.7)' }}
          >
            <span>{BIZ.name} · {BIZ.address}, {BIZ.city} · desde {BIZ.desde}</span>
            <span>Demo de muestra · Fotos de Google Maps e Instagram</span>
          </div>
        </footer>
      </section>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.azul} fg="#fff" />
    </main>
  )
}
