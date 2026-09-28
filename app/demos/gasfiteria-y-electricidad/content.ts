/**
 * app/demos/gasfiteria-y-electricidad/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre, rubro,
 * dirección en Mariposas centro (San Clemente), teléfono, rating 5,0 con
 * 5 reseñas, "Abierto las 24 horas" y las reseñas citadas abajo.
 * Sin logo ni redes propias: el nombre y sus fotos reales de trabajo
 * mandan. Los servicios descritos (gasfitería, electricidad, calefont,
 * riego) salen de la ficha y de sus propias fotos de obra.
 */

export const BIZ = {
  name: 'Gasfitería y Electricidad',
  short: 'G&E San Clemente',
  rubro: 'Gasfitería y electricidad a domicilio',
  address: 'Mariposas centro',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5726 5533',
  phoneTel: '+56957265533',
  whatsapp: '56957265533',
  rating: '5,0',
  reviews: 5,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Gasfitería y Electricidad y necesito un maestro',
)}`

export const WA_LINK_URGENTE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia de gasfitería o electricidad y necesito ayuda',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Gasfiteria Y Electricidad, Mariposas centro, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mariposas centro, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/gasfiteria-y-electricidad'
