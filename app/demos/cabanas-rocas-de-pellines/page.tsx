import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la bajamar del roquerío». Rocas de Pellines son
 * cabañas de madera plantadas sobre la rompiente de la costa de
 * Constitución: la página se compone como el acantilado, en estratos.
 * Bandas horizontales dentadas separan las secciones (capas de roca),
 * los datos van en una tabla de mareas y la ficha de ruta «M-50 km 20»
 * funciona como letrero de carretera costera. Archivo Black hace de
 * letra tallada, Work Sans lee el cuerpo y Space Mono marca las mareas.
 * El acento es el cobre del atardecer sobre la roca.
 */
const C = {
  arena: '#EFE9DB',
  soft: '#E4DCC8',
  roca: '#1F282B',
  deep: '#141C1F',
  cobre: '#9C4F1E',
  cobreHi: '#C06430',
  ink: '#22291F',
  muted: '#5C6357',
  line: 'rgba(31,40,43,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-rocas-de-pellines',
  title: 'Cabañas Rocas de Pellines — frente al mar, camino a Chanco',
  description:
    'Cabañas y habitaciones equipadas sobre el roquerío de Pellines, con piscina, quincho y salida directa a la playa. Ruta M-50 km 20, Constitución.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El predio', href: '#predio' },
  { label: 'La costa', href: '#costa' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Reservar', href: '#reservar' },
]

const ESTRATOS = [
  {
    src: `${IMG}/dormitorio.webp`,
    titulo: 'Cabañas equipadas',
    bajada:
      'Loza, hervidor, refrigerador y agua caliente: llegas, sueltas las cosas y enciendes el hervidor. También hay habitaciones.',
    ficha: 'cabañas + habitaciones',
  },
  {
    src: `${IMG}/piscina.webp`,
    titulo: 'Piscina con sol de tarde',
    bajada:
      'La piscina queda resguardada del viento de la costa; los huéspedes la describen limpia y rica para los niños.',
    ficha: 'la favorita de los niños',
  },
  {
    src: `${IMG}/piscina-quincho.webp`,
    titulo: 'Quincho para el asado',
    bajada:
      'Techado y con mesas: cuando el viento de la tarde aprieta, el asado se corre al quincho.',
    ficha: 'quincho techado',
  },
  {
    src: `${IMG}/entrada.webp`,
    titulo: 'Salida directa a la playa',
    bajada:
      'Del predio se baja caminando al roquerío de Pellines: la orilla queda a unos pasos de la puerta.',
    ficha: 'acceso a la playa',
  },
]

const RESENAS = [
  {
    nombre: 'Danae Chacana',
    fecha: 'Hace 2 años',
    texto:
      'Hermoso y tranquilo. En las noches sólo se escuchan las olas del mar. Es el lugar ideal para venir a descansar y disfrutar en familia.',
  },
  {
    nombre: 'María Ramirez',
    fecha: 'Hace 2 años',
    texto:
      'Es un lugar muy tranquilo, tiene piscina, cabaña totalmente equipada. Pasa la señora Verónica vendiendo pancito amasado que es exquisito, totalmente recomendable.',
  },
  {
    nombre: 'Magdalena Hernández',
    fecha: 'Hace un año',
    texto:
      'Lugar hermoso con acceso a la playa y además con una rica piscina. Súper limpio el lugar, las cabañas y el entorno es hermoso.',
  },
]

// ── Piezas del acantilado ───────────────────────────────────

/** Borde dentado de roca: separador de estratos. */
function Estrato({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 26"
      preserveAspectRatio="none"
      className="block w-full h-[18px] md:h-[26px]"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <path
        d="M0,26 L0,14 L60,16 L130,8 L210,15 L290,10 L380,18 L470,9 L560,16 L650,12 L740,19 L830,7 L920,14 L1010,11 L1100,17 L1200,10 L1200,26 Z"
        fill={fill}
      />
    </svg>
  )
}

