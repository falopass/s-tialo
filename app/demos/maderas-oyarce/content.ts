/**
 * app/demos/maderas-oyarce/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + su Instagram
 * @maderasoyarce y su sitio maderasoyarce.cl): nombre, rubro, dirección
 * en Camino a Colín (Maule), teléfonos, rating 5,0 con 7 opiniones,
 * horario, despacho gratis en Talca y catálogo (cielo, piso, tinglado,
 * molduras, vigas, impregnada, dimensionadas, pilares laminados, casas
 * prefabricadas).
 */

export const BIZ = {
  name: 'Maderas Oyarce',
  rubro: 'Maderería y barraca',
  address: 'Camino a Colín s/n',
  city: 'Maule',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9289 1970',
  phoneTel: '+56992891970',
  whatsapp: '56992891970',
  instagram: 'https://www.instagram.com/maderasoyarce',
  instagramFollowers: '2.547',
  rating: '5,0',
  reviews: 7,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Maderas Oyarce y quiero cotizar madera para mi obra',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Maderas Oyarce, Camino a Colín, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Maderas Oyarce, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/maderas-oyarce'
