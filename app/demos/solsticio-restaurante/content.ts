/**
 * app/demos/solsticio-restaurante/content.ts
 *
 * Datos del mockup. REALES: ficha de Google Maps ("Solsticio
 * Restaurante", Arturo Prat 571, Pelluhue — rating 4,6 con 154
 * reseñas), su sitio oficial solsticiorestaurante.cl (tagline
 * "Sabor & Sol", horario publicado y el PDF de su carta) y su
 * página de Facebook (solsticio.restaurante).
 *
 * La carta y precios vienen del menú PDF publicado por el propio
 * restaurante (marzo 2026). Las reseñas citadas son textuales de
 * su ficha. El rango $15.000–20.000 por persona es el de Maps.
 */

export const BIZ = {
  name: 'Solsticio',
  long: 'Solsticio Restaurante',
  rubro: 'Restaurante — cocina de mar',
  address: 'Arturo Prat 571',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phone: '56999394520',
  phoneDisplay: '+56 9 9939 4520',
  phoneAlt: '+56 9 8934 6638',
  web: 'solsticiorestaurante.cl',
  rating: 4.6,
  ratingLabel: '4,6',
  reviews: '154',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Solsticio y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Solsticio Restaurante, Arturo Prat 571, Pelluhue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Solsticio Restaurante, Arturo Prat 571, Pelluhue, Chile',
)}&output=embed`

export const IMG = '/demos/solsticio-restaurante'
