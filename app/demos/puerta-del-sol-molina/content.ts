/**
 * app/demos/puerta-del-sol-molina/content.ts
 *
 * Datos REALES verificados (29-09-2026):
 * - Ficha de Google Maps: "Puerta del Sol Molina", categoría Hotel,
 *   C. Aromo 1576, Molina; teléfono +56 9 8742 8715; rating 5,0.
 * - Enlace público de la ficha a Booking.com (hostal con departamentos:
 *   piscina, estacionamiento gratuito, Wi-Fi, aire acondicionado,
 *   jardín y terraza, según su publicación en Booking).
 * - Fotos: descargadas de la ficha de Maps (fachada con letrero,
 *   patio del edificio amarillo, terraza techada, quincho del jardín,
 *   living, dormitorios y cocina).
 */

export const BIZ = {
  name: 'Puerta del Sol Molina',
  rubro: 'Hostal y departamentos',
  address: 'Calle Aromo 1576',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8742 8715',
  phoneTel: '+56987428715',
  whatsapp: '56987428715',
  rating: 5.0,
  ratingLabel: '5,0',
  booking: 'https://www.booking.com/Share-nMsmF0',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar por alojamiento en Puerta del Sol Molina',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Puerta del Sol Molina, Calle Aromo 1576, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Puerta del Sol Molina, Calle Aromo 1576, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/puerta-del-sol-molina'

/** Amenidades publicadas en su ficha de Booking */
export const AMENIDADES = [
  'Piscina',
  'Estacionamiento gratuito',
  'Wi-Fi gratis',
  'Aire acondicionado',
  'Jardín y terraza',
  'Departamentos con cocina',
] as const

export const ESPACIOS = [
  {
    src: `${IMG}/patio.webp`,
    nombre: 'El patio del edificio amarillo',
    detalle: 'El corazón del hostal: patio pavimentado con máscaras en el muro y mesas al sol.',
    alt: 'Patio interior del hostal con edificio amarillo y máscaras decorativas en la pared',
  },
  {
    src: `${IMG}/terraza.webp`,
    nombre: 'Terraza techada',
    detalle: 'Quincho con parrilla para el asado de la tarde, al lado del jardín.',
    alt: 'Terraza techada del hostal con mesa de madera y jardín al fondo',
  },
  {
    src: `${IMG}/living.webp`,
    nombre: 'Living compartido',
    detalle: 'Sillones, estufa y la biblioteca de los que se quedan más de una noche.',
    alt: 'Living del hostal con sillones y estufa a leña',
  },
  {
    src: `${IMG}/dormitorio.webp`,
    nombre: 'Dormitorios',
    detalle: 'Camas con ropa de cama incluida, veladores y ventanas al jardín.',
    alt: 'Dormitorio del hostal con cama de dos plazas y veladores',
  },
  {
    src: `${IMG}/dormitorio2.webp`,
    nombre: 'Más camas',
    detalle: 'Piezas simples y matrimoniales; algunas con vista al patio.',
    alt: 'Dormitorio con cama azul y ventana al jardín',
  },
  {
    src: `${IMG}/cocina.webp`,
    nombre: 'Cocina de los departamentos',
    detalle: 'Cocina equipada con mesa de comedor para los que llegan por varios días.',
    alt: 'Cocina equipada del departamento con mesa de comedor',
  },
] as const
