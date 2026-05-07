/**
 * lib/config.ts
 *
 * SINGLE SOURCE OF TRUTH para Sitiazo.cl
 *
 * REGLAS CRÍTICAS:
 * 1. NUNCA hardcodear datos de negocio en componentes/páginas
 * 2. Toda data debe importarse desde acá
 * 3. Valores sensibles (teléfono, email) DEBEN venir de env vars
 * 4. Si necesitás un valor nuevo (precio, plazo, contacto), agregalo acá primero
 */

// ─────────────────────────────────────────────
// 🛠️ UTILITIES
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
// 🔒 ENVIRONMENT HELPERS
// ─────────────────────────────────────────────

function getEnv(key: string, fallback: string, required = false): string {
  const value = process.env[key]

  if (!value) {
    if (required && process.env.NODE_ENV === 'production') {
      throw new Error(`❌ Missing required env var: ${key}`)
    }
    if (process.env.NODE_ENV !== 'test') {
      console.warn(`⚠️  Env var ${key} not set, using fallback: ${fallback}`)
    }
    return fallback
  }

  return value
}

// ─────────────────────────────────────────────
// 🌐 SITE
// ─────────────────────────────────────────────

export const SITE = {
  name: 'Sitiazo',
  domain: 'sitiazo.cl',
  url: getEnv('NEXT_PUBLIC_SITE_URL', 'https://sitiazo.cl'),
  tagline: 'Páginas web que sí venden.',
  description:
    'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $79.990. Mobile-first, sin agencia grande.',
  shortDescription: 'Estudio de diseño web para pymes chilenas.',
  locale: 'es-CL',
  ogLocale: 'es_CL',
  currency: 'CLP',
} as const

// ─────────────────────────────────────────────
// 📞 CONTACT (todo viene de env vars)
// ─────────────────────────────────────────────

const RAW_WHATSAPP = getEnv('NEXT_PUBLIC_WHATSAPP_NUMBER', '56974236559')
const RAW_EMAIL = getEnv('NEXT_PUBLIC_EMAIL', 'hola@sitiazo.cl')
const RAW_CALCOM = getEnv('NEXT_PUBLIC_CALCOM_URL', 'https://cal.com/diego-sitiazo/30min')

export const CONTACT = {
  whatsappNumber: RAW_WHATSAPP,
  email: RAW_EMAIL,
  calcomUrl: RAW_CALCOM,
  whatsappDisplay: formatPhoneNumber(RAW_WHATSAPP),
  telephone: `+${RAW_WHATSAPP}`,
} as const

// ─────────────────────────────────────────────
// 💬 WHATSAPP MESSAGES
// ─────────────────────────────────────────────

export type WhatsAppContext =
  | 'home'
  | 'planes'
  | 'basico'
  | 'recomendado'
  | 'catalogo'
  | 'contacto'
  | 'caso-roma'
  | 'cotizacion'
  | 'duda'

// Static messages (no dependen de PLANS)
const STATIC_WHATSAPP_MESSAGES: Record<string, string> = {
  home: 'Hola Sitiazo! Vi su web y me interesa cotizar para mi pyme 🟡',
  planes: 'Hola! Quiero info sobre los planes de Sitiazo 🟡',
  contacto: 'Hola Sitiazo! Quiero conversar sobre un proyecto web 🟡',
  'caso-roma': 'Hola! Vi el caso de Roma Crochet y quiero algo así para mi pyme 🟡',
  cotizacion: 'Hola! Necesito una cotización para mi proyecto web 🟡',
  duda: 'Hola Sitiazo! Tengo una duda antes de cotizar 🟡',
}

export function whatsappLink(context: WhatsAppContext = 'contacto'): string {
  // Dynamic messages that include plan prices (resolved at call time)
  const dynamicMessages: Record<string, () => string> = {
    basico: () =>
      `Hola! Me interesa el plan Básico (${PLANS.basico.priceFormatted}). ¿Podemos conversar? 🟡`,
    recomendado: () =>
      `Hola! Me interesa el plan Recomendado (${PLANS.recomendado.priceFormatted}). ¿Podemos conversar? 🟡`,
    catalogo: () =>
      `Hola! Me interesa el plan Catálogo (${PLANS.catalogo.priceFormatted}). Quisiera más detalles 🟡`,
  }

  const message =
    dynamicMessages[context]?.() ?? STATIC_WHATSAPP_MESSAGES[context]
  return `https://wa.me/${RAW_WHATSAPP}?text=${encodeURIComponent(message)}`
}

