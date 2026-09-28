'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { Demo } from './data'
import { Motif, headingFont } from './kit'

export interface BlitzDemo {
  slug: string
  name: string
  rubro: string
  city: string
  tagline: string
  gradient: string
}

type CatalogDemo = Demo | {
  slug: 'cabanas-la-quebrada'
  name: string
  rubro: string
  created: string
  city: string
  tagline: string
  special: true
}

type Family = {
  title: string
  matches: string[]
}

const FAMILIES: Family[] = [
  {
    title: 'Salud y clínicas',
    matches: [
      'clínica',
      'veterinaria',
      'kinesi',
      'fonoaudi',
      'oftalm',
      'centro médico',
    ],
  },
  {
    title: 'Restaurantes y cafés',
    matches: [
      'restaurante',
      'cafeter',
      'hamburgues',
      'restobar',
      'pasteler',
      'panader',
      'helader',
      'sushi',
      'comida',
    ],
  },
  {
    title: 'Belleza y estética',
    matches: ['peluquer', 'barber', 'manicure', 'uñas', 'spa', 'estética'],
  },
  {
    title: 'Automotriz',
    matches: [
      'taller mecánico',
      'lubricentro',
      'lavado',
      'grúa',
      'repuesto',
      'automotriz',
    ],
  },
  {
    title: 'Construcción y oficios',
    matches: [
      'constructora',
      'arquitectura',
      'electricista',
      'gasfiter',
      'carpinter',
      'mueble',
      'ferreter',
      'alumin',
      'ventana',
    ],
  },
  {
    title: 'Comercio y tiendas',
    matches: [
      'tienda',
      'botiller',
      'mercado',
      'minimarket',
      'mayorista',
      'óptica',
      'ropa',
      'lencería',
      'herramienta',
    ],
  },
  {
    title: 'Turismo y hospedaje',
    matches: [
      'cabaña',
      'hostal',
      'hotel',
      'camping',
      'agroturismo',
      'evento',
    ],
  },
  {
    title: 'Deportes y recreación',
    matches: [
      'gimnasio',
      'complejo deportivo',
      'padel',
      'fútbol',
      'parque infantil',
    ],
  },
  {
    title: 'Servicios profesionales',
    matches: [
      'abogado',
      'contador',
      'publicidad',
      'corretaje',
      'seguridad',
      'escuela de conductores',
      'jardín infantil',
    ],
  },
  { title: 'Otros', matches: [] },
]

const CABANAS_LA_QUEBRADA: CatalogDemo = {
  slug: 'cabanas-la-quebrada',
  name: 'Cabañas La Quebrada',
  rubro: 'Cabañas',
  created: '2026-09-25',
  city: 'Talca',
  tagline: 'Mockup premium con identidad propia: refugio natural del Maule.',
  special: true,
}

function familyFor(rubro: string) {
  const normalized = rubro.toLocaleLowerCase('es')
  return (
    FAMILIES.find(
      (family) =>
        family.matches.length > 0 &&
        family.matches.some((match) => normalized.includes(match)),
    ) ?? FAMILIES[FAMILIES.length - 1]
  )
}

function isSpecial(demo: CatalogDemo): demo is Extract<CatalogDemo, { special: true }> {
  return 'special' in demo
}

