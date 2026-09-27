'use client'

/**
 * app/demos/comercial-rio-claro/vitrina.tsx
 *
 * La vitrina: grilla de productos con filtros por línea, etiquetas
 * de oferta en latón y precios destacados como letrero de almacén.
 * Los precios son de muestra (ver content.ts).
 */

import { useState } from 'react'
import { IMG, waLinkProducto } from './content'

export const C = {
  forest: '#1E3D2F',
  deep: '#132318',
  crema: '#F6F1E7',
  brass: '#C8A24B',
  brassSoft: '#E9D9AE',
  ink: '#26282C',
  muted: '#6E6A5E',
  line: 'rgba(38,40,44,0.16)',
  card: '#FCF9F1',
} as const

type Cat = 'limpieza' | 'menaje' | 'descartables'

const FILTERS: { key: string; label: string }[] = [
  { key: 'todas', label: 'Toda la vitrina' },
  { key: 'limpieza', label: 'Limpieza' },
  { key: 'menaje', label: 'Menaje y bazar' },
  { key: 'descartables', label: 'Descartables' },
  { key: 'ofertas', label: 'En oferta' },
]

const CAT_LABEL: Record<Cat, string> = {
  limpieza: 'Limpieza',
  menaje: 'Menaje y bazar',
  descartables: 'Descartables',
}

const PRODUCTS: {
  cat: Cat
  name: string
  desc: string
  unit: string
  price: string
  before?: string
  tag?: string
  img: string
  pos?: string
}[] = [
  {
    cat: 'limpieza',
    name: 'Escobas y escobillones',
    desc: 'De paja y sintéticas, con o sin palo. De las que duran años.',
    unit: 'por unidad',
    price: 'desde $3.500',
    tag: 'Las más pedidas',
    img: 'detalle3.webp',
    pos: '30% 40%',
  },
  {
    cat: 'limpieza',
    name: 'Baldes y tarros multiuso',
    desc: 'Plástico reforzado, varios tamaños, para casa y negocio.',
    unit: 'por unidad',
    price: 'desde $2.900',
    img: 'detalle3.webp',
    pos: '70% 60%',
  },
  {
    cat: 'limpieza',
    name: 'Aseo general por mayor',
    desc: 'Cloro, detergente, limpiapisos y desengrasante en bidón.',
    unit: 'bidón 5 L',
    price: 'desde $6.500',
    tag: 'Precio mayorista',
    img: 'hero.webp',
    pos: '20% 55%',
  },
  {
    cat: 'menaje',
    name: 'Ollas y peltre esmaltado',
    desc: 'Loza esmaltada y aluminio grueso para cocina de trabajo.',
    unit: 'por pieza',
    price: 'desde $7.900',
    img: 'detalle1.webp',
    pos: '50% 45%',
  },
  {
    cat: 'menaje',
    name: 'Utensilios de cocina',
    desc: 'Cucharones, espátulas y coladores de acero, al detalle y por mayor.',
    unit: 'por pieza',
    price: 'desde $1.500',
    before: '$2.200',
    tag: 'Oferta',
    img: 'detalle1.webp',
    pos: '50% 75%',
  },
  {
    cat: 'descartables',
    name: 'Papel higiénico y toalla',
    desc: 'Formato institucional para cocinerías, colegios y oficinas.',
    unit: 'pack ×6',
    price: 'desde $11.900',
    img: 'detalle2.webp',
    pos: '50% 30%',
  },
  {
    cat: 'descartables',
    name: 'Guantes y desechables',
    desc: 'Guantes, bolsas y envases descartables para almacenes y food truck.',
    unit: 'caja ×100',
    price: 'desde $8.400',
    before: '$10.500',
    tag: 'Oferta',
    img: 'detalle2.webp',
    pos: '50% 65%',
  },
  {
    cat: 'menaje',
    name: 'Rollo y manteles',
    desc: 'Manteles plásticos por metro y rollos para cubrir mesa de local.',
    unit: 'por metro',
    price: 'desde $1.800',
    img: 'ambiente.webp',
    pos: '55% 50%',
  },
]

export function Vitrina({ fontClass }: { fontClass: string }) {
  const [filter, setFilter] = useState('todas')
  const items = PRODUCTS.filter(
    (p) => filter === 'todas' || (filter === 'ofertas' ? !!p.before : p.cat === filter),
  )

  return (
    <div>
      {/* filtros: pestañas de catálogo */}
      <div
        className="flex flex-wrap items-center gap-2 mb-8 md:mb-10"
        role="group"
        aria-label="Filtrar productos"
      >
        {FILTERS.map((f) => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] px-4 py-2 rounded-full border transition-colors"
              style={{
                backgroundColor: active ? C.forest : 'transparent',
                borderColor: active ? C.forest : C.line,
                color: active ? C.crema : C.muted,
              }}
            >
              {f.label}
            </button>
          )
        })}
        <span
          className="ml-auto text-[11px] uppercase tracking-[0.14em]"
          style={{ color: C.muted }}
        >
          {items.length} {items.length === 1 ? 'producto' : 'productos'} · precios de muestra
        </span>
      </div>

      {/* grilla de la vitrina */}
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((p) => (
          <li
            key={p.name}
            className="group flex flex-col border rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
            style={{ borderColor: C.line, backgroundColor: C.card }}
          >
            <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.deep }}>
              <img
                src={`${IMG}/${p.img}`}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                style={p.pos ? { objectPosition: p.pos } : undefined}
              />
              {p.before ? (
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-sm -rotate-2 shadow"
                  style={{ backgroundColor: C.brass, color: C.deep }}
                >
                  Oferta
                </span>
              ) : p.tag ? (
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1.5 rounded-sm"
                  style={{ backgroundColor: 'rgba(19,35,24,0.82)', color: C.brassSoft }}
                >
                  {p.tag}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col flex-1 p-4 md:p-5">
              <p
                className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5"
                style={{ color: C.brass }}
              >
                {CAT_LABEL[p.cat]}
              </p>
              <h3
                className={`${fontClass} text-xl leading-tight mb-1.5`}
                style={{ color: C.forest }}
              >
                {p.name}
              </h3>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: C.muted }}>
                {p.desc}
              </p>
              <div
                className="mt-auto pt-3 border-t border-dashed flex items-end justify-between gap-3"
                style={{ borderColor: C.line }}
              >
                <div>
                  {p.before && (
                    <p
                      className="text-xs line-through leading-none mb-1"
                      style={{ color: C.muted }}
                    >
                      {p.before}
                    </p>
                  )}
                  <p
                    className={`${fontClass} text-[22px] leading-none`}
                    style={{ color: C.ink }}
                  >
                    {p.price}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.12em] mt-1" style={{ color: C.muted }}>
                    {p.unit}
                  </p>
                </div>
                <a
                  href={waLinkProducto(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-2 rounded-full transition-colors hover:opacity-90"
                  style={{ backgroundColor: C.forest, color: C.crema }}
                >
                  Cotizar
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
