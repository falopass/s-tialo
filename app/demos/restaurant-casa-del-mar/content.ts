/**
 * app/demos/restaurant-casa-del-mar/content.ts
 *
 * Datos verificados del negocio:
 * - Google Maps: «Casa del Mar» — Costanera del Mar 1434, Constitución.
 *   Restaurant · 4,5 (807 reseñas) · CLP 15–20K · +56 9 5670 1696.
 *   Horario: mié–jue y dom 13:00–17:00, vie–sáb 13:00–17:30,
 *   lun y mar cerrado. Sitio web: facebook.com/RestoCasadelMar.
 *   Destacados de la carta: Pastel de Jaiba, Camarones Apanados;
 *   comensales destacan congrio, salmón y porciones generosas.
 * - Reseñas: textos reales de la ficha de Google.
 */

export const BIZ = {
  name: 'Casa del Mar',
  full: 'Restaurant Casa del Mar',
  rubro: 'Marisquería · cocina de mar',
  address: 'Costanera del Mar 1434, Constitución',
  city: 'Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5670 1696',
  phoneTel: '+56956701696',
  whatsapp: '56956701696',
  facebook: 'https://www.facebook.com/RestoCasadelMar/',
  fbUser: 'RestoCasadelMar',
  rating: 4.5,
  reviews: 807,
  price: '$15.000–20.000 por persona',
  hours: [
    ['Mié a jue y dom', '13:00 – 17:00'],
    ['Vie y sáb', '13:00 – 17:30'],
    ['Lun y mar', 'Cerrado'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casa del Mar y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casa del Mar y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Casa del Mar, Costanera del Mar 1434, Constitución, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Casa del Mar, Costanera del Mar 1434, Constitución, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-casa-del-mar'
