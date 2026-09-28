import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_ENVIO,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  CATEGORIAS,
  ESTANTE,
  HORARIO,
  RESEÑAS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-mono',
})

export const metadata: Metadata = demoMetadata({
  slug: 'turbomoto-spa',
  title: `${BIZ.name} — ${BIZ.rubro} en ${BIZ.city}`,
  description: `Repuestos y accesorios para motos en ${BIZ.address}, ${BIZ.city}. Ventas al por mayor y menor, con envíos a todo Chile.`,
  image: `${IMG}/hero.webp`,
})

const C = {
  negro: '#0c0b09',
  carbon: '#161512',
  amarillo: '#ffd21f',
  rojo: '#e0231b',
  papel: '#f5f1e8',
  linea: 'rgba(255,210,31,0.18)',
}

const NAV_LINKS = [
  { href: '#estante', label: 'El estante' },
  { href: '#envios', label: 'Envíos' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#donde', label: 'Dónde' },
]

function Moto({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.4 7a3 3 0 0 0-2.2-1H15l-2 2h3.2l1.3 2H6.9l-2-3H8V5H4a1 1 0 0 0-.8.4L1.6 8.6A2.5 2.5 0 0 0 3.9 12h.4a4.5 4.5 0 1 0 2.7 8.1 4.5 4.5 0 0 0 8.9-1.1h1.6a4.5 4.5 0 1 0 1.9-8.6l-1.7-2.7A2 2 0 0 0 19.4 7ZM5.5 16.5A2.5 2.5 0 1 1 8 14a2.5 2.5 0 0 1-2.5 2.5Zm13 0a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z" />
    </svg>
  )
}

export default function Turbomoto() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{ background: C.negro, color: C.papel, fontFamily: 'var(--f-body)' }}>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo-icono.webp`}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(12,11,9,0.92)', ink: '#f5f1e8', line: 'rgba(255,210,31,0.2)', btnBg: C.amarillo, btnInk: '#0c0b09' }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="relative h-[62vh] min-h-[430px] md:h-[78vh]">
          <Image src={`${IMG}/hero.webp`} alt={`Fachada de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
            fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(12,11,9,0.45) 0%, rgba(12,11,9,0.25) 45%, rgba(12,11,9,0.97) 100%)' }} />
        </div>
        <div className="relative -mt-44 px-5 pb-12 md:-mt-60">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Image src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name} — repuestos y accesorios`}
                width={660} height={230} className="w-48 rounded-md md:w-64" priority />
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} mt-5 max-w-3xl text-4xl uppercase leading-[0.95] tracking-wide md:text-7xl`}>
                El repuesto que tu moto necesita está en la <span style={{ color: C.amarillo }}>Cuarta Norte</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                {BIZ.rubro} en {BIZ.esquina}, {BIZ.city}. Ventas al por mayor y menor,
                y envíos a todo Chile.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={WA_LINK} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-base font-bold uppercase tracking-wide tap-44"
                  style={{ background: C.amarillo, color: C.negro }}>
                  <Moto className="h-5 w-5" /> Consultar repuesto
                </a>
                <span className="inline-flex items-center gap-2 rounded-sm border border-white/25 bg-black/50 px-4 py-2.5 text-sm backdrop-blur"
                  style={{ fontFamily: 'var(--f-mono)' }}>
                  <Stars value={5} className="h-4 w-4" color={C.amarillo} />
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* CATEGORÍAS — las del letrero */}
      <section className="border-y" style={{ borderColor: C.linea, background: C.carbon }}>
        <div className="mx-auto max-w-6xl px-5 py-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
              Directo del letrero
            </p>
          </Reveal>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {CATEGORIAS.map((cat, i) => (
              <Reveal key={cat} delay={i * 40}>
                <li className={`${display.className} border px-4 py-2 text-sm uppercase tracking-widest md:text-base`}
                  style={{ borderColor: i === 0 ? C.rojo : C.linea, background: i === 0 ? C.rojo : 'transparent', color: i === 0 ? '#fff' : C.papel }}>
                  {cat}
                </li>
              </Reveal>
            ))}
            <Reveal delay={CATEGORIAS.length * 40}>
              <li className={`${display.className} px-4 py-2 text-sm uppercase tracking-widest md:text-base`} style={{ color: C.amarillo }}>
                y otros…
              </li>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* EL ESTANTE */}
      <section id="estante" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
            La tienda por dentro
          </p>
          <h2 className={`${display.className} mt-3 max-w-2xl text-3xl uppercase leading-none md:text-5xl`}>
            Cada pasillo tiene su estante
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ESTANTE.map((item, i) => (
            <Reveal key={item.foto} delay={i * 60}>
              <figure className="group overflow-hidden border" style={{ borderColor: C.linea, background: C.carbon }}>
                <div className="relative overflow-hidden">
                  <Image src={`${IMG}/${item.foto}.webp`} alt={`${item.nombre} en ${BIZ.name}, ${BIZ.city}`}
                    width={1200} height={900}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] md:h-60" />
                  <span className="absolute right-0 top-0 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest"
                    style={{ background: C.rojo, color: '#fff', fontFamily: 'var(--f-mono)' }}>
                    Stock
                  </span>
                </div>
                <figcaption className="flex items-end justify-between gap-3 border-t px-4 py-3" style={{ borderColor: C.linea }}>
                  <div>
                    <p className={`${display.className} text-xl uppercase leading-tight`}>
                      {item.nombre} {'nombre2' in item && <span style={{ color: C.amarillo }}> {item.nombre2}</span>}
                    </p>
                    <p className="mt-1 text-xs text-white/60">{item.detalle}</p>
                  </div>
                  <a href={WA_LINK} target="_blank" rel="noreferrer"
                    className="shrink-0 border px-3 py-1.5 text-xs font-bold uppercase tracking-wider tap-44"
                    style={{ borderColor: C.amarillo, color: C.amarillo, fontFamily: 'var(--f-mono)' }}>
                    Pedir
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ENVÍOS */}
      <section id="envios" className="border-t" style={{ borderColor: C.linea, background: C.carbon }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-center md:py-20">
          <Reveal>
            <div className="relative overflow-hidden">
              <Image src={`${IMG}/interior.webp`} alt={`Interior de ${BIZ.name} con vitrinas y muralla de cascos`}
                width={1200} height={900} className="w-full object-cover md:h-[380px]" />
              <span className="absolute bottom-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest"
                style={{ background: C.amarillo, color: C.negro, fontFamily: 'var(--f-mono)' }}>
                La tienda, esquina de la Alameda
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
                Mayor y menor
              </p>
              <h2 className={`${display.className} mt-3 text-3xl uppercase leading-none md:text-5xl`}>
                En Talca en mano, al resto de Chile por envío
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-6 space-y-4">
                {[
                  ['Retiro presencial', 'Compras por WhatsApp y retiras en ' + BIZ.esquina + '.'],
                  ['Envíos a todo Chile', 'Te cotizan el repuesto y lo despachan a tu región.'],
                  ['Venta al por mayor', 'Precios de mayorista para talleres y reventa.'],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4 border-l-2 pl-4" style={{ borderColor: C.amarillo }}>
                    <div>
                      <p className={`${display.className} text-lg uppercase tracking-wide`}>{t}</p>
                      <p className="mt-1 text-sm text-white/65">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href={WA_ENVIO} target="_blank" rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-base font-bold uppercase tracking-wide tap-44"
                style={{ background: C.rojo, color: '#fff' }}>
                <Moto className="h-5 w-5" /> Pedir con envío
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
            Lo que dicen los moteros
          </p>
          <h2 className={`${display.className} mt-3 text-3xl uppercase leading-none md:text-5xl`}>
            Trece reseñas y puras cinco estrellas
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {RESEÑAS.map((r, i) => (
            <Reveal key={r.autor} delay={i * 60}>
              <blockquote className="h-full border-l-4 p-5" style={{ borderColor: C.amarillo, background: C.carbon }}>
                <Stars value={5} className="h-4 w-4" color={C.amarillo} />
                <p className="mt-3 text-base leading-relaxed text-white/90">“{r.texto}”</p>
                <footer className="mt-3 text-xs text-white/50" style={{ fontFamily: 'var(--f-mono)' }}>
                  {r.autor} · {r.detalle}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DÓNDE */}
      <section id="donde" className="border-t" style={{ borderColor: C.linea, background: C.carbon }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
                Dónde queda
              </p>
              <h2 className={`${display.className} mt-3 text-3xl uppercase leading-none md:text-4xl`}>
                {BIZ.address} · {BIZ.esquina}
              </h2>
              <p className="mt-3 text-white/70">{BIZ.city}, región del {BIZ.region}. El local del banderín rojo.</p>
            </Reveal>
            <Reveal delay={100}>
              <dl className="mt-6 space-y-3">
                {HORARIO.map((h) => (
                  <div key={h.dias} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-sm text-white/60">{h.dias}</dt>
                    <dd className="text-right text-sm font-semibold" style={{ fontFamily: 'var(--f-mono)' }}>{h.horas}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={MAPS_URL} target="_blank" rel="noreferrer"
                  className="rounded-sm border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/90 tap-44">
                  Cómo llegar
                </a>
                <a href={BIZ.instagramUrl} target="_blank" rel="noreferrer"
                  className="rounded-sm border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/90 tap-44">
                  Instagram {BIZ.instagram}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="overflow-hidden border" style={{ borderColor: C.linea }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="min-h-[320px] w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: C.linea }}>
        <Image src={`${IMG}/cascos.webp`} alt="" fill className="object-cover opacity-[0.16]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <Reveal>
            <h2 className={`${display.className} mx-auto max-w-2xl text-4xl uppercase leading-none md:text-6xl`}>
              No pares el viaje por un repuesto
            </h2>
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm px-8 py-3 text-base font-bold uppercase tracking-wide tap-44"
              style={{ background: C.amarillo, color: C.negro }}>
              <Moto className="h-5 w-5" /> Hablar con {BIZ.name}
            </a>
            <p className="mt-4 text-sm text-white/60" style={{ fontFamily: 'var(--f-mono)' }}>{BIZ.phoneDisplay}</p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: C.linea, background: C.negro }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center">
          <p className={`${display.className} text-sm uppercase tracking-widest`}>{BIZ.name} — {BIZ.rubro}</p>
          <p className="text-xs text-white/50">{BIZ.address} · {BIZ.esquina} · {BIZ.city} · {BIZ.phoneDisplay}</p>
          <p className="max-w-md text-[11px] leading-relaxed text-white/40">
            Mockup preparado por Sitiazo para {BIZ.name}. Datos públicos de Google Maps e Instagram.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
