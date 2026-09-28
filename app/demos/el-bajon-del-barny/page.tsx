import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, HOURS, IMG, MAPS_EMBED, MAPS_URL, MENU, PROMO, SERVICES, WA_LINK } from './content'

const display = localFont({ src: '../../fonts/archivo-black/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900' })

/** Letrero luminoso de noche: fondo morado casi negro, amarillo neón, rosa de tubo y verde palta. */
const C = {
  night: '#17111F',
  nightSoft: '#241B30',
  neon: '#FFD23F',
  pink: '#FF5C9E',
  pinkDeep: '#B3164F',
  palta: '#8EE36A',
  cream: '#FBF6EC',
  ink: '#17111F',
  muted: '#5E5568',
  line: 'rgba(23,17,31,0.12)',
  lineDark: 'rgba(251,246,236,0.14)',
}

const NAV_LINKS = [
  { label: 'Carta', href: '#carta' },
  { label: 'Promo', href: '#promo' },
  { label: 'Horario', href: '#horario' },
]

export const metadata: Metadata = demoMetadata({
  slug: 'el-bajon-del-barny',
  title: 'El Bajón del Barny - Comida rápida en Talca',
  description:
    'El Bajón del Barny: completos, hamburguesas y salchipapas en 2 Norte 3275, Talca. Todos los días desde las 12:00. Pide por WhatsApp +56 9 5778 0418.',
  image: '/demos/el-bajon-del-barny/hero.webp',
})

/** Motivo propio: ampolletas de marquesina, una fila de puntos con halo. */
function Marquesina({ color = C.neon, className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 16" preserveAspectRatio="none" className={`block w-full h-4 ${className}`} aria-hidden="true" focusable="false">
      {Array.from({ length: 20 }, (_, i) => (
        <g key={i}>
          <circle cx={10 + i * 20} cy="8" r="6" fill={color} opacity={i % 2 ? 0.28 : 0.6} />
          <circle cx={10 + i * 20} cy="8" r="3" fill={color} />
        </g>
      ))}
    </svg>
  )
}

/** Fondo punteado (ampolletas apagadas) para bloques oscuros. */
function Puntos({ id, color = C.neon, opacity = 0.12 }: { id: string; color?: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="1.6" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  )
}

function Neon({ children, color = C.neon }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{ color, textShadow: `0 0 14px ${color}66, 0 0 2px ${color}` }}>{children}</span>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'neon' | 'ghost' | 'night'; external?: boolean }) {
  const st =
    tone === 'neon'
      ? { backgroundColor: C.neon, color: C.ink, boxShadow: `0 8px 24px ${C.neon}55` }
      : tone === 'night'
        ? { backgroundColor: C.night, color: C.cream }
        : { backgroundColor: 'transparent', color: C.cream, boxShadow: `inset 0 0 0 2px rgba(251,246,236,0.6)` }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${body.className} inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

function Etiqueta({ children, color = C.pink }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`${display.className} inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]`} style={{ backgroundColor: color, color: C.ink }}>
      {children}
    </span>
  )
}

