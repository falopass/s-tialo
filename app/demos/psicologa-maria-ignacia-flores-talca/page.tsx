import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, TEMAS, BIO, PROCESO, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la ficha de primera sesión». Papel crema, tinta
 * cálida y un solo acento de arcilla, como la alfombra tejida de su
 * propia consulta. Listas de índice con números, números romanos para
 * el proceso y fotos reales de su sala en marcos de papel. Calmo,
 * íntimo, sin ruido.
 */
const C = {
  paper: '#F6F1E7',
  paperDeep: '#EEE5D4',
  ink: '#26211B',
  inkSoft: 'rgba(38,33,27,0.66)',
  clay: '#9C4A2D',
  claySoft: 'rgba(156,74,45,0.12)',
  line: 'rgba(38,33,27,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'psicologa-maria-ignacia-flores-talca',
  title: `${BIZ.nameLegal} · Psicóloga clínica en Talca`,
  description:
    'Psicóloga clínica UCM en el Centro Las Rastras de Talca. Atiende a adultos y jóvenes desde los 12 años: ansiedad, depresión, autoestima, duelos y relaciones.',
  image: `${IMG}/consulta.webp`,
})

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}, así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function PsicologaMariaIgnaciaPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span className={display.className} style={{ letterSpacing: '0.02em' }}>{BIZ.name}</span>}
        links={[
          { label: 'Temas', href: '#temas' },
          { label: 'Ella', href: '#ella' },
          { label: 'Opiniones', href: '#opiniones' },
          { label: 'Consulta', href: '#consulta' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        theme={{ over: 'light', bar: 'rgba(246,241,231,0.94)', ink: C.ink, line: C.line, btnBg: C.clay, btnInk: '#FBF6EC' }}
      />

      {/* Portada: su consulta real + retrato */}
      <header id="inicio" className="pt-28 pb-14 md:pt-36 md:pb-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6">
            <Reveal>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.clay }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} mt-4 text-[36px] md:text-[54px] font-medium leading-[1.06] tracking-[-0.01em]`}>
                Un espacio seguro para poner en palabras lo que te pasa
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 max-w-md text-[15px] md:text-[17px] leading-relaxed" style={{ color: C.inkSoft }}>
                Psicóloga clínica UCM. Adultos y jóvenes desde los 12 años, en el Centro Las Rastras de Talca.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[48px] px-7 text-sm font-semibold tracking-wide rounded-full active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.clay, color: '#FBF6EC' }}
                >
                  Agendar primera sesión
                </a>
                <span className={`${mono.className} flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.inkSoft }}>
                  <Stars value={BIZ.rating} color={C.clay} className="w-3.5 h-3.5" />
                  {BIZ.ratingLabel} · {BIZ.reviews} opiniones
                </span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/4.6', boxShadow: '0 24px 60px -30px rgba(38,33,27,0.45)' }}>
                  <Image
                    src={`${IMG}/consulta.webp`}
                    alt="La consulta de María Ignacia en el Centro Las Rastras: sillas blancas, alfombra tejida de colores y muro de fotografías"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 left-5 right-5 md:right-auto md:w-[300px] rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ backgroundColor: '#FBF6EC', border: `1px solid ${C.line}`, boxShadow: '0 12px 30px -16px rgba(38,33,27,0.35)' }}
                >
                  <Image
                    src={`${IMG}/maria.webp`}
                    alt="María Ignacia Flores, psicóloga clínica"
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className={`${display.className} text-[15px] font-medium leading-tight`}>{BIZ.nameLegal}</p>
                    <p className={`${mono.className} text-[9px] uppercase tracking-[0.16em] mt-0.5`} style={{ color: C.clay }}>
                      Su propia consulta · Centro Las Rastras
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Temas: índice de lo que llega a la consulta */}
      <section id="temas" className="py-14 md:py-20" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.clay }}>
              Lo que trae a la consulta
            </p>
            <h2 className={`${display.className} text-3xl md:text-[42px] font-medium leading-[1.08]`}>
              Nada de lo que te pasa es demasiado chico o demasiado grande
            </h2>
          </Reveal>
          <div className="mt-10">
            {TEMAS.map((t, i) => (
              <Reveal key={t.tema} delay={i * 60}>
                <div className="py-5 flex items-baseline gap-5" style={{ borderTop: `1px solid ${C.line}` }}>
                  <span className={`${mono.className} text-[12px] shrink-0`} style={{ color: C.clay }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-[21px] md:text-2xl font-medium`}>{t.tema}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.inkSoft }}>
                      {t.detalle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: `1px solid ${C.line}` }} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Ella: retrato + bio real */}
      <section id="ella" className="py-14 md:py-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative max-w-[340px] mx-auto">
                <div className="absolute -inset-2.5 rounded-2xl" style={{ border: `1.5px solid ${C.clay}`, opacity: 0.35 }} aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src={`${IMG}/maria.webp`}
                    alt="Retrato de María Ignacia Flores en su consulta"
                    fill
                    sizes="(max-width: 768px) 80vw, 340px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.clay }}>
                Quién te acompaña
              </p>
              <blockquote className={`${displayItalic.className} text-[22px] md:text-[28px] leading-snug`}>
                «{BIO.quote}»
              </blockquote>
              <p className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.inkSoft }}>
                Así describen la terapia sus propios consultantes
              </p>
              <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.inkSoft }}>
                {BIO.cuerpo}
              </p>
              <ul className="mt-6 space-y-2.5">
                {BIO.credenciales.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[13.5px]">
                    <span className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.clay }} aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* El espacio: tres vistas reales de su consulta */}
      <section className="pb-14 md:pb-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: `${IMG}/muro.webp`, alt: 'Muro de fotografías en blanco y negro y colgante de macramé en la consulta', ratio: '3/4' },
              { src: `${IMG}/sala.webp`, alt: 'Sillas blancas sobre alfombra tejida de colores en la sala de consulta', ratio: '3/4' },
              { src: `${IMG}/edificio.webp`, alt: 'Fachada del Centro Las Rastras III, donde está la consulta', ratio: '3/4' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: '#FBF6EC', border: `1px solid ${C.line}` }}>
                  <div className="relative overflow-hidden rounded-md" style={{ aspectRatio: f.ratio }}>
                    <Image src={f.src} alt={f.alt} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso: números romanos, como notas de ficha */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: '#D9A98F' }}>
              Cómo se parte
            </p>
            <h2 className={`${display.className} text-3xl md:text-[42px] font-medium leading-[1.08]`}>
              Tres pasos y ya estás conversando con ella
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-10">
            {PROCESO.map((p, i) => (
              <Reveal key={p.paso} delay={i * 100}>
                <div style={{ borderTop: `1.5px solid ${'#D9A98F'}` }} className="pt-5">
                  <p className={`${display.className} text-[34px] font-light`} style={{ color: '#D9A98F' }}>
                    {p.paso}
                  </p>
                  <h3 className={`${display.className} mt-2 text-xl font-medium`}>{p.nombre}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'rgba(246,241,231,0.72)' }}>
                    {p.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-7 text-sm font-semibold tracking-wide rounded-full active:scale-95 transition-transform tap-44"
                style={{ backgroundColor: '#FBF6EC', color: C.ink }}
              >
                Dar el primer paso por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Opiniones reales */}
      <section id="opiniones" className="py-14 md:py-20" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.clay }}>
                Lo que cuentan quienes ya fueron
              </p>
              <h2 className={`${display.className} text-3xl md:text-[42px] font-medium`}>
                {BIZ.ratingLabel} de 5 en Google, en {BIZ.reviews} opiniones
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <blockquote className="text-center">
                  <p className={`${displayItalic.className} text-[19px] md:text-[22px] leading-snug`}>
                    «{r.texto}»
                  </p>
                  <footer className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.clay }}>
                    {r.nombre} · {r.hace} · 5 estrellas
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consulta: horario + mapa */}
      <section id="consulta" className="py-14 md:py-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.clay }}>
                La consulta
              </p>
              <h2 className={`${display.className} text-3xl md:text-[40px] font-medium leading-[1.08]`}>
                Piso 5 del Centro Las Rastras, con ascensor y estacionamiento
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.inkSoft }}>
                {BIZ.addressCalle} · {BIZ.address}, {BIZ.city}.
              </p>
              <div className="mt-6 rounded-xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                {HORARIO.map((h, i) => (
                  <div
                    key={h.dia}
                    className="flex items-center justify-between px-4 py-3"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#FBF6EC' : 'transparent',
                      borderTop: i === 0 ? undefined : `1px solid ${C.line}`,
                    }}
                  >
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.inkSoft }}>{h.dia}</span>
                    <span className="text-[13px] font-medium">{h.horas}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 text-sm font-semibold rounded-full active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.clay, color: '#FBF6EC' }}
                >
                  Agendar hora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 text-sm font-semibold rounded-full tap-44"
                  style={{ border: `1px solid ${C.clay}`, color: C.clay }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="p-1.5 rounded-xl" style={{ backgroundColor: '#FBF6EC', border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.nameLegal}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full min-h-[320px] h-full rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: '#EFE7D7', borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-lg leading-tight`}>{BIZ.nameLegal}</p>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1`} style={{ color: C.clay }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <address className="not-italic text-xs leading-relaxed mt-3" style={{ color: C.inkSoft }}>
              {BIZ.addressCalle} · {BIZ.address}, {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
              {' · '}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Instagram</a>
              {' · '}
              <a href={BIZ.doctoralia} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Doctoralia</a>
            </address>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.inkSoft }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} opiniones
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