// ─────────────────────────────────────────────
// 📧 EMAIL
// ─────────────────────────────────────────────

export type EmailContext =
  | 'general'
  | 'cotizacion'
  | 'caso-estudio'
  | 'colaboracion'
  | 'soporte'

const EMAIL_SUBJECTS: Record<EmailContext, string> = {
  general: 'Consulta desde sitiazo.cl',
  cotizacion: 'Cotización para mi proyecto web',
  'caso-estudio': 'Vi su caso destacado en sitiazo.cl',
  colaboracion: 'Propuesta de colaboración',
  soporte: 'Soporte técnico - cliente',
}

export function emailLink(context: EmailContext = 'general'): string {
  const subject = EMAIL_SUBJECTS[context]
  return `mailto:${RAW_EMAIL}?subject=${encodeURIComponent(subject)}`
}

// ─────────────────────────────────────────────
// 📅 CAL.COM
// ─────────────────────────────────────────────

export function calLink(): string {
  return RAW_CALCOM
}

// ─────────────────────────────────────────────
// 🔗 URL HELPERS
// ─────────────────────────────────────────────

export function siteUrl(path = ''): string {
  const base = SITE.url.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return path === '' ? base : `${base}${cleanPath}`
}

// ─────────────────────────────────────────────
// 📱 SOCIAL MEDIA
// ─────────────────────────────────────────────

export const SOCIAL = {
  instagram: {
    handle: '@sitiazo.cl',
    url: 'https://instagram.com/sitiazo.cl',
  },
  tiktok: {
    handle: '@sitiazo.cl',
    url: 'https://tiktok.com/@sitiazo.cl',
  },
} as const

// ─────────────────────────────────────────────
// 💰 PLAN PRICES (standalone constants)
// ─────────────────────────────────────────────

const PRICE_BASICO = 79_990
const PRICE_RECOMENDADO = 129_990
const PRICE_CATALOGO = 199_990
export const HOSTING_PRICE = 9_990

// ─────────────────────────────────────────────
// 💰 PLANS (single source of truth para precios)
// ─────────────────────────────────────────────

export type PlanId = 'basico' | 'recomendado' | 'catalogo'

export interface Plan {
  id: PlanId
  name: string
  tag: string
  badge?: string
  price: number
  priceFormatted: string
  priceShort: string
  hostingMonthly: number
  hostingFormatted: string
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
    price: PRICE_BASICO,
    priceFormatted: formatCLP(PRICE_BASICO),
    priceShort: '$80K',
    hostingMonthly: HOSTING_PRICE,
    hostingFormatted: formatCLP(HOSTING_PRICE) + '/mes',
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
    price: PRICE_RECOMENDADO,
    priceFormatted: formatCLP(PRICE_RECOMENDADO),
    priceShort: '$130K',
    hostingMonthly: HOSTING_PRICE,
    hostingFormatted: formatCLP(HOSTING_PRICE) + '/mes',
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
    price: PRICE_CATALOGO,
    priceFormatted: formatCLP(PRICE_CATALOGO),
    priceShort: '$200K',
    hostingMonthly: HOSTING_PRICE,
    hostingFormatted: formatCLP(HOSTING_PRICE) + '/mes',
    deliveryDays: 14,
    deliveryLabel: '14 días hábiles',
    pages: 'Hasta 10 páginas',
    description: 'Para tiendas, estéticas y servicios premium.',
    features: [
      'Hasta 10 productos o servicios',
      'Fichas con foto y precio',
      'Filtros y búsqueda',
      'Cal.com integrado',
      'SEO local + Schema.org',
      'Entrega en 14 días hábiles',
    ],
    ctaText: 'Cotizar Catálogo →',
    whatsappContext: 'catalogo',
  },
}

export function getPlan(id: PlanId): Plan {
  return PLANS[id]
}

