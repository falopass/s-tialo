import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «letrero de entrada» — el camping como panel pintado
 * a mano en el portón del fundo: noche pino profundo, crema de cartel y el
 * verde lima de su logo caricatura (la insignia real del volante de
 * temporada 2026 va como sello en el hero). Baloo 2 replica el trazo
 * redondo del logo; Space Mono rotula los datos como numeración de sitios.
 * Motivo propio: el «sitio numerado» — fichas con número de parcela como
 * las que cuelgan en cada espacio del camping (40 sitios).
 */
const C = {
  paper: '#F5EEDB',
  card: '#FBF6E8',
  night: '#0F241B',
  pine: '#1C3D2C',
  ink: '#1E2A20',
  muted: '#4E5E4E',
  mutedDark: '#B9C9B4',
  lime: '#A9CC4E',
  limeDeep: '#5E8024',
  line: 'rgba(30,42,32,0.18)',
  lineDark: 'rgba(255,255,255,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'camping-el-bosque',
  title: 'Camping El Bosque — El Radal, Molina · 40 sitios junto al río Claro',
  description:
    'Camping de temporada en el sector El Radal, Molina: 40 sitios sombreados a orillas del Estero El Toro y el Río Claro, pozones, duchas con agua caliente y tarifas de Temporada 2026. Confirma disponibilidad el día anterior.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'El bosque', href: '#bosque' },
  { label: 'Reglamento', href: '#reglas' },
  { label: 'Llegada', href: '#llegada' },
]

const TARIFAS = [
  {
    titulo: 'Alojamiento en camping',
    detalle: 'por noche',
    filas: [
      ['Adultos (12 a 59 años)', '$6.000'],
      ['Niños (2 a 11) y mayores +60', '$3.000'],
      ['Personas con discapacidad', 'Sin costo'],
    ],
  },
  {
    titulo: 'Tarifa de picnic',
    detalle: 'por día',
    filas: [
      ['Adultos (12 a 59 años)', '$3.000'],
      ['Niños (2 a 11) y mayores +60', '$2.000'],
      ['Personas con discapacidad', 'Sin costo'],
    ],
  },
]

const DIA = [
  {
    img: `${IMG}/sitio.webp`,
    alt: 'Carpa instalada entre árboles nativos en un sitio del camping',
    n: '01',
    t: 'Tu sitio con mesa y estacionamiento',
    d: '40 espacios repletos de árboles nativos, cada uno con su mesa y el auto al lado. Llega, arma y ya estás en el bosque.',
  },
  {
    img: `${IMG}/pozones.webp`,
    alt: 'Pozones de agua cristalina del río junto al camping',
    n: '02',
    t: 'Bajada directa a los pozones',
    d: 'A orillas del Estero El Toro y el Río Claro hay pozones de aguas frías y cristalinas. Los mismos campistas recomiendan el espacio n°40.',
  },
  {
    img: `${IMG}/atardecer.webp`,
    alt: 'Atardecer sobre las rocas del río en el sector El Radal',
    n: '03',
    t: 'La tarde baja entre las rocas',
    d: 'Sin fogatas (Ley 20.653): la noche es de parrilla a carbón, estrellas y el sonido del río. Trae efectivo — la señal es limitada.',
  },
]

const REGLAS = [
  { t: 'Prohibido fuego', d: 'Ley 20.653. Solo parrillas a carbón en tu sitio.' },
  { t: 'No mascotas', d: 'El sector está dentro del área protegida de El Radal.' },
  { t: 'No pescar ni cazar', d: 'El río es para bañarse y mirar, no para extraer.' },
  { t: 'Duchas con agua caliente', d: '07:00 a 10:00 y 19:00 a 22:00 hrs.' },
  { t: 'Sin reservas', d: 'Llama el día anterior para confirmar disponibilidad.' },
  { t: 'Trae efectivo', d: 'La señal de internet es limitada (solo algo de Entel).' },
]

