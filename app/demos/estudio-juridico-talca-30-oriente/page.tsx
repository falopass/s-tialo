import localFont from 'next/font/local'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_TEXT, PASOS, AREAS_MUESTRA, COMPROMISO } from './content'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

export const metadata = demoMetadata({
  slug: BIZ.slug,
  title: `${BIZ.name} — Abogados en 30 Oriente, Talca`,
  description:
    'Estudio jurídico en calle 30 Oriente 1420, Talca. Agenda una consulta, revisa tus antecedentes con un abogado y conoce los costos antes de empezar.',
})

// Carátula de expediente: tinta medianoche, latón, papel marfil.
const C = {
  tinta: '#101822',
  tintaB: '#1C2836',
  papel: '#F5F0E4',
  papelB: '#EDE5D3',
  laton: '#775126',
  latonClaro: '#C9A35F',
  gris: '#5B6470',
  linea: '#D8CDB4',
}

function Selllo() {
  return (
    <span aria-hidden className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2" style={{ borderColor: C.laton, color: C.laton }}>
      <span className={`${display.className} text-[22px] leading-none`}>§</span>
    </span>
  )
}

function Legajo({ children, claro = false }: { children: React.ReactNode; claro?: boolean }) {
  return (
    <span
      className={`${mono.className} text-[12px] uppercase tracking-[0.28em]`}
      style={{ color: claro ? C.latonClaro : C.laton }}
    >
      {children}
    </span>
  )
}

