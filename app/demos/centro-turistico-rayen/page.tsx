import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la señal del sendero». El Centro Turístico Rayen
 * es un predio de bosque nativo camino a Vilches: la página se lee como
 * la cartelera de un parque. Señales de mano (flechas de madera) marcan
 * los servicios, los datos prácticos van como tabla de portón y las
 * reseñas son el libro de visitas. El acento es el rojo copihue del logo
 * real, la flor rayén que da nombre al centro.
 * Barlow Condensed hace de letra de señalética, Public Sans lee el cuerpo
 * e IBM Plex Mono anota los kilómetros.
 */
const C = {
  paper: '#F4EFE1',
  soft: '#E7E0C9',
  bosque: '#20392B',
  deep: '#152519',
  copihue: '#B53240',
  ink: '#26301F',
  muted: '#59634F',
  line: 'rgba(32,57,43,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-turistico-rayen',
  title: 'Centro Turístico Rayen — Cabañas y camping en Vilches, San Clemente',
  description:
    'Cabañas, camping, hostería, piscina y tinajas de agua caliente en un bosque nativo de Vilches, San Clemente. Reserva directa por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El predio', href: '#predio' },
  { label: 'Salidas', href: '#salidas' },
  { label: 'Antes de llegar', href: '#datos' },
  { label: 'Reservar', href: '#reservar' },
]

const SENALES = [
  {
    src: `${IMG}/cabana.webp`,
    nombre: 'Cabañas',
    detalle: 'Cuatro cabañas de madera dentro del bosque, hasta 6 personas cada una, con terraza y zona de parrilla.',
    ficha: '4 unidades · hasta 6 personas',
  },
  {
    src: `${IMG}/camping.webp`,
    nombre: 'Camping',
    detalle: 'Sitios entre árboles nativos con mesas y parrillas. Espacio de sobra para la carpa y la camioneta.',
    ficha: 'parrillas · mesas · sombra',
  },
  {
    src: `${IMG}/predio.webp`,
    nombre: 'Piscina',
    detalle: 'Piscina grande con sector para niños y camastros de madera, de cara al cerro.',
    ficha: 'sector niños + adultos',
  },
  {
    src: `${IMG}/tinajas.webp`,
    nombre: 'Tinajas',
    detalle: 'Dos tinajas privadas de agua caliente con hidromasaje, a gas, bajo la pérgola del deck.',
    ficha: 'agua caliente · a gas',
  },
  {
    src: `${IMG}/cabana-letrero.webp`,
    nombre: 'Hostería',
    detalle: 'También hay hostería para quienes vienen sin carpa ni semana completa.',
    ficha: 'habitaciones del centro',
  },
]

const SALIDAS = [
  {
    src: `${IMG}/condores.webp`,
    nombre: 'Valle de Los Cóndores · Alto Maule',
    pie: 'El gran trekking de la zona: santuario de roca y nido de cóndores.',
  },
  {
    src: `${IMG}/salto-maule.webp`,
    nombre: 'Salto Maule',
    pie: 'La caída del río entre la roca, a un rato del predio.',
  },
  {
    src: `${IMG}/lago-colbun.webp`,
    nombre: 'Lago Colbún',
    pie: 'Pesca, kayak y playas de orilla a media tarde de distancia.',
  },
  {
    src: `${IMG}/cascada.webp`,
    nombre: 'Cascada Invertida',
    pie: 'El viento dobla el agua hacia arriba: la postal rara del circuito.',
  },
]

const DATOS = [
  { k: 'Check-in', v: 'desde las 12:00' },
  { k: 'Check-out', v: 'hasta las 14:00' },
  { k: 'Reserva', v: '50% de anticipo' },
  { k: 'Pago', v: 'transferencia o efectivo' },
  { k: 'Ropa de cama', v: 'la facilita la administración' },
  { k: 'Mascotas', v: 'bienvenidas' },
  { k: 'Estacionamiento', v: 'junto a cada cabaña' },
  { k: 'Atención', v: 'los 365 días del año' },
]

