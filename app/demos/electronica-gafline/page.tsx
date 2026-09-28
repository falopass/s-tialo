import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_SERVICIO,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  PRODUCTOS,
  SERVICIO,
  HORARIO,
  RESEÑAS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-mono',
})

export const metadata: Metadata = demoMetadata({
  slug: 'electronica-gafline',
  title: `${BIZ.name} — ${BIZ.rubro} en ${BIZ.city}`,
  description: `Accesorios de celular y computación, y servicio técnico en ${BIZ.address}, ${BIZ.city}. Atención directa por WhatsApp.`,
  image: `${IMG}/hero.webp`,
})

const C = {
  azul: '#1824c9',
  azulOscuro: '#0a0f4e',
  tinta: '#070a24',
  amarillo: '#ffd60a',
  papel: '#f2f4ff',
  linea: 'rgba(24,36,201,0.16)',
}

const NAV_LINKS = [
  { href: '#vitrina', label: 'Vitrina' },
  { href: '#servicio', label: 'Servicio técnico' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#donde', label: 'Dónde' },
]

function Bolt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13 2 4.5 13.5h5L8.5 22 19 10h-5.5L13 2Z" />
    </svg>
  )
}

export default function ElectronicaGafline() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{ background: C.tinta, color: C.papel, fontFamily: 'var(--f-body)' }}>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo-icono.webp`}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(7,10,36,0.92)', ink: '#f2f4ff', line: 'rgba(255,255,255,0.14)', btnBg: C.amarillo, btnInk: C.tinta }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${C.azulOscuro} 0%, ${C.tinta} 70%)` }} />
        <div className="absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full opacity-25 blur-3xl" style={{ background: C.azul }} aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 pb-14 pt-28 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-36">
          <div>
            <Reveal>
              <Image src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} width={1200} height={343}
                className="w-56 rounded-lg bg-white p-3 shadow-lg md:w-64" priority />
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 text-xs uppercase tracking-[0.28em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
              <h1 className={`${display.className} mt-3 text-4xl leading-[1.02] md:text-6xl`}>
                Lo que tu celular necesita, a dos cuadras de la alameda
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                Accesorios, láminas de hidrogel y servicio técnico de computación y telefonía,
                en el local de letrero amarillo de Quechereguas.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={WA_LINK} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold tap-44"
                  style={{ background: C.amarillo, color: C.tinta }}>
                  <Bolt className="h-5 w-5" /> Consultar por WhatsApp
                </a>
                <a href="#vitrina" className="rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white/90 tap-44">
                  Ver la vitrina
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                <Stars value={5} className="h-4 w-4" color={C.amarillo} />
                <span className="text-sm"><strong>{BIZ.rating}</strong> · {BIZ.reviews} reseñas en Google</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <Image src={`${IMG}/hero.webp`} alt={`Entrada de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                width={839} height={1024} className="h-full w-full object-cover" priority />
              <div className="absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-xs font-bold"
                style={{ background: C.amarillo, color: C.tinta, fontFamily: 'var(--f-mono)' }}>
                {BIZ.address}, {BIZ.city}
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* TICKER — lista real del letrero */}
      <div className="overflow-hidden border-y py-3" style={{ borderColor: C.linea, background: C.amarillo }} aria-label="Productos de la tienda">
        <div className="ticker flex w-max items-center gap-8 whitespace-nowrap">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center gap-8" aria-hidden={n === 1}>
              {PRODUCTOS.map((p) => (
                <span key={`${n}-${p}`} className={`${display.className} flex items-center gap-8 text-sm uppercase tracking-wide`}
                  style={{ color: C.tinta }}>
                  {p} <Bolt className="h-4 w-4" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* VITRINA */}
      <section id="vitrina" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
            La tienda por dentro
          </p>
          <h2 className={`${display.className} mt-3 max-w-2xl text-3xl leading-tight md:text-5xl`}>
            Murallas de accesorios y vitrinas llenas, como se ve al entrar
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { src: 'mostrador', alt: `Mostrador y vitrinas de ${BIZ.name}`, tag: 'Mostrador' },
            { src: 'muralla', alt: `Muralla de accesorios de ${BIZ.name}`, tag: 'Muralla de accesorios' },
            { src: 'vitrina', alt: `Vitrina de productos de ${BIZ.name}`, tag: 'Vitrina' },
            { src: 'pasillo', alt: `Pasillo interior de ${BIZ.name}`, tag: 'El pasillo' },
            { src: 'letrero', alt: `Letrero de ${BIZ.name} con la lista de productos`, tag: 'El letrero' },
            { src: 'fachada', alt: `Fachada de ${BIZ.name} en ${BIZ.address}`, tag: 'La fachada' },
          ].map((f, i) => (
            <Reveal key={f.src} delay={i * 60} className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
              <figure className="group relative h-full overflow-hidden rounded-xl border border-white/10">
                <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} width={1200} height={900}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${i === 0 ? 'h-full min-h-[320px] md:min-h-[460px]' : 'h-52 md:h-56'}`} />
                <figcaption className="absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider shadow"
                  style={{ background: C.amarillo, color: C.tinta, fontFamily: 'var(--f-mono)' }}>
                  {f.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICIO TÉCNICO */}
      <section id="servicio" className="border-t" style={{ borderColor: C.linea, background: C.azulOscuro }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
                Servicio técnico
              </p>
              <h2 className={`${display.className} mt-3 text-3xl leading-tight md:text-4xl`}>
                Si tu equipo falla, acá lo miran y te dicen altiro qué tiene
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                El mismo local atiende equipos en la mesa de trabajo del fondo:
                llegas, cuentas qué le pasa y te dan un diagnóstico en el momento.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <a href={WA_SERVICIO} target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold tap-44"
                style={{ background: C.amarillo, color: C.tinta }}>
                <Bolt className="h-5 w-5" /> Consultar por un equipo
              </a>
            </Reveal>
          </div>
          <div className="grid gap-4">
            {[
              { titulo: 'Computación', items: SERVICIO.computacion },
              { titulo: 'Telefonía', items: SERVICIO.telefonia },
            ].map((s, i) => (
              <Reveal key={s.titulo} delay={i * 90}>
                <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                  <h3 className={`${display.className} text-lg`} style={{ color: C.amarillo }}>{s.titulo}</h3>
                  <ul className="mt-3 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-white/85">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.amarillo }} aria-hidden />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <p className="text-sm text-white/60" style={{ fontFamily: 'var(--f-mono)' }}>
                + accesorios mientras esperas: hidrogel, carcasas, cargadores y más.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
            Lo que dice Molina
          </p>
          <h2 className={`${display.className} mt-3 text-3xl leading-tight md:text-5xl`}>
            Veinte reseñas, todas de cinco estrellas
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {RESEÑAS.map((r, i) => (
            <Reveal key={r.autor} delay={i * 70}>
              <blockquote className="h-full rounded-xl border border-white/10 bg-white/5 p-6">
                <Stars value={5} className="h-4 w-4" color={C.amarillo} />
                <p className="mt-3 text-base leading-relaxed text-white/90">“{r.texto}”</p>
                <footer className="mt-4 text-sm text-white/55" style={{ fontFamily: 'var(--f-mono)' }}>
                  {r.autor} · {r.detalle}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DÓNDE */}
      <section id="donde" className="border-t" style={{ borderColor: C.linea, background: C.azulOscuro }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em]" style={{ fontFamily: 'var(--f-mono)', color: C.amarillo }}>
                Dónde estamos
              </p>
              <h2 className={`${display.className} mt-3 text-3xl leading-tight md:text-4xl`}>
                {BIZ.address}, {BIZ.city}
              </h2>
              <p className="mt-3 text-white/70">Región del {BIZ.region} — a pasos de la alameda de Molina.</p>
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
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/90 tap-44">
                  Cómo llegar
                </a>
                <a href={BIZ.instagramUrl} target="_blank" rel="noreferrer"
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/90 tap-44">
                  Instagram {BIZ.instagram}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-2xl border border-white/15">
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="min-h-[320px] w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image src={`${IMG}/muralla.webp`} alt="" fill className="object-cover opacity-[0.15]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <Reveal>
            <h2 className={`${display.className} mx-auto max-w-2xl text-3xl leading-tight md:text-5xl`}>
              Pasa al local o escribe y te responden altiro
            </h2>
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-bold tap-44"
              style={{ background: C.amarillo, color: C.tinta }}>
              <Bolt className="h-5 w-5" /> Hablar con {BIZ.short}
            </a>
            <p className="mt-4 text-sm text-white/60" style={{ fontFamily: 'var(--f-mono)' }}>{BIZ.phoneDisplay}</p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10" style={{ background: C.tinta }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center">
          <p className={`${display.className} text-sm`}>{BIZ.name}</p>
          <p className="text-xs text-white/50">{BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}</p>
          <p className="max-w-md text-[11px] leading-relaxed text-white/40">
            Mockup preparado por Sitiazo para {BIZ.name}. Datos públicos de Google Maps e Instagram.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />

      <style>{`
        .ticker { animation: gafline-marquee 26s linear infinite; }
        @keyframes gafline-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @media (prefers-reduced-motion: reduce) { .ticker { animation: none } }
      `}</style>
    </main>
  )
}
