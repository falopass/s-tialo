import localFont from "next/font/local";
import { demoMetadata } from "../meta";
import { BlitzNav, Reveal, Stars, WaFab } from "../blitz-kit";
import LazyMap from "../lazy-map";
import {
  BIZ,
  WA_LINK,
  WA_CABANA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  POSTAS,
  RESENAS,
  DATOS,
} from "./content";

export const metadata = demoMetadata({
  slug: "el-quincho-espacio-colibri",
  title: "El Quincho Espacio Colibrí — restaurante y cabañas en Chanco, Pelluhue",
  description:
    "Demo de sitio web para El Quincho Espacio Colibrí: bar restaurante y cabañas en la costa entre Chanco y Pelluhue, en el Maule.",
  image: `${IMG}/hero.webp`,
});

const alegreya = localFont({
  src: [
    { path: "../../fonts/alegreya/normal-400-900.woff2", weight: "400 900", style: "normal" },
    { path: "../../fonts/alegreya/italic-400-900.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--f-serif",
});
const grotesk = localFont({
  src: [{ path: "../../fonts/familjen-grotesk/normal-400-700.woff2", weight: "400 700", style: "normal" }],
  variable: "--f-sans",
});
const mono = localFont({
  src: [{ path: "../../fonts/geist-mono/normal-100-900.woff2", weight: "100 900", style: "normal" }],
  variable: "--f-mono",
});

const C = {
  papel: "#F3EEE0",
  papelOsc: "#E7DFC8",
  tinta: "#22301F",
  muted: "#5B6553",
  bosque: "#2E4A33",
  bosqueOsc: "#1B2E1F",
  burdeo: "#6E1F2C",
  burdeoOsc: "#4E1520",
  madera: "#8A5A2B",
  linea: "rgba(34,48,31,0.16)",
};

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as Record<string, string>;

const BTN =
  "tap-44 inline-flex items-center justify-center gap-2 rounded-full px-5 text-[13px] font-semibold tracking-wide transition hover:opacity-90";

function Posta({
  n,
  rollo,
  last = false,
  children,
}: {
  n: string;
  rollo: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="relative pl-14 md:pl-20">
      <div
        aria-hidden
        className="absolute left-[15px] top-1 bottom-0 w-px md:left-[19px]"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, ${C.bosque} 0 6px, transparent 6px 12px)`,
          opacity: last ? 0.35 : 0.7,
        }}
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full md:size-10"
        style={{ backgroundColor: C.bosque, color: "#F3EEE0" }}
      >
        <svg viewBox="0 0 24 24" className="size-4 md:size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21c-2-3-5-4-8-4l2-3c-1-2-1-4 0-6 3 0 5 1 6 3l3-6c2 1 3 3 3 6s-1 5-3 6c0 1-1 3-3 4Z" />
        </svg>
      </div>
      <div className="pb-14 md:pb-20">
        <p
          className="mb-2 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.28em]"
          style={{ fontFamily: "var(--f-mono)", color: C.burdeo }}
        >
          posta {n}
          <span className="h-px flex-1" style={{ backgroundColor: C.linea }} />
          <span className="normal-case tracking-[0.08em]">{rollo}</span>
        </p>
        {children}
      </div>
    </Reveal>
  );
}

export default function Page() {
  const links = [
    { label: "El quincho", href: "#restaurante" },
    { label: "Cabañas", href: "#cabanas" },
    { label: "Ubicación", href: "#ubicacion" },
  ];
  return (
    <div
      className={`${alegreya.variable} ${grotesk.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.papel, color: C.tinta, fontFamily: "var(--f-sans)", ...SPACING }}
    >
      <BlitzNav
        name={BIZ.fullName}
        links={links}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Reservar"
        theme={{
          over: "dark",
          bar: "rgba(243,238,224,0.94)",
          ink: C.tinta,
          line: C.linea,
          btnBg: C.burdeo,
          btnInk: "#F3EEE0",
        }}
      />

      {/* HERO */}
      <header className="relative flex min-h-svh flex-col justify-end overflow-hidden" style={{ backgroundColor: C.bosqueOsc }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Vista aérea al atardecer de El Quincho Espacio Colibrí: el restaurante con su pasarela iluminada entre los jardines de Chanco"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, rgba(27,46,31,0.25) 0%, rgba(27,46,31,0.30) 40%, rgba(27,46,31,0.88) 100%)` }}
        />
        <div className="relative px-5 pb-10 pt-28 md:px-10 md:pb-14">
          <Reveal className="max-w-[1100px]">
            <p
              className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--f-mono)", color: "#D9CB9C" }}
            >
              <img
                src={`${IMG}/logo.webp`}
                alt={`Sello de ${BIZ.fullName}: colibrí en un círculo burdeo`}
                className="size-9 rounded-full"
              />
              chanco · pelluhue · desde {BIZ.since}
            </p>
            <h1
              className="text-[13vw] leading-[0.95] md:text-[84px]"
              style={{ fontFamily: "var(--f-serif)", fontWeight: 800, color: "#F3EEE0" }}
            >
              un remanso de paz
              <br />
              <em className="italic" style={{ color: "#E8C8B8", fontWeight: 700 }}>
                en la costa maulina
              </em>
            </h1>
            <p className="mt-5 max-w-[540px] text-[15px] leading-relaxed md:text-base" style={{ color: "rgba(243,238,224,0.9)" }}>
              Restaurante de mar y campo + cabañas entre hortensias, en un parque de cuatro
              hectáreas donde se ven colibríes todos los días del año.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#restaurante" className={BTN} style={{ backgroundColor: C.burdeo, color: "#F3EEE0", height: 46 }}>
                ver el quincho
              </a>
              <a
                href={WA_CABANA}
                target="_blank"
                rel="noreferrer"
                className={BTN}
                style={{ border: `1.5px solid rgba(243,238,224,0.75)`, color: "#F3EEE0", height: 46 }}
              >
                consultar por cabaña
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="ml-1 flex items-center gap-2 text-[12px] underline underline-offset-4"
                style={{ color: "#D9CB9C", fontFamily: "var(--f-mono)" }}
              >
                ★ {BIZ.rating} · {BIZ.reviews} reseñas
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* DATOS */}
      <section className="border-b" style={{ borderColor: C.linea }}>
        <dl className="mx-auto grid max-w-[1100px] grid-cols-2 md:grid-cols-4">
          {DATOS.map((d, i) => (
            <div
              key={d.v}
              className="px-5 py-6"
              style={{ borderLeft: i % 2 === 1 ? `1px solid ${C.linea}` : undefined, borderTop: i > 1 ? `1px solid ${C.linea}` : undefined }}
            >
              <dt
                className="text-[28px] leading-none md:text-4xl"
                style={{ fontFamily: "var(--f-serif)", fontWeight: 800, color: C.bosque }}
              >
                {d.k}
              </dt>
              <dd className="mt-2 text-[12px] leading-snug" style={{ color: C.muted }}>
                {d.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* SENDERO */}
      <main className="mx-auto max-w-[1100px] px-5 pt-14 md:px-10 md:pt-20">
        <Reveal>
          <h2
            className="mb-10 max-w-[560px] text-4xl leading-[1.02] md:mb-14 md:text-6xl"
            style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}
          >
            el recorrido tiene
            <em className="italic" style={{ color: C.burdeo }}> cuatro postas</em>
          </h2>
        </Reveal>

        {/* POSTA 01 — restaurante */}
        <div id="restaurante" className="scroll-mt-24">
          <Posta n="01" rollo={POSTAS[0].rollo}>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <h3 className="text-3xl leading-tight md:text-4xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}>
                  {POSTAS[0].titulo}
                </h3>
                <p className="mt-4 max-w-[46ch] text-[14px] leading-relaxed" style={{ color: C.muted }}>
                  {POSTAS[0].texto}
                </p>
                <ul className="mt-6 space-y-0">
                  {POSTAS[0].platos.map((p) => (
                    <li
                      key={p.nombre}
                      className="flex items-baseline justify-between gap-4 border-t py-3 text-[14px]"
                      style={{ borderColor: C.linea }}
                    >
                      <span className="font-semibold">{p.nombre}</span>
                      <span className="text-[11px] uppercase tracking-[0.14em]" style={{ fontFamily: "var(--f-mono)", color: C.madera }}>
                        {p.nota}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`${BTN} mt-6`}
                  style={{ backgroundColor: C.bosque, color: "#F3EEE0", height: 44 }}
                >
                  reservar mesa
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 md:col-span-7">
                <figure className="col-span-2 overflow-hidden rounded-2xl md:col-span-1 md:row-span-2">
                  <img src={`${IMG}/terraza.webp`} alt={POSTAS[0].alt} className="h-full w-full object-cover" loading="lazy" />
                </figure>
                <figure className="overflow-hidden rounded-2xl">
                  <img
                    src={`${IMG}/plato.webp`}
                    alt="Pastel de jaiba del Quincho en plato de loza azul, con el sello de la casa al fondo"
                    className="aspect-[4/5] h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <figure className="overflow-hidden rounded-2xl">
                  <img
                    src={`${IMG}/salon.webp`}
                    alt="Comedor interior de madera con lámparas de papel y decoración de campo"
                    className="aspect-[4/5] h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <figure className="col-span-2 overflow-hidden rounded-2xl">
                  <img
                    src={`${IMG}/restaurante.webp`}
                    alt="Fachada de madera con tejado rojo y jardines florales frente a El Quincho de Pelluhue"
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </Posta>
        </div>

        {/* POSTA 02 — jardín */}
        <div id="jardin" className="scroll-mt-24">
          <Posta n="02" rollo={POSTAS[1].rollo}>
            <div className="relative overflow-hidden rounded-3xl" style={{ backgroundColor: C.bosqueOsc }}>
              <img src={`${IMG}/jardin.webp`} alt={POSTAS[1].alt} className="h-[420px] w-full object-cover md:h-[520px]" loading="lazy" />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 30%, rgba(27,46,31,0.85) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                <h3
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: "var(--f-serif)", fontWeight: 800, color: "#F3EEE0" }}
                >
                  {POSTAS[1].titulo}
                </h3>
                <p className="mt-3 max-w-[58ch] text-[14px] leading-relaxed" style={{ color: "rgba(243,238,224,0.92)" }}>
                  {POSTAS[1].texto}
                </p>
              </div>
            </div>
          </Posta>
        </div>

        {/* POSTA 03 — cabañas */}
        <div id="cabanas" className="scroll-mt-24">
          <Posta n="03" rollo={POSTAS[2].rollo}>
            <div className="grid gap-8 md:grid-cols-12">
              <figure className="overflow-hidden rounded-2xl md:col-span-7">
                <img src={`${IMG}/cabana1.webp`} alt={POSTAS[2].alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
              <div className="md:col-span-5">
                <h3 className="text-3xl leading-tight md:text-4xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}>
                  {POSTAS[2].titulo}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                  {POSTAS[2].texto}
                </p>
                <figure className="mt-5 overflow-hidden rounded-2xl">
                  <img
                    src={`${IMG}/cabana2.webp`}
                    alt="Cabañas de madera esparcidas en el parque de Cabañas El Colibrí, sector Las Conejas"
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <a
                  href={WA_CABANA}
                  target="_blank"
                  rel="noreferrer"
                  className={`${BTN} mt-6`}
                  style={{ backgroundColor: C.burdeo, color: "#F3EEE0", height: 44 }}
                >
                  consultar por cabaña
                </a>
              </div>
            </div>
          </Posta>
        </div>

        {/* POSTA 04 — costa */}
        <Posta n="04" rollo={POSTAS[3].rollo} last>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h3 className="text-3xl leading-tight md:text-4xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}>
                {POSTAS[3].titulo}
              </h3>
              <p className="mt-4 max-w-[56ch] text-[14px] leading-relaxed" style={{ color: C.muted }}>
                {POSTAS[3].texto}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:col-span-5">
              {[
                ["5 min", "playa y desembocadura del río Mariscadero"],
                ["25 min", "a dos reservas nacionales"],
                ["2", "caletas de pesca artesanal cerca"],
                ["4 ha", "jardines, huertas y frutales en el mismo parque"],
              ].map(([k, v]) => (
                <div key={v} className="rounded-xl border p-4" style={{ borderColor: C.linea, backgroundColor: "#FBF8EE" }}>
                  <p className="text-2xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800, color: C.burdeo }}>
                    {k}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-snug" style={{ color: C.muted }}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Posta>
      </main>

      {/* RESEÑAS — libro de visitas */}
      <section className="border-t py-16 md:py-24" style={{ borderColor: C.linea, backgroundColor: C.papelOsc }}>
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
            <h2 className="max-w-[420px] text-4xl leading-[1.02] md:text-5xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}>
              el libro de visitas
            </h2>
            <div className="text-right">
              <p className="text-5xl leading-none" style={{ fontFamily: "var(--f-serif)", fontWeight: 800, color: C.burdeo }}>
                {BIZ.rating}
              </p>
              <Stars value={4.7} color={C.burdeo} className="mt-2 justify-end" />
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em]" style={{ fontFamily: "var(--f-mono)", color: C.muted }}>
                {BIZ.reviews} reseñas en google
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre}>
                <div
                  className="relative rounded-xl p-6 shadow-[0_2px_14px_rgba(34,48,31,0.10)]"
                  style={{
                    backgroundColor: "#FCF9EF",
                    transform: `rotate(${i === 1 ? -1.2 : 0.8}deg)`,
                    borderTop: `3px solid ${C.bosque}`,
                  }}
                >
                <div
                  aria-hidden
                  className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rounded-full shadow"
                  style={{ backgroundColor: C.burdeo }}
                />
                <Stars value={r.estrellas} color={C.madera} />
                <blockquote
                  className="mt-4 text-[15px] italic leading-relaxed"
                  style={{ fontFamily: "var(--f-serif)", color: "#33402E" }}
                >
                  “{r.texto}”
                </blockquote>
                <p
                  className="mt-5 border-t pt-3 text-[11px] uppercase tracking-[0.18em]"
                  style={{ borderColor: C.linea, fontFamily: "var(--f-mono)", color: C.muted }}
                >
                  {r.nombre} · reseña de google
                </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="scroll-mt-24 border-t py-16 md:py-24" style={{ borderColor: C.linea }}>
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <Reveal>
            <h2 className="max-w-[560px] text-4xl leading-[1.02] md:text-6xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}>
              dos direcciones, <em className="italic" style={{ color: C.burdeo }}>un mismo parque</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border p-6" style={{ borderColor: C.linea, backgroundColor: "#FBF8EE" }}>
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ fontFamily: "var(--f-mono)", color: C.burdeo }}>
                restaurante
              </p>
              <p className="mt-2 text-2xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}>
                {BIZ.restaurante}
              </p>
              <dl className="mt-4 space-y-2 text-[13px]" style={{ color: C.muted }}>
                <div className="flex justify-between border-t pt-2" style={{ borderColor: C.linea }}>
                  <dt>horario</dt>
                  <dd className="text-right font-medium" style={{ color: C.tinta }}>
                    abre 12:30
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-2" style={{ borderColor: C.linea }}>
                  <dt>teléfono</dt>
                  <dd className="text-right font-medium" style={{ color: C.tinta }}>
                    {BIZ.phoneDisplay}
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-2" style={{ borderColor: C.linea }}>
                  <dt>correo</dt>
                  <dd className="text-right font-medium" style={{ color: C.tinta }}>
                    {BIZ.email}
                  </dd>
                </div>
              </dl>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border p-6" style={{ borderColor: C.linea, backgroundColor: "#FBF8EE" }}>
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ fontFamily: "var(--f-mono)", color: C.burdeo }}>
                cabañas el colibrí
              </p>
              <p className="mt-2 text-2xl" style={{ fontFamily: "var(--f-serif)", fontWeight: 800 }}>
                {BIZ.cabanas}
              </p>
              <dl className="mt-4 space-y-2 text-[13px]" style={{ color: C.muted }}>
                <div className="flex justify-between border-t pt-2" style={{ borderColor: C.linea }}>
                  <dt>parque</dt>
                  <dd className="text-right font-medium" style={{ color: C.tinta }}>
                    4 hectáreas de jardines
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-2" style={{ borderColor: C.linea }}>
                  <dt>acceso</dt>
                  <dd className="text-right font-medium" style={{ color: C.tinta }}>
                    accesos universales
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-2" style={{ borderColor: C.linea }}>
                  <dt>web</dt>
                  <dd className="text-right font-medium" style={{ color: C.tinta }}>
                    {BIZ.site}
                  </dd>
                </div>
              </dl>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-5 overflow-hidden rounded-2xl border-4" style={{ borderColor: C.bosque }}>
            <LazyMap
              src={MAPS_EMBED}
              title="Mapa de El Quincho Espacio Colibrí, Chanco, Pelluhue"
              className="block h-[320px] w-full md:h-[440px]"
              loading="lazy"
            />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:px-10">
        <Reveal>
          <div
            className="mx-auto max-w-[1100px] rounded-3xl px-6 py-14 text-center md:py-20"
            style={{ backgroundColor: C.burdeoOsc }}
          >
          <img src={`${IMG}/logo.webp`} alt="" aria-hidden className="mx-auto size-14 rounded-full" />
          <h2
            className="mx-auto mt-5 max-w-[560px] text-4xl leading-[1.04] md:text-5xl"
            style={{ fontFamily: "var(--f-serif)", fontWeight: 800, color: "#F3EEE0" }}
          >
            el almuerzo ya está en la mesa
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[14px]" style={{ color: "rgba(243,238,224,0.85)" }}>
            Escríbenos por WhatsApp para reservar mesa o consultar por las cabañas.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className={BTN}
              style={{ backgroundColor: "#F3EEE0", color: C.burdeoOsc, height: 46 }}
            >
              whatsapp {BIZ.phoneDisplay}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className={BTN}
              style={{ border: "1.5px solid rgba(243,238,224,0.6)", color: "#F3EEE0", height: 46 }}
            >
              cómo llegar
            </a>
          </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-8 md:px-10" style={{ backgroundColor: C.bosqueOsc }}>
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4">
          <p className="text-[13px]" style={{ color: "rgba(243,238,224,0.75)" }}>
            {BIZ.fullName} · {BIZ.city} · desde {BIZ.since}
          </p>
          <p className="text-[12px]" style={{ fontFamily: "var(--f-mono)", color: "rgba(243,238,224,0.6)" }}>
            {BIZ.instagram} · {BIZ.site}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Escribir por WhatsApp" />
    </div>
  );
}
