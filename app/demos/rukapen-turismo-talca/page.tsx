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
  WA_LINK_PASEO,
} from './content'

const redonda = localFont({
  src: '../../fonts/baloo-2/normal-400-800.woff2',
  variable: '--rk-display',
})

const sans = localFont({
  src: '../../fonts/nunito/normal-200-1000.woff2',
  variable: '--rk-sans',
})

const mono = localFont({
  src: '../../fonts/ibm-plex-mono/normal-400.woff2',
  variable: '--rk-mono',
})

export const metadata = demoMetadata({
  slug: 'rukapen-turismo-talca',
  title: 'Rukapen Turismo Talca — quinta de recreo en El Rosario',
  description:
    'Quinta de recreo en el sector El Rosario de Talca: piscina, quincho techado y pradera para el domingo en familia. 5,0 estrellas en Google.',
  image: `${IMG}/piscina.webp`,
})

const C = {
  bosque: '#173C2A',
  bosqueOscuro: '#0F2A1D',
  agua: '#0E8FA8',
  aguaFuerte: '#0A6E80',
  aguaCielo: '#7FD4E0',
  aguaClara: '#E2F2F4',
  crema: '#F7F2E4',
  ink: '#1E2B24',
  muted: '#4E6258',
  line: 'rgba(23,60,42,0.16)',
} as const

const LUGARES = [
  {
    foto: `${IMG}/piscina.webp`,
    alt: 'Piscina de Rukapen con carpas y juegos de fondo',
    etiqueta: 'La piscina',
    detalle: 'Con carpas a la orilla para pasar la tarde entera.',
  },
  {
    foto: `${IMG}/quincho.webp`,
    alt: 'Quincho techado de Rukapen con mesas servidas',
    etiqueta: 'El quincho techado',
    detalle: 'Mesas y techumbre: la comida se sirve bajo techo, llueva o haga sol.',
  },
  {
    foto: `${IMG}/agua.webp`,
    alt: 'Pies descansando a la orilla del agua en Rukapen',
    etiqueta: 'El agua',
    detalle: 'Donde terminan los pies de todos los que vienen.',
  },
  {
    foto: `${IMG}/entorno.webp`,
    alt: 'Entorno natural con árboles en la entrada de la quinta',
    etiqueta: 'La pradera',
    detalle: 'Árboles, aire limpio y espacio para moverse tranquilo.',
  },
]

const DOMINGO = [
  {
    hora: '10:00',
    momento: 'La llegada',
    nota: 'Camino de tierra entre árboles hasta la quinta El Rosario.',
  },
  {
    hora: '12:00',
    momento: 'La primera chapuzón',
    nota: 'La piscina se llena de risas antes del almuerzo.',
  },
  {
    hora: '14:00',
    momento: 'La mesa en el quincho',
    nota: 'Comida de familia bajo el techado, sin apuro.',
  },
  {
    hora: '17:00',
    momento: 'La última del día',
    nota: 'El sol baja y la piscina sigue tibia.',
  },
  {
    hora: '19:30',
    momento: 'El cierre',
    nota: `La quinta cierra a las ${BIZ.cierre} — horario confirmado en su ficha.`,
  },
]

const NOTAS = [
  {
    texto:
      '“Hermoso lugar, mucha naturaleza, el aire muy limpio y fresco. Recomiendo tener contacto con lugares naturales, hace bien para la salud mental y física.”',
    autor: 'Ignacia Sepulveda',
  },
  {
    texto:
      '“Me encanta el lugar, me lo recomendaron y ya llevo dos domingos. Es tranquilo y la dueña del lugar es amorosa.”',
    autor: 'Virsi Duarte',
  },
  {
    texto: '“Excelente lugar para compartir con amigos y familia.”',
    autor: 'Diego',
  },
]

