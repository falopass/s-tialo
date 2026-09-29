/**
 * app/demos/first-security/content.ts
 *
 * Datos del mockup. REALES: ficha de Google Maps de la sucursal Talca
 * (Dos Nte. 511, +56 32 238 3191, 4,4 estrellas en 15 reseñas,
 * "Servicio de seguridad", abre 9:00) y el sitio oficial
 * firstsecurity.cl de First Security SpA (30 años en Chile,
 * casa matriz Viña del Mar, servicios Seguridad Integral,
 * Seguridad Perimetral, Control de Acceso y Monitoreo Remoto
 * con centro de monitoreo; clientes publicados: COPEC, CMPC,
 * Lipigas, Abastible; eslogan "Vive tranquilo"). Logo y fotos
 * son los activos reales de firstsecurity.cl. La sucursal usa
 * teléfono fijo: el contacto del mockup es por llamada.
 */

export const BIZ = {
  name: 'First Security',
  legal: 'First Security SpA',
  rubro: 'Seguridad privada',
  address: 'Dos Nte. 511',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 32 238 3191',
  phoneTel: '+56322383191',
  reviews: 15,
  rating: '4,4',
  years: '30',
  site: 'firstsecurity.cl',
  callCenter: '600 3000 600',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'FIRST SECURITY, Dos Norte 511, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'FIRST SECURITY, Dos Norte 511, Talca, Chile',
)}&output=embed`

export const SITE_URL = 'https://www.firstsecurity.cl/'

export const IMG = '/demos/first-security'
