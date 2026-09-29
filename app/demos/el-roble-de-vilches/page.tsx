import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, ATENCION, SERVICIOS, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-mono',
})

/**
 * Dirección de arte: «el recorrido del complejo». El Roble no es una cabaña
 * suelta — es un paseo completo bajo el bosque nativo de Vilches: portón,
 * cabañas, quincho con piscina, tinajas calientes, sauna barril y senderos.
 * La página se estructura como ese sendero con paradas numeradas. Paleta del
 * logo (roble verde + tronco café) y de sus fotos (turquesa de las piscinas,
 * madera de las tinajas, crema natural).
 */
const C = {
  crema: '#F1EDE0',
  papel: '#F8F5EA',
  bosque: '#1E3D28',
  bosqueDeep: '#12271A',
  agua: '#157A90',
  aguaDeep: '#0E6478',
  madera: '#6E4B2B',
  hoja: '#8FBF6E',
  tinta: '#20291E',
  muted: 'rgba(32,41,30,0.74)',
  mutedCrema: 'rgba(241,237,224,0.78)',
  line: 'rgba(32,41,30,0.18)',
  lineCrema: 'rgba(241,237,224,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'el-roble-de-vilches',
  title: 'Complejo Turístico El Roble — cabañas, agua y bosque en Vilches',
  description: 'Complejo Turístico El Roble en el km 54 de Vilches, San Clemente: cabañas, piscinas, tinas calientes, sauna y senderos en bosque nativo. 4,5 en Google.',
  image: `${IMG}/complejo.webp`,
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'El complejo', href: '#complejo' },
  { label: 'Cómo llegar', href: '#llegar' },
]

