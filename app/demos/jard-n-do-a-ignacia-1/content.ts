/**
 * app/demos/jard-n-do-a-ignacia-1/content.ts
 *
 * Datos verificados en la ficha de Google Maps «Jardín Doña Ignacia 1»
 * (Veintiocho Sur 361, Talca): categoría centro de jardinería, teléfono,
 * nota 4.6 con 75 reseñas y horario todos los días 10–22. Las reseñas
 * citadas son reales de la ficha (plantas, tierra, orientación de la
 * dueña y envoltura de regalo).
 */

export const BIZ = {
  name: 'Jardín Doña Ignacia',
  nameFicha: 'Jardín Doña Ignacia 1',
  rubro: 'Centro de jardinería',
  address: 'Veintiocho Sur 361, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9926 9983',
  phoneTel: '+56999269983',
  whatsapp: '56999269983',
  rating: 4.6,
  reviews: 75,
  hours: [['Todos los días', '10:00 - 22:00']],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Jardín Doña Ignacia y quiero consultar por plantas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardín Doña Ignacia 1, Veintiocho Sur 361, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jardín Doña Ignacia 1, Veintiocho Sur 361, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/jard-n-do-a-ignacia-1'
