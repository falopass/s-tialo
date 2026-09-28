/**
 * app/demos/beauty-love/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * rubro, dirección (Notre Damme 913, Molina), WhatsApp, Instagram
 * @beautylove_texia y el dato de que la ficha aún no tiene reseñas.
 * El pin del mapa usa las coordenadas de la ficha (la búsqueda por
 * nombre resuelve a un homónimo fuera de Chile). Servicios, textos y
 * la tabla de precios son contenido de muestra.
 */

export const BIZ = {
  name: 'Beauty Love',
  rubro: 'Salón de manicura y pedicura',
  address: 'Notre Damme 913',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4847 8561',
  whatsapp: '56948478561',
  instagram: 'beautylove_texia',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Beauty Love y quiero agendar una hora',
)}`

export const WA_LINK_DISENO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Beauty Love y quiero consultar por un diseño de uñas',
)}`

export const WA_LINK_PRECIOS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Beauty Love y quiero consultar valores',
)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/beautylove_texia'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Beauty+Love+Notre+Damme+913+Molina'

// Coordenadas de la ficha de Google — la búsqueda por dirección quedaba
// a nivel de ciudad y por nombre resolvía fuera de Chile.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.1162875%2C-71.2735979&z=17&hl=es&output=embed'

export const IMG = '/demos/beauty-love'
