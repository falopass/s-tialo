/**
 * lib/config.ts
 *
 * SINGLE SOURCE OF TRUTH para Sitiazo.cl
 *
 * REGLAS CRÍTICAS:
 * 1. NUNCA hardcodear datos de negocio en componentes/páginas
 * 2. Toda data debe importarse desde aquí
 * 3. Valores sensibles (teléfono) DEBEN venir de env vars
 * 4. Si necesitas un valor nuevo (precio, plazo, contacto), agrégalo aquí primero
 */

// ─────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────

function formatPhoneNumber(raw: string): string {
  const cleaned = raw.replace(/\D/g, '')
  if (cleaned.length !== 11 || !cleaned.startsWith('56')) {
    return `+${raw}`
  }
  return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7)}`
}

export function formatCLP(amount: number): string {
  return `$${amount.toLocaleString('es-CL')}`
}

// ─────────────────────────────────────────────
// ENVIRONMENT HELPERS
// ─────────────────────────────────────────────

function getEnv(key: string, fallback: string, required = false): string {
  const value = process.env[key]

  if (!value) {
    if (required && process.env.NODE_ENV === 'production') {
      throw new Error(`Missing required env var: ${key}`)
    }
    if (process.env.NODE_ENV !== 'test') {
      console.warn(`Env var ${key} not set, using fallback: ${fallback}`)
    }
    return fallback
  }

  return value
}

// ─────────────────────────────────────────────
// SITE
// ─────────────────────────────────────────────

export const SITE = {
  name: 'Sitiazo',
  domain: 'sitiazo.cl',
  url: getEnv('NEXT_PUBLIC_SITE_URL', 'https://sitiazo.cl'),
  tagline: 'Páginas web que sí venden.',
  description:
    'Estudio de diseño web para pymes chilenas. Páginas que venden, listas en 7 días desde $19.990 al mes con hosting y dominio incluidos. Desde el Maule para todo Chile.',
  shortDescription: 'Estudio de diseño web para pymes chilenas.',
  locale: 'es-CL',
  ogLocale: 'es_CL',
  currency: 'CLP',
} as const

/** Nombre público completo de la marca. */
export const MARCA = 'Sitiazo.cl'

// ─────────────────────────────────────────────
// CONTACT (todo viene de env vars)
// ─────────────────────────────────────────────

const RAW_WHATSAPP = getEnv('NEXT_PUBLIC_WHATSAPP_NUMBER', '56962343671')
export const CONTACT = {
  whatsappNumber: RAW_WHATSAPP,
  whatsappDisplay: formatPhoneNumber(RAW_WHATSAPP),
  telephone: `+${RAW_WHATSAPP}`,
} as const

// ─────────────────────────────────────────────
// WHATSAPP MESSAGES
// ─────────────────────────────────────────────

export type WhatsAppContext =
  | 'home'
  | 'planes'
  | 'basico'
  | 'recomendado'
  | 'catalogo'
  | 'contacto'
  | 'cotizacion'
  | 'duda'
  | 'demo'

// Static messages (no dependen de PLANS)
const STATIC_WHATSAPP_MESSAGES: Record<string, string> = {
  home: 'Hola Sitiazo! Vi su web y me interesa cotizar para mi pyme 🟡',
  planes: 'Hola! Quiero info sobre los planes de Sitiazo 🟡',
  contacto: 'Hola Sitiazo! Quiero conversar sobre un proyecto web 🟡',
  cotizacion: 'Hola! Necesito una cotización para mi proyecto web 🟡',
  duda: 'Hola Sitiazo! Tengo una duda antes de cotizar 🟡',
  demo: 'Hola! Vi el demo que me prepararon — les mando fotos en mejor calidad 🟡',
}

export function whatsappLink(context: WhatsAppContext = 'contacto'): string {
  // Dynamic messages that include plan prices (resolved at call time)
  const dynamicMessages: Record<string, () => string> = {
    basico: () =>
      `Hola! Me interesa el plan Básico (${PLANS.basico.priceFormatted} al mes, ${PRECIOS_NOTA}). ¿Podemos conversar? 🟡`,
    recomendado: () =>
      `Hola! Me interesa el plan Recomendado (${PLANS.recomendado.priceFormatted} al mes, ${PRECIOS_NOTA}). ¿Podemos conversar? 🟡`,
    catalogo: () =>
      `Hola! Me interesa el plan Catálogo (${PLANS.catalogo.priceFormatted} al mes, ${PRECIOS_NOTA}). Quisiera más detalles 🟡`,
  }

  const message =
    dynamicMessages[context]?.() ?? STATIC_WHATSAPP_MESSAGES[context]
  return `https://wa.me/${RAW_WHATSAPP}?text=${encodeURIComponent(message)}`
}

