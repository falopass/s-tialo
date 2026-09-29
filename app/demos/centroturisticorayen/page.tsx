import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars, FaqList } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_TINAJA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  RESENAS,
  FAQ,
  CERCANIAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
  variable: '--f-mono',
})

/**
 * Dirección de arte: «la postal del valle». La marca real es un copihue rojo
 * colgando de una rama (logo de su sitio); la foto icónica es la piscina
 * mirando los cerros verdes de Vilches. El demo se arma como un álbum de
 * postales: fotos con marco de papel grueso y pie en mono, una cinta de
 * servicios, y una franja oscura para la noche de tinajas. Paleta sacada del
 * logo y de sus fotos: papel trigo, bosque profundo, copihue, madera.
 */
const C = {
  papel: '#F2EBDB',
  papelAlt: '#FBF6EA',
  papelLine: '#E3D7BE',
  bosque: '#152A1E',
  bosqueDeep: '#0E2015',
  copihue: '#C33A4E',
  copihueDeep: '#96262F',
  tinta: '#20301F',
  muted: 'rgba(32,48,31,0.74)',
  mutedBosque: 'rgba(242,235,219,0.76)',
  lineBosque: 'rgba(242,235,219,0.2)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'centroturisticorayen',
  title: 'Centro Turístico Rayen — cabañas, camping y tinajas en Vilches, San Clemente',
  description:
    'Cabañas equipadas, camping con parrillas, piscina y tinajas de agua caliente bajo el bosque nativo de Vilches, San Clemente. 4,8 en Google. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Tinajas', href: '#tinajas' },
  { label: 'Camping', href: '#camping' },
  { label: 'Reservar', href: '#reservar' },
]

