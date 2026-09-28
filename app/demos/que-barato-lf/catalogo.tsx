'use client'

/**
 * app/demos/que-barato-lf/catalogo.tsx
 *
 * Isla interactiva del demo: buscador, tarjetas con foto real de cada
 * sección del local, listas con precio unitario y precio «mayor»
 * (3 unidades) — cada sección muestra los primeros ítems y un botón
 * «ver todos» — y cotizador que arma el mensaje de WhatsApp con los
 * productos elegidos. Los precios son los reales del catálogo
 * (ver content.ts).
 */

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { BIZ, C, CAT_LABEL, CATEGORIES, IMG, PRODUCTS, WA_LINK, waLink, type CatKey } from './content'

const VISIBLE = 6

const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

export function Catalogo({ fontClass, monoClass }: { fontClass: string; monoClass: string }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<CatKey | 'todas'>('todas')
  const [sel, setSel] = useState<string[]>([])
  const [nota, setNota] = useState('')
  const [open, setOpen] = useState<Set<CatKey>>(new Set())

  const sections = useMemo(() => {
    const nq = norm(q.trim())
    return CATEGORIES.filter((c) => cat === 'todas' || c.key === cat).map((c) => ({
      ...c,
      rows: PRODUCTS.filter(
        (p) =>
          p.cat === c.key &&
          (!nq || norm(`${p.name} ${c.label}`).includes(nq)),
      ),
    }))
  }, [q, cat])

  const total = sections.reduce((n, s) => n + s.rows.length, 0)

  const toggle = (name: string) =>
    setSel((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]))

  const toggleOpen = (key: CatKey) =>
    setOpen((s) => {
      const n = new Set(s)
      if (n.has(key)) n.delete(key)
      else n.add(key)
      return n
    })

  const mensaje = [
    `Hola ${BIZ.name}! Quiero cotizar estos productos:`,
    ...sel.map((p) => `- ${p}`),
    nota.trim() ? `Detalle: ${nota.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <>
      {/* ── Buscador ─────────────────────────────────────── */}
      <div className="mb-8 md:mb-10">
        <div
          className="rounded-lg p-4 md:p-5"
          style={{ backgroundColor: C.blanco, border: `2px solid ${C.azul}` }}
        >
          <label
            htmlFor="buscar"
            className={`${monoClass} block text-[11px] font-semibold uppercase tracking-[0.18em] mb-2`}
            style={{ color: C.rojo }}
          >
            Buscar en el catálogo
          </label>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke={C.gris} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="buscar"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Guantes, cartulina, algodón, marcadores…"
              className="w-full bg-transparent text-base md:text-lg outline-none placeholder:text-stone-400 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: C.tinta, outlineColor: C.azul }}
            />
          </div>
        </div>
      </div>

      {/* ── Tarjetas de sección con foto real ────────────── */}
      <p className={`${monoClass} text-[11px] uppercase tracking-[0.18em] mb-4`} style={{ color: C.gris }}>
        Toca una sección para filtrar
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
        {CATEGORIES.map((c) => {
          const active = cat === c.key
          return (
            <div
              key={c.key}
              role="button"
              tabIndex={0}
              aria-pressed={active}
              onClick={() => setCat(active ? 'todas' : c.key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setCat(active ? 'todas' : c.key)
                }
              }}
              className="group text-left rounded-lg overflow-hidden transition-shadow cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 flex sm:block"
              style={{
                backgroundColor: C.blanco,
                border: `2px solid ${active ? C.rojo : C.line}`,
                outlineColor: C.azul,
                boxShadow: active ? `0 0 0 1px ${C.rojo}` : undefined,
              }}
            >
              <div className="relative w-[112px] shrink-0 sm:w-auto sm:aspect-[16/9] overflow-hidden" style={{ backgroundColor: C.line }}>
                <Image
                  src={`${IMG}/${c.img}.webp`}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: c.pos }}
                />
                <span
                  className={`${fontClass} absolute left-3 bottom-3 px-3 py-1 text-xs uppercase tracking-wide text-white`}
                  style={{ backgroundColor: 'rgba(16,46,99,0.88)' }}
                >
                  {active ? 'filtrando' : c.label}
                </span>
              </div>
              <div className="p-3.5 md:p-4">
                <p className={`${fontClass} uppercase tracking-wide text-base md:text-lg`} style={{ color: C.azulDeep }}>
                  {c.label}
                </p>
                <p className="mt-1 text-sm leading-snug" style={{ color: C.gris }}>
                  {c.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Listas por sección + cotizador ───────────────── */}
      <div id="destacados" className="scroll-mt-24 grid lg:grid-cols-[1fr_330px] gap-8 lg:gap-10 items-start">
        <div>
          <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
            <h3 className={`${fontClass} uppercase tracking-wide text-2xl md:text-3xl`} style={{ color: C.azulDeep }}>
              La lista de precios
            </h3>
            <p aria-live="polite" className={`${monoClass} text-xs md:text-sm font-medium`} style={{ color: C.gris }}>
              {total} {total === 1 ? 'producto' : 'productos'}
              {cat !== 'todas' && ` en ${CAT_LABEL[cat]}`}
            </p>
          </div>

          <div className="space-y-8">
            {sections.map(
              (s) =>
                s.rows.length > 0 && (
                  <section key={s.key} aria-label={s.label}>
                    <h4 className={`${fontClass} uppercase tracking-wide text-lg md:text-xl mb-3 flex items-center gap-3`} style={{ color: C.azulDeep }}>
                      <span className="w-2.5 h-2.5" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                      {s.label}
                    </h4>
                    <ul className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.line}`, backgroundColor: C.blanco }}>
                      {(open.has(s.key) ? s.rows : s.rows.slice(0, VISIBLE)).map((p) => {
                        const inList = sel.includes(p.name)
                        return (
                          <li
                            key={p.name}
                            className="flex items-center gap-3 px-4 md:px-5 py-3.5"
                            style={{ borderTop: `1px solid ${C.line}` }}
                          >
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-[15px] md:text-base break-words" style={{ color: C.tinta }}>
                                {p.name}
                              </p>
                              {p.mayor && (
                                <p className={`${monoClass} text-[11px] md:text-xs font-medium`} style={{ color: C.rojoDeep }}>
                                  mayor 3 un. {p.mayor} c/u
                                </p>
                              )}
                            </div>
                            <p className={`${monoClass} shrink-0 font-bold text-base md:text-lg tabular-nums`} style={{ color: C.azulDeep }}>
                              {p.price ?? <span className="text-xs font-semibold" style={{ color: C.gris }}>Consultar</span>}
                            </p>
                            <button
                              type="button"
                              onClick={() => toggle(p.name)}
                              aria-pressed={inList}
                              className="shrink-0 inline-flex items-center gap-1.5 min-h-[40px] px-3 md:px-4 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap tap-44"
                              style={
                                inList
                                  ? { backgroundColor: C.rojo, color: C.blanco, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 7px 50%)', paddingLeft: '16px' }
                                  : { backgroundColor: C.papel, color: C.azulDeep, border: `1px solid ${C.line}` }
                              }
                            >
                              {inList ? 'En lista ✓' : '+ Lista'}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                    {s.rows.length > VISIBLE && (
                      <button
                        type="button"
                        onClick={() => toggleOpen(s.key)}
                        aria-expanded={open.has(s.key)}
                        className={`${monoClass} mt-2 min-h-[40px] px-3 text-xs md:text-sm font-semibold uppercase tracking-wider underline underline-offset-4 tap-44`}
                        style={{ color: C.azul }}
                      >
                        {open.has(s.key)
                          ? 'Ver menos'
                          : `Ver los ${s.rows.length - VISIBLE} restantes`}
                      </button>
                    )}
                  </section>
                ),
            )}
            {total === 0 && (
              <p className="py-10 text-center rounded-lg" style={{ color: C.gris, border: `1px solid ${C.line}`, backgroundColor: C.blanco }}>
                Sin resultados para «{q}». Pregunta por WhatsApp, el catálogo del local es mucho más amplio.
              </p>
            )}
          </div>
          <p className="mt-3 text-xs" style={{ color: C.gris }}>
            «Mayor 3 un.» es el precio por unidad llevando 3 o más del mismo producto.
            Precios reales del catálogo; el stock se confirma por WhatsApp.
          </p>
        </div>

        {/* Cotizador */}
        <aside
          className="lg:sticky lg:top-24 rounded-lg p-5 md:p-6"
          style={{ backgroundColor: C.azulDeep, color: C.blanco }}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className={`${fontClass} uppercase tracking-wide text-xl`}>Tu lista</h3>
            <span
              className={`${monoClass} inline-flex items-center justify-center min-w-[28px] h-[28px] px-2 text-sm font-bold`}
              style={{ backgroundColor: sel.length ? '#F2C14E' : 'rgba(255,255,255,0.14)', color: sel.length ? C.azulDeep : C.blanco }}
            >
              {sel.length}
            </span>
          </div>

          {sel.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Marca productos con «+ Lista» y te armamos el mensaje de WhatsApp con la lista lista para enviar.
            </p>
          ) : (
            <ul className="mt-4 space-y-2">
              {sel.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-3 px-3 py-2 text-sm font-medium"
                  style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}
                >
                  {name}
                  <button
                    type="button"
                    onClick={() => toggle(name)}
                    aria-label={`Quitar ${name}`}
                    className="shrink-0 w-7 h-7 rounded-full grid place-items-center text-white/80 hover:text-white"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}

          <label htmlFor="nota" className={`${monoClass} block mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70`}>
            Cantidades o detalle
          </label>
          <textarea
            id="nota"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            rows={3}
            placeholder="Ej: 3 toallitas antisépticas, 1 silicona, 6 paños amarillos…"
            className="mt-2 w-full rounded-lg px-3 py-2.5 text-sm outline-none placeholder:text-white/60 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: C.blanco, border: '1px solid rgba(255,255,255,0.18)', outlineColor: '#F2C14E' }}
          />

          <a
            href={sel.length ? waLink(mensaje) : WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${fontClass} mt-4 flex items-center justify-center gap-2 min-h-[48px] text-sm uppercase tracking-wider transition-transform active:scale-[0.98] tap-44`}
            style={{ backgroundColor: C.rojo, color: C.blanco, clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
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
