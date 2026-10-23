'use client'

import { useDeferredValue, useMemo, useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import type { DemoCatalogo } from '../../demos/catalogo'
import { BotonDemo } from './BotonDemo'

const NUEVOS = 'Más nuevos'
const TODAS = 'Todas'

/** Minúsculas y sin tildes, para que "peluqueria" encuentre "Peluquería". */
function normalizar(t: string) {
  return t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLocaleLowerCase('es')
}

/** Fila editorial de un demo del catálogo; también la usan las páginas por rubro. */
export function Fila({ d }: { d: DemoCatalogo }) {
  return (
    <li>
      {/* <a> y no <Link>: el demo carga en un documento limpio, sin los estilos del sitio. */}
      <a href={`/demos/${d.slug}/`} className="s-cat-fila group">
        <span className="s-display s-cat-nombre">{d.nombre}</span>
        <span className="s-mono s-cat-rubro">
          {d.rubro}
          <span className="md:hidden">, {d.ciudad}</span>
        </span>
        <span className="s-cat-ciudad">{d.ciudad}</span>
        <ArrowUpRight size={20} weight="regular" aria-hidden="true" className="s-cat-flecha" />
      </a>
    </li>
  )
}

/**
 * Catálogo de demos: buscador y filtro por familia de rubro sobre una lista editorial.
 * Todo el catálogo viene en el HTML (sirve sin JavaScript y para buscadores); el filtro solo lo acota.
 */
export function CatalogoDemos({
  demos,
  familias,
}: {
  demos: DemoCatalogo[]
  familias: { titulo: string; total: number }[]
}) {
  const [consulta, setConsulta] = useState('')
  const [familia, setFamilia] = useState(TODAS)
  const q = normalizar(useDeferredValue(consulta).trim())

  const indice = useMemo(
    () => demos.map((d) => ({ d, texto: normalizar(`${d.nombre} ${d.rubro} ${d.ciudad} ${d.familia}`) })),
    [demos],
  )

  const visibles = useMemo(
    () =>
      indice
        .filter(({ d, texto }) => (familia === TODAS || familia === NUEVOS || d.familia === familia) && (!q || texto.includes(q)))
        .map(({ d }) => d),
    [indice, familia, q],
  )

  const grupos = useMemo(
    () =>
      familia === NUEVOS
        ? [{ titulo: NUEVOS, demos: [...visibles].sort((a, b) => b.creado.localeCompare(a.creado)) }]
        : familias.map((f) => ({ titulo: f.titulo, demos: visibles.filter((d) => d.familia === f.titulo) })).filter((g) => g.demos.length > 0),
    [familia, familias, visibles],
  )

  const opciones = [{ titulo: TODAS, total: demos.length }, ...familias, { titulo: NUEVOS, total: demos.length }]

  return (
    <section className="s-wrap s-catalogo pt-16 pb-24 md:pt-24 md:pb-32" aria-label="Catálogo de demos">
      <div className="s-cat-filtros">
        <label htmlFor="s-buscar-demo" className="sr-only">
          Busca por rubro, nombre o ciudad
        </label>
        <input
          id="s-buscar-demo"
          type="search"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Busca tu rubro o tu ciudad"
          autoComplete="off"
          enterKeyHint="search"
          className="s-campo"
        />
        <div className="s-cat-chips" role="group" aria-label="Filtrar por familia de rubro">
          {opciones.map((o) => (
            <button
              key={o.titulo}
              type="button"
              aria-pressed={familia === o.titulo}
              onClick={() => setFamilia(o.titulo)}
              className="s-cat-chip"
            >
              <span>{o.titulo}</span>
              {o.titulo !== NUEVOS && <span className="s-cat-chip-n">{o.total}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="s-cat-lista">
        <p className="s-mono text-(--s-ceniza)" aria-live="polite">
          {visibles.length === demos.length ? `${demos.length} demos` : `${visibles.length} de ${demos.length} demos`}
        </p>

        {grupos.map((g) => (
          <section key={g.titulo} className="mt-12 first-of-type:mt-6" aria-label={g.titulo}>
            <h2 className="s-display s-h3 flex items-baseline justify-between gap-4 pb-4">
              {g.titulo}
              <span className="s-mono text-(--s-ceniza)">{g.demos.length}</span>
            </h2>
            <ul className="border-b border-(--s-linea)">
              {g.demos.map((d) => (
                <Fila key={d.slug} d={d} />
              ))}
            </ul>
          </section>
        ))}

        {visibles.length === 0 && (
          <div className="mt-10 max-w-[36ch]">
            <p className="s-display s-h3">
              Todavía no hay un demo de “{consulta.trim()}”. <em>El tuyo puede ser el primero.</em>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BotonDemo origen="catalogo-vacio" />
              {familia !== TODAS && (
                <button type="button" onClick={() => setFamilia(TODAS)} className="s-link">
                  Buscar en todos los rubros
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
