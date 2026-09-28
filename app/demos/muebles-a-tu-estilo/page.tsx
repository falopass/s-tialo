import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

const C = {
  verde: '#257556',
  verdeDeep: '#1F5E49',
  crema: '#FDF6EC',
  cremaDeep: '#F4EADB',
  ambar: '#E8A33D',
  tinta: '#1D2521',
  muted: 'rgba(29,37,33,0.7)',
  line: 'rgba(29,37,33,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'muebles-a-tu-estilo',
  title: 'muebles a tu estilo — Fábrica de muebles en Molina',
  description: 'Fábrica de muebles en Teniente Berguño 1369, Molina, Región del Maule. Cocinas, closets, comedores y muebles a medida, conversados directo con el taller.',
  image: '/demos/muebles-a-tu-estilo/hero.webp',
})

const NAV_LINKS = [
  { label: 'Muebles', href: '#muebles' },
  { label: 'El taller', href: '#taller' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const MUEBLES = [
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Muestras de tableros de madera y tiradores sobre una mesa del taller',
    name: 'Cocinas y closets',
    desc: 'Muebles de cocina, closets y organizadores al centímetro de tu espacio. Eliges tablero, color y tiradores.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Mesa de comedor de madera con sillas y un aparador terminados',
    name: 'Comedores y mesas',
    desc: 'Mesas, sillas y aparadores en madera, pensados para el uso diario de una familia.',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Interior del taller con repisas, maderas y banco de trabajo',
    name: 'Racks y repisas',
    desc: 'Racks de TV, bibliotecas y repisas que calzan justo en el muro que tienes.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Cepillo de carpintero y virutas sobre un tablón de madera',
    name: 'Encargos a tu estilo',
    desc: '¿Tienes una foto, un dibujo o un rincón difícil? Se conversa, se cotiza y se fabrica en el taller.',
  },
]

const VALORES = [
  {
    title: 'Trato directo',
    desc: 'Hablas con quien fabrica tu mueble, desde la primera medida hasta la entrega.',
  },
  {
    title: 'Hecho a medida',
    desc: 'Cada pieza se fabrica a pedido, según tu espacio y tu forma de usarla.',
  },
  {
    title: 'Terminaciones cuidadas',
    desc: 'Cantos, bisagras y correderas revisados antes de salir del taller.',
  },
]

const PRECIOS = [
  { name: 'Mueble de cocina', unit: 'metro lineal', price: 'desde $110.000' },
  { name: 'Closet con puertas correderas', unit: 'según medida', price: 'desde $420.000' },
  { name: 'Mesa de comedor, 6 personas', unit: 'madera', price: 'desde $350.000' },
  { name: 'Rack de TV a medida', unit: 'según ancho', price: 'desde $170.000' },
  { name: 'Velador', unit: 'unidad', price: 'desde $75.000' },
]

function Label({ n, children, light = false }: { n: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="flex items-baseline gap-3 text-[11px] font-bold uppercase tracking-[0.22em]"
      style={{ color: light ? 'rgba(253,246,236,0.8)' : C.verde }}
    >
      <span className="tabular-nums">{n}</span>
      <span className="h-px w-8 self-center" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A33D]'

export default function MueblesATuEstiloPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(253,246,236,0.96)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.verde,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre, con la grilla visible ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Taller de muebles con repisas de madera, herramientas y un banco de trabajo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(29,37,33,0.6) 0%, rgba(29,37,33,0.5) 45%, rgba(29,37,33,0.92) 100%)' }}
        />
        <div className="absolute inset-0 max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-4 md:grid-cols-12 pointer-events-none" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className={`border-l ${i >= 4 ? 'hidden md:block' : ''} ${i % 3 === 0 ? '' : 'md:border-transparent'}`}
              style={{ borderColor: 'rgba(253,246,236,0.14)' }}
            />
          ))}
        </div>

        <div className="relative flex-1 flex flex-col justify-end w-full max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-10 md:pb-14">
          <Reveal>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-x-5 md:gap-x-8">
              <p className="col-span-4 md:col-span-12 text-[11px] font-bold uppercase tracking-[0.24em] mb-6" style={{ color: C.ambar }}>
                {BIZ.rubro} — {BIZ.city}, Maule
              </p>
              <h1
                className={`${display.className} col-span-4 md:col-span-10 text-[clamp(2.9rem,10vw,7.2rem)] leading-[0.95] tracking-[-0.02em] mb-8`}
                style={{ color: C.crema }}
              >
                El mueble que imaginas,
                <br />
                <em className="font-normal" style={{ color: C.ambar }}>a tu medida.</em>
              </h1>
              <p className="col-span-4 md:col-span-5 md:col-start-1 text-base md:text-lg leading-relaxed mb-8 md:mb-0" style={{ color: 'rgba(253,246,236,0.92)' }}>
                Fabricamos cocinas, closets, comedores y encargos especiales en
                nuestro taller de Molina. Conversas directo con quien lo hace.
              </p>
              <div className="col-span-4 md:col-span-4 md:col-start-9 flex flex-col gap-3 md:self-end">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-6 py-3.5 md:py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors hover:bg-[#F0B658] active:scale-[0.98] ${focusRing} tap-44`}
                  style={{ backgroundColor: C.ambar, color: C.tinta }}
                >
                  Cotizar por WhatsApp <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#muebles"
                  className={`self-start md:self-stretch flex items-center justify-between gap-4 px-6 py-3.5 md:py-4 text-sm font-bold uppercase tracking-[0.14em] border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(253,246,236,0.5)', color: C.crema }}
                >
                  Ver los muebles <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <dl
          className="relative border-t grid grid-cols-2 md:grid-cols-4 max-w-6xl w-full mx-auto"
          style={{ borderColor: 'rgba(253,246,236,0.22)' }}
        >
          {[
            ['Rubro', BIZ.rubro],
            ['Comuna', `${BIZ.city}, Maule`],
            ['Taller', BIZ.address],
            ['WhatsApp', BIZ.phoneDisplay],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`px-5 md:px-8 py-4 ${i % 2 === 1 ? 'border-l' : ''} ${i === 2 ? 'md:border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
              style={{ borderColor: 'rgba(253,246,236,0.22)' }}
            >
              <dt className="text-[10px] font-bold uppercase tracking-[0.24em] mb-1" style={{ color: 'rgba(253,246,236,0.78)' }}>{k}</dt>
              <dd className="text-sm font-semibold" style={{ color: C.crema }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── 01 Muebles ── */}
      <section id="muebles" className="scroll-mt-20 border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Label n="01">Lo que fabricamos</Label>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mt-6 mb-5`}>
                Muebles para vivir la casa
              </h2>
              <p className="text-[15px] leading-relaxed max-w-xs" style={{ color: C.muted }}>
                Líneas de ejemplo: al publicar se reemplazan por los trabajos
                reales del taller.
              </p>
            </div>
          </Reveal>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px" style={{ backgroundColor: C.line }}>
            {MUEBLES.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <article className="h-full p-5 md:p-6 flex flex-col" style={{ backgroundColor: C.crema }}>
                  <div className="flex items-baseline justify-between mb-4 text-[11px] font-bold uppercase tracking-[0.22em]">
                    <span style={{ color: C.verde }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ color: C.muted }}>A medida</span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden mb-5 group">
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className={`${display.className} text-2xl md:text-[1.7rem] leading-tight mb-2`}>{m.name}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.muted }}>{m.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 El taller ── */}
      <section id="taller" className="scroll-mt-20 border-b" style={{ backgroundColor: C.cremaDeep, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label n="02">El taller</Label>
            <p className={`${display.className} text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.08] tracking-[-0.01em] mt-6 mb-12 md:mb-16 max-w-4xl`}>
              Una fábrica de barrio en Molina, donde cada mueble se{' '}
              <em style={{ color: C.verde }}>conversa antes de cortarse.</em>
            </p>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Fachada de un taller de muebles con el portón abierto hacia la calle"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.muted }}>
                  <span>{BIZ.address}</span>
                  <span>Foto de muestra</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <p className="text-[15px] md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
                En {BIZ.address}, en {BIZ.city}, está el taller de {BIZ.name}.
                Sin vitrinas ni vendedores: explicas lo que necesitas, se toman
                las medidas y el mismo equipo que lo fabrica te lo entrega.
              </p>
              <p className="text-[15px] md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
                Todavía no hay reseñas en Google; el trabajo se conoce por el
                boca a boca y por los {BIZ.facebookFollowers} seguidores que lo
                siguen en Facebook.
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: C.verde }}>
                Lo que se cuida en cada encargo
              </p>
              <ol className="border-t" style={{ borderColor: C.line }}>
                {VALORES.map((v, i) => (
                  <li key={v.title} className="grid grid-cols-[2.5rem_1fr] py-4 border-b" style={{ borderColor: C.line }}>
                    <span className="text-sm font-bold tabular-nums" style={{ color: C.verde }}>{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <span className="block font-bold mb-1">{v.title}</span>
                      <span className="block text-[15px] leading-relaxed" style={{ color: C.muted }}>{v.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 03 Precios ── */}
      <section id="precios" className="scroll-mt-20 border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="md:col-span-4">
            <Label n="03">Precios de referencia</Label>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mt-6 mb-5`}>Para hacerse una idea</h2>
            <p
              className="inline-block text-[11px] font-extrabold uppercase tracking-[0.22em] px-3 py-1.5 mb-4"
              style={{ backgroundColor: C.ambar, color: C.tinta }}
            >
              Valores de muestra
            </p>
            <p className="text-[15px] leading-relaxed max-w-xs" style={{ color: C.muted }}>
              No son precios del taller. El valor real depende de medidas,
              material y herrajes, y se confirma por WhatsApp.
            </p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={100}>
            <table className="w-full text-left border-t-2" style={{ borderColor: C.tinta }}>
              <thead>
                <tr className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.muted }}>
                  <th scope="col" className="py-3 pr-4 font-bold">Mueble</th>
                  <th scope="col" className="py-3 pr-4 font-bold hidden sm:table-cell">Base</th>
                  <th scope="col" className="py-3 font-bold text-right">Muestra</th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS.map((p) => (
                  <tr key={p.name} className="border-t" style={{ borderColor: C.line }}>
                    <th scope="row" className={`${display.className} py-4 pr-4 text-lg md:text-xl font-normal`}>{p.name}</th>
                    <td className="py-4 pr-4 text-sm hidden sm:table-cell" style={{ color: C.muted }}>{p.unit}</td>
                    <td className="py-4 text-right text-[15px] font-bold tabular-nums whitespace-nowrap" style={{ color: C.verde }}>{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ── 04 Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="md:col-span-6">
            <Label n="04" light>Contacto</Label>
            <h2 className={`${display.className} text-[clamp(2.4rem,6vw,4.4rem)] leading-[1] tracking-[-0.01em] mt-6 mb-6`}>
              Cuéntanos qué mueble tienes en mente.
            </h2>
            <p className="text-base leading-relaxed max-w-md mb-9" style={{ color: 'rgba(253,246,236,0.9)' }}>
              Una foto de referencia o las medidas del espacio bastan para
              partir. Te respondemos por WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between max-w-md px-7 py-3 md:py-5 text-base font-extrabold uppercase tracking-[0.14em] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#F0B658] active:scale-[0.98] ${focusRing} tap-44`}
              style={{ backgroundColor: C.ambar, color: C.tinta }}
            >
              Escribir por WhatsApp <span aria-hidden="true">→</span>
            </a>
            <p className="mt-3 text-sm" style={{ color: 'rgba(253,246,236,0.88)' }}>
              o llama al{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 tap-44">{BIZ.phoneDisplay}</a>
            </p>
          </Reveal>
          <Reveal className="md:col-span-6" delay={120}>
            <dl className="border-t mb-6" style={{ borderColor: 'rgba(253,246,236,0.3)' }}>
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.postal} ${BIZ.city}`],
                ['Región', BIZ.region],
                ['WhatsApp', BIZ.phoneDisplay],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] py-3 border-b" style={{ borderColor: 'rgba(253,246,236,0.3)' }}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.24em] pt-1" style={{ color: 'rgba(253,246,236,0.8)' }}>{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.tinta }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0 grayscale-[35%]"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.22em] underline underline-offset-4 ${focusRing} tap-44`}
            >
              Abrir en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12 grid md:grid-cols-12 gap-5 md:gap-8">
          <div className="md:col-span-6">
            <p className={`${display.className} text-2xl md:text-3xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(253,246,236,0.78)' }}>
              {BIZ.address}, {BIZ.postal} {BIZ.city} · {BIZ.region}
            </address>
          </div>
          <nav className="md:col-span-6 flex flex-wrap md:justify-end gap-x-6 gap-y-1.5 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(253,246,236,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <p className="border-t max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ borderColor: 'rgba(253,246,236,0.12)', color: 'rgba(253,246,236,0.78)' }}>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ambar }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}. Productos, precios y fotos son de muestra.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ambar }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
