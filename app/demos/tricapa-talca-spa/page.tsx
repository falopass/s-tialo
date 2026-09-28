import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import { BIZ, C, CAPAS, MAPS_URL, PASOS, SERVICES, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})

export const metadata: Metadata = demoMetadata({
  slug: 'tricapa-talca-spa',
  title: 'Tricapa Talca · Pintura, desabolladura y repuestos',
  description:
    'Taller de pintura automotriz, desabolladura y venta de repuestos en Talca. Envía una foto del daño por WhatsApp y recibe tu cotización.',
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

/** Tres franjas: la firma gráfica de la marca (imprimación, color, barniz). */
function Stripes({ className = 'w-12', vertical = false }: { className?: string; vertical?: boolean }) {
  return (
    <span className={`${vertical ? 'flex-col' : 'flex-row'} inline-flex gap-[3px] ${className}`} aria-hidden="true">
      {CAPAS.map((c) => (
        <span
          key={c.name}
          className={vertical ? 'h-full w-[6px] rounded-full' : 'h-[6px] flex-1 rounded-full'}
          style={{ backgroundColor: c.color }}
        />
      ))}
    </span>
  )
}

function Eyebrow({ children, color = C.redDeep }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${display.className} mb-3 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em]`} style={{ color }}>
      <span className="h-[2px] w-6" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Escena del hero: auto de perfil en cabina de pintura, con la pistola aplicando la capa de color. */
function PaintBooth() {
  return (
    <svg viewBox="0 0 720 460" className="h-auto w-full" role="img" aria-label="Ilustración de un auto en cabina de pintura, con la pistola aplicando color">
      <defs>
        <linearGradient id="tc-floor" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2B3036" />
          <stop offset="1" stopColor="#15171A" />
        </linearGradient>
        <linearGradient id="tc-body" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8E949B" />
          <stop offset="0.48" stopColor="#8E949B" />
          <stop offset="0.52" stopColor="#C9202F" />
          <stop offset="1" stopColor="#E23B49" />
        </linearGradient>
        <linearGradient id="tc-gloss" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="tc-spray" cx="0" cy="0.5" r="1">
          <stop offset="0" stopColor="#E23B49" stopOpacity="0.55" />
          <stop offset="1" stopColor="#E23B49" stopOpacity="0" />
        </radialGradient>
        <pattern id="tc-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(243,239,230,0.07)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* cabina */}
      <rect width="720" height="460" fill="#1C1F23" />
      <rect width="720" height="460" fill="url(#tc-grid)" />
      <rect x="0" y="330" width="720" height="130" fill="url(#tc-floor)" />
      <path d="M0 330H720" stroke="rgba(243,239,230,0.18)" />
      {/* luces de cabina */}
      {[120, 360, 600].map((x) => (
        <g key={x}>
          <rect x={x - 70} y="28" width="140" height="10" rx="5" fill="#F3EFE6" opacity="0.9" />
          <path d={`M${x - 70} 38 L${x - 130} 330 H${x + 130} L${x + 70} 38 Z`} fill="#F3EFE6" opacity="0.045" />
        </g>
      ))}

      {/* sombra */}
      <ellipse cx="340" cy="338" rx="270" ry="14" fill="#000" opacity="0.45" />

      {/* carrocería */}
      <g>
        <path
          d="M92 300 C92 270 100 252 130 240 L200 226 L252 170 C262 158 276 152 292 152 L446 152 C470 152 490 160 506 178 L556 226 L612 236 C640 242 654 262 654 290 L654 300 C654 312 644 320 630 320 L116 320 C102 320 92 312 92 300 Z"
          fill="url(#tc-body)"
        />
        {/* barniz */}
        <path d="M130 240 L200 226 L252 170 C262 158 276 152 292 152 L446 152 C470 152 490 160 506 178 L556 226 L612 236 C620 238 626 241 632 246 L124 246 C126 243 128 241 130 240 Z" fill="url(#tc-gloss)" />
        {/* ventanas */}
        <path d="M222 226 L262 178 C268 170 278 166 290 166 L356 166 L356 226 Z" fill="#0F1114" />
        <path d="M376 166 L446 166 C462 166 476 172 486 184 L526 226 L376 226 Z" fill="#0F1114" />
        <path d="M232 220 L266 182 C270 177 276 175 284 175 L344 175 L344 220 Z" fill="#4A5560" opacity="0.6" />
        {/* línea de cintura */}
        <path d="M110 268 H640" stroke="rgba(0,0,0,0.25)" strokeWidth="2" />
        {/* manillas */}
        <rect x="318" y="248" width="34" height="7" rx="3.5" fill="#0F1114" opacity="0.8" />
        <rect x="392" y="248" width="34" height="7" rx="3.5" fill="#0F1114" opacity="0.8" />
        {/* focos */}
        <path d="M92 292 C92 282 100 276 112 276 L134 276 L128 300 L100 300 C94 300 92 296 92 292 Z" fill="#F3EFE6" />
        <path d="M654 288 C654 280 646 276 636 276 L616 276 L620 300 L644 300 C650 300 654 294 654 288 Z" fill="#C9202F" opacity="0.9" />
        {/* ruedas */}
        {[190, 556].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="316" r="44" fill="#0F1114" />
            <circle cx={cx} cy="316" r="26" fill="#2B3036" stroke="#8E949B" strokeWidth="3" />
            <circle cx={cx} cy="316" r="8" fill="#8E949B" />
            {[0, 60, 120].map((a) => (
              <path key={a} d={`M${cx - 22} ${316} H${cx + 22}`} stroke="#0F1114" strokeWidth="4" transform={`rotate(${a} ${cx} 316)`} />
            ))}
          </g>
        ))}
        {/* cinta de enmascarar */}
        <path d="M356 158 V226" stroke="#E8D9A8" strokeWidth="4" strokeDasharray="6 4" opacity="0.9" />
        <path d="M376 158 V226" stroke="#E8D9A8" strokeWidth="4" strokeDasharray="6 4" opacity="0.9" />
      </g>

      {/* niebla de pintura */}
      <ellipse cx="470" cy="236" rx="120" ry="60" fill="url(#tc-spray)" />

      {/* pistola de pintura */}
      <g transform="translate(560 110) rotate(18)">
        <rect x="0" y="0" width="92" height="30" rx="8" fill="#F3EFE6" />
        <rect x="-14" y="6" width="22" height="18" rx="4" fill="#8E949B" />
        <rect x="52" y="26" width="24" height="52" rx="6" fill="#F3EFE6" transform="rotate(-10 64 26)" />
        <rect x="18" y="-40" width="34" height="42" rx="8" fill="#C9202F" />
        <rect x="26" y="-48" width="18" height="12" rx="3" fill="#0F1114" />
        <circle cx="-4" cy="15" r="3" fill="#0F1114" />
      </g>
      {/* gotas de spray */}
      {[
        [520, 232, 4],
        [500, 214, 3],
        [534, 256, 2.5],
        [488, 246, 2],
        [548, 222, 2],
      ].map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#E23B49" opacity="0.8" />
      ))}

      {/* etiqueta de capas */}
      <g transform="translate(36 380)">
        {CAPAS.map((c, i) => (
          <g key={c.name} transform={`translate(${i * 150} 0)`}>
            <rect width="16" height="16" rx="3" fill={c.color} />
            <text x="24" y="13" fontSize="14" fontFamily="inherit" fontWeight="700" fill="#F3EFE6" letterSpacing="1.5">
              {c.name.toUpperCase()}
            </text>
          </g>
        ))}
      </g>
    </svg>
  )
}

/** Sección "tres capas": corte transversal de la pintura sobre la lámina. */
function LayerStack() {
  const layers = [...CAPAS].reverse()
  return (
    <div className="relative" aria-hidden="true">
      <div className="overflow-hidden rounded-[22px] border" style={{ borderColor: C.lineOnDark, backgroundColor: C.ink2 }}>
        {layers.map((c, i) => (
          <div key={c.name} className="flex items-center justify-between gap-4 px-5 md:px-7" style={{ height: 72 + i * 8, backgroundColor: c.color }}>
            <span className={`${display.className} text-xl font-extrabold uppercase tracking-wide md:text-2xl`} style={{ color: c.color === '#E8ECEF' ? C.ink : '#fff' }}>
              {c.name}
            </span>
            <span className={`${display.className} text-sm font-bold uppercase tracking-[0.18em]`} style={{ color: c.color === C.red ? '#fff' : C.ink }}>
              capa {3 - i}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between px-5 py-4 md:px-7" style={{ backgroundColor: '#3A4046' }}>
          <span className={`${display.className} text-lg font-bold uppercase tracking-wide`} style={{ color: C.paper }}>
            Lámina
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: C.mutedOnDark }}>
            desabollada
          </span>
        </div>
      </div>
    </div>
  )
}

function ServiceIcon({ n }: { n: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (n === '01')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...common} aria-hidden="true">
        <path d="M3 17 C6 12 9 12 12 15 C15 18 18 18 21 13" />
        <path d="M3 21 H21" />
        <path d="M14 4 L18 8 M16 3 L21 8 L19 10 L14 5 Z" />
      </svg>
    )
  if (n === '02')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...common} aria-hidden="true">
        <path d="M4 9 H14 V13 H4 Z" />
        <path d="M14 10 L20 8 V14 L14 12" />
        <path d="M7 13 V20 H10 V13" />
        <path d="M9 9 V5 H12 V9" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" {...common} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3 V6 M12 18 V21 M3 12 H6 M18 12 H21 M5.6 5.6 L7.8 7.8 M16.2 16.2 L18.4 18.4 M5.6 18.4 L7.8 16.2 M16.2 7.8 L18.4 5.6" />
    </svg>
  )
}

export default function TricapaTalcaPage() {
  return (
    <div className={`${body.className} min-h-screen overflow-x-clip antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        @keyframes tc-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .tc-marquee { animation: tc-marquee 28s linear infinite }
        @media (prefers-reduced-motion: reduce) { .tc-marquee { animation: none } }
      `}</style>
      <Chrome fontClass={display.className} />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(201,32,47,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(142,148,155,0.14), transparent 60%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-24 md:grid-cols-[1fr_1.05fr] md:items-center md:px-8 md:pb-20 md:pt-32">
          <Reveal>
            <Eyebrow color={C.redSoft}>Taller automotriz · {BIZ.city}</Eyebrow>
            <h1 className={`${display.className} text-[clamp(3.4rem,13vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]`}>
              Tres capas.
              <br />
              <span style={{ color: C.red }}>Un solo</span>
              <br />
              acabado.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={{ color: C.mutedOnDark }}>
              Desabolladura, pintura automotriz y venta de repuestos en Talca. Tu vehículo vuelve a la calle como antes del golpe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-lg font-bold uppercase tracking-wide transition-transform active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} inline-flex items-center justify-center rounded-md border px-6 py-[11px] text-lg font-bold uppercase tracking-wide ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(243,239,230,0.4)', color: C.paper }}
              >
                Ver servicios
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm" style={{ color: C.mutedOnDark }}>
              <span className="inline-flex items-center gap-2">
                <span className="text-base" style={{ color: '#F0B323' }} aria-hidden="true">★</span>
                {BIZ.reviews} reseñas en Google
              </span>
              <span className="inline-flex items-center gap-2">
                <Stripes className="w-9" />
                Pintura · Desabolladura · Repuestos
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[26px] border shadow-2xl" style={{ borderColor: C.lineOnDark }}>
                <PaintBooth />
              </div>
              <div
                className={`${display.className} absolute -bottom-4 left-5 rounded-md px-3.5 py-2 text-sm font-bold uppercase tracking-[0.18em] shadow-lg md:left-8`}
                style={{ backgroundColor: C.paper, color: C.ink }}
              >
                Cabina de pintura
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta ── */}
      <div className="overflow-hidden py-3" style={{ backgroundColor: C.red }} aria-hidden="true">
        <div className="tc-marquee flex w-max items-center gap-10">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10">
              {['Desabolladura', 'Pintura automotriz', 'Venta de repuestos', 'Talca · Maule', 'Cotización por WhatsApp'].map((s) => (
                <span key={`${dup}-${s}`} className={`${display.className} flex items-center gap-10 whitespace-nowrap text-lg font-bold uppercase tracking-[0.16em] text-white`}>
                  {s}
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>Qué hacemos</Eyebrow>
                <h2 className={`${display.className} text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.02em] md:text-7xl`}>
                  El trabajo <span style={{ color: C.red }}>se nota</span> en la calle.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
                Tres servicios publicados en la ficha del taller. Cada uno se cotiza por WhatsApp con fotos del vehículo, sin vueltas.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <article
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border bg-white p-6 transition-transform hover:-translate-y-1 md:p-7"
                  style={{ borderColor: C.line, boxShadow: '0 12px 30px rgba(21,23,26,0.06)' }}
                >
                  <span className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: CAPAS[i].color }} aria-hidden="true" />
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: C.paper, color: C.red }}>
                      <ServiceIcon n={s.n} />
                    </span>
                    <span className={`${display.className} text-4xl font-extrabold leading-none`} style={{ color: C.steel }} aria-hidden="true">
                      {s.n}
                    </span>
                  </div>
                  <h3 className={`${display.className} mt-6 text-3xl font-extrabold uppercase leading-none tracking-wide`}>{s.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                  <span className={`${display.className} mt-6 inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-[0.18em]`} style={{ backgroundColor: C.ink, color: C.paper }}>
                    {s.tag}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tres capas ── */}
      <section id="capas" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow color={C.redSoft}>Por qué &ldquo;Tricapa&rdquo;</Eyebrow>
            <h2 className={`${display.className} text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.02em] md:text-6xl`}>
              Un buen pintado
              <br />
              son tres capas.
            </h2>
            <ul className="mt-8 divide-y" style={{ borderColor: C.lineOnDark }}>
              {CAPAS.map((c, i) => (
                <li key={c.name} className="flex items-center gap-4 py-4" style={{ borderColor: C.lineOnDark }}>
                  <span className="h-10 w-10 shrink-0 rounded-lg border" style={{ backgroundColor: c.color, borderColor: 'rgba(243,239,230,0.2)' }} aria-hidden="true" />
                  <div>
                    <p className={`${display.className} text-xl font-bold uppercase tracking-wide`}>
                      <span style={{ color: C.steel }}>0{i + 1} · </span>
                      {c.name}
                    </p>
                    <p className="text-sm" style={{ color: C.mutedOnDark }}>
                      {c.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed" style={{ color: C.mutedOnDark }}>
              Primero se desabolla y se prepara la lámina; después van las capas. Saltarse una se nota a los meses, con el sol del Maule.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <LayerStack />
          </Reveal>
        </div>
      </section>

      {/* ── Cómo cotizar ── */}
      <section id="cotizar" className="scroll-mt-20" style={{ backgroundColor: C.paper2 }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Cómo cotizar</Eyebrow>
            <h2 className={`${display.className} max-w-2xl text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.02em] md:text-6xl`}>
              Manda una foto <span style={{ color: C.red }}>y listo.</span>
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li className="relative h-full rounded-[22px] border p-6" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                  <span className={`${display.className} flex h-11 w-11 items-center justify-center rounded-full text-xl font-extrabold`} style={{ backgroundColor: C.ink, color: C.paper }}>
                    {i + 1}
                  </span>
                  <h3 className={`${display.className} mt-5 text-2xl font-bold uppercase leading-tight tracking-wide`}>{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mt-8 inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-lg font-bold uppercase tracking-wide transition-transform active:scale-95 sm:w-auto ${focusRing} tap-44`}
              style={{ backgroundColor: C.red, color: '#fff' }}
            >
              Enviar foto por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <Reveal>
              <Eyebrow>Dónde estamos</Eyebrow>
              <h2 className={`${display.className} text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.02em] md:text-6xl`}>{BIZ.city}, {BIZ.region}</h2>
              <address className="mt-6 not-italic">
                <p className="text-lg font-semibold">{BIZ.address}</p>
                <p className="text-base" style={{ color: C.muted }}>
                  {BIZ.city}, Región del {BIZ.region}
                </p>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-bold uppercase tracking-wide transition-transform active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.ink, color: C.paper }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center justify-center rounded-md border-2 px-6 py-[10px] text-lg font-bold uppercase tracking-wide ${focusRing} tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-[22px] border p-6 md:p-7" style={{ borderColor: C.line, backgroundColor: '#fff' }}>
                <div className="flex items-center justify-between">
                  <Stripes className="w-16" />
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                    <span style={{ color: C.amber }} aria-hidden="true">★★★★★</span>
                    {BIZ.reviews} reseñas
                  </span>
                </div>
                <dl className="mt-5 divide-y text-[15px]" style={{ borderColor: C.line }}>
                  {[
                    ['Rubro', BIZ.rubro],
                    ['WhatsApp', BIZ.phoneDisplay],
                    ['Ciudad', `${BIZ.city}, ${BIZ.region}`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                      <dt className="shrink-0 font-semibold" style={{ color: C.muted }}>
                        {k}
                      </dt>
                      <dd className="text-right font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: C.muted }}>
                  El horario de atención se confirma por WhatsApp.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-6 pt-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className={`${display.className} text-2xl font-extrabold uppercase tracking-wide`}>{BIZ.displayName}</p>
            <p className="text-xs" style={{ color: C.mutedOnDark }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              WhatsApp
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Google Maps
            </a>
            <Stripes className="w-12" />
          </div>
        </div>
      </footer>
      <DemoBand name={BIZ.displayName} />
    </div>
  )
}