export default function Page() {
  const waLink = `https://wa.me/${BIZ.wa}?text=${WA_TEXT}`
  const telLink = `tel:${BIZ.phoneTel}`
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(BIZ.mapQuery)}&z=17&output=embed`

  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <Selllo />
            <span className={`${display.className} text-[17px]`}>{BIZ.short}</span>
          </span>
        }
        links={[
          { label: 'Cómo trabajamos', href: '#proceso' },
          { label: 'Áreas', href: '#areas' },
          { label: 'Consulta', href: '#consulta' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={waLink}
        theme={{ over: 'dark', bar: 'rgba(16,24,34,0.94)', ink: C.papel, line: '#2E3B4C', btnBg: C.laton, btnInk: '#fff' }}
        ctaLabel="Agendar"
      />

      {/* ── Carátula ── */}
      <header id="inicio" className="relative overflow-hidden px-5 pb-14 pt-28" style={{ backgroundColor: C.tinta }}>
        <span aria-hidden className={`${display.className} pointer-events-none absolute -right-8 top-10 select-none text-[300px] leading-none opacity-[0.06] text-white`}>
          §
        </span>
        <div className="relative mx-auto max-w-4xl">
          <div className={`${mono.className} flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.28em]`} style={{ color: C.latonClaro }}>
            <span>Exp. N° 001</span>
            <span aria-hidden>·</span>
            <span>{BIZ.city}, {BIZ.region}</span>
          </div>
          <h1 className={`${display.className} mt-6 text-[42px] leading-[1.06] text-white`}>
            Tu caso, ordenado
            <br />
            <span style={{ color: C.latonClaro }}>desde la primera consulta.</span>
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed" style={{ color: '#C3CBD6' }}>
            {BIZ.tagline} Escríbenos, revisamos tus antecedentes y te decimos con claridad qué caminos hay — y cuánto cuestan — antes de dar cualquier paso.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[50px] items-center rounded-sm px-7 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: C.laton }}
            >
              Agendar por WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex h-[50px] items-center rounded-sm border px-7 text-[15px] font-semibold"
              style={{ borderColor: '#4A586B', color: '#E8E2D2' }}
            >
              Llamar al {BIZ.phone}
            </a>
          </div>

          <div className={`${mono.className} mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm text-[13px] sm:grid-cols-3`} style={{ backgroundColor: '#2E3B4C' }}>
            {[
              ['Dirección', BIZ.address],
              ['Comuna', `${BIZ.city} · ${BIZ.region}`],
              ['Contacto', BIZ.phone],
            ].map(([k, v]) => (
              <div key={k} className="px-4 py-3" style={{ backgroundColor: C.tintaB }}>
                <span className="block text-[11px] uppercase tracking-[0.24em]" style={{ color: C.latonClaro }}>{k}</span>
                <span className="mt-1 block text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Índice / proceso ── */}
      <section id="proceso" className="px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Legajo>Índice 01 — el proceso</Legajo>
            <h2 className={`${display.className} mt-3 text-[32px] leading-tight`}>Cómo trabajamos</h2>
          </Reveal>
          <div className="mt-8">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <article className="flex gap-5 border-t py-6 last:border-b" style={{ borderColor: C.linea }}>
                  <span className={`${mono.className} shrink-0 text-[14px]`} style={{ color: C.laton }}>{p.n}</span>
                  <div>
                    <h3 className={`${display.className} text-[19px]`}>{p.t}</h3>
                    <p className="mt-2 max-w-lg text-[15px] leading-relaxed" style={{ color: C.gris }}>{p.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Áreas (muestra rotulada) ── */}
      <section id="areas" className="px-5 py-14" style={{ backgroundColor: C.papelB }}>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Legajo>Índice 02 — áreas de práctica</Legajo>
            <h2 className={`${display.className} mt-3 text-[32px] leading-tight`}>En qué puede ayudarte</h2>
            <p className="mt-3 max-w-lg text-[14px] italic" style={{ color: C.gris }}>
              Listado de muestra: el estudio aún no publica sus áreas de práctica. Este índice se reemplaza por el real cuando lo confirmen.
            </p>
          </Reveal>
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {AREAS_MUESTRA.map((a, i) => (
              <Reveal key={a} delay={i * 50}>
                <div className="flex items-center gap-3 rounded-sm bg-white px-4 py-3 shadow-sm" style={{ borderLeft: `3px solid ${C.laton}` }}>
                  <span className={`${mono.className} text-[12px]`} style={{ color: C.laton }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[15px] font-medium">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compromiso ── */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Legajo>Índice 03 — la palabra del estudio</Legajo>
            <h2 className={`${display.className} mt-3 text-[32px] leading-tight`}>Tres reglas de la casa</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {COMPROMISO.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="h-full border-t-2 pt-4" style={{ borderColor: C.laton }}>
                  <h3 className={`${display.className} text-[18px]`}>{c.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.gris }}>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA consulta ── */}
      <section id="consulta" className="px-5 py-14" style={{ backgroundColor: C.tinta }}>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Legajo claro>Índice 04 — agendar</Legajo>
            <h2 className={`${display.className} mt-3 max-w-lg text-[34px] leading-tight text-white`}>
              Trae tus antecedentes. El resto lo ordenamos contigo.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: '#C3CBD6' }}>
              Escríbenos por WhatsApp o llama directamente. Si tu caso no es para este estudio, te lo decimos desde el primer mensaje.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] items-center rounded-sm px-7 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: C.laton }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={telLink}
                className="inline-flex h-[50px] items-center rounded-sm border px-7 text-[15px] font-semibold"
                style={{ borderColor: '#4A586B', color: '#E8E2D2' }}
              >
                {BIZ.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Legajo>Índice 05 — dónde encontrarnos</Legajo>
            <h2 className={`${display.className} mt-3 text-[32px] leading-tight`}>{BIZ.address}</h2>
            <p className="mt-2 text-[15px]" style={{ color: C.gris }}>
              {BIZ.city}, {BIZ.region}. Para asegurar atención, agenda antes de ir: el estudio aún no publica horario en línea.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 overflow-hidden rounded-sm shadow-md" style={{ border: `2px solid ${C.tinta}` }}>
              <LazyMap src={mapSrc} title={`Mapa de ${BIZ.name}`} className="h-[300px] w-full border-0" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-5 pb-7" style={{ backgroundColor: C.tintaB }}>
        <div className="mx-auto max-w-4xl pt-8">
          <div className="flex items-center gap-3">
            <Selllo />
            <div>
              <p className={`${display.className} text-[17px] text-white`}>{BIZ.name}</p>
              <p className="text-[13px]" style={{ color: '#9AA6B4' }}>{BIZ.address}, {BIZ.city}</p>
            </div>
          </div>
          <p className="mt-4 text-[13px]" style={{ color: '#9AA6B4' }}>
            {BIZ.phone} · Contacto por WhatsApp o llamada
          </p>
          <div className="mt-5 border-t pb-1 pt-4 text-[12px]" style={{ borderColor: '#33404F', color: '#9AA6B4' }}>
            Demo de sitio web creada por Sitiazo para {BIZ.name} · Datos verificados en Google Maps.
          </div>
        </div>
      </footer>

      <WaFab href={waLink} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
