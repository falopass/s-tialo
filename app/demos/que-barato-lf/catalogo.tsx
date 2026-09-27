'use client'

/**
 * app/demos/que-barato-lf/catalogo.tsx
 *
 * Isla interactiva del demo: buscador, grilla de categorías con fotos,
 * tabla de productos destacados y cotizador que arma el mensaje de
 * WhatsApp con los productos elegidos. Los precios son de muestra
 * (ver content.ts).
 */

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { BIZ, C, CAT_LABEL, CATEGORIES, IMG, PRODUCTS, WA_LINK, waLink, type CatKey } from './content'

const ICONS: Record<CatKey, React.ReactNode> = {
  guantes: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 12V7.2a1.4 1.4 0 0 1 2.8 0V11" />
      <path d="M10.3 10.8V5.4a1.4 1.4 0 0 1 2.8 0v5.4" />
      <path d="M13.1 11V6.2a1.4 1.4 0 0 1 2.8 0V12" />
      <path d="M15.9 11.8v-1.2a1.4 1.4 0 0 1 2.8 0V15c0 3.8-2.6 6-6.4 6c-3.4 0-4.8-1.4-6-4L4.6 13a1.4 1.4 0 0 1 2.5-1.3l.9 1.5" />
    </g>
  ),
  jeringas: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l2.6-2.6" />
      <path d="M6.8 15.4l3.2 3.2" />
      <path d="M7.6 14.2l6.8-6.8l2.8 2.8l-6.8 6.8a2 2 0 0 1-2.8 0l-.8-.8a2 2 0 0 1 0-2.8z" />
      <path d="M14.4 7.4l3-3 M17.6 10.6l3-3 M15.6 4.6l3.8 3.8" />
      <path d="M9.8 12.4l1.4 1.4 M11.6 10.6l1.4 1.4" />
    </g>
  ),
  gasas: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M12 8.5v7 M8.5 12h7" />
    </g>
  ),
  mascarillas: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 9.5C4 9 3 10 3 11.5S4 14 5.5 13.8" />
      <path d="M18.5 9.5C20 9 21 10 21 11.5S20 14 18.5 13.8" />
      <rect x="5.5" y="7.5" width="13" height="8" rx="3" />
      <path d="M8.5 10.5h7 M8.5 12.5h7" />
    </g>
  ),
  curaciones: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2.8" width="8" height="18.4" rx="4" transform="rotate(38 12 12)" />
      <path d="M10.4 10.6l1 1 M13 13.2l1 1" strokeWidth="2" />
      <path d="M9.5 14.6l1.4-1.1 M14.2 10.9l1.4-1.1" />
    </g>
  ),
  equipos: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 3.5v5a3.8 3.8 0 0 0 7.6 0v-5" />
      <path d="M5 3.5h3 M12.2 3.5h3" />
      <path d="M10.3 13.4v3.2a4.4 4.4 0 0 0 8.8 0v-1.4" />
      <circle cx="19.1" cy="12.6" r="2.4" />
    </g>
  ),
}

function Icon({ k, className = 'w-5 h-5' }: { k: CatKey; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      {ICONS[k]}
    </svg>
  )
}

const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')


