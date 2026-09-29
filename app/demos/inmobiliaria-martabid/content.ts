/**
 * app/demos/inmobiliaria-martabid/content.ts
 *
 * Datos del mockup. REALES (fuentes públicas verificadas):
 * - Ficha Google Maps: «Inmobiliaria Martabid Spa», empresa
 *   constructora, C. Las Quilas 1535, Temuco — rating 3,9 con
 *   75 reseñas, horario Lu-Vi 9:00-13:00 / 15:00-18:00.
 * - martabid.cl: teléfono (45) 273 2900, contacto@martabid.cl,
 *   WhatsApp corporativo +56 9 5665 7388, oficinas y salas de
 *   venta en Chillán, Los Ángeles, Temuco, Villarrica, Valdivia,
 *   Osorno y Puerto Montt.
 * - Proyectos y precios publicados en martabid.cl (sep. 2026):
 *   Volcán Villarrica desde 1.990 UF (2-3D, Villarrica) y
 *   Jardines del Sur desde 2.099 UF (3D, Osorno), ambos con
 *   entrega inmediata. Direcciones de salas de venta: del sitio.
 * - Instagram @martabid.cl (~24 mil seguidores), Facebook
 *   martabid.chile.
 * Fotos y logo: descargados del sitio oficial martabid.cl.
 * Reseñas: solo se muestra rating y conteo de Google; no hay
 * citas porque el texto no pudo verificarse.
 */

export const BIZ = {
  name: 'Inmobiliaria Martabid',
  short: 'Martabid',
  rubro: 'Inmobiliaria y constructora',
  address: 'C. Las Quilas 1535',
  city: 'Temuco',
  region: 'Región de La Araucanía',
  phoneDisplay: '(45) 273 2900',
  phoneTel: '+56452732900',
  whatsapp: '56956657388',
  email: 'contacto@martabid.cl',
  web: 'https://www.martabid.cl',
  instagram: 'https://www.instagram.com/martabid.cl/',
  facebook: 'https://www.facebook.com/martabid.chile',
  googleRating: '3,9',
  googleReviews: '75',
  hours: 'Lun–Vie 9:00–13:00 y 15:00–18:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Gracias por comunicarte con Martabid. Cuéntanos en qué proyecto te podemos ayudar.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Inmobiliaria Martabid Spa, Las Quilas 1535, Temuco, Araucanía, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Inmobiliaria Martabid Spa, Las Quilas 1535, Temuco, Araucanía, Chile',
)}&output=embed`

export const IMG = '/demos/inmobiliaria-martabid'