export default function Rukapen() {
  return (
    <div
      className={`${redonda.variable} ${sans.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink, fontFamily: 'var(--rk-sans)' }}
    >
      <BlitzNav
        name="Rukapen Turismo"
        links={[
          { href: '#la-quinta', label: 'La quinta' },
          { href: '#domingo', label: 'El domingo' },
          { href: '#reseñas', label: 'Reseñas' },
          { href: '#llegar', label: 'Llegar' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(15,42,29,0.82)',
          ink: '#F7F2E4',
          line: 'rgba(247,242,228,0.14)',
          btnBg: C.aguaFuerte,
          btnInk: '#fff',
        }}
        fontClass={redonda.className}
      />

      {/* ── Hero: la quinta del domingo ──────────────────────── */}
      <header className="relative min-h-svh flex items-end" style={{ backgroundColor: C.bosqueOscuro }}>
        <Image
          src={`${IMG}/piscina.webp`}
          alt="Piscina de Rukapen Turismo Talca con carpas y entorno natural"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(15,42,29,0.92) 0%, rgba(15,42,29,0.35) 55%, rgba(15,42,29,0.25) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 w-full">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`}
              style={{ color: C.aguaClara }}
            >
              Sector El Rosario · Talca
            </p>
            <h1
              className={`${redonda.className} font-extrabold leading-[0.95] mt-4 text-[clamp(2.8rem,9vw,5.6rem)]`}
              style={{ color: C.crema }}
            >
              Un domingo
              <br />
              en la <span style={{ color: C.agua }}>quinta</span>
            </h1>
            <p
              className="mt-5 text-base md:text-lg max-w-md leading-relaxed"
              style={{ color: 'rgba(247,242,228,0.85)' }}
            >
              Piscina, quincho techado y pradera en la quinta El Rosario — el
              paseo de día entero a minutos de Talca.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center px-6 py-3 text-base font-bold rounded-full"
                style={{ backgroundColor: C.aguaFuerte, color: '#fff' }}
              >
                Reservar un día
              </a>
              <a
                href={WA_LINK_PASEO}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center px-6 py-3 text-base font-bold rounded-full border"
                style={{ borderColor: 'rgba(247,242,228,0.5)', color: C.crema }}
              >
                Cotizar un paseo
              </a>
            </div>
            <p className={`${mono.className} mt-6 text-xs`} style={{ color: 'rgba(247,242,228,0.7)' }}>
              ★ {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── Lo que hay en la quinta ──────────────────────────── */}
      <section id="la-quinta" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
            style={{ color: C.aguaFuerte }}
          >
            Fotos del lugar, tal cual es
          </p>
          <h2
            className={`${redonda.className} font-extrabold text-[clamp(2rem,6vw,3.4rem)] leading-none mb-10`}
            style={{ color: C.bosque }}
          >
            Lo que hay en la quinta
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {LUGARES.map((l, i) => (
            <Reveal key={l.etiqueta} delay={i * 90}>
              <figure
                className="overflow-hidden rounded-3xl"
                style={{ backgroundColor: '#fff', border: `1px solid ${C.line}` }}
              >
                <Image
                  src={l.foto}
                  alt={l.alt}
                  width={640}
                  height={420}
                  className="w-full h-56 md:h-64 object-cover"
                />
                <figcaption className="px-5 py-4">
                  <p className={`${redonda.className} font-bold text-lg`} style={{ color: C.bosque }}>
                    {l.etiqueta}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: C.muted }}>
                    {l.detalle}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Un domingo en Rukapen ────────────────────────────── */}
      <section
        id="domingo"
        className="border-t border-b"
        style={{ backgroundColor: C.bosque, borderColor: 'rgba(247,242,228,0.15)' }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.aguaCielo }}
            >
              Así se ve el día
            </p>
            <h2
              className={`${redonda.className} font-extrabold text-[clamp(2rem,6vw,3.4rem)] leading-none`}
              style={{ color: C.crema }}
            >
              El domingo
              <br />
              en Rukapen
            </h2>
            <p
              className="mt-5 text-sm md:text-base leading-relaxed max-w-sm"
              style={{ color: 'rgba(247,242,228,0.75)' }}
            >
              No hace falta plan de más: llegar temprano, mojarse los pies y
              comer tranquilo. Los que vienen una vez, repiten el domingo
              siguiente.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center px-6 py-3 text-base font-bold rounded-full"
              style={{ backgroundColor: C.crema, color: C.bosque }}
            >
              Separar mi domingo
            </a>
          </Reveal>
          <div className="relative">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{ backgroundColor: 'rgba(247,242,228,0.25)' }}
              aria-hidden="true"
            />
            <ol className="space-y-8">
              {DOMINGO.map((d, i) => (
                <Reveal key={d.hora} delay={i * 90}>
                  <li className="relative pl-10">
                    <span
                      className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2"
                      style={{ borderColor: C.agua, backgroundColor: C.bosque }}
                      aria-hidden="true"
                    />
                    <p className={`${mono.className} text-sm`} style={{ color: C.aguaCielo }}>
                      {d.hora}
                    </p>
                    <h3
                      className={`${redonda.className} font-bold text-xl md:text-2xl mt-0.5`}
                      style={{ color: C.crema }}
                    >
                      {d.momento}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgba(247,242,228,0.75)' }}>
                      {d.nota}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Lo que cuentan los que vinieron ──────────────────── */}
      <section id="reseñas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
            style={{ color: C.aguaFuerte }}
          >
            Reseñas reales de Google
          </p>
          <h2
            className={`${redonda.className} font-extrabold text-[clamp(2rem,6vw,3.4rem)] leading-none mb-10`}
            style={{ color: C.bosque }}
          >
            Los que ya vinieron
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {NOTAS.map((n, i) => (
            <Reveal key={n.autor} delay={i * 100}>
              <figure
                className="h-full rounded-3xl p-6 flex flex-col justify-between"
                style={{ backgroundColor: i === 1 ? C.aguaClara : '#fff', border: `1px solid ${C.line}` }}
              >
                <div>
                  <p className={`${mono.className} text-xs`} style={{ color: C.bosque }}>
                    ★★★★★
                  </p>
                  <blockquote className="mt-4 text-sm md:text-base leading-relaxed">
                    {n.texto}
                  </blockquote>
                </div>
                <figcaption
                  className={`${mono.className} mt-6 text-[11px] uppercase tracking-widest`}
                  style={{ color: C.muted }}
                >
                  {n.autor} — Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ──────────────────────────────────────── */}
      <section
        id="llegar"
        className="border-t"
        style={{ backgroundColor: C.aguaClara, borderColor: C.line }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`}
              style={{ color: C.aguaFuerte }}
            >
              Cómo llegar
            </p>
            <h2
              className={`${redonda.className} font-extrabold text-[clamp(2rem,6vw,3.4rem)] leading-none`}
              style={{ color: C.bosque }}
            >
              Quinta El Rosario,
              <br />
              Hijuela 7
            </h2>
            <ul className={`${mono.className} mt-6 space-y-3 text-sm`} style={{ color: C.muted }}>
              <li>— Sector El Rosario, camino de tierra señalizado.</li>
              <li>— Cierra a las {BIZ.cierre} · WhatsApp {BIZ.phoneDisplay}</li>
              <li>
                —{' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                  style={{ color: C.ink }}
                >
                  Abrir en Google Maps
                </a>
              </li>
            </ul>
            <figure className="mt-8 rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/camino.webp`}
                alt="Camino de tierra de acceso a la quinta El Rosario"
                width={640}
                height={360}
                className="w-full h-44 object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                title="Mapa de Rukapen Turismo Talca"
                src={MAPS_EMBED}
                className="w-full min-h-[320px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.bosqueOscuro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
          <div>
            <p className={`${redonda.className} font-extrabold text-lg`} style={{ color: C.crema }}>
              {BIZ.name}
            </p>
            <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(247,242,228,0.6)' }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
          </div>
          <nav
            className={`${mono.className} flex gap-5 text-xs`}
            style={{ color: 'rgba(247,242,228,0.7)' }}
          >
            <a href="#la-quinta" className="tap-44 hover:text-white transition-colors">La quinta</a>
            <a href="#domingo" className="tap-44 hover:text-white transition-colors">El domingo</a>
            <a href="#llegar" className="tap-44 hover:text-white transition-colors">Llegar</a>
          </nav>
          <p className="text-[11px] leading-relaxed max-w-xs" style={{ color: 'rgba(247,242,228,0.6)' }}>
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