export function Catalogo({ fontClass }: { fontClass: string }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<CatKey | 'todas'>('todas')
  const [sel, setSel] = useState<string[]>([])
  const [nota, setNota] = useState('')

  const filtered = useMemo(() => {
    const nq = norm(q.trim())
    return PRODUCTS.filter(
      (p) =>
        (cat === 'todas' || p.cat === cat) &&
        (!nq || norm(`${p.name} ${p.format} ${CAT_LABEL[p.cat]}`).includes(nq)),
    )
  }, [q, cat])

  const toggle = (name: string) =>
    setSel((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]))

  const mensaje = [
    `Hola ${BIZ.name}! Quiero cotizar estos insumos:`,
    ...sel.map((p) => `- ${p}`),
    nota.trim() ? `Detalle: ${nota.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <>
      {/* ── Buscador (se solapa con el hero) ─────────────── */}
      <div className="relative z-10 -mt-10 md:-mt-12 mb-10 md:mb-14">
        <div
          className="rounded-2xl shadow-[0_12px_32px_-12px_rgba(14,58,92,0.35)] p-4 md:p-5"
          style={{ backgroundColor: C.white, border: `1px solid ${C.line}` }}
        >
          <label
            htmlFor="buscar"
            className="block text-xs font-semibold uppercase tracking-[0.14em] mb-2"
            style={{ color: C.steel }}
          >
            Buscar en el catálogo
          </label>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke={C.steel} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="buscar"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Guantes, jeringas, mascarillas…"
              className="w-full bg-transparent text-base md:text-lg outline-none placeholder:text-slate-400"
              style={{ color: C.navy }}
            />
          </div>
        </div>
      </div>

      {/* ── Grilla de categorías ─────────────────────────── */}
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className={`${fontClass} font-bold text-3xl md:text-4xl tracking-tight`} style={{ color: C.navy }}>
          Categorías
        </h2>
        <p className="hidden sm:block text-sm" style={{ color: C.steel }}>
          Toca una categoría para filtrar la tabla.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-20">
        {CATEGORIES.map((c) => {
          const active = cat === c.key
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setCat(active ? 'todas' : c.key)}
              aria-pressed={active}
              className="group text-left rounded-xl overflow-hidden transition-shadow focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{
                backgroundColor: C.white,
                border: `1px solid ${active ? C.green : C.line}`,
                outlineColor: C.navy,
                boxShadow: active ? `0 0 0 1px ${C.green}` : undefined,
              }}
            >
              <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: '#E3ECF2' }}>
                <Image
                  src={`${IMG}/${c.img}.webp`}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: c.pos }}
                />
                <span
                  className="absolute left-3 top-3 inline-flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ backgroundColor: C.navy, color: C.sky }}
                >
                  <Icon k={c.key} />
                </span>
              </div>
              <div className="p-3.5 md:p-4">
                <p className={`${fontClass} font-bold text-base md:text-lg flex items-center justify-between gap-2`} style={{ color: C.navy }}>
                  {c.label}
                  {active && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: C.greenInk }}>
                      filtrando
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-xs md:text-sm leading-snug" style={{ color: C.steel }}>
                  {c.desc}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* ── Tabla de destacados + cotizador ──────────────── */}
      <div id="destacados" className="scroll-mt-24 grid lg:grid-cols-[1fr_330px] gap-8 lg:gap-10 items-start">
        <div>
          <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
            <h2 className={`${fontClass} font-bold text-3xl md:text-4xl tracking-tight`} style={{ color: C.navy }}>
              Destacados de bodega
            </h2>
            <p aria-live="polite" className="text-sm font-medium" style={{ color: C.steel }}>
              {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
              {cat !== 'todas' && ` en ${CAT_LABEL[cat]}`}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${C.line}`, backgroundColor: C.white }}>
            <table className="w-full text-left text-sm min-w-[520px]">
              <caption className="sr-only">Productos destacados con precios de muestra</caption>
              <thead>
                <tr className="text-[11px] uppercase tracking-[0.12em]" style={{ color: C.steel, borderBottom: `1px solid ${C.line}` }}>
                  <th scope="col" className="py-3 pl-4 md:pl-5 font-semibold">Producto</th>
                  <th scope="col" className="py-3 font-semibold hidden sm:table-cell">Categoría</th>
                  <th scope="col" className="py-3 font-semibold">Formato</th>
                  <th scope="col" className="py-3 font-semibold text-right">Precio</th>
                  <th scope="col" className="py-3 pr-4 md:pr-5 font-semibold text-right w-[86px]">Cotizar</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  const inList = sel.includes(p.name)
                  return (
                    <tr key={p.name} style={{ borderTop: `1px solid ${C.line}` }}>
                      <td className="py-3.5 pl-4 md:pl-5 font-semibold" style={{ color: C.navy }}>
                        {p.name}
                      </td>
                      <td className="py-3.5 hidden sm:table-cell" style={{ color: C.steel }}>
                        {CAT_LABEL[p.cat]}
                      </td>
                      <td className="py-3.5" style={{ color: C.steel }}>{p.format}</td>
                      <td className={`${fontClass} py-3.5 text-right font-bold tabular-nums whitespace-nowrap`} style={{ color: C.navy }}>
                        {p.price}<span aria-hidden="true" style={{ color: C.green }}>*</span>
                      </td>
                      <td className="py-3.5 pr-4 md:pr-5 text-right">
                        <button
                          type="button"
                          onClick={() => toggle(p.name)}
                          aria-pressed={inList}
                          className="inline-flex items-center gap-1.5 min-h-[36px] px-3 rounded-full text-xs font-bold transition-colors"
                          style={
                            inList
                              ? { backgroundColor: C.green, color: C.greenInk }
                              : { backgroundColor: C.paper, color: C.navy, border: `1px solid ${C.line}` }
                          }
                        >
                          {inList ? '✓ En lista' : '+ Agregar'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-10 text-center" style={{ color: C.steel }}>
                      Sin resultados para «{q}». Pregunta por WhatsApp, el catálogo completo es mucho más amplio.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ color: C.steel }}>
            *Precios y stock de muestra. El valor real se confirma al cotizar por WhatsApp.
          </p>
        </div>

        {/* Cotizador */}
        <aside
          className="lg:sticky lg:top-24 rounded-2xl p-5 md:p-6"
          style={{ backgroundColor: C.navy, color: C.white }}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className={`${fontClass} font-bold text-xl`}>Tu cotización</h3>
            <span
              className="inline-flex items-center justify-center min-w-[28px] h-[28px] px-2 rounded-full text-sm font-bold"
              style={{ backgroundColor: sel.length ? C.green : 'rgba(255,255,255,0.14)', color: sel.length ? C.greenInk : C.white }}
            >
              {sel.length}
            </span>
          </div>

          {sel.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Marca productos con «+ Agregar» y te armamos el mensaje de WhatsApp con la lista lista para enviar.
            </p>
          ) : (
            <ul className="mt-4 space-y-2">
              {sel.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                  style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}
                >
                  {name}
                  <button
                    type="button"
                    onClick={() => toggle(name)}
                    aria-label={`Quitar ${name}`}
                    className="shrink-0 w-6 h-6 rounded-full grid place-items-center text-white/80 hover:text-white"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}

          <label htmlFor="nota" className="block mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            Cantidades o detalle
          </label>
          <textarea
            id="nota"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            rows={3}
            placeholder="Ej: 10 cajas de guantes talla M, despacho a Cesfam…"
            className="mt-2 w-full rounded-lg px-3 py-2.5 text-sm outline-none placeholder:text-white/60"
            style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: C.white, border: '1px solid rgba(255,255,255,0.18)' }}
          />

          <a
            href={sel.length ? waLink(mensaje) : WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 min-h-[48px] rounded-xl text-sm font-bold transition-transform active:scale-[0.98]"
            style={{ backgroundColor: C.green, color: C.greenInk }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            </svg>
            {sel.length ? 'Enviar lista por WhatsApp' : 'Cotizar por WhatsApp'}
          </a>
          <p className="mt-3 text-[11px] leading-snug text-white/75">
            Se abre WhatsApp con el mensaje ya escrito. Nada queda guardado en el sitio.
          </p>
        </aside>
      </div>
    </>
  )
}
