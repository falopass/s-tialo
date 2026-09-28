/**
 * app/demos/pasteleria-paris-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps «Pastelería Paris»,
 * Talca — distinta del Café París de 2 Poniente, que es otro negocio):
 * dirección (24 Oriente 1381, sector 2 y 3 Norte), WhatsApp (+56 9 7283 0585),
 * horario, 4.9 estrellas con 42 reseñas, Instagram @pasteleria.paristalca y
 * las fotos son las de su propio Instagram. Los productos nombrados son los
 * que aparecen en sus fotos y reseñas (pie de limón, brazos de reina,
 * empolvados, tortas de hoja manjar, trufas, berlines, cocadas).
 */

export const BIZ = {
  name: 'Pastelería Paris',
  short: 'Pastelería Paris',
  rubro: 'Pastelería artesanal',
  address: '24 Oriente 1381',
  sector: '2 y 3 Norte',
  addressFull: '24 Oriente 1381, entre 2 y 3 Norte, Talca, Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7283 0585',
  phoneTel: '+56972830585',
  whatsapp: '56972830585',
  instagram: 'https://www.instagram.com/pasteleria.paristalca',
  rating: 4.9,
  reviews: 42,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pastelería Paris y quiero hacer un pedido',
)}`

export const WA_LINK_ENCARGO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pastelería Paris y quiero encargar una torta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pastelería Paris, 24 Oriente 1381, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pastelería Paris, 24 Oriente 1381, Talca, Maule, Chile',
)}&output=embed`

// Horario real de la ficha de Google Maps
export const HOURS = [
  { d: 'Lunes a sábado', h: '9:00 – 20:30' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const IMG = '/demos/pasteleria-paris-talca'