const RESENAS = [
  {
    nombre: 'Graciela Villegas',
    estrellas: 5,
    texto:
      'Aquí nos reciben como familia. Un lugar limpio, ordenado y con bajada directa al río. Volvemos cada año.',
    fecha: 'Reseña de Google',
  },
  {
    nombre: 'Natalia Francisca',
    estrellas: 5,
    texto:
      'Espacioso, repleto de árboles. El espacio n°40 queda al lado de los pozones — los mejores.',
    fecha: 'Reseña de Google',
  },
  {
    nombre: 'Alexandra Rivera',
    estrellas: 5,
    texto:
      'Camping limpio y ordenado, con bajada directa al río. Los baños impecables y con agua caliente.',
    fecha: 'Reseña de Google',
  },
]

export default function CampingElBosque() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className={display.className} style={{ fontWeight: 700 }}>
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.night,
          ink: '#F5EEDB',
          line: C.lineDark,
          btnBg: C.lime,
          btnInk: C.night,
        }}
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* ── Hero: foto + panel de entrada que se superpone ── */}
      <section id="inicio" className="relative">
        <div className="relative h-[62dvh] md:h-[78dvh] min-h-[420px]">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Sitios con carpas entre el bosque nativo del camping El Bosque"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(15,36,27,0.35) 0%, rgba(15,36,27,0.05) 45%, rgba(15,36,27,0.55) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
            <Image
              src={`${IMG}/logo.webp`}
              alt="Insignia del volante de temporada de Camping El Bosque"
              width={120}
              height={72}
              className="drop-shadow-lg w-[96px] md:w-[140px] h-auto"
            />
          </div>
          <div
            className="absolute top-20 right-4 md:top-24 md:right-8 rounded-full px-3 py-1.5 flex items-center gap-2"
            style={{ backgroundColor: 'rgba(15,36,27,0.75)', backdropFilter: 'blur(4px)' }}
          >
            <Stars value={BIZ.rating} color={C.lime} className="w-3.5 h-3.5" />
            <span className={`${mono.className} text-xs font-bold`} style={{ color: '#F5EEDB' }}>
              {BIZ.rating.toLocaleString('es-CL')} · {BIZ.reviews} reseñas
            </span>
          </div>
        </div>

        {/* Panel de entrada superpuesto */}
        <div className="relative px-4 md:px-8">
          <div
            className="max-w-4xl mx-auto -mt-16 md:-mt-24 rounded-3xl px-6 py-7 md:px-10 md:py-10 shadow-xl"
            style={{ backgroundColor: C.card, border: `3px solid ${C.night}` }}
          >
            <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.limeDeep }}>
              {BIZ.season} · Sector El Radal · {BIZ.city}
            </p>
            <h1
              className={`${display.className} text-4xl md:text-6xl leading-[1.02] mt-3`}
              style={{ color: C.night, fontWeight: 800 }}
            >
              40 sitios sombreados
              <br />
              a orillas del río Claro
            </h1>
            <p className="text-base md:text-lg mt-4 max-w-xl" style={{ color: C.muted }}>
              Camping familiar dentro del bosque del Radal: pozones de agua cristalina, mesa y
              estacionamiento en tu sitio, baños y duchas con agua caliente.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.night, color: C.lime }}
              >
                Confirmar disponibilidad
              </a>
              <a
                href="#tarifas"
                className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.lime, color: C.night, border: `2px solid ${C.night}` }}
              >
                Ver tarifas 2026
              </a>
            </div>
            <p className={`${mono.className} text-xs mt-5`} style={{ color: C.muted }}>
              Sin reservas online — llama el día anterior al {BIZ.phoneDisplay}
            </p>
          </div>
        </div>
      </section>

      {/* ── Tarifas: volante real + desglose ── */}
      <section id="tarifas" className="px-4 md:px-8 pt-16 md:pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.limeDeep }}>
              Lo que publicaron ellos · {BIZ.season}
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl mt-2`} style={{ color: C.night, fontWeight: 800 }}>
              Tarifas claras, sin sorpresas
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-[340px_1fr] gap-6 md:gap-10 mt-8 items-start">
            <Reveal>
              <figure
                className="rounded-2xl overflow-hidden shadow-lg rotate-[-1.2deg]"
                style={{ border: `3px solid ${C.night}`, backgroundColor: C.card }}
              >
                <Image
                  src={`${IMG}/tarifas-2026.webp`}
                  alt="Volante oficial de tarifas Temporada 2026 de Camping El Bosque"
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />
                <figcaption className={`${mono.className} text-[11px] px-4 py-3`} style={{ color: C.muted }}>
                  Volante oficial publicado en {BIZ.instagram}
                </figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-5">
              {TARIFAS.map((tar, i) => (
                <Reveal key={tar.titulo} delay={i * 90}>
                  <div
                    className="rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: C.card, border: `2px solid ${C.night}` }}
                  >
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.night, fontWeight: 700 }}>
                        {tar.titulo}
                      </h3>
                      <span className={`${mono.className} text-xs font-bold uppercase tracking-widest`} style={{ color: C.limeDeep }}>
                        {tar.detalle}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {tar.filas.map(([k, v]) => (
                        <li
                          key={k}
                          className="flex items-baseline justify-between gap-3 pb-2.5"
                          style={{ borderBottom: `1px dashed ${C.line}` }}
                        >
                          <span className="text-sm md:text-base" style={{ color: C.muted }}>{k}</span>
                          <span className={`${mono.className} text-base md:text-lg font-bold`} style={{ color: v === 'Sin costo' ? C.limeDeep : C.night }}>
                            {v}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={200}>
                <p className="text-sm md:text-base" style={{ color: C.muted }}>
                  Cada sitio incluye mesa y estacionamiento junto a tu parcela. Los servicios
                  (baños, duchas, pozones) están incluidos en el valor.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El bosque: tres momentos numerados como sitios ── */}
      <section id="bosque" className="px-4 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.lime }}>
              Sitio n°01 al n°40
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl mt-2`} style={{ color: C.paper, fontWeight: 800 }}>
              Tu día en el bosque del Radal
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {DIA.map((m, i) => (
              <Reveal key={m.n} delay={i * 110}>
                <article
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: C.pine, border: `1px solid ${C.lineDark}` }}
                >
                  <div className="relative aspect-[3/4]">
                    <Image src={m.img} alt={m.alt} fill className="object-cover" sizes="(min-width:768px) 33vw, 100vw" />
                    <span
                      className={`${mono.className} absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full`}
                      style={{ backgroundColor: C.lime, color: C.night }}
                    >
                      {m.n}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className={`${display.className} text-lg md:text-xl leading-snug`} style={{ color: C.paper, fontWeight: 700 }}>
                      {m.t}
                    </h3>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: C.mutedDark }}>
                      {m.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Banda de fotos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {[
              { img: `${IMG}/rio.webp`, alt: 'El río Claro bajando entre rocas junto al camping', cls: 'col-span-2' },
              { img: `${IMG}/pasarela.webp`, alt: 'Pasarela de madera que cruza el bosque del camping', cls: '' },
              { img: `${IMG}/bosque.webp`, alt: 'Interior del bosque nativo que da sombra a los sitios', cls: '' },
              { img: `${IMG}/carpa-camper.webp`, alt: 'Carro casa estacionado bajo los árboles del camping', cls: 'col-span-2' },
              { img: `${IMG}/banos.webp`, alt: 'Baños y duchas con agua caliente del camping', cls: 'col-span-2' },
            ].map((f) => (
              <div key={f.img} className={`relative overflow-hidden rounded-xl ${f.cls}`} style={{ aspectRatio: '16/10' }}>
                <Image src={f.img} alt={f.alt} fill className="object-cover" sizes="(min-width:768px) 25vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reglamento ── */}
      <section id="reglas" className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.limeDeep }}>
              Dentro del área protegida
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl mt-2`} style={{ color: C.night, fontWeight: 800 }}>
              El reglamento del bosque
            </h2>
            <p className="text-base md:text-lg mt-3 max-w-2xl" style={{ color: C.muted }}>
              El Radal es reserva protegida: las reglas son parte del trato. Todas vienen del
              volante oficial del camping.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {REGLAS.map((r, i) => (
              <Reveal key={r.t} delay={i * 70}>
                <div
                  className="rounded-xl px-4 py-4 h-full"
                  style={{ backgroundColor: C.card, border: `2px solid ${C.night}` }}
                >
                  <p className={`${mono.className} text-[11px] font-bold uppercase tracking-widest`} style={{ color: C.limeDeep }}>
                    Regla {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`${display.className} text-base md:text-lg mt-1.5 leading-tight`} style={{ color: C.night, fontWeight: 700 }}>
                    {r.t}
                  </h3>
                  <p className="text-xs md:text-sm mt-1.5 leading-snug" style={{ color: C.muted }}>
                    {r.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 flex-wrap">
              <h2 className={`${display.className} text-3xl md:text-5xl`} style={{ color: C.night, fontWeight: 800 }}>
                «Nos reciben como familia»
              </h2>
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ backgroundColor: C.night }}
              >
                <Stars value={BIZ.rating} color={C.lime} />
                <span className={`${mono.className} text-sm font-bold`} style={{ color: C.paper }}>
                  {BIZ.rating.toLocaleString('es-CL')} en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <blockquote
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <Stars value={r.estrellas} color={C.limeDeep} className="w-4 h-4" />
                  <p className="text-sm md:text-base leading-relaxed mt-3 flex-1" style={{ color: C.ink }}>
                    “{r.texto}”
                  </p>
                  <footer className="mt-4">
                    <p className={`${display.className} text-sm`} style={{ color: C.night, fontWeight: 700 }}>
                      {r.nombre}
                    </p>
                    <p className={`${mono.className} text-[11px]`} style={{ color: C.muted }}>
                      {r.fecha}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Llegada ── */}
      <section id="llegada" className="px-4 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Reveal>
              <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.lime }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl mt-2`} style={{ color: C.paper, fontWeight: 800 }}>
                Camino K-275, sector El Radal
              </h2>
              <p className="text-base md:text-lg mt-4 leading-relaxed" style={{ color: C.mutedDark }}>
                {BIZ.address}, {BIZ.city}. Desde Molina se sigue el camino al Parque Nacional
                Radal Siete Tazas; el camping queda en el sector El Radal, dentro del bosque.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-6 space-y-3">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Confirma el día anterior', BIZ.phoneDisplay],
                  ['Instagram', BIZ.instagram],
                  ['Temporada', 'Verano — Semana Santa'],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-baseline justify-between gap-4 pb-3" style={{ borderBottom: `1px solid ${C.lineDark}` }}>
                    <span className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.mutedDark }}>{k}</span>
                    <span className="text-sm md:text-base font-semibold text-right" style={{ color: C.paper }}>{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: C.lime, color: C.night }}
                >
                  Llamar o escribir al {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ border: `2px solid ${C.lineDark}`, color: C.paper }}
                >
                  Abrir en Google Maps
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ border: `2px solid ${C.lineDark}`, color: C.paper }}
                >
                  {BIZ.instagram}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${C.lineDark}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de Camping El Bosque, sector El Radal, Molina"
                className="w-full h-[320px] md:h-[420px] block"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-4 md:px-8 py-8" style={{ backgroundColor: '#0A1B13', color: C.mutedDark }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={44} height={27} className="h-7 w-auto rounded" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-sm leading-none`} style={{ color: C.paper, fontWeight: 700 }}>
                {BIZ.name} — {BIZ.suffix}
              </p>
              <p className={`${mono.className} text-[11px] mt-1`}>{BIZ.address}, {BIZ.city}</p>
            </div>
          </div>
          <div className={`${mono.className} text-[11px] flex flex-wrap gap-x-5 gap-y-1`}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">{BIZ.phoneDisplay}</a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">{BIZ.instagram}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Maps</a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
