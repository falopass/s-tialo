import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_TORTA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «sello de pastelería». El logo real es una estampa
 * circular turquesa («Dulce & Salado — tradición hecha en casa»), así que
 * todo el demo habla en círculos y punteados: fotos dentro de sellos,
 * precios como etiqueta redonda y una vitrina de tortas con sus precios
 * por tamaño, leídos de su catálogo oficial.
 */
const C = {
  crema: '#FFF9F1',
  papel: '#FFFFFF',
  ink: '#2E2118',
  muted: '#715E4B',
  teal: '#0E7C86',
  tealDeep: '#0A5C64',
  tealSuave: '#DDEEEF',
  rojo: '#C2402F',
  rojoDeep: '#9C2F20',
  dorado: '#B98B4E',
  linea: 'rgba(46,33,24,0.13)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'marcela-moraga-pasteleria',
  title: 'Marcela Moraga Pastelería · Tortas y dulces en 2 Norte, Talca',
  description:
    'Pastelería Dulce & Salado en 2 Norte 3591, Talca: tortas por tamaño desde $13.000, mil hojas, tres leches, alfajores y también salados. Pedidos por WhatsApp.',
  image: `${IMG}/mil-hojas.webp`,
})

const NAV_LINKS = [
  { label: 'Las tortas', href: '#tortas' },
  { label: 'Dulce y salado', href: '#dulce-salado' },
  { label: 'Marcela', href: '#marcela' },
  { label: 'Visita', href: '#visita' },
]

// Catálogo real de su sitio oficial (precios por tamaño y personas).
const TORTAS = [
  {
    src: `${IMG}/tres-leches.webp`,
    alt: 'Torta tres leches cubierta de merengue',
    name: 'Tres Leches',
    det: 'bizcocho ultra húmedo cubierto con merengue',
    desde: '$13.000',
    personas: 'desde 5–6 personas',
  },
  {
    src: `${IMG}/mil-hojas.webp`,
    alt: 'Torta mil hojas con manjar y cobertura crocante',
    name: 'Mil Hojas',
    det: 'finísima hojarasca rellena con manjar',
    desde: '$17.000',
    personas: 'desde 5–6 personas',
  },
  {
    src: `${IMG}/otonal.webp`,
    alt: 'Torta otoñal de merengue de almendras con manjar y crema',
    name: 'Otoñal',
    det: 'discos de merengue de almendras, manjar claro y crema — se sirve helada',
    desde: '$23.500',
    personas: 'desde 10–12 personas',
  },
  {
    src: `${IMG}/amor.webp`,
    alt: 'Torta amor con frambuesas sobre crema blanca',
    name: 'Amor',
    det: 'hojarasca, manjar, mermelada de frambuesa y crema',
    desde: '$19.000',
    personas: 'desde 5–6 personas',
  },
  {
    src: `${IMG}/zanahoria.webp`,
    alt: 'Torta de zanahoria con crema de queso y nueces',
    name: 'Zanahoria',
    det: 'bizcocho de zanahoria con pasas y nueces, crema de queso crema',
    desde: '$15.000',
    personas: 'desde 6 personas',
  },
  {
    src: `${IMG}/chocolate.webp`,
    alt: 'Torta de chocolate con ganache',
    name: 'Chocolate',
    det: 'bizcocho húmedo de chocolate, manjar y suave ganache',
    desde: '$17.000',
    personas: 'desde 6 personas',
  },
]

const ANTOJOS = [
  {
    src: `${IMG}/rollo-merengue.webp`,
    alt: 'Rollo de merengue con frutillas y crema',
    name: 'Rollo de merengue',
    det: 'el clásico de las celebraciones, con fruta fresca',
    price: 'por encargo',
  },
  {
    src: `${IMG}/alfajores.webp`,
    alt: 'Alfajores rellenos de manjar casero',
    name: 'Alfajores',
    det: 'finas láminas de hoja con manjar casero',
    price: '$10.600 · pack 24 unidades',
  },
  {
    src: `${IMG}/brownies.webp`,
    alt: 'Bolsa de brownies con etiqueta de Marcela Moraga Dulce y Salado',
    name: 'Brownies',
    det: 'chocolate blanco y negro en el mismo brownie',
    price: '$8.500 la bolsa',
  },
  {
    src: `${IMG}/salados.webp`,
    alt: 'Croissant salado de la línea salada de la pastelería',
    name: 'Salados',
    det: 'lasaña boloñesa, chupe de jaiba, ceviche y más, por encargo',
    price: 'por encargo',
  },
]