function Raya({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] flex items-center gap-3`}
      style={{ color: light ? C.mutedCrema : C.aguaDeep }}
    >
      <span aria-hidden="true" className="inline-block w-8 border-t-2 border-dashed" style={{ borderColor: 'currentColor' }} />
      {children}
    </p>
  )
}

/** Número de parada estilo baliza de sendero (placa de madera). */
function Baliza({ n }: { n: string }) {
  return (
    <span
      aria-hidden="true"
      className={`${mono.className} inline-flex items-center justify-center w-11 h-9 rounded-[4px] text-[13px] font-bold tracking-wider shadow-md`}
      style={{ backgroundColor: C.madera, color: C.crema, border: `2px solid rgba(241,237,224,0.55)`, boxShadow: '0 4px 10px rgba(20,39,26,0.35)' }}
    >
      {n}
    </span>
  )
}

const PARADAS = [
  {
    n: '01',
    titulo: 'Cabañas entre robles',
    texto: 'Cabañas de madera repartidas bajo los árboles nativos, cada una con su rincón de jardín. Así se ve la Casa Azul entre la vegetación.',
    img: 'cabana.webp',
    alt: 'Cabaña azul del Complejo Turístico El Roble rodeada de jardín y árboles nativos',
  },
  {
    n: '02',
    titulo: 'Piscina cubierta del quincho',
    texto: 'Bajo el techo del quincho hay otra piscina con reposeras: si el día se nubla, el agua sigue esperando.',
    img: 'quincho.webp',
    alt: 'Piscina cubierta dentro del quincho con reposeras y techo de madera',
  },
  {
    n: '03',
    titulo: 'Tinajas calientes en el bosque',
    texto: 'Tinas de madera calentadas a leña, escondidas entre plataformas y raíces. El clásico del invierno en Vilches.',
    img: 'tinaja.webp',
    alt: 'Tinaja caliente de madera en una terraza rodeada de bosque nativo',
  },
  {
    n: '04',
    titulo: 'El sauna barril',
    texto: 'Un barril de madera en medio del sendero: adentro, el sauna a leña con olor a bosque.',
    img: 'sauna.webp',
    alt: 'Sauna de barril de madera instalado entre los árboles del complejo',
  },
  {
    n: '05',
    titulo: 'Senderos hacia el Enladrillado',
    texto: 'El complejo es base de salida para el trekking en bosque nativo: la reserva Altos de Lircay queda subiendo el valle.',
    img: 'sendero.webp',
    alt: 'Senderistas caminando por un sendero de bosque nativo en Vilches',
  },
] as const

export default function Page() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`} style={{ backgroundColor: C.crema, color: C.tinta, fontFamily: 'var(--f-body), sans-serif' }}>
      <BlitzNav
        name={
          <span className="inline-flex items-center justify-center rounded-md px-2 py-1" style={{ backgroundColor: C.bosqueDeep }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="Complejo Turístico El Roble" className="h-7 w-auto" />
          </span>
        }
        links={NAV_LINKS}
        waLink="#llegar"
        ctaLabel="Reservar"
        theme={{ over: 'dark', bar: C.crema, ink: C.tinta, line: C.line, btnBg: C.aguaDeep, btnInk: '#F1EDE0' }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[94svh] flex flex-col">
        <div className="absolute inset-0">
          <Image src={`${IMG}/complejo.webp`} alt="Vista aérea del Complejo Turístico El Roble: dos piscinas turquesa, cabañas y bosque nativo junto a la ruta" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,24,14,0.5) 0%, rgba(10,24,14,0.22) 42%, rgba(10,24,14,0.85) 100%)' }} />
        </div>
        <div className="relative flex-1 flex flex-col justify-end px-5 md:px-10 pb-10 pt-28 max-w-6xl mx-auto w-full">
          <Reveal>
            <div className="inline-flex w-fit items-center rounded-lg px-3 py-2 mb-5" style={{ backgroundColor: 'rgba(18,39,26,0.82)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img src={`${IMG}/logo.webp`} alt="Logo de Complejo Turístico El Roble: roble verde y texto blanco" className="h-10 w-auto" />
            </div>
            <h1
              className="text-[11.5vw] sm:text-5xl md:text-6xl leading-[1.04] max-w-[18ch]"
              style={{ fontFamily: 'var(--f-display), serif', color: '#F5F2E6' }}
            >
              Cabañas, agua y bosque nativo en el km 54 de Vilches
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'rgba(245,242,230,0.92)' }}>
              Piscinas, tinas calientes, sauna y senderos: todo el complejo en un solo lugar, al pie de la precordillera del Maule.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: '#F5F2E6' }}>
                <Stars value={BIZ.rating} color={C.hoja} className="w-4 h-4" />
                {BIZ.ratingLabel} · {BIZ.reviews} reseñas
              </span>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border`} style={{ color: 'rgba(245,242,230,0.9)', borderColor: 'rgba(245,242,230,0.4)' }}>
                {BIZ.city} · {BIZ.comuna}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${BIZ.reserva1.tel}`}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold"
                style={{ backgroundColor: C.aguaDeep, color: '#F1EDE0' }}
              >
                Llamar a reservas · {BIZ.reserva1.display}
              </a>
              <a
                href="#recorrido"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold border-2"
                style={{ borderColor: 'rgba(245,242,230,0.55)', color: '#F5F2E6' }}
              >
                Recorrer el complejo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EL RECORRIDO ─────────────────────────────────── */}
      <section id="recorrido" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya>Un sendero por el complejo</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.06] max-w-[18ch]" style={{ fontFamily: 'var(--f-display), serif' }}>
              Cinco paradas, un solo ticket de entrada al descanso
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Desde el portón hasta el sendero del bosque: así se recorre El Roble.
            </p>
          </Reveal>

          <div className="mt-10 relative">
            <span aria-hidden="true" className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed -translate-x-1/2" style={{ borderColor: 'rgba(110,75,43,0.4)' }} />
            {PARADAS.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className={`relative grid md:grid-cols-2 gap-5 md:gap-16 items-center py-6 md:py-8 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden" style={{ boxShadow: '0 20px 44px -22px rgba(18,39,26,0.5)' }}>
                    <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute left-3 bottom-3"><Baliza n={p.n} /></div>
                  </div>
                  <div className="relative">
                    <p className={`${mono.className} text-[12px] tracking-[0.24em] uppercase`} style={{ color: C.madera }}>Parada {p.n}</p>
                    <h3 className="mt-2 text-2xl md:text-[32px] leading-tight" style={{ fontFamily: 'var(--f-display), serif' }}>{p.titulo}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>{p.texto}</p>
                  </div>
                  {/* baliza central sobre el sendero punteado (solo escritorio) */}
                  <span aria-hidden="true" className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="w-3.5 h-3.5 rounded-full border-2" style={{ backgroundColor: C.crema, borderColor: C.madera }} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TODO EN UN MISMO LUGAR ───────────────────────── */}
      <section id="complejo" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.bosqueDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya light>Todo en un mismo lugar</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.06] max-w-[18ch]" style={{ fontFamily: 'var(--f-display), serif' }}>
              El menú completo del complejo
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed" style={{ color: C.mutedCrema }}>
              Lo publicado en turismoelroble.cl y su Instagram: cada cosa existe y tiene su rincón dentro del terreno.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: C.lineCrema }}>
              {SERVICIOS.map((s, i) => (
                <li
                  key={s}
                  className="px-4 py-5 text-center text-[15px] font-semibold leading-snug flex items-center justify-center gap-2"
                  style={{ backgroundColor: C.bosqueDeep, fontFamily: 'var(--f-display), serif' }}
                >
                  <span aria-hidden="true" className={`${mono.className} text-[10px]`} style={{ color: i % 3 === 1 ? C.hoja : C.agua }}>◆</span>
                  {s}
                </li>
              ))}
              <li className="px-4 py-5 text-center text-[13px] flex items-center justify-center" style={{ backgroundColor: C.bosqueDeep, color: C.mutedCrema }}>
                + sanación Vilches y camas de cuarzo
              </li>
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl p-6" style={{ backgroundColor: 'rgba(241,237,224,0.07)', border: `1px solid ${C.lineCrema}` }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.hoja }}>Atención telefónica</p>
                <p className="mt-2 text-xl leading-snug" style={{ fontFamily: 'var(--f-display), serif' }}>{ATENCION}</p>
                <div className="mt-4 space-y-1.5 text-[15px]" style={{ color: C.mutedCrema }}>
                  <p>Reservas: {BIZ.reserva1.display} · {BIZ.reserva2.display}</p>
                  <p>Consultas: {BIZ.consultas.display}</p>
                  <p>Restaurant: {BIZ.restaurant.display}</p>
                </div>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ backgroundColor: 'rgba(241,237,224,0.07)', border: `1px solid ${C.lineCrema}` }}>
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.hoja }}>Su Instagram</p>
                  <p className="mt-2 text-xl leading-snug" style={{ fontFamily: 'var(--f-display), serif' }}>@complejoturisticoelroble</p>
                  <p className="mt-2 text-[15px]" style={{ color: C.mutedCrema }}>
                    Cabañas, restaurant, piscinas, tinas calientes, sauna, trekking y bosque nativo.
                  </p>
                </div>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center justify-center h-11 px-5 rounded-full text-[14px] font-bold border-2"
                  style={{ borderColor: C.lineCrema, color: C.crema }}
                >
                  Ver perfil en Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────── */}
      <section id="llegar" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <Raya>Cómo llegar</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.06]" style={{ fontFamily: 'var(--f-display), serif' }}>
              El portón que se ve desde la ruta
            </h2>
            <div className="relative mt-7 aspect-[4/3] rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 44px -22px rgba(18,39,26,0.5)' }}>
              <Image src={`${IMG}/porton.webp`} alt="Portón de entrada del Complejo Turístico El Roble con su logo, letreros de restaurant y masaje & spa" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <p className={`${mono.className} mt-3 text-[12px] tracking-[0.08em]`} style={{ color: C.muted }}>
              Entrada del complejo en la ruta a Vilches Alto · restaurant y masaje & spa dentro
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}>
              <div className="min-h-[280px]">
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="block w-full h-[280px]" />
              </div>
              <div className="px-5 py-5">
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.aguaDeep }}>Dirección</p>
                <p className="mt-1 text-[15px] font-bold">{BIZ.address} · {BIZ.comuna}, {BIZ.region}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} mt-1 inline-block text-[12px] underline underline-offset-4`} style={{ color: C.muted }}>
                  Abrir en Google Maps
                </a>
                <div className="mt-5 pt-4 flex flex-wrap gap-3" style={{ borderTop: `1px solid ${C.line}` }}>
                  <a href={`tel:${BIZ.reserva1.tel}`} className="inline-flex items-center justify-center h-12 px-5 rounded-full text-[14px] font-bold" style={{ backgroundColor: C.bosque, color: '#F1EDE0' }}>
                    Reservas {BIZ.reserva1.display}
                  </a>
                  <a href={`tel:${BIZ.restaurant.tel}`} className="inline-flex items-center justify-center h-12 px-5 rounded-full text-[14px] font-bold border-2" style={{ borderColor: C.line, color: C.tinta }}>
                    Restaurant {BIZ.restaurant.display}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="px-5 md:px-10 pt-8 pb-24 md:pb-10" style={{ backgroundColor: C.bosqueDeep, borderTop: `1px solid ${C.lineCrema}` }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-md px-2 py-1.5" style={{ backgroundColor: 'rgba(241,237,224,0.08)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="h-8 w-auto" />
            </span>
            <div>
              <p className="text-[15px]" style={{ color: C.crema, fontFamily: 'var(--f-display), serif' }}>{BIZ.name}</p>
              <p className={`${mono.className} text-[11px]`} style={{ color: C.mutedCrema }}>{BIZ.address} · {BIZ.comuna}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href={BIZ.web} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[13px]`} style={{ color: C.crema }}>turismoelroble.cl</a>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[13px] underline underline-offset-4`} style={{ color: C.mutedCrema }}>Instagram</a>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[13px] underline underline-offset-4`} style={{ color: C.mutedCrema }}>Facebook</a>
          </div>
        </div>
      </footer>

      <CallFab href={`tel:${BIZ.reserva1.tel}`} label={`Reservas ${BIZ.reserva1.display}`} bg={C.aguaDeep} fg={C.crema} />
    </main>
  )
}
