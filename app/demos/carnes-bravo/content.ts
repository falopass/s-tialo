/**
 * app/demos/carnes-bravo/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * rubro (carnicería), dirección (Camino Bajo Las Ánimas s/n, Molina),
 * teléfono/WhatsApp (+56 9 6618 4645), horario, rating 4.1 con 7
 * reseñas y los textos de esas reseñas. Las fotos son las publicadas
 * por el propio negocio en su ficha. Lo demás — textos y
 * descripciones — es contenido de muestra.
 */

export const BIZ = {
  name: 'Carnes Bravo',
  short: 'Carnes Bravo',
  rubro: 'Carnicería',
  address: 'Camino Bajo Las Ánimas s/n',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6618 4645',
  phoneTel: '+56966184645',
  whatsapp: '56966184645',
  rating: '4.1',
  reviews: 7,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Carnes Bravo y quiero pedir carne',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Carnes Bravo, Camino Bajo Las Animas, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Camino Bajo Las Animas, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/carnes-bravo'