function DemoCard({ demo }: { demo: CatalogDemo }) {
  if (isSpecial(demo)) {
    return (
      <Link
        href={`/demos/${demo.slug}`}
        className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
      >
        <div
          className="relative h-[112px] flex items-end p-4"
          style={{
            background:
              'linear-gradient(135deg, #0E241B 0%, #173A2B 55%, #C4704B 140%)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="absolute top-3 right-3 w-[40px] opacity-30"
            fill="none"
            stroke="#FAF7F0"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M3 19 L9 7 L13 14 L16 9 L21 19 Z" />
            <circle cx="17.5" cy="5" r="1.8" />
          </svg>
          <span className="font-display font-bold tracking-display text-lg leading-tight text-[#FAF7F0] drop-shadow-sm">
            {demo.name}
          </span>
        </div>
        <CardBody demo={demo} suffix="lead real" />
      </Link>
    )
  }

  return (
    <Link
      href={`/demos/${demo.slug}`}
      className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
    >
      <div
        className="relative h-[112px] flex items-end p-4"
        style={{
          background: `linear-gradient(135deg, ${demo.theme.accent} 0%, ${demo.theme.soft} 140%)`,
        }}
      >
        <Motif
          motif={demo.motif}
          className="absolute top-3 right-3 w-[40px] opacity-30"
        />
        <span
          className={`${headingFont(demo.theme)} text-lg leading-tight drop-shadow-sm`}
          style={{ color: '#fff' }}
        >
          {demo.name}
        </span>
      </div>
      <CardBody demo={demo} />
    </Link>
  )
}

function CardBody({
  demo,
  suffix,
}: {
  demo: Pick<CatalogDemo, 'rubro' | 'city' | 'tagline'>
  suffix?: string
}) {
  return (
    <div className="p-4">
      <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
        {demo.rubro} · {demo.city}
        {suffix ? ` · ${suffix}` : ''}
      </p>
      <p className="text-body-sm text-ink-muted leading-snug mb-3">
        {demo.tagline}
      </p>
      <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
        Ver demo →
      </span>
    </div>
  )
}

function BlitzCard({ demo }: { demo: BlitzDemo }) {
  return (
    <Link
      href={`/demos/${demo.slug}`}
      className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
    >
      <div
        className="relative h-[112px] flex items-end p-4"
        style={{ background: demo.gradient }}
      >
        <span className="font-display font-bold tracking-display text-lg leading-tight text-white drop-shadow-sm">
          {demo.name}
        </span>
      </div>
      <CardBody demo={demo} suffix="lead real" />
    </Link>
  )
}

function Grid({ demos }: { demos: CatalogDemo[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {demos.map((demo) => (
        <li key={demo.slug}>
          <DemoCard demo={demo} />
        </li>
      ))}
    </ul>
  )
}

function BlitzGrid({ demos }: { demos: BlitzDemo[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {demos.map((demo) => (
        <li key={demo.slug}>
          <BlitzCard demo={demo} />
        </li>
      ))}
    </ul>
  )
}

export default function DemoCatalog({
  demos,
  blitz,
}: {
  demos: Demo[]
  blitz: BlitzDemo[]
}) {
  const [mode, setMode] = useState<'rubro' | 'nuevos'>('rubro')
  const allDemos = useMemo(
    () => [...demos, CABANAS_LA_QUEBRADA].sort(
      (a, b) =>
        b.created.localeCompare(a.created) || a.name.localeCompare(b.name, 'es'),
    ),
    [demos],
  )
  const families = useMemo(
    () =>
      FAMILIES.map((family) => ({
        ...family,
        demos: [
          ...demos.filter((demo) => familyFor(demo.rubro) === family),
          ...(family.title === 'Turismo y hospedaje'
            ? [CABANAS_LA_QUEBRADA]
            : []),
        ].sort((a, b) => a.name.localeCompare(b.name, 'es')),
      })).filter((family) => family.demos.length > 0),
    [demos],
  )

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-ui text-ink-muted">
          Ordenar catálogo
        </p>
        <div className="inline-flex border border-divider bg-white p-1 self-start sm:self-auto">
          {[
            ['rubro', 'Por rubro'],
            ['nuevos', 'Más nuevos'],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={mode === value}
              onClick={() => setMode(value as 'rubro' | 'nuevos')}
              className={`px-3 py-2 font-mono text-xs uppercase tracking-ui transition-colors ${
                mode === value
                  ? 'bg-ink text-cream'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {mode === 'rubro' ? (
        <div className="space-y-14">
          {families.map((family) => (
            <section key={family.title}>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-display tracking-display mb-5">
                {family.title}
              </h2>
              <Grid demos={family.demos} />
            </section>
          ))}
        </div>
      ) : (
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-display tracking-display mb-5">
            Más nuevos
          </h2>
          <Grid demos={allDemos} />
        </section>
      )}

      <section className="mt-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold leading-display tracking-display mb-2">
          Mockups para leads reales
        </h2>
        <p className="text-body-sm text-ink-muted leading-snug mb-6 max-w-xl">
          Muestras personalizadas con identidad propia, armadas solo con
          datos públicos de cada ficha de Google.
        </p>
        <BlitzGrid demos={blitz} />
      </section>
    </div>
  )
}