/** Pie de foto estilo postal: línea mono bajo el marco. */
function Postal({
  src,
  alt,
  pie,
  priority = false,
  aspect = 'aspect-[4/3]',
}: {
  src: string
  alt: string
  pie: string
  priority?: boolean
  aspect?: string
}) {
  return (
    <figure>
      <div className={`relative ${aspect} overflow-hidden rounded-xl border-4`} style={{ borderColor: C.papelAlt }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority={priority} />
      </div>
      <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
        {pie}
      </figcaption>
    </figure>
  )
}

export default function CentroTuristicoRayen() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} ${body.className}`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--f-body), system-ui, sans-serif' }}
    >
      <BlitzNav
        name="Rayen"
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{ over: 'dark', bar: C.papel, ink: C.tinta, line: C.papelLine, btnBg: C.copihueDeep, btnInk: '#FBF6EA' }}
        fontClass={display.className}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* ── Hero: la piscina mirando los cerros ── */}
      <section id="inicio" className="relative min-h-[96svh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Piscina del Centro Turístico Rayen con los cerros verdes de Vilches al fondo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(14,32,21,0.30) 0%, rgba(14,32,21,0.10) 40%, rgba(14,32,21,0.78) 100%)' }} />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-12 md:pb-16">
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: 'rgba(251,246,234,0.92)' }}>
            Vilches · San Clemente · Región del Maule
          </p>
          <h1
            className="mt-3 font-extrabold uppercase leading-[0.98] tracking-tight text-[42px] md:text-[76px] max-w-[16ch]"
            style={{ fontFamily: 'var(--f-display), sans-serif', color: '#FBF6EA' }}
          >
            El bosque también tiene piscina
          </h1>
          <p className="mt-4 max-w-[46ch] text-[15px] md:text-lg leading-relaxed font-medium" style={{ color: 'rgba(251,246,234,0.92)' }}>
            Cabañas equipadas, camping con parrillas y tinajas de agua caliente dentro de un bosque nativo en Vilches.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-extrabold tap-44"
              style={{ backgroundColor: C.copihueDeep, color: '#FBF6EA' }}
            >
              Reservar por WhatsApp
            </a>
            <span
              className="inline-flex items-center gap-2 h-12 px-4 rounded-full text-sm font-bold"
              style={{ backgroundColor: 'rgba(14,32,21,0.55)', color: '#FBF6EA' }}
            >
              <Stars value={BIZ.rating} color="#F0C54A" className="w-3.5 h-3.5" />
              {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
            </span>
          </div>
        </div>
      </section>

      {/* ── Cinta de servicios ── */}
      <div className="border-y" style={{ borderColor: C.papelLine, backgroundColor: C.papelAlt }}>
        <p
          className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] md:text-xs uppercase tracking-[0.2em] text-center`}
          style={{ color: C.tinta }}
        >
          4 cabañas · camping · hostería · piscina · 2 tinajas · trekking · abierto los 365 días
        </p>
      </div>

      {/* ── El letrero: quiénes son ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <Reveal>
          <Postal
            src={`${IMG}/letrero.webp`}
            alt="Letrero de madera tallada en la entrada del Centro Turístico Rayen"
            pie="El letrero tallado que recibe en la entrada"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.copihueDeep }}>
            El lugar
          </p>
          <h2
            className="mt-3 font-extrabold uppercase leading-[1.02] text-[30px] md:text-[44px] tracking-tight"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Un bosque nativo regenteado por {BIZ.dueno}
          </h2>
          <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
            Más de tres años recibiendo familias de todo Chile en el camino a Vilches. El centro nació entre
            robles y ñires: hoy suma cabañas, hostería, camping, piscina y tinajas, y atiende los 365 días del
            año. Las mascotas también son bienvenidas.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Se aceptan mascotas', 'Estacionamiento junto a la cabaña', 'Convenios con empresas'].map((t) => (
              <span
                key={t}
                className={`${mono.className} text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border`}
                style={{ borderColor: C.papelLine, color: C.tinta, backgroundColor: C.papelAlt }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Cabañas ── */}
      <section id="cabanas" className="border-t" style={{ borderColor: C.papelLine, backgroundColor: C.papelAlt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2
              className="font-extrabold uppercase leading-[1.02] text-[30px] md:text-[44px] tracking-tight max-w-[20ch]"
              style={{ fontFamily: 'var(--f-display), sans-serif' }}
            >
              Cuatro cabañas con parrilla y terraza
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
              Completamente equipadas para hasta 6 personas, cada una con su terraza y zona de parrilla.
              El auto queda estacionado al lado.
            </p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-5 gap-5">
            <Reveal className="md:col-span-3">
              <Postal
                src={`${IMG}/cabana.webp`}
                alt="Cabaña de madera del Centro Turístico Rayen rodeada de árboles nativos"
                pie="Cabaña entre los árboles del bosque nativo"
              />
            </Reveal>
            <div className="md:col-span-2 grid gap-5">
              <Reveal delay={60}>
                <Postal
                  src={`${IMG}/dormitorio.webp`}
                  alt="Dormitorio de cabaña con cama de madera y ropa de cama"
                  pie="Interior cálido, todo de madera"
                  aspect="aspect-[4/3]"
                />
              </Reveal>
              <Reveal delay={120}>
                <Postal
                  src={`${IMG}/cocina.webp`}
                  alt="Cocina equipada de la cabaña con refrigerador y comedor"
                  pie="Cocina completa con comedor"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tinajas: franja de noche ── */}
      <section id="tinajas" style={{ backgroundColor: C.bosqueDeep, color: '#F2EBDB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal delay={80} className="order-2 md:order-1">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: '#F0C54A' }}>
              Noche de tinaja
            </p>
            <h2
              className="mt-3 font-extrabold uppercase leading-[1.02] text-[30px] md:text-[44px] tracking-tight"
              style={{ fontFamily: 'var(--f-display), sans-serif', color: '#F2EBDB' }}
            >
              Agua caliente bajo las estrellas
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedBosque }}>
              Dos tinajas privadas de agua caliente con hidromasaje. Se prenden a leña y quedan a metros
              de la cabaña — el plan de noche más pedido por quienes vuelven.
            </p>
            <a
              href={WA_LINK_TINAJA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-extrabold tap-44"
              style={{ backgroundColor: C.copihueDeep, color: '#FBF6EA' }}
            >
              Consultar por tinajas
            </a>
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-4" style={{ borderColor: 'rgba(242,235,219,0.16)' }}>
                <Image
                  src={`${IMG}/tinaja-noche.webp`}
                  alt="Tinaja de agua caliente iluminada de noche en el Centro Turístico Rayen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.mutedBosque }}>
                La tinaja encendida cuando cae el sol
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Camping y piscina ── */}
      <section id="camping" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className="font-extrabold uppercase leading-[1.02] text-[30px] md:text-[44px] tracking-tight max-w-[20ch]"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Camping con parrillas y una piscina con vista
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
            Amplios espacios para acampar con parrillas y mesas entre árboles nativos, hamacas para la
            siesta y una piscina que mira al cerro. Hay sendero de trekking de baja dificultad para hacer en familia.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Reveal>
            <Postal
              src={`${IMG}/camping.webp`}
              alt="Mesas de picnic y carpas en el camping del Centro Turístico Rayen"
              pie="Mesas y parrillas entre los árboles"
            />
          </Reveal>
          <Reveal delay={60}>
            <Postal
              src={`${IMG}/hamaca.webp`}
              alt="Hamaca colgada entre dos árboles en el camping"
              pie="La hamaca que siempre está ocupada"
            />
          </Reveal>
          <Reveal delay={120}>
            <Postal
              src={`${IMG}/tinajas.webp`}
              alt="Tinajas de madera bajo una pérgola en el Centro Turístico Rayen"
              pie="Las dos tinajas bajo la pérgola"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Cordillera: franja panorámica ── */}
      <section className="relative h-[300px] md:h-[380px] overflow-hidden">
        <Image
          src={`${IMG}/cordillera.webp`}
          alt="Vista del valle de Vilches con la cordillera nevada al fondo desde el Centro Turístico Rayen"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end" style={{ background: 'linear-gradient(180deg, rgba(14,32,21,0.0) 30%, rgba(14,32,21,0.7) 100%)' }}>
          <p
            className={`${mono.className} max-w-6xl mx-auto w-full px-5 md:px-8 pb-5 text-[11px] md:text-xs uppercase tracking-[0.22em]`}
            style={{ color: 'rgba(251,246,234,0.95)' }}
          >
            La vista desde el centro: el valle y la cordillera
          </p>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="border-t" style={{ borderColor: C.papelLine, backgroundColor: C.papelAlt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2
                className="font-extrabold uppercase leading-[1.02] text-[30px] md:text-[44px] tracking-tight"
                style={{ fontFamily: 'var(--f-display), sans-serif' }}
              >
                Lo que dicen en Google
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold tap-44"
                style={{ color: C.copihueDeep }}
              >
                <Stars value={BIZ.rating} color={C.copihueDeep} className="w-3.5 h-3.5" />
                {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
              </a>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <blockquote
                  className="h-full rounded-xl border p-5 flex flex-col"
                  style={{ borderColor: C.papelLine, backgroundColor: C.papel }}
                >
                  <Stars value={r.estrellas} color={C.copihue} className="w-3.5 h-3.5" />
                  <p className="mt-3 text-[15px] leading-relaxed flex-1" style={{ color: C.muted }}>
                    “{r.texto}”
                  </p>
                  <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.tinta }}>
                    {r.nombre} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cerquita + FAQ ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.copihueDeep }}>
            Panorama de la semana
          </p>
          <h2
            className="mt-3 font-extrabold uppercase leading-[1.02] text-[28px] md:text-[38px] tracking-tight"
            style={{ fontFamily: 'var(--f-display), sans-serif' }}
          >
            Vilches como campamento base
          </h2>
          <ul className="mt-6 space-y-3">
            {CERCANIAS.map((l) => (
              <li key={l} className="flex items-center gap-3 text-[15px] font-semibold" style={{ color: C.tinta }}>
                <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.copihue }} aria-hidden="true" />
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <FaqList
            items={FAQ.map((f) => ({ q: f.q, a: f.a }))}
            colors={{ q: C.tinta, a: C.muted, line: C.papelLine, plusBg: C.bosque, plusInk: '#F2EBDB' }}
          />
        </Reveal>
      </section>

      {/* ── Reservar + mapa ── */}
      <section id="reservar" style={{ backgroundColor: C.bosque, color: '#F2EBDB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2
              className="font-extrabold uppercase leading-[1.02] text-[30px] md:text-[44px] tracking-tight"
              style={{ fontFamily: 'var(--f-display), sans-serif' }}
            >
              La reserva es un WhatsApp
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedBosque }}>
              Se agenda con el 50% de anticipo, por transferencia o efectivo. Check-in 12:00, check-out 14:00.
              Estamos en el camino a Vilches km 8, comuna de San Clemente.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-extrabold tap-44"
                style={{ backgroundColor: C.copihueDeep, color: '#FBF6EA' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold border-2 tap-44"
                style={{ borderColor: 'rgba(242,235,219,0.5)', color: '#F2EBDB' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-xl overflow-hidden border-4" style={{ borderColor: 'rgba(242,235,219,0.16)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de ubicación del Centro Turístico Rayen en Vilches, San Clemente"
                className="w-full aspect-[4/3]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.bosqueDeep, color: '#F2EBDB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-4">
          <p className={`${display.className} font-extrabold uppercase text-xl md:text-2xl`}>{BIZ.name}</p>
          <address className="not-italic mt-2 text-sm leading-relaxed" style={{ color: 'rgba(242,235,219,0.66)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,235,219,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-8 text-xs leading-relaxed" style={{ color: 'rgba(242,235,219,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#F2EBDB' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos y fotos de su sitio oficial y su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#F0C54A' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}, Vilches`} />
    </main>
  )
}
