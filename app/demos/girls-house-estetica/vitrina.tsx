'use client'

/**
 * app/demos/girls-house-estetica/vitrina.tsx
 *
 * La vitrina: grilla de servicios con filtros por categoría,
 * códigos de referencia y etiquetas de oferta. Los precios son
 * de muestra (ver content.ts).
 */

import { useState } from 'react'
import Image from 'next/image'
import { IMG, waLinkServicio } from './content'

export const C = {
  ink: '#17181A',
  signal: '#FFC300',
  steel: '#8A9199',
  paper: '#F4F5F6',
  line: 'rgba(23,24,26,0.14)',
} as const

export const HAZARD =
  'repeating-linear-gradient(-45deg, #FFC300 0 9px, #17181A 9px 18px)'

type Cat = 'rostro' | 'cejas-pestanas' | 'maquillaje'

const FILTERS: { key: string; label: string }[] = [
  { key: 'todas', label: 'Todas' },
  { key: 'rostro', label: 'Rostro' },
  { key: 'cejas-pestanas', label: 'Cejas y pestañas' },
  { key: 'maquillaje', label: 'Maquillaje' },
  { key: 'ofertas', label: 'En oferta' },
]

const CAT_LABEL: Record<Cat, string> = {
  rostro: 'Rostro',
  'cejas-pestanas': 'Cejas y pestañas',
  maquillaje: 'Maquillaje',
}

const PRODUCTS: {
  ref: string
  cat: Cat
  name: string
  desc: string
  time: string
  price: string
  before?: string
  tag?: string
  img: string
  pos?: string
}[] = [
  {
    ref: 'GH-01',
    cat: 'rostro',
    name: 'Limpieza facial profunda',
    desc: 'Higiene, exfoliación, extracción suave y mascarilla según tu tipo de piel.',
    time: '60 min',
    price: '$25.000',
    tag: 'La más pedida',
    img: 'detalle1.webp',
  },
  {
    ref: 'GH-02',
    cat: 'cejas-pestanas',
    name: 'Lifting de pestañas + tinte',
    desc: 'Curvatura y color sin extensiones: tus propias pestañas, despiertas.',
    time: '50 min',
    price: '$18.000',
    img: 'detalle3.webp',
  },
  {
    ref: 'GH-03',
    cat: 'cejas-pestanas',
    name: 'Perfilado y diseño de cejas',
    desc: 'Medición y diseño según tu rostro. Sin cejas de molde.',
    time: '30 min',
    price: '$8.000',
    before: '$10.000',
    tag: 'Oferta',
    img: 'hero.webp',
    pos: '70% 40%',
  },
  {
    ref: 'GH-04',
    cat: 'maquillaje',
    name: 'Maquillaje social',
    desc: 'Para matrimonios, graduaciones y eventos. Piel preparada y fijación de larga duración.',
    time: '60 min',
    price: '$30.000',
    img: 'detalle2.webp',
  },
  {
    ref: 'GH-05',
    cat: 'maquillaje',
    name: 'Pack novia',
    desc: 'Sesión de prueba más maquillaje el día del matrimonio, con kit de retoque.',
    time: '2 sesiones',
    price: '$79.000',
    before: '$95.000',
    tag: 'Oferta',
    img: 'hero.webp',
    pos: '30% 60%',
  },
  {
    ref: 'GH-06',
    cat: 'rostro',
    name: 'Depilación facial con hilo',
    desc: 'Cejas, labio o rostro completo con técnica de hilo: precisa y suave.',
    time: '20 min',
    price: '$6.000',
    img: 'detalle1.webp',
    pos: '65% 30%',
  },
]

export function Vitrina({ fontClass }: { fontClass: string }) {
  const [filter, setFilter] = useState('todas')
  const items = PRODUCTS.filter(
    (p) => filter === 'todas' || (filter === 'ofertas' ? !!p.before : p.cat === filter),
  )

  return (
    <div>
      {/* filtros */}
      <div
        className="flex flex-wrap items-center gap-2 mb-8 md:mb-10"
        role="group"
        aria-label="Filtrar servicios"
      >
        {FILTERS.map((f) => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={`text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] px-4 py-2 border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC300]${active ? '' : ' hover:border-[#8A9199] hover:text-[#17181A]'}`}
              style={{
                backgroundColor: active ? C.signal : 'transparent',
                borderColor: active ? C.signal : C.line,
                color: active ? C.ink : C.steel,
              }}
            >
              {f.label}
            </button>
          )
        })}
        <span
          className="ml-auto text-[11px] uppercase tracking-[0.14em]"
          style={{ color: C.steel }}
        >
          {items.length} {items.length === 1 ? 'servicio' : 'servicios'} · precios de muestra
        </span>
      </div>

      {/* grilla */}
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {items.map((p) => (
          <li
            key={p.ref}
            className="group flex flex-col border bg-white overflow-hidden transition-shadow hover:shadow-lg"
            style={{ borderColor: C.line }}
          >
            <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.ink }}>
              <Image
                src={`${IMG}/${p.img}`}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                style={p.pos ? { objectPosition: p.pos } : undefined}
              />
              <span
                className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.18em] px-2 py-1"
                style={{ backgroundColor: 'rgba(23,24,26,0.85)', color: '#fff' }}
              >
                {p.ref}
              </span>
              {p.before ? (
                <span
                  className="absolute top-0 right-4 text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5"
                  style={{ background: HAZARD, color: '#FFC300', textShadow: '0 1px 0 #17181A' }}
                >
                  Oferta
                </span>
              ) : p.tag ? (
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1"
                  style={{ backgroundColor: C.signal, color: C.ink }}
                >
                  {p.tag}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col flex-1 p-4 md:p-5">
              <p
                className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5"
                style={{ color: C.steel }}
              >
                {CAT_LABEL[p.cat]} · {p.time}
              </p>
              <h3
                className={`${fontClass} text-lg md:text-xl font-bold leading-tight mb-1.5`}
                style={{ color: C.ink }}
              >
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.steel }}>
                {p.desc}
              </p>
              <div
                className="mt-auto pt-3 border-t border-dashed flex items-end justify-between gap-3"
                style={{ borderColor: C.line }}
              >
                <div>
                  {p.before && (
                    <p
                      className="text-xs line-through leading-none mb-1.5"
                      style={{ color: C.steel }}
                    >
                      antes {p.before}
                    </p>
                  )}
                  <p
                    className={`${fontClass} inline-block text-xl md:text-2xl font-extrabold leading-none px-2 py-1 -ml-2`}
                    style={{ backgroundColor: C.signal, color: C.ink }}
                  >
                    {p.price}
                  </p>
                </div>
                <a
                  href={waLinkServicio(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-2 transition-colors hover:bg-[#FFC300] hover:text-[#17181A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17181A]"
                  style={{ backgroundColor: C.ink, color: '#fff' }}
                >
                  Reservar
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
