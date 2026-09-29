/**
 * app/demos/club-formas/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + fotos de su propio
 * perfil): nombre, dirección Yerbas Buenas 1574, Molina, teléfono
 * +56 9 4423 3979, horario L–V 9:00–23:00 / Sáb 10:00–14:00 / Dom
 * cerrado, nota 4,7 con 53 opiniones y las reseñas citadas en
 * español. El entrenador es Juan — los socios lo nombran en las
 * reseñas. "El más económico de Molina" sale de las reseñas, no de
 * una tarifa publicada: no se publican precios.
 * Los servicios/zonas y los textos son de muestra para mostrar cómo
 * se vería el sitio.
 */

export const BIZ = {
  name: 'Club Formas',
  short: 'Club Formas',
  rubro: 'Gimnasio',
  address: 'Yerbas Buenas 1574',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4423 3979',
  phoneTel: '+56944233979',
  whatsapp: '56944233979',
  rating: 4.7,
  ratingLabel: '4,7',
  reviews: 53,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Club Formas, quiero preguntar por la membresía del gimnasio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Club Formas, Yerbas Buenas 1574, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Yerbas Buenas 1574, Molina, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/club-formas'