export default function ElBajonDelBarnyPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name="El Bajón del Barny"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} text-base`}
        theme={{ over: 'dark', bar: 'rgba(23,17,31,0.94)', ink: C.cream, line: C.lineDark, btnBg: C.neon, btnInk: C.ink }}
        ctaLabel="Pedir"
      />

      {/* HERO: fachada real al anochecer con letreros */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <div className="relative aspect-[4/3] mt-[72px] md:mt-0 md:absolute md:inset-0 md:aspect-auto">
          <Image src={`${IMG}/hero.webp`} alt="Fachada de El Bajón del Barny al anochecer, con letreros luminosos" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.night} 0%, rgba(23,17,31,0.55) 40%, rgba(23,17,31,0.15) 100%)` }} />
        </div>
        <div className="relative max-w-6xl mx-auto w-full px-5 pb-12 -mt-20 md:mt-0 md:pt-44 md:pb-20 md:min-h-[92svh] flex flex-col justify-end">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Etiqueta>Talca · 2 Norte</Etiqueta>
              <Etiqueta color={C.palta}>Abierto todos los días</Etiqueta>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} mt-5 text-[46px] leading-[0.95] md:text-[96px] uppercase max-w-4xl`} style={{ color: C.cream }}>
              El bajón <Neon>que ilumina</Neon> la noche
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: C.cream }}>
              Completos mojados, hamburguesas a la plancha y salchipapas para compartir. {BIZ.hours}, en el local, para retiro o delivery.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="neon">Pedir por WhatsApp</Btn>
              <Btn href="#carta" tone="ghost" external={false}>Ver la carta</Btn>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg border-t pt-5" style={{ borderColor: C.lineDark }}>
              {[
                [BIZ.rating, `${BIZ.reviews} reseñas en Google`],
                ['12:00', 'abre todos los días'],
                ['$5–10 mil', 'por persona'],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.neon }}>{n}</dt>
                  <dd className="text-xs mt-1 leading-snug" style={{ color: 'rgba(251,246,236,0.8)' }}>{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Marquesina />
      </section>

      {/* CINTA */}
      <div className={`${display.className} overflow-hidden py-3 uppercase text-sm tracking-[0.2em]`} style={{ backgroundColor: C.neon, color: C.ink }} aria-hidden="true">
        <style>{`@keyframes eb-cinta{to{transform:translateX(-50%)}}`}</style>
        <div className="flex gap-10 whitespace-nowrap w-max" style={{ animation: 'eb-cinta 28s linear infinite' }}>
          {Array.from({ length: 2 }, (_, k) => (
            <span key={k} className="flex gap-10">
              {['Completos mojados', 'Hamburguesas', 'Salchipapas', 'Chacarero', 'Barros Luco', 'Papas fritas', 'Delivery sin contacto'].map((t) => (
                <span key={t} className="flex items-center gap-10">{t} <span style={{ color: C.pink }}>●</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* CARTA */}
      <section id="carta" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className={`${display.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.pinkDeep }}>La carta</p>
                <h2 className={`${display.className} mt-3 text-[34px] leading-[1] md:text-[56px] uppercase`}>Lo que sale de la plancha</h2>
              </div>
              <p className="max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Cuatro razones para pasar por 2 Norte. Fotos del local, tal como se sirven.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-6 md:gap-8">
            {MENU.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <article className="group rounded-3xl overflow-hidden h-full flex flex-col" style={{ backgroundColor: '#fff', boxShadow: '0 18px 44px rgba(23,17,31,0.10)' }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={`${IMG}/${m.img}`} alt={m.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute left-4 top-4"><Etiqueta color={i % 2 ? C.palta : C.neon}>{m.tag}</Etiqueta></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-baseline gap-3">
                      <span className={`${display.className} text-sm`} style={{ color: C.pinkDeep }}>{m.n}</span>
                      <h3 className={`${display.className} text-xl uppercase`}>{m.title}</h3>
                    </div>
                    <p className="mt-3 leading-relaxed flex-1" style={{ color: C.muted }}>{m.desc}</p>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-sm tap-44" style={{ color: C.ink }}>
                      Pedir esto <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 rounded-3xl overflow-hidden grid md:grid-cols-[1.2fr_1fr]" style={{ backgroundColor: C.nightSoft }}>
              <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[300px]">
                <Image src={`${IMG}/parrilla.webp`} alt="Hamburguesas con queso y pan brioche sobre la plancha del local" fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <p className={`${display.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.neon }}>Carta completa</p>
                <p className={`${display.className} mt-3 text-2xl uppercase leading-tight`} style={{ color: C.cream }}>Fajitas, sándwiches, hamburguesas, papas y bebidas</p>
                <p className="mt-3 leading-relaxed" style={{ color: 'rgba(251,246,236,0.8)' }}>
                  La carta impresa del local está en su ficha de Google. Pregunta precios y disponibilidad del día por WhatsApp.
                </p>
                <div className="mt-6"><Btn href={WA_LINK} tone="neon">Consultar la carta</Btn></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROMO real */}
      <section id="promo" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.night }}>
        <Puntos id="puntos-promo" />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]" style={{ boxShadow: `0 0 0 6px ${C.neon}, 0 30px 60px rgba(0,0,0,0.5)` }}>
              <Image src={`${IMG}/${PROMO.img}`} alt={PROMO.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <Etiqueta>Promo publicada por el local</Etiqueta>
              <h2 className={`${display.className} mt-5 text-[40px] leading-[0.95] md:text-[72px] uppercase`} style={{ color: C.cream }}>
                {PROMO.title} <br /><Neon>{PROMO.price}</Neon>
              </h2>
              <p className="mt-5 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(251,246,236,0.85)' }}>
                Dos chacareros con porotos verdes, tomate y ají. Confirma vigencia y stock por WhatsApp antes de pasar.
              </p>
              <div className="mt-8"><Btn href={WA_LINK} tone="neon">Quiero la promo</Btn></div>
            </div>
          </Reveal>
        </div>
      </section>
      <Marquesina color={C.pink} className="bg-[#17111F]" />

      {/* CÓMO PEDIR + POR QUÉ */}
      <section id="pedir" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${display.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.pinkDeep }}>Cómo pedir</p>
            <h2 className={`${display.className} mt-3 text-[34px] leading-[1] md:text-[56px] uppercase max-w-3xl`}>Tres formas, la misma plancha</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="relative rounded-3xl p-6 h-full overflow-hidden" style={{ backgroundColor: '#fff', boxShadow: '0 14px 36px rgba(23,17,31,0.08)' }}>
                  <div className="absolute inset-x-0 top-0"><Marquesina color={[C.neon, C.pink, C.palta][i]} /></div>
                  <p className={`${display.className} mt-4 text-4xl`} style={{ color: [C.neon, C.pink, C.palta][i], WebkitTextStroke: `1.5px ${C.ink}` }}>0{i + 1}</p>
                  <h3 className={`${display.className} mt-3 text-xl uppercase`}>{s}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: C.muted }}>
                    {[
                      'Mesas en 2 Norte 3275, entre 24 y 25 Oriente. Llega y pide en el mostrador.',
                      'Pide por WhatsApp y retira en la puerta del local cuando esté listo.',
                      'Coordina la entrega por WhatsApp; te lo dejan sin contacto.',
                    ][i]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-[1fr_1.1fr] gap-8 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]" style={{ boxShadow: '0 18px 44px rgba(23,17,31,0.12)' }}>
                <Image src={`${IMG}/completo-corte.webp`} alt="Corte de un completo con palta, tomate y mayo casera" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className={`${display.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.pinkDeep }}>Por qué El Barny</p>
                <h2 className={`${display.className} mt-3 text-[32px] leading-[1] md:text-[48px] uppercase`}>Comida rápida, hecha al momento</h2>
                <ul className="mt-6 space-y-4">
                  {[
                    [`${BIZ.rating} estrellas en Google`, `${BIZ.reviews} reseñas de gente del barrio y de paso.`],
                    ['Precio honesto', `${BIZ.priceRange}, según la ficha del local.`],
                    ['Palta y mayo casera', 'Los completos van mojados de verdad, como muestran las fotos.'],
                    ['Hasta tarde', 'Abre a las 12:00 todos los días; viernes y fin de semana cierra más tarde.'],
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-4 border-b pb-4" style={{ borderColor: C.line }}>
                      <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: C.neon, boxShadow: `0 0 0 3px ${C.neon}44` }} />
                      <div>
                        <p className={`${display.className} uppercase text-sm`}>{t}</p>
                        <p className="mt-1 leading-relaxed" style={{ color: C.muted }}>{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HORARIO + MAPA */}
      <section id="horario" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.night }}>
        <Puntos id="puntos-horario" color={C.pink} opacity={0.1} />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <p className={`${display.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.neon }}>Horario y dirección</p>
              <h2 className={`${display.className} mt-3 text-[34px] leading-[1] md:text-[56px] uppercase`} style={{ color: C.cream }}>
                Todos los días <Neon>desde las 12:00</Neon>
              </h2>
              <dl className="mt-8 divide-y" style={{ borderColor: C.lineDark }}>
                {HOURS.map((h) => (
                  <div key={h.d} className="flex items-center justify-between py-3 border-t" style={{ borderColor: C.lineDark }}>
                    <dt style={{ color: 'rgba(251,246,236,0.8)' }}>{h.d}</dt>
                    <dd className={`${display.className}`} style={{ color: C.cream }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 rounded-2xl p-5" style={{ backgroundColor: C.nightSoft }}>
                <p className={`${display.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.pink }}>Dirección</p>
                <p className="mt-2 text-lg" style={{ color: C.cream }}>{BIZ.address}, {BIZ.city}</p>
                <p className="mt-1" style={{ color: 'rgba(251,246,236,0.75)' }}>WhatsApp {BIZ.phoneDisplay}</p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="neon">Pedir por WhatsApp</Btn>
                  <Btn href={MAPS_URL} tone="ghost">Cómo llegar</Btn>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl overflow-hidden min-h-[320px] h-full" style={{ boxShadow: `0 0 0 4px ${C.pink}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full min-h-[320px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: C.neon }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Reveal>
            <div>
              <p className={`${display.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.ink }}>¿Te dio el bajón?</p>
              <h2 className={`${display.className} mt-3 text-[36px] leading-[0.95] md:text-[64px] uppercase`} style={{ color: C.ink }}>Pide ahora, llega caliente</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="shrink-0"><Btn href={WA_LINK} tone="night">WhatsApp {BIZ.phoneDisplay}</Btn></div>
          </Reveal>
        </div>
      </section>

      <footer className="py-8" style={{ backgroundColor: C.night, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(251,246,236,0.7)' }}>{BIZ.rubro} · {BIZ.address}, {BIZ.city}</p>
          </div>
          <nav className="flex gap-5 text-sm" style={{ color: 'rgba(251,246,236,0.8)' }}>
            {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="tap-44 inline-flex items-center">{l.label}</a>)}
          </nav>
        </div>
        <div className="mt-6"><DemoBand name={BIZ.name} /></div>
      </footer>
      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