const RESENAS = [
  {
    nombre: 'Luz Dottori',
    fecha: 'hace 7 meses',
    texto:
      'Fui a acampar con mi pareja dos noches, hermoso entorno, bien organizado, seguro y limpio. Ideal para vacacionar en familia si se busca un lugar tranquilo y acogedor. Los dueños muy atentos y amables.',
  },
  {
    nombre: 'Mariela González Rojas',
    fecha: 'hace 7 meses',
    texto:
      'Lindo lugar, cabañas cómodas, con todo lo necesario para alojar conectados con la naturaleza. Piscina espaciosa con lugar para niños y adultos, y tinajas para relajarse mirando las estrellas.',
  },
  {
    nombre: 'Nicole Vásquez',
    fecha: 'hace 6 meses',
    texto:
      'Excelente lugar, muy tranquilo, amabilidad al 100%. Nosotros lo usamos para descansar y ser punto de llegada después de conocer otros sectores turísticos de la zona. Volveremos.',
  },
]

// ── Piezas del parque ───────────────────────────────────────

/** Curvas de nivel suaves para fondos oscuros. */
function Curvas({ color = 'rgba(244,239,225,0.10)', className = '' }: { color?: string; className?: string }) {
  return (
    <svg aria-hidden="true" className={`absolute inset-0 w-full h-full ${className}`} preserveAspectRatio="none" viewBox="0 0 1200 600">
      {[
        'M-40,120 C180,60 300,190 520,150 S860,40 1240,120',
        'M-40,220 C200,150 340,290 560,240 S880,140 1240,230',
        'M-40,330 C220,250 380,390 600,330 S900,240 1240,340',
        'M-40,440 C240,360 420,490 640,430 S920,340 1240,450',
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke={color} strokeWidth="1.4" />
      ))}
      <circle cx="880" cy="240" r="4" fill={color} />
      <circle cx="330" cy="150" r="4" fill={color} />
    </svg>
  )
}

/** Flecha de señalética: tablón con punta de flecha. */
function Flecha({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 46 18" className={className} width="46" height="18">
      <path d="M0,5 L34,5 L34,1 L46,9 L34,17 L34,13 L0,13 Z" fill="currentColor" />
    </svg>
  )
}

/** Hito de sección: flecha + etiqueta mono. */
function Hito({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#D8D2BA' : C.copihue }}
    >
      <Flecha className="shrink-0" />
      {children}
    </p>
  )
}

/**
 * Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni
 * botones. Fondo en rgba() inline — con bg-ink/90 Chrome serializa
 * color-mix como oklab() y los chequeos de contraste no lo leen.
 */
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

