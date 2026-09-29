import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el índice de la guía» — Somos Yerbas Buenas se presenta
 * como las páginas amarillas de la región, así que la página se maqueta como
 * una guía impresa de comuna: cabecera de diario, índice numerado, renglones
 * separados por línea fina y el lima de su marca como subrayado.
 */
const C = {
  papel: '#F4F1E6',
  tinta: '#1B2340',
  lima: '#B3C938',
  rojo: '#E02D23',
  muted: 'rgba(27,35,64,0.68)',
  line: 'rgba(27,35,64,0.16)',
  tinta70: 'rgba(27,35,64,0.72)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'somos-yerbas-buenas',
  title: 'Somos Yerbas Buenas — Guía de la comuna',
  description:
    'La guía de la comuna de Yerbas Buenas: comidas, turismo, cabañas, feria de emprendedores y servicios juntos en un solo lugar.',
  image: `${IMG}/campo.webp`,
})

const NAV_LINKS = [
  { label: 'La guía', href: '#guia' },
  { label: 'Panorama', href: '#panorama' },
  { label: 'La comuna', href: '#comuna' },
]

const INDICE: { n: string; t: string; d: string; img?: string; alt?: string }[] = [
  {
    n: '01',
    t: 'Comidas',
    d: 'Cocinerías, colaciones y productos caseros de la comuna.',
    img: 'jugo',
    alt: 'Jugo artesanal de emprendedora de Yerbas Buenas publicado en la guía',
  },
  {
    n: '02',
    t: 'Turismo',
    d: 'Pesca en el río, paseos de campo y los rincones de la zona.',
    img: 'rio',
    alt: 'Pesca en el río de Yerbas Buenas, foto publicada por Somos Yerbas Buenas',
  },
  {
    n: '03',
    t: 'Cabañas y alojamiento',
    d: 'Casas de campo y cabañas para quedarse en la comuna.',
    img: 'corredor',
    alt: 'Corredor de casa de campo de la comuna de Yerbas Buenas',
  },
  {
    n: '04',
    t: 'Feria de emprendedores',
    d: 'Los emprendimientos locales reunidos y promocionados en la guía.',
  },
  {
    n: '05',
    t: 'Museo Histórico',
    d: 'El museo de la comuna y la memoria de Yerbas Buenas.',
    img: 'museo',
    alt: 'Gráfica del Museo Histórico de Yerbas Buenas',
  },
  {
    n: '06',
    t: 'Mercado Fácil',
    d: 'La vitrina de compras de la guía: todo a un click.',
  },
]

const TICKER = [
  'Comidas',
  'Turismo',
  'Cabañas',
  'Feria de emprendedores',
  'Museo Histórico',
  'Mercado Fácil',
  'Servicios',
  'Artesanía',
]

