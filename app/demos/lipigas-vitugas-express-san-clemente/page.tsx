import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Paleta de su marca: navy de los flyers, amarillo Lipigas y celeste de
// cielo. Motivo: el vale/cupón — sus propios avisos son tickets con
// borde punteado, y esa es la idea de toda la página.
const C = {
  navy: '#14256B',
  navyDeep: '#0C1746',
  tinta: '#101833',
  amarillo: '#FFD400',
  cielo: '#EAF4FC',
  papel: '#FFFDF4',
  muted: '#5A6486',
  line: 'rgba(16,24,51,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lipigas-vitugas-express-san-clemente',
  title: 'Vitugas Express — Gas Lipigas en San Clemente',
  description:
    'Distribuidor oficial de Gas Lipigas en San Clemente: pide tu cilindro por WhatsApp, aceptamos vales municipales y cupón de gas del Gobierno. Pagos con tarjeta y Webpay.',
  image: `${IMG}/og.webp`,
})

const NAV_LINKS = [
  { label: 'Pedir gas', href: '#pedir' },
  { label: 'Vales y cupones', href: '#vales' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde', href: '#donde' },
]

// Ticket/vale con bordes perforados: el formato de sus avisos.
function Ticket({
  children,
  className = '',
  color = C.amarillo,
  notches = true,
}: {
  children: React.ReactNode
  className?: string
  color?: string
  notches?: boolean
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="border-2 border-dashed h-full"
        style={{ backgroundColor: color, borderColor: C.tinta, boxShadow: `6px 6px 0 rgba(16,24,51,0.9)` }}
      >
        {children}
      </div>
      {notches && (
        <>
          <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2" style={{ backgroundColor: C.navy, borderColor: C.tinta }} aria-hidden="true" />
          <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2" style={{ backgroundColor: C.navy, borderColor: C.tinta }} aria-hidden="true" />
        </>
      )}
    </div>
  )
}

const VALES = [
  {
    img: 'vales.webp',
    titulo: 'Vales municipales',
    bajada: 'Reciben vales de gas municipales de Lipigas para cilindros de 15 kilos, sin costo adicional.',
  },
  {
    img: 'cupon.webp',
    titulo: 'Cupón de gas del Gobierno',
    bajada: 'El cupón se canjea aquí mismo — el aviso de Vitugas recuerda el vencimiento para no perder el beneficio.',
  },
  {
    img: 'sorteo.webp',
    titulo: 'Sorteos para clientes',
    bajada: 'Por el aniversario de San Clemente sortearon 4 premios de $50.000 entre pedidos de cilindro de 15 kilos.',
  },
]

const RESENAS = [
  { t: 'Desde la primera llamada el servicio es excelente, la atención, la rapidez. 10/10.', a: 'Felipe Pavez' },
  { t: 'Excelente servicio, conveniente y rápido.', a: 'Enmanuel Muñoz Riveros' },
  { t: 'Excelente atención... entrega inmediata y la gente... ¡la mejor!', a: 'Alejandra Ruiz · Local Guide' },
]

const HORARIO = [
  ['Lunes a viernes', '8:30 – 21:00'],
  ['Sábado y domingo', '9:00 – 20:00'],
]

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.navy, color: C.tinta }}>
      <BlitzNav
        name="Vitugas Express"
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.navyDeep, ink: '#FFFFFF', line: 'rgba(255,255,255,0.15)', btnBg: C.amarillo, btnInk: C.navy }}
        fontClass={display.className}
        ctaLabel="Pedir gas"
      />

      {/* ── Hero: el flyer del pedido ── */}
      <header id="inicio" className="relative pt-[92px] md:pt-[120px] pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{ background: 'radial-gradient(circle at 80% 10%, rgba(255,212,0,0.25), transparent 55%), radial-gradient(circle at 10% 90%, rgba(58,124,214,0.35), transparent 50%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amarillo }}>
              Distribuidor oficial Lipigas · San Clemente
            </p>
            <h1 className={`${display.className} uppercase leading-[0.92] text-[16vw] md:text-[5.8rem] xl:text-[7rem] text-white`}>
              Gas<br />al tiro,<br />
              <span style={{ color: C.amarillo }}>sin vuelta</span>
            </h1>
            <p className="mt-5 max-w-sm text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Pide tu cilindro por WhatsApp y listo: atención rápida, entrega inmediata
              y pago con tarjeta o Webpay.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wide border-2 transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: C.amarillo, color: C.navy, borderColor: '#000', boxShadow: '4px 4px 0 rgba(0,0,0,0.55)' }}
              >
                Pedir por WhatsApp
              </a>
              <span className={`${mono.className} text-xs`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                ★ {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <figure className="border-2 bg-white p-2 rotate-1" style={{ borderColor: '#000', boxShadow: '8px 8px 0 rgba(255,212,0,0.9)' }}>
                <Image src={`${IMG}/pedido.webp`} alt="Flyer de Vitugas: haz tu pedido, WhatsApp +56 9 8198 0590, Webpay y tarjetas" width={1100} height={1100} className="w-full aspect-square object-cover" priority />
              </figure>
              <figure className="absolute -bottom-6 -right-3 w-32 md:w-40 border-2 bg-white rotate-3" style={{ borderColor: '#000' }}>
                <Image src={`${IMG}/perro.webp`} alt="El perrito mascota de Vitugas con pañuelo Lipigas" width={420} height={866} className="w-full aspect-[2/3] object-cover object-top" />
              </figure>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── Cómo pedir: ticket ── */}
      <section id="pedir" className="py-12 md:py-16" style={{ backgroundColor: C.cielo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Ticket className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.muted }}>Tu pedido en 1 mensaje</p>
                  <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-none mt-2`} style={{ color: C.navy }}>
                    WhatsApp directo:<br />{BIZ.phoneDisplay}
                  </h2>
                  <p className="mt-3 text-sm font-semibold" style={{ color: C.tinta }}>
                    También atienden al {BIZ.phoneAlt} · Aceptan Webpay y tarjetas
                    (Visa, Mastercard, Redcompra y más).
                  </p>
                </div>
                <div className={`${mono.className} text-xs space-y-2 border-l-0 md:border-l-2 border-dashed md:pl-6`} style={{ borderColor: C.line, color: C.tinta }}>
                  {HORARIO.map(([d, h]) => (
                    <p key={d} className="flex justify-between gap-4"><span>{d}</span><strong>{h}</strong></p>
                  ))}
                  <p style={{ color: C.muted }}>Horario publicado en su ficha de Google.</p>
                </div>
              </div>
            </Ticket>
          </Reveal>
        </div>
      </section>

      {/* ── Vales y cupones ── */}
      <section id="vales" className="py-14 md:py-20" style={{ backgroundColor: C.cielo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.muted }}>Lo que avisan en su Facebook</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none`} style={{ color: C.navy }}>
              Tus vales<br />valen aquí
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {VALES.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 70}>
                <Ticket color={C.papel} className="h-full">
                  <figure className="p-3 pb-0">
                    <Image src={`${IMG}/${v.img}`} alt={`Aviso de Vitugas: ${v.titulo}`} width={640} height={640} className="w-full aspect-square object-cover border border-dashed" style={{ borderColor: C.line }} />
                  </figure>
                  <div className="p-4">
                    <p className={`${display.className} text-xl uppercase`} style={{ color: C.navy }}>{v.titulo}</p>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.muted }}>{v.bajada}</p>
                  </div>
                </Ticket>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              * Beneficios publicados por Vitugas en su página de Facebook; condiciones según cada programa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none text-white`}>
              Rapidez que<br />se nota
            </h2>
            <div className={`${mono.className} text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.7)' }}>
              <Stars value={5} color={C.amarillo} /> {BIZ.rating} / 5 · {BIZ.reviews} reseñas en Google
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <blockquote className="h-full p-5 border-2" style={{ backgroundColor: C.papel, borderColor: '#000', boxShadow: `5px 5px 0 ${C.amarillo}` }}>
                  <p className="text-sm leading-relaxed font-semibold" style={{ color: C.tinta }}>“{r.t}”</p>
                  <footer className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>{r.a}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dónde ── */}
      <section id="donde" className="py-14 md:py-20" style={{ backgroundColor: C.cielo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.muted }}>Dónde están</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none`} style={{ color: C.navy }}>
              Quebrada de Agua,<br />San Clemente
            </h2>
            <address className="not-italic mt-4 text-sm leading-relaxed font-semibold" style={{ color: C.tinta }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}<br />
              WhatsApp {BIZ.phoneDisplay} · {BIZ.phoneAlt}<br />
              Facebook <a href={BIZ.facebookUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{BIZ.facebook}</a>
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wide border-2"
              style={{ borderColor: C.navy, color: C.navy }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
          <Reveal>
            <div className="border-2 overflow-hidden" style={{ borderColor: C.navy, boxShadow: `8px 8px 0 ${C.amarillo}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20">
          <p className={`${display.className} text-lg uppercase`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed mb-1.5" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
          </address>
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfonos,
            horario y reseñas son reales (ficha de Google y Facebook del
            local); el diseño es de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
