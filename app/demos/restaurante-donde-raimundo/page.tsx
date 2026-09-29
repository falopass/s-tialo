import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

// Paleta del local: crema de mantel, teja de greda, nogal de los muebles,
// bosque del toldo. Un solo acento: la teja.
const C = {
  crema: '#F5EDDD',
  papel: '#FBF7EE',
  tinta: '#2A1D12',
  teja: '#A3491E',
  bosque: '#24402C',
  suave: '#6B5B49',
  linea: 'rgba(42,29,18,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-donde-raimundo',
  title: 'Restaurante Donde Raimundo — Cocina de olla en Chanco',
  description:
    'Cazuelas, humitas, pescados y la carta de siempre en Errázuriz 262, Chanco. Porciones generosas todos los días. Reserva por WhatsApp.',
  image: `${IMG}/comedor.webp`,
})

const NAV_LINKS = [
  { label: 'Platos', href: '#platos' },
  { label: 'La carta', href: '#carta' },
  { label: 'El comedor', href: '#comedor' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const CINTA = [
  'Cazuela de vacuno',
  'Humitas con ensalada',
  'Salmón a la plancha',
  'Costillar de cerdo',
  'Pastel de choclo',
  'Chorrillana para dos',
  'Papaya con crema',
]

const PLATOS = [
  {
    src: `${IMG}/cazuela.webp`,
    nombre: 'Cazuela de vacuno',
    detalle: 'Con choclo, zapallo y papa; viene con su ensalada.',
    precio: '$6.500',
    alt: 'Cazuela de vacuno servida con carne, choclo, zapallo y papas',
  },
  {
    src: `${IMG}/salmon.webp`,
    nombre: 'Salmón a la plancha',
    detalle: 'Con ensalada fresca o el acompañamiento que elijas.',
    precio: '$11.000',
    alt: 'Salmón a la plancha con ensalada de pepino y tomate',
  },
  {
    src: `${IMG}/humitas.webp`,
    nombre: 'Humitas',
    detalle: 'De a dos, con ensalada de tomate, como manda la temporada.',
    precio: '$7.000',
    alt: 'Humitas con ensalada de tomate y vasos de la casa',
  },
  {
    src: `${IMG}/osobuco-arroz.webp`,
    nombre: 'Carne a la olla',
    detalle: 'Mechada o a la olla, con arroz o el acompañamiento del día.',
    precio: '$6.000',
    alt: 'Carne a la olla servida con arroz',
  },
  {
    src: `${IMG}/chorrillana.webp`,
    nombre: 'Chorrillana para dos',
    detalle: 'Papas fritas, carne, cebolla y huevo: la mesa completa.',
    precio: '$14.000',
    alt: 'Chorrillana con papas fritas, carne, cebolla y huevo frito',
  },
  {
    src: `${IMG}/costillar.webp`,
    nombre: 'Costillar de cerdo',
    detalle: 'Cocido lento, con puré casero o el acompañamiento del día.',
    precio: '$6.500',
    alt: 'Costillar de cerdo con puré',
  },
]

const CARTA: { titulo: string; items: { n: string; p: string }[] }[] = [
  {
    titulo: 'Almuerzos de la casa',
    items: [
      { n: 'Cazuela de vacuno (incluye ensalada)', p: '$6.500' },
      { n: 'Pollo asado', p: '$5.000' },
      { n: 'Pollo arvejado', p: '$5.000' },
      { n: 'Costillar de cerdo', p: '$6.500' },
      { n: 'Pulpa de cerdo', p: '$7.000' },
      { n: 'Guatitas a la española', p: '$6.000' },
      { n: 'Carne a la olla o mechada', p: '$6.000' },
      { n: 'Legumbres según temporada', p: '$7.000' },
      { n: 'Humitas (2) con ensalada de tomate', p: '$7.000' },
      { n: 'Pastel de choclo', p: '$8.500' },
      { n: 'Pollo a la marinera', p: '$8.500' },
    ],
  },
  {
    titulo: 'Pescados y mariscos',
    items: [
      { n: 'Merluza', p: '$7.000' },
      { n: 'Reineta a la plancha o frita', p: '$11.000' },
      { n: 'Salmón a la plancha o frito', p: '$11.000' },
      { n: 'Corvina frita', p: '$10.000' },
      { n: 'Mariscal caliente', p: '$8.000' },
    ],
  },
  {
    titulo: 'Para compartir y dulces',
    items: [
      { n: 'Chorrillana individual', p: '$7.000' },
      { n: 'Chorrillana para dos', p: '$14.000' },
      { n: 'Empanadas de queso (3)', p: '$1.000' },
      { n: 'Papaya con crema', p: '$3.000' },
      { n: 'Leche asada', p: '$2.500' },
      { n: 'Helado', p: '$2.000' },
    ],
  },
]

const RESENAS = [
  {
    texto:
      'Excelente comida: el osobuco en cazuela criolla es notable, igual que el salmón a la plancha y las costillas. Porciones generosas.',
    nombre: 'Augusto Antonio Castro Brugueras',
  },
  {
    texto:
      'Local espacioso, bonito y limpio; y lo mejor es la comida: porciones muy generosas, rica y barata.',
    nombre: 'Eva Arcos',
  },
  {
    texto:
      'Excelente atención y comida deliciosa, siempre. Local limpio y ordenado.',
    nombre: 'Javier Sepúlveda',
  },
]

function Arco({ src, alt, className = '', aspect = 'aspect-[3/4]' }: { src: string; alt: string; className?: string; aspect?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-t-[999px] ${aspect} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
    </div>
  )
}

export default function Page() {
  return (
    <div className={body.className} style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: C.crema,
          ink: C.tinta,
          line: C.linea,
          btnBg: C.teja,
          btnInk: '#FFF7EA',
        }}
      />

      {/* ── Hero: la mesa de la casa ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-14 md:pt-40 md:pb-20 grid grid-cols-12 gap-x-4 gap-y-8 md:gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] mb-5" style={{ color: C.teja }}>
                Chanco, Región del Maule
              </p>
              <h1 className={`${display.className} text-[clamp(2.6rem,7vw,4.8rem)] leading-[1.02] mb-5`}>
                La olla grande{' '}
                <em className="italic" style={{ color: C.teja }}>
                  de Chanco
                </em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-7 max-w-md" style={{ color: C.suave }}>
                Cazuelas, humitas, pescados y la carta de siempre. Porciones
                generosas en Errázuriz 262, todos los días.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.teja, color: '#FFF7EA' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#carta"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold border transition-transform active:scale-95 tap-44"
                  style={{ borderColor: C.linea, color: C.tinta }}
                >
                  Ver la carta
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tap-44"
                style={{ color: C.tinta }}
              >
                <Stars value={BIZ.rating} color={C.teja} />
                <span>
                  {BIZ.rating} en Google Maps · {BIZ.reviews} reseñas
                </span>
              </a>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Reveal delay={120}>
              <div className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-7">
                  <Arco
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Donde Raimundo: casa blanca con techo de teja y puerta de madera en Errázuriz, Chanco"
                    aspect="aspect-[3/4]"
                  />
                </div>
                <div className="col-span-5 space-y-4">
                  <Arco
                    src={`${IMG}/comedor.webp`}
                    alt="Comedor de madera con chimenea, vigas rusticas y mesas listas"
                    aspect="aspect-[4/5]"
                  />
                  <div
                    className="rounded-2xl px-4 py-3 text-sm leading-snug"
                    style={{ backgroundColor: C.bosque, color: '#F5EDDD' }}
                  >
                    <p className="font-bold">{BIZ.hours}</p>
                    <p style={{ color: 'rgba(245,237,221,0.75)' }}>En el local o para llevar</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta de la casa ── */}
      <div className="py-3 md:py-4 overflow-hidden" style={{ backgroundColor: C.teja }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-y-1.5 text-base md:text-lg italic`}
          style={{ color: '#FFF3E2' }}
        >
          {CINTA.map((item, i) => (
            <span key={item} className="inline-flex items-center">
              {i > 0 && <span className="px-3 opacity-50" aria-hidden="true">·</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Los platos ── */}
      <section id="platos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-4`}>
              Lo que está saliendo{' '}
              <em className="italic" style={{ color: C.teja }}>
                de la cocina
              </em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
              Fotos reales de la casa. La carta cambia con la semana y con lo
              que hay fresco, pero estos clásicos no se mueven.
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {PLATOS.map((p, i) => (
            <Reveal key={p.nombre} delay={(i % 3) * 90} className={i % 3 === 1 ? 'md:translate-y-8' : ''}>
              <li>
                <Arco src={p.src} alt={p.alt} />
                <div className="mt-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`${display.className} text-lg md:text-xl leading-tight`}>{p.nombre}</h3>
                    <span className="text-sm md:text-base font-bold shrink-0" style={{ color: C.teja }}>
                      {p.precio}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: C.suave }}>
                    {p.detalle}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="max-w-2xl mb-10 md:mb-14">
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-4`} style={{ color: '#F5EDDD' }}>
                La carta,{' '}
                <em className="italic" style={{ color: '#E8B48B' }}>
                  como la lees en el local
                </em>
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(245,237,221,0.75)' }}>
                Precios de la carta impresa del restaurante. Todos los platos
                van con acompañamiento: papas mayo, arroz, puré o ensalada.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {CARTA.map((grupo, gi) => (
              <Reveal key={grupo.titulo} delay={gi * 100}>
                <h3
                  className={`${display.className} italic text-xl md:text-2xl mb-4 pb-3 border-b`}
                  style={{ color: '#E8B48B', borderColor: 'rgba(245,237,221,0.2)' }}
                >
                  {grupo.titulo}
                </h3>
                <ul className="space-y-0">
                  {grupo.items.map((it) => (
                    <li
                      key={it.n}
                      className="flex items-baseline justify-between gap-4 py-2.5 border-b"
                      style={{ borderColor: 'rgba(245,237,221,0.12)' }}
                    >
                      <span className="text-sm md:text-base leading-snug" style={{ color: '#F5EDDD' }}>
                        {it.n}
                      </span>
                      <span className="text-sm md:text-base font-bold shrink-0" style={{ color: '#E8B48B' }}>
                        {it.p}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="text-sm mt-8" style={{ color: 'rgba(245,237,221,0.65)' }}>
              Agregados: papas fritas +$1.000 · plato a lo pobre +$3.000.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El comedor ── */}
      <section id="comedor" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-12 items-center">
          <Reveal className="col-span-12 md:col-span-5">
            <Arco
              src={`${IMG}/salon.webp`}
              alt="Salon del restaurante con comensales almorzando entre madera y luz natural"
              aspect="aspect-[4/5]"
            />
          </Reveal>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal>
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] mb-5`}>
                Un comedor amplio,{' '}
                <em className="italic" style={{ color: C.teja }}>
                  de los de antes
                </em>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: C.suave }}>
                Madera, luz natural y mesas que no se apuran. Los que vienen
                lo dicen mejor que nosotros: lugar espacioso, limpio y con
                porciones que sobran para llevar.
              </p>
              <ul className="space-y-4">
                {[
                  ['Porciones que alcanzan', 'El comentario más repetido en las reseñas: los platos son generosos de verdad.'],
                  ['Limpio y ordenado', 'Salón, cocina y servicio cuidados; se nota apenas se entra.'],
                  ['Atención de casa', 'Servicio rápido y directo, de restaurante de pueblo bien llevado.'],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4 items-start">
                    <span
                      className="shrink-0 w-2.5 h-2.5 rounded-full mt-2"
                      style={{ backgroundColor: C.teja }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-bold text-base" style={{ color: C.tinta }}>{t}</p>
                      <p className="text-sm leading-relaxed" style={{ color: C.suave }}>{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.2rem)] leading-[1.05]`}>
                Lo que dicen{' '}
                <em className="italic" style={{ color: C.teja }}>
                  los que ya almorzaron
                </em>
              </h2>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold tap-44" style={{ color: C.tinta }}>
                <Stars value={BIZ.rating} color={C.teja} />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure
                  className="h-full rounded-2xl p-6 border"
                  style={{ backgroundColor: C.crema, borderColor: C.linea }}
                >
                  <blockquote className={`${display.className} text-lg leading-relaxed mb-5`}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-sm" style={{ color: C.suave }}>
                    <span className="font-bold block" style={{ color: C.tinta }}>{r.nombre}</span>
                    Reseña en Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-x-4 gap-y-8 md:gap-12 items-stretch">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <Reveal>
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] mb-6`} style={{ color: '#F5EDDD' }}>
                En plena{' '}
                <em className="italic" style={{ color: '#E8B48B' }}>
                  Errázuriz
                </em>
              </h2>
              <address className="not-italic space-y-4 mb-8">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Horario', BIZ.hours],
                  ['Teléfono', BIZ.phoneDisplay],
                ].map(([k, v]) => (
                  <p key={k} className="text-base leading-relaxed" style={{ color: 'rgba(245,237,221,0.75)' }}>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] mb-0.5" style={{ color: '#E8B48B' }}>
                      {k}
                    </span>
                    {v}
                  </p>
                ))}
              </address>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: '#FFF3E2', color: C.bosque }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold border transition-transform active:scale-95 tap-44"
                  style={{ borderColor: 'rgba(245,237,221,0.35)', color: '#F5EDDD' }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <div
              className="relative w-full overflow-hidden rounded-2xl border aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]"
              style={{ borderColor: 'rgba(245,237,221,0.3)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#1C130B', color: '#F5EDDD' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,237,221,0.65)' }}>
            {BIZ.address}, {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
            {' · '}
            {BIZ.hours}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,237,221,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(245,237,221,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F5EDDD' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E8B48B' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
