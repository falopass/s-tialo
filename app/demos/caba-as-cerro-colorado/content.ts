/**
 * app/demos/caba-as-cerro-colorado/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre, dirección (Lago Colbún – Ruta 115, Vilches, San Clemente),
 *   teléfono/WhatsApp (+56 9 7596 8288), nota 4,6★ y 27 reseñas,
 *   check-in 13:30 / check-out 10:30, amenities (Wi-Fi, estacionamiento,
 *   pet-friendly, cocina equipada, traslado al aeropuerto, no fumar):
 *   ficha pública de Google Maps. El «sitio web» de la ficha es su
 *   propio wa.me — no tienen página.
 * - Anfitriones (Patricia, Luis, Natalia) y atractivos cercanos (lago
 *   Colbún, Paso Pehuenche, Piedra en el aire, Saltos del Lircay):
 *   mencionados en las reseñas reales de la ficha.
 * - Reseñas citadas: textos originales en español de su ficha de Google.
 * - Fotos en /demos/caba-as-cerro-colorado: subidas por el negocio y sus
 *   huéspedes a la ficha de Google.
 * Textos de descripción de secciones son de muestra, basados en las
 * fotos, los amenities de la ficha y las reseñas.
 */

export const BIZ = {
  name: 'Cabañas Cerro Colorado',
  short: 'Cerro Colorado',
  rubro: 'Cabañas y alojamiento',
  address: 'Ruta 115, sector Lago Colbún',
  city: 'Vilches, San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7596 8288',
  phoneTel: '+56975968288',
  whatsapp: '56975968288',
  rating: '4,6',
  reviews: 27,
  checkIn: '13:30',
  checkOut: '10:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Cerro Colorado y quiero reservar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Cerro Colorado, Ruta 115, Vilches, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Cerro Colorado, Vilches, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/caba-as-cerro-colorado'
