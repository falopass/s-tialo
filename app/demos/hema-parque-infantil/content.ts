/**
 * app/demos/hema-parque-infantil/content.ts
 *
 * Datos REALES verificados en la ficha de Google Maps de HEMA
 * PARQUE INFANTIL (Av. San Miguel 4993, Talca): nombre, rubro,
 * dirección, teléfono, horario, rating y reseñas. Ojo: existe una
 * pyme homónima en Casablanca — esta ficha es la de Talca.
 */

export const BIZ = {
  name: 'HEMA Parque Infantil',
  short: 'HEMA',
  rubro: 'Parque infantil',
  address: 'Av. San Miguel 4993',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5229 6872',
  phoneTel: '+56952296872',
  whatsapp: '56952296872',
  reviews: 234,
  rating: 4.9,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de HEMA Parque Infantil y quiero consultar por horarios y entradas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'HEMA PARQUE INFANTIL, Av. San Miguel 4993, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'HEMA PARQUE INFANTIL, Av. San Miguel 4993, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/hema-parque-infantil'