export default function SomosYerbasBuenasPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        .syb-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .syb-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .syb-btn:active { transform: translateY(0) scale(0.97); }
        .syb-btn:focus-visible { outline: 3px solid ${C.rojo}; outline-offset: 3px; }
        .syb-marquee { animation: syb-scroll 30s linear infinite; }
        @keyframes syb-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .syb-marquee { animation: none; } }
      `}</style>

      <BlitzNav
        name="Somos Yerbas Buenas"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Escribir"
        fontClass={`${display.className} font-bold`}
        theme={{
          over: 'light',
          bar: 'rgba(244,241,230,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.tinta,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: cabecera de guía impresa ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-[110px] pb-10 md:pb-14 text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real con fondo transparente extraído de su sitio */}
            <img
              src={`${IMG}/logo.png`}
              alt="Logo de Somos Yerbas Buenas"
              className="h-12 md:h-16 w-auto mx-auto"
            />
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mt-5`} style={{ color: C.rojo }}>
              Guía de la comuna · Yerbas Buenas, Maule
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] tracking-tight text-[clamp(2.2rem,7vw,4.6rem)] max-w-3xl mx-auto mt-4`}
              style={{ color: C.tinta }}
            >
              Toda la comuna, en{' '}
              <span
                className="underline decoration-[6px] underline-offset-8"
                style={{ textDecorationColor: C.lima }}
              >
                una sola guía
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-5" style={{ color: C.muted }}>
              Somos Yerbas Buenas junta a las pymes, la comida, el turismo y la
              feria de la comuna en un solo lugar: las páginas amarillas de la región.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} syb-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Sumar mi pyme
              </a>
              <a
                href="#guia"
                className={`${mono.className} syb-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Ver el índice
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <figure className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="relative aspect-[16/8] md:aspect-[21/9] overflow-hidden rounded-t-3xl border-2 border-b-0" style={{ borderColor: C.tinta }}>
              <Image
                src={`${IMG}/campo.webp`}
                alt="Familia de la comuna caminando por el campo de Yerbas Buenas"
                fill
                sizes="(min-width: 768px) 72rem, 92vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] py-2.5 text-center border-x-2`} style={{ borderColor: C.tinta, color: C.muted }}>
              El campo de la comuna, foto publicada en somosyerbasbuenas.com
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Ticker de la guía ── */}
      <div className="overflow-hidden border-y-2 py-3" style={{ borderColor: C.tinta, backgroundColor: C.lima }} aria-hidden="true">
        <div className="syb-marquee flex whitespace-nowrap w-max">
          {[0, 1].map((dup) => (
            <span key={dup} className={`${display.className} font-bold uppercase tracking-[0.1em] text-base md:text-lg`} style={{ color: C.tinta }}>
              {TICKER.map((w) => (
                <span key={w} className="mx-4">
                  {w} <span style={{ color: C.rojo }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── El índice: la guía numerada ── */}
      <section id="guia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
            El índice
          </p>
          <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.02] tracking-tight mb-3`}>
            Lo que la guía junta
          </h2>
          <p className="text-sm md:text-base mb-10 max-w-lg" style={{ color: C.muted }}>
            Las secciones del sitio de Somos Yerbas Buenas, tal como aparecen en
            su directorio.
          </p>
        </Reveal>
        <ul className="border-t-2" style={{ borderColor: C.tinta }}>
          {INDICE.map((item, i) => (
            <Reveal key={item.n} delay={i * 50}>
              <li
                className="flex items-center gap-4 md:gap-8 py-5 md:py-6 border-b"
                style={{ borderColor: C.line }}
              >
                <span
                  className={`${mono.className} text-2xl md:text-4xl font-bold w-12 md:w-20 shrink-0`}
                  style={{ color: C.rojo }}
                >
                  {item.n}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`${display.className} font-bold uppercase tracking-tight text-xl md:text-3xl leading-none`}>
                    {item.t}
                  </p>
                  <p className="text-sm mt-1.5 md:mt-2" style={{ color: C.muted }}>
                    {item.d}
                  </p>
                </div>
                {item.img && (
                  <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-2xl border-2" style={{ borderColor: C.tinta }}>
                    <Image
                      src={`${IMG}/${item.img}.webp`}
                      alt={item.alt ?? item.t}
                      fill
                      sizes="(min-width: 768px) 112px, 80px"
                      className="object-cover"
                    />
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={140}>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-6`} style={{ color: C.muted }}>
            ¿Tu pyme es de la comuna? Se suma a la guía por WhatsApp.
          </p>
        </Reveal>
      </section>

      {/* ── Panorama: la comuna en fotos ── */}
      <section id="panorama" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.lima }}>
              Panorama
            </p>
            <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] tracking-tight mb-10`} style={{ color: C.papel }}>
              Yerbas Buenas en sus fotos
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-8">
            <Reveal className="col-span-7">
              <figure>
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl border-2" style={{ borderColor: C.lima }}>
                  <Image
                    src={`${IMG}/corredor.webp`}
                    alt="Corredor de casa de campo en la comuna de Yerbas Buenas"
                    fill
                    sizes="(min-width: 768px) 56vw, 62vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-2.5`} style={{ color: 'rgba(244,241,230,0.72)' }}>
                  Los corredores de campo del valle
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-5" delay={120}>
              <figure className="h-full flex flex-col">
                <div className="relative flex-1 min-h-[200px] overflow-hidden rounded-2xl border-2" style={{ borderColor: 'rgba(179,201,56,0.5)' }}>
                  <Image
                    src={`${IMG}/rio.webp`}
                    alt="Persona pescando al atardecer en el río de la comuna"
                    fill
                    sizes="(min-width: 768px) 34vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-2.5`} style={{ color: 'rgba(244,241,230,0.72)' }}>
                  Tarde de pesca en el río
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Comunidad: quien junta la guía ── */}
      <section id="comuna" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
              Hecha por vecinos
            </p>
            <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] tracking-tight mb-5`}>
              Cada día somos más
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
              La guía la mantiene la comunidad: vecinos que publican sus
              emprendimientos, productos y panoramas para que la comuna se
              conozca. Su sitio lleva más de 112.000 visitas, según su propio
              contador.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} syb-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.tinta, color: '#FFFFFF' }}
              >
                Sumar mi emprendimiento
              </a>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5" delay={120}>
            <figure className="rounded-3xl border-2 p-6 md:p-8" style={{ borderColor: C.tinta, backgroundColor: '#FFFFFF' }}>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element -- foto de perfil real de su sitio */}
                <img
                  src={`${IMG}/luis.webp`}
                  alt="Luis Fariña Rubio, de la comunidad Somos Yerbas Buenas"
                  className="w-14 h-14 rounded-full object-cover border-2"
                  style={{ borderColor: C.lima }}
                />
                <div>
                  <p className={`${display.className} font-bold text-lg leading-tight`}>Luis Fariña Rubio</p>
                  <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    Comunidad Somos Yerbas Buenas
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base leading-relaxed mt-5" style={{ color: C.tinta70 }}>
                La página nació para dar a conocer la comuna: un espacio donde
                las pymes y el turismo de Yerbas Buenas aparecen juntos.
              </p>
              <div className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-5 pt-4 border-t`} style={{ borderColor: C.line, color: C.muted }}>
                {BIZ.site}
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Mapa ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal>
          <div className="relative w-full overflow-hidden rounded-3xl border-2 aspect-[4/3] md:aspect-[21/9]" style={{ borderColor: C.tinta }}>
            <LazyMap src={MAPS_EMBED} title="Somos Yerbas Buenas en Google Maps" className="absolute inset-0 w-full h-full border-0" />
          </div>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-4 text-center`} style={{ color: C.muted }}>
            Yerbas Buenas, Región del Maule ·{' '}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.tinta }}>
              abrir en Google Maps
            </a>
          </p>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col items-center gap-3 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- logo real con fondo transparente */}
          <img src={`${IMG}/logo.png`} alt="Somos Yerbas Buenas" className="h-8 w-auto" />
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(244,241,230,0.8)' }}>
            Guía de la comuna · Yerbas Buenas, Maule
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="syb-btn text-sm font-bold px-6 py-2.5 rounded-full tap-44"
            style={{ backgroundColor: C.lima, color: C.tinta }}
          >
            Escribir por WhatsApp
          </a>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(244,241,230,0.55)' }}>
            Demo de Sitiazo para {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
