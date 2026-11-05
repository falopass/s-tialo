import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  crema: '#FBF6EE',
  coral: '#E8755A',
  // coral oscurecido: el coral puro da 2,7:1 sobre crema y no pasa
  // contraste en texto chico; esta versión llega a ~5,5:1.
  coralDeep: '#A64832',
  menta: '#8FBFA8',
  mostaza: '#E9B44C',
  tinta: '#241F1C',
  soft: '#584F45',
  line: 'rgba(36,31,28,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'baby-angus',
  title: 'Baby Angus Osorno — Ropa infantil en Consistorial 718',
  description:
    'Tienda de ropa infantil en el centro de Osorno. Consulta tallas y prendas por WhatsApp.',
  image: '/demos/baby-angus/hero.webp',
})

const NAV_LINKS = [
  { label: 'El perchero', href: '#perchero' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

const STRIP = ['Ropa infantil', 'Osorno', 'Consistorial 718', 'Baby Angus']

const PERCHERO = [
  { src: `${IMG}/ropa1.webp`, alt: 'Prendas infantiles colgadas en la tienda Baby Angus', tag: 'Prenda N° 1' },
  { src: `${IMG}/ropa2.webp`, alt: 'Más ropa infantil del perchero de Baby Angus', tag: 'Prenda N° 2' },
  { src: `${IMG}/detalle.webp`, alt: 'Detalle de una prenda de Baby Angus Osorno', tag: 'El detalle' },
]

// Botón de cuatro ojos: separador del motivo de costura.
function Boton({ color = C.tinta, size = 14 }: { color?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="10" cy="10" r="9" fill="none" stroke={color} strokeWidth="1.8" />
      <circle cx="6.8" cy="6.8" r="1.3" fill={color} />
      <circle cx="13.2" cy="6.8" r="1.3" fill={color} />
      <circle cx="6.8" cy="13.2" r="1.3" fill={color} />
      <circle cx="13.2" cy="13.2" r="1.3" fill={color} />
    </svg>
  )
}

// Etiqueta de ropa: chip con ojal y borde punteado; entra con giro mínimo.
function Tag({
  children,
  bg = C.mostaza,
  fg = C.tinta,
  tilt = '-2deg',
  delay = 0,
}: {
  children: React.ReactNode
  bg?: string
  fg?: string
  tilt?: string
  delay?: number
}) {
  return (
    <span
      data-ba-tag
      className={`${display.className} inline-flex items-center gap-2.5 px-4 py-1.5 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.2em] rounded-[5px] border-2 border-dashed`}
      style={{ backgroundColor: bg, color: fg, borderColor: fg, ['--tilt' as string]: tilt, ['--ba-d' as string]: `${delay}ms` }}
    >
      <span
        className="w-[9px] h-[9px] rounded-full border-2 shrink-0"
        style={{ borderColor: fg }}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}

/**
 * Script del demo (una sola pieza, sin archivo cliente extra):
 * - IntersectionObserver dispara el rebote/giro con WAAPI (el.animate),
 *   que no toca atributos del DOM: tocar classList antes de hidratar
 *   gatilla warnings de hydration en React. Red de seguridad a 2,5 s.
 * - El perchero (#ba-track) avanza solo cada 3,6 s mientras está en
 *   pantalla, se pausa al arrastrar y retoma a los 6 s. Arrastre con
 *   mouse via pointer events; en táctil el scroll nativo alcanza.
 */
const SCRIPT = `(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('[data-ba-hang],[data-ba-tag]');
  var EASE = 'cubic-bezier(.34,1.4,.64,1)';

  function reveal(el){
    if (el._baDone) return;
    el._baDone = true;
    var cs = getComputedStyle(el);
    var d = parseFloat(cs.getPropertyValue('--ba-d')) || 0;
    if (el.hasAttribute('data-ba-tag')) {
      var tilt = (cs.getPropertyValue('--tilt') || '').trim() || '-2deg';
      el.animate(
        [{opacity:0,transform:'rotate(-10deg) translateY(8px)'},
         {opacity:1,transform:'rotate(' + tilt + ') translateY(0)'}],
        {duration:600, delay:d, easing:EASE, fill:'both'}
      );
    } else {
      el.animate(
        [{opacity:0,transform:'translateY(-20px) rotate(-5deg)'},
         {opacity:1,transform:'translateY(0) rotate(2.4deg)',offset:.55},
         {opacity:1,transform:'rotate(-1.3deg)',offset:.76},
         {opacity:1,transform:'rotate(0deg)'}],
        {duration:950, delay:d, easing:EASE, fill:'both'}
      );
    }
  }

  if (!reduce) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.18 });
    items.forEach(function(el){ io.observe(el); });
    setTimeout(function(){ items.forEach(reveal); }, 2500);
  }

  var track = document.getElementById('ba-track');
  if (!track || reduce) return;
  var timer = null, resume = null, onScreen = true;

  function step(){
    var max = track.scrollWidth - track.clientWidth;
    if (max <= 8) return;
    var next = track.scrollLeft + track.clientWidth * 0.62;
    if (track.scrollLeft >= max - 8) next = 0;
    track.scrollTo({ left: next, behavior: 'smooth' });
  }
  function start(){ if (!timer && onScreen && !document.hidden) timer = setInterval(step, 3600); }
  function stop(){ if (timer) { clearInterval(timer); timer = null; } }
  function poke(){ stop(); if (resume) clearTimeout(resume); resume = setTimeout(start, 6000); }

  var vio = new IntersectionObserver(function(entries){
    onScreen = entries[0].isIntersecting;
    if (onScreen) start(); else stop();
  }, { threshold: 0.2 });
  vio.observe(track);
  document.addEventListener('visibilitychange', function(){
    if (document.hidden) stop(); else if (onScreen) start();
  });
  start();

  ['pointerdown','wheel','touchstart'].forEach(function(ev){
    track.addEventListener(ev, poke, { passive: true });
  });

  var down = false, x0 = 0, l0 = 0;
  track.addEventListener('pointerdown', function(e){
    if (e.pointerType !== 'mouse') return;
    down = true; x0 = e.clientX; l0 = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
    track.classList.add('ba-drag');
  });
  track.addEventListener('pointermove', function(e){
    if (!down) return;
    track.scrollLeft = l0 - (e.clientX - x0);
  });
  ['pointerup','pointercancel'].forEach(function(ev){
    track.addEventListener(ev, function(){ down = false; track.classList.remove('ba-drag'); });
  });
})();`

export default function BabyAngusPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* Estado previo a la entrada; el script las anima con WAAPI.
           hang: cae colgada del botón y se mece. tag: giro mínimo. */
        [data-ba-hang]{opacity:0;transform:translateY(-20px) rotate(-5deg);transform-origin:top center}
        [data-ba-tag]{opacity:0;transform:rotate(-10deg) translateY(8px);transform-origin:left center}
        .ba-btn{transition:transform .18s ease,filter .18s ease}
        .ba-btn:hover{transform:translateY(-2px);filter:brightness(1.05)}
        .ba-btn:active{transform:scale(.97)}
        .ba-btn:focus-visible{outline:3px solid ${C.coralDeep};outline-offset:3px}
        #ba-track{scrollbar-width:none;-ms-overflow-style:none;cursor:grab}
        #ba-track::-webkit-scrollbar{display:none}
        #ba-track.ba-drag{cursor:grabbing;scroll-snap-type:none}
        @media (prefers-reduced-motion: reduce){
          [data-ba-hang],[data-ba-tag]{opacity:1;transform:none;animation:none}
          .ba-btn{transition:none}
        }
      `}</style>


      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(251,246,238,0.95)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.coral,
          btnInk: C.tinta,
        }}
      />

      {/* ── Hero ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.tinta }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Prenda de ropa infantil de Baby Angus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(36,31,28,0.5) 0%, rgba(36,31,28,0.12) 42%, rgba(36,31,28,0.88) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-40">
          <div className="mb-5">
            <Tag bg={C.mostaza} fg={C.tinta} tilt="-3deg">
              Osorno · Ropa infantil
            </Tag>
          </div>
          <Reveal delay={80}>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.01em] text-[clamp(2.7rem,10vw,6.2rem)] mb-5 max-w-3xl`}
              style={{ color: '#FFFFFF' }}
            >
              Para los que
              <br />
              crecen{' '}
              <span style={{ color: C.mostaza }}>rápido.</span>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-lg mb-8 font-medium"
              style={{ color: 'rgba(255,255,255,0.88)' }}
            >
              {BIZ.rubro} en {BIZ.address}, en el centro de {BIZ.city}.
              Ven a ver el perchero o escribe por WhatsApp.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ba-btn font-bold text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.coral, color: C.tinta }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#perchero"
                className={`${display.className} ba-btn font-bold text-base px-7 py-2.5 rounded-full tap-44`}
                style={{ color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.55)' }}
              >
                Ver el perchero
              </a>
            </div>
          </Reveal>
          <div className="mt-6">
            <Tag bg={C.crema} fg={C.tinta} tilt="1.5deg" delay={250}>
              {BIZ.rating} ★ · {BIZ.reviews} opiniones en Google
            </Tag>
          </div>
        </div>
      </section>

      {/* ── Franja cosida ── */}
      <div
        className="border-y-2 border-dashed py-3"
        style={{ backgroundColor: C.menta, borderColor: C.tinta }}
      >
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm md:text-base font-extrabold uppercase tracking-[0.14em]`}
          style={{ color: C.tinta }}
        >
          {STRIP.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-4">
              {i > 0 && <Boton color={C.tinta} size={13} />}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── El perchero: carrusel que avanza solo y se arrastra ── */}
      <section id="perchero" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8 md:mb-10">
          <div className="mb-4">
            <Tag bg={C.coral} fg={C.tinta} tilt="-2deg">
              El perchero
            </Tag>
          </div>
          <Reveal>
            <h2
              className={`${display.className} font-extrabold leading-[1.0] text-[clamp(2rem,6vw,3.6rem)] mb-3`}
            >
              Del perchero,
              <br />
              recién colgada.
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.soft }}>
              Ropa real de la tienda. El perchero avanza solo, y también
              puedes arrastrarlo.
            </p>
          </Reveal>
        </div>
        {/* la barra del perchero */}
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div
            className="border-t-[3px] border-dashed"
            style={{ borderColor: C.tinta }}
            aria-hidden="true"
          />
        </div>
        <div
          id="ba-track"
          className="mt-[-3px] flex gap-5 md:gap-6 overflow-x-auto snap-x snap-proximity px-5 md:px-8 pt-6 pb-4 select-none"
        >
          {PERCHERO.map((p, i) => (
            <div
              key={p.src}
              data-ba-hang
              className="snap-start shrink-0 w-[72%] sm:w-[46%] lg:w-[31%]"
              style={{ ['--ba-d' as string]: `${i * 110}ms` }}
            >
              <div className="relative">
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-7 h-7 rounded-full border-2 flex items-center justify-center"
                  style={{ backgroundColor: C.mostaza, borderColor: C.tinta }}
                  aria-hidden="true"
                >
                  <Boton color={C.tinta} size={13} />
                </span>
                <div
                  className="relative overflow-hidden rounded-[18px] border-2 aspect-[3/4]"
                  style={{ borderColor: C.tinta }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 72vw"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="mt-3">
                <Tag bg={C.crema} fg={C.coralDeep} tilt={i % 2 ? '1.6deg' : '-1.6deg'} delay={140 + i * 110}>
                  {p.tag}
                </Tag>
              </div>
            </div>
          ))}
        </div>
        <p
          className="max-w-6xl mx-auto px-5 md:px-8 text-xs font-bold uppercase tracking-[0.18em] flex items-center gap-2"
          style={{ color: C.soft }}
        >
          <Boton color={C.soft} size={12} />
          Arrastra para ver más
        </p>
      </section>

      {/* ── La tienda ── */}
      <section
        id="tienda"
        className="scroll-mt-20 border-y-2 border-dashed"
        style={{ backgroundColor: C.menta, borderColor: C.tinta }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 lg:col-span-6">
            <div data-ba-hang className="relative">
              <span
                className="absolute -top-3 left-10 z-10 w-7 h-7 rounded-full border-2 flex items-center justify-center"
                style={{ backgroundColor: C.mostaza, borderColor: C.tinta }}
                aria-hidden="true"
              >
                <Boton color={C.tinta} size={13} />
              </span>
              <span
                className="absolute -top-3 right-10 z-10 w-7 h-7 rounded-full border-2 flex items-center justify-center"
                style={{ backgroundColor: C.mostaza, borderColor: C.tinta }}
                aria-hidden="true"
              >
                <Boton color={C.tinta} size={13} />
              </span>
              <div
                className="relative overflow-hidden rounded-[18px] border-2 aspect-[4/3]"
                style={{ borderColor: C.tinta }}
              >
                <Image
                  src={`${IMG}/tienda.webp`}
                  alt="La tienda Baby Angus por dentro: percheros y ropa infantil"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </Reveal>
          <div className="col-span-12 lg:col-span-6">
            <div className="mb-4">
              <Tag bg={C.mostaza} fg={C.tinta} tilt="2deg">
                La tienda
              </Tag>
            </div>
            <Reveal>
              <h2
                className={`${display.className} font-extrabold leading-[1.0] text-[clamp(2rem,6vw,3.4rem)] mb-5`}
              >
                Una tienda con onda,
                <br />
                en pleno Consistorial.
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.tinta }}>
                <p>
                  {BIZ.name} está en {BIZ.address}, una de las calles
                  comerciales del centro de {BIZ.city}. Ropa infantil
                  elegida con cariño, de una tienda chica que atiende
                  de cerca.
                </p>
                <ul className="space-y-2.5 pt-1">
                  <li className="flex items-start gap-2.5">
                    <Boton color={C.tinta} size={14} />
                    <span>
                      <strong>{BIZ.address}</strong>, {BIZ.city},{' '}
                      {BIZ.region}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Boton color={C.tinta} size={14} />
                    <span>
                      Horario: no está publicado. Consúltalo por
                      WhatsApp o Facebook antes de ir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Boton color={C.tinta} size={14} />
                    <span>
                      Activa en Facebook (
                      <a
                        href={BIZ.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline underline-offset-4 decoration-2 tap-44"
                        style={{ color: C.coralDeep, textDecorationColor: 'rgba(166,72,50,0.4)' }}
                      >
                        {BIZ.fbUser}
                      </a>
                      ); última publicación: {BIZ.fbLastPost}.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Confianza ── */}
      <section id="opiniones" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-4">
            <Tag bg={C.crema} fg={C.coralDeep} tilt="-2deg">
              Opiniones
            </Tag>
          </div>
          <div className="grid grid-cols-12 gap-8 items-center">
            <Reveal className="col-span-12 md:col-span-5">
              <p
                className={`${display.className} font-extrabold leading-none text-[clamp(4.5rem,14vw,8rem)]`}
                style={{ color: C.coralDeep }}
              >
                {BIZ.rating}
              </p>
              <div className="mt-3">
                <Stars value={4.8} color={C.coral} size={26} />
              </div>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-7" delay={120}>
              <h2
                className={`${display.className} font-extrabold leading-[1.05] text-[clamp(1.7rem,4.5vw,2.8rem)] mb-4`}
              >
                Las familias de Osorno
                <br />
                ya la conocen.
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.soft }}>
                {BIZ.reviews} opiniones reales en su ficha de Google,
                con un promedio de {BIZ.rating} sobre 5.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block text-sm font-extrabold uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.coralDeep, textDecorationColor: 'rgba(166,72,50,0.4)' }}
              >
                Ver la ficha real en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Dónde ── */}
      <section
        id="donde"
        className="scroll-mt-20 border-t-2 border-dashed"
        style={{ borderColor: C.tinta }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="mb-4">
            <Tag bg={C.mostaza} fg={C.tinta} tilt="1.8deg">
              Dónde queda
            </Tag>
          </div>
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-stretch">
            <Reveal className="col-span-12 lg:col-span-5">
              <h2
                className={`${display.className} font-extrabold leading-[1.02] text-[clamp(2rem,6vw,3.4rem)] mb-5`}
              >
                Consistorial 718,
                <br />
                centro de Osorno.
              </h2>
              <address
                className="not-italic text-sm md:text-base leading-relaxed mb-6"
                style={{ color: C.soft }}
              >
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ba-btn inline-block font-bold text-sm md:text-base px-6 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Abrir en Google Maps
              </a>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-7" delay={120}>
              <div
                className="relative w-full overflow-hidden rounded-[18px] border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]"
                style={{ borderColor: C.tinta }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section id="contacto" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <div className="mb-6 flex justify-center">
            <Tag bg={C.mostaza} fg={C.tinta} tilt="-2deg">
              Escríbenos
            </Tag>
          </div>
          <Reveal>
            <h2
              className={`${display.className} font-extrabold leading-[1.0] text-[clamp(2.2rem,7vw,4.4rem)] mb-5`}
              style={{ color: C.crema }}
            >
              ¿Buscas ropa para
              <br />
              los que <span style={{ color: C.coral }}>crecen rápido?</span>
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8"
              style={{ color: 'rgba(251,246,238,0.85)' }}
            >
              Consulta tallas, precios y lo nuevo del perchero directo
              por WhatsApp, o llama al {BIZ.phoneDisplay}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ba-btn font-bold text-base px-8 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.coral, color: C.tinta }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} ba-btn font-bold text-base px-8 py-2.5 rounded-full tap-44`}
                style={{ color: C.crema, border: '2px solid rgba(251,246,238,0.5)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer
        className="border-t-2 border-dashed"
        style={{ backgroundColor: C.crema, borderColor: C.tinta, color: C.tinta }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className={`${display.className} font-extrabold text-lg`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.soft }}>
              {BIZ.address} · {BIZ.city},{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 tap-44"
              >
                Facebook
              </a>
            </address>
          </div>
          <p className="mt-4 pt-4 border-t text-[11px] leading-relaxed" style={{ borderColor: C.line, color: C.soft }}>
            Sitio de ejemplo preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.coralDeep }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name}.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.coralDeep }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
    </div>
  )
}
