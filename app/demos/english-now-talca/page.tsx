import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars, CallFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, CURSOS, RESENAS } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'english-now-talca',
  title: 'English Now · inglés presencial y online en Talca centro',
  description:
    'Instituto de inglés en 2 Norte 1040, Talca: clases presenciales y online, intensivos de verano y todos los niveles. Demo de muestra.',
  image: `${IMG}/fachada.webp`,
})

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400' }],
  variable: '--font-disp',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900' }],
  variable: '--font-body',
})

// Identidad del instituto: azul marino de la fachada + rojo del logo "NOW".
const C = {
  navy: '#16294B',
  navyDeep: '#0F1D36',
  rojo: '#D3323C',
  rojoTxt: '#C22B34',
  rojoClaro: '#FF8A80',
  papel: '#F5F3EE',
  carta: '#FFFFFF',
  tinta: '#1C2431',
  muted: '#5C6672',
  linea: '#DDD8CC',
} as const

const niveles = ['A1', 'A2', 'B1', 'B2', 'C1']

export default function EnglishNowPage() {
  return (
    <main
      className={`${display.variable} ${body.variable}`}
      style={{ backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Barra superior ────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b" style={{ backgroundColor: C.papel, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2.5 tap-44">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="h-9 w-auto rounded-sm"
              aria-hidden="true"
            />
            <span className="leading-none">
              <span className="block text-[17px] uppercase" style={{ fontFamily: 'var(--font-disp)', color: C.navy }}>
                English <span style={{ color: C.rojoTxt }}>Now</span>
              </span>
              <span className="block text-[10px] tracking-[0.14em] uppercase" style={{ color: C.muted }}>
                2 Norte 1040 · Talca
              </span>
            </span>
          </a>
          <a
            href={TEL_LINK}
            className="text-sm font-bold px-4 py-2 rounded tap-44"
            style={{ backgroundColor: C.rojo, color: '#fff' }}
          >
            Llamar
          </a>
        </div>
      </header>

      {/* ── Portada: titular + edificio con banderas ──────────── */}
      <section id="inicio" className="scroll-mt-16" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'rgba(245,243,238,0.7)' }}>
              Instituto de inglés · Talca centro · online y presencial
            </p>
            <h1
              className="text-[36px] md:text-[60px] leading-[1.02] max-w-3xl uppercase"
              style={{ fontFamily: 'var(--font-disp)', color: '#F5F3EE' }}
            >
              Inglés en tus manos, a una cuadra de la Alameda
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(245,243,238,0.85)' }}>
              English Now funciona en la casa de 2 Norte 1040, la de la cabina telefónica roja y las
              banderas en la fachada, y también en clases online para todos los niveles.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center h-[48px] px-6 rounded text-[15px] font-bold tap-44"
                style={{ backgroundColor: C.rojo, color: '#fff' }}
              >
                Consultar: {BIZ.phoneDisplay}
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded text-[15px] font-semibold border tap-44"
                style={{ borderColor: 'rgba(245,243,238,0.45)', color: '#F5F3EE' }}
              >
                @englishnowtalca
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm" style={{ color: 'rgba(245,243,238,0.75)' }}>
              <Stars value={BIZ.rating} color={C.rojo} />
              <span>{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/fachada.webp`}
              alt="Edificio de English Now en 2 Norte, Talca, con banderas de Reino Unido y Estados Unidos y el letrero del instituto"
              className="w-full max-h-[520px] object-cover object-center rounded border-4"
              style={{ borderColor: 'rgba(245,243,238,0.25)' }}
              loading="eager"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Cursos como módulos con niveles ───────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className="text-[30px] md:text-[46px] leading-none uppercase"
            style={{ fontFamily: 'var(--font-disp)', color: C.navy }}
          >
            Formas de estudiar acá
          </h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: C.muted }}>
            Presencial u online, regular o intensivo: la oferta que el instituto anuncia en su
            fachada y sus redes.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {CURSOS.map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <article
                className="h-full rounded-lg border p-6 flex flex-col"
                style={{ backgroundColor: C.carta, borderColor: C.linea }}
              >
                <span
                  className="self-start text-[11px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded"
                  style={{ backgroundColor: C.navy, color: '#F5F3EE' }}
                >
                  {c.tag}
                </span>
                <h3
                  className="mt-4 text-[22px] leading-tight uppercase"
                  style={{ fontFamily: 'var(--font-disp)', color: C.tinta }}
                >
                  {c.t}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed flex-1" style={{ color: C.muted }}>
                  {c.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.16em] font-bold" style={{ color: C.muted }}>
              Niveles:
            </span>
            {niveles.map((n) => (
              <span
                key={n}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold"
                style={{ borderColor: C.navy, color: C.navy }}
              >
                {n}
              </span>
            ))}
            <span className="text-sm" style={{ color: C.muted }}>«All levels», como dicen sus alumnos</span>
          </div>
        </Reveal>
      </section>

      {/* ── Dentro del instituto: collage real ────────────────── */}
      <section style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2
              className="text-[30px] md:text-[44px] leading-none uppercase"
              style={{ fontFamily: 'var(--font-disp)', color: '#F5F3EE' }}
            >
              Dentro del instituto
            </h2>
            <p className="mt-3 text-base max-w-xl" style={{ color: 'rgba(245,243,238,0.75)' }}>
              Fotos publicadas por el propio instituto: certificados, salas y el patio donde
              los alumnos se quedan conversando después de clase.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: 'clase.webp', alt: 'Alumnos de English Now con sus certificados en la sala del instituto', cls: 'col-span-2 aspect-[2/1]' },
              { src: 'patio.webp', alt: 'Patio del instituto con alumnos jugando ping pong junto a la sala Classroom 1', cls: 'aspect-square' },
              { src: 'certificados.webp', alt: 'Dos alumnas con certificado frente al logo circular de English Now', cls: 'aspect-square' },
              { src: 'recepcion.webp', alt: 'Recepción y secretaría del instituto English Now', cls: 'aspect-square' },
              { src: 'instituto.webp', alt: 'Mural de la Estatua de la Libertad y cabina telefónica roja en English Now', cls: 'aspect-square' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 60} className={p.cls.startsWith('col-span') ? 'col-span-2' : ''}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/${p.src}`}
                  alt={p.alt}
                  className={`w-full ${p.cls.includes('aspect-') ? p.cls.split(' ').pop() : 'aspect-square'} object-cover rounded border-2`}
                  style={{ borderColor: 'rgba(245,243,238,0.2)' }}
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pizarrón: horario de atención ─────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <h2
              className="text-[30px] md:text-[44px] leading-tight uppercase"
              style={{ fontFamily: 'var(--font-disp)', color: C.navy }}
            >
              Abierto hasta las 21:30: inglés después del trabajo
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
              El horario amplio de lunes a viernes permite tomar clases en la tarde o en la noche,
              y los sábados por la mañana hay atención hasta la una.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
              Dirección: <strong style={{ color: C.tinta }}>{BIZ.address}, {BIZ.city}</strong>. Consulta
              valores y cupos al <a href={TEL_LINK} className="font-bold underline underline-offset-4 tap-44" style={{ color: C.rojoTxt }}>{BIZ.phoneDisplay}</a>.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg overflow-hidden border-4" style={{ borderColor: C.navy, backgroundColor: C.navy }}>
              <div className="px-6 pt-5 pb-3 flex items-center justify-between">
                <span className="text-[11px] tracking-[0.2em] uppercase font-bold" style={{ color: 'rgba(245,243,238,0.6)' }}>
                  Horario de atención
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-bold" style={{ color: C.rojoClaro }}>
                  Pizarrón
                </span>
              </div>
              <ul className="divide-y" style={{ borderColor: 'rgba(245,243,238,0.12)' }}>
                {BIZ.hours.map((h) => (
                  <li
                    key={h.d}
                    className="flex items-center justify-between px-6 py-4"
                    style={{ borderColor: 'rgba(245,243,238,0.12)' }}
                  >
                    <span className="text-[15px] font-bold uppercase" style={{ fontFamily: 'var(--font-disp)', color: '#F5F3EE' }}>
                      {h.d}
                    </span>
                    <span className="text-[15px] font-semibold" style={{ color: 'rgba(245,243,238,0.85)' }}>
                      {h.h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas + entrada ─────────────────────────────────── */}
      <section className="border-t" style={{ backgroundColor: C.carta, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Reveal>
              <h2
                className="text-[30px] md:text-[40px] leading-tight uppercase mb-6"
                style={{ fontFamily: 'var(--font-disp)', color: C.navy }}
              >
                What students say
              </h2>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 80}>
                  <blockquote
                    className="rounded-lg border p-5"
                    style={{ borderColor: C.linea, backgroundColor: C.papel }}
                  >
                    <Stars value={r.s} color={C.rojo} className="w-3.5 h-3.5" />
                    <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.tinta }}>
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
          <Reveal delay={120}>
            <figure className="rounded-lg overflow-hidden border h-full flex flex-col" style={{ borderColor: C.linea }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/entrada.webp`}
                alt="Entrada de English Now con la cabina telefónica roja estilo Londres y el letrero del instituto"
                className="w-full flex-1 min-h-[320px] object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-xs" style={{ color: C.muted }}>
                La entrada es inconfundible: cabina telefónica roja y banderas en la fachada.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Mapa + cierre ─────────────────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal>
            <h2
              className="text-[30px] md:text-[42px] leading-tight uppercase"
              style={{ fontFamily: 'var(--font-disp)', color: C.navy }}
            >
              2 Norte 1040, la casa de las banderas
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
              En pleno centro de Talca, a pasos de la Alameda. El instituto atiende de lunes a
              sábado; por teléfono se consultan cupos, niveles y valores del semestre.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center h-[48px] px-6 rounded text-[15px] font-bold tap-44"
                style={{ backgroundColor: C.rojo, color: '#fff' }}
              >
                Llamar al instituto
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded text-[15px] font-bold border tap-44"
                style={{ borderColor: C.navy, color: C.navy }}
              >
                Ver en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <LazyMap
              src={MAPS_EMBED}
              title="Mapa: English Now, 2 Norte 1040, Talca"
              className="w-full min-h-[340px] rounded-lg border"
              style={{ borderColor: C.linea }}
            />
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(245,243,238,0.65)' }}>
          <span>{BIZ.full} · {BIZ.slogan} · {BIZ.address}, {BIZ.city}</span>
          <span>Demo de muestra · Fotos de Google Maps e Instagram</span>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.rojo} fg="#fff" />
    </main>
  )
}
