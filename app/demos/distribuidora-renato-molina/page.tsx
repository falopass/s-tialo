import type { Metadata } from 'next'
import Image from 'next/image'
import { Syne, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_LISTA,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = Syne({ subsets: ['latin'], weight: ['600', '700', '800'] })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const C = {
  rojo: '#C1272D',
  rojoDeep: '#9A1E23',
  gris: '#4A4E52',
  grisDeep: '#34373A',
  grisSoft: '#EDEEEF',
  blanco: '#FFFFFF',
  senal: '#F26B1D',
  senalLight: '#FFB07F',
  senalInk: '#B8480C',
  tinta: '#1E2022',
  line: 'rgba(30,32,34,0.14)',
}

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

export const metadata: Metadata = {
  title: 'Distribuidora Renato Molina — Mercado en Molina',
  description:
    'Distribuidora en C. Membrillar 1585, Molina. Plásticos, aseo y menaje para la casa y el negocio. Haz tu pedido por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Productos', href: '#productos' },
  { label: 'La distribuidora', href: '#distribuidora' },
  { label: 'Precios', href: '#precios' },
  { label: 'Pedidos', href: '#contacto' },
]

const RUTA = ['Pedido', 'Preparación', 'Retiro']

const ANDENES = [
  {
    n: '01',
    title: 'Aseo',
    text: 'Escobas, traperos, baldes, escobillas y paños por unidad o por bulto.',
    src: `${IMG}/ambiente.webp`,
    alt: 'Escobas, traperos y baldes de colores ordenados junto a estanterías metálicas',
  },
  {
    n: '02',
    title: 'Cocina y menaje',
    text: 'Ollas enlozadas, cucharones, potes herméticos y paños de cocina.',
    src: `${IMG}/detalle2.webp`,
    alt: 'Ollas enlozadas blancas, cucharones de acero y potes plásticos en un estante de madera',
  },
  {
    n: '03',
    title: 'Orden y almacenaje',
    text: 'Canastos, cajas organizadoras y contenedores para la casa o la bodega.',
    src: `${IMG}/detalle3.webp`,
    alt: 'Mesón de madera con canastos organizadores grises y blancos apilados',
  },
]

const VALORES = [
  {
    k: 'Directo',
    text: 'Escribes al WhatsApp y te responde la misma distribuidora, sin intermediarios.',
  },
  {
    k: 'A la vista',
    text: 'Pasillos ordenados por categoría para encontrar rápido lo que vienes a buscar.',
  },
  {
    k: 'Listo',
    text: 'Mandas tu lista, te confirman qué hay y pasas a retirar sin esperar.',
  },
]

const PRECIOS = [
  { item: 'Balde plástico', unit: 'unidad' },
  { item: 'Escoba', unit: 'unidad' },
  { item: 'Trapero de algodón', unit: 'unidad' },
  { item: 'Set de potes herméticos', unit: 'set' },
  { item: 'Canasto organizador', unit: 'unidad' },
  { item: 'Paños de cocina', unit: 'pack' },
]

function Arrow({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

function Chevrons({ color }: { color: string }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-3 h-5"
          style={{ backgroundColor: color, clipPath: 'polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%, 45% 50%)', opacity: 1 - i * 0.28 }}
        />
      ))}
    </div>
  )
}