// ─────────────────────────────────────────────
// URL HELPERS
// ─────────────────────────────────────────────

export function siteUrl(path = ''): string {
  const base = SITE.url.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return path === '' ? base : `${base}${cleanPath}`
}

// ─────────────────────────────────────────────
// PLAN PRICES (standalone constants)
// ─────────────────────────────────────────────

// Modelo de cobro (2026-11): mensualidad por plan, todo incluido y sin permanencia.
// La compra única existe solo para el Básico y lleva renovación anual.
const MENSUAL_BASICO = 19_990
const MENSUAL_RECOMENDADO = 29_990
const MENSUAL_CATALOGO = 44_990
/** Activación única al contratar la mensualidad (no aplica con el pago anual). */
export const ACTIVACION = 29_990
export const ACTIVACION_FORMATTED = formatCLP(ACTIVACION)
/** El pago anual adelantado cobra 10 mensualidades por 12 meses. */
export const MESES_PAGADOS_ANUAL = 10
/** Compra única del plan Básico y su renovación anual desde el segundo año. */
export const COMPRA_BASICO = 179_990
export const COMPRA_BASICO_FORMATTED = formatCLP(COMPRA_BASICO)
export const RENOVACION_ANUAL = 59_990
export const RENOVACION_ANUAL_FORMATTED = formatCLP(RENOVACION_ANUAL)

/** Nota junto al precio mensual: los valores publicados traen el IVA dentro. */
export const PRECIOS_NOTA = 'IVA incluido'

/**
 * Oferta de lanzamiento (decisión de Diego, 2026-11-08): activación gratis contratando hasta el
 * 15 de noviembre de 2026, a las 23:59 de Chile (horario de verano, UTC-3). Pasada la fecha, el
 * sitio vuelve solo al texto normal (ver `SegunOferta`); después conviene borrar estas constantes.
 */
export const OFERTA_ACTIVACION_HASTA = Date.parse('2026-11-15T23:59:59-03:00')
export const OFERTA_ACTIVACION_FECHA = '15 de noviembre'
export function ofertaActivacionVigente(ahora: number = Date.now()) {
  return ahora <= OFERTA_ACTIVACION_HASTA
}

// ─────────────────────────────────────────────
// PLANS (single source of truth para precios)
// ─────────────────────────────────────────────

export type PlanId = 'basico' | 'recomendado' | 'catalogo'

export interface Plan {
  id: PlanId
  name: string
  tag: string
  badge?: string
  /** Mensualidad del plan, con hosting, dominio y ajustes de contenido incluidos. */
  price: number
  /** La mensualidad formateada, sin el "/mes" (p. ej. "$19.990"). */
  priceFormatted: string
  /** Pago anual adelantado: 12 meses por MESES_PAGADOS_ANUAL mensualidades. */
  annualPrice: number
  annualFormatted: string
  deliveryDays: number
  deliveryLabel: string
  pages: string
  description: string
  features: string[]
  ctaText: string
  whatsappContext: WhatsAppContext
  highlighted?: boolean
}

export const PLANS: Record<PlanId, Plan> = {
  basico: {
    id: 'basico',
    name: 'Básico',
    tag: 'Para empezar',
    price: MENSUAL_BASICO,
    priceFormatted: formatCLP(MENSUAL_BASICO),
    annualPrice: MENSUAL_BASICO * MESES_PAGADOS_ANUAL,
    annualFormatted: formatCLP(MENSUAL_BASICO * MESES_PAGADOS_ANUAL),
    deliveryDays: 7,
    deliveryLabel: '7 días hábiles',
    pages: '1 página',
    description: 'Perfecto para almacenes, peluquerías y negocios de barrio.',
    features: [
      '1 página web',
      'Diseño editorial a medida',
      'Botón directo a WhatsApp',
      'Responsive mobile-first',
      'Entrega en 7 días hábiles',
    ],
    ctaText: 'Cotizar Básico →',
    whatsappContext: 'basico',
  },
  recomendado: {
    id: 'recomendado',
    name: 'Recomendado',
    tag: 'Más pedido',
    badge: 'MÁS PEDIDO',
    price: MENSUAL_RECOMENDADO,
    priceFormatted: formatCLP(MENSUAL_RECOMENDADO),
    annualPrice: MENSUAL_RECOMENDADO * MESES_PAGADOS_ANUAL,
    annualFormatted: formatCLP(MENSUAL_RECOMENDADO * MESES_PAGADOS_ANUAL),
    deliveryDays: 10,
    deliveryLabel: '10 días hábiles',
    pages: '5 páginas',
    description: 'Ideal para servicios profesionales y restaurantes.',
    features: [
      'Hasta 5 secciones',
      'Blog integrado',
      'Diseño editorial a medida',
      'SEO local (Google My Business)',
      'Responsive mobile-first',
      'Entrega en 10 días hábiles',
    ],
    ctaText: 'Cotizar Recomendado →',
    whatsappContext: 'recomendado',
    highlighted: true,
  },
  catalogo: {
    id: 'catalogo',
    name: 'Catálogo',
    tag: 'Premium',
    price: MENSUAL_CATALOGO,
    priceFormatted: formatCLP(MENSUAL_CATALOGO),
    annualPrice: MENSUAL_CATALOGO * MESES_PAGADOS_ANUAL,
    annualFormatted: formatCLP(MENSUAL_CATALOGO * MESES_PAGADOS_ANUAL),
    deliveryDays: 14,
    deliveryLabel: '14 días hábiles',
    pages: 'Hasta 10 páginas',
    description: 'Para tiendas, estéticas y servicios premium.',
    features: [
      'Hasta 10 productos o servicios',
      'Fichas con foto y precio',
      'Carrito: el pedido te llega por WhatsApp o con transferencia',
      'Filtros y búsqueda',
      'Cal.com integrado',
      'SEO local + Schema.org',
      'Entrega en 14 días hábiles',
    ],
    ctaText: 'Cotizar Catálogo →',
    whatsappContext: 'catalogo',
  },
}

