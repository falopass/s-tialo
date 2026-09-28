import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_MESA,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const title = localFont({
  src: [
    { path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

const C = {
  noche: '#1B2A41',
  nocheDeep: '#121D2E',
  arena: '#E8DCC8',
  arenaSoft: '#F4EEE3',
  terracota: '#C1663F',
  terracotaDeep: '#A4502D',
  blanco: '#FFFFFF',
  muted: '#55607A',
  line: 'rgba(27,42,65,0.14)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = {
  title: 'La Terraza — Hamburguesería en Cumpeo, Río Claro',
  description:
    'Hamburguesería en El Cerrillo, Cumpeo, Río Claro. Pide por WhatsApp o ven a sentarte con calma. 17 reseñas en Google Maps.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
]

type IconName = 'burger' | 'basket' | 'empanada' | 'bowl' | 'cup' | 'pin' | 'chat' | 'star' | 'camera'

function Icon({ name, className = 'w-5 h-5', color = 'currentColor' }: { name: IconName; className?: string; color?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    burger: (
      <>
        <path d="M4 10.5C4 6.9 7.6 4.5 12 4.5s8 2.4 8 6H4Z" />
        <path d="M3.5 13.5h17" />
        <path d="M4.5 16.5h15c0 1.7-1.3 3-3 3h-9c-1.7 0-3-1.3-3-3Z" />
      </>
    ),
    basket: (
      <>
        <path d="M4 9.5h16l-1.6 9a1.5 1.5 0 0 1-1.5 1.2H7.1a1.5 1.5 0 0 1-1.5-1.2L4 9.5Z" />
        <path d="M8.5 9.5 11 4.5M15.5 9.5 13 4.5" />
      </>
    ),
    empanada: (
      <>
        <path d="M3.5 15.5C3.5 10.5 7.3 7 12 7s8.5 3.5 8.5 8.5H3.5Z" />
        <path d="M6 12.5l1 1M9 10.5l1 1M12.5 9.8l.8 1.2M16 10.8l.6 1.2M18.3 13l.4 1" />
      </>
    ),
    bowl: (
      <>
        <path d="M3.5 11.5h17c0 4.4-3.8 8-8.5 8s-8.5-3.6-8.5-8Z" />
        <path d="M9 8c0-1.5 1-1.5 1-3M13 8c0-1.5 1-1.5 1-3" />
      </>
    ),
    cup: (
      <>
        <path d="M6.5 7.5h11l-1.3 12H7.8L6.5 7.5Z" />
        <path d="M12 7.5 13.5 3.5h3" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </>
    ),
    chat: (
      <path d="M4.5 19.5l1.2-3.6A7.5 7.5 0 1 1 8.4 18.6l-3.9.9Z" />
    ),
    star: (
      <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.4l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 4Z" />
    ),
    camera: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const CARTA: { icon: IconName; src: string; alt: string; name: string; desc: string }[] = [
  {
    icon: 'burger',
    src: `${IMG}/hero.webp`,
    alt: 'Cocina con parrilla a leña encendida y mesas de madera',
    name: 'Hamburguesas',
    desc: 'Carne a la plancha, pan tostado y agregados a elección. Se arman al momento, cuando las pides.',
  },
  {
    icon: 'basket',
    src: `${IMG}/detalle3.webp`,
    alt: 'Sopaipillas recién fritas con pebre sobre el mesón',
    name: 'Para picar',
    desc: 'Algo para ir abriendo la mesa mientras sale lo principal. Para compartir entre dos o entre todos.',
  },
  {
    icon: 'empanada',
    src: `${IMG}/detalle2.webp`,
    alt: 'Empanadas de horno doradas sobre una tabla de madera',
    name: 'Empanadas',
    desc: 'De horno, doraditas, para el almuerzo corto o para llevar a la casa.',
  },
  {
    icon: 'bowl',
    src: `${IMG}/ambiente.webp`,
    alt: 'Cazuela de vacuno con choclo, zapallo y papa, con pan y pebre',
    name: 'Platos de la casa',
    desc: 'Comida casera para los días de frío o para quien no anda con ganas de hamburguesa.',
  },
]

const PRECIOS: { group: string; icon: IconName; items: string[] }[] = [
  { group: 'Hamburguesas', icon: 'burger', items: ['Hamburguesa clásica', 'Hamburguesa doble', 'Hamburguesa de la casa'] },
  { group: 'Para acompañar', icon: 'basket', items: ['Papas fritas', 'Sopaipillas con pebre', 'Empanada de horno'] },
  { group: 'Para tomar', icon: 'cup', items: ['Bebidas en lata', 'Jugo natural'] },
]

const FAQS = [
  {
    q: '¿Cómo hago un pedido?',
    a: 'Por WhatsApp al +56 9 7522 0922. Nos dices qué quieres y te confirmamos el valor y a qué hora queda listo.',
  },
  {
    q: '¿Dónde quedan?',
    a: 'En El Cerrillo, Cumpeo, comuna de Río Claro. Abajo tienes el mapa y el botón para abrir la ruta en Google Maps.',
  },
  {
    q: '¿Puedo ir a comer al local?',
    a: 'Escríbenos antes si vienen en grupo y te confirmamos si hay mesa disponible para la hora que buscas.',
  },
  {
    q: '¿Cuál es el horario?',
    a: 'El horario se confirma por WhatsApp. Al publicar el sitio, aquí va el horario real de atención.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.22em] font-extrabold mb-4 flex items-center gap-3"
      style={{ color: light ? C.arena : C.terracotaDeep }}
    >
      <span className="block w-6 h-px" style={{ backgroundColor: light ? C.terracota : C.terracotaDeep }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaButton({ href = WA_LINK, children, tone = 'terracota', className = '' }: { href?: string; children: React.ReactNode; tone?: 'terracota' | 'arena' | 'outline'; className?: string }) {
  const style =
    tone === 'terracota'
      ? { backgroundColor: C.terracotaDeep, color: C.blanco }
      : tone === 'arena'
        ? { backgroundColor: C.arena, color: C.noche }
        : { border: `2px solid ${C.line}`, color: C.noche }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 font-bold text-sm md:text-base px-6 py-3.5 min-h-[48px] rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] ${focusRing} ${className}`}
      style={style}
    >
      <Icon name="chat" className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

export default function LaTerrazaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.arenaSoft, color: C.noche }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={title.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,238,227,0.95)',
          ink: C.noche,
          line: C.line,
          btnBg: C.terracotaDeep,
          btnInk: C.blanco,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-[88svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.nocheDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de La Terraza con mesas de madera y la parrilla encendida al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(18,29,46,0.55) 0%, rgba(18,29,46,0.15) 38%, rgba(18,29,46,0.92) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-14 md:pb-20">
          <Reveal>
            <Eyebrow light>Hamburguesería · Cumpeo, Río Claro</Eyebrow>
            <h1
              className={`${title.className} leading-[1.08] text-[clamp(2.3rem,7.5vw,4.6rem)] max-w-3xl mb-6`}
              style={{ color: C.blanco }}
            >
              Una buena hamburguesa, sin apuro, en El Cerrillo
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.86)' }}>
              Pide por WhatsApp y te avisamos cuando esté lista, o ven a
              sentarte con calma. Te atiende la misma gente que cocina.
            </p>
            <div className="flex flex-wrap gap-3">
              <WaButton tone="arena">Pedir por WhatsApp</WaButton>
              <a
                href="#carta"
                className={`inline-flex items-center font-bold text-sm md:text-base px-6 py-3.5 min-h-[48px] rounded-lg border-2 transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(232,220,200,0.5)', color: C.blanco }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha rápida ── */}
      <section aria-label="Datos del local" className="relative z-10 -mt-8 md:-mt-10">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden shadow-[0_14px_34px_rgba(27,42,65,0.14)]"
              style={{ backgroundColor: C.line }}
            >
              {[
                { icon: 'pin' as const, k: 'Dirección', v: 'El Cerrillo, Cumpeo', href: MAPS_URL },
                { icon: 'chat' as const, k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                { icon: 'star' as const, k: 'Google Maps', v: `${BIZ.googleReviews} reseñas`, href: MAPS_URL },
                { icon: 'camera' as const, k: 'Instagram', v: `@${BIZ.instagram}`, href: INSTAGRAM_URL },
              ].map((f) => (
                <a
                  key={f.k}
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-5 py-2.5 bg-white transition-colors hover:bg-[#F4EEE3] ${focusRing}`}
                >
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: C.arena }}>
                    <Icon name={f.icon} className="w-5 h-5" color={C.terracotaDeep} />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.16em] font-bold leading-tight" style={{ color: C.muted }}>{f.k}</span>
                    <span className="block text-sm md:text-[15px] font-bold leading-tight">{f.v}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Carta (directorio) ── */}
      <section id="carta" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-10 items-end mb-10 md:mb-12">
              <div>
                <Eyebrow>La carta</Eyebrow>
                <h2 className={`${title.className} text-3xl md:text-[2.8rem] leading-[1.12]`}>Lo que sale de la cocina</h2>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.muted }}>
                Carta de muestra: al publicar va la carta real de La Terraza,
                con sus fotos.
              </p>
            </div>
          </Reveal>
          <ul className="rounded-xl overflow-hidden border" style={{ borderColor: C.line, backgroundColor: C.blanco }}>
            {CARTA.map((s, i) => (
              <li key={s.name} className={i ? 'border-t' : ''} style={{ borderColor: C.line }}>
                <Reveal delay={i * 70}>
                  <article className="grid grid-cols-[88px_1fr] sm:grid-cols-[150px_1fr_auto] md:grid-cols-[200px_1fr_auto] gap-4 md:gap-8 items-center p-4 md:p-5">
                    <div className="relative aspect-square sm:aspect-[4/3] rounded-lg overflow-hidden">
                      <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 200px, (min-width: 640px) 150px, 88px" className="object-cover" />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2.5 mb-1.5">
                        <Icon name={s.icon} className="w-5 h-5 shrink-0" color={C.terracota} />
                        <span className={`${title.className} text-lg md:text-2xl`}>{s.name}</span>
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed max-w-lg" style={{ color: C.muted }}>{s.desc}</p>
                    </div>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 min-h-[44px] rounded-lg border-2 transition-colors hover:bg-[#F4EEE3] ${focusRing}`}
                      style={{ borderColor: C.terracotaDeep, color: C.terracotaDeep }}
                    >
                      <Icon name="chat" className="w-4 h-4" />
                      Pedir
                    </a>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.noche, color: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={`${IMG}/detalle1.webp`}
                alt="Fachada de un local de comida con la puerta abierta a la calle"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow light>El local</Eyebrow>
            <h2 className={`${title.className} text-3xl md:text-[2.8rem] leading-[1.12] mb-6`}>
              En Cumpeo, con la mesa puesta
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: 'rgba(255,255,255,0.8)' }}>
              La Terraza está en El Cerrillo, en Cumpeo, comuna de Río Claro.
              Pides directo a quien cocina, por WhatsApp o en el mesón, sin
              aplicaciones de por medio ni recargos.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Un lugar para sentarse tranquilo después de la pega o para
              pasar a buscar la comida de la casa.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8 max-w-md">
              <li className="rounded-lg px-4 py-4" style={{ backgroundColor: 'rgba(232,220,200,0.08)' }}>
                <p className={`${title.className} text-3xl`} style={{ color: C.arena }}>{BIZ.googleReviews}</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>reseñas en Google Maps</p>
              </li>
              <li className="rounded-lg px-4 py-4" style={{ backgroundColor: 'rgba(232,220,200,0.08)' }}>
                <p className={`${title.className} text-3xl`} style={{ color: C.arena }}>{BIZ.instagramFollowers}</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>seguidores en Instagram</p>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <WaButton tone="arena" href={WA_LINK_MESA}>Consultar por una mesa</WaButton>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center font-bold text-sm md:text-base px-6 py-3.5 min-h-[48px] rounded-lg border-2 transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(232,220,200,0.4)', color: C.blanco }}
              >
                Ver Instagram
              </a>
            </div>
            <p className="text-xs mt-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Texto y foto de muestra; las cifras son las de su ficha y su Instagram.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Precios de referencia</Eyebrow>
            <h2 className={`${title.className} text-3xl md:text-[2.8rem] leading-[1.12] mb-5`}>Valores claros antes de pedir</h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-sm" style={{ color: C.muted }}>
              Esta lista es <strong style={{ color: C.noche }}>de muestra</strong>: muestra cómo se
              vería la carta con precios. Al publicar van los productos y
              valores reales del local.
            </p>
            <WaButton>Consultar precios</WaButton>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.blanco }}>
              <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-3.5" style={{ backgroundColor: C.arena }}>
                <span className="text-xs uppercase tracking-[0.16em] font-extrabold">Carta La Terraza</span>
                <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold px-2.5 py-1 rounded" style={{ backgroundColor: C.noche, color: C.arena }}>
                  valores de muestra
                </span>
              </div>
              {PRECIOS.map((g) => (
                <div key={g.group} className="border-t first:border-t-0" style={{ borderColor: C.line }}>
                  <p className="flex items-center gap-2.5 px-5 md:px-6 pt-5 pb-2 text-xs uppercase tracking-[0.16em] font-extrabold" style={{ color: C.terracotaDeep }}>
                    <Icon name={g.icon} className="w-4 h-4" />
                    {g.group}
                  </p>
                  <ul className="pb-3">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-baseline gap-3 px-5 md:px-6 py-2.5 text-sm md:text-base">
                        <span className="font-semibold">{it}</span>
                        <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: 'rgba(27,42,65,0.25)' }} aria-hidden="true" />
                        <span className="text-sm font-bold shrink-0" style={{ color: C.muted }}>a confirmar</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section id="preguntas" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className={`${title.className} text-3xl md:text-[2.8rem] leading-[1.12] mb-10 md:mb-12`}>Antes de venir</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 70}>
                <div className="h-full rounded-xl p-6 md:p-7" style={{ backgroundColor: C.blanco }}>
                  <h3 className="font-extrabold text-base md:text-lg mb-2.5">{f.q}</h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaButton>Preguntar por WhatsApp</WaButton>
              <span className="text-xs" style={{ color: C.muted }}>Respuestas de muestra, a confirmar con el local.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className={`${title.className} text-3xl md:text-[2.8rem] leading-[1.12] mb-6`}>Escríbenos y te atendemos</h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 rounded-xl px-5 py-2 md:py-3.5 mb-6 transition-all hover:-translate-y-0.5 hover:shadow-xl ${focusRing}`}
              style={{ backgroundColor: C.terracotaDeep, color: C.blanco }}
            >
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}>
                <Icon name="chat" className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-base md:text-xl font-extrabold leading-tight">Pedir por WhatsApp</span>
                <span className="block text-xs md:text-sm leading-tight" style={{ color: 'rgba(255,255,255,0.85)' }}>{BIZ.phoneDisplay}</span>
              </span>
            </a>
            <div className="flex items-start gap-3 mb-6">
              <Icon name="pin" className="w-5 h-5 mt-0.5 shrink-0" color={C.terracotaDeep} />
              <address className="not-italic text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <strong style={{ color: C.noche }}>El Cerrillo, 3480084 Cumpeo</strong>
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center font-bold text-sm px-5 py-3 min-h-[44px] rounded-lg border-2 transition-colors hover:bg-white ${focusRing}`}
              style={{ borderColor: C.line, color: C.noche }}
            >
              Cómo llegar en Google Maps →
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-xl border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.arena }}>
              <iframe
                title={`Mapa: ${BIZ.name}, Cumpeo, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.nocheDeep, color: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${title.className} text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(255,255,255,0.62)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing}`} style={{ color: C.blanco }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing}`} style={{ color: C.blanco }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
