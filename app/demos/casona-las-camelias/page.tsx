import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_FECHA, FB_URL, SITE_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

export const metadata = demoMetadata({
  slug: 'casona-las-camelias',
  title: `${BIZ.name} — Centro de eventos en ${BIZ.city}`,
  description:
    'Casona de eventos en Villaseca, Buin: banquetería con todo incluido desde 50 invitados, producción de Eventos Del Vecchio. Cotiza tu fecha por WhatsApp.',
})

const cormorant = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' }],
})
const jost = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const T = {
  ivory: '#F7F2E8',
  paper: '#FCF9F2',
  cream: '#EFE6D3',
  burg: '#5C1F2A',
  burgDeep: '#40151D',
  wine: '#7A3342',
  camellia: '#C4607B',
  gold: '#A5803C',
  goldDeep: '#8A6B28',
  goldSoft: '#CBA96B',
  ink: '#27181B',
  soft: '#6E5350',
  line: '#DCC9AE',
}

const NAV = [
  { href: '#jornada', label: 'El día' },
  { href: '#banqueteria', label: 'Banquetería' },
  { href: '#galeria', label: 'Galería' },
  { href: '#cotizar', label: 'Cotizar' },
]

const JORNADA = [
  { n: 'I',   t: 'La llegada',    d: 'El corredor de la casona recibe a los invitados antes de la ceremonia.',         img: `${IMG}/corredor.webp`, alt: 'Corredor interior de la casona con sillones y cerámicas' },
  { n: 'II',  t: 'El cóctel',     d: 'Tablas, brochetas y copas servidas al patio mientras cae la tarde.',              img: `${IMG}/coctel.webp`,   alt: 'Copas de champán y bandeja de cóctel del servicio' },
  { n: 'III', t: 'El banquete',   d: 'Menús servidos a la mesa por el equipo de banquetería Del Vecchio.',              img: `${IMG}/platos.webp`,   alt: 'Plato de banquetería servido con carne y salsa' },
  { n: 'IV',  t: 'La celebración',d: 'Mesas imperiales con candelabros y la pista encendida hasta el final.',           img: `${IMG}/hero.webp`,     alt: 'Salón principal de la casona con mesas montadas y luces' },
]

const SERVICIOS = [
  { n: '01', t: 'Banquetería con todo incluido',  d: 'Cena, cóctel, bebidas y servicio a la mesa, coordinados por un solo equipo.' },
  { n: '02', t: 'Montaje y ambientación',         d: 'Mesas, mantelería, iluminación y salas de estar dispuestas en la casona.' },
  { n: '03', t: 'Coffee breaks y snack bars',     d: 'Estaciones de café, láminas dulces y bebestibles para pausas y recepciones.' },
  { n: '04', t: 'Eventos de empresa',             d: 'Aniversarios, navidades y lanzamientos con catering formal en la RM.' },
]

const GALERIA = [
  { img: `${IMG}/tabla.webp`,   alt: 'Tabla de quesos y frutos secos del servicio',         t: 'Tabla de aperitivo' },
  { img: `${IMG}/coffee.webp`,  alt: 'Coffee break servido en bandeja con tacitas',         t: 'Coffee break' },
  { img: `${IMG}/salon.webp`,   alt: 'Salón de la casona montado para la celebración',      t: 'El salón' },
  { img: `${IMG}/montaje.webp`, alt: 'Mesas imperiales en el gran salón con candelabros',   t: 'El gran montaje' },
]

const REGLAS = [
  { k: 'Desde',          v: '50 invitados',  d: 'Mínimo por evento según la ficha publicada' },
  { k: 'Operando desde', v: '2013',          d: 'Eventos Del Vecchio, productor de la casona' },
  { k: 'Cobertura',      v: 'RM, V y VI',    d: 'Buin y regiones Metropolitana, Valparaíso y O’Higgins' },
  { k: 'Nota en Google', v: `${BIZ.rating} / 5`, d: `${BIZ.ratingCount} reseñas publicadas` },
]

const GLIFO = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
    <circle cx="6" cy="6" r="2.2" fill="currentColor" />
    <path d="M6 0v3M6 9v3M0 6h3M9 6h3" stroke="currentColor" strokeWidth="1" />
  </svg>
)

