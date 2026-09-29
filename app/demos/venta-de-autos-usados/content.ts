/**
 * app/demos/venta-de-autos-usados/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada
 * 2026-09-29): el local se llama literalmente «Venta de Autos Usados»,
 * categoría Automoción, dirección Tres Sur 1512 (sector terminal de
 * Talca), teléfono +56 9 8568 2487, nota 5.0 con 1 reseña. La ficha no
 * publica horario ni fotos: las dos fotos del sector son capturas de
 * Google Street View (con atribución en el pie) y las ilustraciones de
 * vehículos van marcadas como bosquejo.
 */

export const BIZ = {
  name: 'Venta de Autos Usados',
  nameFull: 'Venta de Autos Usados · Tres Sur',
  rubro: 'Automoción · autos usados',
  address: 'Tres Sur 1512',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8568 2487',
  whatsapp: '56985682487',
  googleRating: 5.0,
  googleReviews: 1,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Venta de Autos Usados y quiero consultar por un vehículo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Venta de Autos Usados, Tres Sur 1512, Talca',
)}`

// Pin exacto de la ficha.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4306248,-71.6464859&z=16&output=embed'

export const IMG = '/demos/venta-de-autos-usados'