export const PLANS_ARRAY: Plan[] = [
  PLANS.basico,
  PLANS.recomendado,
  PLANS.catalogo,
]

export const STARTING_PRICE = PLANS.basico.priceFormatted
export const STARTING_PRICE_SHORT = PLANS.basico.priceShort

// ─────────────────────────────────────────────
// ➕ EXTRAS
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
// 👥 TEAM
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
    bio: 'Estudiante de Ingeniería Civil en Computación en la Universidad de Talca y CEO de Sitiazo. Construyo webs como hobby y sustento para mis estudios. Ya he construido páginas para algunas pymes: CVListo (cvlisto.cl), RomaCrochet (romacrochet.cl). Vivo en el Maule. Disfruto de la computación, el diseño y resolver problemas con el mínimo de código posible.',
  },
  {
    name: 'Cristian',
    role: 'CEO',
    figLabel: 'fig. 02',
    bio: 'Estudia Ingeniería Civil en Minas en la Universidad de Talca y es CEO de Sitiazo. Sabe de computación tanto como de números. Construyó OasisVIP (oasisvip.cl), plataforma para Explora perfiles VIP verificados por ciudad en Chile — privada, discreta y enfocada en una experiencia clara y segura para adultos. En Sitiazo colabora en proyectos y ayuda a que cada entrega salga limpia y a tiempo.',
  },
]

// ─────────────────────────────────────────────
// 🏢 LEGAL & BUSINESS
// ─────────────────────────────────────────────

export const LEGAL = {
  ownerName: 'Diego Cancino',
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
// 🔍 SEO DEFAULTS
// ─────────────────────────────────────────────

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Sitiazo.cl',
  defaultTitle: `${SITE.name}.cl — ${SITE.tagline}`,
  defaultDescription: SITE.description,

  ogImage: {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: `${SITE.name}.cl — ${SITE.tagline}`,
  },
} as const

// ─────────────────────────────────────────────
// 📅 BUSINESS HOURS
// ─────────────────────────────────────────────

export const BUSINESS_HOURS = {
  timezone: 'America/Santiago',
  responseTime: {
    whatsapp: 'horas hábiles',
    email: '24 horas hábiles',
  },
} as const

// ─────────────────────────────────────────────
// 🎨 BRAND ASSETS
// ─────────────────────────────────────────────

export const BRAND = {
  logo: {
    black: '/images/logo/logo-black-letras.png',
    white: '/images/logo/logo-white-letras.png',
  },
} as const

// ─────────────────────────────────────────────
// 📋 SCHEMA (JSON-LD)
// ─────────────────────────────────────────────

export const SCHEMA = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE.name}.${SITE.domain.split('.')[1]}`,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.telephone,
    email: CONTACT.email,
    address: LEGAL.address,
    priceRange: `${PLANS.basico.priceFormatted} - ${PLANS.catalogo.priceFormatted}`,
    image: `${SITE.url}/og-image.png`,
    areaServed: LEGAL.serviceArea,
    founder: {
      '@type': 'Person',
      name: LEGAL.ownerName,
    },
    sameAs: [SOCIAL.instagram.url, SOCIAL.tiktok.url],
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE.name}.${SITE.domain.split('.')[1]}`,
    url: SITE.url,
  },
} as const

// ─────────────────────────────────────────────
// 🚨 RUNTIME VALIDATION (en dev)
// ─────────────────────────────────────────────

if (process.env.NODE_ENV === 'development') {
  if (RAW_WHATSAPP === '56900000000' || RAW_WHATSAPP === '569XXXXXXXX') {
    console.warn(
      '⚠️  WHATSAPP NUMBER IS A PLACEHOLDER! Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local',
    )
  }
  if (RAW_EMAIL.includes('cvlisto') || RAW_EMAIL === 'hola@example.com') {
    console.warn(
      '⚠️  EMAIL IS INCORRECT! Set NEXT_PUBLIC_EMAIL in .env.local',
    )
  }
  if (!RAW_CALCOM.startsWith('https://cal.com/')) {
    console.warn('⚠️  CALCOM URL might be invalid:', RAW_CALCOM)
  }
}