export default function DistribuidoraRenatoMolina() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.rojo, color: C.tinta }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-extrabold tracking-tight`}
        theme={{ over: 'dark', bar: 'rgba(255,255,255,0.94)', ink: C.tinta, line: C.line, btnBg: C.rojo, btnInk: C.blanco }}
      />

      {/* ── Hero tipográfico ─────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden text-white"
        style={{ backgroundColor: C.rojo }}
      >
        <div
          className="absolute inset-y-0 right-[8%] w-px hidden md:block"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.35) 50%, transparent 50%)', backgroundSize: '1px 18px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 pt-28 pb-10 md:pb-14">
          <div className="flex items-center gap-3 mb-8">
            <Chevrons color={C.senal} />
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
              {BIZ.rubro} · {BIZ.city}, Maule
            </p>
          </div>

          <h1 className={`${display.className} w-fit font-extrabold uppercase leading-[0.86] tracking-[-0.04em] text-[11.5vw] md:text-[11vw] lg:text-[132px]`}>
            <span className="block">Tu pedido,</span>
            <span className="block">listo y</span>
            <span className="block">
              <span className="inline-block px-[0.06em]" style={{ backgroundColor: C.tinta }}>a tiempo.</span>
            </span>
          </h1>

          <div className="mt-10 md:mt-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="max-w-xl text-base md:text-lg leading-relaxed text-white/90">
                Plásticos, aseo y menaje para la casa y el negocio en calle Membrillar. Mandas tu lista por
                WhatsApp y la dejamos preparada para que pases a retirar.
              </p>
              <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold" aria-label="Cómo funciona">
                {RUTA.map((r, i) => (
                  <li key={r} className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-6 h-6 grid place-items-center text-[11px] font-bold" style={{ backgroundColor: C.blanco, color: C.rojo }}>
                        {i + 1}
                      </span>
                      {r}
                    </span>
                    {i < RUTA.length - 1 && <span className="w-8 border-t-2 border-dashed border-white/50" aria-hidden="true" />}
                  </li>
                ))}
              </ol>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRing} group inline-flex items-center justify-between gap-6 min-h-[56px] px-6 text-base font-bold transition-transform active:scale-[0.98]`}
              style={{ backgroundColor: C.blanco, color: C.rojo }}
            >
              Pedir por WhatsApp
              <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative border-t border-white/25">
          <div className="max-w-6xl mx-auto pl-5 pr-20 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1 text-xs md:text-sm font-medium text-white/85">
            <span>{BIZ.address}, {BIZ.city}</span>
            <span>@{BIZ.instagram} · {BIZ.instagramFollowers} seguidores</span>
            <span>{BIZ.phoneDisplay}</span>
          </div>
        </div>
      </section>

      {/* ── Foto a sangre ─────────────────────────────────── */}
      <section aria-label="Interior de la distribuidora" className="relative h-[62vh] md:h-[82vh]">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Pasillo con estanterías metálicas llenas de baldes, ollas, escobas y cajas organizadoras"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute left-0 bottom-0 flex items-stretch">
          <span className="w-3" style={{ backgroundColor: C.senal }} aria-hidden="true" />
          <p className={`${display.className} px-5 md:px-8 py-4 md:py-5 text-lg md:text-2xl font-bold text-white`} style={{ backgroundColor: C.gris }}>
            Stock a la vista, pasillo por pasillo.
          </p>
        </div>
      </section>

      {/* ── Productos / andenes ───────────────────────────── */}
      <section id="productos" className="scroll-mt-16 py-20 md:py-28" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-5xl md:text-7xl`}>
                Lo que<br />sale <span style={{ color: C.rojo }}>hoy</span>
              </h2>
              <p className="max-w-sm text-base leading-relaxed" style={{ color: C.gris }}>
                Tres andenes con lo que más se mueve. Si no lo ves acá, pregunta: probablemente está en bodega.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-10 md:gap-6 md:grid-cols-3">
            {ANDENES.map((a, i) => (
              <Reveal key={a.n} delay={i * 110}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.grisSoft }}>
                    <Image src={a.src} alt={a.alt} fill sizes="(min-width: 768px) 33vw, 100vw" loading="eager" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <span
                      className={`${display.className} absolute top-0 left-0 px-4 py-2 text-sm font-bold tracking-wider text-white`}
                      style={{ backgroundColor: C.rojo }}
                    >
                      ANDÉN {a.n}
                    </span>
                  </div>
                  <div className="pt-5 border-t-4 mt-0" style={{ borderColor: C.tinta }}>
                    <h3 className={`${display.className} text-2xl md:text-3xl font-bold`}>{a.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.gris }}>{a.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs" style={{ color: C.gris }}>Categorías de muestra · fotos referenciales.</p>
        </div>
      </section>

      {/* ── Sobre la distribuidora ────────────────────────── */}
      <section id="distribuidora" className="scroll-mt-16 text-white" style={{ backgroundColor: C.gris }}>
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[320px] md:min-h-[640px]">
            <Image
              src={`${IMG}/detalle1.webp`}
              alt="Fachada de un local con la cortina abierta y escobas y baldes a la entrada, en una calle con árboles"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
          <div className="px-5 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: C.senalLight }}>
                Membrillar 1585 · Molina
              </p>
              <h2 className={`${display.className} mt-4 font-extrabold leading-[0.95] tracking-[-0.03em] text-4xl md:text-6xl`}>
                Cumplir es la parte fácil cuando todo está a mano.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-white/85 max-w-lg">
                Una distribuidora de barrio en Molina: atiendes con la misma persona que arma tu pedido, preguntas
                por WhatsApp y te dicen al tiro si hay.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}>
              {VALORES.map((v, i) => (
                <Reveal key={v.k} delay={i * 90}>
                  <div className="grid grid-cols-[112px_1fr] gap-4 py-5 px-1" style={{ backgroundColor: C.gris }}>
                    <p className={`${display.className} font-bold text-lg`} style={{ color: C.senalLight }}>{v.k}</p>
                    <p className="text-[15px] leading-relaxed text-white/85">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/70">
              La ficha de Google todavía no tiene reseñas: los primeros comentarios pueden ser los tuyos.
              Mientras tanto, {BIZ.instagramFollowers} personas siguen la distribuidora en{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`${focusRing} underline underline-offset-4 font-semibold text-white`}>
                Instagram
              </a>
              .
            </p>
            <p className="mt-3 text-xs text-white/70">Textos de muestra.</p>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ─────────────────────────── */}
      <section id="precios" className="scroll-mt-16 py-20 md:py-28" style={{ backgroundColor: C.grisSoft }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="relative bg-white shadow-[0_1px_0_rgba(0,0,0,0.06),0_24px_48px_-24px_rgba(0,0,0,0.25)]">
              <div className="h-2" style={{ backgroundImage: `repeating-linear-gradient(135deg, ${C.senal} 0 14px, ${C.tinta} 14px 28px)` }} aria-hidden="true" />
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: C.gris }}>Guía de referencia</p>
                    <h2 className={`${display.className} mt-2 font-extrabold uppercase tracking-[-0.03em] text-4xl md:text-5xl`}>Precios</h2>
                  </div>
                  <span
                    className={`${display.className} -rotate-6 border-[3px] px-3 py-1 text-sm md:text-base font-extrabold tracking-widest`}
                    style={{ borderColor: C.senalInk, color: C.senalInk }}
                  >
                    MUESTRA
                  </span>
                </div>

                <table className="mt-8 w-full text-left text-[15px]">
                  <caption className="sr-only">Tabla de precios de muestra</caption>
                  <thead>
                    <tr className="text-xs uppercase tracking-wider" style={{ color: C.gris }}>
                      <th scope="col" className="pb-3 font-semibold w-12">N°</th>
                      <th scope="col" className="pb-3 font-semibold">Producto</th>
                      <th scope="col" className="pb-3 font-semibold hidden sm:table-cell">Formato</th>
                      <th scope="col" className="pb-3 font-semibold text-right">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRECIOS.map((p, i) => (
                      <tr key={p.item} className="border-t" style={{ borderColor: C.line }}>
                        <td className="py-4 tabular-nums" style={{ color: C.gris }}>{String(i + 1).padStart(2, '0')}</td>
                        <td className="py-4 font-semibold">{p.item}</td>
                        <td className="py-4 hidden sm:table-cell" style={{ color: C.gris }}>{p.unit}</td>
                        <td className={`${display.className} py-4 text-right font-bold tabular-nums`} style={{ color: C.rojo }}>$ —</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="mt-6 text-sm leading-relaxed" style={{ color: C.gris }}>
                  Tabla de ejemplo: la distribuidora completa aquí sus valores reales. Para precios del día y
                  compras por cantidad, consulta por WhatsApp.
                </p>
                <a
                  href={WA_LINK_LISTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 min-h-[48px] px-5 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ backgroundColor: C.tinta, outlineColor: C.rojo }}
                >
                  Enviar mi lista para cotizar
                  <Arrow />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ──────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-16 text-white" style={{ backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-6xl md:text-8xl`}>
              ¿Qué<br />te<br /><span className="inline-block px-[0.06em]" style={{ backgroundColor: C.tinta }}>falta?</span>
            </h2>
            <p className="mt-6 max-w-md text-base md:text-lg text-white/90 leading-relaxed">
              Escribe lo que necesitas y te confirman disponibilidad antes de que salgas de la casa.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRing} group mt-8 flex w-full max-w-md items-center justify-between gap-4 min-h-[64px] py-2 px-6 md:px-8 text-lg md:text-xl font-bold shadow-[8px_8px_0_#1E2022] transition-transform active:translate-x-[4px] active:translate-y-[4px] active:shadow-[4px_4px_0_#1E2022]`}
              style={{ backgroundColor: C.blanco, color: C.rojo }}
            >
              <span>
                WhatsApp
                <span className="block text-sm font-semibold" style={{ color: C.gris }}>{BIZ.phoneDisplay}</span>
              </span>
              <Arrow className="w-7 h-7 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white" style={{ color: C.tinta }}>
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 flex flex-wrap items-end justify-between gap-4">
                <address className="not-italic">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: C.gris }}>Retiro en local</p>
                  <p className={`${display.className} mt-1 text-xl font-bold`}>{BIZ.address}</p>
                  <p className="text-[15px]" style={{ color: C.gris }}>{BIZ.postal} {BIZ.city}, Maule</p>
                </address>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ color: C.rojo, outlineColor: C.rojo }}
                >
                  Cómo llegar <Arrow className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo ────────────────────────────────── */}
      <footer className="text-white" style={{ backgroundColor: C.grisDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <div>
            <p className={`${display.className} text-lg font-bold`}>{BIZ.name}</p>
            <p className="text-xs text-white/70">
              Sitio de ejemplo de Sitiazo · Datos de contacto reales; categorías, textos y precios de muestra; fotos referenciales.
            </p>
          </div>
          <div className="[&>div]:static! [&>div]:max-w-none! [&>div]:inline-flex!">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
