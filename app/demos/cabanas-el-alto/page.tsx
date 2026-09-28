import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, CABANAS, MAPS_EMBED, MAPS_URL, REGLAS, RESENAS, WA_LINK, WA_LINK_RESERVA } from './content'

const IMG = '/demos/cabanas-el-alto'

const display = localFont({ src: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800' })
const body = localFont({ src: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-el-alto',
  title: 'Cabañas El Alto — Cabañas de montaña en El Colorado, San Clemente',
  description:
    'Dos cabañas familiares en El Colorado, San Clemente: piscina, quincho y tina caliente, a pasos del Lago Colbún. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const C = {
  pine: '#16362A',
  deep: '#0E241B',
  madera: '#9C5324',
  maderaSoft: '#E8A76F',
  cream: '#F6EFE2',
  ink: '#22302A',
  muted: '#5A6B5F',
  line: 'rgba(22,54,42,0.14)',
}

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'El entorno', href: '#entorno' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** Silueta de cerros para rematar secciones (la vista real del sector). */
function Ridge({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full h-[46px] md:h-[70px] ${flip ? 'scale-x-[-1]' : ''}`}
    >
      <path
        d="M0,90 L0,55 L120,30 L240,58 L360,22 L470,50 L600,18 L720,55 L850,32 L960,60 L1080,28 L1200,52 L1330,35 L1440,58 L1440,90 Z"
        fill={fill}
      />
    </svg>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-block px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] rounded-full`}
      style={{ backgroundColor: C.pine, color: C.cream }}
    >
      {children}
    </span>
  )
}

function Btn({
  href,
  tone,
  children,
  external = true,
}: {
  href: string
  tone: 'madera' | 'ghost' | 'pine' | 'cream'
  children: React.ReactNode
  external?: boolean
}) {
  const style =
    tone === 'madera'
      ? { backgroundColor: C.madera, color: '#FFFFFF' }
      : tone === 'pine'
        ? { backgroundColor: C.pine, color: '#FFFFFF' }
        : tone === 'cream'
          ? { backgroundColor: C.cream, color: '#6E3B18' }
          : { color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.6)' }
  return (
    <a
      href={href}
      target={external && !href.startsWith('#') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-full text-lg font-semibold tap-44`}
      style={style}
    >
      {children}
    </a>
  )
}

const ENTORNO = [
  { src: 'piscina.webp', alt: 'Piscina al aire libre de Cabañas El Alto junto a las cabañas de madera', cap: 'la piscina del mediodía' },
  { src: 'interior-literas.webp', alt: 'Dormitorio interior de la cabaña con camarotes de madera y ventana', cap: 'camarotes para la familia' },
  { src: 'invierno.webp', alt: 'Perro caminando sobre la nieve junto a una cabaña en invierno', cap: 'y en invierno, nieve' },
  { src: 'lago.webp', alt: 'Portón de piedra junto al Lago Colbún en el sector Vilches Alto', cap: 'a pasos del lago Colbún' },
  { src: 'sector.webp', alt: 'Pradera verde con árboles y vista a los cerros en el sector El Colorado', cap: 'aire de pinar y cerro' },
]

export default function CabanasElAlto() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name="Cabañas El Alto"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold tracking-wide`}
        theme={{ over: 'dark', bar: 'rgba(14,36,27,0.94)', ink: '#FFFFFF', line: 'rgba(255,255,255,0.15)', btnBg: C.madera, btnInk: '#FFFFFF' }}
        ctaLabel="Reservar"
      />

      {/* HERO — postal del sector: cabaña + piscina + cerros */}
      <section id="inicio" className="relative overflow-hidden min-h-[94svh] flex items-end" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Las cabañas de madera de Cabañas El Alto sobre la pradera, con el bosque del sector El Colorado al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '50% 55%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(14,36,27,0.28) 0%, rgba(14,36,27,0.15) 40%, rgba(14,36,27,0.9) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 pb-24 md:pb-32 pt-40">
          <Reveal>
            <p className={`${mono.className} inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.18em]`} style={{ backgroundColor: 'rgba(246,239,226,0.92)', color: C.pine }}>
              {BIZ.category} · {BIZ.sector}, {BIZ.city}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} mt-4 text-[50px] leading-[0.95] md:text-[92px] font-bold`} style={{ color: '#FFFFFF' }}>
              Entre el pinar
              <br />
              y el lago <span style={{ color: C.maderaSoft }}>Colbún</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.93)' }}>
              Dos cabañas familiares en El Colorado: piscina, quincho y tina caliente
              para quedarse el finde entero sin salir del predio.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-5 flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.maderaSoft} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`} style={{ color: '#FFFFFF' }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="madera">Consulta tu fecha</Btn>
              <Btn href="#cabanas" tone="ghost" external={false}>Ver las cabañas</Btn>
            </div>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
          <Ridge fill={C.cream} />
        </div>
      </section>

      {/* LAS DOS CABAÑAS — postales con datos reales */}
      <section id="cabanas" className="scroll-mt-20 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.madera }}>Las dos cabañas</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-5xl font-bold leading-[1.02]`} style={{ color: C.pine }}>
              Dos cabañas de madera, un solo plan
            </h2>
            <p className="mt-4 text-lg max-w-xl" style={{ color: C.muted }}>
              Capacidades y dormitorios publicados por ellos mismos en {BIZ.ig}.
              Si van dos familias, cada una toma la suya y comparten el predio.
            </p>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
            {CABANAS.map((c, i) => (
              <Reveal key={c.nombre} delay={i * 90}>
                <article className="bg-white p-3 pb-4 shadow-[0_16px_40px_rgba(22,54,42,0.14)] rotate-0 md:odd:-rotate-1 md:even:rotate-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={`${IMG}/${c.foto}`} alt={c.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="px-3 pt-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className={`${display.className} text-3xl font-bold`} style={{ color: C.pine }}>{c.nombre}</h3>
                      <span className={`${mono.className} text-xs uppercase tracking-[0.15em]`} style={{ color: C.madera }}>hasta {c.capacidad}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Chip>{c.dormitorios}</Chip>
                      <Chip>{c.capacidad}</Chip>
                      <Chip>check-in 15:00</Chip>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: C.muted }}>
                      Cocina y equipamiento completo para quedarse sin llevar más que las sábanas, las toallas y las ganas de descansar.
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EL ENTORNO — collage de postales con sendero punteado */}
      <section id="entorno" className="scroll-mt-20 relative py-14 md:py-20 overflow-hidden" style={{ backgroundColor: C.pine }}>
        {/* sendero punteado que baja por la sección */}
        <svg className="absolute left-4 md:left-10 top-0 h-full w-6 opacity-40" viewBox="0 0 24 800" preserveAspectRatio="none" aria-hidden="true">
          <path d="M12,0 C4,120 20,220 12,340 C4,460 20,560 12,680 C8,740 14,780 12,800" fill="none" stroke={C.maderaSoft} strokeWidth="2.5" strokeDasharray="1 10" strokeLinecap="round" />
        </svg>
        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.maderaSoft }}>El entorno</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-5xl font-bold leading-[1.02] max-w-xl`} style={{ color: '#FFFFFF' }}>
              De la piscina al lago, todo a pasos
            </h2>
            <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Dentro del predio: piscina al aire libre, quincho, columpios para los niños
              y una tina caliente interior. Afuera: el camino a Vilches y el Lago Colbún.
            </p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {ENTORNO.map((f, i) => (
              <Reveal key={f.src} delay={i * 70} className={i === 0 ? 'col-span-2 md:col-span-2' : ''}>
                <figure className={`bg-white p-2.5 pb-3 shadow-[0_14px_34px_rgba(0,0,0,0.3)] ${i === 0 ? 'md:-rotate-1' : i === 2 ? 'md:rotate-1' : ''}`}>
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <Image src={`${IMG}/${f.src}`} alt={f.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} pt-2.5 px-1 text-[11px] uppercase tracking-[0.15em]`} style={{ color: C.pine }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* RESEÑAS — lo que dicen los huéspedes */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.madera }}>Huéspedes reales</p>
                <h2 className={`${display.className} mt-2 text-4xl md:text-5xl font-bold leading-[1.02]`} style={{ color: C.pine }}>
                  El paisaje de día, las estrellas de noche
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.madera} className="w-5 h-5" />
                <p className={`${mono.className} text-sm`} style={{ color: C.ink }}>
                  {BIZ.rating} de 5 · {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <figure
                  className={`h-full flex flex-col p-6 rounded-2xl ${i === 0 ? 'md:col-span-1' : ''}`}
                  style={{ backgroundColor: i === 0 ? C.pine : '#FFFFFF', border: i === 0 ? 'none' : `1px solid ${C.line}` }}
                >
                  <Stars value={r.estrellas} color={i === 0 ? C.maderaSoft : C.madera} />
                  <blockquote className="mt-4 text-base leading-relaxed flex-1" style={{ color: i === 0 ? 'rgba(255,255,255,0.95)' : '#3A4A41' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-xs uppercase tracking-[0.15em]`} style={{ color: i === 0 ? 'rgba(255,255,255,0.7)' : C.muted }}>
                    {r.nombre} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} mt-6 inline-block text-sm underline underline-offset-4 tap-44`} style={{ color: C.madera }}>
              Ver las {BIZ.reviews} reseñas en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* REGLAS DE LA CASA — letrero de madera */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-[0_18px_44px_rgba(22,54,42,0.18)]" style={{ backgroundColor: '#8A4E26' }}>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(255,255,255,0.9)' }}>Publicado por ellos en Instagram</p>
                <h2 className={`${display.className} mt-2 text-3xl md:text-4xl font-bold`} style={{ color: '#FFFFFF' }}>
                  Las reglas de la casa
                </h2>
                <ol className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-6">
                  {REGLAS.map((r, i) => (
                    <li key={r.t} className="flex gap-4">
                      <span className={`${display.className} shrink-0 text-2xl font-bold leading-none mt-0.5`} style={{ color: C.maderaSoft }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="font-bold text-base md:text-lg" style={{ color: '#FFFFFF' }}>{r.t}</p>
                        <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>{r.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8">
                  <Btn href={WA_LINK_RESERVA} tone="cream">Reservar con abono</Btn>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CÓMO LLEGAR — el sendero termina en el mapa */}
      <section id="llegar" className="scroll-mt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.madera }}>Cómo llegar</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-5xl font-bold leading-[1.02]`} style={{ color: C.pine }}>
              Sector {BIZ.sector}, camino a Vilches
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name} queda en {BIZ.sector}, comuna de {BIZ.city}, {BIZ.region} —
              el camino que sube al Lago Colbún y a Vilches Alto.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                ['Dirección', `${BIZ.sector}, ${BIZ.city}`],
                ['WhatsApp', BIZ.phoneDisplay],
                ['Entrada / salida', '15:00 / 13:00'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline gap-4 border-b pb-2.5" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] w-36 shrink-0`} style={{ color: C.madera }}>{k}</span>
                  <span className="font-semibold" style={{ color: C.ink }}>{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="pine">Consulta tu fecha</Btn>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-full text-lg font-semibold tap-44`}
                style={{ color: C.pine, boxShadow: `inset 0 0 0 2px ${C.pine}` }}
              >
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(22,54,42,0.2)', border: `6px solid ${C.pine}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.pine }}>
        <div className="max-w-3xl mx-auto px-5 pt-14 md:pt-16 pb-6 text-center">
          <h2 className={`${display.className} text-4xl md:text-5xl font-bold leading-[1.02]`} style={{ color: '#FFFFFF' }}>
            Te esperamos <span style={{ color: C.maderaSoft }}>en el alto</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.88)' }}>
            Escribe por WhatsApp, agenda con el abono y prepara las maletas.
          </p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="madera">Reservar por WhatsApp</Btn>
          </div>
        </div>
        <div aria-hidden="true">
          <Ridge fill={C.deep} flip />
        </div>
      </section>

      <footer className="pt-6 pb-6" style={{ backgroundColor: C.deep, color: 'rgba(255,255,255,0.72)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl font-bold tracking-wide`} style={{ color: '#FFFFFF' }}>
              {BIZ.name}
            </p>
            <p className="text-sm mt-1">
              {BIZ.category} · {BIZ.sector}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-5 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
