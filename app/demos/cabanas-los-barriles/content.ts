/**
 * app/demos/cabanas-los-barriles/content.ts
 *
 * Datos REALES verificados en la ficha de Google Maps de Cabañas
 * Los Barriles (Luis Cruz Martínez 2066, Molina) y en el letrero
 * del portón: nombre, dirección, teléfonos, equipamiento (wifi,
 * tv cable, totalmente equipadas), rating y reseñas. Los textos
 * de venta son de muestra.
 */

export const BIZ = {
  name: 'Cabañas Los Barriles',
  short: 'Los Barriles',
  rubro: 'Cabañas y alojamiento',
  address: 'Luis Cruz Martínez 2066',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9307 2813',
  phoneTel: '+56993072813',
  whatsapp: '56993072813',
  reviews: 134,
  rating: 4.7,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Los Barriles y quiero consultar disponibilidad',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Los Barriles, Luis Cruz Martínez 2066, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Los Barriles, Luis Cruz Martínez 2066, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-los-barriles'