export default function CasonaLasCameliasPage() {
  return (
    <main
      className={`${jost.className} casona`}
      style={{ background: T.ivory, color: T.ink, minHeight: '100vh', overflowX: 'hidden' }}
    >
      <style>{`
        .casona .it { font-family: ${cormorant.style.fontFamily}, Georgia, serif; font-style: italic; font-weight: 500; }
        .casona .mo { font-family: ${mono.style.fontFamily}, 'Courier New', monospace; }
        .casona .sv { font-family: ${cormorant.style.fontFamily}, Georgia, serif; font-weight: 500; }
        .casona a, .casona button { -webkit-tap-highlight-color: transparent; }

        .casona .h2 {
          font-family: ${cormorant.style.fontFamily}, Georgia, serif; font-style: italic; font-weight: 500;
          font-size: clamp(2.1rem, 6.8vw, 4rem); line-height: 1.04; letter-spacing: -0.01em; color: ${T.burg};
        }
        .casona .kicker {
          font-family: ${mono.style.fontFamily}; font-size: 10px; letter-spacing: 0.4em;
          text-transform: uppercase; color: ${T.goldDeep}; display: flex; align-items: center; gap: 10px;
        }
        .casona .kicker::before { content: ''; width: 26px; height: 1px; background: ${T.gold}; flex: none; }
        .casona .btn-burg {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          min-height: 48px; padding: 0 22px; background: ${T.burg}; color: ${T.ivory};
          font-family: ${mono.style.fontFamily}; font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; text-decoration: none; border: 1px solid ${T.burg};
          transition: background 0.2s, transform 0.15s;
        }
        .casona .btn-burg:hover { background: ${T.burgDeep}; transform: translateY(-1px); }
        .casona .btn-ghost {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          min-height: 44px; padding: 0 18px; background: transparent; color: ${T.ivory};
          font-family: ${mono.style.fontFamily}; font-size: 11px; letter-spacing: 0.18em;
          text-transform: uppercase; text-decoration: none; border: 1px solid rgba(247,242,232,0.55);
        }
        .casona .btn-ghost-burg { color: ${T.burg}; border-color: ${T.burg}; }
        .casona .frame { border: 1px solid rgba(247,242,232,0.35); padding: clamp(26px,5vw,60px); position: relative; }
        .casona .frame::before {
          content: ''; position: absolute; inset: 8px; border: 1px solid rgba(247,242,232,0.22); pointer-events: none;
        }
        .casona .jnum {
          font-family: ${cormorant.style.fontFamily}; font-style: italic; font-weight: 500;
          font-size: 30px; color: ${T.gold}; line-height: 1;
        }
        .casona .jcard {
          background: ${T.paper}; border: 1px solid ${T.line}; padding: 22px;
          display: flex; flex-direction: column; gap: 12px; position: relative;
        }
        .casona .jcard::before {
          content: ''; position: absolute; top: 0; left: 22px; right: 22px; height: 3px;
          background: linear-gradient(90deg, ${T.gold}, transparent);
        }
        .casona .svc {
          border-top: 1px solid ${T.line}; padding: 26px 0; display: grid; gap: 10px;
          grid-template-columns: 48px 1fr; align-items: start;
        }
        .casona .gframe { border: 1px solid ${T.line}; background: ${T.paper}; padding: 10px; }
        .casona .gframe figcaption {
          font-family: ${mono.style.fontFamily}; font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; color: ${T.soft}; padding: 10px 4px 4px;
        }
        .casona .reg {
          border-left: 3px solid ${T.gold}; background: ${T.paper}; border: 1px solid ${T.line};
          border-left-width: 3px; padding: 18px;
        }
        .casona .flor { display: inline-flex; color: ${T.gold}; }
        .casona .dotted { border-top: 1px dashed ${T.line}; }
        .casona .sealring { border: 1px solid rgba(247,242,232,0.5); border-radius: 999px; }
        .casona [id] { scroll-margin-top: 76px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV}
        waLink={WA_LINK_FECHA}
        ctaLabel="Cotizar fecha"
        fontClass={cormorant.className}
        theme={{
          over: 'dark',
          bar: 'rgba(64,21,29,0.94)',
          ink: T.ivory,
          line: 'rgba(247,242,232,0.2)',
          btnBg: T.gold,
          btnInk: T.ink,
        }}
      />

      {/* HERO — la invitación */}
      <header style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'stretch' }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Salón principal de Casona Las Camelias con mesas montadas e iluminación"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(40,13,20,0.62) 0%, rgba(40,13,20,0.42) 40%, rgba(30,10,15,0.88) 100%)' }} />

        <div
          className="frame"
          style={{
            position: 'relative', zIndex: 1, margin: 'clamp(14px,3vw,32px)', flex: 1,
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            paddingTop: 110, gap: 26, maxWidth: 1280, width: 'auto',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
            <Image src={`${IMG}/logo.webp`} alt="Sello de Eventos Del Vecchio" width={92} height={92}
              className="sealring" style={{ objectFit: 'cover', flex: 'none' }} />
            <div className="mo" style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: T.goldSoft, textAlign: 'right', lineHeight: 1.9 }}>
              Invitación N° 01<br />{BIZ.city} · {BIZ.region}
            </div>
          </div>

          <div style={{ maxWidth: 720 }}>
            <div className="kicker" style={{ color: T.goldSoft }}>Centro de eventos · banquetería con todo incluido</div>
            <h1
              className="it"
              style={{ fontSize: 'clamp(2.9rem, 11vw, 6.8rem)', lineHeight: 0.98, color: T.ivory, margin: '18px 0 0', letterSpacing: '-0.015em' }}
            >
              Casona<br />Las Camelias
            </h1>
            <p className="mo" style={{ fontSize: 11, letterSpacing: '0.34em', textTransform: 'uppercase', color: T.goldSoft, margin: '18px 0 0' }}>
              de Villaseca · desde 2013
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <a href={WA_LINK_FECHA} target="_blank" rel="noopener noreferrer" className="btn-burg" style={{ background: T.ivory, color: T.burg, borderColor: T.ivory }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.7-1.3 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.1.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.6-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .1 0 .5-.2 1.2z" />
              </svg>
              Cotizar fecha
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
              </svg>
              {BIZ.address}, {BIZ.city}
            </a>
            <div className="mo" style={{ fontSize: 11, letterSpacing: '0.2em', color: T.ivory, display: 'flex', alignItems: 'center', gap: 8, padding: '0 4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill={T.goldSoft} aria-hidden>
                <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
              </svg>
              {BIZ.rating} · {BIZ.ratingCount} RESEÑAS
            </div>
          </div>

          <div className="mo dotted" style={{ borderColor: 'rgba(247,242,232,0.3)', paddingTop: 16, paddingRight: 72, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(247,242,232,0.75)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <span>Producción: {BIZ.producer}</span>
            <span>Eventos de 50 invitados en adelante</span>
          </div>
        </div>
      </header>

      {/* LA JORNADA */}
      <section id="jornada" style={{ padding: 'clamp(56px,9vw,110px) 20px', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div className="kicker">El día del evento</div>
          <h2 className="h2" style={{ margin: '14px 0 0', maxWidth: 640 }}>
            Un solo lugar,<br />cuatro momentos.
          </h2>
          <p style={{ color: T.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: '16px 0 0' }}>
            La fiesta completa ocurre dentro de la casona: llegada, cóctel, banquete y
            celebración, con un mismo equipo conduciendo cada paso.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 18, marginTop: 40 }}>
          {JORNADA.map((j, i) => (
            <Reveal key={j.n} delay={i * 90}>
              <article className="jcard">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="jnum">{j.n}</span>
                  <span className="flor">{GLIFO}</span>
                </div>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image src={j.img} alt={j.alt} fill sizes="(max-width: 720px) 88vw, 280px" style={{ objectFit: 'cover' }} />
                </div>
                <h3 className="sv" style={{ fontSize: 24, color: T.burg, margin: 0 }}>{j.t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: T.soft, margin: 0 }}>{j.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BANQUETERÍA — sobre marfil */}
      <section id="banqueteria" style={{ background: T.burg, color: T.ivory }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(56px,9vw,110px) 20px', display: 'grid', gap: 48, gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px,100%), 1fr))' }}>
          <Reveal>
            <div>
              <div className="kicker" style={{ color: T.goldSoft }}>Banquetería</div>
              <h2 className="h2" style={{ color: T.ivory, margin: '14px 0 0' }}>
                Un solo proveedor,<br />ninguna preocupación.
              </h2>
              <p style={{ color: 'rgba(247,242,232,0.82)', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: '16px 0 0' }}>
                El catering de {BIZ.producer} cubre cóctel, cena, bebidas y servicio: la
                organización completa queda en manos de un mismo equipo, desde el montaje
                hasta el último baile.
              </p>
              <div style={{ position: 'relative', aspectRatio: '4/3', marginTop: 28, overflow: 'hidden', border: '1px solid rgba(247,242,232,0.3)' }}>
                <Image
                  src={`${IMG}/casona.webp`}
                  alt="Corredor de la casona con mesa de mármol y flores frescas"
                  fill sizes="(max-width: 900px) 92vw, 480px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </Reveal>
          <div style={{ alignSelf: 'end' }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="svc" style={{ borderColor: 'rgba(247,242,232,0.25)' }}>
                  <span className="mo" style={{ fontSize: 11, letterSpacing: '0.2em', color: T.goldSoft, paddingTop: 5 }}>{s.n}</span>
                  <div>
                    <h3 className="sv" style={{ fontSize: 23, color: T.ivory, margin: '0 0 6px' }}>{s.t}</h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(247,242,232,0.75)', margin: 0 }}>{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA — láminas */}
      <section id="galeria" style={{ padding: 'clamp(56px,9vw,110px) 20px', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <div className="kicker">Láminas</div>
              <h2 className="h2" style={{ margin: '14px 0 0' }}>Del servicio de la casa.</h2>
            </div>
            <span className="mo" style={{ fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: T.soft }}>
              Fotos: {BIZ.site}
            </span>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginTop: 36 }}>
          {GALERIA.map((g, i) => (
            <Reveal key={g.t} delay={i * 80}>
              <figure className="gframe" style={{ margin: 0 }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image src={g.img} alt={g.alt} fill sizes="(max-width: 720px) 88vw, 280px" style={{ objectFit: 'cover' }} />
                </div>
                <figcaption>{g.t}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LA INVITACIÓN FINAL */}
      <section id="cotizar" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src={`${IMG}/montaje.webp`} alt="Salón con mesas imperiales montadas para la celebración" fill sizes="100vw" style={{ objectFit: 'cover' }} />
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(64,21,29,0.9)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: 'clamp(60px,9vw,120px) 20px' }}>
          <Reveal>
            <div className="frame" style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px,100%), 1fr))' }}>
              <div>
                <div className="kicker" style={{ color: T.goldSoft }}>Reserve su fecha</div>
                <h2 className="h2" style={{ color: T.ivory, margin: '14px 0 0' }}>
                  La casona espera<br />a sus invitados.
                </h2>
                <p style={{ color: 'rgba(247,242,232,0.82)', fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: '16px 0 0' }}>
                  Escríbanos por WhatsApp con la fecha estimada y el número de
                  invitados: el equipo de {BIZ.producer} responde con la propuesta
                  y la visita al recinto.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-burg" style={{ background: T.ivory, color: T.burg, borderColor: T.ivory }}>
                    {BIZ.phoneDisplay}
                  </a>
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                    </svg>
                    Facebook
                  </a>
                  <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    {BIZ.site}
                  </a>
                </div>
              </div>
              <div style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
                {REGLAS.map((r, i) => (
                  <Reveal key={r.k} delay={i * 70}>
                    <div className="reg" style={{ background: 'rgba(247,242,232,0.06)', borderColor: 'rgba(247,242,232,0.3)', borderLeftColor: T.goldSoft }}>
                      <div className="mo" style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: T.goldSoft }}>{r.k}</div>
                      <div className="sv" style={{ fontSize: 26, color: T.ivory, marginTop: 4 }}>{r.v}</div>
                      <div style={{ fontSize: 12, color: 'rgba(247,242,232,0.7)', marginTop: 4 }}>{r.d}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAPA */}
      <section style={{ padding: 'clamp(48px,7vw,90px) 20px', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div className="kicker">Cómo llegar</div>
              <h2 className="h2" style={{ margin: '12px 0 0', fontSize: 'clamp(1.7rem,4.5vw,2.6rem)' }}>
                {BIZ.address}, {BIZ.city}.
              </h2>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-ghost-burg">
              Abrir en Google Maps
            </a>
          </div>
          <div style={{ marginTop: 26, border: `1px solid ${T.line}`, padding: 8, background: T.paper }}>
            <LazyMap
              src={MAPS_EMBED}
              title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
              className="w-full h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ background: T.burgDeep, color: T.ivory, padding: '34px 20px calc(34px + env(safe-area-inset-bottom))' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Image src={`${IMG}/logo.webp`} alt="Sello de Eventos Del Vecchio" width={52} height={52} className="sealring" style={{ objectFit: 'cover' }} />
            <div>
              <div className="sv" style={{ fontSize: 19 }}>{BIZ.name}</div>
              <div className="mo" style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.goldSoft, marginTop: 3 }}>
                {BIZ.address} · {BIZ.city}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mo" style={{ fontSize: 11, letterSpacing: '0.16em', color: T.ivory, textDecoration: 'none', padding: '8px 0' }}>{BIZ.phoneDisplay}</a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="mo" style={{ fontSize: 11, letterSpacing: '0.16em', color: T.ivory, textDecoration: 'none', padding: '8px 0' }}>Facebook</a>
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="mo" style={{ fontSize: 11, letterSpacing: '0.16em', color: T.ivory, textDecoration: 'none', padding: '8px 0' }}>{BIZ.site}</a>
          </div>
        </div>
        <div className="mo" style={{ maxWidth: 1200, margin: '22px auto 0', paddingTop: 16, borderTop: '1px solid rgba(247,242,232,0.2)', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,242,232,0.55)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span>Demo sin afiliación — datos y fotos de {BIZ.site} y su ficha pública</span>
          <span>Producción: {BIZ.producer}</span>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
