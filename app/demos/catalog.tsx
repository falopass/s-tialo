'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { Demo } from './data'
import creados from './creados.json'
import { Motif, headingFont } from './kit'

const CREADOS: Record<string, string> = creados

export interface BlitzDemo {
  slug: string
  name: string
  rubro: string
  city: string
  tagline: string
  gradient: string
}

type CatalogBlitz = BlitzDemo & { created: string }
type CatalogDemo = Demo | CatalogBlitz | {
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
      'dentista',
      'dental',
      'odont',
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
      'waff',
      'rápida',
    ],
  },
  {
    title: 'Belleza y estética',
    matches: [
      'peluquer',
      'barber',
      'manicure',
      'manicura',
      'uñas',
      'spa',
      'estética',
      'salón',
    ],
  },
  {
    title: 'Automotriz',
    matches: [
      'taller mecánico',
      'lubricentro',
      'lavado',
      'mecán',
      'mecan',
      'vulcan',
      'automóvil',
      'automovil',
      'desaboll',
      'grúa',
      'repuesto',
      'lubric',
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
      'muebler',
      'ferreter',
      'alumin',
      'ventana',
      'vidrier',
      'pintura',
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
      'botiquín',
      'hogar',
      'máquina',
      'maquina',
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
      'hospedaje',
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
      'recinto deportivo',
      'padel',
      'fútbol',
      'parque infantil',
      'cumpleaños',
      'piscina',
    ],
  },
  {
    title: 'Servicios profesionales',
    matches: [
      'abogado',
      'jurídico',
      'contador',
      'publicidad',
      'corretaje',
      'seguridad',
      'escuela de conductores',
      'jardín infantil',
      'educación inicial',
      'impresión y diseño',
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

const BLITZ_CREATED: Record<string, string> = {
  'topisima-optica-talca': '2026-09-29',
  'venta-de-autos-usados': '2026-09-29',
  'vivero-huilquilemu': '2026-09-29',
  'centro-de-eventos-capelli': '2026-09-29',
  'hema-parque-infantil': '2026-09-28',
  'cabanas-los-barriles': '2026-09-28',
  'clinica-veterinaria-ecovets': '2026-09-28',
  'constructora-musalem': '2026-09-28',
  'taller-ferrasil': '2026-09-28',
  alcatorce: '2026-09-28',
  'catffeine-cafe': '2026-09-28',
  'patitas-pets-iquique': '2026-09-28',
  'luze-vital': '2026-09-28',
  'constructora-avatar': '2026-09-28',
  'swissvet-talcahuano': '2026-09-28',
  'clinica-veterinaria-zoovet': '2026-09-28',
  'antumalen-restaurant': '2026-09-28',
  'taller-zunino-266': '2026-09-28',
  'lubricentro-huamachuco': '2026-09-28',
  'lavaseco-flash': '2026-09-28',
  'delicias-caseras-fabiana': '2026-09-28',
  'marbella-talcahuano': '2026-09-28',
  'sabor-marino-talcahuano': '2026-09-28',
  'puntanorte-puerto': '2026-09-28',
  'brilla-el-sol-talca': '2026-09-28',
  'pannton-arquitectura': '2026-09-28',
  'gacitua-producciones': '2026-09-28',
  'villa-antillanca-hotel-centro-eventos': '2026-09-28',
  'automotriz-tudela-mecanica-electricidad': '2026-09-28',
  'hope-bakery-chile': '2026-09-28',
  'monky-coffee': '2026-09-28',
  'gotitas-de-amor': '2026-09-28',
  'new-era-barbershop': '2026-09-28',
  triadent: '2026-09-25',
  'centro-m-dico-veterinario-one-health': '2026-09-25',
  homyvet: '2026-09-25',
  'altos-de-lircay': '2026-09-25',
  'jd-abogados': '2026-09-25',
  'santa-fe': '2026-09-25',
  'rancho-itahue': '2026-09-26',
  'panaderia-bravo': '2026-09-26',
  'vivero-dona-ines': '2026-09-26',
  'vivero-entre-raices': '2026-09-27',
  'barberia-rulos-style-barberia-curico': '2026-09-27',
  'lua-nails': '2026-09-26',
  nailsyus: '2026-09-27',
  'wow-park': '2026-09-26',
  matrokin: '2026-09-26',
  sigel: '2026-09-26',
  zamono: '2026-09-26',
  'lubricentro-y-repuestos-san-martin': '2026-09-28',
  'salon-de-belleza-gabriela-saavedra-talca': '2026-09-27',
  'centro-spa-roxana': '2026-09-27',
  'clinica-y-farmacia-veterinaria-angel-guardian': '2026-09-27',
  'las-viejas-cochinas': '2026-09-27',
  'la-pica-de-los-tatas': '2026-09-27',
  'la-pica-del-mateo': '2026-09-27',
  'cafe-la-francesa': '2026-09-27',
  'csf-especialidades-veterinarias-san-francisco': '2026-09-27',
  'emporio-vintage-cafe': '2026-09-27',
  'plantitas-ya-vivero-romeral-ventas-de-plantas-y-': '2026-09-27',
  'wake-up': '2026-09-27',
  'distribuidora-mym-curico': '2026-09-27',
  'parrilladas-caupolican': '2026-09-27',
  'patagonia-dulce-pasteleria': '2026-09-27',
  'centro-san-ricardo': '2026-09-27',
  'my-fusion-gym': '2026-09-27',
  'nativa-curico': '2026-09-27',
  'restobar-los-leones': '2026-09-27',
  'clinica-veterinaria-docpino': '2026-09-27',
  'girls-house-estetica': '2026-09-27',
  'vasquez-muebles-linares-spa': '2026-09-27',
  'restaurant-el-encuentro': '2026-09-27',
  'muebleria-comercial-sofia': '2026-09-27',
  'clinica-t-renova-spa': '2026-09-27',
  'victoria-nail-school': '2026-09-27',
  'clinica-dental-bilbao-urgencias-dentales-curico-': '2026-09-27',
  'ferreteria-williams-pencahue': '2026-09-27',
  'taller-mecanico-servimac': '2026-09-27',
  'hospital-clinico-veterinario-la-granja-linares': '2026-09-27',
  'nicolas-atelier': '2026-09-27',
  ultrasport19: '2026-09-27',
  'atlantix-clinica-odontologica-san-javier-de-lonc': '2026-09-27',
  'peluqueria-fran-wartemberg': '2026-09-27',
  'hostal-josefa': '2026-09-27',
  'brutal-curico': '2026-09-27',
  'comercial-rio-claro': '2026-09-27',
  'le-petit-pasteleria': '2026-09-27',
  'tienda-by-joseline-spa': '2026-09-27',
  danybloom: '2026-09-27',
  'mia-centro-de-estetica': '2026-09-27',
  'muebleria-infinity-muebles-talca': '2026-09-27',
  'hair-home-studio-claudia-beltran': '2026-09-27',
  'cabanas-vista-hermosa': '2026-09-27',
  'forastero-sabor-en-cada-bocado': '2026-09-27',
  damianstyle: '2026-09-27',
  'italo-vet-linares': '2026-09-27',
  'ferreteria-la-ruta': '2026-09-27',
  bravosgym: '2026-09-27',
  'gimnasio-body-fitness-talca': '2026-09-28',
  'ferreteria-valdebenito': '2026-09-27',
  'peluqueria-gloria': '2026-09-27',
  'servicio-tecnico-automotriz-millycar': '2026-09-27',
  'mym-taller-mecanico-talca': '2026-09-28',
  'bxtraining-1': '2026-09-27',
  'pasteleria-y-panaderia-eluney': '2026-09-27',
  'clinica-dental-san-jose': '2026-09-27',
  'clinica-prosaluddental': '2026-09-27',
  'a-toda-maquina-ventas-y-servicios': '2026-09-27',
  'agrocesped-del-maule': '2026-09-27',
  johnbarber: '2026-09-27',
  'ferreteria-don-jack': '2026-09-27',
  'vulcanizacion-nikimoto': '2026-09-27',
  'la-terraza': '2026-09-27',
  'muebles-a-tu-estilo': '2026-09-27',
  'beauty-love': '2026-09-27',
  'distribuidora-renato-molina': '2026-09-27',
  'ius-abogados-linares': '2026-09-27',
  'defensa-molina-abogados': '2026-09-27',
  'jardin-vivero-carolina': '2026-09-27',
  'que-barato-lf': '2026-09-27',
  'san-clemente-heladeria': '2026-09-27',
  'estudio-juridico-talca': '2026-09-28',
  'tricapa-talca-spa': '2026-09-28',
  'centro-oftalmologico-nacional': '2026-09-28',
  'luxe-gym-talca': '2026-09-28',
  'kid-mania': '2026-09-28',
  'turismo-las-brujas': '2026-09-28',
  alumrod: '2026-09-28',
  'constructora-valdes': '2026-09-28',
  'cafeteria-walffies': '2026-09-28',
  'entre-lomas': '2026-09-28',
  'family-gym-san-clemente': '2026-09-28',
  'fonoaudiologa-karen-oyarce': '2026-09-28',
  'nafi-arquitectura': '2026-09-28',
  'el-bajon-del-barny': '2026-09-28',
  'integravet': '2026-09-28',
  'drivet-animals': '2026-09-28',
  'veterinaria-ramadillas': '2026-09-28',
  'pepivet': '2026-09-28',
  'veterinaria-pineiro': '2026-09-28',
  'el-uruguayo': '2026-09-28',
  'globalauto': '2026-09-28',
  'mecanico-juan-vivar': '2026-09-28',
  'automotriz-gomez': '2026-09-28',
  's-j-full-car-service': '2026-09-28',
  'hospital-veterinario-talcahuano': '2026-09-28',
  'veterinaria-sos-rancagua': '2026-09-28',
  'centro-veterinario-colchagua': '2026-09-28',
  'yum-express-talca': '2026-09-28',
  'camping-y-cabanas-jemaresdagu': '2026-09-28',
  'oveja-negra-linares': '2026-09-29',
  'la-terraza-resto-bar-rauco': '2026-09-29',
  kochu: '2026-09-29',
  'soluciones-mecanicas-el-rey': '2026-09-29',
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

function isBlitz(demo: CatalogDemo): demo is CatalogBlitz {
  return 'gradient' in demo
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

  if (isBlitz(demo)) {
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

export default function DemoCatalog({
  demos,
  blitz,
}: {
  demos: Demo[]
  blitz: BlitzDemo[]
}) {
  const [mode, setMode] = useState<'rubro' | 'nuevos'>('rubro')
  const catalogDemos = useMemo(() => {
    const bySlug = new Map<string, CatalogDemo>()

    blitz.forEach((demo) => {
      bySlug.set(demo.slug, {
        ...demo,
        created: CREADOS[demo.slug] ?? BLITZ_CREATED[demo.slug] ?? '',
      })
    })
    demos.forEach((demo) => {
      if (!bySlug.has(demo.slug)) {
        bySlug.set(demo.slug, {
          ...demo,
          created: CREADOS[demo.slug] ?? demo.created ?? '',
        })
      }
    })
    bySlug.set(CABANAS_LA_QUEBRADA.slug, {
      ...CABANAS_LA_QUEBRADA,
      created:
        CREADOS[CABANAS_LA_QUEBRADA.slug] ?? CABANAS_LA_QUEBRADA.created,
    })

    return [...bySlug.values()]
  }, [blitz, demos])
  const allDemos = useMemo(
    () =>
      [...catalogDemos].sort(
        (a, b) =>
          b.created.localeCompare(a.created) ||
          a.name.localeCompare(b.name, 'es'),
      ),
    [catalogDemos],
  )
  const families = useMemo(
    () =>
      FAMILIES.map((family) => ({
        ...family,
        demos: catalogDemos
          .filter((demo) => familyFor(demo.rubro) === family)
          .sort((a, b) => a.name.localeCompare(b.name, 'es')),
      })).filter((family) => family.demos.length > 0),
    [catalogDemos],
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

    </div>
  )
}
