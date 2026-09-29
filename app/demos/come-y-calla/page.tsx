import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CARTA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
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
 * Dirección de arte: «letrero encendido de carrito nocturno».
 * El negocio abre de tarde y los sábados hasta las 04:00 — la página vive
 * de noche: azul tinta profundo, ámbar de ampolleta y la carta sobre
 * papel crema como el menú pegado en el carrito. Las fotos circulares
 * son recortes de los platos de su propia carta publicada en Maps.
 */
const C = {
  noche: '#0B0D14',
  panel: '#141828',
  panel2: '#1B2136',
  crema: '#FAF3E3',
  papel: '#FFFDF6',
  ink: '#F3EEDF',
  inkSuave: '#B9BECD',
  tinta: '#211D14',
  tintaSuave: '#6B6046',
  ambar: '#FFB020',
  ambarSuave: '#FFD97A',
  teja: '#E4572E',
  lineaNoche: 'rgba(243,238,223,0.14)',
  lineaPapel: 'rgba(33,29,20,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'come-y-calla',
  title: 'Come y Calla · Comida rápida en la 22 Oriente, Talca',
  description:
    'Food truck en 22 Oriente, Talca: hamburguesa venezolana, completos talquinos, chorrillana, pepito 22 cm y tequeños. Sábados hasta las 04:00. Pide por WhatsApp.',
  image: `${IMG}/vaquera.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El carrito', href: '#carrito' },
  { label: 'Dónde y cuándo', href: '#donde' },
]

const MARQUEE = [
  'hamburguesa venezolana',
  'completo talquino $2.000',
  'chorrillana $6.500',
  'pepito 22 cm',
  'tequeños',
  'ramen casero',
  'pollo broaster',
  'papas mechadas',
]

// Precios leídos de la carta real publicada en su ficha de Google Maps.
const CARTA: {
  grupo: string
  nota: string
  items: { name: string; det: string; price: string }[]
}[] = [
  {
    grupo: 'Hamburguesas',
    nota: 'las que salen de la plancha',
    items: [
      {
        name: 'Venezolana',
        det: 'lechuga, tomate, carne de vacuno, tocino, huevo, queso, jamón, papas hilo, mostaza, bbq y salsa verde',
        price: '$7.000',
      },
      {
        name: 'La doble tentación',
        det: 'doble carne con cheddar, bbq, tocino, cebolla caramelizada, aros de cebolla y coronada con 3 tequeños',
        price: '$7.990 · doble $8.990',
      },
      {
        name: 'Clásica / italiana',
        det: 'lechuga, tomate, carne y queso cheddar',
        price: '$4.500',
      },
      {
        name: 'Vaquera crunch a lo pobre',
        det: 'cama de papa hilo, hamburguesa, cheddar, huevo frito, cebolla a la plancha y salsa especial',
        price: '$6.000 · doble $7.500',
      },
    ],
  },
  {
    grupo: 'Completos y más',
    nota: 'los de siempre, bien cargados',
    items: [
      {
        name: 'Completo talquino',
        det: 'palta, tomate, mayonesa casera o industrial; se le puede sumar chucrut o americana',
        price: '$2.000',
      },
      {
        name: 'Perro caliente',
        det: 'cebolla, repollo, salchicha premium, papa hilo, queso y salsas',
        price: '$2.500',
      },
      {
        name: 'Pepito 22 cm',
        det: 'pan tostado, lechuga, tomate, mix de carnes, chorizo, tocino, huevo, queso, papa hilo y salsas',
        price: '$8.000',
      },
      {
        name: 'Pizzas',
        det: 'napolitana, española o pepperoni',
        price: 'ind. $3.000 · familiar $8.000',
      },
      {
        name: 'Ramen',
        det: 'caldo concentrado de verduras, fideos de arroz o trigo, salteado de verduras, champiñón, brócoli, cebollín, sésamo; huevo y carne opcional',
        price: '$6.000',
      },
    ],
  },
  {
    grupo: 'Papas y chorrera',
    nota: 'personal o para compartir',
    items: [
      {
        name: 'Papas fritas',
        det: 'papas naturales',
        price: 'personal $3.000 · familiar $5.000',
      },
      {
        name: 'Salchipapas',
        det: 'papas naturales con salchicha',
        price: 'personal $4.500 · familiar $9.000',
      },
      {
        name: 'Papas con tocino',
        det: 'bañadas en salsa de queso, crutones de tocino y cebollín',
        price: '$4.500',
      },
      {
        name: 'Papas mechadas',
        det: 'papas fritas, carne mechada y salsa de queso',
        price: '$5.000',
      },
      {
        name: 'Chorrillana',
        det: 'papas fritas, vacuno, pollo o cerdo, chorizo, cebolla a la plancha y huevo',
        price: '$6.500',
      },
      {
        name: 'Pollo broaster',
        det: 'papas fritas y tuto de ala broaster',
        price: 'personal $6.500 · familiar $9.500',
      },
    ],
  },
]

const SNACKS = [
  { name: 'Aros de cebolla (10)', price: '$2.500' },
  { name: 'Arrollado primavera (5)', price: '$3.500' },
  { name: 'Tequeños (10)', price: '$5.000' },
]

const BEBESTIBLE = [
  { name: 'Bebida en lata', price: '$1.500' },
  { name: 'Express', price: '$700' },
  { name: 'Café helado', price: '$2.500' },
  { name: 'Café / té', price: '$600' },
  { name: 'Agua', price: '$800' },
]

// Recortes reales de las fotos de platos de su propia carta en Maps.
const PLATOS = [
  { src: `${IMG}/doble-tentacion.webp`, alt: 'La doble tentación: torre de hamburguesa doble carne de Come y Calla' },
  { src: `${IMG}/chorrillana.webp`, alt: 'Chorrillana con huevo frito encima de las papas' },
  { src: `${IMG}/ramen.webp`, alt: 'Bowl de ramen casero con huevo y verduras' },
  { src: `${IMG}/pepito.webp`, alt: 'Pepito de 22 cm con mix de carnes y palta' },
  { src: `${IMG}/pollo-broaster.webp`, alt: 'Pollo broaster con papas fritas' },
  { src: `${IMG}/salchipapas.webp`, alt: 'Salchipapas en plato' },
  { src: `${IMG}/pizza.webp`, alt: 'Pizza pepperoni individual' },
  { src: `${IMG}/papas-tocino.webp`, alt: 'Papas con tocino y salsa de queso' },
]

const CARTA_FOTOS = [
  { src: `${IMG}/carta-hamburguesas.webp`, alt: 'Carta real de Come y Calla: hamburguesas, completos y pizzas' },
  { src: `${IMG}/carta-papas.webp`, alt: 'Carta real de Come y Calla: papas fritas, chorrillana y snacks' },
  { src: `${IMG}/carta-extras.webp`, alt: 'Carta real de Come y Calla: ramen, pepito, agregados y bebestibles' },
]

function Precio({ children }: { children: React.ReactNode }) {
  return (
    <span className={`${mono.className} text-sm font-bold`} style={{ color: C.teja }}>
      {children}
    </span>
  )
}

export default function ComeYCalla() {
  return (
    <main className={body.className} style={{ backgroundColor: C.noche, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} uppercase tracking-wide`}>
            Come <span style={{ color: C.ambar }}>y</span> Calla
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(11,13,20,0.92)',
          ink: C.ink,
          line: C.lineaNoche,
          btnBg: C.ambar,
          btnInk: '#1A1400',
        }}
        fontClass={display.className}
        ctaLabel="Pedir"
      />

      {/* ── Hero nocturno ─────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
        {/* brillo de ampolleta */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(255,176,32,0.18), transparent)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.ambar }}>
                food truck · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} uppercase leading-[0.92] mt-4 text-[64px] md:text-[110px]`}
                style={{ color: C.ink }}
              >
                Come
                <span className="block" style={{ color: C.ambar }}>
                  y calla
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.inkSuave }}>
                El carrito de la {BIZ.address.toLowerCase()}: hamburguesas a la plancha, completos
                talquinos desde $2.000 y chorrillana hasta tarde — los sábados, hasta las 4 de la mañana.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-[52px] px-6 rounded-full text-base font-bold tap-44 active:scale-95 transition-transform"
                  style={{ backgroundColor: C.ambar, color: '#1A1400' }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href="#carta"
                  className="inline-flex items-center h-[52px] px-6 rounded-full text-base font-semibold tap-44 active:scale-95 transition-transform"
                  style={{ border: `1.5px solid ${C.lineaNoche}`, color: C.ink }}
                >
                  Ver la carta
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className={`${mono.className} mt-6 text-xs md:text-sm`} style={{ color: C.inkSuave }}>
                {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="relative mx-auto max-w-[340px] md:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] rotate-3"
                style={{ backgroundColor: C.panel2, border: `1px solid ${C.lineaNoche}` }}
              />
              <img
                src={`${IMG}/vaquera.webp`}
                alt="Hamburguesa vaquera a lo pobre de Come y Calla con huevo frito encima"
                className="relative w-full aspect-[4/5] object-cover rounded-[2rem]"
                style={{ border: `2px solid ${C.ambar}` }}
              />
              <div
                className={`${mono.className} absolute -bottom-4 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full whitespace-nowrap`}
                style={{ backgroundColor: C.teja, color: '#FFF6EC' }}
              >
                abierto hasta las 04:00 · sáb
              </div>
            </div>
          </Reveal>
        </div>

        {/* marquesina ámbar */}
        <div className="relative overflow-hidden py-3" style={{ backgroundColor: C.ambar }} aria-hidden="true">
          <div className="marquee flex whitespace-nowrap">
            {[0, 1].map((n) => (
              <span key={n} className={`${display.className} uppercase text-lg tracking-wider pr-4`} style={{ color: '#1A1400' }}>
                {MARQUEE.map((m) => `${m} · `).join('')}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── La carta sobre papel ──────────────────────────────── */}
      <section id="carta" className="py-14 md:py-20" style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.teja }}>
              la carta, con sus precios
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl mt-3 leading-none`}>
              Todo lo que sale del carrito
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: C.tintaSuave }}>
              Los precios son los de su propia carta, publicada en su ficha de Google.
            </p>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-x-10 gap-y-10">
            {CARTA.map((g, gi) => (
              <Reveal key={g.grupo} delay={gi * 90}>
                <div
                  className="h-full rounded-2xl p-5"
                  style={{ backgroundColor: C.papel, border: `1.5px solid ${C.lineaPapel}` }}
                >
                  <h3 className={`${display.className} uppercase text-2xl tracking-wide`}>{g.grupo}</h3>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-1`} style={{ color: C.tintaSuave }}>
                    {g.nota}
                  </p>
                  <ul className="mt-5 space-y-4">
                    {g.items.map((it) => (
                      <li key={it.name} className="border-b border-dashed pb-4 last:border-0 last:pb-0" style={{ borderColor: C.lineaPapel }}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-bold text-[15px] leading-snug">{it.name}</span>
                          <Precio>{it.price}</Precio>
                        </div>
                        <p className="mt-1 text-[13px] leading-relaxed" style={{ color: C.tintaSuave }}>
                          {it.det}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* snacks + bebestible en una fila oscura */}
          <Reveal delay={120}>
            <div
              className="mt-10 rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-8"
              style={{ backgroundColor: C.panel, color: C.ink, border: `1.5px solid ${C.lineaNoche}` }}
            >
              <div>
                <h3 className={`${display.className} uppercase text-2xl tracking-wide`} style={{ color: C.ambar }}>
                  Snacks
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {SNACKS.map((s) => (
                    <li key={s.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px]">{s.name}</span>
                      <span className={`${mono.className} text-sm font-bold`} style={{ color: C.ambarSuave }}>
                        {s.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`${display.className} uppercase text-2xl tracking-wide`} style={{ color: C.ambar }}>
                  Bebestible
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {BEBESTIBLE.map((s) => (
                    <li key={s.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px]" style={{ color: C.inkSuave }}>{s.name}</span>
                      <span className={`${mono.className} text-sm font-bold`} style={{ color: C.ambarSuave }}>
                        {s.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* platos de su carta real */}
          <div className="mt-12">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.teja }}>
                fotos de su propia carta
              </p>
            </Reveal>
            <div className="mt-5 grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
              {PLATOS.map((p, i) => (
                <Reveal key={p.src} delay={i * 60}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-full"
                    style={{ border: `3px solid ${C.papel}`, boxShadow: `0 0 0 1.5px ${C.lineaPapel}` }}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── El carrito: la carta como se ve en el local ──────── */}
      <section id="carrito" className="py-14 md:py-20" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.ambar }}>
              el carrito en la esquina
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl mt-3 leading-none`}>
              La carta pegada en el vidrio
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: C.inkSuave }}>
              Así se lee el menú en el local: tres láminas con todo lo que hacen,
              tal cual las publica el negocio.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 gap-3 md:gap-6 items-start">
            {CARTA_FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 100}>
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="w-full rounded-xl"
                  style={{ border: `1.5px solid ${C.lineaNoche}` }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde y cuándo ────────────────────────────────────── */}
      <section id="donde" className="py-14 md:py-20" style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.teja }}>
                dónde y cuándo
              </p>
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl mt-3 leading-none`}>
                22 Oriente, Talca
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div
                className="mt-7 rounded-2xl p-6"
                style={{ backgroundColor: C.papel, border: `1.5px solid ${C.lineaPapel}` }}
              >
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.tintaSuave }}>
                  dirección
                </p>
                <p className="mt-1.5 text-lg font-bold">{BIZ.address}, {BIZ.city}</p>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-5`} style={{ color: C.tintaSuave }}>
                  horario
                </p>
                <ul className="mt-2 space-y-1.5">
                  {BIZ.hours.map((h) => (
                    <li key={h.days} className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px]">{h.days}</span>
                      <span className={`${mono.className} text-sm font-bold`}>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] leading-relaxed rounded-xl px-4 py-3" style={{ backgroundColor: '#FBE7C0', color: '#6B4A00' }}>
                  Los sábados cierra a las 04:00: es el carrito de la salida del fin de semana.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK_CARTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[52px] px-6 rounded-full text-base font-bold tap-44 active:scale-95 transition-transform"
                  style={{ backgroundColor: C.teja, color: '#FFF6EC' }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="inline-flex items-center h-[52px] px-6 rounded-full text-base font-semibold tap-44 active:scale-95 transition-transform"
                  style={{ border: `1.5px solid ${C.lineaPapel}`, color: C.tinta }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden tap-44"
              style={{ border: `1.5px solid ${C.lineaPapel}` }}
              aria-label="Abrir ubicación de Come y Calla en Google Maps"
            >
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Come y Calla, 22 Oriente, Talca"
                className="w-full h-[320px] md:h-[420px] pointer-events-none"
                style={{ border: 0, backgroundColor: C.papel }}
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="pt-10 pb-8" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} uppercase text-3xl`} style={{ color: C.ink }}>
              Come <span style={{ color: C.ambar }}>y</span> Calla
            </p>
            <p className={`${mono.className} mt-2 text-xs`} style={{ color: C.inkSuave }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-bold tap-44 active:scale-95 transition-transform"
            style={{ backgroundColor: C.ambar, color: '#1A1400' }}
          >
            Pedir por WhatsApp
          </a>
        </div>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 mt-7 pt-5 flex flex-wrap gap-x-6 gap-y-2"
          style={{ borderTop: `1px solid ${C.lineaNoche}` }}
        >
          <span className={`${mono.className} text-[11px]`} style={{ color: C.inkSuave }}>
            {BIZ.phoneDisplay}
          </span>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} text-[11px] underline underline-offset-4 tap-44`}
            style={{ color: C.inkSuave }}
          >
            Google Maps
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label="Pedir por WhatsApp a Come y Calla" />

      <style>{`
        .marquee { animation: cyc-marquee 26s linear infinite; width: max-content; }
        @keyframes cyc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }
      `}</style>
    </main>
  )
}