/** Marcador de sección: líneas de estrato + etiqueta mono. */
function Capa({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const col = light ? '#D8CFBB' : C.cobre
  return (
    <div className="mb-4">
      <div aria-hidden="true" className="flex flex-col gap-[5px] w-16 mb-3">
        <span className="block h-[3px] w-full" style={{ backgroundColor: col }} />
        <span className="block h-[3px] w-3/4" style={{ backgroundColor: col }} />
        <span className="block h-[3px] w-1/2" style={{ backgroundColor: col }} />
      </div>
      <p
        className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em]`}
        style={{ color: col }}
      >
        {children}
      </p>
    </div>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} · así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CabanasRocasDePellinesPage() {
  return (
    <div
      className={`${body.className} crp min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.arena, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .crp a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(239,233,219,0.95)',
          ink: C.roca,
          line: C.line,
          btnBg: C.cobre,
          btnInk: '#EFE9DB',
        }}
      />

      {/* ── Hero: el roquerío ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/rocas-mar.webp`}
          alt="Rocas volcánicas del borde costero de Pellines con el mar de fondo, frente a las cabañas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,28,31,0.5) 0%, rgba(20,28,31,0.2) 45%, rgba(20,28,31,0.78) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24">
          <div className="max-w-3xl">
            <Reveal>
              <div
                className={`${mono.className} inline-flex items-center gap-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] px-3 py-1.5 mb-5`}
                style={{ backgroundColor: C.arena, color: C.roca }}
              >
                <span className="inline-block w-2 h-2" style={{ backgroundColor: C.cobreHi }} aria-hidden="true" />
                Ruta M-50 · km 20 · camino a Chanco
              </div>
              <h1
                className={`${display.className} uppercase leading-[0.9] tracking-[0.01em] text-[clamp(3rem,12vw,7.5rem)]`}
                style={{ color: '#EFE9DB' }}
              >
                Rocas de
                <br />
                Pellines
              </h1>
              <p className="text-base md:text-lg leading-relaxed mt-5 max-w-xl" style={{ color: 'rgba(239,233,219,0.9)' }}>
                Cabañas de madera sobre el roquerío de la costa de
                Constitución, con piscina, quincho y salida directa a la
                playa.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} uppercase font-bold tracking-[0.08em] text-sm px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.cobre, color: '#EFE9DB' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#predio"
                  className={`${mono.className} uppercase font-bold tracking-[0.08em] text-sm px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(239,233,219,0.6)', color: '#EFE9DB' }}
                >
                  Ver el predio
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        {/* faja de datos bajo el hero */}
        <div className="relative mt-10 md:mt-14" style={{ backgroundColor: C.roca }}>
          <ul
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] text-center`}
            style={{ color: '#D8CFBB' }}
          >
            <li>{BIZ.rating} ★ en Google · {BIZ.reviews} opiniones</li>
            <li>Salida directa a la playa</li>
            <li>Piscina · quincho</li>
            <li>Constitución, Maule</li>
          </ul>
        </div>
      </section>

      <Estrato fill={C.arena} flip />

      {/* ── El predio en estratos ── */}
      <section id="predio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Capa>El predio, capa por capa</Capa>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} uppercase tracking-[0.01em] text-4xl md:text-6xl leading-[0.95]`}
              style={{ color: C.roca }}
            >
              Dormir sobre
              <br />
              la rompiente
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Cabañas, habitaciones, piscina, quincho y la bajada a la playa.
              Fotos reales del complejo.
            </p>
          </div>
        </Reveal>
        <ul>
          {ESTRATOS.map((e, i) => (
            <li key={e.titulo} className="border-t-2 first:border-t-0" style={{ borderColor: C.roca }}>
              <Reveal delay={i * 80}>
                <article
                  className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center py-8 md:py-10 ${
                    i % 2 ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  <div className="md:col-span-5 [direction:ltr]">
                    <div
                      className="relative overflow-hidden aspect-[4/3]"
                      style={{ boxShadow: '8px 8px 0 ' + C.soft }}
                    >
                      <Image
                        src={e.src}
                        alt={`${e.titulo} en Cabañas Rocas de Pellines, Constitución`}
                        fill
                        sizes="(min-width: 768px) 40vw, calc(100vw - 2.5rem)"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 [direction:ltr]">
                    <p className={`${mono.className} text-[10.5px] uppercase tracking-[0.22em] mb-2`} style={{ color: C.cobre }}>
                      capa {String(i + 1).padStart(2, '0')} · {e.ficha}
                    </p>
                    <h3
                      className={`${display.className} uppercase tracking-[0.01em] text-3xl md:text-4xl leading-[0.95] mb-3`}
                      style={{ color: C.roca }}
                    >
                      {e.titulo}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-lg" style={{ color: C.muted }}>
                      {e.bajada}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <Estrato fill={C.deep} />

      {/* ── La costa: tabla de mareas ── */}
      <section id="costa" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Capa light>La costa de Pellines</Capa>
            <h2
              className={`${display.className} uppercase tracking-[0.01em] text-4xl md:text-6xl leading-[0.95] mb-4`}
              style={{ color: '#EFE9DB' }}
            >
              El mar marca
              <br />
              el horario
            </h2>
            <p className="text-sm md:text-base max-w-xl leading-relaxed mb-10 md:mb-14" style={{ color: 'rgba(239,233,219,0.75)' }}>
              A esta costa se viene a escuchar las olas, caminar el roquerío
              y ver el sol caer detrás del agua. Fotos reales del entorno.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { src: `${IMG}/atardecer.webp`, pie: 'La tarde baja sobre el roquerío', tag: 'bajamar' },
              { src: `${IMG}/hero.webp`, pie: 'Las cabañas sobre la costa', tag: 'pleamar' },
              { src: `${IMG}/ocaso.webp`, pie: 'El último sol del día', tag: 'ocaso' },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 110}>
                <figure>
                  <div className="relative overflow-hidden aspect-[3/4]" style={{ boxShadow: '0 18px 44px rgba(0,0,0,0.35)' }}>
                    <Image
                      src={g.src}
                      alt={`${g.pie}, sector Pellines, costa de Constitución`}
                      fill
                      sizes="(min-width: 768px) 33vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="flex items-baseline justify-between gap-3 pt-3">
                    <p className="text-sm leading-snug" style={{ color: 'rgba(239,233,219,0.85)' }}>
                      {g.pie}
                    </p>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em] shrink-0`} style={{ color: C.cobreHi }}>
                      {g.tag}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          {/* tabla de mareas: datos útiles */}
          <Reveal delay={160}>
            <dl
              className={`${mono.className} mt-12 border-t-2 grid sm:grid-cols-2 lg:grid-cols-4 text-sm`}
              style={{ borderColor: C.cobreHi }}
            >
              {[
                { k: 'Desde Constitución', v: 'camino a Chanco, km 20' },
                { k: 'Playa', v: 'bajada directa desde el predio' },
                { k: 'Para saber', v: 'no se aceptan mascotas' },
                { k: 'De noche', v: 'se escuchan las olas' },
              ].map((d) => (
                <div key={d.k} className="px-4 py-4 border-b border-dashed" style={{ borderColor: 'rgba(239,233,219,0.2)' }}>
                  <dt className="text-[10.5px] uppercase tracking-[0.2em] mb-1" style={{ color: C.cobreHi }}>
                    {d.k}
                  </dt>
                  <dd className="leading-snug" style={{ color: '#EFE9DB' }}>
                    {d.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Estrato fill={C.arena} flip />

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Capa>Lo que dice la orilla</Capa>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} uppercase tracking-[0.01em] text-4xl md:text-6xl leading-[0.95]`}
              style={{ color: C.roca }}
            >
              {BIZ.rating} de 5,
              <br />
              {BIZ.reviews} opiniones
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.cobre, textDecorationColor: 'rgba(156,79,30,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 110}>
              <figure
                className="h-full p-5 md:p-6"
                style={{ backgroundColor: '#F7F3E8', boxShadow: `6px 6px 0 ${C.soft}`, border: `1px solid ${C.line}` }}
              >
                <div className="text-sm mb-3" style={{ color: C.cobre, letterSpacing: '0.15em' }} aria-label="5 de 5 estrellas">
                  ★★★★★
                </div>
                <blockquote className="text-[15px] leading-relaxed mb-5" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} text-[10.5px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {r.nombre} · {r.fecha} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Reservar + mapa ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.roca }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Capa light>Reservas</Capa>
            <h2
              className={`${display.className} uppercase tracking-[0.01em] text-4xl md:text-6xl leading-[0.95] mb-6`}
              style={{ color: '#EFE9DB' }}
            >
              La marea no
              <br />
              <span style={{ color: C.cobreHi }}>espera</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(239,233,219,0.78)' }}>
              Consulta fechas y cantidad de personas directo al WhatsApp o
              al correo. La respuesta es de la casa, no de un call center.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} uppercase font-bold tracking-[0.08em] text-sm px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.cobre, color: '#EFE9DB' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={`mailto:${BIZ.email}`}
                className={`${mono.className} uppercase font-bold tracking-[0.08em] text-sm px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(239,233,219,0.5)', color: '#EFE9DB' }}
              >
                Correo
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed mt-8" style={{ color: 'rgba(239,233,219,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
              <br />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.cobreHi }}
              >
                Cómo llegar →
              </a>
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[280px] border" style={{ borderColor: 'rgba(239,233,219,0.25)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} text-[10.5px] uppercase tracking-[0.18em] mt-3`} style={{ color: 'rgba(239,233,219,0.6)' }}>
              Ruta M-50 · sector Pellines · entre Constitución y Chanco
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#EFE9DB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} uppercase tracking-[0.01em] text-2xl mb-2`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(239,233,219,0.62)' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={`mailto:${BIZ.email}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.email}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(239,233,219,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(239,233,219,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(239,233,219,0.7)' }}>
            Fotos, opiniones y datos tomados de la ficha pública de Google y
            del registro Asetur de Turismo Constitución; el WhatsApp es el real.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