// Reseñas reales de Google (4,7 ★ · 55 opiniones).
const RESENAS = [
  {
    nombre: 'Antonia Elgueta',
    fecha: 'hace un mes',
    texto: 'Me fascinó. Todo muy rico y demasiado lindo; la atención increíble.',
  },
  {
    nombre: 'Joaquin Bravo',
    fecha: 'hace un mes',
    texto: 'Muy bueno, especialmente su pie de limón.',
  },
  {
    nombre: 'Angela Barahona',
    fecha: 'hace 8 meses',
    texto: 'Excelente experiencia. La atención 10/10 y la comida muy rica.',
  },
]

/** Anillo punteado: la eco del sello circular del logo. */
function Anillo({ className = '', color = C.teal }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      <circle cx="50" cy="50" r="47" stroke={color} strokeWidth="1.6" strokeDasharray="1.5 5" strokeLinecap="round" />
    </svg>
  )
}

export default function MarcelaMoraga() {
  return (
    <main className={body.className} style={{ backgroundColor: C.crema, color: C.ink }}>
      <BlitzNav
        name={
          <span className={display.className}>
            Marcela <em style={{ color: C.teal }}>Moraga</em>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: 'rgba(255,249,241,0.94)',
          ink: C.ink,
          line: C.linea,
          btnBg: C.teal,
          btnInk: '#FFFFFF',
        }}
        fontClass={display.className}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* ── Hero: la vitrina ──────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <Anillo className="absolute -right-24 -top-24 w-[340px] h-[340px] opacity-40 pointer-events-none" />
        <Anillo className="absolute -left-28 top-64 w-[260px] h-[260px] opacity-30 pointer-events-none" color={C.dorado} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-[1fr_1fr] gap-10 items-center">
          <div>
            <Reveal>
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo circular de Marcela Moraga Dulce y Salado: tradición hecha en casa"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
                style={{ border: `3px solid ${C.papel}`, boxShadow: `0 0 0 1.5px ${C.linea}, 0 10px 28px rgba(14,124,134,0.18)` }}
              />
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} text-5xl md:text-[64px] leading-[1.02] mt-6`}>
                Tortas que se hacen <em style={{ color: C.teal }}>en casa</em>, en plena 2 Norte
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Pastelería {BIZ.marca}: el negocio de Marcela desde {BIZ.fundada},
                con catálogo completo y retiro en el local o pedido por WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-4 flex items-center gap-2.5">
                <Stars value={BIZ.rating} color={C.dorado} className="w-4 h-4" />
                <span className={`${mono.className} text-xs font-semibold`} style={{ color: C.muted }}>
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviewsCount} opiniones en Google
                </span>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[52px] px-6 rounded-full text-base font-bold tap-44 active:scale-95 transition-transform text-white"
                  style={{ backgroundColor: C.teal }}
                >
                  Hacer un pedido
                </a>
                <a
                  href="#tortas"
                  className="inline-flex items-center h-[52px] px-6 rounded-full text-base font-semibold tap-44 active:scale-95 transition-transform"
                  style={{ border: `1.5px solid ${C.linea}`, color: C.ink }}
                >
                  Ver las tortas
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative">
            <div className="relative">
              <img
                src={`${IMG}/portada.webp`}
                alt="Mesa de trabajo de la pastelería con preparaciones y productos del día"
                className="w-full rounded-3xl object-cover aspect-[4/3]"
                style={{ border: `4px solid ${C.papel}`, boxShadow: `0 0 0 1.5px ${C.linea}` }}
              />
              <img
                src={`${IMG}/tres-leches.webp`}
                alt="Torta tres leches cubierta de merengue"
                className="absolute -bottom-8 -left-4 md:-left-10 w-[38%] aspect-square object-cover rounded-full"
                style={{ border: `5px solid ${C.papel}`, boxShadow: '0 14px 30px rgba(46,33,24,0.22)' }}
              />
              <div
                className={`${mono.className} absolute -top-4 right-4 text-[10px] md:text-[11px] uppercase tracking-[0.18em] px-4 py-2 rounded-full`}
                style={{ backgroundColor: C.rojo, color: '#FFF9F1' }}
              >
                {BIZ.address}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Las tortas (catálogo real) ────────────────────────── */}
      <section id="tortas" className="py-14 md:py-20" style={{ backgroundColor: C.tealSuave }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.rojoDeep }}>
              catálogo con precios de su sitio
            </p>
            <h2 className={`${display.className} text-4xl md:text-6xl mt-3 leading-tight`}>
              Las tortas de la casa
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
              Cada una en cuatro tamaños: mini, chica, mediana y grande. Aquí va el precio
              de partida; el detalle completo se cotiza por WhatsApp.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TORTAS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80}>
                <article
                  className="h-full rounded-3xl overflow-hidden flex flex-col"
                  style={{ backgroundColor: C.papel, border: `1.5px solid ${C.linea}` }}
                >
                  <div className="relative">
                    <img src={t.src} alt={t.alt} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                    <span
                      className={`${mono.className} absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-full`}
                      style={{ backgroundColor: C.rojo, color: '#FFF9F1' }}
                    >
                      desde {t.desde}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className={`${display.className} text-2xl`}>{t.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed flex-1" style={{ color: C.muted }}>
                      {t.det}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className={`${mono.className} text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.teal }}>
                        {t.personas}
                      </span>
                      <a
                        href={WA_LINK_TORTA + encodeURIComponent(t.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${mono.className} text-[12px] font-semibold underline underline-offset-4 tap-44`}
                        style={{ color: C.rojoDeep }}
                        aria-label={`Cotizar ${t.name} por WhatsApp`}
                      >
                        Cotizar
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dulce y también salado ────────────────────────────── */}
      <section id="dulce-salado" className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.teal }}>
              vitrina completa
            </p>
            <h2 className={`${display.className} text-4xl md:text-6xl mt-3 leading-tight`}>
              Dulce <em style={{ color: C.teal }}>y también salado</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {ANTOJOS.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 70}>
                <figure>
                  <img
                    src={a.src}
                    alt={a.alt}
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-full"
                    style={{ border: `4px solid ${C.papel}`, boxShadow: `0 0 0 1.5px ${C.linea}` }}
                  />
                  <figcaption className="mt-4 text-center">
                    <span className={`${display.className} text-xl block`}>{a.name}</span>
                    <span className="block mt-1 text-[13px] leading-snug" style={{ color: C.muted }}>
                      {a.det}
                    </span>
                    <span className={`${mono.className} block mt-2 text-xs font-semibold`} style={{ color: C.rojoDeep }}>
                      {a.price}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marcela + reseñas ─────────────────────────────────── */}
      <section id="marcela" className="py-14 md:py-20" style={{ backgroundColor: C.teal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <div className="relative max-w-[360px] mx-auto md:mx-0">
              <Anillo className="absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)] opacity-50" color="#FFF9F1" />
              <img
                src={`${IMG}/marcela.webp`}
                alt="Marcela Moraga en su cocina probando una preparación"
                className="relative w-full aspect-[3/4] object-cover rounded-[2rem]"
                style={{ border: `4px solid ${C.papel}` }}
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.tealSuave }}>
                tradición hecha en casa · desde {BIZ.fundada}
              </p>
              <h2 className={`${display.className} text-4xl md:text-5xl mt-3 leading-tight`} style={{ color: '#FFF9F1' }}>
                Empezó en su cocina; hoy tiene local en la 2 Norte
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(255,249,241,0.9)' }}>
                Marcela Moraga nace en casa, compartiendo las preparaciones que hacía su mamá.
                De ahí a vitrina propia: mismo manjar casero, misma hojarasca fina y pedidos
                que se coordinan directo con ella.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-7 flex items-center gap-2.5">
                <Stars value={BIZ.rating} color={C.dorado} className="w-4 h-4" />
                <span className={`${mono.className} text-xs font-semibold`} style={{ color: C.tealSuave }}>
                  {String(BIZ.rating).replace('.', ',')} de {BIZ.reviewsCount} opiniones en Google
                </span>
              </div>
            </Reveal>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 80}>
                  <figure className="h-full rounded-2xl p-4" style={{ backgroundColor: 'rgba(255,249,241,0.12)' }}>
                    <blockquote className="text-[13px] leading-relaxed" style={{ color: '#FFF9F1' }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(255,249,241,0.7)' }}>
                      {r.nombre}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visita ────────────────────────────────────────────── */}
      <section id="visita" className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <img
                src={`${IMG}/local.webp`}
                alt="Interior del local de la pastelería con mural pintado y vitrinas"
                className="w-full rounded-3xl object-cover aspect-[4/3]"
                style={{ border: `4px solid ${C.papel}`, boxShadow: `0 0 0 1.5px ${C.linea}` }}
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={100}>
              <div
                className="mt-6 rounded-2xl p-6"
                style={{ backgroundColor: C.papel, border: `1.5px solid ${C.linea}` }}
              >
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  horario
                </p>
                <ul className="mt-2 space-y-1.5">
                  {BIZ.hours.map((h) => (
                    <li key={h.days} className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px]">{h.days}</span>
                      <span className={`${mono.className} text-[13px] font-semibold`}>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-5`} style={{ color: C.muted }}>
                  contacto
                </p>
                <p className="mt-1.5 text-[15px]">
                  <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 tap-44 inline-block">
                    {BIZ.phoneDisplay}
                  </a>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${mono.className} ml-4 text-sm underline underline-offset-4 tap-44 inline-block`} style={{ color: C.teal }}>
                    {BIZ.igUser}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.rojoDeep }}>
                retiro en el local
              </p>
              <h2 className={`${display.className} text-4xl md:text-5xl mt-3 leading-tight`}>
                2 Norte 3591, Local 3
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
                Se pide por WhatsApp y se retira en el local, frente a la 2 Norte en Talca.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block rounded-3xl overflow-hidden tap-44"
                style={{ border: `1.5px solid ${C.linea}` }}
                aria-label="Abrir ubicación de Marcela Moraga Pastelería en Google Maps"
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa: Marcela Moraga Pastelería, 2 Norte 3591, Talca"
                  className="w-full h-[300px] md:h-[380px] pointer-events-none"
                  style={{ border: 0, backgroundColor: C.papel }}
                />
              </a>
            </Reveal>
            <Reveal delay={200}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center h-[52px] px-6 rounded-full text-base font-bold tap-44 active:scale-95 transition-transform text-white"
                style={{ backgroundColor: C.teal }}
              >
                Pedir para retirar
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="pt-9 pb-7" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} text-2xl`} style={{ color: '#FFF9F1' }}>
              {BIZ.short} <em>· {BIZ.marca}</em>
            </p>
            <p className={`${mono.className} mt-1.5 text-xs`} style={{ color: 'rgba(255,249,241,0.75)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-[11px] underline underline-offset-4 tap-44`}
              style={{ color: 'rgba(255,249,241,0.75)' }}
            >
              Google Maps
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-[48px] px-6 rounded-full text-sm font-bold tap-44 active:scale-95 transition-transform"
              style={{ backgroundColor: C.crema, color: C.tealDeep }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label="Pedir por WhatsApp a Marcela Moraga Pastelería" />
    </main>
  )
}