export const PLANS_ARRAY: Plan[] = [
  PLANS.basico,
  PLANS.recomendado,
  PLANS.catalogo,
]

/** Precio de entrada, para frases tipo "desde $19.990 al mes". */
export const STARTING_PRICE = `${PLANS.basico.priceFormatted} al mes`

// ─────────────────────────────────────────────
// EXTRAS
// ─────────────────────────────────────────────

export const EXTRAS = [
  {
    name: 'Logo',
    price: '$29.990',
    desc: 'Diseño de logo editorial que calza con tu web.',
  },
  {
    name: 'Sesión de fotos',
    price: '$49.990',
    desc: 'Fotos de tus productos o espacio. Región del Maule.',
  },
  {
    name: 'Posts extra',
    price: '$19.990 c/u',
    desc: 'Notas de blog o fichas de producto adicionales.',
  },
]

// ─────────────────────────────────────────────
// FORMAS DE PAGO
// ─────────────────────────────────────────────

/** Cuotas sin interés de la compra única. */
export const PAGO_CUOTAS = 3

/** Monto de cada cuota sin interés, redondeado hacia arriba al peso. */
export function cuotas(precio: number) {
  const monto = Math.ceil(precio / PAGO_CUOTAS)
  return { n: PAGO_CUOTAS, monto, montoFormatted: formatCLP(monto) }
}

/** La compra única solo existe para este plan; los demás van mensual o anual. */
export const PLAN_COMPRA: PlanId = 'basico'

export interface FormaPago {
  id: string
  nombre: string
  precio: string
  detalle: string
  destacado?: boolean
}

export const FORMAS_PAGO: FormaPago[] = [
  {
    id: 'mensual',
    nombre: 'Mensual',
    precio: `desde ${formatCLP(MENSUAL_BASICO)} / mes`,
    detalle: `Todo incluido: hosting, dominio y los ajustes de contenido que necesites. Activación de ${ACTIVACION_FORMATTED} al comenzar; el primer mes se paga cuando te entregamos la web. Sin permanencia: avisas con 30 días y listo.`,
    destacado: true,
  },
  {
    id: 'anual',
    nombre: 'Anual',
    precio: `desde ${formatCLP(MENSUAL_BASICO * MESES_PAGADOS_ANUAL)} / año`,
    detalle: `Pagas ${MESES_PAGADOS_ANUAL} meses y te llevas 12, sin activación. Incluye lo mismo que la mensualidad.`,
  },
  {
    id: 'unico',
    nombre: 'Compra única, plan Básico',
    precio: `${COMPRA_BASICO_FORMATTED} + ${RENOVACION_ANUAL_FORMATTED} al año`,
    detalle: `Solo para el plan Básico. 50% para comenzar y 50% al terminar, o en hasta ${PAGO_CUOTAS} cuotas sin interés. Desde el segundo año, ${RENOVACION_ANUAL_FORMATTED} al año por hosting, dominio y soporte.`,
  },
]

// ─────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────

export interface TeamMember {
  name: string
  role: string
  figLabel: string
  bio: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Diego',
    role: 'CEO',
    figLabel: 'fig. 01',
    bio: 'Estudiante de Ingeniería Civil en Computación en la Universidad de Talca y CEO de Sitiazo. Construyo webs como hobby y sustento para mis estudios. Ya he construido páginas para algunas pymes, como CVListo (cvlisto.cl) y Rancho Itahue (ranchoitahue.cl). Vivo en el Maule. Disfruto de la computación, el diseño y resolver problemas con el mínimo de código posible.',
  },
]