export default function CentroTuristicoRayenPage() {
  return (
    <div
      className={`${body.className} ctr min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .ctr a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,239,225,0.95)',
          ink: C.bosque,
          line: C.line,
          btnBg: C.copihue,
          btnInk: '#F4EFE1',
        }}
      />

      {/* ── Hero: el portón del predio ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Piscina del Centro Turístico Rayen con camastros de madera, árboles nativos y el cerro de Vilches al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(21,37,25,0.45) 0%, rgba(21,37,25,0.15) 45%, rgba(21,37,25,0.72) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24">
          <div className="max-w-2xl">
            <Reveal>
              {/* tablón de entrada con el logo real */}
              <div
                className="px-6 md:px-9 pt-7 pb-8 md:pt-9 md:pb-10"
                style={{
                  backgroundColor: C.paper,
                  boxShadow: '0 30px 70px rgba(21,37,25,0.45)',
                  borderTop: `6px solid ${C.copihue}`,
                }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/logo.webp`}
                    alt="Logo del Centro Turístico Rayen: flor de copihue roja y letra manuscrita"
                    className="w-[86px] md:w-[110px] h-auto shrink-0 mt-1"
                  />
                  <div>
                    <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-2`} style={{ color: C.copihue }}>
                      Vilches · San Clemente · K-705 km 8
                    </p>
                    <h1
                      className={`${display.className} uppercase font-extrabold leading-[0.95] tracking-[0.01em] text-[clamp(2.6rem,9vw,4.8rem)]`}
                      style={{ color: C.bosque }}
                    >
                      El bosque te
                      <br />
                      deja dormir
                    </h1>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed mt-5 max-w-xl" style={{ color: C.muted }}>
                  Cabañas, camping, piscina y dos tinajas de agua caliente
                  dentro de un bosque nativo, camino a Alto Maule.
                </p>
                <div className="flex flex-wrap gap-3 mt-7">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase font-bold tracking-[0.06em] text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.copihue, color: '#F4EFE1' }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#predio"
                    className={`${display.className} uppercase font-bold tracking-[0.06em] text-base px-7 py-3 border-2 transition-colors tap-44`}
                    style={{ borderColor: C.bosque, color: C.bosque }}
                  >
                    Recorrer el predio
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        {/* faja de portón */}
        <div className="relative mt-10 md:mt-14" style={{ backgroundColor: C.bosque }}>
          <ul
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.2em] text-center`}
            style={{ color: '#D8D2BA' }}
          >
            <li>{BIZ.rating} ★ en Google · {BIZ.reviews} opiniones</li>
            <li>Atendido por sus dueños</li>
            <li>Abierto los 365 días</li>
            <li>Mascotas bienvenidas</li>
          </ul>
        </div>
      </section>

      {/* ── Las señales del predio ── */}
      <section id="predio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Hito>Señalética del predio</Hito>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.02]`}
              style={{ color: C.bosque }}
            >
              Todo queda
              <br />
              a unos pasos
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Cabañas, camping, hostería, piscina y tinajas repartidos entre
              los nativos. Las fotos son reales del centro.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SENALES.map((s, i) => (
            <li key={s.nombre} className={i === 0 ? 'sm:col-span-2' : ''}>
              <Reveal delay={i * 90} className="h-full">
                <article
                  className="group h-full flex flex-col"
                  style={{ backgroundColor: '#FBF8EE', boxShadow: '0 3px 14px rgba(21,37,25,0.10)' }}
                >
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={s.src}
                      alt={`${s.nombre} del Centro Turístico Rayen en Vilches`}
                      fill
                      sizes={i === 0 ? '(min-width: 640px) 66vw, calc(100vw - 2.5rem)' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)'}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-stretch">
                    <div className="flex-1 px-5 py-4">
                      <h3
                        className={`${display.className} uppercase font-bold tracking-[0.03em] text-2xl leading-none`}
                        style={{ color: C.bosque }}
                      >
                        {s.nombre}
                      </h3>
                      <p className="text-[13px] leading-relaxed mt-2" style={{ color: C.muted }}>
                        {s.detalle}
                      </p>
                    </div>
                    <div
                      className="w-14 shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: C.bosque, color: '#D8D2BA' }}
                      aria-hidden="true"
                    >
                      <Flecha />
                    </div>
                  </div>
                  <p
                    className={`${mono.className} text-[10.5px] uppercase tracking-[0.18em] px-5 py-2.5 border-t border-dashed`}
                    style={{ color: C.copihue, borderColor: C.line }}
                  >
                    {s.ficha}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Tinajas: la noche del deck ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Curvas />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Hito light>Las noches de Rayen</Hito>
            <h2
              className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.02] mb-6`}
              style={{ color: '#F4EFE1' }}
            >
              Tinajas calientes
              <br />
              <span style={{ color: '#E0A32E' }}>bajo las estrellas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: 'rgba(244,239,225,0.78)' }}>
              Dos tinajas privadas de agua caliente con hidromasaje, a gas,
              instaladas sobre el deck de madera. En Vilches el cielo se
              presta para quedarse mirando.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(244,239,225,0.78)' }}>
              De día la misma terraza sirve para el asado: cada cabaña tiene
              su zona de parrilla y el camping tiene las suyas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.06em] text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.copihue, color: '#F4EFE1' }}
              >
                Consultar por tinaja
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <div className="relative overflow-hidden aspect-[4/3]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                <Image
                  src={`${IMG}/tinajas.webp`}
                  alt="Tinajas de madera del Centro Turístico Rayen sobre su deck con pérgola, dentro del bosque"
                  fill
                  sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} absolute -bottom-3 left-4 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.2em]`}
                style={{ backgroundColor: C.paper, color: C.bosque }}
              >
                deck de las tinajas, sector bosque
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Salidas desde el portón ── */}
      <section id="salidas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Hito>Salidas desde el portón</Hito>
          <h2
            className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.02] mb-4`}
            style={{ color: C.bosque }}
          >
            Vilches es base
            <br />
            de operaciones
          </h2>
          <p className="text-sm md:text-base max-w-xl leading-relaxed mb-10 md:mb-14" style={{ color: C.muted }}>
            El centro queda en el km 8 del camino a Vilches: se duerme en el
            bosque y de día se sale a recorrer la precordillera. Fotos
            reales publicadas por el centro.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SALIDAS.map((s, i) => (
            <li key={s.nombre}>
              <Reveal delay={i * 90}>
                <figure>
                  <div className="relative overflow-hidden aspect-[4/5]" style={{ boxShadow: '0 10px 26px rgba(21,37,25,0.16)' }}>
                    <Image
                      src={s.src}
                      alt={`${s.nombre}, atractivo cercano al Centro Turístico Rayen`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="pt-3">
                    <p className={`${display.className} uppercase font-bold tracking-[0.03em] text-lg leading-tight`} style={{ color: C.bosque }}>
                      {s.nombre}
                    </p>
                    <p className="text-[12.5px] leading-snug mt-1" style={{ color: C.muted }}>
                      {s.pie}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={160}>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-8`} style={{ color: C.copihue }}>
            Y más: Monjes Blancos · Mirador Valle del Venado · sendero propio del predio
          </p>
        </Reveal>
      </section>

      {/* ── Antes de llegar: tabla del portón ── */}
      <section id="datos" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Hito>Tabla del portón</Hito>
              <h2
                className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.02] mb-6`}
                style={{ color: C.bosque }}
              >
                Lo que conviene
                <br />
                saber antes
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Datos del propio centro: reserva con anticipo, cama hecha si
                la pides y la mascota duerme contigo. Cualquier caso especial
                se coordina por WhatsApp o correo.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <dl
                className="border-t-2"
                style={{ borderColor: C.bosque, backgroundColor: 'rgba(251,248,238,0.55)' }}
              >
                {DATOS.map((d) => (
                  <div
                    key={d.k}
                    className="flex items-baseline gap-4 px-4 md:px-6 py-3 border-b border-dashed"
                    style={{ borderColor: C.line }}
                  >
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-32 shrink-0`} style={{ color: C.copihue }}>
                      {d.k}
                    </dt>
                    <dd className="text-sm md:text-[15px] font-semibold" style={{ color: C.ink }}>
                      {d.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Libro de visitas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Hito>El libro de visitas</Hito>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.02]`}
              style={{ color: C.bosque }}
            >
              {BIZ.rating} de 5 en Google,
              <br />
              {BIZ.reviews} opiniones
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.copihue, textDecorationColor: 'rgba(181,50,64,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 110}>
              <figure
                className="h-full p-5 md:p-6 border-l-4"
                style={{ backgroundColor: '#FBF8EE', borderColor: C.copihue, boxShadow: '0 3px 12px rgba(21,37,25,0.08)' }}
              >
                <div className="text-sm mb-3" style={{ color: C.copihue, letterSpacing: '0.15em' }} aria-label="5 de 5 estrellas">
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

      {/* ── Reservar + cómo llegar ── */}
      <section id="reservar" className="relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.bosque }}>
        <Curvas color="rgba(244,239,225,0.08)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Hito light>Reservas</Hito>
            <h2
              className={`${display.className} uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl leading-[1.02] mb-6`}
              style={{ color: '#F4EFE1' }}
            >
              Escribe y te contesta
              <br />
              <span style={{ color: '#E0A32E' }}>la misma casa</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(244,239,225,0.78)' }}>
              Sin intermediarios ni call center: cuentas cuántos son, qué
              fechas miras y si quieres cabaña, camping o tinaja, y te
              responde la administración.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.06em] text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.copihue, color: '#F4EFE1' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.06em] text-base px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(244,239,225,0.5)', color: '#F4EFE1' }}
              >
                Instagram
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed mt-8" style={{ color: 'rgba(244,239,225,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
              <br />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-2 tap-44"
                style={{ color: '#E0A32E' }}
              >
                Cómo llegar →
              </a>
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[280px] border" style={{ borderColor: 'rgba(244,239,225,0.25)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} text-[10.5px] uppercase tracking-[0.18em] mt-3`} style={{ color: 'rgba(244,239,225,0.6)' }}>
              35°33′58″S · 71°14′49″O · Plus code CQM3+H6 Vilches
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F4EFE1' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} uppercase font-bold tracking-[0.03em] text-2xl mb-2`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,225,0.62)' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                @centroturisticorayen
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,239,225,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,225,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,239,225,0.7)' }}>
            Fotos, reseñas y datos prácticos tomados del sitio oficial y la
            ficha de Google del centro; el WhatsApp es el real.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
