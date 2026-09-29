/**
 * app/demos/kochu/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + el sitio
 * oficial kochu.cl, verificados 2026-09-29): nombre, rubro (restaurante,
 * restobar, sanguchería, cafetería y pastelería), dirección Boulevard
 * del Lago – sector Paula, teléfono, horario de fin de semana, nota 4.6
 * con 45 reseñas, las dos casas (Vichuquén y Curicó) y las reseñas
 * citadas. Las fotos de public/demos/kochu/ salen de su ficha de
 * Google Maps; el logo viene de kochu.cl.
 */

export const BIZ = {
  name: 'Kochü',
  nameFull: 'Kochü · Restaurante, Cafetería y Pastelería',
  rubro: 'Restaurante · Cafetería · Pastelería',
  address: 'Boulevard del Lago, sector Paula',
  city: 'Vichuquén',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7743 4755',
  whatsapp: '56977434755',
  instagram: 'kochu_cl',
  website: 'https://kochu.cl',
  googleRating: 4.6,
  googleReviews: 45,
  womenOwned: true,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Kochü y quiero consultar',
)}`

export const INSTAGRAM_URL = `https://instagram.com/${BIZ.instagram}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Kochü, Boulevard del Lago, Vichuquén, Maule',
)}`

// Coordenadas exactas de la ficha: el pin cae sobre el local.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-34.8445703,-72.0542427&z=16&output=embed'

export const IMG = '/demos/kochu'

// Horario tal cual sale en su ficha: cierran de lunes a jueves.
export const HORARIO = [
  { dia: 'Viernes', hora: '17:00 – 23:00' },
  { dia: 'Sábado', hora: '12:00 – 23:00' },
  { dia: 'Domingo', hora: '12:00 – 22:00' },
  { dia: 'Lun a Jue', hora: 'Cerrado' },
]