// ─────────────────────────────────────────────
// LEGAL & BUSINESS
// ─────────────────────────────────────────────

export const LEGAL = {
  ownerName: 'Diego Bravo Opazo',
  legalName: 'Eldrinor y Vaelen',
  city: 'Curicó',
  region: 'Región del Maule',
  country: 'Chile',
  countryCode: 'CL',

  address: {
    '@type': 'PostalAddress' as const,
    addressLocality: 'Curicó',
    addressRegion: 'Maule',
    addressCountry: 'CL',
  },

  founded: '2024',
  serviceArea: 'Chile',
} as const

// ─────────────────────────────────────────────
// SEO DEFAULTS
// ─────────────────────────────────────────────

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Sitiazo.cl',
  defaultTitle: `${MARCA} | Páginas web que sí venden`,
  defaultDescription: SITE.description,

  ogImage: {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: `${MARCA} | Páginas web que sí venden`,
  },
} as const

// ─────────────────────────────────────────────
// SCHEMA (JSON-LD)
// ─────────────────────────────────────────────

/** @id estable de la organización, para enlazar WebSite.publisher y otros grafos. */
const ORGANIZACION_ID = `${SITE.url.replace(/\/$/, '')}/#organizacion`

export const SCHEMA = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORGANIZACION_ID,
    name: MARCA,
    // legalName: pendiente de confirmar por Diego (ver PLAN-REDISENO.md)
    description: SITE.description,
    email: 'hola@sitiazo.cl',
    url: SITE.url,
    telephone: CONTACT.telephone,
    address: LEGAL.address,
    priceRange: `${PLANS.basico.priceFormatted} - ${PLANS.catalogo.priceFormatted}`,
    image: `${SITE.url}/og-image.png`,
    slogan: SITE.tagline,
    areaServed: [
      { '@type': 'State', name: 'Región del Maule' },
      { '@type': 'State', name: 'Región Metropolitana' },
      { '@type': 'State', name: 'Región de Valparaíso' },
      { '@type': 'State', name: 'Región de Coquimbo' },
      { '@type': 'State', name: 'Región de O’Higgins' },
      { '@type': 'State', name: 'Región del Biobío' },
      { '@type': 'State', name: 'Región de La Araucanía' },
      { '@type': 'State', name: 'Región de Los Lagos' },
      { '@type': 'City', name: 'Santiago' },
      { '@type': 'City', name: 'Valparaíso' },
      { '@type': 'City', name: 'Viña del Mar' },
      { '@type': 'City', name: 'La Serena' },
      { '@type': 'City', name: 'Rancagua' },
      { '@type': 'City', name: 'Concepción' },
      { '@type': 'City', name: 'Temuco' },
      { '@type': 'City', name: 'Puerto Montt' },
      { '@type': 'City', name: 'Talca' },
      { '@type': 'City', name: 'San Clemente' },
      { '@type': 'City', name: 'Curicó' },
      { '@type': 'City', name: 'Linares' },
      { '@type': 'Country', name: 'Chile' },
    ],
    knowsAbout: [
      'Diseño web para pymes',
      'Páginas web para negocios',
      'Catálogos online con WhatsApp',
      'SEO local',
    ],
    founder: {
      '@type': 'Person',
      name: LEGAL.ownerName,
    },
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: MARCA,
    url: SITE.url,
    inLanguage: SITE.locale,
    publisher: { '@id': ORGANIZACION_ID },
  },
  /** Catálogo de ofertas: las tres mensualidades con su precio entero en CLP. */
  offerCatalog: {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Planes de diseño web de ${MARCA}`,
    url: siteUrl('/planes/'),
    itemListElement: PLANS_ARRAY.map((plan) => ({
      '@type': 'Offer',
      name: `Plan ${plan.name}`,
      description: `${plan.description} ${PRECIOS_NOTA}. Activación $0 hasta el ${OFERTA_ACTIVACION_FECHA} de 2026; después ${ACTIVACION_FORMATTED}.`,
      price: plan.price,
      priceCurrency: SITE.currency,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plan.price,
        priceCurrency: SITE.currency,
        unitCode: 'MON',
      },
      availability: 'https://schema.org/InStock',
      itemOffered: {
        '@type': 'Service',
        name: `Plan ${plan.name}, ${MARCA}`,
        provider: { '@id': ORGANIZACION_ID },
      },
    })),
  },
} as const

// ─────────────────────────────────────────────
// RUNTIME VALIDATION (en dev)
// ─────────────────────────────────────────────

if (process.env.NODE_ENV === 'development') {
  if (RAW_WHATSAPP === '56900000000' || RAW_WHATSAPP === '569XXXXXXXX') {
    console.warn(
      'WHATSAPP NUMBER IS A PLACEHOLDER! Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local',
    )
  }
}
