/**
 * app/demos/aroma-y-sabor-restorant/content.ts
 *
 * Datos del mockup. REALES: ficha de Google Maps ("Aroma y sabor
 * Restorant", Villa Rinconada Calle 1 N°4, Retiro — rating 4,4 con
 * 102 reseñas, rango $10.000–15.000 por persona). No tiene sitio ni
 * red social verificable; la marca es la viga tallada "AROMA & SABOR"
 * del propio salón, recortada de su foto real.
 *
 * Los platos citados salen de las reseñas de su ficha (ceviche,
 * cazuela de vacuno, salmón frito, mariscal, pastel de choclo,
 * empanadas, tragos). Sin precios por plato: la foto de "menú" que
 * circula en la ficha corresponde a otro local de la comuna, así que
 * solo se muestra el rango que publica Maps.
 */

export const BIZ = {
  name: 'Aroma y Sabor',
  long: 'Aroma y Sabor Restorant',
  rubro: 'Restaurant — picada de casa',
  address: 'Villa Rinconada, Calle 1 N°4',
  city: 'Retiro',
  region: 'Región del Maule',
  phone: '56944991711',
  phoneDisplay: '+56 9 4499 1711',
  rating: 4.4,
  ratingLabel: '4,4',
  reviews: '102',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Aroma y Sabor y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Aroma y sabor Restorant, Villa Rinconada Calle 1, Retiro, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Aroma y sabor Restorant, Villa Rinconada, Retiro, Chile',
)}&output=embed`

export const IMG = '/demos/aroma-y-sabor-restorant'
