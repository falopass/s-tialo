/**
 * app/demos/pixels-chile/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * rubro (taller de impresión y rotulación), dirección (Pasaje Haití
 * 170, Talca), teléfono/WhatsApp (+56 9 9935 7592), horario, rating
 * 4.8 con 6 reseñas y los textos de esas reseñas. Las fotos son las
 * publicadas por el propio negocio en su ficha. Lo demás — textos y
 * descripciones — es contenido de muestra.
 */

export const BIZ = {
  name: 'Pixels Chile',
  short: 'Pixels Chile',
  rubro: 'Impresión y rotulación',
  address: 'Pasaje Haití 170, 10 Sur con 7–8 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9935 7592',
  phoneTel: '+56999357592',
  whatsapp: '56999357592',
  rating: '4.8',
  reviews: 6,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pixels Chile y quiero cotizar un trabajo de impresión',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pixels Chile, Pasaje Haití 170, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pasaje Haití 170, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/pixels-chile'
