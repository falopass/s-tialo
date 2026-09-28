/**
 * app/demos/constructora-valdes/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre («Constructora Valdes EIRL»), teléfono/WhatsApp y horario
 *   (Lun–Vie 8:30–18:00): ficha pública de Google Maps.
 * - Logo en /demos/constructora-valdes: subido por el negocio a su
 *   ficha de Google («Construcción · Obras menores»).
 * - Comuna: San Clemente (la ficha no muestra calle; el registro
 *   público de la EIRL indica sector Queri, San Clemente).
 * - Sin reseñas en Google: no se muestra sección de opiniones.
 * Servicios, pasos y zonas: de muestra, acordes al giro «obras
 * menores» que declara su propio logo.
 */

export const BIZ = {
  name: 'Constructora Valdes',
  legal: 'Constructora Valdes EIRL',
  short: 'Valdes',
  rubro: 'Construcción · Obras menores',
  address: 'Sector Queri',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8459 6816',
  phoneTel: '+56984596816',
  whatsapp: '56984596816',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Constructora Valdes y quiero cotizar una obra',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Constructora Valdes EIRL, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Constructora Valdes EIRL, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/constructora-valdes'
